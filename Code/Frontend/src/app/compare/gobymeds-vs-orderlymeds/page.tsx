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

export const metadata: Metadata = {
  title: 'GobyMeds vs OrderlyMeds 2026: Compounded GLP-1 Comparison',
  description:
    'GobyMeds vs OrderlyMeds side-by-side comparison. Both providers have unconfirmed pricing. For verified pricing, consider MEDVi (~$179/mo) or Eden Health ($229–$299/mo) instead.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/gobymeds-vs-orderlymeds',
  },
  openGraph: {
    title: 'GobyMeds vs OrderlyMeds 2026: GLP-1 Telehealth Comparison',
    description:
      'Neither GobyMeds nor OrderlyMeds has confirmed pricing. See our honest take and verified-pricing alternatives before you commit.',
    url: 'https://glp1comparehub.com/compare/gobymeds-vs-orderlymeds',
    type: 'article',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          name: 'GobyMeds vs OrderlyMeds',
          item: 'https://glp1comparehub.com/compare/gobymeds-vs-orderlymeds',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'GobyMeds vs OrderlyMeds 2026: Compounded GLP-1 Comparison',
      author: {
        '@type': 'Person',
        name: 'Chad Simpson',
        url: 'https://glp1comparehub.com/author/chad-simpson',
      },
      datePublished: '2026-05-06',
      dateModified: '2026-05-06',
      publisher: {
        '@type': 'Organization',
        name: 'GLP-1 Compare Hub',
        url: 'https://glp1comparehub.com',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does GobyMeds cost per month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GobyMeds pricing is not independently confirmed. Visit their site directly to see current pricing before enrolling.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does OrderlyMeds cost per month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OrderlyMeds pricing is not independently confirmed. Visit their site directly to see current pricing before enrolling.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is GobyMeds or OrderlyMeds better?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Neither provider has confirmed pricing available, making a definitive recommendation difficult. Both are emerging telehealth GLP-1 providers. If you need confirmed pricing, MEDVi (~$179/mo) or Eden Health ($229–$299/mo) are better-documented alternatives.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are GobyMeds and OrderlyMeds legitimate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both GobyMeds and OrderlyMeds appear to be legitimate telehealth providers offering compounded GLP-1 medications. However, their lower brand recognition means less publicly available data. Research thoroughly and verify credentials before subscribing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a good alternative to GobyMeds and OrderlyMeds with verified pricing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MEDVi offers confirmed pricing starting at ~$179/mo for compounded semaglutide. Eden Health offers $229–$299/mo with metabolic bloodwork included at intake. Both have stronger brand recognition and confirmed pricing data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do GobyMeds and OrderlyMeds offer compounded semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both GobyMeds and OrderlyMeds are GLP-1 telehealth providers offering compounded semaglutide and/or tirzepatide. Verify current medication options directly with each provider.',
          },
        },
      ],
    },
  ],
};

export default function GobyMedsVsOrderlyMedsPage() {
  return (
    <GLP1Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA
        providerName="MEDVi"
        href={buildGlp1AffiliateUrl('tmates', 'gobymeds-vs-orderlymeds')}
        label="See Verified-Pricing Providers"
      />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/compare" className="hover:underline">
            Compare Providers
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">GobyMeds vs OrderlyMeds</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            GobyMeds vs OrderlyMeds (2026): An Honest Look at Two Emerging GLP-1 Providers
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="flex items-center gap-1 text-orange-600 text-sm font-medium">
              <AlertCircle className="w-4 h-4" />
              Both providers: pricing unconfirmed
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            GobyMeds and OrderlyMeds are both emerging telehealth GLP-1 providers. Neither has
            publicly confirmed pricing that we could independently verify. We&rsquo;ll give you
            what we know — and be direct about when you should look elsewhere.
          </p>
        </div>

        {/* Dual Unconfirmed Pricing Alert */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex gap-3 mb-8">
          <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-orange-800 mb-1">
              Neither GobyMeds nor OrderlyMeds has confirmed pricing
            </p>
            <p className="text-orange-700 text-sm">
              All pricing cells in this comparison are marked VERIFY. We could not independently
              confirm costs for either provider. Before enrolling in either program, visit each
              site directly to confirm current prices, medication options, and refund policies.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">
                    Feature
                  </th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">GobyMeds</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">
                    OrderlyMeds
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Monthly Price</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Medication Options</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Compounded GLP-1
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Compounded GLP-1
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Consultation</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Ongoing Support</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Brand Recognition</td>
                  <td className="px-4 py-3 text-center text-gray-600">Emerging / lower</td>
                  <td className="px-4 py-3 text-center text-gray-600">Emerging / lower</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Best For</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY FIRST</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY FIRST</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* "Why Not Consider Verified?" Callout */}
        <section className="mb-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            Why Not Consider a Verified-Pricing Provider?
          </h2>
          <p className="text-blue-800 text-sm mb-4">
            Since neither GobyMeds nor OrderlyMeds has publicly confirmed pricing, you may want
            to compare against providers where you can verify costs upfront.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-gray-900 text-sm">MEDVi</p>
              <p className="text-gray-600 text-xs mt-0.5">
                Confirmed entry: ~$179/mo. Compounded sema + tirz. Strong brand recognition
                (33K+ monthly branded searches).
              </p>
              <a
                href={buildGlp1AffiliateUrl('medvi', 'gobymeds-vs-orderlymeds')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline mt-2"
              >
                See MEDVi <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-gray-900 text-sm">Eden Health</p>
              <p className="text-gray-600 text-xs mt-0.5">
                Confirmed: $229–$299/mo. Includes metabolic bloodwork at intake.
                Physician-supervised.
              </p>
              <a
                href={buildGlp1AffiliateUrl('eden-health', 'gobymeds-vs-orderlymeds')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline mt-2"
              >
                See Eden Health <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Honest Verdict</h2>
          <p className="text-gray-700 mb-3">
            We can&rsquo;t pick a winner between GobyMeds and OrderlyMeds because neither has
            verifiable pricing data. Both are emerging providers with lower public profiles than
            established names like MEDVi, Eden Health, or IVIM Health.
          </p>
          <p className="text-gray-700 mb-3">
            <strong>If you&rsquo;re considering either:</strong> visit each site, confirm pricing,
            verify the prescribing physician&rsquo;s credentials, and check for a clear refund
            policy before paying. Do not commit based on marketing claims alone.
          </p>
          <p className="text-gray-600 text-sm">
            If you want a starting benchmark, MEDVi at ~$179/mo or Eden Health at $229–$299/mo
            are both better-documented options with confirmed pricing.
          </p>
        </section>

        {/* Provider Cards */}
        <section className="mb-10 grid md:grid-cols-2 gap-6">
          {/* GobyMeds Card */}
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-1">GobyMeds</h3>
            <p className="text-sm text-gray-500 mb-3">Emerging compounded GLP-1 telehealth</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                GLP-1 telehealth platform
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-orange-700">All pricing unconfirmed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-orange-700">Lower brand recognition — research thoroughly</span>
              </li>
            </ul>
            <a
              href={buildGlp1AffiliateUrl('gobymeds', 'gobymeds-vs-orderlymeds')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
            >
              Visit GobyMeds <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* OrderlyMeds Card */}
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-1">OrderlyMeds</h3>
            <p className="text-sm text-gray-500 mb-3">Emerging compounded GLP-1 telehealth</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                GLP-1 telehealth platform
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-orange-700">All pricing unconfirmed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-orange-700">Lower brand recognition — verify credentials</span>
              </li>
            </ul>
            <a
              href={buildGlp1AffiliateUrl('orderlymeds', 'gobymeds-vs-orderlymeds')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
            >
              Visit OrderlyMeds <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: 'How much does GobyMeds cost per month?',
                a: 'GobyMeds pricing is not independently confirmed. Visit their site directly to see current pricing before enrolling.',
              },
              {
                q: 'How much does OrderlyMeds cost per month?',
                a: 'OrderlyMeds pricing is not independently confirmed. Visit their site directly to see current pricing before enrolling.',
              },
              {
                q: 'Is GobyMeds or OrderlyMeds better?',
                a: "Neither provider has confirmed pricing available, making a definitive recommendation difficult. Both are emerging telehealth GLP-1 providers. If you need confirmed pricing, MEDVi (~$179/mo) or Eden Health ($229–$299/mo) are better-documented alternatives.",
              },
              {
                q: 'Are GobyMeds and OrderlyMeds legitimate?',
                a: 'Both GobyMeds and OrderlyMeds appear to be legitimate telehealth providers offering compounded GLP-1 medications. However, their lower brand recognition means less publicly available data. Research thoroughly and verify credentials before subscribing.',
              },
              {
                q: 'What is a good alternative to GobyMeds and OrderlyMeds with verified pricing?',
                a: 'MEDVi offers confirmed pricing starting at ~$179/mo for compounded semaglutide. Eden Health offers $229–$299/mo with metabolic bloodwork included at intake. Both have stronger brand recognition and confirmed pricing data.',
              },
              {
                q: 'Do GobyMeds and OrderlyMeds offer compounded semaglutide?',
                a: 'Both GobyMeds and OrderlyMeds are GLP-1 telehealth providers offering compounded semaglutide and/or tirzepatide. Verify current medication options directly with each provider.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1.5">{q}</h3>
                <p className="text-gray-600 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Review Box */}
        <EditorialReviewBox
          reviewer="Chad Simpson"
          reviewDate="May 6, 2026"
          summary="This is one of the few comparison pages where we can't give you a clear winner — and that's the honest answer. Both GobyMeds and OrderlyMeds lack confirmed pricing. If you're committed to one of these providers, verify directly. If you're flexible, MEDVi and Eden Health have documented pricing and stronger track records."
        />

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'GobyMeds vs MEDVi', href: '/compare/gobymeds-vs-medvi' },
              { label: 'OrderlyMeds vs MEDVi', href: '/compare/orderlymeds-vs-medvi' },
              { label: 'GobyMeds vs IVIM Health', href: '/compare/gobymeds-vs-ivim-health' },
              {
                label: 'Best Compounded Tirzepatide 2026',
                href: '/best-compounded-tirzepatide',
              },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                {label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
