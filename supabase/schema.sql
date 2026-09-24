-- SenseiDoge: "Sync my progress" storage.
-- Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.

-- One row per signed-in learner, holding their progress as JSON.
create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb       not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Row Level Security: every learner can only see and change their own row.
alter table public.progress enable row level security;

drop policy if exists "progress: read own"   on public.progress;
drop policy if exists "progress: insert own" on public.progress;
drop policy if exists "progress: update own" on public.progress;
drop policy if exists "progress: delete own" on public.progress;

create policy "progress: read own"   on public.progress for select to authenticated using (auth.uid() = user_id);
create policy "progress: insert own" on public.progress for insert to authenticated with check (auth.uid() = user_id);
create policy "progress: update own" on public.progress for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "progress: delete own" on public.progress for delete to authenticated using (auth.uid() = user_id);

-- Keep synced progress small enough to stay well inside the free tier (about 1 MB per learner).
alter table public.progress drop constraint if exists progress_size_limit;
alter table public.progress add constraint progress_size_limit check (pg_column_size(data) < 1000000);

-- "Delete my account and synced data": removes the signed-in user (their progress row is deleted by the cascade).
create or replace function public.delete_my_account()
returns void
language sql
security definer
set search_path = public
as $$
  delete from auth.users where id = auth.uid();
$$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
