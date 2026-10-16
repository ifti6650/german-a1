-- 002 · Learning platform v2  (ADDITIVE, backward-compatible — safe to run on the live project)
-- * No table, column or row is dropped. Existing record_answer() is kept unchanged for the live site.
-- * Adds review scheduling columns, metadata columns, record_answer_v2(), and makes test results append-only.
-- Rollback: see 002_learning_platform_rollback.sql
begin;

-- 1) Mistake list: scheduling + metadata
alter table public.review_items add column if not exists topic           text;
alter table public.review_items add column if not exists skill           text;
alter table public.review_items add column if not exists explanation     text;
alter table public.review_items add column if not exists review_count    int not null default 0;
alter table public.review_items add column if not exists last_correct_at timestamptz;
alter table public.review_items add column if not exists next_review_at  timestamptz not null default now();
create index if not exists review_due on public.review_items (user_id, mastered, next_review_at);

-- 2) Attempts: metadata for analytics
alter table public.attempts add column if not exists topic   text;
alter table public.attempts add column if not exists skill   text;
alter table public.attempts add column if not exists test_id text;

-- 3) Test results: kind + breakdown
alter table public.test_results add column if not exists test_kind text;     -- lesson | module | level | mock
alter table public.test_results add column if not exists breakdown jsonb not null default '{}'::jsonb;
alter table public.test_results add column if not exists answers   jsonb not null default '[]'::jsonb;

-- 4) Input validation (NOT VALID = only checked for new rows; existing rows untouched)
do $$ begin
  alter table public.attempts add constraint attempts_sizes check (char_length(item_id) <= 200 and char_length(coalesce(answer,'')) <= 2000 and char_length(coalesce(expected,'')) <= 2000) not valid;
exception when duplicate_object then null; end $$;
do $$ begin
  alter table public.test_results add constraint test_results_sane check (max_score > 0 and score >= 0 and score <= max_score and char_length(test_id) <= 100) not valid;
exception when duplicate_object then null; end $$;

-- 5) Test results become append-only for the learner (history can't be edited or deleted from the browser)
drop policy if exists "own rows" on public.test_results;
drop policy if exists "own select" on public.test_results;
drop policy if exists "own insert" on public.test_results;
create policy "own select" on public.test_results for select to authenticated using ((select auth.uid()) = user_id);
create policy "own insert" on public.test_results for insert to authenticated with check ((select auth.uid()) = user_id);

-- 6) record_answer_v2: one answer + spaced mistake scheduling (mirror of review.js)
create or replace function public.record_answer_v2(
  p_item_id text, p_lesson int, p_kind text, p_correct boolean,
  p_answer text, p_expected text, p_prompt text default null, p_source text default 'practice',
  p_topic text default null, p_skill text default null, p_explanation text default null, p_test_id text default null
) returns jsonb
language plpgsql
security invoker
set search_path = public
as $$
declare r review_items%rowtype; steps interval[] := array[interval '1 day', interval '3 days', interval '7 days'];
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if char_length(p_item_id) > 200 or char_length(coalesce(p_answer,'')) > 2000 then raise exception 'input too long'; end if;

  insert into attempts (item_id, lesson, kind, correct, answer, expected, source, topic, skill, test_id)
  values (p_item_id, p_lesson, p_kind, p_correct, left(p_answer, 2000), left(p_expected, 2000), p_source, p_topic, p_skill, p_test_id);

  if not p_correct then
    insert into review_items (item_id, lesson, kind, prompt, expected, last_answer, topic, skill, explanation, next_review_at)
    values (p_item_id, p_lesson, p_kind, p_prompt, p_expected, p_answer, p_topic, p_skill, p_explanation, now() + interval '10 minutes')
    on conflict (user_id, item_id) do update
      set times_wrong    = review_items.times_wrong + 1,
          correct_streak = 0,
          mastered       = false,
          last_answer    = excluded.last_answer,
          prompt         = coalesce(excluded.prompt, review_items.prompt),
          topic          = coalesce(excluded.topic, review_items.topic),
          skill          = coalesce(excluded.skill, review_items.skill),
          explanation    = coalesce(excluded.explanation, review_items.explanation),
          next_review_at = now() + interval '10 minutes',
          last_seen_at   = now()
    returning * into r;
  else
    select * into r from review_items where user_id = auth.uid() and item_id = p_item_id for update;
    if found and not r.mastered then
      if r.last_correct_at is null or now() - r.last_correct_at >= interval '12 hours' then
        update review_items
           set correct_streak  = r.correct_streak + 1,
               review_count    = r.review_count + 1,
               last_correct_at = now(),
               mastered        = (r.correct_streak + 1) >= 3,
               next_review_at  = now() + steps[least(r.correct_streak + 1, 3)],
               last_seen_at    = now()
         where user_id = auth.uid() and item_id = p_item_id
        returning * into r;
      else
        update review_items set last_seen_at = now() where user_id = auth.uid() and item_id = p_item_id returning * into r;
      end if;
    end if;
  end if;
  return case when r.item_id is null then null else jsonb_build_object('item_id', r.item_id, 'correct_streak', r.correct_streak, 'mastered', r.mastered, 'next_review_at', r.next_review_at) end;
end $$;

revoke all on function public.record_answer_v2(text,int,text,boolean,text,text,text,text,text,text,text,text) from public, anon;
grant execute on function public.record_answer_v2(text,int,text,boolean,text,text,text,text,text,text,text,text) to authenticated;

commit;
