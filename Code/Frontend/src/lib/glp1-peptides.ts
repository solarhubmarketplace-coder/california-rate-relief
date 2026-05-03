/**
 * Adjacent peptide / wellness catalog — drives the Tier-C "stack" pages on
 * glp1comparehub.com. These are products our verified providers (especially
 * Eden Health, Ivim Health, DirectMeds, GobyMeds) sell ALONGSIDE GLP-1 — the
 * stack play that captures additional intent + commission.
 *
 * Per Provider_Product_Keyword_Research_2026-05-02.md, this category includes
 * ~8 high-volume / low-KD keyword opportunities that nobody in our prior plan
 * was targeting (NAD+ alone has 13K mo vol on "nad iv therapy" at KD 9).
 *
 * Compliance note: every claim here needs FDA-safe language ("may support" not
 * "treats"). Methylene Blue and NAD+ in particular have heavy FTC scrutiny on
 * therapeutic claims — defer to attorney review before publishing.
 */

export interface GLP1Peptide {
  slug: string;
  name: string;
  category: 'Peptide' | 'Vitamin Injection' | 'Antioxidant' | 'Adjunct';
  formats: string[];
  description: string;
  /** Why someone GLP-1-curious would also be interested in this */
  glp1Connection: string;
  /** Provider slugs that offer this */
  offeredByProviders: string[];
  /** Typical price range */
  priceRange: string;
  /** Compliance flag — high if therapeutic claims need attorney pre-review */
  complianceRisk: 'Low' | 'Medium' | 'High';
  lastUpdated: string;
}

export const glp1Peptides: GLP1Peptide[] = [
  {
    slug: 'sermorelin',
    name: 'Sermorelin',
    category: 'Peptide',
    formats: ['Injectable', 'Sublingual Tablets (ODT)'],
    description: 'Sermorelin is a growth-hormone-releasing hormone (GHRH) analog that stimulates the pituitary to release endogenous growth hormone. Sometimes used adjunctively with GLP-1 weight-loss protocols to support lean-mass preservation during fat loss.',
    glp1Connection: 'Marketed as a way to preserve lean mass during GLP-1-driven weight loss (one of the known concerns with rapid GLP-1 weight loss is muscle/lean-mass loss).',
    offeredByProviders: ['directmeds', 'eden-health', 'gobymeds', 'ivim-health'],
    priceRange: '$199–$300/mo',
    complianceRisk: 'Medium',
    lastUpdated: '2026-05-02',
  },

  {
    slug: 'nad-plus',
    name: 'NAD+',
    category: 'Adjunct',
    formats: ['Injectable', 'IV Therapy', 'Nasal Spray', 'Face Cream', 'Oral Supplement', 'Patches (coming soon)'],
    description: 'NAD+ (nicotinamide adenine dinucleotide) is a coenzyme central to cellular energy metabolism. Marketed for energy, cognitive function, and "anti-aging." Eden Health offers it in 5 different formats — the broadest NAD+ catalog in our verified provider stack.',
    glp1Connection: 'GLP-1 weight loss can cause fatigue during the calorie-deficit phase; NAD+ is marketed as an energy/recovery support adjunct.',
    offeredByProviders: ['directmeds', 'eden-health', 'gobymeds', 'ivim-health'],
    priceRange: '$84–$246/mo (varies by format)',
    complianceRisk: 'High', // FTC has cracked down on NAD+ "anti-aging" claims
    lastUpdated: '2026-05-02',
  },

  {
    slug: 'mic-b12',
    name: 'MIC + B12',
    category: 'Vitamin Injection',
    formats: ['Injectable'],
    description: 'MIC (Methionine + Inositol + Choline) injections combined with B12 are a classic "lipotropic" weight-loss adjunct. Marketed to support fat metabolism and energy, particularly for patients in calorie deficit.',
    glp1Connection: 'Often stacked with GLP-1 protocols to support fat oxidation, energy, and the methyl-cycle nutrients depleted by rapid weight loss.',
    offeredByProviders: ['eden-health', 'ivim-health'],
    priceRange: '$106–$150/mo',
    complianceRisk: 'Medium',
    lastUpdated: '2026-05-02',
  },

  {
    slug: 'lipotropic-injections',
    name: 'Lipotropic Injections',
    category: 'Vitamin Injection',
    formats: ['Injectable'],
    description: 'Lipotropic injections combine various vitamins and amino acids (typically including B12, B6, methionine, inositol, choline, and L-carnitine) marketed for weight-loss support. Available at many med-spas and via telehealth.',
    glp1Connection: 'Frequently bundled or recommended alongside GLP-1 for "fat metabolism support" — though clinical evidence for the lipotropic effect is weak compared to GLP-1.',
    offeredByProviders: ['ivim-health', 'eden-health', 'gobymeds'],
    priceRange: 'Variable — typically $20–$50/shot, monthly programs $100–$200',
    complianceRisk: 'Medium',
    lastUpdated: '2026-05-02',
  },

  {
    slug: 'glutathione',
    name: 'Glutathione',
    category: 'Antioxidant',
    formats: ['Injectable', 'IV Therapy'],
    description: 'Glutathione is the body\'s primary antioxidant, marketed for liver detoxification, skin health, and immune support. Available as injectable or IV therapy.',
    glp1Connection: 'Sometimes recommended alongside GLP-1 protocols for "detox support" — though no clinical evidence supports a specific GLP-1 interaction.',
    offeredByProviders: ['eden-health'],
    priceRange: '$100–$300/mo',
    complianceRisk: 'High', // therapeutic claims around "detox" are FTC-scrutinized
    lastUpdated: '2026-05-02',
  },

  {
    slug: 'methylene-blue',
    name: 'Methylene Blue',
    category: 'Adjunct',
    formats: ['Injectable', 'Oral'],
    description: 'Methylene blue is a dye historically used as a medical agent (methemoglobinemia) and increasingly marketed in biohacking circles for mitochondrial / cognitive support. Eden Health offers an injectable formulation.',
    glp1Connection: 'Marketed in biohacking circles as a metabolic adjunct — though the evidence for weight-loss benefit is essentially absent. Listed here for catalog completeness.',
    offeredByProviders: ['eden-health'],
    priceRange: 'VERIFY',
    complianceRisk: 'High', // strong FTC risk on cognitive / mitochondrial / weight-loss claims
    lastUpdated: '2026-05-02',
  },
];

/** Get a single peptide by slug */
export const getPeptideBySlug = (slug: string): GLP1Peptide | undefined =>
  glp1Peptides.find((p) => p.slug === slug);
