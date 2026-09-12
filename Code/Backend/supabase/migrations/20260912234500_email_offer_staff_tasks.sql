-- Durable staff work queue for requests created by email offer pages.

create table if not exists public.email_offer_staff_tasks (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique references public.lead_submissions(submission_id) on delete cascade,
  lead_id uuid not null references public.leads(id) on delete cascade,
  offer text not null check (offer in ('bill-review', 'quote-review')),
  status text not null default 'open' check (status in ('open', 'completed', 'dismissed')),
  is_test boolean not null default false,
  due_at timestamptz not null default now(),
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_email_offer_staff_tasks_status_due
  on public.email_offer_staff_tasks(status, due_at);
create index if not exists idx_email_offer_staff_tasks_lead_id
  on public.email_offer_staff_tasks(lead_id);

alter table public.email_offer_staff_tasks enable row level security;
revoke all on public.email_offer_staff_tasks from public, anon, authenticated;
grant all on public.email_offer_staff_tasks to service_role;

create or replace function public.queue_email_offer_staff_task()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_offer text := new.qualification_data->>'inquiry_topic';
begin
  if lower(coalesce(new.attribution->>'acquisition_medium', '')) = 'email'
     and v_offer in ('bill-review', 'quote-review') then
    insert into public.email_offer_staff_tasks(submission_id, lead_id, offer, is_test)
    values(new.submission_id, new.lead_id, v_offer, new.is_test)
    on conflict (submission_id) do nothing;
  end if;
  return new;
end;
$$;

revoke all on function public.queue_email_offer_staff_task() from public, anon, authenticated;
grant execute on function public.queue_email_offer_staff_task() to service_role;

drop trigger if exists trg_queue_email_offer_staff_task on public.lead_submissions;
create trigger trg_queue_email_offer_staff_task
after insert on public.lead_submissions
for each row execute function public.queue_email_offer_staff_task();

create or replace function public.stop_crr_promotion_on_appointment()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.lead_id is not null and new.status = 'scheduled' then
    update public.communication_tasks
       set status = 'failed',
           error_message = 'Promotional email stopped after appointment booking',
           updated_at = now()
     where lead_id = new.lead_id
       and task_type = 'email'
       and status in ('pending', 'processing')
       and coalesce(metadata, '{}'::jsonb) ? 'sequence_id';

    update public.lead_sequence_tracking
       set completed_at = coalesce(completed_at, now()), updated_at = now()
     where lead_id = new.lead_id and completed_at is null;

    update public.email_offer_staff_tasks
       set status = 'completed', completed_at = coalesce(completed_at, now()), updated_at = now()
     where lead_id = new.lead_id and status = 'open';
  end if;
  return new;
end;
$$;

revoke all on function public.stop_crr_promotion_on_appointment() from public, anon, authenticated;
grant execute on function public.stop_crr_promotion_on_appointment() to service_role;

