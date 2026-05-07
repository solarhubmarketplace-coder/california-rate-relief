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

export const metadata: Metadata = {
  title: 'Ivim Health vs TrimRx (2026): Microdosing vs Entry-Level Pricing Compared',
  description:
    'Ivim Health vs TrimRx head-to-head: microdosing protocols, $179+ confirmed TrimRx pricing, Ivim customization, and which GLP-1 program is right for your goals.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/ivim-health-vs-trimrx',
  },
  openGraph: {
    title: 'Ivim Health vs TrimRx (2026): Microdosing vs Entry-Level Pricing Compared',
    description:
      'Compare Ivim Health and TrimRx across pricing, microdosing availability, titration approach, and clinical support. Updated May 2026.',
    url: 'https://glp1comparehub.com/compare/ivim-health-vs-trimrx',
    type: 'article',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://glp1comparehub.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Compare Providers',
      item: 'https://glp1comparehub.com/compare',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Ivim Health vs TrimRx',
      item: 'https://glp1comparehub.com/compare/ivim-health-vs-trimrx',
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ivim Health vs TrimRx (2026): Microdosing vs Entry-Level Pricing Compared',
  author: {
    '@type': 'Person',
    name: 'Chad Simpson',
    url: 'https://glp1comparehub.com/author/chad-simpson',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GLP1 Compare Hub',
    url: 'https://glp1comparehub.com',
  },
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/compare/ivim-health-vs-trimrx',
  },
  description:
    'Detailed comparison of Ivim Health and TrimRx GLP-1 programs. Covers microdosing protocols, confirmed entry pricing at $179+, titration differences, and ideal patient profiles.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Ivim Health unique compared to TrimRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health specializes in customized microdosing protocols, often starting patients at 1.25mg semaglutide rather than the standard 0.25mg or 0.5mg. This approach is designed for patients who are sensitive to side effects or who want a physician-tailored titration schedule rather than a one-size-fits-all program.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does TrimRx cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrimRx entry-level pricing has been confirmed at $179+ per month for their base GLP-1 program. Higher-tier plans are currently SPA-blocked and pricing should be verified directly at TrimRx.com, as program costs can change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ivim Health offer tirzepatide as well as semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ivim Health's medication availability should be verified directly with the provider, as formularies change. They are known primarily for their semaglutide microdosing programs, but you should confirm current offerings at IvimHealth.com.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is TrimRx a legitimate GLP-1 telehealth company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TrimRx is a licensed telehealth company that connects patients with physicians who can prescribe compounded or FDA-approved GLP-1 medications. Their $179+ entry program is one of the more accessible confirmed price points available in the GLP-1 telehealth market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should use Ivim Health instead of TrimRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Patients who have experienced significant nausea or GI side effects on standard GLP-1 protocols, or who want a physician to design a genuinely personalized titration plan, should consider Ivim Health. TrimRx's strength is its confirmed entry-level pricing, which makes it a strong option for cost-conscious patients who are comfortable with a standard protocol.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between standard GLP-1 titration and microdosing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard GLP-1 titration typically follows fixed dose escalation schedules set by clinical guidelines — for example, starting semaglutide at 0.25mg weekly for 4 weeks, then increasing. Microdosing, as practiced by Ivim Health, means starting even lower (such as 1.25mg per week or less) and escalating more slowly, which can reduce side effects for sensitive patients.',
      },
    },
  ],
};

export default function IvimHealthVsTrimRxPage() {
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
          providerName="TrimRx"
          ctaText="Start at $179/mo — Lowest Confirmed Price"
          href={buildGlp1AffiliateUrl('trimrx', 'ivim-health-vs-trimrx')}
        />

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/compare" className="hover:text-blue-600">Compare Providers</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700 font-medium">Ivim Health vs TrimRx</li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Ivim Health vs TrimRx (2026): Microdosing Specialist vs. $179 Entry Pricing
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ivim Health brings the most customized microdosing protocols in the GLP-1 telehealth space.
              TrimRx counters with a confirmed $179 per month entry point, one of the lowest verified prices
              we have tracked. Here is how to decide which fits your situation.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Last reviewed: May 6, 2026 &nbsp;·&nbsp; Author:{' '}
              <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
                Chad Simpson
              </Link>
            </p>
          </header>

          {/* Data Caveat Banner — Ivim Health */}
          <div className="bg-orange-50 border border-orange-300 rounded-lg p-4 mb-4 flex items-start gap-3">
            <span className="text-orange-500 text-xl mt-0.5" aria-hidden="true">⚠️</span>
            <div>
              <p className="font-semibold text-orange-800 text-sm">Ivim Health Pricing — Verify Directly</p>
              <p className="text-orange-700 text-sm mt-1">
                Ivim Health pricing varies by protocol and medication tier and is pending direct editorial
                confirmation. Verify current rates at{' '}
                <a
                  href={buildGlp1AffiliateUrl('ivim-health', 'ivim-health-vs-trimrx')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="underline text-orange-800 font-medium"
                >
                  IvimHealth.com
                </a>{' '}
                before enrolling.
              </p>
            </div>
          </div>

          {/* Data Caveat Banner — TrimRx Higher Tiers */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-8 flex items-start gap-3">
            <span className="text-yellow-600 text-xl mt-0.5" aria-hidden="true">ℹ️</span>
            <div>
              <p className="font-semibold text-yellow-800 text-sm">TrimRx Higher Tiers — Pricing Partially Unconfirmed</p>
              <p className="text-yellow-700 text-sm mt-1">
                TrimRx entry-level pricing ($179+/mo) has been confirmed by our editorial team. However, higher
                program tiers are currently SPA-blocked — exact pricing for those tiers should be verified
                directly at{' '}
                <a
                  href={buildGlp1AffiliateUrl('trimrx', 'ivim-health-vs-trimrx')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="underline text-yellow-800 font-medium"
                >
                  TrimRx.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Quick Verdict */}
          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Quick Verdict</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="font-semibold text-gray-800 mb-1">Best for Microdosing &amp; Personalization</p>
                <p className="text-blue-700 font-bold text-lg">Ivim Health</p>
                <p className="text-sm text-gray-600 mt-1">
                  1.25mg custom protocols, ideal for side-effect-sensitive patients, physician-designed titration.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('ivim-health', 'ivim-health-vs-trimrx')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Ivim Health Plans
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-100">
                <p className="font-semibold text-gray-800 mb-1">Best for Confirmed Entry Pricing</p>
                <p className="text-green-700 font-bold text-lg">TrimRx — from $179/mo</p>
                <p className="text-sm text-gray-600 mt-1">
                  Lowest verified entry price in this comparison. Straightforward GLP-1 program, confirmed at $179+.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('trimrx', 'ivim-health-vs-trimrx')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-block bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Start at $179/mo with TrimRx
                </a>
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
                      Ivim Health
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">⚠️ Pricing unconfirmed</span>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-700 w-1/3">
                      TrimRx
                      <span className="block text-xs text-green-600 font-normal mt-0.5">✓ Entry: $179+/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Entry Monthly Price</td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={false} label="Verify Directly" />
                    </td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={true} label="$179+/mo confirmed" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Higher Tier Pricing</td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={false} label="Verify Directly" />
                    </td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={false} label="SPA-blocked — verify" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Microdosing Protocol</td>
                    <td className="p-4 text-center font-semibold text-green-700">✓ 1.25mg specialist</td>
                    <td className="p-4 text-center text-gray-500">Standard titration</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Dosing Customization</td>
                    <td className="p-4 text-center font-semibold text-green-700">High — personalized</td>
                    <td className="p-4 text-center text-gray-500">Standard</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Semaglutide (compounded)</td>
                    <td className="p-4 text-center text-green-700">✓ Available</td>
                    <td className="p-4 text-center text-green-700">✓ Available</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Physician Consultation</td>
                    <td className="p-4 text-center text-green-700">✓ Included</td>
                    <td className="p-4 text-center text-green-700">✓ Included</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">No Long-Term Contract</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Ships Nationally</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Best For</td>
                    <td className="p-4 text-center text-sm text-gray-600">Sensitive patients, custom dosing</td>
                    <td className="p-4 text-center text-sm text-gray-600">Cost-conscious, standard protocol</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Editorial Pick</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-blue-700 font-semibold text-xs bg-blue-50 px-2 py-1 rounded-full">
                        ★ For Microdosing
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-xs bg-green-50 px-2 py-1 rounded-full">
                        ★ Best Entry Price
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Table updated May 2026. TrimRx entry pricing ($179+/mo) independently confirmed. Ivim Health and TrimRx higher tiers require direct verification.
            </p>
          </section>

          {/* Provider Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Deep-Dives</h2>

            {/* Ivim Health Card */}
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ivim Health</h3>
                  <p className="text-sm text-blue-700 mt-1 font-medium">Microdosing Specialist &nbsp;·&nbsp; ⚠️ Pricing — Verify Directly</p>
                </div>
                <span className="inline-flex items-center gap-1 text-blue-700 font-semibold text-xs bg-blue-100 px-3 py-1.5 rounded-full border border-blue-200">
                  ★ Editorial Pick — Microdosing
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ivim Health&#39;s defining feature is their physician-designed microdosing approach. Whereas most
                GLP-1 telehealth programs follow standardized FDA titration schedules (starting at 0.25mg weekly),
                Ivim Health physicians build individualized protocols — commonly starting patients at 1.25mg per
                week and escalating only when the patient is ready. The result is a program that significantly
                reduces the early-stage nausea and GI side effects that cause many patients to abandon GLP-1
                therapy entirely.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This approach is not just about going slow. Ivim Health&#39;s clinical philosophy is that the
                dose should match the patient, not a schedule. For patients who have previously failed on
                GLP-1 programs due to side effects, or who are starting fresh and want to be cautious, this
                level of individualization is clinically meaningful.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-orange-800 mb-1">⚠️ Pricing Requires Direct Verification</p>
                <p className="text-sm text-orange-700">
                  Ivim Health pricing varies by protocol and medication. Our team is in the process of confirming
                  current rates. Check IvimHealth.com directly for up-to-date program costs.
                </p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-5">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Customized 1.25mg microdosing protocols</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Physician-tailored titration schedules</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Strong clinical support for side-effect management</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> No long-term contract required</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">~</span> Pricing requires direct verification</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">~</span> Higher cost likely than entry-level TrimRx</li>
              </ul>
              <a
                href={buildGlp1AffiliateUrl('ivim-health', 'ivim-health-vs-trimrx')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Ivim Health Microdosing Plans →
              </a>
            </div>

            {/* TrimRx Card */}
            <div className="border border-green-200 bg-green-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">TrimRx</h3>
                  <p className="text-sm text-green-700 mt-1 font-medium">Entry: $179+/mo confirmed &nbsp;·&nbsp; Higher tiers: SPA-blocked</p>
                </div>
                <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-xs bg-green-100 px-3 py-1.5 rounded-full border border-green-200">
                  ★ Best Entry Price
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                TrimRx has established itself as one of the more accessible GLP-1 telehealth programs on the
                market. With a confirmed entry price of $179 per month, they offer a credible starting point
                for patients who are cost-sensitive and comfortable with a standard titration approach. The
                program covers physician consultation, medication, and ongoing monitoring — all at a price
                that undercuts many competitors at the entry level.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Where TrimRx differs from Ivim Health is in dosing philosophy. TrimRx follows a more
                conventional approach to GLP-1 titration, which works well for the majority of patients
                who tolerate standard escalation without significant issues. For patients who need a more
                customized, slower escalation, TrimRx&#39;s standard protocol may not provide enough
                flexibility compared to Ivim Health&#39;s microdosing approach.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-yellow-800 mb-1">ℹ️ Higher Tier Pricing — SPA-Blocked</p>
                <p className="text-sm text-yellow-700">
                  TrimRx entry pricing ($179+/mo) is confirmed. Higher program tiers and tirzepatide pricing are
                  currently SPA-blocked from our editorial access. Verify the full pricing menu directly at TrimRx.com.
                </p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-5">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Entry price confirmed: $179+/month</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Physician consultation included</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Compounded semaglutide available</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> No long-term contract</li>
                <li className="flex items-center gap-2"><span className="text-yellow-600">~</span> Higher tiers and tirzepatide pricing: verify directly</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">~</span> Less dosing flexibility than Ivim Health</li>
              </ul>
              <a
                href={buildGlp1AffiliateUrl('trimrx', 'ivim-health-vs-trimrx')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
              >
                Start at $179/mo with TrimRx →
              </a>
            </div>
          </section>

          {/* Who Should Choose Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Choose Each Provider</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-3">Choose Ivim Health if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Have struggled with nausea or GI side effects on previous GLP-1 programs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Want a physician to build a genuinely custom 1.25mg starting protocol
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Are new to GLP-1 and want to start cautiously
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Value a more personalized provider relationship over price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Have been told microdosing may suit you by a physician
                  </li>
                </ul>
              </div>
              <div className="border border-green-200 bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-900 text-lg mb-3">Choose TrimRx if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">→</span>
                    Are cost-sensitive and want the lowest confirmed monthly price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">→</span>
                    Are comfortable with a standard GLP-1 titration schedule
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">→</span>
                    Have not experienced significant side effects on GLP-1 in the past
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">→</span>
                    Want a streamlined, accessible program without premium pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">→</span>
                    Prefer price transparency at entry level before committing to a provider
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What makes Ivim Health unique compared to TrimRx?',
                  a: "Ivim Health specializes in customized microdosing protocols, often starting patients at 1.25mg semaglutide rather than the standard dose. This approach is designed for patients who are sensitive to side effects or want a physician-tailored titration schedule rather than a one-size-fits-all program.",
                },
                {
                  q: 'How much does TrimRx cost per month?',
                  a: 'TrimRx entry-level pricing has been confirmed at $179+ per month for their base GLP-1 program. Higher-tier plans are currently SPA-blocked and should be verified directly at TrimRx.com, as program costs can change.',
                },
                {
                  q: 'Does Ivim Health offer tirzepatide as well as semaglutide?',
                  a: "Ivim Health's medication availability should be verified directly, as formularies change. They are known primarily for their semaglutide microdosing programs. Confirm current medication options at IvimHealth.com.",
                },
                {
                  q: 'Is TrimRx a legitimate GLP-1 telehealth company?',
                  a: "Yes. TrimRx is a licensed telehealth company connecting patients with physicians who can prescribe GLP-1 medications. Their $179+ entry program is one of the most accessible confirmed price points in the GLP-1 telehealth market.",
                },
                {
                  q: 'Who should use Ivim Health instead of TrimRx?',
                  a: "Patients who have experienced significant nausea or GI side effects on standard GLP-1 protocols, or who want a physician to design a genuinely personalized titration plan, should consider Ivim Health. TrimRx's strength is its confirmed entry-level pricing for patients comfortable with a standard protocol.",
                },
                {
                  q: 'What is the difference between standard GLP-1 titration and microdosing?',
                  a: 'Standard titration follows fixed dose escalation schedules — for example, starting semaglutide at 0.25mg weekly for 4 weeks then increasing. Microdosing, as practiced by Ivim Health, means starting even lower (such as 1.25mg per week) and escalating more slowly, which can significantly reduce side effects for sensitive patients.',
                },
              ].map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-lg overflow-hidden group">
                  <summary className="p-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-sm">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 leading-relaxed text-sm">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Editorial Review Box */}
          <EditorialReviewBox
            summary="Both providers are legitimate options, but for different patients. Ivim Health wins for anyone who needs customized microdosing — their 1.25mg protocols are the strongest in this comparison. TrimRx wins on price transparency, with a confirmed $179/month entry tier that is one of the lowest we have tracked. For cost-conscious patients with no history of GLP-1 side effects, TrimRx is the practical starting point."
            recommendation="trimrx"
            author="Chad Simpson"
            dateReviewed="2026-05-06"
          />

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">More GLP-1 Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'SkinnyRx vs Ivim Health', href: '/compare/skinnyrx-vs-ivim-health' },
                { label: 'GobyMeds vs MEDVi', href: '/compare/gobymeds-vs-medvi' },
                { label: 'MEDVi Full Review', href: '/reviews/medvi' },
                { label: 'Best GLP-1 Programs 2026', href: '/best-glp1-programs' },
                { label: 'Compare All Providers', href: '/compare' },
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
              not affect our editorial rankings or recommendations. TrimRx entry pricing ($179+/mo) has been
              independently confirmed by our editorial team. TrimRx higher-tier pricing and Ivim Health pricing
              are flagged as requiring direct verification — see banners above. All editorial assessments are
              made independently of commercial relationships.
            </p>
          </div>
        </main>

        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
