// Prononciation : les sons de l'espagnol qui posent problème aux francophones.
// Chaque mot est lu par une voix native ; le micro vérifie que la prononciation est comprise.
window.SOUNDS = [
  { id: 'r', label: 'R simple et RR roulé', fr: 'Le r espagnol se fait du bout de la langue, jamais au fond de la gorge.',
    tip: 'R simple : un seul battement de langue, comme le « d » rapide de « madame ». RR (et r en début de mot) : plusieurs battements.',
    words: [{ w: 'pero', fr: 'mais' }, { w: 'perro', fr: 'chien' }, { w: 'caro', fr: 'cher' }, { w: 'carro', fr: 'chariot' }, { w: 'Barcelona' }, { w: 'rápido', fr: 'rapide' }, { w: 'restaurante' }, { w: 'tierra', fr: 'terre' }, { w: 'primero', fr: 'premier' }, { w: 'trabajar', fr: 'travailler' }] },
  { id: 'j', label: 'J et G devant e, i', fr: 'Un souffle rauque au fond de la gorge, comme le « ch » allemand de « Bach ».',
    words: [{ w: 'jamón', fr: 'jambon' }, { w: 'trabajo', fr: 'travail' }, { w: 'gente', fr: 'gens' }, { w: 'jugador', fr: 'joueur' }, { w: 'general' }, { w: 'jefe', fr: 'chef' }, { w: 'mujer', fr: 'femme' }, { w: 'viaje', fr: 'voyage' }] },
  { id: 'z', label: 'Z et C devant e, i', fr: 'En Espagne, la langue entre les dents, comme le « th » anglais de « think ».',
    words: [{ w: 'cerveza', fr: 'bière' }, { w: 'gracias', fr: 'merci' }, { w: 'cena', fr: 'dîner' }, { w: 'zapato', fr: 'chaussure' }, { w: 'plaza', fr: 'place' }, { w: 'decisión' }, { w: 'Valencia' }, { w: 'cinco', fr: 'cinq' }] },
  { id: 'v', label: 'B et V identiques', fr: 'Le v espagnol se prononce comme un b doux : lèvres qui se touchent à peine.',
    words: [{ w: 'vino', fr: 'vin' }, { w: 'vale', fr: 'd’accord' }, { w: 'Valencia' }, { w: 'nuevo', fr: 'nouveau' }, { w: 'volver', fr: 'revenir' }, { w: 'bueno', fr: 'bon' }, { w: 'televisión' }] },
  { id: 'u', label: 'U = « ou », E = « é »', fr: 'Pas de « u » ni de « e » muet à la française : u se dit « ou », e se dit toujours « é ».',
    words: [{ w: 'mucho', fr: 'beaucoup' }, { w: 'universidad' }, { w: 'usted', fr: 'vous' }, { w: 'gusto', fr: 'goût' }, { w: 'noche', fr: 'nuit' }, { w: 'leche', fr: 'lait' }, { w: 'tarde', fr: 'tard, après-midi' }, { w: 'grande', fr: 'grand' }] },
  { id: 'nasal', label: 'Pas de voyelles nasales', fr: 'On prononce le n : « con » ne se dit pas « con » à la française mais « konn ».',
    words: [{ w: 'con', fr: 'avec' }, { w: 'tan', fr: 'si, tellement' }, { w: 'también', fr: 'aussi' }, { w: 'tiempo', fr: 'temps' }, { w: 'banco', fr: 'banque' }, { w: 'campo', fr: 'terrain' }, { w: 'importante' }, { w: 'un momento' }] },
  { id: 'll', label: 'LL, Y et Ñ', fr: 'LL et Y comme un « y » appuyé ; Ñ comme « gn » dans « montagne ».',
    words: [{ w: 'llamar', fr: 'appeler' }, { w: 'calle', fr: 'rue' }, { w: 'yo', fr: 'je' }, { w: 'playa', fr: 'plage' }, { w: 'año', fr: 'année' }, { w: 'España' }, { w: 'mañana', fr: 'demain' }, { w: 'compañero', fr: 'collègue' }] },
  { id: 'accent', label: 'L’accent tonique', fr: 'Une syllabe est plus forte que les autres. Se tromper change parfois le sens.',
    tip: 'Mot terminé par voyelle, n ou s : accent sur l’avant-dernière syllabe. Sinon sur la dernière. L’accent écrit indique les exceptions.',
    words: [{ w: 'hablo', fr: 'je parle' }, { w: 'habló', fr: 'il a parlé' }, { w: 'trabajo', fr: 'je travaille' }, { w: 'trabajó', fr: 'il a travaillé' }, { w: 'práctica' }, { w: 'análisis' }, { w: 'algoritmo' }, { w: 'economía' }] },
];
