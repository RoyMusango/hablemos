// Leçons animées : une par point de grammaire (même identifiant que dans grammar.js).
// Les sous-titres (fr) sont en français ; les phrases en espagnol sont lues par une voix native d'Espagne.
// Dans une phrase, *mot* est surligné ; dans un tableau, « habl|o » sépare radical et terminaison.
// Scènes : title, ex, conj, timeline, vs, tip, move, quiz (voir js/media.js).
window.LESSONS = {
  presente: {
    yt: 'espagnol présent de l’indicatif cours',
    scenes: [
      { t: 'title', h: 'Le présent', sub: 'Parler de ton quotidien, de tes études, de tes goûts', fr: 'Le présent sert à décrire ce que tu fais d’habitude et ce qui est vrai maintenant.' },
      { t: 'conj', verb: 'habl|ar', vfr: 'parler', rows: [['yo', 'habl|o'], ['tú', 'habl|as'], ['él / ella / usted', 'habl|a'], ['nosotros', 'habl|amos'], ['vosotros', 'habl|áis'], ['ellos / ustedes', 'habl|an']], fr: 'On enlève -ar et on ajoute la terminaison. Le pronom est souvent omis : la terminaison suffit à dire qui parle.' },
      { t: 'conj', verb: 'com|er', vfr: 'manger', rows: [['yo', 'com|o'], ['tú', 'com|es'], ['él / ella', 'com|e'], ['nosotros', 'com|emos'], ['ellos', 'com|en']], fr: 'Pour -er, le a devient e. Les verbes en -ir font pareil, sauf vivimos et vivís.' },
      { t: 'ex', h: 'Les verbes qui changent de voyelle', ex: [['*Quiero* un café con leche.', 'e devient ie'], ['¿*Puedes* repetir, por favor?', 'o devient ue'], ['Los sábados *juego* al fútbol.', 'u devient ue']], fr: 'Certains verbes changent de voyelle sous l’accent, mais jamais avec nosotros et vosotros : queremos, podemos.' },
      { t: 'quiz', q: 'Nosotros ___ en Barcelona.', hint: 'vivir, présent', opts: ['vivimos', 'vivemos', 'viven'], a: 'vivimos', expl: 'Verbe en -ir : nosotros vivimos.', fr: 'À toi. Choisis la bonne forme.' },
      { t: 'ex', h: 'Un « yo » irrégulier', ex: [['*Tengo* clase a las nueve.'], ['*Hago* mi TFE sobre la IA en la banca.'], ['*Salgo* con mis amigos los viernes.'], ['No *sé* la respuesta.']], fr: 'Certains verbes sont irréguliers seulement à la première personne : tengo, hago, salgo, sé, conozco, pongo.' },
      { t: 'quiz', q: 'Normalmente ___ la cena a las nueve.', hint: 'hacer, présent, yo', opts: ['hago', 'haco', 'hace'], a: 'hago', fr: 'Encore une.' },
      { t: 'tip', tip: 'Trois verbes à connaître par cœur : <b>ser</b> (soy, eres, es…), <b>estar</b> (estoy, estás, está…) et <b>ir</b> (voy, vas, va…).', ex: [['*Soy* belga y *estoy* en Barcelona.'], ['Mañana *voy* al Camp Nou.']], fr: 'Répète ces deux phrases à voix haute : elles reviennent dans toutes tes conversations.' },
    ],
  },

  ser_estar: {
    yt: 'ser ou estar espagnol cours',
    scenes: [
      { t: 'title', h: 'Ser ou estar', sub: 'Deux verbes pour « être »', fr: 'Le français n’a qu’un verbe être, l’espagnol en a deux. Voici comment choisir sans hésiter.' },
      { t: 'vs', a: { h: 'SER', sub: 'ce que c’est : identité, origine, métier, caractère, heure', ex: [['*Soy* belga.'], ['Mi tutor *es* muy simpático.'], ['*Son* las tres.']] }, b: { h: 'ESTAR', sub: 'où c’est et comment ça va maintenant', ex: [['*Estoy* en Barcelona.'], ['Hoy *estoy* cansado.'], ['La sopa *está* fría.']] }, fr: 'Ser décrit la nature des choses. Estar décrit un lieu ou un état passager.' },
      { t: 'quiz', q: 'Mi hermana ___ profesora.', hint: 'Métier', opts: ['es', 'está'], a: 'es', expl: 'Un métier fait partie de l’identité : ser.', fr: 'À toi.' },
      { t: 'vs', a: { h: 'ES', sub: 'caractère', ex: [['Pedri *es* nervioso.', 'Il est de nature nerveuse.']] }, b: { h: 'ESTÁ', sub: 'état du moment', ex: [['Pedri *está* nervioso.', 'Il est nerveux aujourd’hui, avant le match.']] }, fr: 'Avec le même adjectif, le verbe change le sens : un trait de caractère ou une humeur du moment.' },
      { t: 'quiz', q: 'El restaurante ___ en la Plaza Mayor.', hint: 'Lieu', opts: ['es', 'está'], a: 'está', expl: 'Pour situer une chose : estar.', fr: 'Où se trouve le restaurant ?' },
      { t: 'tip', tip: '<b>Hay</b> dit qu’une chose existe (avec un, una, des). <b>Está</b> situe une chose précise (avec el, la).', ex: [['*Hay* un banco en la plaza.'], ['El banco *está* en la plaza.']], fr: 'Dernier piège : il y a se dit hay, jamais está.' },
      { t: 'quiz', q: 'En la plaza ___ una fuente.', hint: 'Existence (una)', opts: ['hay', 'está'], a: 'hay', fr: 'Dernière question.' },
    ],
  },

  gustar: {
    yt: 'gustar espagnol cours',
    scenes: [
      { t: 'title', h: 'Gustar', sub: 'Dire ce que tu aimes', fr: 'Gustar se construit à l’envers : la chose aimée est le sujet du verbe. Littéralement, « le foot me plaît ».' },
      { t: 'vs', a: { h: 'GUSTA', sub: 'une chose ou un infinitif', ex: [['Me *gusta* el fútbol.'], ['Me *gusta* viajar.']] }, b: { h: 'GUSTAN', sub: 'plusieurs choses', ex: [['Me *gustan* los idiomas.'], ['Me *gustan* las tapas.']] }, fr: 'Le verbe s’accorde avec ce qui plaît, pas avec la personne.' },
      { t: 'conj', rows: [['(a mí)', '*me* gusta'], ['(a ti)', '*te* gusta'], ['(a él / ella / usted)', '*le* gusta'], ['(a nosotros)', '*nos* gusta'], ['(a vosotros)', '*os* gusta'], ['(a ellos / ustedes)', '*les* gusta']], sayLeft: false, fr: 'C’est le petit pronom devant qui indique à qui ça plaît.' },
      { t: 'quiz', q: 'A mi padre ___ gusta el Barça.', hint: 'Pronom (a él)', opts: ['le', 'lo', 'se'], a: 'le', fr: 'À toi : à qui ça plaît ?' },
      { t: 'quiz', q: 'Me ___ mucho los partidos en el Camp Nou.', hint: 'gustar, accord', opts: ['gustan', 'gusta'], a: 'gustan', expl: 'Los partidos est au pluriel : gustan.', fr: 'Et maintenant, l’accord.' },
      { t: 'ex', h: 'Réagir', ex: [['Me encanta el Barça. *A mí también.*', 'Moi aussi.'], ['No me gusta el café. *A mí tampoco.*', 'Moi non plus.'], ['Me duele la cabeza.', 'J’ai mal à la tête : même construction.']], fr: 'Pour réagir, on garde le « a mí ». Encantar et doler se construisent comme gustar.' },
    ],
  },

  articulos: {
    yt: 'articles et genre espagnol cours',
    scenes: [
      { t: 'title', h: 'Articles et genre', sub: 'el, la, los, las, un, una', fr: 'En espagnol, chaque nom est masculin ou féminin, et l’adjectif suit.' },
      { t: 'conj', rows: [['masculin', '*el* banco · *un* banco'], ['féminin', '*la* casa · *una* casa'], ['masc. pluriel', '*los* bancos · *unos* bancos'], ['fém. pluriel', '*las* casas · *unas* casas']], sayLeft: false, fr: 'Quatre articles définis, quatre indéfinis.' },
      { t: 'ex', h: 'Les pièges', ex: [['*el* problema, *el* día, *el* idioma', 'masculins en -a'], ['*la* mano, *la* foto, *la* moto', 'féminins en -o'], ['*la* leche, *el* coche, *el* color', 'genre différent du français']], fr: 'La plupart des mots en -o sont masculins et en -a féminins. Retiens ces exceptions, elles reviennent souvent.' },
      { t: 'quiz', q: '___ problema es complicado.', hint: 'Article défini', opts: ['El', 'La'], a: 'El', expl: 'Problema est masculin malgré son -a.', fr: 'À toi.' },
      { t: 'tip', tip: 'Les mots en <b>-ción</b> et <b>-dad</b> sont féminins : la decisión, la universidad, la ciudad.', ex: [['*La* universidad es muy grande.'], ['*Las* casas son bonit*as*.']], fr: 'Et l’adjectif s’accorde en genre et en nombre.' },
      { t: 'quiz', q: 'Los chicos son muy ___.', hint: 'Accord de l’adjectif (simpático)', opts: ['simpáticos', 'simpáticas', 'simpático'], a: 'simpáticos', fr: 'Dernière question.' },
    ],
  },

  interrogativos: {
    yt: 'mots interrogatifs espagnol',
    scenes: [
      { t: 'title', h: 'Poser des questions', sub: 'qué, quién, dónde, cuándo, cómo, cuánto, cuál', fr: 'Les mots interrogatifs portent toujours un accent, et la question s’ouvre avec un point d’interrogation à l’envers.' },
      { t: 'ex', ex: [['¿*Qué* estudias?', 'Qu’est-ce que tu étudies ?'], ['¿*Dónde* vives?', 'Où habites-tu ?'], ['¿*Cuándo* empieza el partido?', 'Quand commence le match ?'], ['¿*Cómo* te llamas?', 'Comment t’appelles-tu ?']], fr: 'Écoute la mélodie : la voix monte à la fin. Répète chaque question.' },
      { t: 'ex', ex: [['¿*Cuántos* años tienes?', 'Cuánto s’accorde avec le nom.'], ['¿*Cuántas* personas hay?'], ['¿*Por qué* estudias español? *Porque* quiero hacer mi TFE aquí.', 'Pourquoi, parce que.']], fr: 'Cuánto s’accorde comme un adjectif. Por qué en deux mots pour demander, porque en un mot pour répondre.' },
      { t: 'vs', a: { h: '¿QUÉ…?', sub: '+ nom', ex: [['¿*Qué* libro lees?']] }, b: { h: '¿CUÁL…?', sub: '+ verbe (es, son)', ex: [['¿*Cuál* es tu libro favorito?']] }, fr: 'Le piège principal : devant un nom, qué ; devant es ou son, cuál.' },
      { t: 'quiz', q: '¿___ es tu jugador favorito?', hint: 'Mot interrogatif + es', opts: ['Cuál', 'Qué'], a: 'Cuál', fr: 'À toi.' },
      { t: 'quiz', q: '¿De ___ eres?', hint: 'Origine', opts: ['dónde', 'qué', 'cuándo'], a: 'dónde', expl: '¿De dónde eres? D’où viens-tu ?', fr: 'La question que tout le monde te posera.' },
    ],
  },

  preposiciones: {
    yt: 'prépositions espagnol a en de cours',
    scenes: [
      { t: 'title', h: 'Les prépositions', sub: 'a, de, en, con, sin, por, sobre', fr: 'Les petits mots qui trahissent un francophone. Voici les emplois de base.' },
      { t: 'ex', ex: [['Voy *a* la universidad.', 'a : la direction'], ['Estoy *en* Madrid.', 'en : le lieu où l’on est'], ['Soy *de* Bélgica.', 'de : l’origine'], ['Un café *con* leche, *sin* azúcar.', 'avec, sans']], fr: 'On va a un endroit, mais on est en un endroit. Jamais « estoy a Madrid ».' },
      { t: 'tip', tip: '<b>a + el = al</b> et <b>de + el = del</b>. Et on met <b>a</b> devant une personne complément : llamo <b>a</b> mi madre.', ex: [['Vamos *al* estadio.'], ['Es la casa *del* profesor.'], ['Veo *a* mis amigos.']], fr: 'Deux contractions obligatoires, et le a devant une personne.' },
      { t: 'quiz', q: 'Mañana voy ___ estadio.', hint: 'a + el', opts: ['al', 'a el', 'en el'], a: 'al', fr: 'À toi.' },
      { t: 'ex', h: 'Situer', ex: [['El banco está *al lado de* la farmacia.'], ['La parada está *delante del* hotel.'], ['El metro está *cerca de* aquí.']], fr: 'Pour situer : al lado de, delante de, detrás de, cerca de, lejos de.' },
      { t: 'quiz', q: 'Viajo en tren, pero a la universidad voy ___ pie.', hint: 'Préposition : à pied', opts: ['a', 'en', 'de'], a: 'a', expl: 'En tren, en coche, en avión ; mais a pie.', fr: 'Le piège classique.' },
    ],
  },

  gerundio: {
    yt: 'estar gerundio espagnol cours',
    scenes: [
      { t: 'title', h: 'Estar + gérondif', sub: 'Être en train de faire', fr: 'Pour une action en cours, l’espagnol utilise estar suivi du gérondif.' },
      { t: 'conj', rows: [['hablar', 'habl|ando'], ['comer', 'com|iendo'], ['escribir', 'escrib|iendo'], ['leer', 'le|yendo'], ['dormir', 'durm|iendo']], sayLeft: false, fr: '-ar donne -ando, -er et -ir donnent -iendo. Quelques formes changent : leyendo, durmiendo, pidiendo.' },
      { t: 'timeline', events: [{ kind: 'span', from: -0.25, to: 0.25, tl: 'Ahora *estoy escribiendo* mi TFE.', fr: 'L’action est en cours, en ce moment même.' }], fr: 'Le gérondif montre une action qui se déroule autour de maintenant.' },
      { t: 'ex', ex: [['¿Qué *estás haciendo*?'], ['*Estamos viendo* el partido en un bar.'], ['Mi compañero *está durmiendo*.']], fr: 'Écoute et répète. Estar se conjugue, le gérondif ne bouge jamais.' },
      { t: 'quiz', q: 'Ahora mismo estoy ___ un correo a mi tutor.', hint: 'escribir, gérondif', opts: ['escribiendo', 'escribando', 'escrito'], a: 'escribiendo', fr: 'À toi.' },
      { t: 'quiz', q: 'Los niños están ___ un cuento.', hint: 'leer, gérondif', opts: ['leyendo', 'leiendo', 'leando'], a: 'leyendo', fr: 'Une forme irrégulière.' },
    ],
  },

  perfecto: {
    yt: 'pretérito perfecto espagnol cours',
    scenes: [
      { t: 'title', h: 'Le pretérito perfecto', sub: 'He comido, has visto, hemos hablado', fr: 'Ce passé ressemble au passé composé français. En Espagne, il sert pour une période qui n’est pas encore terminée.' },
      { t: 'conj', rows: [['yo', '*he* hablado'], ['tú', '*has* hablado'], ['él / ella', '*ha* hablado'], ['nosotros', '*hemos* hablado'], ['vosotros', '*habéis* hablado'], ['ellos', '*han* hablado']], fr: 'Haber au présent, puis le participe : -ado pour -ar, -ido pour -er et -ir. Le participe ne change jamais.' },
      { t: 'timeline', events: [{ kind: 'link', at: -0.35, tl: 'Esta mañana *he hablado* con mi tutor.', fr: 'La matinée fait partie d’aujourd’hui : la période n’est pas finie.' }, { kind: 'link', at: -0.75, tl: '¿*Has estado* alguna vez en el Camp Nou?', fr: 'Une expérience de vie, sans date.' }], fr: 'L’action est passée, mais elle reste reliée à maintenant.' },
      { t: 'ex', h: 'Les participes irréguliers', ex: [['*He hecho* los deberes.', 'hacer'], ['¿*Has visto* el gol?', 'ver'], ['Todavía no *he escrito* la introducción.', 'escribir'], ['¿Qué *ha dicho*?', 'decir']], fr: 'Hecho, visto, escrito, dicho, vuelto, puesto, abierto, roto : à apprendre par cœur.' },
      { t: 'quiz', q: 'Hoy ___ mucho en la biblioteca.', hint: 'trabajar, pretérito perfecto, yo', opts: ['he trabajado', 'trabajé', 'trabajaba'], a: 'he trabajado', expl: 'Hoy : période non terminée, donc perfecto.', fr: 'À toi.' },
      { t: 'tip', tip: 'On ne sépare jamais <b>haber</b> du participe. Le pronom se place devant : <b>lo he hecho</b>.', ex: [['Ya *lo he hecho*.']], fr: 'Jamais « he lo hecho ».' },
      { t: 'quiz', q: 'Nunca ___ paella.', hint: 'comer, pretérito perfecto, yo', opts: ['he comido', 'he comiado', 'ha comido'], a: 'he comido', fr: 'Dernière question.' },
    ],
  },

  indefinido: {
    yt: 'pretérito indefinido espagnol cours',
    scenes: [
      { t: 'title', h: 'Le pretérito indefinido', sub: 'Raconter une action terminée', fr: 'C’est le passé du récit : ce qui s’est passé hier, l’an dernier, à un moment précis et fini.' },
      { t: 'timeline', events: [{ kind: 'point', at: -0.55, tl: 'Ayer *fui* al cine.', fr: 'Hier, une action ponctuelle et terminée.' }, { kind: 'point', at: -0.85, tl: 'En 2023 *empecé* la universidad.', fr: 'Une date passée.' }], fr: 'Un point sur la ligne du temps, dans une période terminée : ayer, anoche, el lunes pasado, en 2023.' },
      { t: 'conj', verb: 'habl|ar', rows: [['yo', 'habl|é'], ['tú', 'habl|aste'], ['él / ella', 'habl|ó'], ['nosotros', 'habl|amos'], ['vosotros', 'habl|asteis'], ['ellos', 'habl|aron']], fr: 'Attention aux accents : hablé, habló. Sans accent, hablo veut dire « je parle ».' },
      { t: 'conj', verb: 'com|er', rows: [['yo', 'com|í'], ['tú', 'com|iste'], ['él / ella', 'com|ió'], ['nosotros', 'com|imos'], ['ellos', 'com|ieron']], fr: 'Les verbes en -er et -ir partagent les mêmes terminaisons : comí, viví.' },
      { t: 'quiz', q: 'Anoche ___ con mis padres por teléfono.', hint: 'hablar, indefinido, yo', opts: ['hablé', 'hablo', 'he hablado'], a: 'hablé', expl: 'Anoche : période terminée, donc indefinido.', fr: 'À toi.' },
      { t: 'ex', h: 'Les irréguliers indispensables', ex: [['El sábado *fui* al partido.', 'ir : fui'], ['*Fue* un partido increíble.', 'ser : fue'], ['*Tuve* un examen el lunes.', 'tener : tuve'], ['*Hice* una presentación.', 'hacer : hice']], fr: 'Ser et ir ont la même forme : fui, fue, fueron. Le contexte fait la différence.' },
      { t: 'quiz', q: 'El año pasado ___ a Madrid con mi novia.', hint: 'ir, indefinido, yo', opts: ['fui', 'iba', 'fue'], a: 'fui', fr: 'Dernière question.' },
    ],
  },

  imperfecto: {
    yt: 'pretérito imperfecto espagnol cours',
    scenes: [
      { t: 'title', h: 'Le pretérito imperfecto', sub: 'Les habitudes et le décor du passé', fr: 'L’imperfecto correspond à l’imparfait français : ce que tu faisais d’habitude, comment étaient les choses.' },
      { t: 'timeline', events: [{ kind: 'habit', from: -0.95, to: -0.25, tl: 'De niño *jugaba* al fútbol todos los días.', fr: 'Une habitude qui se répète.' }], fr: 'Pas un point précis, mais une répétition étalée dans le passé.' },
      { t: 'conj', verb: 'trabaj|ar', rows: [['yo', 'trabaj|aba'], ['tú', 'trabaj|abas'], ['él / ella', 'trabaj|aba'], ['nosotros', 'trabaj|ábamos'], ['ellos', 'trabaj|aban']], fr: 'Pour -ar : -aba. Attention à l’accent de trabajábamos.' },
      { t: 'conj', verb: 'viv|ir', rows: [['yo', 'viv|ía'], ['tú', 'viv|ías'], ['él / ella', 'viv|ía'], ['nosotros', 'viv|íamos'], ['ellos', 'viv|ían']], fr: 'Pour -er et -ir : -ía, avec un accent sur le i.' },
      { t: 'ex', h: 'Seulement trois irréguliers', ex: [['Cuando *era* pequeño, *vivía* en Charleroi.', 'ser : era'], ['Siempre *íbamos* a la playa en verano.', 'ir : íbamos'], ['*Veía* los partidos con mi abuelo.', 'ver : veía']], fr: 'Ser, ir et ver. Tous les autres verbes sont réguliers à l’imperfecto.' },
      { t: 'quiz', q: 'Antes ___ en Bélgica.', hint: 'vivir, imperfecto, yo', opts: ['vivía', 'viví', 'vivaba'], a: 'vivía', expl: 'Antes : habitude ou situation passée.', fr: 'À toi.' },
      { t: 'quiz', q: 'Cuando era niño, siempre ___ a casa de mis abuelos.', hint: 'ir, imperfecto, yo', opts: ['iba', 'fui', 'iría'], a: 'iba', fr: 'Dernière question.' },
    ],
  },

  contraste_pasados: {
    yt: 'indefinido imperfecto perfecto différence espagnol',
    scenes: [
      { t: 'title', h: 'Choisir le bon passé', sub: 'Perfecto, indefinido ou imperfecto', fr: 'Trois passés, trois rôles. Le repère temporel te dit presque toujours lequel prendre.' },
      { t: 'timeline', events: [{ kind: 'link', at: -0.3, tl: 'Hoy *he ido* a la universidad.', fr: 'Perfecto : la période n’est pas finie.' }, { kind: 'point', at: -0.6, tl: 'Ayer *fui* a la universidad.', fr: 'Indefinido : un moment terminé.' }, { kind: 'habit', from: -0.98, to: -0.72, tl: 'Antes *iba* a la universidad en bus.', fr: 'Imperfecto : une habitude.' }], fr: 'Hoy ou este año : perfecto. Ayer ou en 2020 : indefinido. Antes ou de niño : imperfecto.' },
      { t: 'quiz', q: 'El lunes pasado ___ un examen.', hint: 'tener, choisis le temps', opts: ['tuve', 'he tenido', 'tenía'], a: 'tuve', fr: 'À toi : quel passé ?' },
      { t: 'timeline', events: [{ kind: 'span', from: -0.9, to: -0.2, tl: '*Llovía* y *estaba* en la ducha…', fr: 'Le décor : imperfecto.' }, { kind: 'point', at: -0.5, tl: '…cuando alguien *llamó* a la puerta.', fr: 'L’événement qui coupe le décor : indefinido.' }], fr: 'Dans un récit, l’imperfecto pose le décor et l’indefinido fait avancer l’histoire.' },
      { t: 'quiz', q: 'Mientras ___ el partido, mi madre me llamó.', hint: 'ver, choisis le temps', opts: ['veía', 'vi', 'he visto'], a: 'veía', expl: 'L’action en cours, interrompue par l’appel : imperfecto.', fr: 'Le décor ou l’événement ?' },
      { t: 'quiz', q: 'Este año ___ muchos partidos del Barça.', hint: 'ver, choisis le temps', opts: ['he visto', 'vi', 'veía'], a: 'he visto', fr: 'Dernière question.' },
    ],
  },

  futuro: {
    yt: 'futur espagnol ir a futuro simple cours',
    scenes: [
      { t: 'title', h: 'Parler du futur', sub: 'Ir a + infinitif et le futur simple', fr: 'Deux façons de parler de l’avenir. À l’oral, la première est de loin la plus courante.' },
      { t: 'timeline', events: [{ kind: 'point', at: 0.35, tl: 'Esta noche *voy a ver* el partido.', fr: 'Futur proche : un projet déjà décidé.' }, { kind: 'point', at: 0.8, tl: 'Algún día *trabajaré* en un banco.', fr: 'Futur simple : une prévision, un avenir plus lointain.' }], fr: 'Ir a + infinitif pour un projet, le futur simple pour une prévision ou une promesse.' },
      { t: 'conj', verb: 'viajar', rows: [['yo', 'viajar|é'], ['tú', 'viajar|ás'], ['él / ella', 'viajar|á'], ['nosotros', 'viajar|emos'], ['ellos', 'viajar|án']], fr: 'Le futur simple se forme sur l’infinitif entier, comme en français : viajaré, comeré, viviré.' },
      { t: 'ex', h: 'Radicaux irréguliers', ex: [['*Tendré* más tiempo en julio.', 'tener'], ['*Haré* las prácticas en Barcelona.', 'hacer'], ['¿*Podrás* venir?', 'poder'], ['Te lo *diré* mañana.', 'decir']], fr: 'Les terminaisons restent les mêmes ; seul le radical change : tendr, har, podr, dir, saldr, vendr.' },
      { t: 'quiz', q: 'Mañana ___ a llamar a mi tutor.', hint: 'ir a + infinitif, yo', opts: ['voy', 'iré', 'va'], a: 'voy', fr: 'À toi.' },
      { t: 'quiz', q: 'El año que viene ___ más experiencia.', hint: 'tener, futur simple, yo', opts: ['tendré', 'teneré', 'tuve'], a: 'tendré', fr: 'Dernière question.' },
    ],
  },

  imperativo: {
    yt: 'impératif espagnol tú cours',
    scenes: [
      { t: 'title', h: 'L’impératif avec tú', sub: 'Donner une consigne, un conseil, une recette', fr: 'Pour dire à quelqu’un de faire quelque chose, avec tú.' },
      { t: 'ex', ex: [['*Habla* más despacio, por favor.', 'hablar : él habla'], ['*Come* algo antes del partido.', 'comer : él come'], ['*Cierra* la puerta.', 'cerrar : él cierra']], fr: 'L’impératif avec tú a la même forme que él au présent.' },
      { t: 'conj', rows: [['decir', '*di*'], ['hacer', '*haz*'], ['ir', '*ve*'], ['poner', '*pon*'], ['salir', '*sal*'], ['tener', '*ten*'], ['venir', '*ven*'], ['ser', '*sé*']], sayLeft: false, fr: 'Huit irréguliers, très courts. Ven aquí, haz los deberes, ten cuidado.' },
      { t: 'quiz', q: '___ aquí, por favor.', hint: 'venir, impératif tú', opts: ['Ven', 'Viene', 'Vengas'], a: 'Ven', fr: 'À toi.' },
      { t: 'move', from: 'Corta la cebolla.', to: '*Córtala.*', note: 'Le pronom se colle à la fin du verbe, et un accent apparaît pour garder la prononciation.', fr: 'Avec un pronom, il s’accroche à la fin.' },
      { t: 'quiz', q: 'Las patatas: pélalas y ___ en rodajas.', hint: 'cortar + las, impératif tú', opts: ['córtalas', 'las corta', 'cortalas'], a: 'córtalas', fr: 'Dernière question.' },
    ],
  },

  por_para: {
    yt: 'por ou para espagnol cours',
    scenes: [
      { t: 'title', h: 'Por ou para', sub: 'Deux traductions de « pour »', fr: 'Para regarde vers le but. Por regarde vers la cause, le chemin ou le moyen.' },
      { t: 'vs', a: { h: 'PARA', sub: 'but, destinataire, destination, échéance', ex: [['Estudio *para* ser ingeniero.'], ['Un regalo *para* mi hermana.'], ['El informe es *para* el lunes.']] }, b: { h: 'POR', sub: 'cause, chemin, moyen, échange, moment', ex: [['Gracias *por* todo.'], ['Paseamos *por* el parque.'], ['Hablo *por* teléfono.']] }, fr: 'Une flèche vers l’avant pour para, un point de départ ou un passage pour por.' },
      { t: 'quiz', q: 'Estudio español ___ hacer mi TFE en Barcelona.', hint: 'But', opts: ['para', 'por'], a: 'para', fr: 'À toi.' },
      { t: 'ex', h: 'Por dans les expressions', ex: [['*Por* la mañana voy al gimnasio.'], ['Son veinte euros *por* persona.'], ['Lo hago *por* ti.', 'à cause de toi, pour toi']], fr: 'Un moment de la journée, un prix par personne, une cause.' },
      { t: 'quiz', q: 'Gracias ___ tu ayuda.', hint: 'Cause', opts: ['por', 'para'], a: 'por', fr: 'On remercie toujours avec por.' },
      { t: 'quiz', q: 'Salgo ___ Madrid mañana.', hint: 'Destination', opts: ['para', 'por'], a: 'para', expl: 'Salir para : partir pour une destination.', fr: 'Dernière question.' },
    ],
  },

  registro: {
    yt: 'espagnol formel usted correo formal',
    scenes: [
      { t: 'title', h: 'Le registre soutenu', sub: 'Parler à ton tuteur, à un jury, écrire un courriel', fr: 'Avec un encadrant ou un jury, on monte d’un cran. Trois leviers suffisent.' },
      { t: 'vs', a: { h: 'TÚ', sub: 'entre étudiants, entre amis', ex: [['¿*Puedes* ayudarme?']] }, b: { h: 'USTED', sub: 'tuteur, jury, banque', ex: [['¿*Podría* usted ayudarme?']] }, fr: 'Premier levier : usted avec le verbe à la troisième personne, et le conditionnel pour adoucir.' },
      { t: 'ex', h: 'Formules utiles', ex: [['*Le agradecería* que me enviara el documento.'], ['*Quería* preguntarle sobre la metodología.'], ['¿*Le parece bien* el jueves a las diez?']], fr: 'Ces trois formules couvrent la plupart de tes échanges avec ton maître de TFE.' },
      { t: 'ex', h: 'Des connecteurs plus précis', ex: [['*Sin embargo*, los datos son confidenciales.', 'au lieu de pero'], ['*Por lo tanto*, proponemos un RAG soberano.', 'au lieu de por eso'], ['*Dado que* el modelo es local, los datos no salen del banco.', 'au lieu de porque']], fr: 'Deuxième levier : remplacer pero, por eso et porque par des connecteurs d’exposé.' },
      { t: 'quiz', q: 'Los resultados son buenos; ___, el sistema es lento.', hint: 'Équivalent soutenu de « pero »', opts: ['sin embargo', 'por lo tanto', 'dado que'], a: 'sin embargo', fr: 'À toi.' },
      { t: 'ex', h: 'Des verbes précis', ex: [['*Llevamos a cabo* un estudio.', 'au lieu de hicimos'], ['El tutor *señaló* un problema.', 'au lieu de dijo'], ['El modelo *proporciona* respuestas fiables.', 'au lieu de da']], fr: 'Troisième levier : des verbes plus précis que hacer, decir et dar.' },
      { t: 'quiz', q: 'Este capítulo ___ los resultados del experimento.', hint: 'Verbe soutenu pour « montrer, présenter »', opts: ['presenta', 'hace', 'dice'], a: 'presenta', fr: 'Dernière question.' },
    ],
  },
};
