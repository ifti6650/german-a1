// Offline support for the Deutsch A1 app: pages load from the network when online
// (so updates arrive) and from the cache when offline.
const CACHE = 'deutsch-a1-v19';
const FILES = ['./', 'index.html', 'dashboard.html', 'onboarding.html', 'account.html', 'privacy.html', 'auth-config.js', 'ui.css', 'guard.js', 'shell.js', 'landing.js', 'wortschatz.html', 'grammar-book.html', 'study-guide.html', 'speaking.html', 'practice.html', 'progress.html', 'course.html', 'lesson.html', 'test.html', 'tests.html', 'mistakes.html',
  'site.css', 'install.js', 'plan.js', 'plan-data.js', 'speak-data.js', 'sync.js', 'app.css', 'course.js', 'engine.js', 'review.js', 'progress-model.js', 'data.js', 'dashboard.js', 'lessons/l01.js', 'lessons/l02.js', 'lessons/l03.js', 'lessons/l04.js', 'lessons/l05.js', 'lessons/l06.js', 'lessons/l07.js', 'lessons/l08.js', 'lessons/l09.js', 'lessons/l10.js', 'lessons/l11.js', 'lessons/l12.js', 'lessons/l13.js', 'lessons/l14.js', 'lessons/l15.js', 'lessons/l16.js', 'lessons/l17.js', 'lessons/l18.js', 'lessons/l19.js', 'lessons/l20.js', 'lessons/l21.js', 'lessons/l22.js', 'lessons/l23.js', 'lessons/l24.js', 'manifest.webmanifest', 'guide.css', 'guide-md.js', 'guide-progress.js', 'guide-app.js', 'guide/index.js', 'guide/intro.md',
  'guide/l01.md', 'guide/l02.md', 'guide/l03.md', 'guide/l04.md', 'guide/l05.md', 'guide/l06.md', 'guide/l07.md', 'guide/l08.md', 'guide/l09.md', 'guide/l10.md', 'guide/l11.md', 'guide/l12.md', 'guide/l13.md', 'guide/l14.md', 'guide/l15.md', 'guide/l16.md', 'guide/l17.md', 'guide/l18.md', 'guide/l19.md', 'guide/l20.md', 'guide/l21.md', 'guide/l22.md', 'guide/l23.md', 'guide/l24.md',
  'icon-180.png', 'icon-192.png', 'icon-512.png', 'German_A1_Intensive_Grammar_Book.pdf', 'grammar-lab.html', 'grammar.css', 'grammar-core.js', 'grammar-lab.js', 'grammar/data.js', 'grammar/reference.md'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
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
    // 'no-cache' = always ask the server whether the file changed (cheap 304 if not), so an update never mixes new pages with old scripts
    fetch(req, sameOrigin ? { cache: 'no-cache' } : undefined).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : undefined)))
  );
});
