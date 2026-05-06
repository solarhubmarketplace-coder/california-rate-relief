import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Sparkles, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sermorelin for Weight Loss May 2026: Cost, Evidence, GLP-1 Stack | GLP1CompareHub',
  description:
    'Sermorelin guide for the weight-loss + body composition use case. Cost ($79 first month at System Labs oral, $109 first month injectable), what the evidence shows, why it stacks with GLP-1, and the honest read on growth-hormone secretagogue therapy.',
  alternates: { canonical: 'https://glp1comparehub.com/sermorelin-for-weight-loss' },
  openGraph: {
    title: 'Sermorelin for Weight Loss — Cost, Evidence, GLP-1 Stack',
    description:
      'Oral $79 first month / injectable $109 first month at System Labs. Honest read on growth-hormone secretagogue therapy and how it pairs with GLP-1 weight loss.',
    url: 'https://glp1comparehub.com/sermorelin-for-weight-loss',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sermorelin for Weight Loss 2026: Cost, Evidence, and GLP-1 Stack',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/sermorelin-for-weight-loss',
  about: ['Sermorelin', 'Growth hormone secretagogue', 'Body composition', 'GLP-1 stack'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does sermorelin cause weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sermorelin does not directly cause weight loss the way GLP-1 medications do (appetite suppression and reduced caloric intake). Sermorelin is a growth hormone-releasing hormone (GHRH) analog that stimulates the pituitary to release growth hormone (GH). Higher GH levels can theoretically support body composition changes — preserving lean muscle and shifting fat metabolism — particularly during weight loss. The clinical evidence in healthy adults using sermorelin for weight loss specifically is preliminary; most peer-reviewed research is on adult GH deficiency or pediatric growth disorders.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does sermorelin cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verified May 2026 telehealth pricing: System Labs oral compounded sermorelin at $159/mo with $79 first month; System Labs injectable sermorelin at $219/mo with $109 first month. Direct Meds offers compounded sermorelin at $299.99/mo. Eden Health offers sermorelin in injection and oral disintegrating tablet (ODT) formats — verify pricing at intake. Local clinics typically charge $300-$500/mo for sermorelin programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sermorelin FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sermorelin acetate was FDA-approved historically for diagnosis and treatment of pediatric growth hormone deficiency, but the original branded product (Geref) was withdrawn from the US market years ago. As of May 2026, sermorelin is available almost exclusively as a compounded peptide through 503A pharmacies — NOT as an FDA-approved drug. Compounded sermorelin for adult anti-aging, body composition, or weight-loss support is an off-label use without FDA approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why pair sermorelin with GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biohacker thesis: GLP-1 reduces appetite and drives weight loss; sermorelin supports growth hormone secretion which is theorized to preserve lean muscle and improve body composition during the weight-loss phase. Lean-mass preservation is a real concern during rapid weight loss — patients can lose meaningful muscle alongside fat without protein and resistance-training discipline. Whether sermorelin meaningfully helps versus simply consuming adequate protein is not clinically established. The stack is anecdotal — no published trial has tested GLP-1 + sermorelin combination therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get oral or injectable sermorelin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Injectable sermorelin (subcutaneous, typically nightly) has higher and more predictable bioavailability — peptides survive better via injection than via GI tract or sublingual routes. Oral compounded sermorelin (sublingual or ODT formats) avoids needles but has uncharacterized bioavailability vs injection. For patients prioritizing efficacy, injectable is the default. For patients with strong needle aversion, oral is a reasonable starting point with the caveat that effectiveness may be reduced. System Labs offers both formats with first-month discounts ($79 oral, $109 injectable).',
      },
    },
  ],
};

export default function SermorelinForWeightLossPage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  const systemLabsUrl = buildAffiliateUrl('glp1-system-labs', 'sermorelin-for-weight-loss');
  const directMedsUrl = buildAffiliateUrl('glp1-directmeds', 'sermorelin-for-weight-loss');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Sermorelin for Weight Loss</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <span style={{ color: '#D4A33A' }}>Sermorelin</span> for Weight Loss 2026
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Growth hormone secretagogue therapy. $79 first month for oral, $109 first month for injectable at System Labs. Honest read on what sermorelin does, why GLP-1 patients are stacking it, and what the evidence supports.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 5, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Important: Sermorelin for weight loss is an off-label, NOT FDA-approved use
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                Sermorelin acetate was historically FDA-approved for pediatric growth hormone deficiency diagnosis,
                but the original branded product (Geref) was withdrawn from the US market. Compounded sermorelin sold
                today through 503A pharmacies for adult anti-aging, body composition, or weight-loss support is an
                off-label use without FDA approval. Clinical evidence for sermorelin&rsquo;s weight-loss effects in
                healthy adults is preliminary. Always work with a licensed prescriber.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-6 md:p-8' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
              <div className='flex items-start gap-3 mb-5'>
                <Trophy className='h-6 w-6 flex-shrink-0' style={{ color: '#D4A33A' }} />
                <h2
                  className='text-2xl md:text-3xl font-bold'
                  style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  TL;DR — What Sermorelin Actually Does
                </h2>
              </div>
              <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                Sermorelin is a growth hormone-releasing hormone (GHRH) analog that stimulates the pituitary gland to
                release growth hormone (GH). It is NOT a direct weight-loss agent like GLP-1. The body composition
                framing is theoretical: higher GH may help preserve lean muscle and shift fat metabolism during a
                caloric deficit. The strongest clinical evidence is in adult GH deficiency, not in healthy adults
                seeking weight loss.
              </p>
              <div className='grid md:grid-cols-3 gap-4 mt-4'>
                <VerdictCol
                  rank='Best for'
                  result='Body Composition'
                  detail='Lean mass preservation during GLP-1 weight loss; not a primary fat-loss agent.'
                />
                <VerdictCol
                  rank='Cheapest entry'
                  result='Oral $79 first mo'
                  detail='System Labs oral compounded sermorelin $79 first month / $159 ongoing.'
                  highlight
                />
                <VerdictCol
                  rank='Best efficacy'
                  result='Injectable $109 first'
                  detail='Higher bioavailability. System Labs injectable $109 first month / $219 ongoing.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mechanism */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Sparkles className='h-6 w-6' style={{ color: '#D4A33A' }} />
              How Sermorelin Works (vs Direct Growth Hormone)
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Sermorelin is a synthetic peptide composed of the first 29 amino acids of natural human GHRH. When
              administered, it binds to GHRH receptors on the pituitary gland and stimulates pulsatile release of
              growth hormone — the same release pattern the body produces naturally during sleep and exercise.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Why this matters vs direct GH:</strong> Synthetic human growth hormone (HGH, somatropin) is a
              Schedule III controlled substance in the US and has a black-market problem. Sermorelin is not scheduled,
              and the indirect mechanism preserves the body&rsquo;s feedback loops — your pituitary still controls
              the timing and amplitude of GH pulses, reducing the risk of supraphysiological GH levels that can cause
              insulin resistance, joint pain, and other side effects associated with direct GH abuse.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Practical effect:</strong> In adults with diminishing GH secretion (a normal age-related
              pattern), sermorelin can restore GH levels closer to younger-adult baseline. The downstream effects on
              body composition, sleep quality, and recovery are theorized but not as well-validated in healthy adults
              as the marketing suggests.
            </p>
          </div>
        </section>

        {/* Cost comparison */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Sermorelin Pricing (Verified May 2026)
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Provider</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Format</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>First Month</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Ongoing</th>
                  </tr>
                </thead>
                <tbody>
                  <PriceRow provider='System Labs' format='Oral compounded' first='$79' ongoing='$159/mo' winner />
                  <PriceRow provider='System Labs' format='Injectable' first='$109' ongoing='$219/mo' winner />
                  <PriceRow provider='Direct Meds' format='Compounded (format varies)' first='—' ongoing='$299.99/mo' />
                  <PriceRow provider='Eden Health' format='Injection + ODT tablets' first='—' ongoing='Verify at intake' />
                  <PriceRow provider='Local anti-aging clinic' format='Injection' first='$300-$500 startup' ongoing='$300-$500/mo' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Pricing Gronk-verified May 5, 2026. System Labs has explicit first-month discount pricing across both
              oral and injectable formats. Direct Meds offers compounded sermorelin at a flat $299.99/mo. Eden Health
              has sermorelin in both injectable and oral disintegrating tablet (ODT) format. Local anti-aging clinics
              typically charge meaningfully more.
            </p>
          </div>
        </section>

        {/* Honest evidence */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The Honest Evidence Read
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Sermorelin marketing typically claims fat loss, muscle gain, anti-aging, sleep improvement, libido boost,
              and recovery acceleration. The peer-reviewed evidence supports a more conservative read:
            </p>

            <div className='space-y-3'>
              <EvidenceRow
                claim='Restores GH secretion to younger-adult levels in older adults'
                evidence='Reasonably supported'
                detail='Sermorelin is well-validated for stimulating GH release. The mechanism is straightforward — it activates GHRH receptors. Restoring GH to younger-adult baseline in patients with age-related decline is real.'
              />
              <EvidenceRow
                claim='Improves body composition (more muscle, less fat) in adults'
                evidence='Preliminary'
                detail='Some studies show modest body-composition changes in older adults with documented GH deficiency. Healthy adults using sermorelin for body composition specifically have less robust evidence. Effect size in healthy adults is uncertain.'
              />
              <EvidenceRow
                claim='Improves sleep quality'
                evidence='Mixed'
                detail='GH is naturally released during sleep, particularly slow-wave sleep. Sermorelin can theoretically improve slow-wave sleep depth, but clinical trial data is mixed. Many patients report subjective improvement; objective polysomnography data is limited.'
              />
              <EvidenceRow
                claim='Direct fat loss / weight loss in healthy adults'
                evidence='Not well-supported'
                detail='Sermorelin is NOT a direct weight-loss agent. Marketing implying it causes fat loss the way GLP-1 does is misleading. Use it for body composition support during a weight-loss program, not as a primary fat-loss intervention.'
              />
              <EvidenceRow
                claim='Anti-aging effects'
                evidence='Preliminary'
                detail='Theoretical based on GH biology. Long-term controlled trials in healthy adults using sermorelin for anti-aging endpoints are limited.'
              />
            </div>
          </div>
        </section>

        {/* GLP-1 + sermorelin stack */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The GLP-1 + Sermorelin Stack — Lean Mass Preservation
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Lean-mass preservation is a real concern during rapid weight loss. Patients on GLP-1 medications can
              lose 15-25% of body weight over 12-18 months — and roughly 25-40% of that loss can come from lean
              muscle without active intervention. Adequate protein intake (~0.8-1.0g per pound bodyweight) and
              resistance training are the most evidence-based muscle-preservation tools.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The sermorelin theory:</strong> Higher GH levels support muscle protein synthesis and may help
              shift fat-vs-muscle loss ratio in favor of fat. Patients running a GLP-1 + sermorelin stack are
              theoretically optimizing both sides — appetite/calorie control via GLP-1, muscle preservation via
              sermorelin.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The honest read:</strong> No clinical trial has tested GLP-1 + sermorelin combination therapy.
              The supplementation rationale is medically defensible but the marginal benefit over disciplined protein
              + resistance training is not established. Patients pursuing this stack are typically optimizers, not
              evidence-based protocols.
            </p>

            <div className='p-5 rounded-2xl mt-5' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
              <div className='text-sm font-bold mb-2' style={{ color: '#7A6020' }}>
                System Labs: GLP-1 + Sermorelin stack pricing (single intake)
              </div>
              <div className='space-y-1 text-sm' style={{ color: '#3D5560' }}>
                <div>Compounded GLP-1: <strong>$179/mo</strong></div>
                <div>Sermorelin (oral): <strong>$79 first / $159 ongoing</strong></div>
                <div>Sermorelin (injectable): <strong>$109 first / $219 ongoing</strong></div>
                <div className='pt-2 mt-2 border-t' style={{ borderColor: '#D4A33A' }}>
                  <strong>Total (oral): $258 first month, $338/mo ongoing</strong>
                </div>
                <div>
                  <strong>Total (injectable): $288 first month, $398/mo ongoing</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured CTAs */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='p-6 rounded-2xl' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Cheapest entry · Both formats
                </div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  System Labs Sermorelin
                </h3>
                <p className='text-sm mb-2 leading-relaxed' style={{ color: '#3D5560' }}>
                  Oral: <strong>$79 first month / $159 ongoing</strong>
                </p>
                <p className='text-sm mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                  Injectable: <strong>$109 first month / $219 ongoing</strong>
                </p>
                <p className='text-sm mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                  Stack with System Labs GLP-1 ($179/mo), NAD+ ($79 first month), B-12 ($89/mo) under a single intake.
                  Lab-tested peptides from certified compounding pharmacies.
                </p>
                <a
                  href={systemLabsUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with System Labs <ArrowRight className='h-4 w-4' />
                </a>
              </div>
              <div className='p-6 rounded-2xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Adjacent peptide menu
                </div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  Direct Meds Sermorelin
                </h3>
                <p className='text-sm mb-2 leading-relaxed' style={{ color: '#3D5560' }}>
                  Compounded sermorelin: <strong>$299.99/mo</strong>
                </p>
                <p className='text-sm mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                  Higher monthly price than System Labs but Direct Meds offers compounded sublingual tirzepatide
                  ($224.10/mo) plus NAD+ and Epithalon — broadest adjacent peptide menu in the active stack.
                </p>
                <a
                  href={directMedsUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Explore Direct Meds <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Verified Telehealth Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              All providers ship to all 50 US states. Pricing verified May 5, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='sermorelin-for-weight-loss'
              heading='Top Compounded GLP-1 + Adjacent-Peptide Providers'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/sermorelin-for-weight-loss" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Build the right stack in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the verified provider for sermorelin, GLP-1, NAD+, B-12, or the full longevity protocol.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link href='/match' className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg' style={{ color: '#D4A33A' }}>
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link href='/nad-iv-therapy' className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all' style={{ color: 'white', border: '1.5px solid white' }}>
                  NAD+ Therapy Guide
                </Link>
                <Link href='/best-compounded-tirzepatide' className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all' style={{ color: 'white', border: '1.5px solid white' }}>
                  Top GLP-1 Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function VerdictCol({ rank, result, detail, highlight = false }: { rank: string; result: string; detail: string; highlight?: boolean }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {rank}
      </div>
      <div className='text-xl font-bold mb-2' style={{ color: highlight ? '#7CA982' : '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {result}
      </div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function PriceRow({ provider, format, first, ongoing, winner = false }: { provider: string; format: string; first: string; ongoing: string; winner?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>
        {provider}
        {winner && (
          <span className='inline-block ml-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            Cheapest
          </span>
        )}
      </td>
      <td className='px-5 py-3 text-sm' style={{ color: '#3D5560' }}>{format}</td>
      <td className='px-5 py-3 text-right font-bold' style={{ color: '#D4A33A' }}>{first}</td>
      <td className='px-5 py-3 text-right' style={{ color: '#3D5560' }}>{ongoing}</td>
    </tr>
  );
}

function EvidenceRow({ claim, evidence, detail }: { claim: string; evidence: string; detail: string }) {
  const evidenceColor = evidence.includes('supported') && !evidence.includes('Not') ? '#7CA982' : evidence === 'Mixed' || evidence === 'Preliminary' ? '#D4A33A' : evidence.includes('Not') ? '#B14739' : '#6B7B82';
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex flex-wrap items-baseline gap-3 mb-2'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{claim}</h3>
        <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F8F4ED', color: evidenceColor }}>
          Evidence: {evidence}
        </span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}
