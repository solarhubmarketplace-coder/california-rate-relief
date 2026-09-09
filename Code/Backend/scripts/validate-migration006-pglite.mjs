/**
 * Supplemental local PostgreSQL validation for migration 006.
 * Validated with @electric-sql/pglite 0.5.8 (not a production dependency).
 *
 * PowerShell:
 *   $d = Join-Path $env:TEMP 'crr-pglite-migration006'
 *   New-Item -ItemType Directory -Force $d | Out-Null
 *   Push-Location $d; npm init -y; npm install @electric-sql/pglite@0.5.8; Pop-Location
 *   $env:PGLITE_MODULE_PATH = (Join-Path $d 'node_modules/@electric-sql/pglite/dist/index.js')
 *   node scripts/validate-migration006-pglite.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const modulePath = process.env.PGLITE_MODULE_PATH;
if (!modulePath) throw new Error('Set PGLITE_MODULE_PATH to @electric-sql/pglite/dist/index.js');
const { PGlite } = await import(pathToFileURL(modulePath).href);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixture = String.raw`
CREATE ROLE anon NOLOGIN;
CREATE ROLE authenticated NOLOGIN;
CREATE ROLE service_role NOLOGIN BYPASSRLS;
CREATE SCHEMA auth;
CREATE TABLE auth.users (id uuid PRIMARY KEY, email text);
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$
 SELECT NULLIF(current_setting('request.jwt.claim.sub',true),'')::uuid
$$;
INSERT INTO auth.users VALUES
 ('dac3b467-55d5-4f83-b7b4-9bb0fb5f773d','owner@example.invalid'),
 ('00000000-0000-4000-8000-000000000099','nonstaff@example.invalid');
CREATE TABLE public.leads (
 id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),name text,phone text,email text,source text,
 type text CHECK(type IN ('hot','cold')),status text CHECK(status IN ('new','contacted','declined','exhausted','converted')),
 consent_status text DEFAULT 'pending',created_at timestamptz DEFAULT now(),address text,bill_amount integer,
 utility_provider text CHECK(utility_provider IN ('PG&E','SCE','SDG&E','LADWP','MVU','Other',NULL)),
 credit_score text CHECK(credit_score IN ('above_650','below_650','unsure',NULL)),gclid text,fbclid text,
 utm_source text,utm_campaign text,utm_content text,call_state text,email_status text,last_contacted_at timestamptz,
 landing_page text,submitted_from text,referrer_url text,bill_amount_min integer,bill_amount_max integer,
 bill_amount_exact integer,bill_amount_is_exact boolean,city text,zip text,landing_city_slug text,
 landing_page_type text,referrer text,utm_medium text,utm_term text,ga_client_id text,consent_timestamp timestamptz
);
CREATE TABLE public.communication_tasks(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),lead_id uuid REFERENCES public.leads(id),task_type text,status text,scheduled_at timestamptz,metadata jsonb,attempt_number integer,max_attempts integer,created_at timestamptz DEFAULT now(),updated_at timestamptz DEFAULT now());
CREATE TABLE public.settings(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.appointments(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.call_logs(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.documents(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.email_logs(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.email_sequence_steps(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.email_sequences(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.email_templates(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.lead_sequence_tracking(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
CREATE TABLE public.sms_logs(id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid());
DO $fixture$ DECLARE t text; BEGIN
 FOREACH t IN ARRAY ARRAY['leads','settings','appointments','call_logs','communication_tasks','documents','email_logs','email_sequence_steps','email_sequences','email_templates','lead_sequence_tracking','sms_logs'] LOOP
  EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY',t);
  EXECUTE format('CREATE POLICY %I_authenticated_all ON public.%I FOR ALL TO authenticated USING (true) WITH CHECK (true)',t,t);
  EXECUTE format('GRANT ALL ON public.%I TO authenticated,service_role',t);
 END LOOP;
END $fixture$;`;

const migration = await fs.readFile(path.join(root, 'migrations/006_add_durable_intake_and_referrals.sql'), 'utf8');
const tests = await fs.readFile(path.join(root, 'scripts/test-durable-intake-transaction.sql'), 'utf8');
const db = await PGlite.create();
try {
  await db.exec(`BEGIN;\n${fixture}\n${migration}\n${tests}\nROLLBACK;`);
  console.log('PASS migration006 fixture + transactional assertions');
} finally {
  await db.close();
}
