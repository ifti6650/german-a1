// Deutsch A1 · Study Guide progress (reading progress — kept separate from quiz scores and mastery).
// Stored in localStorage 'a1:guide'; sync.js mirrors this key to the learner's own app_state row
// (one row per user and key, protected by Row Level Security), so it follows the learner across devices.
// Rules:
//  • Opening a lesson or part only records "last visited" (for Resume). It never counts as done.
//  • A part is done when the learner presses "Abschnitt erledigt"; a situation when they tick "Geübt".
//  • A lesson is completed when all of its parts are marked done.
// Stable ids: lesson number (1–24), part key (GUIDE_MD.PARTS), situation number (1–8), can-do id.
(function (root) {
  const KEY = 'a1:guide';
  const PARTS = ['intro', 'goals', 'words', 'patterns', 'situations', 'expressions', 'variations', 'challenge', 'review'];
  const now = () => new Date().toISOString();
  function load() { try { const v = JSON.parse(root.localStorage.getItem(KEY) || 'null'); return v && v.v === 1 ? v : { v: 1, l: {} } } catch (e) { return { v: 1, l: {} } } }
  function save(s) { try { root.localStorage.setItem(KEY, JSON.stringify(s)) } catch (e) {} }
  const L = (s, n) => (s.l[n] = s.l[n] || { parts: {}, sit: {}, can: {} });
  const ok = n => Number.isInteger(+n) && +n >= 1 && +n <= 24;

  const api = {
    KEY, PARTS,
    state: load,
    visit(n, part, sit) { if (!ok(n)) return; const s = load(); const l = L(s, n); l.seen = now(); s.last = { n: +n, part: part || null, sit: sit || null, at: l.seen }; save(s) },
    setPart(n, part, on) { if (!ok(n) || !PARTS.includes(part)) return; const s = load(); const l = L(s, n); if (on) l.parts[part] = l.parts[part] || now(); else delete l.parts[part]; save(s) },
    setSit(n, k, on) { if (!ok(n)) return; const s = load(); const l = L(s, n); if (on) l.sit[k] = l.sit[k] || now(); else delete l.sit[k]; save(s) },
    setCan(n, id, on) { if (!ok(n)) return; const s = load(); const l = L(s, n); if (on) l.can[id] = l.can[id] || now(); else delete l.can[id]; save(s) },
    // summary for one lesson; `parts` = the parts this lesson has (from GUIDE_INDEX)
    lesson(n, parts, sitTotal) {
      const l = load().l[n] || { parts: {}, sit: {}, can: {} }; parts = parts || PARTS;
      const done = parts.filter(p => l.parts[p]).length;
      return { n: +n, done, total: parts.length, pct: Math.round(done / parts.length * 100), completed: done === parts.length,
        started: !!(l.seen || done || Object.keys(l.sit).length), seen: l.seen || null, partsDone: l.parts, sitDone: l.sit,
        sits: Object.keys(l.sit).length, sitTotal: sitTotal || 8, can: l.can };
    },
    // whole guide; idx = GUIDE_INDEX
    overall(idx) {
      const s = load(); const ls = idx.map(x => api.lesson(x.n, x.parts, x.situations.length));
      const last = s.last && ok(s.last.n) ? s.last : null;
      const cur = last && !ls[last.n - 1].completed ? ls[last.n - 1] : (ls.find(x => x.started && !x.completed) || ls.find(x => !x.completed) || null);
      return { lessons: ls, completed: ls.filter(x => x.completed).length, started: ls.filter(x => x.started).length, last, current: cur,
        a11: ls.slice(0, 12).filter(x => x.completed).length, a12: ls.slice(12).filter(x => x.completed).length };
    }
  };
  root.GUIDE_PROGRESS = api;
})(typeof window !== 'undefined' ? window : globalThis);
