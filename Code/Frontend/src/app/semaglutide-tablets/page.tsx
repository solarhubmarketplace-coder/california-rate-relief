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
import { ArrowRight, Check, X, AlertCircle, ExternalLink, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Semaglutide Tablets 2026: Rybelsus, Oral Wegovy & Compounded Options | GLP1CompareHub',
  description:
    "Only FDA-approved semaglutide tablet is Rybelsus (T2D). Oral Wegovy for obesity is in late-stage development. Compounded oral options exist but have bioavailability limitations. Here's what's available in 2026.",
  alternates: {
    canonical: 'https://glp1comparehub.com/semaglutide-tablets',
  },
  openGraph: {
    title: 'Semaglutide Tablets 2026: Rybelsus, Oral Wegovy & Compounded Options',
    description:
      "Only FDA-approved semaglutide tablet is Rybelsus (T2D). Oral Wegovy for obesity is in late-stage development. Compounded oral options exist but have bioavailability limitations.",
    url: 'https://glp1comparehub.com/semaglutide-tablets',
    siteName: 'GLP1CompareHub',
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
          name: 'Semaglutide',
          item: 'https://glp1comparehub.com/semaglutide',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Semaglutide Tablets',
          item: 'https://glp1comparehub.com/semaglutide-tablets',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Semaglutide Tablets 2026: Rybelsus, Oral Wegovy & Compounded Options',
      description:
        "Only FDA-approved semaglutide tablet is Rybelsus (T2D). Oral Wegovy for obesity is in late-stage development. Compounded oral options exist but have bioavailability limitations.",
      url: 'https://glp1comparehub.com/semaglutide-tablets',
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
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a semaglutide pill for weight loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As of May 2026, there is no FDA-approved semaglutide tablet specifically for obesity or weight loss. Rybelsus (oral semaglutide 14mg) is FDA-approved only for type 2 diabetes. Novo Nordisk\'s 50mg oral semaglutide for obesity (branded as oral Wegovy) showed ~15.1% weight loss in the OASIS-1 trial and is pending FDA approval.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Rybelsus and is it the same as Ozempic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rybelsus is the oral tablet form of semaglutide, approved for type 2 diabetes. Ozempic is the injectable form of semaglutide, also approved for type 2 diabetes. Both contain the same active ingredient (semaglutide) but use different delivery methods and dosing protocols. Wegovy is a higher-dose injectable semaglutide approved for obesity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does Rybelsus have to be taken on an empty stomach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rybelsus uses SNAC (sodium N-[8-(2-hydroxybenzoyl) amino] caprylate) technology to enable oral absorption. SNAC works by transiently raising local gastric pH, enabling semaglutide to pass through the gastric mucosa. Food and large amounts of water disrupt this mechanism, reducing absorption significantly. Taking it with more than 4oz of water or within 30 minutes of eating can reduce bioavailability by up to 50%.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you get compounded oral semaglutide tablets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some 503A compounding pharmacies prepare oral semaglutide tablets, but without the proprietary SNAC absorption technology used in Rybelsus, bioavailability is approximately 1% — essentially the same as if you just swallowed semaglutide without any enhancer. Compounded sublingual (under-tongue) semaglutide claims 10-30% absorption but lacks randomized controlled trial data confirming equivalent efficacy to injectable.',
          },
        },
        {
          '@type': 'Question',
          name: 'When will the oral Wegovy pill be available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Novo Nordisk's oral semaglutide 50mg for obesity (oral Wegovy) completed the OASIS-1 phase 3 trial, showing ~15.1% weight loss at 68 weeks. As of May 2026, FDA approval is pending. No confirmed approval date has been announced. The oral formulation will use the same SNAC technology as Rybelsus.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best option for semaglutide if I cannot inject?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "If you cannot or won't use injections, your options in May 2026 are: (1) Wait for oral Wegovy FDA approval (no confirmed timeline); (2) Ask your physician about Rybelsus off-label if you have type 2 diabetes or want to discuss the T2D-approved dose; (3) Explore compounded sublingual semaglutide drops through a telehealth provider — absorption is unproven vs. injectable but better than compounded tablets. Injectable compounded semaglutide from providers like Strut Health starts at $99/month and remains the most clinically supported affordable option.",
          },
        },
      ],
    },
  ],
};

export default function SemaglutideTabletsPage() {
  return (
    <GLP1Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GLP1Header />
      <MedicalDisclaimerBanner />

      <main className="max-w-4xl mx-auto px-4 py-8 pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li aria-hidden="true" className="mx-1">/</li>
            <li>
              <Link href="/semaglutide" className="hover:text-blue-600">Semaglutide</Link>
            </li>
            <li aria-hidden="true" className="mx-1">/</li>
            <li className="text-gray-700 font-medium" aria-current="page">Semaglutide Tablets</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          Semaglutide Tablets 2026: Rybelsus, Oral Wegovy & Compounded Options
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Updated May 6, 2026 · By{' '}
          <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">Chad Simpson</Link>
        </p>

        <EditorialReviewBox />

        {/* Answer-first box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Quick Answer</p>
              <p className="text-blue-800 text-sm leading-relaxed">
                The only FDA-approved semaglutide tablet is <strong>Rybelsus (14mg)</strong> — and it is approved
                only for <strong>type 2 diabetes</strong>, not weight loss or obesity. An oral Wegovy pill (50mg)
                for obesity is in late-stage development and FDA approval is pending as of May 2026. Compounded
                oral semaglutide tablets exist but lack the SNAC absorption technology that makes Rybelsus work,
                limiting bioavailability to ~1%.
              </p>
            </div>
          </div>
        </div>

        {/* Rybelsus section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Rybelsus: The Only Approved Semaglutide Tablet
          </h2>
          <p className="text-gray-700 mb-4">
            Rybelsus is Novo Nordisk's oral semaglutide tablet, FDA-approved in September 2019 for adults with
            type 2 diabetes. It is the same active compound as Ozempic and Wegovy — semaglutide — but reformulated
            for oral use using proprietary SNAC (sodium N-[8-(2-hydroxybenzoyl) amino] caprylate) absorption
            technology.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rybelsus Dosing Protocol</h3>
          <ul className="space-y-2 mb-5">
            {[
              '3mg daily for the first 30 days (dose initiation)',
              '7mg daily for at least 30 days (maintenance)',
              '14mg daily if additional glycemic control needed (maximum dose)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5">
            <p className="font-semibold text-amber-900 text-sm mb-1">Critical Administration Rule</p>
            <p className="text-amber-800 text-sm">
              Take Rybelsus on an empty stomach with no more than 4 oz (120 mL) of plain water. Wait at least
              30 minutes before eating, drinking anything else, or taking other oral medications. Food, large
              amounts of water, or other drinks can reduce absorption by up to 50%. The SNAC absorber requires
              a very specific gastric environment to work.
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            Despite being the same molecule as Ozempic, Rybelsus at 14mg produces lower peak plasma
            concentrations than injectable semaglutide. In trials, Rybelsus reduced HbA1c by ~1.4% and
            produced modest weight loss (~4.4 lbs at 14mg). It is <strong>not approved for obesity
            management</strong> and the clinical weight loss seen is substantially less than what Wegovy
            injectable produces (~15% of body weight).
          </p>
        </section>

        {/* Oral Wegovy pipeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Oral Wegovy (50mg): The Obesity Pill in the Pipeline
          </h2>
          <p className="text-gray-700 mb-4">
            Novo Nordisk has been developing a higher-dose oral semaglutide formulation specifically for
            obesity. The OASIS-1 phase 3 trial enrolled 667 adults with obesity (BMI ≥30) and no diabetes.
            Key results at 68 weeks:
          </p>
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { label: 'Average weight loss', value: '~15.1%' },
              { label: 'Trial duration', value: '68 weeks' },
              { label: 'Daily dose', value: '50mg oral' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            The 15.1% weight loss at 68 weeks approaches (but doesn't fully match) the ~17.4% seen with
            weekly injectable Wegovy at 68 weeks in STEP-1. The oral pill uses the same SNAC technology
            as Rybelsus, just at a higher dose and optimized for obesity indication.
          </p>
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-800 text-sm mb-1">FDA Approval Status (May 2026)</p>
            <p className="text-gray-700 text-sm">
              Novo Nordisk has submitted the oral semaglutide 50mg obesity indication for FDA review. No
              confirmed approval date has been announced as of May 2026. When approved, it will likely be
              branded as oral Wegovy or a variant name.
            </p>
          </div>
        </section>

        {/* Compounded options */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compounded Oral Semaglutide: What's Available and What to Know
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Compounded Oral Tablets</h3>
          <p className="text-gray-700 mb-4">
            Some 503A compounding pharmacies prepare oral semaglutide tablets or capsules. The critical
            limitation: these formulations do not contain SNAC. Without SNAC, semaglutide's oral
            bioavailability is approximately <strong>1%</strong> — meaning 99% of the dose is degraded
            in the GI tract before reaching systemic circulation. This is not a compounding quality
            issue; it is a fundamental pharmacokinetics problem. The SNAC technology in Rybelsus is
            proprietary to Novo Nordisk and is what makes oral semaglutide work at all.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5">
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-red-800 text-sm">
                Compounded semaglutide oral tablets without SNAC are not recommended as a clinical
                alternative to injectable semaglutide. At ~1% bioavailability, even a high-dose compounded
                tablet delivers negligible active drug.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Compounded Sublingual Semaglutide</h3>
          <p className="text-gray-700 mb-4">
            Sublingual (under-the-tongue) semaglutide drops bypass the GI tract by absorbing through
            the oral mucosa. Some telehealth providers claim 10–30% bioavailability with sublingual
            formulations — significantly better than oral tablets without SNAC. However, there are
            no published randomized controlled trials directly comparing sublingual compounded semaglutide
            to injectable semaglutide for weight loss outcomes. The absorption estimate comes from
            pharmacokinetic modeling, not head-to-head outcome data.
          </p>
          <p className="text-gray-700 mb-5">
            TMates offers a confirmed sublingual semaglutide formulation. If you need an injection-free
            semaglutide option today and can't wait for oral Wegovy approval, sublingual is the most
            evidence-adjacent non-injectable route currently available.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Semaglutide Oral Options Compared
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Option</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">FDA Status</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Indication</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Bioavailability</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Est. Price/Mo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Rybelsus 14mg (brand)',
                    status: 'FDA Approved',
                    statusColor: 'text-green-700',
                    indication: 'Type 2 Diabetes only',
                    bio: '~1% (SNAC-enabled ~0.4–1%)',
                    price: '$800–$1,000 (retail)',
                  },
                  {
                    name: 'Oral Wegovy 50mg (pipeline)',
                    status: 'Pending FDA',
                    statusColor: 'text-amber-700',
                    indication: 'Obesity (when approved)',
                    bio: '~1% (SNAC-enabled)',
                    price: 'TBD',
                  },
                  {
                    name: 'Compounded oral tablet',
                    status: 'Not FDA Approved',
                    statusColor: 'text-red-700',
                    indication: 'Off-label / physician Rx',
                    bio: '~1% (no SNAC)',
                    price: '$100–$200',
                  },
                  {
                    name: 'Compounded sublingual',
                    status: 'Not FDA Approved',
                    statusColor: 'text-red-700',
                    indication: 'Off-label / physician Rx',
                    bio: '~10–30% (claimed, no RCT)',
                    price: '$100–$200',
                  },
                  {
                    name: 'Compounded injectable',
                    status: 'Not FDA Approved',
                    statusColor: 'text-orange-700',
                    indication: 'Off-label / physician Rx',
                    bio: '~100% (subcutaneous)',
                    price: '$99–$250',
                  },
                ].map((row) => (
                  <tr key={row.name} className="even:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">{row.name}</td>
                    <td className={`p-3 border border-gray-200 font-medium ${row.statusColor}`}>{row.status}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.indication}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.bio}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Prices are estimates as of May 2026. Bioavailability figures from published pharmacokinetic literature and provider claims.
          </p>
        </section>

        {/* Provider recommendations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Practical Recommendation: What to Do in May 2026
          </h2>
          <p className="text-gray-700 mb-6">
            If you want semaglutide for weight loss and prefer not to inject, your decision depends
            on your timeline and risk tolerance. Here's what's available from telehealth providers now:
          </p>

          <div className="space-y-4">
            {/* Strut Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Strut Health</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">Best Value</span>
                </div>
                <VerifiedPricingBadge price="$99/mo" />
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-3">
                Compounded injectable semaglutide starting at $99/month. Not a tablet, but if efficacy
                is your priority and the needle is the main barrier — Strut is the most affordable
                clinical-grade entry point. Physician-supervised, includes titration support.
              </p>
              <a
                href={buildGlp1AffiliateUrl('strut-health', 'semaglutide-tablets')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                See Strut Health Plans <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* TMates */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-gray-900">TMates</h3>
                <VerifiedPricingBadge price="$158/mo" />
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-3">
                Offers confirmed sublingual semaglutide — the closest to a true oral option currently
                available outside of Rybelsus. If avoiding injections is non-negotiable, TMates is
                the provider to start with for sublingual.
              </p>
              <a
                href={buildGlp1AffiliateUrl('tmates', 'semaglutide-tablets')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                See TMates Plans <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Eden */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-gray-900">Eden Health</h3>
                <VerifiedPricingBadge price="$229–$249/mo" />
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-3">
                Compounded injectable semaglutide with a comprehensive physician-supervised program.
                Higher price point but includes more clinical touchpoints.
              </p>
              <a
                href={buildGlp1AffiliateUrl('eden', 'semaglutide-tablets')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                See Eden Plans <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Embody */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-gray-900">Embody</h3>
                <VerifiedPricingBadge price="$149 first month" />
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-3">
                Offers GLP-1 gum as an adjunct option alongside standard compounded semaglutide programs.
                Introductory pricing makes it worth evaluating alongside TMates for non-injectable preferences.
              </p>
              <a
                href={buildGlp1AffiliateUrl('embody', 'semaglutide-tablets')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                See Embody Plans <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Is there a semaglutide pill for weight loss?',
                a: "As of May 2026, no. The only FDA-approved oral semaglutide is Rybelsus (14mg), which is approved for type 2 diabetes — not obesity. Oral Wegovy (50mg) for obesity is in late-stage development with FDA approval pending.",
              },
              {
                q: 'What is Rybelsus and is it the same as Ozempic?',
                a: "Rybelsus and Ozempic both contain semaglutide, but Rybelsus is a daily oral tablet and Ozempic is a weekly injection. Both are approved for type 2 diabetes. Wegovy is the higher-dose weekly injectable approved for obesity.",
              },
              {
                q: 'Why does Rybelsus have to be taken on an empty stomach?',
                a: "Rybelsus uses SNAC technology to penetrate the gastric mucosa. Food and excess water disrupt the gastric pH environment that SNAC requires, reducing absorption by up to 50%. You must take it with no more than 4oz of water and wait 30 minutes before eating anything.",
              },
              {
                q: 'Can you get compounded oral semaglutide tablets?',
                a: "Yes, some 503A pharmacies compound oral semaglutide. However, without SNAC technology, bioavailability is approximately 1% — making them clinically insufficient compared to injectable. Compounded sublingual drops offer better (though unproven by RCT) absorption.",
              },
              {
                q: 'When will the oral Wegovy pill be available?',
                a: "Novo Nordisk's 50mg oral semaglutide for obesity has completed the OASIS-1 phase 3 trial (~15.1% weight loss at 68 weeks). FDA approval is pending as of May 2026 with no confirmed date.",
              },
              {
                q: 'What is the best option for semaglutide if I cannot inject?',
                a: "Your best non-injectable option today is sublingual compounded semaglutide (TMates offers this). For the highest-efficacy option regardless of route, compounded injectable from Strut Health at $99/mo is the strongest clinical choice. Wait for oral Wegovy FDA approval if you want an evidence-backed pill.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-5 py-3">
                  <p className="font-semibold text-gray-900">{faq.q}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
          <ul className="space-y-2">
            {[
              { href: '/wegovy-pill', label: 'Wegovy Pill: When Will It Be Available?' },
              { href: '/wegovy-pill-vs-injection', label: 'Wegovy Pill vs. Injection: What the Data Shows' },
              { href: '/sublingual-semaglutide', label: 'Sublingual Semaglutide: Does It Work?' },
              { href: '/oral-semaglutide-vs-injection', label: 'Oral vs. Injectable Semaglutide: Bioavailability Compared' },
              { href: '/cheapest-semaglutide-online', label: 'Cheapest Semaglutide Online 2026' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline text-sm"
                >
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <StickyMobileCTA
        href={buildGlp1AffiliateUrl('strut-health', 'semaglutide-tablets')}
        brandName="Strut Health"
        pricePitch="Compounded semaglutide from $99/mo — no insurance needed"
      />
      <GLP1Footer />
    </GLP1Layout>
  );
}
