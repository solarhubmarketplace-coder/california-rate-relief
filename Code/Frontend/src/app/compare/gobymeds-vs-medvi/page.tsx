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
  title: 'GobyMeds vs MEDVi (2026): Verified Pricing, Legitimacy & Which to Choose',
  description:
    'GobyMeds vs MEDVi compared: MEDVi pricing verified at $179-299/mo, GobyMeds pricing unconfirmed. Editorial pick is MEDVi. Full breakdown of legitimacy, services, and who each is right for.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/gobymeds-vs-medvi',
  },
  openGraph: {
    title: 'GobyMeds vs MEDVi (2026): Verified Pricing, Legitimacy & Which to Choose',
    description:
      'MEDVi pricing confirmed at $179-299/mo. GobyMeds pricing is unconfirmed — our team is monitoring their Everflow affiliate approval. Full side-by-side comparison updated May 2026.',
    url: 'https://glp1comparehub.com/compare/gobymeds-vs-medvi',
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
      name: 'GobyMeds vs MEDVi',
      item: 'https://glp1comparehub.com/compare/gobymeds-vs-medvi',
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GobyMeds vs MEDVi (2026): Verified Pricing, Legitimacy & Which to Choose',
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
    '@id': 'https://glp1comparehub.com/compare/gobymeds-vs-medvi',
  },
  description:
    'Detailed comparison of GobyMeds and MEDVi GLP-1 telehealth programs. MEDVi pricing confirmed at $179-299/month. GobyMeds is a newer entrant being monitored — pricing requires direct verification.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is GobyMeds a legitimate GLP-1 telehealth provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GobyMeds is a newer telehealth entrant in the GLP-1 space that our editorial team is currently monitoring. They appear to be a licensed telehealth platform, but we have not yet independently confirmed their pricing, physician credentials, or program details through our standard review process. We recommend verifying directly at GobyMeds.com and cross-referencing with patient reviews before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does MEDVi cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi pricing has been confirmed by our editorial team at $179 to $299 per month depending on the program tier selected. This range covers their compounded GLP-1 programs including semaglutide. MEDVi is one of the most established and price-competitive programs we have reviewed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GobyMeds pricing compare to MEDVi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GobyMeds pricing has not been independently confirmed by our editorial team. Our affiliate relationship with GobyMeds via Everflow is pending approval, which means we have not yet been able to access verified pricing data. MEDVi pricing ($179-299/mo) is confirmed. For an accurate comparison, check GobyMeds pricing directly on their website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is MEDVi the editorial pick over GobyMeds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi is our editorial pick primarily because we have confirmed their pricing, reviewed their program structure, and can speak to their legitimacy with confidence. GobyMeds is a newer provider that we are monitoring — until we can independently verify their pricing and program quality through our review process, we cannot recommend them as confidently as MEDVi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEDVi offer both semaglutide and tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi offers compounded semaglutide programs within their confirmed $179-299/month pricing range. For tirzepatide availability and pricing, we recommend checking MEDVi.com directly, as formulary offerings can change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I wait for GobyMeds to be fully reviewed before enrolling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are choosing between GobyMeds and MEDVi today, MEDVi is the lower-risk choice given that their pricing and program structure have been independently confirmed. If you are interested in GobyMeds specifically, we recommend verifying their credentials, reading patient reviews, and confirming their pricing directly before committing. Our team will publish a full review of GobyMeds once our Everflow partnership is approved.',
      },
    },
  ],
};

export default function GobyMedsVsMEDViPage() {
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
          providerName="MEDVi"
          ctaText="View MEDVi Plans — $179-299/mo Verified"
          href={buildGlp1AffiliateUrl('medvi', 'gobymeds-vs-medvi')}
        />

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/compare" className="hover:text-blue-600">Compare Providers</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700 font-medium">GobyMeds vs MEDVi</li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              GobyMeds vs MEDVi (2026): Verified Pricing, Legitimacy &amp; Which to Choose
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              MEDVi is one of the most established GLP-1 telehealth providers with confirmed pricing at
              $179–$299 per month. GobyMeds is a newer entrant our editorial team is actively monitoring
              — their pricing is unconfirmed. Here is what we know as of May 2026.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Last reviewed: May 6, 2026 &nbsp;·&nbsp; Author:{' '}
              <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
                Chad Simpson
              </Link>
            </p>
          </header>

          {/* PROMINENT Data Caveat Banner — GobyMeds */}
          <div className="bg-orange-100 border-2 border-orange-400 rounded-xl p-5 mb-6 flex items-start gap-4">
            <span className="text-orange-500 text-2xl mt-0.5 flex-shrink-0" aria-hidden="true">⚠️</span>
            <div>
              <p className="font-bold text-orange-900 text-base mb-1">GobyMeds Pricing Unconfirmed — Verify Directly</p>
              <p className="text-orange-800 text-sm leading-relaxed">
                GobyMeds is a newer telehealth entrant that our editorial team is currently monitoring for
                review inclusion. Our affiliate partnership with GobyMeds via the Everflow network is pending
                approval. Until that process completes, we have not been able to independently verify their
                pricing, physician credentials, or full program details through our standard review protocol.
                <strong className="block mt-2">
                  All GobyMeds information on this page is based on publicly available details only.
                  Verify pricing and program terms directly at GobyMeds.com before making any enrollment decision.
                </strong>
              </p>
              <a
                href={buildGlp1AffiliateUrl('gobymeds', 'gobymeds-vs-medvi')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-3 inline-block text-sm font-semibold text-orange-900 underline hover:text-orange-700"
              >
                Check GobyMeds pricing directly →
              </a>
            </div>
          </div>

          {/* Quick Verdict */}
          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Quick Verdict</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-semibold text-gray-800 mb-1">Editorial Pick — Verified Provider</p>
                <p className="text-blue-700 font-bold text-lg">MEDVi — $179-299/mo</p>
                <p className="text-sm text-gray-600 mt-1">
                  Pricing independently confirmed. Established provider, strong brand presence. Recommended
                  for patients who want a verified, accessible GLP-1 program.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('medvi', 'gobymeds-vs-medvi')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View MEDVi Plans — Pricing Confirmed
                </a>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <p className="font-semibold text-gray-800 mb-1">Newer Entrant — Being Monitored</p>
                <p className="text-orange-700 font-bold text-lg">GobyMeds</p>
                <p className="text-sm text-gray-600 mt-1">
                  Pricing unconfirmed. Newer telehealth entrant under editorial review. Verify directly
                  before enrolling — we will publish a full review once our Everflow approval is complete.
                </p>
                <a
                  href={buildGlp1AffiliateUrl('gobymeds', 'gobymeds-vs-medvi')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-block bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Check GobyMeds Directly
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
                      GobyMeds
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">⚠️ Pricing unconfirmed</span>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-700 w-1/3">
                      MEDVi
                      <span className="block text-xs text-green-600 font-normal mt-0.5">✓ $179-299/mo verified</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Monthly Price</td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={false} label="Unconfirmed" />
                    </td>
                    <td className="p-4 text-center">
                      <VerifiedPricingBadge variant="compact" verified={true} label="$179-299/mo" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Editorial Status</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-orange-700 text-xs font-medium bg-orange-50 px-2 py-1 rounded-full border border-orange-200">
                        Monitoring — Newer Entrant
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-blue-700 text-xs font-medium bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                        ★ Editorial Pick
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Semaglutide (compounded)</td>
                    <td className="p-4 text-center text-gray-500">Verify directly</td>
                    <td className="p-4 text-center text-green-700 font-medium">✓ Available</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Physician Consultation</td>
                    <td className="p-4 text-center text-gray-500">Verify directly</td>
                    <td className="p-4 text-center text-green-700">✓ Included</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Pricing Transparency</td>
                    <td className="p-4 text-center text-orange-600 font-medium">⚠️ Not yet confirmed</td>
                    <td className="p-4 text-center text-green-700 font-medium">✓ Published &amp; confirmed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">No Long-Term Contract</td>
                    <td className="p-4 text-center text-gray-500">Verify directly</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Established Track Record</td>
                    <td className="p-4 text-center text-orange-600">Newer entrant</td>
                    <td className="p-4 text-center text-green-700 font-medium">✓ Established provider</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Ships Nationally</td>
                    <td className="p-4 text-center text-gray-500">Verify directly</td>
                    <td className="p-4 text-center text-green-700">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Ongoing Support</td>
                    <td className="p-4 text-center text-gray-500">Verify directly</td>
                    <td className="p-4 text-center text-gray-600">Clinical team included</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Table updated May 2026. MEDVi pricing ($179-299/mo) independently confirmed. GobyMeds data based on
              publicly available information only — verify directly before enrolling.
            </p>
          </section>

          {/* Provider Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Deep-Dives</h2>

            {/* GobyMeds Card */}
            <div className="border-2 border-orange-300 bg-orange-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">GobyMeds</h3>
                  <p className="text-sm text-orange-700 mt-1 font-bold">⚠️ PRICING UNCONFIRMED — Newer Telehealth Entrant</p>
                </div>
                <span className="inline-flex items-center gap-1 text-orange-700 font-semibold text-xs bg-orange-100 px-3 py-1.5 rounded-full border border-orange-300">
                  Under Editorial Review
                </span>
              </div>

              {/* Prominent GobyMeds caveat */}
              <div className="bg-white border-2 border-orange-400 rounded-lg p-4 mb-5">
                <p className="font-bold text-orange-900 text-sm mb-2">Important: What We Can and Cannot Confirm About GobyMeds</p>
                <p className="text-orange-800 text-sm leading-relaxed">
                  GobyMeds is a newer entrant to the GLP-1 telehealth market that our editorial team is actively
                  monitoring. Our affiliate relationship via the Everflow network is pending approval — until that
                  process completes, our ability to independently verify their pricing, physician credentials,
                  formulary options, and patient experience is limited.
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-orange-800">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">⚠️</span> Monthly pricing: unconfirmed — verify at GobyMeds.com</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">⚠️</span> Medication availability: verify directly</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">⚠️</span> Clinical support model: verify directly</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">⚠️</span> Contract terms: verify directly</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Based on publicly available information, GobyMeds presents as a telehealth platform designed
                to connect patients with GLP-1 prescribers. They appear to be building a GLP-1 medication
                access model similar to established competitors. However, given their newer market position,
                there is less patient review data, less independent coverage, and less price transparency
                compared to a provider like MEDVi.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This does not mean GobyMeds is not legitimate — it means our editorial process has not yet
                reached a conclusion on them. We will publish a full review once our Everflow partnership is
                active and we have been able to review their program in detail.
              </p>
              <p className="text-sm text-orange-700 font-medium mb-5">
                Until a full review is published: if you are specifically interested in GobyMeds, verify their
                pricing, read independent patient reviews, and confirm their physician credentials directly before enrolling.
              </p>
              <a
                href={buildGlp1AffiliateUrl('gobymeds', 'gobymeds-vs-medvi')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Check GobyMeds Pricing Directly →
              </a>
            </div>

            {/* MEDVi Card */}
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">MEDVi</h3>
                  <p className="text-sm text-blue-700 mt-1 font-medium">$179-299/mo independently verified &nbsp;·&nbsp; Editorial Pick</p>
                </div>
                <span className="inline-flex items-center gap-1 text-blue-700 font-semibold text-xs bg-blue-100 px-3 py-1.5 rounded-full border border-blue-200">
                  ★ Editorial Pick
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                MEDVi is one of the most established GLP-1 telehealth providers in this comparison. With
                pricing confirmed at $179 to $299 per month — covering compounded semaglutide programs —
                MEDVi offers a price-competitive, well-structured program that our editorial team has been
                able to review with confidence. Their national presence and strong brand recognition (33,000+
                monthly searches) reflect a meaningful patient base.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The $179 entry tier is one of the more accessible confirmed price points among the GLP-1
                telehealth providers we track. For patients who want a credible, verified program without
                uncertainty about pricing or program structure, MEDVi is the clear choice in this comparison
                until GobyMeds completes our review process.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                MEDVi&#39;s program includes physician consultation, medication access, and ongoing clinical
                support. They have built a reputation for a straightforward enrollment process and a responsive
                team — attributes that are particularly important for patients new to GLP-1 therapy.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-5">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Pricing confirmed: $179-299/month</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Established provider, strong track record</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Physician consultation included</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Compounded semaglutide programs available</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> No long-term contract required</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Ships nationally</li>
              </ul>
              <a
                href={buildGlp1AffiliateUrl('medvi', 'gobymeds-vs-medvi')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View MEDVi Plans — $179-299/mo Verified →
              </a>
            </div>
          </section>

          {/* Who Should Choose Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Choose Each Provider</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-orange-200 bg-orange-50 rounded-xl p-6">
                <h3 className="font-bold text-orange-900 text-lg mb-3">Consider GobyMeds if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">→</span>
                    Are specifically interested in exploring newer telehealth options
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">→</span>
                    Are willing to verify pricing and program details directly before enrolling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">→</span>
                    Want to compare GobyMeds pricing independently against confirmed providers like MEDVi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">→</span>
                    Understand that our editorial review of GobyMeds is still in progress
                  </li>
                </ul>
                <p className="text-xs text-orange-700 mt-4 font-medium">
                  Note: We cannot recommend GobyMeds with the same confidence as MEDVi until our review is complete.
                </p>
              </div>
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-3">Choose MEDVi if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Want a provider with confirmed, transparent pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Prefer an established telehealth provider with a track record
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Are looking for an accessible entry price ($179+/mo) with verified program details
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Want to minimize uncertainty when starting a GLP-1 program
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    Are making a decision today rather than waiting for a newer provider to be reviewed
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
                  q: 'Is GobyMeds a legitimate GLP-1 telehealth provider?',
                  a: "GobyMeds is a newer telehealth entrant in the GLP-1 space that our editorial team is currently monitoring. They appear to be a licensed telehealth platform, but we have not yet independently confirmed their pricing, physician credentials, or program details. We recommend verifying directly at GobyMeds.com and cross-referencing with patient reviews before enrolling.",
                },
                {
                  q: 'How much does MEDVi cost per month?',
                  a: 'MEDVi pricing has been confirmed by our editorial team at $179 to $299 per month depending on the program tier. This covers their compounded GLP-1 programs including semaglutide. MEDVi is one of the most price-competitive established programs we have reviewed.',
                },
                {
                  q: 'How does GobyMeds pricing compare to MEDVi?',
                  a: "GobyMeds pricing has not been independently confirmed by our editorial team. Our affiliate relationship via Everflow is pending approval. MEDVi pricing ($179-299/mo) is confirmed. For an accurate comparison, check GobyMeds pricing directly on their website.",
                },
                {
                  q: 'Why is MEDVi the editorial pick over GobyMeds?',
                  a: "MEDVi is our editorial pick primarily because we have confirmed their pricing and can speak to their legitimacy with confidence. GobyMeds is a newer provider under review — until we independently verify their pricing and program quality, we cannot recommend them as confidently as MEDVi.",
                },
                {
                  q: 'Does MEDVi offer both semaglutide and tirzepatide?',
                  a: 'MEDVi offers compounded semaglutide programs within their confirmed $179-299/month pricing range. For tirzepatide availability, we recommend checking MEDVi.com directly, as formulary offerings can change.',
                },
                {
                  q: 'Should I wait for GobyMeds to be fully reviewed before enrolling?',
                  a: "If you are choosing between GobyMeds and MEDVi today, MEDVi is the lower-risk choice given their confirmed pricing and program structure. If you are interested in GobyMeds specifically, verify their credentials, read patient reviews, and confirm pricing directly before committing. Our team will publish a full review of GobyMeds once our Everflow partnership is approved.",
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
            summary="MEDVi is the clear editorial pick in this comparison. Their $179-299/month pricing is independently confirmed, they are an established provider, and the program structure has been reviewed with confidence. GobyMeds is a newer telehealth entrant that our team is actively monitoring — until pricing and program details are independently confirmed through our Everflow partnership review, we cannot recommend them with equal confidence. If you are enrolling today, MEDVi is the lower-risk choice."
            recommendation="medvi"
            author="Chad Simpson"
            dateReviewed="2026-05-06"
          />

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">More GLP-1 Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'SkinnyRx vs Ivim Health', href: '/compare/skinnyrx-vs-ivim-health' },
                { label: 'Ivim Health vs TrimRx', href: '/compare/ivim-health-vs-trimrx' },
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
              not affect our editorial rankings. MEDVi pricing ($179-299/mo) has been independently confirmed
              by our editorial team. GobyMeds is included in this comparison as a newer market entrant being
              monitored — our affiliate relationship with GobyMeds via Everflow is pending approval, and their
              pricing and program details have not yet been independently confirmed. GobyMeds information on
              this page is based on publicly available data only. All editorial assessments are made
              independently of commercial relationships.
            </p>
          </div>
        </main>

        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
