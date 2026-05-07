import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
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
// /semaglutide-with-b12  (1,900 vol, KD 22 — Tier B peptide stack)
// =============================================================================
// Same clinical rationale as tirzepatide-with-b12 but for semaglutide.
// B12 is commonly added by 503A compounders to semaglutide formulations.
// Key providers: Strut Health ($99/mo), TMates ($158-249/mo), Embody,
// Eden Health — B12 availability varies by provider/pharmacy.
//
// Higher volume (1,900) but KD 22 = medium competition. Primarily informational
// intent with commercial tail. Structure: clarify what B12 does, evidence review,
// cyano vs methyl, provider grid. Mirror of tirzepatide-with-b12 page.
// =============================================================================

export const metadata: Metadata = {
  title: 'Semaglutide with B12 2026: What It Is and Whether It Helps | GLP1CompareHub',
  description:
    'Semaglutide with B12 is a compounded formulation that adds vitamin B12 to semaglutide. Here\'s what B12 does, why compounders add it, and which providers offer it — verified May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/semaglutide-with-b12' },
  openGraph: {
    title: 'Semaglutide with B12 2026: Is the B12 Add-On Worth It?',
    description:
      'Many compounding pharmacies add B12 to compounded semaglutide. We explain the rationale, the evidence, and which telehealth providers offer it.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/semaglutide-with-b12',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compounded Semaglutide', item: 'https://glp1comparehub.com/compounded-semaglutide' },
    { '@type': 'ListItem', position: 3, name: 'Semaglutide with B12', item: 'https://glp1comparehub.com/semaglutide-with-b12' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Semaglutide with B12 2026: What It Is, Why Compounders Add It, and Who Offers It',
  description:
    'Guide to the compounded semaglutide + B12 combination: rationale for B12 addition, what the evidence says about efficacy, cyanocobalamin vs methylcobalamin, and verified provider options.',
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
    '@id': 'https://glp1comparehub.com/semaglutide-with-b12',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is semaglutide with B12?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semaglutide with B12 is a compounded formulation that combines semaglutide (a GLP-1 receptor agonist) with vitamin B12 — either cyanocobalamin (standard synthetic form) or methylcobalamin (active coenzyme form). This combination is available only from 503A or 503B compounding pharmacies — branded semaglutide medications like Wegovy and Ozempic (Novo Nordisk) do not contain B12.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do compounding pharmacies add B12 to semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two main reasons. First, semaglutide significantly reduces food intake, which can lead to reduced B12 absorption from diet. GLP-1 medications also alter gut motility, further affecting nutrient absorption over time. Subcutaneous B12 supplementation alongside semaglutide proactively addresses this deficiency risk. Second, the combination has marketing value — adding B12 positions the formulation as a more comprehensive wellness product, particularly for patients familiar with B12 injection protocols from medspas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does B12 make semaglutide work better for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No direct clinical evidence supports this claim. B12 is a water-soluble vitamin, not a GLP-1 agonist or appetite suppressant. There are no peer-reviewed randomized trials comparing semaglutide + B12 vs semaglutide alone for weight-loss outcomes. B12 can improve energy levels and resolve deficiency-related fatigue in patients on reduced-calorie intake, which may support better program adherence — but this is an indirect effect, not direct fat-loss potentiation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does compounded semaglutide with B12 cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide pricing ranges from $99/mo (Strut Health, GobyMeds — entry tier) to $158–$249/mo (TMates) to $229–$249/mo (Eden Health). Whether B12 is included in the standard formulation or available as an add-on varies by provider and compounding pharmacy. In most cases, the pricing for semaglutide with B12 is the same as semaglutide alone — B12 is included at no additional charge because the cost of adding it to the compound is minimal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is semaglutide with B12 legal in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide exists in a contested regulatory environment as of 2026. The FDA declared the semaglutide shortage resolved in early 2025, after which 503A compounders faced enforcement pressure. The FDA also proposed removing semaglutide from the 503B bulks list. As of May 2026, semaglutide compounding continues through 503A pharmacies under clinical necessity provisions, but the regulatory landscape is evolving. Patients should work with licensed prescribers and verify their provider\'s compliance posture before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What B12 dose is typically in compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B12 doses in compounded GLP-1 formulations typically range from 250 mcg to 1,000 mcg (1 mg) per injection. The exact amount varies by compounding pharmacy and prescriber preference. Most commonly it\'s cyanocobalamin at doses in this range. At any of these doses, B12 is well within safe limits — B12 has no established upper toxicity limit as a water-soluble vitamin. Verify the specific dose and form with your provider\'s clinical team.',
      },
    },
  ],
};

export default function SemaglutideWithB12Page() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'semaglutide-with-b12');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'semaglutide-with-b12');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'semaglutide-with-b12');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'semaglutide-with-b12');

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

      {/* CRO: sticky mobile CTA — Strut Health cheapest verified sema */}
      <StickyMobileCTA
        href={strutUrl}
        brandName="Strut Health"
        pricePitch="Compounded semaglutide from $99/mo"
      />

      {/* YMYL compliance: medical / FDA disclaimer banner */}
      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">

            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-glp1-charcoal/60">
              <Link href="/compounded-semaglutide" className="hover:text-glp1-charcoal">Compounded Semaglutide</Link>
              <span className="mx-2">›</span>
              <span className="text-glp1-charcoal">Semaglutide with B12</span>
            </nav>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-teal">
              <Beaker className="h-3.5 w-3.5" /> Peptide Stack Guide
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Semaglutide with B12
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Many compounding pharmacies include B12 in their semaglutide formulations. Here&rsquo;s the medical rationale, what the evidence actually shows, and which providers offer it.
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
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Nutrient support — not an efficacy booster for weight loss</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glp1-charcoal">$0</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Typical add-on cost — usually included in compounded price</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glp1-charcoal">503A</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Only from compounding pharmacies — not in Wegovy or Ozempic</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT IS IT ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              What Is Semaglutide with B12?
            </h2>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-glp1-orange/20 flex items-center justify-center text-xs font-bold text-glp1-orange">1</div>
                  <h3 className="font-semibold text-glp1-charcoal">Semaglutide</h3>
                </div>
                <p className="text-sm text-glp1-charcoal/80">
                  A GLP-1 receptor agonist. The active weight-loss and blood-sugar-regulation compound. Same molecule as branded Wegovy and Ozempic (Novo Nordisk). Weekly subcutaneous injection at doses from 0.25mg to 2.4mg.
                </p>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-glp1-teal/20 flex items-center justify-center text-xs font-bold text-glp1-teal">2</div>
                  <h3 className="font-semibold text-glp1-charcoal">Vitamin B12</h3>
                </div>
                <p className="text-sm text-glp1-charcoal/80">
                  A water-soluble vitamin (cobalamin) essential for nerve function, red blood cell formation, and DNA synthesis. Added as cyanocobalamin (synthetic) or methylcobalamin (active form). Typical injectable doses: 250–1,000 mcg.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Important framing:</strong> B12 is a nutritional supplement, not a weight-loss agent. Adding B12 does not change semaglutide&rsquo;s mechanism of action or increase fat loss. It addresses a nutrient that GLP-1 users may need more of — particularly during sustained periods of reduced food intake.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY B12 ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Why Do Compounders Add B12 to Semaglutide?
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-red-700">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-glp1-charcoal text-lg">Semaglutide Reduces Food Intake and B12 Absorption</h3>
                    <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                      Semaglutide at weight-loss doses (2.4 mg Wegovy protocol) suppresses appetite significantly — patients typically reduce caloric intake by 30–50% during active treatment. With substantially less food comes less dietary B12. Semaglutide also slows gastric emptying, which alters the GI environment where B12 absorption (dependent on intrinsic factor and gastric acid) occurs. The combined effect creates meaningful B12 deficiency risk in long-term users, particularly those with pre-existing low B12 levels.
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
                    <h3 className="mb-2 font-semibold text-glp1-charcoal text-lg">Subcutaneous B12 Has ~100% Bioavailability</h3>
                    <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                      Oral B12 supplements depend on intrinsic factor production in the stomach and can have very low absorption rates (1–3% for large oral doses). When B12 is delivered subcutaneously — the same injection route as compounded semaglutide — it bypasses GI absorption entirely, achieving near-complete bioavailability. Adding B12 to the semaglutide vial means one injection delivers both the medication and the supplement efficiently.
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
                    <h3 className="mb-2 font-semibold text-glp1-charcoal text-lg">Patient Familiarity with B12 Injections</h3>
                    <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                      B12 injection programs are very common at weight-loss clinics and medspas — many patients starting compounded semaglutide programs are already familiar with B12 shots as part of a wellness protocol. Including B12 in the semaglutide formulation provides continuity for these patients and positions the compounded product as more comprehensive than standalone semaglutide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EVIDENCE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Does B12 Make Semaglutide Work Better?
            </h2>

            <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-glp1-charcoal/50 shrink-0 mt-1" />
                <div>
                  <h3 className="mb-3 font-semibold text-glp1-charcoal text-lg">The Direct Answer: No Evidence for Enhanced Weight Loss</h3>
                  <p className="text-sm text-glp1-charcoal/80 leading-relaxed mb-3">
                    No randomized clinical trials have tested semaglutide + B12 vs semaglutide alone for weight-loss efficacy. B12 does not activate GLP-1 receptors, does not suppress appetite, and has no established fat-metabolism mechanism. Claims that B12 &ldquo;boosts&rdquo; or &ldquo;amplifies&rdquo; semaglutide are not supported by clinical evidence.
                  </p>
                  <p className="text-sm text-glp1-charcoal/80 leading-relaxed">
                    <strong>The indirect effect that matters:</strong> B12 deficiency on GLP-1 therapy causes fatigue, peripheral neuropathy, and cognitive fog. Supplementing B12 prevents or reverses deficiency, which can significantly improve how a patient feels during treatment. Better energy = better exercise tolerance = better program adherence = better outcomes. The pathway is real — it&rsquo;s just not a direct pharmacological amplification of semaglutide.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                <h3 className="mb-3 font-semibold text-green-900">B12 Is Medically Justified Because:</h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Semaglutide-driven caloric restriction creates real B12 deficiency risk</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Subcutaneous delivery is more effective than oral supplementation</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>B12 is safe with no upper toxicity limit (water-soluble)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Resolving B12 deficiency improves energy and neurological function</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>No known negative interactions with semaglutide</span></li>
                </ul>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-5">
                <h3 className="mb-3 font-semibold text-yellow-900">Be Skeptical of Claims That:</h3>
                <ul className="space-y-2 text-sm text-yellow-900">
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>&ldquo;B12 boosts semaglutide&rsquo;s fat-burning effect&rdquo; — no evidence for this</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>&ldquo;Sema + B12 is clinically superior to sema alone&rdquo; — no trial data</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>&ldquo;B12 reduces GI side effects of semaglutide&rdquo; — not established</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>Any provider charging significantly more for the B12 combination — cost of adding B12 to a compound is minimal</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CYANO VS METHYL ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Cyanocobalamin vs Methylcobalamin in Compounded Semaglutide
            </h2>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Cyanocobalamin (Standard)</h3>
                <p className="text-sm text-glp1-charcoal/80 leading-relaxed mb-3">
                  The most common form used in compounded GLP-1 formulations. Stable, less expensive, and converted to active B12 forms in the body. The vast majority of compounded semaglutide formulations use cyanocobalamin.
                </p>
                <ul className="space-y-1 text-sm text-glp1-charcoal/80">
                  <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Most available from compounders</span></li>
                  <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Stable at temperatures in shipping</span></li>
                  <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>Effective for most patients</span></li>
                </ul>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Methylcobalamin (Active Form)</h3>
                <p className="text-sm text-glp1-charcoal/80 leading-relaxed mb-3">
                  The bioactive coenzyme form — used directly by cells without conversion. Less commonly available from compounders. May be preferable for patients with MTHFR genetic variants who have reduced methylation capacity.
                </p>
                <ul className="space-y-1 text-sm text-glp1-charcoal/80">
                  <li className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-green-600 mt-0.5" /><span>No conversion required in cells</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-3.5 w-3.5 shrink-0 text-yellow-600 mt-0.5" /><span>Less commonly available</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-3.5 w-3.5 shrink-0 text-yellow-600 mt-0.5" /><span>Matters most for MTHFR patients</span></li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4 text-sm text-glp1-charcoal/75">
              <strong>Bottom line:</strong> For most patients, cyanocobalamin is adequate and appropriate. If you have known MTHFR variants or methylation concerns, ask your provider whether methylcobalamin is available in their compounding pharmacy&rsquo;s formulation.
            </div>
          </div>
        </section>

        {/* ============ PROVIDERS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Providers Offering Compounded Semaglutide
            </h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              All providers below offer compounded semaglutide via telehealth. B12 inclusion varies by provider and compounding pharmacy — verify before selecting. Pricing Gronk-verified May 2026.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Strut Health */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Strut Health</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">Lowest Price</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">$99/mo compounded semaglutide</div>
                  <div className="text-xs mt-1">Gronk-verified. 503A compliance focus. Includes oral tirzepatide option.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 inclusion: <strong>Verify directly with Strut Health</strong>
                </div>
                <a
                  href={strutUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-orange-dark"
                >
                  Visit Strut Health <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* TMates */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">TMates</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">Best Long-Term Value</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">$158/mo on 12-month plan ($249 monthly)</div>
                  <div className="text-xs mt-1">Same-price-all-doses. Highest EPC ($16.09) and conversion rate (6.43%) in our Katalys stack.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 inclusion: <strong>Verify directly with TMates</strong>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit TMates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Eden Health */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">NAD+ Ecosystem</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">$229–$249/mo semaglutide</div>
                  <div className="text-xs mt-1">Strong peptide and NAD+ stack integration. Katalys-active affiliate program.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 inclusion: <strong>Verify directly with Eden Health</strong>
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

              {/* Embody */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Embody</h3>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Lowest First Month</span>
                </div>
                <div className="mb-3 text-sm text-glp1-charcoal/70">
                  <div className="font-semibold text-glp1-charcoal">$149 first month, then $299/mo flat</div>
                  <div className="text-xs mt-1">Spring Forward promo. Also offers GLP-1 gum (chewable tirzepatide). HSA/FSA eligible.</div>
                </div>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12 inclusion: <strong>Verify directly with Embody</strong>
                </div>
                <a
                  href={embodyUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit Embody <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/best-compounded-semaglutide"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
              >
                See the full ranked list → Best Compounded Semaglutide 2026 <ArrowRight className="h-4 w-4" />
              </Link>
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
                  href="/compounded-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Compounded Semaglutide Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tirzepatide-with-b12"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Tirzepatide with B12 <ArrowRight className="h-4 w-4" />
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
