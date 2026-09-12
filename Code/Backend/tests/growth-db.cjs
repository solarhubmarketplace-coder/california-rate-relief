// Disposable PostgreSQL-compatible test database. Never opens a provider connection.
const { PGlite } = require('@electric-sql/pglite');
const fs = require('node:fs');
const path = require('node:path');
async function createGrowthDb() {
  const db = new PGlite();
  await db.exec(`CREATE ROLE anon; CREATE ROLE authenticated; CREATE ROLE service_role BYPASSRLS;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO service_role;
    CREATE SCHEMA auth; CREATE TABLE auth.users(id uuid primary key);
    INSERT INTO auth.users VALUES ('dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
    CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql AS $$SELECT NULL::uuid$$;
    CREATE TABLE public.leads(id uuid PRIMARY KEY DEFAULT gen_random_uuid(),name text,phone text,email text,address text,
      source text,type text,status text,bill_amount integer,utility_provider text,credit_score text,
      gclid text,fbclid text,utm_source text,utm_campaign text,utm_content text,landing_page text,landing_city_slug text,
      landing_page_type text,submitted_from text,referrer text,utm_medium text,utm_term text,ga_client_id text,
      consent_status text,consent_timestamp timestamptz,created_at timestamptz default now(),zip text,city text);
    CREATE TABLE public.email_logs(id uuid PRIMARY KEY DEFAULT gen_random_uuid(),lead_id uuid,email_to text,
      resend_email_id text,delivery_state text,delivered_at timestamptz);`);
  for (const name of [
    '006_add_durable_intake_and_referrals.sql',
    '008_capture_zip_and_city_on_leads.sql',
    '009_organic_receipt_measurement.sql',
    '010_six_market_intake_contract.sql',
  ]) {
    await db.exec(
      fs.readFileSync(path.join(__dirname, '../migrations', name), 'utf8'),
    );
  }
  return db;
}
const params = [
  'p_submission_id',
  'p_segment',
  'p_name',
  'p_phone',
  'p_email',
  'p_address',
  'p_qualification_data',
  'p_attribution',
  'p_consent_status',
  'p_consent_timestamp',
  'p_is_test',
];
async function rpc(db, name, args) {
  try {
    if (name !== 'ingest_crr_submission')
      throw new Error('Local intake adapter refuses unsupported RPC');
    const values = params.map((k) =>
      typeof args[k] === 'object' && args[k] !== null
        ? JSON.stringify(args[k])
        : (args[k] ?? null),
    );
    const result = await db.query(
      `select public.ingest_crr_submission(${params.map((_, i) => '$' + (i + 1)).join(',')}) as data`,
      values,
    );
    return { data: result.rows[0].data, error: null };
  } catch (error) {
    return { data: null, error: { code: error.code, message: error.message } };
  }
}
module.exports = { createGrowthDb, rpc };
