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
  title: 'Glutathione Injection May 2026: Cost, Evidence, At-Home Telehealth Options | GLP1CompareHub',
  description:
    'Glutathione injection guide updated May 2026. Local IV pricing ($75-$250/session) vs at-home telehealth options. The honest read on what glutathione actually does, what the evidence shows, and how it fits into a longevity stack.',
  alternates: { canonical: 'https://glp1comparehub.com/glutathione-injection' },
  openGraph: {
    title: 'Glutathione Injection — Cost, Evidence, At-Home Options',
    description:
      'IV $75-$250/session vs at-home telehealth. Honest read on what glutathione does, what the evidence supports, and how it stacks with NAD+ and GLP-1.',
    url: 'https://glp1comparehub.com/glutathione-injection',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Glutathione Injection 2026: Cost, Evidence, and At-Home Options',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/glutathione-injection',
  about: ['Glutathione injection', 'IV glutathione', 'Antioxidant therapy'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does glutathione injection actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Glutathione is the body\'s primary intracellular antioxidant — every cell makes it. It plays roles in detoxification, immune function, and protection against oxidative stress. Glutathione levels naturally decline with age and during certain illnesses. Injection (or IV) bypasses GI degradation that destroys oral glutathione, providing higher systemic exposure than supplements. The clinical evidence for direct glutathione administration is preliminary outside specific medical indications (Parkinson\'s, certain detoxification scenarios, hepatitis-related liver support).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does glutathione injection cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local IV glutathione clinics typically charge $75-$250 per session, with maintenance protocols often involving 4-12 sessions over weeks. Total program cost: $300-$3,000. At-home telehealth subcutaneous glutathione injections are meaningfully cheaper — pricing varies by provider; verify at intake. Eden Health and Direct Meds are the two verified providers in our active stack with glutathione.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is glutathione FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Glutathione in IV or injection form is not FDA-approved for any indication. It is administered through compounding pharmacies and IV therapy clinics under wellness, anti-aging, immune-support, or skin-brightening framings. The FDA has not approved any of these claims. Always work with a licensed prescriber and use accredited 503A pharmacy partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are people stacking glutathione with GLP-1 and NAD+?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biohacker thesis: glutathione for antioxidant support, NAD+ for cellular energy, GLP-1 for weight loss/appetite, B-12 for metabolic support — together comprising a "longevity protocol." No clinical trial has tested this stack as combined therapy. The supplementation rationale is reasonable for patients prioritizing optimization; the marketing claims of synergistic anti-aging effects are not clinically validated. Most clinical use of glutathione is in specific medical contexts (Parkinson\'s research, certain liver conditions), not as routine longevity supplementation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does glutathione injection cause skin lightening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Glutathione has been marketed (particularly in some Asian markets) for skin-brightening and lightening effects. The mechanism is theorized to involve melanin pathway modulation. Clinical evidence for skin-lightening effects from systemic glutathione is mixed and not robust. The FDA has issued warnings about IV glutathione marketed for cosmetic skin lightening, citing safety concerns and lack of established efficacy for this use. We do not endorse or recommend glutathione for skin-lightening; it is not an FDA-approved use.',
      },
    },
  ],
};

export default function GlutathioneInjectionPage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  const edenUrl = buildAffiliateUrl('glp1-eden-health', 'glutathione-injection');
  const systemLabsUrl = buildAffiliateUrl('glp1-system-labs', 'glutathione-injection');

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
              <span style={{ color: '#0E2A3A' }}>Glutathione Injection</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <span style={{ color: '#D4A33A' }}>Glutathione</span> Injection 2026 — Cost & Evidence
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Local IV runs $75-$250 per session. At-home telehealth alternatives exist via Eden Health and Direct Meds. The honest read on what glutathione actually does, what the evidence supports, and where it fits in a longevity stack.
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
                  Important: Glutathione injection is NOT FDA-approved
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                Glutathione in IV or injection form is not FDA-approved for any indication. It is administered through
                compounding pharmacies and IV therapy clinics under wellness, anti-aging, or detoxification framings.
                The FDA has issued warnings about IV glutathione marketed for cosmetic skin-lightening claims. Clinical
                evidence for direct glutathione administration outside specific medical indications is preliminary.
                Always work with a licensed prescriber.
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
                  TL;DR — Cost vs Evidence
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  rank='Most aggressive'
                  result='IV Glutathione (Clinic)'
                  detail='$75-$250/session. 4-12 session protocols. Highest single-dose. Requires clinic visits.'
                />
                <VerdictCol
                  rank='Best cost-to-effect'
                  result='At-Home Subcutaneous'
                  detail='Eden Health and Direct Meds offer compounded glutathione injection. Self-administered. Verify pricing at intake.'
                />
                <VerdictCol
                  rank='Lowest commitment'
                  result='Oral Liposomal'
                  detail='Pharmacy supplements ($30-$80/mo). Lower bioavailability than injection but cheapest entry. Better-absorbed than standard oral glutathione.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* What does glutathione actually do */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Sparkles className='h-6 w-6' style={{ color: '#D4A33A' }} />
              What Glutathione Actually Does (Honest Read)
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Glutathione (GSH) is a tripeptide made of three amino acids: glutamine, cysteine, and glycine. It is the
              body&rsquo;s primary intracellular antioxidant — every cell synthesizes its own glutathione from these
              precursors. It plays well-documented roles in:
            </p>

            <div className='space-y-3 mb-5'>
              <FunctionRow
                title='Detoxification'
                body='Conjugates with toxins, drugs, and reactive metabolites in the liver, making them water-soluble for excretion. Critical in Phase II liver detoxification pathways.'
                evidence='Strong'
              />
              <FunctionRow
                title='Antioxidant defense'
                body='Neutralizes reactive oxygen species (ROS) inside cells. Regenerates other antioxidants like vitamin C and E. Protects DNA, proteins, and cell membranes from oxidative damage.'
                evidence='Strong'
              />
              <FunctionRow
                title='Immune function'
                body='Supports T-cell proliferation and immune response. Glutathione depletion is associated with weakened immunity in some clinical contexts.'
                evidence='Moderate'
              />
              <FunctionRow
                title='Anti-aging / longevity'
                body={`Marketed angle. Some research links glutathione decline to age-related decline, but causality is unestablished. Direct supplementation's longevity effect in healthy adults is not clinically validated.`}
                evidence='Preliminary'
              />
              <FunctionRow
                title='Skin lightening'
                body='Marketed angle (particularly Asian markets). FDA has issued warnings about IV glutathione for cosmetic skin-lightening use. Evidence is mixed and not robust. We do NOT endorse this use.'
                evidence='FDA warning issued'
              />
            </div>

            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The clinical baseline:</strong> Glutathione is real, important, and well-studied as an
              intracellular molecule. Direct administration via IV or injection bypasses GI degradation but the
              dose-response and clinical benefit profile for routine wellness use is not well-characterized in
              published trials. Use cases with stronger evidence include Parkinson&rsquo;s research, certain liver
              conditions, and acute detoxification scenarios — not routine biohacker supplementation.
            </p>
          </div>
        </section>

        {/* Cost paths */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Cost: IV Clinic vs At-Home Telehealth vs Oral Liposomal
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Source</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Format</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Per Session / Monthly</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Total Loading Protocol</th>
                  </tr>
                </thead>
                <tbody>
                  <CostPathRow source='IV Bar / Mobile Drip' format='IV (high-dose)' price='$75-$150' total='4 sessions: $300-$600' />
                  <CostPathRow source='Medspa / Wellness Clinic' format='IV' price='$150-$250' total='6 sessions: $900-$1,500' />
                  <CostPathRow source='Eden Health (telehealth)' format='Subcutaneous Injection' price='Verify at intake' total='Self-administered, no clinic visits' winner />
                  <CostPathRow source='Direct Meds (telehealth)' format='Compounded Injection' price='Verify at intake' total='Self-administered, no clinic visits' />
                  <CostPathRow source='Oral Liposomal (supplements)' format='Capsule' price='$30-$80/mo' total='Cheapest but lower bioavailability' />
                  <CostPathRow source='Standard Oral Glutathione' format='Capsule' price='$15-$40/mo' total='Most degraded by GI; minimal systemic absorption' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              IV pricing reflects typical 2026 clinic rates; varies meaningfully by metro. At-home telehealth pricing
              requires intake completion to disclose final monthly price for glutathione specifically. Liposomal
              glutathione (encapsulated in liposomes for better absorption) is the cheapest format with reasonable
              bioavailability.
            </p>
          </div>
        </section>

        {/* Featured CTAs */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='p-6 rounded-2xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Format variety + 5 NAD+ formats
                </div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  Eden Health
                </h3>
                <p className='text-sm mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                  Compounded glutathione injection alongside the broadest adjacent-peptide menu in our verified stack.
                  $149 intro / $229-249 ongoing for GLP-1; verify glutathione pricing at intake.
                </p>
                <a
                  href={edenUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Explore Eden Health <ArrowRight className='h-4 w-4' />
                </a>
              </div>
              <div className='p-6 rounded-2xl' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Cheapest stack provider
                </div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  System Labs
                </h3>
                <p className='text-sm mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                  Cheapest GLP-1 entry ($179/mo) + NAD+ ($79 first month) + B-12 ($89/mo) + sermorelin ($79 first
                  month). Verify glutathione availability at intake.
                </p>
                <a
                  href={systemLabsUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Explore System Labs <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* When glutathione makes sense */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              When Glutathione Injection Actually Makes Sense
            </h2>
            <div className='space-y-3'>
              <PicksRow
                ifClause='You have a documented medical indication (Parkinson&rsquo;s, certain liver conditions, oxidative-stress disorders)'
                pick='Work with your treating physician on dosing and protocol. Stronger evidence base.'
                color='#7CA982'
              />
              <PicksRow
                ifClause='You&rsquo;re already running a longevity stack (GLP-1 + NAD+ + B-12) and want antioxidant support'
                pick='Add glutathione under one provider (Eden Health) or accept oral liposomal as a cheaper supplement'
                color='#D4A33A'
              />
              <PicksRow
                ifClause='You&rsquo;re considering glutathione for cosmetic skin lightening'
                pick='Skip — FDA has warned against this use; evidence is not robust'
                color='#B14739'
              />
              <PicksRow
                ifClause='You want to test glutathione cheaply before committing to injection'
                pick='Oral liposomal glutathione ($30-$80/mo) — better absorbed than standard oral; reasonable test'
                color='#7CA982'
              />
              <PicksRow
                ifClause='You&rsquo;re looking for an aggressive anti-aging boost from a single supplement'
                pick='Manage expectations — direct glutathione&rsquo;s longevity-effect evidence in healthy adults is preliminary'
                color='#6B7B82'
              />
            </div>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
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
              source='glutathione-injection'
              heading='Top Compounded GLP-1 + Adjacent-Peptide Providers'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/glutathione-injection" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Build your peptide stack in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the right provider for glutathione, NAD+, B-12, sermorelin, or a full longevity protocol.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link href='/match' className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg' style={{ color: '#D4A33A' }}>
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link href='/nad-iv-therapy' className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all' style={{ color: 'white', border: '1.5px solid white' }}>
                  NAD+ Therapy Guide
                </Link>
                <Link href='/lipotropic-injections' className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all' style={{ color: 'white', border: '1.5px solid white' }}>
                  MIC+B12 Injections
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

function VerdictCol({ rank, result, detail }: { rank: string; result: string; detail: string }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {rank}
      </div>
      <div className='text-xl font-bold mb-2' style={{ color: '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {result}
      </div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function FunctionRow({ title, body, evidence }: { title: string; body: string; evidence: string }) {
  const evidenceColor = evidence === 'Strong' ? '#7CA982' : evidence === 'Moderate' ? '#D4A33A' : evidence === 'FDA warning issued' ? '#B14739' : '#6B7B82';
  return (
    <div className='flex items-start gap-3 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex-1'>
        <div className='flex flex-wrap items-baseline gap-3 mb-1'>
          <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{title}</h3>
          <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F8F4ED', color: evidenceColor }}>
            Evidence: {evidence}
          </span>
        </div>
        <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{body}</p>
      </div>
    </div>
  );
}

function CostPathRow({ source, format, price, total, winner = false }: { source: string; format: string; price: string; total: string; winner?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>
        {source}
        {winner && (
          <span className='inline-block ml-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            Best Default
          </span>
        )}
      </td>
      <td className='px-5 py-3 text-sm' style={{ color: '#3D5560' }}>{format}</td>
      <td className='px-5 py-3 font-bold' style={{ color: winner ? '#D4A33A' : '#3D5560' }}>{price}</td>
      <td className='px-5 py-3 text-right text-sm' style={{ color: '#3D5560' }}>{total}</td>
    </tr>
  );
}

function PicksRow({ ifClause, pick, color }: { ifClause: string; pick: string; color: string }) {
  return (
    <div className='flex items-start gap-4 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color }} />
      <div>
        <div className='text-sm mb-1' style={{ color: '#6B7B82' }}>If…</div>
        <div className='text-base font-semibold mb-1' style={{ color: '#0E2A3A' }}>{ifClause}</div>
        <div className='text-sm' style={{ color: '#3D5560' }}>
          → <strong style={{ color }}>{pick}</strong>
        </div>
      </div>
    </div>
  );
}
