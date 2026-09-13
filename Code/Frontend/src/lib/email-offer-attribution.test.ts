import test from 'node:test';
import assert from 'node:assert/strict';
import { emailOfferAttribution } from './email-offer-attribution.ts';

test('an email return visit is email-origin while retaining original acquisition separately', () => {
  const original = {source:'organic_google',acquisition_source:'google',acquisition_medium:'organic',organic_landing_page:'/blog/example',gclid:'old-click'};
  const result = emailOfferAttribution(original,'?utm_source=crr&utm_medium=email&utm_campaign=ca_bill_review&utm_content=plain_v1','123e4567-e89b-42d3-a456-426614174000');
  assert.equal(result.acquisition_medium,'email');
  assert.equal(result.source,'email');
  assert.equal(result.original_acquisition_medium,'organic');
  assert.equal(result.original_acquisition_source,'google');
  assert.equal(result.organic_landing_page,undefined);
  assert.equal(result.gclid,undefined);
  assert.equal(result.utm_campaign,'ca_bill_review');
  assert.equal(result.email_visit_id,'123e4567-e89b-42d3-a456-426614174000');
  assert.equal(original.acquisition_medium,'organic');
});
test('untagged visits retain observed attribution, and campaign tags reject contact-shaped values', () => {
  const original={source:'direct'};
  assert.equal(emailOfferAttribution(original,''),original);
  const result=emailOfferAttribution(original,'?utm_medium=email&utm_campaign=person@example.com');
  assert.equal(result.utm_campaign,undefined);
});
