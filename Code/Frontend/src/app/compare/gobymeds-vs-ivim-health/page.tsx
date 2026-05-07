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
// /compare/gobymeds-vs-ivim-health
// GobyMeds: compounded GLP-1 telehealth, all pricing VERIFY, newer/emerging.
// Ivim Health: VERIFY pricing, confirmed microdosing specialist — unique USP.
//   Also confirmed liraglutide offering. Stronger brand signal despite VERIFY.
// Editorial pick: Ivim Health (microdosing specialty + liraglutide are
//   distinctive differentiators not available at most peers).
// Fallback recommendation for verified pricing: TMates or MEDVi.
// StickyMobileCTA: Ivim Health
// =============================================================================

export const metadata: Metadata = {
  title: 'GobyMeds vs Ivim Health (2026): Microdosing, Liraglutide & Which Is Right for You',
  description:
    'GobyMeds vs Ivim Health compared: Ivim Health stands out for confirmed microdosing protocols and liraglutide availability. Both pricing unverified — for confirmed pricing, see TMates or MEDVi. Full breakdown updated May 2026.',
  alternates: {
    canonical: 'https://glp1comparehub.com/compare/gobymeds-vs-ivim-health',
  },
  openGraph: {
    title: 'GobyMeds vs Ivim Health (2026): Microdosing, Liraglutide & Which Is Right for You',
    description:
      'Ivim Health is the editorial pick for its confirmed microdosing specialty and liraglutide offering. GobyMeds pricing unconfirmed. Neither has verified pricing — for confirmed pricing see TMates or MEDVi. May 2026.',
    url: 'https://glp1comparehub.com/compare/gobymeds-vs-ivim-health',
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
      name: 'GobyMeds vs Ivim Health',
      item: 'https://glp1comparehub.com/compare/gobymeds-vs-ivim-health',
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GobyMeds vs Ivim Health (2026): Microdosing, Liraglutide & Which Is Right for You',
  description:
    'Side-by-side comparison of GobyMeds and Ivim Health GLP-1 telehealth programs. Ivim Health is the editorial pick for confirmed microdosing specialization and liraglutide availability. Both pricing unverified — TMates or MEDVi recommended for confirmed pricing.',
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
    '@id': 'https://glp1comparehub.com/compare/gobymeds-vs-ivim-health',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Ivim Health different from other GLP-1 telehealth providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health is one of the few GLP-1 telehealth providers with a confirmed microdosing specialty. Microdosing protocols — starting patients on lower-than-standard doses and titrating more gradually — can reduce side effects for sensitive patients. Ivim Health also confirms availability of liraglutide (the original GLP-1 agonist, marketed as Victoza and Saxenda), which most compounded telehealth platforms do not offer. These two differentiators make Ivim Health stand out in a competitive market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ivim Health offer microdosing tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health is confirmed as a microdosing specialist within the GLP-1 telehealth space. While the specific medication options available through microdosing protocols (semaglutide vs. tirzepatide vs. liraglutide) should be confirmed directly with Ivim Health, their physician team is known for tailoring dosing schedules to individual patient tolerability rather than following standard titration protocols only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ivim Health pricing verified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health pricing is not independently verified on this page — we recommend checking current pricing directly at IvimHealth.com. Despite the pricing caveat, Ivim Health is our editorial pick in this comparison because their microdosing specialty and liraglutide availability are confirmed program differentiators. For a provider with confirmed pricing, see our TMates or MEDVi reviews.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is compounded liraglutide and why does Ivim Health offering it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Liraglutide is a GLP-1 receptor agonist (the active ingredient in Victoza and Saxenda) that predates semaglutide and tirzepatide. It has a strong safety record and some patients tolerate it better than the newer agents. Most compounded GLP-1 telehealth platforms focus exclusively on semaglutide or tirzepatide. Ivim Health confirming liraglutide availability gives patients a meaningful third option — particularly relevant for patients who have tried semaglutide with poor tolerability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GobyMeds a legitimate GLP-1 provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GobyMeds is an emerging GLP-1 telehealth entrant that our editorial team is monitoring. Based on publicly available information, they appear to operate as a licensed telehealth platform, but we have not independently confirmed their pricing, physician credentials, or full program details through our standard review process. We recommend verifying directly at GobyMeds.com and reading independent patient reviews before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which provider should I choose if I want verified pricing today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither GobyMeds nor Ivim Health has independently verified pricing on this page. If confirmed pricing is your priority, we recommend TMates (pricing confirmed by our editorial team) or MEDVi (confirmed at $179-299/month). Both are established providers with transparent, independently verified program costs. See our full comparison pages for TMates and MEDVi for more detail.',
      },
    },
  ],
};

export default function GobyMedsVsIvimHealthPage() {
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
          ctaText="View Ivim Health — Microdosing Specialist"
          href={buildGlp1AffiliateUrl('ivim-health', 'gobymeds-vs-ivim-health')}
        />

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/compare" className="hover:text-blue-600">Compare Providers</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-700 font-medium">GobyMeds vs Ivim Health</li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                GobyMeds vs Ivim Health (2026): Microdosing, Liraglutide &amp; Which Is Right for You
              </h1>
              <VerifiedPricingBadge variant="hero" verified={false} label="Both: Verify Pricing" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ivim Health stands apart in the GLP-1 telehealth market with confirmed microdosing protocols
              and liraglutide availability — options most competitors simply do not offer. GobyMeds is an
              emerging entrant under editorial review. Neither provider has independently verified pricing
              on this page; for confirmed pricing, see{' '}
              <Link href="/compare/medvi-vs-ivim-health" className="text-blue-600 hover:underline">
                MEDVi
              </Link>{' '}
              or{' '}
              <Link href="/reviews/tmates" className="text-blue-600 hover:underline">
                TMates
              </Link>.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Last reviewed: May 6, 2026 &nbsp;·&nbsp; Author:{' '}
              <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
                Chad Simpson
              </Link>
            </p>
          </header>

          {/* Pricing caveat banner — both VERIFY */}
          <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-5 mb-6 flex items-start gap-4">
            <AlertCircle className="text-orange-500 w-6 h-6 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="font-bold text-orange-900 text-base mb-1">
                Neither Provider Has Independently Verified Pricing on This Page
              </p>
              <p className="text-orange-800 text-sm leading-relaxed">
                GobyMeds is a newer telehealth entrant — pricing and program details require direct verification
                at GobyMeds.com. Ivim Health pricing should also be confirmed directly at IvimHealth.com before
                enrolling. Our editorial pick (Ivim Health) is based on confirmed program differentiators —
                microdosing specialty and liraglutide availability — not pricing comparison.
              </p>
              <p className="text-orange-800 text-sm mt-2">
                <strong>For confirmed pricing today:</strong>{' '}
                <Link href="/compare/medvi-vs-ivim-health" className="underline font-semibold">
                  MEDVi ($179-299/mo verified)
                </Link>{' '}
                or{' '}
                <Link href="/reviews/tmates" className="underline font-semibold">
                  TMates (pricing confirmed)
                </Link>.
              </p>
            </div>
          </div>

          {/* Quick Verdict */}
          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Quick Verdict</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <p className="font-semibold text-gray-800">Editorial Pick — Unique Differentiators</p>
                </div>
                <p className="text-blue-700 font-bold text-lg">Ivim Health</p>
                <p className="text-sm text-gray-600 mt-1 mb-1">
                  Confirmed microdosing specialist. Confirmed liraglutide availability. Strong brand signal.
                  Pricing requires direct verification — but the program differentiation is real.
                </p>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded-full border border-orange-200 mb-3">
                  Pricing: Verify at IvimHealth.com
                </span>
                <a
                  href={buildGlp1AffiliateUrl('ivim-health', 'gobymeds-vs-ivim-health')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit"
                >
                  View Ivim Health <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <p className="font-semibold text-gray-800 mb-1">Emerging Entrant — Under Review</p>
                <p className="text-orange-700 font-bold text-lg">GobyMeds</p>
                <p className="text-sm text-gray-600 mt-1 mb-1">
                  Newer telehealth entrant. Pricing and program details unconfirmed. No distinctive
                  differentiator confirmed vs. Ivim Health. Verify directly before enrolling.
                </p>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded-full border border-orange-200 mb-3">
                  Pricing: Verify at GobyMeds.com
                </span>
                <a
                  href={buildGlp1AffiliateUrl('gobymeds', 'gobymeds-vs-ivim-health')}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors w-fit"
                >
                  Check GobyMeds Directly <ExternalLink className="w-4 h-4" />
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
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">
                        ⚠️ All pricing: <span className="italic">VERIFY</span>
                      </span>
                    </th>
                    <th className="text-center p-4 font-semibold text-blue-700 w-1/3">
                      Ivim Health ★
                      <span className="block text-xs text-orange-600 font-normal mt-0.5">
                        ⚠️ Pricing: <span className="italic">VERIFY</span>
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
                    <td className="p-4 font-medium text-gray-700">Microdosing Protocols</td>
                    <td className="p-4 text-center">
                      <Minus className="w-4 h-4 text-gray-400 mx-auto" aria-label="Not confirmed" />
                      <span className="block text-xs text-gray-400 mt-0.5">Not confirmed</span>
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" aria-label="Confirmed" />
                      <span className="block text-xs text-green-700 font-semibold mt-0.5">Confirmed specialty</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Liraglutide Available</td>
                    <td className="p-4 text-center">
                      <Minus className="w-4 h-4 text-gray-400 mx-auto" aria-label="Not confirmed" />
                      <span className="block text-xs text-gray-400 mt-0.5">Verify directly</span>
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" aria-label="Confirmed" />
                      <span className="block text-xs text-green-700 font-semibold mt-0.5">Confirmed</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Semaglutide (compounded)</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                    <td className="p-4 text-center text-green-700 font-medium text-xs">Available</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Physician Supervision</td>
                    <td className="p-4 text-center text-gray-500 text-xs">Verify directly</td>
                    <td className="p-4 text-center text-green-700 text-xs font-medium">Included</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Brand Track Record</td>
                    <td className="p-4 text-center text-orange-600 text-xs">Newer entrant</td>
                    <td className="p-4 text-center text-green-700 text-xs font-medium">Established</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Editorial Status</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-orange-50 text-orange-700 text-xs font-medium px-2 py-1 rounded-full border border-orange-200">
                        Under Review
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full border border-blue-200">
                        <Award className="w-3 h-3" /> Editorial Pick
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Table updated May 2026. Ivim Health microdosing specialty and liraglutide availability confirmed.
              All pricing — both providers — requires direct verification. Editorial pick based on confirmed
              program differentiators, not pricing comparison.
            </p>
          </section>

          {/* Provider Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Deep-Dives</h2>

            {/* Ivim Health Card — Editorial Pick */}
            <div className="border-2 border-blue-300 bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ivim Health</h3>
                  <p className="text-sm text-blue-700 mt-1 font-medium flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Editorial Pick — Microdosing Specialist
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-300">
                  Pricing: Verify at IvimHealth.com
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ivim Health is our editorial pick in this comparison based on two confirmed differentiators that
                most GLP-1 telehealth providers simply do not offer: a dedicated microdosing specialty and
                confirmed liraglutide availability.
              </p>

              <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-blue-900 text-sm mb-2">What Makes Ivim Health Distinctive</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Confirmed microdosing specialty:</strong> Ivim Health is one of the only GLP-1
                      telehealth platforms with a recognized focus on microdosing — starting patients at
                      sub-therapeutic doses and titrating slowly to minimize nausea, fatigue, and other
                      common side effects. This is particularly valuable for patients who have tried
                      standard GLP-1 protocols and struggled with tolerability.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Confirmed liraglutide offering:</strong> Most compounded telehealth platforms
                      offer only semaglutide or tirzepatide. Ivim Health confirming liraglutide availability
                      gives patients a third GLP-1 option with a longer clinical track record and different
                      tolerability profile than the newer agents.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Established brand presence:</strong> Ivim Health has a meaningful patient base
                      and independent coverage — more established than newer entrants like GobyMeds.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-5">
                <p className="font-semibold text-orange-900 text-sm mb-1">Pricing Caveat</p>
                <p className="text-orange-800 text-sm">
                  Ivim Health pricing is not independently verified on this page. Current program costs should
                  be confirmed directly at IvimHealth.com before enrolling. If verified pricing is your
                  primary concern today, see our{' '}
                  <Link href="/compare/medvi-vs-ivim-health" className="underline font-semibold">
                    MEDVi vs Ivim Health comparison
                  </Link>{' '}
                  — MEDVi pricing is confirmed at $179–$299/mo.
                </p>
              </div>

              <p className="text-sm text-gray-600 mb-5">
                Despite the pricing caveat, the editorial pick stands: Ivim Health&#39;s confirmed microdosing
                specialty and liraglutide availability are program-level differentiators that are meaningful
                for a specific patient profile — particularly those who have struggled with standard GLP-1
                side effects or who want an alternative to semaglutide/tirzepatide.
              </p>

              <a
                href={buildGlp1AffiliateUrl('ivim-health', 'gobymeds-vs-ivim-health')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Ivim Health Programs <ExternalLink className="w-4 h-4" />
              </a>
            </div>

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

              <div className="bg-white border-2 border-orange-300 rounded-lg p-4 mb-4">
                <p className="font-bold text-orange-900 text-sm mb-2">What We Can and Cannot Confirm About GobyMeds</p>
                <ul className="space-y-1.5 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Monthly pricing: unconfirmed — <span className="italic text-orange-600">VERIFY</span> at GobyMeds.com
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Microdosing availability: not confirmed
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Liraglutide availability: not confirmed
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Physician credentials and clinical model: verify directly
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                GobyMeds is a newer entrant to the GLP-1 telehealth market. Our editorial team is monitoring
                them for full review inclusion. Based on publicly available information, GobyMeds appears to
                offer compounded GLP-1 access through a telehealth model, but we cannot confirm the specifics
                of their program, pricing, or physician oversight with the same confidence as established
                providers like Ivim Health.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                Without confirmed microdosing capabilities or alternative medication options, GobyMeds does not
                offer the same level of confirmed differentiation as Ivim Health in this comparison. That does
                not mean GobyMeds is not legitimate — it means we cannot evaluate them fully until our review
                process is complete. If you are specifically considering GobyMeds, verify their credentials and
                read independent patient reviews before enrolling.
              </p>

              <a
                href={buildGlp1AffiliateUrl('gobymeds', 'gobymeds-vs-ivim-health')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Check GobyMeds Directly <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Who Should Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Choose Each Provider</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-3">Choose Ivim Health if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Have struggled with nausea or side effects on standard GLP-1 dosing and want a microdosing approach
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Are interested in liraglutide as an alternative to semaglutide or tirzepatide
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Want a provider with an established presence and confirmed program differentiators
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Are comfortable confirming pricing directly before enrolling
                  </li>
                </ul>
              </div>
              <div className="border border-orange-200 bg-orange-50 rounded-xl p-6">
                <h3 className="font-bold text-orange-900 text-lg mb-3">Consider GobyMeds if you…</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Are specifically interested in exploring newer telehealth options in the compounded GLP-1 space
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Are willing to verify all pricing and program details directly at GobyMeds.com
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Understand that our editorial review of GobyMeds is still in progress
                  </li>
                </ul>
                <p className="text-xs text-orange-700 mt-4 font-medium">
                  Note: For standard dosing with verified pricing, TMates or MEDVi are recommended instead.
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
                  q: 'What makes Ivim Health different from other GLP-1 telehealth providers?',
                  a: "Ivim Health is one of the few GLP-1 telehealth providers with a confirmed microdosing specialty. Microdosing protocols — starting at lower-than-standard doses and titrating gradually — can reduce side effects for sensitive patients. Ivim Health also confirms liraglutide availability, which most compounded telehealth platforms do not offer.",
                },
                {
                  q: 'Does Ivim Health offer microdosing tirzepatide?',
                  a: "Ivim Health is confirmed as a microdosing specialist. The specific medications available through microdosing protocols should be confirmed directly with Ivim Health, as their physician team tailors dosing schedules to individual patient tolerability rather than applying standard titration protocols only.",
                },
                {
                  q: 'Is Ivim Health pricing verified?',
                  a: "Ivim Health pricing is not independently verified on this page — check current pricing directly at IvimHealth.com. Our editorial pick is based on confirmed program differentiators, not pricing comparison. For confirmed pricing, see MEDVi ($179-299/mo verified) or TMates.",
                },
                {
                  q: 'What is compounded liraglutide and why does Ivim Health offering it matter?',
                  a: "Liraglutide is a GLP-1 receptor agonist (the active ingredient in Victoza and Saxenda) that predates semaglutide and tirzepatide. It has a strong safety record and some patients tolerate it better than the newer agents. Ivim Health confirming liraglutide availability gives patients a meaningful third option — particularly for patients who have tried semaglutide with poor tolerability.",
                },
                {
                  q: 'Is GobyMeds a legitimate GLP-1 provider?',
                  a: "GobyMeds is an emerging GLP-1 telehealth entrant under editorial review. Based on publicly available information they appear to operate as a licensed telehealth platform, but we have not independently confirmed their pricing, physician credentials, or program details. We recommend verifying directly at GobyMeds.com and reading independent patient reviews before enrolling.",
                },
                {
                  q: 'Which provider should I choose if I want verified pricing today?',
                  a: "Neither GobyMeds nor Ivim Health has independently verified pricing on this page. For confirmed pricing, we recommend TMates (pricing confirmed) or MEDVi (confirmed at $179-299/month). Both are established providers with transparent, independently verified program costs.",
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
            summary="Ivim Health is the editorial pick in this comparison for two confirmed reasons: microdosing specialty and liraglutide availability. These are meaningful differentiators not available at most competitors — particularly relevant for patients who have struggled with standard GLP-1 side effects or want a semaglutide alternative. Pricing for both providers requires direct verification. GobyMeds is a newer entrant under editorial review; without confirmed differentiators, there is no basis to prefer it over an established provider like Ivim Health. For patients who prioritize confirmed pricing above all else, MEDVi ($179-299/mo verified) or TMates are the lower-uncertainty choices."
            recommendation="ivim-health"
            author="Chad Simpson"
            dateReviewed="2026-05-06"
          />

          {/* Related Pages */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related GLP-1 Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'GobyMeds vs MEDVi', href: '/compare/gobymeds-vs-medvi' },
                { label: 'MEDVi vs Ivim Health', href: '/compare/medvi-vs-ivim-health' },
                { label: 'Ivim Health vs Eden Health', href: '/compare/ivim-health-vs-eden-health' },
                { label: 'Microdosing Tirzepatide Guide', href: '/microdosing-tirzepatide' },
                { label: 'Compounded Liraglutide Explained', href: '/compounded-liraglutide' },
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
              not affect our editorial rankings. Ivim Health is the editorial pick based on confirmed program
              differentiators (microdosing specialty, liraglutide availability) — not based on commission rates.
              Neither GobyMeds nor Ivim Health has independently verified pricing on this page. GobyMeds is a
              newer market entrant under editorial review. All editorial assessments are made independently of
              commercial relationships. Always verify program costs and terms directly with providers before
              enrolling. This page does not constitute medical advice.
            </p>
          </div>
        </main>

        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
