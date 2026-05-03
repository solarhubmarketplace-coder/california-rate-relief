import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { primaryProviders } from '@/lib/glp1-providers';
import { ArrowRight, ShieldCheck, Trophy, AlertCircle, CircleCheck, X, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zepbound vs Wegovy 2026: Which GLP-1 Wins on Price, Side Effects, and Weight Loss? | GLP1CompareHub',
  description:
    'Side-by-side comparison of Zepbound (tirzepatide) and Wegovy (semaglutide). Trial weight loss (20.2% vs 14.9%), side effect profiles, monthly cost ($299–$1,498 vs $149–$1,839), and which one to ask your doctor about.',
  alternates: { canonical: 'https://glp1comparehub.com/zepbound-vs-wegovy' },
  openGraph: {
    title: 'Zepbound vs Wegovy 2026 — Side-by-Side Comparison',
    description:
      '20.2% vs 14.9% average weight loss in head-to-head trials. Plus pricing, side effects, and which GLP-1 to ask your doctor about.',
    url: 'https://glp1comparehub.com/zepbound-vs-wegovy',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Zepbound vs Wegovy 2026: Which GLP-1 Wins?',
  datePublished: '2026-05-03',
  dateModified: '2026-05-03',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/zepbound-vs-wegovy',
  about: ['Zepbound (tirzepatide)', 'Wegovy (semaglutide)', 'GLP-1 weight loss medications'],
  citation: [
    { '@type': 'CreativeWork', name: 'SURMOUNT-1 (NEJM 2022)', url: 'https://www.nejm.org/doi/10.1056/NEJMoa2206038' },
    { '@type': 'CreativeWork', name: 'STEP-1 (NEJM 2021)', url: 'https://www.nejm.org/doi/10.1056/NEJMoa2032183' },
    { '@type': 'CreativeWork', name: 'SURMOUNT-5 (NEJM 2025)', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2416394' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Zepbound better than Wegovy for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In SURMOUNT-5 (NEJM 2025), the head-to-head trial, tirzepatide (Zepbound) produced 20.2% average weight loss at 72 weeks vs semaglutide (Wegovy) at 13.7% — about 50% more weight loss. Tirzepatide is the only dual GIP/GLP-1 receptor agonist; semaglutide is GLP-1 only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper, Zepbound or Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026, branded Zepbound through telehealth is approximately $1,498/mo, branded Wegovy is approximately $1,839/mo. The new Wegovy Pill (oral semaglutide) is the cheapest branded option at ~$149/mo. Compounded versions of both medications are available at $99-$399/mo through 503A compounding pharmacies (NOT FDA-approved).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Zepbound and Wegovy have the same side effects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both have similar GI side-effect profiles: nausea, vomiting, diarrhea, constipation. SURMOUNT-1 (Zepbound) reported nausea in ~31% of patients; STEP-1 (Wegovy) reported nausea in ~44%. Both can cause rare but serious effects including pancreatitis and gallbladder disease. Both carry an FDA boxed warning for thyroid C-cell tumor risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from Wegovy to Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Switching is medically possible and increasingly common given Zepbound\'s greater weight loss in trials. Your prescriber will typically discontinue one medication, allow a washout period, and re-titrate from the starting dose of the new medication. Do not switch without prescriber supervision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover Zepbound or Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coverage varies. Many commercial plans cover one or both for patients with BMI ≥30 or BMI ≥27 + comorbidity. Medicare does not cover GLP-1 for weight loss (coverage exists for diabetes indications via Mounjaro/Ozempic, the same molecules under different brand names). Check directly with your insurer.',
      },
    },
  ],
};

export default function ZepboundVsWegovyPage() {
  // Pull a few branded providers for the comparison table at the bottom
  const brandedFirstProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Brand Name'))
    .slice(0, 6);

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#FFF1D6', borderColor: '#E8DDD0' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#8A6D1A' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission — at no extra cost to you.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#7A6478' }}>Home</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <span style={{ color: '#3A1B3D' }}>Zepbound vs Wegovy</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Zepbound <span style={{ color: '#F47C5B' }}>vs</span> Wegovy 2026
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#4B3548' }}>
              Side-by-side comparison of the two FDA-approved branded GLP-1 weight-loss medications.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#7A6478' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 3, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
            </div>
          </div>
        </section>

        {/* TL;DR verdict */}
        <section className='py-10' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-2xl p-6 md:p-8 bg-white'
              style={{ border: '2px solid #F47C5B' }}
            >
              <div className='flex items-start gap-3 mb-5'>
                <Trophy className='h-6 w-6 flex-shrink-0' style={{ color: '#F47C5B' }} />
                <h2
                  className='text-2xl md:text-3xl font-bold'
                  style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  TL;DR Verdict
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  label='Weight loss winner'
                  winner='Zepbound'
                  detail='20.2% vs 13.7% in head-to-head SURMOUNT-5 trial — about 50% more weight loss'
                />
                <VerdictCol
                  label='Tolerability winner'
                  winner='Wegovy'
                  detail='Slightly milder GI side-effect profile in some patients; longer FDA track record (approved 2021 vs 2023)'
                />
                <VerdictCol
                  label='Cost winner'
                  winner='Wegovy Pill'
                  detail='New oral Wegovy from $149/mo. Branded injectable Zepbound ~$1,498/mo; branded injectable Wegovy ~$1,839/mo'
                />
              </div>
            </div>
          </div>
        </section>

        {/* At-a-glance table */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Head-to-Head At a Glance
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E8DDD0' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#FDF7F0' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Factor</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#3A1B3D' }}>Zepbound</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#3A1B3D' }}>Wegovy</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <FactRow factor='Active ingredient' zep='Tirzepatide' weg='Semaglutide' winner='—' />
                  <FactRow factor='Mechanism' zep='Dual GIP + GLP-1' weg='GLP-1 only' winner='Zepbound' />
                  <FactRow factor='Manufacturer' zep='Eli Lilly' weg='Novo Nordisk' winner='—' />
                  <FactRow factor='FDA approval (weight loss)' zep='2023' weg='2021' winner='Wegovy (longer track record)' />
                  <FactRow factor='Avg weight loss (trial)' zep='20.2% (SURMOUNT-1, 72 wk)' weg='14.9% (STEP-1, 68 wk)' winner='Zepbound' />
                  <FactRow factor='Head-to-head (SURMOUNT-5)' zep='20.2%' weg='13.7%' winner='Zepbound' />
                  <FactRow factor='Format(s)' zep='Injectable only' weg='Injectable + Oral Pill (new 2025)' winner='Wegovy (more options)' />
                  <FactRow factor='Branded telehealth price' zep='~$1,498/mo' weg='~$1,839/mo (inj) / $149/mo (pill)' winner='Wegovy Pill' />
                  <FactRow factor='Compounded available' zep='Yes (compounded tirzepatide)' weg='Yes (compounded semaglutide)' winner='Tie' />
                </tbody>
              </table>
            </div>
            <p className='text-xs mt-3 italic' style={{ color: '#7A6478' }}>
              Trial citations: SURMOUNT-1 (NEJM 2022), STEP-1 (NEJM 2021), SURMOUNT-5 (NEJM 2025).
              Pricing verified May 2026 from telehealth provider sites; branded GLP-1 pricing varies by pharmacy and insurance status.
            </p>
          </div>
        </section>

        {/* Mechanism explainer */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Why Zepbound Often Produces More Weight Loss
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#4B3548' }}>
              Zepbound (tirzepatide) is the only dual <strong>GIP + GLP-1</strong> receptor agonist on the market.
              Wegovy (semaglutide) targets only the GLP-1 receptor. The dual mechanism produces additional appetite
              suppression and metabolic effects beyond what a GLP-1-only agent achieves.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#4B3548' }}>
              In <strong>SURMOUNT-5</strong> — the only head-to-head trial of the two molecules — patients on tirzepatide
              lost 20.2% of body weight at 72 weeks vs 13.7% on semaglutide. That is roughly 50% more weight loss
              from the dual-agonist arm.
            </p>
            <p className='text-sm italic' style={{ color: '#7A6478' }}>
              Source: <a href='https://www.nejm.org/doi/full/10.1056/NEJMoa2416394' target='_blank' rel='noopener noreferrer' style={{ color: '#F47C5B', textDecoration: 'underline' }}>SURMOUNT-5, NEJM 2025</a>.
            </p>
          </div>
        </section>

        {/* Side effects */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Side Effects Compared (Trial Data)
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E8DDD0' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#FDF7F0' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Side Effect</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#3A1B3D' }}>Zepbound (SURMOUNT-1)</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#3A1B3D' }}>Wegovy (STEP-1)</th>
                  </tr>
                </thead>
                <tbody>
                  <SideEffectRow effect='Nausea' zep='31%' weg='44%' />
                  <SideEffectRow effect='Diarrhea' zep='23%' weg='32%' />
                  <SideEffectRow effect='Vomiting' zep='10%' weg='25%' />
                  <SideEffectRow effect='Constipation' zep='17%' weg='24%' />
                  <SideEffectRow effect='Discontinuation due to side effects' zep='6.2%' weg='7.0%' />
                </tbody>
              </table>
            </div>
            <p className='text-xs mt-3 italic' style={{ color: '#7A6478' }}>
              Both medications carry FDA boxed warnings for thyroid C-cell tumors (based on rodent studies).
              Both are contraindicated in patients with personal or family history of medullary thyroid carcinoma
              or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Always consult a prescriber before starting.
            </p>
          </div>
        </section>

        {/* Cost section */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Cost Comparison (May 2026)
            </h2>

            <div
              className='mb-5 rounded-2xl p-5 flex items-start gap-3'
              style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}
            >
              <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
              <div>
                <div className='text-sm font-bold mb-1' style={{ color: '#B14739' }}>
                  FDA Compounded Notice
                </div>
                <div className='text-sm' style={{ color: '#4B3548' }}>
                  The FDA April 30, 2026 503B compounded shutdown proposal continues to evolve.
                  Compounded tirzepatide and semaglutide remain available through 503A pharmacies but
                  are <strong>NOT FDA-approved drugs</strong>. Confirm legal/medical guidance with your prescriber.
                </div>
              </div>
            </div>

            <div className='space-y-3'>
              <CostRow label='Branded Zepbound (telehealth, no insurance)' price='~$1,498/mo' />
              <CostRow label='Branded Wegovy injectable (telehealth, no insurance)' price='~$1,839/mo' />
              <CostRow label='Wegovy Pill (NEW oral semaglutide)' price='from $149/mo' highlight />
              <CostRow label='Compounded tirzepatide (503A pharmacy)' price='$133–$399/mo' />
              <CostRow label='Compounded semaglutide (503A pharmacy)' price='$99–$297/mo' />
            </div>

            <p className='text-xs mt-4' style={{ color: '#7A6478' }}>
              Insurance coverage for branded Zepbound and Wegovy varies. Many commercial plans cover one
              or both for patients meeting BMI eligibility. Use our <Link href='/tools/cost-calculator' className='underline' style={{ color: '#F47C5B' }}>cost calculator</Link> to estimate
              your 12-month spend at any provider.
            </p>
          </div>
        </section>

        {/* Decision tree */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Which One Should You Ask Your Doctor About?
            </h2>
            <div className='space-y-4'>
              <DecisionRow
                ifClause='You want maximum weight loss and tolerate GI side effects'
                pick='Zepbound'
                color='#F47C5B'
              />
              <DecisionRow
                ifClause='You want a longer FDA track record and slightly milder side effects'
                pick='Wegovy'
                color='#F47C5B'
              />
              <DecisionRow
                ifClause='You want the cheapest branded GLP-1 and prefer oral over injection'
                pick='Wegovy Pill (oral semaglutide)'
                color='#5FBFAA'
              />
              <DecisionRow
                ifClause='You are uninsured and need lowest possible cost'
                pick='Compounded semaglutide ($99/mo at GobyMeds)'
                color='#5FBFAA'
              />
              <DecisionRow
                ifClause='Your insurance covers one but not the other'
                pick='Whichever is covered (cost difference dominates)'
                color='#7A6478'
              />
            </div>
          </div>
        </section>

        {/* Provider comparison table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Where to Get Zepbound or Wegovy
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#7A6478' }}>
              Verified branded-GLP-1 telehealth providers, May 2026.
            </p>
            <GLP1ComparisonTable
              providers={brandedFirstProviders}
              source='zepbound-vs-wegovy'
              heading='Compare Branded GLP-1 Telehealth Providers'
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #F47C5B 0%, #F09A65 50%, #EFC079 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Still deciding between the two?
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Take our 60-second quiz — we&rsquo;ll match you to the right provider based on your medication preference, insurance, and budget.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#F47C5B' }}
                >
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/best/telemedicine-zepbound'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Best for Zepbound
                </Link>
                <Link
                  href='/best/telemedicine-wegovy'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Best for Wegovy
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

function VerdictCol({ label, winner, detail }: { label: string; winner: string; detail: string }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6478' }}>
        {label}
      </div>
      <div
        className='text-2xl font-bold mb-2'
        style={{ color: '#F47C5B', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {winner}
      </div>
      <p className='text-xs leading-relaxed' style={{ color: '#4B3548' }}>{detail}</p>
    </div>
  );
}

function FactRow({ factor, zep, weg, winner }: { factor: string; zep: string; weg: string; winner: string }) {
  return (
    <tr className='border-t' style={{ borderColor: '#E8DDD0' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#3A1B3D' }}>{factor}</td>
      <td className='px-5 py-3 text-center' style={{ color: '#4B3548' }}>{zep}</td>
      <td className='px-5 py-3 text-center' style={{ color: '#4B3548' }}>{weg}</td>
      <td className='px-5 py-3 text-center text-xs font-semibold' style={{ color: winner.includes('Zepbound') ? '#F47C5B' : winner.includes('Wegovy') ? '#5FBFAA' : '#7A6478' }}>
        {winner}
      </td>
    </tr>
  );
}

function SideEffectRow({ effect, zep, weg }: { effect: string; zep: string; weg: string }) {
  return (
    <tr className='border-t' style={{ borderColor: '#E8DDD0' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#3A1B3D' }}>{effect}</td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: '#F47C5B' }}>{zep}</td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: '#5FBFAA' }}>{weg}</td>
    </tr>
  );
}

function CostRow({ label, price, highlight = false }: { label: string; price: string; highlight?: boolean }) {
  return (
    <div
      className='flex items-center justify-between p-4 rounded-xl bg-white'
      style={{
        border: highlight ? '2px solid #5FBFAA' : '1px solid #E8DDD0',
      }}
    >
      <span className='text-sm font-semibold' style={{ color: '#3A1B3D' }}>{label}</span>
      <span className='text-base font-bold' style={{ color: highlight ? '#1F6B3D' : '#F47C5B' }}>{price}</span>
    </div>
  );
}

function DecisionRow({ ifClause, pick, color }: { ifClause: string; pick: string; color: string }) {
  return (
    <div
      className='flex items-start gap-4 p-5 rounded-2xl bg-white'
      style={{ border: '1px solid #E8DDD0' }}
    >
      <CircleCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color }} />
      <div>
        <div className='text-sm mb-1' style={{ color: '#7A6478' }}>If…</div>
        <div className='text-base font-semibold mb-1' style={{ color: '#3A1B3D' }}>{ifClause}</div>
        <div className='text-sm' style={{ color: '#4B3548' }}>
          → <strong style={{ color }}>{pick}</strong>
        </div>
      </div>
    </div>
  );
}
