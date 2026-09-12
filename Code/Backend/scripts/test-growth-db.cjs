const { createGrowthDb, rpc } = require('../tests/growth-db.cjs');
const assert = require('node:assert/strict');
const { randomUUID } = require('node:crypto');
(async () => {
  const db = await createGrowthDb();
  // Supabase can grant service_role every table privilege through defaults.
  // Prove the fixture has that behavior, then prove migration 009 narrows its
  // receipt table back to append/read access.
  await db.exec('CREATE TABLE public.receipt_default_grant_probe(id integer)');
  const tablePrivileges = [
    'SELECT',
    'INSERT',
    'UPDATE',
    'DELETE',
    'TRUNCATE',
    'REFERENCES',
    'TRIGGER',
  ];
  for (const privilege of tablePrivileges) {
    const inherited = await db.query(
      "select has_table_privilege('service_role','public.receipt_default_grant_probe',$1) as allowed",
      [privilege],
    );
    assert.equal(
      inherited.rows[0].allowed,
      true,
      `fixture must simulate service_role default ${privilege}`,
    );
    const receipt = await db.query(
      "select has_table_privilege('service_role','public.owner_receipt_evidence',$1) as allowed",
      [privilege],
    );
    assert.equal(
      receipt.rows[0].allowed,
      privilege === 'SELECT' || privilege === 'INSERT',
      `migration 009 service_role ${privilege}`,
    );
  }
  await db.exec('DROP TABLE public.receipt_default_grant_probe');
  const input = {
    p_submission_id: randomUUID(),
    p_segment: 'residential',
    p_name: 'Local synthetic',
    p_phone: '+15555550101',
    p_email: 'test@example.invalid',
    p_address: null,
    p_qualification_data: {
      homeowner: true,
      utility_provider: 'SMUD',
      credit_score: 'below_650',
      bill_amount: 240,
      service_zip: '95814',
      service_market: 'CA',
      calculator_version: 'quote-input-v2',
    },
    p_attribution: {
      source: 'organic_google',
      acquisition_source: 'google',
      acquisition_medium: 'organic',
      organic_landing_page: '/blog/example',
      landing_page: '/blog/example',
      submitted_from: '/tools/solar-panel-calculator',
      captured_at: '2026-09-10T21:00:00Z',
    },
    p_consent_status: 'pending',
    p_consent_timestamp: null,
    p_is_test: false,
  };
  const first = await rpc(db, 'ingest_crr_submission', input);
  assert.equal(first.error, null);
  assert.ok(first.data.lead_id);
  const replay = await rpc(db, 'ingest_crr_submission', input);
  assert.equal(replay.data.replayed, true);
  assert.equal(replay.data.lead_id, first.data.lead_id);
  const mismatch = await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_name: 'Changed',
  });
  assert.equal(mismatch.error.code, '23505');
  assert.equal(
    (await db.query('select count(*)::int n from owner_notification_outbox'))
      .rows[0].n,
    1,
  );
  const saved = (
    await db.query(
      'select attribution,qualification_data from lead_submissions',
    )
  ).rows[0];
  assert.deepEqual(saved.attribution, input.p_attribution);
  assert.equal(saved.qualification_data.service_zip, '95814');
  const savedLead = (await db.query('select zip,service_market,territory_resolution from leads where id=$1', [first.data.lead_id])).rows[0];
  assert.deepEqual(savedLead, { zip: '95814', service_market: 'CA', territory_resolution: 'visitor_selected_zip_validated' });
  // Distinct IDs for the same contact count once per Pacific calendar month.
  await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_submission_id: randomUUID(),
  });
  await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_submission_id: randomUUID(),
    p_phone: '+15555550102',
    p_is_test: true,
  });
  const spam = await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_submission_id: randomUUID(),
    p_phone: '+15555550103',
  });
  await db.query(
    'update lead_submissions set is_spam=true where submission_id=$1',
    [spam.data.submission_id],
  );
  const unknown = await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_submission_id: randomUUID(),
    p_phone: '+15555550104',
    p_attribution: {},
  });
  assert.equal(unknown.error, null);
  await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_submission_id: randomUUID(),
    p_phone: '+15555550105',
    p_attribution: { ...input.p_attribution, gclid: 'paid-click' },
  });
  await db.exec(
    "update lead_submissions set received_at='2026-09-10T22:00:00Z'",
  );
  async function report() {
    return (
      await db.query(
        "select get_crr_growth_scorecard('2026-09-01T07:00:00Z','2026-10-01T07:00:00Z') as data",
      )
    ).rows[0].data;
  }
  let r = await report();
  assert.equal(r.stored_submissions, 6);
  assert.equal(r.excluded_tests, 1);
  assert.equal(r.excluded_spam, 1);
  assert.equal(r.unknown_origin, 1);
  assert.equal(r.non_organic, 1);
  assert.equal(r.months[0].unique_organic_stored, 1);
  assert.equal(r.months[0].repeated_contact_submissions, 1);
  assert.equal(r.months[0].unknown, 1);
  assert.equal(r.months[0].receipt_confirmed, 0);
  await db.query(
    "update owner_notification_outbox set status='sent',provider_message_id='synthetic-message' where submission_id=$1",
    [first.data.submission_id],
  );
  r = await report();
  assert.equal(r.months[0].owner_notification_accepted, 1);
  assert.equal(r.months[0].receipt_confirmed, 0);
  // A homeowner email with the same lead is not evidence of an owner receipt.
  await db.query(
    "insert into email_logs(lead_id,email_to,resend_email_id,delivery_state) values($1,'test@example.invalid','synthetic-message','delivered')",
    [first.data.lead_id],
  );
  r = await report();
  assert.equal(r.months[0].provider_delivery_confirmed, 0);
  await db.query(
    "insert into email_logs(lead_id,email_to,resend_email_id,delivery_state) values($1,'solarhubmarketplace@gmail.com','synthetic-message','delivered')",
    [first.data.lead_id],
  );
  r = await report();
  assert.equal(r.months[0].provider_delivery_confirmed, 1);
  assert.equal(r.months[0].receipt_confirmed, 0);
  assert.equal(r.months[0].unknown, 1, 'provider delivery must not erase unknown inbox receipt');
  await db.query(
    "insert into owner_receipt_evidence(submission_id,destination,evidence_reference,receipt_at,recorded_by) values($1,'solarhubmarketplace@gmail.com','local-fixture-inbox-id','2026-09-10T22:01:00Z','dac3b467-55d5-4f83-b7b4-9bb0fb5f773d')",
    [first.data.submission_id],
  );
  r = await report();
  assert.equal(r.months[0].receipt_confirmed, 1);
  // Retry failures, provider acceptance ambiguities and receipt confirmation
  // remain different states even when contact deduplication is applied.
  const failed = await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_submission_id: randomUUID(),
    p_phone: '+15555550106',
  });
  const ambiguous = await rpc(db, 'ingest_crr_submission', {
    ...input,
    p_submission_id: randomUUID(),
    p_phone: '+15555550107',
  });
  await db.query(
    "update lead_submissions set received_at='2026-09-10T22:00:00Z' where submission_id=any($1::uuid[])",
    [[failed.data.submission_id, ambiguous.data.submission_id]],
  );
  await db.query(
    "update owner_notification_outbox set status='failed' where submission_id=$1",
    [failed.data.submission_id],
  );
  await db.query(
    "update owner_notification_outbox set status='ambiguous' where submission_id=$1",
    [ambiguous.data.submission_id],
  );
  await db.query(
    "insert into leads(name,phone,created_at) values('Local historical fixture','+15555550108','2026-09-08T22:00:00Z')",
  );
  r = await report();
  assert.equal(r.legacy_leads_without_submission, 1);
  assert.equal(r.months[0].unique_organic_stored, 3);
  assert.equal(r.months[0].failed, 1);
  assert.equal(r.months[0].unknown, 2);
  assert.equal(r.months[0].receipt_confirmed, 1);
  for (const a of [
    { gbraid: 'paid' },
    { wbraid: 'paid' },
    { msclkid: 'paid' },
    { utm_source: 'facebook', utm_medium: 'organic' },
    { utm_medium: 'organic' },
  ]) {
    const medium = (
      await db.query('select crr_acquisition_medium($1::jsonb) as medium', [
        JSON.stringify({ ...input.p_attribution, ...a }),
      ])
    ).rows[0].medium;
    assert.notEqual(medium, 'organic');
  }
  const duplicateEvidence =
    "insert into owner_receipt_evidence(submission_id,destination,evidence_reference,receipt_at,recorded_by) values($1,'solarhubmarketplace@gmail.com','local-fixture-inbox-id','2026-09-10T22:01:00Z','dac3b467-55d5-4f83-b7b4-9bb0fb5f773d')";
  await assert.rejects(() =>
    db.query(duplicateEvidence, [first.data.submission_id]),
  );
  // Midnight UTC still belongs to the preceding Pacific calendar month.
  await db.query(
    "update lead_submissions set received_at='2026-09-01T06:59:59Z' where submission_id=$1",
    [first.data.submission_id],
  );
  const both = (
    await db.query(
      "select get_crr_growth_scorecard('2026-08-01T07:00:00Z','2026-10-01T07:00:00Z') as data",
    )
  ).rows[0].data;
  assert.equal(both.months.length, 2);
  assert.equal(both.months[0].calendar_month, '2026-08-01');
  await db.exec('SET ROLE anon');
  await assert.rejects(() =>
    db.query("select get_crr_growth_scorecard(now()-interval '1 day',now())"),
  );
  await db.exec('RESET ROLE');
  await db.exec('SET ROLE authenticated');
  await assert.rejects(() => db.query('select * from owner_receipt_evidence'));
  await assert.rejects(() =>
    db.query("select get_crr_growth_scorecard(now()-interval '1 day',now())"),
  );
  await db.exec('RESET ROLE');
  console.log(
    'PASS: actual migrations 006/008/009/010; simulated service_role default table grants narrowed to receipt SELECT/INSERT (UPDATE/DELETE/TRUNCATE/REFERENCES/TRIGGER denied); storage, replay, market capture, mismatch, attribution/context, test/spam/paid/unknown exclusions, monthly deduplication, owner-specific provider delivery, distinct inbox receipt, Pacific boundaries, anonymous access denied.',
  );
  await db.close();
  await require('../tests/growth-receipts.cjs')();
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
