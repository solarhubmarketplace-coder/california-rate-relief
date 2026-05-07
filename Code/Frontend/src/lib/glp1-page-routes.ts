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
    note: 'Tier A flagship comparison — live with NEJM citations + Reddit quotes',
  },
  {
    path: '/zepbound-vs-wegovy',
    template: 'medication-vs-medication',
    tier: 'A',
    status: 'live',
    targetKeyword: 'zepbound vs wegovy',
    estRevenueAtMaturity: 7050,
    volume: 47000,
    kd: 19,
    note: 'Highest single-page revenue target. Updated 2026-05-05 with insurance-vs-cash-pay angle and verified May 2026 pricing.',
  },
  {
    path: '/tmates-vs-embody',
    template: 'provider-vs-provider',
    tier: 'B',
    status: 'live',
    targetKeyword: 'tmates vs embody',
    estRevenueAtMaturity: 0,
    volume: 0,
    kd: 0,
    note: 'NEW 2026-05-06. Provider vs provider comparison — #1 EPC (TMates) vs #3 EPC (Embody) Katalys-active programs. Capturable SERP, low brand competition.',
  },
  {
    path: '/compounded-tirzepatide',
    template: 'compliance-pillar',
    tier: 'A',
    status: 'live',
    targetKeyword: 'compounded tirzepatide',
    estRevenueAtMaturity: 1830,
    volume: 28000,
    kd: 12,
    note: 'KD 12 easy win. Rewritten 2026-05-05 with April 1 + April 30 + June 29 FDA framing.',
  },
  // NEW pages added 2026-05-05 (Batch 1 of foreman build)
  {
    path: '/tirzepatide-near-me',
    template: 'commercial-comparison',
    tier: 'A',
    status: 'live',
    targetKeyword: 'tirzepatide near me',
    estRevenueAtMaturity: 4524,
    volume: 8700,
    kd: 7,
    note: 'NEW 2026-05-05. KD 7 commercial buyer page. Reframed as telehealth-vs-local-clinic given the May 2026 SERP shift to local pack.',
  },
  {
    path: '/best-compounded-tirzepatide',
    template: 'commercial-comparison',
    tier: 'A',
    status: 'live',
    targetKeyword: 'best compounded tirzepatide',
    estRevenueAtMaturity: 56,
    volume: 500,
    kd: 3,
    note: 'NEW 2026-05-05. Affiliate money page — listicle ranking the 6 active Katalys-approved providers with FDA banner.',
  },
  {
    path: '/oral-tirzepatide',
    template: 'compounded-format',
    tier: 'A',
    status: 'live',
    targetKeyword: 'oral tirzepatide',
    estRevenueAtMaturity: 731,
    volume: 6500,
    kd: 8,
    note: 'NEW 2026-05-05. Sublingual (Direct Meds) + GLP-1 gum (Embody) — dual active affiliate fit.',
  },
  // Batch 2 — added 2026-05-05
  {
    path: '/cheapest-tirzepatide-online',
    template: 'commercial-comparison',
    tier: 'A',
    status: 'live',
    targetKeyword: 'cheapest tirzepatide online',
    estRevenueAtMaturity: 709,
    volume: 6300,
    kd: 12,
    note: 'NEW 2026-05-05 (Batch 2). Pure price-shopping intent. Three cost paths compared: $25 branded+insurance, $179 compounded (System Labs), $299 LillyDirect.',
  },
  {
    path: '/nad-iv-therapy',
    template: 'peptide-stack',
    tier: 'A',
    status: 'live',
    targetKeyword: 'nad iv therapy',
    estRevenueAtMaturity: 1463,
    volume: 13000,
    kd: 9,
    note: 'NEW 2026-05-05 (Batch 2). System Labs adjacent peptide play — IV vs at-home injection vs the GLP-1 + NAD+ longevity stack.',
  },
  // Batch 3 — added 2026-05-05
  {
    path: '/tirzepatide-before-and-after',
    template: 'commercial-comparison',
    tier: 'A',
    status: 'live',
    targetKeyword: 'tirzepatide before and after',
    estRevenueAtMaturity: 1482,
    volume: 3800,
    kd: 2,
    note: 'NEW 2026-05-05 (Batch 3). KD 2 transformation page written with rigorous compliance framing — no patient testimonials, lean on SURMOUNT-1 trial data with full disclaimers.',
  },
  {
    path: '/tirzepatide-tablets',
    template: 'compounded-format',
    tier: 'A',
    status: 'live',
    targetKeyword: 'tirzepatide tablets',
    estRevenueAtMaturity: 641,
    volume: 5700,
    kd: 16,
    note: 'NEW 2026-05-05 (Batch 3). Educational format complement to /oral-tirzepatide. Honest answer that no FDA-approved tirzepatide tablet exists; routes traffic to compounded sublingual/gum or Wegovy Pill alternative.',
  },
  // Batch 5 — added 2026-05-05 (adjacent peptide cluster)
  {
    path: '/lipotropic-injections',
    template: 'peptide-stack',
    tier: 'A',
    status: 'live',
    targetKeyword: 'lipotropic injections',
    volume: 8300,
    kd: 4,
    note: 'NEW 2026-05-05 (Batch 5). KD 4 + 8,300 vol — biggest remaining volume play. System Labs MIC+B12 monetization at $89/mo.',
  },
  {
    path: '/nad-nasal-spray',
    template: 'peptide-stack',
    tier: 'A',
    status: 'live',
    targetKeyword: 'nad nasal spray',
    estRevenueAtMaturity: 315,
    volume: 2800,
    kd: 0,
    note: 'NEW 2026-05-05 (Batch 5). KD 0 — virgin SERP. Eden Health unique 5-format NAD+ menu monetization.',
  },
  {
    path: '/glutathione-injection',
    template: 'peptide-stack',
    tier: 'A',
    status: 'live',
    targetKeyword: 'glutathione injection',
    estRevenueAtMaturity: 326,
    volume: 2900,
    kd: 5,
    note: 'NEW 2026-05-05 (Batch 5). KD 5 + Eden Health/Direct Meds monetization. Honest evidence read with FDA warning context.',
  },
  {
    path: '/sermorelin-for-weight-loss',
    template: 'peptide-stack',
    tier: 'A',
    status: 'live',
    targetKeyword: 'sermorelin for weight loss',
    volume: 600,
    kd: 8,
    note: 'NEW 2026-05-05 (Batch 5). KD 8 + System Labs ($79 first oral, $109 first injectable) + Direct Meds + Eden Health monetization. GLP-1 lean-mass preservation stack angle.',
  },
];

// ============================================================
// NEXT — Build first (Tier A money pages)
// ============================================================
const nextPages: PageRoute[] = [
  {
    path: '/compounded-semaglutide',
    template: 'compliance-pillar',
    tier: 'A',
    status: 'live',
    targetKeyword: 'compounded semaglutide',
    estRevenueAtMaturity: 1665,
    volume: 37000,
    kd: 48,
    note: 'LIVE 2026-05-06. Compliance pillar: FDA enforcement timeline, compounded vs branded table, 4 providers (Strut/TMates/Embody/Eden), VerifiedPricingBadge, EditorialByline.',
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
  { path: '/compare/trimrx-vs-medvi',         template: 'provider-vs-provider', tier: 'A', status: 'live',   targetKeyword: 'trimrx vs medvi',     volume: 600, kd: 0, estRevenueAtMaturity: 68, note: 'LIVE 2026-05-06. MEDVi=editorial pick (verified pricing, 33K brand vol). TrimRx entry confirmed; full catalog pending manual screenshot. 6-FAQ schema, BreadcrumbList, Person author.' },

  // Tier B — high-affiliity cross-comparisons (low individual vol but cluster value)
  { path: '/compare/skinnyrx-vs-eden-health', template: 'provider-vs-provider', tier: 'B', status: 'live',   targetKeyword: 'skinnyrx vs eden', note: 'LIVE 2026-05-06. SkinnyRx (VERIFY flags — pricing unconfirmed) vs Eden Health (verified $229-299). Data caveat banner. Editorial pick: Eden Health.' },
  { path: '/compare/skinnyrx-vs-medvi',       template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'skinnyrx vs medvi' },
  { path: '/compare/skinnyrx-vs-trimrx',      template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'skinnyrx vs trimrx' },
  { path: '/compare/skinnyrx-vs-ivim-health', template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'skinnyrx vs ivim' },
  { path: '/compare/medvi-vs-eden-health',    template: 'provider-vs-provider', tier: 'B', status: 'live',   targetKeyword: 'medvi vs eden', note: 'LIVE 2026-05-06. MEDVi ($179-299, editorial pick) vs Eden Health ($229-299, metabolic panel). MEDVi wins on price; Eden wins on included services.' },
  { path: '/compare/medvi-vs-ivim-health',    template: 'provider-vs-provider', tier: 'B', status: 'queued', targetKeyword: 'medvi vs ivim' },
  { path: '/compare/ivim-health-vs-eden-health', template: 'provider-vs-provider', tier: 'B', status: 'live',   targetKeyword: 'ivim vs eden', note: 'LIVE 2026-05-06. Ivim Health (microdosing specialist, VERIFY pricing) vs Eden Health ($229-299, verified). Editorial pick: Eden for verified pricing; Ivim for microdosing.' },
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
  { path: '/wegovy-vs-mounjaro',     template: 'medication-vs-medication', tier: 'B', status: 'live', targetKeyword: 'wegovy vs mounjaro',     volume: 6700,  kd: 24, estRevenueAtMaturity: 1005 },
  { path: '/ozempic-vs-mounjaro',    template: 'medication-vs-medication', tier: 'B', status: 'live', targetKeyword: 'ozempic vs mounjaro',    volume: 21000, kd: 54, estRevenueAtMaturity: 630 },
  { path: '/tirzepatide-vs-zepbound', template: 'medication-vs-medication', tier: 'B', status: 'live',   targetKeyword: 'tirzepatide vs zepbound', volume: 1500, kd: 9,  estRevenueAtMaturity: 630, note: 'LIVE 2026-05-06. Clarity page: tirz IS Zepbound. Branded ($1,086) vs compounded ($167-299) cost breakdown, FDA enforcement timeline, 4 provider cards, 6-FAQ schema.' },
  { path: '/semaglutide-vs-wegovy',  template: 'medication-vs-medication', tier: 'B', status: 'queued', targetKeyword: 'semaglutide vs wegovy' },
  { path: '/oral-semaglutide-vs-injection', template: 'medication-vs-medication', tier: 'B', status: 'live',   targetKeyword: 'oral semaglutide vs injection', volume: 600, note: 'LIVE 2026-05-06. Answer-first: injectable wins by wide margin. ~1% oral vs ~94% injectable bioavailability. PIONEER vs STEP-1 trial data. 4-format overview (Rybelsus T2D only). 4 provider cards (Strut/TMates/Eden/Embody), 6-FAQ schema.' },
  { path: '/wegovy-pill-vs-injection', template: 'medication-vs-medication', tier: 'B', status: 'live',   targetKeyword: 'oral wegovy', volume: 1400, kd: 31, note: 'LIVE 2026-05-06. Oral vs injectable Wegovy comparison. OASIS-1 (~15.1%) vs STEP-1 (~14.9%) trial data. Fasting protocol deep-dive. Brand-only pill vs compounded injectable pricing. 4 provider cards, 6-FAQ schema.' },
];

// ============================================================
// ALTERNATIVE FORMAT PAGES (sublingual, oral, tablets)
// ============================================================
const formatPages: PageRoute[] = [
  { path: '/sublingual-semaglutide', template: 'compounded-format', tier: 'A', status: 'live',   targetKeyword: 'sublingual semaglutide', volume: 4000,  kd: 19, estRevenueAtMaturity: 450, note: 'LIVE 2026-05-06. Under-tongue drops vs injectable. Honest bioavailability review: ~10-30% claimed (unverified) vs ~94% injectable. SNAC gap explained. TMates (confirmed) + DirectMeds (verify) as sublingual providers. 6-FAQ schema.' },
  { path: '/sublingual-tirzepatide', template: 'compounded-format', tier: 'B', status: 'queued', targetKeyword: 'sublingual tirzepatide', volume: 900,   kd: 3,  estRevenueAtMaturity: 101 },
  { path: '/oral-tirzepatide',       template: 'compounded-format', tier: 'A', status: 'queued', targetKeyword: 'oral tirzepatide',        volume: 6500,  kd: 8,  estRevenueAtMaturity: 731 },
  // /tirzepatide-tablets promoted to livePages 2026-05-05 (Batch 3)
  { path: '/semaglutide-tablets',    template: 'compounded-format', tier: 'B', status: 'queued', targetKeyword: 'semaglutide tablets',     volume: 12000, kd: 50 },
  { path: '/wegovy-pill',            template: 'compounded-format', tier: 'A', status: 'queued', targetKeyword: 'wegovy pill',             volume: 37000, kd: 41, estRevenueAtMaturity: 1665 },
];

// ============================================================
// MICRODOSING GLP-1 CLUSTER (Ivim USP)
// ============================================================
const microdosingPages: PageRoute[] = [
  { path: '/microdosing-tirzepatide',         template: 'microdosing-cluster', tier: 'A', status: 'live',   targetKeyword: 'microdosing tirzepatide',         volume: 7900, kd: 22, estRevenueAtMaturity: 711, note: 'LIVE 2026-05-06. SURMOUNT-1 dose-response table (5mg=15%, 10mg=19.5%, 15mg=20.9%). SURMOUNT-4 maintenance data. Three microdosing use cases. Ivim Health (microdosing specialist), TMates, Eden, MEDVi. 6-FAQ schema.' },
  { path: '/microdose-tirzepatide',           template: 'microdosing-cluster', tier: 'B', status: 'live',   targetKeyword: 'microdose tirzepatide',           volume: 3400, kd: 14, estRevenueAtMaturity: 383, note: 'LIVE 2026-05-06. Practical how-to companion to /microdosing-tirzepatide. Dose math table (5mg/mL and 10mg/mL vials), 4 dose tiers, administration steps. Ivim/TMates/MEDVi provider cards. 6-FAQ schema.' },
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
  // Specific high-volume peptide pages — many promoted to livePages in Batches 1-5
  // /nad-iv-therapy, /nad-nasal-spray, /lipotropic-injections, /sermorelin-for-weight-loss, /glutathione-injection now live
  { path: '/nad-injection',      template: 'peptide-stack', tier: 'B', status: 'live',   targetKeyword: 'nad+ injection',  volume: 2300,  kd: 15, note: 'LIVE 2026-05-06. SubQ vs IV vs nasal spray 3-way comparison. GLP-1 stack rationale (lean mass, sirtuin activation, fatigue management). Eden Health (editor pick), System Labs, Ivim. 6-FAQ schema.' },
];

// ============================================================
// COMMERCIAL-INTENT COMPARISON PAGES
// ============================================================
const commercialPages: PageRoute[] = [
  // /cheapest-tirzepatide-online and /best-compounded-tirzepatide promoted to livePages 2026-05-05
  { path: '/cheapest-semaglutide-online',     template: 'commercial-comparison', tier: 'B', status: 'live',   targetKeyword: 'cheapest semaglutide online',     volume: 350,  kd: 10, note: 'LIVE 2026-05-06. Strut ($99) vs TMates ($158) vs Embody ($149 intro) vs Eden ($229-249). Savings math: $14,412/yr vs Wegovy. 5-FAQ schema.' },
  { path: '/cheapest-compounded-tirzepatide', template: 'commercial-comparison', tier: 'B', status: 'live',   targetKeyword: 'cheapest compounded tirzepatide', volume: 600,  kd: 7,  note: 'LIVE 2026-05-06. Price table: TMates ($167 12-mo), MEDVi ($179-299), Eden ($229-299), Zepbound ($1,086+ comparison). What drives price differences section. 5-FAQ schema.' },
  { path: '/best-compounded-semaglutide',     template: 'commercial-comparison', tier: 'B', status: 'live', targetKeyword: 'best compounded semaglutide',     volume: 500,  kd: 34, note: 'NEW 2026-05-06. Listicle ranking the 6 best compounded sema providers with TMates + Strut at top.' },
];

// ============================================================
// STACK / COMBO PAGES
// ============================================================
const stackPages: PageRoute[] = [
  { path: '/tirzepatide-with-b12',         template: 'peptide-stack', tier: 'A', status: 'live',   targetKeyword: 'tirzepatide with b12',         volume: 1500, kd: 2, note: 'LIVE 2026-05-06. Why B12 is added, cyano vs methyl, evidence summary (no trials for combo), 4 provider cards, 6-FAQ schema.' },
  { path: '/semaglutide-with-b12',         template: 'peptide-stack', tier: 'B', status: 'live',   targetKeyword: 'semaglutide with b12',         volume: 1900, kd: 22, note: 'LIVE 2026-05-06. B12 rationale, evidence section (no trial data for combo), cyano vs methyl, 4 provider cards (Strut/TMates/Eden/Embody), 6-FAQ schema.' },
  { path: '/compounded-semaglutide-with-b12', template: 'peptide-stack', tier: 'B', status: 'live',   targetKeyword: 'compounded semaglutide with b12', volume: 1600, kd: 23, note: 'LIVE 2026-05-06. Compounded-specific angle (vs /semaglutide-with-b12 general query); pricing table $99-299, FDA regulatory timeline, B12 vs B6 FAQ, 6-FAQ schema.' },
  { path: '/glp-1-stack-guide',            template: 'peptide-stack', tier: 'C', status: 'queued', targetKeyword: 'glp-1 stack' },
];

// ============================================================
// SPECIAL SUSP / NEW MEDICATION PILLAR
// ============================================================
const newMedicationPages: PageRoute[] = [
  { path: '/compounded-liraglutide', template: 'compliance-pillar', tier: 'A', status: 'live',   targetKeyword: 'compounded liraglutide', volume: 600,  kd: 0, note: 'LIVE 2026-05-06. KD 0 virgin SERP. SCALE trial ~8% wt loss vs STEP-1 ~14.9% (sema) vs SURMOUNT-1 ~20.9% (tirz). Daily injection context. Ivim Health (confirmed), TMates/Eden (inquire). 6-FAQ schema.' },
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
  { path: '/match',                  template: 'match-quiz',      tier: 'A', status: 'live',   targetKeyword: 'find your glp-1 match', note: 'Quiz — central conversion mechanic. Flipped to live 2026-05-05.' },
  { path: '/tools/cost-calculator',  template: 'cost-calculator', tier: 'A', status: 'live',   targetKeyword: 'glp-1 cost calculator', note: 'Titration breakdown tool. Flipped to live 2026-05-05.' },
  { path: '/simulator',              template: 'simulator',       tier: 'B', status: 'future', targetKeyword: 'glp-1 weight loss simulator', note: 'V1.5 — defer to post-launch' },
  { path: '/compare',                template: 'compare-tool',    tier: 'A', status: 'queued', targetKeyword: 'compare glp-1 providers', note: 'Compare-tray UI for selecting providers' },
];

// ============================================================
// UTILITY PAGES (required for affiliate program approval)
// ============================================================
const utilityPages: PageRoute[] = [
  { path: '/about',                template: 'utility', tier: 'A', status: 'utility', note: 'Author bio + E-E-A-T' },
  { path: '/author/chad-simpson',  template: 'utility', tier: 'A', status: 'utility', note: 'Person schema, E-E-A-T — editorial credentials, affiliate + YMYL disclosure' },
  { path: '/methodology',          template: 'utility', tier: 'A', status: 'utility', note: 'How we evaluate providers' },
  { path: '/affiliate-disclosure', template: 'utility', tier: 'A', status: 'utility', note: 'FTC 16 CFR § 255 compliance' },
  { path: '/medical-disclaimer',   template: 'utility', tier: 'A', status: 'utility', note: 'YMYL — FDA/FTC compliance posture, not medical advice, compounded GLP-1 risk disclosure' },
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
