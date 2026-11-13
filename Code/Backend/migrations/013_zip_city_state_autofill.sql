-- 013 — Fill city and state from the ZIP on every lead.
--
-- Why: on 2026-10-10 a residential lead from /blog/low-income-solar-california
-- (the SolarInquiry form) arrived with a street address and ZIP 95363 but no
-- city and no state. Root cause:
--   * SolarInquiry and the email-offer form ask for street + ZIP only and never
--     send a city; only the home wizard (Google Places) and the commercial form
--     collect one;
--   * public.leads had no state column at all — the state lived only in
--     qualification_data.service_market;
--   * nothing on the server derived a city from the ZIP.
--
-- STATUS: APPLIED to production (Supabase "Sun Speed") on 2026-10-10 at Chad's
-- request ("make it go live"); verified with a rolled-back probe submission.
--
-- What it does (needs 012_ca_zip_places.sql first):
--   * adds public.leads.state (two-letter code);
--   * wraps the current RPC as ingest_crr_submission_v011 (same pattern as
--     010/011) and adds a step after it, for new submissions only (a replay
--     returns untouched):
--       - leads.city  = the city the visitor typed, else the ZIP's USPS city;
--       - leads.state = the market the visitor picked, else the ZIP's state;
--       - derived_city / derived_state (and derived_county when the form sent
--         none) are added to qualification_data on the lead, the submission and
--         the still-unsent owner notification, beside the visitor's answers;
--       - an address in the exact "street, ZIP" shape those two forms send is
--         completed to "street, City, CA ZIP" on the lead and the notification.
--         Any other shape is left exactly as typed.
--   * backfills city, state and that address shape on real website leads.
--
-- What it does NOT do:
--   * it does not touch v008, v009 or the payload fingerprint (the step runs
--     after the fingerprint is stored), so an idempotent retry still matches;
--   * it never overwrites a city the visitor typed;
--   * it does not change the RPC signature the backend calls.
BEGIN;

ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS state TEXT;
ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_state_check;
ALTER TABLE public.leads ADD CONSTRAINT leads_state_check CHECK (state IS NULL OR state ~ '^[A-Z]{2}$');
COMMENT ON COLUMN public.leads.state IS 'Two-letter state of the project: the market the visitor picked, else the state of the ZIP (ca_zip_places).';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public' AND p.proname = 'ingest_crr_submission_v011'
  ) THEN
    EXECUTE 'ALTER FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) RENAME TO ingest_crr_submission_v011';
  END IF;
END $$;
REVOKE ALL ON FUNCTION public.ingest_crr_submission_v011(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
  FROM PUBLIC, anon, authenticated, service_role;

-- "street, ZIP" -> "street, City, ST ZIP". Only that exact two-part shape (what
-- SolarInquiry and OfferRequest send) is completed; anything else is returned
-- unchanged, so a typed full address is never rewritten.
CREATE OR REPLACE FUNCTION public.complete_street_zip_address(p_address TEXT, p_zip TEXT, p_city TEXT, p_state TEXT)
RETURNS TEXT LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT CASE
    WHEN p_address IS NULL OR p_zip IS NULL OR NULLIF(btrim(p_city), '') IS NULL OR NULLIF(btrim(p_state), '') IS NULL
      THEN p_address
    WHEN btrim(p_address) ~ ('^[^,]+,\s*' || p_zip || '$')
      THEN btrim(split_part(btrim(p_address), ',', 1)) || ', ' || btrim(p_city) || ', ' || btrim(p_state) || ' ' || p_zip
    ELSE p_address
  END;
$$;
REVOKE ALL ON FUNCTION public.complete_street_zip_address(TEXT,TEXT,TEXT,TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.complete_street_zip_address(TEXT,TEXT,TEXT,TEXT) TO service_role;

CREATE OR REPLACE FUNCTION public.ingest_crr_submission(
  p_submission_id UUID, p_segment TEXT, p_name TEXT, p_phone TEXT,
  p_email TEXT DEFAULT NULL, p_address TEXT DEFAULT NULL,
  p_qualification_data JSONB DEFAULT '{}'::jsonb,
  p_attribution JSONB DEFAULT '{}'::jsonb,
  p_consent_status TEXT DEFAULT 'pending', p_consent_timestamp TIMESTAMPTZ DEFAULT NULL,
  p_is_test BOOLEAN DEFAULT FALSE
) RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_result JSONB;
  v_lead_id UUID;
  v_zip TEXT;
  v_place public.ca_zip_places%ROWTYPE;
  v_state TEXT;
  v_city TEXT;
  v_address TEXT;
  v_derived JSONB := '{}'::jsonb;
BEGIN
  v_result := public.ingest_crr_submission_v011(
    p_submission_id, p_segment, p_name, p_phone, p_email, p_address,
    p_qualification_data, p_attribution, p_consent_status, p_consent_timestamp, p_is_test);
  IF COALESCE((v_result->>'replayed')::BOOLEAN, FALSE) THEN
    RETURN v_result;
  END IF;
  v_lead_id := (v_result->>'lead_id')::UUID;

  v_zip := public.clean_ca_zip(COALESCE(p_qualification_data->>'service_zip', p_qualification_data->>'zip'));
  IF v_zip IS NOT NULL THEN
    SELECT * INTO v_place FROM public.ca_zip_places WHERE zip = v_zip;
  END IF;

  v_state := COALESCE(public.clean_service_market(p_qualification_data->>'service_market'), v_place.state);
  v_city := COALESCE(NULLIF(btrim(COALESCE(p_qualification_data->>'city', '')), ''), v_place.city);
  v_address := public.complete_street_zip_address(p_address, v_zip, v_city, v_state);

  IF v_place.zip IS NOT NULL THEN
    v_derived := jsonb_build_object('derived_city', v_place.city, 'derived_state', v_place.state);
    IF NULLIF(btrim(COALESCE(p_qualification_data->>'derived_county', '')), '') IS NULL AND v_place.county IS NOT NULL THEN
      v_derived := v_derived || jsonb_build_object('derived_county', v_place.county);
    END IF;
  END IF;

  UPDATE public.leads SET
    city = COALESCE(city, v_city),
    state = COALESCE(v_state, state),
    address = CASE WHEN address IS NOT DISTINCT FROM p_address THEN v_address ELSE address END,
    qualification_data = COALESCE(qualification_data, '{}'::jsonb) || v_derived
  WHERE id = v_lead_id;

  IF v_derived <> '{}'::jsonb THEN
    UPDATE public.lead_submissions
      SET qualification_data = COALESCE(qualification_data, '{}'::jsonb) || v_derived
      WHERE submission_id = p_submission_id;
  END IF;

  -- The notification row was inserted in this same transaction and is not yet
  -- rendered (provider_html is frozen only when the worker prepares it).
  UPDATE public.owner_notification_outbox SET
    payload = jsonb_set(
      CASE WHEN v_address IS NULL THEN payload ELSE jsonb_set(payload, '{address}', to_jsonb(v_address)) END,
      '{qualification_data}', COALESCE(payload->'qualification_data', '{}'::jsonb) || v_derived)
  WHERE submission_id = p_submission_id AND provider_html IS NULL;

  RETURN v_result;
END;
$$;
REVOKE ALL ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) TO service_role;

-- Backfill real website leads only (a non-test, non-spam submission exists).
WITH web AS (
  SELECT DISTINCT l.id
  FROM public.leads l
  JOIN public.lead_submissions s ON s.lead_id = l.id
  WHERE COALESCE(s.is_test, FALSE) = FALSE AND COALESCE(s.is_spam, FALSE) = FALSE
)
UPDATE public.leads l SET
  city = COALESCE(l.city, z.city),
  state = COALESCE(l.state, z.state),
  address = public.complete_street_zip_address(l.address, l.zip, COALESCE(l.city, z.city), COALESCE(l.state, z.state))
FROM web, public.ca_zip_places z
WHERE l.id = web.id AND z.zip = l.zip AND (l.city IS NULL OR l.state IS NULL);

COMMIT;
