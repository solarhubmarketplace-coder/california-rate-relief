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
  ArrowLeft,
  ArrowRight,
  Check,
  Award,
  AlertCircle,
  ExternalLink,
  Calendar,
  Microscope,
} from 'lucide-react';

// =============================================================================
// /compare/ivim-health-vs-eden-health  (KD low, branded comparison SERP)
// =============================================================================
// Ivim Health vs Eden Health:
// Ivim Health = microdosing specialist, customized titration protocols. Pricing
//   not confirmed via direct crawl — site returned partial data. Affiliate
//   program not publicly listed (direct outreach pending). VERIFY flags applied
//   to all Ivim pricing cells.
// Eden Health = comprehensive metabolic panel included, $229–$249/mo sema,
//   $229–$299/mo tirz (Gronk-verified May 2026). Active Katalys program ($300 CPA).
//
// Editorial CTA: Eden Health (verified pricing immediately available)
// =============================================================================

export const metadata: Metadata = {
  title: 'Ivim Health vs Eden Health 2026: Microdosing vs Metabolic Monitoring | GLP1CompareHub',
  description:
    'Ivim Health vs Eden Health compared: microdosing/customized titration protocols vs comprehensive metabolic bloodwork. Verified pricing for Eden Health; Ivim pricing requires direct verification. Updated May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/ivim-health-vs-eden-health' },
  openGraph: {
    title: 'Ivim Health vs Eden Health 2026: Which GLP-1 Program Fits You?',
    description:
      'Ivim Health specializes in customized microdosing protocols. Eden Health includes metabolic bloodwork at $229/mo. Head-to-head comparison, May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/ivim-health-vs-eden-health',
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
      name: 'Compare Providers',
      item: 'https://glp1comparehub.com/compare',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Ivim Health vs Eden Health',
      item: 'https://glp1comparehub.com/compare/ivim-health-vs-eden-health',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Ivim Health vs Eden Health 2026: Customized Microdosing vs Comprehensive Metabolic Monitoring',
  description:
    'Head-to-head comparison of Ivim Health (microdosing/customized titration specialist) and Eden Health (metabolic bloodwork included). Eden Health pricing verified; Ivim pricing requires direct verification.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: {
    '@type': 'Person',
    name: 'Chad Simpson',
    url: 'https://glp1comparehub.com/author/chad-simpson',
  },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/compare/ivim-health-vs-eden-health',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is GLP-1 microdosing and why does Ivim Health specialize in it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GLP-1 microdosing refers to starting at sub-therapeutic doses (typically well below the standard starting dose of semaglutide 0.25mg or tirzepatide 2.5mg) and titrating upward more slowly than standard protocols. The rationale is that some patients experience severe GI side effects (nausea, vomiting, diarrhea) on standard titration schedules, while very slow titration can maintain efficacy with significantly improved tolerability. Ivim Health has built its clinical positioning around individualized microdosing protocols — customizing starting dose and titration speed to patient response rather than following a fixed schedule. This is particularly relevant for patients who have tried standard GLP-1 programs and discontinued due to side effects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the starting price for Ivim Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health\'s pricing structure requires direct verification. Our records show a program fee of approximately $74.99 plus a monthly medication cost from around $75/mo, but this data is not confirmed via a live site crawl or Gronk verification as of May 2026. We recommend visiting ivimhealth.com directly and completing their intake questionnaire to get a personalized price quote. We apply VERIFY flags to all Ivim pricing in our comparison tables. Eden Health pricing is Gronk-verified at $229–$249/mo for semaglutide and $229–$299/mo for tirzepatide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ivim Health or Eden Health include bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health includes a comprehensive metabolic panel (CMP) as part of its standard program — this is a key differentiator. Ivim Health\'s lab policy requires direct verification; customized protocols may or may not include baseline bloodwork depending on plan tier. If metabolic monitoring is a priority, Eden Health is the verified choice between these two.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which provider is better for patients who had side effects on standard GLP-1 doses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health is specifically positioned for this patient population. Its microdosing and customized titration approach is designed for patients who experienced intolerable nausea, vomiting, or GI distress on standard compounded GLP-1 programs — where the provider adapts the protocol to the individual rather than applying a one-size-fits-all schedule. Eden Health uses a more standard titration protocol but includes metabolic monitoring. For patients with previous side-effect history specifically, Ivim Health\'s customization focus makes it the more relevant option — once pricing is confirmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Eden Health a good option while I research Ivim Health\'s pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health is our recommended starting point if you want to begin a GLP-1 program now, since its pricing ($229–$249/mo sema, $229–$299/mo tirz) is fully Gronk-verified and an active Katalys affiliate program confirms the program is live and actively enrolling patients. If you have a specific interest in Ivim Health\'s microdosing protocols, we recommend contacting Ivim directly to get a personalized quote before committing to either program.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Ivim Health compare to Eden Health for tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health\'s tirzepatide pricing is Gronk-verified at $229–$299/mo. Ivim Health\'s tirzepatide pricing requires direct verification — we cannot confirm a specific monthly cost from our current data. The clinical distinction remains: Ivim Health customizes the titration protocol to patient tolerance; Eden Health follows a more standardized schedule but includes metabolic bloodwork. For tirzepatide specifically, both providers offer compounded formulations, but only Eden Health has confirmed pricing you can evaluate without completing an intake questionnaire first.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  ivim: string;
  eden: string;
  winner?: 'ivim' | 'eden' | 'tie';
  ivimVerify?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    ivim: 'VERIFY (program fee ~$74.99 + med cost ~$75+/mo)',
    eden: '$229–$249/mo (Gronk-verified)',
    winner: 'eden',
    ivimVerify: true,
  },
  {
    label: 'Compounded Tirzepatide',
    ivim: 'VERIFY (availability not confirmed)',
    eden: '$229–$299/mo (Gronk-verified)',
    winner: 'eden',
    ivimVerify: true,
  },
  {
    label: 'First-month intro price',
    ivim: 'VERIFY',
    eden: '$149 intro month',
    winner: 'eden',
    ivimVerify: true,
  },
  {
    label: 'Metabolic bloodwork included',
    ivim: 'VERIFY',
    eden: 'Yes — comprehensive metabolic panel',
    winner: 'eden',
    ivimVerify: true,
  },
  {
    label: 'Microdosing / custom titration',
    ivim: 'Yes — core clinical differentiator',
    eden: 'Standard titration protocol',
    winner: 'ivim',
  },
  {
    label: 'Titration protocol',
    ivim: 'Individualized — adapts to patient tolerance',
    eden: 'Standardized schedule',
    winner: 'ivim',
  },
  {
    label: 'Physician consult included',
    ivim: 'Yes',
    eden: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Cancel anytime',
    ivim: 'VERIFY',
    eden: 'Yes',
    winner: 'eden',
    ivimVerify: true,
  },
  {
    label: 'Affiliate program status',
    ivim: 'Not publicly listed (direct outreach pending)',
    eden: 'ACTIVE — Katalys offer #1435, $300+ CPA',
    winner: 'tie',
  },
  {
    label: 'Editorial pick for',
    ivim: 'Patients with prior GI side effects / need custom protocol',
    eden: 'Verified pricing + metabolic monitoring',
    winner: 'tie',
  },
];

export default function IvimHealthVsEdenHealthPage() {
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'ivim-health-vs-eden-health');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'ivim-health-vs-eden-health');

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

      {/* Sticky mobile CTA — Eden Health (verified pricing) */}
      <StickyMobileCTA
        href={edenUrl}
        brandName="Eden Health"
        pricePitch="Verified pricing — from $149 intro, labs included"
      />

      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
            <Link
              href="/providers"
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-glp1-charcoal/70 hover:text-glp1-charcoal"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Providers
            </Link>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-orange">
              <Award className="h-3.5 w-3.5" /> Head-to-Head Comparison
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Ivim Health vs Eden Health 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two distinct approaches to compounded GLP-1 therapy: Ivim Health specializes in
              microdosing and individualized titration protocols; Eden Health provides comprehensive
              metabolic bloodwork with verified pricing. Different programs for different patient needs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk + Katalys" />
            </div>

            {/* Ivim pricing caveat */}
            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Verification note — Ivim Health pricing:</strong> Our records show a
                  program fee (~$74.99) plus monthly medication cost (~$75+/mo), but this has not
                  been confirmed via a live site crawl or Gronk verification as of May 2026. We flag
                  all Ivim pricing cells as <strong>VERIFY</strong>. Visit{' '}
                  <strong>ivimhealth.com</strong> directly for a confirmed personal quote.
                  Eden Health pricing is fully Gronk-verified.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Ivim Health */}
              <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Ivim Health</h3>
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-800">
                    Microdosing Specialist
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: custom protocols, prior GI side effects
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Ivim Health is built around individualized titration — particularly microdosing
                  protocols for patients who struggled with standard GLP-1 programs. If you need a
                  customized protocol rather than a one-size-fits-all schedule, Ivim is the specialist.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Microdosing and customized titration — core clinical model</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Individualized protocol adapts to your tolerance</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Physician-supervised program</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing requires direct verification</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">
                      Affiliate program not publicly listed
                    </span>
                  </li>
                </ul>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Ivim Health (verify pricing) <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Eden Health */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Verified Pricing
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: metabolic monitoring, first-time patients
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Eden Health includes a comprehensive metabolic panel at $229/mo — one of the few
                  mid-tier providers with built-in lab monitoring. Intro month at $149. Fully verified.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      Semaglutide <strong>$229–$249/mo</strong> (Gronk-verified)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      Tirzepatide <strong>$229–$299/mo</strong> (Gronk-verified)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>
                      <strong>Metabolic bloodwork included</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>$149 intro month</span>
                  </li>
                </ul>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit Eden Health — labs included <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              Eden Health data is Gronk-verified May 2026. Ivim Health cells marked{' '}
              <span className="italic text-yellow-700 font-semibold">VERIFY</span> require direct
              confirmation at ivimhealth.com.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">
                      Dimension
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">
                      Ivim Health
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">
                      Eden Health
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'ivim'
                            ? 'font-semibold text-green-700'
                            : row.ivimVerify
                            ? 'italic text-yellow-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.ivim}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'eden'
                            ? 'font-semibold text-green-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.eden}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ MICRODOSING EXPLAINER ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              What Is GLP-1 Microdosing — and Who Needs It?
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 text-sm text-glp1-charcoal/85">
                  Standard compounded semaglutide protocols begin at 0.25mg weekly and escalate to
                  0.5mg, 1mg, 1.7mg, and 2.4mg over 16–24 weeks. This schedule works well for most
                  patients, but a meaningful subset — estimates run 15–30% of patients on standard
                  programs — discontinue early due to nausea, vomiting, or GI distress.
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/85">
                  GLP-1 microdosing takes a different approach: starting well below the standard
                  0.25mg dose (sometimes as low as 0.05mg) and titrating upward only when the patient
                  tolerates the current dose without significant side effects. The process is slower
                  — often 6–12 months to reach therapeutic dose — but produces markedly lower
                  discontinuation rates among side-effect-prone patients.
                </p>
                <p className="text-sm text-glp1-charcoal/85">
                  <strong>Ivim Health is built around this model.</strong> Their clinical positioning
                  is explicitly for patients who need individualized protocols rather than standardized
                  schedules.
                </p>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-glp1-orange" />
                  <h3 className="font-serif text-lg text-glp1-charcoal">
                    Who benefits from microdosing?
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-glp1-charcoal/85">
                  {[
                    'Patients who discontinued a previous GLP-1 program due to nausea or vomiting',
                    'Patients with GI sensitivity or a history of IBS or gastric issues',
                    'Older patients or those with lower body weight where standard doses may be disproportionately strong',
                    'Patients on medications that interact with GI motility',
                    'Anyone who wants a slower, more conservative onboarding to GLP-1 therapy',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-glp1-charcoal/60">
                  Not medical advice. Discuss titration protocols with a licensed provider who has
                  reviewed your full medical history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHO SHOULD PICK WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Who Should Pick Which?</h2>

            <div className="space-y-5">
              <div className="rounded-lg border-l-4 border-purple-400 bg-purple-50/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Consider Ivim Health if:
                </h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You have tried a compounded GLP-1 before and discontinued due to GI side effects
                      — Ivim&rsquo;s microdosing model exists specifically for this patient profile.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want a customized titration schedule rather than a fixed-speed
                      protocol — Ivim adapts to your response, not a calendar.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You are willing to contact the provider directly to get verified pricing and
                      assess the protocol before starting.
                    </span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-xs text-yellow-900">
                  <strong>Pricing note:</strong> Verify Ivim Health pricing directly at ivimhealth.com
                  before committing — our data is not confirmed for this provider as of May 2026.
                </div>
              </div>

              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick Eden Health if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want fully verified pricing before starting the intake process — Eden
                      Health&rsquo;s $229–$249/mo sema and $229–$299/mo tirz are Gronk-confirmed.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      Metabolic bloodwork included is important to you — Eden Health provides clinical
                      monitoring that most mid-tier programs don&rsquo;t include.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You are a first-time GLP-1 patient and want a standard, physician-supervised
                      protocol with built-in metabolic oversight.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want the $149 intro month option to lower the cost of your first month.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ VERDICT ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">Our Verdict</h2>

            <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-6 shadow-sm">
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>
                  These are not competing programs — they serve different patient needs.
                </strong>{' '}
                Ivim Health is for patients who need customized microdosing protocols; Eden Health is
                for patients who want verified pricing, metabolic bloodwork, and a standard
                physician-supervised program.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>If you are choosing between the two today:</strong> Eden Health is our
                recommended starting point because pricing is fully Gronk-verified and the program is
                immediately enrollable via our active Katalys affiliate link. Ivim Health requires
                direct outreach to confirm pricing, which adds friction to the enrollment process.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                If Ivim Health&rsquo;s microdosing model is specifically what you need — because
                you&rsquo;ve struggled with side effects on standard programs — that clinical fit
                outweighs the pricing uncertainty. Visit ivimhealth.com directly, go through their
                intake, and compare the personalized quote to Eden Health&rsquo;s published pricing.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit Eden Health <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Ivim Health (verify pricing) <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((q) => (
                <details
                  key={q.name}
                  className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4"
                >
                  <summary className="cursor-pointer font-semibold text-glp1-charcoal">
                    {q.name}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-glp1-charcoal/85">
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>

            {/* Cross-links */}
            <div className="mt-10 border-t border-glp1-charcoal/10 pt-6">
              <p className="mb-4 text-sm font-semibold text-glp1-charcoal/70">Related comparisons</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/compare/medvi-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  MEDVi vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/skinnyrx-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  SkinnyRx vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/trimrx-vs-medvi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  TrimRx vs MEDVi <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/best-compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Best Compounded Tirzepatide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Compounded Tirzepatide Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-6 text-xs text-glp1-charcoal/50">
              <Link href="/affiliate-disclosure" className="underline">
                Affiliate disclosure
              </Link>{' '}
              · This page contains compensated links. We earn a commission if you enroll through our
              links — at no extra cost to you.
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
