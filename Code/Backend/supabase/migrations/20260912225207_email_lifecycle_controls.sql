-- Recipient-wide lifecycle controls for permissioned CRR email.
-- This migration does not grant permission, enroll a contact, or start a send.

create table if not exists public.email_unsubscribe_tokens (
  email_identity_id uuid primary key references public.email_identities(id) on delete cascade,
  token uuid not null unique default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create table if not exists public.email_reply_events (
  id uuid primary key default gen_random_uuid(),
  provider_event_id text unique,
  provider_email_id text,
  email_identity_id uuid references public.email_identities(id) on delete set null,
  email_from text not null,
  email_to text not null,
  subject text,
  received_at timestamptz not null default now(),
  owner_alert_resend_id text,
  owner_alerted_at timestamptz
);

create table if not exists public.email_contact_holds (
  email_identity_id uuid primary key references public.email_identities(id) on delete cascade,
  reason text not null,
  source_reference text not null,
  created_at timestamptz not null default now(),
  released_at timestamptz
);

alter table public.email_unsubscribe_tokens enable row level security;
alter table public.email_reply_events enable row level security;
alter table public.email_contact_holds enable row level security;
revoke all on public.email_unsubscribe_tokens, public.email_reply_events, public.email_contact_holds from public,anon,authenticated,service_role;
grant select,insert on public.email_unsubscribe_tokens to service_role;
grant select,insert,update on public.email_reply_events to service_role;
grant select,insert,update on public.email_contact_holds to service_role;

insert into public.settings(key,value)
values('email_marketing_enabled','false'::jsonb)
on conflict(key) do nothing;

create or replace function public.get_crr_email_unsubscribe_token(p_lead_id uuid)
returns text language plpgsql security invoker set search_path='' as $$
declare identity_id uuid; result text;
begin
  select email_identity_id into identity_id from public.lead_email_identities where lead_id=p_lead_id;
  if identity_id is null then raise exception 'Email identity not linked'; end if;
  insert into public.email_unsubscribe_tokens(email_identity_id) values(identity_id)
    on conflict(email_identity_id) do nothing;
  select token::text into result from public.email_unsubscribe_tokens where email_identity_id=identity_id;
  return result;
end $$;
revoke all on function public.get_crr_email_unsubscribe_token(uuid) from public,anon,authenticated;
grant execute on function public.get_crr_email_unsubscribe_token(uuid) to service_role;

create or replace function public.stop_crr_email_identity(
  p_email_identity_id uuid,p_reason text,p_source_reference text,p_mark_opted_out boolean default false
) returns jsonb language plpgsql security invoker set search_path='' as $$
declare stopped integer:=0;
begin
  perform pg_advisory_xact_lock(hashtext('crr_email_identity:'||p_email_identity_id::text));
  insert into public.email_suppressions(email_identity_id,reason,source_reference,effective_at)
    values(p_email_identity_id,p_reason,p_source_reference,now())
    on conflict(email_identity_id) do update set
      reason=excluded.reason,source_reference=excluded.source_reference,effective_at=least(public.email_suppressions.effective_at,excluded.effective_at);
  if p_mark_opted_out then
    update public.leads set consent_status='opted_out',consent_timestamp=now()
    where id in(select lead_id from public.lead_email_identities where email_identity_id=p_email_identity_id);
  end if;
  update public.communication_tasks set status='failed',error_message='Email identity stopped: '||p_reason,updated_at=now()
  where task_type='email' and status in('pending','processing')
    and lead_id in(select lead_id from public.lead_email_identities where email_identity_id=p_email_identity_id);
  get diagnostics stopped=row_count;
  update public.lead_sequence_tracking set completed_at=coalesce(completed_at,now()),updated_at=now()
  where completed_at is null
    and lead_id in(select lead_id from public.lead_email_identities where email_identity_id=p_email_identity_id);
  return jsonb_build_object('status','stopped','queued_emails_stopped',stopped);
end $$;
revoke all on function public.stop_crr_email_identity(uuid,text,text,boolean) from public,anon,authenticated;
grant execute on function public.stop_crr_email_identity(uuid,text,text,boolean) to service_role;

create or replace function public.record_crr_email_opt_out_by_token(p_token text)
returns jsonb language plpgsql security invoker set search_path='' as $$
declare identity_id uuid;
begin
  select email_identity_id into identity_id from public.email_unsubscribe_tokens where token::text=p_token;
  if identity_id is null then raise exception 'Invalid unsubscribe token'; end if;
  insert into public.email_permission_events(email_identity_id,purpose,decision,evidence_reference,occurred_at)
    values(identity_id,'solar_marketing','revoked','one_click_unsubscribe:'||gen_random_uuid()::text,now());
  return public.stop_crr_email_identity(identity_id,'one_click_unsubscribe','unsubscribe_token:'||p_token,true);
end $$;
revoke all on function public.record_crr_email_opt_out_by_token(text) from public,anon,authenticated;
grant execute on function public.record_crr_email_opt_out_by_token(text) to service_role;

create or replace function public.record_crr_email_reply(
  p_token text,p_provider_event_id text,p_provider_email_id text,p_email_from text,p_email_to text,p_subject text
) returns jsonb language plpgsql security invoker set search_path='' as $$
declare identity_id uuid; reply_id uuid; stopped integer:=0;
begin
  select email_identity_id into identity_id from public.email_unsubscribe_tokens where token::text=p_token;
  if identity_id is null then raise exception 'Invalid reply token'; end if;
  insert into public.email_reply_events(provider_event_id,provider_email_id,email_identity_id,email_from,email_to,subject)
  values(p_provider_event_id,p_provider_email_id,identity_id,p_email_from,p_email_to,p_subject)
  on conflict(provider_event_id) do update set provider_event_id=excluded.provider_event_id
  returning id into reply_id;
  insert into public.email_contact_holds(email_identity_id,reason,source_reference,created_at,released_at)
  values(identity_id,'recipient_reply','reply:'||coalesce(p_provider_event_id,reply_id::text),now(),null)
  on conflict(email_identity_id) do update set
    reason=excluded.reason,source_reference=excluded.source_reference,created_at=excluded.created_at,released_at=null;
  update public.communication_tasks set status='failed',error_message='Email identity paused after recipient reply',updated_at=now()
  where task_type='email' and status in('pending','processing')
    and lead_id in(select lead_id from public.lead_email_identities where email_identity_id=identity_id);
  get diagnostics stopped=row_count;
  update public.lead_sequence_tracking set completed_at=coalesce(completed_at,now()),updated_at=now()
  where completed_at is null
    and lead_id in(select lead_id from public.lead_email_identities where email_identity_id=identity_id);
  return jsonb_build_object('status','paused_after_reply','queued_emails_stopped',stopped,'reply_event_id',reply_id);
end $$;
revoke all on function public.record_crr_email_reply(text,text,text,text,text,text) from public,anon,authenticated;
grant execute on function public.record_crr_email_reply(text,text,text,text,text,text) to service_role;

create or replace function public.record_crr_email_delivery_stop(p_lead_id uuid,p_reason text,p_source_reference text)
returns jsonb language plpgsql security invoker set search_path='' as $$
declare identity_id uuid;
begin
  select email_identity_id into identity_id from public.lead_email_identities where lead_id=p_lead_id;
  if identity_id is null then return jsonb_build_object('status','identity_not_linked'); end if;
  return public.stop_crr_email_identity(identity_id,p_reason,p_source_reference,false);
end $$;
revoke all on function public.record_crr_email_delivery_stop(uuid,text,text) from public,anon,authenticated;
grant execute on function public.record_crr_email_delivery_stop(uuid,text,text) to service_role;

create or replace function public.check_crr_email_outreach(p_lead_id uuid,p_email text)
returns jsonb language plpgsql stable security invoker set search_path='' as $$
declare l public.leads%rowtype; identity_id uuid; permission public.email_permission_events%rowtype; reason text;
declare sent_24h integer; sent_7d integer; enabled boolean:=false;
begin
 select case when jsonb_typeof(value)='boolean' then (value::text)::boolean else false end into enabled
 from public.settings where key='email_marketing_enabled';
 if not coalesce(enabled,false) then reason:='marketing_paused'; end if;
 select * into l from public.leads where id=p_lead_id;
 if reason is null and not found then reason:='missing_lead';
 elsif reason is null and (p_email is null or l.email is null or lower(btrim(l.email))<>lower(btrim(p_email))) then reason:='stale_recipient';
 elsif reason is null and l.consent_status is distinct from 'opted_in' then reason:='current_consent_not_opted_in';
 elsif reason is null and l.project_type is not null then reason:='manual_review_intake';
 elsif reason is null and (coalesce(l.source,'') ~* '(^|[_-])(test|synthetic)([_-]|$)'
    or coalesce(l.qualification_data->>'is_test','false')='true') then reason:='test_record';
 end if;
 if reason is not null then return jsonb_build_object('allowed',false,'reason',reason); end if;
 select id into identity_id from public.email_identities where normalized_email=lower(btrim(p_email));
 if identity_id is null then reason:='identity_not_linked';
 elsif exists(select 1 from public.email_suppressions where email_identity_id=identity_id) then reason:='recipient_suppressed';
 elsif exists(select 1 from public.email_contact_holds where email_identity_id=identity_id and released_at is null) then reason:='recipient_hold';
 elsif exists(select 1 from public.leads x where lower(btrim(x.email))=lower(btrim(p_email))
     and (x.consent_status='opted_out' or x.email_status in ('bounced','complained','invalid_address','suppressed'))) then reason:='shared_recipient_stop';
 elsif not exists(select 1 from public.lead_email_identities where lead_id=p_lead_id and email_identity_id=identity_id) then reason:='identity_link_stale';
 elsif l.service_market is null or l.service_market not in ('CA','NJ','DE','MD','VA','DC') then reason:='unsupported_market';
 elsif coalesce(l.qualification_data->>'marketing_service_confirmed','false')<>'true' then reason:='service_not_confirmed';
 end if;
 if reason is not null then return jsonb_build_object('allowed',false,'reason',reason); end if;
 select * into permission from public.email_permission_events
 where email_identity_id=identity_id and purpose='solar_marketing'
 order by occurred_at desc,recorded_at desc,id desc limit 1;
 if not found or permission.decision is distinct from 'granted'
    or nullif(btrim(permission.evidence_reference),'') is null
    or nullif(btrim(permission.wording_version),'') is null
    or permission.occurred_at>now() then reason:='purpose_permission_not_verified'; end if;
 if reason is not null then return jsonb_build_object('allowed',false,'reason',reason); end if;
 select count(*) into sent_24h from public.email_logs e join public.lead_email_identities x on x.lead_id=e.lead_id
 where x.email_identity_id=identity_id and e.status='sent' and e.created_at>=now()-interval '24 hours';
 select count(*) into sent_7d from public.email_logs e join public.lead_email_identities x on x.lead_id=e.lead_id
 where x.email_identity_id=identity_id and e.status='sent' and e.created_at>=now()-interval '7 days';
 if sent_24h>=1 then reason:='frequency_cap_24h'; elsif sent_7d>=3 then reason:='frequency_cap_7d'; end if;
 return jsonb_build_object('allowed',reason is null,'reason',coalesce(reason,'current_permission_verified'));
end $$;
revoke all on function public.check_crr_email_outreach(uuid,text) from public,anon,authenticated;
grant execute on function public.check_crr_email_outreach(uuid,text) to service_role;
