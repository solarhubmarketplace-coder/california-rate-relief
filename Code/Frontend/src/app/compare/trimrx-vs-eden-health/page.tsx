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
  FlaskConical,
  TrendingDown,
} from 'lucide-react';

// =============================================================================
// /compare/trimrx-vs-eden-health  (KD low, branded comparison SERP)
// =============================================================================
// TrimRx vs Eden Health:
// TrimRx = $179+ entry confirmed (via active affiliate programs). Full catalog
//   pricing is SPA-blocked — higher tiers require VERIFY flags. VERIFY also
//   applies to tirzepatide pricing, included services beyond entry tier.
// Eden Health = $229–$249/mo sema, $229–$299/mo tirz, includes metabolic
//   bloodwork. Gronk-verified May 2026. Active Katalys program ($300 CPA).
//
// Editorial pick: Eden Health (fully verified pricing + included bloodwork)
// StickyMobileCTA: Eden Health
// Data caveat banner: TrimRx full catalog SPA-blocked; $179 entry confirmed;
//   higher tiers require direct verification.
// =============================================================================

export const metadata: Metadata = {
  title: 'TrimRx vs Eden Health 2026: Which Compounded GLP-1 Program Is Better? | GLP1CompareHub',
  description:
    'TrimRx vs Eden Health compared head-to-head: Eden Health wins with fully verified pricing ($229/mo) and included metabolic bloodwork. TrimRx entry price confirmed at $179+; full catalog requires verification. Updated May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/trimrx-vs-eden-health' },
  openGraph: {
    title: 'TrimRx vs Eden Health 2026: Compounded GLP-1 Head-to-Head',
    description:
      'Eden Health: fully verified pricing, metabolic bloodwork included, $149 intro month. TrimRx entry confirmed at $179+; full catalog SPA-blocked. Detailed comparison, May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/trimrx-vs-eden-health',
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
      name: 'TrimRx vs Eden Health',
      item: 'https://glp1comparehub.com/compare/trimrx-vs-eden-health',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TrimRx vs Eden Health 2026: Which Compounded GLP-1 Telehealth Program Is Better?',
  description:
    'Head-to-head comparison of TrimRx (entry $179+ confirmed, full catalog SPA-blocked) and Eden Health (fully Gronk-verified pricing, metabolic bloodwork included). Editorial pick: Eden Health.',
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
    '@id': 'https://glp1comparehub.com/compare/trimrx-vs-eden-health',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, TrimRx or Eden Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrimRx has a confirmed entry price of $179+/mo. Eden Health starts at $229–$249/mo for semaglutide ongoing (Gronk-verified), but also offers a $149 intro first month. The entry price favors TrimRx, but we cannot confirm TrimRx\'s higher-dose tiers — their full catalog is SPA-blocked and requires direct verification at trimrx.com. At entry level: TrimRx starts lower ($179+). At higher dose tiers or on tirzepatide: verify TrimRx pricing directly before comparing. Eden Health\'s full sema and tirz ranges are confirmed ($229–$249/mo and $229–$299/mo respectively).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Eden Health or TrimRx better for semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For semaglutide, Eden Health is our editorial pick due to fully verified pricing and included metabolic bloodwork. Eden Health runs $229–$249/mo for compounded semaglutide (Gronk-verified May 2026) with a comprehensive metabolic panel built in — meaningful clinical infrastructure that TrimRx does not confirm at the same price point. TrimRx starts at $179+/mo for semaglutide at entry level, which is cheaper at the starting dose, but higher-tier sema pricing is not confirmed. If bloodwork as a program inclusion is important, Eden Health is the clear choice. If entry-level price is the primary driver, TrimRx\'s $179+ is worth verifying against your actual dose tier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Eden Health include bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health includes a comprehensive metabolic panel (CMP) as a standard program inclusion — this is one of the most significant differentiators between Eden Health and most mid-tier compounded GLP-1 providers. The CMP covers kidney function (BUN, creatinine), liver enzymes (ALT, AST), fasting blood glucose, electrolytes, and additional markers relevant to GLP-1 therapy. TrimRx\'s included services require verification — we do not have confirmed data on whether their standard pricing includes lab monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is TrimRx\'s full catalog pricing not available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrimRx\'s website uses a single-page application (SPA) architecture that restricts full pricing catalog visibility to users who complete an intake questionnaire. Our crawl was able to confirm the entry price ($179+/mo) but could not access higher-dose tiers or the complete tirzepatide catalog without completing intake. This is a common pattern among telehealth providers — pricing is personalized based on your intake data rather than published in full on a public pricing page. To get a complete TrimRx quote, visit trimrx.com and complete their intake. Compare the result against Eden Health\'s published rates ($229–$249/mo sema, $229–$299/mo tirz, $149 intro month).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Eden Health $149 intro month work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health offers a $149 introductory first month, then ongoing pricing of $229–$249/mo for semaglutide or $229–$299/mo for tirzepatide (Gronk-verified May 2026). The intro price typically covers the first month\'s medication plus the initial consultation and often includes the first metabolic panel. Confirm current intro offer terms directly with Eden Health at time of enrollment — promotional pricing structures can change. TrimRx\'s intro or first-month pricing structure requires direct verification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose TrimRx or Eden Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose Eden Health if you want: fully verified pricing with no data gaps, a $149 intro month, and metabolic bloodwork included in the program. Eden Health is our editorial pick for this comparison for all three reasons. Choose TrimRx if: you are price-sensitive at the entry level ($179+ vs. $229+), verify their pricing directly for your specific dose tier, and their confirmed costs come in meaningfully lower than Eden Health with comparable included services. Both are legitimate telehealth programs operating in the compounded GLP-1 space — the difference is that Eden Health has complete, verified data and TrimRx requires direct verification for anything beyond the entry price.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  trimrx: string;
  eden: string;
  winner?: 'trimrx' | 'eden' | 'tie';
  trimrxVerify?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    trimrx: '$179+/mo (entry confirmed; higher tiers VERIFY)',
    eden: '$229/mo (range $229–$249/mo, Gronk-verified)',
    winner: 'trimrx',
  },
  {
    label: 'Semaglutide — higher dose tiers',
    trimrx: 'VERIFY (SPA-blocked — complete intake at trimrx.com)',
    eden: 'Up to $249/mo (Gronk-verified)',
    winner: 'eden',
    trimrxVerify: true,
  },
  {
    label: 'Compounded Tirzepatide',
    trimrx: 'VERIFY (catalog SPA-blocked)',
    eden: '$229–$299/mo (Gronk-verified)',
    winner: 'eden',
    trimrxVerify: true,
  },
  {
    label: 'First-month intro price',
    trimrx: 'VERIFY',
    eden: '$149 intro month (Gronk-verified)',
    winner: 'eden',
    trimrxVerify: true,
  },
  {
    label: 'Metabolic bloodwork included',
    trimrx: 'VERIFY',
    eden: 'Yes — comprehensive metabolic panel included',
    winner: 'eden',
    trimrxVerify: true,
  },
  {
    label: 'Physician consult included',
    trimrx: 'Yes',
    eden: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Cancel anytime',
    trimrx: 'Yes',
    eden: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Full catalog pricing transparency',
    trimrx: 'SPA-blocked — intake required for full pricing',
    eden: 'Published — full range confirmed via Gronk',
    winner: 'eden',
  },
  {
    label: 'Affiliate program status',
    trimrx: 'Active (confirmed through affiliate network)',
    eden: 'ACTIVE — Katalys offer #1435, $300+ CPA, EPC $3.92',
    winner: 'eden',
  },
  {
    label: 'Editorial pick',
    trimrx: 'No — full catalog unverified',
    eden: 'Yes — fully verified pricing + bloodwork included',
    winner: 'eden',
  },
  {
    label: 'Pricing verification status',
    trimrx: 'PARTIAL — $179+ entry confirmed; full catalog VERIFY',
    eden: 'Gronk-verified May 2026 (Katalys active program)',
    winner: 'eden',
  },
];

export default function TrimRxVsEdenHealthPage() {
  const trimrxUrl = buildGlp1AffiliateUrl('trimrx', 'trimrx-vs-eden-health');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'trimrx-vs-eden-health');

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

      {/* Sticky mobile CTA — Eden Health (editorial pick, fully verified) */}
      <StickyMobileCTA
        href={edenUrl}
        brandName="Eden Health"
        pricePitch="Our pick — $149 intro, labs included, fully verified"
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
              TrimRx vs Eden Health 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two mid-tier compounded GLP-1 telehealth programs with different data situations. Eden
              Health pricing is fully Gronk-verified — $229/mo semaglutide, metabolic bloodwork
              included, $149 intro month. TrimRx entry price is confirmed at $179+; the full catalog
              is SPA-blocked and requires direct verification.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk + Katalys" variant="compact" />
            </div>

            {/* TrimRx data caveat */}
            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong>TrimRx full catalog SPA-blocked:</strong> TrimRx entry price of{' '}
                  <strong>$179+/mo</strong> is confirmed. Higher dose tiers and the full tirzepatide
                  catalog are only accessible after completing their intake questionnaire — our crawl
                  returned partial data. All fields beyond entry are flagged{' '}
                  <span className="italic font-semibold">VERIFY</span>. Visit{' '}
                  <strong>trimrx.com</strong> to get your personalized quote. Eden Health pricing is
                  fully Gronk-verified.
                </div>
              </div>
            </div>

            {/* Quick verdict */}
            <div className="mt-4 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-4 text-sm text-glp1-charcoal/90">
              <strong>Quick verdict:</strong> Eden Health is our editorial pick. Fully verified
              pricing, included metabolic bloodwork, and a $149 intro month. TrimRx is worth checking
              if entry-level price is your primary driver — verify their full quote at trimrx.com
              before comparing higher dose tiers.
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* TrimRx */}
              <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">TrimRx</h3>
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                    Full Catalog — VERIFY
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: entry-level pricing (verify higher tiers)
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  TrimRx is a recognized compounded GLP-1 telehealth program with a confirmed entry
                  price of $179+/mo. Their full pricing catalog is SPA-blocked — to compare
                  higher dose tiers, complete their intake at trimrx.com.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      Semaglutide from <strong>$179+/mo</strong> (entry confirmed)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Physician-supervised program</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Cancel anytime</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Higher dose tiers — VERIFY at trimrx.com</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Tirzepatide pricing — VERIFY</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Bloodwork inclusion — VERIFY</span>
                  </li>
                </ul>
                <a
                  href={trimrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit TrimRx (verify full pricing) <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Eden Health — editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Editor&rsquo;s Pick
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: fully verified pricing + metabolic monitoring
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Eden Health is the most fully verified provider in this comparison — complete
                  pricing for both sema and tirz, metabolic bloodwork included, and a $149 intro
                  month. One of the few mid-tier programs with built-in lab monitoring.
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
                    <span>
                      <strong>$149 intro month</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Cancel anytime, physician-supervised</span>
                  </li>
                </ul>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit Eden Health — $149 intro, labs included <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FULL COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-2 text-sm text-glp1-charcoal/70">
              Eden Health data Gronk-verified May 2026 + Katalys active program. TrimRx cells marked{' '}
              <span className="italic text-yellow-700 font-semibold">VERIFY</span> require direct
              confirmation at trimrx.com.
            </p>
            <div className="mb-6">
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk + Katalys" variant="compact" />
            </div>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">TrimRx</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Eden Health</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'trimrx'
                            ? 'font-semibold text-green-700'
                            : row.trimrxVerify
                            ? 'italic text-yellow-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.trimrx}
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
              {/* TrimRx pricing */}
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">TrimRx — Partial Data</h3>
                <div className="rounded-lg border border-yellow-200 bg-yellow-50/30 p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Semaglutide — Entry
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$179+/mo</strong>{' '}
                    <span className="ml-1 text-xs font-semibold text-green-700">Confirmed</span>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Higher dose tiers
                  </div>
                  <p className="mb-3 text-sm italic text-yellow-700 font-semibold">
                    VERIFY — SPA-blocked, complete intake at trimrx.com
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Tirzepatide
                  </div>
                  <p className="mb-3 text-sm italic text-yellow-700 font-semibold">
                    VERIFY — catalog not accessible without intake
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Labs included
                  </div>
                  <p className="text-sm italic text-yellow-700 font-semibold">VERIFY</p>
                </div>
              </div>

              {/* Eden Health pricing */}
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Eden Health — Fully Verified</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Intro First Month
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$149</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Semaglutide (ongoing)
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$229–$249/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Tirzepatide (ongoing)
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
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk + Katalys" />
                </div>
              </div>
            </div>

            {/* Price comparison analysis */}
            <div className="mt-8 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-5">
              <div className="flex items-start gap-2">
                <TrendingDown className="h-5 w-5 shrink-0 text-glp1-orange mt-0.5" />
                <div>
                  <h4 className="mb-2 font-serif text-lg text-glp1-charcoal">
                    Entry price vs. total program cost
                  </h4>
                  <p className="text-sm text-glp1-charcoal/85">
                    TrimRx&rsquo;s $179+/mo entry is $50/mo below Eden Health&rsquo;s $229/mo
                    starting rate. Over 12 months at entry dose, that&rsquo;s $600 in savings. The
                    key question is whether TrimRx maintains that gap at higher dose tiers — which we
                    cannot confirm without completing their intake — and whether Eden Health&rsquo;s
                    included metabolic bloodwork offsets the price difference. A comprehensive
                    metabolic panel at a walk-in lab (LabCorp, Quest) runs $30–$80. Quarterly lab
                    monitoring through Eden is approximately $12.50/mo in effective cost per panel —
                    meaning the $50/mo gap narrows significantly once you factor in the value of
                    built-in labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BLOODWORK SECTION ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Eden Health&rsquo;s Included Metabolic Panel
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              The comprehensive metabolic panel (CMP) bundled into Eden Health&rsquo;s program covers
              the key markers that shift on GLP-1 therapy. For first-time patients establishing a
              baseline, or patients on long-term protocols needing periodic monitoring, this is
              meaningful clinical infrastructure.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  marker: 'Kidney Function (BUN, Creatinine)',
                  why: 'GLP-1 medications affect fluid retention; dehydration risk increases at higher doses.',
                },
                {
                  marker: 'Liver Enzymes (ALT, AST)',
                  why: 'Compounded formulations are metabolized hepatically; baseline liver health matters for safety.',
                },
                {
                  marker: 'Blood Glucose (Fasting)',
                  why: 'GLP-1 agonists lower blood sugar — baseline and periodic checks identify hypoglycemia risk.',
                },
                {
                  marker: 'Electrolytes (Na, K, Cl, CO2)',
                  why: 'Reduced food intake on GLP-1 therapy can shift electrolyte balance, particularly on rapid titration.',
                },
                {
                  marker: 'Total Protein + Albumin',
                  why: 'Rapid weight loss can affect protein stores — monitoring helps preserve muscle mass.',
                },
                {
                  marker: 'Calcium',
                  why: 'Standard CMP inclusion; relevant for bone health monitoring on calorie-restricted protocols.',
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
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick Eden Health if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want fully verified pricing with no data gaps — Eden Health&rsquo;s complete
                      sema ($229–$249/mo) and tirz ($229–$299/mo) ranges are Gronk-confirmed.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      Metabolic bloodwork included in the program is important to you — especially
                      relevant for first-time GLP-1 patients establishing a baseline.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      The $149 intro month lowers your cost of entry — meaningful if you&rsquo;re
                      trialing the program before committing to ongoing rates.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want both semaglutide and tirzepatide available with fully confirmed pricing
                      for both.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Consider TrimRx if:
                </h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      Entry-level price is your primary driver — TrimRx starts at $179+/mo (confirmed),
                      which is $50/mo below Eden Health&rsquo;s $229/mo.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You are willing to complete TrimRx&rsquo;s intake at trimrx.com to get a full
                      personalized quote including higher dose tiers and tirzepatide pricing.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      The verified full-catalog quote from TrimRx comes in below Eden Health at your
                      target dose tier with comparable services.
                    </span>
                  </li>
                </ul>
                <div className="mt-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-xs text-yellow-900">
                  <strong>Our recommendation:</strong> Complete TrimRx&rsquo;s intake at trimrx.com
                  to get a full price quote. Do not compare only the $179+ entry against Eden
                  Health&rsquo;s $229/mo — confirm your specific dose tier pricing before deciding.
                </div>
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
                <strong>Eden Health is our editorial pick for this comparison.</strong> Fully
                Gronk-verified pricing for both semaglutide and tirzepatide, a comprehensive
                metabolic panel built into the program, and a $149 intro month. It is the most
                completely verified and transparently priced option in this head-to-head.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>TrimRx is not disqualified — it has a legitimate entry advantage.</strong>{' '}
                The $179+ confirmed entry price is $50/mo below Eden Health at the starting dose. For
                patients who are price-sensitive and willing to run through TrimRx&rsquo;s intake to
                get a full personalized quote, there is a genuine case to make — particularly if the
                higher-tier pricing comes in below Eden Health&rsquo;s rates once confirmed.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                For patients who want to enroll in a verified program now without completing a
                pricing questionnaire first, Eden Health is the clean choice. The metabolic
                bloodwork inclusion at $229/mo is genuine added value — not just a marketing feature.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit Eden Health — $149 intro, labs included <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={trimrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit TrimRx (verify full pricing) <ExternalLink className="h-4 w-4" />
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

            {/* Related pages */}
            <div className="mt-10 border-t border-glp1-charcoal/10 pt-6">
              <p className="mb-4 text-sm font-semibold text-glp1-charcoal/70">Related comparisons</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/compare/medvi-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  MEDVi vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/ivim-health-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Ivim Health vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/trimrx-vs-medvi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  TrimRx vs MEDVi <ArrowRight className="h-4 w-4" />
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
                  href="/cheapest-tirzepatide-online"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Cheapest Tirzepatide Online 2026 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-6 text-xs text-glp1-charcoal/50">
              <Link href="/affiliate-disclosure" className="underline">
                Affiliate disclosure
              </Link>{' '}
              · This page contains compensated links. We may earn a commission if you enroll through
              our links — at no extra cost to you. Eden Health is an active program on Katalys (offer
              #1435, $300+ CPA). TrimRx affiliate is active through a separate affiliate network.
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
