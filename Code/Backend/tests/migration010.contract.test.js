const fs = require('node:fs');
const path = require('node:path');
const sql = fs.readFileSync(path.join(__dirname, '../migrations/010_six_market_intake_contract.sql'), 'utf8');

describe('migration 010 six-market intake contract', () => {
  test('adds forward-only state/market fields without updating historical rows', () => {
    expect(sql).toMatch(/ADD COLUMN IF NOT EXISTS service_market/);
    expect(sql).toMatch(/ADD COLUMN IF NOT EXISTS territory_resolution/);
    expect(sql).not.toMatch(/UPDATE public\.leads\s+SET\s+service_market\s*=\s*'CA'/);
  });

  test('allows only the six authorized market identifiers', () => {
    for (const market of ['CA', 'NJ', 'DE', 'MD', 'VA', 'DC']) expect(sql).toContain(`'${market}'`);
    expect(sql).toMatch(/clean_service_market/);
  });

  test('preserves the durable intake RPC signature while wrapping the prior atomic implementation', () => {
    expect(sql).toMatch(/RENAME TO ingest_crr_submission_v008/);
    expect(sql).toMatch(/v_result := public\.ingest_crr_submission_v008/);
    expect(sql).toMatch(/GRANT EXECUTE ON FUNCTION public\.ingest_crr_submission\(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN\) TO service_role/);
  });

  test('never infers a utility from a selected market or a ZIP', () => {
    expect(sql).not.toMatch(/utility_provider\s*=/);
    expect(sql).toMatch(/visitor_selected_zip_validated/);
  });
});
