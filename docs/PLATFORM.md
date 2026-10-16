# Deutsch A1 · Learning platform v2

Branch `feature/learning-platform-v2`. Static site (GitHub Pages) + Supabase (auth + learner data). No build step, no framework, by design: the existing site is plain HTML/JS and works offline as a PWA.

## 1. Current-state audit (before v2)

| Area | Found | Decision |
|---|---|---|
| Wortschatz (`wortschatz.html`) | 783 words / 24 lessons inline; list, flashcards, write, quiz; Leitner boxes 0–5 (0/1/3/7/14/30 days) in `localStorage['wz:v2']`; answers recorded to Supabase since v1 | **Protected.** Only change: two links in its top link row. Logic, data and storage format untouched (verified by e2e). |
| Grammar Book | 25 steps with stable anchors | Kept; `gb-links.js` adds "Used in Lektion N · practise · quiz" under each step. |
| Study Guide / 8-week plan | Self-tests and day ticks in `a1plan:v1` | Kept; linked from lessons and Resources. |
| Sprechen | Speech recognition + AI tutor links, module dialogues | Kept; linked from lessons (Apply) and Resources. |
| Supabase | Google login; `attempts`, `review_items`, `test_results`, `app_state` with RLS "own rows"; `record_answer()` | Reused. One additive migration (002). |
| Exercises / tests | None beyond plan self-tests and Wortschatz quiz | New engine + tests. |
| Mistakes | "3 right in a row" even within one session, no dates | New spaced scheduling (sessions ≥ 12 h apart). |
| Risk | Live site shares the same database | Migration is additive; v1 function kept; client falls back if v2 is missing. |

## 2. Architecture

```
plan-data.js (existing, verified) ─┐
lessons/l01.js (authored content) ─┼─> course.js (COURSE: 24 lessons, 8 modules, tests)
                                   │
engine.js   pure answer checking + 12 question types (UI) + practice runner + vocab question generator
review.js   mistake scheduling (mirror of SQL record_answer_v2)
progress-model.js  every progress definition in one place (PM)
sync.js     auth, offline answer queue, app_state sync (now also a1:lessons, a1:prefs, a1:writing)
data.js     reads (RLS-scoped), question-bank lookup, answer recording
nav.js      shared menu: Dashboard · My Course · Wortschatz · Practice · Tests · Mistakes · Progress · Resources
```

Pages: `index.html` (dashboard + existing tools/plan), `course.html`, `lesson.html?l=N#learn|wortschatz|practice|apply|test|review`, `practice.html` (hub), `tests.html`, `test.html?id=…`, `mistakes.html`, `progress.html`.

**Content lives in the repo, learner data in Supabase.** Question banks are versioned JS files (reviewable in PRs, work offline, no admin UI needed). The database stores only learner events.
*Open decision for review:* move question banks into Supabase tables later (needed only for an in-browser content editor).

## 3. Curriculum model

* 24 lessons from `plan-data.js`: title, topic, level (A1.1 L1–12 / A1.2 L13–24), Modul (3 lessons each), grammar steps with Grammar Book links, Study Guide anchor, Wortschatz words.
* `textbookMapping: 'title-and-topic'`: lesson titles/topics and grammar order follow Momente. **Exercise-level mapping to Kursbuch/Arbeitsbuch pages is not verified** (no access to the books) and no page numbers are claimed.
* Lesson content status: **L1 complete** (6 objectives, 7 Learn sections, 30 practice, 7 apply, 15 quiz items). **L2 complete** (6 objectives, 7 Learn sections, 31 practice, 8 apply, 15 quiz items). **L3 complete** (6 objectives, 7 Learn sections, 30 practice, 7 apply, 15 quiz items) — Modul 1 fully authored. **L4–L6 complete** (Modul 2: nouns & gender, prices; ein/kein, colours & materials; plurals, accusative, phone at work). **L7–L9 complete** (Modul 3: können & sentence bracket, hobbies, frequency; time, am/um, inversion, wissen, plans; food verbs, mögen/möchte, compound nouns, restaurant). **L10–L24 vocab-only**: Learn links + vocabulary practice and quiz generated from the existing word list (article, meaning, write).
* Question metadata: `id, level, lesson, topic, skill, grammar, difficulty, type, instructions, prompt, options, answer, accept, explanation, objective, status`. `status: 'ai-checked'` = written and checked by AI, **needs teacher review** before `approved`; `generated` = built from the Wortschatz list.

**Content plan for L2–L24** (same template as `lessons/l01.js`): objectives (4–6), Learn (5–7 sections linked to the Grammar Book step), Practice (~25–30), Apply (2 listening, 2 reading, 1 writing, 1–2 speaking), Quiz (15, no overlap with Practice). Add the file, add a `<script src="lessons/lNN.js">` to the page template + `sw.js`; `tests/engine.test.js` validates every item automatically.

## 4. Definitions
See `progress-model.js` header and the "How these numbers work" box on `progress.html`. Completion (quiz passed) ≠ mastery (spaced mistake review) ≠ accuracy.

## 5. Database migration 002 (required for spaced mistake review) — APPLIED 2026-10-16, verified

File: `supabase/migrations/002_learning_platform.sql` · rollback: `002_learning_platform_rollback.sql`

* Adds columns (review dates, topic/skill/explanation, test breakdown) — **no drops, no data changes**.
* Adds `record_answer_v2()`; the v1 `record_answer()` stays for the live site.
* Makes `test_results` append-only for learners (select + insert, no update/delete).
* Adds `NOT VALID` check constraints for new rows (sizes, score ≤ max).

How to apply: Supabase → SQL Editor → paste the file → Run. The new pages work before the migration too (fallback to v1, all open mistakes count as due, test breakdown not stored).

Security notes: RLS on all four tables; only the publishable key is in the client; scores are computed in the browser, so a determined user could submit a fake score for *their own* account (acceptable for self-study; server-side grading would need an Edge Function).

## 6. Verification
* `node --test tests/*.test.js` — 16 tests: answer evaluation, partial scores, scoring/breakdown, course model, Lektion 1 schema + every key passes its own checker, quiz ≠ practice, generated vocab questions, review scheduling.
* Playwright e2e (run locally): all pages load without errors; L1 practice 30/30 via UI; apply 7/7; test mode leaks no feedback; quiz 100% → lesson marked passed → course card "Completed"; module test resume; Wortschatz 783 words, 4 modes, state format unchanged; no horizontal overflow at 390 px.

### Manual checklist (signed in, after merging)
1. Sign in → Dashboard greets you, current lesson shown.
2. Lektion 1 → Practice: answer one wrong → it appears in Mistakes.
3. Lektion 1 → Quiz → submit → Tests history + Progress show the result.
4. Open the site on a second device → lesson progress matches.
5. Wortschatz: flashcards / write / quiz behave as before.
