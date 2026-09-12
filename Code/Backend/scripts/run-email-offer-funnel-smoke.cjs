#!/usr/bin/env node

// Owner-only production acceptance for the email-offer funnel. The seed and
// intake rows are explicitly marked test and cannot enter organic reporting.

const { randomUUID } = require('node:crypto');
const { supabaseAdmin } = require('../src/lib/supabase');
const emailService = require('../src/services/email.service');
const { preparePromotionalMessage } = require('../src/services/email-preferences.service');

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
  const email = `solarhubmarketplace+crr-offer-${stamp}@gmail.com`;
  const subject = `[TEST] CRR offer funnel ${stamp}`;
  const submissionId = randomUUID();
  const offerUrl = 'https://ratereliefca.com/email/bill-review?utm_source=crr&utm_medium=email&utm_campaign=owner_funnel_smoke&utm_content=cta';

  if (!/^solarhubmarketplace\+crr-offer-\d+@gmail\.com$/.test(email)) {
    throw new Error('Owner-only destination guard rejected the test address');
  }

  const { data: seedLead, error: leadError } = await supabaseAdmin.from('leads').insert({
    name: '[TEST] CRR offer funnel', phone: '+12025550198', email,
    source: 'synthetic_email_offer', type: 'cold', status: 'new', consent_status: 'pending',
    project_type: 'residential', qualification_data: { is_test: true, purpose: 'email_offer_round_trip' },
    is_test: true, service_market: 'CA',
  }).select('id').single();
  if (leadError || !seedLead) throw new Error(`Unable to create marked seed lead: ${leadError?.message || 'missing row'}`);

  const { error: refreshError } = await supabaseAdmin.rpc('refresh_crr_email_identities');
  if (refreshError) throw new Error(`Unable to refresh email identity: ${refreshError.message}`);

  const prepared = await preparePromotionalMessage(seedLead.id,
    `<div style="max-width:600px;margin:0 auto;padding:24px;font-family:Arial,sans-serif;color:#172033"><h1 style="font-size:24px">CRR marked offer test</h1><p>This owner-only message verifies the bill-review path.</p><p><a href="${offerUrl}" style="display:inline-block;background:#0f766e;color:#fff;padding:12px 18px;border-radius:6px;text-decoration:none">Open the bill review</a></p></div>`,
    `CRR marked offer test. Open the bill review: ${offerUrl}`);
  const seed = await emailService.sendEmail(email, subject, prepared.html, {
    leadId: seedLead.id, text: prepared.text, replyTo: prepared.replyTo,
    headers: prepared.headers, idempotencyKey: `crr-offer-seed-${stamp}`,
  });

  const response = await fetch('https://api.ratereliefca.com/api/intake', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      submission_id: submissionId, segment: 'residential',
      contact: { name: '[TEST] CRR offer funnel', phone: '+12025550198', email },
      qualification_data: {
        homeowner: true, service_market: 'CA', service_zip: '92591',
        utility_provider: 'SCE', bill_amount: 250, credit_score: 'unsure',
        inquiry_topic: 'bill-review', inquiry_question: 'Owner-only marked acceptance test',
      },
      attribution: {
        source: 'email', acquisition_source: 'crr', acquisition_medium: 'email',
        original_acquisition_source: 'synthetic_email_offer', original_acquisition_medium: 'test',
        utm_source: 'crr', utm_medium: 'email', utm_campaign: 'owner_funnel_smoke', utm_content: 'cta',
        landing_page: '/email/bill-review', submitted_from: '/email/bill-review', captured_at: new Date().toISOString(),
      },
      consent: { status: 'opted_in', timestamp: new Date().toISOString() }, test: true,
    }),
  });
  const result = await response.json();
  if (response.status !== 201 || result?.data?.submission_id !== submissionId || result?.data?.duplicate) {
    throw new Error(`Marked intake failed: HTTP ${response.status} ${JSON.stringify(result)}`);
  }

  let outbox = null;
  for (let i = 0; i < 12; i += 1) {
    const { data, error } = await supabaseAdmin.from('owner_notification_outbox')
      .select('status,attempt_count,provider_message_id').eq('submission_id', submissionId).limit(1);
    if (error) throw new Error(`Unable to read owner outbox: ${error.message}`);
    outbox = data?.[0] || null;
    if (outbox?.provider_message_id && outbox.status === 'sent') break;
    await wait(5000);
  }

  process.stdout.write(JSON.stringify({
    ok: true, subject, recipient: email, seed_provider_id: seed.id,
    submission_id: submissionId, lead_id: result.data.lead_id,
    intake_http_status: response.status, intake_duplicate: result.data.duplicate,
    offer_path: '/email/bill-review', outbox,
  }));
}

main().catch(error => { process.stderr.write(`${error.message}\n`); process.exit(1); });

