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
ui.css      design tokens (one palette for every page) + public site (.lp-*) + portal shell (.sh-*) + dashboard (.db-*)
guard.js    <head> auth guard for learner pages: no stored session → index.html?signin=1&next=<page>
shell.js    learner-portal layout: sidebar · top header with profile menu · mobile drawer + tab bar · onboarding redirect
landing.js  public website: header, mobile menu, sign-in dialog, signed-in awareness
```

### Public website vs. learner portal (v3)
| | Public website | Learner portal |
| --- | --- | --- |
| Pages | `index.html` only | `dashboard.html`, `onboarding.html`, `course.html`, `lesson.html`, `wortschatz.html`, `practice.html`, `tests.html`, `test.html`, `mistakes.html`, `progress.html`, `grammar-book.html`, `study-guide.html`, `speaking.html` |
| Layout | `body.lp`: header, hero, course cards, features, footer | `shell.js` wraps each page: fixed sidebar (≥1001 px), top header + profile menu, drawer + bottom tab bar (≤1000 px) |
| Access | anyone | `guard.js` in `<head>`; `shell.js` re-checks with Supabase and signs out stale sessions |

Routing stays file-based (GitHub Pages, no build step), so every page is a real URL: deep links and refresh work without a SPA router.
**Sign-in flow:** landing → Google (Supabase PKCE) → `redirectTo` = `dashboard.html` or the page the learner originally asked for (`next`, same-site page names only).
**Sign-in methods** (`auth-config.js` switches each on only after it is configured in Supabase): Google, Microsoft (`azure`, scopes `email openid profile`), Apple, e-mail one-time code + magic link (`signInWithOtp` / `verifyOtp`, needs custom SMTP), passkeys (Supabase beta, `experimental.passkey`, RP ID `ifti6650.github.io`; added on `account.html`, sign-in only for existing accounts). Every method uses the same dialog; the first sign-in creates the account when sign-ups are enabled. Same verified e-mail ⇒ same account (Supabase identity linking). `privacy.html` is the public privacy notice (operator details still to be filled in).
**Onboarding:** after sign-in, a learner without `a1:prefs.course` and without any saved progress goes to `onboarding.html` to choose Momente A1.1 or A1.2. Learners who already have progress get the course inferred once (highest lesson used), so existing users never see onboarding. The choice is stored in `a1:prefs` (already synced via `app_state`): no database change.
**Sign-out:** uploads queued answers, ends the Supabase session, returns to `index.html?signedout=1`. Browser copies of synced progress are kept so offline use still works; they are overwritten by the account's data at the next sign-in.
**Offline:** if Supabase cannot load but a session is stored, portal pages stay usable with local data and show an offline notice.

Pages: `dashboard.html` (personal dashboard), `course.html` (lessons + the 8-week plan, moved from the old start page), `lesson.html?l=N#learn|wortschatz|practice|apply|test|review`, `practice.html` (hub), `tests.html`, `test.html?id=…`, `mistakes.html`, `progress.html`.

**Content lives in the repo, learner data in Supabase.** Question banks are versioned JS files (reviewable in PRs, work offline, no admin UI needed). The database stores only learner events.
*Open decision for review:* move question banks into Supabase tables later (needed only for an in-browser content editor).

## 3. Curriculum model

* 24 lessons from `plan-data.js`: title, topic, level (A1.1 L1–12 / A1.2 L13–24), Modul (3 lessons each), grammar steps with Grammar Book links, Study Guide anchor, Wortschatz words.
* `textbookMapping: 'title-and-topic'`: lesson titles/topics and grammar order follow Momente. **Exercise-level mapping to Kursbuch/Arbeitsbuch pages is not verified** (no access to the books) and no page numbers are claimed.
* Lesson content status: **L1 complete** (6 objectives, 7 Learn sections, 30 practice, 7 apply, 15 quiz items). **L2 complete** (6 objectives, 7 Learn sections, 31 practice, 8 apply, 15 quiz items). **L3 complete** (6 objectives, 7 Learn sections, 30 practice, 7 apply, 15 quiz items) — Modul 1 fully authored. **L4–L6 complete** (Modul 2: nouns & gender, prices; ein/kein, colours & materials; plurals, accusative, phone at work). **L7–L9 complete** (Modul 3: können & sentence bracket, hobbies, frequency; time, am/um, inversion, wissen, plans; food verbs, mögen/möchte, compound nouns, restaurant). **L10–L12 complete** (Modul 4: separable verbs & transport; Perfekt with haben, daily routine; Perfekt with sein, war/hatte, months & seasons) — A1.1 fully authored. **L13–L15 complete** (Modul 5: es gibt, dative pronouns & verbs, gefallen, city; dative articles & prepositions, short forms, directions; all possessive articles, flat & rooms). **L16–L18 complete** (Modul 6: in/vor/nach + dative time, könnten, appointments & problems; wollen, werden, mit/ohne/für, wichtig, plans; body & pain, Sie-imperative, sollen, at the doctor's). **L19–L21 complete** (Modul 7: du/ihr-imperative, bitte/doch/mal, all personal pronouns, housework; Perfekt without ge-, separable vs inseparable, appearance & character, un-; müssen/dürfen, nicht müssen vs nicht dürfen, man, all modals, opinions). **L22–L24 complete** (Modul 8: comparative/superlative, als/so … wie, gern–lieber–am liebsten, welch-/dies-, clothes; und/aber/oder/denn, two-way prepositions, liegen/legen, weather, -los; ordinals, dates & years, würde, congratulations). **All 24 lessons are fully authored** (719 practice, 169 apply, 360 quiz items; status ai-checked, pending teacher review).
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
* `node --test tests/*.test.js` — engine/content tests plus `tests/site.test.js`: landing numbers and lesson lists are computed from the real content; every learner page loads `guard.js` in `<head>`, uses the shell and has no old navigation; service worker caches the new files.
* `NODE_PATH=$(npm root -g) node tests/e2e/journeys.js [--shots dir]` — Playwright journeys against a simulated Supabase (`tests/e2e/mock-supabase.js`, never the real project): guest → login → dashboard; new user → onboarding → A1.1 (and A1.2 → Lektion 13); protected deep link → login → same page; resume learning; Wortschatz → Practice → Progress (incl. sync to `app_state`); refresh; logout; mobile navigation; closed sign-ups; server error + retry; offline; keyboard menu; active states on every page.
* `NODE_PATH=$(npm root -g) node tests/e2e/lessons.js 1 2 … 24` (static server on :8765) — answers every practice, apply and quiz item of each lesson inside the portal.

* `node --test tests/*.test.js` — 16 tests: answer evaluation, partial scores, scoring/breakdown, course model, Lektion 1 schema + every key passes its own checker, quiz ≠ practice, generated vocab questions, review scheduling.
* Playwright e2e (run locally): all pages load without errors; L1 practice 30/30 via UI; apply 7/7; test mode leaks no feedback; quiz 100% → lesson marked passed → course card "Completed"; module test resume; Wortschatz 783 words, 4 modes, state format unchanged; no horizontal overflow at 390 px.

### Manual checklist (signed in, after merging)
1. Sign in → Dashboard greets you, current lesson shown.
2. Lektion 1 → Practice: answer one wrong → it appears in Mistakes.
3. Lektion 1 → Quiz → submit → Tests history + Progress show the result.
4. Open the site on a second device → lesson progress matches.
5. Wortschatz: flashcards / write / quiz behave as before.
