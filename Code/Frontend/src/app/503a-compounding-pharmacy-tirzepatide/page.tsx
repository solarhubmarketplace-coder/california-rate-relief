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
import { ArrowRight, Check, X, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: '503A Compounding Pharmacy Tirzepatide: Legal Status, What to Verify | GLP1CompareHub',
  description:
    "Is 503A compounded tirzepatide legal in 2026? Yes — with a valid Rx from a licensed physician. Here's how 503A pharmacies work, how they differ from 503B, and what to verify before enrolling.",
  alternates: {
    canonical: 'https://glp1comparehub.com/503a-compounding-pharmacy-tirzepatide',
  },
  openGraph: {
    title: '503A Compounding Pharmacy Tirzepatide: Legal Status, What to Verify | GLP1CompareHub',
    description:
      "Is 503A compounded tirzepatide legal in 2026? Yes — with a valid Rx from a licensed physician. Here's how 503A pharmacies work, how they differ from 503B, and what to verify before enrolling.",
    url: 'https://glp1comparehub.com/503a-compounding-pharmacy-tirzepatide',
    type: 'article',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
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
          name: 'GLP-1 Compliance',
          item: 'https://glp1comparehub.com/compliance',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '503A Compounding Pharmacy: Tirzepatide',
          item: 'https://glp1comparehub.com/503a-compounding-pharmacy-tirzepatide',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: '503A Compounding Pharmacy Tirzepatide: Legal Status, What to Verify',
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
      mainEntityOfPage:
        'https://glp1comparehub.com/503a-compounding-pharmacy-tirzepatide',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a 503A compounding pharmacy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 503A compounding pharmacy is a state-licensed pharmacy that prepares individualized medications for specific patients based on a physician\'s prescription. It operates under FDCA Section 503A and is regulated by state boards of pharmacy with FDA oversight as a backstop.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 503A compounded tirzepatide legal in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. As of May 2026, patient-specific compounded tirzepatide from a licensed 503A pharmacy with a valid physician prescription remains legal under federal law. The 2025 FDA enforcement actions targeted bulk 503B manufacturing — not 503A patient-specific compounding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What did the FDA enforcement actions in 2025 actually target?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 2025 FDA enforcement actions targeted 503B outsourcing facilities that were bulk-manufacturing compounded tirzepatide at scale after the drug shortage was officially resolved. 503A pharmacies that compound patient-specific medication under a physician\'s prescription operate under a different legal framework and were not the target of those actions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do telehealth providers use 503A pharmacies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The legal flow is: (1) a licensed physician reviews your health information and writes a prescription, (2) the prescription is sent to a licensed 503A compounding pharmacy, (3) the pharmacy compounds the medication specifically for you as an individual patient, (4) the medication ships directly to you. The physician-prescription requirement is what keeps 503A compounding within the legal framework.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between 503A and 503B pharmacies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '503A pharmacies are licensed state pharmacies that compound medication for individual patients with a valid prescription — small-batch, patient-specific. 503B outsourcing facilities are large-scale manufacturers that produce compounded drugs in bulk without patient-specific prescriptions; they face stricter FDA current Good Manufacturing Practice (cGMP) oversight.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I verify before using a telehealth provider for compounded tirzepatide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Verify three things: (1) Is the pharmacy licensed in your state? (2) Does the telehealth platform explicitly use a 503A pharmacy — not a 503B facility? (3) Does the platform require a valid physician consultation and prescription before dispensing? Providers like Eden Health, TMates, and MEDVi work with licensed 503A pharmacies and require physician prescriptions.',
          },
        },
      ],
    },
  ],
};

export default function Page503ACompoundingTirzepatide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GLP1Layout>
        <GLP1Header />
        <MedicalDisclaimerBanner />

        <main className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/compliance" className="hover:text-blue-600">
                  GLP-1 Compliance
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-medium">
                503A Compounding Pharmacy: Tirzepatide
              </li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            503A Compounding Pharmacy Tirzepatide: Legal Status &amp; What to
            Verify Before Enrolling
          </h1>

          <p className="text-gray-500 text-sm mb-2">
            By{' '}
            <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
              Chad Simpson
            </Link>{' '}
            &middot; Updated May 6, 2026
          </p>

          <EditorialReviewBox />

          {/* Lead answer box */}
          <div className="my-8 rounded-xl border-l-4 border-green-500 bg-green-50 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-green-600 mt-0.5 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-green-800 text-lg">
                  Bottom line: 503A compounded tirzepatide is legal in 2026 with
                  a valid prescription.
                </p>
                <p className="text-green-700 mt-1 text-sm">
                  Patient-specific compounding from licensed 503A pharmacies
                  under a physician&rsquo;s prescription operates under a
                  different legal framework than the bulk 503B manufacturing that
                  FDA enforcement actions targeted in 2025.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Is a 503A Compounding Pharmacy?
            </h2>
            <p className="text-gray-700 mb-4">
              A <strong>503A compounding pharmacy</strong> is a state-licensed
              pharmacy that prepares individualized medications for specific
              patients based on a licensed physician&rsquo;s prescription. The
              &ldquo;503A&rdquo; designation refers to Section 503A of the
              Federal Food, Drug, and Cosmetic Act (FDCA), which defines the
              legal framework for patient-specific compounding.
            </p>
            <p className="text-gray-700 mb-4">
              Key characteristics of a 503A pharmacy:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                'Compounding is performed for a specific individual patient — not manufactured in bulk for general sale',
                'A valid prescription from a licensed physician is required before the pharmacy can compound or dispense',
                'Regulated primarily by state boards of pharmacy, with FDA authority as an oversight backstop',
                'Required to meet applicable state USP standards (USP 795 for non-sterile, USP 797 for sterile preparations)',
                'Not required to comply with federal cGMP manufacturing standards (unlike 503B facilities)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              In plain language: a 503A pharmacy is the same category of
              pharmacy that might compound a specialized topical cream for a
              patient with an allergy to a commercial formulation excipient. The
              compounding is individualized, prescription-driven, and
              state-regulated.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why 503A Tirzepatide Is Different From the 2025 Crackdown
            </h2>
            <p className="text-gray-700 mb-4">
              In 2025, you may have read headlines about FDA enforcement actions
              against compounded GLP-1 medications. Those headlines were
              accurate — but they described a specific enforcement target that
              does not apply to 503A patient-specific compounding.
            </p>
            <p className="text-gray-700 mb-4">
              Here is what actually happened:
            </p>
            <ol className="space-y-4 mb-6 list-none">
              {[
                {
                  year: '2021–2023',
                  desc: 'FDA placed tirzepatide on its drug shortage list. Under FDCA Section 503A and 503B, pharmacies gained broader legal authority to compound medications on the shortage list.',
                },
                {
                  year: 'Late 2024 / Early 2025',
                  desc: 'FDA resolved the tirzepatide drug shortage. Once a drug is off the shortage list, the legal basis for 503B bulk compounding without a shortage justification narrows significantly.',
                },
                {
                  year: 'March–May 2025',
                  desc: 'FDA issued warning letters and enforcement actions targeting 503B outsourcing facilities that were continuing to bulk-manufacture compounded tirzepatide at scale — without valid shortage justification. These are large-scale manufacturers, not patient-specific pharmacies.',
                },
                {
                  year: 'May 2026 (current)',
                  desc: '503A patient-specific compounding of tirzepatide with a valid physician prescription continues to be legal under federal law. The physician-Rx + patient-specific-compounding requirement distinguishes 503A from the 503B bulk manufacturing that was targeted.',
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <span className="font-bold text-blue-700 shrink-0 w-28 text-sm pt-0.5">
                    {item.year}
                  </span>
                  <span className="text-gray-700 text-sm">{item.desc}</span>
                </li>
              ))}
            </ol>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="text-amber-600 shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-amber-800 text-sm">
                  <strong>The key distinction:</strong> 503B outsourcing
                  facilities manufacture drugs in bulk for general distribution.
                  503A pharmacies compound drugs for individual patients under a
                  physician&rsquo;s prescription. These are different legal
                  categories with different regulatory requirements — and the
                  2025 enforcement actions were directed at the former, not the
                  latter.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Telehealth Providers Use 503A Pharmacies
            </h2>
            <p className="text-gray-700 mb-4">
              Legitimate telehealth platforms that offer compounded tirzepatide
              follow a specific legal workflow:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: '1',
                  title: 'Medical intake and physician review',
                  desc: 'You complete a health questionnaire and — at reputable providers — an initial bloodwork panel. A licensed physician (or NP/PA with prescribing authority) reviews your health information.',
                },
                {
                  step: '2',
                  title: 'Physician writes a prescription',
                  desc: "If you qualify medically, the physician writes a prescription for compounded tirzepatide specifically for you as an individual patient. This is the legal foundation of the 503A framework — the prescription is for you, not for a general supply.",
                },
                {
                  step: '3',
                  title: 'Prescription sent to a licensed 503A pharmacy',
                  desc: 'The platform transmits your prescription to a licensed 503A compounding pharmacy. The pharmacy verifies the prescription and compounds the medication according to your prescription.',
                },
                {
                  step: '4',
                  title: 'Medication ships to you',
                  desc: 'The pharmacy ships your individualized compounded medication directly to your address. The medication was compounded specifically for you — it is not drawn from a bulk inventory.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 503A vs 503B Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              503A vs. 503B: Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/3">
                      Feature
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/3">
                      503A Compounding Pharmacy
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/3">
                      503B Outsourcing Facility
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      feature: 'Legal authority',
                      a: 'FDCA Section 503A',
                      b: 'FDCA Section 503B',
                    },
                    {
                      feature: 'Patient prescription required',
                      a: 'Yes — required for every compounded item',
                      b: 'No — can manufacture without patient-specific Rx',
                    },
                    {
                      feature: 'Scale of production',
                      a: 'Small-batch, patient-specific',
                      b: 'Large-scale bulk manufacturing',
                    },
                    {
                      feature: 'Primary regulator',
                      a: 'State board of pharmacy (+ FDA backstop)',
                      b: 'FDA (cGMP standards apply)',
                    },
                    {
                      feature: 'FDA cGMP required',
                      a: 'No',
                      b: 'Yes',
                    },
                    {
                      feature: 'Can distribute across state lines',
                      a: 'Limited (state-specific rules)',
                      b: 'Yes',
                    },
                    {
                      feature: 'Status post-shortage (2025–2026)',
                      a: 'Continues to operate legally with valid Rx',
                      b: 'Bulk GLP-1 compounding subject to FDA enforcement',
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 font-medium text-gray-700">
                        {row.feature}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{row.a}</td>
                      <td className="py-3 px-4 text-gray-700">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What to Verify */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What to Verify Before Enrolling
            </h2>
            <p className="text-gray-700 mb-5">
              Before choosing a telehealth provider for compounded tirzepatide,
              confirm each of the following:
            </p>
            <div className="space-y-4">
              {[
                {
                  num: '1',
                  heading: 'Is the pharmacy licensed in your state?',
                  body: 'Compounding pharmacy licensure is state-specific. A pharmacy licensed in Florida, for example, can only ship to patients in states where it holds a valid non-resident pharmacy license. Reputable platforms will confirm which states they serve.',
                },
                {
                  num: '2',
                  heading: 'Does the platform use a 503A pharmacy — not 503B?',
                  body: "Ask directly or check the provider's FAQ. The answer matters legally. A platform that says it uses an \"outsourcing facility\" or \"cGMP-compliant facility\" may be using a 503B — which operates under a different legal framework that faces ongoing FDA scrutiny for GLP-1 compounding.",
                },
                {
                  num: '3',
                  heading: 'Is there a valid physician prescription?',
                  body: 'The 503A framework requires a prescription from a licensed prescriber for each patient. Any platform that allows you to order compounded tirzepatide without a physician consultation and prescription is not operating within the 503A legal framework.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="rounded-xl border border-blue-100 bg-blue-50 p-5"
                >
                  <h3 className="font-semibold text-blue-900 mb-2">
                    {item.num}. {item.heading}
                  </h3>
                  <p className="text-blue-800 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Provider recommendations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Providers That Use Licensed 503A Pharmacies
            </h2>
            <p className="text-gray-700 mb-5">
              The following telehealth platforms work with licensed 503A
              compounding pharmacies and require physician prescriptions before
              dispensing:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: 'Eden Health',
                  note: 'Requires bloodwork at intake; known for regulatory transparency. Strong choice for patients who want medical rigor alongside their prescription.',
                  slug: 'eden',
                },
                {
                  name: 'TMates',
                  note: 'Competitive pricing with physician-supervised prescribing. Uses licensed 503A pharmacies.',
                  slug: 'tmates',
                },
                {
                  name: 'MEDVi',
                  note: 'Physician-led platform with explicit 503A pharmacy partnerships. Transparent about its compounding supply chain.',
                  slug: 'medvi',
                },
              ].map((p) => (
                <div
                  key={p.slug}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{p.name}</p>
                    <p className="text-gray-600 text-sm mt-1">{p.note}</p>
                  </div>
                  <a
                    href={buildGlp1AffiliateUrl(
                      p.slug,
                      '503a-compounding-pharmacy-tirzepatide'
                    )}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shrink-0"
                  >
                    See Pricing <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
            <VerifiedPricingBadge className="mt-4" />
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is a 503A compounding pharmacy?',
                  a: "A 503A compounding pharmacy is a state-licensed pharmacy that prepares individualized medications for specific patients based on a physician's prescription. It is regulated by state boards of pharmacy with FDA authority under FDCA Section 503A.",
                },
                {
                  q: 'Is 503A compounded tirzepatide legal in 2026?',
                  a: "Yes. As of May 2026, patient-specific compounded tirzepatide from a licensed 503A pharmacy with a valid physician prescription remains legal under federal law. The 2025 FDA enforcement actions targeted bulk 503B manufacturing — not 503A patient-specific compounding.",
                },
                {
                  q: 'What did the FDA enforcement actions in 2025 actually target?',
                  a: 'The 2025 FDA enforcement actions targeted 503B outsourcing facilities that were bulk-manufacturing compounded tirzepatide at scale after the drug shortage was officially resolved. 503A pharmacies that compound patient-specific medication under a physician prescription operate under a different legal framework and were not the target of those actions.',
                },
                {
                  q: 'How do telehealth providers use 503A pharmacies?',
                  a: 'The legal flow is: (1) a licensed physician reviews your health information and writes a prescription, (2) the prescription is sent to a licensed 503A compounding pharmacy, (3) the pharmacy compounds the medication specifically for you as an individual patient, (4) the medication ships directly to you.',
                },
                {
                  q: 'What is the difference between 503A and 503B pharmacies?',
                  a: '503A pharmacies compound medication for individual patients with a valid prescription — small-batch, patient-specific, regulated primarily by state boards of pharmacy. 503B outsourcing facilities produce compounded drugs in bulk without patient-specific prescriptions and face stricter FDA cGMP oversight.',
                },
                {
                  q: 'What should I verify before using a telehealth provider for compounded tirzepatide?',
                  a: 'Verify three things: (1) Is the pharmacy licensed in your state? (2) Does the platform use a 503A pharmacy — not 503B? (3) Does the platform require a valid physician consultation and prescription before dispensing?',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-700 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '/is-compounded-glp-1-legal', label: 'Is Compounded GLP-1 Legal?' },
                { href: '/fda-compounded-glp-1', label: 'FDA & Compounded GLP-1' },
                { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide' },
                {
                  href: '/cheapest-compounded-tirzepatide',
                  label: 'Cheapest Compounded Tirzepatide',
                },
                { href: '/tirzepatide-vs-zepbound', label: 'Tirzepatide vs. Zepbound' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </main>

        <StickyMobileCTA
          href={buildGlp1AffiliateUrl('eden-health', '503a-compounding-pharmacy-tirzepatide')}
          brandName="Eden Health"
          pricePitch="Verified telehealth — compounded GLP-1 from $229/mo"
        />
        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
