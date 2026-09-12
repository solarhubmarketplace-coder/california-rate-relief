// Isolated HTTP regression: fake credentials, loopback DB, no scheduler startup.
const assert=require('node:assert/strict');
Object.assign(process.env, {
 SUPABASE_URL:'http://127.0.0.1:9',SUPABASE_SERVICE_ROLE_KEY:'test-only',
 OPENAI_API_KEY:'test-only',RESEND_API_KEY:'re_test_only',
 TWILIO_ACCOUNT_SID:'AC00000000000000000000000000000000',TWILIO_AUTH_TOKEN:'test-only',
});
const app=require('../src/app');
(async()=>{
 const server=app.listen(0,'127.0.0.1');
 await new Promise(resolve=>server.once('listening',resolve));
 try {
  const base=`http://127.0.0.1:${server.address().port}`;
  for(const route of ['/api/track/synthetic-private-token','/api/leads/convert/00000000-0000-4000-8000-000000000019']) {
   const response=await fetch(base+route,{redirect:'manual'});
   assert.equal(response.status,303);
   assert.equal(response.headers.get('location'),'https://ratereliefca.com/?utm_source=crr&utm_medium=email&utm_campaign=legacy_link_review');
   assert.equal(response.headers.get('referrer-policy'),'no-referrer');
  }
  assert.equal((await fetch(base+'/api/leads')).status,401);
  console.log('PASS: real Express routing exposes only clean legacy GET redirects; private leads remain protected');
 } finally { await new Promise(resolve=>server.close(resolve)); }
})().catch(e=>{console.error(e);process.exitCode=1});
