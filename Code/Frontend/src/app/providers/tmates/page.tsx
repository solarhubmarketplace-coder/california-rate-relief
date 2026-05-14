import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, CircleCheck, Calendar, Award, ShieldCheck, Sparkles, DollarSign, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TMates Review May 2026: $158-$249 Semaglutide, $167-$297 Tirzepatide — Same Price All Doses | GLP1CompareHub',
  description:
    'Independent TMates review verified May 2026. #1 highest realized EPC ($16.09) and 6.43% conversion rate in our active Katalys stack. Same price across every dose tier, injectable AND oral, multi-vertical (NAD+, TRT, ED).',
  alternates: { canonical: 'https://glp1comparehub.com/providers/tmates' },
  openGraph: {
    title: 'TMates Review — Same Price at Every Dose, #1 EPC in Our Katalys Stack',
    description:
      'TMates ranks #1 by realized EPC ($16.09) and 6.43% conversion rate in our verified May 2026 stack. Same price across all sema (0.25-2.4mg) and tirz (2.5-15mg) doses on 1-12 month plans.',
    url: 'https://glp1comparehub.com/providers/tmates',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'MedicalBusiness',
    name: 'TMates',
    url: 'https://tmates.com',
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.7', bestRating: '5' },
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  datePublished: '2026-05-13',
  dateModified: '2026-05-13',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is TMates legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TMates (tmates.com) is a US-based telehealth platform serving 2,400+ patients across compounded GLP-1, NAD+, TRT, ED, skin care, and hair loss verticals. As of May 2026, TMates is approved on the Katalys affiliate network with realized EPC $16.09 and conversion rate 6.43% — the #1 highest performer in our entire active stack on both metrics. Licensed medical professionals review and prescribe; medications source from a licensed compounding pharmacy partner.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does TMates cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMates pricing scales with plan length, not dose. Compounded semaglutide is $249/mo at 1 month, $217/mo at 3 months, $175/mo at 6 months, and $158/mo at 12 months — saving up to 37%. Compounded tirzepatide is $297/mo at 1 month, $267/mo at 3 months, $217/mo at 6 months, and $167/mo at 12 months — saving up to 44%. Same price across every dose tier (sema 0.25-2.4mg, tirz 2.5-15mg) — no titration upcharge as you escalate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TMates offer oral GLP-1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TMates offers both injectable and oral compounded GLP-1, making it one of the few providers in our active stack with both delivery options under one intake. Oral compounded GLP-1 has lower bioavailability than injectable and is generally a no-needle entry option for patients who want to try the medication class before committing to weekly injection. See our oral tirzepatide guide for the full evidence read on oral vs injectable bioavailability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TMates charge more as my dose increases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. TMates uses a same-price-at-every-dose model. Compounded semaglutide is $158-$249/mo regardless of whether you are at the 0.25mg starter or the 2.4mg therapeutic maximum. Compounded tirzepatide is $167-$297/mo regardless of whether you are at the 2.5mg starter or the 15mg max. The price differential reflects plan length (1 / 3 / 6 / 12 months), not your titration tier. This is unusual — most compounded GLP-1 telehealth providers raise prices as your dose escalates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded GLP-1 from TMates FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Compounded semaglutide and compounded tirzepatide are NOT FDA-approved drugs. They are produced by state-licensed 503A compounding pharmacies under specific FDA exemptions and are not therapeutically equivalent to brand-name Wegovy, Zepbound, Ozempic, or Mounjaro. Compounded formulations are not reviewed by the FDA for safety, efficacy, or quality. Discuss the tradeoffs with the licensed prescriber TMates connects you with.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel TMates anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TMates lets you cancel anytime. The discount tiers are tied to plan length (1, 3, 6, or 12 months), so longer commitments unlock deeper savings — but you are not locked in if you choose the monthly plan. The 12-month plan saves 37% on semaglutide and 44% on tirzepatide versus the monthly plan; weigh the discount against your tolerance for upfront cost.',
      },
    },
  ],
};

export default function TMatesReviewPage() {
  const provider = getProviderBySlug('tmates');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'tmates')
    .slice(0, 5);

  const tmatesAffiliate = buildAffiliateUrl('glp1-tmates', 'providers-tmates-review');

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
              <span style={{ color: '#0E2A3A' }}>TMates Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>TMates</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best Overall
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              The #1 highest realized EPC ($16.09) and conversion rate (6.43%) in our active May 2026 Katalys stack.
              Same price across every dose tier — sema $158-$249/mo, tirz $167-$297/mo — with deep volume discounts on
              longer plans. Injectable AND oral compounded GLP-1 under one intake.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 13, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · tmates.com</span>
            </div>
          </div>
        </section>

        {/* Quick stats card */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='Rating' value='4.7 / 5' />
              <StatCard label='Realized EPC' value='$16.09' highlight />
              <StatCard label='Conversion Rate' value='6.43%' highlight />
              <StatCard label='Sema (12-mo)' value='$158/mo' />
              <StatCard label='Tirz (12-mo)' value='$167/mo' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              EPC and CR are realized affiliate metrics from the Katalys partner dashboard, not estimates.
              TMates ranks #1 in our entire active stack on both. 2,400+ patients. Updated May 13, 2026.
            </p>
          </div>
        </section>

        {/* FDA banner */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Compounded GLP-1 — FDA context
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                <strong>Compounded semaglutide and tirzepatide are NOT FDA-approved drugs.</strong> They are produced
                by state-licensed 503A compounding pharmacies under specific FDA exemptions and are not therapeutically
                equivalent to brand-name Wegovy, Zepbound, Ozempic, or Mounjaro. Compounded formulations are not reviewed
                by the FDA for safety, efficacy, or quality. See our{' '}
                <Link href='/compounded-tirzepatide' className='underline' style={{ color: '#B14739' }}>full compounded GLP-1 guide</Link>{' '}
                for the post-April 2026 regulatory landscape.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who TMates Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick TMates if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You can commit to a 6 or 12-month plan and want the deepest discount in our verified stack (37% off sema, 44% off tirz)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want flat-rate pricing across every dose tier (no titration upcharge from 2.5mg to 15mg)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want both injectable and oral GLP-1 options under one provider intake
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You&rsquo;re building a multi-vertical stack (GLP-1 + NAD+, TRT, or ED treatment under one provider)
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
                    You want branded Wegovy or Zepbound (TMates is compounded-only)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want the lowest single-month price (System Labs at $179/mo or Strut Health at $99/mo oral wins)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You can&rsquo;t commit to 6+ months upfront (TMates&rsquo; best pricing requires longer commitment)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want the broadest adjacent peptide menu (Eden Health&rsquo;s 5-format NAD+ wins)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Same Price All Doses deep dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Same Price Across Every Dose Tier
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Most compounded GLP-1 telehealth providers raise prices as your dose escalates from the starter to
              therapeutic maximum. TMates&rsquo; same-price model locks your monthly cost regardless of where you sit
              in the titration schedule — meaningful because most patients land at 7.5mg-15mg tirzepatide or 1.7mg-2.4mg
              semaglutide for full therapeutic effect.
            </p>
            <div className='overflow-x-auto rounded-2xl mb-5' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Plan Length</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Semaglutide</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Tirzepatide</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Savings vs Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  <PlanRow plan='1 month (any dose)' sema='$249' tirz='$297' savings='—' />
                  <PlanRow plan='3 months' sema='$217/mo' tirz='$267/mo' savings='13% / 10%' />
                  <PlanRow plan='6 months' sema='$175/mo' tirz='$217/mo' savings='30% / 27%' positive />
                  <PlanRow plan='12 months' sema='$158/mo' tirz='$167/mo' savings='37% / 44%' positive />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic' style={{ color: '#6B7B82' }}>
              Pricing live-crawled from tmates.com/products/semaglutide and /tirzepatide on May 6, 2026. Same price applies
              across all dose tiers — sema 0.25mg to 2.4mg, tirz 2.5mg to 15mg. The 12-month tirzepatide rate ($167/mo)
              is among the most competitive long-term pricing in our verified May 2026 stack — meaningfully below the
              typical $250-$400 range at therapeutic dose tiers from other providers.
            </p>
          </div>
        </section>

        {/* Multi-vertical menu */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Sparkles className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Multi-Vertical Menu — One Provider, Many Programs
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              TMates patients can layer GLP-1 weight loss with adjacent programs from the same provider — meaning one
              intake, one prescriber relationship, one shipping account for multiple care lines. The full menu spans
              GLP-1 (injectable + oral), longevity peptides (NAD+), hormone therapy (TRT), sexual health (ED), skin
              care, and hair loss (men&rsquo;s and women&rsquo;s).
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <VerticalRow vertical='Compounded GLP-1 (injectable)' detail='Semaglutide + Tirzepatide. Same price all doses. 1/3/6/12-month plans.' />
              <VerticalRow vertical='Compounded GLP-1 (oral)' detail='Oral semaglutide and oral tirzepatide for needle-averse patients. Lower bioavailability but no-injection delivery.' />
              <VerticalRow vertical='NAD+ Therapy' detail='Longevity stack adjacent to GLP-1. Cross-sell potential for patients building a comprehensive weight + energy + longevity protocol.' />
              <VerticalRow vertical='TRT (Testosterone Replacement)' detail='Hormone optimization for eligible patients. Common GLP-1 + TRT combo for men addressing weight + low T together.' />
              <VerticalRow vertical='ED / Sexual Health' detail='Sildenafil and tadalafil prescriptions through the same provider — common comorbidity with metabolic conditions.' />
              <VerticalRow vertical='Hair Loss (M + F)' detail="Men's and women's hair regrowth — finasteride, minoxidil, and topical formulations." />
            </div>
            <p className='text-sm mt-5' style={{ color: '#6B7B82' }}>
              See our <Link href='/nad-iv-therapy' className='underline' style={{ color: '#D4A33A' }}>NAD+ IV therapy guide</Link> and{' '}
              <Link href='/oral-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>oral tirzepatide deep-dive</Link> for the
              full evidence read on each format.
            </p>
          </div>
        </section>

        {/* TMates vs the field */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TMates vs the Field — Where It Wins and Loses
            </h2>
            <div className='space-y-4'>
              <CompetitorRow
                competitor='vs Embody ($149 first / $299 flat)'
                winner='TMates on long-term price, Embody on month-1 entry'
                analysis="Embody's Spring Forward promo lands at $149 first month with $299 flat refills regardless of dose. TMates is $249 first month at sema (any dose) but drops to $158/mo on the 12-month plan — meaningfully cheaper than Embody's $299 for committed patients. Embody wins on month-1 entry cost; TMates wins on sustained 12-month cost. Embody's realized EPC ($4.60) and CR (1.31%) are second in our stack; TMates is #1 by a wide margin on both."
              />
              <CompetitorRow
                competitor='vs Eden Health ($149 first / $229-$249 flat)'
                winner='TMates on long-term value, Eden on adjacent peptide breadth'
                analysis="Eden's $229-$249 ongoing range is cheaper than TMates' monthly plan but more expensive than TMates' 12-month plan ($158-$167/mo). Eden also offers branded Wegovy and Zepbound; TMates is compounded only. Eden has the broader adjacent-peptide menu (NAD+ in 5 formats); TMates is more streamlined (NAD+ as a single program). Pick Eden for established brand + branded fallback; pick TMates for the deepest discount on a committed plan."
              />
              <CompetitorRow
                competitor='vs System Labs ($179/mo)'
                winner='System Labs on cheapest sustained price, TMates on conversion data + multi-vertical'
                analysis="System Labs is $179/mo flat — the lowest sustained compounded GLP-1 price in our verified stack. TMates' 12-month plan ($158-$167/mo) actually beats System Labs at therapeutic doses if you can commit, but on a month-by-month basis System Labs wins on price. System Labs is GLP-1-focused; TMates is multi-vertical (GLP-1 + NAD+ + TRT + ED + Hair). System Labs also doesn't have realized Katalys data yet."
              />
              <CompetitorRow
                competitor='vs Strut Health ($99/mo oral sema, $199/mo oral tirz)'
                winner='Strut Health on cheapest oral entry, TMates on injectable + multi-vertical'
                analysis="Strut is $99/mo oral semaglutide — the lowest verified GLP-1 entry price in our stack — and offers no-video async physician review. But Strut is ORAL ONLY. TMates is the only provider in the stack with both injectable AND oral options across both sema and tirz, plus the deepest multi-vertical menu. Pick Strut for cheapest oral entry + no-video; pick TMates for full delivery flexibility + multi-vertical."
              />
              <CompetitorRow
                competitor='vs Gala Health ($179-199 3-mo bundled)'
                winner='Gala on bundled 3-month, TMates on 6/12-mo and dose-flat pricing'
                analysis="Gala's 3-month plan is $179-$199/mo all-inclusive. TMates' 3-month plan is $217-$267/mo — more expensive at 3 months. But at 6 months ($175-$217/mo) and 12 months ($158-$167/mo), TMates pulls ahead. Gala is GLP-1 specialized; TMates is multi-vertical. Both flat-rate the dose tier. Pick Gala for the cheapest 3-month commitment; pick TMates if you'll commit to 6+ months."
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
              TMates sources compounded medications through a licensed compounding pharmacy partner. Post-April 1 2026
              FDA enforcement shift, providers operating in this space must demonstrate patient-specific 503A compounding
              compliance — TMates continues serving customers under that narrower exception as of May 2026. The 2,400+
              patient base gives a multi-cohort operational track record, though shorter than Eden Health&rsquo;s.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Compounded-only providers like TMates carry tighter regulatory exposure than dual-supply providers (Eden
              Health offers both branded and compounded). If the April 30 503B exclusion proposal finalizes after the
              June 29 comment period, compounded-only providers face higher continuity-of-supply risk than providers
              with branded fallback. Worth weighing for patients planning 12-month commitments.
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='Licensed medical professionals oversee all prescribing' />
              <ComplianceRow title='Licensed compounding pharmacy partner for medication fulfillment' />
              <ComplianceRow title='Cold-chain shipping for injectable products' />
              <ComplianceRow title='2,400+ patients across the program — multi-cohort operational data' />
              <ComplianceRow title='Cancel anytime — no forced long-term commitment' />
              <ComplianceRow title='Same price across every dose tier — no titration upcharge' />
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
                Best Overall · #1 Realized EPC in Our Active Stack
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Start TMates from $158/mo on the 12-Month Plan
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                Same price across every dose tier. Injectable and oral GLP-1 options. Multi-vertical menu spanning NAD+,
                TRT, ED, hair, and skin under one intake. Cancel anytime — though the deepest discounts (37%/44%) require
                the 12-month commitment.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={tmatesAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with TMates <ArrowRight className='h-4 w-4' />
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
              Compare TMates to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-tmates-review'
              heading='Other Verified Compounded GLP-1 Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath='/providers/tmates' />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Same price at every dose, lowest sustained cost.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                12-month plans: $158/mo semaglutide, $167/mo tirzepatide. Cancel anytime.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={tmatesAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start TMates <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Take the Quiz
                </Link>
                <Link
                  href='/best-compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  See All 6 Programs
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

function PlanRow({ plan, sema, tirz, savings, positive = false }: { plan: string; sema: string; tirz: string; savings: string; positive?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{plan}</td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: '#D4A33A' }}>{sema}</td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: '#D4A33A' }}>{tirz}</td>
      <td className='px-5 py-3 text-right text-sm font-semibold' style={{ color: positive ? '#7CA982' : '#6B7B82' }}>
        {savings}
      </td>
    </tr>
  );
}

function VerticalRow({ vertical, detail }: { vertical: string; detail: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{vertical}</h3>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
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
