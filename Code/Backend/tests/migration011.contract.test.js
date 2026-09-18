const fs = require('node:fs');
const path = require('node:path');
const sql = fs.readFileSync(path.join(__dirname, '../migrations/011_conversion_qualification_fields.sql'), 'utf8');
/** The statements only, so a promise made in the header comment cannot satisfy a test. */
const statements = sql.split('\n').filter((line) => !line.trim().startsWith('--')).join('\n');
const v008 = fs.readFileSync(path.join(__dirname, '../migrations/010_six_market_intake_contract.sql'), 'utf8');

describe('migration 011 conversion and qualification capture', () => {
  test('adds the two qualification answers and the tool marker as nullable columns on both tables', () => {
    for (const column of ['homeowner', 'roof_age', 'source_tool']) {
      expect(sql.match(new RegExp(`ADD COLUMN IF NOT EXISTS ${column}`, 'g')) || []).toHaveLength(2);
    }
    expect(sql).not.toMatch(/SET NOT NULL/);
    expect(sql).not.toMatch(/ADD COLUMN IF NOT EXISTS (homeowner|roof_age|source_tool)[^,;]*DEFAULT/);
  });

  test('backfills and reclassifies nothing', () => {
    expect(sql).not.toMatch(/UPDATE public\.leads\s+SET\s+homeowner\s*=\s*(TRUE|FALSE)/i);
    // No SET touches a classification or attribution column. is_test appears
    // once, read-only, in a partial index predicate.
    expect(sql).not.toMatch(/SET[^;]*\b(is_test|is_spam|source|landing_page|utm_[a-z_]+|referrer|ga_client_id)\b\s*=/i);
    // The test flag is only read (one partial index) and only passed through.
    expect(sql).toMatch(/WHERE is_test = FALSE AND homeowner IS NOT NULL/);
    expect(sql).toMatch(/p_consent_status, p_consent_timestamp, p_is_test\);/);
    expect(statements).not.toMatch(/is_spam/);
    expect(statements).not.toMatch(/\bleads\.source\b/);
  });

  test('constrains the roof-age band and the tool marker to closed vocabularies', () => {
    for (const band of ['under_5', '5_10', '11_20', 'over_20', 'unsure']) expect(sql).toContain(`'${band}'`);
    expect(sql).toMatch(/clean_roof_age_band/);
    expect(sql).toMatch(/clean_source_tool/);
    expect(sql).toMatch(/source_tool IS NULL OR source_tool ~ '\^\[a-z0-9_\]\{1,60\}\$'/);
  });

  test('leaves v008 untouched and wraps the current RPC as v009 under the same signature', () => {
    expect(sql).toMatch(/RENAME TO ingest_crr_submission_v009/);
    expect(sql).toMatch(/v_result := public\.ingest_crr_submission_v009/);
    // v008 is only ever reached through v009; this migration must not redefine it.
    expect(sql).not.toMatch(/CREATE OR REPLACE FUNCTION public\.ingest_crr_submission_v008/);
    expect(sql).not.toMatch(/DROP FUNCTION[^;]*ingest_crr_submission_v008/);
    expect(v008).toMatch(/RENAME TO ingest_crr_submission_v008/);
    expect(sql).toMatch(/GRANT EXECUTE ON FUNCTION public\.ingest_crr_submission\(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN\) TO service_role/);
  });

  test('the rename is guarded so a repeated run is not an error', () => {
    expect(sql).toMatch(/proname = 'ingest_crr_submission_v009'/);
    expect(sql).toMatch(/IF NOT EXISTS \(/);
  });

  test('records ownership only from a real JSON boolean', () => {
    expect(sql).toMatch(/jsonb_typeof\(p_qualification_data->'homeowner'\) = 'boolean'/);
  });

  test('runs as one transaction', () => {
    // Comment header first, then one explicit transaction.
    expect(sql).toMatch(/^BEGIN;$/m);
    expect(sql.trim().endsWith('COMMIT;')).toBe(true);
    expect(sql.match(/^BEGIN;$/gm) || []).toHaveLength(1);
    expect(sql.match(/^COMMIT;$/gm) || []).toHaveLength(1);
  });
});
