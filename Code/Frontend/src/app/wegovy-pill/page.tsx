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
import { ArrowRight, Check, X, AlertCircle, ExternalLink, Award } from 'lucide-react';

// =============================================================================
// /wegovy-pill  (37,000 vol, KD 41, Tier A)
// Searcher intent: Is there a Wegovy pill? When? How does it compare to injection?
//
// Key facts:
// - As of May 2026: NO approved Wegovy pill (oral branded obesity semaglutide)
// - Wegovy = injection-only (2.4mg weekly SubQ), approved 2021
// - Rybelsus = oral sema 14mg, approved for T2D ONLY — NOT obesity
// - Oral sema 50mg for obesity (OASIS-1): FDA review pending as of publication
// - OASIS-1: ~15.1% wt loss at 68 wks; STEP-1 (injectable): ~14.9% at 68 wks
// - Fasting constraint: empty stomach + 4oz water + 30-min wait before food/drink
// - Compounded injectable semaglutide = practical NOW alternative, from $99/mo
// =============================================================================

export const metadata: Metadata = {
  title: 'Wegovy Pill 2026: OASIS-1 Trial Data + What\'s Available Now',
  description:
    'No FDA-approved Wegovy pill exists as of May 2026. Oral semaglutide 50mg is in FDA review after OASIS-1 (−15.1% at 68 weeks). Compounded injectable semaglutide from $99/month is available now.',
  alternates: { canonical: 'https://glp1comparehub.com/wegovy-pill' },
  openGraph: {
    title: 'Is There a Wegovy Pill in 2026? OASIS-1 Trial Data + What You Can Get Now',
    description:
      'No approved Wegovy pill as of May 2026. Oral sema 50mg showed −15.1% weight loss in OASIS-1 but is still in FDA review. Compounded injectable semaglutide is available from $99/mo.',
    url: 'https://glp1comparehub.com/wegovy-pill',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630, alt: 'Wegovy Pill 2026 — GLP1CompareHub' }],
  },
  twitter: { card: 'summary_large_image' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Semaglutide', item: 'https://glp1comparehub.com/compounded-semaglutide' },
    { '@type': 'ListItem', position: 3, name: 'Wegovy Pill', item: 'https://glp1comparehub.com/wegovy-pill' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is There a Wegovy Pill in 2026? OASIS-1 Data + What\'s Available Now',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/wegovy-pill' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a Wegovy pill available in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. As of May 2026, there is no FDA-approved Wegovy pill. Wegovy remains an injectable medication (semaglutide 2.4mg, once-weekly subcutaneous injection). Novo Nordisk studied a high-dose oral semaglutide (50mg/day) for obesity in the OASIS-1 trial, and the FDA review is pending — but it has not been approved. Do not confuse this with Rybelsus (oral semaglutide 3/7/14mg), which is approved only for type 2 diabetes, not obesity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What did the OASIS-1 trial show about the Wegovy pill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The OASIS-1 trial studied oral semaglutide 50mg/day for obesity management over 68 weeks. Participants achieved approximately 15.1% average body weight reduction, compared to approximately 2.4% in the placebo group. This result closely mirrors the STEP-1 trial for injectable Wegovy 2.4mg/week (approximately 14.9% weight loss at 68 weeks), suggesting comparable efficacy between oral and injectable formats at the studied doses.',
      },
    },
    {
      '@type': 'Question',
      name: 'When will the Wegovy pill be approved by the FDA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FDA review of oral semaglutide 50mg for obesity management is pending as of May 2026. Novo Nordisk submitted the NDA following positive OASIS-1 trial results. FDA PDUFA dates are typically 10–12 months from submission. Confirm current approval status through FDA.gov or your prescribing physician, as this is subject to change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fasting requirement for oral semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oral semaglutide requires strict daily fasting compliance: take on a completely empty stomach using no more than 4 ounces (120 mL) of plain water, then wait at least 30 minutes before eating, drinking anything other than water, or taking other medications. Even small deviations — such as taking it with coffee or eating within 30 minutes — can reduce drug absorption by 50–80%. This is a significant daily lifestyle constraint compared to a once-weekly injection that requires no fasting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get compounded oral semaglutide for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded pharmacies cannot replicate the branded Wegovy pill formulation. The oral semaglutide tablet uses SNAC (sodium N-[8-(2-hydroxybenzoyl) amino] caprylate) technology to enhance absorption — this is a proprietary excipient system. Compounded oral or sublingual semaglutide preparations exist, but have not been tested for equivalent bioavailability or efficacy compared to the Novo Nordisk formulation. If you want semaglutide for weight loss now, compounded injectable semaglutide (from $99/mo) is the accessible alternative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded injectable semaglutide a good alternative while waiting for the Wegovy pill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For patients seeking semaglutide-based weight loss now, compounded injectable semaglutide is the most accessible option. It contains the same active ingredient as branded Wegovy/Ozempic injections, is available through telehealth providers without insurance from $99–$249/month, and has the same once-weekly injection schedule as branded Wegovy. It is NOT FDA-approved and is produced under 503A/503B compounding pharmacy frameworks. Always discuss with a prescribing physician before starting.',
      },
    },
  ],
};

export default function WegovyPillPage() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'wegovy-pill');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'wegovy-pill');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'wegovy-pill');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'wegovy-pill');

  return (
    <GLP1Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <RelatedGuides currentPath="/wegovy-pill" priorityCluster="semaglutide" />
      <StickyMobileCTA
        href={strutUrl}
        brandName="Strut Health"
        pricePitch="Compounded injectable semaglutide from $99/mo — available now"
      />

      {/* Affiliate disclosure */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-4 py-2 text-xs text-center text-amber-800">
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission
          if you enroll — at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline">Full disclosure</Link>.
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-semaglutide" className="hover:underline text-blue-600">Semaglutide</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Wegovy Pill</li>
          </ol>
        </nav>

        {/* Hero */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Semaglutide Format Guide
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Is There a Wegovy Pill? 2026 Status, OASIS-1 Data &amp; What&apos;s Available Now
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            You&apos;ve heard about a Wegovy pill. Novo Nordisk did develop one — and the clinical trial data
            is impressive. But as of May 2026, it has not been FDA-approved. Here&apos;s what the science
            shows, when approval might come, and how to access semaglutide for weight loss today.
          </p>

          {/* Quick answer box */}
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-amber-900 text-base mb-1">
                  Quick answer: No approved Wegovy pill as of May 2026
                </p>
                <ul className="text-sm text-amber-800 space-y-1.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>No FDA-approved oral Wegovy (branded obesity semaglutide) exists today</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Rybelsus (oral sema) is FDA-approved for type 2 diabetes — NOT obesity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Oral semaglutide 50mg for obesity is in FDA review after strong OASIS-1 results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Compounded injectable semaglutide from $99/mo is available <strong>now</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FDA Approval Status Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Semaglutide Formulations: FDA Approval Status (May 2026)
          </h2>
          <p className="text-gray-600 mb-5 text-sm leading-relaxed">
            There are multiple semaglutide-based products — and their approval status, indications, and
            availability differ significantly. Understanding the landscape is the first step.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-3 font-semibold">Product</th>
                  <th className="text-left px-3 py-3 font-semibold">Status</th>
                  <th className="text-left px-3 py-3 font-semibold">Indication</th>
                  <th className="text-left px-3 py-3 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-3 py-3">
                    <div className="font-medium text-gray-900">Wegovy (injectable, 2.4mg/week)</div>
                    <div className="text-xs text-gray-500 mt-0.5">Novo Nordisk · SubQ injection</div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      <Check size={10} /> FDA Approved (2021)
                    </span>
                  </td>
                  <td className="px-3 py-3 text-gray-700">Obesity + cardiovascular risk reduction</td>
                  <td className="px-3 py-3 text-gray-700">~$1,300–$1,400/mo (no insurance)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-medium text-gray-900">Rybelsus (14mg oral tablet)</div>
                    <div className="text-xs text-gray-500 mt-0.5">Novo Nordisk · Once-daily oral</div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      <Check size={10} /> FDA Approved (2019)
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <span className="font-semibold text-red-700">Type 2 diabetes ONLY — NOT obesity</span>
                  </td>
                  <td className="px-3 py-3 text-gray-700">~$800–$1,000/mo (no insurance)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-3">
                    <div className="font-medium text-gray-900">Oral semaglutide 50mg (obesity)</div>
                    <div className="text-xs text-gray-500 mt-0.5">Novo Nordisk · &ldquo;Wegovy pill&rdquo; · Once-daily oral</div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      <AlertCircle size={10} /> FDA Review Pending
                    </span>
                  </td>
                  <td className="px-3 py-3 text-gray-700">Obesity / weight management</td>
                  <td className="px-3 py-3 text-gray-700">Not yet available for purchase</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="font-medium text-gray-900">Compounded injectable semaglutide</div>
                    <div className="text-xs text-gray-500 mt-0.5">503A/503B pharmacy · SubQ injection</div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      <Check size={10} /> 503A legal — see note
                    </span>
                  </td>
                  <td className="px-3 py-3 text-gray-700">Obesity (off-label via telehealth Rx)</td>
                  <td className="px-3 py-3 text-gray-700">
                    <span className="font-semibold text-green-700">$99–$249/mo</span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-3">
                    <div className="font-medium text-gray-900">Compounded oral/sublingual semaglutide</div>
                    <div className="text-xs text-gray-500 mt-0.5">503A pharmacy · drops, troches</div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      <AlertCircle size={10} /> 503A limited — see note
                    </span>
                  </td>
                  <td className="px-3 py-3 text-gray-700">Varies by pharmacy / formulation</td>
                  <td className="px-3 py-3 text-gray-700">Varies; limited bioavailability data</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic">
            503A note: FDA enforcement discretion for telehealth-scale compounding of semaglutide copies ended
            April 1, 2026. 503A pharmacies may still compound patient-specific formulations with documented
            clinical justification. Confirm availability with your telehealth provider.
            See our <Link href="/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide guide</Link> for full regulatory detail.
          </p>
        </section>

        {/* OASIS-1 vs STEP-1 Trial Comparison */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            OASIS-1 vs STEP-1: Does the Pill Actually Work?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            The short answer: yes, the data is compelling. The oral 50mg formulation came remarkably close
            to matching the injection&apos;s weight loss in a head-to-head look at the two trials — despite
            semaglutide having only ~1% oral bioavailability compared to ~94% for the injection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {/* OASIS-1 */}
            <div className="border border-amber-200 rounded-xl p-5 bg-amber-50">
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-amber-600" size={18} />
                <span className="font-semibold text-amber-900">OASIS-1 — Oral 50mg Sema</span>
              </div>
              <div className="space-y-2 text-sm text-amber-800">
                <div className="flex justify-between">
                  <span>Drug</span>
                  <span className="font-medium">Oral semaglutide 50mg/day</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-medium">68 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Fasting required</span>
                  <span className="font-semibold text-red-700">Yes — daily, strict</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span>Avg weight loss</span>
                  <span className="font-bold text-2xl text-amber-900">~15.1%</span>
                </div>
                <div className="flex justify-between">
                  <span>vs placebo</span>
                  <span className="font-medium">Placebo: ~2.4%</span>
                </div>
                <div className="flex justify-between">
                  <span>GI side effects</span>
                  <span className="font-medium">Nausea ~80%</span>
                </div>
              </div>
            </div>

            {/* STEP-1 */}
            <div className="border-2 border-blue-200 rounded-xl p-5 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-blue-600" size={18} />
                <span className="font-semibold text-blue-900">STEP-1 — Injectable Wegovy</span>
                <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">Approved</span>
              </div>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex justify-between">
                  <span>Drug</span>
                  <span className="font-medium">Sema 2.4mg/week injection</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-medium">68 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Fasting required</span>
                  <span className="font-semibold text-green-700">No</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span>Avg weight loss</span>
                  <span className="font-bold text-2xl text-blue-900">~14.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>vs placebo</span>
                  <span className="font-medium">Placebo: ~2.4%</span>
                </div>
                <div className="flex justify-between">
                  <span>GI side effects</span>
                  <span className="font-medium">Nausea ~74%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-2">
              <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-green-800 leading-relaxed">
                <strong>Key finding:</strong> The oral 50mg semaglutide achieved comparable weight loss to
                injectable Wegovy (15.1% vs 14.9%) at the same 68-week timepoint. The pill used a 50× higher
                mg dose to compensate for ~1% oral bioavailability, achieving similar plasma semaglutide
                concentrations through SNAC absorption technology.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">
            Sources: OASIS-1 trial (Knop et al., NEJM 2023); STEP-1 trial (Wilding et al., NEJM 2021).
            These are separate Novo Nordisk-sponsored trials with different patient populations and enrollment
            criteria — not a direct head-to-head randomized comparison between formulations.
          </p>
        </section>

        {/* The Fasting Constraint */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Fasting Problem: A Significant Daily Lifestyle Constraint
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            The OASIS-1 weight loss numbers are impressive — but they come with a compliance requirement
            that the injection doesn&apos;t have. Oral semaglutide only absorbs properly under strict
            fasting conditions. Every single morning, for as long as you&apos;re on the medication.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
            <p className="font-semibold text-orange-900 mb-3">Oral semaglutide dosing protocol (required every day)</p>
            <ol className="text-sm text-orange-800 space-y-2 list-decimal list-inside">
              <li>Take on a <strong>completely empty stomach</strong> — first thing after waking</li>
              <li>Use <strong>no more than 4 oz (120 mL) of plain water</strong> — no coffee, juice, or other beverages</li>
              <li>Wait <strong>at least 30 minutes</strong> before eating, drinking anything other than water, or taking other medications</li>
              <li>Do this <strong>without exception, every day</strong> for consistent drug exposure</li>
            </ol>
            <p className="text-xs text-orange-700 mt-3 italic">
              Research shows that taking oral semaglutide with food reduces absorption by approximately 50–80%.
              Even drinking coffee within 30 minutes meaningfully reduces plasma drug levels.
            </p>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Compare that to the injectable: once-weekly subcutaneous injection, taken at any time of day,
            no fasting required, no morning timing constraint. For patients who are consistent with
            injection compliance, the practical daily burden strongly favors the injection.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Factor</th>
                  <th className="text-center px-3 py-2 font-semibold text-gray-700">Oral Sema (pill)</th>
                  <th className="text-center px-3 py-2 font-semibold text-blue-700 bg-blue-50">Injectable Wegovy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Dosing frequency', 'Daily', 'Once weekly'],
                  ['Fasting requirement', '30 min daily, every day', 'None'],
                  ['Morning routine impact', 'Restructures breakfast timing', 'No impact'],
                  ['Coffee before dose', 'Not allowed', 'Allowed anytime'],
                  ['Compliance forgiveness', 'Low — missed fast = reduced effect', 'High — weekly window'],
                  ['Travel / schedule disruption', 'Difficult to maintain protocol', 'Easy — one shot per week'],
                ].map(([factor, oral, inj], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2.5 font-medium text-gray-700">{factor}</td>
                    <td className="px-3 py-2.5 text-center text-gray-600">{oral}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700 bg-blue-50 font-medium">{inj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SNAC Technology — brief */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Can Oral Semaglutide Work at All? (SNAC Technology)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Semaglutide is a peptide — proteins and peptides are normally destroyed by stomach acid and
            digestive enzymes before they can reach the bloodstream. Novo Nordisk solved this with a
            specialized absorption enhancer called <strong>SNAC</strong> (sodium N-[8-(2-hydroxybenzoyl)
            amino] caprylate). SNAC temporarily raises the local pH in the stomach and forms a protective
            lipophilic microenvironment around the semaglutide molecule, allowing a small percentage of the
            dose to cross the gastric mucosa directly into circulation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The result: ~1% bioavailability compared to ~94% for subcutaneous injection. This is why the
            oral tablet requires 50mg to match what a 2.4mg injection delivers — and why the fasting
            protocol is non-negotiable. SNAC is proprietary to Novo Nordisk&apos;s formulation; compounded
            oral semaglutide preparations do not use the same technology and cannot replicate the same
            absorption profile.
          </p>
        </section>

        {/* Why Wegovy Pill Will Cost More Than Injection */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why the Wegovy Pill Will Likely Cost More Than the Injection
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Branded injectable Wegovy already costs approximately $1,300–$1,400/month without insurance.
            The oral formulation will almost certainly be priced at or above that level for several reasons:
          </p>
          <ul className="space-y-3 text-gray-700 text-sm mb-4">
            {[
              'Novo Nordisk incurred substantial R&D and clinical trial costs specific to the oral formulation — these will be recouped through pricing',
              'SNAC technology manufacturing is more complex than a standard injectable auto-injector pen',
              'Daily oral dosing (365 units per year) vs weekly injection (52 units per year) means higher raw material costs even at 1% bioavailability',
              'Brand drugs maintain premium pricing at launch; there is no incentive to price below the existing injection market',
              'Compounding pharmacies cannot legally replicate the SNAC formulation, so there is no compounded alternative to the pill',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <AlertCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <Check size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>The cost-access gap:</strong> Compounded injectable semaglutide ($99–$249/mo)
                will remain the lower-cost semaglutide option even after the Wegovy pill launches — because
                the pill cannot be compounded. Patients without insurance coverage for branded GLP-1s will
                still find injectable compounding to be the most accessible path.
              </p>
            </div>
          </div>
        </section>

        {/* What's Available Right Now */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            What&apos;s Available RIGHT NOW: Compounded Injectable Semaglutide
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            The Wegovy pill is in FDA review. While you wait — or if you&apos;re looking for a
            lower-cost alternative to branded Wegovy — compounded injectable semaglutide is the
            practical option. Same active ingredient as Wegovy/Ozempic, once-weekly injection,
            no fasting required. Prices verified May 2026.
          </p>
          <div className="flex items-center justify-end mb-3">
            <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
          </div>

          <div className="space-y-4">

            {/* Strut Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 text-base">Strut Health</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Cheapest — $99/mo
                    </span>
                  </div>
                  <p className="text-green-700 font-semibold text-sm mb-1">From $99/month</p>
                  <p className="text-xs text-gray-500 mb-2">$99/mo auto-refill · $119/mo month-to-month</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Lowest verified entry price in our active provider stack. Async physician review
                    (no video visit required), LegitScript-certified, HIPAA-compliant, 2-day shipping.
                    Best for cost-sensitive patients who want to start semaglutide without waiting for
                    the pill approval.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> $99/mo — lowest verified price</li>
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> No video visit required</li>
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> Ships to most US states (excl. AK)</li>
                  </ul>
                </div>
                <a
                  href={strutUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* TMates */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 text-base">TMates</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      $158/mo annual
                    </span>
                  </div>
                  <p className="text-blue-700 font-semibold text-sm mb-1">From $158/month (12-month plan)</p>
                  <p className="text-xs text-gray-500 mb-2">$249/mo · 6 mo $175/mo · 12 mo $158/mo</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Highest-rated provider in our affiliate stack. Same price across all semaglutide
                    doses — no titration upcharge. Offers both injectable and oral sublingual formats,
                    making it one of the few telehealth providers with a needle-free semaglutide option
                    while the branded pill awaits approval.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> Injectable + oral sublingual available</li>
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> Same price at all dose levels</li>
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> Highest EPC in Katalys stack ($16.09)</li>
                  </ul>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Embody */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 text-base">Embody</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      $149 first month
                    </span>
                  </div>
                  <p className="text-purple-700 font-semibold text-sm mb-1">$149 first month / $299 flat ongoing</p>
                  <p className="text-xs text-gray-500 mb-2">Intro month $149 · All subsequent months $299 flat</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Unique GLP-1 gum format — the only provider in our stack with a daily chew option
                    for patients who want to avoid needles while the Wegovy pill remains unapproved.
                    Also offers traditional compounded injectable semaglutide at a flat rate with no
                    dose-titration upcharges.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> GLP-1 gum format — no needle, no fasting</li>
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> Flat-rate $299/mo ongoing (all doses)</li>
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> $149 intro first month</li>
                  </ul>
                </div>
                <a
                  href={embodyUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Eden Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 text-base">Eden Health</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Widest medication menu
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">$229–$249/month</p>
                  <p className="text-xs text-gray-500 mb-2">Compounded sema $229–$249/mo · branded Ozempic/Wegovy also available via insurance</p>
                  <p className="text-sm text-gray-600 mb-3">
                    The only provider in our stack offering both compounded and branded GLP-1 options
                    side-by-side — useful if you want to start compounded and eventually switch to
                    branded Wegovy (injectable or pill) once insurance covers it. Also has the broadest
                    wellness menu including NAD+, peptides, and hormones.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> Only provider offering branded + compounded side-by-side</li>
                    <li className="flex items-center gap-1.5"><Check size={11} className="text-green-500" /> Insurance pathways for branded Ozempic/Wegovy</li>
                    <li className="flex items-center gap-1.5"><AlertCircle size={11} className="text-amber-500" /> $229–$249/mo compounded — higher than TMates/Strut</li>
                  </ul>
                </div>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gray-700 hover:bg-gray-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

          </div>
          <p className="text-xs text-gray-400 mt-3 italic">
            Compounded semaglutide is NOT FDA-approved. It is produced under 503A/503B pharmacy frameworks.
            Pricing verified May 2026 but subject to change. Affiliate disclosure: GLP1CompareHub earns a
            commission on signups — see{' '}
            <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{item.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/wegovy-pill-vs-injection', label: 'Wegovy Pill vs Injectable: Full Comparison' },
              { href: '/cheapest-semaglutide-online', label: 'Cheapest Semaglutide Online: $99/Month' },
              { href: '/sublingual-semaglutide', label: 'Sublingual Semaglutide Guide' },
              { href: '/oral-semaglutide-vs-injection', label: 'Oral vs Injectable Semaglutide' },
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide 2026 Guide' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-gray-700"
              >
                <ArrowRight size={14} className="text-blue-500 flex-shrink-0" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />

      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
