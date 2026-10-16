# Deutsch A1 – learning materials

Grammar, vocabulary and speaking practice following Momente A1.1 and A1.2 (Hueber).

| Page | What it is |
| --- | --- |
| `index.html` | Public website (landing page, course overview, sign-in) |
| `dashboard.html` | Learner dashboard (signed-in learners only, like every page below) |
| `onboarding.html` | First sign-in: choose Momente A1.1 or A1.2 |
| `wortschatz.html` | Vocabulary trainer: 783 words, flashcards, quiz |
| `grammar-book.html` | Grammar book, 25 steps + 4 bonus chapters |
| `study-guide.html` | Study Guide “Deutsch im echten Leben”: 24 lessons, 192 real-life situations (content in `guide/*.md`) |
| `speaking.html` | Speaking practice |
| `course.html` / `lesson.html?l=N` | My Course: 24 lessons, each with Learn · Wortschatz · Practice · Apply · Quiz · Review |
| `practice.html` | Practice hub: mix exercises by lesson, skill, topic, type |
| `tests.html` / `test.html?id=…` | Lesson quizzes, module tests, A1.1/A1.2 assessments |
| `mistakes.html` | Mistake trainer with spaced review |
| `progress.html` | Progress and analytics |
| `sync.js` | Google login + cloud sync of progress (Supabase) |
| `Momente_A1_Grammar_Book.pdf` | Print version of the grammar book |

Hosted with GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.


## Progress sync (Supabase)

`sync.js` signs in with Google through Supabase and saves every answer (`attempts`), the mistake list (`review_items`), test results (`test_results`) and the existing browser progress (`app_state`). Row Level Security keeps each user's rows private. The database schema is in `supabase/schema.sql`. The key in `sync.js` is the public *publishable* key; never put the secret/service_role key in this repo.

Platform v2 architecture, content status and migration notes: [`docs/PLATFORM.md`](docs/PLATFORM.md). Tests: `node --test tests/*.test.js`.
