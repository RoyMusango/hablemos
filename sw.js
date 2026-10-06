// Service worker : l'app reste utilisable sans réseau (vocabulaire, verbes, grammaire).
// Stratégie : on sert la copie en cache tout de suite et on la met à jour en arrière-plan.
const CACHE = 'hablemos-v1';
const SHELL = [
  './', './index.html', './css/style.css', './manifest.webmanifest',
  './fonts/jost-latin.woff2', './fonts/jost-latin-italic.woff2',
  './icons/favicon.svg', './icons/favicon-32.png', './icons/icon-192.png',
  './js/conjugator.js', './js/data/vocab.js', './js/data/grammar.js', './js/data/scenarios.js',
  './js/store.js', './js/speech.js', './js/ai.js', './js/sync.js', './js/app.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Seuls les fichiers de l'app sont mis en cache ; les appels IA, GitHub et /api passent toujours par le réseau.
  if (e.request.method !== 'GET' || url.origin !== location.origin || url.pathname.includes('/api/')) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const network = fetch(e.request).then(res => { if (res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => cached);
    return cached || network;
  }));
});
