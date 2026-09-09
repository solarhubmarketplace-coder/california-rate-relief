-- Durable, idempotent CRR intake and manual partner outcomes.
-- Apply after 004_add_lead_page_attribution.sql and 005_add_consent_timestamp.sql.

CREATE TABLE IF NOT EXISTS public.crr_staff_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- Existing confirmed owner account; this narrows current authenticated-wide access.
INSERT INTO public.crr_staff_users(user_id, active)
VALUES ('dac3b467-55d5-4f83-b7b4-9bb0fb5f773d', TRUE)
ON CONFLICT(user_id) DO UPDATE SET active=EXCLUDED.active;

ALTER TABLE public.crr_staff_users ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.crr_staff_users FROM anon, authenticated;

CREATE OR REPLACE FUNCTION public.is_crr_staff()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.crr_staff_users s
    WHERE s.user_id=auth.uid() AND s.active=TRUE
  );
$$;
REVOKE ALL ON FUNCTION public.is_crr_staff() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_crr_staff() TO authenticated, service_role;

ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS project_type TEXT;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS qualification_data JSONB NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS is_test BOOLEAN NOT NULL DEFAULT FALSE;

DO $$ BEGIN
  ALTER TABLE public.leads ADD CONSTRAINT leads_project_type_check
    CHECK (project_type IS NULL OR project_type IN ('residential', 'commercial'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.lead_submissions (
  submission_id UUID PRIMARY KEY,
  payload_fingerprint TEXT NOT NULL,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE RESTRICT,
  segment TEXT NOT NULL CHECK (segment IN ('residential', 'commercial')),
  qualification_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  attribution JSONB NOT NULL DEFAULT '{}'::jsonb,
  consent_status TEXT NOT NULL DEFAULT 'pending' CHECK (consent_status IN ('pending', 'opted_in', 'opted_out')),
  consent_timestamp TIMESTAMPTZ,
  is_test BOOLEAN NOT NULL DEFAULT FALSE,
  is_spam BOOLEAN NOT NULL DEFAULT FALSE,
  classified_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  classified_at TIMESTAMPTZ,
  received_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(submission_id, lead_id)
);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_lead_received
  ON public.lead_submissions(lead_id, received_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_segment_received
  ON public.lead_submissions(segment, received_at DESC) WHERE is_test = FALSE;

CREATE TABLE IF NOT EXISTS public.owner_notification_outbox (
  id UUID PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
  submission_id UUID NOT NULL UNIQUE REFERENCES public.lead_submissions(submission_id) ON DELETE RESTRICT,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE RESTRICT,
  destination TEXT NOT NULL,
  provider_idempotency_key TEXT NOT NULL UNIQUE,
  payload JSONB NOT NULL,
  provider_from TEXT,
  provider_subject TEXT,
  provider_html TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'failed', 'ambiguous', 'sent')),
  attempt_count INTEGER NOT NULL DEFAULT 0 CHECK (attempt_count >= 0),
  retry_cycle_attempt_count INTEGER NOT NULL DEFAULT 0 CHECK (retry_cycle_attempt_count >= 0),
  next_attempt_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  lease_token UUID,
  claimed_at TIMESTAMPTZ,
  first_attempt_at TIMESTAMPTZ,
  provider_message_id TEXT,
  sent_at TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  FOREIGN KEY (submission_id, lead_id) REFERENCES public.lead_submissions(submission_id, lead_id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_owner_notification_work
  ON public.owner_notification_outbox(next_attempt_at, created_at)
  WHERE status IN ('pending', 'failed');

CREATE TABLE IF NOT EXISTS public.owner_notification_delivery_ledger (
  id UUID PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
  outbox_id UUID NOT NULL REFERENCES public.owner_notification_outbox(id) ON DELETE RESTRICT,
  attempt_number INTEGER NOT NULL,
  provider_idempotency_key TEXT NOT NULL,
  delivery_state TEXT NOT NULL CHECK (delivery_state IN ('sent', 'definite_failure', 'ambiguous')),
  provider_message_id TEXT,
  error_message TEXT,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(outbox_id, attempt_number)
);

CREATE TABLE IF NOT EXISTS public.owner_notification_reconciliation_audit (
  id UUID PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
  outbox_id UUID NOT NULL REFERENCES public.owner_notification_outbox(id) ON DELETE RESTRICT,
  resolution TEXT NOT NULL CHECK (resolution IN ('sent','retry','failed')),
  provider_message_id TEXT,
  recorded_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.lead_referral_outcomes (
  id UUID PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE RESTRICT,
  submission_id UUID NOT NULL REFERENCES public.lead_submissions(submission_id) ON DELETE RESTRICT,
  partner_name TEXT NOT NULL,
  forwarded_at TIMESTAMPTZ NOT NULL,
  partner_qualified BOOLEAN,
  qualification_reason TEXT,
  partner_contacted_at TIMESTAMPTZ,
  appointment_at TIMESTAMPTZ,
  sale_at TIMESTAMPTZ,
  lost_at TIMESTAMPTZ,
  partner_reference TEXT,
  recorded_by UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(submission_id, partner_name),
  FOREIGN KEY (submission_id, lead_id) REFERENCES public.lead_submissions(submission_id, lead_id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_referral_outcomes_forwarded
  ON public.lead_referral_outcomes(forwarded_at DESC);

CREATE TABLE IF NOT EXISTS public.lead_submission_classification_audit (
  id UUID PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
  submission_id UUID NOT NULL REFERENCES public.lead_submissions(submission_id) ON DELETE RESTRICT,
  previous_is_test BOOLEAN NOT NULL,
  previous_is_spam BOOLEAN NOT NULL,
  is_test BOOLEAN NOT NULL,
  is_spam BOOLEAN NOT NULL,
  recorded_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.owner_notification_outbox ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.owner_notification_delivery_ledger ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.owner_notification_reconciliation_audit ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_referral_outcomes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_submission_classification_audit ENABLE ROW LEVEL SECURITY;

-- A RESTRICTIVE gate composes with the live permissive authenticated policies:
-- permissive TRUE alone can no longer authorize a non-staff user.
DO $policy$
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'leads','settings','appointments','call_logs','communication_tasks','documents','email_logs',
    'email_sequence_steps','email_sequences','email_templates','lead_sequence_tracking','sms_logs'
  ] LOOP
    IF to_regclass('public.' || t) IS NOT NULL THEN
      EXECUTE format('DROP POLICY IF EXISTS crr_staff_all ON public.%I', t);
      EXECUTE format('CREATE POLICY crr_staff_all ON public.%I AS RESTRICTIVE FOR ALL TO authenticated USING (public.is_crr_staff()) WITH CHECK (public.is_crr_staff())', t);
      EXECUTE format('REVOKE ALL ON public.%I FROM anon', t);
    END IF;
  END LOOP;
END $policy$;

CREATE OR REPLACE FUNCTION public.ingest_crr_submission(
  p_submission_id UUID,
  p_segment TEXT,
  p_name TEXT,
  p_phone TEXT,
  p_email TEXT DEFAULT NULL,
  p_address TEXT DEFAULT NULL,
  p_qualification_data JSONB DEFAULT '{}'::jsonb,
  p_attribution JSONB DEFAULT '{}'::jsonb,
  p_consent_status TEXT DEFAULT 'pending',
  p_consent_timestamp TIMESTAMPTZ DEFAULT NULL,
  p_is_test BOOLEAN DEFAULT FALSE
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_existing public.lead_submissions%ROWTYPE;
  v_lead public.leads%ROWTYPE;
  v_bill INTEGER;
  v_fingerprint TEXT;
BEGIN
  IF p_segment NOT IN ('residential', 'commercial') THEN RAISE EXCEPTION 'invalid segment' USING ERRCODE = '22023'; END IF;
  IF p_phone IS NULL OR p_phone !~ '^\+[1-9][0-9]{7,14}$' THEN RAISE EXCEPTION 'invalid phone' USING ERRCODE = '22023'; END IF;
  IF p_consent_status NOT IN ('pending', 'opted_in', 'opted_out') THEN RAISE EXCEPTION 'invalid consent status' USING ERRCODE = '22023'; END IF;

  v_fingerprint := pg_catalog.md5(
    jsonb_build_object('segment',p_segment,'name',p_name,'phone',p_phone,'email',p_email,'address',p_address,
      'qualification_data',COALESCE(p_qualification_data,'{}'::jsonb),'attribution',COALESCE(p_attribution,'{}'::jsonb),
      'consent_status',p_consent_status,'consent_timestamp',p_consent_timestamp,'is_test',p_is_test)::TEXT);

  SELECT * INTO v_existing FROM public.lead_submissions WHERE submission_id = p_submission_id;
  IF FOUND THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RAISE EXCEPTION 'submission_id payload mismatch' USING ERRCODE = '23505';
    END IF;
    RETURN jsonb_build_object('submission_id', v_existing.submission_id, 'lead_id', v_existing.lead_id, 'segment', v_existing.segment, 'replayed', TRUE);
  END IF;

  -- Serializes concurrent first submissions for one normalized phone.
  PERFORM pg_advisory_xact_lock(hashtext(p_phone));
  SELECT * INTO v_lead FROM public.leads WHERE phone = p_phone ORDER BY created_at ASC LIMIT 1 FOR UPDATE;

  IF (p_qualification_data->>'bill_amount') ~ '^[0-9]+$' THEN
    v_bill := (p_qualification_data->>'bill_amount')::INTEGER;
  END IF;

  IF NOT FOUND THEN
    INSERT INTO public.leads (
      name, phone, email, address, source, type, status, bill_amount, utility_provider, credit_score,
      gclid, fbclid, utm_source, utm_campaign, utm_content, landing_page, landing_city_slug,
      landing_page_type, submitted_from, referrer, utm_medium, utm_term, ga_client_id,
      consent_status, consent_timestamp, project_type, qualification_data, is_test
    ) VALUES (
      p_name, p_phone, p_email, p_address, COALESCE(NULLIF(p_attribution->>'source',''), 'website'), 'hot', 'new',
      v_bill, NULLIF(p_qualification_data->>'utility_provider',''), NULLIF(p_qualification_data->>'credit_score',''),
      NULLIF(p_attribution->>'gclid',''), NULLIF(p_attribution->>'fbclid',''), NULLIF(p_attribution->>'utm_source',''),
      NULLIF(p_attribution->>'utm_campaign',''), NULLIF(p_attribution->>'utm_content',''), NULLIF(p_attribution->>'landing_page',''),
      NULLIF(p_attribution->>'landing_city_slug',''), NULLIF(p_attribution->>'landing_page_type',''),
      NULLIF(p_attribution->>'submitted_from',''), NULLIF(p_attribution->>'referrer',''), NULLIF(p_attribution->>'utm_medium',''),
      NULLIF(p_attribution->>'utm_term',''), NULLIF(p_attribution->>'ga_client_id',''), p_consent_status,
      p_consent_timestamp, p_segment, COALESCE(p_qualification_data, '{}'::jsonb), p_is_test
    ) RETURNING * INTO v_lead;
  ELSE
    -- Contact/qualification may be refreshed; original lead attribution stays immutable.
    UPDATE public.leads SET
      name = COALESCE(NULLIF(p_name,''), name), email = COALESCE(NULLIF(p_email,''), email),
      address = COALESCE(NULLIF(p_address,''), address), qualification_data = COALESCE(p_qualification_data, qualification_data),
      project_type = COALESCE(project_type, p_segment), is_test = is_test AND p_is_test,
      consent_status = CASE WHEN consent_status = 'opted_out' THEN consent_status ELSE p_consent_status END,
      consent_timestamp = CASE WHEN consent_status = 'opted_out' THEN consent_timestamp ELSE COALESCE(p_consent_timestamp, consent_timestamp) END
    WHERE id = v_lead.id RETURNING * INTO v_lead;
  END IF;

  INSERT INTO public.lead_submissions (
    submission_id, payload_fingerprint, lead_id, segment, qualification_data, attribution, consent_status, consent_timestamp, is_test
  ) VALUES (
    p_submission_id, v_fingerprint, v_lead.id, p_segment, COALESCE(p_qualification_data, '{}'::jsonb),
    COALESCE(p_attribution, '{}'::jsonb), p_consent_status, p_consent_timestamp, p_is_test
  );

  INSERT INTO public.owner_notification_outbox (
    submission_id, lead_id, destination, provider_idempotency_key, payload
  ) VALUES (
    p_submission_id, v_lead.id, 'solarhubmarketplace@gmail.com', 'crr-owner-' || p_submission_id::TEXT,
    jsonb_build_object('segment', p_segment, 'name', p_name, 'phone', p_phone, 'email', p_email,
      'address', p_address, 'qualification_data', p_qualification_data, 'attribution', p_attribution, 'is_test', p_is_test)
  );

  RETURN jsonb_build_object('submission_id', p_submission_id, 'lead_id', v_lead.id, 'segment', p_segment, 'replayed', FALSE);
EXCEPTION WHEN unique_violation THEN
  SELECT * INTO v_existing FROM public.lead_submissions WHERE submission_id = p_submission_id;
  IF FOUND THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN RAISE EXCEPTION 'submission_id payload mismatch' USING ERRCODE='23505'; END IF;
    RETURN jsonb_build_object('submission_id', v_existing.submission_id, 'lead_id', v_existing.lead_id, 'segment', v_existing.segment, 'replayed', TRUE);
  END IF;
  RAISE;
END $$;

CREATE OR REPLACE FUNCTION public.classify_lead_submission(
  p_submission_id UUID, p_is_test BOOLEAN, p_is_spam BOOLEAN, p_recorded_by UUID
) RETURNS SETOF public.lead_submissions
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_previous public.lead_submissions%ROWTYPE;
BEGIN
  IF p_is_test IS NULL AND p_is_spam IS NULL THEN RAISE EXCEPTION 'classification value required' USING ERRCODE='22023'; END IF;
  SELECT * INTO v_previous FROM public.lead_submissions WHERE submission_id=p_submission_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'submission not found' USING ERRCODE='P0002'; END IF;
  INSERT INTO public.lead_submission_classification_audit(
    submission_id,previous_is_test,previous_is_spam,is_test,is_spam,recorded_by
  ) VALUES (
    p_submission_id,v_previous.is_test,v_previous.is_spam,
    COALESCE(p_is_test,v_previous.is_test),COALESCE(p_is_spam,v_previous.is_spam),p_recorded_by
  );
  RETURN QUERY UPDATE public.lead_submissions s SET
    is_test=COALESCE(p_is_test,s.is_test), is_spam=COALESCE(p_is_spam,s.is_spam),
    classified_by=p_recorded_by, classified_at=NOW()
  WHERE s.submission_id=p_submission_id RETURNING s.*;
END $$;

CREATE OR REPLACE FUNCTION public.prepare_owner_notification(
  p_outbox_id UUID, p_lease_token UUID, p_provider_from TEXT, p_provider_subject TEXT, p_provider_html TEXT
) RETURNS SETOF public.owner_notification_outbox
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  RETURN QUERY UPDATE public.owner_notification_outbox o SET
    provider_from=COALESCE(o.provider_from,p_provider_from),
    provider_subject=COALESCE(o.provider_subject,p_provider_subject),
    provider_html=COALESCE(o.provider_html,p_provider_html), updated_at=NOW()
  WHERE o.id=p_outbox_id AND o.status='processing' AND o.lease_token=p_lease_token
    AND p_provider_from IS NOT NULL AND p_provider_subject IS NOT NULL AND p_provider_html IS NOT NULL
  RETURNING o.*;
END $$;

CREATE OR REPLACE FUNCTION public.claim_owner_notification(
  p_lease_token UUID, p_stale_minutes INTEGER DEFAULT 10, p_max_attempts INTEGER DEFAULT 5,
  p_provider_window_hours INTEGER DEFAULT 24
) RETURNS SETOF public.owner_notification_outbox
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  -- A crashed worker may have handed the message to the provider. Hold these
  -- rows as ambiguous for staff review; never blindly resend them.
  UPDATE public.owner_notification_outbox SET
    status=CASE WHEN first_attempt_at >= NOW() - make_interval(hours => p_provider_window_hours) THEN 'failed' ELSE 'ambiguous' END,
    lease_token=NULL, next_attempt_at=NOW(),
    error_message=COALESCE(error_message || '; ', '') || 'stale processing lease; provider acceptance unknown', updated_at=NOW()
  WHERE status='processing' AND claimed_at < NOW() - make_interval(mins => GREATEST(1, p_stale_minutes));

  -- A retry that slept past the provider's idempotency window cannot safely
  -- reuse the key until staff confirms the earlier attempt was not delivered.
  UPDATE public.owner_notification_outbox SET status='ambiguous', lease_token=NULL,
    error_message=COALESCE(error_message || '; ', '') || 'provider idempotency window expired before retry', updated_at=NOW()
  WHERE status IN ('pending','failed') AND first_attempt_at IS NOT NULL
    AND first_attempt_at < NOW() - make_interval(hours => p_provider_window_hours);

  RETURN QUERY
  WITH candidate AS (
    SELECT id FROM public.owner_notification_outbox
    WHERE status IN ('pending','failed') AND next_attempt_at <= NOW() AND retry_cycle_attempt_count < p_max_attempts
    ORDER BY created_at FOR UPDATE SKIP LOCKED LIMIT 1
  )
  UPDATE public.owner_notification_outbox o SET status='processing', lease_token=p_lease_token,
    claimed_at=NOW(), first_attempt_at=COALESCE(o.first_attempt_at,NOW()), attempt_count=o.attempt_count+1,
    retry_cycle_attempt_count=o.retry_cycle_attempt_count+1, updated_at=NOW()
  FROM candidate c WHERE o.id=c.id RETURNING o.*;
END $$;

CREATE OR REPLACE FUNCTION public.complete_owner_notification(
  p_outbox_id UUID, p_lease_token UUID, p_provider_message_id TEXT
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_attempt INTEGER; v_key TEXT;
BEGIN
  UPDATE public.owner_notification_outbox SET status='sent', provider_message_id=p_provider_message_id,
    sent_at=NOW(), lease_token=NULL, error_message=NULL, updated_at=NOW()
  WHERE id=p_outbox_id AND status='processing' AND lease_token=p_lease_token
  RETURNING attempt_count, provider_idempotency_key INTO v_attempt, v_key;
  IF NOT FOUND THEN RAISE EXCEPTION 'notification lease lost'; END IF;
  INSERT INTO public.owner_notification_delivery_ledger(outbox_id,attempt_number,provider_idempotency_key,delivery_state,provider_message_id)
    VALUES(p_outbox_id,v_attempt,v_key,'sent',p_provider_message_id) ON CONFLICT(outbox_id,attempt_number) DO NOTHING;
END $$;

CREATE OR REPLACE FUNCTION public.fail_owner_notification(
  p_outbox_id UUID, p_lease_token UUID, p_error_message TEXT, p_ambiguous BOOLEAN,
  p_retryable BOOLEAN, p_max_attempts INTEGER DEFAULT 5, p_provider_window_hours INTEGER DEFAULT 24
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_attempt INTEGER; v_key TEXT; v_state TEXT;
BEGIN
  SELECT CASE
    WHEN p_ambiguous AND (first_attempt_at < NOW() - make_interval(hours => p_provider_window_hours) OR retry_cycle_attempt_count >= p_max_attempts) THEN 'ambiguous'
    ELSE 'failed' END
  INTO v_state FROM public.owner_notification_outbox WHERE id=p_outbox_id;
  UPDATE public.owner_notification_outbox SET status=v_state, lease_token=NULL,
    next_attempt_at=CASE WHEN NOT p_retryable OR retry_cycle_attempt_count >= p_max_attempts THEN next_attempt_at
      ELSE NOW() + make_interval(secs => LEAST(3600, 30 * (2 ^ GREATEST(0, retry_cycle_attempt_count-1))::INTEGER)) END,
    retry_cycle_attempt_count=CASE WHEN NOT p_retryable THEN p_max_attempts ELSE retry_cycle_attempt_count END,
    error_message=LEFT(p_error_message,1000), updated_at=NOW()
  WHERE id=p_outbox_id AND status='processing' AND lease_token=p_lease_token
  RETURNING attempt_count, provider_idempotency_key INTO v_attempt, v_key;
  IF NOT FOUND THEN RAISE EXCEPTION 'notification lease lost'; END IF;
  INSERT INTO public.owner_notification_delivery_ledger(outbox_id,attempt_number,provider_idempotency_key,delivery_state,error_message)
    VALUES(p_outbox_id,v_attempt,v_key,CASE WHEN p_ambiguous THEN 'ambiguous' ELSE 'definite_failure' END,LEFT(p_error_message,1000))
    ON CONFLICT(outbox_id,attempt_number) DO NOTHING;
END $$;

CREATE OR REPLACE FUNCTION public.reconcile_owner_notification(
  p_outbox_id UUID, p_resolution TEXT, p_provider_message_id TEXT, p_recorded_by UUID
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_row public.owner_notification_outbox%ROWTYPE; v_verified_failure BOOLEAN;
BEGIN
  IF p_resolution NOT IN ('sent','retry','failed') THEN RAISE EXCEPTION 'invalid resolution'; END IF;
  SELECT * INTO v_row FROM public.owner_notification_outbox WHERE id=p_outbox_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'notification not found'; END IF;
  SELECT (
    EXISTS (SELECT 1 FROM public.owner_notification_delivery_ledger l WHERE l.outbox_id=p_outbox_id
      AND l.delivery_state='definite_failure' AND l.attempt_number=(SELECT MAX(x.attempt_number) FROM public.owner_notification_delivery_ledger x WHERE x.outbox_id=p_outbox_id))
    OR COALESCE((SELECT a.resolution='failed' FROM public.owner_notification_reconciliation_audit a
      WHERE a.outbox_id=p_outbox_id ORDER BY a.recorded_at DESC,a.id DESC LIMIT 1),FALSE)
  ) INTO v_verified_failure;
  IF p_resolution='retry' AND v_row.first_attempt_at < NOW() - INTERVAL '24 hours' AND NOT v_verified_failure THEN
    RAISE EXCEPTION 'provider idempotency window expired; verify delivery, then mark failed before retrying' USING ERRCODE='22023';
  END IF;
  INSERT INTO public.owner_notification_reconciliation_audit(outbox_id,resolution,provider_message_id,recorded_by)
  VALUES(p_outbox_id,p_resolution,p_provider_message_id,p_recorded_by);
  UPDATE public.owner_notification_outbox SET
    status=CASE p_resolution WHEN 'retry' THEN 'pending' ELSE p_resolution END,
    provider_message_id=COALESCE(p_provider_message_id,provider_message_id),
    sent_at=CASE WHEN p_resolution='sent' THEN COALESCE(sent_at,NOW()) ELSE sent_at END,
    next_attempt_at=CASE WHEN p_resolution='retry' THEN NOW() ELSE next_attempt_at END,
    retry_cycle_attempt_count=CASE WHEN p_resolution='retry' THEN 0 ELSE retry_cycle_attempt_count END,
    first_attempt_at=CASE WHEN p_resolution='retry' AND v_verified_failure THEN NULL ELSE first_attempt_at END,
    lease_token=NULL, claimed_at=NULL, error_message=CASE WHEN p_resolution='retry' THEN NULL ELSE error_message END,
    updated_at=NOW()
  WHERE id=p_outbox_id;
END $$;

CREATE OR REPLACE FUNCTION public.get_crr_scorecard(p_from TIMESTAMPTZ DEFAULT NULL, p_to TIMESTAMPTZ DEFAULT NULL)
RETURNS TABLE(week_start DATE, segment TEXT, original_landing_page TEXT, utility_provider TEXT, geography TEXT,
  unique_inquiries BIGINT, forwarded BIGINT, partner_qualified BIGINT,
  partner_rejected BIGINT, qualification_unknown BIGINT, contacted BIGINT, appointments BIGINT, sales BIGINT)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  WITH eligible AS (
    SELECT s.* FROM public.lead_submissions s
    WHERE s.is_test=FALSE AND s.is_spam=FALSE AND s.received_at >= COALESCE(p_from, date_trunc('week', NOW()) - INTERVAL '12 weeks')
      AND s.received_at < COALESCE(p_to, NOW() + INTERVAL '1 second')
  ), cohort AS (
    SELECT DISTINCT ON (e.lead_id) e.* FROM eligible e
    ORDER BY e.lead_id,e.received_at
  ), outcome AS (
    SELECT r.lead_id, BOOL_OR(r.forwarded_at IS NOT NULL) AS forwarded,
      BOOL_OR(r.partner_qualified IS TRUE) AS qualified,
      BOOL_OR(r.partner_qualified IS FALSE) AS rejected,
      BOOL_OR(r.partner_contacted_at IS NOT NULL) AS contacted,
      BOOL_OR(r.appointment_at IS NOT NULL) AS appointment,
      BOOL_OR(r.sale_at IS NOT NULL) AS sale
    FROM public.lead_referral_outcomes r
    JOIN eligible e ON e.submission_id=r.submission_id AND e.lead_id=r.lead_id
    GROUP BY r.lead_id
  )
  SELECT date_trunc('week',s.received_at AT TIME ZONE 'America/Los_Angeles')::DATE, s.segment,
    NULLIF(s.attribution->>'landing_page',''), NULLIF(s.qualification_data->>'utility_provider',''),
    COALESCE(NULLIF(s.qualification_data->>'service_zip',''),NULLIF(s.qualification_data->>'county','')),
    COUNT(DISTINCT s.lead_id), COUNT(DISTINCT s.lead_id) FILTER(WHERE o.forwarded),
    COUNT(DISTINCT s.lead_id) FILTER(WHERE o.qualified),
    COUNT(DISTINCT s.lead_id) FILTER(WHERE NOT COALESCE(o.qualified,FALSE) AND o.rejected),
    COUNT(DISTINCT s.lead_id) FILTER(WHERE o.lead_id IS NULL OR (NOT COALESCE(o.qualified,FALSE) AND NOT COALESCE(o.rejected,FALSE))),
    COUNT(DISTINCT s.lead_id) FILTER(WHERE o.contacted), COUNT(DISTINCT s.lead_id) FILTER(WHERE o.appointment),
    COUNT(DISTINCT s.lead_id) FILTER(WHERE o.sale)
  FROM cohort s LEFT JOIN outcome o ON o.lead_id=s.lead_id
  GROUP BY 1,2,3,4,5 ORDER BY 1 DESC,2,3;
$$;

REVOKE ALL ON public.lead_submissions, public.owner_notification_outbox,
  public.owner_notification_delivery_ledger, public.lead_referral_outcomes,
  public.lead_submission_classification_audit, public.owner_notification_reconciliation_audit FROM anon, authenticated;
GRANT ALL ON public.crr_staff_users, public.lead_submissions, public.owner_notification_outbox,
  public.owner_notification_delivery_ledger, public.lead_referral_outcomes,
  public.lead_submission_classification_audit, public.owner_notification_reconciliation_audit TO service_role;
REVOKE ALL ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.claim_owner_notification(UUID,INTEGER,INTEGER,INTEGER) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.prepare_owner_notification(UUID,UUID,TEXT,TEXT,TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.complete_owner_notification(UUID,UUID,TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.fail_owner_notification(UUID,UUID,TEXT,BOOLEAN,BOOLEAN,INTEGER,INTEGER) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.reconcile_owner_notification(UUID,TEXT,TEXT,UUID) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.get_crr_scorecard(TIMESTAMPTZ,TIMESTAMPTZ) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.classify_lead_submission(UUID,BOOLEAN,BOOLEAN,UUID) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) TO service_role;
GRANT EXECUTE ON FUNCTION public.claim_owner_notification(UUID,INTEGER,INTEGER,INTEGER) TO service_role;
GRANT EXECUTE ON FUNCTION public.prepare_owner_notification(UUID,UUID,TEXT,TEXT,TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.complete_owner_notification(UUID,UUID,TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.fail_owner_notification(UUID,UUID,TEXT,BOOLEAN,BOOLEAN,INTEGER,INTEGER) TO service_role;
GRANT EXECUTE ON FUNCTION public.reconcile_owner_notification(UUID,TEXT,TEXT,UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.get_crr_scorecard(TIMESTAMPTZ,TIMESTAMPTZ) TO service_role;
GRANT EXECUTE ON FUNCTION public.classify_lead_submission(UUID,BOOLEAN,BOOLEAN,UUID) TO service_role;

-- Verification (read-only after migration):
-- SELECT column_name,data_type FROM information_schema.columns WHERE table_schema='public' AND table_name IN
--   ('leads','lead_submissions','owner_notification_outbox','owner_notification_delivery_ledger','lead_referral_outcomes') ORDER BY table_name,ordinal_position;
-- SELECT routine_name FROM information_schema.routines WHERE routine_schema='public' AND routine_name IN
--   ('ingest_crr_submission','claim_owner_notification','complete_owner_notification','fail_owner_notification','get_crr_scorecard');
-- SELECT relname,relrowsecurity FROM pg_class WHERE relname IN
--   ('lead_submissions','owner_notification_outbox','owner_notification_delivery_ledger','lead_referral_outcomes');
