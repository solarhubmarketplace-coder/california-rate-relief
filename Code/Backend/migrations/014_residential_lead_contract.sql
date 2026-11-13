-- 014 — Residential lead contract in the ingest RPC + PII-free rejection counters.
--
-- STATUS: NOT APPLIED. Apply only after the Phase 2 API (lead_contract_version
-- 'crr-lead-2026-11-12') is live, with Chad's go-word. Needs 012 and 013.
--
-- APPLY ORDER (binding): deploy the new API and forms, confirm a test lead end
-- to end, THEN apply 014. If 014 lands first, every submission from the old API
-- lacks lead_contract_version and is refused; the old service maps that to 503
-- and leads are lost.
--
-- What it changes:
--   * renames the current wrapper ingest_crr_submission (013) to
--     ingest_crr_submission_v013 and adds a new ingest_crr_submission with the
--     same signature that, for NEW residential submissions only, checks the
--     contract and raises SQLSTATE 22023 'crr_contract:<code>' on failure.
--     Replays (submission_id already stored) and commercial submissions go
--     straight to v013, so idempotent retries and the commercial form are untouched;
--   * adds crr_residential_contract_error() (same rules and regexes as
--     Backend/src/lib/lead-contract.js);
--   * adds crr_intake_rejections (daily counters: reason, landing page path,
--     form kind, layer; no personal data) and record_crr_intake_rejection().
-- What it does NOT change: v008/v009/v011/v013 bodies, the fingerprint, any
-- table column, any existing row. No backfill.
-- Rollback:
--   DROP FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN);
--   ALTER FUNCTION public.ingest_crr_submission_v013(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) RENAME TO ingest_crr_submission;
--   GRANT EXECUTE ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) TO service_role;
BEGIN;

CREATE TABLE IF NOT EXISTS public.crr_intake_rejections (
  day          DATE    NOT NULL,
  reason       TEXT    NOT NULL CHECK (reason ~ '^[a-z0-9_]{1,40}$'),
  landing_page TEXT    NOT NULL CHECK (length(landing_page) <= 120),
  form_kind    TEXT    NOT NULL CHECK (form_kind ~ '^[a-z0-9_]{1,40}$'),
  layer        TEXT    NOT NULL CHECK (layer IN ('api', 'rpc')),
  count        INTEGER NOT NULL DEFAULT 0 CHECK (count >= 0),
  PRIMARY KEY (day, reason, landing_page, form_kind, layer)
);
COMMENT ON TABLE public.crr_intake_rejections IS 'Daily counts of refused residential submissions by reason and landing page. No personal data.';
ALTER TABLE public.crr_intake_rejections ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.crr_intake_rejections FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.crr_intake_rejections TO service_role;

CREATE OR REPLACE FUNCTION public.record_crr_intake_rejection(
  p_reason TEXT, p_landing_page TEXT, p_form_kind TEXT, p_layer TEXT DEFAULT 'api'
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_reason TEXT := CASE WHEN p_reason ~ '^[a-z0-9_]{1,40}$' THEN p_reason ELSE 'other' END;
  v_page   TEXT := CASE WHEN p_landing_page ~ '^/[a-z0-9/_-]{0,119}$' THEN p_landing_page ELSE 'other' END;
  v_form   TEXT := CASE WHEN p_form_kind ~ '^[a-z0-9_]{1,40}$' THEN p_form_kind ELSE 'unknown' END;
  v_layer  TEXT := CASE WHEN p_layer IN ('api', 'rpc') THEN p_layer ELSE 'api' END;
BEGIN
  INSERT INTO public.crr_intake_rejections AS r (day, reason, landing_page, form_kind, layer, count)
  VALUES ((now() AT TIME ZONE 'America/Los_Angeles')::date, v_reason, v_page, v_form, v_layer, 1)
  ON CONFLICT (day, reason, landing_page, form_kind, layer) DO UPDATE SET count = r.count + 1;
END $$;
REVOKE ALL ON FUNCTION public.record_crr_intake_rejection(TEXT, TEXT, TEXT, TEXT) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.record_crr_intake_rejection(TEXT, TEXT, TEXT, TEXT) TO service_role;

-- NULL when the payload meets the residential contract, else the error code.
-- Same rules and regexes as Backend/src/lib/lead-contract.js.
CREATE OR REPLACE FUNCTION public.crr_residential_contract_error(
  p_email TEXT, p_address TEXT, p_q JSONB, p_consent_status TEXT
) RETURNS TEXT LANGUAGE plpgsql STABLE SET search_path = public AS $$
DECLARE
  v_street TEXT := btrim(split_part(COALESCE(p_address, ''), ',', 1));
  v_band   TEXT := p_q->>'monthly_bill_band';
  v_zip    TEXT := p_q->>'service_zip';
  v_amount INTEGER;
BEGIN
  IF NULLIF(p_q->>'lead_contract_version', '') IS NULL THEN RETURN 'form_outdated'; END IF;
  IF v_band ~* '^(under|below|less)' THEN RETURN 'bill_under_250'; END IF;
  IF v_band IS NULL OR v_band NOT IN ('250_349', '350_499', '500_plus') THEN RETURN 'bill_band_required'; END IF;
  IF COALESCE(p_q->>'bill_amount', '') !~ '^[0-9]{1,7}$' THEN RETURN 'bill_band_required'; END IF;
  v_amount := (p_q->>'bill_amount')::INTEGER;
  IF v_amount < 250 THEN RETURN 'bill_under_250'; END IF;
  IF v_amount <> (CASE v_band WHEN '250_349' THEN 300 WHEN '350_499' THEN 425 ELSE 600 END) THEN RETURN 'bill_band_required'; END IF;
  IF jsonb_typeof(p_q->'homeowner') IS DISTINCT FROM 'boolean' THEN RETURN 'homeowner_required'; END IF;
  IF (p_q->>'homeowner')::BOOLEAN IS NOT TRUE THEN RETURN 'renter'; END IF;
  IF p_email IS NULL OR p_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' THEN RETURN 'email_required'; END IF;
  IF v_street = '' THEN RETURN 'street_required'; END IF;
  IF v_street ~* '(^|[^a-z])(p\s*\.?\s*o\s*\.?\s*box|post\s+office\s+box)([^a-z]|$)' THEN RETURN 'po_box'; END IF;
  IF v_street ~* '(^|[^a-z])(apt|apartment|bldg|rm|floor|suite|ste|lot|space|trailer)([^a-z]|$)' THEN RETURN 'unit_word'; END IF;
  IF v_street !~* '^[0-9]{1,6}([a-z]|-[a-z0-9]{1,6})?\s+.*[a-z]{2}' THEN RETURN 'street_format'; END IF;
  IF (v_street ~* '(^|[^a-z])unit([^a-z]|$)|#' OR p_q->'unit_flagged' = 'true'::jsonb)
     AND p_q->'unit_confirmed_detached' IS DISTINCT FROM 'true'::jsonb THEN RETURN 'unit_unconfirmed'; END IF;
  IF NULLIF(btrim(COALESCE(p_q->>'city', '')), '') IS NULL THEN RETURN 'city_invalid'; END IF;
  IF p_q->>'service_market' IS DISTINCT FROM 'CA' THEN RETURN 'state_not_ca'; END IF;
  IF v_zip IS NULL OR NOT EXISTS (SELECT 1 FROM public.ca_zip_places z WHERE z.zip = v_zip) THEN RETURN 'zip_not_ca'; END IF;
  IF p_consent_status IS DISTINCT FROM 'opted_in' THEN RETURN 'consent_required'; END IF;
  RETURN NULL;
END $$;
REVOKE ALL ON FUNCTION public.crr_residential_contract_error(TEXT, TEXT, JSONB, TEXT) FROM PUBLIC, anon, authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public' AND p.proname = 'ingest_crr_submission_v013'
  ) THEN
    EXECUTE 'ALTER FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) RENAME TO ingest_crr_submission_v013';
  END IF;
END $$;
REVOKE ALL ON FUNCTION public.ingest_crr_submission_v013(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
  FROM PUBLIC, anon, authenticated, service_role;

CREATE OR REPLACE FUNCTION public.ingest_crr_submission(
  p_submission_id UUID, p_segment TEXT, p_name TEXT, p_phone TEXT,
  p_email TEXT DEFAULT NULL, p_address TEXT DEFAULT NULL,
  p_qualification_data JSONB DEFAULT '{}'::jsonb,
  p_attribution JSONB DEFAULT '{}'::jsonb,
  p_consent_status TEXT DEFAULT 'pending', p_consent_timestamp TIMESTAMPTZ DEFAULT NULL,
  p_is_test BOOLEAN DEFAULT FALSE
) RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_error TEXT;
BEGIN
  IF p_segment = 'residential'
     AND NOT EXISTS (SELECT 1 FROM public.lead_submissions s WHERE s.submission_id = p_submission_id) THEN
    v_error := public.crr_residential_contract_error(
      p_email, p_address, COALESCE(p_qualification_data, '{}'::jsonb), p_consent_status);
    IF v_error IS NOT NULL THEN
      RAISE EXCEPTION 'crr_contract:%', v_error USING ERRCODE = '22023';
    END IF;
  END IF;
  RETURN public.ingest_crr_submission_v013(
    p_submission_id, p_segment, p_name, p_phone, p_email, p_address,
    p_qualification_data, p_attribution, p_consent_status, p_consent_timestamp, p_is_test);
END $$;
REVOKE ALL ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) TO service_role;

COMMIT;
