const { PGlite } = require('@electric-sql/pglite');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
(async () => {
 const db = new PGlite();
 await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;
 create table public.leads(id uuid primary key default gen_random_uuid(),email text,phone text,source text,
 bill_amount integer,bill_amount_min integer,bill_amount_max integer,bill_amount_exact integer,bill_amount_is_exact boolean,
 credit_score text,qualification_data jsonb not null default '{}',consent_status text,consent_timestamp timestamptz,email_status text,
 service_market text,project_type text);
 create table communication_tasks(id uuid primary key default gen_random_uuid(),lead_id uuid,task_type text,status text,error_message text,updated_at timestamptz);
 create table lead_sequence_tracking(id uuid primary key default gen_random_uuid(),lead_id uuid,completed_at timestamptz,updated_at timestamptz);
 grant all on public.leads,public.communication_tasks,public.lead_sequence_tracking to service_role;
 insert into leads(email,consent_status,service_market,qualification_data) values
 ('Person@example.com','opted_in','CA','{"marketing_service_confirmed":true}'),
 ('person@example.com','pending','CA','{}');`);
 for (const file of ['20260912213707_email_identity_legacy_repair.sql','20260912220945_email_dispatch_permission_guard.sql']) {
  await db.exec(fs.readFileSync(path.join(__dirname,'../supabase/migrations',file),'utf8'));
 }
 await db.exec('set role service_role;select refresh_crr_email_identities()');
 const [lead,shared] = (await db.query('select id from leads order by email')).rows.map(x=>x.id);
 const check = async (recipient='Person@example.com') => (await db.query('select check_crr_email_outreach($1,$2) r',[lead,recipient])).rows[0].r;
 assert.equal((await check()).reason,'purpose_permission_not_verified');
 await db.exec("insert into email_permission_events(email_identity_id,purpose,decision,evidence_reference,wording_version,occurred_at) select id,'solar_marketing','granted','fixture-consent','v1',now()-interval '1 day' from email_identities");
 assert.equal((await check()).allowed,true);
 assert.equal((await check('changed@example.com')).reason,'stale_recipient');
 await db.query("update leads set consent_status='pending' where id=$1",[lead]);
 assert.equal((await check()).allowed,false);
 await db.query("update leads set consent_status='opted_in' where id=$1",[lead]);
 for (const patch of ["service_market='TX'","qualification_data='{}'","source='synthetic_test'","project_type='residential'"]) {
  await db.query(`update leads set ${patch} where id=$1`,[lead]);
  assert.equal((await check()).allowed,false,patch);
  await db.query(`update leads set service_market='CA',qualification_data='{"marketing_service_confirmed":true}',source=null,project_type=null where id=$1`,[lead]);
 }
 await db.query("update leads set consent_status='opted_out' where id=$1",[shared]);
 assert.equal((await check()).reason,'shared_recipient_stop');
 await db.query("update leads set consent_status='pending',email_status='complained' where id=$1",[shared]);
 assert.equal((await check()).reason,'shared_recipient_stop');
 await db.query('update leads set email_status=null where id=$1',[shared]);
 await db.exec("insert into email_permission_events(email_identity_id,purpose,decision,evidence_reference,wording_version,occurred_at) select id,'solar_marketing','granted','future-fixture','v1',now()+interval '1 day' from email_identities");
 assert.equal((await check()).reason,'purpose_permission_not_verified');
 await db.exec("reset role;delete from email_permission_events where evidence_reference='future-fixture';set role service_role");
 assert.equal((await check()).allowed,true);
 await db.query("insert into communication_tasks(lead_id,task_type,status) values($1,'email','pending'),($2,'email','processing'),($1,'sms','pending'),($1,'email','completed')",[lead,shared]);
 await db.query('insert into lead_sequence_tracking(lead_id) values($1),($2)',[lead,shared]);
 const stop = (await db.query('select record_crr_email_opt_out($1) r',[shared])).rows[0].r;
 assert.equal(stop.queued_emails_stopped,2);
 assert.equal((await check()).reason,'recipient_suppressed');
 assert.equal((await db.query("select count(*)::int n from communication_tasks where task_type='sms' and status='pending'")).rows[0].n,1);
 assert.equal((await db.query("select count(*)::int n from communication_tasks where task_type='email' and status='completed'")).rows[0].n,1);
 assert.equal((await db.query('select count(*)::int n from lead_sequence_tracking where completed_at is null')).rows[0].n,0);
 await db.query("update leads set consent_status='opted_in' where id=$1",[shared]);
 assert.equal((await check()).allowed,false,'Later record edits must not clear identity suppression');
 assert.equal((await db.query('select record_crr_email_opt_out($1) r',[shared])).rows[0].r.queued_emails_stopped,0);
 assert.equal((await db.query('select count(*)::int n from email_suppressions')).rows[0].n,1);
 for(const role of ['anon','authenticated']) {
  await db.exec(`reset role;set role ${role}`);
  await assert.rejects(db.query('select check_crr_email_outreach($1,$2)',[lead,'Person@example.com']),/permission denied/);
  await assert.rejects(db.query('select record_crr_email_opt_out($1)',[lead]),/permission denied/);
 }
 await db.close();
 console.log('PASS: fresh consent and recipient checks; missing/future purpose evidence; territory, service, test and manual-review holds; shared opt-out/complaint; atomic email cancellation; completed/SMS tasks preserved; suppression survives reimport; repeat stop; private RPC access');
})().catch(e=>{console.error(e);process.exitCode=1;});
