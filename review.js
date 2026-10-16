// Deutsch A1 · mistake review scheduling (client mirror of record_answer_v2 in supabase/migrations/002)
// Rules (kept deliberately simple and transparent):
//  - Wrong answer  -> item enters / re-enters the list: streak = 0, due again in 10 minutes.
//  - Right answer  -> counts toward mastery only if the last counted right answer was >= 12 h ago
//                     (i.e. a new study session). Then streak + 1 and next review in 1, 3, 7 days.
//  - Mastered      -> 3 counted right answers in a row (3 separate sessions). A later error reopens it.
// States shown to the learner: new · learning · due · improving · mastered
(function (root) {
  const MIN = 60e3, H = 3600e3, D = 24 * H;
  const SESSION_GAP = 12 * H, RETRY = 10 * MIN, STEPS = [1 * D, 3 * D, 7 * D], MASTER_AT = 3;
  const iso = t => new Date(t).toISOString();
  const ms = v => v == null ? null : (typeof v === 'number' ? v : Date.parse(v));

  function apply(item, correct, now = Date.now()) {
    if (!correct) {
      const s = Object.assign({ times_wrong: 0, correct_streak: 0, review_count: 0, mastered: false, last_correct_at: null }, item || {});
      s.times_wrong += 1; s.correct_streak = 0; s.mastered = false; s.next_review_at = iso(now + RETRY); s.last_seen_at = iso(now);
      return s;
    }
    if (!item || item.mastered) return item || null; // right answers never create items
    const s = Object.assign({}, item);
    const last = ms(s.last_correct_at);
    if (last == null || now - last >= SESSION_GAP) {
      s.correct_streak = (s.correct_streak || 0) + 1; s.review_count = (s.review_count || 0) + 1; s.last_correct_at = iso(now);
      s.mastered = s.correct_streak >= MASTER_AT;
      s.next_review_at = iso(now + STEPS[Math.min(s.correct_streak, STEPS.length) - 1]);
    }
    s.last_seen_at = iso(now);
    return s;
  }
  function state(s, now = Date.now()) {
    if (!s) return null;
    if (s.mastered) return 'mastered';
    const next = ms(s.next_review_at);
    const due = next == null || next <= now;
    if (!s.correct_streak) return (!s.review_count && (s.times_wrong || 1) <= 1 && !due) ? 'new' : due ? 'due' : 'learning';
    return due ? 'due' : 'improving';
  }
  const LABEL = { new: 'New mistake', learning: 'Learning', due: 'Review due', improving: 'Improving', mastered: 'Mastered' };
  const API = { apply, state, LABEL, SESSION_GAP, RETRY, STEPS, MASTER_AT };
  root.REVIEW = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})(typeof window !== 'undefined' ? window : globalThis);
