// Appels IA : Gemini (gratuit via Google AI Studio) ou API compatible OpenAI (Groq, OpenRouter…).
(function (global) {
  const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta';
  // Modèles essayés si le modèle choisi est épuisé (429) ou introuvable (404)
  const GEMINI_FALLBACKS = ['gemini-flash-latest', 'gemini-flash-lite-latest', 'gemini-2.5-flash', 'gemini-2.5-flash-lite'];

  // Profil de l'apprenant, partagé par tous les prompts
  const PROFILE = `Perfil del estudiante: francófono (Bélgica), estudiante de ingeniería en inteligencia artificial y apoyo a la decisión. Va a hacer un Erasmus en España (Barcelona) donde realizará su trabajo de fin de estudios (TFE) sobre el sector bancario, con tutores españoles. Hizo unas prácticas de investigación sobre el diseño de un RAG soberano (generación aumentada por recuperación, con datos e infraestructura bajo control propio) aplicado al sistema bancario. Quiere trabajar en banca o finanzas. Es un gran aficionado del FC Barcelona.`;

  const TYPO = '\n\nTipografía: no uses nunca la raya larga ni el guion medio como signo de puntuación; usa comas, dos puntos o paréntesis.';

  function hasKey() {
    const s = Store.settings;
    return s.provider === 'gemini' ? !!s.geminiKey : !!(s.oaKey && s.oaBase);
  }

  function countRequest() { Store.day().requests++; Store.save(); }

  class AIError extends Error { constructor(msg, status) { super(msg); this.status = status; } }

  async function gemini(model, body) {
    const res = await fetch(`${GEMINI_URL}/models/${encodeURIComponent(model)}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': Store.settings.geminiKey },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new AIError((data.error && data.error.message) || res.statusText, res.status);
    const parts = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts;
    if (!parts) throw new AIError('Réponse vide (contenu bloqué ?)', 500);
    return parts.filter(p => !p.thought).map(p => p.text || '').join('');
  }

  async function callGemini(system, messages, schema) {
    const contents = messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }));
    const gen = { temperature: 0.8, thinkingConfig: { thinkingBudget: 0 } };
    if (schema) { gen.responseMimeType = 'application/json'; gen.responseSchema = schema; }
    const body = { systemInstruction: { parts: [{ text: system }] }, contents, generationConfig: gen };

    const chosen = Store.settings.geminiModel || GEMINI_FALLBACKS[0];
    const models = [chosen, ...GEMINI_FALLBACKS.filter(m => m !== chosen)];
    let lastErr;
    for (const model of models) {
      try {
        countRequest();
        try { return await gemini(model, body); }
        catch (e) {
          // Certains modèles refusent de désactiver la réflexion : on réessaie sans.
          if (e.status === 400 && /think/i.test(e.message)) {
            const b2 = structuredClone(body); delete b2.generationConfig.thinkingConfig;
            countRequest();
            return await gemini(model, b2);
          }
          throw e;
        }
      } catch (e) {
        lastErr = e;
        if (e.status === 429 || e.status === 404 || e.status === 503) { console.warn(`Modèle ${model} indisponible (${e.status}), essai suivant`); continue; }
        throw e;
      }
    }
    throw lastErr;
  }

  async function callOpenAI(system, messages, schema) {
    const s = Store.settings;
    countRequest();
    const sys = schema ? system + '\n\nRespond ONLY with a JSON object with this structure: ' + JSON.stringify(schemaToExample(schema)) : system;
    const res = await fetch(s.oaBase.replace(/\/$/, '') + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + s.oaKey },
      body: JSON.stringify({
        model: s.oaModel, temperature: 0.8,
        messages: [{ role: 'system', content: sys }, ...messages],
        ...(schema ? { response_format: { type: 'json_object' } } : {}),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new AIError((data.error && (data.error.message || data.error)) || res.statusText, res.status);
    return data.choices[0].message.content;
  }

  function schemaToExample(s) {
    if (s.type === 'OBJECT') return Object.fromEntries(Object.entries(s.properties).map(([k, v]) => [k, schemaToExample(v)]));
    if (s.type === 'ARRAY') return [schemaToExample(s.items)];
    if (s.type === 'BOOLEAN') return true;
    return s.enum ? s.enum.join('|') : (s.description || 'string');
  }

  // Retire les tirets longs si le modèle en produit quand même
  function clean(x) {
    if (typeof x === 'string') return x.replace(/\s*[—–]\s*/g, ', ').replace(/,\s*,/g, ',').replace(/^,\s*/gm, '');
    if (Array.isArray(x)) return x.map(clean);
    if (x && typeof x === 'object') return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, clean(v)]));
    return x;
  }

  async function chat(system, messages, schema) {
    if (!hasKey()) throw new AIError('Aucune clé API : va dans Réglages.', 401);
    const fn = Store.settings.provider === 'gemini' ? callGemini : callOpenAI;
    const text = await fn(system + TYPO, messages, schema);
    return clean(schema ? parseJSON(text) : text);
  }

  function parseJSON(text) {
    try { return JSON.parse(text); } catch (e) { }
    const m = text.match(/\{[\s\S]*\}/);
    if (m) { try { return JSON.parse(m[0]); } catch (e) { } }
    throw new AIError('Réponse IA illisible : ' + text.slice(0, 200), 500);
  }

  async function listGeminiModels() {
    const res = await fetch(`${GEMINI_URL}/models?pageSize=200`, { headers: { 'x-goog-api-key': Store.settings.geminiKey } });
    const data = await res.json();
    if (!res.ok) throw new AIError((data.error && data.error.message) || res.statusText, res.status);
    return (data.models || [])
      .filter(m => (m.supportedGenerationMethods || []).includes('generateContent') && /gemini/.test(m.name) && !/image|tts|embedding|audio|live/i.test(m.name))
      .map(m => ({ id: m.name.replace('models/', ''), label: m.displayName }));
  }

  // ---------- Conversation ----------
  const TOPIC_IDS = () => [...GRAMMAR.ORDER, ...Object.keys(GRAMMAR.EXTRA_TOPICS)];

  const CONV_SCHEMA = () => ({
    type: 'OBJECT',
    properties: {
      reply: { type: 'STRING', description: 'tu respuesta en español' },
      translation_fr: { type: 'STRING', description: 'traduction française de reply' },
      corrections: {
        type: 'ARRAY', items: {
          type: 'OBJECT', properties: {
            original: { type: 'STRING', description: 'fragmento erróneo del estudiante' },
            corrected: { type: 'STRING', description: 'versión correcta' },
            explication: { type: 'STRING', description: 'explication courte en français' },
            topic: { type: 'STRING', enum: TOPIC_IDS() },
          }, required: ['original', 'corrected', 'explication', 'topic'],
        },
      },
      vocab: {
        type: 'ARRAY', items: {
          type: 'OBJECT', properties: {
            es: { type: 'STRING' }, fr: { type: 'STRING' },
            syn: { type: 'ARRAY', items: { type: 'STRING' } },
          }, required: ['es', 'fr'],
        },
      },
      suggestion: { type: 'STRING', description: 'una respuesta posible y sencilla que el estudiante podría decir' },
    },
    required: ['reply', 'translation_fr', 'corrections', 'vocab', 'suggestion'],
  });

  function conversationSystem(scn, weakTopics, reviewWords) {
    const lv = Store.settings.level;
    const targets = (scn.targets || []).map(t => GRAMMAR.TOPICS[t] && `${GRAMMAR.TOPICS[t].label} (${t})`).filter(Boolean);
    const weak = weakTopics.map(t => GRAMMAR.TOPICS[t] ? GRAMMAR.TOPICS[t].label : t);
    return `Eres un compañero de conversación y profesor de español. Nivel del estudiante: ${lv} (estudió español hace años y está oxidado).
${PROFILE}

ESCENARIO (juego de rol): ${scn.role}
Te llamas ${scn.who}. Objetivo del estudiante: ${scn.goal}

REGLAS DE CONVERSACIÓN:
- Habla español de España (usa vosotros). Adapta tu nivel a ${lv}: frases cortas y claras. Máximo 2 o 3 frases (unas 35 palabras) por turno.
- El estudiante debe hablar MÁS que tú. Termina casi siempre con UNA pregunta abierta que le haga hablar.
- Provoca de forma natural el uso de: ${targets.length ? targets.join(', ') : 'temas variados'}. Sus puntos débiles actuales: ${weak.join(', ') || 'desconocidos'}.
- Palabras que está aprendiendo o suele olvidar: ${reviewWords.length ? reviewWords.join(', ') : '(ninguna)'}. Reutiliza 1 o 2 por turno cuando encajen, para que las oiga en contexto.
- Si escribe en francés o mezcla francés porque no encuentra una palabra, da la palabra española en "vocab" (con 1 a 3 sinónimos en "syn"), reformula su frase correctamente en tu respuesta y sigue la conversación.
- Si pregunta "¿cómo se dice...?" o "¿qué significa...?", contesta brevemente y vuelve al juego de rol.
- Si el contexto es formal (tutor, tribunal, banco, empresa) y usa un registro demasiado coloquial, añade en "corrections" una alternativa más formal con topic "registro".
- Mantente en el personaje. No presentes como verdaderos datos actuales que no conoces (resultados, fichajes, noticias, cifras): pregunta o habla en términos generales.

CORRECCIONES (campo "corrections"):
- Analiza SOLO el último mensaje del estudiante. Señala cada error real: conjugación, tiempo verbal, ser/estar, género, preposición, palabra incorrecta, galicismo, orden, registro.
- IGNORA tildes, mayúsculas y puntuación (el texto viene del reconocimiento de voz). No corrijas lo que está bien. Si no hay errores, lista vacía.
- "explication" en francés, muy corta (máx. 20 palabras). "topic" = el punto más cercano.

"vocab": 0 a 3 palabras útiles nuevas de tu respuesta o que el estudiante necesitaba (es, fr, syn).
"suggestion": una respuesta posible, corta y de su nivel, por si se bloquea.
"translation_fr": traducción francesa de tu "reply".`;
  }

  async function converse(scn, history, weakTopics, reviewWords = []) {
    return chat(conversationSystem(scn, weakTopics, reviewWords), history, CONV_SCHEMA());
  }

  // ---------- Lecture guidée ----------
  const READ_SCHEMA = {
    type: 'OBJECT', properties: {
      title: { type: 'STRING' },
      text: { type: 'STRING', description: 'texto en español; párrafos separados por una línea en blanco' },
      glossary: { type: 'ARRAY', items: { type: 'OBJECT', properties: { es: { type: 'STRING', description: 'forma exacta tal como aparece en el texto' }, fr: { type: 'STRING' } }, required: ['es', 'fr'] } },
      questions: { type: 'ARRAY', items: { type: 'STRING' } },
    }, required: ['title', 'text', 'glossary', 'questions'],
  };

  async function reading(topic, length, reviewWords) {
    const lv = Store.settings.level;
    const sys = `Eres profesor de español de España. Escribe un texto original para un estudiante de nivel ${lv}, subiendo ligeramente el nivel para que aprenda.
${PROFILE}
Tema: ${topic}. Longitud: unas ${length} palabras, en 2 a 4 párrafos. Frases claras, vocabulario útil y real del ámbito. No inventes datos actuales presentados como hechos (resultados, noticias, cifras reales): puede ser un texto divulgativo, un correo, un diálogo o una historia.
Si encajan, usa algunas de estas palabras que el estudiante repasa: ${reviewWords.join(', ') || '(ninguna)'}.
"glossary": 8 a 12 palabras o expresiones clave del texto (forma exacta tal como aparece) con traducción francesa.
"questions": 3 preguntas de comprensión abiertas en español y una cuarta pregunta personal para que hable de su experiencia.`;
    return chat(sys, [{ role: 'user', content: 'Escribe el texto.' }], READ_SCHEMA);
  }

  const FEEDBACK_SCHEMA = () => ({
    type: 'OBJECT', properties: {
      items: {
        type: 'ARRAY', items: {
          type: 'OBJECT', properties: {
            ok: { type: 'BOOLEAN', description: 'respuesta comprensible y correcta en cuanto al contenido' },
            comment: { type: 'STRING', description: 'comentario corto en francés' },
            better: { type: 'STRING', description: 'versión corregida y natural de la respuesta, en español' },
            topic: { type: 'STRING', enum: TOPIC_IDS() },
          }, required: ['ok', 'comment', 'better', 'topic'],
        },
      },
    }, required: ['items'],
  });

  async function readingFeedback(text, questions, answers) {
    const sys = `Eres profesor de español. Evalúa las respuestas de un estudiante francófono (nivel ${Store.settings.level}) a preguntas sobre un texto. Para cada respuesta: "ok" (contenido correcto), "comment" en francés (máx. 25 palabras, señala el error de lengua principal si lo hay), "better" (su respuesta corregida y natural), "topic" (punto de gramática del error principal, o "vocabulario"). Ignora tildes y puntuación (puede venir del reconocimiento de voz).`;
    const content = 'TEXTO:\n' + text + '\n\n' + questions.map((q, i) => `PREGUNTA ${i + 1}: ${q}\nRESPUESTA: ${answers[i] || '(sin respuesta)'}`).join('\n\n');
    return chat(sys, [{ role: 'user', content }], FEEDBACK_SCHEMA());
  }

  // ---------- Bouée ----------
  const LOOKUP_SCHEMA = {
    type: 'OBJECT', properties: {
      results: { type: 'ARRAY', items: { type: 'OBJECT', properties: { es: { type: 'STRING' }, fr: { type: 'STRING' }, note: { type: 'STRING' } }, required: ['es', 'fr'] } },
      synonyms: { type: 'ARRAY', items: { type: 'STRING' } },
      example: { type: 'STRING' },
      circumlocution: { type: 'STRING', description: 'comment décrire le mot sans le connaître, en espagnol simple' },
    }, required: ['results', 'synonyms', 'example', 'circumlocution'],
  };

  async function lookup(query) {
    const sys = `Tu es un dictionnaire bilingue français-espagnol (Espagne) pour un apprenant A1-A2 qui étudie l'IA, l'aide à la décision et la finance. L'utilisateur donne un mot ou une expression (français ou espagnol). Donne : "results" (1 à 3 traductions espagnoles courantes, avec article si nom ; "fr" = sens en français ; "note" = registre ou nuance courte en français, ex. courant, soutenu, technique, familier), "synonyms" (2 à 5 synonymes espagnols ou mots proches, du plus courant au plus soutenu), "example" (une phrase d'exemple simple en espagnol), "circumlocution" (une façon simple de dire la chose en espagnol si on oublie le mot, ex. "Es una cosa que sirve para...").`;
    return chat(sys, [{ role: 'user', content: query }], LOOKUP_SCHEMA);
  }

  async function sessionReview(transcript, corrections) {
    const sys = `Eres profesor de español. Escribe en FRANCÉS un bilan court (máx. 120 palabras) de la conversación de un estudiante de nivel ${Store.settings.level}: 2 puntos positivos, 3 prioridades concretas (con un ejemplo corregido cada una) y 3 frases útiles en español para reutilizar. Formato: texto simple, una idea por línea, sin markdown.`;
    const content = 'Transcription :\n' + transcript + '\n\nErreurs relevées :\n' + corrections.map(c => `${c.original} → ${c.corrected} (${c.explication})`).join('\n');
    return chat(sys, [{ role: 'user', content }]);
  }

  global.AI = { hasKey, chat, converse, reading, readingFeedback, lookup, sessionReview, listGeminiModels, AIError };
})(window);
