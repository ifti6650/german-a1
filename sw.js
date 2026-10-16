// Offline support for the Deutsch A1 app: pages load from the network when online
// (so updates arrive) and from the cache when offline.
const CACHE = 'deutsch-a1-v8';
const FILES = ['./', 'index.html', 'wortschatz.html', 'grammar-book.html', 'study-guide.html', 'speaking.html', 'practice.html', 'progress.html', 'course.html', 'lesson.html', 'test.html', 'tests.html', 'mistakes.html',
  'site.css', 'install.js', 'plan.js', 'plan-data.js', 'speak-data.js', 'sync.js', 'app.css', 'nav.js', 'course.js', 'engine.js', 'review.js', 'progress-model.js', 'data.js', 'dashboard.js', 'gb-links.js', 'lessons/l01.js', 'lessons/l02.js', 'lessons/l03.js', 'lessons/l04.js', 'lessons/l05.js', 'lessons/l06.js', 'lessons/l07.js', 'lessons/l08.js', 'lessons/l09.js', 'manifest.webmanifest',
  'icon-180.png', 'icon-192.png', 'icon-512.png', 'Momente_A1_Grammar_Book.pdf'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !isFont) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : undefined)))
  );
});
