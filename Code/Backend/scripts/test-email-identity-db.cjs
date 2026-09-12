const {PGlite}=require('@electric-sql/pglite');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
(async()=>{
 const db=new PGlite();
 await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;
 create table public.leads(id uuid primary key default gen_random_uuid(),email text,phone text,source text,
 bill_amount integer,bill_amount_min integer,bill_amount_max integer,bill_amount_exact integer,bill_amount_is_exact boolean,
 credit_score text,qualification_data jsonb not null default '{}',consent_status text,email_status text);
 grant all on public.leads to service_role;
 insert into public.leads(email,phone,source,bill_amount,credit_score,consent_status) values
 ('SHARED@example.com','+1 555 555 0101','ecosun_solar_2024',201300,'680','pending'),
 ('shared@example.com','5555550102','ecosun_solar_2024',500,'680','opted_out'),
 ('different@example.com','5555550103','organic_google',250,'650','pending');`);
 await db.exec(fs.readFileSync(path.join(__dirname,'../supabase/migrations/20260912213707_email_identity_legacy_repair.sql'),'utf8'));
 const sha='7999a71ddc8c28f7e5345c0a9dbd2f562bd01fda46bb8eac9bdd63286eaa6f02';
 await db.query(`insert into public.legacy_contact_repair_stage values ($1,1,'5555550101','$201-300',201,300,'Other','680','CA'),($1,2,'5555550102','$500+',500,null,'Other','680','TX')`,[sha]);
 await assert.rejects(db.query('select apply_crr_legacy_repair($1,3)',[sha]),/count mismatch/);
 await db.exec('set role service_role');
 let r=await db.query('select apply_crr_legacy_repair($1,2) as result',[sha]);
 assert.equal(r.rows[0].result.updated_records,2);
 r=await db.query('select bill_amount,bill_amount_min,bill_amount_max,credit_score,consent_status from leads order by phone');
 assert.deepEqual(r.rows.map(x=>x.consent_status).sort(),['opted_out','pending','pending']);
 const repaired=await db.query("select * from leads where source='ecosun_solar_2024'");
 assert(repaired.rows.every(x=>x.bill_amount===null&&x.credit_score===null&&x.bill_amount_is_exact===false));
 assert.equal((await db.query('select count(*)::int n from email_identities')).rows[0].n,2);
 assert.equal((await db.query('select count(*)::int n from lead_email_identities')).rows[0].n,3);
 assert.equal((await db.query('select count(*)::int n from email_suppressions')).rows[0].n,1);
 assert.equal((await db.query('select count(*)::int n from email_permission_events')).rows[0].n,0);
 assert.equal((await db.query('select apply_crr_legacy_repair($1,2) as r',[sha])).rows[0].r.updated_records,0);
 assert.equal((await db.query('select count(*)::int n from legacy_contact_repair_audit')).rows[0].n,2);
 assert.equal((await db.query("select bill_amount from leads where source='organic_google'")).rows[0].bill_amount,250);
 for(const role of ['anon','authenticated']){
  await db.exec(`reset role;set role ${role}`);
  await assert.rejects(db.query('select * from email_identities'),/permission denied/);
  await assert.rejects(db.query('select apply_crr_legacy_repair($1,2)',[sha]),/permission denied/);
 }
 await db.exec('reset role;set role service_role');
 await assert.rejects(db.query('delete from legacy_contact_repair_audit'),/permission denied/);
 await db.exec("reset role;update leads set phone='5555550101' where phone='5555550102'");
 await assert.rejects(db.query('select apply_crr_legacy_repair($1,2)',[sha]),/identity mismatch/);
 await db.close();console.log('PASS: repair bounds, source isolation, permission preservation, shared identity, suppression, idempotence, audit immutability, access denial, duplicate-phone rejection');
})().catch(e=>{console.error(e);process.exitCode=1});
