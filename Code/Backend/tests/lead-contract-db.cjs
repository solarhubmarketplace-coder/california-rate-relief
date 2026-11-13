// Migration 014 (written, NOT applied) on a disposable PGlite database: the
// ingest RPC refuses a new residential submission that breaks the lead
// contract with SQLSTATE 22023 'crr_contract:<code>', lets replays and
// commercial submissions through, and counts refusals without personal data.
// Run: npm run test:lead-contract-db   (pglite needs plain node, not jest)
const fs = require('node:fs');
const path = require('node:path');
const { describe, test, before } = require('node:test');
const assert = require('node:assert/strict');
const { createGrowthDb, rpc } = require('./growth-db.cjs');
const contract = require('../src/lib/lead-contract');
// The controller only builds the payload here (validate); the service module it
// loads needs a Supabase URL to construct a client, but no request is ever made.
// Placeholders only, and only when unset.
process.env.SUPABASE_URL = process.env.SUPABASE_URL || 'http://127.0.0.1:9';
process.env.SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-not-a-key';
const controller = require('../src/controllers/intake.controller');

const read = (name) => fs.readFileSync(path.join(__dirname, '../migrations', name), 'utf8');

async function db014() {
  const db = await createGrowthDb();
  for (const name of ['011_conversion_qualification_fields.sql', '012_ca_zip_places.sql', '013_zip_city_state_autofill.sql', '014_residential_lead_contract.sql']) {
    await db.exec(read(name));
  }
  return db;
}

let seq = 0;
function nextId() {
  seq += 1;
  return `00000000-0000-4000-8000-${String(seq).padStart(12, '0')}`;
}

// The exact RPC arguments the Phase 2 API sends for a valid lead.
function apiArgs(overrides = {}) {
  const body = {
    submission_id: overrides.id || nextId(), segment: 'residential',
    contact: { name: 'Test Lead', phone: overrides.phone || '(951) 555-0101', email: 'test@example.com', street: overrides.street || '123 Main St' },
    qualification_data: {
      lead_contract_version: contract.LEAD_CONTRACT_VERSION, form_kind: 'solar_inquiry', homeowner: true,
      monthly_bill_band: '350_499', utility_provider: 'sce', city: 'Temecula', service_zip: '92591', service_market: 'CA',
      unit_flagged: false, ...(overrides.q || {}),
    },
    attribution: { landing_page: '/blog/why-is-my-sce-bill-so-high' },
    consent: { status: 'opted_in', timestamp: '2026-11-12T20:00:00Z' },
    test: true,
  };
  const validated = controller.validate(body);
  assert.equal(validated.error, undefined, validated.error);
  const v = validated.value;
  return {
    p_submission_id: v.submission_id, p_segment: v.segment, p_name: v.name, p_phone: v.phone, p_email: v.email,
    p_address: v.address, p_qualification_data: v.qualification_data, p_attribution: v.attribution,
    p_consent_status: v.consent_status, p_consent_timestamp: v.consent_timestamp, p_is_test: v.is_test,
  };
}

function withQ(args, patch) {
  const q = { ...args.p_qualification_data, ...patch };
  for (const [k, v] of Object.entries(patch)) if (v === undefined) delete q[k];
  return { ...args, p_submission_id: nextId(), p_qualification_data: q };
}

describe('migration 014: the lead contract in the ingest RPC', () => {
  let db;
  before(async () => { db = await db014(); });

  test('a valid API-shaped residential lead is stored', async () => {
    const args = apiArgs();
    const res = await rpc(db, 'ingest_crr_submission', args);
    assert.equal(res.error, null, JSON.stringify(res.error));
    const lead = (await db.query('select city, state, zip, address, bill_amount from public.leads where id = $1', [res.data.lead_id])).rows[0];
    assert.deepEqual(lead, { city: 'Temecula', state: 'CA', zip: '92591', address: '123 Main St, Temecula, CA 92591', bill_amount: 425 });
  });

  const refusals = [
    ['form_outdated', (a) => withQ(a, { lead_contract_version: undefined })],
    ['bill_under_250', (a) => withQ(a, { monthly_bill_band: 'under_250' })],
    ['bill_band_required', (a) => withQ(a, { monthly_bill_band: '200_299' })],
    ['bill_band_required', (a) => withQ(a, { bill_amount: 999 })],
    ['bill_under_250', (a) => withQ(a, { monthly_bill_band: '250_349', bill_amount: 150 })],
    ['homeowner_required', (a) => withQ(a, { homeowner: 'yes' })],
    ['renter', (a) => withQ(a, { homeowner: false })],
    ['email_required', (a) => ({ ...a, p_submission_id: nextId(), p_email: null })],
    ['street_required', (a) => ({ ...a, p_submission_id: nextId(), p_address: ', Temecula, CA 92591' })],
    ['po_box', (a) => ({ ...a, p_submission_id: nextId(), p_address: 'PO Box 12, Temecula, CA 92591' })],
    ['unit_word', (a) => ({ ...a, p_submission_id: nextId(), p_address: '12 Main St Apt 4, Temecula, CA 92591' })],
    ['street_format', (a) => ({ ...a, p_submission_id: nextId(), p_address: 'Main St, Temecula, CA 92591' })],
    ['unit_unconfirmed', (a) => ({ ...a, p_submission_id: nextId(), p_address: '12 Main St #4, Temecula, CA 92591' })],
    ['unit_unconfirmed', (a) => withQ(a, { unit_flagged: true })],
    ['city_invalid', (a) => withQ(a, { city: ' ' })],
    ['state_not_ca', (a) => withQ(a, { service_market: 'NJ' })],
    ['zip_not_ca', (a) => withQ(a, { service_zip: '10001' })],
    ['consent_required', (a) => ({ ...a, p_submission_id: nextId(), p_consent_status: 'pending' })],
  ];
  for (const [code, mutate] of refusals) {
    test(`refuses ${code} with SQLSTATE 22023`, async () => {
      const res = await rpc(db, 'ingest_crr_submission', mutate(apiArgs()));
      assert.equal(res.data, null);
      assert.equal(res.error?.code, '22023');
      assert.equal(res.error?.message, `crr_contract:${code}`);
      assert.ok(contract.ERRORS[code], code);
    });
  }

  test('a confirmed unit is accepted', async () => {
    const res = await rpc(db, 'ingest_crr_submission', apiArgs({ street: '12 Main St #4', q: { unit_confirmed_detached: true } }));
    assert.equal(res.error, null, JSON.stringify(res.error));
  });

  test('a replay of an existing submission_id bypasses the check', async () => {
    const id = nextId();
    // Store a pre-014 shaped submission straight through v013, as production holds today.
    const old = { ...apiArgs({ id, phone: '(951) 555-0177' }), p_qualification_data: { homeowner: true, utility_provider: 'SCE', bill_amount: 150, service_zip: '92591', service_market: 'CA' } };
    const values = ['p_submission_id', 'p_segment', 'p_name', 'p_phone', 'p_email', 'p_address', 'p_qualification_data', 'p_attribution', 'p_consent_status', 'p_consent_timestamp', 'p_is_test']
      .map((k) => (typeof old[k] === 'object' && old[k] !== null ? JSON.stringify(old[k]) : old[k] ?? null));
    await db.query('select public.ingest_crr_submission_v013($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', values);
    const replay = await rpc(db, 'ingest_crr_submission', old);
    assert.equal(replay.error, null, JSON.stringify(replay.error));
    assert.equal(replay.data.replayed, true);
  });

  test('commercial submissions are unchanged', async () => {
    const res = await rpc(db, 'ingest_crr_submission', {
      p_submission_id: nextId(), p_segment: 'commercial', p_name: 'Test Co', p_phone: '+19515550188', p_email: null,
      p_address: '500 Industrial Way, 93301',
      p_qualification_data: { company_name: 'Acme', property_type: 'warehouse', property_control: 'owner', utility_provider: 'PG&E', project_timeline: 'research' },
      p_attribution: { landing_page: '/commercial-solar' }, p_consent_status: 'opted_in', p_consent_timestamp: null, p_is_test: true,
    });
    assert.equal(res.error, null, JSON.stringify(res.error));
  });

  test('record_crr_intake_rejection increments and coerces bad input', async () => {
    await db.query("select public.record_crr_intake_rejection('renter', '/blog/x', 'solar_inquiry', 'api')");
    await db.query("select public.record_crr_intake_rejection('renter', '/blog/x', 'solar_inquiry', 'api')");
    await db.query("select public.record_crr_intake_rejection('Bad Reason!', 'https://evil.example/?email=a@b.c', 'x y', 'zzz')");
    const rows = (await db.query('select reason, landing_page, form_kind, layer, count from public.crr_intake_rejections order by reason')).rows;
    assert.deepEqual(rows, [
      { reason: 'other', landing_page: 'other', form_kind: 'unknown', layer: 'api', count: 1 },
      { reason: 'renter', landing_page: '/blog/x', form_kind: 'solar_inquiry', layer: 'api', count: 2 },
    ]);
  });

  test('the SQL street regexes give the same verdicts as classifyStreet', async () => {
    const vectors = ['123 Main St', '123 Stewart Ave', '88 Floorwood Dr', '123 Lot St', '45 Space Center Blvd', 'PO Box 12',
      'P.O. Box 12', 'P. O. Box 12', 'Post Office Box 77', '12 Main St Unit 4', '12 Main St #4', '12 Main St Apt 4',
      '12 Main St APT. 4', '12 Main St Ste 5', '12 Main St Apt4', '12 Main St Unit4', '300 Unity Dr', '4500 Lotus Ave',
      '120 Spaceport Way', '2 Suites Ln', '500 W Unit Rd', '1600 Amphitheatre Pkwy #B', '10 Main St Floor 3',
      '1 Trailer Park Rd', '18 Ste-Marie Ave', '3 Box Canyon Rd', 'Main St', '123', '12-B Oak St', '1234-1236 Elm St',
      '10 Calle Peñasquitos', ''];
    for (const street of vectors) {
      const { rows } = await db.query(`select case
        when $1 = '' then 'street_required'
        when $1 ~* '(^|[^a-z])(p\\s*\\.?\\s*o\\s*\\.?\\s*box|post\\s+office\\s+box)([^a-z]|$)' then 'po_box'
        when $1 ~* '(^|[^a-z])(apt|apartment|bldg|rm|floor|suite|ste|lot|space|trailer)([^a-z]|$)' then 'unit_word'
        when $1 !~* '^[0-9]{1,6}([a-z]|-[a-z0-9]{1,6})?\\s+.*[a-z]{2}' then 'street_format'
        when $1 ~* '(^|[^a-z])unit([^a-z]|$)|#' then 'unit_question'
        else 'ok' end as verdict`, [contract.normalizeStreet(street)]);
      assert.equal(rows[0].verdict, contract.classifyStreet(street), street);
    }
    // The migration's own regexes are these (guard against drift).
    const sql = read('014_residential_lead_contract.sql');
    assert.ok(sql.includes("(^|[^a-z])(apt|apartment|bldg|rm|floor|suite|ste|lot|space|trailer)([^a-z]|$)"));
    assert.ok(sql.includes("(^|[^a-z])(p\\s*\\.?\\s*o\\s*\\.?\\s*box|post\\s+office\\s+box)([^a-z]|$)"));
  });
});
