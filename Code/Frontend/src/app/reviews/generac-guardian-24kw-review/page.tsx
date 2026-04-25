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
  Battery,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title:
    'Generac Guardian 24kW Review: The Whole House Standby Generator Worth the Investment?',
  description:
    'In-depth Generac Guardian 24kW (Model 7210) review covering specs, installation costs, fuel options, maintenance, total cost of ownership, and honest pros/cons. 24,000 watts, dual fuel, 200A transfer switch included.',
  alternates: {
    canonical: '/reviews/generac-guardian-24kw-review',
  },
  openGraph: {
    title:
      'Generac Guardian 24kW Review: The Whole House Standby Generator Worth the Investment?',
    description:
      'Detailed review of the Generac Guardian 24kW whole house standby generator. 24,000W output, dual fuel, automatic transfer switch, WiFi monitoring. Is $10,000-$15,000 installed worth it?',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Generac Guardian 24kW Review',
  headline:
    'Generac Guardian 24kW Review: The Whole House Standby Generator Worth the Investment?',
  description:
    'In-depth review of the Generac Guardian 24kW (Model 7210) whole house standby generator. 24,000 watts, dual fuel, 200A automatic transfer switch included, WiFi monitoring via Mobile Link.',
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
    name: 'Generac Guardian 24kW (Model 7210)',
    brand: {
      '@type': 'Brand',
      name: 'Generac',
    },
    description:
      'Whole house standby generator with 24,000 watts output, dual fuel (natural gas/LP), 200A automatic transfer switch, G-Force 999cc engine, and WiFi remote monitoring.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '5799',
      highPrice: '6499',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.5',
    bestRating: '5',
    worstRating: '1',
  },
  reviewBody:
    'The Generac Guardian 24kW is the sweet spot in the whole house standby generator market. It delivers enough power to run a 2,500 sq ft home with central AC, includes a 200A automatic transfer switch, and starts within 10 seconds of an outage. At $10,000-$15,000 fully installed, it is a serious investment — but for homeowners in outage-prone areas, it pays for itself in peace of mind and protected property value.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/generac-guardian-24kw-review',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a Generac Guardian 24kW cost fully installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Generac Guardian 24kW unit costs $5,799-$6,499 by itself. Fully installed with the automatic transfer switch, concrete pad, gas line work, electrical permits, and labor, expect to pay $10,000-$15,000 total. Installation costs vary significantly by region, gas line distance, and local permit requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Generac Guardian 24kW power my entire house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 24kW model can power a home up to approximately 2,500 square feet with central AC, including major appliances like refrigerators, ovens, washers, dryers, water heaters, and most HVAC systems. Homes over 3,000 sq ft or with multiple AC units may need the 26kW model.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a Generac Guardian 24kW last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With proper maintenance (oil changes every 200 hours or annually, air filter and spark plug replacement), a Generac Guardian can last 15-30 years. The G-Force engine is purpose-built for generator duty and designed for long service life. Most homeowners get 20+ years with regular maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is natural gas or propane better for a standby generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natural gas is more convenient because you never run out of fuel; it feeds from your existing gas line. Propane requires a separate tank but delivers about 10% more power output per unit and stores indefinitely. Most homeowners choose natural gas for convenience. Propane is better for rural areas without gas service or where gas lines are unreliable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How loud is the Generac Guardian 24kW?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Generac Guardian 24kW produces 67 dB at rated load, measured from the enclosure. That is roughly as loud as a normal conversation or a running dishwasher. While not silent, it is manageable for residential areas. Most municipalities require generators to stay below 75 dB at the property line.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often does a Generac Guardian need maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generac recommends an oil and filter change every 200 hours of use or annually, whichever comes first. Spark plugs should be replaced every 400 hours. Air filters need replacement annually. The unit runs a weekly self-test automatically. Annual professional maintenance runs $200-$400 per year.',
      },
    },
  ],
};

const PRODUCT_KEY = 'generac-guardian-24kw';

export default function GeneracGuardian24kWReview() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Link
                  href='/reviews'
                  className='hover:text-primary transition-colors'
                >
                  Reviews
                </Link>
                <span>/</span>
                <Link
                  href='/reviews/best-whole-house-generator'
                  className='hover:text-primary transition-colors'
                >
                  Best Whole House Generators
                </Link>
                <span>/</span>
                <span className='text-foreground font-medium'>
                  Generac Guardian 24kW Review
                </span>
              </div>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Generac Guardian 24kW Review: The Whole House Generator That
                Actually Powers Your Whole House
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<p className='text-lg text-muted-foreground leading-relaxed mb-4'>
                We break down the real costs, installation process, and total
                cost of ownership for the most popular standby generator in
                America.
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

            {/* Affiliate Disclosure + Top CTA */}
            <AffiliateDisclosure compact />
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best Whole-House Generator'
              rating={4.5}
              verdict='24 kW air-cooled standby generator with automatic transfer switch. Powers the full home through PSPS, storms, and grid failures.'
              pros={[
                'Auto start within 10 seconds of outage',
                'Runs on natural gas or propane',
                'Quiet Test mode weekly self-diagnosis',
                'Wi-Fi monitoring via Mobile Link',
              ]}
              cons={[
                'Full install runs $10,000-$15,000',
                'Annual maintenance required',
              ]}
              source='generac-guardian-24kw'
              variant='top'
            />

            {/* Quick Verdict Box */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1'>
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <Star className='h-5 w-5 fill-yellow-400/50 text-yellow-400' />
                  <span className='ml-2 text-lg font-bold text-foreground'>
                    4.5/5
                  </span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Generac Guardian 24kW is the sweet spot in the standby
                generator market. It delivers enough power for a 2,500 sq ft
                home with central AC, kicks on automatically within 10 seconds,
                and includes a 200-amp transfer switch out of the box. At
                $10,000-$15,000 fully installed, it is not cheap — but it is the
                most popular residential standby generator in America for a
                reason. If you live in an area with frequent outages and need
                your entire home covered, this is the unit to beat.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <h3 className='font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-600' />
                    Best For
                  </h3>
                  <ul className='text-sm text-foreground/70 space-y-1'>
                    <li>Medium-to-large homes (up to 2,500 sq ft with AC)</li>
                    <li>Areas with frequent power outages or PSPS events</li>
                    <li>Home offices that cannot afford downtime</li>
                    <li>Medical equipment that requires uninterrupted power</li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <XCircle className='h-4 w-4 text-red-500' />
                    Not Ideal For
                  </h3>
                  <ul className='text-sm text-foreground/70 space-y-1'>
                    <li>Small homes or condos (22kW would suffice)</li>
                    <li>Renters or those planning to move soon</li>
                    <li>Areas with rare outages (portable may be enough)</li>
                    <li>Tight budgets under $8,000 total</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Specs Table */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
                Key Specifications
              </h2>
              <div className='bg-card border border-border rounded-xl overflow-hidden'>
                <table className='w-full text-sm'>
                  <tbody>
                    {[
                      ['Model', '7210'],
                      ['Power Output', '24,000 watts (24kW) standby'],
                      ['Engine', 'Generac G-Force 999cc OHV'],
                      ['Fuel Type', 'Natural gas or liquid propane (dual fuel)'],
                      ['Transfer Switch', '200A included (RXSW200A3)'],
                      ['Startup Time', 'Within 10 seconds of outage'],
                      ['Noise Level', '67 dB at rated load'],
                      ['Dimensions', '48" x 25" x 29"'],
                      ['WiFi Monitoring', 'Mobile Link included'],
                      ['Self-Test', 'Automatic weekly'],
                      ['Warranty', '5-year limited'],
                      ['Unit Price', '$5,799 - $6,499'],
                      ['Installed Price', '$10,000 - $15,000'],
                    ].map(([label, value], i) => (
                      <tr
                        key={label}
                        className={
                          i % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                        }
                      >
                        <td className='px-4 py-3 font-medium text-foreground whitespace-nowrap'>
                          {label}
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Overview */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Overview: Why the 24kW Is the Best-Selling Standby Generator
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Generac invented the home standby generator category, and the
                Guardian series is their bread and butter. The 24kW model sits
                right in the middle of the lineup, powerful enough to run a
                full-size home with central air conditioning, but not so
                oversized that you are paying for capacity you will never use.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                What sets a standby generator apart from a portable unit is
                automation. The Guardian 24kW connects directly to your home
                electrical panel through a 200-amp automatic transfer switch
                (ATS). When the grid goes down, the generator detects the
                outage, starts the engine, and transfers your home to generator
                power — all within 10 seconds, with zero manual intervention.
                When grid power returns, it transfers back and shuts itself down.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                For California homeowners dealing with PSPS (Public Safety Power
                Shutoff) events, wildfire season blackouts, and an increasingly
                strained grid, a standby generator is not a luxury. It is
                infrastructure. The question is whether the 24kW model is the
                right size, and whether the total cost of ownership justifies the
                investment. We will break down both.
              </p>
            </section>

            {/* Sizing Guide */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-2'>
                <Zap className='h-6 w-6 text-primary' />
                Generator Sizing Guide: How to Choose the Right kW
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Choosing the wrong size generator is the most expensive mistake
                you can make. Too small and it overloads under heavy use, causing
                shutdowns and potential damage. Too large and you are paying
                thousands extra for capacity that sits idle. Here is how the
                Generac Guardian lineup breaks down:
              </p>
              <div className='space-y-4'>
                <div className='bg-card border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    22kW. Smaller Homes (Under 1,800 sq ft)
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Handles most essential circuits plus one central AC unit.
                    Good for smaller homes, townhomes, or homes where you are
                    comfortable managing loads during an outage. Typically
                    $1,000-$1,500 less than the 24kW installed. Choose this if
                    your electrical panel is 150A or less.
                  </p>
                </div>
                <div className='bg-primary/5 border border-primary/20 rounded-lg p-5'>
                  <div className='flex items-center gap-2 mb-2'>
                    <h3 className='font-semibold text-foreground'>
                      24kW; The Sweet Spot (1,800-2,500 sq ft)
                    </h3>
                    <span className='text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full'>
                      RECOMMENDED
                    </span>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Powers an entire medium-to-large home including central AC,
                    kitchen appliances, electric water heater, washer/dryer, and
                    all lighting and electronics. The included 200A transfer
                    switch means whole-house coverage. This is the model most
                    installers recommend and keep in stock; which also means
                    faster installation timelines.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    26kW, Large Homes (2,500+ sq ft)
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Required for homes with multiple AC zones, large electric
                    loads like pool pumps or EV chargers, or homes over 3,000 sq
                    ft. Adds roughly $500-$1,000 over the 24kW for the unit
                    alone. If you have a 300A or 400A electrical panel, start
                    here.
                  </p>
                </div>
              </div>
              <div className='bg-card border border-border rounded-lg p-5 mt-4'>
                <p className='text-foreground/80 text-sm leading-relaxed'>
                  <strong className='text-foreground'>Pro tip:</strong> Ask your
                  installer for a load calculation before committing to a size.
                  They will add up the wattage of every circuit you want covered
                  and recommend the right model. Do not guess, a proper load
                  calculation takes 30 minutes and prevents a $15,000 mistake.
                </p>
              </div>
            </section>

            {/* Power Output Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-2'>
                <Battery className='h-6 w-6 text-primary' />
                Power Output: What Can the 24kW Actually Run?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Twenty-four thousand watts is a lot of power. Here is what the
                Guardian 24kW can handle simultaneously — this is the real-world
                scenario most homeowners care about:
              </p>
              <div className='bg-card border border-border rounded-xl p-6'>
                <h3 className='font-semibold text-foreground mb-4'>
                  Typical Simultaneous Load (Whole House)
                </h3>
                <div className='space-y-3'>
                  {[
                    ['Central AC (3-ton)', '3,500W running / 5,000W startup'],
                    ['Refrigerator', '150-400W'],
                    ['Electric Oven/Range', '2,000-5,000W'],
                    ['Washer + Dryer', '500W + 2,400-5,000W'],
                    ['Electric Water Heater', '4,000-4,500W'],
                    ['Lights (whole house)', '500-1,500W'],
                    ['TV, WiFi, Computers', '200-500W'],
                    ['Garage Door Opener', '500-1,400W (brief)'],
                    ['Sump Pump', '800-1,500W'],
                    ['Phone/Tablet Chargers', '50-100W'],
                  ].map(([appliance, watts]) => (
                    <div
                      key={appliance}
                      className='flex justify-between items-center py-2 border-b border-border/50 last:border-0'
                    >
                      <span className='text-foreground/80 text-sm'>
                        {appliance}
                      </span>
                      <span className='text-foreground font-medium text-sm'>
                        {watts}
                      </span>
                    </div>
                  ))}
                </div>
                <div className='mt-4 pt-4 border-t border-border'>
                  <div className='flex justify-between items-center'>
                    <span className='text-foreground font-semibold'>
                      Typical Total Running Load
                    </span>
                    <span className='text-primary font-bold'>
                      12,000-18,000W
                    </span>
                  </div>
                  <p className='text-foreground/60 text-xs mt-2'>
                    The 24kW generator provides comfortable headroom above
                    typical loads, handling startup surges without tripping.
                  </p>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mt-4'>
                The key insight: you rarely run everything at once. The AC
                cycles on and off, you are not running the oven and dryer at the
                exact same second, and the water heater has a thermostat. The
                24kW gives you enough headroom to run everything in your home
                without ever thinking about load management. Which is the
                entire point of a whole house generator.
              </p>
            </section>

            {/* Automatic Transfer Switch */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-2'>
                <Shield className='h-6 w-6 text-primary' />
                Automatic Transfer Switch: How the Magic Happens
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Generac RXSW200A3 200-amp automatic transfer switch is
                included with the 24kW Guardian. This is a critical component
                that many people overlook when comparing prices. some
                competitors charge $800-$1,200 extra for the transfer switch.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Here is the sequence when power goes out:
              </p>
              <div className='space-y-3 mb-4'>
                {[
                  'Grid power fails, the transfer switch detects the loss instantly',
                  'Signal sent to generator, engine cranking begins immediately',
                  'Engine starts and stabilizes, takes 5-8 seconds',
                  'Transfer switch flips your home to generator power, total elapsed time under 10 seconds',
                  'Grid power returns; transfer switch waits a few minutes to confirm stability',
                  'Home switched back to grid. Generator runs a cool-down cycle and shuts off',
                ].map((step, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <span className='flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold'>
                      {i + 1}
                    </span>
                    <p className='text-foreground/80 text-sm leading-relaxed'>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                The 200A rating is important. It means the transfer switch can
                handle your entire 200-amp electrical panel — true whole-house
                coverage. Cheaper generators often come with load-shedding
                transfer switches that only cover selected circuits. With the
                Guardian 24kW, every outlet, every light, and every appliance in
                your home stays on.
              </p>
            </section>

            {/* Installation Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-2'>
                <DollarSign className='h-6 w-6 text-primary' />
                Installation: What to Expect and What It Really Costs
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here is the uncomfortable truth about standby generators: the
                unit itself is only half the cost. Installation is where the real
                money goes, and it is where most sticker shock happens. Let us
                break down every dollar.
              </p>

              <h3 className='text-lg font-semibold text-foreground mb-4'>
                Full Cost Breakdown
              </h3>
              <div className='bg-card border border-border rounded-xl overflow-hidden mb-6'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-border'>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Item
                      </th>
                      <th className='px-4 py-3 text-right font-semibold text-foreground'>
                        Cost Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Generac Guardian 24kW unit', '$5,799 - $6,499'],
                      ['200A transfer switch (included)', '$0 (included)'],
                      ['Concrete pad / mounting', '$200 - $500'],
                      ['Gas line installation/extension', '$500 - $2,500'],
                      ['Electrical work and wiring', '$1,000 - $2,500'],
                      ['Permits and inspections', '$200 - $800'],
                      ['Labor (installation)', '$1,500 - $3,000'],
                    ].map(([item, cost], i) => (
                      <tr
                        key={item}
                        className={
                          i % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                        }
                      >
                        <td className='px-4 py-3 text-foreground/80'>
                          {item}
                        </td>
                        <td className='px-4 py-3 text-foreground/80 text-right'>
                          {cost}
                        </td>
                      </tr>
                    ))}
                    <tr className='border-t-2 border-primary/30 bg-primary/5'>
                      <td className='px-4 py-3 font-bold text-foreground'>
                        Total Installed
                      </td>
                      <td className='px-4 py-3 font-bold text-primary text-right'>
                        $10,000 - $15,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className='text-lg font-semibold text-foreground mb-3'>
                What Drives Installation Costs Up
              </h3>
              <div className='space-y-3 mb-6'>
                {[
                  {
                    title: 'Gas line distance',
                    detail:
                      'If the gas meter is far from the generator pad, the gas line run can add $1,000-$2,000. Installations where the generator sits next to the gas meter save significantly.',
                  },
                  {
                    title: 'Electrical panel location',
                    detail:
                      'The transfer switch mounts next to your main panel. If the generator is on the opposite side of the house, longer wire runs increase cost.',
                  },
                  {
                    title: 'Permit complexity',
                    detail:
                      'Some California jurisdictions require separate electrical, plumbing/gas, and building permits. Coastal areas and HOA communities often have additional review processes.',
                  },
                  {
                    title: 'Existing infrastructure',
                    detail:
                      'Homes with older electrical panels may need a panel upgrade ($2,000-$4,000 additional) before the transfer switch can be installed. Homes without natural gas service need a propane tank ($500-$2,500 for tank plus installation).',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className='bg-card border border-border rounded-lg p-4'
                  >
                    <h4 className='font-semibold text-foreground text-sm mb-1'>
                      {item.title}
                    </h4>
                    <p className='text-foreground/70 text-sm leading-relaxed'>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className='text-lg font-semibold text-foreground mb-3'>
                Installation Timeline
              </h3>
              <p className='text-foreground/80 leading-relaxed'>
                From contract signing to turning the key, expect 2-6 weeks. The
                actual installation takes 1-2 days. The rest is lead time for
                permits, scheduling inspections, and (sometimes) waiting for the
                unit to arrive. The 24kW is the most popular model, so
                installers usually have them in stock, which shaves weeks off
                the timeline compared to less common sizes.
              </p>
            </section>

            {/* Total Cost of Ownership */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Total Cost of Ownership: The 10-Year Picture
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A standby generator is a long-term investment. Here is what
                ownership actually costs over a decade; the numbers most
                reviews skip.
              </p>
              <div className='bg-card border border-border rounded-xl p-6'>
                <div className='space-y-4'>
                  {[
                    {
                      label: 'Purchase + Installation (Year 0)',
                      cost: '$10,000 - $15,000',
                      note: 'One-time cost',
                    },
                    {
                      label: 'Annual Maintenance (Years 1-10)',
                      cost: '$200 - $400/year',
                      note: 'Oil, filters, spark plugs, professional checkup',
                    },
                    {
                      label: 'Fuel During Outages (Variable)',
                      cost: '$3 - $5/hour natural gas',
                      note: 'At full load. Half-load uses roughly 60% fuel.',
                    },
                    {
                      label: 'Weekly Self-Test Fuel',
                      cost: '$50 - $100/year',
                      note: '12-minute test cycle, 52 weeks/year',
                    },
                    {
                      label: 'Extended Warranty (Optional)',
                      cost: '$500 - $1,200',
                      note: 'Extends from 5 to 7 or 10 years',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className='flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-border/50 last:border-0'
                    >
                      <div>
                        <span className='text-foreground font-medium text-sm'>
                          {item.label}
                        </span>
                        <p className='text-foreground/60 text-xs'>
                          {item.note}
                        </p>
                      </div>
                      <span className='text-foreground font-semibold text-sm mt-1 sm:mt-0'>
                        {item.cost}
                      </span>
                    </div>
                  ))}
                </div>
                <div className='mt-6 pt-4 border-t-2 border-primary/30'>
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
                    <span className='text-foreground font-bold'>
                      Estimated 10-Year Total Cost
                    </span>
                    <span className='text-primary font-bold text-lg'>
                      $13,000 - $20,000
                    </span>
                  </div>
                  <p className='text-foreground/60 text-xs mt-2'>
                    Assumes average maintenance costs, 40-80 hours of outage
                    runtime per year, and natural gas fuel. Actual costs depend
                    on outage frequency and fuel prices.
                  </p>
                </div>
              </div>
              <div className='bg-primary/5 border border-primary/20 rounded-lg p-5 mt-4'>
                <p className='text-foreground/80 text-sm leading-relaxed'>
                  <strong className='text-foreground'>
                    Is it worth it financially?
                  </strong>{' '}
                  A single extended outage can cost thousands in spoiled food,
                  hotel stays, burst pipes (winter), and lost work productivity.
                  Homes with standby generators also sell for 3-5% more on
                  average. Over 20+ years of generator life, the math often
                  works in your favor — especially in outage-prone areas where a
                  portable generator means manually running extension cords in
                  the dark.
                </p>
              </div>
            </section>

            {/* Fuel Considerations */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Fuel Considerations: Natural Gas vs. Liquid Propane
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Guardian 24kW is dual fuel. It runs on either natural gas
                or liquid propane right out of the box. Your choice of fuel
                affects cost, convenience, and performance.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='bg-card border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-3'>
                    Natural Gas
                  </h3>
                  <ul className='space-y-2'>
                    {[
                      'Unlimited fuel supply from gas line, never runs out',
                      'Lower per-hour fuel cost ($3-5/hr at full load)',
                      'No fuel storage tank needed',
                      'Slightly lower power output vs. Propane',
                      'Depends on gas utility staying pressurized during outages',
                      'Best for: Urban/suburban homes with existing gas service',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-foreground/80 text-sm'
                      >
                        <Check className='h-4 w-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-3'>
                    Liquid Propane (LP)
                  </h3>
                  <ul className='space-y-2'>
                    {[
                      'Independent fuel supply. Not dependent on utility',
                      'About 10% more power output per unit of fuel',
                      'Stores indefinitely without degradation',
                      'Requires a 250-500 gallon tank ($500-$2,500 installed)',
                      'Must monitor and schedule refills',
                      'Best for: Rural areas, off-grid, unreliable gas utility',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-foreground/80 text-sm'
                      >
                        <Check className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mt-4 text-sm'>
                <strong className='text-foreground'>Our recommendation:</strong>{' '}
                If you have natural gas service, use it. The convenience of
                never worrying about fuel levels or deliveries is worth the
                marginal power difference. Switch to propane only if you are in a
                rural area, your gas utility has a history of losing pressure
                during major events, or you want complete fuel independence.
              </p>
            </section>

            {/* Maintenance */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Maintenance: What You Need to Do (and What It Costs)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A standby generator is a motor vehicle engine that happens to
                live outside your house. It needs regular maintenance just like
                your car. The good news: the Guardian 24kW makes most of it
                easy.
              </p>
              <div className='space-y-4'>
                <div className='bg-card border border-border rounded-lg p-5'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='font-semibold text-foreground'>
                      Weekly Self-Test
                    </h3>
                    <span className='text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full'>
                      AUTOMATIC
                    </span>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The Guardian runs itself for about 12 minutes every week to
                    keep the engine lubricated and the battery charged. You set
                    the day and time via Mobile Link. No action needed from you.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Every 200 Hours or Annually
                  </h3>
                  <ul className='text-foreground/80 text-sm space-y-1'>
                    <li>- Oil and filter change</li>
                    <li>- Air filter inspection/replacement</li>
                    <li>- Battery check and terminal cleaning</li>
                    <li>- Visual inspection of enclosure and connections</li>
                  </ul>
                  <p className='text-foreground/60 text-xs mt-2'>
                    Cost: $150-$300 if DIY, $200-$400 with a professional
                    service visit
                  </p>
                </div>
                <div className='bg-card border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Every 400 Hours
                  </h3>
                  <ul className='text-foreground/80 text-sm space-y-1'>
                    <li>- Spark plug replacement</li>
                    <li>- Valve clearance check</li>
                    <li>- Comprehensive system inspection</li>
                  </ul>
                  <p className='text-foreground/60 text-xs mt-2'>
                    Cost: $300-$600 with professional service
                  </p>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mt-4 text-sm'>
                <strong className='text-foreground'>Skip the DIY:</strong> While
                oil changes are straightforward, we recommend a professional
                annual inspection. A qualified technician catches things like
                loose connections, corroded terminals, and exhaust leaks that
                can become serious problems. Many Generac dealers offer annual
                maintenance contracts for $200-$400/year.
              </p>
            </section>

            {/* Smart Monitoring */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Mobile Link: Smart Monitoring from Your Phone
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Every Guardian 24kW includes Mobile Link WiFi monitoring at no
                extra cost. The Mobile Link app (iOS and Android) gives you
                real-time status updates from anywhere:
              </p>
              <div className='bg-card border border-border rounded-lg p-5'>
                <ul className='space-y-2'>
                  {[
                    'Real-time generator status (ready, running, maintenance needed)',
                    'Push notifications when an outage starts and when power returns',
                    'Maintenance reminders based on actual run hours',
                    'Weekly self-test results and history',
                    'Remote monitoring. Check status from work, vacation, anywhere',
                    'Service dealer connection for faster support',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-2 text-foreground/80 text-sm'
                    >
                      <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 flex-shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='text-foreground/80 leading-relaxed mt-4 text-sm'>
                Mobile Link is surprisingly useful. Knowing your generator
                started successfully during a PSPS event, while you are at
                work or traveling, is genuine peace of mind. The maintenance
                reminders also prevent the common problem of neglecting service
                until something breaks.
              </p>
            </section>

            {/* Mid-content CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Ready to buy?'
              verdict='The value becomes obvious the first time the grid drops and your home stays online.'
              source='generac-guardian-24kw'
              variant='mid'
            />

            {/* Comparison Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Generac vs. Kohler vs. Champion: Quick Comparison
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Generac is not the only player in the standby generator market.
                Here is how the Guardian 24kW stacks up against its closest
                competitors.
              </p>
              <div className='bg-card border border-border rounded-xl overflow-hidden overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-border'>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-4 py-3 text-center font-semibold text-primary'>
                        Generac 24kW
                      </th>
                      <th className='px-4 py-3 text-center font-semibold text-foreground'>
                        Kohler 24kW
                      </th>
                      <th className='px-4 py-3 text-center font-semibold text-foreground'>
                        Champion 24kW
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Unit Price', '$5,799-$6,499', '$5,500-$6,800', '$4,500-$5,500'],
                      ['Transfer Switch', '200A included', '200A included', '200A included'],
                      ['Engine', 'G-Force 999cc', 'Command PRO', 'OHV 999cc'],
                      ['Noise (dB)', '67 dB', '65 dB', '69 dB'],
                      ['Warranty', '5 years', '5 years', '10 years'],
                      ['WiFi Monitoring', 'Mobile Link (free)', 'OnCue Plus ($500+)', 'aXis (free)'],
                      ['Dealer Network', 'Largest in US', 'Strong', 'Growing'],
                      ['Fuel Types', 'NG + LP', 'NG + LP', 'NG + LP'],
                    ].map(([feature, generac, kohler, champion], i) => (
                      <tr
                        key={feature}
                        className={
                          i % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                        }
                      >
                        <td className='px-4 py-3 font-medium text-foreground whitespace-nowrap'>
                          {feature}
                        </td>
                        <td className='px-4 py-3 text-center text-foreground/80'>
                          {generac}
                        </td>
                        <td className='px-4 py-3 text-center text-foreground/80'>
                          {kohler}
                        </td>
                        <td className='px-4 py-3 text-center text-foreground/80'>
                          {champion}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='mt-4 space-y-3'>
                <div className='bg-card border border-border rounded-lg p-4'>
                  <h4 className='font-semibold text-foreground text-sm mb-1'>
                    Why Generac wins for most homeowners
                  </h4>
                  <p className='text-foreground/70 text-sm leading-relaxed'>
                    Generac has the largest dealer and service network in the
                    country. Finding an installer, getting parts, and scheduling
                    service is significantly easier than with any other brand.
                    Mobile Link monitoring is free (Kohler charges extra for
                    their OnCue Plus system), and the included 200A ATS keeps
                    the total package price competitive.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-lg p-4'>
                  <h4 className='font-semibold text-foreground text-sm mb-1'>
                    When to consider Kohler
                  </h4>
                  <p className='text-foreground/70 text-sm leading-relaxed'>
                    Kohler generators are slightly quieter and often considered
                    more premium in build quality. If noise is your top
                    priority or you already have a Kohler dealer nearby, the
                    Kohler 24kW is an excellent alternative.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-lg p-4'>
                  <h4 className='font-semibold text-foreground text-sm mb-1'>
                    When to consider Champion
                  </h4>
                  <p className='text-foreground/70 text-sm leading-relaxed'>
                    Champion offers the best value on paper; lower unit price
                    and a 10-year warranty. The trade-off is a smaller dealer
                    network and less mature service infrastructure. If budget
                    is the primary concern and you are comfortable with a
                    less-established brand for standby units, Champion saves
                    $1,000-$2,000.
                  </p>
                </div>
              </div>
            </section>

            {/* Pros and Cons */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-card border border-border rounded-xl p-6'>
                  <h3 className='font-bold text-foreground mb-4 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-600' />
                    Pros
                  </h3>
                  <ul className='space-y-3'>
                    {[
                      'True whole-house coverage with 200A transfer switch included',
                      '24kW is the sweet spot for most homes; not undersized, not overbuilt',
                      'Automatic operation — starts within 10 seconds, no manual intervention',
                      'Dual fuel flexibility (natural gas or propane)',
                      'Mobile Link WiFi monitoring at no extra cost',
                      'Largest dealer and service network in the US',
                      'Weekly self-test keeps the engine healthy automatically',
                      'G-Force engine is purpose-built for generator duty',
                      'Strong resale value — adds 3-5% to home price',
                    ].map((pro) => (
                      <li
                        key={pro}
                        className='flex items-start gap-2 text-sm text-foreground/80'
                      >
                        <Check className='h-4 w-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-xl p-6'>
                  <h3 className='font-bold text-foreground mb-4 flex items-center gap-2'>
                    <XCircle className='h-5 w-5 text-red-500' />
                    Cons
                  </h3>
                  <ul className='space-y-3'>
                    {[
                      'High total cost. $10,000-$15,000 installed is a major investment',
                      '67 dB noise level is noticeable (not silent like a battery backup)',
                      'Requires professional installation. Not a DIY project',
                      'Ongoing maintenance costs ($200-$400/year)',
                      'Burns fossil fuel — not a green energy solution',
                      'Only 5-year warranty (Champion offers 10 years)',
                      'Concrete pad and gas line work adds to installation complexity',
                      'Natural gas supply can be disrupted in major disasters',
                    ].map((con) => (
                      <li
                        key={con}
                        className='flex items-start gap-2 text-sm text-foreground/80'
                      >
                        <X className='h-4 w-4 text-red-500 mt-0.5 flex-shrink-0' />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Verdict */}
            <section className='mb-12'>
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8'>
                <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-2xl font-bold text-foreground'>
                    Final Verdict
                  </h2>
                  <div className='flex items-center gap-1'>
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className='h-5 w-5 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                    <Star className='h-5 w-5 fill-yellow-400/50 text-yellow-400' />
                    <span className='ml-2 text-lg font-bold text-foreground'>
                      4.5/5
                    </span>
                  </div>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The Generac Guardian 24kW is not the cheapest standby
                  generator you can buy, and it is not the quietest. What it is:
                  the most practical whole-house generator for the majority of
                  American homeowners.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The 24kW output is perfectly sized for homes up to 2,500 sq ft
                  with central AC. The included 200A automatic transfer switch
                  eliminates the cost surprises that plague other brands. Mobile
                  Link monitoring is genuinely useful and completely free. And
                  Generac has more certified installers and service technicians
                  than any competitor, which matters enormously when you need
                  parts or repairs at 2 AM during a storm.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  Yes, $10,000-$15,000 installed is a significant investment.
                  But compare that to the cost of a multi-day outage: spoiled
                  food ($500+), hotel stays ($200+/night), burst pipes in winter
                  ($5,000-$15,000 in damage), lost work productivity, and the
                  stress of running a portable generator in the rain with
                  extension cords. A standby generator is the kind of purchase
                  where the value becomes obvious the first time you need it.
                </p>
                <p className='text-foreground/80 leading-relaxed'>
                  If you are a California homeowner dealing with PSPS shutoffs,
                  wildfire season blackouts, or an aging grid, the Guardian 24kW
                  earns our strong recommendation. Get a load calculation from a
                  local installer, confirm the 24kW is the right size for your
                  home, and budget for the full installed cost, not just the
                  sticker price.
                </p>
                <div className='mt-6'>
                  <BuyButton
                    productKey={PRODUCT_KEY}
                    source='generac-guardian-24kw-verdict'
                    variant='primary'
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='For California homes dealing with PSPS shutoffs and wildfire blackouts, the Guardian 24kW earns our strong recommendation.'
              source='generac-guardian-24kw'
              variant='final'
            />

            {/* FAQ Section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4'>
                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How much does a Generac Guardian 24kW cost fully installed?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The unit itself costs $5,799-$6,499. Fully installed with
                    the automatic transfer switch, concrete pad, gas line work,
                    electrical permits, and labor, expect to pay $10,000-$15,000
                    total. Installation costs vary significantly by region, gas
                    line distance, and local permit requirements.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Can the Generac Guardian 24kW power my entire house?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The 24kW model can power a home up to approximately 2,500
                    square feet with central AC, including major appliances like
                    refrigerators, ovens, washers, dryers, water heaters, and
                    most HVAC systems. Homes over 3,000 sq ft or with multiple
                    AC units may need the 26kW model.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How long does a Generac Guardian 24kW last?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    With proper maintenance (oil changes every 200 hours or
                    annually, air filter and spark plug replacement), a Generac
                    Guardian can last 15-30 years. The G-Force engine is
                    purpose-built for generator duty and designed for long
                    service life. Most homeowners get 20+ years with regular
                    maintenance.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Is natural gas or propane better for a standby generator?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Natural gas is more convenient because you never run out of
                    fuel; it feeds from your existing gas line. Propane
                    requires a separate tank but delivers about 10% more power
                    output and stores indefinitely. Most homeowners choose
                    natural gas for convenience. Propane is better for rural
                    areas without gas service or where gas lines are unreliable.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How loud is the Generac Guardian 24kW?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The Guardian 24kW produces 67 dB at rated load, roughly as
                    loud as a normal conversation or a running dishwasher. While
                    not silent, it is manageable for residential areas. Most
                    municipalities require generators to stay below 75 dB at the
                    property line.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How often does a Generac Guardian need maintenance?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Generac recommends an oil and filter change every 200 hours
                    of use or annually, whichever comes first. Spark plugs
                    should be replaced every 400 hours. Air filters need annual
                    replacement. The unit runs a weekly self-test automatically.
                    Annual professional maintenance runs $200-$400 per year.
                  </p>
                </div>
              </div>
            </section>

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8 mb-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how the Guardian 24kW compares against Kohler, Champion, and other top whole-house generators.
              </p>
              <Link href='/reviews/best-whole-house-generator' className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'>
                Best Whole House Generators
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='generac-guardian-24kw' />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    </ReviewLayout>
  );
}
