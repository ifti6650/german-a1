-- Deutsch A1: progress tracking schema
-- Every row belongs to one user (auth.uid()); Row Level Security blocks everyone else.

-- 1) Every single answer (track record)
create table if not exists public.attempts (
  id           bigint generated always as identity primary key,
  user_id      uuid not null default auth.uid() references auth.users(id) on delete cascade,
  item_id      text not null,            -- e.g. 'vocab:Tisch' or 'ex:L3-gap-04'
  lesson       int,                      -- Lektion 1..14 (null = mixed)
  kind         text not null,            -- 'vocab' | 'gap' | 'mc' | 'article' | 'conjugation' | 'order' | 'listening' ...
  correct      boolean not null,
  answer       text,                     -- what you typed / picked
  expected     text,                     -- the right answer
  source       text,                     -- 'practice' | 'test' | 'review'
  created_at   timestamptz not null default now()
);
create index if not exists attempts_user_time on public.attempts (user_id, created_at desc);
create index if not exists attempts_user_item on public.attempts (user_id, item_id);

-- 2) Mistake list: an item enters on a wrong answer and leaves after 3 correct in a row
create table if not exists public.review_items (
  user_id        uuid not null default auth.uid() references auth.users(id) on delete cascade,
  item_id        text not null,
  lesson         int,
  kind           text,
  prompt         text,                   -- question text, so the list is readable on its own
  expected       text,
  last_answer    text,
  times_wrong    int not null default 1,
  correct_streak int not null default 0, -- reaches 3 -> mastered
  mastered       boolean not null default false,
  first_wrong_at timestamptz not null default now(),
  last_seen_at   timestamptz not null default now(),
  primary key (user_id, item_id)
);
create index if not exists review_open on public.review_items (user_id, mastered, last_seen_at);

-- 3) Test results history
create table if not exists public.test_results (
  id           bigint generated always as identity primary key,
  user_id      uuid not null default auth.uid() references auth.users(id) on delete cascade,
  test_id      text not null,            -- e.g. 'lesson-3', 'mixed', 'mock-start-deutsch-1'
  title        text,
  score        numeric not null,
  max_score    numeric not null,
  duration_sec int,
  wrong_items  jsonb not null default '[]'::jsonb,
  created_at   timestamptz not null default now()
);
create index if not exists tests_user_time on public.test_results (user_id, created_at desc);

-- 4) Existing browser data (study plan, known words) synced across devices
create table if not exists public.app_state (
  user_id    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  key        text not null,              -- the localStorage key, e.g. 'known'
  value      jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

-- Row Level Security: each user only sees and changes their own rows
alter table public.attempts     enable row level security;
alter table public.review_items enable row level security;
alter table public.test_results enable row level security;
alter table public.app_state    enable row level security;

do $$
declare t text;
begin
  foreach t in array array['attempts','review_items','test_results','app_state'] loop
    execute format('drop policy if exists "own rows" on public.%I', t);
    execute format(
      'create policy "own rows" on public.%I for all to authenticated
         using ((select auth.uid()) = user_id)
         with check ((select auth.uid()) = user_id)', t);
  end loop;
end $$;

-- Record one answer and update the mistake list in a single call.
-- Wrong  -> add to list (or reset streak); Right -> streak +1, mastered at 3.
create or replace function public.record_answer(
  p_item_id text, p_lesson int, p_kind text, p_correct boolean,
  p_answer text, p_expected text, p_prompt text default null, p_source text default 'practice'
) returns void
language plpgsql
security invoker
set search_path = public
as $$
begin
  insert into attempts (item_id, lesson, kind, correct, answer, expected, source)
  values (p_item_id, p_lesson, p_kind, p_correct, p_answer, p_expected, p_source);

  if not p_correct then
    insert into review_items (item_id, lesson, kind, prompt, expected, last_answer)
    values (p_item_id, p_lesson, p_kind, p_prompt, p_expected, p_answer)
    on conflict (user_id, item_id) do update
      set times_wrong    = review_items.times_wrong + 1,
          correct_streak = 0,
          mastered       = false,
          last_answer    = excluded.last_answer,
          prompt         = coalesce(excluded.prompt, review_items.prompt),
          last_seen_at   = now();
  else
    update review_items
       set correct_streak = correct_streak + 1,
           mastered       = (correct_streak + 1) >= 3,
           last_seen_at   = now()
     where user_id = auth.uid() and item_id = p_item_id;
  end if;
end $$;

revoke all on function public.record_answer(text,int,text,boolean,text,text,text,text) from public, anon;
grant execute on function public.record_answer(text,int,text,boolean,text,text,text,text) to authenticated;
