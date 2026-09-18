-- 011 — Conversion and qualification capture (Phase 5, Lever 2).
--
-- STATUS: NOT APPLIED. Written 17 September 2026 as a local release candidate.
-- Nobody is to run this against the live project until Chad approves the copy
-- release it belongs to and the branch is deployed.
--
-- What it does:
--   * promotes three answers out of qualification_data into nullable columns on
--     both public.leads and public.lead_submissions:
--       homeowner    — "Do you own this home?" A renter is a 100% dead lead and
--                      is, today, indistinguishable from a live one.
--       roof_age     — "Roughly how old is your roof?", as a band.
--       source_tool  — which on-page calculator the submission came from, so a
--                      bill-tool submission stays separable from an article one
--                      without a second ingest path.
--   * adds two closed-vocabulary cleaners, matching the shape of 010's
--     clean_service_market / clean_supported_service_zip.
--   * wraps the current RPC in a new versioned implementation, exactly as 010
--     did: the current public.ingest_crr_submission (the 010 market wrapper) is
--     renamed to ingest_crr_submission_v009 and a new
--     public.ingest_crr_submission with the SAME signature calls it and then
--     writes the three columns.
--
-- What it deliberately does NOT do:
--   * it does not touch ingest_crr_submission_v008 — that implementation stays
--     byte-for-byte as deployed, and v009 still calls it;
--   * it does not change the RPC signature the backend calls, so a rolling
--     deploy is safe in either order;
--   * it does not backfill, reclassify or update a single historical row, and it
--     does not touch is_test, is_spam, attribution or leads.source;
--   * it adds no NOT NULL constraint and no default, so an older client that
--     sends none of these three keys behaves exactly as it does today.
BEGIN;

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS homeowner BOOLEAN,
  ADD COLUMN IF NOT EXISTS roof_age TEXT,
  ADD COLUMN IF NOT EXISTS source_tool TEXT;
ALTER TABLE public.lead_submissions
  ADD COLUMN IF NOT EXISTS homeowner BOOLEAN,
  ADD COLUMN IF NOT EXISTS roof_age TEXT,
  ADD COLUMN IF NOT EXISTS source_tool TEXT;

COMMENT ON COLUMN public.leads.homeowner IS 'Self-reported ownership of the project property. NULL means the question was never asked or never answered — never read NULL as "no".';
COMMENT ON COLUMN public.leads.roof_age IS 'Self-reported roof-age band: under_5, 5_10, 11_20, over_20, unsure. NULL means unanswered.';
COMMENT ON COLUMN public.leads.source_tool IS 'First on-page calculator this lead submitted from, e.g. bill_comparison. Per-submission truth lives on lead_submissions.source_tool.';
COMMENT ON COLUMN public.lead_submissions.homeowner IS 'Ownership answer as sent on THIS submission. This is the sound per-submission value.';
COMMENT ON COLUMN public.lead_submissions.roof_age IS 'Roof-age band as sent on THIS submission.';
COMMENT ON COLUMN public.lead_submissions.source_tool IS 'Calculator this submission came from, or NULL for an ordinary article/page submission.';

ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_roof_age_check;
ALTER TABLE public.leads ADD CONSTRAINT leads_roof_age_check
  CHECK (roof_age IS NULL OR roof_age IN ('under_5','5_10','11_20','over_20','unsure'));
ALTER TABLE public.lead_submissions DROP CONSTRAINT IF EXISTS lead_submissions_roof_age_check;
ALTER TABLE public.lead_submissions ADD CONSTRAINT lead_submissions_roof_age_check
  CHECK (roof_age IS NULL OR roof_age IN ('under_5','5_10','11_20','over_20','unsure'));
ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_source_tool_check;
ALTER TABLE public.leads ADD CONSTRAINT leads_source_tool_check
  CHECK (source_tool IS NULL OR source_tool ~ '^[a-z0-9_]{1,60}$');
ALTER TABLE public.lead_submissions DROP CONSTRAINT IF EXISTS lead_submissions_source_tool_check;
ALTER TABLE public.lead_submissions ADD CONSTRAINT lead_submissions_source_tool_check
  CHECK (source_tool IS NULL OR source_tool ~ '^[a-z0-9_]{1,60}$');

CREATE OR REPLACE FUNCTION public.clean_roof_age_band(p_value TEXT)
RETURNS TEXT LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT CASE lower(btrim(COALESCE(p_value, '')))
    WHEN 'under_5' THEN 'under_5' WHEN '5_10' THEN '5_10' WHEN '11_20' THEN '11_20'
    WHEN 'over_20' THEN 'over_20' WHEN 'unsure' THEN 'unsure'
    ELSE NULL END;
$$;
REVOKE ALL ON FUNCTION public.clean_roof_age_band(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.clean_roof_age_band(TEXT) TO service_role;

CREATE OR REPLACE FUNCTION public.clean_source_tool(p_value TEXT)
RETURNS TEXT LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT CASE WHEN lower(btrim(COALESCE(p_value, ''))) ~ '^[a-z0-9_]{1,60}$'
    THEN lower(btrim(p_value)) ELSE NULL END;
$$;
REVOKE ALL ON FUNCTION public.clean_source_tool(TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.clean_source_tool(TEXT) TO service_role;

-- Same wrapping pattern as 010, and guarded so a repeated run is not an error:
-- the current RPC becomes v009 (which still calls the untouched v008), and the
-- new RPC keeps the signature the application already calls.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public' AND p.proname = 'ingest_crr_submission_v009'
  ) THEN
    EXECUTE 'ALTER FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) RENAME TO ingest_crr_submission_v009';
  END IF;
END $$;
REVOKE ALL ON FUNCTION public.ingest_crr_submission_v009(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
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
  v_homeowner BOOLEAN;
  v_roof_age TEXT;
  v_source_tool TEXT;
BEGIN
  v_result := public.ingest_crr_submission_v009(
    p_submission_id, p_segment, p_name, p_phone, p_email, p_address,
    p_qualification_data, p_attribution, p_consent_status, p_consent_timestamp, p_is_test);
  v_lead_id := (v_result->>'lead_id')::UUID;

  -- Only a real JSON boolean counts. A missing key, a null or the string "yes"
  -- all stay NULL rather than becoming a homeownership claim nobody made.
  v_homeowner := CASE
    WHEN jsonb_typeof(p_qualification_data->'homeowner') = 'boolean'
      THEN (p_qualification_data->>'homeowner')::BOOLEAN
    ELSE NULL END;
  v_roof_age := public.clean_roof_age_band(p_qualification_data->>'roof_age');
  v_source_tool := public.clean_source_tool(p_qualification_data->>'source_tool');

  -- leads is the lifetime record: a later answer fills a blank but the first
  -- recorded tool is kept, which matches how 006/008 treat first-touch fields.
  -- lead_submissions carries the per-submission answer, and per §1.4 of the
  -- strategy of record that is the table any measurement must read.
  UPDATE public.leads SET
    homeowner = COALESCE(v_homeowner, homeowner),
    roof_age = COALESCE(v_roof_age, roof_age),
    source_tool = COALESCE(source_tool, v_source_tool)
  WHERE id = v_lead_id;
  UPDATE public.lead_submissions SET
    homeowner = v_homeowner, roof_age = v_roof_age, source_tool = v_source_tool
  WHERE submission_id = p_submission_id;
  RETURN v_result;
END;
$$;
REVOKE ALL ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ingest_crr_submission(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN) TO service_role;

CREATE INDEX IF NOT EXISTS idx_lead_submissions_source_tool
  ON public.lead_submissions(source_tool) WHERE source_tool IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_lead_submissions_homeowner
  ON public.lead_submissions(homeowner) WHERE is_test = FALSE AND homeowner IS NOT NULL;
COMMIT;
