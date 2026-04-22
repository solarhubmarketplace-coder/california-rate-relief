import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
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

export const metadata: Metadata = {
  title:
    'Mitsubishi Mini Split Review (MSZ-GL Series): Premium Ductless Heat Pump (2026)',
  description:
    'In-depth Mitsubishi Electric ductless mini split review covering the MSZ-GL, MSZ-FH, and MSZ-FZ series. Up to 20.2 SEER2, whisper-quiet 19 dB, Hyper-Heating to -13°F, 12-year compressor warranty. Full specs, model comparison, and honest pros/cons.',
  alternates: {
    canonical: '/reviews/mitsubishi-mini-split-review',
  },
  openGraph: {
    title:
      'Mitsubishi Mini Split Review (MSZ-GL Series): Premium Ductless Heat Pump (2026)',
    description:
      'Detailed Mitsubishi Electric mini split review. #1 selling mini split brand in North America. MSZ-GL vs FH vs FZ series compared. Professional installation required.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Mitsubishi Mini Split Review: The Gold Standard in Ductless Heating and Cooling',
  description:
    'In-depth review of the Mitsubishi Electric MSZ-GL series ductless mini split covering specs, model lineup comparison, Hyper-Heating technology, noise levels, installation costs, and honest pros/cons.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/mitsubishi-mini-split-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Mitsubishi Electric MSZ-GL Series Mini Split Review',
  headline:
    'Mitsubishi Mini Split Review: The Gold Standard in Ductless Heating and Cooling',
  description:
    'In-depth review of the Mitsubishi Electric ductless mini split. #1 selling mini split brand in North America, up to 20.2 SEER2, Hyper-Heating to -13°F, whisper-quiet 19 dB operation.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'Mitsubishi Electric MSZ-GL Series Ductless Mini Split',
    brand: {
      '@type': 'Brand',
      name: 'Mitsubishi Electric',
    },
    description:
      'Premium ductless mini split heat pump with inverter-driven variable speed compressor. Available in 9K, 12K, 15K, 18K, and 24K BTU sizes. Up to 20.2 SEER2, heating down to -13°F with Hyper-Heating H2i, as low as 19 dB indoor noise.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '1500',
      highPrice: '3500',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.7',
    bestRating: '5',
    worstRating: '1',
  },
  reviewBody:
    'The Mitsubishi Electric MSZ-GL series is the benchmark for ductless mini split reliability and performance. As the #1 selling mini split brand in North America, Mitsubishi has earned its reputation through decades of consistent quality, whisper-quiet operation as low as 19 dB, and a 12-year compressor warranty that backs up their confidence. The inverter-driven variable speed compressor delivers precise temperature control and up to 20.2 SEER2 efficiency. The Hyper-Heating H2i models extend operation down to -13°F. The tradeoff is price: $3,000-$7,000 installed, with no DIY option. You are paying for premium engineering and the peace of mind that comes with it.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/mitsubishi-mini-split-review',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I install a Mitsubishi mini split myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Mitsubishi mini splits require professional HVAC installation. The system uses R-410A refrigerant that must be handled by an EPA Section 608 certified technician. Line sets need to be brazed, evacuated with a vacuum pump, and charged to spec. Attempting a DIY installation will void the warranty and risks refrigerant leaks, poor performance, and compressor damage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do Mitsubishi mini splits last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mitsubishi mini splits typically last 15-25 years with proper maintenance. The inverter compressor is the most durable component, backed by a 12-year warranty when registered. Many HVAC contractors report Mitsubishi units still running strong after 20 years. Annual professional maintenance and regular filter cleaning extend lifespan significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Mitsubishi GL, FH, and FZ series?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MSZ-GL is the standard efficiency workhorse (up to 18.0 SEER2). The MSZ-FH is the Hyper-Heating mid-range model with enhanced cold-climate performance down to -13°F and higher efficiency (up to 19.0 SEER2). The MSZ-FZ is the flagship with the highest efficiency (up to 20.2 SEER2), 3D i-see Sensor for occupancy-based comfort, and the quietest operation. All three share Mitsubishi\'s inverter compressor platform and build quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Mitsubishi better than MrCool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They serve different markets. Mitsubishi is the premium choice for homeowners who want the best reliability, quietest operation, and longest warranty — and are willing to pay for professional installation. MrCool DIY is the budget-friendly choice for homeowners who want to save $3,000-$8,000 by installing it themselves. Mitsubishi has a longer track record, quieter indoor units (19 dB vs 35-40 dB), and a 12-year compressor warranty vs MrCool\'s 7-year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to install a Mitsubishi mini split?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single-zone Mitsubishi mini split costs $3,000-$7,000 fully installed, depending on BTU size and series. The unit itself runs $1,500-$3,500 and professional installation adds $1,500-$3,500 in labor. Multi-zone systems with 2-5 indoor units run $8,000-$20,000+ installed. Costs vary by region, installer, and complexity of the installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Mitsubishi mini split have WiFi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WiFi is not built in. Mitsubishi offers the kumo cloud WiFi adapter as an optional accessory for approximately $150. The kumo cloud app provides remote temperature control, scheduling, energy monitoring, and integration with Amazon Alexa and Google Home. The adapter installs inside the indoor unit and connects to your home WiFi network.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Mitsubishi Hyper-Heating H2i?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hyper-Heating H2i is Mitsubishi\'s cold-climate heat pump technology that maintains full heating capacity down to -13°F (-25°C) outdoor temperatures. Standard heat pumps lose significant capacity below 20-30°F. H2i uses an enhanced compressor design and flash injection cycle to extract heat from extremely cold air. Available on the MSZ-FH and MSZ-FZ series.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pair a Mitsubishi mini split with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mitsubishi mini splits run on standard household electrical circuits and work seamlessly with any grid-tied or hybrid solar system. The high efficiency (up to 20.2 SEER2) means less electricity drawn per BTU of cooling or heating, maximizing the value of your solar production. Under NEM 3.0 in California, running the mini split during peak solar production hours increases self-consumption and reduces grid exports at lower NEM 3.0 rates.',
      },
    },
  ],
};

export default function MitsubishiMiniSplitReview() {
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
                Mitsubishi MSZ-GL
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Mitsubishi Mini Split Review: The Gold Standard in Ductless
                Heating and Cooling
              </h1>
              <p className='text-lg text-muted-foreground mb-4'>
                The #1 selling mini split brand in North America. Whisper-quiet
                19 dB operation, 12-year compressor warranty, and
                Hyper-Heating down to -13&deg;F. Premium reliability at a
                premium price.
              </p>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-21'>April 21, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>14 min read</span>
                </div>
              </div>
            </header>

            {/* Quick Verdict */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.7</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The Mitsubishi Electric MSZ-GL series is the mini split that
                HVAC contractors recommend most — and for good reason.
                Mitsubishi has been building ductless systems longer than
                almost anyone, and the engineering shows. The inverter-driven
                variable speed compressor delivers precise temperature control
                without the on/off cycling that wastes energy and creates hot
                and cold spots. Indoor noise as low as 19 dB makes it
                quieter than a whisper. The 12-year registered compressor
                warranty is the longest in the industry. The tradeoff is
                straightforward: professional installation is mandatory, and
                total installed cost of $3,000-$7,000 for a single zone is
                significantly more than DIY alternatives. You are paying for
                the most trusted name in ductless HVAC.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Homeowners wanting premium reliability and quiet
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Whole-home multi-zone installations
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Cold-climate heating (H2i Hyper-Heating)
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
                      Budget-conscious DIY installers
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Those who want built-in WiFi without add-ons
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Renters (requires permanent wall installation)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Buy Box */}
            <div className='bg-card border border-border rounded-xl p-6 mb-10'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                <div>
                  <p className='text-sm text-muted-foreground mb-1'>
                    Mitsubishi MSZ-GL Series (unit only)
                  </p>
                  <p className='text-2xl font-bold text-foreground'>
                    $1,500 - $3,500
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    $3,000 - $7,000 fully installed
                  </p>
                </div>
                <a
                  href='#'
                  className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors'
                >
                  Check Latest Price
                  <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>

            {/* Table of Contents */}
            <div className='bg-card border border-border rounded-xl p-6 mb-10'>
              <h2 className='text-lg font-bold text-foreground mb-4'>
                In This Review
              </h2>
              <nav className='grid md:grid-cols-2 gap-2 text-sm'>
                <a href='#overview' className='text-muted-foreground hover:text-primary transition-colors'>1. Overview</a>
                <a href='#model-lineup' className='text-muted-foreground hover:text-primary transition-colors'>2. Model Lineup Guide</a>
                <a href='#key-specs' className='text-muted-foreground hover:text-primary transition-colors'>3. Key Specifications</a>
                <a href='#performance' className='text-muted-foreground hover:text-primary transition-colors'>4. Performance</a>
                <a href='#hyper-heating' className='text-muted-foreground hover:text-primary transition-colors'>5. Hyper-Heating Technology</a>
                <a href='#noise' className='text-muted-foreground hover:text-primary transition-colors'>6. Noise Levels</a>
                <a href='#vs-mrcool' className='text-muted-foreground hover:text-primary transition-colors'>7. Mitsubishi vs MrCool DIY</a>
                <a href='#vs-daikin' className='text-muted-foreground hover:text-primary transition-colors'>8. Mitsubishi vs Daikin</a>
                <a href='#installation' className='text-muted-foreground hover:text-primary transition-colors'>9. Installation &amp; Cost</a>
                <a href='#pros-cons' className='text-muted-foreground hover:text-primary transition-colors'>10. Pros &amp; Cons</a>
                <a href='#faq' className='text-muted-foreground hover:text-primary transition-colors'>11. FAQ</a>
                <a href='#verdict' className='text-muted-foreground hover:text-primary transition-colors'>12. Final Verdict</a>
              </nav>
            </div>

            {/* Overview */}
            <section id='overview' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Overview: Why Mitsubishi Dominates the Mini Split Market
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Mitsubishi Electric is to mini splits what Toyota is to
                sedans — the default choice when reliability matters more
                than anything else. They have been manufacturing ductless
                systems since the 1950s and hold the #1 market share for
                mini splits in North America. When HVAC contractors are asked
                what brand they trust most for ductless installs, Mitsubishi
                is almost always the answer.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The MSZ-GL series is their volume workhorse — the model most
                commonly installed in homes across the US. It delivers the
                core Mitsubishi value proposition: inverter-driven variable
                speed compression, quiet operation, strong efficiency, and
                the industry&apos;s best warranty. It is not the cheapest
                option on the market. It is not designed to be. It is
                designed to run quietly, efficiently, and reliably for 15-25
                years.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Available in 9K, 12K, 15K, 18K, and 24K BTU configurations,
                the MSZ-GL covers everything from a single bedroom to a
                large open-concept living area. For whole-home solutions,
                Mitsubishi&apos;s multi-zone outdoor units can connect 2-8
                indoor units on a single system, making them one of the few
                brands that can genuinely replace a central HVAC system with
                ductless technology.
              </p>
            </section>

            {/* Model Lineup Guide */}
            <section id='model-lineup' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Model Lineup Guide: GL vs FH vs FZ
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Mitsubishi offers three wall-mounted indoor unit series. All
                share the same inverter compressor platform and build
                quality. The differences come down to efficiency tier,
                cold-climate performance, and smart features.
              </p>

              {/* GL Series */}
              <div className='bg-card border border-border rounded-xl p-6 mb-4'>
                <div className='flex items-center gap-3 mb-3'>
                  <Zap className='h-5 w-5 text-primary' />
                  <h3 className='text-lg font-bold text-foreground'>
                    MSZ-GL Series — The Workhorse
                  </h3>
                </div>
                <div className='grid md:grid-cols-2 gap-4 text-sm text-foreground/80'>
                  <div>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Efficiency:</span>{' '}
                      Up to 18.0 SEER2
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Heating:</span>{' '}
                      Down to 5&deg;F (-15&deg;C)
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Sizes:</span>{' '}
                      9K, 12K, 15K, 18K, 24K BTU
                    </p>
                  </div>
                  <div>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Price:</span>{' '}
                      $1,500-$2,800 (unit only)
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Best for:</span>{' '}
                      Mild to moderate climates, budget Mitsubishi buyers
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>WiFi:</span>{' '}
                      Optional kumo cloud ($150)
                    </p>
                  </div>
                </div>
              </div>

              {/* FH Series */}
              <div className='bg-card border border-border rounded-xl p-6 mb-4'>
                <div className='flex items-center gap-3 mb-3'>
                  <Sun className='h-5 w-5 text-primary' />
                  <h3 className='text-lg font-bold text-foreground'>
                    MSZ-FH Series — Hyper-Heating Mid-Range
                  </h3>
                </div>
                <div className='grid md:grid-cols-2 gap-4 text-sm text-foreground/80'>
                  <div>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Efficiency:</span>{' '}
                      Up to 19.0 SEER2
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Heating:</span>{' '}
                      Down to -13&deg;F (H2i Hyper-Heating)
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Sizes:</span>{' '}
                      9K, 12K, 15K, 18K BTU
                    </p>
                  </div>
                  <div>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Price:</span>{' '}
                      $2,000-$3,200 (unit only)
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Best for:</span>{' '}
                      Cold climates, primary heating replacement
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>WiFi:</span>{' '}
                      Optional kumo cloud ($150)
                    </p>
                  </div>
                </div>
              </div>

              {/* FZ Series */}
              <div className='bg-card border border-border rounded-xl p-6 mb-4'>
                <div className='flex items-center gap-3 mb-3'>
                  <Star className='h-5 w-5 text-primary' />
                  <h3 className='text-lg font-bold text-foreground'>
                    MSZ-FZ Series — The Flagship
                  </h3>
                </div>
                <div className='grid md:grid-cols-2 gap-4 text-sm text-foreground/80'>
                  <div>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Efficiency:</span>{' '}
                      Up to 20.2 SEER2 / 11.5 HSPF2
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Heating:</span>{' '}
                      Down to -13&deg;F (H2i Hyper-Heating)
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Sizes:</span>{' '}
                      12K, 15K BTU
                    </p>
                  </div>
                  <div>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Price:</span>{' '}
                      $2,800-$3,500 (unit only)
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Best for:</span>{' '}
                      Maximum efficiency, smart features, design-conscious
                    </p>
                    <p className='mb-2'>
                      <span className='font-semibold text-foreground'>Extra:</span>{' '}
                      3D i-see Sensor for occupancy-based comfort
                    </p>
                  </div>
                </div>
              </div>

              <p className='text-foreground/80 leading-relaxed mt-4'>
                For most California homeowners, the MSZ-GL series hits the
                sweet spot. You get the core Mitsubishi reliability and quiet
                operation without paying for cold-climate features you may
                not need. If you live in the mountains or a region with
                freezing winters, the FH series with Hyper-Heating is worth
                the upgrade.
              </p>
            </section>

            {/* Key Specs */}
            <section id='key-specs' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications
              </h2>
              <div className='bg-card border border-border rounded-xl overflow-hidden'>
                <div className='grid grid-cols-2 text-sm'>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    BTU Sizes
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    9,000 / 12,000 / 15,000 / 18,000 / 24,000
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    SEER2 Rating
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    Up to 20.2 (FZ series)
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    HSPF2 Rating
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    Up to 11.5 (FZ series)
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    Compressor
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    Inverter-driven variable speed
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    Refrigerant
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    R-410A
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    Heating Range
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    Down to -13&deg;F (H2i models)
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    Indoor Noise Level
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    As low as 19 dB
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    WiFi Control
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    Optional kumo cloud adapter (~$150)
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    Warranty (Compressor)
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    12 years (registered) / 7 years (unregistered)
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    Warranty (Parts)
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    5 years
                  </div>
                  <div className='p-4 border-b border-border bg-card/50 font-semibold text-foreground'>
                    Unit Price
                  </div>
                  <div className='p-4 border-b border-border text-foreground/80'>
                    $1,500 - $3,500 (unit only)
                  </div>
                  <div className='p-4 bg-card/50 font-semibold text-foreground'>
                    Installed Price
                  </div>
                  <div className='p-4 text-foreground/80'>
                    $3,000 - $7,000 (single zone)
                  </div>
                </div>
              </div>
            </section>

            {/* Performance */}
            <section id='performance' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Performance: What the Inverter Compressor Actually Does
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The single biggest difference between a Mitsubishi mini split
                and a cheap window unit or portable AC is the inverter
                compressor. Traditional AC systems are binary — the
                compressor is either running at 100% or off. This creates
                temperature swings: the room cools to the set temperature,
                the compressor shuts off, the room warms up, the compressor
                kicks back on at full blast.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Mitsubishi&apos;s inverter compressor runs at variable speeds.
                Once the room reaches the target temperature, the compressor
                throttles down to the minimum speed needed to maintain it.
                Instead of cycling on and off, it runs continuously at low
                power. The result is three tangible benefits:
              </p>
              <div className='space-y-3 mb-4'>
                <div className='flex items-start gap-3'>
                  <Zap className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <div>
                    <p className='font-semibold text-foreground'>Lower energy bills</p>
                    <p className='text-sm text-foreground/80'>
                      Variable speed operation uses 30-40% less electricity
                      than fixed-speed systems. The compressor spends most of
                      its time running at low power rather than full blast.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Shield className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <div>
                    <p className='font-semibold text-foreground'>Consistent temperature</p>
                    <p className='text-sm text-foreground/80'>
                      No more 3-5&deg;F swings. The room stays within
                      about 1&deg;F of the set temperature at all times.
                      This is noticeably more comfortable.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Clock className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <div>
                    <p className='font-semibold text-foreground'>Longer compressor life</p>
                    <p className='text-sm text-foreground/80'>
                      Starting and stopping is the hardest thing a compressor
                      does. Continuous low-speed operation reduces wear
                      dramatically. This is why Mitsubishi can offer a
                      12-year compressor warranty.
                    </p>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                In California, where TOU electricity rates spike during
                afternoon peak hours, the efficiency advantage is amplified.
                A Mitsubishi mini split running at 20.2 SEER2 uses roughly
                half the electricity of a 10-year-old central AC system rated
                at 13 SEER. On a hot Sacramento afternoon with PG&amp;E peak
                rates at 40-48 cents per kWh, that efficiency difference is
                real money.
              </p>
            </section>

            {/* Hyper-Heating */}
            <section id='hyper-heating' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Hyper-Heating H2i Technology
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Standard heat pumps have an Achilles heel: when outdoor
                temperatures drop below 25-30&deg;F, their heating capacity
                falls off a cliff. By the time it hits 5&deg;F outside, most
                heat pumps are producing a fraction of their rated output and
                the backup electric resistance heater takes over — eating
                electricity at 3-4x the cost.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Mitsubishi&apos;s Hyper-Heating H2i technology solves this
                with an enhanced compressor design and flash injection cycle
                that maintains full rated heating capacity down to -13&deg;F
                (-25&deg;C). The system continues to extract heat from
                outdoor air even in extreme cold, without relying on
                resistance backup heat.
              </p>
              <div className='bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4'>
                <p className='text-sm font-semibold text-foreground mb-3'>
                  Hyper-Heating capacity retention:
                </p>
                <div className='space-y-2 text-sm text-foreground/80'>
                  <div className='flex justify-between'>
                    <span>47&deg;F outdoor</span>
                    <span className='font-semibold text-foreground'>100% capacity</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>17&deg;F outdoor</span>
                    <span className='font-semibold text-foreground'>87% capacity</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>5&deg;F outdoor</span>
                    <span className='font-semibold text-foreground'>76% capacity</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>-13&deg;F outdoor</span>
                    <span className='font-semibold text-foreground'>60% capacity (still heating)</span>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                For California homeowners, H2i is most relevant in mountain
                communities (Big Bear, Lake Tahoe, Mammoth Lakes) and the
                northern Central Valley where winter nights can dip into the
                teens and single digits. Coastal and Southern California
                homeowners rarely need Hyper-Heating capability and can save
                money with the standard GL series.
              </p>
            </section>

            {/* Noise Levels */}
            <section id='noise' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Noise Levels: Why 19 dB Matters
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Mitsubishi lists their quietest indoor units at 19 dB on
                the lowest fan speed. To put that in context:
              </p>
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between items-center'>
                    <span className='text-foreground/80'>Breathing</span>
                    <span className='font-semibold text-foreground'>10 dB</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-foreground/80'>Rustling leaves</span>
                    <span className='font-semibold text-foreground'>15 dB</span>
                  </div>
                  <div className='flex justify-between items-center bg-primary/5 -mx-5 px-5 py-2 rounded'>
                    <span className='text-primary font-semibold'>Mitsubishi mini split (low)</span>
                    <span className='font-bold text-primary'>19 dB</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-foreground/80'>Whisper</span>
                    <span className='font-semibold text-foreground'>20 dB</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-foreground/80'>Library</span>
                    <span className='font-semibold text-foreground'>30 dB</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-foreground/80'>MrCool DIY (low)</span>
                    <span className='font-semibold text-foreground'>35-40 dB</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-foreground/80'>Window AC unit</span>
                    <span className='font-semibold text-foreground'>50-60 dB</span>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                In a bedroom, this matters enormously. A 19 dB indoor unit is
                essentially inaudible — you will not hear it running. Even
                on higher fan speeds, Mitsubishi units stay notably quieter
                than competitors. The outdoor unit noise is also well
                controlled, typically 46-58 dB depending on BTU size, which
                is important for neighbor relations and local noise
                ordinances.
              </p>
            </section>

            {/* Mitsubishi vs MrCool */}
            <section id='vs-mrcool' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Mitsubishi vs MrCool DIY: Pro Install vs DIY
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the most common comparison shoppers make. The two
                brands target fundamentally different buyers.
              </p>
              <div className='bg-card border border-border rounded-xl overflow-hidden mb-4'>
                <div className='grid grid-cols-3 text-sm'>
                  <div className='p-3 border-b border-r border-border bg-card/50 font-semibold text-foreground'>
                    Feature
                  </div>
                  <div className='p-3 border-b border-r border-border bg-card/50 font-semibold text-foreground text-center'>
                    Mitsubishi GL
                  </div>
                  <div className='p-3 border-b border-border bg-card/50 font-semibold text-foreground text-center'>
                    MrCool DIY 4th Gen
                  </div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Installation</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>Professional only</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>True DIY</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Total Cost (24K BTU)</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>$4,500-$6,500</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>$1,899-$2,199</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>SEER2</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>Up to 20.2</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>Up to 22</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Indoor Noise</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>19 dB</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>35-40 dB</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Compressor Warranty</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>12 years</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>7 years</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>WiFi</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>Optional ($150)</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>Built-in</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Multi-Zone</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>Up to 8 zones</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>Single zone only</div>

                  <div className='p-3 border-r border-border text-foreground/80'>Brand Track Record</div>
                  <div className='p-3 border-r border-border text-foreground/80 text-center'>70+ years</div>
                  <div className='p-3 border-border text-foreground/80 text-center'>~10 years</div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-3'>
                <span className='font-semibold text-foreground'>Choose Mitsubishi if:</span>{' '}
                You want the quietest operation, the longest warranty, multi-zone
                capability, and you are fine paying for professional
                installation. You value reliability over cost savings and
                plan to stay in the home long-term.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                <span className='font-semibold text-foreground'>Choose MrCool DIY if:</span>{' '}
                You want to save $3,000-$8,000 by doing the installation
                yourself, you only need a single zone, and you are comfortable
                with power tools. The MrCool DIY is an excellent product — it
                just targets a completely different buyer.
              </p>
              <div className='mt-4'>
                <Link
                  href='/reviews/mrcool-diy-4th-gen-review'
                  className='inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium'
                >
                  Read our full MrCool DIY 4th Gen Review
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </section>

            {/* Mitsubishi vs Daikin */}
            <section id='vs-daikin' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Mitsubishi vs Daikin: The Premium Showdown
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                If Mitsubishi is the Toyota of mini splits, Daikin is the
                Honda. Both are Japanese manufacturers with decades of heat
                pump engineering. Both require professional installation.
                Both are excellent. The differences are subtle.
              </p>
              <div className='bg-card border border-border rounded-xl overflow-hidden mb-4'>
                <div className='grid grid-cols-3 text-sm'>
                  <div className='p-3 border-b border-r border-border bg-card/50 font-semibold text-foreground'>
                    Feature
                  </div>
                  <div className='p-3 border-b border-r border-border bg-card/50 font-semibold text-foreground text-center'>
                    Mitsubishi
                  </div>
                  <div className='p-3 border-b border-border bg-card/50 font-semibold text-foreground text-center'>
                    Daikin
                  </div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Max SEER2</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>20.2</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>20.0</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Cold Climate</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>-13&deg;F (H2i)</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>-13&deg;F (Aurora)</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Indoor Noise</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>19 dB</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>19 dB</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>WiFi</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>Optional ($150)</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>Built-in (most models)</div>

                  <div className='p-3 border-b border-r border-border text-foreground/80'>Compressor Warranty</div>
                  <div className='p-3 border-b border-r border-border text-foreground/80 text-center'>12 years</div>
                  <div className='p-3 border-b border-border text-foreground/80 text-center'>12 years</div>

                  <div className='p-3 border-r border-border text-foreground/80'>Contractor Availability</div>
                  <div className='p-3 border-r border-border text-foreground/80 text-center'>Widest network</div>
                  <div className='p-3 border-border text-foreground/80 text-center'>Growing network</div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-3'>
                The practical differences between Mitsubishi and Daikin are
                small. Both deliver outstanding efficiency, quiet operation,
                and long warranties. The two factors that typically tip the
                decision:
              </p>
              <div className='space-y-2 mb-4'>
                <div className='flex items-start gap-2'>
                  <CheckCircle className='h-4 w-4 text-green-500 mt-1 shrink-0' />
                  <p className='text-sm text-foreground/80'>
                    <span className='font-semibold text-foreground'>Contractor availability:</span>{' '}
                    Mitsubishi has the largest authorized installer network in
                    North America. More contractors are trained and certified
                    on Mitsubishi equipment, which means easier scheduling,
                    competitive quotes, and better local support.
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <CheckCircle className='h-4 w-4 text-green-500 mt-1 shrink-0' />
                  <p className='text-sm text-foreground/80'>
                    <span className='font-semibold text-foreground'>WiFi:</span>{' '}
                    Daikin includes WiFi on most models at no extra charge.
                    Mitsubishi charges $150 for the kumo cloud adapter. If
                    smart home integration is important to you, Daikin has a
                    small edge here.
                  </p>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                You genuinely cannot go wrong with either brand. If your
                preferred local HVAC contractor recommends one over the
                other, go with their recommendation — installer quality
                matters more than marginal spec differences between these
                two brands.
              </p>
            </section>

            {/* Installation & Cost */}
            <section id='installation' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Installation &amp; Cost
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Mitsubishi mini splits require professional HVAC
                installation. This is not a DIY product. The system uses
                R-410A refrigerant that must be handled by an EPA Section 608
                certified technician. Line sets need to be brazed, evacuated
                with a vacuum pump, and charged to the manufacturer&apos;s
                specifications.
              </p>

              <div className='bg-card border border-border rounded-xl p-6 mb-6'>
                <h3 className='text-lg font-bold text-foreground mb-4'>
                  <DollarSign className='inline h-5 w-5 text-primary' />{' '}
                  Cost Breakdown (Single Zone)
                </h3>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-foreground/80'>9K BTU unit + install</span>
                    <span className='font-semibold text-foreground'>$3,000 - $4,500</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-foreground/80'>12K BTU unit + install</span>
                    <span className='font-semibold text-foreground'>$3,500 - $5,000</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-foreground/80'>15K BTU unit + install</span>
                    <span className='font-semibold text-foreground'>$4,000 - $5,500</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-foreground/80'>18K BTU unit + install</span>
                    <span className='font-semibold text-foreground'>$4,500 - $6,000</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-foreground/80'>24K BTU unit + install</span>
                    <span className='font-semibold text-foreground'>$5,500 - $7,000</span>
                  </div>
                  <div className='border-t border-border pt-3 flex justify-between'>
                    <span className='text-foreground/80'>Multi-zone (2-5 indoor units)</span>
                    <span className='font-semibold text-foreground'>$8,000 - $20,000+</span>
                  </div>
                </div>
              </div>

              <div className='bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4'>
                <p className='text-sm font-semibold text-foreground mb-2'>
                  What professional installation includes:
                </p>
                <ul className='text-sm text-foreground/80 space-y-1'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    Mounting indoor and outdoor units
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    Running and brazing copper line sets
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    Vacuum and pressure testing
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    Refrigerant charging to spec
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    Electrical connections and dedicated circuit
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    Condensate drain line routing
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    System commissioning and testing
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                    Warranty registration
                  </li>
                </ul>
              </div>

              <p className='text-foreground/80 leading-relaxed'>
                Get at least three quotes from Mitsubishi Diamond Contractors
                (their certified installer network) in your area. Prices vary
                significantly by region and contractor. Avoid choosing the
                cheapest bid — installer quality directly impacts system
                longevity and performance. A well-installed Mitsubishi system
                will outlast a poorly installed one by a decade.
              </p>
            </section>

            {/* Pros & Cons */}
            <section id='pros-cons' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-card border border-border rounded-xl p-6'>
                  <h3 className='text-lg font-bold text-foreground mb-4 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    Pros
                  </h3>
                  <ul className='space-y-3 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      #1 selling mini split brand — largest parts and
                      contractor network in North America
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Industry-leading 12-year compressor warranty (registered)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Whisper-quiet 19 dB indoor operation — essentially
                      inaudible
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Hyper-Heating H2i models work down to -13&deg;F
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Multi-zone systems support up to 8 indoor units
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      Inverter compressor delivers precise, consistent temperature
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      15-25 year expected lifespan with proper maintenance
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      5 BTU sizes available (9K-24K) for precise room matching
                    </li>
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-xl p-6'>
                  <h3 className='text-lg font-bold text-foreground mb-4 flex items-center gap-2'>
                    <XCircle className='h-5 w-5 text-red-500' />
                    Cons
                  </h3>
                  <ul className='space-y-3 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No DIY installation option — professional HVAC required
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Higher total cost ($3,000-$7,000 installed) vs DIY
                      alternatives
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      WiFi adapter costs $150 extra — not built in
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      kumo cloud app has mixed reviews for reliability
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Still uses R-410A refrigerant (being phased out for
                      R-32 in newer industry models)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Indoor wall unit design is functional, not sleek —
                      visible plastic housing
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id='faq' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Can I install a Mitsubishi mini split myself?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    No. Mitsubishi mini splits require professional HVAC
                    installation. The system uses R-410A refrigerant that must
                    be handled by an EPA Section 608 certified technician.
                    Line sets need to be brazed, evacuated with a vacuum pump,
                    and charged to spec. Attempting a DIY installation will
                    void the warranty and risks refrigerant leaks, poor
                    performance, and compressor damage. If DIY is important to
                    you, look at the{' '}
                    <Link
                      href='/reviews/mrcool-diy-4th-gen-review'
                      className='text-primary hover:underline'
                    >
                      MrCool DIY 4th Gen
                    </Link>{' '}
                    instead.
                  </p>
                </div>

                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How long do Mitsubishi mini splits last?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    15-25 years with proper maintenance. The inverter
                    compressor is the most durable component, backed by a
                    12-year warranty when registered. Many HVAC contractors
                    report Mitsubishi units still running strong after 20
                    years. Annual professional maintenance and regular filter
                    cleaning are the keys to longevity.
                  </p>
                </div>

                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    What size Mitsubishi mini split do I need?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    General sizing guide: 9K BTU covers 250-400 sq ft
                    (bedrooms), 12K BTU covers 400-600 sq ft (large bedrooms,
                    home offices), 15K BTU covers 600-800 sq ft (living
                    rooms), 18K BTU covers 800-1,100 sq ft (open-concept
                    areas), 24K BTU covers 1,100-1,500 sq ft (large spaces).
                    Climate, insulation, ceiling height, and sun exposure all
                    affect sizing. A Mitsubishi Diamond Contractor can perform
                    a Manual J load calculation for precise sizing.
                  </p>
                </div>

                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Is Mitsubishi better than MrCool?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    They serve different markets. Mitsubishi is the premium
                    choice for homeowners who want the best reliability,
                    quietest operation (19 dB vs 35-40 dB), longest warranty
                    (12 years vs 7 years), and multi-zone capability. MrCool
                    DIY is the budget-friendly choice for homeowners who want
                    to save $3,000-$8,000 by installing it themselves. Neither
                    is objectively better — it depends on whether you value
                    saving money upfront or premium long-term performance.
                  </p>
                </div>

                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Does the Mitsubishi mini split have WiFi?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    WiFi is not built in. Mitsubishi offers the kumo cloud
                    WiFi adapter as an optional accessory for approximately
                    $150. The kumo cloud app provides remote temperature
                    control, scheduling, energy monitoring, and voice assistant
                    integration with Amazon Alexa and Google Home. The adapter
                    installs inside the indoor unit.
                  </p>
                </div>

                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    What is Mitsubishi Hyper-Heating H2i?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    H2i is Mitsubishi&apos;s cold-climate heat pump technology
                    that maintains full heating capacity down to -13&deg;F.
                    Standard heat pumps lose significant capacity below
                    25-30&deg;F. H2i uses an enhanced compressor design and
                    flash injection cycle to extract heat from extremely cold
                    air. Available on the MSZ-FH and MSZ-FZ series, not the
                    standard GL series.
                  </p>
                </div>

                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Can I pair a Mitsubishi mini split with solar panels?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    Yes. Mini splits run on standard household circuits and
                    work seamlessly with any grid-tied or hybrid solar system.
                    The high efficiency (up to 20.2 SEER2) means less
                    electricity per BTU, maximizing your solar production
                    value. Under NEM 3.0 in California, running the mini split
                    during peak solar hours increases self-consumption and
                    reduces lower-value grid exports.
                  </p>
                </div>

                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How much electricity does a Mitsubishi mini split use?
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    A 12K BTU Mitsubishi mini split at 20 SEER2 draws
                    approximately 600 watts at full load during cooling. At
                    California electricity rates, running it 8 hours per day
                    costs roughly $1.50-$2.50 per day depending on your
                    utility and rate plan. By comparison, a window AC unit of
                    similar capacity draws 1,000-1,200 watts — nearly double.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Verdict */}
            <section id='verdict' className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Final Verdict
              </h2>
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <Star className='h-6 w-6 text-yellow-500 fill-yellow-500' />
                  <span className='text-2xl font-bold text-foreground'>4.7 / 5</span>
                  <span className='text-muted-foreground'>— Premium Pick</span>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The Mitsubishi Electric MSZ-GL series is the mini split you
                  buy when you want the job done right and you want it to
                  last. It is not the cheapest option. It is not the most
                  feature-packed. It is the most trusted and reliable ductless
                  system you can put in your home.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The 12-year compressor warranty is not marketing — it is a
                  reflection of how long these units actually run. The 19 dB
                  noise level is not a gimmick — it is genuinely inaudible in
                  a bedroom. The inverter compressor is not a buzzword — it
                  produces a tangibly more comfortable environment than
                  fixed-speed systems.
                </p>
                <p className='text-foreground/80 leading-relaxed'>
                  The only real knock is cost. At $3,000-$7,000 installed for
                  a single zone, it is significantly more than DIY alternatives
                  like the MrCool DIY at $1,899-$2,199 total. If you are
                  budget-conscious and handy with tools, a DIY system will
                  save you thousands. But if you want premium reliability,
                  near-silent operation, multi-zone capability, and the peace
                  of mind that comes with the #1 brand in the industry —
                  Mitsubishi is the standard.
                </p>
              </div>
            </section>

            {/* CTA Buy Box */}
            <div className='bg-card border border-border rounded-xl p-6 mb-10'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                <div>
                  <p className='text-sm text-muted-foreground mb-1'>
                    Mitsubishi MSZ-GL Series Mini Split
                  </p>
                  <p className='text-2xl font-bold text-foreground'>
                    $1,500 - $3,500
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    $3,000 - $7,000 fully installed
                  </p>
                </div>
                <a
                  href='#'
                  className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors'
                >
                  Check Latest Price
                  <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>

            {/* Related Links */}
            <div className='bg-card border border-border rounded-xl p-6 mb-10'>
              <h3 className='text-lg font-bold text-foreground mb-4'>
                Related Reviews
              </h3>
              <div className='space-y-3'>
                <Link
                  href='/reviews/best-mini-split-ac'
                  className='flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors group'
                >
                  <span className='text-foreground/80 group-hover:text-primary transition-colors'>
                    Best Mini Split AC Systems (2026 Comparison)
                  </span>
                  <ChevronRight className='h-4 w-4 text-muted-foreground group-hover:text-primary' />
                </Link>
                <Link
                  href='/reviews/mrcool-diy-4th-gen-review'
                  className='flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors group'
                >
                  <span className='text-foreground/80 group-hover:text-primary transition-colors'>
                    MrCool DIY 4th Gen Review
                  </span>
                  <ChevronRight className='h-4 w-4 text-muted-foreground group-hover:text-primary' />
                </Link>
                <Link
                  href='/reviews'
                  className='flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors group'
                >
                  <span className='text-foreground/80 group-hover:text-primary transition-colors'>
                    All GreenVerdict Reviews
                  </span>
                  <ChevronRight className='h-4 w-4 text-muted-foreground group-hover:text-primary' />
                </Link>
              </div>
            </div>

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
    </ReviewLayout>
  );
}
