import assert from 'node:assert/strict';
import test from 'node:test';
import {
  QUICK_START_SOURCE,
  QUICK_START_TTL_MS,
  billBracketParam,
  calculatorContextWithQuickCheck,
  formatBill,
  parseBill,
  parseQuickStart,
  quickCheckTargetForm,
  quickStartFromSearch,
  quickStartHref,
  resolveQuickCheckHandoff,
  sanitizeBillInput,
  utilityCodeFor,
  utilityLabelFor,
  validateQuickCheck,
  withoutQuickStartParams,
  wizardUtilityFor,
  type QuickStart,
} from './quick-start.ts';

const NOW = 1_790_000_000_000;
const sample = (over: Partial<QuickStart> = {}): QuickStart => ({
  source: QUICK_START_SOURCE,
  targetId: 'solar-inquiry',
  utility: 'pge',
  utilityOther: '',
  billChoice: '250_349',
  topic: 'PG&E bill review',
  fromPath: '/blog/why-is-my-pge-bill-so-high',
  issuedAt: NOW,
  ...over,
});

test('bill input keeps digits and one decimal point', () => {
  assert.equal(sanitizeBillInput('$1,250.505'), '1250.50');
  assert.equal(sanitizeBillInput('250'), '250');
  assert.equal(sanitizeBillInput('0250'), '250');
  assert.equal(sanitizeBillInput('0.5'), '0.5');
  assert.equal(sanitizeBillInput('12.3.4'), '12.34');
  assert.equal(sanitizeBillInput('abc'), '');
});

test('a usable bill is positive and within the form ceiling', () => {
  assert.equal(parseBill('250'), 250);
  assert.equal(parseBill('$182.50'), 182.5);
  assert.equal(parseBill(''), null);
  assert.equal(parseBill('0'), null);
  assert.equal(parseBill('.'), null);
  assert.equal(parseBill('100001'), null);
  assert.equal(formatBill(250), '$250');
  assert.equal(formatBill('182.5'), '$182.50');
  assert.equal(formatBill(1200), '$1,200');
});

test('pages may pass a utility code, a label or a full name', () => {
  assert.equal(utilityCodeFor('pge'), 'pge');
  assert.equal(utilityCodeFor('PG&E'), 'pge');
  assert.equal(utilityCodeFor('SDG&E'), 'sdge');
  assert.equal(utilityCodeFor('Southern California Edison'), 'sce');
  assert.equal(utilityCodeFor('Imperial Irrigation District'), '');
  assert.equal(utilityCodeFor(''), '');
  assert.equal(utilityLabelFor('sdge'), 'SDG&E');
  assert.equal(utilityLabelFor('other', 'Anaheim Public Utilities'), 'Anaheim Public Utilities');
  assert.equal(utilityLabelFor('other'), 'Other / not sure');
});

test('the quick check needs a utility and a bill band; the other-name is optional', () => {
  assert.deepEqual(validateQuickCheck({ utility: '', billChoice: null }), {
    ok: false,
    invalid: ['utility', 'bill'],
  });
  assert.deepEqual(validateQuickCheck({ utility: 'pge', billChoice: 'under_250' }), { ok: false, invalid: ['bill'] });
  assert.deepEqual(validateQuickCheck({ utility: 'pge', billChoice: '300' }), { ok: false, invalid: ['bill'] });
  assert.deepEqual(validateQuickCheck({ utility: 'other', utilityOther: '', billChoice: '350_499' }), {
    ok: true,
    utility: 'other',
    utilityOther: '',
    billChoice: '350_499',
  });
  // A name typed before switching away from "other" is not carried.
  assert.deepEqual(validateQuickCheck({ utility: 'sce', utilityOther: 'stale', billChoice: '500_plus' }), {
    ok: true,
    utility: 'sce',
    utilityOther: '',
    billChoice: '500_plus',
  });
});

test('the stored calculator context is complete, so no calculator input goes uncontrolled', () => {
  const merged = calculatorContextWithQuickCheck(null, { utility: 'sce' });
  assert.deepEqual(merged, {
    zip: '',
    annualKwh: '',
    systemKw: '',
    solarPrice: '',
    batteryPrice: '',
    annualBillAfter: '',
    utility: 'sce',
    monthlyBill: '',
  });
  const kept = calculatorContextWithQuickCheck(
    { utility: 'pge', zip: '93701', monthlyBill: '100', solarPrice: '25000' },
    { utility: 'sce' },
  );
  assert.equal(kept.zip, '93701');
  assert.equal(kept.solarPrice, '25000');
  assert.equal(kept.utility, 'sce');
  // The quick check never writes a bill figure; a calculator's own entry stays.
  assert.equal(kept.monthlyBill, '100');
});

test('the analytics bill label is the band id or under_250', () => {
  assert.equal(billBracketParam('350_499'), '350_499');
  assert.equal(billBracketParam('under_250'), 'under_250');
  assert.equal(billBracketParam(null), 'none');
});

test('wizard utility answers match what a visitor would click and type', () => {
  assert.deepEqual(wizardUtilityFor({ utility: 'pge', utilityOther: '' }), {
    utilityProvider: 'pge',
    utilityProviderOther: '',
  });
  assert.deepEqual(wizardUtilityFor({ utility: 'smud', utilityOther: '' }), {
    utilityProvider: 'other',
    utilityProviderOther: 'SMUD',
  });
  assert.deepEqual(wizardUtilityFor({ utility: 'other', utilityOther: ' Anaheim ' }), {
    utilityProvider: 'other',
    utilityProviderOther: 'Anaheim',
  });
});

test('handoff scrolls when the form is on the page, otherwise follows intake routing', () => {
  const none = () => false;
  const only = (id: string) => (candidate: string) => candidate === id;
  assert.deepEqual(resolveQuickCheckHandoff('/blog/why-is-my-pge-bill-so-high', 'solar-inquiry', only('solar-inquiry')), {
    mode: 'scroll',
    targetId: 'solar-inquiry',
  });
  // Home page: the default target is missing, the routing anchor is present.
  assert.deepEqual(resolveQuickCheckHandoff('/', 'solar-inquiry', only('qualify')), {
    mode: 'scroll',
    targetId: 'qualify',
  });
  // A page with no form goes to the home page wizard.
  assert.deepEqual(resolveQuickCheckHandoff('/about', 'solar-inquiry', none), {
    mode: 'navigate',
    href: '/#qualify',
    targetId: 'qualify',
  });
  // A growth route whose form is missing never lands on a dead anchor.
  assert.deepEqual(resolveQuickCheckHandoff('/blog/pge-rate-increase-2026', 'solar-inquiry', none), {
    mode: 'navigate',
    href: '/#qualify',
    targetId: 'qualify',
  });
  // A commercial page whose inline form (#commercial-review) is missing falls
  // back to the standalone commercial form, never to the home page wizard.
  const commercial = resolveQuickCheckHandoff('/commercial-solar/cost-per-watt-california', 'solar-inquiry', none);
  assert.deepEqual(commercial, { mode: 'navigate', href: '/commercial-assessment', targetId: '' });
  assert.equal(quickCheckTargetForm(commercial), 'commercial_assessment');
  // With the inline form on the page the handoff scrolls to it.
  const inline = resolveQuickCheckHandoff('/commercial-solar/cost-per-watt-california', 'solar-inquiry', only('commercial-review'));
  assert.deepEqual(inline, { mode: 'scroll', targetId: 'commercial-review' });
  assert.equal(quickCheckTargetForm(inline), 'commercial_assessment');
  // A page that gained a residential form on 2026-09-23 scrolls to it.
  assert.deepEqual(resolveQuickCheckHandoff('/solar-problems/solar-dealer-fees-explained', 'solar-inquiry', only('solar-inquiry')), {
    mode: 'scroll',
    targetId: 'solar-inquiry',
  });
  assert.equal(quickCheckTargetForm({ mode: 'scroll', targetId: 'qualify' }), 'qualification_wizard');
  assert.equal(quickCheckTargetForm({ mode: 'scroll', targetId: 'solar-inquiry' }), 'solar_inquiry');
});

test('a stored handoff is used once and only while fresh', () => {
  assert.deepEqual(parseQuickStart(sample(), NOW + 1000), sample());
  assert.equal(parseQuickStart(sample(), NOW + QUICK_START_TTL_MS + 1), null);
  assert.equal(parseQuickStart({ ...sample(), source: 'other' }, NOW), null);
  assert.equal(parseQuickStart({ ...sample(), utility: 'nope' }, NOW), null);
  assert.equal(parseQuickStart({ ...sample(), billChoice: 'bogus' }, NOW), null);
  assert.equal(parseQuickStart(null, NOW), null);
  // utilityOther only survives with utility 'other'.
  assert.equal(parseQuickStart(sample({ utilityOther: 'x' }), NOW)?.utilityOther, '');
});

test('the URL fallback round-trips and cleans up after itself', () => {
  const value = sample({ targetId: 'qualify', utility: 'other', utilityOther: 'Anaheim Public Utilities' });
  const href = quickStartHref('/#qualify', value);
  assert.match(href, /^\/\?qc_target=qualify&qc_utility=other&qc_band=250_349&qc_other=Anaheim\+Public\+Utilities#qualify$/);
  const search = href.slice(href.indexOf('?'), href.indexOf('#'));
  const parsed = quickStartFromSearch(search, 'qualify', NOW);
  assert.equal(parsed?.utility, 'other');
  assert.equal(parsed?.utilityOther, 'Anaheim Public Utilities');
  assert.equal(parsed?.billChoice, '250_349');
  assert.equal(quickStartFromSearch(search, 'solar-inquiry', NOW), null);
  assert.equal(withoutQuickStartParams(search), '');
  assert.equal(withoutQuickStartParams(`${search}&utm_source=x`), '?utm_source=x');
});

test('a handoff made before the bill buttons maps its typed bill onto a band', () => {
  const legacy = { ...sample(), billChoice: undefined, monthlyBill: '300' };
  assert.equal(parseQuickStart(legacy, NOW)?.billChoice, '250_349');
  assert.equal(parseQuickStart({ ...legacy, monthlyBill: '600' }, NOW)?.billChoice, '500_plus');
  // Under $250 (or unusable): still a valid handoff, but the form asks the bill again.
  const under = parseQuickStart({ ...legacy, monthlyBill: '150' }, NOW);
  assert.ok(under);
  assert.equal(under?.billChoice, null);
  assert.equal(parseQuickStart({ ...legacy, monthlyBill: 'abc' }, NOW)?.billChoice, null);
});

test('an old qc_bill link still opens the form with a band', () => {
  assert.equal(quickStartFromSearch('?qc_target=qualify&qc_utility=pge&qc_bill=420', 'qualify', NOW)?.billChoice, '350_499');
  assert.equal(quickStartFromSearch('?qc_target=qualify&qc_utility=pge&qc_bill=120', 'qualify', NOW)?.billChoice, null);
  assert.equal(quickStartFromSearch('?qc_target=qualify&qc_utility=pge&qc_band=500_plus', 'qualify', NOW)?.billChoice, '500_plus');
  assert.equal(withoutQuickStartParams('?qc_band=500_plus&qc_bill=1&x=1'), '?x=1');
});
