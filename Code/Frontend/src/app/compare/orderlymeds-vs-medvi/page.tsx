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
  title: 'OrderlyMeds vs MEDVi 2026: Compounded GLP-1 Comparison',
  description:
    'OrderlyMeds vs MEDVi side-by-side. MEDVi wins with confirmed pricing (~$179–$299/mo), strong brand recognition, and physician-supervised compounded semaglutide. OrderlyMeds pricing is unconfirmed.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/orderlymeds-vs-medvi',
  },
  openGraph: {
    title: 'OrderlyMeds vs MEDVi 2026: GLP-1 Provider Comparison',
    description:
      "MEDVi has confirmed pricing (~$179/mo entry) and 33K+ monthly searches. OrderlyMeds pricing is unconfirmed. The winner is clear — here's why.",
    url: 'https://glp1comparehub.com/compare/orderlymeds-vs-medvi',
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
          name: 'OrderlyMeds vs MEDVi',
          item: 'https://glp1comparehub.com/compare/orderlymeds-vs-medvi',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'OrderlyMeds vs MEDVi 2026: Compounded GLP-1 Comparison',
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
          name: 'How much does MEDVi cost per month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MEDVi pricing starts at approximately $179/month at the entry level, with higher tiers up to ~$299/month. This range is confirmed through independent verification.',
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
          name: 'Is MEDVi better than OrderlyMeds?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, based on available data MEDVi is the stronger choice. MEDVi has confirmed pricing ($179–$299/mo), 33,000+ monthly branded searches indicating established brand trust, and physician-supervised compounded semaglutide and tirzepatide. OrderlyMeds lacks confirmed pricing data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does MEDVi offer compounded tirzepatide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, MEDVi offers both compounded semaglutide and compounded tirzepatide through its telehealth platform. Pricing may vary by medication type — verify the specific plan on their site.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is MEDVi physician-supervised?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, MEDVi uses licensed physicians for intake and ongoing supervision of GLP-1 prescriptions. Their program is structured around telehealth consultations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does MEDVi have 33,000+ monthly searches?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MEDVi has built strong brand recognition in the compounded GLP-1 space, resulting in over 33,000 monthly branded searches. This level of consumer awareness typically reflects real patient volume and a longer operating track record.',
          },
        },
      ],
    },
  ],
};

export default function OrderlyMedsVsMedviPage() {
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
        href={buildGlp1AffiliateUrl('medvi', 'orderlymeds-vs-medvi')}
        label="See MEDVi Plans"
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
          <span className="text-gray-800 font-medium">OrderlyMeds vs MEDVi</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            OrderlyMeds vs MEDVi (2026): Why MEDVi Is the Clear Choice
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <VerifiedPricingBadge
              label="MEDVi: $179–$299/mo verified"
              status="verified"
            />
            <span className="flex items-center gap-1 text-orange-600 text-sm font-medium">
              <AlertCircle className="w-4 h-4" />
              OrderlyMeds pricing unconfirmed
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            MEDVi enters this comparison with confirmed pricing ($179–$299/mo), physician
            supervision, and over 33,000 monthly branded searches. OrderlyMeds is an emerging
            provider with no confirmed pricing. The winner here is straightforward — but we&rsquo;ll
            walk through the full picture.
          </p>
        </div>

        {/* OrderlyMeds Pricing Alert */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex gap-3 mb-8">
          <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-orange-800 mb-1">
              OrderlyMeds pricing is unconfirmed
            </p>
            <p className="text-orange-700 text-sm">
              We could not independently verify OrderlyMeds&rsquo; current pricing. All
              OrderlyMeds price cells below are marked VERIFY. Visit their site directly before
              making any enrollment decision.
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
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">
                    OrderlyMeds
                  </th>
                  <th className="text-center px-4 py-3 font-semibold text-indigo-700 bg-indigo-50">
                    MEDVi <Award className="inline w-4 h-4 text-indigo-500 ml-1" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Monthly Price</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-indigo-700 bg-indigo-50">
                    $179–$299/mo
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Medication Options</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Compounded GLP-1
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 bg-indigo-50">
                    Compounded sema + tirz
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Consultation</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 bg-indigo-50">
                    Telehealth physician intake
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Ongoing Support</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 bg-indigo-50">
                    Included in program
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Brand Recognition</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Emerging / lower
                  </td>
                  <td className="px-4 py-3 text-center font-medium text-indigo-700 bg-indigo-50">
                    Strong (33K+ mo. searches)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Best For</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    <span className="italic text-orange-600 text-xs">VERIFY FIRST</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 bg-indigo-50">
                    Budget-conscious, price-transparent GLP-1 seekers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-10 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" />
            Our Verdict: MEDVi Wins Clearly
          </h2>
          <p className="text-indigo-800 mb-3">
            MEDVi is the straightforward winner in this matchup. It offers confirmed pricing from
            $179/mo, a well-documented telehealth program with physician supervision, compounded
            semaglutide and tirzepatide options, and over 33,000 monthly branded searches that
            signal real consumer trust.
          </p>
          <p className="text-indigo-800 mb-3">
            OrderlyMeds has no confirmed pricing data — making it impossible to evaluate on cost
            transparency, a key factor when choosing a monthly subscription program.
          </p>
          <p className="text-indigo-700 text-sm">
            <strong>Bottom line:</strong> Choose MEDVi if you want a verified price, established
            brand, and physician-supervised GLP-1 program. If you still want to explore
            OrderlyMeds, verify pricing directly before committing.
          </p>
          <div className="mt-4">
            <a
              href={buildGlp1AffiliateUrl('medvi', 'orderlymeds-vs-medvi')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              See MEDVi Plans <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Provider Cards */}
        <section className="mb-10 grid md:grid-cols-2 gap-6">
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
                <span className="text-orange-700">All pricing unconfirmed — verify directly</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Lower brand recognition than MEDVi</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">No confirmed program structure data</span>
              </li>
            </ul>
            <a
              href={buildGlp1AffiliateUrl('orderlymeds', 'orderlymeds-vs-medvi')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
            >
              Visit OrderlyMeds <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MEDVi Card */}
          <div className="border-2 border-indigo-300 rounded-xl p-5 bg-indigo-50">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900">MEDVi</h3>
              <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-medium">
                Editor&rsquo;s Pick
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-3">Established compounded GLP-1 provider</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Confirmed pricing: $179–$299/mo
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Compounded semaglutide and tirzepatide
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Physician-supervised telehealth intake
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                33K+ monthly branded searches
              </li>
            </ul>
            <a
              href={buildGlp1AffiliateUrl('medvi', 'orderlymeds-vs-medvi')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
            >
              Visit MEDVi <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Why MEDVi Wins: Brand Signal */}
        <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Why 33,000+ Monthly Searches Matters
          </h2>
          <p className="text-gray-700 text-sm mb-2">
            MEDVi receives over 33,000 branded searches per month — meaning consumers are actively
            seeking them out by name. That level of organic brand demand typically reflects a real
            patient base, established reputation, and longer operating history.
          </p>
          <p className="text-gray-600 text-sm">
            OrderlyMeds does not have comparable brand search volume, which means less publicly
            available patient feedback and a harder-to-verify track record. This is not a
            disqualifier, but it&rsquo;s a meaningful signal when you&rsquo;re evaluating a
            monthly medical subscription.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: 'How much does MEDVi cost per month?',
                a: 'MEDVi pricing starts at approximately $179/month at the entry level, with higher tiers up to ~$299/month. This range is confirmed through independent verification.',
              },
              {
                q: 'How much does OrderlyMeds cost per month?',
                a: 'OrderlyMeds pricing is not independently confirmed. Visit their site directly to see current pricing before enrolling.',
              },
              {
                q: 'Is MEDVi better than OrderlyMeds?',
                a: "Yes, based on available data MEDVi is the stronger choice. MEDVi has confirmed pricing ($179–$299/mo), 33,000+ monthly branded searches indicating established brand trust, and physician-supervised compounded semaglutide and tirzepatide. OrderlyMeds lacks confirmed pricing data.",
              },
              {
                q: 'Does MEDVi offer compounded tirzepatide?',
                a: 'Yes, MEDVi offers both compounded semaglutide and compounded tirzepatide through its telehealth platform. Pricing may vary by medication type — verify the specific plan on their site.',
              },
              {
                q: 'Is MEDVi physician-supervised?',
                a: 'Yes, MEDVi uses licensed physicians for intake and ongoing supervision of GLP-1 prescriptions. Their program is structured around telehealth consultations.',
              },
              {
                q: 'Why does MEDVi have 33,000+ monthly searches?',
                a: "MEDVi has built strong brand recognition in the compounded GLP-1 space, resulting in over 33,000 monthly branded searches. This level of consumer awareness typically reflects real patient volume and a longer operating track record.",
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
          summary="This is one of the clearest matchups on the site. MEDVi wins on every metric we can measure: pricing transparency, brand signal, and documented program structure. OrderlyMeds is not reviewed negatively — we simply don't have the data to compare it fairly. Readers who want confirmed pricing should go with MEDVi."
        />

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'GobyMeds vs MEDVi', href: '/compare/gobymeds-vs-medvi' },
              { label: 'MEDVi vs Eden Health', href: '/compare/medvi-vs-eden-health' },
              { label: 'MEDVi vs IVIM Health', href: '/compare/medvi-vs-ivim-health' },
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
