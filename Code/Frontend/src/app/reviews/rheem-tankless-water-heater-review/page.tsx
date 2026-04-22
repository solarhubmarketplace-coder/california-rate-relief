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
  Calendar,
  Clock,
  Star,
  Check,
  X,
  Zap,
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
} from 'lucide-react';

const PRODUCT_KEY = 'rheem-tankless-water-heater';

export const metadata: Metadata = {
  title:
    'Rheem Tankless Water Heater Review 2026: The Budget-Friendly Alternative?',
  description:
    'Detailed Rheem tankless water heater review covering Performance Platinum electric ($999), Prestige gas condensing ($1,500-$2,200), EcoSmart electric ($399-$899) lines. Warranty, Home Depot availability, and value vs Rinnai.',
  alternates: {
    canonical: '/reviews/rheem-tankless-water-heater-review',
  },
  openGraph: {
    title:
      'Rheem Tankless Water Heater Review 2026: The Budget-Friendly Alternative?',
    description:
      'Rheem Performance Platinum, Prestige, and EcoSmart tankless water heaters reviewed. Is Rheem the best value in tankless, or should you pay up for Rinnai?',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Rheem Tankless Water Heater Review',
  reviewBody:
    'Rheem is the best-value tankless water heater brand in 2026. The Prestige gas condensing line ($1,500-$2,200) offers UEF up to 0.93 with a 12-year heat exchanger warranty, while the EcoSmart electric line brings whole-home tankless under $900. Wide Home Depot availability and competitive pricing make Rheem the right call for budget-minded homeowners and shorter-term owners where Rinnai\'s premium is hard to justify.',
  datePublished: '2026-04-22',
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
    name: 'Rheem Tankless Water Heater',
    brand: {
      '@type': 'Brand',
      name: 'Rheem',
    },
    description:
      'Gas and electric tankless water heaters including Performance Platinum, Prestige condensing, and EcoSmart lines.',
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.4',
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
      name: 'What are the differences between Rheem tankless lines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rheem\'s tankless lineup includes three major categories: Performance Platinum (gas and electric, Home Depot exclusive, competitive pricing), Prestige (premium condensing gas with Wi-Fi and recirculation built-in), and EcoSmart (electric-only, self-modulating, made in USA). Prestige is the best for long-term gas installations. Performance Platinum is the volume seller at Home Depot. EcoSmart is the electric answer for homes without gas service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Rheem cheaper than Rinnai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A Rheem Prestige 11 GPM condensing tankless typically retails $1,500-$2,200, compared to $2,100-$2,500 for a comparable Rinnai Sensei RX199. Installation labor is similar for both brands. Over 20 years, the Rinnai may deliver 3-5 more years of service life — but if you\'re planning to stay 10 years or less, Rheem is the better value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Rheem heat exchanger warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rheem gas tankless units carry a 12-year residential heat exchanger warranty (Prestige line) or 10-year (Performance Platinum). Parts warranty is 5 years, labor 1 year. This is slightly shorter than Rinnai\'s 15-year heat exchanger coverage, which reflects Rheem\'s positioning as a value brand rather than a premium brand. In practice, most failures occur from lack of descaling maintenance, which voids both brands\' warranties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy Rheem tankless at Home Depot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rheem Performance Platinum is sold exclusively at Home Depot and has been for years. Prestige and commercial Rheem models are sold through plumbing wholesalers and direct installer networks. The Home Depot channel is a real advantage for DIY buyers and homeowners who prefer to source their own unit and hire the installation separately — something that\'s harder to do with Rinnai.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Rheem have Wi-Fi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rheem\'s EcoNet Wi-Fi module is built into the Prestige line natively (no separate accessory purchase required, unlike Rinnai). The EcoNet app provides setpoint control, vacation mode, usage monitoring, service alerts, and Alexa/Google Assistant voice integration. For Performance Platinum models, the EcoNet module is available as a ~$100 accessory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Rheem EcoSmart a good electric tankless option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EcoSmart is Rheem\'s US-made electric tankless brand. The ECO 27 (27 kW) is the flagship for whole-home use, rated for up to 6 GPM in warm climates (more like 4-5 GPM with California\'s cold groundwater). Good value at $499-$899, but electric whole-home tankless is rarely the best choice in California — the utility rates make it expensive to operate, and a heat pump water heater typically delivers better ROI in all-electric homes. EcoSmart is best for ADUs, cabins, or homes without gas service where a heat pump water heater won\'t fit.',
      },
    },
  ],
};

export default function RheemTanklessReview() {
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
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link
                href='/reviews'
                className='hover:text-primary transition-colors'
              >
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <Link
                href='/reviews/best-tankless-water-heater'
                className='hover:text-primary transition-colors'
              >
                Tankless Water Heaters
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>Rheem</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Rheem Tankless Water Heater Review 2026: The Budget-Friendly
                Alternative?
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>12 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best Value Tankless'
              rating={4.4}
              verdict="Rheem delivers 80-90% of Rinnai's longevity at 70-80% of the price. Built-in EcoNet Wi-Fi, Home Depot availability, and a 12-year heat exchanger warranty make the Prestige line the smartest value play in tankless water heaters."
              pros={[
                'Best price-to-feature ratio in tankless',
                'Built-in EcoNet Wi-Fi (no accessory needed)',
                'Home Depot availability for DIY-friendly buyers',
              ]}
              cons={["12-year heat exchanger vs Rinnai's 15-year", 'Brand perception lags Rinnai']}
              source='rheem-tankless'
              variant='top'
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.4</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                Rheem is the value leader in tankless water heaters. The
                Prestige gas condensing line goes head-to-head with Rinnai on
                efficiency (UEF 0.93 vs 0.96), matches it on flow rate (11
                GPM), includes built-in EcoNet Wi-Fi standard, and lands at
                $300-$500 less on the sticker. You give up three years of
                heat exchanger warranty coverage (12 vs 15 years) and some
                marginal long-term durability, but for the vast majority of
                homeowners who plan to stay 5-15 years in the house, Rheem
                is the smarter financial call. Add the Home Depot retail
                availability and DIY-friendly sourcing and you have the
                easiest tankless brand to actually buy.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Budget-conscious buyers (5-15 year horizon)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      DIY sourcing + pro install workflow
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Buyers who want Wi-Fi built-in
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
                      Long-term owners (20+ years) — Rinnai pays off
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Premium-first buyers who want the best possible unit
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      All-electric homes (heat pump is better than electric
                      tankless)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications (Prestige RTGH-11DVLN Flagship)
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Home className='h-4 w-4 text-primary' />
                        Max Flow
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>11 GPM</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        BTU Input
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        199,900 BTU/h max
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Leaf className='h-4 w-4 text-primary' />
                        Efficiency (UEF)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        0.93 (ENERGY STAR qualified)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Fuel
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Natural Gas or Propane
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Built-in Recirc Pump
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Yes (RTGH-RH models)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Wi-Fi
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        EcoNet built-in (standard)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Venting
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        PVC / CPVC up to 2 inches (condensing)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Installation
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Indoor, wall-mount (outdoor variants available)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Dimensions
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        18.5 x 27.5 x 9.8 in
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        12yr heat exchanger / 5yr parts / 1yr labor
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price (Unit)
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $1,500-$2,200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Rheem Tankless Lineup
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rheem&apos;s tankless product strategy is different from
                Rinnai&apos;s. Rheem uses distinct product lines targeting
                specific buyers and channels.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Prestige Series (Premium Condensing Gas) — $1,500-$2,200
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Prestige RTGH line is Rheem&apos;s top gas tankless
                offering. Condensing operation with dual heat exchangers,
                UEF 0.93, built-in EcoNet Wi-Fi, built-in recirculation on
                the RTGH-RH models, and PVC venting compatibility. The
                flagship RTGH-11DVLN delivers 11 GPM — directly competing
                with the Rinnai Sensei RX199 at $300-$500 less. This is the
                model most California homeowners buying tankless in 2026
                should consider first.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Performance Platinum (Home Depot Gas) — $999-$1,600
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Performance Platinum is Rheem&apos;s Home Depot exclusive
                line. Similar specs to Prestige at a lower price point, with
                somewhat simpler electronics and a 10-year heat exchanger
                warranty (vs 12 on Prestige). The tradeoff: the control
                electronics feel a generation behind the Prestige line, and
                EcoNet Wi-Fi is an accessory rather than built-in. But at
                $999-$1,600, Performance Platinum is the cheapest way into
                a legitimate whole-home tankless from a major brand.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                EcoSmart (Electric Tankless) — $399-$899
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EcoSmart is Rheem&apos;s US-made electric tankless brand. The
                ECO 11 (11 kW) through ECO 36 (36 kW) cover point-of-use
                through whole-home electric applications. Self-modulating
                technology adjusts power output to demand. UEF ratings are
                high (0.98+) because electric resistance heating is nearly
                100% efficient at point of use — but California electricity
                rates make operating costs higher than gas. EcoSmart is the
                right call for homes without gas service, ADU installations,
                or point-of-use under-sink applications. For main-home use
                in California, a heat pump water heater typically beats
                EcoSmart on total cost of ownership.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Performance Platinum Electric — $999-$1,400
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rheem&apos;s Home Depot-exclusive electric tankless line
                targeting the upper end of the electric market. 18 kW to 27
                kW models, wall-mount form factor, and compatibility with
                EcoNet Wi-Fi accessory. These compete directly with the
                EcoSmart ECO 27 at similar pricing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Build Quality: Where It Lags Rinnai
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rheem&apos;s heat exchangers are good but not as
                over-engineered as Rinnai&apos;s. The Prestige line uses
                commercial-grade stainless steel, and internal durability is
                solid — but anecdotal data from plumbers in California and
                online communities suggests a slightly higher failure rate
                around the 10-14 year mark compared to Rinnai. The 12-year
                heat exchanger warranty reflects this: Rheem covers the
                likely failure window, while Rinnai&apos;s 15 years bets
                their heat exchangers will rarely fail in warranty.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, most tankless failures come from lack of annual
                descaling rather than manufacturing defects, and that
                behavioral factor dominates over brand differences. A
                well-maintained Rheem will last as long as a
                well-maintained Rinnai. A poorly-maintained unit from either
                brand will fail at year 8-10.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                EcoNet Wi-Fi: Best App in Tankless
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rheem&apos;s built-in EcoNet Wi-Fi is a genuine advantage
                over Rinnai&apos;s accessory-only Control-R module. On
                Prestige units, EcoNet works out of the box — no extra $150
                module to purchase and install. The app provides:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Setpoint control with schedule-based temperature changes
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Vacation mode with custom duration
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Recirculation scheduling (smart learning or manual)
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Real-time usage tracking (water and gas)
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Service alerts including descaling reminders and error
                  codes
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Amazon Alexa and Google Assistant integration
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EcoNet also supports Rheem&apos;s broader HVAC and heat pump
                water heater lineup, so if you&apos;re a Rheem household,
                everything lives in one app. The app is polished,
                responsive, and does what you&apos;d expect — a step ahead
                of Rinnai&apos;s more utilitarian Control-R app.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Performance &amp; Flow Rate
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Prestige RTGH-11DVLN delivers 11 GPM at 60°F rise — the
                same headline flow rate as the Rinnai Sensei RX199. In
                California with groundwater at 55-65°F (typical for most
                inland metros), you&apos;ll see actual flow at the 9-10 GPM
                range while maintaining a 120°F output setpoint. That
                supports two simultaneous showers plus a running faucet,
                which covers the vast majority of 3+ bathroom California
                homes.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Temperature stability is good but not quite as tight as
                Rinnai. Most users won&apos;t notice the difference, but in
                back-to-back testing, the Rheem shows marginally larger
                temperature swings when fixtures turn on and off during
                showers. Again, this is a minor advantage for Rinnai that
                most owners won&apos;t care about in daily use.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Home Depot Availability: Underrated Advantage
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rheem&apos;s Performance Platinum line is sold exclusively
                at Home Depot, which matters more than you&apos;d think.
                For the buyer who prefers to source their own unit and hire
                an independent plumber for installation — a workflow that
                typically saves 15-25% over having a branded installer
                handle the entire job — Rheem is far easier to work with
                than Rinnai. You walk into Home Depot, buy a unit at the
                posted price, and get a plumber to install it. Rinnai often
                requires going through an authorized Rinnai dealer who may
                markup the unit and tie you to their installation pricing.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='Rheem Performance Platinum and Prestige are stocked at Home Depot and available for home delivery. Check current pricing and model availability.'
                source='rheem-tankless'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California Rebates &amp; 25C Credit
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Rheem Prestige RTGH line (UEF 0.93) qualifies for the
                federal Energy Efficient Home Improvement Credit (25C) at
                30% of cost up to $600/year. Performance Platinum and
                EcoSmart typically do not meet the CEE Advanced Tier
                threshold required for 25C, but check current model
                specifications at purchase time as Rheem occasionally adds
                higher-efficiency SKUs.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SoCalGas offers $200-$500 rebates on qualifying Rheem gas
                tankless models, and some municipal utilities including
                SMUD and LADWP offer additional $100-$300 rebates. Combined,
                you can typically offset $400-$900 of total cost with
                current 2026 incentive programs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Best price-to-feature ratio in tankless
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Built-in EcoNet Wi-Fi on Prestige (no accessory)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      11 GPM max flow on flagship condensing models
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Home Depot availability for DIY sourcing
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      UEF 0.93 qualifies for 25C tax credit (Prestige)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Built-in recirculation on RTGH-RH models
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Wide product range from $399 to $2,200
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Strong EcoNet app experience
                    </li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-800 dark:text-red-400 mb-3'>
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      12-year heat exchanger warranty (vs Rinnai&apos;s 15)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Slightly higher anecdotal failure rate year 10-14
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Brand reputation trails Rinnai in trade circles
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Temperature modulation marginally less tight
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Performance Platinum Wi-Fi is accessory-only
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Lower UEF on non-Prestige models
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Rheem vs Rinnai vs Navien
              </h2>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        Rheem Prestige 11GPM
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Rinnai RX199
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Navien NPE-240A2
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Price</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $1,500-$2,200
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $2,100-$2,500
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $2,200-$2,700
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>Max Flow</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        11 GPM
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>11 GPM</td>
                      <td className='px-3 py-2 text-foreground/70'>11.1 GPM</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>UEF</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        0.93
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.96</td>
                      <td className='px-3 py-2 text-foreground/70'>0.97</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Heat Ex. Warranty
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        12 yr
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>15 yr</td>
                      <td className='px-3 py-2 text-foreground/70'>15 yr</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Built-in Wi-Fi
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Yes
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Accessory</td>
                      <td className='px-3 py-2 text-foreground/70'>Yes</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Home Depot
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Yes
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Limited</td>
                      <td className='px-3 py-2 text-foreground/70'>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                See our in-depth{' '}
                <Link
                  href='/reviews/rinnai-tankless-water-heater-review'
                  className='text-primary hover:underline'
                >
                  Rinnai tankless review
                </Link>{' '}
                for the premium comparison, and our{' '}
                <Link
                  href='/reviews/tankless-water-heater-cost'
                  className='text-primary hover:underline'
                >
                  tankless cost guide
                </Link>{' '}
                for the full installed-cost breakdown.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy Rheem
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Budget-aware California homeowners</strong>{' '}
                    planning 5-15 year horizons where Rinnai&apos;s premium
                    is hard to justify.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>DIY-friendly buyers</strong> who prefer to buy
                    the unit at Home Depot and hire independent plumber for
                    install — typically saves 15-25% vs a branded installer.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Wi-Fi-first buyers</strong> — Prestige&apos;s
                    built-in EcoNet is more polished and doesn&apos;t
                    require a separate accessory purchase.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Rental properties</strong> — Performance
                    Platinum at $999-$1,600 fits rental-unit
                    capital-expense budgets without giving up core features.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Homes with existing Rheem HVAC</strong> — one
                    EcoNet app controls everything.
                  </span>
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Differences between Rheem tankless lines?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Prestige: premium gas condensing with built-in Wi-Fi and
                    recirc. Performance Platinum: Home Depot exclusive value
                    line. EcoSmart: US-made electric tankless for ADUs and
                    gas-free homes.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is Rheem cheaper than Rinnai?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes — typically $300-$500 less for a comparable
                    condensing 11 GPM unit. Over 20 years, Rinnai may
                    deliver 3-5 more years of service; for 10-year horizons,
                    Rheem is better value.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is the Rheem heat exchanger warranty?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    12 years on Prestige, 10 years on Performance Platinum.
                    5-year parts, 1-year labor. Shorter than Rinnai&apos;s
                    15-year heat exchanger coverage.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can I buy Rheem at Home Depot?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes — Performance Platinum is Home Depot-exclusive, and
                    some Prestige models are stocked as well. DIY-friendly
                    sourcing with independent installer hiring.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Does Rheem have Wi-Fi?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes — EcoNet is built-in on Prestige (no extra
                    accessory). Performance Platinum supports EcoNet via
                    ~$100 accessory module. Alexa and Google integration
                    included.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is Rheem EcoSmart electric tankless a good choice?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Good for ADUs, cabins, or gas-free homes. In California,
                    a heat pump water heater typically beats electric
                    tankless on total cost of ownership because of
                    electricity rates.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rheem is the smart-money tankless brand in 2026. You save
                $300-$500 vs Rinnai on the unit, get equivalent flow rates
                and nearly-equivalent efficiency, pick up a better built-in
                Wi-Fi experience, and gain Home Depot retail availability.
                The only real tradeoff is three fewer years of heat
                exchanger warranty — which matters if you&apos;re planning
                to stay in the home 20+ years, but rarely matters for
                5-15-year owners. For California homeowners buying tankless
                in 2026, the Rheem Prestige 11 GPM (RTGH-11DVLN) is the
                smartest value pick in the category. If you want the
                absolute best longevity and can justify the premium, our{' '}
                <Link
                  href='/reviews/rinnai-tankless-water-heater-review'
                  className='text-primary hover:underline'
                >
                  Rinnai tankless review
                </Link>{' '}
                makes the case for the upgrade.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='The best value tankless water heater brand in 2026. Prestige 11 GPM condensing competes directly with Rinnai at $300-$500 less, with better built-in Wi-Fi and Home Depot availability. Check current pricing on Rheem tankless models.'
              source='rheem-tankless'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our full tankless water heater ranking covering Rheem,
                Rinnai, Navien, and more.
              </p>
              <Link
                href='/reviews/best-tankless-water-heater'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/rinnai-tankless-water-heater-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Rinnai Review
              </Link>
              <Link
                href='/reviews/tankless-water-heater-cost'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Cost Guide
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='rheem-tankless' />
    </ReviewLayout>
  );
}
