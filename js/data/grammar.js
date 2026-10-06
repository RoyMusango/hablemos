// Points de grammaire : fiche résumée (d'après les cours), exercices, sujets d'oral.
// Exercice : { q, a: [réponses acceptées], opts?: [choix], expl? }
(function (global) {
  const T = {};

  T.presente = {
    label: 'Le présent', level: 'A1',
    gen: { tenses: ['presente'], markers: ['Normalmente', 'Todos los días', 'Ahora', 'Los lunes', 'A veces', 'Siempre'] },
    fiche: `
<p>Terminaisons régulières :</p>
<table><tr><th></th><th>-ar (hablar)</th><th>-er (comer)</th><th>-ir (vivir)</th></tr>
<tr><td>yo</td><td>hablo</td><td>como</td><td>vivo</td></tr>
<tr><td>tú</td><td>hablas</td><td>comes</td><td>vives</td></tr>
<tr><td>él/ella/usted</td><td>habla</td><td>come</td><td>vive</td></tr>
<tr><td>nosotros</td><td>hablamos</td><td>comemos</td><td>vivimos</td></tr>
<tr><td>vosotros</td><td>habláis</td><td>coméis</td><td>vivís</td></tr>
<tr><td>ellos/ellas/ustedes</td><td>hablan</td><td>comen</td><td>viven</td></tr></table>
<p><b>Verbes à diphtongue</b> (sauf nosotros/vosotros) : e→ie (qu<b>ie</b>ro, p<b>ie</b>nso), o→ue (p<b>ue</b>do, v<b>ue</b>lvo, d<b>ue</b>rmo), e→i (p<b>i</b>do, rep<b>i</b>to), jugar → j<b>ue</b>go.</p>
<p><b>1re personne irrégulière</b> : tengo, vengo, hago, pongo, salgo, digo, sé, conozco, veo, doy, traigo.</p>
<p>Totalement irréguliers : <b>ser</b> (soy, eres, es, somos, sois, son), <b>estar</b> (estoy, estás, está…), <b>ir</b> (voy, vas, va, vamos, vais, van).</p>`,
    speak: ['Describe un día normal de tu semana.', '¿Qué haces normalmente los fines de semana?', 'Habla de tu trabajo o de tus estudios.'],
  };

  T.ser_estar = {
    label: 'Ser ou estar', level: 'A1',
    fiche: `
<p><b>SER</b> = ce que la chose <i>est</i> : identité, origine, profession, caractère, matière, heure, date.<br>
<i>Soy belga. Es médico. Es simpática. Son las tres. La mesa es de madera.</i></p>
<p><b>ESTAR</b> = <i>où</i> et <i>comment</i> elle est maintenant : lieu, état passager, émotion, + gérondif.<br>
<i>Estoy en casa. Estoy cansado. La sopa está fría. Estamos comiendo.</i></p>
<p>Astuce : <b>hay</b> = il y a (existence, avec un/une/des) → <i>Hay un banco en la plaza.</i> / <b>está</b> = où se trouve une chose définie → <i>El banco está en la plaza.</i></p>`,
    bank: [
      { q: 'Yo ___ de Bélgica.', a: ['soy'], opts: ['soy', 'estoy'] },
      { q: 'Hoy ___ muy cansado.', a: ['estoy'], opts: ['soy', 'estoy'] },
      { q: 'Mi hermana ___ profesora.', a: ['es'], opts: ['es', 'está'] },
      { q: 'El restaurante ___ en la Plaza Mayor.', a: ['está'], opts: ['es', 'está'] },
      { q: 'La sopa ___ fría, ¡qué asco!', a: ['está'], opts: ['es', 'está'] },
      { q: '___ las ocho de la tarde.', a: ['son'], opts: ['son', 'están'] },
      { q: 'Mis amigos ___ muy simpáticos.', a: ['son'], opts: ['son', 'están'] },
      { q: 'Nosotros ___ comiendo en la terraza.', a: ['estamos'], opts: ['somos', 'estamos'] },
      { q: '¿Dónde ___ mis gafas?', a: ['están'], opts: ['son', 'están'] },
      { q: 'La mesa ___ de madera.', a: ['es'], opts: ['es', 'está'] },
      { q: 'En la plaza ___ una fuente.', a: ['hay'], opts: ['hay', 'está'] },
      { q: 'La fuente ___ en el centro de la plaza.', a: ['está'], opts: ['hay', 'está'] },
      { q: 'Madrid ___ la capital de España.', a: ['es'], opts: ['es', 'está'] },
      { q: '¿Qué tal?\n___ bien, gracias.', a: ['estoy'], opts: ['soy', 'estoy'] },
      { q: 'El piso ___ muy luminoso.', a: ['es'], opts: ['es', 'está'], expl: 'Caractéristique permanente du logement → ser.' },
      { q: 'La puerta ___ abierta.', a: ['está'], opts: ['es', 'está'], expl: 'État (résultat d’une action) → estar.' },
    ],
    speak: ['Preséntate: ¿quién eres, de dónde eres, cómo eres?', '¿Cómo estás hoy y por qué?', 'Describe tu ciudad: ¿cómo es? ¿qué hay? ¿dónde está?'],
  };

  T.gustar = {
    label: 'Gustar & les goûts', level: 'A1',
    fiche: `
<p><b>Gustar</b> fonctionne « à l'envers » : la chose aimée est le sujet.</p>
<table><tr><td>(a mí)</td><td><b>me</b> gusta el cine / gusta<b>n</b> los perros</td></tr>
<tr><td>(a ti)</td><td><b>te</b> gusta(n)</td></tr><tr><td>(a él/ella/usted)</td><td><b>le</b> gusta(n)</td></tr>
<tr><td>(a nosotros)</td><td><b>nos</b> gusta(n)</td></tr><tr><td>(a vosotros)</td><td><b>os</b> gusta(n)</td></tr>
<tr><td>(a ellos)</td><td><b>les</b> gusta(n)</td></tr></table>
<p>+ infinitif → toujours <b>gusta</b> : <i>Me gusta cocinar y leer.</i></p>
<p>Réagir : <i>A mí también</i> (moi aussi) · <i>A mí tampoco</i> (moi non plus) · <i>A mí sí / A mí no</i>. Même schéma : encantar, interesar, doler (<i>me duele la cabeza</i>).</p>`,
    bank: [
      { q: 'A mí ___ gusta el chocolate.', a: ['me'] },
      { q: 'Me ___ los perros.', a: ['gustan'], opts: ['gusta', 'gustan'] },
      { q: 'Me ___ cocinar y bailar.', a: ['gusta'], opts: ['gusta', 'gustan'] },
      { q: 'A mi madre ___ encanta el teatro.', a: ['le'] },
      { q: 'A nosotros ___ gusta viajar.', a: ['nos'] },
      { q: '¿A ti ___ gustan las series?', a: ['te'] },
      { q: 'A mis amigos ___ gusta el fútbol.', a: ['les'] },
      { q: 'No me gusta el pescado.\nA mí ___ . (moi non plus)', a: ['tampoco'] },
      { q: 'Me encanta la paella.\nA mí ___ . (moi aussi)', a: ['también'] },
      { q: 'Me ___ la cabeza. (j’ai mal)', a: ['duele'], opts: ['duele', 'duelen'] },
      { q: 'Me duelen ___ pies.', a: ['los'], opts: ['los', 'mis'] , expl: 'Avec les parties du corps, on utilise l’article, pas le possessif.' },
    ],
    speak: ['¿Qué te gusta hacer en tu tiempo libre? ¿Y qué no te gusta nada?', 'Habla de tu comida favorita y de la que odias.', '¿Qué música te gusta? ¿Por qué?'],
  };

  T.interrogativos = {
    label: 'Les interrogatifs', level: 'A1',
    fiche: `
<p>Toujours avec <b>accent</b> et <b>¿ … ?</b></p>
<ul><li><b>¿Qué?</b> quoi / quel (+ nom) : <i>¿Qué hora es?</i></li>
<li><b>¿Quién? / ¿Quiénes?</b> qui : <i>¿Quién es tu mejor amigo?</i></li>
<li><b>¿Dónde?</b> où : <i>¿Dónde está la biblioteca?</i> · <b>¿Adónde?</b> où (direction) · <b>¿De dónde?</b> d'où</li>
<li><b>¿Cuándo?</b> quand : <i>¿Cuándo es tu cumpleaños?</i></li>
<li><b>¿Por qué?</b> pourquoi → réponse <b>porque</b> (parce que)</li>
<li><b>¿Cómo?</b> comment : <i>¿Cómo te llamas?</i></li>
<li><b>¿Cuánto/a/os/as?</b> combien : accord : <i>¿Cuántos libros? ¿Cuántas personas?</i></li>
<li><b>¿Cuál? / ¿Cuáles?</b> lequel / quel (+ verbe) : <i>¿Cuál es tu color favorito?</i></li></ul>
<p>Piège : <b>¿Qué</b> + nom (<i>¿Qué libro?</i>) mais <b>¿Cuál</b> + es (<i>¿Cuál es tu libro?</i>).</p>`,
    bank: [
      { q: '¿___ te llamas?', a: ['cómo'] },
      { q: '¿___ vives?\nEn Bruselas.', a: ['dónde'] },
      { q: '¿___ años tienes?', a: ['cuántos'] },
      { q: '¿___ personas hay en tu familia?', a: ['cuántas'] },
      { q: '¿___ es tu cumpleaños?\nEl 3 de marzo.', a: ['cuándo'] },
      { q: '¿___ no viniste a la fiesta?\nPorque estaba enfermo.', a: ['por qué'] },
      { q: '¿___ es tu color favorito?', a: ['cuál'], opts: ['qué', 'cuál'] },
      { q: '¿___ hora es?', a: ['qué'], opts: ['qué', 'cuál'] },
      { q: '¿___ es ese chico?\nEs mi hermano.', a: ['quién'] },
      { q: '¿___ van a la fiesta?\nAna y Pablo.', a: ['quiénes'] },
      { q: '¿___ cuesta este libro?\n15 euros.', a: ['cuánto'] },
      { q: '¿De ___ eres?\nSoy de Bélgica.', a: ['dónde'] },
      { q: '¿___ haces el fin de semana?', a: ['qué'] },
      { q: '¿___ de estos cursos me recomiendas?', a: ['cuál'], opts: ['qué', 'cuál'] },
      { q: '¿___ vas?\nVoy al cine.', a: ['adónde', 'a dónde'] },
    ],
    speak: ['Hazme cinco preguntas para conocerme mejor.', 'Imagina que entrevistas a un famoso: ¿qué le preguntas?'],
  };

  T.preposiciones = {
    label: 'Les prépositions', level: 'A1',
    fiche: `
<ul><li><b>a</b> : direction, destination, COD de personne : <i>Voy <b>a</b> la universidad. Llamo <b>a</b> mi madre.</i> (a + el = <b>al</b>)</li>
<li><b>de</b> : possession, origine, matière : <i>La casa <b>de</b> mi abuela. Soy <b>de</b> Bélgica.</i> (de + el = <b>del</b>)</li>
<li><b>en</b> : lieu, moment, moyen de transport : <i>Estoy <b>en</b> casa. Viajo <b>en</b> avión.</i></li>
<li><b>con / sin</b> : avec / sans : <i>café <b>con</b> leche, <b>sin</b> azúcar</i></li>
<li><b>sobre</b> : sur (surface) / à propos de : <i>Hablamos <b>sobre</b> el trabajo.</i></li>
<li>Lieu : <b>delante de</b> (devant), <b>detrás de</b> (derrière), <b>encima de</b> (sur), <b>debajo de</b> (sous), <b>al lado de</b> (à côté), <b>enfrente de</b> (en face), <b>entre</b> (entre), <b>cerca de / lejos de</b>.</li></ul>
<p>Piège francophone : <i>ir <b>en</b> coche</i> mais <i>ir <b>a</b> pie</i> ; <i>pienso <b>en</b> ti</i> ; <i>estoy <b>en</b> Madrid</i> (pas « a »).</p>`,
    bank: [
      { q: 'Voy ___ la universidad cada día.', a: ['a'] },
      { q: 'La casa ___ mi abuela es grande.', a: ['de'] },
      { q: 'Estoy ___ casa.', a: ['en'] },
      { q: 'Viajamos ___ avión.', a: ['en'] },
      { q: 'Voy al trabajo ___ pie.', a: ['a'] },
      { q: 'Un café ___ leche, por favor.', a: ['con'] },
      { q: 'Preparé la cena ___ sal.', a: ['sin'] },
      { q: 'Hablamos ___ el trabajo.', a: ['sobre', 'de'] },
      { q: 'Vamos ___ cine esta noche. (a + el)', a: ['al'] },
      { q: 'Vengo ___ supermercado. (de + el)', a: ['del'] },
      { q: 'El gato está ___ de la caja (dessous).', a: ['debajo'] },
      { q: 'El banco está ___ de la farmacia (en face).', a: ['enfrente', 'delante'] },
      { q: 'La fuente está ___ el parque y la iglesia.', a: ['entre'] },
      { q: 'Llamo ___ mi madre todos los domingos.', a: ['a'], expl: 'COD de personne → « a » personnel.' },
      { q: 'Pienso mucho ___ ti.', a: ['en'] },
      { q: 'Vivo ___ Bruselas desde 2020.', a: ['en'] },
    ],
    speak: ['Describe tu habitación con muchos detalles: ¿dónde está cada cosa?', 'Explica cómo ir de tu casa a tu trabajo o universidad.'],
  };

  T.por_para = {
    label: 'Por ou para', level: 'A2',
    fiche: `
<p><b>PARA</b> → regard tourné vers le <b>but</b> : objectif, destinataire, destination, échéance.<br>
<i>Estudio <b>para</b> ser médico. Un regalo <b>para</b> mi hermana. Salgo <b>para</b> Madrid. Es <b>para</b> el lunes.</i></p>
<p><b>POR</b> → la <b>cause</b>, le chemin, le moyen, l'échange, la durée/moment approximatif.<br>
<i>Lo hago <b>por</b> ti. Paseo <b>por</b> el parque. Hablo <b>por</b> teléfono. Gracias <b>por</b> todo. 20 € <b>por</b> persona. <b>Por</b> la mañana.</i></p>`,
    bank: [
      { q: 'Estudio ___ ser médico.', a: ['para'], opts: ['por', 'para'] },
      { q: 'Compré un regalo ___ mi hermana.', a: ['para'], opts: ['por', 'para'] },
      { q: 'Gracias ___ tu ayuda.', a: ['por'], opts: ['por', 'para'] },
      { q: 'Paseamos ___ el centro de la ciudad.', a: ['por'], opts: ['por', 'para'] },
      { q: 'Te llamo ___ teléfono.', a: ['por'], opts: ['por', 'para'] },
      { q: 'Tengo clase ___ la mañana.', a: ['por'], opts: ['por', 'para'] },
      { q: 'El informe es ___ el lunes.', a: ['para'], opts: ['por', 'para'] },
      { q: 'Salimos ___ Madrid mañana a las 9.', a: ['para'], opts: ['por', 'para'] },
      { q: 'No vine ___ la lluvia.', a: ['por'], opts: ['por', 'para'], expl: 'Cause → por.' },
      { q: 'El menú cuesta 15 euros ___ persona.', a: ['por'], opts: ['por', 'para'] },
      { q: '¿___ qué estudias español?\nPara trabajar en España.', a: ['para'], opts: ['por', 'para'], expl: '¿Para qué? = dans quel but.' },
      { q: 'Estoy aquí ___ el trabajo.', a: ['por'], opts: ['por', 'para'], expl: 'Cause (à cause du travail) → por.' },
    ],
    speak: ['¿Para qué aprendes español? Da tres razones.', '¿Por qué te gusta (o no) tu ciudad?'],
  };

  T.perfecto = {
    label: 'Pretérito perfecto', level: 'A2',
    gen: { tenses: ['perfecto'], markers: ['Hoy', 'Esta mañana', 'Este año', 'Esta semana', 'Ya', 'Nunca', 'Todavía no'] },
    fiche: `
<p><b>haber</b> au présent + <b>participe</b> (invariable) : « He perdido mis gafas ».</p>
<table><tr><td>yo he</td><td>tú has</td><td>él ha</td><td>nosotros hemos</td><td>vosotros habéis</td><td>ellos han</td></tr></table>
<p>Participe : -ar → <b>-ado</b> (hablado), -er/-ir → <b>-ido</b> (comido, salido).<br>
Irréguliers : volver → <b>vuelto</b>, hacer → <b>hecho</b>, ver → <b>visto</b>, escribir → <b>escrito</b>, decir → <b>dicho</b>, poner → <b>puesto</b>, romper → <b>roto</b>, abrir → <b>abierto</b>.</p>
<p><b>Emploi</b> : action passée dans une période <b>pas encore terminée</b> ou liée au présent : <i>hoy, esta mañana, este año, ya, todavía no, nunca, alguna vez</i>.<br>
<i>¿Has comido sushi alguna vez? : No, nunca he comido sushi.</i></p>
<p>On ne sépare jamais haber du participe : <i>Ya <b>lo he hecho</b></i> (pas « he lo hecho »).</p>`,
    speak: ['¿Qué has hecho hoy? Cuéntamelo todo.', '¿Has viajado a otro país alguna vez? ¿Cuál?', '¿Qué cosas nunca has hecho y te gustaría hacer?'],
  };

  T.indefinido = {
    label: 'Pretérito indefinido', level: 'A2',
    gen: { tenses: ['indefinido'], markers: ['Ayer', 'Anoche', 'La semana pasada', 'El año pasado', 'En 2019', 'El otro día', 'Hace dos años'] },
    fiche: `
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>hablé</td><td>comí</td><td>viví</td></tr><tr><td>tú</td><td>hablaste</td><td>comiste</td><td>viviste</td></tr>
<tr><td>él/ella</td><td>habló</td><td>comió</td><td>vivió</td></tr><tr><td>nosotros</td><td>hablamos</td><td>comimos</td><td>vivimos</td></tr>
<tr><td>vosotros</td><td>hablasteis</td><td>comisteis</td><td>vivisteis</td></tr><tr><td>ellos</td><td>hablaron</td><td>comieron</td><td>vivieron</td></tr></table>
<p><b>-ir à diphtongue</b> (3e pers.) : pedir → p<b>i</b>dió, p<b>i</b>dieron ; sentir → s<b>i</b>ntió ; dormir → d<b>u</b>rmió.</p>
<p><b>Radicaux irréguliers</b> + <i>-e, -iste, -o, -imos, -isteis, -ieron</i> (sans accent !) : estar → estuv-, tener → tuv-, poder → pud-, poner → pus-, saber → sup-, querer → quis-, hacer → hic- (hizo), venir → vin-. decir → dij- (dijeron), traer → traj-.</p>
<p><b>Ser = Ir</b> : fui, fuiste, fue, fuimos, fuisteis, fueron. Orthographe : busqué, llegué, empecé.</p>
<p><b>Emploi</b> : action <b>terminée</b> dans une période <b>terminée</b> : <i>ayer, anoche, la semana pasada, en 2019</i>. C'est le temps du <b>récit</b>.</p>`,
    bank: [
      { q: 'La semana pasada nosotros (ir) ___ al cine.', a: ['fuimos'], expl: 'ir → fui, fuiste, fue, fuimos…' },
      { q: 'El mes pasado yo (estudiar) ___ mucho.', a: ['estudié'], opts: ['estudé', 'estudié'] },
      { q: 'Ayer mi madre (cocinar) ___ una cena deliciosa.', a: ['cocinó'], opts: ['cocinio', 'cocinó'] },
      { q: 'El fin de semana pasado mis amigos y yo (ir) ___ de excursión.', a: ['fuimos'], opts: ['fueron', 'fuimos'] },
      { q: 'Le (pedir/nosotros) ___ al personal que mejorara la comida.', a: ['pedimos'] },
      { q: 'La comida (llegar) ___ fría.', a: ['llegó'] },
      { q: 'Ayer Luis (conducir) ___ un camión por primera vez.', a: ['condujo'] },
      { q: 'Anoche no (poder/yo) ___ dormir.', a: ['pude'] },
      { q: 'Mi amiga (elegir) ___ una pasta.', a: ['eligió'] },
      { q: '¿Qué (hacer/tú) ___ ayer?', a: ['hiciste'] },
    ],
    speak: ['¿Qué hiciste el fin de semana pasado?', 'Cuenta una mala experiencia en un restaurante.', 'Cuenta tu último viaje: ¿adónde fuiste, con quién, qué hiciste?'],
  };

  T.imperfecto = {
    label: 'Pretérito imperfecto', level: 'A2',
    gen: { tenses: ['imperfecto'], markers: ['Antes', 'De niño', 'Cuando era pequeño', 'Siempre', 'Todos los veranos', 'Normalmente'] },
    fiche: `
<p>-ar → <b>-aba</b> : trabajaba, trabajabas, trabajaba, trabaj<b>á</b>bamos, trabajabais, trabajaban<br>
-er/-ir → <b>-ía</b> : comía, comías, comía, comíamos, comíais, comían</p>
<p>3 irréguliers seulement : <b>ser</b> (era, eras, era, éramos, erais, eran), <b>ir</b> (iba, ibas, iba, íbamos, ibais, iban), <b>ver</b> (veía…).</p>
<p><b>Emploi</b> : <b>habitudes</b> passées (<i>antes, de niño, siempre, todos los días</i>) et <b>descriptions</b> / décor du récit (<i>hacía sol, estaba cansado, era tarde</i>).<br>
≈ l'imparfait français. <i>Cuando viajaba, me levantaba a las siete.</i></p>`,
    speak: ['¿Cómo era tu vida cuando eras niño? ¿Qué hacías?', '¿Cómo era tu ciudad hace diez años?', 'Describe a tu mejor amigo de la infancia.'],
  };

  T.contraste_pasados = {
    label: 'Choisir le bon passé', level: 'A2',
    fiche: `
<table><tr><th>Temps</th><th>Quand l'utiliser</th><th>Marqueurs</th></tr>
<tr><td><b>Perfecto</b> (he comido)</td><td>période non terminée, lien avec maintenant, expérience</td><td>hoy, esta mañana, este año, ya, nunca, alguna vez</td></tr>
<tr><td><b>Indefinido</b> (comí)</td><td>action ponctuelle, terminée, période finie → <b>événements</b></td><td>ayer, anoche, el lunes, en 2020, hace 2 años</td></tr>
<tr><td><b>Imperfecto</b> (comía)</td><td>habitude, description, décor, action « en cours » interrompue</td><td>antes, de niño, siempre, mientras</td></tr></table>
<p>Récit : <b>imperfecto</b> = le décor, <b>indefinido</b> = ce qui se passe.<br>
<i>Llovía y estaba en la ducha cuando alguien llamó a la puerta.</i></p>`,
    bank: [
      { q: 'El mes pasado ___ en la universidad.', a: ['me inscribí'], opts: ['me he inscrito', 'me inscribí'] },
      { q: 'Como no ___ ninguna confirmación, la semana pasada llamé.', a: ['recibí'], opts: ['he recibido', 'recibí'] },
      { q: 'Hoy ___ el curso en la universidad.', a: ['he comenzado'], opts: ['he comenzado', 'comencé'] },
      { q: 'Ya ___ la carrera de periodismo. (terminar/yo)', a: ['he terminado'], opts: ['he terminado', 'terminé'] },
      { q: 'Ayer ___ al médico por la tarde.', a: ['fui'], opts: ['he ido', 'fui', 'iba'] },
      { q: 'De niño ___ al fútbol todos los sábados.', a: ['jugaba'], opts: ['jugué', 'jugaba', 'he jugado'] },
      { q: 'Cuando ___ en la ducha, llamaron a la puerta.', a: ['estaba'], opts: ['estuve', 'estaba'] },
      { q: '¿___ sushi alguna vez?', a: ['has comido'], opts: ['comiste', 'has comido', 'comías'] },
      { q: 'El sábado pasado ___ el partido del Manchester City.', a: ['vimos'], opts: ['hemos visto', 'vimos', 'veíamos'] },
      { q: 'Antes ___ para una compañía internacional.', a: ['trabajaba'], opts: ['trabajé', 'trabajaba'] },
      { q: 'Hacía sol y ___ mucha gente en la playa.', a: ['había'], opts: ['hubo', 'había'] },
      { q: 'En 2018 ___ a vivir a Madrid.', a: ['me mudé'], opts: ['me mudé', 'me he mudado', 'me mudaba'] },
      { q: 'Esta mañana ___ tarde.', a: ['me he levantado'], opts: ['me levanté', 'me he levantado'], expl: 'En Espagne : « esta mañana » → perfecto (période d’aujourd’hui).' },
      { q: 'El otro día ___ con Pedro por la calle.', a: ['me encontré'], opts: ['me he encontrado', 'me encontré'] },
    ],
    speak: ['Cuenta un día de tu infancia que recuerdas bien: ¿cómo era el día y qué pasó?', 'Cuenta qué has hecho esta semana y qué hiciste la semana pasada.'],
  };

  T.futuro = {
    label: 'Le futur', level: 'A2',
    gen: { tenses: ['futuro', 'ir_a'], markers: ['Mañana', 'El año que viene', 'La semana que viene', 'Este verano', 'Dentro de dos años', 'El sábado'] },
    fiche: `
<p><b>Futur proche</b> : <b>ir a</b> + infinitif : <i>Voy a ver una película esta noche.</i> (le plus utilisé à l'oral)</p>
<p><b>Futur simple</b> : infinitif + <b>-é, -ás, -á, -emos, -éis, -án</b> : comer<b>é</b>, viajar<b>emos</b>.<br>
Irréguliers (même terminaisons) : tener → <b>tendr</b>é, poner → <b>pondr</b>é, salir → <b>saldr</b>é, venir → <b>vendr</b>é, poder → <b>podr</b>é, saber → <b>sabr</b>é, querer → <b>querr</b>é, hacer → <b>har</b>é, decir → <b>dir</b>é.</p>
<p>Autres façons : <i>pienso + inf.</i> (je compte), <i>quiero + inf.</i>, présent + marqueur (<i>Mañana trabajo</i>).</p>`,
    speak: ['¿Qué vas a hacer el fin de semana que viene?', '¿Cómo te imaginas tu vida dentro de diez años?', '¿Cuáles son tus planes para las próximas vacaciones?'],
  };

  T.gerundio = {
    label: 'Estar + gérondif', level: 'A1',
    gen: { tenses: ['gerundio'], markers: ['Ahora mismo', 'En este momento', 'Ahora'] },
    fiche: `
<p><b>estar</b> + gérondif = action <b>en cours</b> (« être en train de »).</p>
<p>-ar → <b>-ando</b> (habl<b>ando</b>), -er/-ir → <b>-iendo</b> (com<b>iendo</b>, viv<b>iendo</b>).</p>
<p>Irréguliers : leer → le<b>yendo</b>, oír → o<b>yendo</b>, ir → <b>yendo</b>, traer → tra<b>yendo</b> ; e→i : pedir → p<b>i</b>diendo, decir → d<b>i</b>ciendo, venir → v<b>i</b>niendo ; o→u : dormir → d<b>u</b>rmiendo, poder → p<b>u</b>diendo.</p>
<p><i>Mi hermano está aprendiendo a cocinar mientras está escuchando música.</i></p>`,
    speak: ['Describe lo que está pasando ahora mismo a tu alrededor.', 'Imagina una foto de un parque: ¿qué está haciendo la gente?'],
  };

  T.imperativo = {
    label: 'L\'impératif (tú)', level: 'A2',
    gen: { tenses: ['imperativo'], markers: [] },
    fiche: `
<p>Impératif affirmatif à <b>tú</b> = forme <b>él</b> du présent : habla, come, escribe, cierra, vuelve, pide.</p>
<p>8 irréguliers : <b>di</b> (decir), <b>haz</b> (hacer), <b>ve</b> (ir), <b>pon</b> (poner), <b>sal</b> (salir), <b>sé</b> (ser), <b>ten</b> (tener), <b>ven</b> (venir).</p>
<p>Les pronoms s'accrochent à la fin (+ accent si besoin) : <i>Corta la cebolla → <b>Córtala</b>. Pon el huevo → <b>Ponlo</b>.</i></p>
<p>Recette : <i>Pela las patatas, córtalas en rodajas y fríelas.</i></p>`,
    bank: [
      { q: '¡José! ___ las patatas en el horno. (poner)', a: ['pon'] },
      { q: '___ lo que te digo. (hacer)', a: ['haz'] },
      { q: '___ la cebolla para ganar tiempo. (cortar)', a: ['corta'] },
      { q: '___ las patatas antes de freírlas. (pelar)', a: ['pela'] },
      { q: '___ aquí, por favor. (venir)', a: ['ven'] },
      { q: '___ la verdad. (decir)', a: ['di'] },
      { q: '___ la puerta, hace frío. (cerrar)', a: ['cierra'] },
      { q: '___ una pizca de sal. (añadir)', a: ['añade'] },
      { q: 'Corta la cebolla → ___ (avec pronom)', a: ['córtala'] },
      { q: 'Pon el huevo en el plato → ___ en el plato.', a: ['ponlo'] },
      { q: '___ a la derecha en el semáforo. (girar)', a: ['gira'] },
      { q: '___ recto hasta la plaza. (seguir)', a: ['sigue'] },
    ],
    speak: ['Explica la receta de un plato que sabes cocinar.', 'Explica a un turista cómo ir de la estación al centro.'],
  };

  T.articulos = {
    label: 'Articles, genre & accords', level: 'A1',
    fiche: `
<p>Définis : <b>el</b>, <b>la</b>, <b>los</b>, <b>las</b>. Indéfinis : <b>un</b>, <b>una</b>, <b>unos</b>, <b>unas</b>.</p>
<p>En général : -o → masculin, -a → féminin. Pièges : <b>el</b> día, <b>el</b> mapa, <b>el</b> problema, <b>el</b> idioma, <b>el</b> agua (mais <i>el agua fría</i>), <b>la</b> mano, <b>la</b> foto, <b>la</b> moto. Mots en -ción/-dad → féminin (la canción, la ciudad).</p>
<p>Différences avec le français : <b>la</b> leche, <b>el</b> coche, <b>la</b> sal, <b>el</b> árbol, <b>la</b> nariz, <b>el</b> color, <b>el</b> dolor, <b>la</b> sangre.</p>
<p>L'adjectif s'accorde : <i>unas casas bonit<b>as</b>, los chicos simpátic<b>os</b></i>.</p>`,
    bank: [
      { q: '___ problema es difícil.', a: ['el'], opts: ['el', 'la'] },
      { q: '___ leche está fría.', a: ['la'], opts: ['el', 'la'] },
      { q: '___ coche de mi padre es rojo.', a: ['el'], opts: ['el', 'la'] },
      { q: 'Me encanta ___ canción.', a: ['esta'], opts: ['este', 'esta'] },
      { q: '___ día fue muy largo.', a: ['el'], opts: ['el', 'la'] },
      { q: '¿Me pasas ___ sal?', a: ['la'], opts: ['el', 'la'] },
      { q: '___ foto es muy bonita.', a: ['la'], opts: ['el', 'la'] },
      { q: 'Las chicas son muy simpátic___.', a: ['as'], opts: ['os', 'as'] },
      { q: '___ árbol es muy alto.', a: ['el'], opts: ['el', 'la'] },
      { q: 'Madrid es una ciudad muy ___ (bonito).', a: ['bonita'] },
      { q: 'Tengo ___ dolor de cabeza horrible.', a: ['un'], opts: ['un', 'una'] },
      { q: '___ agua está fría.', a: ['el'], opts: ['el', 'la'], expl: 'Féminin, mais « el » devant un a- tonique.' },
    ],
    speak: ['Describe tu casa o tu piso: las habitaciones y los muebles.'],
  };

  T.registro = {
    label: 'Registre soutenu', level: 'B1',
    fiche: `
<p>Avec un encadrant, un jury ou dans un e-mail, on monte d'un cran. Trois leviers simples :</p>
<p><b>1. Usted</b> au lieu de tú (verbe à la 3e personne) : <i>¿<b>Podría</b> usted…? ¿<b>Le</b> parece bien…?</i> Le conditionnel adoucit : <i>quería</i> / <i>querría</i>, <i>podría</i>, <i>le agradecería</i>.</p>
<p><b>2. Connecteurs</b> plus précis :</p>
<table><tr><th>Courant</th><th>Soutenu</th></tr>
<tr><td>pero</td><td>sin embargo, no obstante</td></tr>
<tr><td>por eso</td><td>por consiguiente, por lo tanto</td></tr>
<tr><td>también</td><td>asimismo, igualmente</td></tr>
<tr><td>porque</td><td>dado que, puesto que, debido a</td></tr>
<tr><td>sobre (un tema)</td><td>en cuanto a, en lo que respecta a</td></tr>
<tr><td>para</td><td>a fin de, con el fin de</td></tr></table>
<p><b>3. Verbes précis</b> au lieu des verbes passe-partout :</p>
<table><tr><th>Courant</th><th>Soutenu</th></tr>
<tr><td>hacer (un estudio)</td><td>llevar a cabo, realizar</td></tr>
<tr><td>decir</td><td>señalar, afirmar, indicar</td></tr>
<tr><td>dar (datos)</td><td>proporcionar, aportar</td></tr>
<tr><td>conseguir</td><td>lograr, alcanzar</td></tr>
<tr><td>tener</td><td>disponer de, contar con</td></tr>
<tr><td>hablar de</td><td>abordar, tratar</td></tr></table>
<p>E-mail : <i>Estimado profesor Martínez:</i> (deux-points, pas de virgule) … <i>Quedo a su disposición. Un cordial saludo.</i></p>`,
    bank: [
      { q: 'Courant : « pero » → soutenu : ___', a: ['sin embargo', 'no obstante'] },
      { q: 'Courant : « por eso » → soutenu : ___', a: ['por consiguiente', 'por lo tanto', 'en consecuencia'] },
      { q: 'Courant : « también » → soutenu : ___', a: ['asimismo', 'igualmente'] },
      { q: 'Courant : « porque » (en début de phrase) → soutenu : ___', a: ['dado que', 'puesto que', 'ya que'] },
      { q: 'Hemos hecho un estudio → Hemos ___ un estudio.', a: ['llevado a cabo', 'realizado', 'efectuado'] },
      { q: 'El autor dice que… → El autor ___ que…', a: ['señala', 'afirma', 'indica', 'sostiene'] },
      { q: 'El modelo da buenos resultados → El modelo ___ buenos resultados.', a: ['proporciona', 'ofrece', 'aporta', 'obtiene'] },
      { q: 'Hemos conseguido mejorar la precisión → Hemos ___ mejorar la precisión.', a: ['logrado'] },
      { q: 'Tenemos tres conjuntos de datos → ___ de tres conjuntos de datos.', a: ['disponemos', 'contamos'] , expl: 'Disponer de / contar con + nom.' },
      { q: 'En este capítulo hablo de los resultados → En este capítulo ___ los resultados.', a: ['abordo', 'trato', 'analizo', 'presento'] },
      { q: '¿Puedes revisar mi borrador? (formel) → ¿___ usted revisar mi borrador?', a: ['podría'] },
      { q: 'Je vous serais reconnaissant de me répondre → Le ___ que me respondiera.', a: ['agradecería'] },
      { q: 'Sobre la metodología… (soutenu) → En ___ a la metodología…', a: ['cuanto', 'lo que respecta'] },
      { q: 'Para mejorar el modelo (soutenu) → A ___ de mejorar el modelo', a: ['fin'] },
      { q: 'Début d’un e-mail formel : « ___ profesor Martínez: »', a: ['estimado'] },
      { q: 'Fin d’un e-mail formel : « Quedo a su ___. Un cordial saludo. »', a: ['disposición'] },
    ],
    speak: ['Explica tu proyecto de TFE en registro formal, como si fuera ante un tribunal (1 minuto).', 'Deja un mensaje de voz formal a tu tutor para pedir una reunión.'],
  };

  // Points de grammaire disponibles + libellés des sujets utilisés par l'IA
  const ORDER = ['presente', 'ser_estar', 'gustar', 'articulos', 'interrogativos', 'preposiciones', 'gerundio', 'perfecto', 'indefinido', 'imperfecto', 'contraste_pasados', 'futuro', 'imperativo', 'por_para', 'registro'];
  const EXTRA_TOPICS = { vocabulario: 'Vocabulaire', pronunciacion: 'Prononciation', otro: 'Autre' };

  global.GRAMMAR = { TOPICS: T, ORDER, EXTRA_TOPICS };
})(typeof window !== 'undefined' ? window : globalThis);
