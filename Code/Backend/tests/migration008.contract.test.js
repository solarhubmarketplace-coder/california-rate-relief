const fs = require('fs');
const path = require('path');
const sql = fs.readFileSync(path.join(__dirname, '../migrations/008_capture_zip_and_city_on_leads.sql'), 'utf8');
const intakeFunction = sql.match(/CREATE OR REPLACE FUNCTION public\.ingest_crr_submission[\s\S]*?END \$\$;/)?.[0] || '';

describe('migration 008 zip/city capture contract', () => {
  test('writes zip and city on both the insert and the update path', () => {
    expect(intakeFunction).toMatch(/v_zip := public\.clean_ca_zip\(/);
    expect(intakeFunction).toMatch(/v_city := NULLIF\(btrim\(/);
    expect(intakeFunction).toMatch(/INSERT INTO public\.leads \([\s\S]*?city, zip,/);
    expect(intakeFunction).toMatch(/city = COALESCE\(v_city, city\), zip = COALESCE\(v_zip, zip\)/);
  });

  test('accepts service_zip with a legacy zip fallback', () => {
    expect(intakeFunction).toMatch(/p_qualification_data->>'service_zip'/);
    expect(intakeFunction).toMatch(/p_qualification_data->>'zip'/);
  });

  test('only a well-formed California ZIP reaches the column', () => {
    expect(sql).toMatch(/CREATE OR REPLACE FUNCTION public\.clean_ca_zip/);
    expect(sql).toMatch(/\^\[0-9\]\{5\}\$/);
    expect(sql).toMatch(/BETWEEN 90001 AND 96162/);
    // The ::INTEGER cast must sit inside a nested CASE, never beside the regex
    // behind an AND: PostgreSQL does not guarantee AND short-circuits, so a
    // non-numeric ZIP could otherwise raise and take the whole intake with it.
    const cleaner = sql.match(/CREATE OR REPLACE FUNCTION public\.clean_ca_zip[\s\S]*?\$\$;/)?.[0] || '';
    expect(cleaner).toMatch(/~ '\^\[0-9\]\{5\}\$' THEN[\s\S]*?CASE[\s\S]*?::INTEGER BETWEEN/);
    expect(cleaner).not.toMatch(/\$' *\n? *AND[\s\S]*?::INTEGER/);
  });

  test('the derived utility never overwrites the visitor answer', () => {
    // utility_provider must still come straight from qualification_data, and no
    // derived_* value may be written into it.
    expect(intakeFunction).toMatch(/utility_provider[\s\S]*?NULLIF\(p_qualification_data->>'utility_provider',''\)/);
    expect(intakeFunction).not.toMatch(/utility_provider\s*=\s*[^,]*derived_utility/);
    expect(intakeFunction).not.toMatch(/COALESCE\([^)]*derived_utility[^)]*\)\s*(?:AS\s+)?utility_provider/);
  });

  test('keeps the 006 signature so intake cannot 503 during a partial deploy', () => {
    const signature = sql.match(/CREATE OR REPLACE FUNCTION public\.ingest_crr_submission\(([\s\S]*?)\) RETURNS JSONB/)?.[1] || '';
    const params = signature.split(',').map(part => part.trim().split(/\s+/)[0]).filter(Boolean);
    expect(params).toEqual([
      'p_submission_id', 'p_segment', 'p_name', 'p_phone', 'p_email', 'p_address',
      'p_qualification_data', 'p_attribution', 'p_consent_status', 'p_consent_timestamp', 'p_is_test',
    ]);
    expect(sql).toMatch(/GRANT EXECUTE ON FUNCTION public\.ingest_crr_submission\(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN\) TO service_role/);
  });

  test('retains the 006 safety invariants it replaces', () => {
    expect(intakeFunction).toMatch(/payload_fingerprint/);
    expect(intakeFunction).toMatch(/pg_advisory_xact_lock/);
    expect(intakeFunction).toMatch(/submission_id payload mismatch/);
    expect(intakeFunction).toMatch(/owner_notification_outbox/);
    expect(intakeFunction).not.toMatch(/communication_tasks|lead_sequence_tracking/);
  });

  test('branches on a latched row-existence flag, not a distant implicit FOUND', () => {
    expect(intakeFunction).toMatch(/v_lead_exists := FOUND;/);
    expect(intakeFunction).toMatch(/IF NOT v_lead_exists THEN/);
  });

  test('leaves the intake function locked to service_role', () => {
    expect(sql).toMatch(/REVOKE ALL ON FUNCTION public\.ingest_crr_submission\([^)]*\) FROM PUBLIC, anon, authenticated/);
  });
});
