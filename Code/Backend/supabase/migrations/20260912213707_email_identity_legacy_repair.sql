-- Server-only email identity and source-preserving legacy repair.
-- No sender, consent grant, enrollment, or campaign activation is created here.
create table public.email_identities (
 id uuid primary key default gen_random_uuid(),
 normalized_email text not null unique check (normalized_email=lower(btrim(normalized_email))),
 created_at timestamptz not null default now()
);
create table public.lead_email_identities (
 lead_id uuid primary key references public.leads(id) on delete cascade,
 email_identity_id uuid not null references public.email_identities(id),
 linked_at timestamptz not null default now()
);
create index lead_email_identities_identity_idx on public.lead_email_identities(email_identity_id);
create table public.legacy_contact_repair_stage (
 source_sha256 text not null,
 source_row integer not null check(source_row>0),
 normalized_phone text not null check(normalized_phone ~ '^[0-9]{10}$'),
 raw_bill text not null,
 bill_min integer not null check(bill_min>=0),
 bill_max integer check(bill_max>=bill_min),
 raw_utility text not null,
 raw_credit text not null,
 source_state text not null,
 primary key(source_sha256,source_row),
 unique(source_sha256,normalized_phone)
);
create table public.legacy_contact_repair_audit (
 lead_id uuid not null,
 source_sha256 text not null,
 source_row integer not null,
 before_values jsonb not null,
 after_values jsonb not null,
 repaired_at timestamptz not null default now(),
 primary key(lead_id,source_sha256)
);
create table public.email_permission_events (
 id uuid primary key default gen_random_uuid(),
 email_identity_id uuid not null references public.email_identities(id),
 purpose text not null,
 decision text not null check(decision in ('granted','revoked','pending')),
 evidence_reference text not null,
 wording_version text,
 occurred_at timestamptz not null,
 recorded_at timestamptz not null default now(),
 unique(email_identity_id,purpose,evidence_reference)
);
create index email_permission_events_identity_idx on public.email_permission_events(email_identity_id,purpose,occurred_at desc);
create table public.email_suppressions (
 email_identity_id uuid primary key references public.email_identities(id),
 reason text not null,
 source_reference text not null,
 effective_at timestamptz not null default now()
);

alter table public.email_identities enable row level security;
alter table public.lead_email_identities enable row level security;
alter table public.legacy_contact_repair_stage enable row level security;
alter table public.legacy_contact_repair_audit enable row level security;
alter table public.email_permission_events enable row level security;
alter table public.email_suppressions enable row level security;
revoke all on public.email_identities, public.lead_email_identities,
 public.legacy_contact_repair_stage,public.legacy_contact_repair_audit,
 public.email_permission_events,public.email_suppressions from public,anon,authenticated,service_role;
grant select,insert,update on public.email_identities to service_role;
grant select,insert,update,delete on public.lead_email_identities to service_role;
grant select,insert,update on public.legacy_contact_repair_stage to service_role;
grant select,insert on public.legacy_contact_repair_audit,public.email_permission_events to service_role;
grant select,insert,update on public.email_suppressions to service_role;

create function public.refresh_crr_email_identities() returns jsonb
language plpgsql security invoker set search_path='' as $$
declare n integer;
begin
 insert into public.email_identities(normalized_email)
 select distinct lower(btrim(email)) from public.leads
 where btrim(email) ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
 on conflict(normalized_email) do nothing;
 delete from public.lead_email_identities x using public.leads l
 where x.lead_id=l.id and (l.email is null or btrim(l.email) !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$');
 insert into public.lead_email_identities(lead_id,email_identity_id)
 select l.id,e.id from public.leads l join public.email_identities e on e.normalized_email=lower(btrim(l.email))
 on conflict(lead_id) do update set email_identity_id=excluded.email_identity_id,linked_at=now()
 where lead_email_identities.email_identity_id<>excluded.email_identity_id;
 -- Any known opt-out or permanent failure wins across shared inbox records.
 insert into public.email_suppressions(email_identity_id,reason,source_reference)
 select distinct on(x.email_identity_id) x.email_identity_id,
 case when l.consent_status='opted_out' then 'legacy_opt_out' else 'legacy_delivery_failure' end,
 'lead:'||l.id::text from public.leads l join public.lead_email_identities x on x.lead_id=l.id
 where l.consent_status='opted_out' or l.email_status in ('bounced','complained','invalid_address','suppressed')
 order by x.email_identity_id,(l.consent_status='opted_out') desc,l.id
 on conflict(email_identity_id) do nothing;
 select count(*) into n from public.lead_email_identities;
 return jsonb_build_object('linked_records',n,'identities',(select count(*) from public.email_identities));
end $$;
revoke all on function public.refresh_crr_email_identities() from public,anon,authenticated;
grant execute on function public.refresh_crr_email_identities() to service_role;

create function public.apply_crr_legacy_repair(p_sha256 text,p_expected_count integer default 50000)
returns jsonb language plpgsql security invoker set search_path='' as $$
declare n integer; repaired integer;
begin
 perform pg_advisory_xact_lock(hashtext('crr_legacy_repair'));
 if p_sha256<>'7999a71ddc8c28f7e5345c0a9dbd2f562bd01fda46bb8eac9bdd63286eaa6f02' or p_expected_count<1 then
   raise exception 'Unexpected source or count'; end if;
 select count(*) into n from public.legacy_contact_repair_stage where source_sha256=p_sha256;
 if n<>p_expected_count then raise exception 'Staging count mismatch'; end if;
 if exists(select 1 from public.legacy_contact_repair_stage s where s.source_sha256=p_sha256 and
  ((s.bill_max is null and regexp_replace(s.raw_bill,'[$[:space:]]','','g')<>s.bill_min::text||'+')
   or (s.bill_max is not null and regexp_replace(s.raw_bill,'[$[:space:]]','','g')<>s.bill_min::text||'-'||s.bill_max::text)))
 then raise exception 'Invalid bill bounds'; end if;
 select count(*) into n from public.leads l join public.legacy_contact_repair_stage s
 on right(regexp_replace(l.phone,'[^0-9]','','g'),10)=s.normalized_phone
 where l.source='ecosun_solar_2024' and s.source_sha256=p_sha256;
 if n<>p_expected_count or (select count(*) from public.leads where source='ecosun_solar_2024')<>p_expected_count
 then raise exception 'Source-to-CRM count mismatch'; end if;
 if (select count(distinct s.normalized_phone) from public.leads l join public.legacy_contact_repair_stage s
 on right(regexp_replace(l.phone,'[^0-9]','','g'),10)=s.normalized_phone
 where l.source='ecosun_solar_2024' and s.source_sha256=p_sha256)<>p_expected_count
 then raise exception 'Source-to-CRM identity mismatch'; end if;

 -- Lock the matched source rows and preserve prior values before changes.
 perform 1 from public.leads where source='ecosun_solar_2024' for update;
 insert into public.legacy_contact_repair_audit(lead_id,source_sha256,source_row,before_values,after_values)
 select l.id,p_sha256,s.source_row,
 jsonb_build_object('bill_amount',l.bill_amount,'bill_amount_min',l.bill_amount_min,'bill_amount_max',l.bill_amount_max,
 'bill_amount_exact',l.bill_amount_exact,'bill_amount_is_exact',l.bill_amount_is_exact,'credit_score',l.credit_score,
 'qualification_data',l.qualification_data),
 jsonb_build_object('bill_amount',null,'bill_amount_min',s.bill_min,'bill_amount_max',s.bill_max,
 'bill_amount_exact',null,'bill_amount_is_exact',false,'credit_score',null)
 from public.leads l join public.legacy_contact_repair_stage s
 on right(regexp_replace(l.phone,'[^0-9]','','g'),10)=s.normalized_phone
 where l.source='ecosun_solar_2024' and s.source_sha256=p_sha256
 on conflict(lead_id,source_sha256) do nothing;

 update public.leads l set bill_amount=null,bill_amount_min=s.bill_min,bill_amount_max=s.bill_max,
 bill_amount_exact=null,bill_amount_is_exact=false,credit_score=null,
 qualification_data=jsonb_set(l.qualification_data,'{ecosun_import}',
 coalesce(l.qualification_data->'ecosun_import','{}'::jsonb)||jsonb_build_object(
 'bill_amount',s.raw_bill,'source_file_sha256',p_sha256,'source_row',s.source_row,
 'utility_provider_full',s.raw_utility,'credit',s.raw_credit,'state',s.source_state,
 'field_verification','unverified_historical_source','utility_requires_confirmation',true,
 'credit_is_verified',false,'bill_bounds_are_historical',true,
 'repair_version','20260912_ranges_v1'),true)
 from public.legacy_contact_repair_stage s
 where l.source='ecosun_solar_2024' and s.source_sha256=p_sha256
 and right(regexp_replace(l.phone,'[^0-9]','','g'),10)=s.normalized_phone
 and l.qualification_data->'ecosun_import'->>'repair_version' is distinct from '20260912_ranges_v1';
 get diagnostics repaired=row_count;
 perform public.refresh_crr_email_identities();
 return jsonb_build_object('matched_records',n,'updated_records',repaired,
 'audit_rows',(select count(*) from public.legacy_contact_repair_audit where source_sha256=p_sha256));
end $$;
revoke all on function public.apply_crr_legacy_repair(text,integer) from public,anon,authenticated;
grant execute on function public.apply_crr_legacy_repair(text,integer) to service_role;
