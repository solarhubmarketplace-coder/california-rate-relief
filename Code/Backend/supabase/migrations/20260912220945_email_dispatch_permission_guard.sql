-- All legacy queue email remains held unless current, purpose-specific evidence exists.
-- This does not grant permission, enroll a contact, or affect owner notifications.
create index if not exists idx_leads_normalized_email on public.leads(lower(btrim(email)));

create function public.check_crr_email_outreach(p_lead_id uuid,p_email text)
returns jsonb language plpgsql stable security invoker set search_path='' as $$
declare l public.leads%rowtype; identity_id uuid; permission public.email_permission_events%rowtype; reason text;
begin
 select * into l from public.leads where id=p_lead_id;
 if not found then reason:='missing_lead';
 elsif p_email is null or l.email is null or lower(btrim(l.email))<>lower(btrim(p_email)) then reason:='stale_recipient';
 elsif l.consent_status is distinct from 'opted_in' then reason:='current_consent_not_opted_in';
 elsif l.project_type is not null then reason:='manual_review_intake';
 elsif coalesce(l.source,'') ~* '(^|[_-])(test|synthetic)([_-]|$)'
    or coalesce(l.qualification_data->>'is_test','false')='true' then reason:='test_record';
 end if;
 if reason is not null then return jsonb_build_object('allowed',false,'reason',reason); end if;

 select id into identity_id from public.email_identities where normalized_email=lower(btrim(p_email));
 if identity_id is null then reason:='identity_not_linked';
 elsif exists(select 1 from public.email_suppressions where email_identity_id=identity_id) then reason:='recipient_suppressed';
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
 return jsonb_build_object('allowed',reason is null,'reason',coalesce(reason,'current_permission_verified'));
end $$;
revoke all on function public.check_crr_email_outreach(uuid,text) from public,anon,authenticated;
grant execute on function public.check_crr_email_outreach(uuid,text) to service_role;

-- Stop state and queue cancellation commit atomically; no global re-opt-in path.
create function public.record_crr_email_opt_out(p_lead_id uuid)
returns jsonb language plpgsql security invoker set search_path='' as $$
declare l public.leads%rowtype; identity_id uuid; stop_reference text; stopped integer:=0;
begin
 select * into l from public.leads where id=p_lead_id for update;
 if not found then raise exception 'Lead not found'; end if;
 update public.leads set consent_status='opted_out',consent_timestamp=now() where id=p_lead_id;
 if btrim(l.email) ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' then
   insert into public.email_identities(normalized_email) values(lower(btrim(l.email))) on conflict(normalized_email) do nothing;
   select id into identity_id from public.email_identities where normalized_email=lower(btrim(l.email));
   insert into public.lead_email_identities(lead_id,email_identity_id) values(p_lead_id,identity_id)
     on conflict(lead_id) do update set email_identity_id=excluded.email_identity_id,linked_at=now();
   stop_reference:='crm_optout:'||p_lead_id::text;
   insert into public.email_suppressions(email_identity_id,reason,source_reference)
     values(identity_id,'crm_opt_out',stop_reference) on conflict(email_identity_id) do nothing;
   insert into public.email_permission_events(email_identity_id,purpose,decision,evidence_reference,occurred_at)
     values(identity_id,'solar_marketing','revoked',stop_reference||':'||gen_random_uuid()::text,now());
 end if;
 update public.communication_tasks t set status='failed',error_message='Email recipient opted out',updated_at=now()
 where t.task_type='email' and t.status in ('pending','processing')
   and t.lead_id in (select x.id from public.leads x where x.id=p_lead_id
     or (identity_id is not null and lower(btrim(x.email))=lower(btrim(l.email))));
 get diagnostics stopped=row_count;
 update public.lead_sequence_tracking t set completed_at=now(),updated_at=now()
 where completed_at is null and t.lead_id in (select x.id from public.leads x where x.id=p_lead_id
     or (identity_id is not null and lower(btrim(x.email))=lower(btrim(l.email))));
 return jsonb_build_object('status','opted_out','queued_emails_stopped',stopped);
end $$;
revoke all on function public.record_crr_email_opt_out(uuid) from public,anon,authenticated;
grant execute on function public.record_crr_email_opt_out(uuid) to service_role;
