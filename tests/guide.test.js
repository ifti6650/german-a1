// Study Guide ("Deutsch im echten Leben"): content files, safe rendering, overview index and reading progress.
const test = require('node:test'); const assert = require('node:assert/strict');
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..'); const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const G = require(path.join(ROOT, 'guide-md.js'));
const pad = n => String(n).padStart(2, '0');
const lessons = Array.from({ length: 24 }, (_, i) => read(`guide/l${pad(i + 1)}.md`));
const unescape = s => s.replace(/<[^>]+>/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const words = s => s.match(/[A-Za-zÄÖÜäöüß]+/g) || [];

test('24 lessons in order: A1.1 = 1–12, A1.2 = 13–24, 8 situations and all 9 parts each', () => {
  let sits = 0;
  lessons.forEach((md, i) => {
    const p = G.parseLesson(md);
    assert.equal(p.n, i + 1); assert.equal(p.level, i < 12 ? 'A1.1' : 'A1.2');
    assert.deepEqual(p.unmatched, [], `Lektion ${p.n}: headings outside the 9 parts`);
    assert.equal(p.situations.length, 8, `Lektion ${p.n}: situations`); sits += p.situations.length;
    p.situations.forEach((s, k) => assert.match(s.title, new RegExp(`^Situation ${k + 1}\\b`)));
    for (const [k] of G.PARTS) if (k !== 'situations') assert.ok(p.parts[k].length, `Lektion ${p.n}: part ${k} empty`);
  });
  assert.equal(sits, 192);
});

test('no lesson text is lost: every word of every lesson file appears in the rendered lesson', () => {
  lessons.forEach(md => {
    const p = G.parseLesson(md); let h = `Lektion ${p.n} ${p.level} ${p.title} `;
    for (const k in p.parts) for (const c of p.parts[k]) h += c.title + ' ' + G.render(c.md, { steps: {} });
    for (const s of p.situations) h += s.title + ' ' + G.render(s.md, {});
    const src = {}, out = {}; words(md).forEach(w => src[w] = (src[w] || 0) + 1); words(unescape(h)).forEach(w => out[w] = (out[w] || 0) + 1);
    const missing = Object.keys(src).filter(w => (out[w] || 0) < src[w]);
    assert.deepEqual(missing, [], `Lektion ${p.n}: missing words`);
  });
});

test('rendering is XSS-safe: tags and attributes in content are shown as text', () => {
  const evil = '# <img src=x onerror=alert(1)>\n\n**A:** <script>alert(1)</script>  \n**B:** "><svg onload=alert(1)>\n\n| <b>x</b> | y |\n|---|---|\n| <iframe> | z |\n\n- [ ] <a href="javascript:alert(1)">x</a>';
  const h = G.render(evil, { taskPrefix: 'c0-', speak: true });
  assert.ok(!/<(img|script|svg|iframe|b>|a )/i.test(h), h);
  assert.ok(h.includes('&lt;script&gt;') && h.includes('&lt;img'));
});

test('dialogues become conversation blocks; labels like "Ort:" do not', () => {
  const h = G.render('**Emma:** Hallo!  \n**Farid:** Hallo, Emma!  \n**Emma:** Wie geht’s?\n\n**Ort:** Flur. **Personen:** Emma und Farid.');
  assert.equal((h.match(/class="sg-turn/g) || []).length, 3);
  assert.match(h, /sg-turn s1 r"><span class="sg-who">Farid/);
  assert.match(h, /<p><strong>Ort:<\/strong> Flur/);
});

test('German characters survive: ä ö ü ß, no broken encoding', () => {
  const all = lessons.join('\n');
  for (const c of 'äöüßÄÖÜ') assert.ok(all.includes(c), c);
  assert.ok(!/Ã.|â€/.test(all), 'mojibake found');
  assert.equal(G.parseLesson(lessons[1]).title, 'Arbeit, Wohnort und persönliche Angaben');
});

test('Grammar Book references link to real Grammar Book headings', () => {
  const gb = read('grammar-book.html'); global.window = global; require(path.join(ROOT, 'guide/index.js'));
  const S = global.GUIDE_STEPS; let links = 0;
  lessons.forEach(md => {
    const h = G.render(md, { steps: S });
    for (const m of h.matchAll(/href="grammar-book\.html#([^"]+)"/g)) { links++; assert.ok(gb.includes(`id="${m[1]}"`), m[1]) }
  });
  assert.ok(links >= 48, 'links: ' + links);
  global.GUIDE_INDEX.forEach(x => assert.ok(x.steps.length && x.steps.every(s => S[s]), `Lektion ${x.n} steps`));
});

test('overview index (guide/index.js) is up to date with the lesson files', () => {
  execFileSync(process.execPath, [path.join(ROOT, 'tools/guide-build.js'), 'check'], { stdio: 'pipe' });
  const I = global.GUIDE_INDEX; assert.equal(I.length, 24);
  I.forEach((x, i) => { assert.equal(x.n, i + 1); assert.equal(x.parts.length, 9); assert.ok(x.goal && x.intro && x.words.length >= 10 && x.can >= 5) });
});

test('no publisher names or textbook branding in Study Guide content', () => {
  const learner = lessons.join('\n') + read('guide/intro.md') + read('study-guide.html') + read('guide-app.js');
  assert.ok(!/Momente|Hueber|Kursbuch|Arbeitsbuch/i.test(learner));
});

test('reading progress: opening never completes; all parts marked = lesson completed; stable ids', () => {
  const store = {}; global.localStorage = { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = String(v) } };
  delete require.cache[require.resolve(path.join(ROOT, 'guide-progress.js'))]; require(path.join(ROOT, 'guide-progress.js'));
  const P = global.GUIDE_PROGRESS;
  P.visit(3, 'situations', 2); P.visit(3, 'words');
  assert.equal(P.lesson(3).done, 0); assert.equal(P.lesson(3).completed, false); assert.equal(P.state().last.n, 3);
  P.setSit(3, 2, true); assert.equal(P.lesson(3).done, 0, 'a situation tick is not a finished part');
  P.PARTS.forEach(k => P.setPart(3, k, true)); assert.equal(P.lesson(3).completed, true);
  P.setPart(3, 'review', false); assert.equal(P.lesson(3).completed, false);
  P.setPart(99, 'intro', true); P.setPart(3, 'nonsense', true); assert.ok(!P.state().l[99] && !P.state().l[3].parts.nonsense);
  assert.deepEqual(Object.keys(JSON.parse(store['a1:guide'])), ['v', 'l', 'last']);
  delete global.localStorage;
});

test('Study Guide progress syncs per user via app_state; plan links use the lesson URLs', () => {
  assert.match(read('sync.js'), /SYNC_KEYS = \[[^\]]*'a1:guide'/);
  const plan = read('plan-data.js');
  for (let n = 1; n <= 24; n++) assert.ok(plan.includes(`"guide": "study-guide.html?l=${n}"`), 'plan link ' + n);
  assert.ok(!/study-guide\.html#/.test(plan + read('plan.js') + read('lesson.html')), 'old study-guide anchors left');
  const sw = read('sw.js'); for (let n = 1; n <= 24; n++) assert.ok(sw.includes(`'guide/l${pad(n)}.md'`), 'offline cache ' + n);
});
