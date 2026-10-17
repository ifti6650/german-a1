// Public website + portal wiring checks (no browser needed): the landing page states only true numbers,
// lists the real lesson titles, and every learner page is protected and uses the portal shell.
const test = require('node:test'); const assert = require('node:assert/strict');
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'); const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
global.window = global; require(path.join(ROOT, 'plan-data.js')); require(path.join(ROOT, 'course.js'));
for (const f of fs.readdirSync(path.join(ROOT, 'lessons')).filter(f => /^l\d\d\.js$/.test(f))) require(path.join(ROOT, 'lessons', f));
const C = global.COURSE; const landing = read('index.html');
const strip = s => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');

test('landing: course numbers are computed from the real content', () => {
  const words = C.lessons.reduce((a, l) => a + l.words.length, 0);
  let items = 0; for (const c of Object.values(global.LESSON_CONTENT)) items += c.practice.length + c.apply.length + c.quiz.length;
  const t = strip(landing);
  assert.match(t, new RegExp(`${C.lessons.length} lessons in ${C.modules.length} modules`));
  assert.match(t, new RegExp(`${words} words with article`));
  assert.match(t, new RegExp(`${items.toLocaleString('en-US')} exercises and quiz questions`));
  assert.match(t, new RegExp(`${C.tests().length} lesson, module & level tests`));
  for (const lv of ['A1.1', 'A1.2']) {
    const ls = C.lessons.filter(l => l.level === lv);
    assert.match(t, new RegExp(`${ls.length} lessons ${ls.reduce((a, l) => a + l.words.length, 0)} words`), lv + ' card numbers');
  }
});
test('landing: lesson lists match the course plan', () => {
  for (const lv of ['A1.1', 'A1.2']) {
    const m = landing.match(new RegExp(`<ol start="\\d+" data-lessons="${lv.replace('.', '\\.')}">([\\s\\S]*?)</ol>`));
    assert.ok(m, lv + ' list missing');
    const titles = [...m[1].matchAll(/<li>(.*?)<\/li>/g)].map(x => x[1]);
    assert.deepEqual(titles, C.lessons.filter(l => l.level === lv).map(l => l.title));
  }
});
test('landing: the example question is real lesson content', () => {
  const q = global.LESSON_CONTENT[1].practice.find(x => x.id === 'L01-P-04');
  assert.ok(landing.includes(q.prompt) && landing.includes(q.instructions));
  q.options.forEach(o => assert.ok(landing.includes(o), o));
  assert.match(landing, new RegExp(`data-ok>${q.answer.replace('?', '\\?')}<`));
});
test('landing is public: no guard, no portal shell', () => {
  assert.ok(!landing.includes('guard.js') && !landing.includes('shell.js'));
  assert.ok(landing.includes('class="lp"'));
});
const PORTAL = ['dashboard.html', 'onboarding.html', 'account.html', 'course.html', 'lesson.html', 'wortschatz.html', 'practice.html', 'tests.html', 'test.html', 'mistakes.html', 'progress.html', 'study-guide.html', 'speaking.html'];
for (const f of PORTAL) test(`portal page ${f}: protected, uses the shell, no old navigation`, () => {
  const s = read(f);
  const head = s.slice(0, s.indexOf('</head>'));
  assert.ok(head.includes('<script src="guard.js"></script>'), 'guard.js must load in <head>');
  assert.ok(head.includes('ui.css'), 'ui.css missing');
  assert.ok(s.indexOf('src="sync.js"') > -1 && s.indexOf('src="sync.js"') < s.indexOf('src="shell.js"'), 'sync.js must load before shell.js');
  assert.ok(!/<nav class="top"/.test(s) && !s.includes('nav.js'), 'old top navigation still present');
  assert.ok(!s.includes('href="index.html"'), 'portal links must not point to the public homepage');
});
test('privacy page is public and linked from the sign-in dialog', () => {
  const pv = read('privacy.html'); assert.ok(!pv.includes('guard.js') && pv.includes('class="lp"'));
  assert.ok(landing.includes('href="privacy.html"'));
});
test('auth-config.js lists every sign-in method the dialog knows', () => {
  global.window = global; delete global.A1_AUTH; require(path.join(ROOT, 'auth-config.js'));
  for (const k of ['google', 'azure', 'apple', 'password', 'email', 'passkey']) assert.equal(typeof global.A1_AUTH[k], 'boolean', k);
  for (const pr of ['google', 'azure', 'apple']) assert.ok(landing.includes(`data-provider="${pr}"`), pr);
});
test('service worker caches the new files', () => {
  const sw = read('sw.js');
  ['dashboard.html', 'onboarding.html', 'account.html', 'privacy.html', 'auth-config.js', 'ui.css', 'guard.js', 'shell.js', 'landing.js'].forEach(f => assert.ok(sw.includes(`'${f}'`), f));
});

test('Grammar Lab is public and the legacy Grammar Book redirects', () => {
  const lab = read('grammar-lab.html');
  const old = read('grammar-book.html');
  assert.ok(!lab.includes('guard.js') && lab.includes('data-public="1"'));
  assert.ok(lab.includes('grammar-lab.js') && lab.includes('grammar/data.js'));
  assert.ok(old.includes('grammar-lab.html') && old.includes('location.replace'));
});
test('independent publisher-free branding on public pages', () => {
  const files = ['index.html','manifest.webmanifest','onboarding.html','shell.js','grammar-lab.html'];
  for (const file of files) assert.doesNotMatch(read(file), /Momente|Hueber|Kursbuch|Arbeitsbuch/i, file);
});
