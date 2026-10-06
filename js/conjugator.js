// Moteur de conjugaison espagnole (temps vus en cours).
// Personnes : 0 yo, 1 tú, 2 él/ella/usted, 3 nosotros, 4 vosotros, 5 ellos/ellas/ustedes
(function (global) {
  const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ellas / ustedes'];
  const PERSONS_SHORT = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];

  // Verbes : inf, fr, complément pour les phrases, + particularités
  // pres: changement de radical au présent ('ie','ue','i','jugar')
  // pret: changement en -ir au passé simple 3e pers. ('i' ou 'u')
  const VERBS = [
    { inf: 'hablar', fr: 'parler', c: 'con mis amigos' },
    { inf: 'comer', fr: 'manger', c: 'una paella' },
    { inf: 'vivir', fr: 'vivre', c: 'en el centro' },
    { inf: 'trabajar', fr: 'travailler', c: 'mucho' },
    { inf: 'estudiar', fr: 'étudier', c: 'para el examen' },
    { inf: 'viajar', fr: 'voyager', c: 'a Madrid' },
    { inf: 'comprar', fr: 'acheter', c: 'pan y leche' },
    { inf: 'cocinar', fr: 'cuisiner', c: 'pollo con verduras' },
    { inf: 'escuchar', fr: 'écouter', c: 'música' },
    { inf: 'llegar', fr: 'arriver', c: 'tarde a clase' },
    { inf: 'buscar', fr: 'chercher', c: 'un piso' },
    { inf: 'tocar', fr: 'jouer (instrument)', c: 'la guitarra' },
    { inf: 'pagar', fr: 'payer', c: 'la cuenta' },
    { inf: 'empezar', fr: 'commencer', c: 'el curso', pres: 'ie' },
    { inf: 'pensar', fr: 'penser', c: 'en el viaje', pres: 'ie' },
    { inf: 'cerrar', fr: 'fermer', c: 'la puerta', pres: 'ie' },
    { inf: 'jugar', fr: 'jouer', c: 'al fútbol', pres: 'jugar' },
    { inf: 'encontrar', fr: 'trouver', c: 'las llaves', pres: 'ue' },
    { inf: 'recordar', fr: 'se souvenir', c: 'su nombre', pres: 'ue' },
    { inf: 'beber', fr: 'boire', c: 'un café con leche' },
    { inf: 'aprender', fr: 'apprendre', c: 'español' },
    { inf: 'leer', fr: 'lire', c: 'un libro' },
    { inf: 'creer', fr: 'croire', c: 'la historia' },
    { inf: 'correr', fr: 'courir', c: 'en el parque' },
    { inf: 'entender', fr: 'comprendre', c: 'la pregunta', pres: 'ie' },
    { inf: 'querer', fr: 'vouloir', c: 'un postre', pres: 'ie' },
    { inf: 'volver', fr: 'revenir', c: 'a casa', pres: 'ue' },
    { inf: 'poder', fr: 'pouvoir', c: 'venir', pres: 'ue' },
    { inf: 'tener', fr: 'avoir', c: 'mucho trabajo', pres: 'ie' },
    { inf: 'hacer', fr: 'faire', c: 'los deberes' },
    { inf: 'poner', fr: 'mettre', c: 'la mesa' },
    { inf: 'saber', fr: 'savoir', c: 'la respuesta' },
    { inf: 'ver', fr: 'voir', c: 'una película' },
    { inf: 'traer', fr: 'apporter', c: 'el menú' },
    { inf: 'conocer', fr: 'connaître', c: 'a mucha gente' },
    { inf: 'abrir', fr: 'ouvrir', c: 'la ventana' },
    { inf: 'escribir', fr: 'écrire', c: 'un correo' },
    { inf: 'salir', fr: 'sortir', c: 'con mis amigos' },
    { inf: 'decir', fr: 'dire', c: 'la verdad', pres: 'i', pret: 'i' },
    { inf: 'venir', fr: 'venir', c: 'a la fiesta', pres: 'ie', pret: 'i' },
    { inf: 'pedir', fr: 'demander / commander', c: 'la cuenta', pres: 'i', pret: 'i' },
    { inf: 'repetir', fr: 'répéter', c: 'la frase', pres: 'i', pret: 'i' },
    { inf: 'servir', fr: 'servir', c: 'la comida', pres: 'i', pret: 'i' },
    { inf: 'preferir', fr: 'préférer', c: 'el pescado', pres: 'ie', pret: 'i' },
    { inf: 'sentir', fr: 'ressentir', c: 'frío', pres: 'ie', pret: 'i' },
    { inf: 'dormir', fr: 'dormir', c: 'ocho horas', pres: 'ue', pret: 'u' },
    { inf: 'ser', fr: 'être (identité)', c: 'muy simpático' },
    { inf: 'estar', fr: 'être (état, lieu)', c: 'en casa' },
    { inf: 'ir', fr: 'aller', c: 'al cine' },
    { inf: 'dar', fr: 'donner', c: 'un regalo' },
    { inf: 'conducir', fr: 'conduire', c: 'un coche' },
    { inf: 'romper', fr: 'casser', c: 'un vaso' },
    { inf: 'descubrir', fr: 'découvrir', c: 'un sitio nuevo' },
    { inf: 'visitar', fr: 'visiter', c: 'el museo del Prado' },
    { inf: 'reservar', fr: 'réserver', c: 'una habitación' },
    { inf: 'desayunar', fr: 'prendre le petit-déj', c: 'en una cafetería' },
    { inf: 'cenar', fr: 'dîner', c: 'en un restaurante' },
    { inf: 'bailar', fr: 'danser', c: 'salsa' },
    { inf: 'caminar', fr: 'marcher', c: 'por el centro' },
    { inf: 'perder', fr: 'perdre', c: 'las gafas', pres: 'ie' },
    { inf: 'oír', fr: 'entendre', c: 'un ruido' },
  ];
  const BY_INF = Object.fromEntries(VERBS.map(v => [v.inf, v]));

  const END = {
    pres: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
    pret: { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
    impf: { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
    fut: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
  };

  const IRR_PRES = {
    ser: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
    estar: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
    ir: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
    tener: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
    venir: ['vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'],
    decir: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'],
    hacer: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
    poner: ['pongo', 'pones', 'pone', 'ponemos', 'ponéis', 'ponen'],
    salir: ['salgo', 'sales', 'sale', 'salimos', 'salís', 'salen'],
    saber: ['sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'],
    ver: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
    dar: ['doy', 'das', 'da', 'damos', 'dais', 'dan'],
    traer: ['traigo', 'traes', 'trae', 'traemos', 'traéis', 'traen'],
    conocer: ['conozco', 'conoces', 'conoce', 'conocemos', 'conocéis', 'conocen'],
    conducir: ['conduzco', 'conduces', 'conduce', 'conducimos', 'conducís', 'conducen'],
    oír: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'],
    haber: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
  };

  const IRR_PRET = {
    ser: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    ir: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    dar: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
    ver: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
    hacer: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
    oír: ['oí', 'oíste', 'oyó', 'oímos', 'oísteis', 'oyeron'],
  };
  // Radicaux irréguliers : terminaisons -e -iste -o -imos -isteis -ieron
  const STRONG_STEMS = { estar: 'estuv', tener: 'tuv', poder: 'pud', poner: 'pus', saber: 'sup', querer: 'quis', venir: 'vin', andar: 'anduv', haber: 'hub' };
  // Radicaux en -j : -e -iste -o -imos -isteis -eron
  const J_STEMS = { decir: 'dij', traer: 'traj', conducir: 'conduj', traducir: 'traduj' };

  const IRR_IMPF = {
    ser: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
    ir: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
    ver: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'],
  };

  const FUT_STEMS = { tener: 'tendr', poner: 'pondr', salir: 'saldr', venir: 'vendr', poder: 'podr', saber: 'sabr', haber: 'habr', querer: 'querr', hacer: 'har', decir: 'dir' };

  const IRR_PART = { abrir: 'abierto', decir: 'dicho', escribir: 'escrito', hacer: 'hecho', morir: 'muerto', poner: 'puesto', romper: 'roto', ver: 'visto', volver: 'vuelto', descubrir: 'descubierto', resolver: 'resuelto', ir: 'ido', ser: 'sido' };
  const IRR_GER = { ir: 'yendo', decir: 'diciendo', venir: 'viniendo', poder: 'pudiendo', oír: 'oyendo', ser: 'siendo' };
  const IRR_IMP_TU = { decir: 'di', hacer: 'haz', ir: 've', poner: 'pon', salir: 'sal', ser: 'sé', tener: 'ten', venir: 'ven' };

  const ESTAR = IRR_PRES.estar;
  const HABER = IRR_PRES.haber;

  function group(inf) { return inf.slice(-2).replace('ír', 'ir'); }
  function stem(inf) { return inf.slice(0, -2); }

  // Remplace la dernière occurrence d'une voyelle dans le radical
  function changeStem(st, from, to) {
    const i = st.lastIndexOf(from);
    return i < 0 ? st : st.slice(0, i) + to + st.slice(i + from.length);
  }

  function presente(inf, p) {
    if (IRR_PRES[inf]) return IRR_PRES[inf][p];
    const v = BY_INF[inf] || {};
    const g = group(inf);
    let st = stem(inf);
    if ([0, 1, 2, 5].includes(p)) {
      if (v.pres === 'ie') st = changeStem(st, 'e', 'ie');
      else if (v.pres === 'ue') st = changeStem(st, 'o', 'ue');
      else if (v.pres === 'i') st = changeStem(st, 'e', 'i');
      else if (v.pres === 'jugar') st = 'jueg';
    }
    return st + END.pres[g][p];
  }

  function indefinido(inf, p) {
    if (IRR_PRET[inf]) return IRR_PRET[inf][p];
    if (STRONG_STEMS[inf]) return STRONG_STEMS[inf] + ['e', 'iste', 'o', 'imos', 'isteis', 'ieron'][p];
    if (J_STEMS[inf]) return J_STEMS[inf] + ['e', 'iste', 'o', 'imos', 'isteis', 'eron'][p];
    const v = BY_INF[inf] || {};
    const g = group(inf);
    let st = stem(inf);
    if (p === 0 && g === 'ar') {
      if (st.endsWith('c')) st = st.slice(0, -1) + 'qu';
      else if (st.endsWith('g')) st = st + 'u';
      else if (st.endsWith('z')) st = st.slice(0, -1) + 'c';
    }
    // leer, creer : leyó, leyeron ; accent sur í aux autres personnes
    if (g !== 'ar' && /[aeo]$/.test(st)) {
      return st + ['í', 'íste', 'yó', 'ímos', 'ísteis', 'yeron'][p];
    }
    if ((p === 2 || p === 5) && v.pret) {
      st = v.pret === 'i' ? changeStem(st, 'e', 'i') : changeStem(st, 'o', 'u');
    }
    return st + END.pret[g][p];
  }

  function imperfecto(inf, p) {
    if (IRR_IMPF[inf]) return IRR_IMPF[inf][p];
    const g = group(inf);
    return stem(inf) + END.impf[g][p];
  }

  function futuro(inf, p) {
    const base = FUT_STEMS[inf] || inf.replace('ír', 'ir');
    return base + END.fut[p];
  }

  function participio(inf) {
    if (IRR_PART[inf]) return IRR_PART[inf];
    const g = group(inf);
    const st = stem(inf);
    if (g === 'ar') return st + 'ado';
    if (/[aeo]$/.test(st)) return st + 'ído'; // leído, creído, traído, oído
    return st + 'ido';
  }

  function gerundio(inf) {
    if (IRR_GER[inf]) return IRR_GER[inf];
    const v = BY_INF[inf] || {};
    const g = group(inf);
    let st = stem(inf);
    if (g === 'ar') return st + 'ando';
    if (/[aeo]$/.test(st)) return st + 'yendo'; // leyendo, trayendo, creyendo
    if (v.pret === 'i') st = changeStem(st, 'e', 'i');
    if (v.pret === 'u') st = changeStem(st, 'o', 'u');
    return st + 'iendo';
  }

  function perfecto(inf, p) { return HABER[p] + ' ' + participio(inf); }
  function progresivo(inf, p) { return ESTAR[p] + ' ' + gerundio(inf); }
  function irA(inf, p) { return IRR_PRES.ir[p] + ' a ' + inf; }
  function imperativoTu(inf) { return IRR_IMP_TU[inf] || presente(inf, 2); }

  const TENSES = {
    presente: { label: 'Présent', fn: presente },
    indefinido: { label: 'Pretérito indefinido', fn: indefinido },
    imperfecto: { label: 'Pretérito imperfecto', fn: imperfecto },
    perfecto: { label: 'Pretérito perfecto', fn: perfecto },
    futuro: { label: 'Futur simple', fn: futuro },
    ir_a: { label: 'Futur proche (ir a + inf.)', fn: irA },
    gerundio: { label: 'Estar + gérondif', fn: progresivo },
  };

  function conjugate(inf, tense, p) {
    if (tense === 'imperativo') return imperativoTu(inf);
    return TENSES[tense].fn(inf, p);
  }

  function table(inf, tense) { return [0, 1, 2, 3, 4, 5].map(p => conjugate(inf, tense, p)); }

  global.Conj = { VERBS, BY_INF, PERSONS, PERSONS_SHORT, TENSES, conjugate, table, participio, gerundio, imperativoTu, presente, indefinido, imperfecto, futuro };
})(typeof window !== 'undefined' ? window : globalThis);
