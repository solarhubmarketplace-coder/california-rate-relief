import test from 'node:test';
import assert from 'node:assert/strict';
import { emailVisitPayload } from './email-funnel-payload.ts';

test('email visit payload keeps only bounded campaign labels and an opaque visit id', () => {
  const id = '123e4567-e89b-42d3-a456-426614174000';
  const payload = emailVisitPayload('bill-review', '?utm_medium=email&utm_campaign=ca_bill_review&utm_content=plain_v1', id, true, new Date('2026-09-13T00:00:00Z'));
  assert.deepEqual(payload, {
    visit_id: id, landing_path: '/email/bill-review', campaign_key: 'ca_bill_review',
    variant_key: 'plain_v1', client_time: '2026-09-13T00:00:00.000Z', test: true,
  });
  assert.equal(emailVisitPayload('bill-review', '?utm_medium=email&utm_campaign=person@example.com', id), null);
  assert.equal(emailVisitPayload('bill-review', '?utm_medium=email&utm_campaign=valid', id + '-secret'), null);
});
