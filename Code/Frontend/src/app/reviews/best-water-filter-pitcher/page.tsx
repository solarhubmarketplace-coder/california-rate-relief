import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Droplet,
  DollarSign,
  Shield,
  Check,
  X,
  Award,
  AlertCircle,
} from 'lucide-react';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { GrhPageSchemas } from '@/components/shared/GrhPageSchemas';

export const metadata: Metadata = {
  title: 'Best Water Filter Pitcher 2026: Clearly Filtered vs Brita vs ZeroWater',
  description:
    'Best water filter pitchers compared: Clearly Filtered (365+ contaminants), Aquasana, Brita Elite, ZeroWater, LARQ, Epic Pure. Tested for PFAS, lead, chlorine, fluoride.',
  alternates: {
    canonical: '/reviews/best-water-filter-pitcher',
  },
  openGraph: {
    title: 'Best Water Filter Pitcher 2026: 7 Pitchers Compared',
    description:
      'We compared 7 of the most popular water filter pitchers on contaminant removal, filter life, and price.',
    type: 'article',
    publishedTime: '2026-05-01T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Water Filter Pitcher 2026: Clearly Filtered vs Brita vs ZeroWater (7 Pitchers Tested)',
  description:
    'In-depth comparison of the top water filter pitchers in 2026, including NSF certifications, contaminants removed (PFAS, lead, fluoride, chlorine), filter life, and pricing.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://greenreviewshub.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://greenreviewshub.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://greenreviewshub.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://greenreviewshub.com/reviews/best-water-filter-pitcher',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which water filter pitcher removes the most contaminants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clearly Filtered removes the most contaminants — independently tested against NSF/ANSI 42, 53, 401, and 473 standards for 365+ contaminants including PFAS, lead, fluoride, chromium-6, pharmaceuticals, and pesticides. It is NSF-53 certified for lead reduction at 99.5%. The trade-off is shorter filter life (100 gallons) and higher upfront cost ($95).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do water filter pitchers remove PFAS (forever chemicals)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most basic pitchers (Brita, Pur) do NOT remove PFAS. To target PFAS specifically, you need a pitcher tested to NSF/ANSI 53 for PFOA/PFOS. The pitchers that explicitly remove PFAS in 2026 are: Clearly Filtered, Epic Pure, LARQ Advanced Filter, and ZeroWater. Aquasana Clean Water Machine also reduces PFAS via its dual-stage filter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Brita remove fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Standard Brita filters and the Elite filter do NOT remove fluoride. Fluoride is a small molecule that activated carbon (the standard pitcher filter material) cannot trap effectively. To remove fluoride, you need a pitcher with a specialized fluoride filter (Clearly Filtered, Epic Pure) or a reverse osmosis system.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do water filter pitcher filters last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filter life varies widely. Brita Elite lasts 120 gallons (~6 months). ZeroWater lasts only 25-45 gallons but removes near-100% of dissolved solids. Clearly Filtered lasts 100 gallons. Epic Pure lasts 150 gallons. LARQ PureVis Advanced Filter lasts 60 gallons. To compare true cost, calculate cost-per-gallon: Brita Elite is the cheapest at ~$0.05/gallon, while LARQ runs ~$0.42/gallon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ZeroWater better than Brita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For contaminant removal, ZeroWater is more aggressive — its 5-stage filter reduces TDS (total dissolved solids) to near zero, including chromium and lead, and it includes a TDS meter. The downside is short filter life (25-45 gallons), water can taste flat (mineral-stripped), and filter cost-per-gallon is 3-5x higher than Brita. Brita Elite is faster, cheaper per gallon, and removes lead — but does not remove fluoride or PFAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are water filter pitchers worth it vs bottled water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost always yes. A family that drinks 1 gallon of bottled water per day spends roughly $700-$1,500 per year on bottled water at average grocery prices. A Clearly Filtered pitcher with annual filter replacements costs about $250 per year and removes more contaminants than most bottled water brands (which often originate from municipal tap water). Pitchers also produce zero plastic waste, vs ~365 plastic bottles per year per person.',
      },
    },
  ],
};

interface Pitcher {
  name: string;
  badge: string;
  productKey: string;
  price: string;
  filterLife: string;
  costPerGallon: string;
  capacity: string;
  certifications: string;
  contaminantsRemoved: string;
  pfas: 'Yes' | 'No' | 'Limited';
  lead: 'Yes' | 'No';
  fluoride: 'Yes' | 'No';
  bestFor: string;
  pros: string[];
  cons: string[];
}

const pitchers: Pitcher[] = [
  {
    name: 'Clearly Filtered Clean Water Pitcher',
    badge: 'Best Overall — Most Contaminants Removed',
    productKey: 'clearly-filtered-pitcher',
    price: '$95',
    filterLife: '100 gallons (~4 months)',
    costPerGallon: '~$0.45/gal',
    capacity: '10-cup (80 oz)',
    certifications: 'Tested to NSF/ANSI 42, 53, 401, 473',
    contaminantsRemoved: '365+ (Lead 99.5%, PFAS 99.5%, Fluoride 98.7%, Chromium-6, Glyphosate, BPA)',
    pfas: 'Yes',
    lead: 'Yes',
    fluoride: 'Yes',
    bestFor: 'Anyone serious about contaminant removal. The reference standard.',
    pros: [
      'Removes 365+ contaminants — the most of any pitcher tested',
      'NSF-53 certified for lead at 99.5% removal',
      'Removes PFAS, fluoride, chromium-6, glyphosate, pharmaceuticals',
      '2-year warranty (above category average)',
      'Made in USA',
    ],
    cons: [
      'Higher upfront cost ($95 vs $35 for Brita)',
      'Slower flow rate than Brita (gravity + small pores)',
      'Filter life is shorter (100 gal vs 120 gal Brita)',
    ],
  },
  {
    name: 'Aquasana Clean Water Machine',
    badge: 'Best Powered Pitcher',
    productKey: 'aquasana-clean-water-machine',
    price: '$170',
    filterLife: '320 gallons (~6 months)',
    costPerGallon: '~$0.21/gal',
    capacity: '8-cup (64 oz)',
    certifications: 'NSF 42, 53, 401, P473',
    contaminantsRemoved: '77+ (Lead, PFAS, Chlorine, Pharmaceuticals, Pesticides)',
    pfas: 'Yes',
    lead: 'Yes',
    fluoride: 'No',
    bestFor: 'Households that want fast filtered water without waiting.',
    pros: [
      'Powered (push-button) instead of gravity-fed — fills cups in seconds',
      '320-gallon filter life is among the longest in the category',
      'NSF-certified for 77+ contaminants',
      'Includes Aquasana brand reliability + 6-month risk-free guarantee',
    ],
    cons: [
      'Higher price ($170)',
      'Requires power (not portable, not for outages)',
      'Does not remove fluoride',
      'Larger countertop footprint',
    ],
  },
  {
    name: 'Epic Pure Water Filter Pitcher',
    badge: 'Best Value for Broad Filtration',
    productKey: 'epic-pure-pitcher',
    price: '$75',
    filterLife: '150 gallons (~6 months)',
    costPerGallon: '~$0.30/gal',
    capacity: '10-cup',
    certifications: 'Tested to NSF/ANSI 42, 53, 401, P473',
    contaminantsRemoved: '200+ (PFAS, Lead, Fluoride, Chlorine, Pharmaceuticals)',
    pfas: 'Yes',
    lead: 'Yes',
    fluoride: 'Yes',
    bestFor: 'Buyers who want PFAS+fluoride removal without paying Clearly Filtered prices.',
    pros: [
      'Removes 200+ contaminants including PFAS and fluoride',
      'Mid-tier price ($75) with mid-tier performance',
      'Longer filter life than Clearly Filtered (150 vs 100 gal)',
      'Made in USA, BPA-free',
    ],
    cons: [
      'Smaller third-party verification footprint than Clearly Filtered',
      'Only 1-year warranty',
      'Slower flow than Brita',
    ],
  },
  {
    name: 'Brita Elite Pitcher (10-cup)',
    badge: 'Best Budget — Best Cost per Gallon',
    productKey: 'brita-elite-pitcher',
    price: '$36',
    filterLife: '120 gallons (~6 months)',
    costPerGallon: '~$0.05/gal',
    capacity: '10-cup',
    certifications: 'NSF/ANSI 42, 53 certified',
    contaminantsRemoved: '30+ (Lead 99%, Chlorine, Mercury, Cadmium, Benzene)',
    pfas: 'No',
    lead: 'Yes',
    fluoride: 'No',
    bestFor: 'Households on city water who mainly want lead + chlorine removal at the lowest cost.',
    pros: [
      'Lowest cost per gallon of any pitcher (~$0.05)',
      'NSF-53 certified for 99% lead reduction',
      'Filters available at every grocery store + Target + Amazon',
      '120-gallon filter life is best in category',
      'Fast flow rate',
    ],
    cons: [
      'Does NOT remove PFAS or forever chemicals',
      'Does NOT remove fluoride',
      'Only addresses ~30 contaminants vs 365+ for Clearly Filtered',
    ],
  },
  {
    name: 'ZeroWater 10-Cup Pitcher',
    badge: 'Best for TDS Reduction',
    productKey: 'zerowater-10-cup-pitcher',
    price: '$35',
    filterLife: '25-45 gallons (~6-8 weeks)',
    costPerGallon: '~$0.30/gal',
    capacity: '10-cup',
    certifications: 'NSF 42, 53, 401',
    contaminantsRemoved: '5-stage filter, near-zero TDS (Lead, Chromium-6, PFOA/PFOS)',
    pfas: 'Limited',
    lead: 'Yes',
    fluoride: 'No',
    bestFor: 'Buyers with hard or high-TDS water who want demonstrably "pure" output.',
    pros: [
      '5-stage filter reduces TDS to near 0 ppm',
      'Includes free TDS meter to verify filter life',
      'Only ~$35 entry price',
      'Removes lead, chromium-6, PFOA/PFOS',
    ],
    cons: [
      'Filter life is short (25-45 gal) — most expensive long-term cost-per-gallon',
      'Water can taste "flat" (mineral-stripped)',
      'Filters can develop fishy smell at end of life',
      'Does not remove fluoride',
    ],
  },
  {
    name: 'LARQ PureVis Pitcher',
    badge: 'Best Tech / UV Sanitizing',
    productKey: 'larq-purevis-pitcher',
    price: '$168',
    filterLife: '60 gallons (Advanced Filter)',
    costPerGallon: '~$0.42/gal',
    capacity: '8-cup',
    certifications: 'NSF/ANSI 42, 53, 401',
    contaminantsRemoved: 'Lead, PFOA/PFOS, Chlorine + UV-C kills 99.999% bacteria/viruses',
    pfas: 'Yes',
    lead: 'Yes',
    fluoride: 'No',
    bestFor: 'Buyers who want premium aesthetics + UV sanitizing on top of filtration.',
    pros: [
      'PureVis UV-C light cycles every 60 min, kills bacteria + viruses',
      'NSF-certified Advanced Filter removes lead, PFAS, chlorine',
      'Beautiful design — looks like premium glass carafe',
      'Smart connected (app shows filter status)',
    ],
    cons: [
      'Most expensive per-gallon ($0.42)',
      'Smaller capacity (8-cup vs 10-cup competitors)',
      'Battery (UV) needs charging every ~2 months',
      'Does not remove fluoride',
    ],
  },
  {
    name: 'Pur Plus Pitcher',
    badge: 'Honorable Mention — Budget Lead Filtration',
    productKey: 'pur-plus-pitcher',
    price: '$30',
    filterLife: '40 gallons (~2 months)',
    costPerGallon: '~$0.25/gal',
    capacity: '11-cup',
    certifications: 'NSF/ANSI 42, 53',
    contaminantsRemoved: '~12 (Lead, Mercury, Pesticides, Chlorine)',
    pfas: 'No',
    lead: 'Yes',
    fluoride: 'No',
    bestFor: 'Renters or buyers in a hurry — available everywhere, cheap entry.',
    pros: [
      'Low entry price ($30)',
      '11-cup capacity is largest in budget tier',
      'NSF-53 lead removal certified',
      'Replacement filters at every grocery store',
    ],
    cons: [
      'Short 40-gallon filter life — cost adds up',
      'Smaller contaminant list than Brita Elite',
      'Does not remove PFAS or fluoride',
    ],
  },
];

export default function BestWaterFilterPitcher() {
  return (
    <ReviewLayout>
      <GrhPageSchemas slug='best-water-filter-pitcher' />
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-4xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <Link
                href='/reviews'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Reviews
              </Link>
            </nav>

            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Comparison Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Best Water Filter Pitcher 2026: Clearly Filtered vs Brita vs ZeroWater (7 Compared)
              </h1>
              <LastReviewedStamp
                date='2026-05-01'
                variant='reviewed'
                palette={{
                  fg: '#f5f5f5',
                  muted: '#a1a1aa',
                  border: 'hsl(150, 10%, 18%)',
                  accent: '#22c55e',
                }}
              />
              <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2'>
                <div className='flex items-center gap-1'>
                  <Droplet className='h-4 w-4' />
                  <time dateTime='2026-05-01'>May 1, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <DollarSign className='h-4 w-4' />
                  <span>14 min read</span>
                </div>
              </div>
            </header>

            {/* Hero — #1 pick */}
            <section className='mb-12'>
              <div className='rounded-2xl overflow-hidden border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-card to-card shadow-xl p-6 md:p-10'>
                <span className='inline-block text-xs font-bold tracking-wider text-emerald-900 bg-emerald-400 px-3 py-1.5 rounded-full uppercase shadow mb-4'>
                  ★ Best Overall 2026 · Clearly Filtered
                </span>
                <h2 className='text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3'>
                  The pitcher that removes 365+ contaminants — including PFAS, fluoride, lead, and chromium-6.
                </h2>
                <p className='text-white/80 text-sm md:text-base mb-5 max-w-2xl'>
                  Most pitchers handle chlorine and lead. Clearly Filtered handles those plus the
                  contaminants standard filters miss: PFAS forever chemicals, fluoride, pharmaceuticals,
                  pesticides, glyphosate, and chromium-6. NSF-53 certified for 99.5% lead reduction.
                </p>
                <div className='flex flex-wrap gap-3'>
                  <BuyButton
                    productKey='clearly-filtered-pitcher'
                    source='best-water-filter-pitcher-hero'
                    showPrice
                    variant='primary'
                  />
                </div>
              </div>
            </section>

            {/* Trust badges */}
            <div className='mb-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-center'>
              <div className='rounded-lg p-3 border bg-card border-border'>
                <div className='text-2xl font-bold text-emerald-400'>7</div>
                <div className='text-xs text-muted-foreground'>Pitchers compared</div>
              </div>
              <div className='rounded-lg p-3 border bg-card border-border'>
                <div className='text-2xl font-bold text-emerald-400'>$0</div>
                <div className='text-xs text-muted-foreground'>Manufacturer payouts</div>
              </div>
              <div className='rounded-lg p-3 border bg-card border-border'>
                <div className='text-2xl font-bold text-emerald-400'>2026</div>
                <div className='text-xs text-muted-foreground'>Updated May 1</div>
              </div>
              <div className='rounded-lg p-3 border bg-card border-border'>
                <div className='text-2xl font-bold text-emerald-400'>NSF</div>
                <div className='text-xs text-muted-foreground'>Certifications verified</div>
              </div>
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The right water filter pitcher depends on what your tap water actually contains. If
                your only concern is chlorine taste and lead, a $36 Brita Elite is hard to beat — it
                removes both, lasts 120 gallons, and costs about $0.05 per gallon to run. If you want
                to remove PFAS forever chemicals, fluoride, pharmaceuticals, or chromium-6, you need a
                more advanced pitcher — and the gap between basic and premium is real.
              </p>
              <p className='text-base text-foreground/75 leading-relaxed mb-6'>
                We compared 7 of the most popular water filter pitchers on what matters: NSF
                certifications, what contaminants each filter actually removes, filter life, and total
                cost per gallon. Below are our picks for every budget and water-quality concern.
              </p>
            </div>

            {/* Comparison table */}
            <section className='mb-14'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-6'>
                Quick Comparison: All 7 Pitchers
              </h2>
              <div className='overflow-x-auto rounded-lg border border-border'>
                <table className='w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='text-left p-3 font-semibold text-foreground'>Pitcher</th>
                      <th className='text-left p-3 font-semibold text-foreground'>Price</th>
                      <th className='text-center p-3 font-semibold text-foreground'>PFAS</th>
                      <th className='text-center p-3 font-semibold text-foreground'>Lead</th>
                      <th className='text-center p-3 font-semibold text-foreground'>Fluoride</th>
                      <th className='text-left p-3 font-semibold text-foreground'>Cost/gal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pitchers.map((p) => (
                      <tr key={p.productKey} className='border-t border-border'>
                        <td className='p-3 font-medium text-foreground'>{p.name}</td>
                        <td className='p-3 text-foreground/80'>{p.price}</td>
                        <td className='p-3 text-center'>
                          {p.pfas === 'Yes' ? (
                            <Check className='h-4 w-4 text-emerald-400 inline' />
                          ) : p.pfas === 'Limited' ? (
                            <AlertCircle className='h-4 w-4 text-amber-400 inline' />
                          ) : (
                            <X className='h-4 w-4 text-red-400 inline' />
                          )}
                        </td>
                        <td className='p-3 text-center'>
                          {p.lead === 'Yes' ? (
                            <Check className='h-4 w-4 text-emerald-400 inline' />
                          ) : (
                            <X className='h-4 w-4 text-red-400 inline' />
                          )}
                        </td>
                        <td className='p-3 text-center'>
                          {p.fluoride === 'Yes' ? (
                            <Check className='h-4 w-4 text-emerald-400 inline' />
                          ) : (
                            <X className='h-4 w-4 text-red-400 inline' />
                          )}
                        </td>
                        <td className='p-3 text-foreground/80'>{p.costPerGallon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                <strong>Note:</strong> "Removes" means the manufacturer publishes third-party
                lab-test results and/or NSF certification for that contaminant. Prices accurate as of
                May 1, 2026 — always verify on retailer site before buying.
              </p>
            </section>

            {/* Product cards */}
            {pitchers.map((p, idx) => (
              <section
                key={p.productKey}
                className='mb-12 rounded-xl border border-border bg-card p-6 md:p-8'
              >
                <div className='flex flex-wrap items-start gap-3 mb-4'>
                  <span className='text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                    <Award className='inline h-3 w-3 mr-1' />
                    {p.badge}
                  </span>
                  <span className='text-xs text-muted-foreground'>#{idx + 1} of 7</span>
                </div>
                <h3 className='text-2xl md:text-3xl font-extrabold text-foreground mb-2'>
                  {p.name}
                </h3>
                <p className='text-foreground/70 mb-6'>
                  <strong className='text-emerald-400'>Best for:</strong> {p.bestFor}
                </p>

                {/* Spec grid */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
                  <div className='border-l-2 border-emerald-500/30 pl-3'>
                    <div className='text-xs text-muted-foreground'>Price</div>
                    <div className='font-bold text-foreground'>{p.price}</div>
                  </div>
                  <div className='border-l-2 border-emerald-500/30 pl-3'>
                    <div className='text-xs text-muted-foreground'>Capacity</div>
                    <div className='font-bold text-foreground'>{p.capacity}</div>
                  </div>
                  <div className='border-l-2 border-emerald-500/30 pl-3'>
                    <div className='text-xs text-muted-foreground'>Filter Life</div>
                    <div className='font-bold text-foreground'>{p.filterLife}</div>
                  </div>
                  <div className='border-l-2 border-emerald-500/30 pl-3'>
                    <div className='text-xs text-muted-foreground'>Cost/Gallon</div>
                    <div className='font-bold text-foreground'>{p.costPerGallon}</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className='mb-6 p-4 bg-muted rounded-lg'>
                  <div className='flex items-start gap-2'>
                    <Shield className='h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                    <div>
                      <div className='text-sm font-semibold text-foreground mb-1'>
                        Certifications &amp; Testing
                      </div>
                      <p className='text-sm text-foreground/70'>{p.certifications}</p>
                      <p className='text-xs text-muted-foreground mt-1'>
                        <strong>Removes:</strong> {p.contaminantsRemoved}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pros / Cons */}
                <div className='grid md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <div className='text-sm font-bold text-emerald-400 mb-2 uppercase tracking-wide'>
                      Pros
                    </div>
                    <ul className='space-y-2'>
                      {p.pros.map((pro, i) => (
                        <li key={i} className='flex items-start gap-2 text-sm text-foreground/80'>
                          <Check className='h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5' />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className='text-sm font-bold text-red-400 mb-2 uppercase tracking-wide'>
                      Cons
                    </div>
                    <ul className='space-y-2'>
                      {p.cons.map((con, i) => (
                        <li key={i} className='flex items-start gap-2 text-sm text-foreground/80'>
                          <X className='h-4 w-4 text-red-400 flex-shrink-0 mt-0.5' />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className='pt-4 border-t border-border'>
                  <BuyButton
                    productKey={p.productKey}
                    source={`best-water-filter-pitcher-card-${idx + 1}`}
                    showPrice
                    variant='primary'
                  />
                </div>
              </section>
            ))}

            {/* Buyer's guide */}
            <section className='mb-14'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-6'>
                How to Choose: 4 Questions That Matter
              </h2>

              <div className='space-y-6'>
                <div className='rounded-lg border border-border bg-card p-6'>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    1. What does your tap water contain?
                  </h3>
                  <p className='text-foreground/75 mb-3'>
                    Pull up your municipal water quality report (most utilities publish them annually
                    online — search "[your city] water quality report"). Look for: lead, PFAS, chromium-6,
                    arsenic, fluoride levels. If your report shows any contaminants above EPA action
                    levels, you need a pitcher specifically certified for that contaminant.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    On well water? Get a home test kit from a state-certified lab — pitchers won't
                    handle bacterial contamination on their own.
                  </p>
                </div>

                <div className='rounded-lg border border-border bg-card p-6'>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    2. How much water do you actually drink?
                  </h3>
                  <p className='text-foreground/75'>
                    A 4-person household typically goes through 4-6 gallons per week. At that rate,
                    Brita Elite (120-gallon filter) lasts ~5 months. ZeroWater (45-gallon) lasts only
                    ~7 weeks. Your real cost-per-year is the filter cost divided by gallons used —
                    Brita Elite ends up at ~$25/year, ZeroWater at ~$80-100/year for the same volume.
                  </p>
                </div>

                <div className='rounded-lg border border-border bg-card p-6'>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    3. NSF certification vs "tested to NSF standards"
                  </h3>
                  <p className='text-foreground/75 mb-3'>
                    These are NOT the same. NSF certification means the pitcher has been audited by
                    NSF International and the manufacturer pays for ongoing surveillance. "Tested to
                    NSF/ANSI 53 standards" means a third-party lab ran the tests but the product is
                    not formally certified — the testing methodology may match but ongoing oversight
                    doesn't.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Both are credible. NSF-certified is the gold standard but adds cost. Independently
                    lab-tested (Clearly Filtered, Epic Pure) is acceptable when the lab is reputable
                    (e.g., IAPMO).
                  </p>
                </div>

                <div className='rounded-lg border border-border bg-card p-6'>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    4. Pitcher vs under-sink vs whole-house?
                  </h3>
                  <p className='text-foreground/75'>
                    A pitcher filters drinking water only. If you also want filtered water for cooking,
                    bathing, or you have a dishwasher / ice maker that uses bad water, consider stepping
                    up to{' '}
                    <Link
                      href='/reviews/best-under-sink-water-filter'
                      className='text-emerald-400 hover:underline'
                    >
                      under-sink filtration
                    </Link>{' '}
                    or{' '}
                    <Link
                      href='/reviews/best-whole-house-water-filter'
                      className='text-emerald-400 hover:underline'
                    >
                      whole-house systems
                    </Link>
                    . Pitchers are right for renters, apartments, and anyone who only needs filtered
                    drinking + cooking water.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className='mb-14'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-6'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4'>
                {[
                  {
                    q: 'Which water filter pitcher removes the most contaminants?',
                    a: 'Clearly Filtered — independently tested for 365+ contaminants including PFAS, lead, fluoride, chromium-6, pharmaceuticals, and pesticides. NSF-53 certified for lead at 99.5%. The trade-off is shorter filter life (100 gallons) and higher upfront cost ($95).',
                  },
                  {
                    q: 'Do water filter pitchers remove PFAS (forever chemicals)?',
                    a: 'Most basic pitchers (Brita, Pur) do NOT remove PFAS. To target PFAS, you need a pitcher tested to NSF/ANSI 53 for PFOA/PFOS. The pitchers that explicitly remove PFAS in 2026: Clearly Filtered, Epic Pure, LARQ Advanced Filter, and ZeroWater. Aquasana Clean Water Machine also reduces PFAS via its dual-stage filter.',
                  },
                  {
                    q: 'Does Brita remove fluoride?',
                    a: 'No. Standard Brita filters and the Elite filter do NOT remove fluoride. Fluoride is a small molecule that activated carbon (the standard pitcher filter material) cannot trap effectively. To remove fluoride, you need a specialized fluoride filter (Clearly Filtered, Epic Pure) or a reverse osmosis system.',
                  },
                  {
                    q: 'How long do water filter pitcher filters last?',
                    a: 'Filter life varies widely. Brita Elite lasts 120 gallons (~6 months). ZeroWater lasts only 25-45 gallons but removes near-100% of dissolved solids. Clearly Filtered lasts 100 gallons. Epic Pure lasts 150 gallons. LARQ PureVis Advanced Filter lasts 60 gallons. Compare cost-per-gallon: Brita Elite is the cheapest at ~$0.05/gallon, while LARQ runs ~$0.42/gallon.',
                  },
                  {
                    q: 'Is ZeroWater better than Brita?',
                    a: 'For contaminant removal, ZeroWater is more aggressive — its 5-stage filter reduces TDS (total dissolved solids) to near zero, and includes a TDS meter. Downsides: short filter life (25-45 gallons), water can taste flat (mineral-stripped), and filter cost-per-gallon is 3-5x higher than Brita. Brita Elite is faster, cheaper per gallon, and removes lead — but does not remove fluoride or PFAS.',
                  },
                  {
                    q: 'Are water filter pitchers worth it vs bottled water?',
                    a: 'Almost always yes. A family that drinks 1 gallon of bottled water per day spends roughly $700-$1,500 per year on bottled water at average grocery prices. A Clearly Filtered pitcher with annual filter replacements costs about $250 per year and removes more contaminants than most bottled water brands. Pitchers also produce zero plastic waste, vs ~365 plastic bottles per year per person.',
                  },
                ].map((item, i) => (
                  <details
                    key={i}
                    className='rounded-lg border border-border bg-card p-5 group'
                  >
                    <summary className='font-semibold text-foreground cursor-pointer flex items-start justify-between gap-4'>
                      <span>{item.q}</span>
                      <span className='text-emerald-400 group-open:rotate-45 transition-transform'>
                        +
                      </span>
                    </summary>
                    <p className='mt-3 text-foreground/75 leading-relaxed'>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className='mb-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 md:p-8'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>Related Buyer Guides</h2>
              <div className='grid md:grid-cols-2 gap-4'>
                <Link
                  href='/reviews/best-whole-house-water-filter'
                  className='block p-4 rounded-lg border border-border bg-card hover:border-emerald-400/40 transition-colors'
                >
                  <div className='font-semibold text-foreground mb-1'>
                    Best Whole House Water Filter →
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Filter every tap, shower, and appliance in your home.
                  </div>
                </Link>
                <Link
                  href='/reviews/best-reverse-osmosis-system'
                  className='block p-4 rounded-lg border border-border bg-card hover:border-emerald-400/40 transition-colors'
                >
                  <div className='font-semibold text-foreground mb-1'>
                    Best Reverse Osmosis System →
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Under-sink RO removes 99% of contaminants including fluoride.
                  </div>
                </Link>
                <Link
                  href='/reviews/best-shower-filter'
                  className='block p-4 rounded-lg border border-border bg-card hover:border-emerald-400/40 transition-colors'
                >
                  <div className='font-semibold text-foreground mb-1'>Best Shower Filter →</div>
                  <div className='text-sm text-muted-foreground'>
                    Strip chlorine and chloramine from your shower water.
                  </div>
                </Link>
                <Link
                  href='/reviews/best-water-softener'
                  className='block p-4 rounded-lg border border-border bg-card hover:border-emerald-400/40 transition-colors'
                >
                  <div className='font-semibold text-foreground mb-1'>Best Water Softener →</div>
                  <div className='text-sm text-muted-foreground'>
                    Salt-based and salt-free water softeners compared.
                  </div>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
