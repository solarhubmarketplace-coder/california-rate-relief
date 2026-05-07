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
// /compare/directmeds-vs-skinnyrx
// DirectMeds: compounded GLP-1 telehealth, all pricing VERIFY, less known.
// SkinnyRx: compounded sema + tirz, $500 CPA potential on Katalys (pending).
//   All pricing VERIFY. Comprehensive program positioning, stronger brand.
// Neither has verified pricing — honest editorial.
// Soft edge to SkinnyRx for stronger brand presence / CPA signal.
// Fallback recommendation: MEDVi or Strut Health (confirmed pricing).
// StickyMobileCTA: SkinnyRx (higher brand recognition / CPA signal)
// =============================================================================

export const metadata: Metadata = {
  title: 'DirectMeds vs SkinnyRx (2026): Compounded GLP-1 Comparison — Pricing & Program Review',
  description:
    'DirectMeds vs SkinnyRx compared: neither provider has independently verified pricing. SkinnyRx has stronger brand presence; DirectMeds is less documented. For confirmed pricing, see MEDVi or Strut Health. Updated May 2026.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/directmeds-vs-skinnyrx',
  },
  openGraph: {
    title: 'DirectMeds vs SkinnyRx (2026): Compounded GLP-1 Comparison',
    description:
      'Both DirectMeds and SkinnyRx have unverified pricing. Soft editorial edge to SkinnyRx for brand recognition. For confirmed pricing today, MEDVi or Strut Health are recommended. May 2026.',
    url: 'https://glp1comparehub.com/compare/directmeds-vs-skinnyrx',
    type: 'article',
    siteName: 'GLP1CompareHub',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://glp1comparehub.com/compare' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'DirectMeds vs SkinnyRx',
      item: 'https://glp1comparehub.com/compare/directmeds-vs-skinnyrx',
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DirectMeds vs SkinnyRx (2026): Compounded GLP-1 Comparison — Pricing & Program Review',
  description:
    'Honest comparison of DirectMeds and SkinnyRx compounded GLP-1 telehealth programs. Neither provider has independently verified pricing. SkinnyRx has a stronger brand presence and comprehensive program positioning. For confirmed pricing, MEDVi or Strut Health are recommended.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: {
    '@type': 'Person',
    name: 'Chad Simpson',
    url: 'https://glp1comparehub.com/author/chad-simpson',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/compare/directmeds-vs-skinnyrx',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is SkinnyRx a legitimate GLP-1 telehealth provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx is a telehealth platform that markets compounded semaglutide and tirzepatide programs as part of a comprehensive weight management service. They have a more established brand presence than newer entrants in the compounded GLP-1 space. However, their current pricing has not been independently confirmed by our editorial team — we recommend verifying pricing and program details directly at SkinnyRx.com before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does DirectMeds cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DirectMeds pricing has not been independently confirmed by our editorial team. DirectMeds is a less-documented provider in the compounded GLP-1 space — we have limited publicly available pricing data and recommend verifying current costs directly at their website. For comparison, MEDVi (confirmed at $179-299/month) and Strut Health offer transparent, independently verifiable pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SkinnyRx offer tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx markets a program that includes both compounded semaglutide and tirzepatide options as part of a comprehensive approach. However, current availability and pricing for specific medications should be confirmed directly with SkinnyRx, as formulary offerings and pricing can change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is neither DirectMeds nor SkinnyRx the definitive pick in this comparison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our editorial process requires independent pricing verification before we can make a definitive recommendation. Neither DirectMeds nor SkinnyRx has independently verified pricing on this page. Without confirmed pricing data, we cannot determine which offers better value. We give SkinnyRx a soft edge based on stronger brand recognition and a more comprehensive program positioning, but we are honest that this is not a full recommendation — it is a relative assessment between two unverified providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest compounded semaglutide option with verified pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For confirmed, independently verified pricing, MEDVi is confirmed at $179-299 per month and is one of the most accessible options in the compounded GLP-1 telehealth space. Strut Health also offers transparent pricing that can be verified directly on their website. Both are recommended over providers whose pricing requires direct confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is DirectMeds better or worse than SkinnyRx for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both DirectMeds and SkinnyRx provide access to compounded GLP-1 medications (the actual weight loss mechanism), so clinical outcomes would depend primarily on medication dose, patient adherence, and lifestyle factors rather than the specific platform. The meaningful differences between providers are typically in pricing, support quality, and program comprehensiveness — all of which require direct verification for both providers in this comparison. For a provider where all three can be confirmed, we recommend checking MEDVi or Strut Health.',
      },
    },
  ],
};

export default function DirectMedsVsSkinnyRxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <GLP1Layout>
        <GLP1Header />
        <MedicalDisclaimerBanner />
        <StickyMobileCTA
          providerName="SkinnyRx"
          ctaText="Check SkinnyRx — Comprehensive GLP-1 Program"
          href={buildGlp1AffiliateUrl('skinnyrx', 'directmeds-vs-skinnyrx')}
        />

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/compare" className="hover:text-blue-600">Compare Providers</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700 font-medium">DirectMeds vs SkinnyRx</li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-8">
            <div className="flex items-start gap-3 mb-4 flex-wrap">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                DirectMeds vs SkinnyRx (2026): Compounded GLP-1 Comparison
              </h1>
              <VerifiedPricingBadge variant="hero" verified={false} label="Both: Verify Pricing" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Neither DirectMeds nor SkinnyRx has independently verified pricing on this page. We are being
              transparent: this comparison is limited by that constraint. SkinnyRx has a stronger brand
              presence and a more comprehensive program positioning; DirectMeds is less documented in the
              compounded GLP-1 market. For confirmed pricing today, we recommend{' '}
              <Link href="/compare/skinnyrx-vs-medvi" className="text-blue-600 hover:underline">
                MEDVi ($179-299/mo verified)
              </Link>{' '}
              or{' '}
              <Link href="/reviews/strut-health" className="text-blue-600 hover:underline">
                Strut Health
              </Link>.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Last reviewed: May 6, 2026 &nbsp;·&nbsp; Author:{' '}
              <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
                Chad Simpson
              </Link>
            </p>
          </header>

          {/* Dual VERIFY banner */}
          <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-5 mb-6 flex items-start gap-4">
            <AlertCircle className="text-orange-500 w-6 h-6 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="font-bold text-orange-900 text-base mb-1">
                Both Providers: Pricing Requires Direct Verification
              </p>
              <p className="text-orange-800 text-sm leading-relaxed">
                DirectMeds and SkinnyRx both have unconfirmed pricing on this page. Our editorial team has
                not been able to independently verify current program costs for either provider. All pricing
                cells in this comparison are marked{' '}
                <span className="italic text-orange-600">VERIFY</span>
                {' '}— check both providers directly before making any enrollment decision.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <p className="text-sm font-semibold text-orange-900">
                  For confirmed pricing:{' '}
                  <Link href="/compare/skinnyrx-vs-medvi" className="underline">MEDVi ($179-299/mo)</Link>
                  {' '}or{' '}
                  <Link href="/reviews/strut-health" className="underline">Strut Health</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Verdict */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Our Honest Verdict</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not have a definitive editorial pick in this comparison. Without confirmed pricing for
              either provider, we cannot determine which delivers better value. SkinnyRx earns a soft edge
              for stronger brand presence and a comprehensive program approach that includes behavioral
              coaching and support alongside medication. DirectMeds is a less-documented provider with limited
              independent coverage. Both are worth verifying directly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-700 mb-1 text-sm">Soft Edge — Stronger Brand</p>
                <p className="text-gray-800 font-bold">SkinnyRx</p>
                <p className="text-xs text-gray-500 mt-1 mb-3">
                  More established brand, comprehensive program framing (coaching + medication).
                  Pricing unverified — check directly.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('skinnyrx', 'directmeds-vs-skinnyrx')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 bg-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Check SkinnyRx Pricing <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-700 mb-1 text-sm">Less Documented</p>
                <p className="text-gray-800 font-bold">DirectMeds</p>
                <p className="text-xs text-gray-500 mt-1 mb-3">
                  Less brand presence, limited independent coverage.
                  Pricing unverified — check directly.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('directmeds', 'directmeds-vs-skinnyrx')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 bg-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Check DirectMeds Pricing <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-900 mb-2">Prefer Confirmed Pricing?</p>
              <p className="text-sm text-blue-800">
                If verified pricing matters most, skip this comparison and go directly to providers with
                confirmed costs:
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href="/compare/skinnyrx-vs-medvi"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 underline hover:text-blue-900"
                >
                  MEDVi — $179-299/mo verified <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/reviews/strut-health"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 underline hover:text-blue-900"
                >
                  Strut Health <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-4 font-semibold text-gray-700 w-1/3">Feature</th>
                    <th className="text-center p-4 font-semibold text-gray-700 w-1/3">
                      DirectMeds
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">
                        ⚠️ All pricing: <span className="italic">VERIFY</span>
                      </span>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-700 w-1/3">
                      SkinnyRx
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">
                        ⚠️ All pricing: <span className="italic">VERIFY</span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Monthly Price</td>
                    <td className="p-4 text-center">
                      <span className="italic text-orange-600 text-xs">VERIFY</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="italic text-orange-600 text-xs">VERIFY</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Compounded Semaglutide</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                    <td className="p-4 text-center text-green-700 text-xs font-medium">Available</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Compounded Tirzepatide</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                    <td className="p-4 text-center text-green-700 text-xs font-medium">Available</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Comprehensive Program</td>
                    <td className="p-4 text-center">
                      <Minus className="w-4 h-4 text-gray-400 mx-auto" aria-label="Unknown" />
                      <span className="block text-xs text-gray-400 mt-0.5">Verify directly</span>
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-4 h-4 text-green-600 mx-auto" aria-label="Yes" />
                      <span className="block text-xs text-green-700 mt-0.5">Coaching + medication</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Brand Recognition</td>
                    <td className="p-4 text-center text-orange-600 text-xs">Less documented</td>
                    <td className="p-4 text-center text-gray-700 text-xs font-medium">More established</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Pricing Transparency</td>
                    <td className="p-4 text-center">
                      <X className="w-4 h-4 text-red-400 mx-auto" aria-label="Not confirmed" />
                      <span className="block text-xs text-orange-600 mt-0.5">Not confirmed</span>
                    </td>
                    <td className="p-4 text-center">
                      <X className="w-4 h-4 text-red-400 mx-auto" aria-label="Not confirmed" />
                      <span className="block text-xs text-orange-600 mt-0.5">Not confirmed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Table updated May 2026. Pricing marked{' '}
              <span className="italic text-orange-600">VERIFY</span> for both providers — confirm directly
              before enrolling. SkinnyRx tirzepatide and semaglutide availability based on publicly available
              program information; confirm current formulary with SkinnyRx directly.
            </p>
          </section>

          {/* Provider Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Deep-Dives</h2>

            {/* SkinnyRx Card */}
            <div className="border border-gray-200 bg-white rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">SkinnyRx</h3>
                  <p className="text-sm text-gray-600 mt-1 font-medium">Comprehensive Program · Stronger Brand Presence</p>
                </div>
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-300">
                  Pricing: <span className="italic ml-1">VERIFY</span>
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                SkinnyRx positions itself as a comprehensive weight management program rather than a bare-bones
                medication access service. They market compounded semaglutide and tirzepatide alongside
                behavioral coaching and support — a positioning that appeals to patients who want structure
                beyond just the prescription. This comprehensive approach is one of the reasons SkinnyRx
                has a higher brand recognition than DirectMeds in the compounded GLP-1 market.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-gray-700 text-sm mb-2">What SkinnyRx Markets</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Compounded semaglutide access (pricing: verify directly)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Compounded tirzepatide access (pricing: verify directly)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Comprehensive program framing: coaching + medication together
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    All pricing requires direct verification at SkinnyRx.com
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                SkinnyRx&#39;s $500 CPA potential through the Katalys affiliate network (pending approval) signals
                meaningful program revenue — typically correlated with higher-priced programs. However, until
                pricing is independently confirmed, we cannot use this as a proxy for patient cost. Verify
                directly before enrolling.
              </p>

              <a
                href={buildGlp1AffiliateUrl('skinnyrx', 'directmeds-vs-skinnyrx')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Check SkinnyRx Pricing Directly <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* DirectMeds Card */}
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">DirectMeds</h3>
                  <p className="text-sm text-orange-700 mt-1 font-bold">⚠️ Less Documented — All Pricing: VERIFY</p>
                </div>
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-300">
                  Limited Coverage
                </span>
              </div>

              <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
                <p className="font-bold text-orange-900 text-sm mb-2">What We Can and Cannot Confirm About DirectMeds</p>
                <ul className="space-y-1.5 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Monthly pricing: unconfirmed — <span className="italic text-orange-600">VERIFY</span> directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Medication formulary (sema/tirz): verify directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Program comprehensiveness: verify directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Brand track record: limited independent documentation
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                DirectMeds is a less-documented provider in the compounded GLP-1 market. Our editorial team
                has limited publicly available information to evaluate their program, pricing, or patient
                support model. This is not necessarily an indication of poor quality — it may simply reflect
                a smaller brand footprint. However, less independent documentation means more due diligence
                is required before enrolling.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                If you are considering DirectMeds specifically, we recommend: verifying their physician
                credentials and compounding pharmacy partnerships, reading independent patient reviews on
                third-party platforms, confirming all pricing and contract terms directly, and comparing
                against providers with confirmed pricing before making a decision.
              </p>

              <a
                href={buildGlp1AffiliateUrl('directmeds', 'directmeds-vs-skinnyrx')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Check DirectMeds Directly <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Who Should Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Choose Each Provider</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-gray-200 bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-3">Consider SkinnyRx if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    Want a provider with both semaglutide and tirzepatide in their marketed formulary
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    Prefer a comprehensive program approach (coaching + medication vs. medication access only)
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    Are comfortable verifying pricing directly before enrolling
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    Prefer a provider with more established brand presence than DirectMeds
                  </li>
                </ul>
              </div>
              <div className="border border-orange-200 bg-orange-50 rounded-xl p-6">
                <h3 className="font-bold text-orange-900 text-lg mb-3">Consider DirectMeds if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Have specifically researched DirectMeds and want to compare them directly with SkinnyRx
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Are willing to do additional due diligence on their credentials and program structure
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Are comparing pricing directly against SkinnyRx and other providers simultaneously
                  </li>
                </ul>
                <p className="text-xs text-orange-700 mt-4 font-medium">
                  Note: For confirmed pricing, MEDVi or Strut Health are lower-uncertainty alternatives.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is SkinnyRx a legitimate GLP-1 telehealth provider?',
                  a: "SkinnyRx is a telehealth platform that markets compounded semaglutide and tirzepatide as part of a comprehensive weight management service. They have a more established brand presence than many newer entrants. However, current pricing has not been independently confirmed — verify pricing and program details directly at SkinnyRx.com before enrolling.",
                },
                {
                  q: 'How much does DirectMeds cost?',
                  a: "DirectMeds pricing has not been independently confirmed by our editorial team. DirectMeds is a less-documented provider — we have limited publicly available pricing data and recommend verifying current costs directly at their website. For comparison, MEDVi (confirmed at $179-299/month) and Strut Health offer transparent, independently verifiable pricing.",
                },
                {
                  q: 'Does SkinnyRx offer tirzepatide?',
                  a: "SkinnyRx markets a program that includes both compounded semaglutide and tirzepatide. Current availability and pricing for specific medications should be confirmed directly with SkinnyRx, as formulary offerings and pricing can change.",
                },
                {
                  q: 'Why is neither DirectMeds nor SkinnyRx the definitive pick?',
                  a: "Our editorial process requires independent pricing verification before making a definitive recommendation. Neither provider has confirmed pricing on this page. We give SkinnyRx a soft edge for stronger brand recognition and comprehensive program framing, but we are honest that this is a relative assessment between two unverified providers — not a full recommendation.",
                },
                {
                  q: 'What is the cheapest compounded semaglutide option with verified pricing?',
                  a: "For confirmed, independently verified pricing, MEDVi is confirmed at $179-299 per month — one of the most accessible options in the compounded GLP-1 telehealth space. Strut Health also offers transparent pricing. Both are recommended over providers whose pricing requires direct confirmation.",
                },
                {
                  q: 'Is DirectMeds better or worse than SkinnyRx for weight loss?',
                  a: "Both providers offer compounded GLP-1 medications (the actual weight loss mechanism), so clinical outcomes depend primarily on medication dose, adherence, and lifestyle factors. The meaningful differences are in pricing, support quality, and program comprehensiveness — all of which require direct verification for both providers. For confirmed data on all three, we recommend MEDVi or Strut Health.",
                },
              ].map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-lg overflow-hidden group">
                  <summary className="p-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-sm ml-2">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 leading-relaxed text-sm">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Editorial Review Box */}
          <EditorialReviewBox
            summary="This is an honest no-winner comparison. Neither DirectMeds nor SkinnyRx has independently verified pricing, which limits the editorial value of a head-to-head analysis. SkinnyRx earns a soft edge for stronger brand recognition, a more comprehensive program positioning (coaching + medication vs. medication-only framing), and confirmed tirzepatide and semaglutide availability. DirectMeds is less documented and requires more due diligence before enrolling. If you are making a decision today, we recommend checking both directly and also comparing against established providers with confirmed pricing: MEDVi ($179-299/mo verified) or Strut Health. Neither provider should be chosen before verified pricing is confirmed."
            recommendation="skinnyrx"
            author="Chad Simpson"
            dateReviewed="2026-05-06"
          />

          {/* Related Pages */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related GLP-1 Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'SkinnyRx vs MEDVi', href: '/compare/skinnyrx-vs-medvi' },
                { label: 'SkinnyRx vs Ivim Health', href: '/compare/skinnyrx-vs-ivim-health' },
                { label: 'DirectMeds vs GobyMeds', href: '/compare/directmeds-vs-gobymeds' },
                { label: 'Cheapest Semaglutide Online', href: '/cheapest-semaglutide-online' },
                { label: 'Best Compounded Semaglutide', href: '/best-compounded-semaglutide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border border-gray-200 rounded-lg p-3 text-sm font-medium text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-500 leading-relaxed">
            <p className="font-semibold text-gray-600 mb-1">Affiliate Disclosure</p>
            <p>
              GLP1 Compare Hub earns a commission when you click affiliate links and make a purchase. This does
              not affect our editorial assessments. Neither DirectMeds nor SkinnyRx has independently verified
              pricing on this page. SkinnyRx is given a soft editorial edge based on stronger brand presence
              and program comprehensiveness — not based on commission rates. All pricing cells are marked
              VERIFY and require direct confirmation with providers before enrolling. This page does not
              constitute medical advice. Consult a licensed healthcare provider before starting any GLP-1
              program.
            </p>
          </div>
        </main>

        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
