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
// /compare/directmeds-vs-gobymeds
// Both unverified, both newer/less documented. Truly limited comparison.
// Very honest editorial: "This comparison is limited — neither provider's
//   current pricing is independently verified. Check both directly and
//   compare against established providers."
// No editorial pick — neutral, push to verified alternatives.
// "Consider verified providers instead" callout with 3 alternatives:
//   TMates, MEDVi, Eden.
// StickyMobileCTA: TMates (trusted fallback with verified pricing)
// =============================================================================

export const metadata: Metadata = {
  title: 'DirectMeds vs GobyMeds (2026): A Transparent Comparison — Why We Recommend Checking Both Directly',
  description:
    'DirectMeds vs GobyMeds compared: both are newer compounded GLP-1 providers with unverified pricing. No editorial pick — verify both directly. For confirmed pricing, TMates, MEDVi, or Eden Health are recommended. Updated May 2026.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/directmeds-vs-gobymeds',
  },
  openGraph: {
    title: 'DirectMeds vs GobyMeds (2026): Both Unverified — What You Need to Know',
    description:
      'Neither DirectMeds nor GobyMeds has independently verified pricing. No editorial pick — verify both directly. For confirmed pricing, see TMates, MEDVi ($179-299/mo), or Eden Health ($229-299/mo). May 2026.',
    url: 'https://glp1comparehub.com/compare/directmeds-vs-gobymeds',
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
      name: 'DirectMeds vs GobyMeds',
      item: 'https://glp1comparehub.com/compare/directmeds-vs-gobymeds',
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DirectMeds vs GobyMeds (2026): A Transparent Comparison',
  description:
    'Honest, transparent comparison of DirectMeds and GobyMeds — two newer compounded GLP-1 telehealth providers with unverified pricing. No editorial pick. For independently verified pricing, TMates, MEDVi ($179-299/mo), or Eden Health ($229-299/mo) are recommended alternatives.',
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
    '@id': 'https://glp1comparehub.com/compare/directmeds-vs-gobymeds',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does this comparison not have an editorial pick?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DirectMeds and GobyMeds are both newer, less-documented compounded GLP-1 providers with unverified pricing. Our editorial process requires independent pricing verification and program review before making a definitive recommendation. Without that data for either provider, choosing one over the other would not be an evidence-based recommendation — it would be a guess. We are transparent about this limitation and recommend checking both directly, and also comparing against established providers with confirmed pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which GLP-1 provider has the most verified pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For independently verified pricing, Eden Health is confirmed at $229-299 per month and includes metabolic bloodwork at intake, making it a particularly strong value for physician-supervised programs. MEDVi is confirmed at $179-299 per month and is one of the most established and price-competitive verified options. TMates pricing is also confirmed by our editorial team. These three are the lowest-uncertainty choices for patients who prioritize confirmed pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are DirectMeds and GobyMeds the same company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DirectMeds and GobyMeds are distinct telehealth platforms and are not the same company. Both operate in the compounded GLP-1 medication access market, but they are separate entities with different branding and program structures. Neither has independently verified pricing on this page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Eden Health worth the premium over unverified providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health is confirmed at $229-299 per month and includes metabolic bloodwork at intake — a meaningful clinical inclusion that most compounded GLP-1 telehealth platforms do not offer at that price point. For patients choosing between an unverified provider and Eden Health, the certainty of confirmed pricing combined with included bloodwork makes Eden Health the lower-risk choice. Eden Health is an established brand with physician supervision and a strong track record.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I verify GobyMeds or DirectMeds pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To verify GobyMeds pricing: visit GobyMeds.com directly, complete their intake form or pricing inquiry, and review the program costs presented before entering any payment information. For DirectMeds: visit their website, review all disclosed pricing, and check for any fees beyond the advertised monthly cost (shipping, consultation fees, titration adjustments). For both providers, read independent patient reviews on third-party platforms before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I look for when comparing compounded GLP-1 providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When comparing compounded GLP-1 telehealth providers, the most important factors are: (1) confirmed, all-in monthly pricing with no hidden fees, (2) physician supervision model and how often you interact with a licensed provider, (3) compounding pharmacy credentials and PCAB or state-licensed pharmacy partnerships, (4) medication availability for your specific drug preference (semaglutide vs. tirzepatide vs. liraglutide), and (5) what support is included if you experience side effects or need dose adjustments. For providers with confirmed pricing and strong programs, see Eden Health, MEDVi, or TMates.',
      },
    },
  ],
};

export default function DirectMedsVsGobyMedsPage() {
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
          providerName="TMates"
          ctaText="View TMates — Verified Pricing & Established Provider"
          href={buildGlp1AffiliateUrl('tmates', 'directmeds-vs-gobymeds')}
        />

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/compare" className="hover:text-blue-600">Compare Providers</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700 font-medium">DirectMeds vs GobyMeds</li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-8">
            <div className="flex items-start gap-3 mb-4 flex-wrap">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                DirectMeds vs GobyMeds (2026): A Transparent Comparison
              </h1>
              <VerifiedPricingBadge variant="hero" verified={false} label="Both: Verify Pricing" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We will be direct with you: this comparison is limited. Neither DirectMeds nor GobyMeds has
              independently verified pricing on this page. Both are newer, less-documented compounded GLP-1
              providers. There is no editorial pick here. We recommend checking both directly — and also
              comparing against established providers with confirmed pricing before making any enrollment
              decision.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Last reviewed: May 6, 2026 &nbsp;·&nbsp; Author:{' '}
              <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
                Chad Simpson
              </Link>
            </p>
          </header>

          {/* Hard transparency banner */}
          <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-orange-500 w-7 h-7 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold text-orange-900 text-base mb-2">
                  Editorial Transparency: This Comparison Has Limitations
                </p>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  Both DirectMeds and GobyMeds are newer entrants to the compounded GLP-1 telehealth market.
                  Our editorial team has not been able to independently verify pricing, physician credentials,
                  or full program details for either provider. This means we cannot make a meaningful
                  evidence-based recommendation between them.
                </p>
                <p className="text-orange-900 text-sm font-semibold mb-3">
                  We recommend this approach:
                </p>
                <ol className="text-sm text-orange-800 space-y-1.5 list-decimal list-inside">
                  <li>Check both DirectMeds and GobyMeds pricing directly</li>
                  <li>Read independent patient reviews on third-party platforms</li>
                  <li>Compare confirmed pricing from established providers (see below)</li>
                  <li>Verify physician credentials and compounding pharmacy partnerships for either provider before enrolling</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Verified Alternatives Callout */}
          <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-blue-900 mb-4">
              Consider Verified Providers Instead
            </h2>
            <p className="text-blue-800 text-sm mb-5 leading-relaxed">
              Before choosing an unverified provider, compare against these established programs with
              independently confirmed pricing and strong track records:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {/* TMates */}
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="font-bold text-gray-900 text-sm">TMates</p>
                </div>
                <p className="text-xs text-green-700 font-semibold mb-1">Pricing Verified</p>
                <p className="text-xs text-gray-600 mb-3">
                  Confirmed pricing, established telehealth provider. Recommended fallback for confirmed costs.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('tmates', 'directmeds-vs-gobymeds')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View TMates <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              {/* MEDVi */}
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="font-bold text-gray-900 text-sm">MEDVi</p>
                </div>
                <p className="text-xs text-green-700 font-semibold mb-1">$179–$299/mo Verified</p>
                <p className="text-xs text-gray-600 mb-3">
                  One of the most price-competitive established programs. Confirmed by our editorial team.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('medvi', 'directmeds-vs-gobymeds')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View MEDVi <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              {/* Eden Health */}
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="font-bold text-gray-900 text-sm">Eden Health</p>
                </div>
                <p className="text-xs text-green-700 font-semibold mb-1">$229–$299/mo Verified</p>
                <p className="text-xs text-gray-600 mb-3">
                  Includes metabolic bloodwork at intake. Physician-supervised. Established brand.
                  Clear winner for comprehensive care.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('eden-health', 'directmeds-vs-gobymeds')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Eden Health <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

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
                      GobyMeds
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
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Compounded Tirzepatide</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Physician Supervision</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                  </tr>
                  <tr>
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
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Brand Track Record</td>
                    <td className="p-4 text-center text-orange-600 text-xs">Newer / less documented</td>
                    <td className="p-4 text-center text-orange-600 text-xs">Newer / emerging</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Editorial Status</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-orange-50 text-orange-700 text-xs font-medium px-2 py-1 rounded-full border border-orange-200">
                        Under Review
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-orange-50 text-orange-700 text-xs font-medium px-2 py-1 rounded-full border border-orange-200">
                        Under Review
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Table updated May 2026. Both providers have unconfirmed pricing marked{' '}
              <span className="italic text-orange-600">VERIFY</span>. All data based on publicly
              available information only. Verify directly before enrolling.
            </p>
          </section>

          {/* Provider Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Deep-Dives</h2>

            {/* GobyMeds Card */}
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">GobyMeds</h3>
                  <p className="text-sm text-orange-700 mt-1 font-bold">⚠️ Emerging Entrant — All Pricing: VERIFY</p>
                </div>
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-300">
                  Under Editorial Review
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                GobyMeds is an emerging GLP-1 telehealth entrant that our editorial team is actively monitoring.
                Based on publicly available information, they appear to offer compounded GLP-1 medication access
                through a telehealth model. Pricing and program details require direct verification — our
                affiliate review process with GobyMeds is not yet complete.
              </p>

              <div className="bg-white border border-orange-200 rounded-lg p-4 mb-5">
                <p className="font-bold text-orange-900 text-sm mb-2">What Requires Verification at GobyMeds</p>
                <ul className="space-y-1.5 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Monthly pricing: <span className="italic text-orange-600">VERIFY</span> directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Medication availability (sema/tirz): verify directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Physician oversight model: verify directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Compounding pharmacy credentials: verify directly
                  </li>
                </ul>
              </div>

              <a
                href={buildGlp1AffiliateUrl('gobymeds', 'directmeds-vs-gobymeds')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Check GobyMeds Directly <ExternalLink className="w-4 h-4" />
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

              <p className="text-gray-700 leading-relaxed mb-4">
                DirectMeds is a less-documented provider in the compounded GLP-1 telehealth market.
                Our editorial team has limited publicly available information to evaluate their program,
                pricing, or patient support model with confidence. This does not necessarily indicate poor
                quality, but it does mean that additional due diligence is required before enrolling with
                DirectMeds compared to established providers.
              </p>

              <div className="bg-white border border-orange-200 rounded-lg p-4 mb-5">
                <p className="font-bold text-orange-900 text-sm mb-2">What Requires Verification at DirectMeds</p>
                <ul className="space-y-1.5 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Monthly pricing: <span className="italic text-orange-600">VERIFY</span> directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Medication formulary: verify directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Physician licensing and oversight: verify directly
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Independent patient reviews: check third-party platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    All contract terms and cancellation policy: verify before enrolling
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 mb-5">
                Before enrolling with DirectMeds: we strongly recommend also getting pricing quotes from
                TMates, MEDVi, and Eden Health to have a confirmed baseline for comparison. Entering a GLP-1
                program without a price comparison against at least one verified provider is an unnecessary
                risk.
              </p>

              <a
                href={buildGlp1AffiliateUrl('directmeds', 'directmeds-vs-gobymeds')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Check DirectMeds Directly <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* What to Ask Both Providers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What to Ask Before Enrolling with Either Provider
            </h2>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              When verifying directly with DirectMeds or GobyMeds, use this checklist. The same questions
              apply to any compounded GLP-1 telehealth provider — and established providers like Eden Health,
              MEDVi, and TMates should be able to answer all of them upfront:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  'What is the all-in monthly cost — including medication, consultation, and shipping?',
                  'Are there any enrollment fees, titration fees, or dose-adjustment fees?',
                  'Which medications are available — semaglutide only, or tirzepatide and liraglutide as well?',
                  'Which compounding pharmacy prepares your medications, and are they PCAB-accredited or state-licensed?',
                  'What is the physician oversight model — how often do you interact with a licensed provider?',
                  'What is the cancellation policy and how much notice is required to pause or stop?',
                  'What support is available if you experience side effects or need a dose adjustment?',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Why does this comparison not have an editorial pick?',
                  a: "DirectMeds and GobyMeds are both newer, less-documented providers with unverified pricing. Our editorial process requires independent pricing verification before making a definitive recommendation. Without that data for either provider, choosing one over the other would not be evidence-based. We are transparent about this and recommend checking both directly, and also comparing against established providers with confirmed pricing.",
                },
                {
                  q: 'Which GLP-1 provider has the most verified pricing?',
                  a: "For independently verified pricing, Eden Health is confirmed at $229-299/month and includes metabolic bloodwork at intake. MEDVi is confirmed at $179-299/month. TMates pricing is also confirmed. These three are the lowest-uncertainty choices for patients who prioritize confirmed pricing.",
                },
                {
                  q: 'Are DirectMeds and GobyMeds the same company?',
                  a: "DirectMeds and GobyMeds are distinct telehealth platforms and are not the same company. Both operate in the compounded GLP-1 medication access market, but they are separate entities with different branding and program structures.",
                },
                {
                  q: 'Is Eden Health worth the premium over unverified providers?',
                  a: "Eden Health is confirmed at $229-299/month and includes metabolic bloodwork at intake — a meaningful clinical inclusion most platforms do not offer at that price. For patients choosing between an unverified provider and Eden Health, the confirmed pricing combined with included bloodwork makes Eden Health the lower-risk choice. It is an established brand with physician supervision and a strong track record.",
                },
                {
                  q: 'How do I verify GobyMeds or DirectMeds pricing?',
                  a: "To verify GobyMeds pricing: visit GobyMeds.com, complete their intake form or pricing inquiry, and review program costs before entering payment information. For DirectMeds: visit their website, review all disclosed pricing, and check for fees beyond the advertised monthly cost. For both providers, read independent patient reviews on third-party platforms before enrolling.",
                },
                {
                  q: 'What should I look for when comparing compounded GLP-1 providers?',
                  a: "The most important factors are: (1) confirmed, all-in monthly pricing with no hidden fees, (2) physician supervision model and how often you interact with a licensed provider, (3) compounding pharmacy credentials and PCAB or state-licensed pharmacy partnerships, (4) medication availability for your preference (semaglutide vs. tirzepatide vs. liraglutide), and (5) support if you experience side effects or need dose adjustments. For providers with confirmed pricing and strong programs, see Eden Health, MEDVi, or TMates.",
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
            summary="There is no editorial pick in this comparison — we are being transparent about the limitation. Both DirectMeds and GobyMeds are newer, less-documented compounded GLP-1 providers with unverified pricing. Without independent pricing confirmation for either, a head-to-head recommendation would not be evidence-based. We recommend a three-step approach: (1) get pricing quotes from both providers directly, (2) get quotes from at least one verified provider (TMates, MEDVi at $179-299/mo, or Eden Health at $229-299/mo with included bloodwork), and (3) make a decision with a confirmed baseline for comparison. Eden Health is the strongest verified alternative in this context — confirmed pricing, metabolic bloodwork at intake, and physician supervision combine to make it the clear choice against providers whose pricing is not yet confirmed."
            recommendation="tmates"
            author="Chad Simpson"
            dateReviewed="2026-05-06"
          />

          {/* Related Pages */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related GLP-1 Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'GobyMeds vs MEDVi', href: '/compare/gobymeds-vs-medvi' },
                { label: 'DirectMeds vs SkinnyRx', href: '/compare/directmeds-vs-skinnyrx' },
                { label: 'GobyMeds vs OrderlyMeds', href: '/compare/gobymeds-vs-orderlymeds' },
                { label: 'Best Compounded Semaglutide', href: '/best-compounded-semaglutide' },
                { label: 'Eden Health Full Review', href: '/reviews/eden-health' },
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
              not affect our editorial assessments. This page explicitly does not recommend DirectMeds or
              GobyMeds over each other — there is no editorial pick — because neither provider has
              independently verified pricing. The StickyMobileCTA links to TMates as a trusted fallback with
              confirmed pricing. Eden Health ($229-299/mo) and MEDVi ($179-299/mo) are presented as verified
              alternatives in good faith. All editorial assessments are made independently of commercial
              relationships. This page does not constitute medical advice.
            </p>
          </div>
        </main>

        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
