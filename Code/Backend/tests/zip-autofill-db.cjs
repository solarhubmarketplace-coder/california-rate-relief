// Migration 012/013: every lead gets a city and state from its ZIP when the
// form sent none (2026-10-10: a blog-form lead arrived with street + ZIP only).
const fs = require('node:fs');
const path = require('node:path');
const { describe, test, before } = require('node:test');
const assert = require('node:assert/strict');
const { createGrowthDb, rpc } = require('./growth-db.cjs');

// Run: node --test tests/zip-autofill-db.cjs  (pglite needs plain node, not jest)
const expect = (actual) => ({
  toBe: (v) => assert.equal(actual, v),
  toBeNull: () => assert.equal(actual, null),
  toBeUndefined: () => assert.equal(actual, undefined),
  toBeGreaterThan: (v) => assert.ok(actual > v, `${actual} > ${v}`),
  toMatch: (re) => assert.match(actual, re),
  not: { toMatch: (re) => assert.doesNotMatch(actual, re) },
  toMatchObject: (obj) => { for (const [k, v] of Object.entries(obj)) assert.deepEqual(actual[k], v, k); },
});

const read = (name) => fs.readFileSync(path.join(__dirname, '../migrations', name), 'utf8');

async function db013() {
  const db = await createGrowthDb();
  for (const name of ['011_conversion_qualification_fields.sql', '012_ca_zip_places.sql', '013_zip_city_state_autofill.sql']) {
    await db.exec(read(name));
  }
  return db;
}

const base = (overrides = {}) => ({
  p_submission_id: overrides.id || '00000000-0000-4000-8000-000000000001',
  p_segment: 'residential',
  p_name: 'Test Lead',
  p_phone: overrides.phone || '+19515550101',
  p_email: null,
  p_address: overrides.address ?? '123 Main St, 95363',
  p_qualification_data: { homeowner: true, service_zip: '95363', service_market: 'CA', utility_provider: 'Other', ...(overrides.q || {}) },
  p_attribution: { source: 'direct', landing_page: '/blog/low-income-solar-california' },
  p_consent_status: 'opted_in',
  p_consent_timestamp: '2026-10-10T17:54:28Z',
  p_is_test: true,
});

describe('migration 013: city and state from the ZIP', () => {
  let db;
  before(async () => { db = await db013(); });

  test('the reference table covers California and is service-role only', async () => {
    const { rows } = await db.query("select count(*)::int n, count(*) filter (where zip='95363' and city='Patterson' and county='Stanislaus')::int patterson from public.ca_zip_places");
    expect(rows[0].n).toBeGreaterThan(2500);
    expect(rows[0].patterson).toBe(1);
    expect(read('012_ca_zip_places.sql')).toMatch(/REVOKE ALL ON public\.ca_zip_places FROM PUBLIC, anon, authenticated/);
  });

  test('a blog-form lead (street + ZIP, no city) gets city, state and a full address', async () => {
    const res = await rpc(db, 'ingest_crr_submission', base());
    expect(res.error).toBeNull();
    const lead = (await db.query('select city, state, zip, address, qualification_data from public.leads where id = $1', [res.data.lead_id])).rows[0];
    expect(lead).toMatchObject({ city: 'Patterson', state: 'CA', zip: '95363', address: '123 Main St, Patterson, CA 95363' });
    expect(lead.qualification_data).toMatchObject({ derived_city: 'Patterson', derived_state: 'CA', derived_county: 'Stanislaus' });
    expect(lead.qualification_data.city).toBeUndefined();
    const sub = (await db.query('select qualification_data from public.lead_submissions where submission_id = $1', [res.data.submission_id])).rows[0];
    expect(sub.qualification_data).toMatchObject({ derived_city: 'Patterson', derived_state: 'CA' });
    const outbox = (await db.query('select payload from public.owner_notification_outbox where submission_id = $1', [res.data.submission_id])).rows[0];
    expect(outbox.payload.address).toBe('123 Main St, Patterson, CA 95363');
    expect(outbox.payload.qualification_data).toMatchObject({ derived_city: 'Patterson', derived_state: 'CA' });
  });

  test('an identical retry is still recognised as a replay', async () => {
    const again = await rpc(db, 'ingest_crr_submission', base());
    expect(again.error).toBeNull();
    expect(again.data.replayed).toBe(true);
  });

  test('a city the visitor typed wins, and a typed full address is left alone', async () => {
    const res = await rpc(db, 'ingest_crr_submission', base({
      id: '00000000-0000-4000-8000-000000000002', phone: '+19515550102',
      address: '1234 Valley Pkwy, Escondido', q: { service_zip: '92027', city: 'Escondido', derived_county: 'San Diego' },
    }));
    expect(res.error).toBeNull();
    const lead = (await db.query('select city, state, address, qualification_data from public.leads where id = $1', [res.data.lead_id])).rows[0];
    expect(lead).toMatchObject({ city: 'Escondido', state: 'CA', address: '1234 Valley Pkwy, Escondido' });
    expect(lead.qualification_data.derived_county).toBe('San Diego');
  });

  test('a ZIP the table does not know leaves city empty but keeps the state the visitor picked', async () => {
    const res = await rpc(db, 'ingest_crr_submission', base({
      id: '00000000-0000-4000-8000-000000000003', phone: '+19515550103',
      address: '9 Unknown Rd, 90101', q: { service_zip: '90101' },
    }));
    expect(res.error).toBeNull();
    const lead = (await db.query('select city, state, address from public.leads where id = $1', [res.data.lead_id])).rows[0];
    expect(lead).toMatchObject({ city: null, state: 'CA', address: '9 Unknown Rd, 90101' });
  });

  test('wraps the previous RPC under the same signature and leaves v008 alone', () => {
    const sql = read('013_zip_city_state_autofill.sql');
    expect(sql).toMatch(/RENAME TO ingest_crr_submission_v011/);
    expect(sql).not.toMatch(/CREATE OR REPLACE FUNCTION public\.ingest_crr_submission_v00[89]/);
    expect(sql).toMatch(/GRANT EXECUTE ON FUNCTION public\.ingest_crr_submission\(UUID,TEXT,TEXT,TEXT,TEXT,TEXT,JSONB,JSONB,TEXT,TIMESTAMPTZ,BOOLEAN\) TO service_role/);
  });
});
