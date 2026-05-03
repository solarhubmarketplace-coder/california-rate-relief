/**
 * Master page registry for glp1comparehub.com.
 *
 * Single source of truth for which pages exist, which template renders them,
 * what their priority is, and what status they're in. Sitemap.ts pulls from
 * here. Build dashboards pull from here. Page progress tracking pulls from
 * here.
 *
 * Pattern modeled after CRR's `cities-data.ts` — data-driven page generation.
 *
 * Generated 2026-05-02 from:
 *   /_Keywords/05_GLP1_telehealth/analysis/Provider_Product_Keyword_Research_2026-05-02.md
 *   matchglp1.com competitor structure analysis
 */

import { glp1Providers } from './glp1-providers';
import { glp1Medications } from './glp1-medications';
import { glp1Peptides } from './glp1-peptides';

export type PageTier = 'A' | 'B' | 'C';
export type PageStatus = 'live' | 'next' | 'queued' | 'utility' | 'future';
export type PageTemplate =
  | 'homepage'
  | 'provider-directory'
  | 'provider-detail'
  | 'medication-vs-medication'
  | 'provider-vs-provider'
  | 'medication-category'      // /best/telemedicine-[medication]/
  | 'rankings-hub'             // /best/
  | 'compare-tool'             // /compare/
  | 'match-quiz'               // /match
  | 'simulator'                // /simulator (v1.5 — defer)
  | 'cost-calculator'          // /tools/cost-calculator
  | 'peptide-stack'
  | 'compounded-format'        // /sublingual-semaglutide etc.
  | 'microdosing-cluster'
  | 'commercial-comparison'    // "cheapest", "best of"
  | 'compliance-pillar'        // 503A, FDA-safety
  | 'utility'                  // about, methodology, disclosure, privacy, terms, contact
  | 'news';

export interface PageRoute {
  /** URL path beginning with `/` (e.g., '/zepbound-vs-wegovy') */
  path: string;
  /** Page template that renders this route */
  template: PageTemplate;
  /** Build priority tier */
  tier: PageTier;
  /** Build status */
  status: PageStatus;
  /** Primary target keyword */
  targetKeyword?: string;
  /** Estimated monthly revenue at maturity ($75 EPS, 1.5% conv) */
  estRevenueAtMaturity?: number;
  /** Search volume of primary kw */
  volume?: number;
  /** Keyword difficulty */
  kd?: number;
  /** Short note on why this page exists */
  note?: string;
}

// ============================================================
// LIVE PAGES (in production)
// ============================================================
const livePages: PageRoute[] = [
  {
    path: '/glp1-home',
    template: 'homepage',
    tier: 'A',
    status: 'live',
    targetKeyword: 'best glp-1 telehealth',
    note: 'Homepage — served as / via host routing on glp1comparehub.com',
  },
  {
    path: '/tirzepatide-vs-semaglutide',
    template: 'medication-vs-medication',
    tier: 'A',
    status: 'live',
    targetKeyword: 'tirzepatide vs semaglutide',
    estRevenueAtMaturity: 6600,
    volume: 44000,
    kd: 22,
    note: 'Tier A flagship comparison — already live with NEJM citations + Reddit quotes',
  },
];

// ============================================================
// NEXT — Build first (Tier A money pages)
// ============================================================
const nextPages: PageRoute[] = [
  {
    path: '/zepbound-vs-wegovy',
    template: 'medication-vs-medication',
    tier: 'A',
    status: 'next',
    targetKeyword: 'zepbound vs wegovy',
    estRevenueAtMaturity: 7050,
    volume: 47000,
    kd: 19,
    note: 'Highest single-page revenue opportunity in the entire batch',
  },
  {
    path: '/compounded-tirzepatide',
    template: 'compliance-pillar',
    tier: 'A',
    status: 'next',
    targetKeyword: 'compounded tirzepatide',
    estRevenueAtMaturity: 1830,
    volume: 28000,
    kd: 12,
    note: 'KD 12 easy win + 503A safety angle',
  },
  {
    path: '/compounded-semaglutide',
    template: 'compliance-pillar',
    tier: 'A',
    status: 'next',
    targetKeyword: 'compounded semaglutide',
    estRevenueAtMaturity: 1665,
    volume: 37000,
    kd: 48,
    note: 'High vol but harder KD; pillar play',
  },
];

// ============================================================
// PROVIDER DIRECTORY + DETAIL PAGES (auto-generated from glp1Providers)
// ============================================================
const providerPages: PageRoute[] = [
  {
    path: '/providers',
    template: 'provider-directory',
    tier: 'A',
    status: 'queued',
    targetKeyword: 'glp-1 providers comparison',
    note: 'Full directory of all 10 providers + secondary',
  },
  ...glp1Providers
    .filter((p) => p.status === 'Active')
    .map<PageRoute>((p) => ({
      path: `/providers/${p.slug}`,
      template: 'provider-detail',
      tier: p.priority === 'primary' ? 'A' : 'B',
      status: 'queued',
      targetKeyword: `${p.name.toLowerCase()} review`,
      note: `${p.priority} provider — ${p.tagline ?? ''}`,
    })),
];

// ============================================================
// MEDICATION CATEGORY PAGES (8 pages — matchglp1's /best/ pattern)
// ============================================================
const medicationCategoryPages: PageRoute[] = [
  {
    path: '/best',
    template: 'rankings-hub',
    tier: 'A',
    status: 'queued',
    targetKeyword: 'best glp-1 providers',
    note: 'Rankings hub — links to all 8 medication category pages',
  },
  ...glp1Medications.map<PageRoute>((m) => ({
    path: `/best/telemedicine-${m.slug}`,
    template: 'medication-category',
    tier: m.slug === 'wegovy' || m.slug === 'zepbound' ? 'A' : 'B',
    status: 'queued',
    targetKeyword: `best telemedicine for ${m.slug}`,
    note: m.titleHook,
  })),
];

// ============================================================
// PROVIDER VS PROVIDER PAGES (top 30 by combined search volume)
// ============================================================
// Top vs-pairs identified from Ahrefs research + matchglp1 vs-page inventory.
// Format: /compare/{provider-a-slug}-vs-{provider-b-slug}
const providerVsPages: PageRoute[] = [
  // Tier A vs-pages (verified Ahrefs volume)
  { path: '/compare/trimrx-vs-medvi',         template: 'provider-vs-provider', tier: 'A', status: 'queued', targetKeyword: 'trimrx vs medvi',     volume: 600, kd: 0, estRevenueAtMaturity: 68 },

  // Tier B — high-affiliity cross-comparisons (low individual vol but cluster value)
  { path: '/compare/skinnyrx-vs-eden-health', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'skinnyrx vs eden' },
  { path: '/compare/skinnyrx-vs-medvi',       template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'skinnyrx vs medvi' },
  { path: '/compare/skinnyrx-vs-trimrx',      template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'skinnyrx vs trimrx' },
  { path: '/compare/skinnyrx-vs-ivim-health', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'skinnyrx vs ivim' },
  { path: '/compare/medvi-vs-eden-health',    template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'medvi vs eden' },
  { path: '/compare/medvi-vs-ivim-health',    template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'medvi vs ivim' },
  { path: '/compare/ivim-health-vs-eden-health', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'ivim vs eden' },
  { path: '/compare/ivim-health-vs-trimrx',   template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'ivim vs trimrx' },
  { path: '/compare/trimrx-vs-eden-health',   template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'trimrx vs eden' },
  { path: '/compare/gobymeds-vs-orderlymeds', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'gobymeds vs orderlymeds' },
  { path: '/compare/gobymeds-vs-medvi',       template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'gobymeds vs medvi' },
  { path: '/compare/orderlymeds-vs-medvi',    template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'orderlymeds vs medvi' },
  { path: '/compare/gobymeds-vs-ivim-health', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'gobymeds vs ivim' },
  { path: '/compare/directmeds-vs-skinnyrx',  template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'directmeds vs skinnyrx' },
  { path: '/compare/directmeds-vs-gobymeds',  template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'directmeds vs gobymeds' },
  { path: '/compare/elevate-health-vs-skinnyrx', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'elevate vs skinnyrx' },
  { path: '/compare/elevate-health-vs-eden-health', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'elevate vs eden' },
];

// ============================================================
// MEDICATION VS MEDICATION (additional comparison pages beyond the 2 already covered)
// ============================================================
const medVsMedPages: PageRoute[] = [
  { path: '/wegovy-vs-mounjaro',     template: 'medication-vs-medication', tier: 'B', status: 'queued', targetKeyword: 'wegovy vs mounjaro',     volume: 6700,  kd: 24, estRevenueAtMaturity: 1005 },
  { path: '/ozempic-vs-mounjaro',    template: 'medication-vs-medication', tier: 'B', status: 'queued', targetKeyword: 'ozempic vs mounjaro',    volume: 21000, kd: 54, estRevenueAtMaturity: 630 },
  { path: '/tirzepatide-vs-zepbound', template: 'medication-vs-medication', tier: 'B', status: 'queued', targetKeyword: 'tirzepatide vs zepbound', volume: 1500, kd: 9,  estRevenueAtMaturity: 630 },
  { path: '/semaglutide-vs-wegovy',  template: 'medication-vs-medication', tier: 'B', status: 'queued', targetKeyword: 'semaglutide vs wegovy' },
  { path: '/oral-semaglutide-vs-injection', template: 'medication-vs-medication', tier: 'B', status: 'queued', targetKeyword: 'oral semaglutide vs injection', volume: 600 },
  { path: '/wegovy-pill-vs-injection', template: 'medication-vs-medication', tier: 'B', status: 'queued', targetKeyword: 'oral wegovy', volume: 1400, kd: 31 },
];

// ============================================================
// ALTERNATIVE FORMAT PAGES (sublingual, oral, tablets)
// ============================================================
const formatPages: PageRoute[] = [
  { path: '/sublingual-semaglutide', template: 'compounded-format', tier: 'A', status: 'queued', targetKeyword: 'sublingual semaglutide', volume: 4000,  kd: 19, estRevenueAtMaturity: 450 },
  { path: '/sublingual-tirzepatide', template: 'compounded-format', tier: 'B', status: 'queued', targetKeyword: 'sublingual tirzepatide', volume: 900,   kd: 3,  estRevenueAtMaturity: 101 },
  { path: '/oral-tirzepatide',       template: 'compounded-format', tier: 'A', status: 'queued', targetKeyword: 'oral tirzepatide',        volume: 6500,  kd: 8,  estRevenueAtMaturity: 731 },
  { path: '/tirzepatide-tablets',    template: 'compounded-format', tier: 'A', status: 'queued', targetKeyword: 'tirzepatide tablets',     volume: 5700,  kd: 16, estRevenueAtMaturity: 641 },
  { path: '/semaglutide-tablets',    template: 'compounded-format', tier: 'B', status: 'queued', targetKeyword: 'semaglutide tablets',     volume: 12000, kd: 50 },
  { path: '/wegovy-pill',            template: 'compounded-format', tier: 'A', status: 'queued', targetKeyword: 'wegovy pill',             volume: 37000, kd: 41, estRevenueAtMaturity: 1665 },
];

// ============================================================
// MICRODOSING GLP-1 CLUSTER (Ivim USP)
// ============================================================
const microdosingPages: PageRoute[] = [
  { path: '/microdosing-tirzepatide',         template: 'microdosing-cluster', tier: 'A', status: 'queued', targetKeyword: 'microdosing tirzepatide',         volume: 7900, kd: 22, estRevenueAtMaturity: 711 },
  { path: '/microdose-tirzepatide',           template: 'microdosing-cluster', tier: 'B', status: 'queued', targetKeyword: 'microdose tirzepatide',           volume: 3400, kd: 14, estRevenueAtMaturity: 383 },
  { path: '/microdosing-semaglutide',         template: 'microdosing-cluster', tier: 'B', status: 'queued', targetKeyword: 'microdosing semaglutide',         volume: 3500, kd: 30 },
  { path: '/microdosing-glp-1-schedule',      template: 'microdosing-cluster', tier: 'B', status: 'queued', targetKeyword: 'glp-1 microdosing schedule',      volume: 600,  kd: 4,  estRevenueAtMaturity: 68 },
  { path: '/how-to-microdose-semaglutide',    template: 'microdosing-cluster', tier: 'B', status: 'queued', targetKeyword: 'how to microdose semaglutide',    volume: 1100 },
];

// ============================================================
// ADJACENT PEPTIDE / STACK PAGES (auto-generated from glp1Peptides)
// ============================================================
const peptidePages: PageRoute[] = [
  ...glp1Peptides.map<PageRoute>((p) => ({
    path: `/peptides/${p.slug}`,
    template: 'peptide-stack',
    tier: 'B',
    status: 'queued',
    targetKeyword: `${p.name.toLowerCase()} for weight loss`,
    note: `${p.category} adjunct — compliance risk: ${p.complianceRisk}`,
  })),
  // Specific high-volume peptide pages
  { path: '/nad-iv-therapy',     template: 'peptide-stack', tier: 'A', status: 'queued', targetKeyword: 'nad iv therapy',  volume: 13000, kd: 9,  estRevenueAtMaturity: 1463 },
  { path: '/nad-injection',      template: 'peptide-stack', tier: 'B', status: 'queued', targetKeyword: 'nad+ injection',  volume: 2300,  kd: 15 },
  { path: '/nad-nasal-spray',    template: 'peptide-stack', tier: 'B', status: 'queued', targetKeyword: 'nad nasal spray', volume: 2800,  kd: 0,  estRevenueAtMaturity: 315 },
  { path: '/lipotropic-injections', template: 'peptide-stack', tier: 'B', status: 'queued', targetKeyword: 'lipotropic injections', volume: 8300, kd: 4 },
  { path: '/sermorelin-for-weight-loss', template: 'peptide-stack', tier: 'B', status: 'queued', targetKeyword: 'sermorelin for weight loss', volume: 600, kd: 8 },
  { path: '/glutathione-injection', template: 'peptide-stack', tier: 'B', status: 'queued', targetKeyword: 'glutathione injection', volume: 2900, kd: 5,  estRevenueAtMaturity: 326 },
];

// ============================================================
// COMMERCIAL-INTENT COMPARISON PAGES
// ============================================================
const commercialPages: PageRoute[] = [
  { path: '/cheapest-tirzepatide-online',     template: 'commercial-comparison', tier: 'A', status: 'queued', targetKeyword: 'cheapest tirzepatide online',     volume: 6300, kd: 12, estRevenueAtMaturity: 709 },
  { path: '/cheapest-semaglutide-online',     template: 'commercial-comparison', tier: 'B', status: 'queued', targetKeyword: 'cheapest semaglutide online',     volume: 350,  kd: 10 },
  { path: '/cheapest-compounded-tirzepatide', template: 'commercial-comparison', tier: 'B', status: 'queued', targetKeyword: 'cheapest compounded tirzepatide', volume: 600,  kd: 7 },
  { path: '/best-compounded-tirzepatide',     template: 'commercial-comparison', tier: 'B', status: 'queued', targetKeyword: 'best compounded tirzepatide',     volume: 500,  kd: 3 },
  { path: '/best-compounded-semaglutide',     template: 'commercial-comparison', tier: 'B', status: 'queued', targetKeyword: 'best compounded semaglutide',     volume: 500,  kd: 34 },
];

// ============================================================
// STACK / COMBO PAGES
// ============================================================
const stackPages: PageRoute[] = [
  { path: '/tirzepatide-with-b12',         template: 'peptide-stack', tier: 'A', status: 'queued', targetKeyword: 'tirzepatide with b12',         volume: 1500, kd: 2 },
  { path: '/semaglutide-with-b12',         template: 'peptide-stack', tier: 'B', status: 'queued', targetKeyword: 'semaglutide with b12',         volume: 1900, kd: 22 },
  { path: '/compounded-semaglutide-with-b12', template: 'peptide-stack', tier: 'B', status: 'queued', targetKeyword: 'compounded semaglutide with b12', volume: 1600, kd: 23 },
  { path: '/glp-1-stack-guide',            template: 'peptide-stack', tier: 'C', status: 'queued', targetKeyword: 'glp-1 stack' },
];

// ============================================================
// SPECIAL SUSP / NEW MEDICATION PILLAR
// ============================================================
const newMedicationPages: PageRoute[] = [
  { path: '/compounded-liraglutide', template: 'compliance-pillar', tier: 'A', status: 'queued', targetKeyword: 'compounded liraglutide', volume: 600,  kd: 0, note: 'Ivim USP — KD 0 virgin SERP' },
];

// ============================================================
// 503A COMPLIANCE / SAFETY PILLAR PAGES
// ============================================================
const compliancePages: PageRoute[] = [
  { path: '/503a-compounding-pharmacy-tirzepatide', template: 'compliance-pillar', tier: 'C', status: 'queued', targetKeyword: '503a compounding pharmacy tirzepatide', volume: 100 },
  { path: '/is-compounded-glp-1-legal',             template: 'compliance-pillar', tier: 'C', status: 'queued', targetKeyword: 'is compounded glp-1 legal' },
  { path: '/fda-compounded-glp-1',                  template: 'compliance-pillar', tier: 'C', status: 'queued', targetKeyword: 'fda compounded glp-1', volume: 20 },
];

// ============================================================
// INTERACTIVE TOOLS
// ============================================================
const toolPages: PageRoute[] = [
  { path: '/match',                  template: 'match-quiz',      tier: 'A', status: 'queued', targetKeyword: 'find your glp-1 match', note: 'Quiz — central conversion mechanic' },
  { path: '/tools/cost-calculator',  template: 'cost-calculator', tier: 'A', status: 'queued', targetKeyword: 'glp-1 cost calculator', note: 'Titration breakdown tool' },
  { path: '/simulator',              template: 'simulator',       tier: 'B', status: 'future', targetKeyword: 'glp-1 weight loss simulator', note: 'V1.5 — defer to post-launch' },
  { path: '/compare',                template: 'compare-tool',    tier: 'A', status: 'queued', targetKeyword: 'compare glp-1 providers', note: 'Compare-tray UI for selecting providers' },
];

// ============================================================
// UTILITY PAGES (required for affiliate program approval)
// ============================================================
const utilityPages: PageRoute[] = [
  { path: '/about',                template: 'utility', tier: 'A', status: 'utility', note: 'Author bio + E-E-A-T' },
  { path: '/methodology',          template: 'utility', tier: 'A', status: 'utility', note: 'How we evaluate providers' },
  { path: '/affiliate-disclosure', template: 'utility', tier: 'A', status: 'utility', note: 'FTC 16 CFR § 255 compliance' },
  { path: '/privacy',              template: 'utility', tier: 'A', status: 'utility', note: 'GDPR / CCPA' },
  { path: '/terms',                template: 'utility', tier: 'A', status: 'utility', note: 'Liability cap' },
  { path: '/contact',              template: 'utility', tier: 'A', status: 'utility', note: 'Real email + form' },
];

// ============================================================
// NEWS (SEO freshness signal)
// ============================================================
const newsPages: PageRoute[] = [
  { path: '/news',                                                       template: 'news', tier: 'B', status: 'queued', note: 'Index page' },
  { path: '/news/wegovy-pill-fda-approval-2026',                         template: 'news', tier: 'B', status: 'queued' },
  { path: '/news/fda-503b-compounded-shutdown-april-2026',               template: 'news', tier: 'B', status: 'queued' },
];

// ============================================================
// ASSEMBLED REGISTRY
// ============================================================
export const allPageRoutes: PageRoute[] = [
  ...livePages,
  ...nextPages,
  ...providerPages,
  ...medicationCategoryPages,
  ...providerVsPages,
  ...medVsMedPages,
  ...formatPages,
  ...microdosingPages,
  ...peptidePages,
  ...commercialPages,
  ...stackPages,
  ...newMedicationPages,
  ...compliancePages,
  ...toolPages,
  ...utilityPages,
  ...newsPages,
];

/** Stats helper — call from sitemap or build dashboard */
export const pageStats = () => {
  const byStatus: Record<PageStatus, number> = { live: 0, next: 0, queued: 0, utility: 0, future: 0 };
  const byTier: Record<PageTier, number> = { A: 0, B: 0, C: 0 };
  const byTemplate: Record<string, number> = {};
  let totalEstRevenue = 0;

  for (const r of allPageRoutes) {
    byStatus[r.status]++;
    byTier[r.tier]++;
    byTemplate[r.template] = (byTemplate[r.template] ?? 0) + 1;
    totalEstRevenue += r.estRevenueAtMaturity ?? 0;
  }

  return {
    total: allPageRoutes.length,
    byStatus,
    byTier,
    byTemplate,
    totalEstRevenueAtMaturity: totalEstRevenue,
  };
};

/** Get pages by template — for dynamic route generation */
export const pagesByTemplate = (t: PageTemplate): PageRoute[] =>
  allPageRoutes.filter((r) => r.template === t);

/** Get pages by status */
export const pagesByStatus = (s: PageStatus): PageRoute[] =>
  allPageRoutes.filter((r) => r.status === s);
