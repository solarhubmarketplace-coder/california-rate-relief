-- Land the submitted ZIP and city on the lead row.
-- Apply after 006_add_durable_intake_and_referrals.sql and 007_email_delivery_truth.sql.
--
-- WHY: public.leads already has `zip` and `city` columns (added out of band; see
-- their column comments), but ingest_crr_submission never wrote them, so every
-- intake left both NULL while the ZIP sat only inside qualification_data. The
-- serving utility follows the ZIP, so a NULL zip column meant no per-territory
-- rollup and no way to sanity-check the utility the visitor picked.
--
-- DEPLOY ORDER: this migration is signature-compatible on purpose. The function
-- keeps the exact same argument list as 006, so it can be applied before or
-- after the Backend deploy without breaking intake in either direction. If it
-- is applied late, submissions keep succeeding and zip/city simply stay NULL.
-- Do not add parameters here: a signature change turns every in-flight intake
-- into a PostgREST "function not found" 503 until both sides land.
--
-- WHAT IS NOT HERE: the derived utility. qualification_data carries
-- derived_utility / derived_cca / derived_county / derived_from from the
-- frontend's ZIP seed table, and it stays there. leads.utility_provider
-- continues to hold ONLY the visitor's own answer. The two are deliberately
-- kept apart so a disagreement is a reviewable signal rather than a silent
-- overwrite of the homeowner's response.

-- A 5-digit ZIP inside California's assigned range (90001-96162), else NULL.
-- Anything else stays in qualification_data as typed and never reaches the column.
-- The CASE is nested on purpose. PostgreSQL does not promise that AND
-- short-circuits, so guarding the ::INTEGER cast behind a sibling AND condition
-- would let 'abcde' raise invalid_text_representation and 500 the whole intake.
-- Only the inner branch, reached solely for a validated 5-digit string, casts.
CREATE OR REPLACE FUNCTION public.clean_ca_zip(p_value TEXT)
RETURNS TEXT LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT CASE
    WHEN btrim(COALESCE(p_value, '')) ~ '^[0-9]{5}$' THEN
      CASE
        WHEN btrim(p_value)::INTEGER BETWEEN 90001 AND 96162 THEN btrim(p_value)
        ELSE NULL
      END
    ELSE NULL
  END;
$$;
REVOKE ALL ON FUNCTION public.clean_ca_zip(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.clean_ca_zip(TEXT) TO authenticated, service_role;

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
  v_zip TEXT;
  v_city TEXT;
  -- 006 branched on the implicit FOUND flag several statements after the SELECT
  -- that set it. This version latches the result immediately so the two new
  -- assignments below cannot be blamed for a future insert/update mix-up.
  v_lead_exists BOOLEAN;
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
  v_lead_exists := FOUND;

  IF (p_qualification_data->>'bill_amount') ~ '^[0-9]+$' THEN
    v_bill := (p_qualification_data->>'bill_amount')::INTEGER;
  END IF;

  -- `service_zip` is the payload key; `zip` is tolerated for older clients.
  v_zip := public.clean_ca_zip(COALESCE(p_qualification_data->>'service_zip', p_qualification_data->>'zip'));
  v_city := NULLIF(btrim(COALESCE(p_qualification_data->>'city', '')), '');

  IF NOT v_lead_exists THEN
    INSERT INTO public.leads (
      name, phone, email, address, city, zip, source, type, status, bill_amount, utility_provider, credit_score,
      gclid, fbclid, utm_source, utm_campaign, utm_content, landing_page, landing_city_slug,
      landing_page_type, submitted_from, referrer, utm_medium, utm_term, ga_client_id,
      consent_status, consent_timestamp, project_type, qualification_data, is_test
    ) VALUES (
      p_name, p_phone, p_email, p_address, v_city, v_zip, COALESCE(NULLIF(p_attribution->>'source',''), 'website'), 'hot', 'new',
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
    -- zip/city are property facts, so a later submission may fill a blank or
    -- correct a stale value, but never blanks one that is already recorded.
    UPDATE public.leads SET
      name = COALESCE(NULLIF(p_name,''), name), email = COALESCE(NULLIF(p_email,''), email),
      address = COALESCE(NULLIF(p_address,''), address), qualification_data = COALESCE(p_qualification_data, qualification_data),
      city = COALESCE(v_city, city), zip = COALESCE(v_zip, zip),
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

-- Signature is unchanged from 006, so the existing grants still apply. Restated
-- here so applying this file alone leaves the function correctly locked down.
REVOKE ALL ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) TO service_role;

CREATE INDEX IF NOT EXISTS idx_leads_zip ON public.leads(zip) WHERE zip IS NOT NULL;

-- Verification (read-only after migration):
-- SELECT public.clean_ca_zip('93301'), public.clean_ca_zip('10001'), public.clean_ca_zip('9330'), public.clean_ca_zip(NULL);
--   expect 93301, NULL, NULL, NULL
-- SELECT COUNT(*) FROM pg_proc WHERE proname='ingest_crr_submission';  -- expect exactly 1 (no overload added)
-- SELECT id, city, zip, utility_provider, qualification_data->>'derived_utility' AS derived
--   FROM public.leads ORDER BY created_at DESC LIMIT 10;
