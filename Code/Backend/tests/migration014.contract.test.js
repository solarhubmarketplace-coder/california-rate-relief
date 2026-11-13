// Static checks on migration 014 (written, NOT applied). The behaviour is
// exercised on PGlite by tests/lead-contract-db.cjs (npm run test:lead-contract-db).
const fs = require('node:fs');
const path = require('node:path');
const contract = require('../src/lib/lead-contract');

const sql = fs.readFileSync(path.join(__dirname, '../migrations/014_residential_lead_contract.sql'), 'utf8');
/** The statements only, so a promise made in the header comment cannot satisfy a test. */
const statements = sql.split('\n').filter((line) => !line.trim().startsWith('--')).join('\n');

describe('migration 014 residential lead contract', () => {
  test('is marked not applied and states the apply order', () => {
    expect(sql).toMatch(/STATUS: NOT APPLIED/);
    expect(sql).toMatch(/APPLY ORDER \(binding\)/);
    expect(sql).toMatch(/Rollback:/);
  });

  test('creates only the wrapper, the contract check, the counter function and the counter table', () => {
    const functions = [...statements.matchAll(/CREATE OR REPLACE FUNCTION public\.([a-z0-9_]+)/g)].map((m) => m[1]).sort();
    expect(functions).toEqual(['crr_residential_contract_error', 'ingest_crr_submission', 'record_crr_intake_rejection']);
    const tables = [...statements.matchAll(/CREATE TABLE IF NOT EXISTS public\.([a-z0-9_]+)/g)].map((m) => m[1]);
    expect(tables).toEqual(['crr_intake_rejections']);
    expect(statements).toMatch(/RENAME TO ingest_crr_submission_v013/);
    expect(statements).not.toMatch(/CREATE OR REPLACE FUNCTION public\.ingest_crr_submission_v0/);
  });

  test('changes no existing table or row', () => {
    expect(statements).not.toMatch(/\bUPDATE\s+public\.(leads|lead_submissions|owner_notification_outbox|ca_zip_places)\b/i);
    expect(statements).not.toMatch(/\bDELETE\s+FROM\b/i);
    expect(statements).not.toMatch(/\bALTER\s+TABLE\s+public\.(?!crr_intake_rejections)/i);
    expect(statements).not.toMatch(/\bDROP\b/i);
    // The only UPDATE statement is the counter upsert (the other match is the GRANT).
    expect([...statements.matchAll(/\bUPDATE\s+(?!ON\b)/gi)]).toHaveLength(1);
    expect(statements).toMatch(/ON CONFLICT \(day, reason, landing_page, form_kind, layer\) DO UPDATE SET count = r\.count \+ 1/);
  });

  test('grants execution and counter access to service_role only', () => {
    for (const fn of ['record_crr_intake_rejection(TEXT, TEXT, TEXT, TEXT)', 'crr_residential_contract_error(TEXT, TEXT, JSONB, TEXT)']) {
      expect(statements).toContain(`REVOKE ALL ON FUNCTION public.${fn} FROM PUBLIC, anon, authenticated;`);
    }
    expect(statements).toMatch(/REVOKE ALL ON public\.crr_intake_rejections FROM PUBLIC, anon, authenticated;/);
    expect(statements).toMatch(/GRANT SELECT, INSERT, UPDATE ON public\.crr_intake_rejections TO service_role;/);
    expect(statements).toMatch(/ENABLE ROW LEVEL SECURITY/);
    const grants = [...statements.matchAll(/GRANT [^;]+ TO ([a-z_, ]+);/g)].map((m) => m[1].trim());
    expect(new Set(grants)).toEqual(new Set(['service_role']));
    expect(statements).toMatch(/ingest_crr_submission_v013\(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN\)\s+FROM PUBLIC, anon, authenticated, service_role;/);
  });

  test('checks only new residential submissions and raises 22023 crr_contract:<code>', () => {
    expect(statements).toMatch(/IF p_segment = 'residential'\s+AND NOT EXISTS \(SELECT 1 FROM public\.lead_submissions s WHERE s\.submission_id = p_submission_id\)/);
    expect(statements).toMatch(/RAISE EXCEPTION 'crr_contract:%', v_error USING ERRCODE = '22023';/);
  });

  test('the counter table holds no personal data', () => {
    const table = statements.slice(statements.indexOf('CREATE TABLE IF NOT EXISTS public.crr_intake_rejections'), statements.indexOf('COMMENT ON TABLE'));
    expect(table).not.toMatch(/\b(name|phone|email|address|street)\b/i);
  });

  test('uses the bands and every SQL error code the API knows', () => {
    for (const [band, amount] of Object.entries(contract.BILL_BANDS)) {
      expect(statements).toContain(`'${band}'`);
      expect(statements).toContain(`THEN ${amount}`.replace('THEN 600', 'ELSE 600'));
    }
    const codes = [...statements.matchAll(/RETURN '([a-z_]+)'/g)].map((m) => m[1]);
    for (const code of codes) expect(Object.keys(contract.ERRORS)).toContain(code);
  });
});
