import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { VerifiedPricingBadge } from '@/components/glp1/VerifiedPricingBadge';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Award,
  AlertCircle,
  ExternalLink,
  Calendar,
  TrendingDown,
  FlaskConical,
} from 'lucide-react';

// =============================================================================
// /compare/medvi-vs-eden-health  (KD low, branded comparison SERP)
// =============================================================================
// MEDVi vs Eden Health: editorial pick (MEDVi) vs comprehensive metabolic
// monitoring leader (Eden Health).
// MEDVi: $179-$299/mo (sema + tirz), 33K brand searches, Gronk-verified May 2026
// Eden Health: $229-$249/mo sema, $229-$299/mo tirz, includes metabolic bloodwork,
//   Gronk-verified via Katalys active program ($300 CPA + tiers, EPC $3.92)
//
// Eden Health affiliate: ACTIVE on Katalys (offer #1435)
// MEDVi affiliate: PENDING Katalys (offer #1265)
// =============================================================================

export const metadata: Metadata = {
  title: 'MEDVi vs Eden Health 2026: Which Compounded GLP-1 Program Is Better? | GLP1CompareHub',
  description:
    'MEDVi vs Eden Health compared head-to-head: pricing, included services, metabolic bloodwork, and who each program is best for. Verified pricing May 2026. MEDVi wins on price; Eden wins on clinical support.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/medvi-vs-eden-health' },
  openGraph: {
    title: 'MEDVi vs Eden Health 2026: Compounded GLP-1 Head-to-Head',
    description:
      'Two top-tier compounded GLP-1 telehealth providers compared on price, included metabolic testing, and patient fit. Verified pricing, May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/medvi-vs-eden-health',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://glp1comparehub.com/compare' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'MEDVi vs Eden Health',
      item: 'https://glp1comparehub.com/compare/medvi-vs-eden-health',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEDVi vs Eden Health 2026: Which Compounded GLP-1 Telehealth Program Is Better?',
  description:
    'Head-to-head comparison of MEDVi (editorial pick, lowest verified price) and Eden Health (comprehensive metabolic panel included). Gronk-verified pricing, May 2026.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: {
    '@type': 'Person',
    name: 'Chad Simpson',
    url: 'https://glp1comparehub.com/author/chad-simpson',
  },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/compare/medvi-vs-eden-health',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, MEDVi or Eden Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi is cheaper at the entry level. MEDVi compounded semaglutide starts at $179/mo (range $179–$249/mo, Gronk-verified May 2026). Eden Health compounded semaglutide starts at $229/mo (range $229–$249/mo, Gronk-verified May 2026). The price gap narrows at higher doses — tirzepatide runs $229–$299/mo on both platforms — but MEDVi consistently comes in at or below Eden Health at every tier we have data on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Eden Health include bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health includes a comprehensive metabolic panel (CMP) as part of its program — this is a key differentiator. The metabolic bloodwork covers a standard panel used to monitor liver function, kidney function, electrolytes, and glucose, which are all relevant when taking GLP-1 agonists long-term. MEDVi does not include labs in its standard pricing (consistent with most mid-tier compounded GLP-1 programs). If ongoing lab monitoring is important to you, Eden Health provides more clinical infrastructure at its price point.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which provider is better for tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both MEDVi and Eden Health offer compounded tirzepatide in the $229–$299/mo range (Gronk-verified May 2026). The decision comes down to what else you want included: MEDVi gives you the lowest price point and is our editorial pick for cost-efficiency; Eden Health adds metabolic bloodwork to the same price range, which provides meaningful clinical oversight for a long-term tirzepatide protocol. For patients who want the most clinical support without paying for a full-service provider like Calibrate, Eden Health is the better tirzepatide choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEDVi or Eden Health better for first-time GLP-1 patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health is slightly better positioned for first-time patients, specifically because the included metabolic bloodwork creates a clinical baseline before you start and tracks relevant markers during treatment. MEDVi is an excellent choice for patients who have already completed an initial lab workup through their PCP or another provider and want a cost-efficient compounded GLP-1 program without redundant testing. First-timers who have not recently had bloodwork will get more value from Eden\'s all-in pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Eden Health $149 intro price work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health offers a $149 introductory first month, then ongoing pricing of $229–$249/mo for semaglutide or $229–$299/mo for tirzepatide (Gronk-verified May 2026). The intro price typically covers the first month\'s medication plus the initial consultation and sometimes the first metabolic panel. Confirm current intro offer terms directly with Eden Health at time of enrollment, as promotional pricing structures can change. MEDVi does not appear to offer a discounted intro month — pricing is a flat monthly range from the start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pick MEDVi or Eden Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pick MEDVi if price is the primary driver and you already have baseline labs from your own doctor. MEDVi\'s $179–$249/mo semaglutide pricing is the lowest verified rate among mid-tier providers in our stack, and the brand carries the highest organic search volume (33K monthly) — a strong patient-base trust signal. Pick Eden Health if you want metabolic bloodwork included in your program, a $149 first-month entry point, or you\'re starting a GLP-1 for the first time and want built-in lab oversight. Both are legitimate, verified programs — the choice comes down to clinical infrastructure vs. lowest price.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  medvi: string;
  eden: string;
  winner?: 'medvi' | 'eden' | 'tie';
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    medvi: '$179/mo (range $179–$249/mo)',
    eden: '$229/mo (range $229–$249/mo)',
    winner: 'medvi',
  },
  {
    label: 'Compounded Tirzepatide',
    medvi: '$229–$299/mo',
    eden: '$229–$299/mo',
    winner: 'tie',
  },
  {
    label: 'First-month intro price',
    medvi: 'Not published (flat monthly range)',
    eden: '$149 intro month',
    winner: 'eden',
  },
  {
    label: 'Metabolic bloodwork included',
    medvi: 'Not included (standard for this tier)',
    eden: 'Yes — comprehensive metabolic panel included',
    winner: 'eden',
  },
  {
    label: 'Physician consult included',
    medvi: 'Yes',
    eden: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Cancel anytime',
    medvi: 'Yes',
    eden: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Brand search volume (Ahrefs)',
    medvi: '~33,000/mo on "medvi" — highest in our stack',
    eden: 'Moderate (brand-specific data pending)',
    winner: 'medvi',
  },
  {
    label: 'Affiliate program status',
    medvi: 'Pending Katalys (offer #1265, $228 CPA)',
    eden: 'ACTIVE — Katalys offer #1435, $300+ CPA, EPC $3.92',
    winner: 'tie',
  },
  {
    label: 'Editorial badge',
    medvi: "Editor's Pick — lowest verified price + highest brand trust",
    eden: 'Best for comprehensive metabolic support',
    winner: 'tie',
  },
  {
    label: 'Pricing verification',
    medvi: 'Gronk-verified May 2026',
    eden: 'Gronk-verified May 2026 (Katalys active program)',
    winner: 'tie',
  },
];

export default function MedviVsEdenHealthPage() {
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'medvi-vs-eden-health');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'medvi-vs-eden-health');

  return (
    <GLP1Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GLP1Header />

      {/* Sticky mobile CTA — MEDVi is editorial pick */}
      <StickyMobileCTA
        href={medviUrl}
        brandName="MEDVi"
        pricePitch="Our pick — from $179/mo, sema + tirz"
      />

      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
            <Link
              href="/providers"
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-glp1-charcoal/70 hover:text-glp1-charcoal"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Providers
            </Link>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-orange">
              <Award className="h-3.5 w-3.5" /> Head-to-Head Comparison
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              MEDVi vs Eden Health 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two of the most data-backed compounded GLP-1 providers compared head-to-head. MEDVi wins
              on price and brand trust. Eden Health wins on included clinical support — metabolic
              bloodwork baked into the program.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk + Katalys" />
            </div>

            {/* Quick verdict banner */}
            <div className="mt-6 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-4 text-sm text-glp1-charcoal/90">
              <strong>Quick verdict:</strong> If price is your deciding factor, MEDVi ($179/mo entry) is
              the better choice. If you want metabolic bloodwork included without paying for a full
              concierge program, Eden Health ($229/mo + included CMP) is the smarter buy.
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* MEDVi — editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">MEDVi</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Editor&rsquo;s Pick
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Best for: lowest verified price + brand trust</p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  MEDVi offers the lowest Gronk-verified pricing in the mid-tier segment. Highest
                  organic brand-search volume of any provider in our stack (33K monthly) — a strong
                  proxy for patient volume and trust.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Semaglutide from <strong>$179/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Tirzepatide <strong>$229–$299/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>33,000 monthly brand searches — largest patient base signal</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Cancel anytime, physician-supervised</span>
                  </li>
                </ul>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit MEDVi <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Eden Health */}
              <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">
                    Best Clinical Support
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Best for: comprehensive metabolic monitoring</p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Eden Health includes a comprehensive metabolic panel in every plan — meaningful
                  clinical oversight that most mid-tier providers skip. Intro month at $149.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Semaglutide <strong>$229–$249/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Tirzepatide <strong>$229–$299/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      <strong>Metabolic bloodwork included</strong> — comprehensive metabolic panel
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>$149 intro first month</span>
                  </li>
                </ul>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Eden Health <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FULL COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              All pricing Gronk-verified May 2026. Eden Health data also cross-referenced against
              active Katalys affiliate program.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">MEDVi</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Eden Health</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'medvi'
                            ? 'font-semibold text-green-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.medvi}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'eden'
                            ? 'font-semibold text-green-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.eden}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ PRICING DEEP DIVE ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Pricing Deep Dive</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* MEDVi pricing */}
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">MEDVi — Verified Range</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Compounded Semaglutide
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$179–$249/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Compounded Tirzepatide
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$229–$299/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Labs included
                  </div>
                  <p className="text-sm text-glp1-charcoal/85">Not included</p>
                  <div className="mt-3">
                    <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" />
                  </div>
                </div>
              </div>

              {/* Eden Health pricing */}
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Eden Health — Verified Range</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Intro First Month
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$149</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Compounded Semaglutide (ongoing)
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$229–$249/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Compounded Tirzepatide (ongoing)
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$229–$299/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Labs included
                  </div>
                  <p className="mb-3 text-sm font-semibold text-green-700">
                    Yes — comprehensive metabolic panel
                  </p>
                  <div className="mt-1">
                    <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk + Katalys" />
                  </div>
                </div>
              </div>
            </div>

            {/* Price gap callout */}
            <div className="mt-8 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-5">
              <div className="flex items-start gap-2">
                <TrendingDown className="h-5 w-5 shrink-0 text-glp1-orange mt-0.5" />
                <div>
                  <h4 className="mb-2 font-serif text-lg text-glp1-charcoal">
                    The $50/mo gap: price vs. included bloodwork
                  </h4>
                  <p className="text-sm text-glp1-charcoal/85">
                    MEDVi starts at $179/mo; Eden Health starts at $229/mo — a $50/mo difference. Over
                    12 months that&rsquo;s $600. Standalone lab panels (comprehensive metabolic) cost
                    $30–$80 at walk-in labs (LabCorp, Quest). If you get labs quarterly through Eden,
                    you&rsquo;re paying ~$12.50/mo extra per panel — well within the cost of standalone
                    testing. The bloodwork inclusion is genuinely cost-efficient at Eden&rsquo;s pricing,
                    especially for patients who would otherwise order separate labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ METABOLIC BLOODWORK DEEP DIVE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Why the Metabolic Panel Matters
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              GLP-1 agonists affect multiple organ systems — most meaningfully the GI tract, pancreas,
              and kidneys. A comprehensive metabolic panel (CMP) gives your provider a clinical baseline
              before you start and tracks markers that can shift on GLP-1 therapy.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  marker: 'Kidney Function (BUN, Creatinine)',
                  why: 'GLP-1 medications affect fluid retention; dehydration risk is real at higher doses.',
                },
                {
                  marker: 'Liver Enzymes (ALT, AST)',
                  why: 'Compounded formulations are metabolized hepatically; baseline liver health matters.',
                },
                {
                  marker: 'Blood Glucose (Fasting)',
                  why: 'GLP-1 agonists lower blood sugar — baseline and periodic checks flag hypoglycemia risk.',
                },
                {
                  marker: 'Electrolytes (Na, K, Cl, CO2)',
                  why: 'Reduced food intake can shift electrolyte balance, especially on rapid titration.',
                },
                {
                  marker: 'Total Protein + Albumin',
                  why: 'Rapid weight loss can affect protein stores; monitoring prevents muscle loss.',
                },
                {
                  marker: 'Calcium',
                  why: 'Included in standard CMP; relevant for bone health monitoring on calorie-restricted protocols.',
                },
              ].map((item) => (
                <div
                  key={item.marker}
                  className="rounded-lg border border-glp1-charcoal/10 bg-white p-4"
                >
                  <div className="mb-1 flex items-center gap-1.5">
                    <FlaskConical className="h-4 w-4 text-glp1-orange" />
                    <span className="text-sm font-semibold text-glp1-charcoal">{item.marker}</span>
                  </div>
                  <p className="text-xs text-glp1-charcoal/70">{item.why}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-glp1-charcoal/70">
              <strong>Note:</strong> This page does not constitute medical advice. Consult a licensed
              physician to determine which monitoring protocol is appropriate for your specific health
              history.{' '}
              <Link href="/medical-disclaimer" className="underline">
                Full medical disclaimer
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ============ WHO SHOULD PICK WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Who Should Pick Which?</h2>

            <div className="space-y-5">
              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick MEDVi if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      Price is the primary driver — MEDVi&rsquo;s $179/mo entry is $50/mo below Eden
                      Health.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You already have recent bloodwork from your PCP or another provider and don&rsquo;t
                      need a built-in lab panel.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want the provider with the largest verified patient base (33K monthly brand
                      searches) as a trust signal.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>You want both semaglutide and tirzepatide available at the same platform.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick Eden Health if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want metabolic bloodwork included — especially relevant for first-time GLP-1
                      patients establishing a baseline.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      The $149 intro month is appealing — it lowers the cost of trying the program
                      before committing to ongoing pricing.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You value clinical infrastructure — a provider that integrates lab monitoring
                      into its protocol, not just prescription fulfillment.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want to work with a provider that our editorial team has an active, verified
                      affiliate relationship with (Katalys, offer #1435).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ VERDICT ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">Our Verdict</h2>

            <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-6 shadow-sm">
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>MEDVi is our editorial pick for this comparison.</strong> The $179/mo starting
                price is the lowest Gronk-verified rate among mid-tier providers in our stack, and 33K
                monthly brand searches signal a large, established patient base. For cost-sensitive
                patients who already have baseline labs, MEDVi is the optimal choice.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>Eden Health wins on included clinical infrastructure.</strong> The comprehensive
                metabolic panel bundled at $229–$249/mo makes Eden Health one of the few mid-tier
                providers that actively monitors your health markers rather than just fulfilling
                prescriptions. For first-time patients and anyone who hasn&rsquo;t had recent bloodwork,
                Eden Health provides more value per dollar than the sticker price suggests.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                Both are legitimate, Gronk-verified programs. The choice is genuinely a price vs.
                clinical support tradeoff — not a quality-vs-quality decision.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit MEDVi — from $179/mo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Eden Health — labs included <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((q) => (
                <details
                  key={q.name}
                  className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4"
                >
                  <summary className="cursor-pointer font-semibold text-glp1-charcoal">
                    {q.name}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-glp1-charcoal/85">
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>

            {/* Cross-links */}
            <div className="mt-10 border-t border-glp1-charcoal/10 pt-6">
              <p className="mb-4 text-sm font-semibold text-glp1-charcoal/70">Related comparisons</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/compare/trimrx-vs-medvi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  TrimRx vs MEDVi <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/ivim-health-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Ivim Health vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/skinnyrx-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  SkinnyRx vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/best-compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Best Compounded Tirzepatide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Compounded Tirzepatide Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-6 text-xs text-glp1-charcoal/50">
              <Link href="/affiliate-disclosure" className="underline">
                Affiliate disclosure
              </Link>{' '}
              · This page contains compensated links. We earn a commission if you enroll through our
              links — at no extra cost to you.
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
