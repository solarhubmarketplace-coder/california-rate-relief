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
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  Sun,
  X,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'EcoFlow Delta Pro Ultra Review 2026: Whole-Home Backup That Scales to 90kWh',
  description:
    'In-depth EcoFlow Delta Pro Ultra review. 6,144Wh LFP battery, 7,200W output, expandable to 90kWh with up to 15 batteries. $4,099, is it worth it vs Tesla Powerwall 3? Honest pros, cons, and California backup analysis.',
  alternates: {
    canonical: '/reviews/ecoflow-delta-pro-ultra-review',
  },
  openGraph: {
    title:
      'EcoFlow Delta Pro Ultra Review 2026: Whole-Home Backup That Scales to 90kWh',
    description:
      'Detailed review of the EcoFlow Delta Pro Ultra, 6,144Wh LFP battery, 7,200W output, expandable to 90kWh. The bridge between portable power stations and permanent home batteries.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'EcoFlow Delta Pro Ultra Review 2026',
  reviewBody:
    'The EcoFlow Delta Pro Ultra delivers 6,144Wh of LFP battery capacity per unit with 7,200W continuous output, expandable to a staggering 90kWh across 15 batteries and 21,600W across 3 inverters. At $4,099 for the base unit, it bridges the gap between portable power stations and permanent whole-home battery systems like Tesla Powerwall. For California homeowners facing multi-day PSPS shutoffs and aggressive TOU rates, it offers a compelling no-permit, modular alternative.',
  datePublished: '2026-04-21',
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
    name: 'EcoFlow Delta Pro Ultra',
    brand: {
      '@type': 'Brand',
      name: 'EcoFlow',
    },
    description:
      'Modular whole-home battery system with 6,144Wh LiFePO4 battery per unit, 7,200W AC output, expandable to 90kWh with up to 15 batteries and 21,600W with 3 inverters.',
    offers: {
      '@type': 'Offer',
      price: '4099',
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
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long can the EcoFlow Delta Pro Ultra power a whole house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a single 6,144Wh battery, the Delta Pro Ultra can run essential circuits (refrigerator, lights, Wi-Fi, phone chargers) for approximately 2 days. Expanding to the maximum 90kWh configuration with 15 batteries could power essential loads for 2+ weeks, or run a full home including HVAC for several days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the EcoFlow Delta Pro Ultra better than Tesla Powerwall 3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They serve different needs. The Delta Pro Ultra is modular, requires no permits or electrician, and can be self-installed in under an hour. Tesla Powerwall 3 requires professional installation ($12,500-$16,500 installed) but integrates more seamlessly with rooftop solar. The Delta Pro Ultra is better for renters, DIY homeowners, and anyone who wants expandable storage without construction. The Powerwall is better for permanent installations with solar already on the roof.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Delta Pro Ultra charge from solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Delta Pro Ultra accepts up to 5,600W of solar input via its built-in MPPT controller. With optimal panels in California sun (5-6 peak hours), you can fully recharge a single battery in about 1.5 hours with a large enough panel array.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Delta Pro Ultra require professional installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The base inverter and battery units connect together without an electrician. However, if you want whole-home automatic backup with the Smart Home Panel 2, that does require hardwiring into your electrical panel, which should be done by a licensed electrician. The basic plug-and-play setup requires no permits or professional help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the EcoFlow Delta Pro Ultra eligible for California SGIP rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Potentially. The California Self-Generation Incentive Program (SGIP) offers general market incentives of $150/kWh, which would be approximately $922 for the 6.144kWh Delta Pro Ultra. Equity customers in high fire-threat districts may qualify for up to $1,100/kWh. Eligibility depends on your utility territory and application timing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a full 90kWh Delta Pro Ultra system cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A maximum configuration with 3 inverters and 15 batteries would cost roughly $40,000-$50,000 depending on accessories. However, most homeowners do not need 90kWh. A more practical setup of 1 inverter + 3 batteries (18,432Wh) runs approximately $10,000-$12,000 and covers most whole-home backup needs for 1-2 days.',
      },
    },
  ],
};

const PRODUCT_KEY = 'ecoflow-delta-pro-ultra';

export default function EcoFlowDeltaProUltraReview() {
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
                href='/reviews/best-portable-power-stations'
                className='hover:text-primary transition-colors'
              >
                Best Portable Power Stations
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                EcoFlow Delta Pro Ultra
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                EcoFlow Delta Pro Ultra Review: Whole-Home Backup That Scales
                to 90kWh
              </h1>
              <p className='text-lg text-muted-foreground mb-4'>
                The bridge between portable power stations and permanent home
                battery systems, without the permits, electricians, or
                $15,000+ install costs.
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

            {/* Affiliate Disclosure + Top CTA */}
            <AffiliateDisclosure compact />
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best Whole-Home Backup'
              rating={4.7}
              verdict='6,144 Wh LFP, 7,200W continuous output, scalable to 90 kWh. Whole-home backup without Tesla Powerwall installation costs.'
              pros={[
                'Scalable to 90 kWh with extra batteries',
                '7,200W continuous — runs heavy appliances',
                'LFP chemistry, 3,000+ cycles',
                'SGIP rebate eligible in California',
              ]}
              cons={[
                '$4,099 base + batteries',
                'Requires 240V install for whole-home use',
              ]}
              source='ecoflow-delta-pro-ultra'
              variant='top'
            />

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
                The EcoFlow Delta Pro Ultra occupies a unique position in the
                home energy market: it delivers whole-home backup capability
                with the modularity of a portable system and without the
                permanent installation commitment of a Tesla Powerwall. Its
                6,144Wh LFP battery, 7,200W continuous output, and ability to
                scale to a jaw-dropping 90kWh make it genuinely viable as a
                primary backup system for California homes. At $4,099 for the
                base inverter + battery, it is not inexpensive, but compared
                to the $12,500-$16,500 installed cost of a Tesla Powerwall 3,
                it is a compelling value proposition for homeowners who want
                serious backup power without permits, contractors, or
                construction.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Whole-home backup during multi-day outages
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Homeowners who want Powerwall-level storage without permits
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Off-grid and large solar array owners (5,600W input)
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
                      Portability or camping (170 lbs per unit)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Budget-conscious buyers under $2,000
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Apartment dwellers or renters without garage space
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Specifications */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Capacity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        6,144Wh per battery (expandable to 90kWh with 15
                        batteries)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        AC Output
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        7,200W (single inverter), up to 21,600W with 3
                        inverters
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Sun className='h-4 w-4 text-primary' />
                        Solar Input
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to 5,600W MPPT
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        AC Charging
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        0-100% in approximately 2.5 hours
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Battery Type
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        LiFePO4 (LFP)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Cycle Life
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        3,500+ cycles to 80% capacity
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~170 lbs (inverter + 1 battery)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Transfer Switch
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Optional Smart Home Panel 2 (whole-home automatic
                        backup)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Outlets
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        6x 120V/20A, 1x 240V/30A (L14-30), USB-A, USB-C
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        UPS Switchover
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        &lt;10ms
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Connectivity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Wi-Fi, Bluetooth, EcoFlow App
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $4,099 (inverter + 1 battery)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              {/* Overview */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Overview: What the Delta Pro Ultra Actually Is
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow Delta Pro Ultra is not a portable power station.
                Let&apos;s get that out of the way immediately. At 170 pounds
                for the inverter plus one battery, this is not something you
                are taking camping or loading into an RV for a weekend trip.
                What it is, however, is the most serious modular home battery
                system available from any portable power station manufacturer
                — a product that directly competes with permanently installed
                systems like the Tesla Powerwall 3 and Enphase IQ Battery.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The core concept is simple: one inverter unit paired with
                stackable 6,144Wh LFP battery modules. Start with one
                inverter and one battery for $4,099. Add more batteries as
                your budget allows, up to 5 batteries per inverter (30,720Wh).
                Need even more? Daisy-chain up to 3 inverters with 5
                batteries each for a maximum system capacity of 90kWh and
                21,600W of output. That is enough to run a large California
                home; including central air conditioning — for days during a
                PSPS event.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key advantage over traditional home batteries: no permits,
                no electrician required for the basic setup, and you can take
                it with you if you move. The optional Smart Home Panel 2 does
                require professional installation if you want seamless
                whole-home automatic switchover, but the base system is
                genuinely plug-and-play.
              </p>

              {/* Power Output & Expandability */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Power Output &amp; Expandability
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A single Delta Pro Ultra inverter delivers 7,200W of
                continuous AC output. That is nearly double the 4,000W output
                of the Delta Pro 3 and meaningfully changes what you can
                power. A 7,200W continuous output can simultaneously run a
                refrigerator (~150W), several LED light circuits (~200W), a
                Wi-Fi router (~15W), a window AC unit (~1,200W), a microwave
                (~1,200W), and still have headroom for charging laptops and
                phones. In practical terms, it can keep an entire California
                home running on essential circuits without careful load
                management.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 240V/30A L14-30 outlet is a significant differentiator.
                This is the same outlet type used for RV hookups and many
                home appliances, enabling you to power 240V loads like a
                well pump, a small central AC compressor, or an electric
                dryer — something most portable power stations simply cannot
                do. With 3 inverters (21,600W), you have enough output to
                rival a whole-home standby generator.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The expandability is where the Delta Pro Ultra truly
                separates itself from every competitor in this space.
                Here&apos;s how the math works:
              </p>
              <div className='bg-card border border-border rounded-xl p-5 mb-6'>
                <h3 className='text-lg font-semibold text-foreground mb-3'>
                  Expandability Configurations
                </h3>
                <div className='space-y-3 text-sm text-foreground/80'>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span>1 inverter + 1 battery</span>
                    <span className='font-medium text-foreground'>
                      6,144Wh / 7,200W. ~$4,099
                    </span>
                  </div>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span>1 inverter + 3 batteries</span>
                    <span className='font-medium text-foreground'>
                      18,432Wh / 7,200W, ~$10,000
                    </span>
                  </div>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span>1 inverter + 5 batteries</span>
                    <span className='font-medium text-foreground'>
                      30,720Wh / 7,200W, ~$16,000
                    </span>
                  </div>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span>2 inverters + 10 batteries</span>
                    <span className='font-medium text-foreground'>
                      61,440Wh / 14,400W, ~$32,000
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span>3 inverters + 15 batteries (MAX)</span>
                    <span className='font-medium text-foreground'>
                      90,000Wh+ / 21,600W. ~$48,000
                    </span>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most California homeowners, the practical sweet spot is 1
                inverter with 2-3 batteries (12,288-18,432Wh). That provides
                enough capacity to ride out a 24-48 hour PSPS shutoff while
                running essential loads, and fits comfortably in a garage
                corner. The maximum 90kWh configuration is more relevant for
                off-grid homes, small businesses, or properties in extreme
                fire-risk zones where multi-day outages are routine.
              </p>

              {/* Solar Charging */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Solar Charging
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Delta Pro Ultra accepts up to 5,600W of solar input via
                its built-in MPPT controller, more than double the 2,600W
                input of the Delta Pro 3. This is a critical specification
                for California homeowners who want to pair the system with
                rooftop or ground-mounted solar panels for true energy
                independence.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5,600W of solar input capacity and California&apos;s
                average 5-6 peak sun hours, you can theoretically push
                28,000-33,600Wh of solar energy into the system per day, enough to fully recharge a 3-battery configuration
                (18,432Wh) every day with surplus. Even with real-world
                derating (clouds, panel angle, heat losses), a well-sized
                solar array can keep the Delta Pro Ultra topped off
                indefinitely during extended outages.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For practical sizing: fourteen 400W panels would give you
                approximately 5,600W of nameplate capacity, with real-world
                output around 4,000-4,500W during peak hours. That is a
                full recharge of a single 6,144Wh battery in roughly 1.5
                hours of direct sun. If you already have rooftop solar, the
                Delta Pro Ultra can serve as your battery storage layer —
                though you will need compatible wiring and potentially the
                Smart Home Panel 2 for seamless integration.
              </p>

              {/* Battery Technology */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Battery Technology: LFP Built for the Long Haul
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Like all of EcoFlow&apos;s current flagship products, the
                Delta Pro Ultra uses LiFePO4 (LFP) battery chemistry. This
                is the same chemistry used in Tesla Powerwall, BYD Blade
                batteries, and most modern utility-scale storage
                installations. The advantages over older NMC (nickel
                manganese cobalt) chemistry are significant: LFP is more
                thermally stable (critical in a garage that hits 120&deg;F
                in a California summer), does not suffer from thermal
                runaway, and lasts substantially longer.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EcoFlow rates the batteries at 3,500+ cycles to 80%
                capacity. If you cycle one battery per day (aggressive for
                most use cases), that translates to roughly 10 years before
                noticeable degradation. For the typical California
                homeowner using it primarily for outage backup and
                occasional TOU arbitrage (maybe 100-150 cycles per year),
                the batteries should retain 80%+ capacity for 20+ years.
                This longevity makes the cost-per-cycle math increasingly
                favorable over time.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Each battery module includes its own BMS (battery management
                system) that communicates with the inverter for balanced
                charging, temperature management, and cell-level monitoring.
                The EcoFlow app provides real-time visibility into each
                battery&apos;s health, cycle count, and temperature — a
                level of transparency that most permanently installed home
                batteries do not offer.
              </p>

              {/* Smart Home Panel 2 Integration */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Smart Home Panel 2 Integration
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The optional EcoFlow Smart Home Panel 2 is what transforms
                the Delta Pro Ultra from a very large battery with outlets
                into a genuine whole-home backup system. The Smart Home
                Panel 2 is a sub-panel that wires into your main electrical
                panel and manages up to 6 circuits. When grid power drops,
                it automatically switches those circuits to the Delta Pro
                Ultra within 10 milliseconds, fast enough that your
                refrigerator, sump pump, and internet router never even
                notice the transition.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The panel also enables intelligent load management through
                the EcoFlow app. You can prioritize which circuits get power
                first, set schedules for TOU rate optimization (charge from
                the grid during off-peak hours, discharge during peak), and
                monitor per-circuit energy consumption. For California
                homeowners on PG&amp;E, SCE, or SDG&amp;E time-of-use plans
                — where peak rates can exceed 40-50 cents per kWh, this
                TOU arbitrage capability can meaningfully offset the
                system&apos;s cost over time.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Important caveat: the Smart Home Panel 2 requires
                professional installation by a licensed electrician. This
                adds $500-$1,500 to the total cost depending on your
                panel&apos;s complexity and local labor rates. It is the one
                component of the Delta Pro Ultra system that is not DIY.
                However, even without the Smart Home Panel 2, the base
                system is fully functional — you just need to manually plug
                appliances into the inverter&apos;s outlets during an
                outage rather than having automatic switchover.
              </p>

              {/* Mid-content CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='A compelling alternative to Tesla Powerwall at a fraction of the installed cost.'
                source='ecoflow-delta-pro-ultra'
                variant='mid'
              />

              {/* Delta Pro Ultra vs Delta Pro 3 */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Delta Pro Ultra vs Delta Pro 3: Which One Do You Need?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the question most EcoFlow shoppers are asking, and
                the answer depends entirely on your use case. The Delta Pro
                3 is a portable power station that happens to be powerful
                enough for home backup. The Delta Pro Ultra is a home
                battery system that happens to be modular and movable.
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Spec
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Delta Pro Ultra
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Delta Pro 3
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Base Capacity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        6,144Wh
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        4,096Wh
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Max Capacity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        90,000Wh (15 batteries)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        12,288Wh (3 batteries)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        AC Output
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        7,200W (up to 21,600W)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        4,000W (7,200W surge)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Solar Input
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        5,600W
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        2,600W
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        240V Output
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Yes (L14-30)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        No
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~170 lbs
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        114 lbs
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        UPS Switchover
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        &lt;10ms
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        &lt;20ms
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $4,099
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $1,999
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Best For
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Whole-home backup, off-grid
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Home backup + portable use
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong className='text-foreground'>Choose the Delta Pro
                3</strong> if you want a versatile power station that can do
                home backup AND go on camping trips, RV adventures, or
                tailgates. Its 114-lb weight is heavy but manageable for one
                person with the built-in wheels, and $1,999 is a more
                accessible entry point.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong className='text-foreground'>Choose the Delta Pro
                Ultra</strong> if your primary goal is home backup and you
                want the capacity to scale. The 7,200W output, 240V
                capability, 5,600W solar input, and ability to expand to
                90kWh make it a fundamentally different product — a
                stationary home battery system with modular flexibility.
              </p>

              {/* vs Tesla Powerwall 3 */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Delta Pro Ultra vs Tesla Powerwall 3
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the comparison that matters for anyone considering
                the Delta Pro Ultra as a serious home backup investment. The
                Tesla Powerwall 3 is the incumbent champion of residential
                battery storage — but it comes with significant trade-offs
                that the Delta Pro Ultra avoids.
              </p>
              <div className='bg-card border border-border rounded-xl p-5 mb-6'>
                <h3 className='text-lg font-semibold text-foreground mb-3'>
                  Tesla Powerwall 3 vs EcoFlow Delta Pro Ultra
                </h3>
                <div className='space-y-3 text-sm text-foreground/80'>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span className='font-medium text-foreground'>
                      Installed Cost
                    </span>
                    <span>
                      PW3: $12,500-$16,500 | DPU: $4,099 (DIY)
                    </span>
                  </div>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span className='font-medium text-foreground'>
                      Capacity
                    </span>
                    <span>
                      PW3: 13.5kWh | DPU: 6.1kWh (to 90kWh)
                    </span>
                  </div>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span className='font-medium text-foreground'>
                      Output
                    </span>
                    <span>
                      PW3: 11.5kW | DPU: 7.2kW (to 21.6kW)
                    </span>
                  </div>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span className='font-medium text-foreground'>
                      Installation
                    </span>
                    <span>
                      PW3: Professional required | DPU: DIY possible
                    </span>
                  </div>
                  <div className='flex justify-between items-center border-b border-border pb-2'>
                    <span className='font-medium text-foreground'>
                      Permits
                    </span>
                    <span>
                      PW3: Required | DPU: Not required (base system)
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='font-medium text-foreground'>
                      Portability
                    </span>
                    <span>
                      PW3: Permanent | DPU: Relocatable
                    </span>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Tesla Powerwall 3 wins on raw single-unit specs: 13.5kWh
                capacity and 11.5kW output in one sleek wall-mounted
                package. Its solar integration is seamless, especially if
                you already have Tesla solar panels or a Tesla Solar Roof.
                And its Storm Watch feature, which automatically pre-charges
                the battery when severe weather is forecasted, is genuinely
                clever.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                But the Delta Pro Ultra has three decisive advantages.
                First, <strong className='text-foreground'>cost</strong>: a
                single Delta Pro Ultra at $4,099 costs a third of what a
                Powerwall 3 costs installed ($12,500-$16,500). Even a
                3-battery Delta Pro Ultra system (~$10,000) provides
                18,432Wh for roughly the installed cost of a single
                Powerwall. Second, <strong className='text-foreground'>
                flexibility</strong>: the Delta Pro Ultra requires no
                permits, no electrician (for the base setup), and can be
                relocated if you move. A Powerwall is a permanent fixture
                tied to one property. Third, <strong className='text-foreground'>
                scalability</strong>: the Delta Pro Ultra can grow from
                6.1kWh to 90kWh as your needs and budget evolve. Adding a
                second Powerwall means another $12,000+ installation.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Powerwall wins for homeowners who want a fully
                integrated, set-it-and-forget-it system with professional
                installation and utility grid integration. The Delta Pro
                Ultra wins for homeowners who value flexibility, lower
                upfront cost, DIY capability, and the ability to start
                small and scale up over time.
              </p>

              {/* Installation & Setup */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Installation &amp; Setup
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The base Delta Pro Ultra system (inverter + battery) is
                genuinely plug-and-play. Unbox the units, connect the
                battery to the inverter via the included cable, plug the
                inverter into a wall outlet to charge, and you have a
                working backup system. The entire process takes 30-45
                minutes including unboxing. No tools, no electrician, no
                permits.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow app (iOS and Android) guides you through the
                initial setup, including Wi-Fi connection, firmware updates,
                and configuring your preferred charging schedule. The app
                interface is clean and responsive; EcoFlow has clearly
                invested heavily in software, and it shows. You can monitor
                real-time input/output, set charging limits (useful for
                battery longevity), configure TOU schedules, and check
                battery health from anywhere.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Adding the Smart Home Panel 2 for automatic whole-home
                switchover is a more involved process. It requires hardwiring
                into your main electrical panel, which means a licensed
                electrician and potentially local permits depending on your
                jurisdiction. Budget $500-$1,500 for installation on top of
                the panel&apos;s cost. Once installed, however, the system
                becomes fully automatic, grid power drops, the Delta Pro
                Ultra takes over within 10ms, and you may not even notice
                the transition.
              </p>

              {/* Who It's Best For */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who the Delta Pro Ultra Is Best For
              </h2>
              <div className='space-y-4 mb-6'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <Zap className='h-5 w-5 text-primary' />
                    California Homeowners in Fire-Risk Zones
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    If you live in a PG&amp;E, SCE, or SDG&amp;E territory
                    that experiences regular PSPS shutoffs, the Delta Pro
                    Ultra is one of the most cost-effective ways to guarantee
                    continuous power. A 2-3 battery configuration can keep
                    essential circuits running for 2-4 days, and with solar
                    panels, you can extend that indefinitely.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <DollarSign className='h-5 w-5 text-primary' />
                    TOU Rate Arbitrage Seekers
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    California&apos;s time-of-use rates punish peak-hour
                    consumption with rates exceeding 40-50 cents/kWh. The
                    Delta Pro Ultra with Smart Home Panel 2 can charge from
                    the grid (or solar) during off-peak hours and discharge
                    during peak — potentially saving $50-$150/month depending
                    on your usage patterns and rate plan.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <Sun className='h-5 w-5 text-primary' />
                    Solar Panel Owners Without Battery Storage
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    If you have rooftop solar but no battery, the Delta Pro
                    Ultra&apos;s 5,600W solar input lets you capture and
                    store daytime generation for evening use. Under NEM 3.0,
                    where export credits have dropped significantly, storing
                    your own solar energy for self-consumption is
                    increasingly valuable.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <Shield className='h-5 w-5 text-primary' />
                    Homeowners Who Want to Start Small and Scale
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Unlike a Tesla Powerwall where you are committing
                    $12,500+ upfront, the Delta Pro Ultra lets you start
                    with one $4,099 unit and add capacity as your budget
                    allows. This modular approach means you can have backup
                    power this month and expand to whole-home coverage over
                    the next year or two.
                  </p>
                </div>
              </div>

              {/* Pros and Cons */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-4 mb-6'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-green-600' />
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Massive expandability: 6.1kWh to 90kWh
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      7,200W continuous output (21,600W with 3 inverters)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      240V output for well pumps and large appliances
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      5,600W solar input, serious off-grid capability
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      LFP battery: 3,500+ cycles, safe, long-lasting
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      No permits required for base system
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      &lt;10ms UPS switchover
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Excellent app with energy management features
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Relocatable, take it with you if you move
                    </li>
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <X className='h-5 w-5 text-red-500' />
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Heavy: 170 lbs. Not portable at all
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      $4,099 entry price is steep for basic backup
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Smart Home Panel 2 requires professional install
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      AC charging slower than Delta Pro 3 (2.5h vs 70min)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Scaling to full capacity gets very expensive
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Large footprint, needs garage or utility room space
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No built-in wheels, need two people to move
                    </li>
                  </ul>
                </div>
              </div>

              {/* Final Verdict */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Final Verdict
              </h2>
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <h3 className='text-xl font-bold text-foreground'>
                    GreenReviewsHub Rating
                  </h3>
                  <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                    <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                    <span className='font-bold text-foreground'>4.7</span>
                    <span className='text-muted-foreground text-sm'>/ 5</span>
                  </div>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The EcoFlow Delta Pro Ultra is the most ambitious product
                  in the portable-adjacent power station category. It is not
                  really portable, and that is fine, it is not trying to be.
                  What it offers is something no other product in this space
                  does: a modular, permit-free, relocatable home battery
                  system that can scale from a modest 6.1kWh backup to a
                  90kWh whole-home powerhouse that rivals utility-scale
                  installations.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  For California homeowners, the value proposition is
                  particularly strong. Between PSPS shutoffs that can last
                  3-5 days, TOU rates that punish peak-hour consumption,
                  and NEM 3.0 making solar self-consumption more valuable
                  than ever, the case for home battery storage is
                  compelling. The Delta Pro Ultra delivers that storage at a
                  significantly lower cost than Tesla Powerwall, with the
                  added benefits of modularity and portability.
                </p>
                <p className='text-foreground/80 leading-relaxed'>
                  At $4,099, it is an investment — but it is an investment
                  in energy independence that will pay dividends every time
                  the grid goes down and your neighbors are in the dark
                  while your lights stay on.
                </p>
              </div>

              {/* FAQ Section */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4 mb-10'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    How long can the EcoFlow Delta Pro Ultra power a whole
                    house?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    With a single 6,144Wh battery, the Delta Pro Ultra can
                    run essential circuits (refrigerator, lights, Wi-Fi,
                    phone chargers) for approximately 2 days. Expanding to
                    the maximum 90kWh configuration with 15 batteries could
                    power essential loads for 2+ weeks, or run a full home
                    including HVAC for several days.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Is the EcoFlow Delta Pro Ultra better than Tesla
                    Powerwall 3?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    They serve different needs. The Delta Pro Ultra is
                    modular, requires no permits, and can be self-installed.
                    The Powerwall 3 ($12,500-$16,500 installed) integrates
                    more seamlessly with rooftop solar but is a permanent
                    installation. The Delta Pro Ultra wins on flexibility
                    and upfront cost; the Powerwall wins on seamless grid
                    integration.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Can the Delta Pro Ultra charge from solar panels?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Yes. It accepts up to 5,600W of solar input — one of the
                    highest in any consumer battery system. With a
                    well-sized panel array in California, you can fully
                    recharge a single battery in about 1.5 hours of direct
                    sun.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Does the Delta Pro Ultra require professional
                    installation?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The base system (inverter + batteries) is
                    plug-and-play. no electrician or permits needed. The
                    optional Smart Home Panel 2 for automatic whole-home
                    switchover does require professional installation by a
                    licensed electrician.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Is the Delta Pro Ultra eligible for California SGIP
                    rebates?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Potentially. SGIP offers $150/kWh for general market
                    customers (~$922 for the 6.144kWh unit) and up to
                    $1,100/kWh for equity customers in high fire-threat
                    districts. Eligibility depends on your utility territory
                    and application timing.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    How much does a full 90kWh system cost?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    A maximum configuration (3 inverters + 15 batteries)
                    runs roughly $40,000-$50,000. Most homeowners will find
                    the sweet spot at 1 inverter + 2-3 batteries
                    ($7,000-$10,000), which provides 12-18kWh of storage
                    for 1-2 days of essential-circuit backup.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Final Verdict'
                verdict='Whole-home backup with the modularity of a portable system — a compelling alternative to permanent Powerwall installs.'
                source='ecoflow-delta-pro-ultra'
                variant='final'
              />
              <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
                <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
                <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                  See how the Delta Pro Ultra stacks up against other top-rated power stations and home batteries.
                </p>
                <Link href='/reviews' className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'>
                  Browse All Reviews
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-portable-power-stations'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Power Stations
              </Link>
              <Link
                href='/reviews/ecoflow-delta-pro-3-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Delta Pro 3 Review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='ecoflow-delta-pro-ultra' />
    </ReviewLayout>
  );
}
