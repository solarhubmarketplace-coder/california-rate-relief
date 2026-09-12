import test from 'node:test';
import assert from 'node:assert/strict';
import { intakeHrefForPath, isCommercialIntentPath } from './intake-routing.ts';

test('commercial hubs, spokes, and commercial blog routes use commercial intake', () => {
  assert.equal(intakeHrefForPath('/commercial-solar'), '/commercial-assessment');
  assert.equal(intakeHrefForPath('/commercial-solar/warehouse-solar-california'), '/commercial-assessment');
  assert.equal(intakeHrefForPath('/commercial-solar/companies-california'), '/commercial-assessment');
  assert.equal(intakeHrefForPath('/commercial-solar/cost-per-watt-california'), '/commercial-assessment');
  assert.equal(intakeHrefForPath('/blog/commercial-solar-financing-california'), '/commercial-assessment');
  assert.equal(intakeHrefForPath('/blog/solar-carport-california-guide'), '/commercial-assessment');
  assert.equal(isCommercialIntentPath('/blog/pge-rate-increase-2026'), false);
  assert.equal(intakeHrefForPath('/blog/pge-rate-increase-2026'), '/#qualify');
});
