import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { VerifiedPricingBadge } from '@/components/glp1/VerifiedPricingBadge';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, Check, ExternalLink, Award, AlertCircle } from 'lucide-react';

// /cheapest-compounded-tirzepatide  (600 vol, KD 7, Tier B)
// Pure price-shopping intent for compounded (not branded) tirzepatide specifically.
// Distinct from /cheapest-tirzepatide-online which covers all 3 cost paths.

export const metadata: Metadata = {
  title: 'Cheapest Compounded Tirzepatide 2026: Provider Price Comparison | GLP1CompareHub',
  description:
    'Cheapest compounded tirzepatide prices compared: from $167/month (12-mo plan). See verified 2026 pricing from TMates, MEDVi, Eden Health, and more — without insurance.',
  alternates: { canonical: 'https://glp1comparehub.com/cheapest-compounded-tirzepatide' },
  openGraph: {
    title: 'Cheapest Compounded Tirzepatide 2026: Verified Provider Prices',
    description: 'Compounded tirzepatide ranges from $167–$299/month. Here\'s the verified 2026 price comparison across telehealth providers — no insurance needed.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/cheapest-compounded-tirzepatide',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compounded Tirzepatide', item: 'https://glp1comparehub.com/compounded-tirzepatide' },
    { '@type': 'ListItem', position: 3, name: 'Cheapest Compounded Tirzepatide', item: 'https://glp1comparehub.com/cheapest-compounded-tirzepatide' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does compounded tirzepatide cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded tirzepatide ranges from approximately $167–$299/month depending on the provider and plan structure. TMates offers the lowest price at ~$167/month on a 12-month commitment plan. Monthly plans and providers with more clinical services range from $229–$299/month. All prices are without insurance — compounded tirzepatide is not covered by insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is compounded tirzepatide cheaper than Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded Zepbound (Eli Lilly) costs approximately $1,086–$1,300/month at retail without insurance. Compounded tirzepatide uses the same active pharmaceutical ingredient (tirzepatide) but is prepared by 503A compounding pharmacies without the branded packaging, delivery system, or drug company pricing. Compounded preparations are legal under federal pharmacy regulations and must be prescribed by a licensed physician.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the cheapest compounded tirzepatide the best option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Lower prices often reflect commitment plans (12-month upfront) or less clinical support. Consider: the provider\'s consultation and monitoring quality, whether follow-up visits are included, how they handle dose adjustments, and their 503A pharmacy partnerships. The cheapest option per month may cost more overall if you need additional consultations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there hidden fees with compounded tirzepatide providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some providers charge separately for consultations, lab work, or follow-up visits. Others include these in the monthly price. Always ask before enrolling: (1) Is the initial consultation included? (2) Are follow-up visits included? (3) What happens if I need a dose adjustment? (4) Is lab work required and who pays for it? (5) What is the cancellation policy?',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the FDA status of compounded tirzepatide in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of early 2026, compounded tirzepatide from 503A pharmacies (patient-specific, individually compounded) remains legal for licensed pharmacies preparing individually prescribed formulations. The FDA resolved the Zepbound/Mounjaro drug shortage in March 2025 and has taken enforcement actions against bulk 503B manufacturing. 503A compounding (patient-specific, small batch) has continued under physician prescription. Regulatory status can change — verify current compliance with your provider.',
      },
    },
  ],
};

export default function CheapestCompoundedTirzepatidePage() {
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'cheapest-compounded-tirzepatide');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'cheapest-compounded-tirzepatide');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'cheapest-compounded-tirzepatide');
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'cheapest-compounded-tirzepatide');

  return (
    <GLP1Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GLP1Header />
      <MedicalDisclaimerBanner />
      <RelatedGuides currentPath="/cheapest-compounded-tirzepatide" priorityCluster="tirzepatide" />
      <StickyMobileCTA href={tmatesUrl} brandName="TMates" pricePitch="Compounded tirzepatide from $167/mo (12-mo plan)" />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-tirzepatide" className="hover:underline text-blue-600">Compounded Tirzepatide</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Cheapest Prices</li>
          </ol>
        </nav>

        {/* Hero */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">Price Comparison</span>
            <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Cheapest Compounded Tirzepatide 2026: Verified Provider Price Comparison
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Compounded tirzepatide ranges from <strong>$167–$299/month</strong> without insurance —
            compared to $1,086+/month for branded Zepbound. Here are the verified 2026 prices from
            active telehealth providers, ranked by monthly cost.
          </p>

          {/* Price summary table */}
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-2.5 font-semibold">Provider</th>
                  <th className="text-center px-3 py-2.5 font-semibold">Monthly Price</th>
                  <th className="text-center px-3 py-2.5 font-semibold">Plan Type</th>
                  <th className="text-center px-3 py-2.5 font-semibold">Affiliate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50">
                  <td className="px-3 py-2.5 font-bold">
                    TMates
                    <span className="ml-1.5 bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-full">Lowest</span>
                  </td>
                  <td className="px-3 py-2.5 text-center font-bold text-green-700">~$167/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">12-month commitment</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={tmatesUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2.5 font-semibold">MEDVi</td>
                  <td className="px-3 py-2.5 text-center font-semibold">$179–$299/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">Monthly / tiered</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={medviUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2.5 font-semibold">Eden Health</td>
                  <td className="px-3 py-2.5 text-center font-semibold">$229–$299/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">Includes metabolic panel</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={edenUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2.5 font-semibold">Ivim Health</td>
                  <td className="px-3 py-2.5 text-center text-gray-600 italic">Verify directly</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">Microdosing specialist</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={ivimUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-3 py-2.5 font-medium text-gray-600">Zepbound (branded)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-red-700">~$1,086+/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">Eli Lilly direct</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-400">Not compounded</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic mb-4">
            Compounded prices verified May 2026. Zepbound price is without insurance at retail. See{' '}
            <Link href="/cheapest-tirzepatide-online" className="text-blue-600 underline">our full cheapest tirzepatide guide</Link>{' '}
            for all 3 cost paths including insurance.
          </p>
        </section>

        {/* What Drives Price Differences */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Drives Price Differences Between Providers?</h2>
          <div className="space-y-3">
            {[
              { factor: 'Commitment plan vs month-to-month', desc: 'TMates\'s $167/month price requires a 12-month commitment. Month-to-month plans typically run $200–$299. If you\'re committed to a full year, the commitment plan saves significantly.' },
              { factor: 'Clinical services included', desc: 'Eden Health\'s higher price includes comprehensive metabolic bloodwork at intake. Providers with less included clinical support charge less.' },
              { factor: 'Consultation fees', desc: 'Some providers charge $50–$150 for the initial consultation separately. Others include it. Always ask before enrolling.' },
              { factor: 'Dose/quantity included', desc: 'What does the monthly price include — just the medication, or a titration progression? Confirm how many doses are included and how dose adjustments are handled.' },
            ].map(({ factor, desc }) => (
              <div key={factor} className="border border-gray-200 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-800 text-sm mb-1">{factor}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Provider Cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Provider Options</h2>
          <div className="space-y-4">
            <div className="border-2 border-green-200 rounded-xl p-5 bg-green-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">TMates</span>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Lowest Price</span>
                  </div>
                  <p className="text-green-700 font-semibold text-sm mb-1">~$167/month (12-mo tirzepatide plan)</p>
                  <p className="text-xs text-gray-600 mb-2">Compounded tirzepatide. Best per-month price on a commitment plan. Highest EPC on Katalys ($16.09, 6.43% conversion rate). Strong patient support infrastructure.</p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Best monthly price on commitment plan</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Katalys-verified high conversion</li>
                  </ul>
                </div>
                <a href={tmatesUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">MEDVi</span>
                    <Award className="text-yellow-500" size={14} />
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">Editor&apos;s Pick</span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">$179–$299/month</p>
                  <p className="text-xs text-gray-600 mb-2">Verified pricing, strong brand recognition (33K+ monthly searches). Good balance of price and service quality for patients who want flexibility.</p>
                </div>
                <a href={medviUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Eden Health</span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">$229–$299/month</p>
                  <p className="text-xs text-gray-600 mb-2">Higher price includes comprehensive metabolic bloodwork at intake and full-service clinical support. Good choice if you value the included lab work.</p>
                </div>
                <a href={edenUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">
            Affiliate disclosure: GLP1CompareHub earns a commission if you enroll.{' '}
            <Link href="/affiliate-disclosure" className="underline">See disclosure</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/cheapest-tirzepatide-online', label: 'Cheapest Tirzepatide Online: All 3 Cost Paths' },
              { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide Guide 2026' },
              { href: '/best-compounded-tirzepatide', label: 'Best Compounded Tirzepatide Providers' },
              { href: '/tirzepatide-vs-zepbound', label: 'Tirzepatide vs Zepbound: Same Drug, Different Cost' },
              { href: '/compare/trimrx-vs-medvi', label: 'TrimRx vs MEDVi: Price & Service Compared' },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors text-sm text-gray-700">
                <ArrowRight size={14} className="text-green-500 flex-shrink-0" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <EditorialReviewBox />
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
