-- A scheduled appointment is a hard exit from promotional email. Keep
-- appointment confirmations intact by stopping only sequence-owned tasks.

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
       set completed_at = coalesce(completed_at, now()),
           updated_at = now()
     where lead_id = new.lead_id
       and completed_at is null;
  end if;

  return new;
end;
$$;

revoke all on function public.stop_crr_promotion_on_appointment() from public;

drop trigger if exists trg_stop_crr_promotion_on_appointment on public.appointments;
create trigger trg_stop_crr_promotion_on_appointment
after insert or update of status, lead_id, scheduled_time on public.appointments
for each row execute function public.stop_crr_promotion_on_appointment();

