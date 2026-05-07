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
  TrendingDown,
} from 'lucide-react';

// =============================================================================
// /compare/medvi-vs-ivim-health  (KD low, branded comparison SERP)
// =============================================================================
// MEDVi vs Ivim Health:
// MEDVi = $179–$299/mo Gronk-verified May 2026, 33K monthly brand searches,
//   editor's pick, Katalys affiliate pending (offer #1265, $228 CPA).
// Ivim Health = microdosing/customized titration specialist. Pricing not
//   confirmed via direct crawl or Gronk as of May 2026. VERIFY flags on all
//   Ivim pricing cells. Affiliate not publicly listed.
//
// Editorial pick: MEDVi (verified pricing, immediate enrollment available)
// Ivim editorial note: wins on microdosing/customization for side-effect-prone patients
// StickyMobileCTA: MEDVi
// =============================================================================

export const metadata: Metadata = {
  title: 'MEDVi vs Ivim Health 2026: Verified Pricing vs Microdosing Specialist | GLP1CompareHub',
  description:
    'MEDVi vs Ivim Health compared head-to-head: MEDVi wins on verified pricing ($179/mo, Gronk-confirmed). Ivim Health wins on microdosing and customized titration protocols. Which is right for you? Updated May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/medvi-vs-ivim-health' },
  openGraph: {
    title: 'MEDVi vs Ivim Health 2026: Which Compounded GLP-1 Program Fits You?',
    description:
      'MEDVi verified pricing from $179/mo. Ivim Health is the microdosing specialist for patients who struggled with standard protocols. Head-to-head, May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/medvi-vs-ivim-health',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://glp1comparehub.com/compare' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'MEDVi vs Ivim Health',
      item: 'https://glp1comparehub.com/compare/medvi-vs-ivim-health',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEDVi vs Ivim Health 2026: Verified Pricing vs Microdosing Specialist',
  description:
    'Head-to-head comparison of MEDVi (Gronk-verified pricing from $179/mo, editor\'s pick) and Ivim Health (microdosing and customized titration specialist). Ivim pricing requires direct verification.',
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
    '@id': 'https://glp1comparehub.com/compare/medvi-vs-ivim-health',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, MEDVi or Ivim Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi is the only provider in this comparison with confirmed pricing. MEDVi compounded semaglutide starts at $179/mo (full range $179–$249/mo, Gronk-verified May 2026) and tirzepatide runs $229–$299/mo. Ivim Health pricing is not confirmed through our verification process — their site shows a program fee (~$74.99) plus a monthly medication cost (~$75+/mo), but this data has not been confirmed via a live crawl or Gronk. Visit ivimhealth.com directly to get a personalized quote, then compare it against MEDVi\'s confirmed $179/mo entry rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEDVi or Ivim Health better for tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi offers compounded tirzepatide at $229–$299/mo (Gronk-verified). Ivim Health\'s tirzepatide availability and pricing require direct verification — we do not have confirmed data as of May 2026. From a clinical standpoint: MEDVi delivers tirzepatide on a standard titration schedule; Ivim Health customizes the titration protocol to individual patient tolerance. If you are starting tirzepatide for the first time and are not concerned about GI side effects, MEDVi\'s verified pricing is the cleaner choice. If you have a history of GI side effects on GLP-1 medications, Ivim\'s customized titration approach is worth investigating despite the pricing uncertainty.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Ivim Health\'s microdosing specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health specializes in individualized GLP-1 titration protocols — including microdosing, which starts patients at sub-therapeutic doses (well below the standard 0.25mg semaglutide starting dose) and titrates upward based on individual tolerance rather than a fixed calendar schedule. This approach is designed for patients who discontinued or struggled with standard compounded GLP-1 programs due to nausea, vomiting, or GI distress. The tradeoff is a longer ramp-up timeline to therapeutic doses (sometimes 6–12 months) in exchange for significantly better tolerability. MEDVi does not advertise a microdosing or custom titration model.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEDVi or Ivim Health include bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi does not include labs in its standard pricing — this is consistent with most mid-tier compounded GLP-1 programs. Ivim Health\'s lab policy requires direct verification. If metabolic bloodwork as a program inclusion is a priority, Eden Health is a verified option that explicitly includes a comprehensive metabolic panel at $229–$249/mo for semaglutide (see our Eden Health comparisons for detail).',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is MEDVi the editorial pick over Ivim Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi is our editorial pick in this comparison for two specific reasons: verified pricing and brand trust. MEDVi\'s $179–$299/mo range is Gronk-verified, and the program carries the highest organic brand search volume of any provider in our stack (33,000 monthly searches on "medvi"). Ivim Health\'s clinical model — customized microdosing — is genuinely differentiated and valuable for the right patient, but without confirmed pricing we cannot endorse it with equal specificity. This is not a quality judgment; it is a data availability judgment. Ivim Health may be the right fit for patients with prior GI side-effect history. The editorial pick defaults to the verified-pricing option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use MEDVi now and switch to Ivim Health later if I have side effects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — telehealth GLP-1 programs do not require long-term commitments and most allow cancellation at any time (MEDVi explicitly allows this). If you start MEDVi and experience intolerable GI side effects on the standard titration schedule, contacting Ivim Health about their microdosing protocols would be a logical next step. Patients who need customized titration often discover this after experiencing side effects on a standard program. MEDVi is a solid starting point if you have no prior GI side-effect history; Ivim Health is the specialist option if standard protocols have failed you. Confirm cancellation and transition terms directly with each provider before enrolling.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  medvi: string;
  ivim: string;
  winner?: 'medvi' | 'ivim' | 'tie';
  ivimVerify?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    medvi: '$179/mo (range $179–$249/mo)',
    ivim: 'VERIFY (program fee ~$74.99 + med ~$75+/mo, unconfirmed)',
    winner: 'medvi',
    ivimVerify: true,
  },
  {
    label: 'Compounded Tirzepatide',
    medvi: '$229–$299/mo (Gronk-verified)',
    ivim: 'VERIFY (availability not confirmed)',
    winner: 'medvi',
    ivimVerify: true,
  },
  {
    label: 'Metabolic bloodwork included',
    medvi: 'Not included',
    ivim: 'VERIFY',
    winner: 'tie',
    ivimVerify: true,
  },
  {
    label: 'Titration protocol',
    medvi: 'Standard schedule (fixed dose escalation)',
    ivim: 'Individualized — adapts to patient tolerance',
    winner: 'ivim',
  },
  {
    label: 'Microdosing option',
    medvi: 'Not advertised',
    ivim: 'Yes — core clinical differentiator',
    winner: 'ivim',
  },
  {
    label: 'Best patient fit',
    medvi: 'Standard first-time GLP-1 patients, price-sensitive',
    ivim: 'Patients with prior GI side effects / need custom protocol',
    winner: 'tie',
  },
  {
    label: 'Physician consult included',
    medvi: 'Yes',
    ivim: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Cancel anytime',
    medvi: 'Yes',
    ivim: 'VERIFY',
    winner: 'medvi',
    ivimVerify: true,
  },
  {
    label: 'Brand search volume (Ahrefs)',
    medvi: '~33,000/mo on "medvi" — highest in our stack',
    ivim: 'Moderate (specific volume data pending)',
    winner: 'medvi',
  },
  {
    label: 'Affiliate program status',
    medvi: 'Pending Katalys (offer #1265, $228 CPA)',
    ivim: 'Not publicly listed (direct outreach pending)',
    winner: 'tie',
  },
  {
    label: 'Pricing verification',
    medvi: 'Gronk-verified May 2026',
    ivim: 'NOT VERIFIED — check ivimhealth.com directly',
    winner: 'medvi',
    ivimVerify: true,
  },
];

export default function MedviVsIvimHealthPage() {
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'medvi-vs-ivim-health');
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'medvi-vs-ivim-health');

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

      {/* Sticky mobile CTA — MEDVi (verified pricing, editor's pick) */}
      <StickyMobileCTA
        href={medviUrl}
        brandName="MEDVi"
        pricePitch="Our pick — from $179/mo, verified pricing"
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
              MEDVi vs Ivim Health 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two compounded GLP-1 programs with distinct strengths. MEDVi wins on verified pricing
              ($179/mo confirmed) and brand trust (33K monthly searches). Ivim Health wins on
              customization — their microdosing protocols are purpose-built for patients who struggled
              with standard GLP-1 titration.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (MEDVi only)" variant="compact" />
            </div>

            {/* Ivim pricing caveat */}
            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Ivim Health pricing not confirmed:</strong> Our records indicate a program
                  fee (~$74.99) plus monthly medication cost (~$75+/mo), but this has not been
                  confirmed via live site crawl or Gronk verification as of May 2026. All Ivim pricing
                  cells are flagged{' '}
                  <span className="italic font-semibold">VERIFY</span>. Visit{' '}
                  <strong>ivimhealth.com</strong> to get a personalized quote. MEDVi pricing is fully
                  Gronk-verified.
                </div>
              </div>
            </div>

            {/* Quick verdict */}
            <div className="mt-4 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-4 text-sm text-glp1-charcoal/90">
              <strong>Quick verdict:</strong> MEDVi is our editorial pick for verified pricing and
              enrollability. Ivim Health is the specialist pick for patients who need a customized
              titration protocol — particularly anyone who has discontinued a prior GLP-1 program due
              to side effects.
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* MEDVi — editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">MEDVi</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Editor&rsquo;s Pick
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: lowest verified price + highest brand trust
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  MEDVi has the highest organic brand-search volume of any provider in our stack
                  (33K monthly) and Gronk-verified pricing starting at $179/mo. Standard
                  physician-supervised protocol covering semaglutide and tirzepatide.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Semaglutide from <strong>$179/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Tirzepatide <strong>$229–$299/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>33,000 monthly brand searches — largest patient base signal</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Cancel anytime, physician-supervised</span>
                  </li>
                </ul>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit MEDVi — from $179/mo <ExternalLink className="h-4 w-4" />
                </a>
              </div>

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
                  Ivim Health is built around individualized titration — including microdosing
                  protocols for patients who struggled with standard GLP-1 programs. Pricing requires
                  direct verification at ivimhealth.com.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Microdosing and customized titration — core clinical differentiator</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Protocol adapts to your tolerance, not a fixed calendar</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Physician-supervised program</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing requires direct verification</span>
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
            </div>
          </div>
        </section>

        {/* ============ FULL COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-2 text-sm text-glp1-charcoal/70">
              MEDVi data Gronk-verified May 2026. Ivim Health cells marked{' '}
              <span className="italic text-yellow-700 font-semibold">VERIFY</span> require direct
              confirmation at ivimhealth.com.
            </p>
            <div className="mb-6">
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (MEDVi)" variant="compact" />
            </div>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">MEDVi</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Ivim Health</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'medvi'
                            ? 'font-semibold text-green-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.medvi}
                      </td>
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
              What Ivim Health&rsquo;s Microdosing Model Actually Does
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 text-sm text-glp1-charcoal/85">
                  Standard compounded semaglutide protocols begin at 0.25mg weekly and escalate over
                  16–24 weeks to maintenance doses up to 2.4mg. This works for most patients, but a
                  meaningful subset — estimates range 15–30% — discontinue early due to nausea,
                  vomiting, or GI discomfort at the standard starting dose.
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/85">
                  Ivim Health&rsquo;s microdosing approach begins at sub-therapeutic doses (often as
                  low as 0.05mg) and titrates upward only when the patient tolerates the current dose
                  without significant side effects. The process is slower — 6–12 months to reach
                  therapeutic doses in some cases — but produces significantly better tolerability for
                  GI-sensitive patients.
                </p>
                <p className="text-sm text-glp1-charcoal/85">
                  MEDVi uses a standard titration model and does not advertise a microdosing option.
                  For most first-time GLP-1 patients with no GI side-effect history, the standard
                  schedule works well. The customization Ivim offers is a specialist service — not
                  necessary for everyone, but meaningfully better for the right patient.
                </p>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-glp1-orange" />
                  <h3 className="font-serif text-lg text-glp1-charcoal">
                    Who should consider Ivim&rsquo;s model?
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-glp1-charcoal/85">
                  {[
                    'Patients who stopped a prior GLP-1 program specifically due to nausea or vomiting on standard starting doses',
                    'Patients with diagnosed GI conditions (IBS, gastroparesis, GERD) who are concerned about tolerability',
                    'Patients on other medications that affect GI motility',
                    'Older adults or lower-weight patients where standard doses may feel disproportionately strong',
                    'Anyone who wants a conservative, patient-paced onboarding to GLP-1 therapy',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-glp1-charcoal/60">
                  Not medical advice. Discuss titration approach with a licensed provider who has
                  reviewed your full medical history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING SECTION ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              MEDVi Pricing — Verified
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Compounded Semaglutide</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Entry Price
                  </div>
                  <p className="mb-3 text-sm">
                    <strong>$179/mo</strong>
                  </p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Full Range
                  </div>
                  <p className="mb-3 text-sm">
                    <strong>$179–$249/mo</strong>
                  </p>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" />
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Compounded Tirzepatide</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Price Range
                  </div>
                  <p className="mb-3 text-sm">
                    <strong>$229–$299/mo</strong>
                  </p>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-yellow-300 bg-yellow-50 p-5">
              <div className="flex items-start gap-2">
                <TrendingDown className="h-5 w-5 shrink-0 text-yellow-700 mt-0.5" />
                <div>
                  <h4 className="mb-2 font-serif text-lg text-glp1-charcoal">
                    Ivim Health pricing: what we know and don&rsquo;t know
                  </h4>
                  <p className="text-sm text-glp1-charcoal/85">
                    Our data includes a program fee (~$74.99) and a monthly medication component
                    (~$75+/mo), suggesting a total that may be competitive with MEDVi at lower dose
                    tiers. However, these numbers have not been confirmed via a live crawl or Gronk,
                    and the pricing structure (separate fee vs. all-in monthly) differs from
                    MEDVi&rsquo;s flat monthly model, making direct comparison difficult. Visit{' '}
                    <strong>ivimhealth.com</strong>, complete their intake, and get a personalized
                    quote before comparing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHO SHOULD PICK WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Who Should Pick Which?</h2>

            <div className="space-y-5">
              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick MEDVi if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You are starting a GLP-1 program for the first time and have no prior GI
                      side-effect history — MEDVi&rsquo;s standard protocol is appropriate.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want verified, transparent pricing before starting an intake. MEDVi&rsquo;s
                      $179/mo is Gronk-confirmed and published.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want the provider with the strongest brand trust signal (33K monthly
                      searches) and the lowest mid-tier entry price.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want both semaglutide and tirzepatide available on one platform.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-purple-400 bg-purple-50/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Consider Ivim Health if:
                </h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You previously discontinued a GLP-1 program specifically because of nausea or
                      vomiting — Ivim&rsquo;s microdosing model is designed for exactly this patient.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You want a provider that adapts the titration protocol to your individual
                      tolerance rather than following a fixed schedule.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>
                      You are willing to complete Ivim&rsquo;s intake to get a verified price quote
                      before making a final decision.
                    </span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-xs text-yellow-900">
                  <strong>Pricing note:</strong> Verify Ivim Health pricing directly at ivimhealth.com
                  before committing — our data is not confirmed for this provider as of May 2026.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ VERDICT ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">Our Verdict</h2>

            <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-6 shadow-sm">
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>MEDVi is our editorial pick for this comparison.</strong> Gronk-verified
                pricing from $179/mo, the highest brand search volume in our stack (33K monthly), and
                a complete mid-tier program covering semaglutide and tirzepatide. For the majority of
                GLP-1 patients — those starting for the first time without a prior side-effect
                history — MEDVi is the clean, enrollable choice.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>Ivim Health is the specialist pick for the right patient.</strong> If you
                have tried a standard GLP-1 program and discontinued due to GI side effects, or if
                you have medical factors that make standard titration risky, Ivim&rsquo;s customized
                microdosing model is genuinely differentiated. The pricing uncertainty is the only
                friction — contact them directly to get a quote, then compare it against MEDVi&rsquo;s
                $179/mo.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                These are complementary programs for different patient profiles — not a quality-vs-quality
                decision. The editorial pick defaults to verified pricing and immediate enrollability.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit MEDVi — from $179/mo <ArrowRight className="h-4 w-4" />
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

            {/* Related pages */}
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
                  href="/compare/ivim-health-vs-eden-health"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Ivim Health vs Eden Health <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/skinnyrx-vs-medvi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  SkinnyRx vs MEDVi <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/trimrx-vs-medvi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  TrimRx vs MEDVi <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/microdosing-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Microdosing Tirzepatide Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/best-compounded-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Best Compounded Semaglutide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-6 text-xs text-glp1-charcoal/50">
              <Link href="/affiliate-disclosure" className="underline">
                Affiliate disclosure
              </Link>{' '}
              · This page contains compensated links. We may earn a commission if you enroll through
              our links — at no extra cost to you. MEDVi affiliate is pending Katalys approval
              (offer #1265, $228 CPA). Ivim Health affiliate program not publicly listed.
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
