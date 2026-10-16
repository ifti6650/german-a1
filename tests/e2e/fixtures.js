// Seed data for browser tests (simulated Supabase). Each function returns an init script that seeds localStorage once per browser context.
const DAY = 864e5;
const USERS = {
  returning: { id: 'u-returning', email: 'learner@example.com', user_metadata: { given_name: 'Jade', full_name: 'Jade Example' } },
  fresh: { id: 'u-new', email: 'new.learner@example.com', user_metadata: { given_name: 'Lena', full_name: 'Lena Neu' } }
};
function returningDb(now = Date.now()) {
  const uid = USERS.returning.id; const iso = t => new Date(t).toISOString();
  const attempts = []; let k = 0;
  // 9 active days out of the last 12 (today included) → streak 3 (today, -1, -2), then a gap
  const plan = [[0, 12, 0.75], [1, 20, 0.8], [2, 8, 0.5], [4, 15, 0.87], [5, 6, 1], [7, 18, 0.66], [8, 10, 0.7], [10, 9, 0.55], [11, 14, 0.85]];
  const topics = ['greetings', 'verb-endings', 'w-questions', 'sein', 'articles'];
  for (const [ago, n, acc] of plan) for (let i = 0; i < n; i++) {
    const topic = topics[(i + ago) % topics.length];
    const correct = topic === 'w-questions' ? i % 3 === 0 : (i / n) < acc;
    attempts.push({ id: 'a' + (k++), user_id: uid, item_id: `L01-P-${String(i % 30 + 1).padStart(2, '0')}`, lesson: 1, kind: 'mc', topic, skill: 'grammar', correct, created_at: iso(now - ago * DAY - (i + 1) * 60e3) });
  }
  const review_items = [
    { id: 'r1', user_id: uid, item_id: 'L01-P-15', lesson: 1, kind: 'mc', prompt: '… kommst du? – Aus Brasilien.', expected: 'Woher', topic: 'w-questions', times_wrong: 2, correct_streak: 0, review_count: 0, mastered: false, next_review_at: iso(now - 3600e3), created_at: iso(now - 2 * DAY) },
    { id: 'r2', user_id: uid, item_id: 'L01-P-13', lesson: 1, kind: 'mc', prompt: '… Sie Herr Novak?', expected: 'Sind', topic: 'sein', times_wrong: 1, correct_streak: 1, review_count: 1, mastered: false, next_review_at: iso(now - 600e3), created_at: iso(now - 3 * DAY) },
    { id: 'r3', user_id: uid, item_id: 'L01-P-04', lesson: 1, kind: 'mc', prompt: 'Ask your teacher how she is.', expected: 'Wie geht es Ihnen?', topic: 'greetings', times_wrong: 1, correct_streak: 3, review_count: 3, mastered: true, next_review_at: iso(now + 5 * DAY), created_at: iso(now - 9 * DAY) }
  ];
  const test_results = [
    { id: 't1', user_id: uid, test_id: 'lesson-1', title: 'Lektion 1 quiz', score: 12, max_score: 15, test_kind: 'lesson', created_at: iso(now - 4 * DAY) },
    { id: 't2', user_id: uid, test_id: 'lesson-2', title: 'Lektion 2 quiz', score: 7, max_score: 15, test_kind: 'lesson', created_at: iso(now - 1 * DAY) }
  ];
  const lessons = {
    1: { sections: { learn: { at: iso(now - 9 * DAY) }, practice: { at: iso(now - 8 * DAY) }, apply: { at: iso(now - 7 * DAY) }, test: { at: iso(now - 4 * DAY), passed: true, best: 80 } }, last: iso(now - 4 * DAY), lastSection: 'test' },
    2: { sections: { learn: { at: iso(now - 2 * DAY) }, test: { at: iso(now - DAY), passed: false, best: 47 } }, last: iso(now - DAY), lastSection: 'practice' }
  };
  const wz = { lesson: 0, filter: 'all', mode: 'list', dir: 'de', cards: { '1-1': { s: 'known', d: now - DAY }, '1-2': { s: 'known', d: now + 3 * DAY }, '1-3': { s: 'learning', d: now }, '1-4': { s: 'known', d: now + DAY } } };
  const st = (key, value, ago) => ({ user_id: uid, key, value, updated_at: iso(now - ago) });
  const app_state = [st('a1:prefs', { course: 'A1.1', courseLevel: 'A1.1' }, 5 * DAY), st('a1:lessons', lessons, DAY), st('wz:v2', wz, DAY)];
  return { attempts, review_items, test_results, app_state };
}
// signedIn: start with a stored session (as after an earlier login). Otherwise the learner is a guest whose next Google login is `as`.
function seed({ as = 'returning', signedIn = false, fail = false } = {}) {
  const user = USERS[as];
  const db = as === 'returning' ? returningDb() : { attempts: [], review_items: [], test_results: [], app_state: [] };
  const session = { access_token: 'mock-access', refresh_token: 'mock-refresh', expires_at: 4e9, token_type: 'bearer', user };
  return `(() => { try { if (localStorage.getItem('mock:seeded')) return;
    localStorage.setItem('mock:seeded', '1');
    localStorage.setItem('mock:cfg', ${JSON.stringify(JSON.stringify({ loginAs: user, fail }))});
    localStorage.setItem('mock:db', ${JSON.stringify(JSON.stringify(db))});
    ${signedIn ? `localStorage.setItem('sb-gvftmsctaxyllmtiztil-auth-token', ${JSON.stringify(JSON.stringify(session))});` : ''}
  } catch (e) {} })();`;
}
module.exports = { USERS, seed, returningDb };
