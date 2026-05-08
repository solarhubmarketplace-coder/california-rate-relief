import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  ArrowRight,
  Check,
  AlertCircle,
  ExternalLink,
  Calendar,
  Info,
  Beaker,
  Shield,
} from 'lucide-react';

// =============================================================================
// /tirzepatide-with-b12  (1,500 vol, KD 2 — Tier A peptide stack)
// =============================================================================
// Informational + commercial page targeting patients researching the tirzepatide
// + B12 combination sold by compounding pharmacies. B12 (cyanocobalamin or
// methylcobalamin) is commonly added by 503A compounders as a supplement to
// their GLP-1 formulations. Patients search for this because:
// (1) GLP-1 medications increase GI side effects, reducing B12 absorption
// (2) Some compounders advertise "tirzepatide + B12" as a premium formula
// (3) Patients are curious if B12 changes efficacy or side-effect profile
//
// No verified clinical trial data for B12 specifically improving tirzepatide
// outcomes — we frame this accurately as a nutrient-support additive, not an
// efficacy booster. Providers noted where they specifically include B12.
// =============================================================================

export const metadata: Metadata = {
  title: 'Tirzepatide with B12 2026: What It Is, Why Compounders Add It | GLP1CompareHub',
  description:
    'Tirzepatide with B12 is a compounded formulation that adds cyanocobalamin or methylcobalamin to tirzepatide. Here\'s what B12 does, who adds it, and whether it matters.',
  alternates: { canonical: 'https://glp1comparehub.com/tirzepatide-with-b12' },
  openGraph: {
    title: 'Tirzepatide with B12 2026: Is the B12 Add-On Worth It?',
    description:
      'Many compounding pharmacies sell tirzepatide with B12. We explain why, what it does, and which providers offer it — with pricing verified May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/tirzepatide-with-b12',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compounded Tirzepatide', item: 'https://glp1comparehub.com/compounded-tirzepatide' },
    { '@type': 'ListItem', position: 3, name: 'Tirzepatide with B12', item: 'https://glp1comparehub.com/tirzepatide-with-b12' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tirzepatide with B12 2026: What It Is, Why Compounders Add It, and Who Offers It',
  description:
    'Informational guide to the compounded tirzepatide + B12 combination: why B12 is added, what the evidence says, how it differs from tirzepatide alone, and which telehealth providers offer it.',
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
    '@id': 'https://glp1comparehub.com/tirzepatide-with-b12',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is tirzepatide with B12?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tirzepatide with B12 is a compounded formulation that combines tirzepatide (a GLP-1/GIP dual receptor agonist) with vitamin B12 — either cyanocobalamin (the standard synthetic form) or methylcobalamin (the active, coenzyme form). The combination is produced by 503A compounding pharmacies and dispensed by telehealth providers. Branded Zepbound and Mounjaro (manufactured by Eli Lilly) do not contain B12 — the B12 component is unique to compounded versions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do compounders add B12 to tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two main reasons. First, GLP-1 medications can reduce food intake significantly and alter gut motility, which may reduce B12 absorption from food. Supplementing B12 alongside GLP-1 treatment helps address this potential deficiency. Second, B12 is commonly associated with energy and metabolism support — adding it improves the perceived value of a compounded formulation compared to tirzepatide alone, particularly for patients used to B12 injection protocols from medspas. There are no peer-reviewed clinical trials specifically testing tirzepatide + B12 as a combination vs tirzepatide alone for weight loss outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does B12 make tirzepatide more effective for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No direct evidence exists that B12 amplifies tirzepatide\'s weight-loss effect. B12 is not a weight-loss agent — it\'s a water-soluble vitamin essential for nerve function, red blood cell production, and DNA synthesis. In patients who are B12-deficient (common in GLP-1 users with significantly reduced food intake), supplementing B12 can resolve deficiency symptoms like fatigue and brain fog, which may indirectly improve energy levels and adherence to the program. But B12 itself does not increase fat metabolism or appetite suppression beyond what tirzepatide already provides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cyanocobalamin or methylcobalamin better in a tirzepatide compound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both forms of B12 are effective for supplementation. Methylcobalamin is the bioactive form (the form used directly in cells) and is often preferred by integrative medicine practitioners. Cyanocobalamin is the standard synthetic form — more stable, cheaper to produce, and converted to active B12 in the body. For most patients receiving subcutaneous injections (which bypass GI absorption), the distinction matters less than it would for oral supplements. Ask your provider which form they use if you have a preference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which compounded tirzepatide providers include B12?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B12 inclusion varies by provider and compounding pharmacy. Not all providers offer tirzepatide + B12 as a standard formulation — some offer it as an add-on or alternative formula. The best way to verify is to go through a provider\'s intake process and confirm with their clinical team which formulation options are available. TMates, Eden Health, MEDVi, and DirectMeds all offer compounded tirzepatide and may offer B12 variants — verify availability and pricing before selecting a plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is tirzepatide with B12 safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B12 is a water-soluble vitamin with no established upper toxicity limit — excess is excreted in urine. At the doses typically used in GLP-1 compounds (usually 250–1,000 mcg), B12 is well tolerated. The primary safety considerations remain those of tirzepatide itself: GI side effects (nausea, diarrhea, constipation), pancreatitis risk, and contraindications in patients with a personal or family history of medullary thyroid carcinoma or MEN2. Always disclose all medications and supplements to your prescribing provider.',
      },
    },
  ],
};

export default function TirzepatideWithB12Page() {
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'tirzepatide-with-b12');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'tirzepatide-with-b12');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'tirzepatide-with-b12');
  const directmedsUrl = buildGlp1AffiliateUrl('directmeds', 'tirzepatide-with-b12');

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

      {/* CRO: sticky mobile CTA — TMates best overall compounded price */}
      <RelatedGuides currentPath="/tirzepatide-with-b12" priorityCluster="tirzepatide" />
      <StickyMobileCTA
        href={tmatesUrl}
        brandName="TMates"
        pricePitch="Compounded tirzepatide from $167/mo"
      />

      {/* YMYL compliance: medical / FDA disclaimer banner */}
      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">

            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-glp1-charcoal/60">
              <Link href="/compounded-tirzepatide" className="hover:text-glp1-charcoal">Compounded Tirzepatide</Link>
              <span className="mx-2">›</span>
              <span className="text-glp1-charcoal">Tirzepatide with B12</span>
            </nav>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-teal">
              <Beaker className="h-3.5 w-3.5" /> Peptide Stack Guide
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Tirzepatide with B12
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Many compounding pharmacies sell tirzepatide with vitamin B12 added. Here&rsquo;s what B12 does in this formulation, whether it improves weight-loss outcomes, and which providers offer it.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <span>Reviewed by Chad Simpson, Founder GLP1CompareHub</span>
            </div>

            {/* Key fact box */}
            <div className="mt-8 rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/60 p-5">
              <div className="grid gap-4 sm:grid-cols-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-glp1-charcoal">B12</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Nutrient support additive — not an efficacy booster</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glp1-charcoal">0</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Peer-reviewed trials on tirz + B12 vs tirz alone for weight loss</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glp1-charcoal">503A</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Only from compounding pharmacies — not in branded Zepbound or Mounjaro</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT IS IT ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              What Is Tirzepatide with B12?
            </h2>

            <div className="prose-style max-w-3xl">
              <p className="text-glp1-charcoal/85 text-sm leading-relaxed mb-4">
                Tirzepatide with B12 is a compounded medication combining two ingredients:
              </p>

              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-glp1-orange/20 flex items-center justify-center text-xs font-bold text-glp1-orange">1</div>
                    <h3 className="font-semibold text-glp1-charcoal">Tirzepatide</h3>
                  </div>
                  <p className="text-sm text-glp1-charcoal/80">
                    A dual GLP-1/GIP receptor agonist. The active weight-loss and blood-sugar-regulation compound. Same molecule as branded Zepbound/Mounjaro. Weekly subcutaneous injection at doses from 2.5mg to 15mg.
                  </p>
                </div>

                <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-glp1-teal/20 flex items-center justify-center text-xs font-bold text-glp1-teal">2</div>
                    <h3 className="font-semibold text-glp1-charcoal">Vitamin B12</h3>
                  </div>
                  <p className="text-sm text-glp1-charcoal/80">
                    A water-soluble vitamin (cobalamin) essential for nerve function, red blood cell formation, and DNA synthesis. Added as cyanocobalamin (synthetic) or methylcobalamin (active form). Not a weight-loss agent — a nutrient.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    <strong>Important framing:</strong> The B12 component is a nutritional supplement, not a medication that changes tirzepatide&rsquo;s mechanism of action. Adding B12 does not make tirzepatide &ldquo;stronger&rdquo; or increase fat loss. It supplements a nutrient that GLP-1 users may need more of due to reduced food intake and altered gut motility.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY B12 ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Why Do Compounders Add B12 to Tirzepatide?
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-red-700">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-glp1-charcoal text-lg">GLP-1 Medications Reduce B12 Absorption</h3>
                    <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                      Tirzepatide significantly reduces appetite and food intake — often by 30–50% during active treatment. When people eat substantially less, they naturally consume less B12. GLP-1 medications also slow gastric emptying and alter gut motility, which can reduce the efficiency of B12 absorption from food. Patients on GLP-1 therapy for 6+ months who do not supplement may develop B12 deficiency, presenting as fatigue, peripheral neuropathy, or cognitive fog — symptoms that could be mistaken for GLP-1 side effects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-blue-700">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-glp1-charcoal text-lg">Injectable B12 Has Superior Bioavailability vs Oral</h3>
                    <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                      Oral B12 supplements have highly variable absorption — as low as 1–3% for large doses — because absorption depends on intrinsic factor production in the stomach. When B12 is delivered subcutaneously (same route as the tirzepatide injection), absorption is essentially 100%, bypassing gut variability entirely. Including B12 in the compounded tirzepatide vial lets patients get effective B12 supplementation without adding a separate oral supplement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-green-700">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-glp1-charcoal text-lg">Compounders Use It as a Differentiator</h3>
                    <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                      Compounding pharmacies and telehealth providers offering B12 combinations can position their formulation as &ldquo;premium&rdquo; vs bare tirzepatide. For patients familiar with B12 injection protocols from medspas (common in the weight-loss space), a tirzepatide + B12 compound feels like a comprehensive formula. This is a marketing angle as much as a clinical one — but the underlying logic (B12 supplementation during GLP-1 therapy) is medically sound.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EVIDENCE SECTION ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Does B12 Improve Weight-Loss Results on Tirzepatide?
            </h2>

            <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-glp1-charcoal/50 shrink-0 mt-1" />
                <div>
                  <h3 className="mb-3 font-semibold text-glp1-charcoal text-lg">The Direct Answer: No Clinical Evidence for Enhanced Weight Loss</h3>
                  <p className="text-sm text-glp1-charcoal/80 leading-relaxed mb-3">
                    There are no peer-reviewed, randomized clinical trials that specifically test tirzepatide + B12 vs tirzepatide alone for weight-loss outcomes. B12 is not a GLP-1 receptor agonist, a GIP receptor agonist, or an appetite-suppressing agent — it does not share a mechanism of action with tirzepatide and there is no pharmacological reason it would amplify tirzepatide&rsquo;s weight-loss effect.
                  </p>
                  <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                    <strong>Where B12 can make a difference:</strong> In patients who become B12-deficient from sustained caloric restriction on tirzepatide, resolving the deficiency can alleviate fatigue and cognitive symptoms. A patient who feels better and has more energy may adhere more consistently to diet and exercise — which indirectly supports better weight-loss outcomes. This is a meaningful benefit, but it&rsquo;s not the same as B12 &ldquo;boosting&rdquo; tirzepatide.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                <h3 className="mb-3 font-semibold text-green-900">B12 Is Worth Adding Because:</h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>GLP-1 users on reduced caloric intake are at real B12 deficiency risk</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Subcutaneous B12 has nearly 100% absorption — superior to oral forms</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>B12 is safe at all typical injectable doses (water-soluble, no upper toxicity)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Resolving B12 deficiency symptoms (fatigue, brain fog) can improve program adherence</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>No known negative interaction with tirzepatide</span></li>
                </ul>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-5">
                <h3 className="mb-3 font-semibold text-yellow-900">The Caveats:</h3>
                <ul className="space-y-2 text-sm text-yellow-900">
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>B12 does not increase appetite suppression or fat metabolism</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>No clinical trials exist comparing outcomes of tirz+B12 vs tirz alone</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>Not all compounders use the same B12 form or dose — verify before choosing</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>Patients with adequate B12 levels will not notice a difference from supplementation</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>B12 variants (cyanocobalamin vs methylcobalamin) vary across compounders</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CYANOCOBALAMIN VS METHYLCOBALAMIN ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Cyanocobalamin vs Methylcobalamin: Which Is in Your Compound?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Cyanocobalamin</h3>
                <div className="space-y-3 text-sm text-glp1-charcoal/80">
                  <p>The standard synthetic form of B12 used in most pharmaceutical compounding. Stable at room temperature, less expensive to produce, and well-studied. The body converts cyanocobalamin to active B12 (adenosylcobalamin and methylcobalamin) through metabolic conversion.</p>
                  <p><strong>Most common in compounded GLP-1 formulations</strong> — less expensive for compounders and pharmacologically effective.</p>
                  <ul className="space-y-1 mt-2">
                    <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Stable, cost-effective</span></li>
                    <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Well-established safety profile</span></li>
                    <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Requires metabolic conversion (most people do this fine)</span></li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Methylcobalamin</h3>
                <div className="space-y-3 text-sm text-glp1-charcoal/80">
                  <p>The active coenzyme form of B12 — the form cells use directly. Favored by integrative medicine practitioners who argue that patients with MTHFR gene variants or other metabolic differences may not convert cyanocobalamin as efficiently. More expensive to produce.</p>
                  <p><strong>Less common in compounded GLP-1 formulations</strong> but available from some specialized compounders on request.</p>
                  <ul className="space-y-1 mt-2">
                    <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Active form — no conversion required</span></li>
                    <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Preferred if you have MTHFR variants or conversion concerns</span></li>
                    <li className="flex gap-2"><AlertCircle className="h-3.5 w-3.5 shrink-0 text-yellow-600 mt-0.5" /><span>More expensive; less available from compounders</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4 text-sm text-glp1-charcoal/75">
              <strong>Practical note:</strong> For most patients, the difference between the two forms is clinically insignificant when delivered subcutaneously. Both raise blood B12 levels effectively. If you have MTHFR genetic variants or specific methylation concerns, ask your provider or compounding pharmacy which form they use and whether methylcobalamin is available as an alternative.
            </div>
          </div>
        </section>

        {/* ============ PROVIDERS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Providers Offering Compounded Tirzepatide
            </h2>
            <p className="mb-2 text-sm text-glp1-charcoal/70">
              The following providers offer compounded tirzepatide via telehealth. B12 inclusion varies — verify directly with each provider&rsquo;s clinical team whether their standard formulation includes B12 and which form.
            </p>
            <p className="mb-6 text-xs text-glp1-charcoal/50">
              Pricing Gronk-verified May 2026.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {/* TMates */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">TMates</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">Best Price</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">$167–$297/mo (tirzepatide)</div>
                  <div className="text-xs mt-1">12-month plan = $167/mo ($1,999 upfront). Same price all doses. Also offers semaglutide, NAD+, TRT.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 availability: <strong>Verify directly with TMates</strong>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-orange-dark"
                >
                  Visit TMates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Eden Health */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">NAD+ Ecosystem</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">$229–$249/mo (tirzepatide)</div>
                  <div className="text-xs mt-1">Strong NAD+ and peptide stack integration. Verified Katalys-active program.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 availability: <strong>Verify directly with Eden Health</strong>
                </div>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit Eden Health <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* MEDVi */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">MEDVi</h3>
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-800">Editor&rsquo;s Pick</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">$229–$299/mo (tirzepatide)</div>
                  <div className="text-xs mt-1">Gronk-verified pricing. Highest brand-search volume in our stack. Cancel anytime.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 availability: <strong>Verify directly with MEDVi</strong>
                </div>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit MEDVi <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* DirectMeds */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">DirectMeds</h3>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">Sublingual Option</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">Pricing: Verify on site</div>
                  <div className="text-xs mt-1">Unique sublingual GLP-1 format alongside injectable. Strong peptide catalog.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 availability: <strong>Verify directly with DirectMeds</strong>
                </div>
                <a
                  href={directmedsUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit DirectMeds <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  We are actively verifying which providers include B12 as standard vs. on-request vs. not available. Until individual providers confirm their formulation, we list them here based on their tirzepatide availability and encourage direct verification. Do not choose a provider based solely on B12 inclusion — price, clinical support, and program quality matter more.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">FAQ</h2>

            <div className="space-y-5">
              {faqSchema.mainEntity.map((q) => (
                <details key={q.name} className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <summary className="cursor-pointer font-semibold text-glp1-charcoal">
                    {q.name}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-glp1-charcoal/85">
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8 border-t border-glp1-charcoal/10 pt-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Compounded Tirzepatide Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/best-compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Best Compounded Tirzepatide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tirzepatide-vs-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Tirzepatide vs Semaglutide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* YMYL compliance: editorial review box */}
      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />

      <GLP1Footer />
    </GLP1Layout>
  );
}
