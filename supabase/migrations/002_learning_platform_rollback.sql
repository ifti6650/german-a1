-- Rollback for 002 (keeps all data; only removes the new function and restores the old test_results policy).
-- The added columns are left in place on purpose (dropping them would delete data); they are harmless for v1.
begin;
drop function if exists public.record_answer_v2(text,int,text,boolean,text,text,text,text,text,text,text,text);
drop policy if exists "own select" on public.test_results;
drop policy if exists "own insert" on public.test_results;
drop policy if exists "own rows" on public.test_results;
create policy "own rows" on public.test_results for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
commit;
