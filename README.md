# Deutsch A1 – learning materials

Grammar, vocabulary and speaking practice following Momente A1.1 and A1.2 (Hueber).

| Page | What it is |
| --- | --- |
| `index.html` | Start page |
| `wortschatz.html` | Vocabulary trainer: 783 words, flashcards, quiz |
| `grammar-book.html` | Grammar book, 25 steps + 4 bonus chapters |
| `study-guide.html` | 8-week revision guide |
| `speaking.html` | Speaking practice |
| `practice.html` | Mistake practice: wrong answers return until right 3× in a row |
| `progress.html` | Progress dashboard: answers per day, accuracy by lesson, tests |
| `sync.js` | Google login + cloud sync of progress (Supabase) |
| `Momente_A1_Grammar_Book.pdf` | Print version of the grammar book |

Hosted with GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.


## Progress sync (Supabase)

`sync.js` signs in with Google through Supabase and saves every answer (`attempts`), the mistake list (`review_items`), test results (`test_results`) and the existing browser progress (`app_state`). Row Level Security keeps each user's rows private. The database schema is in `supabase/schema.sql`. The key in `sync.js` is the public *publishable* key; never put the secret/service_role key in this repo.
