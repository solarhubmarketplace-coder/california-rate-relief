#!/usr/bin/env node

// Production smoke test for the email lifecycle. It can only send to the
// operator-controlled Gmail plus-address below and every database row is
// explicitly marked synthetic/test so it cannot enter reporting or journeys.

const { supabaseAdmin } = require('../src/lib/supabase');
const emailService = require('../src/services/email.service');
const { preparePromotionalMessage } = require('../src/services/email-preferences.service');

async function main() {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
  const email = `solarhubmarketplace+crr-lifecycle-${stamp}@gmail.com`;
  const subject = `[TEST] CRR email lifecycle ${stamp}`;

  if (!/^solarhubmarketplace\+crr-lifecycle-\d+@gmail\.com$/.test(email)) {
    throw new Error('Owner-only destination guard rejected the test address');
  }

  const { data: lead, error: leadError } = await supabaseAdmin
    .from('leads')
    .insert({
      name: '[TEST] CRR email lifecycle',
      phone: '+19515550199',
      email,
      source: 'synthetic_email_lifecycle',
      type: 'cold',
      status: 'new',
      consent_status: 'pending',
      project_type: 'residential',
      qualification_data: {
        is_test: true,
        purpose: 'email_lifecycle_round_trip',
        marketing_service_confirmed: false,
      },
      is_test: true,
      service_market: 'CA',
    })
    .select('id')
    .single();

  if (leadError || !lead) throw new Error(`Unable to create marked test lead: ${leadError?.message || 'missing row'}`);

  const { error: refreshError } = await supabaseAdmin.rpc('refresh_crr_email_identities');
  if (refreshError) throw new Error(`Unable to refresh email identity: ${refreshError.message}`);

  const html = `
    <div style="max-width:600px;margin:0 auto;padding:24px;font-family:Arial,sans-serif;color:#172033">
      <h1 style="font-size:24px;margin:0 0 16px">CRR email lifecycle test</h1>
      <p>This message is restricted to the owner-controlled test inbox.</p>
      <p>Please reply to test inbound handling, then use the unsubscribe link below to test the recipient-wide stop.</p>
      <p><a href="https://ratereliefca.com/" style="display:inline-block;background:#0f766e;color:#fff;padding:12px 18px;border-radius:6px;text-decoration:none">Open California Rate Relief</a></p>
    </div>`;
  const plain = 'CRR email lifecycle test. Reply to test inbound handling, then use the unsubscribe link below.';
  const prepared = await preparePromotionalMessage(lead.id, html, plain);

  const result = await emailService.sendEmail(email, subject, prepared.html, {
    leadId: lead.id,
    text: prepared.text,
    replyTo: prepared.replyTo,
    headers: prepared.headers,
    idempotencyKey: `crr-lifecycle-${stamp}`,
  });

  process.stdout.write(JSON.stringify({
    ok: true,
    leadId: lead.id,
    email,
    providerId: result.id,
    subject,
    replyTo: prepared.replyTo,
    unsubscribeUrl: prepared.headers['List-Unsubscribe'].slice(1, -1),
  }));
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
