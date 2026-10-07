// Configuration propre à la langue : textes de l'interface, voix, IA, lecture.
// Le reste de l'app (js/app.js, store, sync, speech, ai) est commun aux apps de langues.
window.LANG = {
  id: 'es',
  appName: 'Hablemos',
  title: 'Hablemos · Espagnol',
  langNameFr: 'espagnol',
  locale: 'es-ES',
  storageKey: 'espanol-app-v1',
  syncFile: 'progress.json',
  dataRepo: 'RoyMusango/hablemos-data',
  pagesUrl: 'https://roymusango.github.io/hablemos/',
  siblings: [['Anglais', 'https://roymusango.github.io/letstalk/'], ['Néerlandais', 'https://roymusango.github.io/praten/']],

  defaults: { dailyMinutes: 30, level: 'A1-A2', newPerDay: 12, showTranslation: false },
  levels: ['A1', 'A1-A2', 'A2', 'A2-B1', 'B1'],

  nav: { today: 'Hoy', speak: 'Hablar', words: 'Palabras', verbs: 'Verbos', sounds: 'Sonidos', grammar: 'Gramática', read: 'Leer', progress: 'Progreso', settings: 'Ajustes' },
  t: {
    session: 'Tu sesión', priorities: 'Tus prioridades', wotd: 'Expresión del día', speakToday: 'Para hablar hoy',
    stepWords: 'Palabras', stepGrammar: 'Verbos y gramática', stepSpeak: 'Hablar',
    questions: 'Preguntas', speakAloud: 'A hablar', wellDone: '¡Muy bien!',
    review: 'Repaso', synonyms: 'Sinónimos', themes: 'Temas', inLang: 'En espagnol',
    conjugator: 'Conjugador', verbsEyebrow: 'Conjugaison',
    verbsLead: 'En mode intelligent, l’entraîneur insiste sur tes temps les plus faibles et te ressert les verbes que tu as ratés. Une question sur deux te donne seulement un repère temporel : à toi de choisir le bon temps.',
    soundsLead: 'Les sons qui trahissent un francophone. Écoute une voix native, répète, et le micro vérifie que tu es compris.',
    vocabPrioDefault: n => `${n} thèmes actifs, dont le technique (IA, banque, RAG) et le registre soutenu.`,
    startConv: '(Empieza la conversación.)',
    rescue: ['No entiendo, ¿puedes repetir?', '¿Cómo se dice … en español?', 'Es una cosa que sirve para…'],
    circumlocution: ['Es una cosa que sirve para…', 'Es un sitio donde…', 'Es una persona que…', 'Es como… pero…', '¿Cómo se dice « … » en español?'],
    lookupPlaceholder: 'ex. : se débrouiller, taux d’intérêt, hors-jeu',
  },
  courseThemesNote: 'Les thèmes marqués « Cours » viennent des supports de ton professeur.',
  grammarLinks: 'Pour approfondir : <a class="link" href="https://espanol.lingolia.com/fr/" target="_blank" rel="noopener">Lingolia</a> et <a class="link" href="https://www.espagnolfacile.com/" target="_blank" rel="noopener">Espagnol Facile</a>, recommandés par ton professeur.',

  normalize: {
    articles: /^(el|la|los|las|un|una|unos|unas)\s+/,
    pronouns: /^(yo|tú|tu|él|el|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes)\s+/,
  },

  voice: {
    accept: /^es([-_]|$)/i, defaultVariant: 'es-ES',
    title: 'Voix espagnole native', preferLabel: 'Espagne (recommandé)', otherLabel: 'Amérique latine',
    female: /elvira|ximena|abril|helena|laura|esperanza|irene|estrella|vera|triana|lia|elena|monica|mónica|paulina|google español$/i,
    male: /alvaro|álvaro|pablo|arnau|dario|darío|elias|elías|nil|saul|saúl|teo|alex|enrique|jorge|raul|raúl|diego|jordi/i,
    help: 'L’app n’utilise que des voix espagnoles natives, jamais une voix française qui lirait de l’espagnol. Les plus naturelles sont les voix neuronales de <b>Microsoft Edge</b> (Elvira, Álvaro…), gratuites. Dans Chrome, choisis « Google español ».',
    missing: 'Aucune voix espagnole disponible. Ouvre l’app dans Microsoft Edge (voix neuronales d’Espagne) ou Chrome (« Google español »).',
    onlyOther: 'Seules des voix d’Amérique latine sont disponibles. Pour l’accent d’Espagne, utilise Edge ou Chrome.',
    robotic: 'Voix d’Espagne disponible mais synthétique. Edge propose des voix neuronales bien plus naturelles.',
    testF: 'Hola, soy Montse, de la penya. ¿Desde cuándo eres del Barça?',
    testM: 'Buenos días. Cuénteme, ¿de qué trata exactamente su trabajo de fin de estudios?',
  },

  ai: {
    target: 'Spanish from Spain (use vosotros)',
    levelRules: lv => `Adapt to level ${lv}: short, clear sentences, frequent vocabulary. At most 2 or 3 sentences (about 35 words) per turn.`,
    errorTypes: 'conjugation, tense, ser/estar, gender, preposition, wrong word, gallicism, word order, register',
    readingLevel: 'slightly above his level so that he learns',
    lookupArticle: 'with the article for nouns',
    testSystem: 'Answer in one short sentence in Spanish.',
    testUser: 'Saluda a un estudiante belga, culé, que prepara su TFE sobre IA en la banca.',
  },

  priorityCats: { 'Erasmus & TFE': 2, 'Barça': 1.5 },
  wotdThemes: ['soutenu', 'supervivencia', 'conectores', 'banca', 'rag', 'ia', 'decision'],
  readTopics: [
    ['banca', 'Banque & IA', 'artificial intelligence in banking (fraud detection, credit risk, customer service)'],
    ['rag', 'RAG souverain', 'what a sovereign RAG is and why banks care (confidentiality, regulation, on-premise deployment)'],
    ['decision', 'Aide à la décision', 'data-driven decision making: optimisation, multi-criteria analysis, uncertainty'],
    ['tfe', 'Vie d’étudiant Erasmus', 'the life of an Erasmus student in Barcelona: university, flat, paperwork, leisure'],
    ['futbol', 'Barça', 'FC Barcelona: history, culé culture, La Masia, the atmosphere in the stadium'],
    ['cultura', 'Culture espagnole', 'Spanish customs: schedules, meals, festivals, Catalonia'],
  ],
  readLengths: [[120, 'Court'], [200, 'Moyen'], [320, 'Long']],
};
