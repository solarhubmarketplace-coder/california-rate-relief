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
  title:
    'Is Compounded GLP-1 Legal in 2026? The Short Answer: Yes, With a Prescription | GLP1CompareHub',
  description:
    "Compounded semaglutide and tirzepatide from licensed 503A pharmacies are legal with a valid physician prescription. Here's the timeline, the legal framework, and what to verify.",
  alternates: {
    canonical: 'https://glp1comparehub.com/is-compounded-glp-1-legal',
  },
  openGraph: {
    title:
      'Is Compounded GLP-1 Legal in 2026? The Short Answer: Yes, With a Prescription | GLP1CompareHub',
    description:
      "Compounded semaglutide and tirzepatide from licensed 503A pharmacies are legal with a valid physician prescription. Here's the timeline, the legal framework, and what to verify.",
    url: 'https://glp1comparehub.com/is-compounded-glp-1-legal',
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
          name: 'GLP-1 Compliance',
          item: 'https://glp1comparehub.com/compliance',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Is Compounded GLP-1 Legal?',
          item: 'https://glp1comparehub.com/is-compounded-glp-1-legal',
        },
      ],
    },
    {
      '@type': 'Article',
      headline:
        'Is Compounded GLP-1 Legal in 2026? The Short Answer: Yes, With a Prescription',
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
      mainEntityOfPage: 'https://glp1comparehub.com/is-compounded-glp-1-legal',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is compounded GLP-1 legal in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Compounded semaglutide and tirzepatide from a licensed 503A pharmacy with a valid physician prescription is legal under federal law as of May 2026. The legal framework is FDCA Section 503A, which permits patient-specific compounding by licensed pharmacies acting on a valid prescription.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why did I hear that compounded GLP-1s were banned?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The confusion stems from 2025 FDA enforcement actions — but those actions targeted 503B outsourcing facilities that were bulk-manufacturing compounded GLP-1s at large scale after the drug shortage was resolved. Patient-specific 503A compounding under a physician's prescription is a different legal category and was not banned.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between legal and illegal compounded GLP-1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Legal: compounded semaglutide or tirzepatide prepared by a licensed 503A pharmacy for an individual patient under a valid physician prescription. Illegal or gray-market: compounded GLP-1 sold without a physician prescription, sourced from unlicensed pharmacies, or bulk-manufactured by 503B facilities without valid shortage justification.",
          },
        },
        {
          '@type': 'Question',
          name: 'What protections should I look for when choosing a provider?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Four key protections: (1) a valid prescription from a licensed physician before any medication is dispensed, (2) use of a 503A licensed compounding pharmacy (not a 503B facility), (3) the pharmacy is licensed in your state, (4) a reputable telehealth platform that is transparent about its pharmacy partners.",
          },
        },
        {
          '@type': 'Question',
          name: 'What are red flags for gray-market GLP-1 sources?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Major red flags: no physician consultation or prescription required, prices that are unusually low (e.g., $20/month for compounded tirzepatide), no verifiable pharmacy license information, no state-by-state availability restrictions, and no identifiable medical team.",
          },
        },
        {
          '@type': 'Question',
          name: 'Which telehealth providers operate within the legal 503A framework?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "TMates, MEDVi, Eden Health, Strut Health, and Ivim Health all operate within the legal 503A framework — meaning they require physician prescriptions and use licensed 503A compounding pharmacies. Each platform handles the full process: physician intake, prescription, 503A pharmacy fulfillment, and ongoing monitoring.",
          },
        },
      ],
    },
  ],
};

export default function PageIsCompoundedGlp1Legal() {
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
              <li className="text-gray-800 font-medium">Is Compounded GLP-1 Legal?</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Is Compounded GLP-1 Legal in 2026?
          </h1>

          <p className="text-gray-500 text-sm mb-2">
            By{' '}
            <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
              Chad Simpson
            </Link>{' '}
            &middot; Updated May 6, 2026
          </p>

          <EditorialReviewBox />

          {/* Direct answer — green callout */}
          <div className="my-8 rounded-xl border-2 border-green-400 bg-green-50 p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-green-600 mt-0.5 shrink-0" size={26} />
              <div>
                <p className="font-bold text-green-800 text-xl mb-2">
                  Yes — compounded GLP-1 from a licensed 503A pharmacy is legal
                  with a valid physician prescription.
                </p>
                <p className="text-green-700 text-sm">
                  Patient-specific compounded semaglutide and tirzepatide from
                  licensed 503A pharmacies remains legal under federal law as of
                  May 2026. The legal framework is FDCA Section 503A. What is
                  required: a valid prescription from a licensed physician and a
                  licensed 503A compounding pharmacy.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: The timeline */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              The Timeline That Created the Confusion
            </h2>
            <p className="text-gray-700 mb-5">
              If you&rsquo;ve been following news about compounded GLP-1s, you
              can be forgiven for being confused. The headlines in 2024 and 2025
              were real — but they described a specific enforcement target that
              does not apply to patient-specific 503A compounding. Here is what
              actually happened, in order:
            </p>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-6">
                {[
                  {
                    period: '2021–2023',
                    title: 'GLP-1 drug shortage declared',
                    body: "FDA placed semaglutide (Ozempic, Wegovy) and later tirzepatide (Mounjaro, Zepbound) on its drug shortage list. Under FDCA Sections 503A and 503B, the shortage designation gave pharmacies broader legal authority to compound these medications.",
                    color: 'blue',
                  },
                  {
                    period: 'Late 2024',
                    title: 'FDA resolves the semaglutide shortage',
                    body: "FDA officially removed semaglutide from the shortage list. This narrowed the legal basis for 503B bulk compounding of semaglutide. Warning letters began going to some 503B facilities.",
                    color: 'yellow',
                  },
                  {
                    period: 'March–May 2025',
                    title: 'FDA resolves tirzepatide shortage; enforcement against 503B manufacturers',
                    body: "FDA resolved the tirzepatide shortage. FDA issued enforcement actions targeting 503B outsourcing facilities that were continuing to bulk-manufacture compounded tirzepatide at scale without valid shortage justification. These are large industrial-scale manufacturers — not patient-specific pharmacies.",
                    color: 'orange',
                  },
                  {
                    period: '2025–2026 (current)',
                    title: '503A patient-specific compounding continues legally',
                    body: "503A patient-specific compounded semaglutide and tirzepatide with valid physician prescriptions continues to operate legally. The physician-prescription + patient-specific-compounding framework distinguishes 503A from the bulk 503B manufacturing that was targeted.",
                    color: 'green',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative pl-14">
                    <div
                      className={`absolute left-3.5 top-1.5 h-5 w-5 rounded-full border-2 border-white ${
                        item.color === 'blue'
                          ? 'bg-blue-500'
                          : item.color === 'yellow'
                          ? 'bg-yellow-500'
                          : item.color === 'orange'
                          ? 'bg-orange-500'
                          : 'bg-green-500'
                      }`}
                    />
                    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                        {item.period}
                      </p>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Legal vs not legal */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              What Is Legal vs. What Is Not Legal
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="text-green-600" size={20} />
                  <h3 className="font-bold text-green-800">Legal (as of May 2026)</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Compounded semaglutide or tirzepatide prepared by a licensed 503A pharmacy for an individual patient',
                    'Requires a valid prescription from a licensed physician, NP, or PA',
                    'Pharmacy must be licensed in the patient's state',
                    'Telehealth platforms with physician oversight + 503A pharmacy partners',
                    'Patient-specific formulations (different concentration, add-ins like B12, etc.)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-green-800 text-sm">
                      <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <X className="text-red-600" size={20} />
                  <h3 className="font-bold text-red-800">Not Legal / Gray Market</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Compounded GLP-1 sold without a physician prescription',
                    'Bulk 503B manufacturing without valid drug shortage justification',
                    'Compounded GLP-1 from unlicensed or unverified pharmacies',
                    'Sources requiring no physician consultation at all',
                    'Unusually low prices with no verifiable medical infrastructure (e.g., $20/month)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-red-800 text-sm">
                      <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Key protections */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Key Protections to Look For as a Patient
            </h2>
            <p className="text-gray-700 mb-5">
              If you are evaluating a telehealth provider for compounded GLP-1
              medication, confirm all four of the following:
            </p>
            <div className="space-y-4">
              {[
                {
                  num: '1',
                  title: 'Valid prescription from a licensed physician',
                  body: "No medication should be dispensed until a licensed physician, NP, or PA has reviewed your health information and issued a prescription specifically for you. If a platform lets you order without any medical consultation, that is a red flag.",
                },
                {
                  num: '2',
                  title: 'Licensed 503A pharmacy (not 503B)',
                  body: "The platform should be able to confirm that it uses a 503A licensed compounding pharmacy — not a 503B outsourcing facility. These are different legal categories with different regulatory histories. Ask directly if it is not stated clearly on the platform.",
                },
                {
                  num: '3',
                  title: 'Pharmacy licensed in your state',
                  body: "Compounding pharmacies must hold valid non-resident pharmacy licenses in each state where they ship. Legitimate platforms will tell you which states they serve. If a platform ships nationally with no state restrictions mentioned, ask for their pharmacy license verification.",
                },
                {
                  num: '4',
                  title: 'Reputable telehealth platform with a verifiable medical team',
                  body: "Legitimate providers will have identifiable licensed physicians on their team, verifiable state-level medical practice information, and transparent supply chain information. Look for publicly listed medical directors and pharmacy partners.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Red flags */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Red Flags for Gray-Market Sources
            </h2>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-2 mb-4">
                <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
                <p className="font-semibold text-amber-800">
                  These are warning signs that a source may not be operating
                  within the legal 503A framework:
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  'No physician consultation or prescription required — you can order directly',
                  'Prices that seem too good to be true (e.g., $20–$30/month for tirzepatide)',
                  'No state-by-state availability limitations listed anywhere on the site',
                  'No identifiable licensed physician or medical director on the team',
                  'Unable to identify which specific pharmacy fills the prescription',
                  'No mention of 503A or compounding pharmacy licensing',
                  'Ships internationally without a clear US pharmacy partner',
                ].map((flag, i) => (
                  <li key={i} className="flex items-start gap-2 text-amber-800 text-sm">
                    <X className="text-red-500 shrink-0 mt-0.5" size={16} />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Provider grid */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Providers That Operate Within the Legal 503A Framework
            </h2>
            <p className="text-gray-700 mb-5">
              The following platforms require physician prescriptions, use
              licensed 503A pharmacies, and operate within the legal framework
              for compounded GLP-1 medications:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: 'TMates',
                  desc: 'Physician-supervised; competitive pricing; licensed 503A pharmacy partners.',
                  slug: 'tmates',
                },
                {
                  name: 'MEDVi',
                  desc: 'Physician-led platform; explicit 503A pharmacy partnerships; transparent supply chain.',
                  slug: 'medvi',
                },
                {
                  name: 'Eden Health',
                  desc: 'Bloodwork required at intake; strong regulatory transparency; physician-supervised prescribing.',
                  slug: 'eden',
                },
                {
                  name: 'Strut Health',
                  desc: 'Licensed physicians; 503A compounding pharmacy; state-licensed in all served markets.',
                  slug: 'strut',
                },
                {
                  name: 'Ivim Health',
                  desc: 'Physician-led; licensed 503A pharmacy; ongoing monitoring built into the program.',
                  slug: 'ivim',
                },
              ].map((p) => (
                <div
                  key={p.slug}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{p.name}</p>
                    <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
                  </div>
                  <a
                    href={buildGlp1AffiliateUrl(p.slug, 'is-compounded-glp-1-legal')}
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
                  q: 'Is compounded GLP-1 legal in 2026?',
                  a: "Yes. Compounded semaglutide and tirzepatide from a licensed 503A pharmacy with a valid physician prescription is legal under federal law as of May 2026. The legal framework is FDCA Section 503A, which permits patient-specific compounding by licensed pharmacies acting on a valid prescription.",
                },
                {
                  q: 'Why did I hear that compounded GLP-1s were banned?',
                  a: "The confusion stems from 2025 FDA enforcement actions — but those actions targeted 503B outsourcing facilities that were bulk-manufacturing compounded GLP-1s at scale after the drug shortage was resolved. Patient-specific 503A compounding under a physician's prescription is a different legal category and was not banned.",
                },
                {
                  q: 'What is the difference between legal and illegal compounded GLP-1?',
                  a: "Legal: compounded semaglutide or tirzepatide prepared by a licensed 503A pharmacy for an individual patient under a valid physician prescription. Illegal or gray-market: compounded GLP-1 sold without a physician prescription, sourced from unlicensed pharmacies, or bulk-manufactured by 503B facilities without valid shortage justification.",
                },
                {
                  q: 'What protections should I look for when choosing a provider?',
                  a: "Four key protections: (1) a valid prescription from a licensed physician before any medication is dispensed, (2) use of a 503A licensed compounding pharmacy — not 503B, (3) the pharmacy is licensed in your state, (4) a reputable telehealth platform that is transparent about its pharmacy partners.",
                },
                {
                  q: 'What are red flags for gray-market GLP-1 sources?',
                  a: "Major red flags: no physician consultation or prescription required, prices that are unusually low (e.g., $20/month for compounded tirzepatide), no verifiable pharmacy license information, no state-by-state availability restrictions, and no identifiable medical team.",
                },
                {
                  q: 'Which telehealth providers operate within the legal 503A framework?',
                  a: "TMates, MEDVi, Eden Health, Strut Health, and Ivim Health all operate within the legal 503A framework — requiring physician prescriptions and using licensed 503A compounding pharmacies.",
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  href: '/503a-compounding-pharmacy-tirzepatide',
                  label: '503A Compounding Pharmacy: Tirzepatide',
                },
                { href: '/fda-compounded-glp-1', label: 'FDA & Compounded GLP-1' },
                { href: '/compounded-semaglutide', label: 'Compounded Semaglutide' },
                { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide' },
                {
                  href: '/best-compounded-tirzepatide',
                  label: 'Best Compounded Tirzepatide',
                },
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
          href={buildGlp1AffiliateUrl('tmates', 'is-compounded-glp-1-legal')}
          brandName="TMates"
          pricePitch="Compounded semaglutide & tirzepatide from $167/mo"
        />
        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
