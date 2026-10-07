// Corpus de vocabulaire : "espagnol | français | synonymes (séparés par ;)"
// Les thèmes marqués course:true viennent directement des cours du prof.
(function (global) {
  const RAW = {
    supervivencia: { label: 'Survie : quand je bloque', course: false, prio: 1, words: `
¿Cómo se dice ... en español? | Comment dit-on ... en espagnol ?
¿Qué significa ...? | Que veut dire ... ? | ¿Qué quiere decir ...?
No entiendo | Je ne comprends pas | No comprendo
¿Puedes repetir, por favor? | Tu peux répéter, s'il te plaît ? | ¿Me lo repites?
Más despacio, por favor | Plus lentement, s'il te plaît | Más lento
No sé cómo se dice | Je ne sais pas comment on dit
Es una cosa que sirve para... | C'est une chose qui sert à... | Es algo que se usa para...
Es una persona que... | C'est une personne qui...
Es un sitio donde... | C'est un endroit où... | Es un lugar donde...
Es como... pero... | C'est comme... mais...
Es lo contrario de... | C'est le contraire de...
¿Cómo se escribe? | Comment ça s'écrit ?
Un momento, estoy pensando | Un moment, je réfléchis | Déjame pensar
O sea... | C'est-à-dire... | Es decir
Quiero decir que... | Je veux dire que...
¿Me explico? | Je me fais comprendre ? | ¿Me entiendes?
Perdona, me he equivocado | Pardon, je me suis trompé
¿Está bien dicho así? | C'est bien dit comme ça ? | ¿Se dice así?
` },
    comodin: { label: 'Mots passe-partout', course: false, prio: 1, words: `
la cosa | la chose | el objeto; el asunto
el sitio | l'endroit | el lugar; la zona
la gente | les gens | las personas
el tipo | le genre, le type | la clase; la especie
algo | quelque chose
alguien | quelqu'un
nada | rien
nadie | personne
mucho | beaucoup | bastante; un montón
poco | peu | no mucho
demasiado | trop
más o menos | plus ou moins | aproximadamente
hacer | faire | realizar
tener | avoir | poseer
poner | mettre | colocar
dar | donner | entregar
coger | prendre | tomar; agarrar
quedar | rester / se donner rendez-vous | permanecer
pasar | passer / se passer | ocurrir; suceder
llevar | porter / emmener | transportar
usar | utiliser | utilizar; emplear
servir para | servir à | valer para
` },
    conectores: { label: 'Connecteurs', course: false, prio: 1, words: `
y | et | e (devant i-/hi-)
pero | mais | sin embargo; aunque
porque | parce que | ya que; como
por eso | c'est pour ça | por lo tanto; así que
entonces | alors, donc | luego; pues
además | en plus | también; encima
también | aussi | además
tampoco | non plus
aunque | bien que, même si | a pesar de que
mientras | pendant que | mientras tanto
cuando | quand | en cuanto
primero | d'abord | antes que nada; en primer lugar
después | après | luego; más tarde
luego | ensuite | después; más tarde
al final | à la fin | finalmente; por último
de repente | soudain | de pronto
en general | en général | normalmente; por lo general
por ejemplo | par exemple | como
sin embargo | cependant | no obstante; pero
en mi opinión | à mon avis | para mí; creo que
la verdad es que | à vrai dire | sinceramente
bueno | bon, eh bien | pues; vale
vale | d'accord | de acuerdo; ok
` },
    marcadores: { label: 'Marqueurs de temps', course: true, prio: 1, words: `
ayer | hier
anoche | hier soir
anteayer | avant-hier
la semana pasada | la semaine dernière
el año pasado | l'année dernière
el otro día | l'autre jour | hace unos días
hace dos años | il y a deux ans
hoy | aujourd'hui
esta mañana | ce matin
este año | cette année
ya | déjà
todavía no | pas encore | aún no
nunca | jamais | jamás
alguna vez | déjà (une fois) | en alguna ocasión
antes | avant | anteriormente
de niño | enfant (quand j'étais) | cuando era pequeño
siempre | toujours
a menudo | souvent | con frecuencia; muchas veces
a veces | parfois | de vez en cuando
mañana | demain
pasado mañana | après-demain
el año que viene | l'année prochaine | el próximo año
dentro de una semana | dans une semaine
ahora | maintenant | ahora mismo; en este momento
pronto | bientôt
tarde | tard
temprano | tôt
el finde | le week-end | el fin de semana
` },
    verbos: { label: 'Verbes essentiels', course: false, prio: 1, words: `
ser | être (identité, caractère)
estar | être (état, lieu)
haber (hay) | il y a
tener que | devoir | deber
hay que | il faut | es necesario
ir | aller
venir | venir
volver | revenir | regresar
salir | sortir | irse
entrar | entrer
llegar | arriver
quedarse | rester | permanecer
querer | vouloir | desear
poder | pouvoir
saber | savoir
conocer | connaître
pensar | penser | creer; opinar
creer | croire | pensar
decir | dire
hablar | parler | charlar; conversar
contar | raconter / compter | narrar
preguntar | demander (question)
pedir | demander (objet), commander | solicitar
contestar | répondre | responder
explicar | expliquer
entender | comprendre | comprender
aprender | apprendre
enseñar | enseigner / montrer | mostrar
ver | voir | mirar
mirar | regarder | observar
oír | entendre | escuchar
escuchar | écouter
buscar | chercher
encontrar | trouver | hallar
perder | perdre
ganar | gagner
empezar | commencer | comenzar
terminar | finir | acabar
seguir | continuer / suivre | continuar
cambiar | changer
ayudar | aider | echar una mano
necesitar | avoir besoin de | hacer falta
gustar | plaire | encantar (= adorer)
preferir | préférer
odiar | détester | no soportar
esperar | attendre / espérer | aguardar
intentar | essayer | tratar de; probar
olvidar | oublier | olvidarse de
recordar | se souvenir | acordarse de
dejar | laisser / prêter | prestar
llevar | porter / emmener
traer | apporter
comprar | acheter
vender | vendre
pagar | payer
costar | coûter | valer
abrir | ouvrir
cerrar | fermer
vivir | vivre / habiter | residir
trabajar | travailler | currar (fam.)
descansar | se reposer | relajarse
dormir | dormir
despertarse | se réveiller
levantarse | se lever
acostarse | se coucher
ducharse | se doucher
vestirse | s'habiller
llamar | appeler | telefonear
escribir | écrire
leer | lire
viajar | voyager
visitar | visiter
conducir | conduire | manejar (Amérique latine)
caminar | marcher | andar; pasear
correr | courir
jugar | jouer (jeu, sport)
tocar | toucher / jouer (instrument)
divertirse | s'amuser | pasarlo bien
sentirse | se sentir
pasarlo bien | passer un bon moment | divertirse; disfrutar
disfrutar | profiter, apprécier | gozar
` },
    adjetivos: { label: 'Adjectifs & description', course: true, prio: 1, words: `
grande | grand | enorme (très grand)
pequeño | petit | chico
alto | grand (taille)
bajo | petit (taille)
largo | long
corto | court
nuevo | neuf, nouveau | moderno
viejo | vieux | antiguo; mayor (personne)
joven | jeune
bonito | joli | precioso; mono; lindo
feo | moche
guapo | beau (personne) | atractivo
bueno | bon | estupendo; genial
malo | mauvais | horrible; fatal
fácil | facile | sencillo
difícil | difficile | complicado
caro | cher
barato | bon marché | económico
rápido | rapide
lento | lent
fuerte | fort
débil | faible
lleno | plein | completo
vacío | vide
limpio | propre
sucio | sale
tranquilo | calme | relajado
ruidoso | bruyant
interesante | intéressant
aburrido | ennuyeux / qui s'ennuie
divertido | amusant | gracioso; entretenido
simpático | sympathique | majo; agradable
antipático | antipathique | desagradable
amable | aimable | atento
contento | content | feliz; alegre
triste | triste
cansado | fatigué | agotado (épuisé)
enfadado | fâché | molesto; cabreado (fam.)
nervioso | nerveux | estresado
preocupado | inquiet
ocupado | occupé | liado (fam.)
libre | libre | disponible
importante | important
increíble | incroyable | impresionante
raro | bizarre / rare | extraño
normal | normal | habitual
caliente | chaud (objet)
frío | froid
oscuro | sombre
claro | clair
` },
    tfe: { label: 'Erasmus, université & TFE', course: false, prio: 1, words: `
el TFM / el TFG | le TFE (mémoire master / bachelier) | el trabajo de fin de máster; la tesina
el tutor | l'encadrant, le promoteur | el director; el supervisor
el cotutor | le co-encadrant
la reunión | la réunion
quedar con el tutor | avoir rendez-vous avec l'encadrant | tener una reunión con
el laboratorio | le laboratoire | el labo
el despacho | le bureau (pièce) | la oficina
el departamento | le département
la investigación | la recherche
el proyecto | le projet
el objetivo | l'objectif | la meta
la hipótesis | l'hypothèse
los resultados | les résultats
los datos | les données
la bibliografía | la bibliographie | las referencias
el borrador | le brouillon | la versión preliminar
el plazo | le délai, la deadline | la fecha límite; la fecha de entrega
entregar | rendre, remettre | presentar
la defensa | la soutenance | la presentación
corregir | corriger | revisar
el comentario | le commentaire, retour | la observación
avanzar | avancer | progresar
estar atascado | être bloqué | no saber cómo seguir
¿Podemos quedar para hablar de...? | Peut-on se voir pour parler de... ? | ¿Tendrías un momento para...?
Le escribo para... | Je vous écris pour... | Te escribo para...
Quería preguntarle... | Je voulais vous demander... | Quería consultarte...
¿Le parece bien...? | Ça vous convient... ? | ¿Te parece bien...?
Un saludo / Saludos cordiales | Cordialement | Atentamente
el estudiante Erasmus | l'étudiant Erasmus | el estudiante de intercambio
la beca | la bourse
la matrícula | l'inscription | la inscripción
el acuerdo de estudios | le learning agreement | el learning agreement
la asignatura | le cours, la matière | la materia
el compañero de clase | le camarade de classe | el compañero
el horario | l'horaire
` },
    futbol: { label: 'Football & Barça', course: false, prio: 1, words: `
el partido | le match | el encuentro
el equipo | l'équipe | el club
el aficionado | le supporter | el hincha; el seguidor; el culé (supporter du Barça)
la peña / la penya | le club de supporters
el estadio | le stade | el campo
el Camp Nou | le Camp Nou (stade du Barça)
la entrada | le billet (match) | el ticket
el abono | l'abonnement
el jugador | le joueur | el futbolista
el entrenador | l'entraîneur | el míster
el portero | le gardien | el guardameta; el arquero (Am. lat.)
el defensa | le défenseur | el central; el lateral
el centrocampista | le milieu | el medio; el mediocentro
el delantero | l'attaquant | el atacante; el nueve
el árbitro | l'arbitre | el colegiado
el gol | le but
marcar un gol | marquer un but | meter un gol
el golazo | le but magnifique
empatar | faire match nul | quedar empate
ganar | gagner | vencer
perder | perdre
el resultado | le score | el marcador
la primera parte | la première mi-temps
el descanso | la mi-temps (pause)
la segunda parte | la seconde mi-temps
el penalti | le penalty
el fuera de juego | le hors-jeu
la falta | la faute | la infracción
la tarjeta amarilla / roja | le carton jaune / rouge
el córner | le corner | el saque de esquina
el VAR | la VAR
el fichaje | le transfert / la recrue
el clásico | le Clásico (Barça contre Real Madrid)
el derbi | le derby (Barça contre Espanyol)
la Liga | la Liga
la Champions | la Ligue des champions
la cantera | le centre de formation | La Masia (celui du Barça)
¡Qué golazo! | Quel but ! | ¡Vaya gol!
¡Visca el Barça! | Vive le Barça ! (catalan) | ¡Força Barça!
¿Quién crees que va a ganar? | Qui va gagner selon toi ?
¿Has visto el partido? | Tu as vu le match ?
jugar bien / mal | bien / mal jouer
el pase | la passe
el regate | le dribble
tirar / chutar | tirer | disparar
la afición | les supporters (collectif) | la hinchada
cantar el himno | chanter l'hymne
` },
    soutenu: { label: 'Registre soutenu', course: false, prio: 1, words: `
sin embargo | cependant | no obstante; ahora bien
por consiguiente | par conséquent | por lo tanto; en consecuencia
asimismo | de même, également | igualmente; del mismo modo
además | de plus | es más; por otra parte
en cuanto a | en ce qui concerne | en lo que respecta a; respecto a
cabe destacar que | il convient de souligner que | conviene señalar que; hay que subrayar que
llevar a cabo | réaliser, mener | realizar; efectuar
señalar | souligner, indiquer | indicar; poner de relieve
afirmar | affirmer | sostener; declarar
plantear | soulever, poser (un problème) | proponer; formular
abordar | aborder, traiter | tratar; examinar
lograr | parvenir à, obtenir | conseguir; alcanzar
proporcionar | fournir | aportar; facilitar
disponer de | disposer de | contar con; tener
suponer | impliquer, représenter | implicar; conllevar
conllevar | entraîner (conséquence) | implicar; acarrear
destacar | se distinguer, mettre en avant | resaltar; sobresalir
adecuado | approprié | apropiado; pertinente
fiable | fiable | seguro; robusto
pertinente | pertinent | relevante; oportuno
a fin de | afin de | con el fin de; para
debido a | en raison de | a causa de; por
en la medida en que | dans la mesure où
a pesar de | malgré | pese a
dado que | étant donné que | puesto que; ya que
en definitiva | en définitive | en resumen; en conclusión
por un lado... por otro lado | d'un côté... de l'autre | por una parte... por otra
desde mi punto de vista | de mon point de vue | a mi juicio; en mi opinión
le agradecería que... | je vous serais reconnaissant de...
quedo a su disposición | je reste à votre disposition
` },
    ia: { label: 'IA & machine learning', course: false, prio: 1, words: `
la inteligencia artificial (IA) | l'intelligence artificielle
el aprendizaje automático | l'apprentissage automatique | el machine learning
el aprendizaje profundo | l'apprentissage profond | el deep learning
la red neuronal | le réseau de neurones
el modelo | le modèle
entrenar un modelo | entraîner un modèle | ajustar un modelo
el entrenamiento | l'entraînement
el conjunto de datos | le jeu de données | el dataset; la base de datos
el conjunto de entrenamiento | le jeu d'entraînement
el conjunto de prueba | le jeu de test | el conjunto de test
la validación cruzada | la validation croisée
la variable | la variable | el atributo; la característica
la etiqueta | l'étiquette, le label
el aprendizaje supervisado | l'apprentissage supervisé
el aprendizaje no supervisado | l'apprentissage non supervisé
el aprendizaje por refuerzo | l'apprentissage par renforcement
la clasificación | la classification
la regresión | la régression
el agrupamiento | le clustering | el clustering
el sobreajuste | le surapprentissage | el overfitting
el subajuste | le sous-apprentissage | el underfitting
la función de pérdida | la fonction de perte | la función de coste
el descenso de gradiente | la descente de gradient
el hiperparámetro | l'hyperparamètre
la tasa de aprendizaje | le taux d'apprentissage | el learning rate
la exactitud | l'exactitude (accuracy) | la precisión global
la precisión | la précision
la exhaustividad | le rappel (recall) | la sensibilidad
la matriz de confusión | la matrice de confusion
el sesgo | le biais
la varianza | la variance
la inferencia | l'inférence
el ajuste fino | le fine-tuning | el fine-tuning
el modelo de lenguaje | le modèle de langage | el LLM
el algoritmo | l'algorithme
el rendimiento | la performance | el desempeño
la métrica | la métrique | el indicador
la explicabilidad | l'explicabilité | la interpretabilidad
el preprocesamiento | le prétraitement
el código | le code
programar | programmer | codificar
la biblioteca | la bibliothèque (logicielle) | la librería
el servidor | le serveur
la GPU | le GPU | la tarjeta gráfica
` },
    decision: { label: 'Aide à la décision', course: false, prio: 1, words: `
la toma de decisiones | la prise de décision
el apoyo a la decisión | l'aide à la décision | la ayuda a la decisión
el sistema de apoyo a la decisión | le système d'aide à la décision | el DSS
la investigación operativa | la recherche opérationnelle | la investigación de operaciones
la optimización | l'optimisation
optimizar | optimiser | mejorar
la función objetivo | la fonction objectif
la restricción | la contrainte
la programación lineal | la programmation linéaire
la programación entera | la programmation en nombres entiers
la solución óptima | la solution optimale
la solución factible | la solution réalisable
la heurística | l'heuristique
la metaheurística | la métaheuristique
el análisis multicriterio | l'analyse multicritère | el análisis de decisión multicriterio
el criterio | le critère
la alternativa | l'alternative, l'option | la opción
la ponderación | la pondération | el peso
el decisor | le décideur | el tomador de decisiones
la preferencia | la préférence
la incertidumbre | l'incertitude
el riesgo | le risque
el escenario | le scénario
la simulación | la simulation
el modelo predictivo | le modèle prédictif
el pronóstico | la prévision | la predicción
el cuadro de mando | le tableau de bord | el dashboard
el indicador clave (KPI) | l'indicateur clé | el KPI
el compromiso | le compromis | el equilibrio
la sensibilidad | la sensibilité | el análisis de sensibilidad
evaluar | évaluer | valorar
priorizar | prioriser | jerarquizar
el recurso | la ressource
la planificación | la planification
la cadena de suministro | la chaîne d'approvisionnement | la logística
` },
    banca: { label: 'Banque & finance', course: false, prio: 1, words: `
el banco | la banque
la entidad financiera | l'établissement financier | la entidad bancaria
el sector bancario | le secteur bancaire | la banca
la cuenta corriente | le compte courant
el cliente | le client
el préstamo | le prêt | el crédito
la hipoteca | le prêt immobilier
el tipo de interés | le taux d'intérêt
la tasa | le taux | el tipo
el depósito | le dépôt
el ahorro | l'épargne
la inversión | l'investissement
invertir | investir
el inversor | l'investisseur | el inversionista
la rentabilidad | la rentabilité | el rendimiento
el riesgo de crédito | le risque de crédit
la morosidad | les impayés, le taux de défaut | el impago
la solvencia | la solvabilité
la liquidez | la liquidité
el activo | l'actif
el pasivo | le passif
el balance | le bilan
la cuenta de resultados | le compte de résultat
el beneficio | le bénéfice | la ganancia
la pérdida | la perte
la bolsa | la bourse | el mercado bursátil
la acción | l'action (titre)
el bono | l'obligation | la obligación
la cartera de inversión | le portefeuille d'investissement | el portafolio
la gestión de riesgos | la gestion des risques
el cumplimiento normativo | la conformité | el compliance
la normativa | la réglementation | la regulación
el regulador | le régulateur | el supervisor
el Banco Central Europeo (BCE) | la Banque centrale européenne
la detección de fraude | la détection de fraude
el blanqueo de capitales | le blanchiment d'argent | el lavado de dinero
la puntuación crediticia | le scoring de crédit | el scoring
la banca digital | la banque en ligne | la banca en línea
la transferencia | le virement
la comisión | les frais, la commission
el analista financiero | l'analyste financier
la auditoría | l'audit
la ciberseguridad | la cybersécurité
la confidencialidad | la confidentialité | la privacidad
los datos sensibles | les données sensibles | los datos confidenciales
` },
    rag: { label: 'RAG & LLM', course: false, prio: 1, words: `
la generación aumentada por recuperación (RAG) | la génération augmentée par récupération | el RAG
la recuperación de información | la recherche d'information
el modelo de lenguaje grande (LLM) | le grand modèle de langage | el LLM
soberano | souverain | autónomo; bajo control propio
la soberanía de los datos | la souveraineté des données | la soberanía digital
alojar en local | héberger en local | desplegar on-premise
el despliegue | le déploiement | la implantación
desplegar | déployer | implantar
la nube | le cloud | el cloud
el modelo de código abierto | le modèle open source | el modelo abierto
la base de conocimiento | la base de connaissances
el documento | le document
el fragmento | le chunk, le fragment | el chunk
fragmentar | découper (en chunks) | dividir; trocear
la incrustación (embedding) | l'embedding | el embedding; el vector
la base de datos vectorial | la base de données vectorielle
la búsqueda semántica | la recherche sémantique
la búsqueda por similitud | la recherche par similarité
el reordenamiento | le reranking | el reranking
la consulta | la requête | la pregunta; el query
el contexto | le contexte
la ventana de contexto | la fenêtre de contexte
la instrucción (prompt) | le prompt | el prompt
la alucinación | l'hallucination
la fuente | la source
citar las fuentes | citer les sources
la trazabilidad | la traçabilité
la latencia | la latence
el coste computacional | le coût de calcul | el coste de cómputo
la evaluación | l'évaluation
la pertinencia | la pertinence | la relevancia
la fidelidad | la fidélité (au contexte) | la exactitud
el control de acceso | le contrôle d'accès | los permisos
el cumplimiento del RGPD | la conformité RGPD
la canalización (pipeline) | le pipeline | el pipeline; el flujo
la prueba de concepto | la preuve de concept | el PoC
el caso de uso | le cas d'usage
` },
    academico: { label: 'Présenter un travail', course: false, prio: 2, words: `
mi trabajo trata de... | mon travail porte sur... | mi proyecto se centra en...
el objetivo principal es... | l'objectif principal est...
la metodología | la méthodologie | el método
el estado del arte | l'état de l'art
el enfoque | l'approche | la aproximación
proponer | proposer | plantear
comparar | comparer | contrastar
los resultados muestran que... | les résultats montrent que... | los resultados indican que...
en primer lugar | en premier lieu | primero
a continuación | ensuite | después; seguidamente
para concluir | pour conclure | en conclusión
la limitación | la limite
el trabajo futuro | les perspectives | las líneas futuras
la diapositiva | la diapositive | la transparencia
la gráfica | le graphique | el gráfico
la tabla | le tableau
el experimento | l'expérience | la prueba
la hipótesis | l'hypothèse
el artículo | l'article (scientifique) | el paper
publicar | publier
¿Tienen alguna pregunta? | Avez-vous des questions ?
Buena pregunta | Bonne question
No estoy seguro, pero creo que... | Je ne suis pas sûr, mais je pense que...
` },
    restaurante: { label: 'Au restaurant', course: true, prio: 2, words: `
el camarero | le serveur | el mesero (Am. lat.)
la carta | la carte, le menu
el menú del día | le menu du jour
el primer plato | l'entrée | el primero; el entrante
el segundo plato | le plat principal | el segundo
el postre | le dessert
la bebida | la boisson
la cuenta | l'addition
la propina | le pourboire
pedir | commander
reservar una mesa | réserver une table
¿Qué van a tomar? | Qu'allez-vous prendre ? | ¿Qué desean?
Para mí... | Pour moi... | Yo quiero...; Quisiera...
Quisiera... | Je voudrais... | Me gustaría...
¿Me trae...? | Vous m'apportez... ? | ¿Me pone...?
los servicios | les toilettes | el baño; el aseo
pagar con tarjeta | payer par carte
pagar en efectivo | payer en liquide | en metálico
a la plancha | grillé à la plancha
el pescado | le poisson
la carne | la viande
el pollo | le poulet
el marisco | les fruits de mer
la sopa | la soupe
la ensalada | la salade
la tortilla de patatas | l'omelette aux pommes de terre
el flan | le flan
la crema catalana | la crème catalane
el café solo | le café noir | el expreso
el café con leche | le café au lait
el café cortado | café avec une goutte de lait
el azúcar | le sucre
la comida | le repas / le déjeuner | el almuerzo
la cena | le dîner
el desayuno | le petit-déjeuner
rico | délicieux | delicioso; sabroso; bueno
frío / caliente | froid / chaud
tardar | mettre du temps
la mesa | la table
la queja | la plainte | la reclamación
` },
    compra: { label: 'Faire les courses & cuisine', course: true, prio: 2, words: `
hacer la compra | faire les courses (supermarché)
ir de compras | faire du shopping
el supermercado | le supermarché | el súper
la panadería | la boulangerie
la carnicería | la boucherie
la pescadería | la poissonnerie
la frutería | le magasin de fruits
la charcutería | la charcuterie
los lácteos | les produits laitiers
la verdura | les légumes | las hortalizas
la fruta | les fruits
el pan | le pain
la leche | le lait
el queso | le fromage
la mantequilla | le beurre
el yogur | le yaourt
el huevo | l'œuf
el jamón | le jambon
el chorizo | le chorizo
la ternera | le veau / bœuf
el cerdo | le porc
el cordero | l'agneau
la carne picada | la viande hachée
el plátano | la banane
la manzana | la pomme
la naranja | l'orange
la fresa | la fraise
la sandía | la pastèque
el pimiento | le poivron
el pepino | le concombre
la cebolla | l'oignon
el ajo | l'ail
la patata | la pomme de terre | la papa (Am. lat.)
el calabacín | la courgette
el aceite de oliva | l'huile d'olive
la sal | le sel
la sartén | la poêle
pelar | éplucher
cortar | couper | picar (hacher)
freír | frire
hervir | bouillir | cocer
mezclar | mélanger | remover
añadir | ajouter | echar; agregar
asar | griller, rôtir
hornear | cuire au four
una pizca de | une pincée de
el kilo | le kilo
la bolsa | le sac
¿Cuánto cuesta? | Combien ça coûte ? | ¿Cuánto vale?; ¿Qué precio tiene?
` },
    casa: { label: 'Maison, appartement', course: true, prio: 2, words: `
el piso | l'appartement | el apartamento
la casa | la maison
alquilar | louer | arrendar
el alquiler | le loyer
el dueño | le propriétaire | el propietario; el casero
el compañero de piso | le colocataire
la habitación | la chambre / la pièce | el cuarto
el dormitorio | la chambre à coucher
el salón | le salon | la sala de estar
la cocina | la cuisine
el baño | la salle de bain | el cuarto de baño
el balcón | le balcon | la terraza
el ascensor | l'ascenseur
la planta | l'étage | el piso
amueblado | meublé
luminoso | lumineux | con mucha luz
la cama | le lit
la mesa | la table
la silla | la chaise
el sofá | le canapé
el armario | l'armoire
la ventana | la fenêtre
la puerta | la porte
la llave | la clé
las gafas | les lunettes
la cartera | le portefeuille
el reloj | la montre
` },
    hotel: { label: 'Hôtel & voyage', course: true, prio: 2, words: `
reservar | réserver
la reserva | la réservation
la habitación individual | la chambre simple
la habitación doble | la chambre double
la cama de matrimonio | le lit double
el desayuno incluido | petit-déj inclus
la recepción | la réception
el recepcionista | le réceptionniste
la noche | la nuit
el equipaje | les bagages | las maletas
la maleta | la valise
el pasaporte | le passeport
el billete | le billet | el boleto (Am. lat.); la entrada (spectacle)
el vuelo | le vol
el aeropuerto | l'aéroport
la estación | la gare
el tren | le train
el metro | le métro
el autobús | le bus | el bus
el coche | la voiture | el auto; el carro (Am. lat.)
viajar | voyager
las vacaciones | les vacances
el viaje | le voyage
alojarse | loger | hospedarse; quedarse
céntrico | central, bien situé | en el centro
` },
    ciudad: { label: 'Ville & directions', course: true, prio: 2, words: `
la calle | la rue
la plaza | la place
la esquina | le coin
el semáforo | le feu de circulation
el cruce | le carrefour | la intersección
la acera | le trottoir
el museo | le musée
el parque | le parc
el ayuntamiento | la mairie
la iglesia | l'église
la tienda | le magasin
el banco | la banque / le banc
la farmacia | la pharmacie
seguir recto | continuer tout droit | ir todo recto
girar a la derecha | tourner à droite | torcer a la derecha
girar a la izquierda | tourner à gauche | torcer a la izquierda
cruzar | traverser
la primera calle | la première rue
cerca de | près de | al lado de
lejos de | loin de
enfrente de | en face de | delante de
al lado de | à côté de | junto a
detrás de | derrière
delante de | devant
entre | entre
encima de | au-dessus de / sur | sobre
debajo de | en dessous de | bajo
al final de | au bout de
¿Dónde está...? | Où est... ?
¿Cómo llego a...? | Comment je vais à... ? | ¿Cómo voy a...?
¿Está lejos? | C'est loin ?
a cinco minutos andando | à cinq minutes à pied | a pie
` },
    profesiones: { label: 'Métiers & travail', course: true, prio: 2, words: `
¿A qué te dedicas? | Que fais-tu dans la vie ? | ¿En qué trabajas?
el trabajo | le travail | el empleo; el curro (fam.)
la empresa | l'entreprise | la compañía
el jefe | le chef, le patron
el compañero de trabajo | le collègue | el colega
la entrevista | l'entretien
el sueldo | le salaire | el salario
el médico | le médecin | el doctor
el enfermero | l'infirmier
el profesor | le professeur | el maestro (école primaire)
el abogado | l'avocat
el cocinero | le cuisinier
el camarero | le serveur
el periodista | le journaliste
el policía | le policier
el bombero | le pompier
el cartero | le facteur
el peluquero | le coiffeur
el cajero | le caissier
el electricista | l'électricien
el arquitecto | l'architecte
el veterinario | le vétérinaire
el informático | l'informaticien
el dependiente | le vendeur (magasin)
el estudiante | l'étudiant
jubilado | retraité
el paro | le chômage
` },
    gustos: { label: 'Goûts & loisirs', course: true, prio: 2, words: `
me gusta | j'aime (ça me plaît)
me encanta | j'adore | me flipa (fam.)
no me gusta nada | je n'aime pas du tout | odio
a mí también | moi aussi
a mí tampoco | moi non plus
a mí sí | moi si
a mí no | moi non
el ocio | les loisirs | el tiempo libre
la afición | le hobby | el hobby; el pasatiempo
el deporte | le sport
el cine | le cinéma
la película | le film | la peli (fam.)
la serie | la série
la música | la musique
la canción | la chanson
el concierto | le concert
leer | lire
salir con amigos | sortir avec des amis | quedar con amigos
ir de fiesta | faire la fête | salir de marcha
el partido | le match
el equipo | l'équipe
entrenar | s'entraîner
ver la tele | regarder la télé
` },
    animales: { label: 'Animaux', course: true, prio: 3, words: `
el perro | le chien
el gato | le chat
el pájaro | l'oiseau | el ave
el pez | le poisson (vivant)
el caballo | le cheval
la vaca | la vache
el toro | le taureau
la oveja | le mouton
la cabra | la chèvre
el cerdo | le cochon
la gallina | la poule
el gallo | le coq
el pollito | le poussin
el conejo | le lapin
el ratón | la souris
la serpiente | le serpent
el elefante | l'éléphant
la jirafa | la girafe
el león | le lion
el mono | le singe
la mascota | l'animal de compagnie
` },
    cuerpo: { label: 'Corps & santé', course: false, prio: 3, words: `
la cabeza | la tête
el ojo | l'œil
la nariz | le nez
la boca | la bouche
el diente | la dent
la mano | la main
el brazo | le bras
la pierna | la jambe
el pie | le pied
la espalda | le dos
el estómago | l'estomac | la barriga; la tripa
me duele... | j'ai mal à... | tengo dolor de...
estar enfermo | être malade
estar resfriado | être enrhumé | tener un resfriado
la fiebre | la fièvre
la farmacia | la pharmacie
el médico | le médecin
` },
    ropa: { label: 'Vêtements', course: false, prio: 3, words: `
la ropa | les vêtements
la camiseta | le t-shirt
la camisa | la chemise
el pantalón | le pantalon | los pantalones
los vaqueros | le jean
la falda | la jupe
el vestido | la robe
el abrigo | le manteau | la chaqueta (veste)
los zapatos | les chaussures
las zapatillas | les baskets / chaussons
llevar puesto | porter (vêtement)
la talla | la taille
probarse | essayer
` },
    familia: { label: 'Famille & personnes', course: false, prio: 2, words: `
la familia | la famille
los padres | les parents
la madre | la mère | la mamá
el padre | le père | el papá
el hermano | le frère
la hermana | la sœur
el hijo | le fils
la hija | la fille
los abuelos | les grands-parents
el marido | le mari | el esposo
la mujer | la femme / l'épouse | la esposa
el novio | le petit ami / fiancé | la pareja
el amigo | l'ami | el colega (fam.)
el vecino | le voisin
el niño | l'enfant | el crío; el chaval
` },
    imagen: { label: 'Décrire une image', course: true, prio: 2, words: `
en la imagen se ve... | sur l'image on voit... | en la foto hay...
en primer plano | au premier plan | delante
al fondo | à l'arrière-plan | detrás
a la izquierda | à gauche
a la derecha | à droite
en el centro | au centre | en medio
arriba | en haut
abajo | en bas
parece que... | il semble que... | da la impresión de que...
creo que están... | je crois qu'ils sont en train de... | supongo que
el paisaje | le paysage
la montaña | la montagne
la playa | la plage
el mar | la mer
el río | la rivière
el árbol | l'arbre
la hoja | la feuille
el lago | le lac
el cielo | le ciel
la nube | le nuage
llevar (ropa) | porter (vêtement)
sonreír | sourire
` },
    medioambiente: { label: 'Environnement', course: true, prio: 3, words: `
el cambio climático | le changement climatique | el calentamiento global
el medio ambiente | l'environnement
la contaminación | la pollution | la polución
los gases de efecto invernadero | les gaz à effet de serre
el gobierno | le gouvernement
tomar medidas | prendre des mesures
reciclar | recycler
la basura | les déchets | los residuos
ahorrar | économiser
la energía | l'énergie
el calor | la chaleur
la sequía | la sécheresse
discutir | se disputer / débattre | debatir
proteger | protéger | cuidar
` },
    sentimientos: { label: 'Émotions & opinions', course: false, prio: 2, words: `
estoy de acuerdo | je suis d'accord | tienes razón
no estoy de acuerdo | je ne suis pas d'accord
creo que | je crois que | pienso que; me parece que
me parece bien | ça me va | vale; perfecto
¡Qué bien! | Super ! | ¡Genial!; ¡Qué guay! (fam.)
¡Qué pena! | Dommage ! | ¡Qué lástima!
¡Qué rollo! | Quelle barbe ! | ¡Qué aburrido!
tener miedo | avoir peur
tener ganas de | avoir envie de | apetecer (me apetece)
tener prisa | être pressé
tener hambre | avoir faim
tener sed | avoir soif
tener frío / calor | avoir froid / chaud
tener sueño | avoir sommeil
tener razón | avoir raison
echar de menos | manquer (qqn me manque) | extrañar
` },
  };

  const THEMES = {};
  const WORDS = [];
  for (const [id, t] of Object.entries(RAW)) {
    THEMES[id] = { id, label: t.label, course: t.course, prio: t.prio, count: 0 };
    for (const line of t.words.split('\n')) {
      if (!line.trim()) continue;
      const [tl, fr, syn] = line.split('|').map(s => (s || '').trim());
      WORDS.push({ id: id + ':' + tl, theme: id, tl, fr, syn: syn ? syn.split(';').map(s => s.trim()).filter(Boolean) : [] });
      THEMES[id].count++;
    }
  }
  global.VOCAB = { THEMES, WORDS };
})(typeof window !== 'undefined' ? window : globalThis);
