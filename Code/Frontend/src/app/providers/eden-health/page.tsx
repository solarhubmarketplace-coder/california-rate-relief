import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Award, ShieldCheck, Sparkles, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eden Health Review May 2026: $149 Intro, "Same Price at Every Dose," + 5-Format NAD+ Menu | GLP1CompareHub',
  description:
    'Independent Eden Health (tryeden.com) review verified May 2026. Realized EPC $3.92, conversion rate 1.10% (Katalys-verified). $149 intro month, $229-$249 ongoing across all dose tiers, broadest adjacent-peptide menu in the active stack.',
  alternates: { canonical: 'https://glp1comparehub.com/providers/eden-health' },
  openGraph: {
    title: 'Eden Health Review — $149 Intro / Flat Ongoing + 5-Format NAD+',
    description:
      'Established brand, third-highest EPC in stack, "Same Price at Every Dose" predictability, plus the broadest NAD+ menu (5 formats) in our verified May 2026 stack.',
    url: 'https://glp1comparehub.com/providers/eden-health',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'MedicalBusiness',
    name: 'Eden Health',
    url: 'https://tryeden.com',
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.6', bestRating: '5' },
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Eden Health legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health (tryeden.com) is one of the most established US-based telehealth platforms in the GLP-1 space, marketing 127K+ members and operating in all 50 states. As of May 2026, Eden Health is approved on the Katalys affiliate network with $300 default CPA + 13 payout tiers, with realized EPC $3.92 and conversion rate 1.10% — third-highest in our verified active stack behind Embody and Gala Health. Operating under valid 503A patient-specific compounding post-April 2026 enforcement shift.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Eden Health cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health is $149 for the first month and $229-$249 ongoing depending on the medication. The "Same Price at Every Dose" model means refill pricing stays in the $229-$249 band across the full dose-titration range (2.5mg through 15mg) — a meaningful differentiator vs providers that raise prices as your dose escalates. Compounded semaglutide sits at the lower end ($229), tirzepatide at the upper end ($249). Month-to-month or 3-month plan options.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Eden Health\'s 5-format NAD+ menu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health is the only verified provider in our active May 2026 stack offering NAD+ in 5 distinct formats: subcutaneous injection, nasal spray, face cream, transdermal patches, and oral capsules. Each targets a different bioavailability and use case — injection for systemic supplementation, nasal spray for needle-averse patients, face cream for topical anti-aging, patches for sustained release, oral as the cheapest entry. No other provider in the stack offers this breadth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Eden Health offer branded GLP-1 (Wegovy, Zepbound)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health offers both branded and compounded GLP-1, making it one of the few providers in the active stack with both options. Branded Wegovy and Zepbound require insurance navigation and cost meaningfully more out-of-pocket; compounded versions sit in the $229-$249/mo range. Eden\'s flat-rate "Same Price at Every Dose" guarantee applies to compounded; branded pricing varies by manufacturer and insurance status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel Eden Health anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health offers month-to-month flexibility — pause or cancel anytime with no long-term commitment. They also offer optional 3-month plans for patients who want bundled pricing. The flexibility is a real differentiator vs Gala Health (3-month commitment for bundled pricing) and Calibrate (3-month minimum).',
      },
    },
  ],
};

export default function EdenHealthReviewPage() {
  const provider = getProviderBySlug('eden-health');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'eden-health')
    .slice(0, 5);

  const edenAffiliate = buildAffiliateUrl('glp1-eden-health', 'providers-eden-health-review');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission — at no extra cost to you.{' '}
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
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Eden Health Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>Eden Health</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best Brand Trust
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              The third-highest realized EPC ($3.92) and conversion rate (1.10%) in our active May 2026 stack. $149 intro / $229-$249 ongoing with "Same Price at Every Dose" predictability, plus the broadest NAD+ menu (5 formats) of any verified provider.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 6, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · tryeden.com</span>
            </div>
          </div>
        </section>

        {/* Quick stats card */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='Rating' value='4.6 / 5' />
              <StatCard label='Realized EPC' value='$3.92' highlight />
              <StatCard label='Conversion Rate' value='1.10%' highlight />
              <StatCard label='First Month' value='$149' />
              <StatCard label='Ongoing' value='$229-$249' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              EPC and CR are realized affiliate metrics from the Katalys partner dashboard, not estimates.
              Eden Health ranks 3rd in our active stack on both metrics. 127K+ members across all 50 states. Updated May 6, 2026.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who Eden Health Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick Eden Health if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want predictable pricing across dose escalation (Eden&rsquo;s $229-$249 stays flat 2.5mg → 15mg)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want both branded AND compounded GLP-1 from one provider
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You&rsquo;re building an adjacent-peptide stack (NAD+ in 5 formats, Sermorelin, Glutathione, MIC+B12, Methylene Blue)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You value an established brand (127K+ members, longest track record in active stack)
                  </li>
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #B14739' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#B14739' }}>
                  Pick someone else if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want the absolute lowest sustained price (System Labs at $179/mo wins)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want needle-free GLP-1 (Direct Meds sublingual or Embody gum)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    First-month price matters most (Embody&rsquo;s Spring Forward $200 off lands at $149 with flat $299 refills)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want hair regrowth or sexual health under the same provider (Care Bare Rx)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Same Price at Every Dose deep dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The "Same Price at Every Dose" Model
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Most compounded GLP-1 telehealth providers raise prices as your dose escalates from the 2.5mg starter
              to the 15mg therapeutic maximum. By the time most patients reach the dose where SURMOUNT-1 measured 19.5-20.2%
              average weight loss, monthly cost is meaningfully higher than the headline starter price. Eden Health&rsquo;s
              "Same Price at Every Dose" guarantee locks the ongoing rate at $229-$249 across the full titration range.
            </p>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>How Eden compares vs typical dose-tier pricing:</strong>
            </p>
            <div className='overflow-x-auto rounded-2xl mb-5' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Dose Tier</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Eden Health</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Typical Compounded Provider</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Eden Saves</th>
                  </tr>
                </thead>
                <tbody>
                  <DoseRow tier='2.5mg starter' eden='$229-$249' typical='$179' diff='-$50 to -$70' />
                  <DoseRow tier='5mg' eden='$229-$249' typical='$229' diff='$0 to -$20' />
                  <DoseRow tier='7.5mg' eden='$229-$249' typical='$279' diff='+$30 to +$50 saved' positive />
                  <DoseRow tier='10mg' eden='$229-$249' typical='$329' diff='+$80 to +$100 saved' positive />
                  <DoseRow tier='12.5mg' eden='$229-$249' typical='$379' diff='+$130 to +$150 saved' positive />
                  <DoseRow tier='15mg (max)' eden='$229-$249' typical='$429' diff='+$180 to +$200 saved' positive />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic' style={{ color: '#6B7B82' }}>
              Comparison reflects typical compounded telehealth dose-escalation pricing (industry-average pattern).
              Eden Health is more expensive at the 2.5mg starter dose, becomes competitive around 5mg, and meaningfully
              cheaper at 7.5mg+ where most patients land for therapeutic effect. The "Same Price at Every Dose" guarantee
              is a real differentiator over the long-term cost of the program.
            </p>
          </div>
        </section>

        {/* 5-format NAD+ menu */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Sparkles className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Eden Health&rsquo;s 5-Format NAD+ Menu — Unique in Active Stack
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Eden is the only verified provider in our active May 2026 stack offering NAD+ in 5 distinct formats.
              For biohackers running a longevity stack, this breadth means you can mix-and-match delivery methods
              under a single provider intake — useful if you want injection for systemic effect plus patches for
              sustained release, or face cream for topical use alongside oral capsules.
            </p>
            <div className='space-y-3'>
              <FormatRow
                format='Subcutaneous Injection'
                bioavailability='~100% systemic'
                useCase='Highest-effect format. Best for energy, longevity, and weight-loss stack support. Comparable to IV bioavailability.'
              />
              <FormatRow
                format='Nasal Spray'
                bioavailability='Moderate (uncharacterized)'
                useCase='No-needle entry. Theoretical nose-to-brain pathway for cognitive supplementation. Best for testing before committing to injection.'
              />
              <FormatRow
                format='Face Cream / Topical'
                bioavailability='Local skin only'
                useCase='Anti-aging skincare framing. Targets local skin tissue NAD+ levels — not systemic supplementation.'
              />
              <FormatRow
                format='Transdermal Patches'
                bioavailability='Low-moderate'
                useCase='Slow-release option. Convenience for sustained delivery without daily dosing. Bioavailability data limited.'
              />
              <FormatRow
                format='Oral Capsules'
                bioavailability='Lowest (GI degradation)'
                useCase='Lowest cost but most NAD+ degraded before absorption. Many clinicians prefer NMN/NR precursors orally.'
              />
            </div>
            <p className='text-sm mt-5' style={{ color: '#6B7B82' }}>
              See our <Link href='/nad-iv-therapy' className='underline' style={{ color: '#D4A33A' }}>full NAD+ IV therapy guide</Link> and{' '}
              <Link href='/nad-nasal-spray' className='underline' style={{ color: '#D4A33A' }}>NAD+ nasal spray deep-dive</Link> for the full evidence read on each format.
            </p>
          </div>
        </section>

        {/* Eden vs the field */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Eden Health vs the Field — Where It Wins and Loses
            </h2>
            <div className='space-y-4'>
              <CompetitorRow
                competitor='vs Embody ($149 first / $299 flat)'
                winner='Embody on conversion data, Eden on dose-tier predictability'
                analysis={`Embody has higher realized EPC ($4.60 vs $3.92) and conversion rate (1.31% vs 1.10%). Embody is also flat-rate on refills ($299 regardless of dose). Eden's $229-$249 ongoing range is cheaper than Embody's $299 flat, but slightly variable depending on medication. For ongoing cost, Eden wins. For first-month with the Spring Forward promo, Embody wins ($149 vs Eden's $149 — tied at intro, but Embody bundles $200 off).`}
              />
              <CompetitorRow
                competitor='vs System Labs ($179/mo)'
                winner='System Labs on price, Eden on brand trust + format variety'
                analysis={`System Labs wins on lowest sustained price ($179 vs Eden's $229-$249). Eden wins on established brand (127K+ members vs System Labs less recognized), realized conversion data ($3.92 EPC vs no Katalys data yet for System Labs as of May 5), and format variety (5 NAD+ formats vs System Labs injection-only). Pick System Labs for cheapest entry; pick Eden for established brand reliability.`}
              />
              <CompetitorRow
                competitor='vs Direct Meds (sublingual $224.10)'
                winner='Direct Meds on needle-free, Eden on adjacent peptides'
                analysis={`Direct Meds is the only provider with compounded sublingual GLP-1 — the strongest needle-free option in the stack. Eden is injection-only for GLP-1 but has the broadest adjacent peptide menu (5 NAD+ formats, Sermorelin in injection + ODT, Glutathione, Methylene Blue, MIC+B12). Pick Direct Meds for needle aversion; pick Eden for adjacent-peptide breadth.`}
              />
              <CompetitorRow
                competitor='vs Gala Health ($179-199 3-mo plan)'
                winner='Gala on bundled price; Eden on flexibility + format variety'
                analysis={`Gala is cheaper IF you commit to 3 months ($179-199/mo all-inclusive). Eden is cheaper at the therapeutic dose tier (7.5mg+) on ongoing pricing AND offers month-to-month flexibility plus optional 3-month plans. Eden also has the broader adjacent peptide menu — Gala is GLP-1 specialized.`}
              />
              <CompetitorRow
                competitor='vs Care Bare Rx (multi-vertical $199+)'
                winner='Care Bare on multi-vertical; Eden on GLP-1 + adjacent peptide depth'
                analysis={`Care Bare bundles weight loss + hair + sexual health + NAD+ under one provider. Eden focuses on GLP-1 with adjacent peptides (NAD+, Sermorelin, Glutathione, MIC+B12). Pick Care Bare for one-platform multi-vertical care; pick Eden for the deepest adjacent-peptide menu attached to GLP-1.`}
              />
            </div>
          </div>
        </section>

        {/* Compliance + pharmacy */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <ShieldCheck className='h-6 w-6' style={{ color: '#7CA982' }} />
              Compliance + Pharmacy Sourcing (May 2026)
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Eden Health sources compounded medications from LegitScript-accredited 503A compounding pharmacies.
              Post-April 1 2026 FDA enforcement shift, Eden continues operating under valid 503A patient-specific
              compounding exemptions. The 127K+ member base and established multi-year track record provide stronger
              continuity-of-supply assurance than newer providers in case of further regulatory tightening.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Eden also offers branded Wegovy and Zepbound where appropriate — meaning if 503A enforcement narrows
              further, patients have the branded fallback available without changing providers. This dual-supply
              model is one of Eden&rsquo;s structural advantages over compounded-only providers.
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='LegitScript-accredited 503A pharmacy partners' />
              <ComplianceRow title='Both branded (Wegovy/Zepbound) and compounded GLP-1 — dual supply chain' />
              <ComplianceRow title='Cold-chain shipping for injectable products' />
              <ComplianceRow title='Licensed prescribers in all 50 US states' />
              <ComplianceRow title='Month-to-month or 3-month options — no forced long-term commitment' />
              <ComplianceRow title='127K+ active members — longest track record in active stack' />
            </div>
          </div>
        </section>

        {/* Pros and cons */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Pros and Cons (Honest Read)
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-3' style={{ color: '#7CA982' }}>Pros</div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  {provider?.pros?.map((pro, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #B14739' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-3' style={{ color: '#B14739' }}>Cons</div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  {provider?.cons?.map((con, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='p-7 md:p-10 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
              <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                Best Brand Trust · Established Multi-Vertical Provider
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Start Eden Health for $149 First Month
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                $149 first month, $229-$249 ongoing across all dose tiers. Compounded + branded GLP-1 under one
                provider. Broadest adjacent peptide menu (NAD+ in 5 formats, Sermorelin, Glutathione, MIC+B12).
                Month-to-month flexibility. 127K+ members nationwide.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={edenAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with Eden Health <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/best-compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all'
                  style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
                >
                  See Top 6 Programs Ranked
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Compare table */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Eden Health to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 6, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-eden-health-review'
              heading='Other Verified Compounded GLP-1 Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath='/providers/eden-health' />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Predictable pricing across every dose tier.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                $149 first month. $229-$249 ongoing across all doses. Cancel anytime.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={edenAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start Eden Health <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Take the Quiz
                </Link>
                <Link
                  href='/nad-iv-therapy'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Eden&rsquo;s NAD+ Menu
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

function StatCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className='p-4 rounded-2xl text-center'
      style={{
        backgroundColor: highlight ? '#F4EBD0' : '#F8F4ED',
        border: highlight ? '1px solid #D4A33A' : '1px solid #E5DDC8',
      }}
    >
      <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#6B7B82' }}>{label}</div>
      <div className='text-xl md:text-2xl font-bold' style={{ color: highlight ? '#D4A33A' : '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {value}
      </div>
    </div>
  );
}

function DoseRow({ tier, eden, typical, diff, positive = false }: { tier: string; eden: string; typical: string; diff: string; positive?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{tier}</td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: '#D4A33A' }}>{eden}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{typical}</td>
      <td className='px-5 py-3 text-right text-sm font-semibold' style={{ color: positive ? '#7CA982' : '#6B7B82' }}>
        {diff}
      </td>
    </tr>
  );
}

function FormatRow({ format, bioavailability, useCase }: { format: string; bioavailability: string; useCase: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex flex-wrap items-baseline gap-3 mb-1'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{format}</h3>
        <span className='text-sm font-semibold' style={{ color: '#D4A33A' }}>{bioavailability}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{useCase}</p>
    </div>
  );
}

function CompetitorRow({ competitor, winner, analysis }: { competitor: string; winner: string; analysis: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex flex-wrap items-baseline gap-3 mb-2'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{competitor}</h3>
        <span className='text-xs font-semibold' style={{ color: '#D4A33A' }}>→ {winner}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{analysis}</p>
    </div>
  );
}

function ComplianceRow({ title }: { title: string }) {
  return (
    <div className='flex items-center gap-3 p-3 rounded-xl' style={{ backgroundColor: '#F0EBE0' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0' style={{ color: '#7CA982' }} />
      <span className='text-sm font-semibold' style={{ color: '#0E2A3A' }}>{title}</span>
    </div>
  );
}
