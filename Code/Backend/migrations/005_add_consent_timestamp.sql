-- Repair the deployed leads schema for LeadService.updateConsentStatus().
-- The application and 000_full_schema.sql already expect this column, but it
-- was missing in production on 2026-09-08, making consent updates fail.
-- Existing rows remain NULL: historical consent times must not be invented.
-- Safe to run repeatedly; no existing data or attribution fields are changed.

BEGIN;

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS consent_timestamp TIMESTAMPTZ;

NOTIFY pgrst, 'reload schema';

COMMIT;
