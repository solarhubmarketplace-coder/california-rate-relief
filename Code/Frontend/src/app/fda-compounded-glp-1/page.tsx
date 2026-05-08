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
    'FDA & Compounded GLP-1 2026: What the Enforcement Actions Actually Mean | GLP1CompareHub',
  description:
    "FDA enforcement actions in 2025 targeted bulk 503B GLP-1 manufacturers — not patient-specific 503A compounding. Here's what the FDA actually said and what it means for patients.",
  alternates: {
    canonical: 'https://glp1comparehub.com/fda-compounded-glp-1',
  },
  openGraph: {
    title:
      'FDA & Compounded GLP-1 2026: What the Enforcement Actions Actually Mean | GLP1CompareHub',
    description:
      "FDA enforcement actions in 2025 targeted bulk 503B GLP-1 manufacturers — not patient-specific 503A compounding. Here's what the FDA actually said and what it means for patients.",
    url: 'https://glp1comparehub.com/fda-compounded-glp-1',
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
          name: 'FDA & Compounded GLP-1',
          item: 'https://glp1comparehub.com/fda-compounded-glp-1',
        },
      ],
    },
    {
      '@type': 'Article',
      headline:
        'FDA & Compounded GLP-1 2026: What the Enforcement Actions Actually Mean',
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
      mainEntityOfPage: 'https://glp1comparehub.com/fda-compounded-glp-1',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What is FDA's position on compounded semaglutide and tirzepatide?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "FDA's position is nuanced by pharmacy type. For 503B outsourcing facilities: after the drug shortages were resolved in 2024–2025, FDA moved to restrict bulk compounding that lacked valid shortage justification, resulting in enforcement actions against some 503B manufacturers. For 503A pharmacies: patient-specific compounding with a valid physician prescription continues to operate within the legal framework under FDCA Section 503A.",
          },
        },
        {
          '@type': 'Question',
          name: 'Did the FDA ban compounded GLP-1 medications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. FDA did not ban compounded GLP-1 medications broadly. The 2025 enforcement actions targeted specific 503B outsourcing facilities engaged in bulk manufacturing of compounded GLP-1s after the shortage designation ended. Patient-specific 503A compounding under a physician's prescription was not the target of those actions and continues to operate legally.",
          },
        },
        {
          '@type': 'Question',
          name: 'What happened with the GLP-1 drug shortage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "FDA placed semaglutide on the drug shortage list around 2021 and tirzepatide later. The shortage designation gave pharmacies broader authority to compound these medications. FDA resolved the semaglutide shortage in late 2024 and the tirzepatide shortage in early 2025. After shortage resolution, the legal basis for large-scale 503B bulk compounding narrowed, triggering enforcement actions against 503B manufacturers.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between 503A and 503B for FDA regulation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "503A pharmacies are licensed state pharmacies that compound patient-specific medications under valid physician prescriptions. They are regulated primarily by state boards of pharmacy with FDA as a backstop. 503B outsourcing facilities are large-scale manufacturers that compound drugs in bulk for general distribution; they are subject to FDA current Good Manufacturing Practice (cGMP) standards and direct federal oversight. FDA's 2025 enforcement actions targeted 503B facilities — not 503A pharmacies.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to use compounded GLP-1 from a telehealth provider?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Safety depends on the source. Compounded GLP-1 from a licensed 503A pharmacy operating under a physician's prescription uses a regulated, state-licensed compounding facility subject to USP standards. The key safety factors: use a reputable telehealth provider with physician oversight, confirm the 503A pharmacy license, ensure ongoing medical monitoring. Avoid gray-market sources that require no prescription or physician consultation.",
          },
        },
        {
          '@type': 'Question',
          name: 'What should patients verify when choosing a compounded GLP-1 provider?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Verify four things: (1) A licensed physician issues a prescription before any medication is dispensed. (2) The platform uses a 503A licensed compounding pharmacy — not a 503B facility. (3) The pharmacy is licensed in your state. (4) The platform has a verifiable licensed medical team and transparent pharmacy partnerships. Providers like Eden Health, TMates, MEDVi, Strut, and Ivim operate within this framework.",
          },
        },
      ],
    },
  ],
};

export default function PageFdaCompoundedGlp1() {
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
              <li className="text-gray-800 font-medium">FDA &amp; Compounded GLP-1</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            FDA &amp; Compounded GLP-1 in 2026: What the Enforcement Actions
            Actually Mean for Patients
          </h1>

          <p className="text-gray-500 text-sm mb-2">
            By{' '}
            <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">
              Chad Simpson
            </Link>{' '}
            &middot; Updated May 6, 2026
          </p>

          <EditorialReviewBox />

          {/* Lead summary box */}
          <div className="my-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-blue-600 mt-0.5 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-blue-900 text-lg mb-1">
                  What this page covers
                </p>
                <p className="text-blue-800 text-sm">
                  The FDA&rsquo;s 2025 enforcement actions against compounded
                  GLP-1s targeted bulk 503B manufacturing — not patient-specific
                  503A compounding. This page explains what FDA authority
                  actually covers, what the enforcement actions were about, and
                  what patients should verify when using a telehealth provider
                  for compounded GLP-1.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What the FDA Says About Compounded GLP-1s
            </h2>
            <p className="text-gray-700 mb-4">
              The FDA has authority over drug compounding under the Federal
              Food, Drug, and Cosmetic Act (FDCA). Within that authority, there
              are two distinct legal frameworks for compounding — and FDA treats
              them differently.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>For 503A pharmacies (patient-specific compounding):</strong>{' '}
              FDA has regulatory authority as a backstop, but primary oversight
              is at the state level through state boards of pharmacy. Patient-specific
              compounding under a physician&rsquo;s prescription is protected
              under FDCA Section 503A and has not been the target of FDA&rsquo;s
              2025 enforcement actions against GLP-1 manufacturers.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>For 503B outsourcing facilities (bulk manufacturing):</strong>{' '}
              FDA has direct oversight authority and requires compliance with
              current Good Manufacturing Practice (cGMP) standards. During the
              GLP-1 drug shortage, 503B facilities had broader authority to
              produce compounded GLP-1s. After the shortage was resolved, FDA
              moved to enforce against 503B bulk manufacturing of GLP-1s that
              lacked valid shortage justification.
            </p>
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 mt-4">
              <p className="text-blue-800 text-sm">
                <strong>Key takeaway:</strong> FDA&rsquo;s position is not a
                blanket prohibition on compounded GLP-1s. It is a targeted
                enforcement position against a specific category of large-scale
                bulk manufacturing. Patient-specific 503A compounding under a
                physician&rsquo;s prescription continues within the legal
                framework.
              </p>
            </div>
          </section>

          {/* Section 2: Timeline */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              The Shortage-to-Enforcement Timeline: 4 Key Dates
            </h2>
            <div className="space-y-1">
              {[
                {
                  date: '2021–2023',
                  label: 'GLP-1 shortage declared; compounding authority expands',
                  detail:
                    'FDA places semaglutide (and later tirzepatide) on its drug shortage list. Under FDCA, the shortage designation gives both 503A pharmacies and 503B outsourcing facilities expanded authority to compound these medications. Demand for GLP-1 medications was dramatically outpacing commercial supply.',
                  icon: '📋',
                },
                {
                  date: 'Late 2024',
                  label: 'FDA resolves semaglutide shortage; warning letters begin',
                  detail:
                    "FDA officially declares the semaglutide shortage resolved. The legal basis for 503B bulk compounding of semaglutide narrows. FDA begins sending warning letters to some 503B outsourcing facilities that continued large-scale production without valid shortage justification. 503A patient-specific compounding under physician prescriptions is unaffected.",
                  icon: '⚠️',
                },
                {
                  date: 'March–May 2025',
                  label: 'Tirzepatide shortage resolved; 503B enforcement actions',
                  detail:
                    "FDA resolves the tirzepatide shortage. FDA issues enforcement actions — including warning letters and import alerts — targeting 503B outsourcing facilities that were bulk-manufacturing compounded tirzepatide at industrial scale without valid shortage justification. Headlines read as a broad GLP-1 ban, but the actual target was bulk 503B manufacturing specifically.",
                  icon: '🚨',
                },
                {
                  date: '2026 (current status)',
                  label: '503A patient-specific compounding continues legally',
                  detail:
                    "Patient-specific 503A compounded semaglutide and tirzepatide, prepared under valid physician prescriptions, continues to operate within the legal framework. Legitimate telehealth platforms using licensed 503A pharmacies and requiring physician prescriptions remain within FDA's stated tolerance for patient-specific compounding.",
                  icon: '✅',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-gray-400 text-xs uppercase tracking-wide mb-1">
                        {item.date}
                      </p>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.label}</h3>
                      <p className="text-gray-600 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: What enforcement was actually about */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What FDA&rsquo;s Enforcement Actions Were Actually About
            </h2>
            <p className="text-gray-700 mb-5">
              The 2025 enforcement actions were specifically about{' '}
              <strong>bulk 503B manufacturing at scale</strong> — a category
              that is fundamentally different from patient-specific 503A
              compounding. Understanding this distinction is the key to reading
              the enforcement actions accurately.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <X className="text-red-600" size={20} />
                  <h3 className="font-bold text-red-800">
                    What enforcement DID target (503B)
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-red-800">
                  {[
                    'Large-scale outsourcing facilities producing millions of doses',
                    'Bulk manufacturing without patient-specific prescriptions',
                    'Production at commercial pharmaceutical scale',
                    'Facilities operating without valid shortage justification after shortage ended',
                    'Some facilities with cGMP compliance failures',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-green-200 bg-green-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="text-green-600" size={20} />
                  <h3 className="font-bold text-green-800">
                    What enforcement did NOT target (503A)
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-green-800">
                  {[
                    'Patient-specific compounding for individual patients',
                    'Licensed state pharmacies with valid physician prescriptions',
                    'Small-batch compounding with patient-specific formulations',
                    'Telehealth platforms using 503A pharmacy partners',
                    '503A pharmacies meeting USP 795/797 standards',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <p className="text-amber-800 text-sm">
                  <strong>Why the headlines were misleading:</strong> News
                  coverage of the 2025 enforcement actions often framed it as
                  &ldquo;FDA cracks down on compounded GLP-1s&rdquo; — which
                  is technically accurate but omits the critical distinction
                  between 503A patient-specific compounding and 503B bulk
                  manufacturing. Most patients seeking compounded GLP-1 through
                  telehealth are in the 503A framework, not the 503B framework
                  that was targeted.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: FDA guidance for patients */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              FDA&rsquo;s Practical Guidance for Patients
            </h2>
            <p className="text-gray-700 mb-5">
              FDA has been consistent in its practical guidance for patients
              seeking compounded GLP-1 medications:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <Check className="text-green-500 shrink-0" size={20} />,
                  title: 'Work with a licensed physician',
                  body: "A valid prescription from a licensed physician, NP, or PA is the legal foundation of the 503A framework. No medication should be dispensed without a prescription from a licensed prescriber who has reviewed your health information.",
                },
                {
                  icon: <Check className="text-green-500 shrink-0" size={20} />,
                  title: 'Use a licensed 503A compounding pharmacy',
                  body: "The compounding pharmacy should be licensed by the relevant state board of pharmacy. Patients can verify pharmacy licenses through their state board of pharmacy website.",
                },
                {
                  icon: <X className="text-red-500 shrink-0" size={20} />,
                  title: 'Avoid gray-market or prescription-free sources',
                  body: "FDA has specifically flagged gray-market GLP-1 sources — platforms that allow purchase without a physician consultation or prescription. These sources operate outside the legal framework and carry compounding quality risks.",
                },
                {
                  icon: <X className="text-red-500 shrink-0" size={20} />,
                  title: 'Avoid unusually low-priced sources with no medical infrastructure',
                  body: "GLP-1 compounding involves licensed pharmacists, physician oversight, regulated active pharmaceutical ingredients, and ongoing quality control. Sources offering compounded tirzepatide or semaglutide at very low prices with no verifiable medical team should raise safety and legality questions.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Provider note */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Providers Operating Within FDA&rsquo;s Framework
            </h2>
            <p className="text-gray-700 mb-5">
              These telehealth providers use licensed 503A pharmacies, require
              physician prescriptions, and operate within the legal framework
              that FDA has consistently recognized for patient-specific
              compounding:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: 'Eden Health',
                  desc: 'Requires bloodwork at intake. Strong regulatory transparency. Physician-supervised prescribing with licensed 503A pharmacy.',
                  slug: 'eden',
                },
                {
                  name: 'TMates',
                  desc: 'Physician-supervised; competitive pricing; licensed 503A compounding pharmacy partners.',
                  slug: 'tmates',
                },
                {
                  name: 'MEDVi',
                  desc: 'Explicit 503A pharmacy partnerships. Physician-led with transparent supply chain.',
                  slug: 'medvi',
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
                    href={buildGlp1AffiliateUrl(p.slug, 'fda-compounded-glp-1')}
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
                  q: "What is FDA's position on compounded semaglutide and tirzepatide?",
                  a: "FDA's position is nuanced by pharmacy type. For 503B outsourcing facilities: after the drug shortages were resolved in 2024–2025, FDA moved to restrict bulk compounding without valid shortage justification, resulting in enforcement actions against some 503B manufacturers. For 503A pharmacies: patient-specific compounding with a valid physician prescription continues to operate within the legal framework under FDCA Section 503A.",
                },
                {
                  q: 'Did the FDA ban compounded GLP-1 medications?',
                  a: "No. FDA did not ban compounded GLP-1 medications broadly. The 2025 enforcement actions targeted specific 503B outsourcing facilities engaged in bulk manufacturing after the shortage designation ended. Patient-specific 503A compounding under a physician's prescription was not the target of those actions and continues to operate legally.",
                },
                {
                  q: 'What happened with the GLP-1 drug shortage?',
                  a: "FDA placed semaglutide on the drug shortage list around 2021 and tirzepatide later. The shortage designation gave pharmacies broader authority to compound these medications. FDA resolved the semaglutide shortage in late 2024 and the tirzepatide shortage in early 2025. After shortage resolution, the legal basis for large-scale 503B bulk compounding narrowed, triggering enforcement actions.",
                },
                {
                  q: 'What is the difference between 503A and 503B for FDA regulation?',
                  a: "503A pharmacies compound patient-specific medications under valid physician prescriptions and are regulated primarily by state boards of pharmacy with FDA as a backstop. 503B outsourcing facilities are large-scale manufacturers subject to FDA cGMP standards and direct federal oversight. FDA's 2025 enforcement actions targeted 503B facilities, not 503A pharmacies.",
                },
                {
                  q: 'Is it safe to use compounded GLP-1 from a telehealth provider?',
                  a: "Safety depends on the source. Compounded GLP-1 from a licensed 503A pharmacy operating under a physician's prescription uses a regulated, state-licensed compounding facility subject to USP standards. Key safety factors: use a reputable telehealth provider with physician oversight, confirm the 503A pharmacy license, ensure ongoing medical monitoring. Avoid gray-market sources that require no prescription.",
                },
                {
                  q: 'What should patients verify when choosing a compounded GLP-1 provider?',
                  a: "Verify four things: (1) A licensed physician issues a prescription before any medication is dispensed. (2) The platform uses a 503A licensed compounding pharmacy — not 503B. (3) The pharmacy is licensed in your state. (4) The platform has a verifiable licensed medical team and transparent pharmacy partnerships.",
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
                { href: '/is-compounded-glp-1-legal', label: 'Is Compounded GLP-1 Legal?' },
                {
                  href: '/503a-compounding-pharmacy-tirzepatide',
                  label: '503A Compounding Pharmacy: Tirzepatide',
                },
                { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide' },
                { href: '/compounded-semaglutide', label: 'Compounded Semaglutide' },
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
          href={buildGlp1AffiliateUrl('eden-health', 'fda-compounded-glp-1')}
          brandName="Eden Health"
          pricePitch="FDA-compliant 503A compounding — GLP-1 from $229/mo"
        />
        <GLP1Footer />
      </GLP1Layout>
    </>
  );
}
