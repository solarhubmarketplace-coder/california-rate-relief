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
  DollarSign,
} from 'lucide-react';

// =============================================================================
// /compare/skinnyrx-vs-medvi  (KD low, branded comparison SERP)
// =============================================================================
// SkinnyRx vs MEDVi:
// SkinnyRx = pricing NOT confirmed via direct crawl. $500 CPA potential pending
//   Katalys approval. VERIFY flags on all SkinnyRx pricing cells.
// MEDVi = $179–$299/mo Gronk-verified May 2026, 33K monthly brand searches,
//   editorial pick. Katalys affiliate pending (offer #1265, $228 CPA).
//
// Editorial pick: MEDVi (verified pricing + highest brand trust in our stack)
// StickyMobileCTA: MEDVi
// =============================================================================

export const metadata: Metadata = {
  title: 'SkinnyRx vs MEDVi 2026: Which Compounded GLP-1 Program Is Better? | GLP1CompareHub',
  description:
    'SkinnyRx vs MEDVi compared head-to-head: pricing, included services, and who each program is best for. MEDVi pricing verified May 2026; SkinnyRx pricing requires direct verification. MEDVi is our editorial pick.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/skinnyrx-vs-medvi' },
  openGraph: {
    title: 'SkinnyRx vs MEDVi 2026: Compounded GLP-1 Head-to-Head',
    description:
      'MEDVi wins on verified pricing ($179/mo) and brand trust. SkinnyRx pricing requires direct verification. Detailed comparison, May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/skinnyrx-vs-medvi',
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
      name: 'SkinnyRx vs MEDVi',
      item: 'https://glp1comparehub.com/compare/skinnyrx-vs-medvi',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SkinnyRx vs MEDVi 2026: Which Compounded GLP-1 Telehealth Program Is Better?',
  description:
    'Head-to-head comparison of SkinnyRx and MEDVi. MEDVi pricing Gronk-verified ($179–$299/mo); SkinnyRx pricing requires direct verification. MEDVi is our editorial pick for verified pricing and brand trust.',
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
    '@id': 'https://glp1comparehub.com/compare/skinnyrx-vs-medvi',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, SkinnyRx or MEDVi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi is the only provider in this comparison with confirmed pricing. MEDVi compounded semaglutide starts at $179/mo (full range $179–$249/mo) and compounded tirzepatide runs $229–$299/mo — both Gronk-verified May 2026. SkinnyRx pricing is not confirmed through our direct verification process as of May 2026 and requires visiting their site for a current quote. We cannot make a direct price comparison without confirmed SkinnyRx data — pick MEDVi if verified pricing upfront is important to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has the better GLP-1 program, SkinnyRx or MEDVi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on verified data, MEDVi is our editorial pick. MEDVi offers Gronk-verified pricing, the highest brand search volume in our provider stack (33,000 monthly searches for "medvi"), and a physician-supervised program covering both semaglutide and tirzepatide. SkinnyRx is a recognized telehealth brand in the GLP-1 space, but our team has not been able to confirm their current pricing via direct crawl or Gronk verification — all SkinnyRx fields in our comparison require direct verification at skinnyrx.com. If you want to compare them apples-to-apples, get a quote from SkinnyRx and compare it against MEDVi\'s published $179/mo starting rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SkinnyRx available in all states?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx availability by state requires direct verification at skinnyrx.com — telehealth availability varies by provider and changes as state regulations evolve. As of our last review (May 2026), we do not have confirmed state-by-state coverage data for SkinnyRx. MEDVi is available in most U.S. states, but confirm your specific state during their intake process. Both providers operate via telehealth, meaning coverage depends on where licensed prescribers are active in their network.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEDVi or SkinnyRx include bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi does not include labs in its standard pricing — consistent with most mid-tier compounded GLP-1 platforms. SkinnyRx\'s included services require direct verification; we cannot confirm whether their program includes lab monitoring as of May 2026. If metabolic bloodwork as a program inclusion is important to you, Eden Health is a verified option that explicitly includes a comprehensive metabolic panel at $229–$249/mo for semaglutide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is MEDVi the editorial pick over SkinnyRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi is our editorial pick in this comparison for two reasons: verified pricing and brand trust. MEDVi\'s $179–$299/mo range is Gronk-verified (May 2026), so we can present concrete numbers. MEDVi also has the highest brand search volume of any provider in our stack at 33,000 monthly searches — a meaningful proxy for established patient volume and consumer confidence. SkinnyRx is a real program, but without confirmed pricing data we cannot endorse it with the same specificity. When verification is complete, we will update this page. Note: SkinnyRx carries a potential $500 CPA on Katalys pending approval, which is above-average for this category — we disclose this in our affiliate disclosure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the MEDVi program include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi\'s compounded GLP-1 program includes a physician consultation, prescription for compounded semaglutide or tirzepatide, and ongoing support. Semaglutide starts at $179/mo (range $179–$249/mo depending on dose tier); tirzepatide runs $229–$299/mo. The program does not include baseline labs in the standard pricing tier — patients who want lab monitoring would need to arrange that separately through their PCP or a service like Eden Health. MEDVi supports cancellation at any time and is available in most U.S. states via telehealth. All pricing Gronk-verified May 2026.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  skinnyrx: string;
  medvi: string;
  winner?: 'skinnyrx' | 'medvi' | 'tie';
  skinnyrxVerify?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    skinnyrx: 'VERIFY (not confirmed as of May 2026)',
    medvi: '$179/mo (range $179–$249/mo)',
    winner: 'medvi',
    skinnyrxVerify: true,
  },
  {
    label: 'Compounded Tirzepatide',
    skinnyrx: 'VERIFY (availability not confirmed)',
    medvi: '$229–$299/mo (Gronk-verified)',
    winner: 'medvi',
    skinnyrxVerify: true,
  },
  {
    label: 'Metabolic bloodwork included',
    skinnyrx: 'VERIFY',
    medvi: 'Not included (standard for this tier)',
    winner: 'tie',
    skinnyrxVerify: true,
  },
  {
    label: 'Physician consult included',
    skinnyrx: 'VERIFY',
    medvi: 'Yes',
    winner: 'medvi',
    skinnyrxVerify: true,
  },
  {
    label: 'Cancel anytime',
    skinnyrx: 'VERIFY',
    medvi: 'Yes',
    winner: 'medvi',
    skinnyrxVerify: true,
  },
  {
    label: 'State availability',
    skinnyrx: 'VERIFY (telehealth, state coverage unknown)',
    medvi: 'Most U.S. states (confirm at intake)',
    winner: 'medvi',
    skinnyrxVerify: true,
  },
  {
    label: 'Brand search volume (Ahrefs)',
    skinnyrx: 'Moderate (specific volume data pending)',
    medvi: '~33,000/mo on "medvi" — highest in our stack',
    winner: 'medvi',
  },
  {
    label: 'Affiliate program status',
    skinnyrx: 'Pending Katalys ($500 CPA potential, not yet active)',
    medvi: 'Pending Katalys (offer #1265, $228 CPA)',
    winner: 'tie',
  },
  {
    label: 'Editorial pick',
    skinnyrx: 'No — pending pricing verification',
    medvi: "Yes — verified pricing + highest brand trust",
    winner: 'medvi',
  },
  {
    label: 'Pricing verification status',
    skinnyrx: 'NOT VERIFIED — check skinnyrx.com directly',
    medvi: 'Gronk-verified May 2026',
    winner: 'medvi',
    skinnyrxVerify: true,
  },
];

export default function SkinnyRxVsMedviPage() {
  const skinnyrxUrl = buildGlp1AffiliateUrl('skinnyrx', 'skinnyrx-vs-medvi');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'skinnyrx-vs-medvi');

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

      {/* Sticky mobile CTA — MEDVi is editorial pick (verified pricing) */}
      <StickyMobileCTA
        href={medviUrl}
        brandName="MEDVi"
        pricePitch="Our pick — from $179/mo, verified pricing"
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
              SkinnyRx vs MEDVi 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two compounded GLP-1 telehealth providers compared. MEDVi pricing is fully
              Gronk-verified — $179/mo entry, highest brand search volume in our stack. SkinnyRx is a
              recognized program in the space, but pricing requires direct verification before
              we can present a fair side-by-side.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (MEDVi only)" variant="compact" />
            </div>

            {/* SkinnyRx data caveat banner */}
            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong>SkinnyRx pricing not verified:</strong> Our team was unable to confirm
                  SkinnyRx pricing via direct crawl or Gronk verification as of May 2026. All
                  SkinnyRx pricing cells are flagged{' '}
                  <span className="italic font-semibold">VERIFY</span>. Visit{' '}
                  <strong>skinnyrx.com</strong> directly for a current quote. MEDVi pricing is fully
                  Gronk-verified.
                </div>
              </div>
            </div>

            {/* Quick verdict */}
            <div className="mt-4 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-4 text-sm text-glp1-charcoal/90">
              <strong>Quick verdict:</strong> MEDVi is our editorial pick. Verified pricing from
              $179/mo and the strongest brand trust signal in our stack. If SkinnyRx&rsquo;s pricing
              comes in lower when you verify it directly, run the numbers and check their included
              services before deciding.
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* SkinnyRx */}
              <div className="rounded-xl border-2 border-yellow-300/60 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">SkinnyRx</h3>
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                    Pricing — VERIFY
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: TBD pending pricing verification
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  SkinnyRx is an established telehealth brand in the compounded GLP-1 space. We
                  cannot confirm current pricing from our available data — all cost figures require
                  direct verification at skinnyrx.com before you can meaningfully compare.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Telehealth-based GLP-1 program</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Compounded semaglutide offered</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing not confirmed — VERIFY at skinnyrx.com</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Tirzepatide availability not confirmed</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Affiliate program pending Katalys approval</span>
                  </li>
                </ul>
                <a
                  href={skinnyrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit SkinnyRx (verify pricing) <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* MEDVi — editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">MEDVi</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Editor&rsquo;s Pick
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: lowest verified price + highest brand trust
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  MEDVi has the highest organic brand-search volume of any provider in our stack
                  (33K monthly) and Gronk-verified pricing from $179/mo. If you want confirmed
                  numbers before starting an intake, MEDVi delivers that clearly.
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
                    <span>Physician-supervised, cancel anytime</span>
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

        {/* ============ FULL COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-2 text-sm text-glp1-charcoal/70">
              MEDVi data is Gronk-verified May 2026. SkinnyRx cells marked{' '}
              <span className="italic text-yellow-700 font-semibold">VERIFY</span> require direct
              confirmation at skinnyrx.com.
            </p>
            <div className="mb-6">
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (MEDVi)" variant="compact" />
            </div>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">SkinnyRx</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">MEDVi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
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
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'medvi'
                            ? 'font-semibold text-green-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.medvi}
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
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">MEDVi Pricing — Verified</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Compounded Semaglutide</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Entry Price
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$179/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Full Range
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$179–$249/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Labs Included
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">Not included</p>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" />
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Compounded Tirzepatide</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Price Range
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">
                    <strong>$229–$299/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Labs Included
                  </div>
                  <p className="mb-3 text-sm text-glp1-charcoal/85">Not included</p>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" />
                </div>
              </div>
            </div>

            {/* Why verification matters callout */}
            <div className="mt-8 rounded-lg border border-yellow-300 bg-yellow-50 p-5">
              <div className="flex items-start gap-2">
                <DollarSign className="h-5 w-5 shrink-0 text-yellow-700 mt-0.5" />
                <div>
                  <h4 className="mb-2 font-serif text-lg text-glp1-charcoal">
                    Why we can&rsquo;t show SkinnyRx pricing here
                  </h4>
                  <p className="text-sm text-glp1-charcoal/85">
                    Our data integrity rule: we only publish pricing that has been Gronk-verified
                    or confirmed via an active affiliate program data source. SkinnyRx did not return
                    confirmed pricing data through either channel as of May 2026. Rather than publish
                    a number we can&rsquo;t stand behind, we flag it for direct verification. This
                    policy protects you from making enrollment decisions based on stale or incorrect
                    cost data. Visit{' '}
                    <strong>skinnyrx.com</strong> directly, complete their intake questionnaire, and
                    compare the actual quote against MEDVi&rsquo;s confirmed $179/mo entry price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BRAND TRUST SIGNALS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Why Brand Search Volume Matters
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              When comparing telehealth GLP-1 providers, organic brand search volume is one of the
              few objective proxies for established patient base and consumer trust. A program with
              33,000 monthly searches on its brand name is sending a clear market signal.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  metric: '33,000/mo',
                  label: 'MEDVi brand searches',
                  note: 'Highest in our provider stack (Ahrefs, May 2026)',
                  positive: true,
                },
                {
                  metric: '$179/mo',
                  label: 'MEDVi entry price',
                  note: 'Gronk-verified May 2026 — lowest mid-tier starting rate in our stack',
                  positive: true,
                },
                {
                  metric: 'VERIFY',
                  label: 'SkinnyRx pricing status',
                  note: 'Not confirmed via Gronk or Katalys — visit skinnyrx.com for your quote',
                  positive: false,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-lg border p-4 ${
                    item.positive
                      ? 'border-glp1-charcoal/10 bg-white'
                      : 'border-yellow-200 bg-yellow-50'
                  }`}
                >
                  <div
                    className={`mb-1 text-2xl font-bold ${
                      item.positive ? 'text-glp1-orange' : 'text-yellow-700 italic'
                    }`}
                  >
                    {item.metric}
                  </div>
                  <div className="mb-1 text-sm font-semibold text-glp1-charcoal">{item.label}</div>
                  <p className="text-xs text-glp1-charcoal/70">{item.note}</p>
                </div>
              ))}
            </div>
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
                      You want verified, transparent pricing before starting an intake — MEDVi&rsquo;s
                      $179/mo is Gronk-confirmed and available upfront.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want the provider with the largest established patient base signal (33K
                      monthly brand searches) as a trust proxy.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want access to both compounded semaglutide and tirzepatide on a single
                      platform.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You already have baseline labs from a PCP and don&rsquo;t need them bundled
                      into the program.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Consider SkinnyRx if:
                </h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You&rsquo;ve seen SkinnyRx recommended elsewhere and want to evaluate it
                      directly — visit skinnyrx.com, complete their intake, and compare the quote
                      you receive against MEDVi&rsquo;s $179/mo.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      Their pricing, when verified, comes in meaningfully below MEDVi&rsquo;s
                      confirmed rate at your dose tier.
                    </span>
                  </li>
                </ul>
                <div className="mt-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-xs text-yellow-900">
                  <strong>Our recommendation:</strong> Verify SkinnyRx pricing at skinnyrx.com
                  before committing. Do not rely on pricing you may have seen on other comparison
                  sites — it may be outdated.
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
                <strong>MEDVi is our editorial pick for this comparison.</strong> The case is
                straightforward: Gronk-verified pricing from $179/mo, the highest organic brand
                search volume in our provider stack (33K monthly), and a complete mid-tier program
                covering both semaglutide and tirzepatide. We can recommend it with confidence
                because the numbers are confirmed.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>SkinnyRx is not disqualified — it is unverified.</strong> We cannot publish
                pricing data we cannot stand behind. When our verification is complete (or when you
                check skinnyrx.com directly), compare SkinnyRx&rsquo;s actual quote against
                MEDVi&rsquo;s $179/mo. If SkinnyRx comes in lower at your target dose and includes
                equivalent services, that gap matters.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                For patients who want to start a verified program today, MEDVi is the clear choice
                based on currently available data.
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
                  href={skinnyrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit SkinnyRx (verify pricing) <ExternalLink className="h-4 w-4" />
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
                  href="/compare/skinnyrx-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  SkinnyRx vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/medvi-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  MEDVi vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/trimrx-vs-medvi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  TrimRx vs MEDVi <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/medvi-vs-ivim-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  MEDVi vs Ivim Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/best-compounded-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Best Compounded Semaglutide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cheapest-semaglutide-online"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Cheapest Semaglutide Online 2026 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-6 text-xs text-glp1-charcoal/50">
              <Link href="/affiliate-disclosure" className="underline">
                Affiliate disclosure
              </Link>{' '}
              · This page contains compensated links. We may earn a commission if you enroll through
              our links — at no extra cost to you. SkinnyRx carries a potential $500 CPA pending
              Katalys program approval; MEDVi affiliate is also pending Katalys ($228 CPA). Neither
              program status affects our editorial recommendation, which is based solely on verified
              pricing and publicly confirmed program data.
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
