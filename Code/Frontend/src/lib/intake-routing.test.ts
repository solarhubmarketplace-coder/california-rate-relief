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
  // Was asserted as '/#qualify'. This page renders an on-page SolarInquiry and
  // earns 367 impressions, so sending its CTA to the homepage was sending the
  // visitor away from the form they were standing on. Registered as a growth
  // route on 15 September; a residential page that has its own intake must
  // point at it.
  assert.equal(intakeHrefForPath('/blog/pge-rate-increase-2026'), '#solar-inquiry');
  // The homepage fallback still applies to residential pages with no on-page
  // intake of their own.
  assert.equal(intakeHrefForPath('/about'), '/#qualify');
  assert.equal(intakeHrefForPath('/solar-installers/palmetto-solar-review'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-installers/sunrun-review'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-installers/sunrun-vs-tesla-solar'), '#solar-inquiry');
});
