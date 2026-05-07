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
  ShieldAlert,
} from 'lucide-react';

// =============================================================================
// /compare/skinnyrx-vs-eden-health  (KD low, branded comparison SERP)
// =============================================================================
// SkinnyRx vs Eden Health:
// SkinnyRx: $500 CPA pending Katalys. Pricing NOT confirmed — site did not
//   return confirmed data at time of publication. All SkinnyRx data is flagged
//   VERIFY. Our records show $199–$399/mo but this is unverified.
//   Affiliate program: direct application pending.
// Eden Health: $149 intro / $229–$249/mo sema / $229–$299/mo tirz
//   (Gronk-verified May 2026). ACTIVE Katalys program ($300+ CPA, EPC $3.92).
//
// Editorial pick: Eden Health (verified pricing, active affiliate)
// StickyMobileCTA: Eden Health
// Data caveat banner: SkinnyRx site did not return confirmed data
// =============================================================================

export const metadata: Metadata = {
  title: 'SkinnyRx vs Eden Health 2026: Which Compounded GLP-1 Program Is Better? | GLP1CompareHub',
  description:
    'SkinnyRx vs Eden Health compared head-to-head. Important: SkinnyRx pricing could not be confirmed at publication — all SkinnyRx data requires direct verification. Eden Health pricing Gronk-verified May 2026 ($229–$249/mo, labs included).',
  alternates: { canonical: 'https://glp1comparehub.com/compare/skinnyrx-vs-eden-health' },
  openGraph: {
    title: 'SkinnyRx vs Eden Health 2026: GLP-1 Program Comparison',
    description:
      'Eden Health pricing is verified ($229/mo, metabolic bloodwork included). SkinnyRx pricing requires direct verification — site did not return confirmed data at publication. Updated May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/skinnyrx-vs-eden-health',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Compare Providers',
      item: 'https://glp1comparehub.com/compare',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'SkinnyRx vs Eden Health',
      item: 'https://glp1comparehub.com/compare/skinnyrx-vs-eden-health',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SkinnyRx vs Eden Health 2026: Which Compounded GLP-1 Provider Is Better?',
  description:
    'Head-to-head comparison of SkinnyRx and Eden Health. Eden Health pricing is Gronk-verified May 2026. SkinnyRx pricing and services require direct verification — their site did not return confirmed data at time of publication.',
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
    '@id': 'https://glp1comparehub.com/compare/skinnyrx-vs-eden-health',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is SkinnyRx pricing confirmed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — SkinnyRx pricing and services could not be confirmed at the time of publication (May 2026). Our records show pricing in the $199–$399/mo range, but this data was not verified via live site crawl or Gronk verification. We strongly recommend visiting skinnyrx.com directly and completing their intake questionnaire for accurate, current pricing. All SkinnyRx pricing cells in our comparison table are flagged as VERIFY. Eden Health pricing is fully Gronk-verified at $229–$249/mo (semaglutide) and $229–$299/mo (tirzepatide).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Eden Health include metabolic bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health includes a comprehensive metabolic panel (CMP) as part of its standard program. This monitors kidney function, liver enzymes, blood glucose, electrolytes, and other markers relevant to GLP-1 therapy. Whether SkinnyRx includes bloodwork in its program requires direct verification — their website did not return confirmed data on this at publication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper, SkinnyRx or Eden Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cannot make a verified price comparison because SkinnyRx pricing is not confirmed. Our unverified records indicate SkinnyRx may price in the $199–$399/mo range. Eden Health is Gronk-verified at $229–$249/mo for semaglutide and $229–$299/mo for tirzepatide, with a $149 intro first month. Until SkinnyRx pricing is confirmed through direct verification, Eden Health is the only provider in this comparison with a transparent, verifiable price point.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Eden Health a legitimate telehealth provider for GLP-1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health is a legitimate compounded GLP-1 telehealth provider with an active affiliate program on Katalys (offer #1435, $300+ CPA, EPC $3.92 as of May 2026). The active affiliate program confirms the provider is live, enrolling patients, and paying verified commission rates. Eden Health pricing is Gronk-verified, and the provider includes metabolic bloodwork — a meaningful clinical differentiator. As with all GLP-1 telehealth providers, patients should consult a licensed physician before starting any medication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose Eden Health over SkinnyRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on verified data only, Eden Health is the more confident recommendation: pricing is confirmed, the affiliate program is active (a proxy for program legitimacy and patient enrollment), and the included comprehensive metabolic panel adds meaningful clinical value. SkinnyRx may be a competitive option once pricing is verified, but the data gap means we cannot make a confident comparative recommendation at this time. If you have a specific reason to consider SkinnyRx — positive reviews from your network, a referral, or a specific program feature — visit skinnyrx.com directly to get current pricing before making a decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SkinnyRx offer tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx tirzepatide availability and pricing require direct verification — their website did not return confirmed data on this at time of publication. Eden Health offers compounded tirzepatide at $229–$299/mo (Gronk-verified May 2026). If tirzepatide is specifically what you need and you want confirmed pricing, Eden Health is the verified option between these two.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  skinnyrx: string;
  eden: string;
  winner?: 'skinnyrx' | 'eden' | 'tie';
  skinnyrxVerify?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    skinnyrx: 'VERIFY ($199–$399/mo unconfirmed)',
    eden: '$229–$249/mo (Gronk-verified)',
    winner: 'tie',
    skinnyrxVerify: true,
  },
  {
    label: 'Compounded Tirzepatide',
    skinnyrx: 'VERIFY (availability not confirmed)',
    eden: '$229–$299/mo (Gronk-verified)',
    winner: 'eden',
    skinnyrxVerify: true,
  },
  {
    label: 'First-month intro price',
    skinnyrx: 'VERIFY',
    eden: '$149 intro month',
    winner: 'eden',
    skinnyrxVerify: true,
  },
  {
    label: 'Metabolic bloodwork included',
    skinnyrx: 'VERIFY',
    eden: 'Yes — comprehensive metabolic panel',
    winner: 'eden',
    skinnyrxVerify: true,
  },
  {
    label: 'Physician consult included',
    skinnyrx: 'VERIFY',
    eden: 'Yes',
    winner: 'eden',
    skinnyrxVerify: true,
  },
  {
    label: 'Cancel anytime',
    skinnyrx: 'VERIFY',
    eden: 'Yes',
    winner: 'eden',
    skinnyrxVerify: true,
  },
  {
    label: 'Affiliate program status',
    skinnyrx: 'Direct application pending (~$500 CPA estimate)',
    eden: 'ACTIVE — Katalys offer #1435, $300+ CPA, EPC $3.92',
    winner: 'eden',
  },
  {
    label: 'Pricing verification status',
    skinnyrx: 'NOT VERIFIED — site did not return confirmed data',
    eden: 'Gronk-verified May 2026 + Katalys active program',
    winner: 'eden',
    skinnyrxVerify: true,
  },
  {
    label: 'Editorial pick',
    skinnyrx: 'Pending verification',
    eden: 'Yes — recommended for verified pricing + clinical support',
    winner: 'eden',
  },
];

export default function SkinnyRxVsEdenHealthPage() {
  const skinnyrxUrl = buildGlp1AffiliateUrl('skinnyrx', 'skinnyrx-vs-eden-health');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'skinnyrx-vs-eden-health');

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

      {/* Sticky mobile CTA — Eden Health (verified pricing) */}
      <StickyMobileCTA
        href={edenUrl}
        brandName="Eden Health"
        pricePitch="Verified pricing — from $149 intro, labs included"
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
              SkinnyRx vs Eden Health 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Eden Health offers Gronk-verified pricing with metabolic bloodwork included.
              SkinnyRx&rsquo;s pricing and services could not be confirmed at publication — all
              SkinnyRx data requires direct verification before you enroll.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk + Katalys" />
            </div>

            {/* SkinnyRx data caveat — prominent banner */}
            <div className="mt-6 rounded-lg border border-orange-300 bg-orange-50 p-4 text-sm text-orange-900">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5 text-orange-600" />
                <div>
                  <strong className="text-orange-800">
                    SkinnyRx data caveat — read before relying on this comparison:
                  </strong>
                  <p className="mt-1">
                    SkinnyRx pricing and services require direct verification — their website did
                    not return confirmed data at time of publication (May 2026). Our records show
                    an estimated $199–$399/mo range, but this is <strong>unverified</strong>. Do
                    not make enrollment decisions based on SkinnyRx data from this page. Visit{' '}
                    <strong>skinnyrx.com</strong> directly for current, accurate pricing.
                    All SkinnyRx table cells are flagged{' '}
                    <span className="italic font-semibold">VERIFY</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Eden Health — editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Editor&rsquo;s Pick
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Best for: verified pricing + metabolic monitoring</p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Eden Health is fully Gronk-verified — pricing is transparent, the program is
                  active on Katalys, and metabolic bloodwork is included at the standard price.
                  The $149 intro month lowers the entry barrier.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      Semaglutide <strong>$229–$249/mo</strong> (Gronk-verified)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      Tirzepatide <strong>$229–$299/mo</strong> (Gronk-verified)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      <strong>Metabolic bloodwork included</strong> — comprehensive metabolic panel
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>$149 intro first month, cancel anytime</span>
                  </li>
                </ul>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit Eden Health — labs included <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* SkinnyRx — unverified */}
              <div className="rounded-xl border-2 border-orange-200 bg-orange-50/30 p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">SkinnyRx</h3>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-800">
                    Pricing Unverified
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">All data requires direct verification</p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  SkinnyRx is a compounded GLP-1 telehealth provider. Estimated $199–$399/mo from our
                  unconfirmed records, but their website did not return verified data at publication.
                  Visit directly for accurate pricing.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-orange-600" />
                    <span className="italic text-orange-800">
                      Pricing: <strong>VERIFY at skinnyrx.com</strong>
                    </span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-orange-600" />
                    <span className="italic text-orange-800">
                      Tirzepatide availability: <strong>VERIFY</strong>
                    </span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-orange-600" />
                    <span className="italic text-orange-800">
                      Bloodwork included: <strong>VERIFY</strong>
                    </span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-orange-600" />
                    <span className="italic text-orange-800">
                      Cancellation policy: <strong>VERIFY</strong>
                    </span>
                  </li>
                </ul>
                <a
                  href={skinnyrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-2.5 text-sm font-semibold text-orange-800 shadow-sm hover:bg-orange-50"
                >
                  Verify pricing at SkinnyRx <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-2 text-sm text-glp1-charcoal/70">
              Eden Health data is Gronk-verified May 2026. All SkinnyRx cells marked{' '}
              <span className="italic text-orange-700 font-semibold">VERIFY</span> — do not rely on
              these for enrollment decisions.
            </p>
            <div className="mb-6 flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs text-orange-800">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                SkinnyRx data caveat: their website did not return confirmed pricing or service
                details at time of publication. All SkinnyRx cells require direct verification.
              </span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">
                      Dimension
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">
                      Eden Health
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">
                      SkinnyRx
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'eden'
                            ? 'font-semibold text-green-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.eden}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'skinnyrx'
                            ? 'font-semibold text-green-700'
                            : row.skinnyrxVerify
                            ? 'italic text-orange-700'
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

        {/* ============ WHY DATA VERIFICATION MATTERS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Why We Flag Unverified Data
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 text-sm text-glp1-charcoal/85">
                  Compounded GLP-1 pricing is inherently dynamic. FDA regulatory pressure on
                  compounding pharmacies (503A and 503B guidelines), drug shortage status
                  declarations, and individual provider pricing decisions all create price volatility.
                  A price scraped 30 days ago may not reflect today&rsquo;s actual enrollment cost.
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/85">
                  Our editorial policy: we only publish pricing we can trace to a live, current
                  source — either a Gronk verification session, a Katalys active affiliate program,
                  or a live site crawl completed within 14 days of publication. When we can&rsquo;t
                  confirm a price, we say so explicitly rather than publishing a potentially wrong
                  number that could influence your enrollment decision.
                </p>
                <p className="text-sm text-glp1-charcoal/85">
                  SkinnyRx is a real provider with a real patient base. The pricing gap in our
                  records reflects a data collection issue, not a judgment on the provider&rsquo;s
                  legitimacy.
                </p>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <h3 className="mb-3 font-serif text-lg text-glp1-charcoal">
                  How to verify SkinnyRx pricing yourself
                </h3>
                <ol className="space-y-2 text-sm text-glp1-charcoal/85">
                  {[
                    'Visit skinnyrx.com directly (not a referral link).',
                    'Complete the intake questionnaire — most telehealth providers require this to show pricing.',
                    'Note: the price you see post-intake may differ from any homepage headline.',
                    'Ask specifically whether tirzepatide is available and at what price.',
                    'Confirm whether bloodwork is included or billed separately.',
                    'Check cancellation policy before entering payment details.',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-2">
                      <span className="shrink-0 font-bold text-glp1-orange">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-glp1-charcoal/60">
                  Once you have confirmed pricing, you can compare it directly against Eden
                  Health&rsquo;s Gronk-verified $229–$249/mo semaglutide rate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHO SHOULD PICK WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Who Should Pick Which?</h2>

            <div className="space-y-5">
              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Pick Eden Health if:
                </h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want confirmed pricing before starting the intake process — Eden Health
                      publishes verified rates you can evaluate without completing a questionnaire.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      Metabolic bloodwork included is important — Eden Health bundles a CMP into the
                      standard program.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want to start quickly — Eden Health has a proven enrollment pathway and
                      active affiliate program confirming the intake process is functional.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      The $149 intro month reduces your commitment for the first month.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-orange-300 bg-orange-50/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Consider SkinnyRx if:
                </h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You have personal referrals from current or former SkinnyRx patients — direct
                      patient experience outweighs a data gap.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      After verifying SkinnyRx pricing directly, you find it meaningfully below
                      Eden Health&rsquo;s $229/mo — in which case the price difference may justify
                      the switch.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You have a specific clinical or program reason to prefer SkinnyRx that is not
                      captured in our current unverified data.
                    </span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg border border-orange-200 bg-orange-50 p-3 text-xs text-orange-900">
                  <strong>Reminder:</strong> Verify all SkinnyRx data directly before enrolling.
                  This comparison does not contain confirmed SkinnyRx pricing.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ VERDICT ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">Our Verdict</h2>

            <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-6 shadow-sm">
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>Eden Health is our editorial pick for this comparison.</strong> Gronk-verified
                pricing ($229–$249/mo semaglutide, $229–$299/mo tirzepatide), included comprehensive
                metabolic panel, a $149 intro month, and an active Katalys affiliate program all point
                to a well-structured, patient-enrolling program with transparent pricing.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>We cannot make a meaningful recommendation on SkinnyRx</strong> because their
                pricing and service details could not be confirmed at publication. This is a data issue
                — not a quality judgment. SkinnyRx is an active provider with a real patient base, and
                our $500 CPA estimate from Katalys suggests they operate at a premium price point. But
                without confirmed data, we cannot tell you whether their price-to-value ratio is better
                or worse than Eden Health.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                <strong>The action item:</strong> If you are specifically interested in SkinnyRx, go
                to skinnyrx.com, complete the intake questionnaire, get your actual price quote, then
                compare it against Eden Health&rsquo;s published $229/mo. That comparison will give
                you a real decision rather than one based on our unverified data.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit Eden Health — verified pricing <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={skinnyrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-3 font-semibold text-orange-800 shadow-sm hover:bg-orange-50"
                >
                  Verify SkinnyRx pricing directly <ExternalLink className="h-4 w-4" />
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
