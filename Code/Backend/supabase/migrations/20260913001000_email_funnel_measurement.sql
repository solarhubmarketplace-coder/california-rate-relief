-- Privacy-safe, first-party email funnel measurement. Campaign and variant
-- keys are bounded non-personal labels; people/contact data never enters URLs
-- or the aggregate scorecard.

alter table public.email_logs add column if not exists campaign_key text;
alter table public.email_logs add column if not exists variant_key text;
alter table public.email_logs add column if not exists is_holdout boolean not null default false;
alter table public.email_logs add column if not exists is_test boolean not null default false;

create index if not exists idx_email_logs_campaign_time
  on public.email_logs(campaign_key, variant_key, sent_at);

create table if not exists public.email_campaign_assignments (
  id uuid primary key default gen_random_uuid(),
  email_identity_id uuid not null references public.email_identities(id) on delete cascade,
  permission_event_id uuid references public.email_permission_events(id) on delete restrict,
  campaign_key text not null check (campaign_key ~ '^[A-Za-z0-9_-]{1,80}$'),
  variant_key text check (variant_key is null or variant_key ~ '^[A-Za-z0-9_-]{1,80}$'),
  is_holdout boolean not null default false,
  is_test boolean not null default false,
  status text not null default 'assigned' check (status in ('assigned','active','completed','stopped')),
  assigned_at timestamptz not null default now(),
  stopped_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(email_identity_id, campaign_key)
);

create table if not exists public.email_funnel_visits (
  visit_id uuid primary key,
  landing_path text not null check (landing_path in ('/email/bill-review','/email/quote-review')),
  campaign_key text not null check (campaign_key ~ '^[A-Za-z0-9_-]{1,80}$'),
  variant_key text check (variant_key is null or variant_key ~ '^[A-Za-z0-9_-]{1,80}$'),
  is_test boolean not null default false,
  client_time timestamptz,
  received_at timestamptz not null default now()
);

create index if not exists idx_email_funnel_visits_campaign_time
  on public.email_funnel_visits(campaign_key, variant_key, received_at);

alter table public.email_campaign_assignments enable row level security;
alter table public.email_funnel_visits enable row level security;
revoke all on public.email_campaign_assignments, public.email_funnel_visits from public, anon, authenticated;
grant all on public.email_campaign_assignments, public.email_funnel_visits to service_role;

create or replace function public.record_crr_email_visit(
  p_visit_id uuid,
  p_landing_path text,
  p_campaign_key text,
  p_variant_key text default null,
  p_is_test boolean default false,
  p_client_time timestamptz default null
) returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare v_rows integer;
begin
  if p_landing_path not in ('/email/bill-review','/email/quote-review')
     or p_campaign_key !~ '^[A-Za-z0-9_-]{1,80}$'
     or (p_variant_key is not null and p_variant_key !~ '^[A-Za-z0-9_-]{1,80}$') then
    raise exception 'invalid email visit data' using errcode='22023';
  end if;
  insert into public.email_funnel_visits(visit_id,landing_path,campaign_key,variant_key,is_test,client_time)
  values(p_visit_id,p_landing_path,p_campaign_key,p_variant_key,p_is_test,p_client_time)
  on conflict (visit_id) do nothing;
  get diagnostics v_rows = row_count;
  return v_rows = 1;
end;
$$;

revoke all on function public.record_crr_email_visit(uuid,text,text,text,boolean,timestamptz) from public, anon, authenticated;
grant execute on function public.record_crr_email_visit(uuid,text,text,text,boolean,timestamptz) to service_role;

create or replace function public.get_crr_email_funnel_scorecard(
  p_from timestamptz,
  p_to timestamptz,
  p_include_tests boolean default false
) returns table (
  campaign_key text,
  variant_key text,
  assignments bigint,
  holdouts bigint,
  sends bigint,
  delivered bigint,
  visits bigint,
  forms bigint,
  forms_with_visit bigint,
  owner_receipts bigint,
  replies bigint,
  staff_tasks bigint,
  bookings bigint,
  forwards bigint,
  sales bigint
)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
with
assignment_rows as (
  select a.campaign_key, coalesce(a.variant_key,'') variant_key,
    count(*) assignments, count(*) filter(where a.is_holdout) holdouts
  from public.email_campaign_assignments a
  where a.assigned_at >= p_from and a.assigned_at < p_to and (p_include_tests or not a.is_test)
  group by 1,2
),
send_rows as (
  select l.campaign_key, coalesce(l.variant_key,'') variant_key,
    count(*) filter(where l.status='sent' and not l.is_holdout) sends,
    count(*) filter(where l.delivery_state='delivered' and not l.is_holdout) delivered
  from public.email_logs l
  where l.campaign_key is not null
    and coalesce(l.sent_at,l.created_at) >= p_from and coalesce(l.sent_at,l.created_at) < p_to
    and (p_include_tests or not l.is_test)
  group by 1,2
),
visit_rows as (
  select v.campaign_key, coalesce(v.variant_key,'') variant_key, count(distinct v.visit_id) visits
  from public.email_funnel_visits v
  where v.received_at >= p_from and v.received_at < p_to and (p_include_tests or not v.is_test)
  group by 1,2
),
form_base as (
  select s.submission_id,s.lead_id,s.received_at,
    nullif(s.attribution->>'utm_campaign','') campaign_key,
    coalesce(nullif(s.attribution->>'utm_content',''),'') variant_key,
    nullif(s.attribution->>'email_visit_id','') email_visit_id
  from public.lead_submissions s
  where lower(coalesce(s.attribution->>'acquisition_medium',''))='email'
    and s.received_at >= p_from and s.received_at < p_to
    and not s.is_spam and (p_include_tests or not s.is_test)
),
form_rows as (
  select f.campaign_key,f.variant_key,count(distinct f.submission_id) forms,
    count(distinct f.submission_id) filter(where v.visit_id is not null) forms_with_visit,
    count(distinct f.submission_id) filter(where r.submission_id is not null) owner_receipts,
    count(distinct t.submission_id) staff_tasks,
    count(distinct f.submission_id) filter(where ap.lead_id is not null) bookings,
    count(distinct f.submission_id) filter(where o.forwarded_at is not null) forwards,
    count(distinct f.submission_id) filter(where o.sale_at is not null) sales
  from form_base f
  left join public.email_funnel_visits v on v.visit_id::text=f.email_visit_id
  left join public.owner_receipt_evidence r on r.submission_id=f.submission_id
  left join public.email_offer_staff_tasks t on t.submission_id=f.submission_id
  left join lateral (select a.lead_id from public.appointments a where a.lead_id=f.lead_id and a.status='scheduled' limit 1) ap on true
  left join public.lead_referral_outcomes o on o.submission_id=f.submission_id and o.lead_id=f.lead_id
  where f.campaign_key is not null
  group by 1,2
),
reply_rows as (
  select l.campaign_key,coalesce(l.variant_key,'') variant_key,count(distinct r.id) replies
  from public.email_reply_events r
  join public.email_logs l on l.resend_email_id=r.provider_email_id
  where r.received_at >= p_from and r.received_at < p_to and l.campaign_key is not null
    and (p_include_tests or not l.is_test)
  group by 1,2
),
keys as (
  select campaign_key,variant_key from assignment_rows union
  select campaign_key,variant_key from send_rows union
  select campaign_key,variant_key from visit_rows union
  select campaign_key,variant_key from form_rows union
  select campaign_key,variant_key from reply_rows
)
select k.campaign_key,nullif(k.variant_key,''),
  coalesce(a.assignments,0),coalesce(a.holdouts,0),coalesce(s.sends,0),coalesce(s.delivered,0),
  coalesce(v.visits,0),coalesce(f.forms,0),coalesce(f.forms_with_visit,0),coalesce(f.owner_receipts,0),
  coalesce(r.replies,0),coalesce(f.staff_tasks,0),coalesce(f.bookings,0),coalesce(f.forwards,0),coalesce(f.sales,0)
from keys k
left join assignment_rows a using(campaign_key,variant_key)
left join send_rows s using(campaign_key,variant_key)
left join visit_rows v using(campaign_key,variant_key)
left join form_rows f using(campaign_key,variant_key)
left join reply_rows r using(campaign_key,variant_key)
order by k.campaign_key,k.variant_key;
$$;

revoke all on function public.get_crr_email_funnel_scorecard(timestamptz,timestamptz,boolean) from public, anon, authenticated;
grant execute on function public.get_crr_email_funnel_scorecard(timestamptz,timestamptz,boolean) to service_role;
