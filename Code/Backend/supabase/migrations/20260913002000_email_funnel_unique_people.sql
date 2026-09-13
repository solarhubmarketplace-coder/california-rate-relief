-- Keep submitted-form volume and unique people separate. A person who retries
-- the form can increase forms, but never the unique_people result.

drop function if exists public.get_crr_email_funnel_scorecard(timestamptz,timestamptz,boolean);

create function public.get_crr_email_funnel_scorecard(
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
  unique_people bigint,
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
    count(distinct a.email_identity_id) assignments,
    count(distinct a.email_identity_id) filter(where a.is_holdout) holdouts
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
  select s.submission_id,s.lead_id,
    nullif(s.attribution->>'utm_campaign','') campaign_key,
    coalesce(nullif(s.attribution->>'utm_content',''),'') variant_key,
    nullif(s.attribution->>'email_visit_id','') email_visit_id
  from public.lead_submissions s
  where lower(coalesce(s.attribution->>'acquisition_medium',''))='email'
    and s.received_at >= p_from and s.received_at < p_to
    and not s.is_spam and (p_include_tests or not s.is_test)
),
form_rows as (
  select f.campaign_key,f.variant_key,
    count(distinct f.submission_id) forms,
    count(distinct f.lead_id) unique_people,
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
  coalesce(v.visits,0),coalesce(f.forms,0),coalesce(f.unique_people,0),
  coalesce(f.forms_with_visit,0),coalesce(f.owner_receipts,0),coalesce(r.replies,0),
  coalesce(f.staff_tasks,0),coalesce(f.bookings,0),coalesce(f.forwards,0),coalesce(f.sales,0)
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
