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
import { ArrowRight, Check, X, Minus, ExternalLink, Award, AlertCircle } from 'lucide-react';

// =============================================================================
// /microdosing-glp-1-schedule  (600 vol, KD 4)
// =============================================================================
// Practical weekly scheduling guide for GLP-1 microdosing.
// Two main protocols: fixed micro-dose weekly, ultra-slow titration
// Sema schedule: 0.25mg → 0.5mg → 1.0mg → 1.7mg → 2.4mg (each step 4-8wk)
// Tirz schedule: 0.5mg → 1.25mg → 2.5mg → 5mg (each step 4-8wk)
// Side effect window: nausea peaks hours 4-12 post-injection
// Ivim Health = microdosing specialist (StickyMobileCTA)
// TMates ~$158/mo confirmed; MEDVi $179-299/mo confirmed
// =============================================================================

export const metadata: Metadata = {
  title: 'GLP-1 Microdosing Schedule 2026: Weekly Semaglutide & Tirzepatide Timing Guide | GLP1CompareHub',
  description:
    'Complete GLP-1 microdosing schedule guide: week-by-week semaglutide and tirzepatide dose tables, titration protocols, day-of-week timing, side effect windows, and when to pause. Updated May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/microdosing-glp-1-schedule' },
  openGraph: {
    title: 'GLP-1 Microdosing Schedule: Full 2026 Timing Guide',
    description:
      'Week-by-week microdosing schedule tables for both semaglutide and tirzepatide. Two protocols covered: fixed micro-dose and ultra-slow titration. Includes side-effect timing and pause criteria.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/microdosing-glp-1-schedule',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'GLP-1 Resources',
      item: 'https://glp1comparehub.com/learn',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Microdosing Schedule',
      item: 'https://glp1comparehub.com/microdosing-glp-1-schedule',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GLP-1 Microdosing Schedule 2026: Semaglutide and Tirzepatide Timing Protocols',
  description:
    'Detailed GLP-1 microdosing schedule guide covering both semaglutide and tirzepatide. Includes week-by-week dose tables, two protocol types, optimal injection timing for side-effect minimization, and when to pause.',
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
    '@id': 'https://glp1comparehub.com/microdosing-glp-1-schedule',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a GLP-1 microdosing schedule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A GLP-1 microdosing schedule is a structured plan for taking sub-standard or below-approved doses of semaglutide or tirzepatide on a weekly basis. It differs from the standard FDA titration schedule by either starting below the lowest approved dose or staying at each dose level significantly longer — 8–12 weeks per step instead of the standard 4 weeks. The goal is to allow slower GI adaptation, reduce nausea and other side effects, and find a maintenance dose that manages weight effectively with tolerable side effects. The schedule is always managed under physician supervision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should you stay at each microdose before going up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a standard titration, each dose step is typically 4 weeks. In a microdosing or extended-titration protocol, each step is stretched to 8–12 weeks — sometimes longer for patients who are highly GI-sensitive. There is no fixed minimum or maximum — the decision to advance depends on whether you are experiencing tolerable side effects at the current dose, whether you are seeing the desired clinical effect, and your prescriber\'s judgment. Do not advance to the next dose step independently; all titration decisions should be made with your prescribing physician.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a semaglutide and tirzepatide microdosing schedule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main differences are the starting dose and step increments. For semaglutide, the standard titration begins at 0.25mg/week; microdosing may start at the same dose but hold longer, or start below 0.25mg for extreme sensitivity. The semaglutide maintenance dose is typically 1.7mg or 2.4mg weekly. For tirzepatide, the standard titration begins at 2.5mg/week (Mounjaro protocol); microdosing often starts at 0.5mg or 1.25mg — below the standard starting dose — and holds each step for 8–12 weeks before advancing. Tirzepatide\'s dual GIP/GLP-1 mechanism can cause different side-effect patterns than semaglutide, and some patients find tirzepatide better tolerated even at therapeutic doses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you get weight loss results at microdoses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some patients report meaningful weight loss at sub-therapeutic doses, particularly when they are highly sensitive to GLP-1 effects. However, the largest weight-loss results in clinical trials were achieved at full therapeutic doses (2.4mg semaglutide weekly in STEP trials; 10–15mg tirzepatide weekly in SURMOUNT trials). Sub-therapeutic doses may produce partial suppression of appetite and modest weight loss, but achieving the 15–20% body weight reduction seen in trials typically requires reaching therapeutic dose levels. Patients who microdose for maintenance — after reaching goal weight at therapeutic dose — often report effective weight stability at lower doses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you stay on a microdose forever for maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some patients do use low-dose GLP-1 indefinitely for weight maintenance after reaching their goal weight at a higher dose. SURMOUNT-4 data for tirzepatide and STEP-4 for semaglutide both show that stopping GLP-1 treatment leads to significant weight regain — the medication addresses the appetite dysregulation rather than curing it. A low maintenance dose (e.g., 2.5mg tirzepatide or 0.5mg semaglutide weekly) may be appropriate for long-term weight maintenance, but this is an individualized clinical decision made with your physician based on your metabolic response, tolerability, and goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you track progress on a microdosing schedule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Track progress on a microdosing schedule by recording: weekly body weight at the same time and conditions (morning, after bathroom, before eating), injection date and dose each week, side effects experienced in the first 24–48 hours post-injection, and any noticeable changes in appetite or food intake patterns. Review with your prescriber every 4–8 weeks, or sooner if you experience significant adverse effects. Monthly waist circumference measurements are a useful supplement to weight since GLP-1 therapy often shifts body composition even when scale weight moves slowly.',
      },
    },
  ],
};

export default function MicroDosingGlp1SchedulePage() {
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'microdosing-glp-1-schedule');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'microdosing-glp-1-schedule');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'microdosing-glp-1-schedule');

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

      {/* Sticky mobile CTA — Ivim Health (microdosing specialist) */}
      <RelatedGuides currentPath="/microdosing-glp-1-schedule" priorityCluster="microdosing" />
      <StickyMobileCTA
        href={ivimUrl}
        brandName="Ivim Health"
        pricePitch="Microdosing specialist — individualized dosing protocols"
      />

      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-glp1-charcoal/60">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:text-glp1-charcoal">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/learn" className="hover:text-glp1-charcoal">GLP-1 Resources</Link></li>
                <li aria-hidden>/</li>
                <li className="text-glp1-charcoal/90">Microdosing Schedule</li>
              </ol>
            </nav>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              GLP-1 Microdosing Schedule
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Week-by-week dose tables for both semaglutide and tirzepatide microdosing protocols.
              Covers two main approaches — fixed micro-dose and ultra-slow titration — plus optimal
              injection timing to minimize side effects.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full border border-glp1-charcoal/20 bg-white px-3 py-1 text-glp1-charcoal/70">
                Covers semaglutide + tirzepatide
              </span>
              <span className="rounded-full border border-glp1-charcoal/20 bg-white px-3 py-1 text-glp1-charcoal/70">
                Two protocols covered
              </span>
              <span className="rounded-full border border-glp1-charcoal/20 bg-white px-3 py-1 text-glp1-charcoal/70">
                Side-effect timing guide included
              </span>
            </div>

            <div className="mt-5 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-yellow-700" />
                <p>
                  <strong>Clinical note:</strong> Microdosing schedules should be managed with a
                  licensed prescriber, not self-administered from a guide. The tables below are
                  educational references — all dose changes require physician oversight.
                </p>
              </div>
            </div>

            <div className="mt-3 text-xs text-glp1-charcoal/50">
              Updated May 6, 2026 &bull;{' '}
              <Link href="/affiliate-disclosure" className="underline hover:text-glp1-charcoal">Affiliate Disclosure</Link>
            </div>
          </div>
        </section>

        {/* ============ TWO PROTOCOLS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Two Main Microdosing Protocols
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              GLP-1 microdosing broadly refers to any approach that uses lower-than-standard doses
              or extends the time at each dose step significantly beyond the manufacturer&rsquo;s
              titration schedule. Two distinct protocols exist:
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <div className="mb-2 font-mono text-lg font-bold text-glp1-orange">Protocol 1</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Fixed Micro-Dose (Maintenance)
                </h3>
                <p className="mb-3 text-sm text-glp1-charcoal/80">
                  The patient takes the same sub-therapeutic dose every week indefinitely — either
                  for tolerance building, maintenance after reaching goal weight, or gradual
                  appetite suppression without full-dose side effects.
                </p>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Good for: post-goal weight maintenance</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Good for: GI-sensitive patients testing tolerance</span>
                  </li>
                  <li className="flex gap-2">
                    <X className="h-4 w-4 shrink-0 text-red-500" />
                    <span>Not typical for primary weight loss</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <div className="mb-2 font-mono text-lg font-bold text-glp1-orange">Protocol 2</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">
                  Ultra-Slow Titration
                </h3>
                <p className="mb-3 text-sm text-glp1-charcoal/80">
                  The same sequence of dose steps as the standard titration, but each step is held
                  for 8–12 weeks instead of 4 weeks — or the sequence starts below the lowest
                  approved dose. The endpoint is reaching therapeutic dose with far fewer side
                  effects en route.
                </p>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Good for: first-time GLP-1 users who are GI-sensitive</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Good for: older patients or those on multiple medications</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Still reaches therapeutic dose — just slower</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SEMAGLUTIDE SCHEDULE TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-3 font-serif text-3xl text-glp1-charcoal">
              Semaglutide Microdosing Schedule
            </h2>
            <p className="mb-5 text-sm text-glp1-charcoal/80 max-w-3xl">
              Standard Wegovy titration: 0.25mg → 0.5mg → 1.0mg → 1.7mg → 2.4mg, advancing every
              4 weeks. Microdosing stretches each step to 8–12 weeks, or starts below 0.25mg for
              highly sensitive patients. Both sequences use weekly injections.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Weekly Dose</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Standard Hold</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Microdose Hold</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5 bg-white">
                  {[
                    {
                      dose: '0.25mg',
                      standard: '4 weeks',
                      micro: '8–12 weeks',
                      note: 'Starting dose; lowest approved. Some start at 0.1–0.15mg for extreme sensitivity.',
                    },
                    {
                      dose: '0.5mg',
                      standard: '4 weeks',
                      micro: '8–12 weeks',
                      note: 'First step up. GI symptoms often peak at this transition.',
                    },
                    {
                      dose: '1.0mg',
                      standard: '4 weeks',
                      micro: '8–12 weeks',
                      note: 'Meaningful appetite suppression for most patients at this dose.',
                    },
                    {
                      dose: '1.7mg',
                      standard: '4 weeks',
                      micro: '8–12 weeks',
                      note: 'Pre-maintenance step. Some patients stop here — verify with prescriber.',
                    },
                    {
                      dose: '2.4mg',
                      standard: 'Maintenance',
                      micro: 'Maintenance or stay at lower dose if effective',
                      note: 'Full therapeutic maintenance dose (Wegovy). Highest weight-loss efficacy in STEP trials.',
                    },
                  ].map((row) => (
                    <tr key={row.dose}>
                      <td className="px-4 py-3 font-semibold text-glp1-charcoal">{row.dose}</td>
                      <td className="px-4 py-3 text-glp1-charcoal/80">{row.standard}</td>
                      <td className="px-4 py-3 font-medium text-glp1-orange">{row.micro}</td>
                      <td className="px-4 py-3 text-glp1-charcoal/70 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ TIRZEPATIDE SCHEDULE TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-3 font-serif text-3xl text-glp1-charcoal">
              Tirzepatide Microdosing Schedule
            </h2>
            <p className="mb-5 text-sm text-glp1-charcoal/80 max-w-3xl">
              Standard Mounjaro/Zepbound titration: 2.5mg → 5mg → 7.5mg → 10mg → 12.5mg → 15mg,
              advancing every 4 weeks. Microdosing typically starts at 0.5–1.25mg — well below the
              lowest approved dose — and holds each step 8–12 weeks. Uses compounded tirzepatide
              to enable sub-2.5mg dosing not available in branded auto-injectors.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Weekly Dose</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Standard Hold</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Microdose Hold</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5 bg-white">
                  {[
                    {
                      dose: '0.5mg',
                      standard: 'Sub-approved (compounded only)',
                      micro: '4–8 weeks',
                      note: 'True micro-start. Requires compounded tirzepatide — not available in branded pens.',
                    },
                    {
                      dose: '1.25mg',
                      standard: 'Sub-approved (compounded only)',
                      micro: '4–8 weeks',
                      note: 'Intermediate step below standard. Good for GI-sensitive patients.',
                    },
                    {
                      dose: '2.5mg',
                      standard: '4 weeks',
                      micro: '8–12 weeks',
                      note: 'Lowest approved dose (Mounjaro). Extend hold to acclimate GI system.',
                    },
                    {
                      dose: '5mg',
                      standard: '4 weeks',
                      micro: '8–12 weeks',
                      note: 'First therapeutic step. Many patients find substantial appetite suppression here.',
                    },
                    {
                      dose: '7.5mg+',
                      standard: '4 weeks per step',
                      micro: '8–12 weeks per step',
                      note: 'Continue titration as tolerated toward therapeutic target (typically 10–15mg).',
                    },
                  ].map((row) => (
                    <tr key={row.dose}>
                      <td className="px-4 py-3 font-semibold text-glp1-charcoal">{row.dose}</td>
                      <td className="px-4 py-3 text-glp1-charcoal/80">{row.standard}</td>
                      <td className="px-4 py-3 font-medium text-glp1-orange">{row.micro}</td>
                      <td className="px-4 py-3 text-glp1-charcoal/70 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ DAY-OF-WEEK TIMING ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Day-of-Week Timing and Side Effect Windows
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Consistency rules</h3>
                <div className="space-y-3 text-sm text-glp1-charcoal/85">
                  <p>
                    Inject on the same day every week. The exact day doesn&rsquo;t matter — what
                    matters is maintaining consistent weekly intervals so your body&rsquo;s exposure
                    to the drug remains steady.
                  </p>
                  <p>
                    Common choices: Sunday evening (side effects peak before the work week starts)
                    or Friday evening (side effects fall over the weekend when schedule is more
                    flexible). Pick what fits your routine.
                  </p>
                  <p>
                    If you miss a dose by 1–2 days, inject as soon as you remember and shift your
                    weekly day accordingly. If it&rsquo;s nearly time for the next dose, skip the
                    missed one — do not double-dose. Confirm missed-dose protocol with your
                    prescriber.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Side effect timing</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="space-y-3 text-sm">
                    {[
                      {
                        window: 'Hours 0–4',
                        description: 'Minimal symptoms for most patients',
                        severity: 'low',
                      },
                      {
                        window: 'Hours 4–12',
                        description: 'Peak nausea window — most side effects occur here',
                        severity: 'high',
                      },
                      {
                        window: 'Hours 12–24',
                        description: 'Symptoms typically declining',
                        severity: 'medium',
                      },
                      {
                        window: 'Hours 24–48',
                        description: 'Most patients feel normal by this point',
                        severity: 'low',
                      },
                    ].map((row) => (
                      <div key={row.window} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 min-w-[80px] rounded px-2 py-0.5 text-center text-xs font-semibold ${
                            row.severity === 'high'
                              ? 'bg-red-100 text-red-700'
                              : row.severity === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {row.window}
                        </span>
                        <span className="text-glp1-charcoal/80">{row.description}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-glp1-charcoal/60">
                    Pattern is consistent across semaglutide and tirzepatide. Individual variation
                    is significant — some patients have zero nausea; others peak at 6–8h post-dose.
                  </p>
                </div>

                <div className="mt-4 rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4 text-sm">
                  <p className="mb-1 font-semibold text-glp1-charcoal">
                    Bedtime injection strategy
                  </p>
                  <p className="text-glp1-charcoal/80">
                    Injecting at bedtime means the 4–12 hour peak nausea window occurs while you&rsquo;re
                    asleep. Many patients find this significantly reduces perceived nausea — you
                    sleep through the worst of it. This is not evidence-based guidance, but is a
                    widely reported patient strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHEN TO PAUSE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">When to Pause Your Dose</h2>
            <p className="mb-5 text-sm text-glp1-charcoal/80 max-w-3xl">
              Do not push through severe symptoms. The following are indications to hold your next
              injection and contact your prescriber before resuming:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { trigger: 'Vomiting lasting more than 24 hours', severity: 'high' },
                { trigger: 'Unable to keep any food or fluids down for 24+ hours', severity: 'high' },
                { trigger: 'Severe abdominal pain (possible pancreatitis — contact prescriber immediately)', severity: 'critical' },
                { trigger: 'Symptoms worsening significantly at a dose you previously tolerated', severity: 'high' },
                { trigger: 'Signs of dehydration: dizziness, dark urine, rapid heart rate', severity: 'high' },
                { trigger: 'Consistent nausea across more than 3 consecutive injections with no improvement', severity: 'medium' },
              ].map((item) => (
                <div
                  key={item.trigger}
                  className={`flex items-start gap-3 rounded-lg border p-4 ${
                    item.severity === 'critical'
                      ? 'border-red-300 bg-red-50'
                      : item.severity === 'high'
                      ? 'border-yellow-300 bg-yellow-50'
                      : 'border-glp1-charcoal/10 bg-white'
                  }`}
                >
                  <AlertCircle
                    className={`h-4 w-4 shrink-0 mt-0.5 ${
                      item.severity === 'critical'
                        ? 'text-red-600'
                        : item.severity === 'high'
                        ? 'text-yellow-600'
                        : 'text-glp1-charcoal/50'
                    }`}
                  />
                  <p className="text-sm text-glp1-charcoal/85">{item.trigger}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHO BENEFITS FROM SLOWER TITRATION ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Who Benefits Most from a Microdosing Schedule
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  group: 'GI-sensitive patients',
                  detail: 'Patients who experienced significant nausea, vomiting, or diarrhea on a standard titration schedule. Slower dose steps give the GI system more time to adapt to GLP-1-mediated gastric emptying changes.',
                },
                {
                  group: 'Older patients (65+)',
                  detail: 'Older adults may metabolize GLP-1 peptides differently and are more likely to be on medications with overlapping GI effects. A slower titration reduces the risk of overlapping adverse effects.',
                },
                {
                  group: 'Patients on multiple medications',
                  detail: 'GLP-1 drugs slow gastric emptying, which affects the absorption of other oral medications. A slower titration allows time to observe and adjust for any drug-absorption changes before reaching full dose.',
                },
                {
                  group: 'First-time GLP-1 users',
                  detail: 'Patients who have never taken a GLP-1 have no baseline for their individual tolerance. Starting below standard dose and holding longer reduces the risk of an early bad experience that leads to discontinuation.',
                },
              ].map((item) => (
                <div
                  key={item.group}
                  className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-5"
                >
                  <h3 className="mb-2 font-semibold text-glp1-charcoal">{item.group}</h3>
                  <p className="text-sm text-glp1-charcoal/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROVIDERS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Providers That Support Flexible Dosing
            </h2>
            <p className="mb-6 text-sm text-glp1-charcoal/80 max-w-3xl">
              Not all compounded GLP-1 telehealth providers will prescribe sub-approved doses or
              extended holds. The three providers below are most likely to accommodate individualized
              microdosing protocols.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {/* Ivim Health — microdosing specialist */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Ivim Health</h3>
                  <span className="rounded-full bg-glp1-orange/10 px-2 py-0.5 text-xs font-semibold text-glp1-orange">
                    Specialist
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Microdosing-first approach</p>
                <p className="mb-3 text-sm text-glp1-charcoal/75">
                  Ivim Health specifically positions individualized dosing protocols as a core
                  offering — not an afterthought. They are designed for patients who want flexible
                  titration, including starting at sub-approved doses with compounded tirzepatide.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Individualized dose protocols — core offering</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Sub-approved starting doses available</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing — VERIFY directly</span>
                  </li>
                </ul>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-4 py-2.5 text-sm font-semibold text-white hover:bg-glp1-orange-dark"
                >
                  Visit Ivim Health <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* TMates */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">TMates</h3>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" variant="compact" />
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">$158/mo confirmed — ask about microdosing</p>
                <p className="mb-3 text-sm text-glp1-charcoal/75">
                  TMates has confirmed pricing at ~$158/mo for compounded semaglutide and supports
                  flexible dosing. Ask specifically about microdosing or extended-titration options
                  during intake.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>~<strong>$158/mo</strong> confirmed (semaglutide)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Flexible dosing supported</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Tirzepatide pricing — VERIFY</span>
                  </li>
                </ul>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2.5 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit TMates — $158/mo <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* MEDVi */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">MEDVi</h3>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" variant="compact" />
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">$179–$299/mo confirmed — flexible programs</p>
                <p className="mb-3 text-sm text-glp1-charcoal/75">
                  MEDVi offers Gronk-verified pricing for both semaglutide ($179–$249/mo) and
                  tirzepatide ($229–$299/mo). Flexible programs — ask about microdosing protocol
                  options during their intake.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Semaglutide <strong>$179–$249/mo</strong> (verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Tirzepatide <strong>$229–$299/mo</strong> (verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Flexible programs available</span>
                  </li>
                </ul>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2.5 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit MEDVi — from $179/mo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-8 font-serif text-3xl text-glp1-charcoal">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-5"
                >
                  <h3 className="mb-2 font-semibold text-glp1-charcoal">{faq.name}</h3>
                  <p className="text-sm text-glp1-charcoal/80">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RELATED LINKS ============ */}
        <section className="bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Related Pages</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                { href: '/microdosing-tirzepatide', label: 'Microdosing Tirzepatide' },
                { href: '/microdose-tirzepatide', label: 'How to Microdose Tirzepatide' },
                { href: '/microdosing-semaglutide', label: 'Microdosing Semaglutide' },
                { href: '/how-to-microdose-semaglutide', label: 'How to Microdose Semaglutide' },
                { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide Guide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-lg border border-glp1-charcoal/10 bg-white px-4 py-3 text-sm font-medium text-glp1-charcoal hover:border-glp1-orange/30 hover:bg-glp1-orange/5"
                >
                  <ArrowRight className="h-4 w-4 shrink-0 text-glp1-orange" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
