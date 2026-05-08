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
  X,
  AlertCircle,
  ExternalLink,
  Calendar,
  Award,
} from 'lucide-react';

// =============================================================================
// /oral-semaglutide-vs-injection  (600 vol, status: queued → live)
// =============================================================================
// Targets patients deciding between oral semaglutide formats (Rybelsus branded,
// compounded oral drops/sublingual) vs injectable semaglutide (Wegovy/Ozempic
// branded, or compounded injectable). High purchase intent — this is a decision
// query, not purely informational.
//
// Key facts:
// - Rybelsus (oral, Novo Nordisk) = branded oral semaglutide for T2D; NOT FDA-
//   approved for weight loss at the doses available (3/7/14mg tablets);
//   bioavailability ~1% (taken fasting, no water 30 min before)
// - Wegovy/Ozempic injectable = 94%+ bioavailability; gold standard for weight loss
// - Compounded oral semaglutide (sublingual drops) = not FDA-approved; oral
//   bioavailability claims vary by compounder; no published RCTs for compounded oral
// - Injectable compounded sema = $99-249/mo via our verified providers
//
// Verdict: injectable is almost always better for weight loss (bioavailability gap).
// Oral makes sense only for needle-averse patients who accept reduced efficacy risk.
// =============================================================================

export const metadata: Metadata = {
  title: 'Oral Semaglutide vs Injection 2026: Which Works Better for Weight Loss? | GLP1CompareHub',
  description:
    'Oral semaglutide vs injection compared on bioavailability, weight loss efficacy, cost, and who each format is right for. Injectable wins on absorption — oral wins on needle-free convenience.',
  alternates: { canonical: 'https://glp1comparehub.com/oral-semaglutide-vs-injection' },
  openGraph: {
    title: 'Oral Semaglutide vs Injection 2026: The Real Bioavailability Gap',
    description:
      'Oral semaglutide has ~1% bioavailability vs 94%+ for injectable. Here\'s what that means for weight loss, which format to choose, and verified 2026 pricing.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/oral-semaglutide-vs-injection',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Oral Semaglutide vs Injection', item: 'https://glp1comparehub.com/oral-semaglutide-vs-injection' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Oral Semaglutide vs Injection 2026: Bioavailability, Weight Loss Outcomes, and Which to Choose',
  description:
    'Comprehensive comparison of oral semaglutide (Rybelsus, compounded sublingual) vs injectable semaglutide (Wegovy, Ozempic, compounded injectable) on bioavailability, efficacy, cost, and patient fit.',
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
    '@id': 'https://glp1comparehub.com/oral-semaglutide-vs-injection',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is oral semaglutide as effective as injectable for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — at the doses currently available, oral semaglutide (Rybelsus 3/7/14mg) achieves less weight loss than injectable semaglutide (Wegovy 2.4mg weekly). The primary reason is bioavailability: Rybelsus has approximately 1% oral bioavailability (requiring fasting and specific dosing conditions), while Wegovy injectable achieves 94%+ bioavailability. In PIONEER trials (Rybelsus) vs STEP trials (Wegovy), injectable semaglutide produced roughly twice the weight loss. A higher-dose oral semaglutide (50mg tablet, Novo Nordisk "Rybelsus for obesity") is in development and showed more comparable results in Phase 3 trials, but is not yet commercially available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Rybelsus and Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rybelsus and Wegovy are both brand-name semaglutide medications by Novo Nordisk — same molecule, different routes and indications. Rybelsus is a daily oral tablet (3mg, 7mg, or 14mg) FDA-approved for Type 2 diabetes management. Wegovy is a once-weekly subcutaneous injection (0.25mg titrating to 2.4mg) FDA-approved for chronic weight management. Because the injectable reaches substantially higher plasma concentrations at therapeutic doses, Wegovy produces significantly more weight loss than Rybelsus at commercially available doses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does compounded oral semaglutide compare to compounded injectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded injectable semaglutide has a strong efficacy track record — it uses the same subcutaneous injection route as Wegovy, which delivers 94%+ bioavailability. Compounded oral semaglutide (sublingual drops or tablets) from 503A pharmacies has significantly less clinical evidence. No published randomized trials have directly tested compounded oral semaglutide efficacy or bioavailability. The compounded oral formulations also face more aggressive FDA scrutiny. For weight-loss efficacy, compounded injectable semaglutide at standard titration doses is the better-evidenced choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should choose oral semaglutide over injectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oral semaglutide is appropriate for: (1) patients with severe needle phobia who cannot tolerate any injection; (2) patients with Type 2 diabetes whose primary goal is blood sugar control (Rybelsus is FDA-approved for this indication), where a more modest weight-loss effect is acceptable; (3) patients who prioritize convenience and are willing to accept reduced weight-loss efficacy. Patients whose primary goal is significant weight loss and who can tolerate weekly injections will almost always achieve better outcomes with injectable semaglutide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does oral semaglutide cost vs injectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded oral Rybelsus costs approximately $936/month at retail cash pricing as of May 2026. Branded injectable Wegovy is approximately $1,349/month. Compounded injectable semaglutide from telehealth providers is $99–$249/month (e.g., Strut Health $99, TMates $158–$249, Eden Health $229–$249) — 80–90% cheaper than branded options. Compounded oral semaglutide pricing varies by provider and is not broadly standardized; verify directly with individual providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a needle-free injectable alternative to semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not for semaglutide itself — all injectable semaglutide uses standard subcutaneous pen injectors. However, Embody offers compounded tirzepatide in a chewable gum format, and TMates offers oral (sublingual drop) tirzepatide and semaglutide formulations at the same price as their injectable. These options provide needle-free GLP-1 delivery, though clinical evidence for compounded oral bioavailability is limited compared to injectable.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  oral: string;
  injectable: string;
  winner?: 'oral' | 'injectable' | 'tie';
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Bioavailability',
    oral: '~1% (Rybelsus branded) / varies for compounded sublingual',
    injectable: '~94% (subcutaneous)',
    winner: 'injectable',
  },
  {
    label: 'Dosing frequency (branded)',
    oral: 'Daily tablet (Rybelsus)',
    injectable: 'Once weekly injection (Wegovy/Ozempic)',
    winner: 'injectable',
  },
  {
    label: 'FDA-approved for weight loss',
    oral: 'No (Rybelsus approved for T2D only, not weight loss)',
    injectable: 'Yes — Wegovy approved for chronic weight management',
    winner: 'injectable',
  },
  {
    label: 'Weight loss at max dose (branded trials)',
    oral: '~4–5% body weight (Rybelsus 14mg, PIONEER)',
    injectable: '~12–14% body weight (Wegovy 2.4mg, STEP-1)',
    winner: 'injectable',
  },
  {
    label: 'Dosing requirements',
    oral: 'Fasting + no water for 30 min before/after (Rybelsus)',
    injectable: 'No fasting required',
    winner: 'injectable',
  },
  {
    label: 'Needle-free',
    oral: 'Yes',
    injectable: 'No (subcutaneous pen injector)',
    winner: 'oral',
  },
  {
    label: 'Branded cash price (May 2026)',
    oral: '~$936/mo (Rybelsus)',
    injectable: '~$1,349/mo (Wegovy) / ~$1,028/mo (Ozempic)',
    winner: 'oral',
  },
  {
    label: 'Compounded price range (May 2026)',
    oral: 'Varies — verify with provider',
    injectable: '$99–$249/mo (Strut/TMates/Eden verified)',
    winner: 'injectable',
  },
  {
    label: 'Clinical evidence quality',
    oral: 'Good for branded Rybelsus (PIONEER trials); limited for compounded oral',
    injectable: 'Excellent for branded Wegovy (STEP trials); strong for compounded injectable',
    winner: 'injectable',
  },
  {
    label: 'GI side effects',
    oral: 'Nausea, diarrhea (similar to injectable but daily instead of weekly)',
    injectable: 'Nausea, diarrhea — peaks first 24h after injection, then fades',
    winner: 'tie',
  },
  {
    label: 'Availability through telehealth',
    oral: 'Limited (compounded oral); Rybelsus requires pharmacy Rx',
    injectable: 'Widely available through telehealth mail-order',
    winner: 'injectable',
  },
];

export default function OralSemaglutideVsInjectionPage() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'oral-semaglutide-vs-injection');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'oral-semaglutide-vs-injection');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'oral-semaglutide-vs-injection');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'oral-semaglutide-vs-injection');

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

      <StickyMobileCTA
        href={strutUrl}
        brandName="Strut Health"
        pricePitch="Compounded injectable sema from $99/mo"
      />
      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">

            {/* Answer-first box */}
            <div className="mb-8 rounded-xl border-2 border-glp1-charcoal/15 bg-glp1-cream/60 p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-glp1-charcoal/60 uppercase tracking-wide">
                <Award className="h-4 w-4" /> The Short Answer
              </div>
              <p className="text-lg font-semibold text-glp1-charcoal">
                Injectable semaglutide wins for weight loss — by a wide margin.
              </p>
              <p className="mt-2 text-sm text-glp1-charcoal/80">
                Oral semaglutide (Rybelsus) has ~1% bioavailability vs 94%+ for injectable Wegovy. That gap means roughly 2–3× less weight loss at commercially available doses. Oral makes sense mainly for patients with severe needle phobia. If weight loss is the goal and injections are tolerable, choose injectable.
              </p>
            </div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-orange">
              Medication Comparison
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Oral Semaglutide vs Injection 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Rybelsus (oral tablet), compounded sublingual drops, Wegovy (injectable), and compounded injectable semaglutide — compared on bioavailability, weight loss, cost, and who each format is right for.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <span>Reviewed by Chad Simpson, GLP1CompareHub</span>
            </div>
          </div>
        </section>

        {/* ============ BIOAVAILABILITY EXPLAINER ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              The Bioavailability Gap: Why It Matters
            </h2>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Oral Semaglutide</div>
                <div className="text-6xl font-bold text-red-500 mb-2">~1%</div>
                <p className="text-sm text-glp1-charcoal/80">
                  Rybelsus (branded oral) achieves approximately 1% oral bioavailability when taken correctly — fasting, with no more than 4 oz water, 30 minutes before any food, drink, or other medications. Even small deviations dramatically reduce absorption further.
                </p>
                <div className="mt-3 text-xs text-glp1-charcoal/60">
                  Source: Rybelsus prescribing information (FDA-approved labeling, Novo Nordisk)
                </div>
              </div>

              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-orange">Injectable Semaglutide</div>
                <div className="text-6xl font-bold text-green-600 mb-2">~94%</div>
                <p className="text-sm text-glp1-charcoal/80">
                  Subcutaneous injectable semaglutide (Wegovy, Ozempic, or compounded injectable) achieves approximately 89–94% bioavailability. The drug enters the bloodstream directly from the subcutaneous tissue — no GI absorption barrier, no food/drink restrictions.
                </p>
                <div className="mt-3 text-xs text-glp1-charcoal/60">
                  Source: Ozempic/Wegovy prescribing information (Novo Nordisk)
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5 text-sm text-glp1-charcoal/80">
              <h3 className="mb-2 font-semibold text-glp1-charcoal">What does 94× more bioavailability mean in practice?</h3>
              <p className="mb-3">
                It means that to deliver the same amount of active semaglutide to your bloodstream, oral administration requires 94× the dose. This is why Rybelsus top dose is 14 mg (taken daily) while Wegovy tops out at 2.4 mg (taken weekly) — and yet Wegovy still achieves dramatically more weight loss. The dose math isn&rsquo;t linear, but the outcome gap is real:
              </p>
              <ul className="space-y-1">
                <li><strong>PIONEER 1 trial (Rybelsus 14mg daily):</strong> ~4–5% body weight loss</li>
                <li><strong>STEP 1 trial (Wegovy 2.4mg weekly):</strong> ~12–14% body weight loss</li>
                <li><strong>Difference:</strong> ~3× more weight lost on injectable at equivalent trial conditions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ FORMATS OVERVIEW ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              All Four Semaglutide Formats
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Branded Oral</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Rybelsus (Novo Nordisk)</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/80">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>FDA-approved (for T2D)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Needle-free — daily tablet</span></li>
                  <li className="flex gap-2"><X className="h-4 w-4 shrink-0 text-red-500" /><span>NOT FDA-approved for weight loss</span></li>
                  <li className="flex gap-2"><X className="h-4 w-4 shrink-0 text-red-500" /><span>~1% bioavailability; strict fasting requirement</span></li>
                  <li className="flex gap-2"><X className="h-4 w-4 shrink-0 text-red-500" /><span>~$936/mo cash price</span></li>
                </ul>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Compounded Oral / Sublingual</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Compounded Sublingual Drops</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/80">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Needle-free — drops under tongue</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Available via telehealth; often cheaper than injectable</span></li>
                  <li className="flex gap-2"><X className="h-4 w-4 shrink-0 text-red-500" /><span>Not FDA-approved; limited bioavailability data</span></li>
                  <li className="flex gap-2"><X className="h-4 w-4 shrink-0 text-red-500" /><span>No RCTs on efficacy vs injectable</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" /><span>Regulatory landscape: evolving (503A enforcement active)</span></li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-glp1-orange">Best for Weight Loss</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Compounded Injectable Semaglutide</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/80">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>~94% bioavailability — same route as Wegovy</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>$99–$249/mo (verified May 2026)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Full GLP-1 weight-loss mechanism at clinical doses</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" /><span>Weekly injection required (fine for most; challenging for needle-phobic)</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" /><span>Regulatory uncertainty (503A enforcement, 503B proposal)</span></li>
                </ul>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Branded Injectable (Gold Standard)</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Wegovy / Ozempic</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/80">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>FDA-approved; highest clinical evidence</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>~12–14% weight loss (STEP-1 trial)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Stable regulatory status; GMP manufacturing</span></li>
                  <li className="flex gap-2"><X className="h-4 w-4 shrink-0 text-red-500" /><span>~$1,028–1,349/mo cash (without insurance)</span></li>
                  <li className="flex gap-2"><X className="h-4 w-4 shrink-0 text-red-500" /><span>Weekly injection required</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              Branded data from FDA-approved prescribing information and published clinical trials. Compounded pricing Gronk-verified May 2026.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Oral Semaglutide</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Injectable Semaglutide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td className={`px-4 py-3 ${row.winner === 'oral' ? 'font-semibold text-green-700' : 'text-glp1-charcoal/80'}`}>
                        {row.oral}
                      </td>
                      <td className={`px-4 py-3 ${row.winner === 'injectable' ? 'font-semibold text-green-700' : 'text-glp1-charcoal/80'}`}>
                        {row.injectable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ WHO SHOULD CHOOSE WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Who Should Choose Which?</h2>

            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Choose Injectable Semaglutide if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Your primary goal is maximum weight loss — injectable consistently produces 2–3× more weight loss than oral at available doses.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You can tolerate a once-weekly subcutaneous injection (most patients find this much easier than expected with the thin pen needles).</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want cost-effective access — compounded injectable sema starts at $99/mo, while oral options are typically more expensive at equivalent dosing.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You have limited patience for strict oral dosing protocols (fasting, no water for 30 min, etc.).</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want the option of compounded semaglutide through telehealth with verified providers.</span></li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-glp1-charcoal bg-glp1-cream/40 p-5">
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Consider Oral Semaglutide if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You have severe, treatment-limiting needle phobia and the anxiety around injections would prevent you from adhering to treatment.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You have Type 2 diabetes and your prescriber recommends Rybelsus specifically for blood sugar management (it is FDA-approved for T2D).</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You are researching the higher-dose oral semaglutide (50mg) that is in development — this may close the efficacy gap when it reaches market.</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" /><span>You are willing to accept reduced weight-loss outcomes in exchange for needle-free administration.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROVIDERS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Get Compounded Injectable Semaglutide
            </h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              These verified providers offer compounded injectable semaglutide via telehealth. Pricing Gronk-verified May 2026. Note: TMates also offers oral (sublingual) semaglutide at the same price if you prefer needle-free.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Strut Health</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">Lowest Price</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$99/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">Injectable compounded semaglutide. 503A compliance focus.</p>
                <a href={strutUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-orange-dark">
                  Visit Strut Health <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">TMates</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">Oral Option Available</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$158–$249/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">Injectable + oral sublingual at same price. Needle-free option if needed. 12-mo plan = $158/mo.</p>
                <a href={tmatesUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark">
                  Visit TMates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">NAD+ Stack</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$229–$249/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">Injectable compounded sema + tirzepatide. NAD+ ecosystem. Katalys-active program.</p>
                <a href={edenUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark">
                  Visit Eden Health <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Embody</h3>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">GLP-1 Gum Option</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$149 first, then $299/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">Injectable + GLP-1 chewing gum (compounded tirzepatide) — unique needle-free tirzepatide format.</p>
                <a href={embodyUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark">
                  Visit Embody <ExternalLink className="h-3.5 w-3.5" />
                </a>
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
                  <summary className="cursor-pointer font-semibold text-glp1-charcoal">{q.name}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-glp1-charcoal/85">{q.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 border-t border-glp1-charcoal/10 pt-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/compounded-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline">
                  Compounded Semaglutide Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/tirzepatide-vs-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline">
                  Tirzepatide vs Semaglutide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/best-compounded-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline">
                  Best Compounded Semaglutide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
