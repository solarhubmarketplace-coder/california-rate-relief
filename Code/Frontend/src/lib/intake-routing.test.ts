import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  hasCommercialFormPath,
  hasResidentialFormPath,
  intakeHrefForPath,
  isCommercialIntentPath,
} from './intake-routing.ts';
import { GROWTH_ROUTES } from './growth-routes.ts';

test('commercial hubs, spokes, and commercial blog routes use the inline commercial form', () => {
  // Was '/commercial-assessment' for all of these. Since 2026-09-23 every
  // commercial content page renders the inline CommercialAssessmentForm with
  // sectionId "commercial-review", so the header button, the sticky bar and the
  // mid-page button scroll to the form the visitor is already on.
  assert.equal(intakeHrefForPath('/commercial-solar'), '#commercial-review');
  assert.equal(intakeHrefForPath('/commercial-solar/warehouse-solar-california'), '#commercial-review');
  assert.equal(intakeHrefForPath('/commercial-solar/companies-california'), '#commercial-review');
  assert.equal(intakeHrefForPath('/commercial-solar/cost-per-watt-california'), '#commercial-review');
  assert.equal(intakeHrefForPath('/commercial-solar/sgip-battery-storage'), '#commercial-review');
  assert.equal(intakeHrefForPath('/blog/commercial-solar-financing-california'), '#commercial-review');
  assert.equal(intakeHrefForPath('/blog/commercial-solar-installation-cost-california'), '#commercial-review');
  assert.equal(intakeHrefForPath('/blog/solar-carport-california-guide'), '#commercial-review');
  assert.equal(intakeHrefForPath('/blog/what-is-demand-charge-california'), '#commercial-review');
  // The standalone commercial form page is itself the destination.
  assert.equal(intakeHrefForPath('/commercial-assessment'), '/commercial-assessment');
  assert.equal(isCommercialIntentPath('/commercial-assessment'), true);
  assert.equal(hasCommercialFormPath('/commercial-assessment'), false);
  assert.equal(isCommercialIntentPath('/blog/pge-rate-increase-2026'), false);
});

test('residential pages that render SolarInquiry point at their own form', () => {
  // Was asserted as '/#qualify'. This page renders an on-page SolarInquiry and
  // earns 367 impressions, so sending its CTA to the homepage was sending the
  // visitor away from the form they were standing on. Registered as a growth
  // route on 15 September; a residential page that has its own intake must
  // point at it.
  assert.equal(intakeHrefForPath('/blog/pge-rate-increase-2026'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-cost/temecula'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-cost/fresno'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-companies/pleasanton'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-savings/riverside'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-savings/bay-area'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/blog/why-is-my-sdge-bill-so-high'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-installers/palmetto-solar-review'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-installers/sunrun-review'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-installers/sunrun-vs-tesla-solar'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/tools/solar-panel-calculator'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/best-solar-companies-california'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/solar-panels-california'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/maryland/bge-high-bill'), '#solar-inquiry');
  assert.equal(intakeHrefForPath('/utilities/pepco/solar-credits'), '#solar-inquiry');
  // The New Jersey commercial page keeps its form inside #solar-inquiry.
  assert.equal(intakeHrefForPath('/new-jersey/commercial-solar'), '#solar-inquiry');
});

test('pages that gained a residential form on 2026-09-23 point at it', () => {
  // Formerly link-only (84 pages had no form). Each now renders SolarInquiry.
  for (const path of [
    '/solar-problems',
    '/solar-problems/solar-dealer-fees-explained',
    '/solar-problems/true-up-bill-california-explained',
    '/battery',
    '/battery/tesla-powerwall-3-cost-california',
    '/blog',
    '/blog/hoa-solar-rights-california',
    '/blog/pge-time-of-use-rates-2026',
    '/solar-installers',
    '/solar-installers/freedom-forever-review',
    '/solar-installers/sunrun-buyout-cost',
    '/panel-reviews',
    '/solar-cost',
  ]) {
    assert.equal(intakeHrefForPath(path), '#solar-inquiry', path);
  }
  // Was '/#qualify': "The rate tracker is content-only". It now carries the
  // residential form near the end of the page.
  assert.equal(intakeHrefForPath('/california-utility-rate-tracker'), '#solar-inquiry');
});

test('pages without an on-page form fall back to the home page wizard', () => {
  for (const path of ['/', '/about', '/contact', '/privacy', '/terms', '/methodology', '/how-we-make-money', '/author/chad-simpson', '/email/bill-review', '']) {
    assert.equal(intakeHrefForPath(path), '/#qualify', path || '(empty)');
  }
  // A prefix is matched as a whole path segment, never as a string prefix.
  assert.equal(intakeHrefForPath('/blogger'), '/#qualify');
  assert.equal(intakeHrefForPath('/battery-storage'), '/#qualify');
  assert.equal(hasResidentialFormPath('/solar-costs'), false);
});

test('no residential growth route lost its on-page anchor', () => {
  // GROWTH_ROUTES used to be the client-side membership list. Every entry was
  // routed to '#solar-inquiry' unless commercial; the path rules must keep
  // that for every one of them.
  for (const route of GROWTH_ROUTES) {
    const expected = isCommercialIntentPath(route) ? '#commercial-review' : '#solar-inquiry';
    assert.equal(intakeHrefForPath(route), expected, route);
  }
});

test('every data-driven article routes to the form its cluster renders', () => {
  const clusters: Record<string, string> = {
    battery: '/battery',
    problems: '/solar-problems',
    installer: '/solar-installers',
    commercial: '/commercial-solar',
  };
  for (const [cluster, base] of Object.entries(clusters)) {
    const pages = JSON.parse(
      readFileSync(new URL(`../data/article-pages.${cluster}.json`, import.meta.url), 'utf8'),
    ) as { slug: string }[];
    assert.ok(pages.length > 0, cluster);
    for (const page of pages) {
      const path = `${base}/${page.slug}`;
      assert.equal(
        intakeHrefForPath(path),
        cluster === 'commercial' ? '#commercial-review' : '#solar-inquiry',
        path,
      );
    }
  }
});

test('the client routing module imports no data modules', () => {
  // Header, FloatingMobileCTA, IntentCTA, SavingsCalculator, SolarInquiry and
  // HeroQuickCheck all ship this module to the browser. An import of
  // growth-routes (or any data file) here puts the city datasets back into
  // every page's client JavaScript.
  const source = readFileSync(new URL('./intake-routing.ts', import.meta.url), 'utf8');
  const imports = source.match(/^\s*import\s.+$/gm) ?? [];
  assert.deepEqual(imports, []);
});
