export const GLP1_PRICING_CAPTURE_DATE = '2026-08-31';
export const GLP1_PRICING_CAPTURE_LABEL = 'August 31, 2026';

export type PublicPriceStatus = 'published' | 'not-clearly-published';

export interface GLP1ProviderPriceRecord {
  provider: string;
  slug: string;
  publicPriceStatus: PublicPriceStatus;
  headlinePrice: string;
  priceLines: readonly string[];
  included: readonly string[];
  caveat: string;
  sourceUrl: string;
  sourceLabel: string;
  checkedOn: string;
}

export interface GLP1PricingCorrection {
  date: string;
  provider?: string;
  summary: string;
}

/**
 * Public, provider-sourced price observations.
 *
 * This is deliberately separate from glp1-providers.ts. That older registry
 * mixes editorial fields with affiliate-program economics and historical
 * pricing. Only facts that can be traced to the linked public source belong
 * here. Unknown or conflicting terms stay unknown; they are never inferred.
 */
export const glp1ProviderPriceRecords: readonly GLP1ProviderPriceRecord[] = [
  {
    provider: 'DirectMeds',
    slug: 'directmeds',
    publicPriceStatus: 'published',
    headlinePrice: 'From $249/month',
    priceLines: [
      'Sublingual semaglutide: $249/month',
      'Injectable semaglutide: $297/month',
    ],
    included: ['Medication', 'Provider review and follow-ups', 'Shipping'],
    caveat:
      'The public page advertises additional new-customer and multi-month discounts without one universal final price.',
    sourceUrl: 'https://directmeds.com/solutions/weight-loss',
    sourceLabel: 'DirectMeds weight-loss pricing page',
    checkedOn: GLP1_PRICING_CAPTURE_DATE,
  },
  {
    provider: 'Eden',
    slug: 'eden-health',
    publicPriceStatus: 'not-clearly-published',
    headlinePrice: 'No public price captured',
    priceLines: ['The public page checked did not display a GLP-1 program price.'],
    included: ['Doctor visit', 'Prescription medication if prescribed', 'Shipping'],
    caveat:
      'A visitor must continue into Eden’s eligibility flow to see the current treatment price.',
    sourceUrl: 'https://www.eden.health/',
    sourceLabel: 'Eden public homepage',
    checkedOn: GLP1_PRICING_CAPTURE_DATE,
  },
  {
    provider: 'MEDVi',
    slug: 'medvi',
    publicPriceStatus: 'published',
    headlinePrice: 'From $116/month',
    priceLines: [
      'Semaglutide injection card: $116/month',
      'Tirzepatide injection card: $166/month',
    ],
    included: ['Medication', 'Physician review', 'Shipping', 'Care coaching'],
    caveat:
      'The same landing page also contains older-looking copy that says $166 for semaglutide and $199 for tirzepatide. Confirm the checkout amount before paying.',
    sourceUrl: 'https://glp1.medvi.org/tirz-166',
    sourceLabel: 'MEDVi price-lock landing page',
    checkedOn: GLP1_PRICING_CAPTURE_DATE,
  },
  {
    provider: 'Strut Health',
    slug: 'strut-health',
    publicPriceStatus: 'published',
    headlinePrice: 'From $99/month',
    priceLines: [
      'Oral semaglutide: from $99/month with auto-refill',
      'Injectable semaglutide: from $149/month with auto-refill',
      'Oral tirzepatide: from $6.63/day with auto-refill',
      'Injectable tirzepatide: from $4.97/day with auto-refill',
    ],
    included: ['Medication if prescribed', 'Online physician visits', 'Shipping'],
    caveat:
      'These are auto-refill starting prices. Final treatment and pricing follow a completed medical consultation.',
    sourceUrl: 'https://www.struthealth.com/mens-weight-loss',
    sourceLabel: 'Strut Health weight-loss pricing page',
    checkedOn: GLP1_PRICING_CAPTURE_DATE,
  },
  {
    provider: 'TrimRx',
    slug: 'trimrx',
    publicPriceStatus: 'published',
    headlinePrice: 'Promotional price from $149/month',
    priceLines: [
      'Personalized GLP-1: promotional price shown as $149',
      'Personalized GLP-1 + GIP: $249/month',
    ],
    included: ['Medication if prescribed', 'Clinical and coaching support', 'Expedited shipping'],
    caveat:
      'The $149 amount is labeled as a summer promotion. Promotions can expire or vary by landing page.',
    sourceUrl: 'https://offers.trimrx.com/offer-v5-tt-2026',
    sourceLabel: 'TrimRx public offer page',
    checkedOn: GLP1_PRICING_CAPTURE_DATE,
  },
] as const;

/**
 * Append-only correction history for published dataset errors. Routine source
 * refreshes belong in the capture date; material corrections belong here so a
 * changed claim is visible instead of silently overwritten.
 */
export const glp1PricingCorrections: readonly GLP1PricingCorrection[] = [];

export const glp1PricingMethod = {
  scope:
    'Advertised cash-pay prices and inclusions visible on each provider’s own public page.',
  sorting: 'Provider name, alphabetically. This table is not a ranking.',
  exclusions: [
    'Clinical effectiveness, safety, or treatment suitability',
    'Prices supplied only by an affiliate network or internal dashboard',
    'Unpublished checkout totals, insurance reimbursement, and coupon eligibility',
  ],
} as const;
