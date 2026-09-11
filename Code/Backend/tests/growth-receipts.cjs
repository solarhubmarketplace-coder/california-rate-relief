// Regression scenarios for real SQL; historical timestamps and synthetic contacts only.
const { createGrowthDb, rpc } = require('./growth-db.cjs');
const assert = require('node:assert/strict');
const { randomUUID } = require('node:crypto');
module.exports = async function testReceiptMonths() {
  const db = await createGrowthDb();
  try {
    const staff = 'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d';
    for (const utm_medium of ['unrecognized','(not set)','unknown']) {
      const result = await db.query('select crr_acquisition_medium($1::jsonb) as medium',[JSON.stringify({source:'organic_google',utm_medium})]);
      assert.equal(result.rows[0].medium,'unknown');
    }
    async function submission(phone, receivedAt, attribution = { source: 'organic_google', landing_page: '/blog/original' }, isTest = false) {
      const result = await rpc(db, 'ingest_crr_submission', {
        p_submission_id: randomUUID(), p_segment: 'residential', p_name: 'Synthetic receipt fixture',
        p_phone: phone, p_qualification_data: { homeowner: false, credit_score: 'below_650' },
        p_attribution: attribution, p_consent_status: 'pending', p_is_test: isTest,
      });
      assert.equal(result.error, null);
      await db.query('update lead_submissions set received_at=$1 where submission_id=$2', [receivedAt, result.data.submission_id]);
      return result.data;
    }
    async function receipt(id, ref, at) {
      return db.query('insert into owner_receipt_evidence(submission_id,destination,evidence_reference,receipt_at,recorded_by) values ($1,$2,$3,$4,$5)', [id, 'solarhubmarketplace@gmail.com', ref, at, staff]);
    }
    async function report(from, to) {
      return (await db.query('select get_crr_growth_scorecard($1,$2) as data', [from, to])).rows[0].data;
    }
    const previous = await submission('+15555550901', '2026-08-31T23:00:00Z');
    const repeat = await submission('+15555550901', '2026-09-01T08:00:00Z');
    assert.equal(previous.lead_id, repeat.lead_id);
    await receipt(previous.submission_id, 'late-from-august', '2026-09-01T07:00:00Z');
    await receipt(repeat.submission_id, 'repeat-in-september', '2026-09-01T08:01:00Z');
    // A delayed receipt-only contact has no stored form in the report interval.
    const delayed = await submission('+15555550902', '2026-08-31T22:00:00Z');
    await receipt(delayed.submission_id, 'receipt-only-september', '2026-09-02T07:00:00Z');
    const boundary = await submission('+15555550903', '2026-08-31T22:00:00Z');
    await receipt(boundary.submission_id, 'pacific-august', '2026-09-01T06:59:59Z');
    const paid = await submission('+15555550904', '2026-08-31T22:00:00Z', {source:'organic_google',msclkid:'paid-click'});
    await receipt(paid.submission_id, 'paid-excluded', '2026-09-01T07:01:00Z');
    const test = await submission('+15555550905', '2026-08-31T22:00:00Z', {source:'organic_google'}, true);
    await receipt(test.submission_id, 'test-excluded', '2026-09-01T07:01:00Z');
    const spam = await submission('+15555550906', '2026-08-31T22:00:00Z');
    await db.query('update lead_submissions set is_spam=true where submission_id=$1', [spam.submission_id]);
    await receipt(spam.submission_id, 'spam-excluded', '2026-09-01T07:01:00Z');
    const unknown = await submission('+15555550907', '2026-08-31T22:00:00Z', {});
    await receipt(unknown.submission_id, 'unknown-excluded', '2026-09-01T07:01:00Z');
    let august = await report('2026-08-01T07:00:00Z','2026-09-01T07:00:00Z');
    assert.equal(august.months[0].receipt_confirmed, 1, 'September receipt must not leak into August');
    assert.equal(august.months[0].submission_cohort_receipt_confirmed, 1);
    assert.equal(august.months[0].unknown, 2);
    const september = await report('2026-09-01T07:00:00Z','2026-10-01T07:00:00Z');
    assert.equal(september.months[0].unique_organic_stored, 1);
    assert.equal(september.months[0].receipt_confirmed, 2, 'same contact deduplicates across submission months');
    assert.equal(september.landing_pages[0].receipt_confirmed, 2);
    const receiptOnly = await report('2026-09-02T07:00:00Z','2026-09-03T07:00:00Z');
    assert.equal(receiptOnly.months[0].unique_organic_stored, 0);
    assert.equal(receiptOnly.months[0].receipt_confirmed, 1);
    // Late evidence preserves receipt_at; recorded_at is deliberately not the KPI.
    assert.ok((await db.query('select recorded_at > receipt_at as later from owner_receipt_evidence limit 1')).rows[0].later);
    await assert.rejects(() => receipt(repeat.submission_id, 'late-from-august', '2026-09-01T08:01:00Z'), error => error.code === '23505');
    await assert.rejects(() => receipt(repeat.submission_id, ' late-from-august ', '2026-09-01T08:01:00Z'), error => error.code === '23505');
    await assert.rejects(() => receipt(previous.submission_id, 'pre-intake', '2026-08-01T00:00:00Z'), error => error.code === '23514');
    await assert.rejects(() => receipt(previous.submission_id, 'future', '2100-01-01T00:00:00Z'), error => error.code === '23514');
    await db.exec('SET ROLE service_role');
    assert.equal((await report('2026-09-01T07:00:00Z','2026-10-01T07:00:00Z')).months[0].receipt_confirmed, 2);
    await receipt(previous.submission_id, 'authorized-service-write', '2026-09-01T07:00:00Z');
    await assert.rejects(() => db.query("update owner_receipt_evidence set evidence_reference='changed'"), error => error.code === '42501');
    await assert.rejects(() => db.query('delete from owner_receipt_evidence'), error => error.code === '42501');
    await db.exec('RESET ROLE');
    for (const role of ['anon','authenticated']) {
      await db.exec(`SET ROLE ${role}`);
      await assert.rejects(() => receipt(previous.submission_id, 'unauthorized', '2026-09-01T07:00:00Z'), error => error.code === '42501');
      await db.exec('RESET ROLE');
    }
    console.log('PASS: receipt-month regression; delayed/late evidence, Pacific cutoff, receipt-only months, cross-month contact deduplication, no credit/homeowner gates, tests/spam/paid/unknown exclusions, global evidence uniqueness, valid receipt time, service-role-only append/read access.');
  } finally { await db.close(); }
};
