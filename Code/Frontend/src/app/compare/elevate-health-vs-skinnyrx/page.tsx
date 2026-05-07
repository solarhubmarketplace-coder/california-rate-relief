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
import { ArrowRight, Check, X, Minus, ExternalLink, Award, AlertCircle } from 'lucide-react';

// =============================================================================
// /compare/elevate-health-vs-skinnyrx
// =============================================================================
// Neither provider has independently verified pricing as of May 2026.
// Editorial pick: SkinnyRx (stronger brand presence + comprehensive program
// positioning). $500 CPA Katalys potential for SkinnyRx pending approval.
// StickyMobileCTA → SkinnyRx
// Verified alternatives callout: Strut Health ($99/mo) + MEDVi ($179–299/mo)
// =============================================================================

export const metadata: Metadata = {
  title: 'Elevate Health vs SkinnyRx 2026: Which Compounded GLP-1 Program Wins? | GLP1CompareHub',
  description:
    'Elevate Health vs SkinnyRx compared: programs, features, and who each platform suits best. Neither provider\'s pricing is independently verified — we flag all cost figures and recommend verified alternatives.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/elevate-health-vs-skinnyrx' },
  openGraph: {
    title: 'Elevate Health vs SkinnyRx 2026: Compounded GLP-1 Comparison',
    description:
      'SkinnyRx edges out Elevate Health on brand presence and program breadth, but neither provider has verified pricing. See our recommended verified alternatives.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/elevate-health-vs-skinnyrx',
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
      name: 'Elevate Health vs SkinnyRx',
      item: 'https://glp1comparehub.com/compare/elevate-health-vs-skinnyrx',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Elevate Health vs SkinnyRx 2026: Compounded GLP-1 Telehealth Comparison',
  description:
    'Head-to-head comparison of Elevate Health and SkinnyRx compounded GLP-1 programs. Pricing for both providers requires direct verification. SkinnyRx is our conditional editorial pick based on brand strength. Includes verified alternative providers.',
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
    '@id': 'https://glp1comparehub.com/compare/elevate-health-vs-skinnyrx',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, Elevate Health or SkinnyRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither Elevate Health nor SkinnyRx pricing has been independently verified by our team as of May 2026. We cannot make a direct price comparison without confirmed data. Visit each provider\'s site to get a current quote, then compare against verified providers like Strut Health ($99/mo, Gronk-confirmed) or MEDVi ($179–$299/mo, Gronk-confirmed) as a benchmark.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is SkinnyRx the editorial pick over Elevate Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx is our conditional editorial pick in this comparison because of stronger market brand presence and a more comprehensively positioned program that covers both compounded semaglutide and tirzepatide. This is a relative pick only — neither provider has verified pricing in our system. SkinnyRx also carries a $500 CPA potential on Katalys pending approval, which we disclose in our affiliate disclosure. We recommend verifying SkinnyRx pricing directly before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Elevate Health offer compounded tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elevate Health\'s compounded tirzepatide availability requires direct verification at their site. Their program is positioned as a compounded GLP-1 telehealth provider, but specific medication availability, pricing, and dosing options have not been confirmed through our independent verification process as of May 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are verified alternatives to Elevate Health and SkinnyRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If verified pricing matters to you before enrolling, two providers have confirmed pricing in our stack: Strut Health at $99/mo (Gronk-verified, compounded semaglutide) and MEDVi at $179–$299/mo (Gronk-verified, both semaglutide and tirzepatide). Eden Health ($229–$299/mo) includes metabolic bloodwork at intake and is also fully verified. These benchmarks let you evaluate whatever quote you receive from Elevate Health or SkinnyRx.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SkinnyRx include metabolic bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx\'s included services require direct verification — we cannot confirm whether their program includes metabolic bloodwork or lab monitoring as of May 2026. If bloodwork at intake is important to you, Eden Health is the verified option in our stack that explicitly includes a comprehensive metabolic panel in their program at $229–$249/mo for compounded semaglutide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to use a compounded GLP-1 from providers like Elevate Health or SkinnyRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded GLP-1 medications — including semaglutide and tirzepatide — are prepared by 503A compounding pharmacies under physician prescription and are legal under U.S. law. They are not FDA-approved drugs and are not bioequivalent-tested against branded products (Ozempic, Wegovy, Mounjaro, Zepbound). Whether a specific provider uses a reputable 503A pharmacy requires verification with that provider. Consult a licensed physician before starting any GLP-1 program.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  elevate: string;
  skinnyrx: string;
  winner?: 'elevate' | 'skinnyrx' | 'tie';
  elevateVerify?: boolean;
  skinnyrxVerify?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — price',
    elevate: 'VERIFY (not confirmed as of May 2026)',
    skinnyrx: 'VERIFY (not confirmed as of May 2026)',
    winner: 'tie',
    elevateVerify: true,
    skinnyrxVerify: true,
  },
  {
    label: 'Compounded Tirzepatide',
    elevate: 'VERIFY (availability not confirmed)',
    skinnyrx: 'VERIFY (availability not confirmed)',
    winner: 'tie',
    elevateVerify: true,
    skinnyrxVerify: true,
  },
  {
    label: 'Program breadth',
    elevate: 'Compounded GLP-1 telehealth',
    skinnyrx: 'Comprehensive — sema + tirz, multiple weight-loss formulations',
    winner: 'skinnyrx',
  },
  {
    label: 'Brand market presence',
    elevate: 'Lower — limited brand search data',
    skinnyrx: 'Stronger — recognized GLP-1 telehealth brand',
    winner: 'skinnyrx',
  },
  {
    label: 'Metabolic bloodwork included',
    elevate: 'VERIFY',
    skinnyrx: 'VERIFY',
    winner: 'tie',
    elevateVerify: true,
    skinnyrxVerify: true,
  },
  {
    label: 'Physician consult included',
    elevate: 'VERIFY',
    skinnyrx: 'Yes (standard for this tier)',
    winner: 'skinnyrx',
    elevateVerify: true,
  },
  {
    label: 'Cancel anytime',
    elevate: 'VERIFY',
    skinnyrx: 'VERIFY',
    winner: 'tie',
    elevateVerify: true,
    skinnyrxVerify: true,
  },
  {
    label: 'Pricing verification status',
    elevate: 'NOT VERIFIED — check elevatehealth.com directly',
    skinnyrx: 'NOT VERIFIED — check skinnyrx.com directly',
    winner: 'tie',
    elevateVerify: true,
    skinnyrxVerify: true,
  },
  {
    label: 'Editorial pick',
    elevate: 'No',
    skinnyrx: 'Conditional yes — stronger brand positioning',
    winner: 'skinnyrx',
  },
];

export default function ElevateHealthVsSkinnyRxPage() {
  const skinnyrxUrl = buildGlp1AffiliateUrl('skinnyrx', 'compare-elevate-health-vs-skinnyrx');
  const elevateUrl = buildGlp1AffiliateUrl('elevate-health', 'compare-elevate-health-vs-skinnyrx');
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'compare-elevate-health-vs-skinnyrx');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'compare-elevate-health-vs-skinnyrx');

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

      {/* Sticky mobile CTA — SkinnyRx is conditional editorial pick */}
      <StickyMobileCTA
        href={skinnyrxUrl}
        brandName="SkinnyRx"
        pricePitch="Our pick — comprehensive program (verify pricing)"
      />

      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-glp1-charcoal/60">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:text-glp1-charcoal">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/compare" className="hover:text-glp1-charcoal">Compare</Link></li>
                <li aria-hidden>/</li>
                <li className="text-glp1-charcoal/90">Elevate Health vs SkinnyRx</li>
              </ol>
            </nav>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-orange">
              <Award className="h-3.5 w-3.5" /> Head-to-Head Comparison
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Elevate Health vs SkinnyRx 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two compounded GLP-1 telehealth providers compared. Neither Elevate Health nor SkinnyRx
              has pricing independently verified by our team as of May 2026. SkinnyRx is our
              conditional editorial pick based on brand positioning and program breadth — but we
              strongly recommend checking verified alternatives below before deciding.
            </p>

            {/* Both unverified — critical alert */}
            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-yellow-700" />
                <div>
                  <strong>Neither provider&rsquo;s pricing is independently verified.</strong> Elevate
                  Health and SkinnyRx pricing figures on this page are flagged{' '}
                  <span className="italic font-semibold">VERIFY</span> and should be confirmed
                  directly at each provider&rsquo;s site before enrollment. For side-by-side shopping
                  with confirmed numbers, see our{' '}
                  <Link href="/cheapest-semaglutide-online" className="underline hover:text-yellow-800">
                    verified pricing guide
                  </Link>
                  .
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-4 text-sm text-glp1-charcoal/90">
              <strong>Quick verdict:</strong> SkinnyRx is our conditional editorial pick over
              Elevate Health on brand strength and program comprehensiveness. Neither has confirmed
              pricing — if verified costs matter before you enroll, scroll to our{' '}
              <strong>verified alternatives</strong> section below (Strut Health at $99/mo and MEDVi
              at $179/mo are both confirmed).
            </div>

            <div className="mt-4 text-xs text-glp1-charcoal/50">
              Updated May 6, 2026 &bull; <Link href="/affiliate-disclosure" className="underline hover:text-glp1-charcoal">Affiliate Disclosure</Link>
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Elevate Health */}
              <div className="rounded-xl border-2 border-yellow-300/60 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Elevate Health</h3>
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                    Pricing — VERIFY
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Best for: TBD pending pricing verification</p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Elevate Health is a compounded GLP-1 telehealth provider. Current pricing, included
                  services, and state availability have not been confirmed through our independent
                  verification process. Visit elevatehealth.com for a current quote.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Telehealth-based GLP-1 program</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing not confirmed — VERIFY at elevatehealth.com</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Included services not confirmed</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">State availability not confirmed</span>
                  </li>
                </ul>
                <a
                  href={elevateUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Elevate Health (verify pricing) <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* SkinnyRx — conditional editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">SkinnyRx</h3>
                  <span className="rounded-full bg-glp1-orange/10 px-2 py-0.5 text-xs font-semibold text-glp1-orange">
                    Conditional Pick
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Best for: broader program, stronger brand</p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  SkinnyRx is one of the more recognized brands in the compounded GLP-1 telehealth
                  space, offering both semaglutide and tirzepatide formulations with a comprehensive
                  program positioning. Pricing requires direct verification — our pick is conditional
                  on what you find when you get a quote.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Compounded semaglutide offered</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Compounded tirzepatide offered (VERIFY current availability)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Recognized brand — stronger market presence than Elevate Health</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing not confirmed — VERIFY at skinnyrx.com</span>
                  </li>
                </ul>
                <a
                  href={skinnyrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit SkinnyRx (verify pricing) <ExternalLink className="h-4 w-4" />
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
              All pricing cells are flagged{' '}
              <span className="italic text-yellow-700 font-semibold">VERIFY</span> — neither
              provider has confirmed pricing through our independent verification process.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Elevate Health</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">SkinnyRx</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'elevate'
                            ? 'font-semibold text-green-700'
                            : row.elevateVerify
                            ? 'italic text-yellow-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.elevate}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'skinnyrx'
                            ? 'font-semibold text-green-700'
                            : row.skinnyrxVerify
                            ? 'italic text-yellow-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.skinnyrx}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ WHY SKINNYRX WINS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Why SkinnyRx Edges Out Elevate Health
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              This is a relative comparison only — both providers lack confirmed pricing in our
              system. SkinnyRx wins on two dimensions:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Brand recognition',
                  body: 'SkinnyRx has a measurably larger brand presence in the compounded GLP-1 telehealth market. Brand search volume is a proxy for established patient base and consumer confidence — Elevate Health lags significantly on this metric.',
                },
                {
                  title: 'Program breadth',
                  body: 'SkinnyRx explicitly positions both compounded semaglutide and tirzepatide as part of a comprehensive weight-loss program. Elevate Health\'s formulation breadth requires direct verification before a fair comparison can be made.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/40 p-5">
                  <h3 className="mb-2 font-semibold text-glp1-charcoal">{item.title}</h3>
                  <p className="text-sm text-glp1-charcoal/80">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-yellow-700" />
                <p>
                  <strong>This pick is conditional.</strong> If you get a quote from both providers
                  and Elevate Health is meaningfully cheaper with comparable included services, the
                  right choice may flip. Use verified benchmarks below as your anchor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ VERIFIED ALTERNATIVES ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-3 font-serif text-3xl text-glp1-charcoal">
              Consider Verified Alternatives
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              If independently confirmed pricing is a prerequisite before you start an intake, two
              providers in our stack have Gronk-verified prices that can anchor your comparison.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Strut Health */}
              <div className="rounded-xl border-2 border-green-300/60 bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Strut Health</h3>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" variant="compact" />
                </div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  Lowest verified price in our stack. Compounded semaglutide at{' '}
                  <strong>$99/mo</strong> — Gronk-confirmed May 2026.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Compounded semaglutide — <strong>$99/mo</strong> (verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Physician consultation included</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Lowest confirmed entry price in our stack</span>
                  </li>
                </ul>
                <a
                  href={strutUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
                >
                  Visit Strut Health — $99/mo <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* MEDVi */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">MEDVi</h3>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" variant="compact" />
                </div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  Highest brand-search volume in our stack. Semaglutide from{' '}
                  <strong>$179/mo</strong>, tirzepatide <strong>$229–$299/mo</strong> — both Gronk-verified.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Semaglutide from <strong>$179/mo</strong> (verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Tirzepatide <strong>$229–$299/mo</strong> (verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>33,000 monthly brand searches — largest patient base signal</span>
                  </li>
                </ul>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit MEDVi — from $179/mo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EDITORIAL REVIEW BOX ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <EditorialReviewBox
              pick="SkinnyRx (conditional)"
              reasoning="SkinnyRx has stronger brand market presence and a more broadly positioned compounded GLP-1 program than Elevate Health. However, this is a conditional pick — neither provider has verified pricing in our system. If Elevate Health comes in significantly cheaper when you verify directly, that advantage may outweigh the brand-recognition gap. Use Strut Health ($99/mo) and MEDVi ($179/mo) as verified benchmarks."
              caveats={[
                'Neither Elevate Health nor SkinnyRx pricing is independently verified as of May 2026',
                'All pricing cells on this page require direct verification before enrollment',
                'SkinnyRx carries a potential $500 CPA on Katalys pending affiliate approval — disclosed per our policy',
              ]}
            />
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-8 font-serif text-3xl text-glp1-charcoal">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  className="rounded-lg border border-glp1-charcoal/10 bg-white p-5"
                >
                  <h3 className="mb-2 font-semibold text-glp1-charcoal">{faq.name}</h3>
                  <p className="text-sm text-glp1-charcoal/80">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RELATED LINKS ============ */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Related Comparisons</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                { href: '/compare/skinnyrx-vs-medvi', label: 'SkinnyRx vs MEDVi' },
                { href: '/compare/skinnyrx-vs-ivim-health', label: 'SkinnyRx vs Ivim Health' },
                { href: '/compare/directmeds-vs-skinnyrx', label: 'DirectMeds vs SkinnyRx' },
                { href: '/cheapest-semaglutide-online', label: 'Cheapest Semaglutide Online' },
                { href: '/best-compounded-semaglutide', label: 'Best Compounded Semaglutide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/40 px-4 py-3 text-sm font-medium text-glp1-charcoal hover:border-glp1-orange/30 hover:bg-glp1-orange/5"
                >
                  <ArrowRight className="h-4 w-4 shrink-0 text-glp1-orange" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
