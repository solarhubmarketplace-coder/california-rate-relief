/**
 * GLP-1 medication catalog — drives the 8 `/best/telemedicine-[medication]/` ranking
 * pages and the medication category filters across glp1comparehub.com.
 *
 * Modeled after matchglp1.com's category-page structure (which captures massive
 * SERP territory by giving each medication a dedicated "Best Telemedicine for X"
 * page with a current-price hook in the title tag).
 *
 * IMPORTANT: every clinical claim, FDA status, dosing schedule, and price figure
 * here MUST be Gronk-verified before publishing. Marked sources accordingly.
 *
 * Source documents:
 *   /05_GLP1_Telehealth_Affiliate/Research/Gronk_Responses_Batch1_2026-05-01.md
 *   matchglp1.com title-tag pricing (verify before publish — this is competitor data)
 */

export type MedicationFormat = 'Injectable' | 'Oral Tablet' | 'Sublingual Drops' | 'Nasal Spray' | 'Mixed';
export type FdaStatus = 'FDA-Approved' | 'Compounded — Not FDA Approved' | 'Pipeline / Pending';

export interface DosingStep {
  week: number;
  dose: string;
  phase: 'Initiation' | 'Titration' | 'Maintenance';
}

export interface GLP1Medication {
  /** URL slug for /best/telemedicine-[slug] */
  slug: string;
  /** Display name (e.g., "Wegovy", "Compounded GLP-1") */
  name: string;
  /** Generic / chemical name */
  genericName?: string;
  /** Manufacturer (for branded) */
  manufacturer?: string;
  /** SEO title-tag dollar hook (steal matchglp1 pattern) */
  titleHook: string;
  /** Format(s) available */
  formats: MedicationFormat[];
  /** FDA approval status */
  fdaStatus: FdaStatus;
  /** Brief description for hero/intro */
  description: string;
  /** Mechanism of action (1-2 sentences) */
  mechanism?: string;
  /** Approved indications */
  indications?: string[];
  /** Typical price range (USD/month) */
  priceRange: string;
  /** Provider slugs that offer this medication */
  offeredByProviders: string[];
  /** Top 5 ranked providers for this medication (slugs in rank order) */
  topProviders: string[];
  /** Standard dosing schedule (weekly titration) */
  dosingSchedule?: DosingStep[];
  /** Common side effects (frequencies if known) */
  commonSideEffects?: string[];
  /** Average weight loss from clinical trials (with citation) */
  trialResults?: { metric: string; value: string; trial: string }[];
  /** Last updated for freshness signals */
  lastUpdated: string;
  /** Verification status of pricing */
  pricingVerified: boolean;
}

export const glp1Medications: GLP1Medication[] = [
  // ============================================================
  // BRANDED MEDICATIONS
  // ============================================================

  {
    slug: 'wegovy',
    name: 'Wegovy',
    genericName: 'semaglutide',
    manufacturer: 'Novo Nordisk',
    titleHook: 'Best Telemedicine for Wegovy 2026 — NEW Wegovy Pill from $149/mo',
    formats: ['Injectable', 'Oral Tablet'],
    fdaStatus: 'FDA-Approved',
    description: 'Wegovy is the FDA-approved branded form of semaglutide for chronic weight management in adults with obesity (BMI ≥30) or overweight (BMI ≥27 with weight-related comorbidity). Available as a weekly injectable pen and (newly) as the Wegovy Pill — oral semaglutide for weight loss.',
    mechanism: 'GLP-1 receptor agonist — slows gastric emptying, reduces appetite, increases satiety.',
    indications: ['Chronic weight management', 'Cardiovascular risk reduction in adults with established CVD + obesity'],
    priceRange: '$149–$1,839/mo',
    offeredByProviders: ['ivim-health', 'eden-health', 'orderlymeds', 'gobymeds', 'ro', 'calibrate', 'found'],
    topProviders: ['ivim-health', 'eden-health', 'orderlymeds', 'ro', 'calibrate'],
    dosingSchedule: [
      { week: 1, dose: '0.25 mg', phase: 'Initiation' },
      { week: 5, dose: '0.5 mg', phase: 'Titration' },
      { week: 9, dose: '1.0 mg', phase: 'Titration' },
      { week: 13, dose: '1.7 mg', phase: 'Titration' },
      { week: 17, dose: '2.4 mg', phase: 'Maintenance' },
    ],
    commonSideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Abdominal pain'],
    trialResults: [
      { metric: 'Average weight loss at 68 weeks', value: '14.9%', trial: 'STEP-1 (NEJM 2021)' },
    ],
    lastUpdated: '2026-05-02',
    pricingVerified: false, // Wegovy Pill $149 figure pulled from matchglp1 title — verify
  },

  {
    slug: 'zepbound',
    name: 'Zepbound',
    genericName: 'tirzepatide',
    manufacturer: 'Eli Lilly',
    titleHook: 'Best Telemedicine for Zepbound 2026 — LillyDirect Prices Reduced to $299/mo',
    formats: ['Injectable'],
    fdaStatus: 'FDA-Approved',
    description: 'Zepbound is the FDA-approved branded form of tirzepatide for chronic weight management. Tirzepatide is a dual GIP/GLP-1 receptor agonist — the only dual-agonist on the market — and produces significantly greater weight loss than GLP-1-only agents in head-to-head trials.',
    mechanism: 'Dual GIP + GLP-1 receptor agonist — combines two incretin pathways for amplified appetite suppression and metabolic effect.',
    indications: ['Chronic weight management', 'Obstructive sleep apnea in adults with obesity (FDA-approved Dec 2024)'],
    priceRange: '$299–$1,498/mo',
    offeredByProviders: ['ivim-health', 'eden-health', 'orderlymeds', 'gobymeds'],
    topProviders: ['ivim-health', 'eden-health', 'orderlymeds', 'gobymeds'],
    dosingSchedule: [
      { week: 1, dose: '2.5 mg', phase: 'Initiation' },
      { week: 5, dose: '5 mg', phase: 'Titration' },
      { week: 9, dose: '7.5 mg', phase: 'Titration' },
      { week: 13, dose: '10 mg', phase: 'Titration' },
      { week: 17, dose: '12.5 mg', phase: 'Titration' },
      { week: 21, dose: '15 mg', phase: 'Maintenance' },
    ],
    commonSideEffects: ['Nausea', 'Diarrhea', 'Vomiting', 'Constipation', 'Decreased appetite'],
    trialResults: [
      { metric: 'Average weight loss at 72 weeks', value: '20.2%', trial: 'SURMOUNT-1 (NEJM 2022)' },
      { metric: 'Tirzepatide vs Semaglutide head-to-head', value: '20.2% vs 13.7%', trial: 'SURMOUNT-5 (NEJM 2025)' },
    ],
    lastUpdated: '2026-05-02',
    pricingVerified: false, // $299 LillyDirect figure pulled from matchglp1 title — verify
  },

  {
    slug: 'mounjaro',
    name: 'Mounjaro',
    genericName: 'tirzepatide',
    manufacturer: 'Eli Lilly',
    titleHook: 'Best Telemedicine for Mounjaro 2026 — Zepbound REDUCED to $299/mo',
    formats: ['Injectable'],
    fdaStatus: 'FDA-Approved',
    description: 'Mounjaro is the FDA-approved branded form of tirzepatide for type 2 diabetes (NOT weight loss — that indication is Zepbound, same molecule). Often discussed in weight-loss contexts because off-label prescribing is common.',
    mechanism: 'Dual GIP + GLP-1 receptor agonist (same molecule as Zepbound).',
    indications: ['Type 2 diabetes mellitus'],
    priceRange: '$1,000+/mo (often insurance-covered)',
    offeredByProviders: ['ivim-health', 'eden-health'],
    topProviders: ['ivim-health', 'eden-health'],
    commonSideEffects: ['Nausea', 'Diarrhea', 'Vomiting', 'Constipation', 'Decreased appetite'],
    lastUpdated: '2026-05-02',
    pricingVerified: false,
  },

  {
    slug: 'ozempic',
    name: 'Ozempic',
    genericName: 'semaglutide',
    manufacturer: 'Novo Nordisk',
    titleHook: 'Best Telemedicine for Ozempic 2026 — NovoCare Intro $199/mo',
    formats: ['Injectable'],
    fdaStatus: 'FDA-Approved',
    description: 'Ozempic is the FDA-approved branded form of semaglutide for type 2 diabetes (NOT weight loss — that indication is Wegovy, same molecule). Off-label prescribing for weight loss has driven enormous demand and historic shortages.',
    mechanism: 'GLP-1 receptor agonist (same molecule as Wegovy).',
    indications: ['Type 2 diabetes mellitus', 'Cardiovascular risk reduction in T2D + CVD'],
    priceRange: '$199–$1,000+/mo',
    offeredByProviders: ['ivim-health', 'eden-health'],
    topProviders: ['ivim-health', 'eden-health'],
    commonSideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Abdominal pain'],
    lastUpdated: '2026-05-02',
    pricingVerified: false,
  },

  // ============================================================
  // GENERIC / COMPOUNDED CATEGORIES
  // ============================================================

  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    genericName: 'semaglutide',
    titleHook: 'Best Telemedicine for Semaglutide 2026 — Wegovy Pill from $149/mo',
    formats: ['Injectable', 'Oral Tablet', 'Sublingual Drops'],
    fdaStatus: 'Mixed',
    description: 'Semaglutide is the active molecule in both Wegovy (weight loss) and Ozempic (diabetes), and is also available compounded by 503A pharmacies (compounded semaglutide). Compounded versions are NOT FDA-approved but are produced under specific compounding-pharmacy exemptions.',
    mechanism: 'GLP-1 receptor agonist.',
    priceRange: '$99–$1,839/mo (compounded → branded)',
    offeredByProviders: ['skinnyrx', 'trimrx', 'medvi', 'directmeds', 'ivim-health', 'eden-health', 'elevate-health', 'orderlymeds', 'gobymeds'],
    topProviders: ['skinnyrx', 'eden-health', 'gobymeds', 'medvi', 'ivim-health'],
    commonSideEffects: ['Nausea', 'Vomiting', 'Diarrhea'],
    trialResults: [
      { metric: 'Average weight loss at 68 weeks (Wegovy)', value: '14.9%', trial: 'STEP-1 (NEJM 2021)' },
    ],
    lastUpdated: '2026-05-02',
    pricingVerified: true,
  },

  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    genericName: 'tirzepatide',
    titleHook: 'Best Telemedicine for Tirzepatide 2026 — Zepbound REDUCED to $299/mo',
    formats: ['Injectable', 'Sublingual Drops'],
    fdaStatus: 'Mixed',
    description: 'Tirzepatide is the active molecule in Zepbound (weight loss) and Mounjaro (diabetes), and available compounded by 503A pharmacies. The dual GIP/GLP-1 mechanism produces 50% greater weight loss than semaglutide in head-to-head trials.',
    mechanism: 'Dual GIP + GLP-1 receptor agonist.',
    priceRange: '$133–$1,498/mo (compounded → branded)',
    offeredByProviders: ['skinnyrx', 'trimrx', 'medvi', 'directmeds', 'ivim-health', 'eden-health', 'elevate-health', 'orderlymeds', 'gobymeds'],
    topProviders: ['skinnyrx', 'gobymeds', 'orderlymeds', 'eden-health', 'ivim-health'],
    commonSideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Constipation'],
    trialResults: [
      { metric: 'Average weight loss at 72 weeks (Zepbound)', value: '20.2%', trial: 'SURMOUNT-1 (NEJM 2022)' },
      { metric: 'Tirzepatide vs Semaglutide', value: '20.2% vs 13.7%', trial: 'SURMOUNT-5 (NEJM 2025)' },
    ],
    lastUpdated: '2026-05-02',
    pricingVerified: true,
  },

  // ============================================================
  // META-CATEGORIES (matchglp1 model)
  // ============================================================

  {
    slug: 'compounded-glp-1',
    name: 'Compounded GLP-1',
    titleHook: 'Best Telemedicine for Compounded Semaglutide & Tirzepatide 2026',
    formats: ['Injectable', 'Sublingual Drops'],
    fdaStatus: 'Compounded — Not FDA Approved',
    description: 'Compounded GLP-1 medications (compounded semaglutide and compounded tirzepatide) are produced by state-licensed 503A and 503B compounding pharmacies under specific FDA exemptions. They are NOT FDA-approved drugs. Compounded options are typically 60–80% cheaper than branded equivalents.',
    priceRange: '$75–$399/mo',
    offeredByProviders: ['skinnyrx', 'trimrx', 'medvi', 'directmeds', 'ivim-health', 'eden-health', 'elevate-health', 'orderlymeds', 'gobymeds'],
    topProviders: ['skinnyrx', 'gobymeds', 'eden-health', 'medvi', 'directmeds'],
    lastUpdated: '2026-05-02',
    pricingVerified: true,
  },

  {
    slug: 'brand-name-glp-1',
    name: 'Brand-Name GLP-1',
    titleHook: 'Best Telemedicine for Brand-Name GLP-1 (Wegovy, Zepbound, Mounjaro, Ozempic) 2026',
    formats: ['Injectable', 'Oral Tablet'],
    fdaStatus: 'FDA-Approved',
    description: 'Branded GLP-1 medications include Wegovy (semaglutide for weight loss), Zepbound (tirzepatide for weight loss), Mounjaro (tirzepatide for diabetes), Ozempic (semaglutide for diabetes), and the new Wegovy Pill (oral semaglutide). All are FDA-approved.',
    priceRange: '$149–$1,839/mo',
    offeredByProviders: ['ivim-health', 'eden-health', 'orderlymeds', 'gobymeds', 'ro', 'calibrate', 'found'],
    topProviders: ['ivim-health', 'eden-health', 'ro', 'calibrate', 'orderlymeds'],
    lastUpdated: '2026-05-02',
    pricingVerified: false,
  },
];

/** Get a single medication by slug */
export const getMedicationBySlug = (slug: string): GLP1Medication | undefined =>
  glp1Medications.find((m) => m.slug === slug);

/** Get all medications offered by a specific provider slug */
export const medicationsForProvider = (providerSlug: string): GLP1Medication[] =>
  glp1Medications.filter((m) => m.offeredByProviders.includes(providerSlug));
