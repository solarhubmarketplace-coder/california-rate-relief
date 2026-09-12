-- Forward-only market capture for CA, NJ, DE, MD, VA and DC.
-- This is intentionally a local release candidate. It does not reclassify a
-- historical lead and it preserves the existing 006/008 durable intake logic.
BEGIN;

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS service_market TEXT,
  ADD COLUMN IF NOT EXISTS territory_resolution TEXT;
ALTER TABLE public.lead_submissions
  ADD COLUMN IF NOT EXISTS service_market TEXT,
  ADD COLUMN IF NOT EXISTS territory_resolution TEXT;

ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_service_market_check;
ALTER TABLE public.leads ADD CONSTRAINT leads_service_market_check
  CHECK (service_market IS NULL OR service_market IN ('CA','NJ','DE','MD','VA','DC'));
ALTER TABLE public.lead_submissions DROP CONSTRAINT IF EXISTS lead_submissions_service_market_check;
ALTER TABLE public.lead_submissions ADD CONSTRAINT lead_submissions_service_market_check
  CHECK (service_market IS NULL OR service_market IN ('CA','NJ','DE','MD','VA','DC'));

CREATE OR REPLACE FUNCTION public.clean_supported_service_zip(p_value TEXT)
RETURNS TEXT LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT CASE WHEN btrim(COALESCE(p_value, '')) ~ '^[0-9]{5}$' THEN btrim(p_value) ELSE NULL END;
$$;
REVOKE ALL ON FUNCTION public.clean_supported_service_zip(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.clean_supported_service_zip(TEXT) TO service_role;

CREATE OR REPLACE FUNCTION public.clean_service_market(p_value TEXT)
RETURNS TEXT LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT CASE upper(btrim(COALESCE(p_value, '')))
    WHEN 'CA' THEN 'CA' WHEN 'NJ' THEN 'NJ' WHEN 'DE' THEN 'DE'
    WHEN 'MD' THEN 'MD' WHEN 'VA' THEN 'VA' WHEN 'DC' THEN 'DC'
    ELSE NULL END;
$$;
REVOKE ALL ON FUNCTION public.clean_service_market(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.clean_service_market(TEXT) TO service_role;

-- Keep the prior atomic/idempotent implementation intact and put the market
-- capture around it. The RPC signature remains unchanged through a rolling
-- deploy. The renamed implementation is not callable by application roles.
ALTER FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
  RENAME TO ingest_crr_submission_v008;
REVOKE ALL ON FUNCTION public.ingest_crr_submission_v008(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
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
  v_result JSONB;
  v_lead_id UUID;
  v_market TEXT;
  v_zip TEXT;
  v_resolution TEXT;
BEGIN
  v_result := public.ingest_crr_submission_v008(
    p_submission_id, p_segment, p_name, p_phone, p_email, p_address,
    p_qualification_data, p_attribution, p_consent_status, p_consent_timestamp, p_is_test);
  v_lead_id := (v_result->>'lead_id')::UUID;
  v_market := public.clean_service_market(p_qualification_data->>'service_market');
  -- Legacy California clients never sent service_market. Retain their prior
  -- behavior only where the established California cleaner validates the ZIP.
  IF v_market IS NULL AND public.clean_ca_zip(COALESCE(p_qualification_data->>'service_zip', p_qualification_data->>'zip')) IS NOT NULL THEN
    v_market := 'CA';
  END IF;
  v_zip := CASE WHEN v_market IS NULL THEN NULL
    ELSE public.clean_supported_service_zip(COALESCE(p_qualification_data->>'service_zip', p_qualification_data->>'zip')) END;
  v_resolution := CASE
    WHEN v_market IS NULL THEN NULL
    WHEN v_zip IS NULL THEN 'visitor_selected_zip_unverified'
    ELSE 'visitor_selected_zip_validated' END;

  UPDATE public.leads SET
    service_market = COALESCE(v_market, service_market),
    territory_resolution = COALESCE(v_resolution, territory_resolution),
    zip = COALESCE(v_zip, zip)
  WHERE id = v_lead_id;
  UPDATE public.lead_submissions SET
    service_market = v_market, territory_resolution = v_resolution
  WHERE submission_id = p_submission_id;
  RETURN v_result;
END;
$$;
REVOKE ALL ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) TO service_role;
CREATE INDEX IF NOT EXISTS idx_leads_service_market ON public.leads(service_market) WHERE service_market IS NOT NULL;
COMMIT;
