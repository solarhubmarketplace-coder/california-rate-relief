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
  ArrowLeft,
  ArrowRight,
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

export const metadata: Metadata = {
  title:
    'Daikin Mini Split Review 2026: World-Class Efficiency From the HVAC Giant',
  description:
    'In-depth Daikin ductless mini split review. 17-Series, Fit, and Aurora models compared. Up to 20.6 SEER2, 19 dB noise, R-32 refrigerant, heating to -13F. Specs, pricing, installation costs, and how Daikin compares to Mitsubishi and MrCool DIY.',
  alternates: {
    canonical: '/reviews/daikin-mini-split-review',
  },
  openGraph: {
    title:
      'Daikin Mini Split Review 2026: World-Class Efficiency From the HVAC Giant',
    description:
      'Full review of Daikin ductless mini split systems. 17-Series wall mount, Fit, and Aurora lineups. Up to 20.6 SEER2, R-32 refrigerant, 19 dB noise. Pros, cons, and California installation analysis.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Daikin Ductless Mini Split Review',
  headline:
    'Daikin Mini Split Review: World-Class Efficiency From the HVAC Giant',
  description:
    'In-depth review of the Daikin ductless mini split system. 17-Series wall mount with up to 20.6 SEER2, R-32 refrigerant, 19 dB indoor noise, and heating down to -13F.',
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
    name: 'Daikin 17-Series Wall Mount Ductless Mini Split',
    brand: {
      '@type': 'Brand',
      name: 'Daikin',
    },
    description:
      'Ductless mini split heat pump system with inverter compressor, up to 20.6 SEER2, R-32 refrigerant, and heating operation down to -13F.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '1400',
      highPrice: '7500',
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
    'Daikin brings decades of global HVAC leadership to the ductless mini split market with whisper-quiet operation, industry-leading efficiency, and the environmental advantages of R-32 refrigerant. The 17-Series wall mount delivers up to 20.6 SEER2 and 12.5 HSPF2, with indoor noise as low as 19 dB.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/daikin-mini-split-review',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a Daikin mini split worth the money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Daikin mini splits offer excellent long-term value thanks to industry-leading efficiency (up to 20.6 SEER2), a 12-year compressor and parts warranty, and whisper-quiet operation. The higher upfront cost compared to DIY brands is offset by professional-grade reliability and lower energy bills over the system\'s 15-20 year lifespan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a Daikin mini split last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A properly installed and maintained Daikin mini split typically lasts 15-20 years. With the 12-year compressor warranty (registered) and Daikin\'s reputation for commercial-grade durability, many units exceed 20 years of service with regular filter cleaning and periodic professional maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a Daikin mini split heat in cold weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Daikin Aurora series is specifically designed for cold climates and maintains heating output down to -13F (-25C). The standard 17-Series and Fit models also provide effective heat pump operation in moderate cold. For most of California, any Daikin model handles winter heating easily.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Daikin use R-410A or R-32 refrigerant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daikin is transitioning to R-32 refrigerant across its mini split lineup. R-32 has a 68% lower Global Warming Potential (GWP) than R-410A, requires less charge per system, and delivers slightly better energy efficiency. Daikin developed R-32 and has been using it in international markets since 2012.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a Daikin mini split myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Daikin mini splits require professional HVAC installation. Unlike MrCool DIY units with pre-charged linesets, Daikin systems need vacuum pumps, refrigerant charging, electrical work, and brazing. all requiring EPA 608 certification. Professional installation costs $1,500-$4,000+ depending on complexity but ensures warranty coverage and optimal performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quiet is a Daikin mini split?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daikin mini splits are among the quietest on the market at 19 dB on the lowest fan setting — quieter than a whisper (20 dB). Even at higher speeds, indoor noise stays under 40 dB. The outdoor condenser unit operates at 55-60 dB, comparable to a normal conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Daikin 17-Series, Fit, and Aurora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 17-Series is Daikin\'s premium wall-mount line with the highest SEER2 ratings (up to 20.6) and lowest noise. The Fit is a slim-profile ducted system designed for homes with existing ductwork or tight spaces. The Aurora is the cold-climate specialist, maintaining full heating capacity down to -13F with a base pan heater for extreme conditions.',
      },
    },
  ],
};

const PRODUCT_KEY = 'daikin-mini-split';

export default function DaikinMiniSplitReviewPage() {
  return (
    <ReviewLayout>
      <ReviewHeader />

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
          <div className='max-w-4xl mx-auto'>

            {/* Breadcrumb */}
            <nav className='flex items-center gap-2 text-sm text-muted-foreground mb-8'>
              <Link href='/reviews' className='hover:text-foreground transition-colors'>
                Reviews
              </Link>
              <ChevronRight className='w-3.5 h-3.5' />
              <Link href='/reviews/best-mini-split-ac' className='hover:text-foreground transition-colors'>
                Mini Split AC
              </Link>
              <ChevronRight className='w-3.5 h-3.5' />
              <span className='text-foreground'>Daikin Mini Split</span>
            </nav>

            {/* Hero */}
            <div className='mb-12'>
              <div className='flex items-center gap-3 mb-4'>
                <span
                  className='text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full'
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}
                >
                  HVAC Review
                </span>
                <span className='flex items-center gap-1 text-sm text-muted-foreground'>
                  <Clock className='w-3.5 h-3.5' />
                  14 min read
                </span>
              </div>

              <h1
                className='text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight'
                style={{ color: '#f5f5f5' }}
              >
                Daikin Mini Split Review: World-Class Efficiency From the
                Planet&apos;s Largest HVAC Manufacturer
              </h1>

              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<p className='text-lg text-muted-foreground leading-relaxed mb-6'>
                Daikin invented R-32 refrigerant, sells more HVAC units than anyone on earth, and
                builds mini splits so quiet you forget they&apos;re running. We break down the full
                17-Series, Fit, and Aurora lineup. Specs, real-world performance, pricing, and
                whether Daikin is worth the premium over Mitsubishi and MrCool DIY.
              </p>

              <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
                <span>By <strong className='text-foreground'>GreenReviewsHub Team</strong></span>
                <span className='w-1 h-1 rounded-full bg-muted-foreground' />
                <span>Updated April 21, 2026</span>
                <span className='w-1 h-1 rounded-full bg-muted-foreground' />
                <span className='flex items-center gap-1'>
                  <Shield className='w-3.5 h-3.5' style={{ color: '#22c55e' }} />
                  Expert Verified
                </span>
              </div>
            </div>

            {/* Rating Card */}
            <div className='rounded-2xl border border-border bg-card p-8 mb-12'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
                <div>
                  <h2 className='text-2xl font-bold text-foreground mb-2'>
                    Daikin 17-Series Wall Mount
                  </h2>
                  <p className='text-muted-foreground'>
                    Premium ductless mini split heat pump
                  </p>
                </div>
                <div className='flex items-center gap-3'>
                  <div
                    className='text-5xl font-black'
                    style={{ color: '#22c55e' }}
                  >
                    4.6
                  </div>
                  <div>
                    <div className='flex items-center gap-0.5 mb-1'>
                      {[1, 2, 3, 4].map((i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 fill-current'
                          style={{ color: '#22c55e' }}
                        />
                      ))}
                      <Star
                        className='w-5 h-5'
                        style={{ color: '#22c55e', fillOpacity: 0.6 }}
                      />
                    </div>
                    <span className='text-xs text-muted-foreground'>
                      GreenReviewsHub Rating
                    </span>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
                {[
                  { label: 'Efficiency', value: '9.5/10' },
                  { label: 'Noise Level', value: '9.5/10' },
                  { label: 'Build Quality', value: '9.0/10' },
                  { label: 'Value', value: '8.0/10' },
                ].map((score) => (
                  <div
                    key={score.label}
                    className='rounded-xl bg-card border border-border p-4 text-center'
                  >
                    <div className='text-xl font-bold text-foreground'>
                      {score.value}
                    </div>
                    <div className='text-xs text-muted-foreground mt-1'>
                      {score.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Verdict */}
            <div
              className='rounded-2xl p-8 mb-12'
              style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
            >
              <h2 className='text-xl font-bold text-foreground mb-3 flex items-center gap-2'>
                <Zap className='w-5 h-5' style={{ color: '#22c55e' }} />
                Quick Verdict
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                Daikin is the Toyota of HVAC, not always the flashiest, but relentlessly refined and
                engineered for long-term reliability. The 17-Series delivers class-leading efficiency
                (20.6 SEER2), near-silent indoor operation (19 dB), and an industry-best 12-year
                warranty. The trade-off is clear: you need professional installation, and you&apos;ll
                pay a premium over DIY options like MrCool. But for homeowners who want a set-it-and-forget-it
                system that quietly saves money for 15-20 years, Daikin is the benchmark.
              </p>
            </div>

            {/* Affiliate Disclosure + Top CTA */}
            <AffiliateDisclosure compact />
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Editor's Choice"
              rating={4.6}
              verdict="Daikin 17-Series delivers 20.6 SEER2 efficiency, 19 dB whisper-quiet operation, R-32 refrigerant, and a 12-year warranty from the world's largest HVAC manufacturer."
              pros={[
                'Class-leading 20.6 SEER2 efficiency',
                'Whisper-quiet 19 dB indoor operation',
                '12-year compressor + parts warranty',
                'Future-proof R-32 refrigerant',
              ]}
              cons={[
                'Professional install required (~$1,500-$4,000)',
                'Smaller US installer network than Mitsubishi',
              ]}
              source='daikin-mini-split'
              variant='top'
            />

            {/* Table of Contents */}
            <div className='rounded-2xl border border-border bg-card p-6 mb-12'>
              <h3 className='font-bold text-foreground mb-4'>In This Review</h3>
              <div className='grid md:grid-cols-2 gap-2'>
                {[
                  'Overview & Who Daikin Is',
                  'Model Lineup: 17-Series vs Fit vs Aurora',
                  'Key Specifications',
                  'Performance & Efficiency',
                  'R-32 Refrigerant Advantage',
                  'Noise Levels',
                  'Daikin vs Mitsubishi',
                  'Daikin vs MrCool DIY',
                  'Installation & Cost Breakdown',
                  'Pros & Cons',
                  'FAQ',
                  'Final Verdict',
                ].map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-2 text-sm text-muted-foreground py-1'
                  >
                    <ChevronRight className='w-3.5 h-3.5 flex-shrink-0' style={{ color: '#22c55e' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Overview: Why Daikin Is the HVAC Brand Contractors Trust Most
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Most homeowners haven&apos;t heard of Daikin. That&apos;s a branding problem, not a
                quality problem. Daikin is the world&apos;s largest HVAC manufacturer — a $30+ billion
                Japanese company that has been building heating and cooling systems since 1924.
                They supply equipment to commercial buildings, data centers, hospitals, and millions
                of homes across Asia, Europe, and increasingly, North America.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                In the mini split space specifically, Daikin invented the variable refrigerant volume
                (VRV) system that became the foundation of modern ductless technology. They also
                developed R-32 refrigerant and have been deploying it in international markets since
                2012 — years before most competitors started the transition from R-410A.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                What this means for you as a homeowner: when you buy a Daikin mini split, you&apos;re
                getting technology refined over decades, backed by the deepest engineering bench in the
                HVAC industry. The 17-Series wall mount we&apos;re reviewing here represents the sweet
                spot of their residential lineup. Premium efficiency, whisper-quiet operation, and
                the durability that comes from a company that builds systems designed to run 24/7 in
                commercial settings.
              </p>
            </section>

            {/* Model Lineup */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Model Lineup: 17-Series vs Fit vs Aurora
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                Daikin&apos;s residential mini split range has three distinct product lines. Understanding
                the differences helps you pick the right system for your climate and home layout.
              </p>

              <div className='space-y-4 mb-6'>
                {/* 17-Series */}
                <div className='rounded-xl border border-border bg-card p-6'>
                  <div className='flex items-start gap-3 mb-3'>
                    <Star className='w-5 h-5 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} />
                    <div>
                      <h3 className='text-lg font-bold text-foreground'>17-Series Wall Mount (Reviewed Here)</h3>
                      <p className='text-sm text-muted-foreground mt-1'>
                        Daikin&apos;s flagship ductless mini split. Available in 9K, 12K, 15K, 18K, and 24K BTU
                        capacities. Up to 20.6 SEER2 and 12.5 HSPF2. The indoor unit mounts on any wall and
                        delivers the highest efficiency and lowest noise in the Daikin lineup. This is the go-to
                        for single-zone or multi-zone ductless installations in California.
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-2 ml-8'>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>Up to 20.6 SEER2</span>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>19 dB indoor noise</span>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>R-32 refrigerant</span>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>$1,400-$3,200</span>
                  </div>
                </div>

                {/* Fit */}
                <div className='rounded-xl border border-border bg-card p-6'>
                  <div className='flex items-start gap-3 mb-3'>
                    <Zap className='w-5 h-5 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} />
                    <div>
                      <h3 className='text-lg font-bold text-foreground'>Daikin Fit (Slim Ducted)</h3>
                      <p className='text-sm text-muted-foreground mt-1'>
                        A side-discharge heat pump designed for homes that have existing ductwork or want a
                        concealed installation. The Fit has a significantly smaller outdoor unit footprint
                        than traditional central AC condensers. about the size of a carry-on suitcase. Up to
                        18.5 SEER2. Ideal if you want inverter technology without wall-mounted indoor units.
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-2 ml-8'>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>Up to 18.5 SEER2</span>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>Slim ducted design</span>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>Smallest condenser footprint</span>
                  </div>
                </div>

                {/* Aurora */}
                <div className='rounded-xl border border-border bg-card p-6'>
                  <div className='flex items-start gap-3 mb-3'>
                    <Sun className='w-5 h-5 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} />
                    <div>
                      <h3 className='text-lg font-bold text-foreground'>Daikin Aurora (Cold Climate)</h3>
                      <p className='text-sm text-muted-foreground mt-1'>
                        Purpose-built for extreme cold. The Aurora maintains full heating capacity down to
                        -13F (-25C) with a base pan heater that prevents ice buildup on the outdoor unit. If
                        you live in the Sierra Nevada foothills, Tahoe area, or any mountain community that
                        regularly sees sub-zero temperatures, the Aurora is the only Daikin model you should consider.
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-2 ml-8'>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>Heating to -13F</span>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>Base pan heater</span>
                    <span className='text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground'>Cold climate optimized</span>
                  </div>
                </div>
              </div>

              <p className='text-muted-foreground leading-relaxed'>
                For the majority of California homeowners, the <strong className='text-foreground'>17-Series wall mount</strong> is
                the right pick. The state&apos;s mild winters rarely justify the Aurora&apos;s cold-climate
                premium, and if you don&apos;t have existing ductwork, the Fit adds unnecessary
                complexity. The rest of this review focuses on the 17-Series.
              </p>
            </section>

            {/* Key Specs */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Key Specifications
              </h2>
              <div className='rounded-2xl border border-border bg-card overflow-hidden'>
                <div className='divide-y divide-border'>
                  {[
                    { label: 'Available Sizes', value: '9,000 / 12,000 / 15,000 / 18,000 / 24,000 BTU' },
                    { label: 'SEER2 Rating', value: 'Up to 20.6' },
                    { label: 'HSPF2 Rating', value: 'Up to 12.5' },
                    { label: 'Compressor', value: 'Inverter (variable speed)' },
                    { label: 'Refrigerant', value: 'R-32 (lower GWP)' },
                    { label: 'Indoor Noise', value: 'As low as 19 dB' },
                    { label: 'Outdoor Noise', value: '55-60 dB' },
                    { label: 'Heating Range', value: 'Down to -13F (Aurora series)' },
                    { label: 'WiFi Control', value: 'Daikin One+ smart thermostat compatible' },
                    { label: 'Warranty (Registered)', value: '12-year compressor + 12-year parts' },
                    { label: 'Unit Price', value: '$1,400 - $3,200' },
                    { label: 'Installed Price', value: '$3,000 - $7,500' },
                    { label: 'Installation', value: 'Professional required' },
                  ].map((spec, idx) => (
                    <div
                      key={idx}
                      className='flex items-center justify-between px-6 py-4'
                    >
                      <span className='text-sm text-muted-foreground'>{spec.label}</span>
                      <span className='text-sm font-semibold text-foreground text-right'>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Performance */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Performance & Efficiency
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                The 17-Series&apos; 20.6 SEER2 rating places it among the most efficient mini splits
                you can buy. For context, the federal minimum for split-system heat pumps is 15 SEER2.
                That means Daikin delivers roughly 37% more cooling per watt consumed than a
                baseline-compliant system, a difference you feel directly on your electricity bill.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                The secret is Daikin&apos;s inverter compressor. Unlike single-stage systems that
                cycle on and off (blasting cold air, then shutting down, then blasting again), the
                inverter continuously adjusts speed to match the exact cooling or heating load. This
                eliminates the energy-wasting start-stop cycle and keeps room temperature remarkably
                stable, no hot spots, no cold drafts.
              </p>

              <div className='rounded-xl border border-border bg-card p-6 mb-6'>
                <h3 className='font-bold text-foreground mb-4'>What 20.6 SEER2 Means For Your Bill</h3>
                <div className='space-y-3'>
                  {[
                    { label: 'Standard central AC (15 SEER2)', cost: '~$850/year', savings: 'Baseline' },
                    { label: 'Mid-range mini split (18 SEER2)', cost: '~$710/year', savings: 'Save ~$140/yr' },
                    { label: 'Daikin 17-Series (20.6 SEER2)', cost: '~$620/year', savings: 'Save ~$230/yr' },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm'
                    >
                      <span className='text-muted-foreground'>{row.label}</span>
                      <div className='flex items-center gap-3'>
                        <span className='font-semibold text-foreground'>{row.cost}</span>
                        <span
                          className='text-xs px-2 py-0.5 rounded-full'
                          style={{
                            backgroundColor: idx === 2 ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
                            color: idx === 2 ? '#22c55e' : '#a1a1aa',
                          }}
                        >
                          {row.savings}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className='text-xs text-muted-foreground mt-4'>
                  *Estimates based on 1,500 sq ft California home, average electricity rates. Actual savings vary by usage and utility.
                </p>
              </div>

              <p className='text-muted-foreground leading-relaxed'>
                The 12.5 HSPF2 heating rating is equally impressive. In heat pump mode, the Daikin
                17-Series extracts heat from outdoor air and moves it inside with far less energy
                than electric resistance heating or gas furnaces. For California homeowners replacing
                a gas furnace with a heat pump, the combination of solar panels and a Daikin mini
                split can dramatically reduce both electric and gas bills.
              </p>
            </section>

            {/* R-32 Refrigerant */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                R-32 Refrigerant: Daikin&apos;s Environmental Edge
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                This matters more than most buyers realize. The HVAC industry is in the middle of a
                global refrigerant transition, and Daikin is ahead of the curve because they
                developed R-32 themselves.
              </p>

              <div className='grid md:grid-cols-2 gap-4 mb-6'>
                <div className='rounded-xl border border-border bg-card p-5'>
                  <h4 className='font-bold text-foreground mb-2'>R-410A (Old Standard)</h4>
                  <ul className='space-y-2'>
                    {[
                      'GWP of 2,088',
                      'Being phased out under AIM Act',
                      'Requires more refrigerant charge',
                      'Lower efficiency per unit of charge',
                    ].map((item, i) => (
                      <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                        <X className='w-4 h-4 flex-shrink-0 mt-0.5' style={{ color: '#ef4444' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='rounded-xl border border-border bg-card p-5' style={{ borderColor: 'rgba(34, 197, 94, 0.3)' }}>
                  <h4 className='font-bold text-foreground mb-2'>R-32 (Daikin Standard)</h4>
                  <ul className='space-y-2'>
                    {[
                      'GWP of 675 (68% lower)',
                      'Future-proof — compliant with phase-downs',
                      'Requires 30% less charge per system',
                      'Slightly better energy efficiency',
                    ].map((item, i) => (
                      <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                        <Check className='w-4 h-4 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className='text-muted-foreground leading-relaxed'>
                In practical terms, R-32 means your Daikin system is less likely to face future
                refrigerant supply issues or price spikes as R-410A is phased down. It also means
                cheaper service calls — less refrigerant needed for a recharge, and the refrigerant
                itself costs less. Daikin has been using R-32 in international markets since 2012 and
                has more field data on its reliability than any competitor.
              </p>
            </section>

            {/* Noise */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Noise Levels: How Quiet Is 19 dB, Really?
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                Noise is one of the most common complaints about HVAC systems, and it&apos;s where
                Daikin genuinely excels. The 17-Series indoor unit operates at 19 dB on the lowest
                fan setting — here&apos;s what that means in context:
              </p>

              <div className='rounded-xl border border-border bg-card p-6 mb-6'>
                <div className='space-y-3'>
                  {[
                    { db: '10 dB', desc: 'Normal breathing', bar: '10%' },
                    { db: '19 dB', desc: 'Daikin 17-Series (low)', bar: '19%', highlight: true },
                    { db: '20 dB', desc: 'Whisper', bar: '20%' },
                    { db: '25 dB', desc: 'MrCool DIY (lowest)', bar: '25%' },
                    { db: '32 dB', desc: 'Mitsubishi MSZ-FH (low)', bar: '32%' },
                    { db: '40 dB', desc: 'Library', bar: '40%' },
                    { db: '50 dB', desc: 'Window AC unit', bar: '50%' },
                  ].map((level, idx) => (
                    <div key={idx} className='flex items-center gap-4'>
                      <span className='text-sm font-mono text-muted-foreground w-14 text-right'>
                        {level.db}
                      </span>
                      <div className='flex-1'>
                        <div
                          className='h-4 rounded-full'
                          style={{
                            width: level.bar,
                            backgroundColor: level.highlight ? '#22c55e' : '#27272a',
                          }}
                        />
                      </div>
                      <span
                        className='text-sm w-48'
                        style={{ color: level.highlight ? '#22c55e' : '#a1a1aa' }}
                      >
                        {level.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className='text-muted-foreground leading-relaxed'>
                At 19 dB, the Daikin is effectively inaudible in any room with normal ambient noise.
                You&apos;d need a perfectly silent room and your ear near the unit to notice it. This
                makes the 17-Series ideal for bedrooms, nurseries, and home offices where noise
                sensitivity is a real concern. The outdoor unit at 55-60 dB is unremarkable — comparable
                to most competitors — but it&apos;s the indoor unit where you live and sleep.
              </p>
            </section>

            {/* Mid-content CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Ready to buy?'
              verdict="Daikin's 17-Series is the benchmark for premium mini split efficiency and quiet operation."
              source='daikin-mini-split'
              variant='mid'
            />

            {/* Daikin vs Mitsubishi */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Daikin vs Mitsubishi: The Two Premium Contenders
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                This is the comparison that matters most in the premium mini split space. Both are
                Japanese engineering powerhouses with decades of ductless experience. Here&apos;s
                how they stack up:
              </p>

              <div className='rounded-2xl border border-border bg-card overflow-hidden mb-6'>
                <div className='grid grid-cols-3 gap-0'>
                  <div className='p-4 border-b border-r border-border text-sm font-bold text-muted-foreground'>Feature</div>
                  <div className='p-4 border-b border-r border-border text-sm font-bold text-foreground text-center'>Daikin 17-Series</div>
                  <div className='p-4 border-b border-border text-sm font-bold text-foreground text-center'>Mitsubishi MSZ-FH</div>
                  {[
                    { feature: 'Max SEER2', daikin: '20.6', mitsubishi: '19.0' },
                    { feature: 'Max HSPF2', daikin: '12.5', mitsubishi: '12.0' },
                    { feature: 'Lowest Indoor Noise', daikin: '19 dB', mitsubishi: '32 dB' },
                    { feature: 'Refrigerant', daikin: 'R-32', mitsubishi: 'R-410A*' },
                    { feature: 'Warranty (Registered)', daikin: '12yr/12yr', mitsubishi: '12yr/12yr' },
                    { feature: 'Cold Climate Option', daikin: 'Aurora (-13F)', mitsubishi: 'Hyper-Heat (-13F)' },
                    { feature: 'Smart Home', daikin: 'Daikin One+', mitsubishi: 'kumo cloud' },
                    { feature: 'Unit Price (12K BTU)', daikin: '~$1,600', mitsubishi: '~$1,800' },
                    { feature: 'Installer Network', daikin: 'Growing', mitsubishi: 'Largest in US' },
                  ].map((row, idx) => (
                    <>
                      <div key={`f-${idx}`} className='p-4 border-b border-r border-border text-sm text-muted-foreground'>
                        {row.feature}
                      </div>
                      <div key={`d-${idx}`} className='p-4 border-b border-r border-border text-sm text-foreground text-center'>
                        {row.daikin}
                      </div>
                      <div key={`m-${idx}`} className='p-4 border-b border-border text-sm text-foreground text-center'>
                        {row.mitsubishi}
                      </div>
                    </>
                  ))}
                </div>
                <div className='px-4 py-3'>
                  <p className='text-xs text-muted-foreground'>
                    *Mitsubishi is transitioning to R-32 but most US models still ship with R-410A as of early 2026.
                  </p>
                </div>
              </div>

              <p className='text-muted-foreground leading-relaxed mb-4'>
                <strong className='text-foreground'>Daikin wins on:</strong> efficiency (SEER2 and HSPF2),
                indoor noise (dramatically), refrigerant future-proofing, and typically lower unit pricing.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                <strong className='text-foreground'>Mitsubishi wins on:</strong> installer availability
                (the largest Diamond Dealer network in the US means more contractor options and
                potentially more competitive install quotes), brand recognition in North America, and a
                longer track record in the US market specifically.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                <strong className='text-foreground'>Bottom line:</strong> If you can find a qualified Daikin
                installer in your area, Daikin offers better specs at a lower unit price. If contractor
                choice and local support matter more to you, Mitsubishi&apos;s deeper US network is a
                real advantage. In California metro areas, finding quality installers for either
                brand is straightforward.
              </p>
            </section>

            {/* Daikin vs MrCool DIY */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Daikin vs MrCool DIY: Professional vs Do-It-Yourself
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                This is a fundamentally different comparison. MrCool&apos;s DIY line is designed
                for homeowner self-installation with pre-charged linesets — no vacuum pump, no brazing,
                no EPA certification needed. It&apos;s a different philosophy entirely.
              </p>

              <div className='grid md:grid-cols-2 gap-4 mb-6'>
                <div className='rounded-xl border border-border bg-card p-5'>
                  <h4 className='font-bold text-foreground mb-3'>Choose Daikin If:</h4>
                  <ul className='space-y-2'>
                    {[
                      'You want maximum efficiency (20.6 vs 17.5 SEER2)',
                      'Noise is a top priority (19 dB vs 25 dB)',
                      'You value a 12-year warranty over 7-year',
                      'You plan to stay in your home 10+ years',
                      'You\'re comfortable paying for professional install',
                      'You want R-32 refrigerant future-proofing',
                    ].map((item, i) => (
                      <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                        <CheckCircle className='w-4 h-4 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='rounded-xl border border-border bg-card p-5'>
                  <h4 className='font-bold text-foreground mb-3'>Choose MrCool DIY If:</h4>
                  <ul className='space-y-2'>
                    {[
                      'Budget is your primary constraint',
                      'You\'re handy and want to save $1,500-$3,000 on install',
                      'You\'re in a rental or short-term housing',
                      'You need cooling for a garage, workshop, or ADU',
                      'You want the system running this weekend',
                      'You can\'t find a qualified installer nearby',
                    ].map((item, i) => (
                      <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                        <CheckCircle className='w-4 h-4 flex-shrink-0 mt-0.5' style={{ color: '#3b82f6' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='rounded-xl p-5 mb-4' style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  <strong className='text-foreground'>Cost reality check:</strong> A MrCool DIY 12K BTU
                  unit costs roughly $1,500-$1,800 and you install it yourself. A Daikin 17-Series 12K BTU
                  unit costs ~$1,600 for the equipment plus $1,500-$3,000 for professional installation.
                  Total: $3,100-$4,600 for Daikin vs $1,500-$1,800 for MrCool. The Daikin pays back the
                  difference over 8-12 years through lower energy bills and longer lifespan.
                </p>
              </div>
            </section>

            {/* Installation & Cost */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Installation & Cost Breakdown
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-6'>
                Daikin mini splits require professional HVAC installation. This is non-negotiable; unlike MrCool DIY, there are no pre-charged linesets. A qualified technician needs
                to handle refrigerant line routing, vacuum and charge, electrical connections, and
                condensate drainage.
              </p>

              <div className='rounded-2xl border border-border bg-card p-6 mb-6'>
                <h3 className='font-bold text-foreground mb-4 flex items-center gap-2'>
                  <DollarSign className='w-5 h-5' style={{ color: '#22c55e' }} />
                  Typical Cost Breakdown
                </h3>
                <div className='space-y-3'>
                  {[
                    { item: 'Indoor + outdoor unit (12K BTU)', range: '$1,400 - $1,800' },
                    { item: 'Indoor + outdoor unit (24K BTU)', range: '$2,400 - $3,200' },
                    { item: 'Line set, wire, and materials', range: '$200 - $500' },
                    { item: 'Labor (single zone)', range: '$1,200 - $2,500' },
                    { item: 'Labor (multi-zone, 2-4 heads)', range: '$2,500 - $4,500' },
                    { item: 'Electrical panel work (if needed)', range: '$300 - $800' },
                    { item: 'Permit and inspection', range: '$100 - $350' },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className='flex items-center justify-between text-sm py-2 border-b border-border last:border-0'
                    >
                      <span className='text-muted-foreground'>{row.item}</span>
                      <span className='font-semibold text-foreground'>{row.range}</span>
                    </div>
                  ))}
                </div>
                <div className='mt-4 pt-4 border-t border-border flex items-center justify-between'>
                  <span className='font-bold text-foreground'>Total (single zone installed)</span>
                  <span className='font-bold text-lg' style={{ color: '#22c55e' }}>
                    $3,000 - $5,000
                  </span>
                </div>
                <div className='flex items-center justify-between mt-2'>
                  <span className='font-bold text-foreground'>Total (multi-zone 2-4 heads)</span>
                  <span className='font-bold text-lg' style={{ color: '#22c55e' }}>
                    $5,500 - $7,500
                  </span>
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='rounded-xl border border-border bg-card p-5'>
                  <h4 className='font-bold text-foreground mb-3'>Installation Day Expectations</h4>
                  <ul className='space-y-2'>
                    {[
                      'Single zone: 4-8 hours, one day',
                      'Multi-zone: 1-2 days depending on complexity',
                      '3-inch hole through exterior wall per indoor unit',
                      'Outdoor unit on pad or wall bracket',
                      'Electrical: dedicated 15-30 amp circuit per zone',
                    ].map((item, i) => (
                      <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                        <Clock className='w-4 h-4 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='rounded-xl border border-border bg-card p-5'>
                  <h4 className='font-bold text-foreground mb-3'>Finding a Daikin Installer</h4>
                  <ul className='space-y-2'>
                    {[
                      'Use Daikin\'s dealer locator on their website',
                      'Look for "Daikin Comfort Pro" certified installers',
                      'Get 3 quotes minimum, prices vary significantly',
                      'Ask about permit pulling and warranty registration',
                      'Confirm they\'ve installed R-32 systems before',
                    ].map((item, i) => (
                      <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                        <Check className='w-4 h-4 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Pros and Cons */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Pros & Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='rounded-2xl border border-border bg-card p-6'>
                  <h3 className='text-lg font-bold text-foreground mb-4 flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' style={{ color: '#22c55e' }} />
                    What We Like
                  </h3>
                  <ul className='space-y-3'>
                    {[
                      'Industry-leading 20.6 SEER2 efficiency saves real money on bills',
                      '19 dB indoor noise, genuinely inaudible in normal conditions',
                      'R-32 refrigerant is future-proof and environmentally responsible',
                      '12-year compressor AND 12-year parts warranty (registered)',
                      'Variable-speed inverter eliminates temperature swings',
                      'Backed by the world\'s largest HVAC manufacturer',
                      'Available in 5 sizes (9K-24K BTU) for any room',
                      'Aurora option for cold climates down to -13F',
                      'Daikin One+ smart thermostat integration',
                    ].map((pro, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-3 text-sm text-muted-foreground'
                      >
                        <CheckCircle
                          className='w-4 h-4 flex-shrink-0 mt-0.5'
                          style={{ color: '#22c55e' }}
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='rounded-2xl border border-border bg-card p-6'>
                  <h3 className='text-lg font-bold text-foreground mb-4 flex items-center gap-2'>
                    <XCircle className='w-5 h-5' style={{ color: '#ef4444' }} />
                    What Could Be Better
                  </h3>
                  <ul className='space-y-3'>
                    {[
                      'Professional installation required, no DIY option',
                      'Installed cost significantly higher than MrCool DIY',
                      'Smaller US installer network than Mitsubishi',
                      'Daikin One+ thermostat sold separately (~$300)',
                      'Less brand recognition in North America (newer to US market)',
                      'WiFi module may need separate purchase depending on model',
                      'Indoor unit design is functional but not decorative',
                    ].map((con, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-3 text-sm text-muted-foreground'
                      >
                        <XCircle
                          className='w-4 h-4 flex-shrink-0 mt-0.5'
                          style={{ color: '#ef4444' }}
                        />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4'>
                {[
                  {
                    q: 'Is a Daikin mini split worth the money?',
                    a: 'Yes, for homeowners who plan to stay in their home long-term. The higher upfront cost (vs DIY brands) is offset by 20.6 SEER2 efficiency, lower energy bills, a 12-year warranty, and a 15-20 year expected lifespan. The payback period compared to a MrCool DIY is roughly 8-12 years in energy savings alone, not counting the longer warranty and lifespan.',
                  },
                  {
                    q: 'How long does a Daikin mini split last?',
                    a: 'Typically 15-20 years with proper maintenance. Daikin\'s commercial-grade engineering means many residential units exceed 20 years. Regular filter cleaning (every 2-4 weeks) and annual professional maintenance help maximize lifespan.',
                  },
                  {
                    q: 'Can a Daikin mini split heat in cold weather?',
                    a: 'Yes. The standard 17-Series provides effective heating in California\'s moderate winters. For extreme cold (mountain communities, Sierra Nevada), the Daikin Aurora maintains full heating capacity down to -13F with a base pan heater to prevent outdoor unit ice buildup.',
                  },
                  {
                    q: 'Does Daikin use R-410A or R-32 refrigerant?',
                    a: 'Daikin is transitioning to R-32 across its mini split lineup. R-32 has 68% lower Global Warming Potential than R-410A, requires 30% less refrigerant charge per system, and delivers slightly better efficiency. Daikin developed R-32 and has been using it internationally since 2012.',
                  },
                  {
                    q: 'Can I install a Daikin mini split myself?',
                    a: 'No. Daikin mini splits require professional HVAC installation including vacuum pumps, refrigerant charging, brazing, and electrical work — all requiring EPA 608 certification. Installation typically costs $1,500-$4,000+ depending on complexity. If you want a DIY option, look at MrCool DIY instead.',
                  },
                  {
                    q: 'How quiet is a Daikin mini split?',
                    a: 'The 17-Series operates at 19 dB on the lowest fan setting, quieter than a human whisper (20 dB). This is among the lowest in the industry. For comparison, Mitsubishi\'s MSZ-FH starts at 32 dB and MrCool DIY at 25 dB. At normal operating speeds, indoor noise stays under 40 dB.',
                  },
                  {
                    q: 'What is the difference between Daikin 17-Series, Fit, and Aurora?',
                    a: 'The 17-Series is the premium wall-mount ductless unit with the highest efficiency and lowest noise. The Fit is a slim ducted system for homes with existing ductwork. The Aurora is the cold-climate specialist rated to -13F. For most California homes without existing ductwork, the 17-Series is the right choice.',
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className='rounded-xl border border-border bg-card p-6'
                  >
                    <h3 className='font-bold text-foreground mb-2'>{faq.q}</h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Verdict */}
            <section className='mb-14'>
              <h2 className='text-3xl font-bold text-foreground mb-6'>
                Final Verdict
              </h2>
              <div
                className='rounded-2xl p-8 mb-6'
                style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className='text-4xl font-black' style={{ color: '#22c55e' }}>
                    4.6/5
                  </div>
                  <div>
                    <div className='font-bold text-foreground'>GreenReviewsHub Rating</div>
                    <div className='text-sm text-muted-foreground'>Outstanding, Highly Recommended</div>
                  </div>
                </div>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  The Daikin 17-Series is what happens when the world&apos;s largest HVAC company
                  applies a century of engineering expertise to a residential mini split. You get
                  best-in-class efficiency (20.6 SEER2), near-silent operation (19 dB), environmentally
                  forward R-32 refrigerant, and a 12-year warranty that signals genuine confidence
                  in the product.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  The only reason it doesn&apos;t score a perfect 5 is cost. Professional installation
                  adds $1,500-$4,000+ to your total, and the unit itself carries a modest premium
                  over some competitors. For budget-conscious buyers who are handy enough to handle
                  their own install, MrCool DIY offers 70% of the performance at 40% of the cost.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  But for homeowners who want the best mini split they can buy. installed correctly,
                  warranted for over a decade, and engineered to run quietly and efficiently for
                  15-20 years — Daikin is the answer. It&apos;s the brand HVAC professionals install
                  in their own homes, and that tells you everything.
                </p>
              </div>

              {/* Final CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Final Verdict'
                verdict='The best mini split you can buy, 20.6 SEER2, 19 dB, 12-year warranty, engineered to run quietly for 15-20 years.'
                source='daikin-mini-split'
                variant='final'
              />
              <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
                <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
                <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                  See how Daikin compares against Mitsubishi, MrCool DIY, and other top mini splits in our full roundup.
                </p>
                <Link href='/reviews/best-mini-split-ac' className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'>
                  Compare All Mini Splits
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </section>

            {/* Related Reviews */}
            <section className='mb-14'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
                Related Reviews
              </h2>
              <div className='grid md:grid-cols-2 gap-4'>
                {[
                  {
                    title: 'Best Mini Split AC Systems (2026)',
                    desc: 'Full comparison of the top ductless mini splits for California homes.',
                    href: '/reviews/best-mini-split-ac',
                  },
                  {
                    title: 'Browse All GreenReviewsHub Reviews',
                    desc: 'Power stations, e-bikes, lawn equipment, smart home, and more.',
                    href: '/reviews',
                  },
                ].map((related) => (
                  <Link
                    key={related.href}
                    href={related.href}
                    className='rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 group'
                  >
                    <h3 className='font-bold text-foreground mb-1 group-hover:underline'>
                      {related.title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>{related.desc}</p>
                    <span
                      className='inline-flex items-center gap-1 text-sm font-semibold mt-3'
                      style={{ color: '#22c55e' }}
                    >
                      Read more <ArrowRight className='w-3.5 h-3.5' />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Back Navigation */}
            <div className='flex items-center justify-between pt-8 border-t border-border'>
              <Link
                href='/reviews'
                className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                <ArrowLeft className='w-4 h-4' />
                All Reviews
              </Link>
              <Link
                href='/reviews/best-mini-split-ac'
                className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Best Mini Split AC
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>

          </div>
        </div>
      </main>

      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='daikin-mini-split' />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    </ReviewLayout>
  );
}
