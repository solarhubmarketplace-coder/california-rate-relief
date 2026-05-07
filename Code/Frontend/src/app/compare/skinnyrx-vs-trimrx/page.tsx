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
  title: 'SkinnyRx vs TrimRx 2026: GLP-1 Compounded Semaglutide Comparison',
  description:
    'Comparing SkinnyRx and TrimRx for compounded semaglutide and tirzepatide. TrimRx entry pricing confirmed at ~$179/mo. SkinnyRx pricing unconfirmed — verify directly before subscribing.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/skinnyrx-vs-trimrx',
  },
  openGraph: {
    title: 'SkinnyRx vs TrimRx 2026: GLP-1 Program Comparison',
    description:
      'Side-by-side look at SkinnyRx and TrimRx compounded GLP-1 programs. Verified TrimRx entry price: ~$179/mo. SkinnyRx pricing: verify directly.',
    url: 'https://glp1comparehub.com/compare/skinnyrx-vs-trimrx',
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
          name: 'SkinnyRx vs TrimRx',
          item: 'https://glp1comparehub.com/compare/skinnyrx-vs-trimrx',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'SkinnyRx vs TrimRx 2026: GLP-1 Compounded Semaglutide Comparison',
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
          name: 'How much does SkinnyRx cost per month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SkinnyRx pricing is currently unconfirmed on our end due to site access limitations. We recommend visiting SkinnyRx directly to get current pricing before committing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does TrimRx cost per month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TrimRx entry-level pricing starts at approximately $179/month, which is our one confirmed data point. Higher-tier plans may vary — verify current pricing on their site.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does SkinnyRx offer compounded semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, SkinnyRx offers compounded semaglutide and compounded tirzepatide through their telehealth platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does TrimRx offer compounded tirzepatide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, TrimRx offers both compounded semaglutide and compounded tirzepatide options through their program.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better: SkinnyRx or TrimRx?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Based on available data, TrimRx edges out SkinnyRx due to its confirmed entry price of ~$179/mo. Without confirmed SkinnyRx pricing, it is difficult to make a full cost comparison. Both provide physician-supervised compounded GLP-1 programs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are SkinnyRx and TrimRx programs physician-supervised?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both SkinnyRx and TrimRx operate as telehealth platforms where licensed providers supervise prescriptions. Exact consultation formats differ — check each provider for current details.',
          },
        },
      ],
    },
  ],
};

export default function SkinnyRxVsTrimRxPage() {
  return (
    <GLP1Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA
        providerName="TrimRx"
        href={buildGlp1AffiliateUrl('trimrx', 'skinnyrx-vs-trimrx')}
        label="See TrimRx Plans"
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
          <span className="text-gray-800 font-medium">SkinnyRx vs TrimRx</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            SkinnyRx vs TrimRx (2026): Which Compounded GLP-1 Program Is Right for You?
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <VerifiedPricingBadge
              label="TrimRx entry: ~$179/mo verified"
              status="partial"
            />
            <span className="flex items-center gap-1 text-orange-600 text-sm font-medium">
              <AlertCircle className="w-4 h-4" />
              SkinnyRx pricing unconfirmed
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            Both SkinnyRx and TrimRx offer compounded semaglutide and tirzepatide through
            telehealth. TrimRx has one confirmed pricing data point (~$179/mo entry); SkinnyRx
            pricing is blocked from independent verification. Here&rsquo;s what we know.
          </p>
        </div>

        {/* Unconfirmed Pricing Alert */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex gap-3 mb-8">
          <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-orange-800 mb-1">SkinnyRx pricing is unconfirmed</p>
            <p className="text-orange-700 text-sm">
              We could not independently verify SkinnyRx&rsquo;s current pricing due to site access
              limitations. Visit SkinnyRx directly to confirm costs before enrolling. All
              SkinnyRx price cells below are marked VERIFY.
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
                    SkinnyRx
                  </th>
                  <th className="text-center px-4 py-3 font-semibold text-indigo-700 bg-indigo-50">
                    TrimRx <Award className="inline w-4 h-4 text-indigo-500 ml-1" />
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
                    ~$179/mo entry
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Medication Options</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Compounded sema + tirz
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
                    Telehealth intake
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
                  <td className="px-4 py-3 font-medium text-gray-700">Affiliate Status</td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    Pending (Katalys)
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 bg-indigo-50">
                    Pending (Katalys)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">Best For</td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    Value-focused, comprehensive program seekers
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600 bg-indigo-50">
                    Budget-conscious starters with verified pricing
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
            Our Verdict: TrimRx Gets the Edge
          </h2>
          <p className="text-indigo-800 mb-3">
            With SkinnyRx pricing unverified, TrimRx wins on transparency alone. Its confirmed
            entry point of ~$179/mo gives you a real budget anchor. That said, SkinnyRx may
            offer a compelling program once you verify their current pricing directly.
          </p>
          <p className="text-indigo-700 text-sm">
            <strong>Bottom line:</strong> If you want a confirmed starting price today, TrimRx is
            the safer starting point. Check SkinnyRx pricing before ruling it out — their program
            may be competitive.
          </p>
          <div className="mt-4">
            <a
              href={buildGlp1AffiliateUrl('trimrx', 'skinnyrx-vs-trimrx')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              See TrimRx Plans <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Provider Cards */}
        <section className="mb-10 grid md:grid-cols-2 gap-6">
          {/* SkinnyRx Card */}
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-1">SkinnyRx</h3>
            <p className="text-sm text-gray-500 mb-3">Comprehensive compounded GLP-1 program</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Compounded semaglutide and tirzepatide
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Telehealth-based physician supervision
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Comprehensive support program structure
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-orange-700">Pricing unconfirmed — verify directly</span>
              </li>
            </ul>
            <a
              href={buildGlp1AffiliateUrl('skinnyrx', 'skinnyrx-vs-trimrx')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
            >
              Visit SkinnyRx <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* TrimRx Card */}
          <div className="border-2 border-indigo-300 rounded-xl p-5 bg-indigo-50">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900">TrimRx</h3>
              <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-medium">
                Editor&rsquo;s Pick
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-3">Budget-accessible compounded GLP-1</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Entry price confirmed: ~$179/mo
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Compounded semaglutide and tirzepatide
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Telehealth intake and ongoing support
              </li>
              <li className="flex items-start gap-2">
                <Minus className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                Higher-tier plan pricing: verify on site
              </li>
            </ul>
            <a
              href={buildGlp1AffiliateUrl('trimrx', 'skinnyrx-vs-trimrx')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
            >
              Visit TrimRx <ExternalLink className="w-3.5 h-3.5" />
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
                q: 'How much does SkinnyRx cost per month?',
                a: "SkinnyRx pricing is currently unconfirmed on our end due to site access limitations. We recommend visiting SkinnyRx directly to get current pricing before committing.",
              },
              {
                q: 'How much does TrimRx cost per month?',
                a: "TrimRx entry-level pricing starts at approximately $179/month, which is our one confirmed data point. Higher-tier plans may vary — verify current pricing on their site.",
              },
              {
                q: 'Does SkinnyRx offer compounded semaglutide?',
                a: 'Yes, SkinnyRx offers compounded semaglutide and compounded tirzepatide through their telehealth platform.',
              },
              {
                q: 'Does TrimRx offer compounded tirzepatide?',
                a: 'Yes, TrimRx offers both compounded semaglutide and compounded tirzepatide options through their program.',
              },
              {
                q: 'Which is better: SkinnyRx or TrimRx?',
                a: "Based on available data, TrimRx edges out SkinnyRx due to its confirmed entry price of ~$179/mo. Without confirmed SkinnyRx pricing, it is difficult to make a full cost comparison. Both provide physician-supervised compounded GLP-1 programs.",
              },
              {
                q: 'Are SkinnyRx and TrimRx programs physician-supervised?',
                a: 'Both SkinnyRx and TrimRx operate as telehealth platforms where licensed providers supervise prescriptions. Exact consultation formats differ — check each provider for current details.',
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
          summary="TrimRx earns the edge here through pricing transparency. SkinnyRx may be worth exploring once you verify their rates directly — their program structure has merit. Neither provider has confirmed affiliate status yet; links will route to brand pages until Katalys approvals are processed."
        />

        {/* Related Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'SkinnyRx vs MEDVi', href: '/compare/skinnyrx-vs-medvi' },
              { label: 'SkinnyRx vs IVIM Health', href: '/compare/skinnyrx-vs-ivim-health' },
              { label: 'TrimRx vs Eden Health', href: '/compare/trimrx-vs-eden-health' },
              { label: 'MEDVi vs Eden Health', href: '/compare/medvi-vs-eden-health' },
              {
                label: 'Best Compounded Semaglutide 2026',
                href: '/best-compounded-semaglutide',
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
