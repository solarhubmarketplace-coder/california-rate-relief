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
// /how-to-microdose-semaglutide  (1,100 vol, KD ?)
// =============================================================================
// Practical how-to guide — companion to /microdosing-semaglutide (strategy guide).
// This page covers the physical technique: equipment, dose measurement table,
// 6-step injection protocol, rotation sites, storage, dosing timing, tracking,
// and when to contact your provider.
//
// Strut Health ($99/mo) is the StickyMobileCTA — lowest cost + most flexible
// for custom vial dosing.
// =============================================================================

export const metadata: Metadata = {
  title: 'How to Microdose Semaglutide: Step-by-Step Injection Guide (2026) | GLP1CompareHub',
  description:
    'How to measure and inject a semaglutide microdose from a compounded vial — equipment list, dose math table, 6-step injection technique, rotation sites, storage, and tracking. 2026 guide.',
  alternates: { canonical: 'https://glp1comparehub.com/how-to-microdose-semaglutide' },
  openGraph: {
    title: 'How to Microdose Semaglutide: Step-by-Step Injection Guide',
    description:
      'Everything you need to measure and inject a compounded semaglutide microdose — insulin syringe, dose volume table, 6-step technique, rotation schedule, and storage guidelines.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/how-to-microdose-semaglutide',
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
      item: 'https://glp1comparehub.com/compounded-semaglutide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Microdose Semaglutide',
      item: 'https://glp1comparehub.com/how-to-microdose-semaglutide',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Microdose Semaglutide: Measuring, Injecting, and Tracking Sub-Standard Doses',
  description:
    'A practical, step-by-step guide to preparing and injecting a semaglutide microdose from a compounded vial — covering equipment, dose measurement, injection technique, rotation sites, storage, and when to call your provider.',
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
    '@id': 'https://glp1comparehub.com/how-to-microdose-semaglutide',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What syringe do I need for semaglutide microdosing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a 1mL insulin syringe with a 28–31 gauge, 5/16" (8mm) or 1/2" (12.7mm) needle. The 1mL barrel gives you clear 0.01mL graduations, which is essential for measuring small volumes accurately. For true microdoses below 0.1mg from a 2.5mg/mL vial, you\'ll be drawing volumes as small as 0.02–0.04mL — legible only on a 1mL syringe, not a larger barrel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate my semaglutide dose volume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The formula is: Volume (mL) = Dose (mg) ÷ Concentration (mg/mL). For a 2.5mg/mL vial and a 0.25mg target dose: 0.25 ÷ 2.5 = 0.10mL. For a 5mg/mL vial and the same 0.25mg dose: 0.25 ÷ 5 = 0.05mL. Always confirm the concentration printed on your pharmacy vial label before calculating — different compounding pharmacies supply different concentrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I inject subcutaneous semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three approved subcutaneous injection sites for semaglutide are: (1) abdomen — anywhere at least 2 inches from the navel; (2) front of thigh — middle third of the outer surface; (3) upper arm — outer back surface (best if someone else administers). Rotate between different sites each week to prevent lipodystrophy (fatty tissue changes that can alter absorption). Do not inject into the same exact spot twice in a row.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an opened semaglutide vial last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confirm storage guidelines with your pharmacy, as formulations vary. Generally: sealed (unopened) vials should be refrigerated at 2–8°C (36–46°F) until first use. After the vial is punctured and opened, it can typically be stored at room temperature (up to 25°C / 77°F) for up to 28 days, or refrigerated. Keep away from direct light. Discard after 28 days of first use even if medication remains.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of day to inject semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semaglutide is injected once weekly and can be taken at any consistent time of day. Most patients choose a fixed day and time that they can remember week to week. Some evidence and patient experience suggests morning injection may reduce perceived nausea in some individuals (nausea may peak 2–4 hours post-injection, and being asleep may reduce awareness of it). Other patients prefer evening. The most important factor is consistency — same day each week, regardless of time.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I call my provider after a semaglutide injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact your prescribing provider immediately if you experience: vomiting that persists longer than 24 hours; severe or worsening abdominal pain; signs of pancreatitis (severe persistent upper-belly pain radiating to the back, which may worsen when lying down); signs of a severe allergic reaction (rash, swelling of face/lips/throat, difficulty breathing); or any other symptom your provider asked you to watch for. Mild nausea, temporary reduced appetite, and minor injection-site redness are common and expected — they do not require urgent contact.',
      },
    },
  ],
};

// Dose measurement table rows
interface DoseRow {
  targetDose: string;
  vial2_5: string;
  vial5: string;
  note?: string;
}

const doseRows: DoseRow[] = [
  { targetDose: '0.1 mg', vial2_5: '0.04 mL', vial5: '0.02 mL', note: 'Sub-threshold starting dose' },
  { targetDose: '0.125 mg', vial2_5: '0.05 mL', vial5: '0.025 mL', note: 'Ultra-low starting dose' },
  { targetDose: '0.25 mg', vial2_5: '0.10 mL', vial5: '0.05 mL', note: 'Standard FDA starting dose' },
  { targetDose: '0.5 mg', vial2_5: '0.20 mL', vial5: '0.10 mL' },
  { targetDose: '1.0 mg', vial2_5: '0.40 mL', vial5: '0.20 mL' },
];

// Injection steps
const injectionSteps = [
  {
    step: 1,
    title: 'Prep the vial',
    detail:
      'Wipe the rubber septum of the vial with a fresh alcohol swab. Let it air-dry for 10–15 seconds — do not blow on it or fan it.',
  },
  {
    step: 2,
    title: 'Draw air into the syringe',
    detail:
      'Pull the plunger back to draw air equal to your target dose volume (e.g., 0.10mL for a 0.25mg dose from a 2.5mg/mL vial).',
  },
  {
    step: 3,
    title: 'Inject air into the vial',
    detail:
      'Insert the needle through the rubber septum and push the air in. This creates positive pressure in the vial, making it easier to draw the medication out.',
  },
  {
    step: 4,
    title: 'Draw the medication',
    detail:
      'Invert the vial. Pull the plunger back slowly to draw out your calculated dose volume. Keep the needle tip below the surface of the liquid.',
  },
  {
    step: 5,
    title: 'Remove air bubbles',
    detail:
      'With the needle pointing up, gently tap the syringe barrel to float any bubbles to the top. Press the plunger lightly to expel air — not medication. Confirm your volume marking is still correct.',
  },
  {
    step: 6,
    title: 'Inject subcutaneously',
    detail:
      'Pinch a fold of skin at your chosen injection site (abdomen, thigh, or upper arm). Insert the needle at a 45–90° angle. Push the plunger fully and hold for 10 seconds before withdrawing. Release the skin fold. Apply light pressure with a gauze pad — do not rub.',
  },
];

// Rotation sites
const rotationSites = [
  {
    site: 'Abdomen',
    location: 'At least 2 inches from navel; any quadrant',
    notes: 'Most commonly used; easiest self-injection. Avoid waistband or belt line area.',
  },
  {
    site: 'Front of thigh',
    location: 'Middle third of outer thigh surface',
    notes: 'Good for self-injection when seated. Avoid inner thigh.',
  },
  {
    site: 'Upper arm',
    location: 'Outer/back surface of upper arm',
    notes: 'Easier with caregiver assistance. Using a mirror or wall technique for self-injection.',
  },
];

// Tracking log columns
const trackingColumns = ['Date', 'Dose (mg)', 'Injection site', 'Nausea (0–3)', 'Other SE', 'Weight'];

export default function HowToMicrodoseSemaglutidePage() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'how-to-microdose-semaglutide');
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'how-to-microdose-semaglutide');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'how-to-microdose-semaglutide');

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
      <RelatedGuides currentPath="/how-to-microdose-semaglutide" priorityCluster="microdosing" />
      <StickyMobileCTA
        href={strutUrl}
        brandName="Strut Health"
        pricePitch="Compounded semaglutide from $99/mo — flexible vial dosing"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-semaglutide" className="hover:underline text-blue-600">GLP-1 Resources</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">How to Microdose Semaglutide</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Step-by-Step How-To
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            How to Microdose Semaglutide: Measuring &amp; Injecting from a Compounded Vial
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Semaglutide microdosing requires compounded injectable semaglutide in a multi-dose vial —
            not the branded auto-injector pens (Ozempic, Wegovy). This guide covers everything you
            need to know about the equipment, dose math, injection technique, and tracking your results.
          </p>

          {/* Prerequisites callout */}
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-5 mb-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Before you start</p>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>You must have a valid prescription from a licensed prescriber.</li>
                  <li>Compounded semaglutide must come from a licensed pharmacy — not from an
                    unverified online source.</li>
                  <li>Your provider should have reviewed your target dose and injection schedule
                    with you before your first injection.</li>
                  <li>If this is your first injection ever, ask your provider or a nurse to walk
                    you through the technique once in person or via video.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 bg-gray-50 rounded-xl border p-4">
            <strong>This guide is a companion to</strong>{' '}
            <Link href="/microdosing-semaglutide" className="text-blue-600 hover:underline">
              Microdosing Semaglutide
            </Link>
            , which covers the strategy, evidence, and protocol rationale. This page covers the
            physical how-to.
          </div>
        </section>

        {/* ── Equipment ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              {
                item: 'Insulin syringe — 1mL, 28–31 gauge',
                detail:
                  'The 1mL barrel provides 0.01mL gradations essential for small volumes. 28–31g needle minimizes injection pain. 5/16" (8mm) or 1/2" (12.7mm) needle length for subcutaneous.',
                required: true,
              },
              {
                item: 'Compounded semaglutide vial',
                detail:
                  'From your licensed pharmacy. Confirm the concentration (mg/mL) on the vial label before calculating dose volumes.',
                required: true,
              },
              {
                item: 'Alcohol swabs',
                detail:
                  'For cleaning the vial septum and injection site before each use. Let air-dry before injecting.',
                required: true,
              },
              {
                item: 'Sharps container',
                detail:
                  'FDA-cleared sharps disposal container. Needles and syringes must never go in household trash or recycling. Most pharmacies provide free containers.',
                required: true,
              },
              {
                item: 'Gauze pads or cotton balls',
                detail:
                  'Apply light pressure after withdrawal. Do not rub the injection site.',
                required: false,
              },
              {
                item: 'Tracking log (paper or app)',
                detail:
                  'Record injection date, dose, site, and any side effects. Essential for identifying patterns and discussing with your provider.',
                required: false,
              },
            ].map((eq, i) => (
              <div
                key={i}
                className={`border rounded-xl p-4 bg-white ${eq.required ? 'border-gray-300' : 'border-gray-200 opacity-90'}`}
              >
                <div className="flex items-start gap-2 mb-1">
                  <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${eq.required ? 'text-green-600' : 'text-gray-400'}`} />
                  <p className={`font-semibold ${eq.required ? 'text-gray-900' : 'text-gray-600'}`}>
                    {eq.item}
                    {!eq.required && (
                      <span className="ml-2 text-xs text-gray-400 font-normal">(optional)</span>
                    )}
                  </p>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed pl-6">{eq.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dose Measurement Table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dose Measurement Reference Table
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Formula: Volume (mL) = Dose (mg) ÷ Concentration (mg/mL).{' '}
            <strong>Always verify the concentration on your specific vial label.</strong>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Target dose</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">2.5 mg/mL vial</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">5 mg/mL vial</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700 hidden sm:table-cell">Context</th>
                </tr>
              </thead>
              <tbody>
                {doseRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-900">{row.targetDose}</td>
                    <td className="border border-gray-200 px-4 py-2 text-blue-700 font-medium">{row.vial2_5}</td>
                    <td className="border border-gray-200 px-4 py-2 text-blue-700 font-medium">{row.vial5}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-500 text-xs hidden sm:table-cell">
                      {row.note ?? ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Note: Volumes below 0.05 mL are very small and require careful measurement on a 1mL
            syringe. Confirm with your prescriber before using doses at or below 0.1mg.
          </p>
        </section>

        {/* ── 6-Step Injection Technique ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6-Step Injection Technique
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Wash your hands thoroughly with soap and water before beginning.
          </p>
          <div className="space-y-4">
            {injectionSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-4 border rounded-xl p-4 bg-white">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Needle disposal reminder */}
          <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-900">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <p>
                <strong>After each injection:</strong> Place the used needle and syringe immediately
                in your sharps container. Never recap needles. Sharps containers can be dropped off at
                most pharmacies, hospitals, and many fire stations for free.
              </p>
            </div>
          </div>
        </section>

        {/* ── Rotation Sites ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Injection Site Rotation
          </h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            Rotating injection sites prevents lipodystrophy — fatty tissue changes that develop
            from repeated injections at the same spot. Lipodystrophy can alter semaglutide
            absorption and produce visible lumps or dimpling. Rotate within and between sites.
          </p>
          <div className="space-y-3">
            {rotationSites.map((rs, i) => (
              <div key={i} className="border rounded-xl p-4 bg-white">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <p className="font-semibold text-gray-900 text-sm">{rs.site}</p>
                  <span className="text-xs text-gray-500">— {rs.location}</span>
                </div>
                <p className="text-xs text-gray-600 pl-6 leading-relaxed">{rs.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Suggested rotation example: Week 1 — right abdomen. Week 2 — left abdomen.
            Week 3 — right thigh. Week 4 — left thigh. Continue cycling.
          </p>
        </section>

        {/* ── Storage ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Storing Your Compounded Semaglutide Vial
          </h2>
          <div className="rounded-xl border bg-white p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Unopened (sealed) vial</p>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    Refrigerate at 2–8°C (36–46°F)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    Keep away from direct light and heat
                  </li>
                  <li className="flex items-center gap-1.5">
                    <X className="h-3.5 w-3.5 text-red-500 flex-shrink-0" />
                    Do not freeze
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Opened (in-use) vial</p>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    Room temp up to 25°C (77°F) for up to 28 days
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    May also be refrigerated
                  </li>
                  <li className="flex items-center gap-1.5">
                    <X className="h-3.5 w-3.5 text-red-500 flex-shrink-0" />
                    Discard after 28 days of first use
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-amber-700 mt-4 border-t border-gray-100 pt-3">
              Storage guidelines can vary by pharmacy formulation. Always confirm with your
              dispensing pharmacy — instructions on the vial label take precedence over general
              guidelines.
            </p>
          </div>
        </section>

        {/* ── Timing ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When to Inject: Day, Time, and Consistency
          </h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            Semaglutide is a once-weekly injection. The two key rules: same day every week, and
            consistent timing to help you remember. Day-of-week consistency matters more than
            time of day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border p-4 bg-white">
              <p className="font-semibold text-gray-800 mb-2">Morning injection</p>
              <p className="text-gray-600 leading-relaxed text-xs">
                Some patients prefer morning because nausea may peak 2–4 hours post-injection.
                If you&apos;re active or eating breakfast, the distraction can reduce perceived nausea.
                Take with food or shortly after if stomach upset is a concern.
              </p>
            </div>
            <div className="rounded-xl border p-4 bg-white">
              <p className="font-semibold text-gray-800 mb-2">Evening injection</p>
              <p className="text-gray-600 leading-relaxed text-xs">
                Other patients prefer evening so they sleep through peak nausea. If your GI side
                effects are manageable, timing is personal preference. Experiment during the first
                few weeks to find what works for you.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            You can shift your injection day by 1–2 days if needed — just don&apos;t take two injections
            within 4 days of each other. Discuss any scheduling changes with your provider.
          </p>
        </section>

        {/* ── Tracking Log ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tracking: The Simple Weekly Log
          </h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            A simple log helps you and your provider identify patterns — which doses caused side
            effects, how weight trends correlate with dose changes, and whether you&apos;re on track
            for your maintenance goal. Keep it brief:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  {trackingColumns.map((col) => (
                    <th key={col} className="border border-gray-200 px-3 py-2 font-semibold text-gray-600">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['5/6/2026', '0.10 mg', 'R abdomen', '1', 'None', '—'],
                  ['5/13/2026', '0.10 mg', 'L abdomen', '0', 'None', '198.4 lb'],
                  ['5/20/2026', '0.125 mg', 'R thigh', '1', 'Slight fatigue', '197.1 lb'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="border border-gray-200 px-3 py-2 text-gray-600">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Nausea scale: 0 = none, 1 = mild/noticeable, 2 = moderate/affected activity, 3 = severe/vomiting.
            Track weight weekly, same time of day, same scale.
          </p>
        </section>

        {/* ── When to Call ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When to Contact Your Provider
          </h2>
          <div className="space-y-3">
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4">
              <p className="font-semibold text-red-900 text-sm mb-2">Call immediately:</p>
              <ul className="space-y-1 text-sm text-red-800">
                <li className="flex items-start gap-1.5">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  Vomiting that persists longer than 24 hours
                </li>
                <li className="flex items-start gap-1.5">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  Severe or rapidly worsening abdominal pain
                </li>
                <li className="flex items-start gap-1.5">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  Signs of pancreatitis: severe persistent upper-belly pain radiating to the back
                </li>
                <li className="flex items-start gap-1.5">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  Signs of allergic reaction: rash, facial/lip/throat swelling, difficulty breathing
                </li>
                <li className="flex items-start gap-1.5">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  Vision changes or sudden dizziness after injection
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-semibold text-gray-800 text-sm mb-2">Common, expected — no urgent action needed:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                {[
                  'Mild to moderate nausea in the 4–8 hours post-injection (especially early in treatment)',
                  'Temporary reduced appetite',
                  'Minor redness, bruising, or itching at injection site',
                  'Loose stools or constipation in the first few weeks',
                  'Mild headache in the first 24 hours post-injection',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Where to Get Compounded Semaglutide for Microdosing
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            All providers below supply compounded injectable semaglutide in a multi-dose vial with a valid prescription. Pricing verified May 2026.
          </p>
          <div className="space-y-4">

            {/* Strut Health */}
            <div className="rounded-xl border-2 border-green-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                      Most Affordable + Flexible Dosing
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Strut Health</h3>
                  <VerifiedPricingBadge price="$99/mo" verifiedDate="May 2026" />
                  <p className="text-sm text-gray-600 mb-3 mt-2 leading-relaxed">
                    Lowest-cost option for compounded injectable semaglutide. Vial-based delivery
                    provides full dose flexibility for any custom microdose. Strong choice for patients
                    who already understand the protocol and want the lowest-cost access to compounded
                    vials.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Injectable compounded semaglutide from $99/mo</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Vial format — custom dose measurement possible</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Physician review and prescription included</li>
                  </ul>
                </div>
                <a
                  href={strutUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Start at Strut <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Ivim Health */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ivim Health</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    Microdosing specialist — explicitly offers customized semaglutide titration
                    protocols. Best for patients who want provider guidance on a non-standard
                    titration schedule or who are new to microdosing and want a supervised approach.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Custom microdosing protocols explicitly offered</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Physician-supervised titration adjustments</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Compounded injectable semaglutide</li>
                  </ul>
                </div>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Check Ivim <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* TMates */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">TMates</h3>
                  <VerifiedPricingBadge price="$158/mo" verifiedDate="May 2026" />
                  <p className="text-sm text-gray-600 mb-3 mt-2 leading-relaxed">
                    Established compounded semaglutide provider with monthly physician access.
                    Good option for patients who want ongoing provider support for dose management
                    alongside the compounded vial supply.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Compounded injectable semaglutide from $158/mo</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Ongoing provider access for adjustments</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Physician-supervised titration</li>
                  </ul>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Visit TMates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── Editorial Review Box ── */}
        <EditorialReviewBox
          reviewDate="May 6, 2026"
          reviewerName="GLP1CompareHub Editorial Team"
          summary="This guide covers the practical mechanics of compounded semaglutide injection. All injection technique steps are based on standard subcutaneous injection protocols. Storage guidelines represent general compounding pharmacy recommendations — confirm with your dispensing pharmacy. Provider pricing verified May 2026. This is not a substitute for provider instruction — always review technique with your prescribing team before your first injection."
        />

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Pages ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/microdosing-semaglutide', label: 'Microdosing Semaglutide: Strategy Guide &amp; Evidence' },
              { href: '/microdosing-glp-1-schedule', label: 'GLP-1 Microdosing Schedule Guide' },
              { href: '/microdose-tirzepatide', label: 'Microdose Tirzepatide: Doses &amp; How-To' },
              { href: '/cheapest-semaglutide-online', label: 'Cheapest Compounded Semaglutide Online' },
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide: Complete Guide' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:underline"
                  dangerouslySetInnerHTML={{ __html: `${label} <span>→</span>` }}
                />
              </li>
            ))}
          </ul>
        </section>

      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
