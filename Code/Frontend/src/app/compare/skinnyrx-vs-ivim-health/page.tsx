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
  title: 'SkinnyRx vs Ivim Health (2026): Microdosing, Pricing & Which Is Right for You',
  description:
    'Side-by-side comparison of SkinnyRx and Ivim Health GLP-1 programs. We break down pricing, microdosing protocols, medication options, and who each service is best suited for.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/skinnyrx-vs-ivim-health',
  },
  openGraph: {
    title: 'SkinnyRx vs Ivim Health (2026): Microdosing, Pricing & Which Is Right for You',
    description:
      'Detailed comparison of SkinnyRx and Ivim Health — two telehealth GLP-1 programs with different approaches. Updated May 2026.',
    url: 'https://glp1comparehub.com/compare/skinnyrx-vs-ivim-health',
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
      name: 'SkinnyRx vs Ivim Health',
      item: 'https://glp1comparehub.com/compare/skinnyrx-vs-ivim-health',
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SkinnyRx vs Ivim Health (2026): Microdosing, Pricing & Which Is Right for You',
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
    '@id': 'https://glp1comparehub.com/compare/skinnyrx-vs-ivim-health',
  },
  description:
    'Side-by-side comparison of SkinnyRx and Ivim Health GLP-1 programs including microdosing protocols, pricing, medication options, and ideal candidate profiles.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is microdosing GLP-1 and does Ivim Health offer it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microdosing GLP-1 refers to starting at sub-standard doses — typically 0.5mg or even 1.25mg semaglutide — rather than jumping to full titration. Ivim Health specializes in customized 1.25mg microdosing protocols, which can reduce side effects like nausea for patients who are sensitive to standard dose escalation schedules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SkinnyRx offer microdosing protocols?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx provides GLP-1 medication access via a telehealth model, but their protocols are more standardized compared to Ivim Health\'s customized microdosing approach. Patients who specifically need a tailored low-dose escalation plan may find Ivim Health a better fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do SkinnyRx and Ivim Health pricing compare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing for both SkinnyRx and Ivim Health should be verified directly with each provider, as telehealth GLP-1 pricing changes frequently. Our editorial team is in the process of confirming current rates. Always check each provider\'s website for the most up-to-date pricing before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ivim Health a legitimate GLP-1 telehealth provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ivim Health is a licensed telehealth provider that connects patients with board-certified physicians who prescribe FDA-approved or compounded GLP-1 medications. They are known for their individualized dosing protocols and responsive clinical support team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should choose SkinnyRx over Ivim Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx may be a better fit for patients who want a straightforward GLP-1 program without the need for highly customized dosing. If you are comfortable with a standard escalation protocol and are primarily looking for convenient access and competitive pricing, SkinnyRx is worth evaluating.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch between SkinnyRx and Ivim Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most GLP-1 telehealth programs do not lock you into long-term contracts. You can typically cancel and enroll with a different provider, though you should always consult with a physician before changing your GLP-1 protocol, especially if you are mid-titration.',
      },
    },
  ],
};

export default function SkinnyRxVsIvimHealthPage() {
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
          providerName="Ivim Health"
          ctaText="Get Customized Microdosing Protocol"
          href={buildGlp1AffiliateUrl('ivim-health', 'skinnyrx-vs-ivim-health')}
        />

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/compare" className="hover:text-blue-600">Compare Providers</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700 font-medium">SkinnyRx vs Ivim Health</li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              SkinnyRx vs Ivim Health (2026): Microdosing, Pricing &amp; Which Program Wins
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Two distinct approaches to GLP-1 weight loss — SkinnyRx offers streamlined telehealth access
              while Ivim Health specializes in customized 1.25mg microdosing protocols. Here is what our
              editorial team found when comparing both programs head-to-head.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Last reviewed: May 6, 2026 &nbsp;·&nbsp; Author:{' '}
              <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
                Chad Simpson
              </Link>
            </p>
          </header>

          {/* Data Caveat Banner — SkinnyRx */}
          <div className="bg-orange-50 border border-orange-300 rounded-lg p-4 mb-4 flex items-start gap-3">
            <span className="text-orange-500 text-xl mt-0.5" aria-hidden="true">⚠️</span>
            <div>
              <p className="font-semibold text-orange-800 text-sm">SkinnyRx Pricing — Verify Directly</p>
              <p className="text-orange-700 text-sm mt-1">
                SkinnyRx pricing data is pending confirmation via the Katalys affiliate network. All cost
                figures shown for SkinnyRx are estimates only. Verify current pricing at{' '}
                <a
                  href={buildGlp1AffiliateUrl('skinnyrx', 'skinnyrx-vs-ivim-health')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="underline text-orange-800 font-medium"
                >
                  SkinnyRx.com
                </a>{' '}
                before enrolling.
              </p>
            </div>
          </div>

          {/* Data Caveat Banner — Ivim Health */}
          <div className="bg-orange-50 border border-orange-300 rounded-lg p-4 mb-8 flex items-start gap-3">
            <span className="text-orange-500 text-xl mt-0.5" aria-hidden="true">⚠️</span>
            <div>
              <p className="font-semibold text-orange-800 text-sm">Ivim Health Pricing — Verify Directly</p>
              <p className="text-orange-700 text-sm mt-1">
                Ivim Health pricing is based on editorial research and is subject to change. Microdosing
                protocol costs vary by plan tier and medication type. Confirm current rates directly at{' '}
                <a
                  href={buildGlp1AffiliateUrl('ivim-health', 'skinnyrx-vs-ivim-health')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="underline text-orange-800 font-medium"
                >
                  IvimHealth.com
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
                <p className="font-semibold text-gray-800 mb-1">Best for Microdosing &amp; Customization</p>
                <p className="text-blue-700 font-bold text-lg">Ivim Health</p>
                <p className="text-sm text-gray-600 mt-1">
                  Specialized 1.25mg protocols, physician-designed titration, strong for side-effect-sensitive patients.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('ivim-health', 'skinnyrx-vs-ivim-health')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Ivim Health Plans
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="font-semibold text-gray-800 mb-1">Best for Straightforward Access</p>
                <p className="text-blue-700 font-bold text-lg">SkinnyRx</p>
                <p className="text-sm text-gray-600 mt-1">
                  Streamlined telehealth model, broad medication availability, worth evaluating once pricing is confirmed.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('skinnyrx', 'skinnyrx-vs-ivim-health')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-block bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  View SkinnyRx Plans
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
                      SkinnyRx
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">⚠️ Pricing unconfirmed</span>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-700 w-1/3">
                      Ivim Health
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">⚠️ Pricing unconfirmed</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Monthly Price</td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={false} label="Verify Directly" />
                    </td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={false} label="Verify Directly" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Microdosing Protocol</td>
                    <td className="p-4 text-center text-gray-500">Standard titration</td>
                    <td className="p-4 text-center font-semibold text-green-700">✓ 1.25mg specialist</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Semaglutide (compounded)</td>
                    <td className="p-4 text-center text-green-700">✓ Available</td>
                    <td className="p-4 text-center text-green-700">✓ Available</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Tirzepatide</td>
                    <td className="p-4 text-center text-gray-500">Verify directly</td>
                    <td className="p-4 text-center text-gray-500">Verify directly</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Physician Consultation</td>
                    <td className="p-4 text-center text-green-700">✓ Included</td>
                    <td className="p-4 text-center text-green-700">✓ Included</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Dosing Customization</td>
                    <td className="p-4 text-center text-gray-500">Standard</td>
                    <td className="p-4 text-center font-semibold text-green-700">High — personalized</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Ongoing Support</td>
                    <td className="p-4 text-center text-gray-600">Telehealth team</td>
                    <td className="p-4 text-center text-gray-600">Clinical team</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">No Long-Term Contract</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Ships Nationally</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Editorial Pick</td>
                    <td className="p-4 text-center text-gray-400">—</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-blue-700 font-semibold text-xs bg-blue-50 px-2 py-1 rounded-full">
                        ★ For Microdosing
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Table data updated May 2026. Pricing cells marked ⚠️ require direct verification — see banners above.
            </p>
          </section>

          {/* Provider Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Deep-Dives</h2>

            {/* SkinnyRx Card */}
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">SkinnyRx</h3>
                  <p className="text-sm text-orange-700 mt-1 font-medium">⚠️ Pricing — Verify Directly (Katalys partnership pending)</p>
                </div>
                <VerifiedPricingBadge variant="compact" verified={false} label="Price Unconfirmed" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                SkinnyRx is a telehealth platform offering GLP-1 medication access, including compounded
                semaglutide, via licensed physicians. Their model focuses on accessibility — the intake process
                is straightforward, and they aim to match patients with appropriate medication quickly. For
                patients who want a no-frills pathway to a GLP-1 prescription, SkinnyRx is a credible option
                to evaluate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Where SkinnyRx differs from Ivim Health is in dosing flexibility. SkinnyRx uses more
                standardized titration protocols rather than the highly personalized microdosing approach Ivim
                Health is known for. Patients who tolerate standard escalation well and are not seeking a
                custom 1.25mg starting dose will likely find SkinnyRx&#39;s process sufficient.
              </p>
              <div className="bg-white border border-orange-100 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-orange-800 mb-1">Pricing Status</p>
                <p className="text-sm text-orange-700">
                  Our affiliate partnership with SkinnyRx via Katalys is pending approval. Once confirmed, we
                  will publish verified pricing. In the meantime, check SkinnyRx.com directly for current program costs.
                </p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-5">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Licensed telehealth physicians</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Compounded semaglutide access</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> No long-term commitment</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">~</span> Dosing customization limited vs. Ivim</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">~</span> Pricing not yet independently verified by our team</li>
              </ul>
              <a
                href={buildGlp1AffiliateUrl('skinnyrx', 'skinnyrx-vs-ivim-health')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Check SkinnyRx Pricing Directly →
              </a>
            </div>

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
                Ivim Health stands out in the GLP-1 telehealth space for one primary reason: their specialized
                microdosing protocols. Rather than following a one-size-fits-all titration schedule, Ivim Health
                physicians design individualized dose escalation plans, often starting patients at 1.25mg of
                semaglutide. This approach is particularly valuable for patients who have experienced significant
                nausea, fatigue, or GI side effects on standard-dose GLP-1 programs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The clinical team at Ivim is responsive, and the provider relationship model feels more
                personalized than many telehealth competitors. If you have tried a GLP-1 program before and
                struggled with side effects at standard doses, Ivim Health&#39;s customized approach is the
                strongest option available in this comparison.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-orange-800 mb-1">⚠️ Pricing — Verify Directly</p>
                <p className="text-sm text-orange-700">
                  Ivim Health pricing varies by protocol and medication tier. Our team is confirming current
                  rates. Verify directly at IvimHealth.com before enrolling.
                </p>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-5">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> 1.25mg microdosing protocol available</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Physician-designed personalized titration</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Strong for patients sensitive to standard doses</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Responsive clinical support team</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">~</span> Pricing requires direct verification</li>
              </ul>
              <a
                href={buildGlp1AffiliateUrl('ivim-health', 'skinnyrx-vs-ivim-health')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Ivim Health Microdosing Plans →
              </a>
            </div>
          </section>

          {/* Who Should Choose Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Choose Each Provider</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-3">Choose SkinnyRx if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    Want a straightforward, efficient GLP-1 access pathway
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    Are comfortable with a standard titration schedule
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    Have not had significant side effect issues on GLP-1s previously
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    Are primarily motivated by competitive pricing (once confirmed)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    Prefer a fast, minimal-intake onboarding process
                  </li>
                </ul>
              </div>
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-3">Choose Ivim Health if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Have experienced nausea or GI side effects on standard GLP-1 doses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Want a physician to design a custom 1.25mg starting protocol
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Value a more personalized provider relationship
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Are new to GLP-1 and want a cautious, gradual approach
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Have been told by a physician that microdosing may suit you better
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
                  q: 'What is microdosing GLP-1 and does Ivim Health offer it?',
                  a: 'Microdosing GLP-1 refers to starting at sub-standard doses — typically 0.5mg or even 1.25mg semaglutide — rather than jumping to full titration. Ivim Health specializes in customized 1.25mg microdosing protocols designed to reduce side effects like nausea for patients who are sensitive to standard dose escalation schedules.',
                },
                {
                  q: 'Does SkinnyRx offer microdosing protocols?',
                  a: "SkinnyRx provides GLP-1 medication access via a telehealth model, but their protocols are more standardized compared to Ivim Health's customized microdosing approach. Patients who specifically need a tailored low-dose escalation plan may find Ivim Health a better fit.",
                },
                {
                  q: 'How do SkinnyRx and Ivim Health pricing compare?',
                  a: "Pricing for both SkinnyRx and Ivim Health requires direct verification, as telehealth GLP-1 pricing changes frequently. Our team is actively confirming rates. Always check each provider's website for current pricing before enrolling.",
                },
                {
                  q: 'Is Ivim Health a legitimate GLP-1 telehealth provider?',
                  a: 'Yes. Ivim Health is a licensed telehealth provider that connects patients with board-certified physicians who prescribe FDA-approved or compounded GLP-1 medications. They are recognized in the telehealth space for their individualized dosing protocols.',
                },
                {
                  q: 'Who should choose SkinnyRx over Ivim Health?',
                  a: 'SkinnyRx may be a better fit for patients who want a straightforward GLP-1 program without highly customized dosing. If you are comfortable with a standard escalation protocol and are primarily looking for convenient access, SkinnyRx is worth evaluating — once you verify current pricing directly.',
                },
                {
                  q: 'Can I switch between SkinnyRx and Ivim Health?',
                  a: 'Most GLP-1 telehealth programs do not require long-term contracts. You can typically cancel and enroll with a different provider, though you should consult with a physician before changing your GLP-1 protocol, especially mid-titration.',
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
            summary="Ivim Health wins this comparison for patients who need customized microdosing. Their 1.25mg protocols are a meaningful clinical differentiator. SkinnyRx is a credible alternative for standard GLP-1 access, but pricing must be verified before recommending it with confidence. Both providers require direct verification of current costs."
            recommendation="ivim-health"
            author="Chad Simpson"
            dateReviewed="2026-05-06"
          />

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">More GLP-1 Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'Ivim Health vs TrimRx', href: '/compare/ivim-health-vs-trimrx' },
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
              not affect our editorial rankings or recommendations. SkinnyRx is included in this comparison as
              part of a pending Katalys affiliate partnership — all editorial assessments are made independently
              of commercial relationships. We only recommend providers our editorial team has independently
              evaluated. Pricing data requiring verification is flagged throughout this page.
            </p>
          </div>
        </main>

        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
