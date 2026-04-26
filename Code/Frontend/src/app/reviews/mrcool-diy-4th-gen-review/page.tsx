import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { AffiliateCTABox } from '@/components/reviews/AffiliateCTABox';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import { BuyButton } from '@/components/reviews/BuyButton';
import { StickyMobileCTA } from '@/components/reviews/StickyMobileCTA';
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  Sun,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'MrCool DIY 4th Gen Review: The Best Mini Split You Can Install Yourself (2026)',
  description:
    'In-depth MrCool DIY 4th Generation mini split review. True DIY installation with pre-charged QuickConnect line sets, up to 22 SEER2, WiFi built-in, heating down to -13°F. Full specs, installation walkthrough, and honest pros/cons.',
  alternates: {
    canonical: '/reviews/mrcool-diy-4th-gen-review',
  },
  openGraph: {
    title:
      'MrCool DIY 4th Gen Review: The Best Mini Split You Can Install Yourself (2026)',
    description:
      'Detailed review of the MrCool DIY 4th Generation mini split AC and heat pump. Save $3,000-$8,000 on installation with pre-charged QuickConnect line sets. No HVAC tech required.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'MrCool DIY 4th Gen Review: The Best Mini Split You Can Install Yourself',
  description:
    'In-depth review of the MrCool DIY 4th Generation mini split covering specs, DIY installation process, performance, energy efficiency, smart features, and honest pros/cons.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/mrcool-diy-4th-gen-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'MrCool DIY 4th Generation Mini Split Review',
  headline:
    'MrCool DIY 4th Gen Review: The Best Mini Split You Can Install Yourself',
  description:
    'In-depth review of the MrCool DIY 4th Generation ductless mini split heat pump. True DIY installation, up to 22 SEER2, WiFi, heating to -13°F.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'MrCool DIY 4th Generation Mini Split',
    brand: {
      '@type': 'Brand',
      name: 'MrCool',
    },
    description:
      'Ductless mini split heat pump with pre-charged QuickConnect line sets for true DIY installation. Available in 12K, 18K, 24K, and 36K BTU sizes. Up to 22 SEER2, WiFi built-in, heating down to -13°F.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '1899',
      highPrice: '2499',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.6',
    bestRating: '5',
    worstRating: '1',
  },
  reviewBody:
    'The MrCool DIY 4th Generation is the only mini split on the market that a homeowner can genuinely install without an HVAC technician. Pre-charged QuickConnect line sets eliminate the need for vacuum pumps, manifold gauges, or refrigerant handling. The 24K BTU model delivers 22 SEER2 efficiency, heats down to -13°F, and includes built-in WiFi for smart home integration. At $1,899-$2,499 before installation savings, it represents $3,000-$8,000 less than a professionally installed equivalent.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/mrcool-diy-4th-gen-review',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I really install a MrCool DIY mini split myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The MrCool DIY 4th Generation uses pre-charged QuickConnect line sets that snap together without any specialized HVAC tools. You do not need a vacuum pump, manifold gauges, or refrigerant handling certification. The main skills required are drilling a 3-inch hole through an exterior wall, mounting the indoor and outdoor units, and making basic electrical connections. Most homeowners complete the installation in 4-8 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money does DIY installation save compared to hiring an HVAC contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional mini split installation typically costs $3,000-$8,000 in labor alone, depending on your area and the complexity of the job. The MrCool DIY eliminates that cost entirely. A 24K BTU MrCool DIY unit costs $1,899-$2,199, while a comparable professionally installed mini split (unit plus labor) runs $5,000-$10,000 total. That is a savings of $3,000-$8,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size MrCool DIY mini split do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The general rule: 12K BTU covers 350-550 sq ft (bedrooms, home offices), 18K BTU covers 550-900 sq ft (large bedrooms, living rooms), 24K BTU covers 900-1,400 sq ft (open-concept living areas, garages), and 36K BTU covers 1,400-2,000 sq ft (large spaces, workshops). Climate, insulation quality, ceiling height, and sun exposure all affect sizing. When in doubt, size up rather than down.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the MrCool DIY 4th Gen work as a heater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The MrCool DIY 4th Generation is a full heat pump that provides both cooling and heating. It can heat effectively down to -13°F outdoor temperatures, making it viable for most US climates. In moderate climates like California, it can serve as a primary heating source. In extreme cold climates, it works best as supplemental heat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the MrCool DIY mini split need professional electrical work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MrCool DIY requires a dedicated electrical circuit. The 12K and 18K BTU models run on 115V/15A circuits, while the 24K and 36K models need 230V/20A-30A circuits. If you already have an available circuit of the right voltage, you can connect it yourself. If you need a new circuit run from your breaker panel, most local codes require a licensed electrician for that portion. The electrical connection at the unit itself is straightforward.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MrCool DIY warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MrCool DIY 4th Generation comes with a 7-year compressor warranty and a 5-year parts warranty. This applies to DIY installations, you do not need professional installation to maintain warranty coverage. MrCool is one of the few manufacturers that explicitly supports DIY installation without voiding the warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the MrCool DIY 4th Gen more efficient than window AC units?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Significantly. The MrCool DIY 4th Gen achieves up to 22 SEER2, while typical window AC units rate 10-15 CEER. That means the MrCool uses roughly 30-50% less electricity to produce the same cooling. Over a California summer, this can translate to $200-$500 in annual energy savings depending on usage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the MrCool DIY with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The MrCool DIY runs on standard household electrical circuits, so it works seamlessly with any grid-tied or hybrid solar system. Pairing a high-efficiency mini split with solar panels is one of the most cost-effective ways to cool and heat your home. Under NEM 3.0 in California, running the mini split during peak solar production hours maximizes your self-consumption and reduces grid exports at lower NEM 3.0 rates.',
      },
    },
  ],
};

const PRODUCT_KEY = 'mrcool-diy-4th-gen';

export default function MrCoolDIY4thGenReview() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link
                href='/reviews'
                className='hover:text-primary transition-colors'
              >
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <Link
                href='/reviews/best-mini-split-ac'
                className='hover:text-primary transition-colors'
              >
                Best Mini Split AC
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                MrCool DIY 4th Gen
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                MrCool DIY 4th Gen Review: The Best Mini Split You Can Install
                Yourself
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<p className='text-lg text-muted-foreground mb-4'>
                Save $3,000-$8,000 in HVAC labor costs with pre-charged
                QuickConnect line sets. No vacuum pump, no manifold gauges, no
                HVAC license required.
              </p>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-21'>April 21, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>16 min read</span>
                </div>
              </div>
            </header>
            <div className='mb-8 rounded-xl overflow-hidden border' style={{borderColor:'#1e293b'}}>
              <img src='https://crdms.images.consumerreports.org/prod/products/cr/models/413079-ductless-air-conditioners-mrcool-diy-4th-gen-diy-12-hp-wm-115c25-10039675.png' alt='MrCool DIY 4th Gen mini split AC' className='w-full h-auto max-h-[480px] object-cover' loading='eager' />
            </div>

            {/* Affiliate disclosure, FTC compliance, must be above the fold */}
            <AffiliateDisclosure compact />

            {/* Above-the-fold primary CTA — 40-80% CTR lift vs end-only CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Best DIY Install"
              rating={4.6}
              verdict="MrCool DIY 4th Gen — the only true DIY mini split. Pre-charged QuickConnect line sets, 22 SEER2 efficiency, heats down to -13°F, built-in WiFi. Save $3,000-$8,000 vs pro install."
              pros={[
                'Homeowners skipping HVAC contractor costs',
                'Garages, additions, bonus rooms, ADUs',
                'Single-zone heating and cooling',
              ]}
              cons={['Whole-home multi-zone (single only)', 'Renters or condo owners']}
              source="mrcool-diy-4th-gen"
              variant="top"
            />

            {/* Quick Verdict */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.6</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The MrCool DIY 4th Generation is the only mini split on the
                market that a homeowner can genuinely install without calling an
                HVAC contractor. The pre-charged QuickConnect line sets are the
                real innovation here — they eliminate the vacuum pump, manifold
                gauges, and refrigerant handling that make traditional mini
                splits a professional-only job. The 24K BTU sweet spot model
                delivers 22 SEER2 efficiency, heats down to -13&deg;F, and
                includes built-in WiFi. At $1,899-$2,499 (depending on size)
                with zero labor costs, you&apos;re looking at total savings of
                $3,000-$8,000 compared to a professional installation. The
                tradeoff? You need to be comfortable drilling a 3-inch hole
                through your wall and handling basic electrical work.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Homeowners who want to skip HVAC contractor costs
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Garages, additions, bonus rooms, ADUs
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Single-zone heating and cooling
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Not ideal for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Whole-home multi-zone setups (single zone only)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Renters or condo owners (requires wall penetration)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Anyone uncomfortable with basic power tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Why the MrCool DIY Exists (And Why It Matters)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Mini splits are the most energy-efficient way to heat and cool a
                home. That is not debatable. Heat pump technology moves heat
                instead of generating it, delivering 3-4x more energy than it
                consumes. The problem has always been installation. A traditional
                mini split requires an HVAC technician with EPA 608
                certification to handle refrigerant, a vacuum pump to evacuate
                the lines, manifold gauges to verify charge levels, and
                specialized flaring tools. That labor bill runs $3,000-$8,000
                depending on your market.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                MrCool solved this with their QuickConnect line sets; factory
                pre-charged copper lines with snap-together fittings that
                release the refrigerant when you connect them. No vacuum pump.
                No gauges. No EPA certification. No HVAC technician. The 4th
                Generation refines this system with better connections,
                R-32 refrigerant (lower global warming potential than R-410A),
                and improved cold-weather performance down to -13&deg;F.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                The result: a legitimate, high-efficiency mini split heat pump
                that a homeowner with basic tools can install in a single
                weekend. For California homeowners paying 30-50 cents per kWh
                and dealing with extreme summer heat, this is a significant
                opportunity to slash cooling costs without spending thousands on
                an HVAC contractor.
              </p>
            </section>

            {/* Size Guide */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Which Size Do You Need? BTU Size Guide
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Choosing the right BTU size is the single most important
                decision. An undersized unit will run constantly without reaching
                your set temperature. An oversized unit will short-cycle, wasting
                energy and failing to dehumidify properly. Here is the breakdown
                for all four MrCool DIY 4th Gen sizes:
              </p>
              <div className='grid gap-4'>
                {/* 12K BTU */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center justify-between mb-3'>
                    <h3 className='text-lg font-bold text-foreground'>
                      12,000 BTU
                    </h3>
                    <span className='text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full'>
                      ~$1,899
                    </span>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-3 text-sm'>
                    <div>
                      <p className='text-muted-foreground mb-1'>Coverage</p>
                      <p className='text-foreground font-medium'>
                        350 - 550 sq ft
                      </p>
                    </div>
                    <div>
                      <p className='text-muted-foreground mb-1'>Circuit</p>
                      <p className='text-foreground font-medium'>
                        115V / 15A
                      </p>
                    </div>
                    <div className='sm:col-span-2'>
                      <p className='text-muted-foreground mb-1'>Best for</p>
                      <p className='text-foreground/80'>
                        Bedrooms, home offices, small living rooms. The easiest
                        to install because it plugs into a standard 115V outlet. no electrician needed for most homes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 18K BTU */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center justify-between mb-3'>
                    <h3 className='text-lg font-bold text-foreground'>
                      18,000 BTU
                    </h3>
                    <span className='text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full'>
                      ~$2,099
                    </span>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-3 text-sm'>
                    <div>
                      <p className='text-muted-foreground mb-1'>Coverage</p>
                      <p className='text-foreground font-medium'>
                        550 - 900 sq ft
                      </p>
                    </div>
                    <div>
                      <p className='text-muted-foreground mb-1'>Circuit</p>
                      <p className='text-foreground font-medium'>
                        115V / 15A
                      </p>
                    </div>
                    <div className='sm:col-span-2'>
                      <p className='text-muted-foreground mb-1'>Best for</p>
                      <p className='text-foreground/80'>
                        Large bedrooms, medium living rooms, master suites. Still
                        runs on 115V, keeping installation simple. Good balance
                        of power and simplicity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 24K BTU, Sweet Spot */}
                <div className='bg-primary/5 border-2 border-primary/40 rounded-xl p-5 relative'>
                  <div className='absolute -top-3 left-4'>
                    <span className='text-xs font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full'>
                      SWEET SPOT
                    </span>
                  </div>
                  <div className='flex items-center justify-between mb-3 mt-1'>
                    <h3 className='text-lg font-bold text-foreground'>
                      24,000 BTU
                    </h3>
                    <span className='text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full'>
                      ~$2,199
                    </span>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-3 text-sm'>
                    <div>
                      <p className='text-muted-foreground mb-1'>Coverage</p>
                      <p className='text-foreground font-medium'>
                        900 - 1,400 sq ft
                      </p>
                    </div>
                    <div>
                      <p className='text-muted-foreground mb-1'>Circuit</p>
                      <p className='text-foreground font-medium'>
                        230V / 20A
                      </p>
                    </div>
                    <div className='sm:col-span-2'>
                      <p className='text-muted-foreground mb-1'>Best for</p>
                      <p className='text-foreground/80'>
                        Open-concept living areas, large garages, ADUs, in-law
                        suites. The 24K is the best value per BTU and delivers
                        the highest SEER2 rating (22) in the lineup. This is the
                        size most homeowners should buy. Requires a 230V circuit, you may need an electrician to run one from your
                        panel if you do not already have a 230V outlet nearby.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 36K BTU */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center justify-between mb-3'>
                    <h3 className='text-lg font-bold text-foreground'>
                      36,000 BTU
                    </h3>
                    <span className='text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full'>
                      ~$2,499
                    </span>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-3 text-sm'>
                    <div>
                      <p className='text-muted-foreground mb-1'>Coverage</p>
                      <p className='text-foreground font-medium'>
                        1,400 - 2,000 sq ft
                      </p>
                    </div>
                    <div>
                      <p className='text-muted-foreground mb-1'>Circuit</p>
                      <p className='text-foreground font-medium'>
                        230V / 30A
                      </p>
                    </div>
                    <div className='sm:col-span-2'>
                      <p className='text-muted-foreground mb-1'>Best for</p>
                      <p className='text-foreground/80'>
                        Large open spaces, workshops, oversized garages,
                        converted barns. The most powerful single-zone option.
                        Requires a dedicated 230V/30A circuit. Best for spaces
                        where central HVAC is impractical or too expensive to
                        extend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Specs Table */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications (24K BTU Model)
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Cooling Capacity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        24,000 BTU / 2 tons
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Sun className='h-4 w-4 text-primary' />
                        SEER2 Rating
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to 22 SEER2
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        HSPF2 Rating
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to 10 HSPF2
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Heating Range
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Down to -13&deg;F (-25&deg;C)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Refrigerant
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        R-32 (lower GWP than R-410A)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Line Set Type
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Pre-charged QuickConnect (DIY)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Line Set Lengths
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        16 ft or 25 ft (included)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Electrical
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        230V / 20A dedicated circuit
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        WiFi
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Built-in (Google Home, Alexa, SmartHQ app)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Noise Level (Indoor)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~40 dB (whisper-quiet on low)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        7-year compressor, 5-year parts
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price Range
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $1,899 - $2,499 (varies by BTU size)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* DIY Installation Process */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                DIY Installation: What It Actually Takes
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the section everyone wants to read. MrCool markets the
                DIY 4th Gen as a &ldquo;no professional needed&rdquo;
                installation. That is mostly true, with some important caveats.
                Here is exactly what the installation involves, step by step:
              </p>

              {/* Step 1 */}
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0 mt-0.5'>
                    1
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      Choose Your Location
                    </h3>
                    <p className='text-foreground/80 text-sm leading-relaxed'>
                      The indoor unit (evaporator) mounts high on an interior
                      wall. The outdoor unit (condenser) sits on a ground-level
                      pad or wall bracket outside. They need to be within 16-25
                      feet of each other (depending on your line set length),
                      separated by an exterior wall. Pick a spot where
                      you&apos;re comfortable drilling a 3-inch hole through the
                      wall. Avoid load-bearing headers above windows and doors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0 mt-0.5'>
                    2
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      Mount the Indoor Unit
                    </h3>
                    <p className='text-foreground/80 text-sm leading-relaxed'>
                      Install the mounting plate on the interior wall using the
                      included template. This requires a drill, a level, and
                      wall anchors (or screwing directly into studs). The unit
                      should sit 6-8 inches below the ceiling with at least 6
                      inches of clearance on each side. Then drill the 3-inch
                      hole through the wall at a slight downward angle (for
                      condensate drainage).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0 mt-0.5'>
                    3
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      Run the QuickConnect Line Set
                    </h3>
                    <p className='text-foreground/80 text-sm leading-relaxed'>
                      This is where the MrCool DIY shines. Feed the pre-charged
                      line set through the wall hole. The line set includes the
                      refrigerant lines, communication wire, and condensate
                      drain, all bundled together. Connect the indoor end to
                      the evaporator using the QuickConnect fittings. They
                      literally snap together with a quarter turn. No flaring
                      tools, no vacuum pump, no torque wrenches. The refrigerant
                      releases automatically when the connection is made.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0 mt-0.5'>
                    4
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      Set Up the Outdoor Unit
                    </h3>
                    <p className='text-foreground/80 text-sm leading-relaxed'>
                      Place the condenser on a level concrete pad, ground-level
                      mounting brackets, or a wall bracket. Ensure at least 24
                      inches of clearance on the sides and 48 inches above for
                      airflow. Connect the other end of the QuickConnect line
                      set to the outdoor unit, same snap-together process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0 mt-0.5'>
                    5
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      Electrical Connection
                    </h3>
                    <p className='text-foreground/80 text-sm leading-relaxed'>
                      Connect the power supply to the outdoor unit&apos;s
                      disconnect box. The 12K and 18K models plug into a
                      standard 115V outlet. The 24K and 36K models require a
                      dedicated 230V circuit. If you do not already have a 230V
                      outlet near the outdoor unit location, you will likely need
                      a licensed electrician to run a new circuit from your
                      breaker panel. This is typically a $200-$500 job and is the
                      one part of the installation that may require a
                      professional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0 mt-0.5'>
                    6
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      Test and Configure
                    </h3>
                    <p className='text-foreground/80 text-sm leading-relaxed'>
                      Power on the unit, connect it to WiFi through the SmartHQ
                      app, and run it in cooling mode for 15-20 minutes to
                      verify everything is working. Check that the indoor unit
                      is blowing cold air and the outdoor unit fan is spinning.
                      Seal around the wall penetration with the included putty
                      and cover with the line set cover for a clean finish.
                    </p>
                  </div>
                </div>
              </div>

              {/* Installation Summary */}
              <div className='bg-card border border-border rounded-xl p-5 mt-6'>
                <h3 className='text-lg font-semibold text-foreground mb-3'>
                  Installation Reality Check
                </h3>
                <div className='grid sm:grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='text-muted-foreground mb-1'>Time Required</p>
                    <p className='text-foreground font-medium'>
                      4-8 hours (first-timer)
                    </p>
                  </div>
                  <div>
                    <p className='text-muted-foreground mb-1'>
                      Skill Level
                    </p>
                    <p className='text-foreground font-medium'>
                      Intermediate DIY
                    </p>
                  </div>
                  <div>
                    <p className='text-muted-foreground mb-1'>Tools Needed</p>
                    <p className='text-foreground/80'>
                      Drill, 3&quot; hole saw, level, adjustable wrench, wire
                      strippers, stud finder
                    </p>
                  </div>
                  <div>
                    <p className='text-muted-foreground mb-1'>
                      Potential Pro Help
                    </p>
                    <p className='text-foreground/80'>
                      Electrician for 230V circuit ($200-$500) if you need one
                      run from the panel
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mid-content affiliate CTA, 30-60% CTR lift */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              headline="Ready to buy?"
              verdict="MrCool DIY 4th Gen is stocked at Home Depot and major retailers — check current pricing on all BTU sizes."
              source="mrcool-diy-4th-gen"
              variant="mid"
            />

            {/* Performance Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Cooling and Heating Performance
              </h2>

              <h3 className='text-xl font-semibold text-foreground mb-3'>
                Cooling
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 24K BTU model cools a 1,000+ sq ft space comfortably in
                California summer heat. The inverter compressor is the key
                advantage here, unlike window units that cycle on and off
                (creating temperature swings and noise spikes), the MrCool
                continuously adjusts its output to maintain your set
                temperature. This means steadier comfort and significantly lower
                energy consumption. In cooling mode, the indoor unit operates at
                around 40 dB on low speed, quieter than a library. You will
                hear it when it first ramps up, but at steady state it fades
                into background noise.
              </p>

              <h3 className='text-xl font-semibold text-foreground mb-3'>
                Heating
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 4th Generation&apos;s cold-weather heating is a major
                upgrade. It operates effectively down to -13&deg;F, making it
                viable as a primary heat source in moderate climates and a strong
                supplemental heater in cold climates. The HSPF2 rating of 10
                means it is approximately 2.5-3x more efficient than electric
                resistance heating (baseboard heaters, space heaters). For
                California homeowners, this is more than enough heating capacity
                for the relatively mild winters in most of the state.
              </p>

              <div className='bg-card border border-border rounded-xl p-5'>
                <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                  <Zap className='h-5 w-5 text-primary' />
                  Performance vs. Window AC Units
                </h3>
                <div className='space-y-3 text-sm'>
                  <div className='flex items-start gap-3'>
                    <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    <span className='text-foreground/80'>
                      <strong className='text-foreground'>30-50% less electricity</strong>{' '}
                      — 22 SEER2 vs 10-15 CEER for window units
                    </span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    <span className='text-foreground/80'>
                      <strong className='text-foreground'>Dramatically quieter</strong>{' '}
                      — 40 dB vs 50-60 dB for window units
                    </span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    <span className='text-foreground/80'>
                      <strong className='text-foreground'>Heats and cools</strong>{' '}
                      — window units are cooling only
                    </span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    <span className='text-foreground/80'>
                      <strong className='text-foreground'>No window blocking</strong>{' '}
                      — preserves your view, natural light, and home security
                    </span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    <span className='text-foreground/80'>
                      <strong className='text-foreground'>Steady temperature</strong>{' '}
                      — inverter compressor vs on/off cycling
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Energy Efficiency */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Energy Efficiency and Cost Savings
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 22 SEER2 rating on the 24K model places it among the most
                efficient single-zone mini splits available. For context, the
                federal minimum for new split-system air conditioners is 14.3
                SEER2. The MrCool DIY is roughly 54% more efficient than the
                legal minimum.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What does this mean in dollars? For a California homeowner
                paying 35 cents/kWh (a typical PG&E or SCE rate), running the
                24K BTU model 8 hours a day for 5 months of summer costs
                roughly $300-$450 for the season. A comparable window AC unit at
                12 CEER would cost $550-$800 for the same cooling. That is
                $200-$350 in annual savings on the cooling side alone.
              </p>

              <div className='bg-card border border-border rounded-xl p-5'>
                <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                  <DollarSign className='h-5 w-5 text-primary' />
                  Total Cost of Ownership (5-Year Estimate)
                </h3>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                    <thead>
                      <tr className='bg-muted/30'>
                        <th className='px-4 py-3 text-left font-medium text-foreground'>
                          Cost Factor
                        </th>
                        <th className='px-4 py-3 text-left font-medium text-foreground'>
                          MrCool DIY 24K
                        </th>
                        <th className='px-4 py-3 text-left font-medium text-foreground'>
                          Pro-Installed Mini Split
                        </th>
                        <th className='px-4 py-3 text-left font-medium text-foreground'>
                          Window AC (2 units)
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-border'>
                      <tr>
                        <td className='px-4 py-3 text-foreground'>
                          Equipment
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $2,199
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $2,000-$3,000
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $600-$1,000
                        </td>
                      </tr>
                      <tr className='bg-muted/30'>
                        <td className='px-4 py-3 text-foreground'>
                          Installation
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $0 (DIY) + ~$300 electrician
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $3,000-$8,000
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>$0</td>
                      </tr>
                      <tr>
                        <td className='px-4 py-3 text-foreground'>
                          5-Year Energy Cost
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $1,500-$2,250
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $1,500-$2,250
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $2,750-$4,000
                        </td>
                      </tr>
                      <tr className='bg-muted/30 font-semibold'>
                        <td className='px-4 py-3 text-foreground'>
                          5-Year Total
                        </td>
                        <td className='px-4 py-3 text-primary'>
                          $4,000-$4,750
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $6,500-$13,250
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          $3,350-$5,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className='text-xs text-muted-foreground mt-3'>
                  Estimates based on California electricity rates (~$0.35/kWh),
                  8 hours/day cooling for 5 months, plus 4 months moderate
                  heating use. Window AC does not provide heating.
                </p>
              </div>
            </section>

            {/* Smart Features */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Smart Features and WiFi Integration
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 4th Generation ships with built-in WiFi, no adapter
                dongle needed (earlier generations required a separate WiFi kit).
                Once connected to your network through the SmartHQ app, you get:
              </p>
              <div className='grid sm:grid-cols-2 gap-4 mb-6'>
                <div className='bg-card border border-border rounded-xl p-4'>
                  <h4 className='font-semibold text-foreground mb-2'>
                    SmartHQ App
                  </h4>
                  <ul className='text-sm text-foreground/80 space-y-1.5'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Remote temperature control from anywhere
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Weekly scheduling (set different temps per day)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Mode switching (cool, heat, dry, fan, auto)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Energy usage monitoring
                    </li>
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-xl p-4'>
                  <h4 className='font-semibold text-foreground mb-2'>
                    Voice Control
                  </h4>
                  <ul className='text-sm text-foreground/80 space-y-1.5'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Google Home compatible
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Amazon Alexa compatible
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      &ldquo;Set garage to 72 degrees&rdquo; voice commands
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Automation routines (turn on when you arrive home)
                    </li>
                  </ul>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                The WiFi integration is particularly useful for garage and
                workshop installations — you can start cooling the space from
                your phone 15 minutes before heading out, instead of walking
                into a 110&deg;F garage. The scheduling feature also lets you
                take advantage of California TOU rates by pre-cooling during
                off-peak hours and letting the space coast through peak pricing
                periods.
              </p>
            </section>

            {/* Pros and Cons */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Pros */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-bold text-green-500 mb-4 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5' />
                    Pros
                  </h3>
                  <ul className='space-y-3 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          True DIY installation
                        </strong>{' '}
                        — QuickConnect line sets eliminate the need for an HVAC
                        technician, vacuum pump, or refrigerant handling
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          $3,000-$8,000 installation savings
                        </strong>{' '}
                        — the single biggest cost advantage over any competitor
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          22 SEER2 efficiency
                        </strong>{' '}
                        — top-tier efficiency that dramatically reduces
                        electricity costs
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Heats to -13&deg;F
                        </strong>{' '}
                        — works as both AC and heater, viable in most US climates
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Built-in WiFi
                        </strong>{' '}
                        — no extra dongle, works with Google Home and Alexa out
                        of the box
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          R-32 refrigerant
                        </strong>{' '}
                        — 67% lower global warming potential than R-410A
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Whisper-quiet
                        </strong>{' '}
                        — ~40 dB indoor operation, far quieter than window units
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Warranty covers DIY
                        </strong>{' '}
                        — 7-year compressor, 5-year parts without requiring pro
                        installation
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Cons */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-bold text-red-500 mb-4 flex items-center gap-2'>
                    <XCircle className='h-5 w-5' />
                    Cons
                  </h3>
                  <ul className='space-y-3 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Requires drilling through an exterior wall
                        </strong>{' '}
                        — not an option for renters or anyone uncomfortable with
                        a 3-inch hole saw
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          230V models may need an electrician
                        </strong>{' '}
                        — the 24K and 36K require a 230V circuit that many homes
                        do not have in the right location
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Single-zone only
                        </strong>{' '}
                        — each unit serves one room; whole-home coverage
                        requires multiple units
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Pre-charged line sets are single-use
                        </strong>{' '}
                        — if you make a mistake with the QuickConnect fitting,
                        you need a new line set ($200-$400)
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          Fixed line set lengths
                        </strong>{' '}
                        — 16 ft or 25 ft options only; if your layout needs 30
                        ft, you are out of luck with the DIY line sets
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          SmartHQ app is mediocre
                        </strong>{' '}
                        — functional but not as polished as Mitsubishi kumo cloud
                        or Daikin One
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>
                          No multi-zone DIY option
                        </strong>{' '}
                        — MrCool&apos;s multi-zone models require professional
                        installation, defeating the main selling point
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Who Should Buy */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Who Should Buy the MrCool DIY 4th Gen?
              </h2>
              <div className='space-y-4'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    Garage and Workshop Owners
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    This is the number one use case. Garages rarely have HVAC
                    ducting, and paying $5,000+ to get a contractor out for a
                    single-zone garage install is hard to justify. The MrCool
                    DIY solves this for under $2,500 with a weekend of work. The
                    WiFi integration means you can start cooling from your phone
                    before heading to the garage.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    ADU and In-Law Suite Builders
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    California&apos;s ADU boom means thousands of homeowners are
                    building accessory dwelling units that need independent
                    climate control. A mini split is the standard HVAC solution
                    for ADUs, and the MrCool DIY lets you handle it yourself
                    during the build instead of scheduling (and paying for) a
                    separate HVAC contractor.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    Room Addition and Bonus Room Projects
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Added a sunroom, converted a porch, or finished an attic?
                    Extending your existing ductwork is expensive and may not be
                    feasible. A single-zone mini split is often the most
                    practical solution, and the DIY installation means you can
                    handle it yourself.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    Budget-Conscious Homeowners Replacing Window AC
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    If you are running 2-3 window units and paying inflated
                    electricity bills for 10-15 CEER efficiency, one MrCool DIY
                    24K unit can replace them all while cutting your cooling
                    energy cost by 30-50%. The upfront investment pays for
                    itself within 3-5 years through energy savings alone, faster if you factor in the avoided professional
                    installation cost.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Verdict */}
            <section className='mb-12'>
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8'>
                <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                  Final Verdict
                  <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                    <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                    <span className='font-bold text-foreground'>4.6</span>
                    <span className='text-muted-foreground text-sm'>/ 5</span>
                  </div>
                </h2>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The MrCool DIY 4th Generation is not the most efficient mini
                  split on the market (Mitsubishi and Daikin have models pushing
                  26+ SEER2). It is not the quietest. It is not the most
                  feature-rich. But it is the only one you can install yourself,
                  and that single advantage changes the entire economics of mini
                  split ownership.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  When a comparable professionally installed mini split costs
                  $5,000-$10,000 total and the MrCool DIY costs $2,200-$2,500
                  all-in, the math is hard to argue with. The 22 SEER2
                  efficiency is excellent (even if not class-leading), the
                  -13&deg;F heating range covers almost every US climate, and the
                  built-in WiFi with Google Home and Alexa support is genuinely
                  useful.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-6'>
                  The 24K BTU model is the sweet spot for most buyers, it
                  covers up to 1,400 sq ft, achieves the lineup&apos;s best
                  SEER2 rating, and hits the right price-to-performance balance.
                  If you are a homeowner comfortable with a drill, a hole saw,
                  and basic electrical connections, the MrCool DIY 4th Gen is
                  the most cost-effective way to add high-efficiency heating and
                  cooling to any space.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4'>
                {faqSchema.mainEntity.map((faq, index) => (
                  <div
                    key={index}
                    className='bg-card border border-border rounded-xl p-5'
                  >
                    <h3 className='text-base font-semibold text-foreground mb-2'>
                      {faq.name}
                    </h3>
                    <p className='text-sm text-foreground/80 leading-relaxed'>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Content CTAs */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Related Reviews
              </h2>
              <div className='grid sm:grid-cols-2 gap-4'>
                <Link
                  href='/reviews/best-mini-split-ac'
                  className='group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors'
                >
                  <span className='text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wide'>
                    Comparison Guide
                  </span>
                  <h3 className='text-lg font-bold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors'>
                    Best Mini Split AC Systems (2026)
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Head-to-head comparison of MrCool, Mitsubishi, Daikin,
                    Senville, and more.
                  </p>
                  <span className='inline-flex items-center gap-1 text-sm text-primary mt-2'>
                    Read guide <ArrowRight className='h-3 w-3' />
                  </span>
                </Link>
                <Link
                  href='/reviews'
                  className='group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors'
                >
                  <span className='text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wide'>
                    All Reviews
                  </span>
                  <h3 className='text-lg font-bold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors'>
                    Browse All Product Reviews
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Power stations, mini splits, e-bikes, and more, tested and
                    reviewed by GreenReviewsHub.
                  </p>
                  <span className='inline-flex items-center gap-1 text-sm text-primary mt-2'>
                    View all reviews <ArrowRight className='h-3 w-3' />
                  </span>
                </Link>
              </div>
            </section>

            {/* Final Affiliate CTA */}
            <section className='mb-10'>
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                headline='Ready to buy the MrCool DIY 4th Gen?'
                verdict='The only true DIY mini split, skip HVAC contractor costs and save thousands. Check current pricing on all BTU sizes.'
                source='mrcool-diy-4th-gen'
                variant='final'
              />
              <div className='mt-6 text-center'>
                <p className='text-sm text-muted-foreground mb-2'>
                  Still comparing?
                </p>
                <Link
                  href='/reviews'
                  className='inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline'
                >
                  Browse All Reviews
                  <ArrowRight className='h-3 w-3' />
                </Link>
              </div>
            </section>

            {/* Back to Reviews */}
            <div className='text-center'>
              <Link
                href='/reviews'
                className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm'
              >
                <ChevronRight className='h-4 w-4 rotate-180' />
                Back to All Reviews
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source="mrcool-diy-4th-gen" />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
