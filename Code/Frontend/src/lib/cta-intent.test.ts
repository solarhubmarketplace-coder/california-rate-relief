import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import test from 'node:test';
import {
  CTA_COPY,
  HOME_WIZARD_COPY,
  INQUIRY_RECEIVED_COPY,
  INQUIRY_RECEIVED_GUIDES,
  QUICK_CHECK_COPY,
  ROOF_AGE_BANDS,
  ctaCopyFor,
  ctaVariantForPath,
  isRoofAgeBand,
} from './cta-intent.ts';

test('bill-shock pages ask for a bill review', () => {
  assert.equal(ctaVariantForPath('/blog/why-is-my-pge-bill-so-high'), 'bill');
  assert.equal(ctaVariantForPath('/blog/sce-rate-increase-2026'), 'bill');
  assert.equal(ctaVariantForPath('/blog/net-billing-vs-net-metering-california'), 'bill');
  assert.equal(ctaVariantForPath('/solar-savings/fresno'), 'bill');
});

test('assistance intent outranks the bill words on the same page', () => {
  assert.equal(ctaVariantForPath('/blog/free-solar-for-seniors'), 'assistance');
  assert.equal(ctaVariantForPath('/blog/solar-rebates-by-california-utility'), 'assistance');
});

test('installer pages ask for a competing quote', () => {
  assert.equal(ctaVariantForPath('/solar-companies/ventura'), 'review');
  assert.equal(ctaVariantForPath('/best-solar-companies-california'), 'review');
});

test('contract pages ask before signing', () => {
  assert.equal(ctaVariantForPath('/blog/solar-ppa-vs-lease-california'), 'decision');
  assert.equal(ctaVariantForPath('/blog/are-solar-panels-a-scam'), 'decision');
  assert.equal(ctaVariantForPath('/blog/what-happens-if-stop-paying-solar-lease-california'), 'decision');
});

test('anything unmatched keeps the shipped generic ask', () => {
  assert.equal(ctaVariantForPath('/blog/solar-panel-bird-proofing'), 'default');
  assert.equal(ctaVariantForPath(''), 'default');
  assert.equal(ctaVariantForPath(null), 'default');
  assert.equal(ctaCopyFor('default').action, CTA_COPY.default.action);
});

// Standing rules: no "free", no price or savings figure, no tax claim, and
// never a sentence that reads as CRR installing or partnering with anyone.
const banned = /\bfree\b|\bsave \$|\btax credit\b|our installers|we install|our partner|\bwe guarantee\b/i;
// An outcome word is allowed only where the same sentence hedges or negates
// it: "does not guarantee", "may qualify", "does not decide eligibility".
const outcome = /guarantee|approv|qualif|eligib/i;
const hedged = /\b(not|nothing|never|cannot|no|may)\b/i;
// Timing promises ("within 24 hours", "today", "fast") have no source in the
// site's own copy, so none of the form copy may make one.
const timing = /\bwithin \d|\bhours?\b|\btoday\b|\bfast\b|\bquickly\b|\bimmediately\b/i;

function assertClaimDiscipline(name: string, copy: Record<string, string>) {
  for (const [key, value] of Object.entries(copy)) {
    assert.ok(value.trim().length > 0, `${name}.${key} is empty`);
    assert.ok(!banned.test(value), `${name}.${key} carries a banned claim class`);
    assert.ok(!timing.test(value), `${name}.${key} makes a timing promise`);
    for (const sentence of value.split(/(?<=[.?!])\s+/)) {
      if (!outcome.test(sentence)) continue;
      assert.ok(hedged.test(sentence), `${name}.${key} states an unhedged outcome: ${sentence}`);
    }
  }
}

test('every variant carries a full copy set and no banned claim class', () => {
  for (const [variant, copy] of Object.entries(CTA_COPY)) {
    assertClaimDiscipline(variant, copy as unknown as Record<string, string>);
  }
});

test('quick check, wizard and success-panel copy follow the same claim rules', () => {
  assertClaimDiscipline('QUICK_CHECK_COPY', QUICK_CHECK_COPY);
  assertClaimDiscipline('HOME_WIZARD_COPY', HOME_WIZARD_COPY);
  assertClaimDiscipline('INQUIRY_RECEIVED_COPY', INQUIRY_RECEIVED_COPY);
  // The old wizard button implied an eligibility decision the form never makes.
  assert.doesNotMatch(HOME_WIZARD_COPY.submitLabel, /eligib/i);
  // The success panel must say there is no obligation and never call CRR a
  // contractor or installer.
  assert.match(INQUIRY_RECEIVED_COPY.noObligation, /no obligation/);
  for (const value of Object.values(INQUIRY_RECEIVED_COPY)) {
    assert.doesNotMatch(value, /\b(we|our) (install|contractor)/i);
  }
});

test('success panel links to two on-site guides that exist as pages', () => {
  assert.equal(INQUIRY_RECEIVED_GUIDES.length, 2);
  for (const guide of INQUIRY_RECEIVED_GUIDES) {
    assert.match(guide.href, /^\/blog\/[a-z0-9-]+$/);
    assertClaimDiscipline(guide.href, { label: guide.label });
    const page = new URL(`../app${guide.href}/page.tsx`, import.meta.url);
    assert.ok(existsSync(page), `${guide.href} has no page.tsx`);
  }
});

test('roof-age bands round-trip and keep an explicit unsure answer', () => {
  assert.equal(ROOF_AGE_BANDS.length, 5);
  assert.ok(isRoofAgeBand('unsure'));
  assert.ok(isRoofAgeBand('11_20'));
  assert.equal(isRoofAgeBand('42_years'), false);
});
