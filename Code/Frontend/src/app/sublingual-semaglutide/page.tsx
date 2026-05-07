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
import {
  ArrowRight,
  Check,
  X,
  AlertCircle,
  ExternalLink,
  Droplets,
  Syringe,
  FlaskConical,
  Award,
  ShieldAlert,
} from 'lucide-react';

// =============================================================================
// /sublingual-semaglutide  (4,000 vol, KD 19, Tier A)
// =============================================================================
// Targets patients exploring needle-free semaglutide options — specifically the
// "under the tongue" drops/liquid format offered by a handful of 503A compounders.
// High purchase intent: patients have already decided on semaglutide and are
// comparing delivery methods.
//
// Key facts:
// - Sublingual = under the tongue; held 30-60s, absorbed through oral mucosa
// - Theoretical bioavailability advantage vs swallowed oral (Rybelsus ~1%)
//   but compounded sublingual bioavailability is UNVERIFIED — no published RCTs
// - Some compounders claim 10-30% bioavailability; no peer-reviewed data
// - Injectable semaglutide: ~94% bioavailability — gold standard for weight loss
// - Available via: TMates (confirmed sublingual option), DirectMeds (verify)
// - FDA: no approved sublingual semaglutide product; 503A compounding status
// - Best use case: patients with documented needle phobia who understand the
//   bioavailability tradeoff vs injectable
// =============================================================================

export const metadata: Metadata = {
  title: 'Sublingual Semaglutide 2026: Under-Tongue Drops vs Injectable | GLP1CompareHub',
  description:
    'Sublingual semaglutide (under-tongue drops) compared to injectable. What the bioavailability research actually says, which providers offer it, and whether it\'s right for you.',
  alternates: { canonical: 'https://glp1comparehub.com/sublingual-semaglutide' },
  openGraph: {
    title: 'Sublingual Semaglutide: Does Under-Tongue Dosing Work?',
    description:
      'Compounded sublingual semaglutide has no published clinical trials. Here\'s what we know about bioavailability, who offers it, and when it makes sense vs the injectable.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/sublingual-semaglutide',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Compounded Semaglutide',
      item: 'https://glp1comparehub.com/compounded-semaglutide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Sublingual Semaglutide',
      item: 'https://glp1comparehub.com/sublingual-semaglutide',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sublingual Semaglutide: Under-Tongue Drops vs Injectable for Weight Loss',
  description:
    'Compounded sublingual semaglutide compared to injectable on bioavailability, evidence, and cost. Which providers offer sublingual, and when does it make clinical sense?',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/sublingual-semaglutide' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is sublingual semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sublingual semaglutide is a compounded liquid or drop formulation of semaglutide that is placed under the tongue and held for 30–60 seconds before swallowing. The goal is to absorb semaglutide through the oral mucosa (the tissue under the tongue), bypassing some of the digestive degradation that limits the bioavailability of swallowed oral semaglutide tablets. It is not an FDA-approved formulation — it is prepared by 503A compounding pharmacies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sublingual semaglutide as effective as the injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no published randomized controlled trials comparing compounded sublingual semaglutide to injectable semaglutide for weight loss. Injectable semaglutide has approximately 94% subcutaneous bioavailability, which is well-established. Sublingual bioavailability of semaglutide is not formally studied — compounders claim 10–30%, but these figures are not peer-reviewed. Until head-to-head trials exist, patients should understand the injectable remains the evidence-based choice for weight loss outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the bioavailability of sublingual vs injectable semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Injectable semaglutide has approximately 94% subcutaneous bioavailability — this is well-documented in published pharmacokinetic studies. Swallowed oral semaglutide (Rybelsus) has approximately 1% bioavailability with strict fasting. Sublingual semaglutide occupies a theoretical middle ground: some absorption through the oral mucosa, but the actual bioavailability in humans is not established in peer-reviewed literature. Compounders cite 10–30% estimates, but this is not verified clinical data.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I take sublingual semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sublingual semaglutide is placed under the tongue using a dropper or measured dose. It is held under the tongue for 30–60 seconds to allow absorption through the oral mucosa, then swallowed. Taking it on an empty stomach is generally recommended to maximize any absorption. Specific protocols vary by compounding pharmacy — follow the instructions provided with your prescription.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which telehealth providers offer sublingual semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMates is among the few telehealth providers that explicitly offers compounded sublingual semaglutide alongside their injectable option. DirectMeds also offers sublingual/oral formats — verify availability directly. Most providers (Strut Health, Eden Health, Embody) focus primarily on injectable compounded semaglutide, which has stronger evidence for weight loss outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sublingual semaglutide FDA approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. There is no FDA-approved sublingual semaglutide product. Sublingual semaglutide is a 503A compounding pharmacy preparation. The FDA-approved semaglutide products are: Rybelsus (oral tablet, type 2 diabetes), Ozempic (injection, type 2 diabetes), and Wegovy (injection, obesity). Compounded formulations are legal under 503A pharmacy regulations but are not FDA-approved and lack the clinical trial data of the branded products.',
      },
    },
  ],
};

export default function SublingualSemaglutidePage() {
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'sublingual-semaglutide');
  const directmedsUrl = buildGlp1AffiliateUrl('directmeds', 'sublingual-semaglutide');
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'sublingual-semaglutide');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'sublingual-semaglutide');

  return (
    <GLP1Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA
        href={tmatesUrl}
        brandName="TMates"
        pricePitch="Sublingual semaglutide from $158/month"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-semaglutide" className="hover:underline text-blue-600">Compounded Semaglutide</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Sublingual Semaglutide</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Alternative Delivery Format
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Sublingual Semaglutide: What You Need to Know Before Choosing Under-Tongue Drops
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Compounded sublingual semaglutide — placed under the tongue for absorption — appeals to
            patients who want to avoid needles. But the bioavailability claims are unverified by
            peer-reviewed research, and only a handful of telehealth providers offer it. Here&apos;s
            the honest breakdown.
          </p>

          {/* Verdict box */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <Droplets className="text-teal-600 mt-0.5 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-teal-900 text-base mb-1">
                  The honest answer: sublingual is better than swallowed oral, but injectable still wins
                </p>
                <p className="text-sm text-teal-700 leading-relaxed">
                  Sublingual delivery bypasses some of the GI degradation that makes swallowed oral
                  semaglutide so inefficient (~1% bioavailability). But no published clinical trials
                  confirm how much sublingual semaglutide actually absorbs. Injectable semaglutide
                  delivers ~94% of the dose — with over 5 years of clinical trial evidence behind it.
                  Sublingual is a reasonable option for patients with true needle phobia who are
                  willing to accept an uncertain bioavailability tradeoff.
                </p>
              </div>
            </div>
          </div>

          {/* Format comparison pills */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs mb-4">
            <div className="border rounded-xl p-3 bg-red-50 border-red-200">
              <p className="font-semibold text-red-800 mb-0.5">Swallowed Oral</p>
              <p className="text-2xl font-bold text-red-700 mb-0.5">~1%</p>
              <p className="text-red-600">bioavailability</p>
              <p className="text-red-500 text-xs mt-1">(Rybelsus, strict fasting)</p>
            </div>
            <div className="border-2 rounded-xl p-3 bg-teal-50 border-teal-300">
              <p className="font-semibold text-teal-800 mb-0.5">Sublingual Drops</p>
              <p className="text-2xl font-bold text-teal-700 mb-0.5">~10–30%?</p>
              <p className="text-teal-600">claimed</p>
              <p className="text-teal-500 text-xs mt-1">(no published RCTs)</p>
            </div>
            <div className="border-2 rounded-xl p-3 bg-blue-50 border-blue-300">
              <p className="font-semibold text-blue-800 mb-0.5">Injectable</p>
              <p className="text-2xl font-bold text-blue-700 mb-0.5">~94%</p>
              <p className="text-blue-600">bioavailability</p>
              <p className="text-blue-500 text-xs mt-1">(subcutaneous, verified)</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic text-center mb-2">
            Injectable bioavailability: Blundell et al., 2022 (pharmacokinetic studies). Sublingual claims: compounder literature only; no peer-reviewed human PK data.
          </p>
        </section>

        {/* ── What Is Sublingual Semaglutide ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Sublingual Semaglutide Works</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sublingual means &ldquo;under the tongue.&rdquo; The route is well-established for certain drugs
            (nitroglycerin, buprenorphine) where rapid or enhanced mucosal absorption is needed.
            The principle: tissue under the tongue has a dense capillary network that can absorb
            some molecules directly into the bloodstream, bypassing the liver&apos;s first-pass metabolism
            and GI degradation.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For semaglutide — a large peptide molecule — the jury is out on how effective this route is.
            Peptides are generally too large to cross mucosal membranes efficiently, which is why the
            branded oral semaglutide (Rybelsus) still only achieves ~1% bioavailability even with
            Novo Nordisk&apos;s proprietary absorption enhancer (SNAC). Sublingual compounded semaglutide
            doesn&apos;t use SNAC — it relies on direct mucosal absorption, and no peer-reviewed pharmacokinetic
            study has confirmed how much actually makes it into circulation.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <FlaskConical className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-amber-900 mb-1">The SNAC gap</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Rybelsus (Novo Nordisk&apos;s oral semaglutide) uses a proprietary absorption enhancer called
                  sodium N-[8-(2-hydroxybenzoyl)amino]caprylate (SNAC) that locally raises gastric pH
                  and facilitates absorption. Even with SNAC, bioavailability is only ~1%.{' '}
                  <strong>Compounded sublingual drops don&apos;t contain SNAC</strong> — their mechanism
                  relies purely on mucosal absorption without a verified enhancer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How to Take It ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Take Sublingual Semaglutide</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Protocol varies by compounding pharmacy, but the standard approach:
          </p>
          <ol className="space-y-3 mb-5">
            {[
              { step: '1', text: 'Take on an empty stomach (morning, before food or other medications)' },
              { step: '2', text: 'Measure the prescribed dose using the provided dropper or syringe (no needle — just the oral syringe)' },
              { step: '3', text: 'Place the drops under the tongue, ideally against the sublingual vein' },
              { step: '4', text: 'Hold for 30–60 seconds — don\'t swallow immediately' },
              { step: '5', text: 'Swallow any remaining liquid' },
              { step: '6', text: 'Wait 15–30 minutes before eating (per your pharmacy\'s instructions)' },
            ].map(({ step, text }) => (
              <li key={step} className="flex items-start gap-3">
                <span className="bg-teal-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step}
                </span>
                <span className="text-sm text-gray-700">{text}</span>
              </li>
            ))}
          </ol>
          <p className="text-gray-600 text-sm italic">
            Note: This is a general protocol. Always follow the specific instructions provided by
            your prescribing physician and compounding pharmacy.
          </p>
        </section>

        {/* ── Head-to-Head Table ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Sublingual vs Injectable: Full Comparison</h2>
            <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-3 font-semibold">Feature</th>
                  <th className="text-center px-3 py-3 font-semibold">
                    <span className="flex items-center justify-center gap-1"><Droplets size={14} /> Sublingual Drops</span>
                  </th>
                  <th className="text-center px-3 py-3 font-semibold bg-blue-700">
                    <span className="flex items-center justify-center gap-1"><Syringe size={14} /> Injectable</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Needle required', 'No', 'Yes (small, 4mm, once weekly)'],
                  ['Bioavailability', '~10-30% (claimed, unverified)', '~94% (verified in published studies)'],
                  ['Clinical trial evidence for weight loss', 'None for compounded sublingual form', 'Extensive (STEP-1, SUSTAIN trials)'],
                  ['Dosing schedule', 'Daily or weekly (varies)', 'Once weekly'],
                  ['Fasting required', 'Recommended on empty stomach', 'No'],
                  ['Available without insurance', 'Yes (compounded 503A)', 'Yes (compounded 503A)'],
                  ['Price range', '$158–$300+/month', '$99–$299/month'],
                  ['Providers offering it', 'TMates, DirectMeds (limited)', 'Strut, TMates, Eden, Embody, many more'],
                  ['FDA approval status', 'Not FDA-approved (compounded)', 'Not FDA-approved (compounded formulation)'],
                  ['Best for', 'True needle phobia, informed patients', 'Most patients — best evidence base'],
                ].map(([feature, sub, inj], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2.5 font-medium text-gray-700">{feature}</td>
                    <td className="px-3 py-2.5 text-center text-gray-600">{sub}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700 bg-blue-50 font-medium">{inj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Honest Evidence Review ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Evidence Actually Shows</h2>
          <div className="space-y-4">
            <div className="border border-green-200 rounded-xl p-4 bg-green-50">
              <div className="flex items-start gap-2">
                <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-green-900 text-sm mb-1">What is established</p>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Injectable semaglutide produces ~14.9% weight loss at 68 weeks (STEP-1 trial, NEJM 2021)</li>
                    <li>• Sublingual routes are effective for certain peptide drugs (e.g., oxytocin, desmopressin)</li>
                    <li>• Semaglutide is degraded in the GI tract — the sublingual route plausibly reduces some of this degradation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-amber-200 rounded-xl p-4 bg-amber-50">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-amber-900 text-sm mb-1">What is not established</p>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• No published pharmacokinetic study confirms sublingual bioavailability of compounded semaglutide</li>
                    <li>• No randomized controlled trials compare sublingual vs injectable semaglutide for weight loss</li>
                    <li>• Compounder claims of 10–30% bioavailability are not backed by peer-reviewed human data</li>
                    <li>• Semaglutide is a large peptide molecule — mucosal absorption of large peptides is inherently limited</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-red-200 rounded-xl p-4 bg-red-50">
              <div className="flex items-start gap-2">
                <ShieldAlert className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-red-900 text-sm mb-1">Bottom line on efficacy</p>
                  <p className="text-sm text-red-800">
                    Sublingual semaglutide may work for some patients — but &ldquo;may work&rdquo; is not the same
                    as &ldquo;evidence-based.&rdquo; If weight loss is your primary goal and you can tolerate needles
                    (the weekly Wegovy/compounded injection needle is 4mm and essentially painless for most
                    people), the injectable remains the most evidence-supported choice. Sublingual makes
                    sense for patients with documented needle phobia who have been informed of the tradeoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Providers That Offer Sublingual Semaglutide
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            Fewer telehealth providers offer sublingual than injectable. Prices verified or estimated
            May 2026 — confirm current availability directly with each provider.
          </p>
          <div className="space-y-4">
            {/* TMates */}
            <div className="border-2 border-teal-200 rounded-xl p-5 bg-teal-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">TMates</span>
                    <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Sublingual Confirmed
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Editor&apos;s Pick
                    </span>
                  </div>
                  <p className="text-teal-700 font-semibold text-sm mb-1">From $158/month (12-mo plan)</p>
                  <p className="text-xs text-gray-600 mb-2">
                    TMates explicitly offers both injectable and sublingual oral semaglutide options.
                    One of the few telehealth providers that lets you choose your delivery format at intake.
                    Strong patient support and highest EPC on Katalys ($16.09).
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Sublingual + injectable options</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> 6.43% Katalys conversion rate</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Physician-supervised program</li>
                  </ul>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Options <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* DirectMeds */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">DirectMeds</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Verify Availability
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">Pricing: verify directly</p>
                  <p className="text-xs text-gray-600 mb-2">
                    DirectMeds has historically offered sublingual/oral semaglutide formats alongside
                    injectables. Verify current sublingual availability directly — offerings can change
                    based on 503A pharmacy status and FDA guidance.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Oral/sublingual formats historically available</li>
                    <li className="flex items-center gap-1"><AlertCircle size={10} className="text-amber-500" /> Confirm current availability at signup</li>
                  </ul>
                </div>
                <a
                  href={directmedsUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  Check Availability <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Strut — injectable only */}
            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Strut Health</span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Injectable Only
                    </span>
                  </div>
                  <p className="text-green-700 font-semibold text-sm mb-1">From $99/month (injectable)</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Strut offers injectable compounded semaglutide — the lowest-cost option we&apos;ve verified.
                    They do not currently offer sublingual semaglutide, but if you&apos;re open to injectable
                    and cost is a priority, Strut is our top recommendation.
                  </p>
                </div>
                <a
                  href={strutUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Injectable Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">
            Affiliate disclosure: GLP1CompareHub earns a commission if you click through and enroll.
            See{' '}
            <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>.
          </p>
        </section>

        {/* ── Who Should Choose Sublingual ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Who Is Sublingual Right For?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-teal-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Consider sublingual if:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Documented needle phobia that would prevent consistent weekly injection compliance',
                  'You\'ve tried and not tolerated the weekly injection format',
                  'Your physician supports the sublingual route based on your medical history',
                  'You understand and accept the lower (and unverified) bioavailability tradeoff',
                  'You\'re comfortable with daily dosing rather than once-weekly',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-teal-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-blue-200 rounded-xl p-5 bg-blue-50">
              <h3 className="font-semibold text-gray-900 mb-3">Stick with injectable if:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Maximum weight loss efficacy is your primary goal',
                  'You can manage a small once-weekly injection (most patients do fine)',
                  'You want the format with the most clinical evidence',
                  'You want more provider options and potentially lower cost ($99 vs $158+)',
                  'You\'re managing a serious obesity-related health condition (T2D, cardiovascular)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-blue-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Links ── */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide 2026: Full Guide' },
              { href: '/oral-semaglutide-vs-injection', label: 'Oral vs Injectable Semaglutide: Key Differences' },
              { href: '/best-compounded-semaglutide', label: 'Best Compounded Semaglutide Providers 2026' },
              { href: '/semaglutide-with-b12', label: 'Semaglutide with B12: Does It Help?' },
              { href: '/tirzepatide-vs-semaglutide', label: 'Tirzepatide vs Semaglutide: Which Is Stronger?' },
              { href: '/oral-tirzepatide', label: 'Oral Tirzepatide: Sublingual and Gum Options' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-colors text-sm text-gray-700"
              >
                <ArrowRight size={14} className="text-teal-500 flex-shrink-0" />
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
