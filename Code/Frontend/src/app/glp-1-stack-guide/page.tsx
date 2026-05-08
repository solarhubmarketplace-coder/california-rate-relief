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
  title: 'GLP-1 Stack Guide 2026: NAD+, B12, Sermorelin & Adjunct Protocols | GLP1CompareHub',
  description:
    'What GLP-1 stacking means, the evidence behind common combinations (NAD+, B12, sermorelin, lipotropics), and providers that offer bundled programs.',
  alternates: {
    canonical: 'https://glp1comparehub.com/glp-1-stack-guide',
  },
  openGraph: {
    title: 'GLP-1 Stack Guide 2026: NAD+, B12, Sermorelin & Adjunct Protocols',
    description:
      'What GLP-1 stacking means, the evidence behind common combinations (NAD+, B12, sermorelin, lipotropics), and providers that offer bundled programs.',
    url: 'https://glp1comparehub.com/glp-1-stack-guide',
    siteName: 'GLP1CompareHub',
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
          name: 'GLP-1 Resources',
          item: 'https://glp1comparehub.com/resources',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'GLP-1 Stack Guide',
          item: 'https://glp1comparehub.com/glp-1-stack-guide',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'GLP-1 Stack Guide 2026: NAD+, B12, Sermorelin & Adjunct Protocols',
      description:
        'What GLP-1 stacking means, the evidence behind common combinations (NAD+, B12, sermorelin, lipotropics), and providers that offer bundled programs.',
      url: 'https://glp1comparehub.com/glp-1-stack-guide',
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
          name: 'What does "GLP-1 stacking" mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "GLP-1 stacking refers to combining a GLP-1 receptor agonist (semaglutide or tirzepatide) with adjunct therapies — such as NAD+, B12, sermorelin, lipotropic injections, or metformin — to address side effects, preserve lean muscle mass, support metabolic function, or enhance overall outcomes during weight loss. All stacks require physician supervision.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do GLP-1 medications cause muscle loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "GLP-1 medications cause weight loss through a caloric deficit, and approximately 25% of total weight lost during STEP-1 (semaglutide) trials was lean muscle mass. This is comparable to other significant caloric restriction interventions. Adjunct therapies like sermorelin, resistance training, and adequate protein intake are the most evidence-supported strategies for preserving lean mass during GLP-1 treatment.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does NAD+ help with GLP-1 side effects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "There is no published RCT data specifically studying NAD+ as a GLP-1 adjunct for side effect management. The rationale is mechanistic: caloric restriction activates sirtuins (NAD+-dependent enzymes) that support cellular energy and metabolism. Whether supplemental NAD+ meaningfully improves outcomes or reduces side effects in GLP-1 patients specifically is not established by clinical evidence.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is sermorelin safe to take with semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sermorelin (a growth hormone-releasing hormone analogue) is used off-label in physician-supervised settings alongside GLP-1 agonists. There are no published safety studies on the combination. Theoretical rationale is preservation of lean mass via increased growth hormone during a caloric deficit. Always requires physician evaluation, especially given that sermorelin affects GH/IGF-1 axis.",
          },
        },
        {
          '@type': 'Question',
          name: 'What providers offer GLP-1 + NAD+ bundled programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Eden Health offers GLP-1 programs that can be bundled with NAD+ injection therapy. Ivim Health offers microdosing protocols that include NAD+ alongside liraglutide. Both require physician intake and prescription. Program pricing varies; expect $300–$700/month for bundled GLP-1 + NAD+ programs.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does semaglutide with B12 reduce side effects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Some compounded semaglutide formulations include B12 (typically methylcobalamin or cyanocobalamin). The rationale is that B12 may help with fatigue, which is a common side effect during GLP-1 dose titration. There is no controlled trial data specifically attributing side effect reduction to B12 addition in a semaglutide formulation. TMates and other providers offer B12-inclusive compounded semaglutide.",
          },
        },
      ],
    },
  ],
};

const stacks = [
  {
    id: 'nad',
    title: 'GLP-1 + NAD+ (Injection or IV)',
    badge: 'Most Popular Adjunct',
    badgeColor: 'bg-blue-100 text-blue-800',
    rationale:
      'During caloric restriction, the cell switches to a fasting-like metabolic state that upregulates sirtuins — a family of NAD+-dependent deacetylase enzymes involved in mitochondrial biogenesis, fat oxidation, and cellular stress response. The hypothesis: supplemental NAD+ (via injection or IV infusion) may support sirtuin function during the significant caloric deficit induced by GLP-1s, potentially preserving lean mass and cellular energy during weight loss.',
    evidence:
      'No published RCT directly tests NAD+ as a GLP-1 adjunct. Mechanistic rationale is biologically plausible. NAD+ IV therapy has been studied independently for metabolic and fatigue indications.',
    providers: ['Eden Health (GLP-1 + NAD+ programs)', 'Ivim Health (liraglutide + NAD+ protocols)'],
    supervision: 'Physician prescription required. IV NAD+ requires clinic visit or mobile infusion.',
  },
  {
    id: 'sermorelin',
    title: 'GLP-1 + Sermorelin (Growth Hormone Peptide)',
    badge: 'Lean Mass Focus',
    badgeColor: 'bg-purple-100 text-purple-800',
    rationale:
      'Sermorelin is a synthetic analogue of growth hormone-releasing hormone (GHRH). It stimulates the pituitary to release endogenous growth hormone. During a GLP-1-induced caloric deficit, growth hormone levels naturally decline. Sermorelin co-administration aims to maintain or restore GH signaling to support muscle protein synthesis and reduce lean mass losses — a key concern given that ~25% of weight lost in STEP-1 was lean tissue.',
    evidence:
      'Sermorelin is well-studied for GH deficiency but has no published RCT data as a GLP-1 combination therapy for lean mass preservation. Off-label use in longevity and anti-aging medicine is common.',
    providers: ['Physician-supervised compounding programs (provider varies)'],
    supervision: 'Off-label. Requires physician evaluation including GH/IGF-1 labs before prescribing.',
  },
  {
    id: 'b12',
    title: 'GLP-1 + Vitamin B12',
    badge: 'Fatigue Support',
    badgeColor: 'bg-green-100 text-green-800',
    rationale:
      'Fatigue and low energy are among the most common early side effects of GLP-1 agonists, particularly during dose titration. Vitamin B12 (methylcobalamin or cyanocobalamin) is included in some compounded semaglutide formulations under the rationale that B12 supports neurological function, energy metabolism via the methylation cycle, and red blood cell production. B12 deficiency itself causes fatigue — and patients on caloric restriction may have dietary B12 shortfalls.',
    evidence:
      'No controlled trial data isolates B12\'s contribution in combination semaglutide + B12 formulations. B12 inclusion is low-risk and low-cost. Some providers market this as a meaningful differentiator; evidence doesn\'t support strong claims of additive weight loss benefit.',
    providers: ['TMates (confirmed semaglutide + B12 formulation)', 'Various 503A compounders'],
    supervision: 'Low-risk additive. Included in standard compounded formulations at many providers.',
  },
  {
    id: 'lipotropic',
    title: 'GLP-1 + Lipotropic Injections (MIC/B12)',
    badge: 'Liver & Fat Metabolism',
    badgeColor: 'bg-amber-100 text-amber-800',
    rationale:
      'Lipotropic injections typically combine methionine, inositol, and choline (MIC) with B12. The methionine-inositol-choline triad theoretically supports hepatic fat export and fatty acid metabolism — relevant during rapid weight loss when the liver processes a high load of mobilized fat. Some providers include lipotropic injections as an adjunct to GLP-1 programs to support liver function and accelerate fat mobilization.',
    evidence:
      'Lipotropic injection efficacy for weight loss is not supported by large RCTs. Individual components (choline, inositol) have metabolic roles but the injectable combination has limited controlled trial data. Used as a supportive adjunct, not a primary intervention.',
    providers: ['Various medical weight loss clinics', 'Some telehealth programs'],
    supervision: 'Physician-supervised. Often combined with a broader weight loss protocol.',
  },
  {
    id: 'metformin',
    title: 'GLP-1 + Metformin',
    badge: 'Best Evidence Base',
    badgeColor: 'bg-teal-100 text-teal-800',
    rationale:
      'Metformin is a first-line type 2 diabetes drug with decades of safety data and established metabolic effects: AMPK activation, hepatic glucose production suppression, and mild insulin sensitization. It is already co-prescribed with GLP-1 agonists in T2D guidelines. For obesity patients without diabetes, metformin is used off-label based on AMPK pathway overlap with GLP-1 mechanisms, potential gut microbiome modulation, and possible attenuation of muscle loss via AMPK activation.',
    evidence:
      'Well-studied in T2D where combination with GLP-1 agonists is standard of care. RCT data for metformin as an obesity stack adjunct (non-diabetic patients) is limited but mechanistically credible. Longest-studied agent on this list.',
    providers: ['Most telehealth providers can prescribe metformin off-label'],
    supervision: 'Off-label for obesity. Requires physician Rx. Contraindicated in renal impairment.',
  },
];

export default function GLP1StackGuidePage() {
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
              <Link href="/resources" className="hover:text-blue-600">GLP-1 Resources</Link>
            </li>
            <li aria-hidden="true" className="mx-1">/</li>
            <li className="text-gray-700 font-medium" aria-current="page">GLP-1 Stack Guide</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          GLP-1 Stack Guide 2026: NAD+, B12, Sermorelin & Adjunct Protocols
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Updated May 6, 2026 · By{' '}
          <Link href="/author/chad-simpson" className="text-blue-600 hover:underline">Chad Simpson</Link>
        </p>

        <EditorialReviewBox />

        {/* What is stacking */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is GLP-1 Stacking?</h2>
          <p className="text-gray-700 mb-4">
            GLP-1 stacking refers to combining a GLP-1 receptor agonist — semaglutide (Wegovy, Ozempic,
            or compounded) or tirzepatide (Mounjaro, Zepbound) — with one or more adjunct therapies to
            address side effects, support lean muscle preservation, improve energy, or optimize overall
            metabolic outcomes during weight loss.
          </p>
          <p className="text-gray-700 mb-4">
            The concept comes from the longevity medicine and functional medicine communities and has
            moved into mainstream telehealth weight loss programs. Providers like Eden Health and Ivim
            Health now market bundled GLP-1 + adjunct protocols rather than GLP-1 monotherapy alone.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Important Caveat Upfront</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  None of the stacks described here have RCT data confirming additive weight loss benefit
                  over GLP-1 monotherapy. The rationale for most is mechanistic (biologically plausible)
                  or based on independent evidence for the adjunct compound alone. All stacks require
                  physician supervision. Do not self-prescribe adjunct peptides or inject anything not
                  prescribed by a licensed physician.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why stack — muscle loss */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Stack? The Lean Mass Problem</h2>
          <p className="text-gray-700 mb-4">
            GLP-1 agonists produce weight loss primarily by reducing appetite and caloric intake. This
            caloric deficit is effective — but it is not selective. The STEP-1 semaglutide trial showed
            that approximately <strong>25% of total weight lost was lean mass</strong> (muscle and bone
            density). This is similar to other caloric restriction approaches and is a known limitation
            of all non-exercise-based weight loss interventions.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { label: 'Avg. weight loss (STEP-1)', value: '~14.9%' },
              { label: 'Lean mass % of loss', value: '~25%' },
              { label: 'Trial duration', value: '68 weeks' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            Strategies to mitigate lean mass loss during GLP-1 therapy include resistance training
            (best evidence), adequate protein intake (1.2–1.6g/kg body weight), and adjunct therapies
            like sermorelin or NAD+. Tirzepatide (dual GIP/GLP-1) may have a more favorable lean
            mass preservation profile than semaglutide alone — SURMOUNT trials showed better lean mass
            retention — but data is still emerging.
          </p>
        </section>

        {/* Stack cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5 Common GLP-1 Stacks</h2>
          <div className="space-y-6">
            {stacks.map((stack) => (
              <div key={stack.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900">{stack.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${stack.badgeColor}`}>
                      {stack.badge}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Rationale</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{stack.rationale}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Evidence Base</p>
                    <p className="text-blue-900 text-sm leading-relaxed">{stack.evidence}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Available From</p>
                    <ul className="space-y-1">
                      {stack.providers.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-gray-700 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
                    <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{stack.supervision}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Provider section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Providers Offering GLP-1 + Adjunct Programs</h2>
          <p className="text-gray-700 mb-6">
            Most standard telehealth GLP-1 programs are monotherapy. The following providers specifically
            offer bundled GLP-1 + adjunct protocols as of May 2026:
          </p>

          <div className="space-y-4">
            {/* Eden Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Eden Health</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                    Broadest Adjunct Program
                  </span>
                </div>
                <VerifiedPricingBadge price="$229–$249/mo base" />
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">
                Offers GLP-1 programs that can be bundled with NAD+ injection therapy. Physician intake
                included. NAD+ can be added to semaglutide or tirzepatide programs. Comprehensive telehealth
                platform with ongoing provider access.
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Adjuncts: NAD+ injections, optional peptide protocols
              </p>
              <a
                href={buildGlp1AffiliateUrl('eden', 'glp-1-stack-guide')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                See Eden Health Programs <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Ivim Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-gray-900">Ivim Health</h3>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">
                Microdosing-focused GLP-1 protocols (liraglutide-based) combined with NAD+ therapy.
                Ivim positions itself as a longevity-forward provider and explicitly bundles NAD+
                infusion or injection support alongside weight loss programs.
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Adjuncts: NAD+ infusions/injections, liraglutide microdosing protocols
              </p>
              <a
                href={buildGlp1AffiliateUrl('ivim', 'glp-1-stack-guide')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                See Ivim Health Programs <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* TMates */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-gray-900">TMates</h3>
                <VerifiedPricingBadge price="$158/mo" />
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">
                Confirmed semaglutide + B12 compounded formulation. If B12 inclusion matters to you
                (fatigue support during titration), TMates offers this as standard in their compounded
                semaglutide program.
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Adjuncts: B12 included in compounded semaglutide formulation
              </p>
              <a
                href={buildGlp1AffiliateUrl('tmates', 'glp-1-stack-guide')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                See TMates Plans <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Critical caveat full section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What the Evidence Does and Doesn't Support
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Stack</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Biologically Plausible</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">RCT as GLP-1 Adjunct</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'GLP-1 + NAD+',
                    plausible: 'Yes',
                    rct: 'No',
                    risk: 'Low–Moderate (cost)',
                  },
                  {
                    name: 'GLP-1 + Sermorelin',
                    plausible: 'Yes',
                    rct: 'No',
                    risk: 'Moderate (GH axis effects)',
                  },
                  {
                    name: 'GLP-1 + B12',
                    plausible: 'Modest',
                    rct: 'No',
                    risk: 'Very Low',
                  },
                  {
                    name: 'GLP-1 + Lipotropics',
                    plausible: 'Theoretical',
                    rct: 'No',
                    risk: 'Low',
                  },
                  {
                    name: 'GLP-1 + Metformin',
                    plausible: 'Yes (T2D standard of care)',
                    rct: 'Yes (for T2D); limited for obesity',
                    risk: 'Low (if renally cleared)',
                  },
                ].map((row) => (
                  <tr key={row.name} className="even:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">{row.name}</td>
                    <td className="p-3 border border-gray-200 text-green-700">{row.plausible}</td>
                    <td className="p-3 border border-gray-200 text-red-700">{row.rct}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            The absence of RCT data doesn't mean these combinations are ineffective — it means they
            haven't been studied as GLP-1 combinations. The metformin + GLP-1 combination has the
            strongest evidence base because it is standard of care in type 2 diabetes. For the others,
            you are accepting biologically plausible reasoning alongside the GLP-1's proven efficacy.
            A conservative physician will recommend GLP-1 + resistance training + adequate protein
            before adding any other adjunct.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'What does "GLP-1 stacking" mean?',
                a: 'Combining a GLP-1 receptor agonist (semaglutide or tirzepatide) with adjunct therapies — NAD+, B12, sermorelin, lipotropics, or metformin — to address side effects, preserve lean muscle, or support metabolic outcomes. All stacks require physician supervision.',
              },
              {
                q: 'Do GLP-1 medications cause muscle loss?',
                a: 'GLP-1s cause a caloric deficit that is not muscle-selective. In STEP-1, approximately 25% of total weight lost was lean mass. This is comparable to other caloric restriction approaches. Resistance training and adequate protein remain the best-evidence strategies for lean mass preservation.',
              },
              {
                q: 'Does NAD+ help with GLP-1 side effects?',
                a: 'No RCT specifically tests this. The rationale is mechanistic: caloric restriction activates NAD+-dependent sirtuins. Whether supplemental NAD+ meaningfully improves GLP-1 outcomes is not established by clinical evidence.',
              },
              {
                q: 'Is sermorelin safe to take with semaglutide?',
                a: 'No published safety studies cover the combination. It is used off-label in physician-supervised settings. Sermorelin affects the GH/IGF-1 axis and requires physician evaluation including baseline lab work before prescribing.',
              },
              {
                q: 'What providers offer GLP-1 + NAD+ bundled programs?',
                a: 'Eden Health and Ivim Health both offer GLP-1 programs that can be bundled with NAD+ therapy. Expect $300–$700/month for bundled programs depending on the specific protocol.',
              },
              {
                q: 'Does semaglutide with B12 reduce side effects?',
                a: 'B12 is included in some compounded semaglutide formulations to support energy metabolism and reduce fatigue during titration. No controlled trial data isolates B12\'s contribution. TMates and other providers offer B12-inclusive formulations.',
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
              { href: '/nad-injection', label: 'NAD+ Injection Guide: Protocols, Providers & Evidence' },
              { href: '/nad-iv-therapy', label: 'NAD+ IV Therapy: What to Expect' },
              { href: '/nad-nasal-spray', label: 'NAD+ Nasal Spray vs. IV: Which Works Better?' },
              { href: '/semaglutide-with-b12', label: 'Semaglutide with B12: What Providers Offer It' },
              { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide 2026: Pricing & Providers' },
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
        href={buildGlp1AffiliateUrl('eden-health', 'glp-1-stack-guide')}
        brandName="Eden Health"
        pricePitch="GLP-1 + NAD+ + peptide stack programs from $229/mo"
      />
      <GLP1Footer />
    </GLP1Layout>
  );
}
