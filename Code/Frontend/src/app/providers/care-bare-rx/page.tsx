import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Award, ShieldCheck, DollarSign, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Care Bare Rx Review May 2026: Multi-Vertical Telehealth — Weight Loss + Hair + Sexual Health + NAD+ | GLP1CompareHub',
  description:
    'Independent Care Bare Rx (carebarerx.com) review verified May 2026. The only multi-vertical provider in our active Katalys-approved stack offering compounded GLP-1 ($199+/mo, oral + injectable), hair regrowth ($99/mo), sexual health ($99/mo), and NAD+ ($199/mo) under one platform.',
  alternates: { canonical: 'https://glp1comparehub.com/providers/care-bare-rx' },
  openGraph: {
    title: 'Care Bare Rx Review — Weight Loss + Hair + Sexual Health + NAD+',
    description:
      'Only multi-vertical provider in active stack. $300 default CPA + 6 cross-vertical payout tiers. Inclusive "self-care with pride" positioning.',
    url: 'https://glp1comparehub.com/providers/care-bare-rx',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'MedicalBusiness', name: 'Care Bare Rx', url: 'https://carebarerx.com' },
  reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '5' },
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
      name: 'Is Care Bare Rx legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Care Bare Rx (carebarerx.com) is a US-based multi-vertical telehealth platform offering compounded GLP-1 weight loss, hair regrowth, sexual health, and NAD+ programs. As of May 2026, it is approved on the Katalys affiliate network with $300 default CPA + 6 cross-vertical payout tiers, reflecting the platform\'s structural cross-sell across multiple categories. Operating under valid 503A patient-specific compounding post-April 2026 enforcement shift.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Care Bare Rx cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Care Bare Rx pricing (Gronk-verified May 2026): Compounded GLP-1 weight loss starts at $199/mo (oral + injectable options). Hair regrowth standalone $99/mo. Sexual health / ED standalone $99/mo. NAD+ standalone $199/mo. Each program is priced separately — there\'s no formal bundled discount, but you can run multiple programs under a single intake which reduces friction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "multi-vertical" mean for Care Bare Rx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Care Bare Rx is the only verified provider in our May 2026 active Katalys-approved stack offering 4 distinct treatment categories under one platform: weight loss (compounded GLP-1), hair regrowth (oral medications), sexual health / ED treatments, and NAD+ longevity therapy. For patients wanting one telehealth provider, one intake, one billing relationship across multiple categories — it\'s the only option in our active stack. Most other providers (Embody, System Labs, Direct Meds, Eden Health, Gala Health) are GLP-1-specialized with adjacent peptide menus, not full multi-vertical coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Care Bare Rx offer oral or injectable GLP-1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. Care Bare Rx offers compounded GLP-1 in both oral and injectable formats — alongside Direct Meds (sublingual + injectable) and Embody (gum + injectable), it is one of three providers in our active stack with needle-free options. The oral compounded GLP-1 at Care Bare Rx is unique in that it appears alongside the multi-vertical menu, useful for patients who want oral GLP-1 plus hair regrowth or sexual health under one provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Care Bare Rx LGBTQ-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Care Bare Rx markets explicitly with "self-care with pride" positioning and inclusive care language across its weight-loss, hair, and sexual-health verticals. The discreet door-delivery model and one-platform care across multiple categories appeal particularly to patients who want privacy and inclusive treatment without coordinating across separate providers. The platform is open to all patients regardless of identity or orientation.',
      },
    },
  ],
};

export default function CareBareRxReviewPage() {
  const provider = getProviderBySlug('care-bare-rx');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'care-bare-rx')
    .slice(0, 5);

  const careBareAffiliate = buildAffiliateUrl('glp1-care-bare-rx', 'providers-care-bare-rx-review');

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
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Care Bare Rx Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>Care Bare Rx</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best Multi-Vertical
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              The only verified provider in our active May 2026 stack offering all four categories under one platform: compounded GLP-1 weight loss + hair regrowth + sexual health + NAD+. "Self-care with pride" inclusive positioning, discreet door delivery.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 6, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · carebarerx.com</span>
            </div>
          </div>
        </section>

        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='Rating' value='4.4 / 5' />
              <StatCard label='Weight Loss' value='From $199/mo' highlight />
              <StatCard label='Hair' value='$99/mo' />
              <StatCard label='Sexual Health' value='$99/mo' />
              <StatCard label='NAD+' value='$199/mo' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              The only multi-vertical provider in our active Katalys-approved stack. $300 default CPA + 6 cross-vertical
              payout tiers reflect the structural cross-sell across categories. Updated May 6, 2026.
            </p>
          </div>
        </section>

        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who Care Bare Rx Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick Care Bare Rx if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want one platform for weight loss + hair + sexual health + NAD+
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You value inclusive "self-care with pride" care positioning
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want oral OR injectable compounded GLP-1 (both options available)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Discreet door delivery is important for privacy
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
                    GLP-1 is your only need (System Labs $179/mo or Embody $149-$299 are cheaper)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want highest-EPC conversion data (Embody $4.60 EPC, Eden $3.92 EPC)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Adjacent peptide breadth matters (Eden has 5 NAD+ formats; System Labs has full longevity stack)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Bundled all-inclusive 3-month pricing (Gala Health $179-$199 includes everything)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-vertical deep dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Heart className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The Multi-Vertical Model — Care Bare Rx&rsquo;s Unique Position
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Care Bare Rx is the only verified provider in our active May 2026 Katalys-approved stack covering four
              distinct treatment categories under one platform. Most competitors specialize in GLP-1 with adjacent
              peptides (Eden Health, System Labs, Direct Meds) or are GLP-1-only (Embody, Gala). Care Bare bundles
              weight loss with three additional verticals that share customer demographics:
            </p>
            <div className='space-y-3 mb-5'>
              <VerticalRow
                vertical='Weight Loss (Compounded GLP-1)'
                price='From $199/mo'
                detail='Both oral and injectable formats. Compounded semaglutide and tirzepatide. Cross-sells to all three other verticals.'
              />
              <VerticalRow
                vertical='Hair Regrowth'
                price='$99/mo'
                detail='Oral medications for hair loss / thinning. Standalone or alongside weight loss. Common cross-sell for both men and women on long-term weight-loss programs.'
              />
              <VerticalRow
                vertical='Sexual Health / ED'
                price='$99/mo'
                detail='ED treatments and sexual health support. Discreet delivery, inclusive positioning. Strong cross-sell for male weight-loss patients.'
              />
              <VerticalRow
                vertical='NAD+ Longevity Therapy'
                price='$199/mo'
                detail='Adjacent-peptide longevity supplementation. Pairs with GLP-1 for energy support during weight loss.'
              />
            </div>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Why this matters:</strong> A meaningful percentage of weight-loss patients also experience hair
              changes during rapid weight loss (a known GLP-1-adjacent issue), report sexual side effects from broader
              metabolic shifts, or want energy support to offset reduced caloric intake. Without Care Bare Rx, patients
              wanting all four categories would coordinate 3-4 different providers, 3-4 separate intakes, 3-4 billing
              relationships. Care Bare collapses that into one.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The structural Katalys advantage:</strong> The 6 cross-vertical payout tiers ($300 default CPA
              plus 5 additional payout structures across the verticals) suggest a platform with measurable cross-sell.
              Patients who start on hair-loss treatment frequently expand to weight-loss, and vice-versa. The
              affiliate-economics signal is healthy multi-vertical engagement.
            </p>
          </div>
        </section>

        {/* Pricing breakdown */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Care Bare Rx Pricing (Verified May 2026)
            </h2>
            <div className='space-y-3'>
              <PricingRow
                product='Compounded GLP-1 Weight Loss (oral OR injectable)'
                price='From $199/mo'
                note='Both formats available. Pricing varies by medication (semaglutide vs tirzepatide) and format. Verify final at intake.'
                highlight
              />
              <PricingRow
                product='Hair Regrowth (standalone)'
                price='$99/mo'
                note='Oral medications for hair loss treatment. Discreet delivery. Strong cross-sell with GLP-1 patients.'
              />
              <PricingRow
                product='Sexual Health / ED (standalone)'
                price='$99/mo'
                note='ED treatments and sexual health support. Inclusive positioning. Real cross-sell vertical.'
              />
              <PricingRow
                product='NAD+ Longevity Therapy (standalone)'
                price='$199/mo'
                note='Compounded NAD+ for energy and longevity support. Pairs with GLP-1 for the metabolic-stack pattern.'
              />
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Pricing Gronk-verified May 6, 2026 from carebarerx.com. There is no formal bundled discount across
              verticals, but combining programs under one intake reduces operational friction (one provider review,
              one shipping cycle, one billing relationship). Each program is priced standalone.
            </p>
          </div>
        </section>

        {/* Care Bare vs the field */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Care Bare Rx vs the Field
            </h2>
            <div className='space-y-4'>
              <CompetitorRow
                competitor='vs Embody (GLP-1 specialist, $149/$299)'
                winner='Embody on GLP-1 conversion; Care Bare on multi-vertical breadth'
                analysis={`Embody has higher realized EPC ($4.60 vs Care Bare's data still building) and conversion rate (1.31%). Embody is GLP-1-only with Spring Forward $200-off promo on first month. Pick Embody for cheapest GLP-1-only entry; pick Care Bare if you want hair, sexual health, or NAD+ alongside weight loss.`}
              />
              <CompetitorRow
                competitor='vs System Labs (longevity stack, $179)'
                winner='System Labs on adjacent peptide depth; Care Bare on lifestyle vertical breadth'
                analysis={`System Labs covers GLP-1 + NAD+ + B-12 + Sermorelin (longevity stack). Care Bare covers GLP-1 + Hair + Sexual Health + NAD+ (lifestyle stack). Different cross-stack thesis. Pick System Labs for biohacker peptide protocols; pick Care Bare for lifestyle-vertical bundling (especially male weight-loss patients wanting hair + sexual health support).`}
              />
              <CompetitorRow
                competitor='vs Eden Health ($149 intro / $229-$249)'
                winner='Both have multi-vertical breadth; differ on focus'
                analysis={`Eden Health and Care Bare both offer multi-vertical care, but the verticals differ. Eden is GLP-1 + adjacent peptides (NAD+ in 5 formats, Sermorelin, Glutathione, MIC+B12, Methylene Blue) — mostly biohacker/anti-aging. Care Bare is GLP-1 + lifestyle (Hair, Sexual Health, NAD+) — more general-population cross-sell. Pick by which vertical mix you actually want.`}
              />
              <CompetitorRow
                competitor='vs Gala Health ($179-199 3-mo bundle)'
                winner='Gala on bundled price; Care Bare on vertical variety'
                analysis={`Gala is cheaper IF you commit 3 months to GLP-1-only. Care Bare is more expensive on monthly basis but offers month-to-month flexibility AND vertical variety. Pick Gala for cheapest GLP-1 bundled commitment; pick Care Bare for multi-vertical care without commitment.`}
              />
              <CompetitorRow
                competitor='vs Direct Meds (sublingual, LegitScript)'
                winner='Direct Meds on compliance certifications; Care Bare on lifestyle vertical bundling'
                analysis={`Direct Meds carries the strongest publicly-disclosed compliance certifications (LegitScript + HIPAA) and offers compounded sublingual GLP-1. Care Bare offers oral + injectable GLP-1 plus the full lifestyle-vertical stack. Pick Direct Meds for compliance-conscious sublingual GLP-1; pick Care Bare for one-platform lifestyle care.`}
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
              Care Bare Rx sources compounded medications from accredited 503A compounding pharmacies. Post-April 1
              2026 FDA enforcement shift, Care Bare continues operating under valid 503A patient-specific compounding
              exemptions. The multi-vertical model gives some structural advantage during regulatory tightening — if
              503A compounded GLP-1 supply tightens further, Care Bare retains the hair, sexual health, and NAD+
              programs as continued revenue lines, reducing pressure to make compromises on GLP-1 pharmacy quality.
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='Accredited 503A pharmacy partners' />
              <ComplianceRow title='Discreet door-delivery model (privacy-conscious patients)' />
              <ComplianceRow title='Licensed prescribers in all 50 US states' />
              <ComplianceRow title='Cold-chain shipping for injectable GLP-1' />
              <ComplianceRow title='Cancel anytime — no long-term commitment' />
              <ComplianceRow title='Operating under valid 503A patient-specific compounding (post-April 2026)' />
              <ComplianceRow title='6 cross-vertical Katalys payout tiers — measurable cross-sell engagement' />
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
                Best Multi-Vertical Care
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Get Weight Loss + Hair + Sexual Health + NAD+ Under One Provider
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                Compounded GLP-1 weight loss from $199/mo (oral or injectable). Hair regrowth $99/mo standalone.
                Sexual health $99/mo standalone. NAD+ $199/mo standalone. One platform, one intake, discreet delivery.
                Inclusive "self-care with pride" positioning.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={careBareAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with Care Bare Rx <ArrowRight className='h-4 w-4' />
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

        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Care Bare Rx to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 6, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-care-bare-rx-review'
              heading='Other Verified Compounded GLP-1 Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath='/providers/care-bare-rx' />

        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                One platform for everything you need.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Weight loss + hair + sexual health + NAD+ under one provider. Cancel anytime.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={careBareAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start Care Bare Rx <ArrowRight className='h-4 w-4' />
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
                  Top 6 Programs
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

function VerticalRow({ vertical, price, detail }: { vertical: string; price: string; detail: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex flex-wrap items-baseline gap-3 mb-1'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{vertical}</h3>
        <span className='text-base font-bold' style={{ color: '#D4A33A' }}>{price}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function PricingRow({ product, price, note, highlight = false }: { product: string; price: string; note: string; highlight?: boolean }) {
  return (
    <div
      className='p-5 rounded-2xl bg-white'
      style={{ border: highlight ? '2px solid #D4A33A' : '1px solid #E5DDC8' }}
    >
      <div className='flex flex-wrap items-baseline gap-3 mb-1'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{product}</h3>
        <span className='text-base font-bold' style={{ color: '#D4A33A' }}>{price}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{note}</p>
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
