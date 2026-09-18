// =============================================================================
// cta-intent — one place that decides WHICH ask a CRR page makes.
//
// Until now every CRR page made the same generic ask ("Request a Solar Review")
// regardless of why the visitor arrived. The pages that earn the clicks are not
// one audience: a "why is my PG&E bill so high" reader is bill-shocked, a
// "free solar for seniors" reader is looking for help paying, a
// "/solar-companies/<city>" reader already has a quote in hand, and a
// "solar PPA vs lease" reader is about to sign something. This module maps a
// pathname to that intent and holds the copy for each one, so the CTA box, the
// sticky mobile bar and the intake form all make the same ask on a given page
// and so `cta_variant` can be read back out of GA4.
//
// DRAFT COPY. Every user-visible string in CTA_COPY is listed in
// 01_Project_Documents/drafts/CTA_AND_FORM_COPY_REVIEW_DRAFT_2026-09-17.md and
// is not to be deployed before Chad's review.
//
// Claim discipline (standing rules): no price, savings, tax, approval, provider
// or eligibility claim, no "free", and nothing that reads as CRR installing,
// financing or partnering. CRR collects details and refers them onward; the
// provider decides what it can offer.
// =============================================================================

export type CtaVariant =
  | 'bill'
  | 'assistance'
  | 'review'
  | 'decision'
  | 'commercial'
  | 'default';

export interface CtaCopy {
  /** Heading on the link-only CTA box. */
  heading: string;
  /** Supporting sentence on the link-only CTA box. */
  body: string;
  /** Label on the link-only CTA button and the sticky mobile bar. */
  action: string;
  /** Shorter label for the sticky mobile bar, which has one line on a phone. */
  stickyAction: string;
  /** Heading above the two-step intake form. */
  formHeading: string;
  /** Supporting sentence above the two-step intake form. */
  formIntro: string;
  /** Submit label on the final step of the intake form. */
  submitLabel: string;
}

// Ordered most-specific first. A path is tested against each group in turn and
// takes the first group that matches, so the order below IS the precedence.
const MATCHERS: ReadonlyArray<readonly [CtaVariant, readonly string[]]> = [
  // Assistance/affordability intent. Highest precedence because these pages
  // also carry rate and bill words, and the ask here is the narrower one.
  ['assistance', [
    'free-', 'seniors', 'senior-', 'assistance', 'low-income', 'care-fera',
    'fera', 'rebate', 'incentive', 'grant', 'help-paying', 'cant-afford',
  ]],
  // The visitor is shopping installers, or already holds one quote.
  ['review', [
    'solar-companies', 'solar-installers', 'installer', 'best-solar',
    'solar-quotes', 'solar-quote',
  ]],
  // Bill and rate mechanics. The bill figure is also the qualification signal.
  ['bill', [
    'bill', 'rate-increase', 'rates', 'rate-', 'time-of-use', 'tou-',
    'net-metering', 'net-billing', 'nem-', 'nem2', 'nem3', 'fixed-charge',
    'true-up', 'kwh', 'solar-savings', 'utility',
  ]],
  // The visitor is weighing an offer or a contract and has not signed yet.
  ['decision', [
    'worth-it', '-vs-', 'vs-', 'should-i', 'scam', 'ppa', 'lease', 'financing',
    'stop-paying', 'contract', 'buyout', 'sign', 'pros-and-cons', 'is-solar',
  ]],
];

/**
 * Map a CRR pathname to the intent its visitors arrived with.
 *
 * Deliberately a pure string match on the path, not a per-page prop: the ~200
 * pages that carry the form are composed by shared templates
 * (DecisionPage/ArticleRoute/Guides) and adding a prop to each page would mean
 * touching every one of them. Pages that want to override still can, by passing
 * `variant` explicitly to the component.
 */
export function ctaVariantForPath(pathname?: string | null): CtaVariant {
  const path = (pathname || '').toLowerCase();
  if (!path) return 'default';
  for (const [variant, tokens] of MATCHERS) {
    if (tokens.some((token) => path.includes(token))) return variant;
  }
  return 'default';
}

export const CTA_COPY: Record<CtaVariant, CtaCopy> = {
  bill: {
    heading: 'Have your bill reviewed',
    body:
      'Send your utility and your current monthly bill to California Rate Relief. We are a private referral service: we pass your project details to a solar provider for follow-up, and the provider decides what it can offer after its own review.',
    action: 'Have my bill reviewed',
    stickyAction: 'Have my bill reviewed',
    formHeading: 'Have your bill reviewed',
    formIntro:
      'Start with the utility on your bill and what you pay in a typical month. Contact details come after that. The calculators and checklists on this page stay usable without submitting anything.',
    submitLabel: 'Send my bill details',
  },
  assistance: {
    heading: 'See what you may qualify for',
    body:
      'California Rate Relief does not run any assistance program and does not decide who qualifies for one. Send your project details and we pass them to a solar provider for follow-up.',
    action: 'See what I may qualify for',
    stickyAction: 'See what I may qualify for',
    formHeading: 'See what you may qualify for',
    formIntro:
      'Start with the utility on your bill and what you pay in a typical month. Contact details come after that. Submitting is a referral request; it is not an application and it does not decide eligibility for any program.',
    submitLabel: 'Send my details',
  },
  review: {
    heading: 'Get a competing quote',
    body:
      'Holding one quote with nothing to compare it against? California Rate Relief is a private referral service, not a contractor. Send your project details and we pass them to a solar provider for follow-up.',
    action: 'Ask for a competing quote',
    stickyAction: 'Ask for a competing quote',
    formHeading: 'Ask for a competing quote',
    formIntro:
      'Start with the utility on your bill and what you pay in a typical month. Contact details come after that. Submitting does not guarantee that a provider will quote your project.',
    submitLabel: 'Ask for a competing quote',
  },
  decision: {
    heading: 'Ask before you sign',
    body:
      'A solar contract is hard to undo. Send your project details to California Rate Relief before you commit. We are a private referral service, not a contractor: we pass your details to a solar provider for follow-up.',
    action: 'Ask before you sign',
    stickyAction: 'Ask before you sign',
    formHeading: 'Ask before you sign',
    formIntro:
      'Start with the utility on your bill and what you pay in a typical month. Contact details come after that. Nothing here reviews or approves a contract on its own.',
    submitLabel: 'Send my questions',
  },
  commercial: {
    // Preserves the wording the commercial pages already use today.
    heading: 'Ready to compare your solar options?',
    body:
      'California Rate Relief is a private referral service. You can request a no-obligation solar review; provider availability, design and price are determined after review.',
    action: 'Request Commercial Review',
    stickyAction: 'Request Commercial Review',
    formHeading: 'Request a commercial solar review',
    formIntro:
      'Send your property and billing details. California Rate Relief collects the information for a solar referral; the provider confirms availability, design and price.',
    submitLabel: 'Send my inquiry',
  },
  default: {
    // Preserves the wording that shipped on 15 September.
    heading: 'Ready to compare your solar options?',
    body:
      'California Rate Relief is a private referral service. You can request a no-obligation solar review; provider availability, design and price are determined after review.',
    action: 'Request a Solar Review',
    stickyAction: 'Request a solar review',
    formHeading: 'Want to discuss your solar options?',
    formIntro:
      'Start with the utility on your bill and what you pay in a typical month. Contact details come after that. California Rate Relief collects the information for a solar referral; the provider confirms availability, design and price.',
    submitLabel: 'Send my inquiry',
  },
};

export function ctaCopyFor(variant: CtaVariant): CtaCopy {
  return CTA_COPY[variant] || CTA_COPY.default;
}

/**
 * Roof-age bands for the qualification question. Bands, not a year, because a
 * homeowner rarely knows the install year and a band is enough to tell a
 * re-roof-first project from a ready one. "unsure" is a real answer and must
 * stay selectable, otherwise it is answered wrongly rather than not at all.
 */
export const ROOF_AGE_BANDS = [
  ['under_5', 'Less than 5 years'],
  ['5_10', '5 to 10 years'],
  ['11_20', '11 to 20 years'],
  ['over_20', 'More than 20 years'],
  ['unsure', 'Not sure'],
] as const;

export type RoofAgeBand = (typeof ROOF_AGE_BANDS)[number][0];

export function isRoofAgeBand(value: string): value is RoofAgeBand {
  return ROOF_AGE_BANDS.some(([id]) => id === value);
}
