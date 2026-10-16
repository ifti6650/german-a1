// Run: node --test tests/
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
global.window = globalThis;
require(path.join(__dirname, '..', 'plan-data.js'));
for (const f of require('fs').readdirSync(path.join(__dirname, '..', 'lessons')).filter(f => /^l\d\d\.js$/.test(f)).sort()) require(path.join(__dirname, '..', 'lessons', f));
require(path.join(__dirname, '..', 'course.js'));
const E = require(path.join(__dirname, '..', 'engine.js'));
const SCHED = require(path.join(__dirname, '..', 'review.js'));

test('evalText: exact, punctuation, spaces', () => {
  assert.equal(E.evalText('Ich heiße Sara.', 'Ich heiße Sara.').correct, true);
  assert.equal(E.evalText('  ich heiße   Sara ', 'Ich heiße Sara.').correct, true);
  assert.equal(E.evalText('Ich heiße Sara!', 'Ich heiße Sara.').correct, true);
});
test('evalText: capitalisation accepted with a note', () => {
  const r = E.evalText('wie geht es ihnen', 'Wie geht es Ihnen?');
  assert.equal(r.correct, true); assert.match(r.note, /capital/);
});
test('evalText: umlaut transliteration accepted with a note', () => {
  const r = E.evalText('heisse', 'heiße'); assert.equal(r.correct, true); assert.match(r.note, /spelling/);
  assert.equal(E.evalText('Osterreich', 'Österreich').correct, false); // dropping the umlaut is wrong
});
test('evalText: wrong article is wrong, with a note', () => {
  const r = E.evalText('die Name', 'der Name'); assert.equal(r.correct, false); assert.match(r.note, /article/);
});
test('evalText: similar but different answer is NOT accepted', () => {
  assert.equal(E.evalText('Ich heiße Sarah', 'Ich heiße Sara.').correct, false);
  assert.equal(E.evalText('kommt', 'kommst').correct, false);
  assert.equal(E.evalText('', 'x').empty, true);
});
test('evalText: explicit alternatives', () => {
  assert.equal(E.evalText('Mein Name ist Sara', ['Ich heiße Sara.', 'Mein Name ist Sara.']).correct, true);
});
test('check: gap partial score', () => {
  const q = { type: 'gap', answer: [['heiße'], ['heißt']] };
  assert.deepEqual([E.check(q, ['heiße', 'heißt']).score, E.check(q, ['heiße', 'heißst']).score], [1, 0.5]);
});
test('check: order and match', () => {
  assert.equal(E.check({ type: 'order', answer: 'Woher kommst du' }, ['Woher', 'kommst', 'du']).correct, true);
  assert.equal(E.check({ type: 'order', answer: 'Woher kommst du' }, ['Woher', 'du', 'kommst']).correct, false);
  const m = { type: 'match', pairs: [['a', '1'], ['b', '2']] };
  assert.equal(E.check(m, { a: '1', b: '1' }).score, 0.5);
});
test('check: writing/speaking are ungraded and excluded from score', () => {
  const qs = [{ q: { type: 'mc', skill: 'grammar', topic: 't' }, result: { graded: true, score: 1 } }, { q: { type: 'writing' }, result: { graded: false } }];
  const s = E.score(qs); assert.equal(s.max, 1); assert.equal(s.pct, 100);
});
test('score: breakdown by skill and fractional points', () => {
  const s = E.score([
    { q: { skill: 'grammar', topic: 'a' }, result: { graded: true, score: 0.5 } },
    { q: { skill: 'grammar', topic: 'b', points: 2 }, result: { graded: true, score: 1 } },
    { q: { skill: 'reading', topic: 'b' }, result: { graded: true, score: 0 } }]);
  assert.equal(s.earned, 2.5); assert.equal(s.max, 4); assert.equal(s.pct, 63);
  assert.deepEqual(s.by.skill.grammar, { earned: 2.5, max: 3 });
});

test('course: 24 lessons, 8 modules, A1.1 = 1–12, A1.2 = 13–24', () => {
  const C = window.COURSE;
  assert.equal(C.lessons.length, 24); assert.equal(C.modules.length, 8);
  assert.ok(C.lessons.filter(l => l.level === 'A1.1').every(l => l.n <= 12));
  assert.ok(C.lessons.every(l => l.words.length > 0), 'every lesson has Wortschatz words');
  assert.equal(C.status(1), 'complete'); assert.ok(C.lessons.every(l => C.status(l.n) === 'complete'), 'all 24 lessons authored');
  assert.equal(C.tests().length, 24 + 8 + 2);
});

const REQUIRED = ['id', 'level', 'lesson', 'topic', 'skill', 'difficulty', 'type', 'instructions', 'explanation', 'objective', 'status'];
const AUTHORED = window.COURSE.lessons.filter(l => window.COURSE.content(l.n)).map(l => l.n);
test('authored lessons are loaded', () => assert.equal(AUTHORED.length, require('fs').readdirSync(path.join(__dirname, '..', 'lessons')).filter(f => /^l\d\d\.js$/.test(f)).length));
for (const N of AUTHORED) test(`Lektion ${N}: every question has the required metadata and a valid key`, () => {
  const c = window.COURSE.content(N); const all = [...c.practice, ...c.apply, ...c.quiz];
  const ids = new Set(); const objectives = new Set(c.objectives.map(o => o.id));
  for (const q of all) {
    for (const k of REQUIRED) assert.ok(q[k] != null && q[k] !== '', `${q.id} missing ${k}`);
    assert.ok(!ids.has(q.id), 'duplicate id ' + q.id); ids.add(q.id);
    assert.ok(objectives.has(q.objective), `${q.id} unknown objective`);
    if (q.options) assert.ok(q.options.includes(q.answer), `${q.id}: answer not among options`);
    if (q.type === 'gap') assert.equal((q.prompt.match(/___/g) || []).length, q.answer.length, `${q.id}: gaps vs answers`);
    if (q.type === 'order') assert.equal([...q.tokens].sort().join(' '), q.answer.split(' ').sort().join(' '), `${q.id}: tokens`);
    if (q.type === 'listen' || q.type === 'dictation') assert.ok(q.audio, q.id + ' audio');
    if (['writing', 'speaking'].includes(q.type)) assert.ok(q.rubric && q.model, q.id + ' rubric/model');
    // the key must pass its own checker
    if (!['writing', 'speaking', 'match'].includes(q.type)) {
      const resp = q.type === 'gap' ? q.answer.map(a => a[0]) : q.type === 'order' ? q.answer.split(' ') : q.answer;
      assert.equal(E.check(q, resp).correct, true, q.id + ' key fails');
    }
  }
  assert.ok(c.quiz.every(t => !c.practice.some(p => p.id === t.id || (t.prompt && p.prompt === t.prompt))), 'quiz repeats practice items');
});
test('vocab questions: generated from Wortschatz, ids compatible, keys pass', () => {
  const L4 = window.COURSE.lesson(4); const qs = E.vocabQuestions(L4, { rand: E.rng(7) });
  assert.ok(qs.length >= L4.words.length);
  for (const q of qs) {
    assert.match(q.id, /^vocab:4-\d+:(article|meaning|write)$/);
    const resp = q.answer; assert.equal(E.check(q, resp).correct, true, q.id);
  }
  assert.ok(qs.some(q => q.type === 'article'));
});

// ---- review scheduling (mirror of the SQL in supabase/migrations/002)
test('review: wrong answer -> learning, due soon', () => {
  const now = Date.parse('2026-10-16T10:00:00Z');
  const s = SCHED.apply(null, false, now);
  assert.equal(s.correct_streak, 0); assert.equal(s.times_wrong, 1); assert.equal(SCHED.state(s, now), 'new');
});
test('review: same-session correct does not count; mastery needs 3 sessions', () => {
  let t = Date.parse('2026-10-16T10:00:00Z');
  let s = SCHED.apply(null, false, t);
  s = SCHED.apply(s, true, t + 60e3); assert.equal(s.correct_streak, 1, 'first correct counts');
  s = SCHED.apply(s, true, t + 120e3); assert.equal(s.correct_streak, 1, 'second correct in same session ignored');
  assert.equal(SCHED.state(s, t + 130e3), 'improving');
  t += 26 * 3600e3; s = SCHED.apply(s, true, t); assert.equal(s.correct_streak, 2);
  t += 4 * 24 * 3600e3; s = SCHED.apply(s, true, t); assert.equal(s.correct_streak, 3); assert.equal(s.mastered, true);
  assert.equal(SCHED.state(s, t), 'mastered');
  s = SCHED.apply(s, false, t + 1e3); assert.equal(s.mastered, false, 'error reopens'); assert.equal(s.correct_streak, 0);
});
test('review: due state after interval', () => {
  const t = Date.parse('2026-10-16T10:00:00Z');
  let s = SCHED.apply(SCHED.apply(null, false, t), true, t + 1e3);
  assert.equal(SCHED.state(s, t + 2e3), 'improving');
  assert.equal(SCHED.state(s, t + 25 * 3600e3), 'due');
});
