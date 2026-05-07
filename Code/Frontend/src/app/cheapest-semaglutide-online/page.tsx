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
import { ArrowRight, Check, ExternalLink, Award, AlertCircle } from 'lucide-react';

// /cheapest-semaglutide-online  (350 vol, KD 10, Tier B)
// Price-shopping intent for semaglutide online. Strut Health at $99/mo is the
// standout low price. Targets patients who've decided on semaglutide and want
// the best price without insurance.

export const metadata: Metadata = {
  title: 'Cheapest Semaglutide Online 2026: Verified Provider Prices | GLP1CompareHub',
  description:
    'Cheapest semaglutide online without insurance: from $99/month. Verified 2026 pricing from Strut Health, TMates, Eden Health, and more. No insurance required.',
  alternates: { canonical: 'https://glp1comparehub.com/cheapest-semaglutide-online' },
  openGraph: {
    title: 'Cheapest Semaglutide Online 2026: $99/Month Without Insurance',
    description: 'Compounded semaglutide starts at $99/month through telehealth — vs $1,300+/month for branded Wegovy. Verified 2026 prices ranked by cost.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/cheapest-semaglutide-online',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compounded Semaglutide', item: 'https://glp1comparehub.com/compounded-semaglutide' },
    { '@type': 'ListItem', position: 3, name: 'Cheapest Semaglutide Online', item: 'https://glp1comparehub.com/cheapest-semaglutide-online' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does semaglutide cost online without insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide starts at approximately $99/month through telehealth providers like Strut Health. Most providers charge $99–$299/month depending on their service model and included clinical support. Branded Wegovy costs approximately $1,300–$1,400/month without insurance. The compounded version uses the same active ingredient at a fraction of the cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to get semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest option for most patients is compounded semaglutide through a telehealth provider without insurance. Strut Health offers compounded semaglutide from $99/month — the lowest verified price we\'ve found. For patients with insurance, branded Wegovy or Ozempic may be cheaper with insurance coverage, but copays vary widely. Lilly\'s patient assistance programs can also reduce branded costs to $25/month for eligible patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cheap online semaglutide safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide from licensed 503A pharmacies through physician-supervised telehealth programs is legal and operates within the same regulatory framework as any prescribed medication. The key is using a legitimate telehealth provider with licensed physicians and a licensed compounding pharmacy — not gray-market or unverified sources. All providers listed on GLP1CompareHub use licensed US pharmacies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is compounded semaglutide cheaper than Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded Wegovy (Novo Nordisk) costs $1,300+/month because of drug company pricing, the delivery pen system, marketing costs, and brand premiums. Compounded semaglutide uses the same active pharmaceutical ingredient (semaglutide) prepared by 503A compounding pharmacies — bypassing brand pricing. The medication is dispensed in a vial with a syringe rather than an auto-injector pen, but the active ingredient is the same.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get semaglutide online from a telehealth provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multiple telehealth providers offer compounded semaglutide online with a virtual physician consultation. The process typically involves: (1) complete an online intake questionnaire, (2) have a virtual consultation with a licensed physician, (3) receive a prescription, (4) compounding pharmacy ships medication to your door. The entire process is handled online with no in-person appointment required in most states.',
      },
    },
  ],
};

export default function CheapestSemaglutideOnlinePage() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'cheapest-semaglutide-online');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'cheapest-semaglutide-online');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'cheapest-semaglutide-online');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'cheapest-semaglutide-online');

  return (
    <GLP1Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={strutUrl} brandName="Strut Health" pricePitch="Compounded semaglutide from $99/month" />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-semaglutide" className="hover:underline text-blue-600">Compounded Semaglutide</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Cheapest Online</li>
          </ol>
        </nav>

        {/* Hero */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">Price Comparison</span>
            <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Cheapest Semaglutide Online 2026: From $99/Month Without Insurance
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Compounded semaglutide starts at <strong>$99/month</strong> — compared to $1,300+/month
            for branded Wegovy. Here are the verified 2026 prices from active telehealth providers,
            ranked by monthly cost.
          </p>

          {/* Price comparison table */}
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-2.5 font-semibold">Provider</th>
                  <th className="text-center px-3 py-2.5 font-semibold">Monthly Price</th>
                  <th className="text-center px-3 py-2.5 font-semibold">Notes</th>
                  <th className="text-center px-3 py-2.5 font-semibold">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50">
                  <td className="px-3 py-2.5 font-bold">
                    Strut Health
                    <span className="ml-1.5 bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-full">Cheapest</span>
                  </td>
                  <td className="px-3 py-2.5 text-center font-bold text-green-700">$99/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">Injectable compounded sema</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={strutUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2.5 font-semibold">TMates</td>
                  <td className="px-3 py-2.5 text-center font-semibold">~$158/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">12-mo plan; sublingual option also</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={tmatesUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2.5 font-semibold">Embody</td>
                  <td className="px-3 py-2.5 text-center font-semibold">$149 first mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">Intro price; injectable + GLP-1 gum</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={embodyUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2.5 font-semibold">Eden Health</td>
                  <td className="px-3 py-2.5 text-center font-semibold">$229–$249/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-600">Includes metabolic bloodwork</td>
                  <td className="px-3 py-2.5 text-center">
                    <a href={edenUrl} target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 underline text-xs">See Pricing →</a>
                  </td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-3 py-2.5 text-gray-600">Wegovy (branded)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-red-700">~$1,300–$1,400/mo</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-500">Without insurance, retail</td>
                  <td className="px-3 py-2.5 text-center text-xs text-gray-400">Brand direct</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost savings math */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Savings Math</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Annual savings vs Wegovy', value: '$14,412', desc: '$99/mo compounded vs $1,300/mo branded', color: 'green' },
              { label: 'vs. 4-year Wegovy course', value: '$57,648', desc: 'At $99/mo compounded for 4 years vs $1,300/mo branded', color: 'blue' },
              { label: 'Same active ingredient', value: '100%', desc: 'Compounded semaglutide API is identical to Wegovy\'s active ingredient', color: 'purple' },
            ].map(({ label, value, desc, color }) => (
              <div key={label} className={`border border-${color}-200 rounded-xl p-4 bg-${color}-50 text-center`}>
                <p className={`text-2xl font-bold text-${color}-700 mb-1`}>{value}</p>
                <p className={`text-xs font-semibold text-${color}-900 mb-1`}>{label}</p>
                <p className={`text-xs text-${color}-700`}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Provider Details */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Provider Details</h2>
          <div className="space-y-4">
            <div className="border-2 border-green-200 rounded-xl p-5 bg-green-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Strut Health</span>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Lowest Price</span>
                  </div>
                  <p className="text-green-700 font-semibold text-sm mb-1">From $99/month</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Async or live video consultation. Compounded injectable semaglutide. Monthly billing,
                    no long-term commitment. Ships to most states. Physician-supervised program.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> $99/month — lowest verified price</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> No insurance needed</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> No long-term commitment</li>
                  </ul>
                </div>
                <a href={strutUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">TMates</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">Top-Rated</span>
                  </div>
                  <p className="text-blue-700 font-semibold text-sm mb-1">From $158/month (12-mo plan)</p>
                  <p className="text-xs text-gray-600">
                    Strong patient support, highest Katalys EPC ($16.09). Also offers sublingual oral option — rare among providers.
                  </p>
                </div>
                <a href={tmatesUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Embody</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded-full">Needle-Free Option</span>
                  </div>
                  <p className="text-purple-700 font-semibold text-sm mb-1">$149 first month</p>
                  <p className="text-xs text-gray-600">
                    Intro pricing with GLP-1 gum format also available for needle-averse patients.
                  </p>
                </div>
                <a href={embodyUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
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
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide 2026: Full Guide' },
              { href: '/best-compounded-semaglutide', label: 'Best Compounded Semaglutide Providers' },
              { href: '/cheapest-tirzepatide-online', label: 'Cheapest Tirzepatide Online 2026' },
              { href: '/semaglutide-with-b12', label: 'Semaglutide with B12: Stack Guide' },
              { href: '/oral-semaglutide-vs-injection', label: 'Oral vs Injectable Semaglutide' },
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
