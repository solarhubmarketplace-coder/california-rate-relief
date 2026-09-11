-- LOCAL RELEASE CANDIDATE. Apply only after approval and migrations 006/007/008.
-- No historical classifications or delivery outcomes are rewritten.
BEGIN;
CREATE TABLE IF NOT EXISTS public.owner_receipt_evidence (
  id UUID PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
  submission_id UUID NOT NULL REFERENCES public.lead_submissions(submission_id),
  destination TEXT NOT NULL CHECK (destination = 'solarhubmarketplace@gmail.com'),
  evidence_reference TEXT NOT NULL CHECK (length(btrim(evidence_reference)) BETWEEN 3 AND 300),
  receipt_at TIMESTAMPTZ NOT NULL,
  recorded_by UUID NOT NULL REFERENCES auth.users(id),
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(destination, evidence_reference)
);
ALTER TABLE public.owner_receipt_evidence ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.owner_receipt_evidence FROM PUBLIC, anon, authenticated, service_role;
GRANT SELECT, INSERT ON public.owner_receipt_evidence TO service_role;

-- A receipt belongs to one actual owner message and cannot predate its intake.
-- Enforce this below the HTTP layer as well as rejecting future UI timestamps.
CREATE OR REPLACE FUNCTION public.validate_owner_receipt_evidence()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path=public AS $$
BEGIN
  NEW.evidence_reference := btrim(NEW.evidence_reference);
  IF NEW.receipt_at > now() OR NEW.receipt_at < (SELECT received_at FROM public.lead_submissions WHERE submission_id=NEW.submission_id) THEN
    RAISE EXCEPTION 'receipt timestamp must follow submission and cannot be in the future' USING ERRCODE='23514';
  END IF;
  RETURN NEW;
END;
$$;
DROP TRIGGER IF EXISTS owner_receipt_evidence_time ON public.owner_receipt_evidence;
CREATE TRIGGER owner_receipt_evidence_time BEFORE INSERT ON public.owner_receipt_evidence
FOR EACH ROW EXECUTE FUNCTION public.validate_owner_receipt_evidence();

CREATE OR REPLACE FUNCTION public.crr_acquisition_medium(a JSONB)
RETURNS TEXT LANGUAGE sql IMMUTABLE AS $$
  SELECT CASE
    WHEN COALESCE(NULLIF(a->>'gclid',''),NULLIF(a->>'gbraid',''),NULLIF(a->>'wbraid',''),NULLIF(a->>'msclkid','')) IS NOT NULL THEN 'paid'
    WHEN lower(COALESCE(a->>'utm_medium','')) IN ('cpc','ppc','paid','paid_social','display','cpm') THEN 'paid'
    WHEN NULLIF(a->>'fbclid','') IS NOT NULL AND lower(COALESCE(a->>'utm_medium','')) <> 'organic' THEN 'unknown'
    WHEN lower(COALESCE(a->>'utm_medium','')) = 'organic' THEN CASE WHEN lower(COALESCE(a->>'utm_source','')) IN ('google','bing','duckduckgo','yahoo') THEN 'organic' WHEN NULLIF(a->>'utm_source','') IS NULL THEN 'unknown' ELSE 'organic_other' END
    WHEN lower(COALESCE(a->>'utm_medium','')) IN ('email','referral','social','organic_social','affiliate','direct','sms','push','(none)') THEN lower(a->>'utm_medium')
    WHEN NULLIF(a->>'utm_medium','') IS NOT NULL THEN 'unknown'
    WHEN NULLIF(a->>'utm_source','') IS NOT NULL THEN 'unknown'
    WHEN a->>'acquisition_medium' = 'organic' AND a->>'acquisition_source' IN ('google','bing','duckduckgo','yahoo') THEN 'organic'
    WHEN a->>'source' = 'organic_google' THEN 'organic'
    WHEN a->>'referrer' ~ '^(www\.)?(google\.(com|ca|co\.uk|com\.au|de|fr|co\.in)|bing\.com|duckduckgo\.com)$' OR a->>'referrer' ~ '^(search\.)?yahoo\.com$' THEN 'organic'
    WHEN NULLIF(a->>'referrer','') IS NOT NULL THEN 'referral'
    ELSE 'unknown' END;
$$;

CREATE OR REPLACE FUNCTION public.get_crr_growth_scorecard(p_from TIMESTAMPTZ, p_to TIMESTAMPTZ)
RETURNS JSONB LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 WITH cohort AS (
   SELECT s.*, date_trunc('month',s.received_at AT TIME ZONE 'America/Los_Angeles')::date AS calendar_month,
     public.crr_acquisition_medium(s.attribution) AS medium,
     o.provider_message_id IS NOT NULL AS accepted,
     EXISTS(SELECT 1 FROM public.email_logs e WHERE e.resend_email_id=o.provider_message_id
       AND lower(e.email_to)='solarhubmarketplace@gmail.com' AND e.delivery_state='delivered') AS provider_delivered,
     EXISTS(SELECT 1 FROM public.owner_receipt_evidence r WHERE r.submission_id=s.submission_id
       AND r.destination='solarhubmarketplace@gmail.com' AND r.receipt_at < p_to AND r.receipt_at <= now()) AS receipt_confirmed,
     (o.status = 'failed' OR EXISTS(SELECT 1 FROM public.email_logs e WHERE e.resend_email_id=o.provider_message_id
       AND lower(e.email_to)='solarhubmarketplace@gmail.com' AND e.delivery_state IN ('bounced','invalid_address','complained'))) AS failed
   FROM public.lead_submissions s LEFT JOIN public.owner_notification_outbox o USING(submission_id)
   WHERE s.received_at >= p_from AND s.received_at < p_to
 ), organic AS (
   SELECT calendar_month, lead_id, bool_or(accepted) AS accepted, bool_or(provider_delivered) AS provider_delivered,
     bool_or(receipt_confirmed) AS receipt_confirmed, bool_or(failed) AS failed,
     (array_agg(COALESCE(attribution->>'organic_landing_page',attribution->>'landing_page','unknown') ORDER BY received_at,submission_id))[1] AS landing_page,
     count(*) AS attempts
   FROM cohort WHERE NOT is_test AND NOT is_spam AND medium='organic' GROUP BY calendar_month,lead_id
 ), months AS (
   SELECT calendar_month,count(*) AS unique_organic_stored,
     count(*) FILTER(WHERE accepted) AS owner_notification_accepted,
     count(*) FILTER(WHERE provider_delivered) AS provider_delivery_confirmed,
     count(*) FILTER(WHERE receipt_confirmed) AS submission_cohort_receipt_confirmed,
     count(*) FILTER(WHERE failed AND NOT receipt_confirmed AND NOT provider_delivered) AS failed,
     count(*) FILTER(WHERE NOT receipt_confirmed) AS unknown,
     sum(attempts-1) AS repeated_contact_submissions
   FROM organic GROUP BY calendar_month
 ), receipt_contacts AS (
   -- KPI time is actual inbox receipt, including delayed delivery of older forms.
   -- Collapse multiple receipts/submissions for one contact within that month.
   SELECT date_trunc('month',r.receipt_at AT TIME ZONE 'America/Los_Angeles')::date AS calendar_month,
     s.lead_id,
     (array_agg(COALESCE(s.attribution->>'organic_landing_page',s.attribution->>'landing_page','unknown') ORDER BY r.receipt_at,s.received_at,s.submission_id))[1] AS landing_page
   FROM public.owner_receipt_evidence r JOIN public.lead_submissions s USING(submission_id)
   WHERE r.receipt_at >= p_from AND r.receipt_at < p_to AND r.receipt_at <= now()
     AND r.receipt_at >= s.received_at AND r.destination='solarhubmarketplace@gmail.com'
     AND NOT s.is_test AND NOT s.is_spam AND public.crr_acquisition_medium(s.attribution)='organic'
   GROUP BY 1,s.lead_id
 ), receipt_months AS (
   SELECT calendar_month,count(*) AS receipt_confirmed FROM receipt_contacts GROUP BY calendar_month
 ), combined_months AS (
   SELECT COALESCE(m.calendar_month,r.calendar_month) AS calendar_month,
     COALESCE(m.unique_organic_stored,0) AS unique_organic_stored,
     COALESCE(m.owner_notification_accepted,0) AS owner_notification_accepted,
     COALESCE(m.provider_delivery_confirmed,0) AS provider_delivery_confirmed,
     COALESCE(r.receipt_confirmed,0) AS receipt_confirmed,
     COALESCE(m.submission_cohort_receipt_confirmed,0) AS submission_cohort_receipt_confirmed,
     COALESCE(m.failed,0) AS failed, COALESCE(m.unknown,0) AS unknown,
     COALESCE(m.repeated_contact_submissions,0) AS repeated_contact_submissions
   FROM months m FULL JOIN receipt_months r USING(calendar_month)
 ), stored_pages AS (
   SELECT calendar_month,landing_page,count(*) AS unique_organic_stored,
     count(*) FILTER(WHERE receipt_confirmed) AS submission_cohort_receipt_confirmed
   FROM organic GROUP BY calendar_month,landing_page
 ), receipt_pages AS (
   SELECT calendar_month,landing_page,count(*) AS receipt_confirmed FROM receipt_contacts GROUP BY calendar_month,landing_page
 ), pages AS (
   SELECT COALESCE(s.calendar_month,r.calendar_month) AS calendar_month,COALESCE(s.landing_page,r.landing_page) AS landing_page,
     COALESCE(s.unique_organic_stored,0) AS unique_organic_stored,COALESCE(r.receipt_confirmed,0) AS receipt_confirmed,
     COALESCE(s.submission_cohort_receipt_confirmed,0) AS submission_cohort_receipt_confirmed
   FROM stored_pages s FULL JOIN receipt_pages r USING(calendar_month,landing_page)
 ) SELECT jsonb_build_object(
   'from',p_from,'to_exclusive',p_to,'timezone','America/Los_Angeles',
   'stored_submissions',(SELECT count(*) FROM cohort),
   'legacy_leads_without_submission',(SELECT count(*) FROM public.leads l WHERE l.created_at >= p_from AND l.created_at < p_to AND NOT EXISTS(SELECT 1 FROM public.lead_submissions s WHERE s.lead_id=l.id)),
   'durable_capture_started_at',(SELECT min(received_at) FROM public.lead_submissions),
   'excluded_tests',(SELECT count(*) FROM cohort WHERE is_test),
   'excluded_spam',(SELECT count(*) FROM cohort WHERE NOT is_test AND is_spam),
   'unknown_origin',(SELECT count(*) FROM cohort WHERE NOT is_test AND NOT is_spam AND medium='unknown'),
   'non_organic',(SELECT count(*) FROM cohort WHERE NOT is_test AND NOT is_spam AND medium NOT IN ('organic','unknown')),
   'months',COALESCE((SELECT jsonb_agg(to_jsonb(m) ORDER BY calendar_month) FROM combined_months m),'[]'::jsonb),
   'landing_pages',COALESCE((SELECT jsonb_agg(to_jsonb(p) ORDER BY calendar_month,landing_page) FROM pages p),'[]'::jsonb),
   'definition','Unique contact per Pacific month; tests/spam excluded. Storage and provider states use submission month; receipt_confirmed uses actual inbox receipt month, including older submissions. Unknown is stored contacts without inbox evidence by report end, including provider delivery and failure states; those states overlap. No credit, homeowner, appointment, referral or sale gate. These counts are not a conversion ratio.'
 );
$$;
REVOKE ALL ON FUNCTION public.get_crr_growth_scorecard(TIMESTAMPTZ,TIMESTAMPTZ) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.get_crr_growth_scorecard(TIMESTAMPTZ,TIMESTAMPTZ) TO service_role;
COMMIT;
