/**
 * GLP-1 telehealth provider data — drives the comparison table, provider directory,
 * provider detail pages, ranking pages, and vs-pages on glp1comparehub.com.
 *
 * Schema modeled after matchglp1.com (the niche conversion leader). Existing simple
 * fields preserved for backwards-compat with GLP1ComparisonTable.tsx; new rich fields
 * (pros/cons/howItWorks/pricingTable/etc.) added as optional for the matchglp1-style
 * provider detail and ranking pages.
 *
 * Pricing + ratings: where Gronk-verified May 2026, marked accordingly. Where
 * sourced from a single live website crawl 2026-05-02, marked "site-verified".
 * Where unknown (JS-blocked SPA — SkinnyRx/TrimRx/MEDVi — or Sprout Health pending
 * URL), placeholder "VERIFY" markers; do NOT publish until confirmed.
 *
 * Source documents:
 *   /05_GLP1_Telehealth_Affiliate/Research/Gronk_Responses_Batch1_2026-05-01.md
 *   /_Keywords/05_GLP1_telehealth/analysis/Provider_Product_Keyword_Research_2026-05-02.md
 */

export type ProviderCategory = 'Telemedicine' | 'Compounding Pharmacy' | 'Manufacturer Program' | 'Hybrid';
export type MedicationType = 'Brand Name' | 'Compounded';
export type ProviderStatus = 'Active' | 'Pending' | 'Discontinued';
export type ProviderPriority = 'primary' | 'secondary';

export interface PricingTier {
  plan: string;
  price: string;
}

export interface ProviderFeatures {
  availability?: string;
  fulfillment?: string;
  fees?: string;
  delivery?: string;
  plans?: string;
}

export interface GLP1Provider {
  // ---------- Existing simple fields (backwards-compat) ----------

  /** Key into AFFILIATE_LINKS registry */
  productKey: string;
  /** Display name */
  name: string;
  /** Short tagline shown next to name */
  tagline?: string;
  /** Monthly price range as a display string (e.g., "$249–$399") */
  monthlyPrice: string;
  /** Comma-separated medication types as a string (legacy) */
  medications: string;
  /** 1.0–5.0 numeric rating for sortable column */
  rating: number;
  /** Star display (e.g., '★★★★★') for fast scanning */
  starsDisplay: string;
  /** Best-for use case (one line) */
  bestFor: string;
  /** Optional badge */
  badge?: 'Best Overall' | 'Best Value' | 'Best for Branded' | 'Best for Compounded' | 'Editor’s Pick' | 'Top Ranked' | 'Best for Microdosing' | 'Best for Sublingual';
  /** Cancellation policy */
  cancellation: string;
  /** Lab work included? */
  labsIncluded: boolean;
  /** Doctor consultation included? */
  consultIncluded: boolean;
  /** Source for the listed price (used in tooltip / footnote) */
  priceSource?: string;

  // ---------- New rich fields (matchglp1 schema) ----------

  /** URL slug for /providers/[slug] (kebab-case, no spaces) */
  slug: string;
  /** Provider classification */
  category: ProviderCategory;
  /** Build/display priority — primary providers get full pages first */
  priority: ProviderPriority;
  /** Operational status */
  status: ProviderStatus;
  /** Longer description (1–2 sentences for hero block on detail page) */
  description?: string;
  /** BBB letter grade if available */
  bbbRating?: string;
  /** Trustpilot rating if different from `rating` */
  trustpilotRating?: number;
  /** Array form of medications (richer than `medications` string) */
  medicationsList?: string[];
  /** Brand vs Compounded tags for filtering */
  medicationType?: MedicationType[];
  /** Pros bullets (3–5 typical) */
  pros?: string[];
  /** Cons bullets (3–5 typical) */
  cons?: string[];
  /** "How it works" numbered steps */
  howItWorks?: string[];
  /** Multi-tier pricing table (plan name + price) */
  pricingTable?: PricingTier[];
  /** Active promotion text (e.g., "Code JUMPSTART20 — 20% off through Dec 31") */
  promo?: string;
  /** Structured features (5 sub-fields per matchglp1 schema) */
  features?: ProviderFeatures;
  /** "Best for…" use-case bullets (richer than `bestFor` string) */
  bestForList?: string[];
  /** Editorial summary closer for the bottom of the detail page */
  bottomLine?: string;
  /** ISO date string of last copy/data refresh */
  lastUpdated?: string;
  /** ISO date string of last live-pricing verification */
  lastVerified?: string;
  /** Slugs of other providers we have vs-pages built for */
  comparisonsAvailable?: string[];
  /** Hero image path (relative to /public). Wide composition for the detail-page header. */
  heroImage?: string;
  /** Optional secondary images (gallery). Useful for product-card screenshots, etc. */
  galleryImages?: string[];
}

/**
 * Order = display order on the comparison table.
 * Primary providers (user's 10) first. Secondary kept for backwards-compat
 * with /tirzepatide-vs-semaglutide page references.
 *
 * VERIFICATION STATUS LEGEND:
 *   ✅ Gronk-verified May 1, 2026
 *   🔍 Site-crawled 2026-05-02 (live data extracted)
 *   ⚠️  PENDING — JS-blocked SPA or unknown URL; placeholder fields, do NOT publish
 */
export const glp1Providers: GLP1Provider[] = [
  // ============================================================
  // PRIMARY PROVIDERS — User's 10 priority list (2026-05-02)
  // ============================================================

  // ✅ #1 SkinnyRx — Gronk-verified, full content build pending JS catalog screenshot
  {
    productKey: 'glp1-skinnyrx',
    slug: 'skinnyrx',
    category: 'Compounding Pharmacy',
    priority: 'primary',
    status: 'Active',
    name: 'SkinnyRx',
    tagline: '503A compounded GLP-1 specialist',
    description: 'A 503A compounding-pharmacy-led telehealth program focused exclusively on compounded semaglutide and tirzepatide. Bundled monthly pricing with proven 503A compliance — the highest-CPA program in our verified affiliate stack as of May 2026.',
    badge: 'Best Overall',
    monthlyPrice: '$199–$399',
    medications: 'Compounded Tirzepatide + Semaglutide (503A pharmacy)',
    medicationsList: ['Compounded Semaglutide (Injectable)', 'Compounded Tirzepatide (Injectable)'],
    medicationType: ['Compounded'],
    rating: 4.9,
    starsDisplay: '★★★★★',
    bestFor: 'Patients who want compounded GLP-1 with bundled pricing and proven 503A compliance',
    bestForList: [
      'Patients who want bundled monthly pricing (no surprise add-ons)',
      'Cost-conscious buyers comparing compounded options',
      'Patients who value 503A pharmacy regulatory compliance',
    ],
    cancellation: 'Anytime before next shipment',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'skinnyrx.com (Gronk-verified May 2026)',
    pros: [
      'Highest-rated affiliate program in verified May 2026 stack',
      'Bundled monthly pricing — consult, prescription, shipping included',
      '503A pharmacy compliance — established regulatory track record',
    ],
    cons: [
      'Compounded only — no branded GLP-1 (Wegovy/Zepbound) options',
      'Lab work not included in base price',
      'Full product catalog not externally visible (SPA architecture)',
    ],
    howItWorks: [
      'Complete intake form on skinnyrx.com',
      'Telehealth provider review (24-48 hr typical)',
      'Prescription sent to 503A compounding pharmacy',
      'Medication ships directly to your address (cold-chain)',
    ],
    pricingTable: [
      { plan: 'Compounded Semaglutide (monthly)', price: '$199–$299/mo' },
      { plan: 'Compounded Tirzepatide (monthly)', price: '$299–$399/mo' },
    ],
    features: {
      availability: 'All 50 states',
      fulfillment: '503A compounding pharmacy',
      fees: 'Bundled — no separate consult or shipping fee',
      delivery: 'Cold-chain shipping included',
      plans: 'Monthly subscription, cancel before next ship',
    },
    bottomLine: 'SkinnyRx is the strongest verified-CPA affiliate program in our stack as of May 2026. The 503A compliance angle is a real differentiator for compliance-conscious patients. Catalog details require manual screenshot to fully verify.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-01',
    comparisonsAvailable: ['eden-health', 'medvi', 'trimrx', 'ivim-health'],
    heroImage: '/img/glp1/providers/skinnyrx-hero.jpg',
    galleryImages: [
      '/img/glp1/providers/skinnyrx-cover.jpg',
      '/img/glp1/providers/skinnyrx-homepage.webp',
    ],
  },

  // ⚠️ #2 TrimRx — JS-blocked, only meta-title verified
  {
    productKey: 'glp1-trimrx',
    slug: 'trimrx',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'TrimRx',
    tagline: 'Online weight loss program with GLP-1 medication',
    description: 'A telehealth weight-loss program offering GLP-1 medications. Public site is a JS-rendered SPA — full catalog requires manual verification via screenshots.',
    monthlyPrice: 'From $179/mo',
    medications: 'GLP-1 weight loss program (catalog VERIFY)',
    medicationsList: ['Compounded Semaglutide (VERIFY)', 'Compounded Tirzepatide (VERIFY)'],
    medicationType: ['Compounded'],
    rating: 4.5,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients comparing mid-tier compounded GLP-1 telehealth programs',
    bestForList: [
      'Cost-conscious buyers (entry tier from $179/mo)',
      'Patients who want a full-service telehealth weight-loss platform',
    ],
    cancellation: 'VERIFY (manual screenshot needed)',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'trimrx.com meta-title (site-crawled 2026-05-02; full catalog VERIFY)',
    pros: ['Entry-tier pricing competitive with budget compounded providers', 'Brand visibility — strong organic traffic per Ahrefs (2,700 vol on brand kw)'],
    cons: ['Public catalog blocked from crawler (JS-only SPA)', 'No verified affiliate program signals as of May 2026'],
    pricingTable: [{ plan: 'Weight loss program (entry)', price: 'From $179/mo' }],
    bottomLine: 'TrimRx surfaces strongly in branded search (Ahrefs: 2,700 vol on "trimrx", 3,000 on "trimrx reviews"), suggesting real customer base. Catalog and CPA require live verification before publishing recommendations.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-02',
    comparisonsAvailable: ['skinnyrx', 'medvi', 'eden-health'],
    heroImage: '/img/glp1/providers/trimrx-hero.jpg',
  },

  // ✅ #3 MEDVi — Gronk-verified pricing, full catalog VERIFY (loading shell)
  {
    productKey: 'glp1-medvi',
    slug: 'medvi',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'MEDVi',
    tagline: 'Reliable mid-tier compounded GLP-1',
    description: 'Mid-tier telehealth program offering compounded semaglutide and tirzepatide. Has the highest brand-search volume in our stack (33K monthly searches on "medvi") — meaningful brand recognition.',
    badge: 'Editor’s Pick',
    monthlyPrice: '$179–$299',
    medications: 'Compounded Tirzepatide + Semaglutide',
    medicationsList: ['Compounded Semaglutide (Injectable)', 'Compounded Tirzepatide (Injectable)'],
    medicationType: ['Compounded'],
    rating: 4.6,
    starsDisplay: '★★★★☆',
    bestFor: 'Cost-conscious patients with 30-day consultation flexibility',
    bestForList: [
      'Patients who want a recognized brand name with affiliate-stack pricing',
      '30-day consultation flexibility (no annual commitment)',
    ],
    cancellation: 'Anytime',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'medvi.com (Gronk-verified May 2026; live catalog blocked by SPA loading shell)',
    pros: [
      'Highest brand-search volume in our verified stack (27K reviews/mo)',
      'Mid-tier pricing — competitive entry point',
      '30-day consult flexibility — no long-term commitment',
    ],
    cons: ['Live catalog blocked from crawler (loading-splash SPA)', 'No branded GLP-1 (Wegovy/Zepbound) options'],
    pricingTable: [
      { plan: 'Compounded Semaglutide', price: '$179–$249/mo' },
      { plan: 'Compounded Tirzepatide', price: '$229–$299/mo' },
    ],
    bottomLine: 'MEDVi has the strongest brand-search signal of any provider in the stack. Live product catalog requires manual screenshot — but pricing range is Gronk-verified. Strong candidate for "Best Brand Recognition" badge.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-01',
    comparisonsAvailable: ['skinnyrx', 'eden-health', 'trimrx', 'ivim-health'],
    heroImage: '/img/glp1/providers/medvi-hero.webp',
    galleryImages: ['/img/glp1/providers/medvi-products.jpg'],
  },

  // 🔍 #4 DirectMeds — fully site-crawled, sublingual is the unique angle
  {
    productKey: 'glp1-directmeds',
    slug: 'directmeds',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'DirectMeds',
    tagline: 'Sublingual + injectable compounded GLP-1',
    description: 'Telehealth platform offering compounded semaglutide and tirzepatide in BOTH injectable AND sublingual drop formats — the only verified provider in our stack with sublingual options. Also stocks adjacent peptides (Sermorelin, NAD+, Epithalon) and supplements.',
    badge: 'Best for Sublingual',
    monthlyPrice: '$179–$399',
    medications: 'Compounded Sema + Tirz (injectable + sublingual), Sermorelin, NAD+, Epithalon',
    medicationsList: [
      'Compounded Semaglutide (Injectable) — $297/mo',
      'Compounded Semaglutide (Sublingual Drops) — $179.10/mo',
      'Compounded Tirzepatide (Injectable) — $399/mo',
      'Compounded Tirzepatide (Sublingual Drops) — $224.10/mo',
      'Sermorelin — $299.99/mo',
      'NAD+',
      'Epithalon',
      'Capilyn (Finasteride) — $89/mo',
      'Minoxalune (Minoxidil) — $89/mo',
      'SatiaLean (DNF-10) — $59.99/mo',
    ],
    medicationType: ['Compounded'],
    rating: 4.5,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients who prefer sublingual (no-needle) GLP-1 administration',
    bestForList: [
      'Patients with needle aversion who still want compounded GLP-1',
      'Patients seeking adjacent peptide therapy (Sermorelin, NAD+, Epithalon)',
      'HSA/FSA users (accepted)',
    ],
    cancellation: 'VERIFY',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'directmeds.com (site-crawled 2026-05-02)',
    pros: [
      'Only verified provider with sublingual GLP-1 options',
      'Broad adjacent-peptide menu (Sermorelin, NAD+, Epithalon)',
      'LegitScript + HIPAA certified',
      '53,000+ customers (per site)',
      'Next-business-day shipping',
    ],
    cons: [
      'Sublingual GLP-1 efficacy data less robust than injectable',
      'No branded GLP-1 (Wegovy/Zepbound) options',
      'Affiliate program not publicly listed',
    ],
    howItWorks: [
      'Submit intake form on directmeds.com',
      'Nurse-led care review',
      'E-prescription routed to compounding pharmacy',
      'Medication shipped next business day',
    ],
    pricingTable: [
      { plan: 'Compounded Semaglutide (Sublingual)', price: '$179.10/mo' },
      { plan: 'Compounded Semaglutide (Injectable)', price: '$297/mo' },
      { plan: 'Compounded Tirzepatide (Sublingual)', price: '$224.10/mo' },
      { plan: 'Compounded Tirzepatide (Injectable)', price: '$399/mo' },
      { plan: 'Sermorelin', price: '$299.99/mo' },
    ],
    features: {
      availability: 'All 50 states',
      fulfillment: 'Compounding pharmacy partner',
      fees: 'Bundled — nurse support + shipping included',
      delivery: 'Next-business-day shipping',
      plans: 'Monthly subscription',
    },
    bottomLine: 'DirectMeds has the most unique product mix in our verified stack — sublingual GLP-1 is a real category they own. Strong choice for "Best for Needle-Free GLP-1" or "Best for Peptide Stacks." Affiliate program not publicly listed; outreach required.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-02',
    comparisonsAvailable: ['skinnyrx', 'eden-health', 'medvi', 'gobymeds'],
  },

  // 🔍 #5 Ivim Health — fully site-crawled, MICRODOSING + LIRAGLUTIDE + WEGOVY PILL are unique
  {
    productKey: 'glp1-ivim-health',
    slug: 'ivim-health',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'Ivim Health',
    tagline: '360 wellness — branded + compounded + microdosing GLP-1',
    description: 'Full-service telehealth program offering compounded GLP-1, branded GLP-1 (Wegovy, Zepbound, Mounjaro, Ozempic, Saxenda, Wegovy Pill), microdosing protocols, AND a deep adjacent-peptide + supplement menu. The only verified provider in our stack offering microdosing GLP-1 and the new Wegovy Pill.',
    badge: 'Best for Microdosing',
    monthlyPrice: 'From $75/mo + $74.99 program fee',
    medications: 'Compounded Sema/Tirz/Liraglutide, microdosing GLP-1, Wegovy/Zepbound/Mounjaro/Ozempic/Saxenda, Wegovy Pill',
    medicationsList: [
      'Compounded Semaglutide — $75/mo + $74.99 program fee',
      'Compounded Tirzepatide — $149/mo + $74.99 program fee',
      'Compounded Liraglutide',
      'Microdosing GLP-1 Program',
      'Wegovy (Injectable)',
      'Wegovy Pill (Oral)',
      'Zepbound',
      'Mounjaro',
      'Ozempic',
      'Saxenda',
      'Sermorelin',
      'NAD+, B12, MIC, Lipotropic, Berberine, NMN, Collagen, full supplement line',
      'Women\'s Hormone Optimization — $199/mo (4-mo min)',
    ],
    medicationType: ['Brand Name', 'Compounded'],
    rating: 4.7,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients who want widest medication selection + microdosing flexibility',
    bestForList: [
      'Patients exploring microdosing GLP-1 (only verified provider offering this)',
      'Patients who want to switch between branded and compounded',
      'Patients interested in the new Wegovy Pill (oral semaglutide)',
      'Patients seeking full wellness stack (peptides + supplements + hormones)',
    ],
    cancellation: 'VERIFY (program fee structure complicates)',
    labsIncluded: true,
    consultIncluded: true,
    priceSource: 'ivimhealth.com (site-crawled 2026-05-02)',
    pros: [
      'Only verified provider with Microdosing GLP-1 Program',
      'Only verified provider with Compounded Liraglutide',
      'Only verified provider offering Wegovy Pill (oral semaglutide)',
      '92 licensed providers, founded 2021',
      'Unlimited provider visits, nutrition coaching, masterclasses included',
    ],
    cons: [
      'Two-part pricing (medication + $74.99 program fee) less transparent than competitors',
      '4-month minimum on hormone program',
      'Affiliate program not publicly listed',
    ],
    howItWorks: [
      'Free consultation with one of 92 licensed providers',
      'Personalized treatment plan (medication + dosing protocol)',
      'Weekly dose adjustments + unlimited provider messaging',
      'Medication shipped, nutrition coaching ongoing',
    ],
    pricingTable: [
      { plan: 'Program fee (all plans)', price: '$74.99/mo' },
      { plan: 'Compounded Semaglutide (med only)', price: '$75/mo' },
      { plan: 'Compounded Tirzepatide (med only)', price: '$149/mo' },
      { plan: 'Hormone Optimization (women)', price: '$199/mo (4-mo min)' },
      { plan: 'Microdosing GLP-1', price: 'VERIFY' },
    ],
    features: {
      availability: 'All 50 states',
      fulfillment: 'Multiple pharmacy partners (compounded + branded)',
      fees: '$74.99/mo program fee on top of medication cost',
      delivery: 'Standard shipping included',
      plans: 'Monthly subscription, weekly dose adjustments',
    },
    bottomLine: 'Ivim Health has the deepest medication menu in our verified stack — branded, compounded, microdosing, and Wegovy Pill all available. Strong "Best for Variety" or "Best for Microdosing" candidate. Two-part pricing is the main friction point.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-02',
    comparisonsAvailable: ['eden-health', 'medvi', 'trimrx', 'orderlymeds'],
  },

  // ✅ #6 Eden Health — Gronk-verified + site-crawled, NAD+ ECOSYSTEM is unique
  {
    productKey: 'glp1-eden-health',
    slug: 'eden-health',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'Eden Health',
    tagline: 'Branded + compounded with intro pricing',
    description: 'Full-service telehealth offering branded and compounded GLP-1 plus an industry-leading NAD+ ecosystem (5 different formats: injection, nasal spray, face cream, patches, oral). Marketed "Same Price at Every Dose" — no titration upcharge.',
    badge: 'Best Value',
    monthlyPrice: '$149 intro / $229–$249 ongoing',
    medications: 'Compounded Sema + Tirz, branded GLP-1, NAD+ (5 formats), Sermorelin, hormone therapy',
    medicationsList: [
      'GLP-1 Personalized Plans (injectable pens + vials) — from $129 first month (3-mo plan)',
      'Ozempic / Wegovy / Zepbound / Mounjaro (branded)',
      'Custom Weight Loss Kit (multi-modal)',
      'Sermorelin Injections — from $126 first mo (3-mo plan)',
      'Sermorelin Tablets (Oral Disintegrating Tablet)',
      'NAD+ Injections — $119–$246/mo',
      'NAD+ Nasal Spray — from $112/mo',
      'NAD+ Face Cream — from $84/mo',
      'NAD+ Patches (coming soon)',
      'NAD+ Cell Theory Supplement (oral)',
      'Glutathione (injectable)',
      'Methylene Blue (injectable)',
      'MIC+B12 Therapy — from $106/mo',
      'Hormone Therapy Kit (Women) — Estradiol + Progesterone',
      'Custom Hair Growth Kits (men + women)',
    ],
    medicationType: ['Brand Name', 'Compounded'],
    rating: 4.7,
    starsDisplay: '★★★★☆',
    bestFor: 'First-time patients who want low intro pricing and the option of branded later',
    bestForList: [
      'First-time patients price-sensitive about month 1',
      'Patients who want option to switch to branded GLP-1 later',
      'Patients seeking comprehensive wellness stack (NAD+, hormones, peptides)',
      'HSA/FSA users',
    ],
    cancellation: 'Anytime',
    labsIncluded: true,
    consultIncluded: true,
    priceSource: 'tryeden.com (Gronk-verified May 2026 + site-crawled 2026-05-02)',
    pros: [
      '"Same Price at Every Dose" — no titration upcharge',
      '127,000+ members (largest verified userbase)',
      'NAD+ in 5 different formats — owns the category',
      'Same-day visits available',
      'All 50 states, FSA/HSA eligible, no insurance required',
    ],
    cons: [
      '3-month plan pricing requires upfront commitment for lowest rate',
      'Monthly-without-commitment pricing higher ($229-249)',
    ],
    howItWorks: [
      'Same-day consultation with provider',
      'Personalized GLP-1 plan or wellness stack',
      'Expedited shipping included',
      '24/7 provider messaging for dose adjustments',
    ],
    pricingTable: [
      { plan: 'GLP-1 Plan (3-mo intro)', price: '$129 first month' },
      { plan: 'GLP-1 Plan (ongoing)', price: '$229–$249/mo' },
      { plan: 'Sermorelin (3-mo intro)', price: '$126 first mo' },
      { plan: 'NAD+ Injection', price: '$119–$246/mo' },
      { plan: 'NAD+ Nasal Spray', price: 'from $112/mo' },
      { plan: 'MIC+B12', price: 'from $106/mo' },
    ],
    features: {
      availability: 'All 50 states',
      fulfillment: 'Multiple pharmacy partners',
      fees: 'Bundled — consult + prescription + shipping + 24/7 messaging',
      delivery: 'Expedited shipping included',
      plans: 'Monthly OR 3-month plan (cheaper)',
    },
    bottomLine: 'Eden Health is the broadest-catalog provider in our verified stack and has the strongest verified member count (127K+). The NAD+ ecosystem alone is a category they own. Strong "Best Value" or "Best for Wellness Stack" candidate.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-02',
    comparisonsAvailable: ['skinnyrx', 'medvi', 'ivim-health', 'orderlymeds'],
    heroImage: '/img/glp1/providers/eden-health-hero.webp',
  },

  // ⚠️ #7 Sprout Health — URL UNCONFIRMED, placeholder entry, do NOT publish
  {
    productKey: 'glp1-sprout-health',
    slug: 'sprout-health',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Pending',
    name: 'Sprout Health',
    tagline: 'PENDING — URL not yet confirmed',
    description: 'PLACEHOLDER ENTRY. None of the candidate URLs (sprouthealth.com, sprouthealth.co, gosprout.health, trysprout.com) host the GLP-1 telehealth brand. Need correct URL from operator before this provider can be published.',
    monthlyPrice: 'VERIFY',
    medications: 'VERIFY',
    medicationsList: [],
    medicationType: ['Compounded'],
    rating: 0,
    starsDisplay: '☆☆☆☆☆',
    bestFor: 'PENDING — URL confirmation required',
    bestForList: ['PENDING'],
    cancellation: 'VERIFY',
    labsIncluded: false,
    consultIncluded: false,
    priceSource: 'NOT YET VERIFIED',
    pros: ['PENDING'],
    cons: ['Provider URL not yet confirmed — exclude from public-facing pages'],
    bottomLine: 'DO NOT PUBLISH. Awaiting correct URL from operator.',
    lastUpdated: '2026-05-02',
    lastVerified: '',
    comparisonsAvailable: [],
  },

  // 🔍 #8 Elevate Health — site-crawled, 3-mo bundle is the angle
  {
    productKey: 'glp1-elevate-health',
    slug: 'elevate-health',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'Elevate Health',
    tagline: '3-month tirzepatide starter program',
    description: 'Telehealth weight-loss program with a 3-month bundled tirzepatide starter ($897 = $9.96/day, saves $450 vs monthly). Includes 1 month of free GLP-1 wellness coaching with weekly video calls. Markets average results of "40 lbs+ over 3 months."',
    monthlyPrice: '$299/mo or $897/3-mo bundle',
    medications: 'Compounded Tirzepatide (2.5–15 mg/wk titration), Compounded Semaglutide',
    medicationsList: [
      'Tirzepatide Weight Loss Program (2.5–15 mg/wk)',
      'Semaglutide Weight Loss Program',
    ],
    medicationType: ['Compounded'],
    rating: 4.4,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients ready to commit to a 3-month program for the lowest per-day cost',
    bestForList: [
      'Patients ready for 3-month commitment',
      'Patients who value bundled health coaching',
      'Patients seeking traditional weight-loss program structure',
    ],
    cancellation: 'VERIFY',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'elevatehealthrx.com (site-crawled 2026-05-02)',
    pros: [
      '3-month bundle saves $450 vs monthly equivalent',
      '1 month of free GLP-1 wellness coaching included (weekly video calls)',
      'US-licensed physicians, USA pharmacies, HIPAA-compliant',
      'Aggressive average-result marketing ("40 lbs+ over 3 months")',
    ],
    cons: [
      '3-month upfront commitment is bigger ask than monthly',
      'Aggressive average-result claims may attract regulatory scrutiny',
      'Affiliate program not publicly listed',
    ],
    pricingTable: [
      { plan: 'Tirzepatide 3-Month Starter', price: '$897 ($9.96/day)' },
      { plan: 'Tirzepatide Monthly', price: '$100 off first month, then full price' },
    ],
    features: {
      availability: 'All US states (telehealth)',
      fulfillment: 'USA compounding pharmacies',
      fees: 'Bundled — initial visit + medication + unlimited support included',
      delivery: 'Standard shipping included',
      plans: '3-month bundle OR monthly',
    },
    bottomLine: 'Elevate Health uses the 3-month-bundle pricing strategy effectively. The wellness coaching add-on is genuinely useful. Aggressive average-results marketing is a yellow flag for FTC compliance — may need to soften copy for our recommendations.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-02',
    comparisonsAvailable: ['skinnyrx', 'eden-health', 'medvi'],
  },

  // 🔍 #9 OrderlyMeds — site-crawled + PUBLIC AFFILIATE PROGRAM
  {
    productKey: 'glp1-orderlymeds',
    slug: 'orderlymeds',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'OrderlyMeds',
    tagline: 'Personalized GLP-1 + $3,700 value bundle',
    description: 'Telehealth platform offering both compounded and branded GLP-1, marketed with a "$3,700 value" bundle that includes BetterHelp mental health therapy, Trifecta meal service (50% off), dietitian meal plans, and a fitness app. Has a public affiliate program — one of two in our stack.',
    monthlyPrice: '$149–$299 compounded, $1,498–$1,839 branded',
    medications: 'Compounded Tirzepatide + Semaglutide, Wegovy, Zepbound',
    medicationsList: [
      'Compounded Tirzepatide — $449 for 3-mo starter; $299/mo after',
      'Compounded Semaglutide — $224 for 3-mo starter; $149/mo after',
      'Zepbound (Tirzepatide) — $1,498/mo',
      'Wegovy (Semaglutide) — $1,839/mo',
    ],
    medicationType: ['Brand Name', 'Compounded'],
    rating: 4.5,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients who want bundled lifestyle support (mental health + meals + fitness)',
    bestForList: [
      'Patients who want lifestyle support bundled with medication',
      'Patients comparing branded GLP-1 access (Wegovy/Zepbound passthrough)',
      'Affiliate marketers (public affiliate program)',
    ],
    cancellation: 'VERIFY',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'orderlymeds.com (site-crawled 2026-05-02)',
    pros: [
      'PUBLIC affiliate program (/affiliate-program/get-started/)',
      'Includes BetterHelp mental health therapy (high-perceived-value bundle)',
      'Trifecta meal service 50% off',
      'Both compounded (cheap) AND branded (premium) options',
      'Board-certified CMO with ER background',
    ],
    cons: [
      'Branded GLP-1 ($1,498–$1,839) is high anchor pricing',
      '3-month starter pricing requires upfront commitment',
    ],
    pricingTable: [
      { plan: 'Compounded Sema (3-mo starter)', price: '$224 (then $149/mo)' },
      { plan: 'Compounded Tirz (3-mo starter)', price: '$449 (then $299/mo)' },
      { plan: 'Wegovy (branded)', price: '$1,839/mo' },
      { plan: 'Zepbound (branded)', price: '$1,498/mo' },
    ],
    features: {
      availability: 'All 50 states',
      fulfillment: 'Multiple pharmacy partners (compounded + branded)',
      fees: 'Bundled — doctor + virtual consults + community + lifestyle apps',
      delivery: 'Standard shipping included',
      plans: 'Monthly OR 3-month starter',
    },
    bottomLine: 'OrderlyMeds is one of only two providers in our stack with a public affiliate program. The lifestyle bundle (BetterHelp + Trifecta + dietitian + fitness app) is the strongest value-add in the stack. Apply to affiliate program FIRST.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-02',
    comparisonsAvailable: ['gobymeds', 'skinnyrx', 'eden-health', 'ivim-health'],
  },

  // 🔍 #10 GobyMeds — site-crawled + PUBLIC AFFILIATE PROGRAM (2-track)
  {
    productKey: 'glp1-gobymeds',
    slug: 'gobymeds',
    category: 'Telemedicine',
    priority: 'primary',
    status: 'Active',
    name: 'GobyMeds',
    tagline: 'Compounded GLP-1 with B12/NAD+ stack add-ons',
    description: 'Compounded GLP-1 telehealth with the LOWEST entry price in our verified stack ($99/mo for semaglutide). Unique add-on options: B12, B6, NAD+, glycine can be combined with the GLP-1 injection. Has a 2-track public affiliate program (general + medical).',
    monthlyPrice: 'From $99/mo (compounded sema)',
    medications: 'Compounded Sema + Tirz with B12/B6/NAD+/glycine combos, Wegovy, Zepbound, Sermorelin, NAD+',
    medicationsList: [
      'Compounded Semaglutide — $99+/mo',
      'Compounded Tirzepatide — $133+/mo (Most Popular, Dual Action)',
      'Sermorelin (Injectable + Oral Tablet) — $199/mo',
      'NAD+ Injectable — $116/mo',
      'Wegovy (Branded)',
      'Zepbound (Branded)',
      'GLP-1 + B12/B6/NAD+/Glycine combo additives',
    ],
    medicationType: ['Brand Name', 'Compounded'],
    rating: 4.6,
    starsDisplay: '★★★★☆',
    bestFor: 'Cost-conscious buyers seeking lowest-price entry compounded GLP-1',
    bestForList: [
      'Cost-conscious buyers (lowest $99/mo entry)',
      'Patients wanting GLP-1 + supplement stack additives',
      'Patients who don\'t want subscription/membership fees',
      'Affiliate marketers (2-track public program: general + medical)',
    ],
    cancellation: 'No subscription — pay per shipment',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'gobymeds.com (site-crawled 2026-05-02)',
    pros: [
      'LOWEST entry price in our verified stack ($99/mo)',
      'Unique GLP-1 + B12/NAD+/glycine combo additives',
      'No subscription/membership fees',
      'Up to 3 months of medication shipped at once',
      'TWO-track public affiliate program (general + medical professionals)',
      'LegitScript certified',
      '20% off promo (code JUMPSTART20)',
    ],
    cons: [
      'Lower entry pricing may correlate with shorter consult time',
      'Branded GLP-1 pricing not displayed on site',
    ],
    pricingTable: [
      { plan: 'Compounded Semaglutide', price: 'From $99/mo' },
      { plan: 'Compounded Tirzepatide', price: 'From $133/mo' },
      { plan: 'NAD+ Injectable', price: '$116/mo' },
      { plan: 'Sermorelin', price: '$199/mo' },
    ],
    promo: 'Code JUMPSTART20 — 20% off (expires Dec 31, 2025)',
    features: {
      availability: 'All 50 states',
      fulfillment: 'Compounding pharmacy partners',
      fees: 'NO subscription/membership fees — pay per shipment',
      delivery: 'Free shipping, up to 3 months supply at once',
      plans: 'Pay per shipment — no commitment',
    },
    bottomLine: 'GobyMeds is the price leader in our stack ($99/mo entry) AND has the most accessible affiliate program (two-track public signup). Strong "Best Value" or "Best Entry-Level" candidate. Apply to affiliate program FIRST.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-02',
    comparisonsAvailable: ['orderlymeds', 'skinnyrx', 'medvi', 'directmeds'],
  },

  // ============================================================
  // SECONDARY PROVIDERS — Not in user's priority 10 but kept for backwards-compat
  // (existing /tirzepatide-vs-semaglutide page references these)
  // ============================================================

  {
    productKey: 'glp1-ro',
    slug: 'ro',
    category: 'Telemedicine',
    priority: 'secondary',
    status: 'Active',
    name: 'Ro',
    tagline: 'Largest US telehealth platform',
    description: 'The largest US telehealth platform with broad medical scope including GLP-1 weight loss. Charges a $149/mo membership separate from medication cost. Best for patients who want established platform reliability and FDA-approved branded options.',
    monthlyPrice: '$149/mo + meds',
    medications: 'Branded (Wegovy, Zepbound) + select compounded',
    medicationsList: ['Wegovy (Injectable)', 'Zepbound (Injectable)', 'Select compounded options'],
    medicationType: ['Brand Name', 'Compounded'],
    rating: 4.6,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients who specifically want FDA-approved branded medications with a major platform',
    bestForList: [
      'Patients who prefer established/large telehealth platforms',
      'Patients who want FDA-approved branded GLP-1',
    ],
    cancellation: 'Anytime (90-day commitment available)',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'ro.co (Gronk-verified May 2026)',
    pros: ['Established platform with broad medical scope', 'Branded GLP-1 emphasis (Wegovy/Zepbound)'],
    cons: ['$149/mo membership on top of medication cost', 'Less competitive on compounded pricing vs specialists'],
    bottomLine: 'Strong for branded-GLP-1 seekers; not the cheapest compounded option.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-01',
    comparisonsAvailable: ['eden-health', 'skinnyrx'],
  },

  {
    productKey: 'glp1-calibrate',
    slug: 'calibrate',
    category: 'Telemedicine',
    priority: 'secondary',
    status: 'Active',
    name: 'Calibrate',
    tagline: 'Coaching-led metabolic program',
    description: 'A coaching-first metabolic-health program built around branded GLP-1 medications + 1:1 coach + lab work. 3-month minimum commitment.',
    monthlyPrice: '$199/mo (3-month minimum)',
    medications: 'Branded GLP-1s + 1:1 coaching + labs',
    medicationsList: ['Branded Wegovy / Zepbound', '1:1 metabolic coaching', 'Lab work included'],
    medicationType: ['Brand Name'],
    rating: 4.3,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients who want clinical-grade coaching alongside the prescription',
    bestForList: ['Patients seeking long-term metabolic coaching', 'Patients who value lab work integration'],
    cancellation: '3-month minimum commitment',
    labsIncluded: true,
    consultIncluded: true,
    priceSource: 'joincalibrate.com (Gronk-verified May 2026)',
    pros: ['Coaching-first model — strong clinical support', 'Lab work included'],
    cons: ['3-month minimum commitment', 'Higher all-in cost than self-serve programs'],
    bottomLine: 'Best for patients who treat GLP-1 as part of a larger metabolic program.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-01',
    comparisonsAvailable: ['eden-health'],
  },

  {
    productKey: 'glp1-found',
    slug: 'found',
    category: 'Telemedicine',
    priority: 'secondary',
    status: 'Active',
    name: 'Found',
    tagline: 'Insurance-first weight-care platform',
    description: 'Telehealth weight-care platform that prioritizes insurance billing for branded GLP-1, falling back to compounded for uninsured patients.',
    monthlyPrice: '~$129/mo + meds',
    medications: 'Branded (insurance-billed) + compounded',
    medicationsList: ['Branded Wegovy/Zepbound (insurance-billed)', 'Compounded fallback'],
    medicationType: ['Brand Name', 'Compounded'],
    rating: 4.2,
    starsDisplay: '★★★★☆',
    bestFor: 'Patients with commercial insurance who want to maximize coverage of branded GLP-1',
    bestForList: ['Patients with commercial insurance', 'Patients prioritizing branded options when affordable'],
    cancellation: 'Anytime after first month',
    labsIncluded: false,
    consultIncluded: true,
    priceSource: 'joinfound.com (Gronk-verified May 2026)',
    pros: ['Insurance-first model (lower out-of-pocket if covered)', 'Both branded and compounded options'],
    cons: ['Effectiveness depends on insurance coverage', 'Membership fee separate from medication'],
    bottomLine: 'Best for insured patients seeking branded GLP-1 coverage.',
    lastUpdated: '2026-05-02',
    lastVerified: '2026-05-01',
    comparisonsAvailable: [],
  },
];

/** Convenience filter — returns only the user's priority 10 (excludes Ro/Calibrate/Found) */
export const primaryProviders = (): GLP1Provider[] =>
  glp1Providers.filter((p) => p.priority === 'primary');

/** Convenience filter — returns only providers ready to publish (excludes Sprout pending URL) */
export const publishableProviders = (): GLP1Provider[] =>
  glp1Providers.filter((p) => p.status === 'Active');

/** Get a single provider by slug (for /providers/[slug] dynamic route) */
export const getProviderBySlug = (slug: string): GLP1Provider | undefined =>
  glp1Providers.find((p) => p.slug === slug);

/** Get providers by category (for directory filtering) */
export const providersByCategory = (cat: ProviderCategory): GLP1Provider[] =>
  glp1Providers.filter((p) => p.category === cat && p.status === 'Active');
