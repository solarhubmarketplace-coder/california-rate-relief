import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { primaryProviders } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, ShieldCheck, AlertCircle, CircleCheck, Calendar, Trophy, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Compounded Tirzepatide May 2026: 6 Verified Telehealth Programs Ranked | GLP1CompareHub',
  description:
    'Editorial ranking of the 6 best compounded tirzepatide telehealth programs verified May 2026. Embody (Best Overall, $149 first / $299 flat), System Labs ($179 — Best Value), Direct Meds (Best Sublingual). Includes the post-April 2026 FDA context.',
  alternates: { canonical: 'https://glp1comparehub.com/best-compounded-tirzepatide' },
  openGraph: {
    title: 'Best Compounded Tirzepatide 2026 — 6 Verified Programs Ranked',
    description:
      'Independent ranking by realized EPC, conversion rate, and value. Verified May 5, 2026 with the post-April FDA context built in.',
    url: 'https://glp1comparehub.com/best-compounded-tirzepatide',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Compounded Tirzepatide May 2026: 6 Verified Telehealth Programs Ranked',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/best-compounded-tirzepatide',
  about: ['Compounded tirzepatide', 'Telehealth GLP-1', 'Embody', 'System Labs', 'Direct Meds', 'Eden Health'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest compounded tirzepatide in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'System Labs at $179/mo is the lowest verified entry price in our active stack. Embody is competitive on first-month pricing at $149 (with the Spring Forward $200-off promo) but jumps to a flat $299/mo on refills. For lowest sustained monthly cost, System Labs leads.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which compounded tirzepatide program has the best customer conversion rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Embody leads our active affiliate stack at $4.60 EPC and 1.31% conversion rate (Katalys-verified May 2026). Eden Health is second at $3.92 EPC and 1.10% conversion rate. Higher EPC and conversion typically reflect strong website conversion design, transparent pricing, and trustworthy onboarding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get compounded tirzepatide without an injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Two providers in our verified stack offer needle-free compounded tirzepatide: Direct Meds offers sublingual (under-the-tongue) drops at $224.10/mo, and Embody offers a GLP-1 gum format. Both are unique in the active provider stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'How did you rank these providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our editorial ranking combines four factors: (1) Verified pricing from each provider site as of May 2026; (2) Realized EPC and conversion rate from the Katalys partner dashboard where available; (3) Format options and unique differentiators (needle-free formats, multi-vertical care, longevity stack); (4) Compliance posture under the post-April 2026 FDA enforcement landscape. We do not rank by CPA payout — that would create a conflict of interest. We rank by patient fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide still available after the April 2026 FDA changes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The April 1 enforcement shift restricted 503A pharmacies to true patient-specific compounding. Many telehealth providers continue serving customers under that narrower exception. The April 30 503B exclusion proposal could further tighten supply if finalized after the June 29 comment period. We re-verify provider availability monthly.',
      },
    },
  ],
};

export default function BestCompoundedTirzepatidePage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission — at no extra cost to you. We do not rank providers by CPA payout.{' '}
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
              <span style={{ color: '#0E2A3A' }}>Best Compounded Tirzepatide 2026</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Best Compounded Tirzepatide <span style={{ color: '#D4A33A' }}>2026</span>
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Six verified telehealth programs ranked by price, format, conversion rate, and post-FDA-crackdown availability.
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

        {/* FDA banner */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Important — May 2026 FDA context
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                The April 1, 2026 FDA enforcement shift restricted 503A pharmacies to patient-specific compounding.
                The April 30 503B exclusion proposal closes its public comment period on June 29.
                All six providers below continue serving customers as of May 5, 2026, but the regulatory landscape is
                evolving. Always confirm a provider&rsquo;s 503A pharmacy accreditation and operating model.
                See <Link href='/compounded-tirzepatide' className='underline' style={{ color: '#B14739' }}>our full compounded tirzepatide guide</Link> for the regulatory deep-dive.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR ranking strip */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The Top 6 — At a Glance
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              All six are verified-active May 5, 2026. Click any name for the full review.
            </p>
            <div className='space-y-3'>
              <RankRow
                rank={1}
                name='Embody'
                badge='Best Overall'
                price='$149 first / $299 flat refills'
                why='Highest realized EPC ($4.60) and conversion rate (1.31%). Spring Forward $200 off + free shipping. GLP-1 gum format for needle-averse patients.'
                slug='embody'
              />
              <RankRow
                rank={2}
                name='System Labs'
                badge='Best Value'
                price='$179/mo'
                why='Lowest verified GLP-1 entry price in the stack. Adjacent peptide bundle (NAD+, B-12, sermorelin) for biohacker stacks.'
                slug='system-labs'
              />
              <RankRow
                rank={3}
                name='Direct Meds'
                badge='Best Sublingual / Needle-Free'
                price='$224.10/mo (sublingual) / $399/mo (injectable)'
                why='Only verified provider with compounded sublingual tirzepatide drops. Adjacent peptide menu (Sermorelin, NAD+, Epithalon).'
                slug='directmeds'
              />
              <RankRow
                rank={4}
                name='Eden Health'
                badge='Best Brand Trust'
                price='$149 intro / $229–$249 ongoing'
                why='$3.92 EPC, 1.10% conversion rate. "Same Price at Every Dose" guarantee — flat-fee model with month-to-month flexibility.'
                slug='eden-health'
              />
              <RankRow
                rank={5}
                name='Gala Health'
                badge='Best 3-Month Bundle'
                price='$179–$199/mo (3-mo plan)'
                why='All-inclusive flat fee covers consults, async support, and shipping. Lowest sustained price for buyers comfortable with a 3-month commitment.'
                slug='gala-health'
              />
              <RankRow
                rank={6}
                name='Care Bare Rx'
                badge='Best Multi-Vertical'
                price='From $199/mo'
                why='Only multi-vertical provider in the stack (weight loss + hair $99 + sexual health $99 + NAD+ $199). Both oral AND injectable compounded GLP-1.'
                slug='care-bare-rx'
              />
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              How We Ranked These Providers
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              We do not rank providers by CPA payout — that would create a structural conflict of interest. Our editorial ranking
              combines four independently verifiable factors:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='1. Verified pricing'
                body='Live-pulled from each provider site by Gronk on May 5, 2026. We disclose first-month vs ongoing rates separately so the headline price reflects the real ongoing cost.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='2. Realized EPC + conversion'
                body='From the Katalys partner dashboard where available. Higher EPC reflects superior website conversion design, transparent pricing, and trustworthy onboarding — not advertising spend.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='3. Format options + differentiators'
                body='Needle-free formats (sublingual, GLP-1 gum), longevity stacks (NAD+ / B-12 / sermorelin), and multi-vertical care (hair, sexual health) earn explicit ranking weight when they uniquely serve a patient profile.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='4. Compliance posture'
                body='Post-April 2026, providers must demonstrate clear 503A pharmacy accreditation and a patient-specific compounding model. Providers operating under unclear or discontinued bulk-production exemptions are excluded entirely.'
              />
            </div>
          </div>
        </section>

        {/* Detailed reviews */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-7'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Detailed Reviews
            </h2>

            <DetailedReview
              rank={1}
              name='Embody'
              productKey='glp1-embody'
              badge='Best Overall'
              priceHeadline='$149 first month / $299 flat refills'
              promo='Spring Forward: $200 off first order + free expedited shipping'
              metric='Realized EPC $4.60 · CR 1.31% (Katalys May 2026)'
              summary='Embody is the data leader in our active stack. Higher real-world conversion rates than every other provider, plus the only flat-rate refill price ($299/mo regardless of dose) — most competitors raise prices as your dose escalates. The GLP-1 gum format is a genuine differentiator for needle-averse patients.'
              pros={[
                'Highest realized EPC + conversion rate of any active provider',
                'Flat $299/mo refills — no dose-escalation upcharges (uncommon in compounded telehealth)',
                'Spring Forward promo: $200 off first order + free expedited shipping',
                'GLP-1 gum is the only oral chewable tirzepatide in the stack',
                'HSA/FSA eligible; 2-minute online intake',
                'Pause anytime — no long-term commitment',
              ]}
              cons={[
                'Sermorelin not offered in the core GLP-1 program (cross-sell only)',
                'No branded GLP-1 (Wegovy/Zepbound) options',
                'Lab work not included in base price',
              ]}
              bestFor='Buyers who want flat-rate pricing immune to dose escalation, AND patients exploring GLP-1 gum as a needle-free daily alternative.'
            />

            <DetailedReview
              rank={2}
              name='System Labs'
              productKey='glp1-system-labs'
              badge='Best Value'
              priceHeadline='$179/mo (lowest verified GLP-1 entry)'
              promo='First-month discounts across the board: NAD+ $79, oral sermorelin $79, injectable sermorelin $109'
              metric='$100 default CPA + 4 cross-vertical payout tiers'
              summary='System Labs offers the cheapest GLP-1 entry price in our verified stack at $179/mo. The longevity bundle — NAD+, B-12 (MIC+B12), sermorelin in both oral and injectable formats — is unique among active GLP-1 providers and gives patients a clean cross-stack option for biohacker-style protocols.'
              pros={[
                'Lowest GLP-1 entry price in the active stack',
                'Only provider covering full adjacent-peptide cluster (NAD+, B-12, oral + injectable sermorelin)',
                'First-month discounts on every adjacent peptide program',
                'Lab-tested peptides from certified pharmacies',
                'No long-term commitments on any program',
              ]}
              cons={[
                'Lower CPA tier ($100) suggests less marketing investment in conversion design',
                'Multi-vertical focus — less brand recognition than single-vertical GLP-1 specialists',
              ]}
              bestFor='Cost-conscious buyers wanting the lowest entry price, and biohackers stacking GLP-1 with NAD+, B-12, or sermorelin in a longevity protocol.'
            />

            <DetailedReview
              rank={3}
              name='Direct Meds'
              productKey='glp1-directmeds'
              badge='Best Sublingual / Needle-Free'
              priceHeadline='$224.10/mo sublingual · $297–$399/mo injectable'
              metric='LegitScript + HIPAA certified · 53,000+ customers'
              summary='Direct Meds is the only verified provider offering compounded sublingual (under-the-tongue) tirzepatide drops at $224.10/mo, plus injectable tirzepatide at $297-$399. The sublingual format is a genuine differentiator for needle-averse patients. Adjacent peptide menu (Sermorelin, NAD+, Epithalon) and supplement line broaden the platform.'
              pros={[
                'Only verified provider with compounded sublingual GLP-1 in the active stack',
                'LegitScript + HIPAA certified — strong compliance posture',
                'Broad adjacent-peptide menu (Sermorelin, NAD+, Epithalon)',
                'HSA/FSA accepted',
                'Next-business-day shipping on confirmed orders',
                '53,000+ customer base provides social proof',
              ]}
              cons={[
                'Sublingual GLP-1 efficacy data less robust than injectable',
                'No branded GLP-1 (Wegovy/Zepbound) options',
                'Injectable tirzepatide tier ($399/mo) is higher than competitors',
              ]}
              bestFor='Patients with strong needle aversion who still want compounded GLP-1, and patients wanting a single platform for adjacent peptides alongside their GLP-1 protocol.'
            />

            <DetailedReview
              rank={4}
              name='Eden Health'
              productKey='glp1-eden-health'
              badge='Best Brand Trust'
              priceHeadline='$149 intro month / $229–$249 ongoing'
              metric='Realized EPC $3.92 · CR 1.10% (Katalys May 2026)'
              summary='Eden Health offers the most established brand in the active stack with verified $3.92 EPC and 1.10% conversion rate. The "Same Price at Every Dose" guarantee — flat $229-$249 across all dose tiers — provides real predictability for patients planning multi-month spend. Month-to-month or 3-month options.'
              pros={[
                'Strong realized EPC $3.92 and conversion rate 1.10% (Katalys-verified)',
                '"Same Price at Every Dose" — flat-rate ongoing pricing across dose tiers',
                'Month-to-month flexibility OR 3-month bundling',
                'Established brand with reliable customer service track record',
                'Both compounded semaglutide and tirzepatide available',
              ]}
              cons={[
                'Higher first-month and ongoing pricing than System Labs entry',
                'No branded GLP-1 (Wegovy/Zepbound) options',
                'No needle-free format options',
              ]}
              bestFor='Buyers wanting an established brand with predictable pricing across dose escalation, and patients comparing month-to-month vs 3-month commitment options.'
            />

            <DetailedReview
              rank={5}
              name='Gala Health'
              productKey='glp1-gala-health'
              badge='Best 3-Month Bundle'
              priceHeadline='$179–$199/mo on 3-month plans'
              metric='Realized EPC $3.60 · CR 1.18% (Katalys May 2026)'
              summary='Gala Health is the bundled-pricing pick. The 3-month plan locks compounded semaglutide at $179/mo and compounded tirzepatide/GIP at $199/mo, all-inclusive (provider consults, async support, shipping). For buyers comfortable with a 3-month commitment, this is the lowest sustained monthly price in the stack.'
              pros={[
                'All-inclusive flat fee — no separate consult, support, or shipping fees',
                'Strong realized conversion rate (1.18%)',
                '$349 default CPA suggests provider invests in conversion-quality funnel',
                'Nationwide US coverage with fast onboarding',
              ]}
              cons={[
                '3-month commitment required for bundled pricing',
                'No standalone intro discount (entry pricing IS the bundle)',
                'Pricing transparency requires intake completion',
              ]}
              bestFor='Buyers ready to commit to 3 months upfront for the lowest sustained all-inclusive price in the stack.'
            />

            <DetailedReview
              rank={6}
              name='Care Bare Rx'
              productKey='glp1-care-bare-rx'
              badge='Best Multi-Vertical'
              priceHeadline='Weight loss from $199/mo · Hair $99 · Sexual health $99 · NAD+ $199'
              metric='$300 default CPA + 6 cross-vertical payout tiers'
              summary='Care Bare Rx is the only true multi-vertical provider in the active stack. Weight-loss compounded GLP-1 from $199/mo, with standalone $99/mo hair regrowth, $99/mo sexual health, and $199/mo NAD+ programs. Both oral AND injectable compounded GLP-1 formats — a unique combination among active providers.'
              pros={[
                'Only multi-vertical provider in the active stack',
                'Both oral AND injectable compounded GLP-1 (most competitors are injectable-only)',
                'Standalone $99 hair and sexual health programs (real cross-sell paths)',
                '"Self-care with pride" positioning targets LGBTQ+ patients seeking inclusive care',
                'Discreet door delivery',
              ]}
              cons={[
                'Multi-vertical focus may mean less GLP-1-specific brand specialization',
                'Pricing transparency requires intake completion',
              ]}
              bestFor='Patients wanting one platform for weight loss + hair + sexual health + NAD+, and patients valuing inclusive care positioning.'
            />
          </div>
        </section>

        {/* Provider table component */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare All 6 Verified Programs
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Pricing verified May 5, 2026. All providers ship to all 50 US states.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='best-compounded-tirzepatide'
              heading='Top Compounded Tirzepatide Programs (Verified May 2026)'
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Get matched in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the verified telehealth provider that fits your budget, format preference (injectable / sublingual / gum), and timeline.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Full Compounded Guide
                </Link>
                <Link
                  href='/zepbound-vs-wegovy'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Branded Comparison
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

function RankRow({ rank, name, badge, price, why, slug }: { rank: number; name: string; badge: string; price: string; why: string; slug: string }) {
  return (
    <div className='flex items-start gap-4 p-5 rounded-2xl' style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
      <div
        className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg'
        style={{ backgroundColor: '#D4A33A', color: 'white', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {rank}
      </div>
      <div className='flex-1'>
        <div className='flex flex-wrap items-baseline gap-3 mb-1'>
          <h3 className='text-xl font-bold' style={{ color: '#0E2A3A' }}>{name}</h3>
          <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            {badge}
          </span>
          <span className='text-sm font-bold' style={{ color: '#D4A33A' }}>{price}</span>
        </div>
        <p className='text-sm leading-relaxed mb-2' style={{ color: '#3D5560' }}>{why}</p>
        <Link href={`/providers/${slug}`} className='text-xs font-semibold inline-flex items-center gap-1' style={{ color: '#D4A33A' }}>
          Read full review <ArrowRight className='h-3 w-3' />
        </Link>
      </div>
    </div>
  );
}

function DetailedReview({
  rank,
  name,
  productKey,
  badge,
  priceHeadline,
  promo,
  metric,
  summary,
  pros,
  cons,
  bestFor,
}: {
  rank: number;
  name: string;
  productKey: string;
  badge: string;
  priceHeadline: string;
  promo?: string;
  metric: string;
  summary: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}) {
  const url = buildAffiliateUrl(productKey, 'best-compounded-tirzepatide');

  return (
    <article className='mb-10 pb-10' style={{ borderBottom: '1px solid #E5DDC8' }}>
      <div className='flex items-center gap-3 mb-3'>
        <div
          className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold'
          style={{ backgroundColor: '#D4A33A', color: 'white', fontFamily: '"Playfair Display", "Georgia", serif' }}
        >
          #{rank}
        </div>
        <h3 className='text-2xl md:text-3xl font-bold' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
          {name}
        </h3>
        <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
          <Award className='h-3 w-3 inline mr-1' />
          {badge}
        </span>
      </div>

      <div className='mb-3 p-4 rounded-xl' style={{ backgroundColor: '#F0EBE0' }}>
        <div className='text-xl font-bold mb-1' style={{ color: '#D4A33A' }}>{priceHeadline}</div>
        <div className='text-xs' style={{ color: '#6B7B82' }}>{metric}</div>
        {promo && (
          <div className='text-xs font-semibold mt-2 inline-block px-2 py-1 rounded' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            🌟 {promo}
          </div>
        )}
      </div>

      <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>{summary}</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
        <div className='p-4 rounded-xl' style={{ backgroundColor: '#F0EBE0', border: '1px solid #7CA982' }}>
          <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>Pros</div>
          <ul className='text-sm space-y-1.5' style={{ color: '#3D5560' }}>
            {pros.map((p, i) => (
              <li key={i} className='flex items-start gap-2'>
                <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className='p-4 rounded-xl' style={{ backgroundColor: '#FAF1F0', border: '1px solid #E5DDC8' }}>
          <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#B14739' }}>Cons</div>
          <ul className='text-sm space-y-1.5' style={{ color: '#3D5560' }}>
            {cons.map((c, i) => (
              <li key={i} className='flex items-start gap-2'>
                <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='p-4 rounded-xl mb-5' style={{ backgroundColor: '#F4EBD0' }}>
        <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#7A6020' }}>Best for</div>
        <p className='text-sm' style={{ color: '#3D5560' }}>{bestFor}</p>
      </div>

      <div className='flex flex-wrap gap-3'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer sponsored'
          className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
          style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
        >
          Get Started with {name} <ArrowRight className='h-4 w-4' />
        </a>
        <Link
          href={`/providers/${productKey.replace('glp1-', '')}`}
          className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all'
          style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
        >
          Read Full Review
        </Link>
      </div>
    </article>
  );
}

function SafetyRow({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className='flex items-start gap-3 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <span className='flex-shrink-0 mt-0.5'>{icon}</span>
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{title}</h3>
        <p className='text-sm' style={{ color: '#3D5560' }}>{body}</p>
      </div>
    </div>
  );
}
