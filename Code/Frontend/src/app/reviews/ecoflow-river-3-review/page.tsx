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
  Battery,
  Sun,
  Shield,
  ChevronRight,
  Home,
  DollarSign,
} from 'lucide-react';

const PRODUCT_KEY = 'ecoflow-river-3';

export const metadata: Metadata = {
  title:
    'EcoFlow River 3 Review 2026: The $259 LFP Power Station Worth Buying?',
  description:
    'Hands-on EcoFlow River 3 review — 245 Wh LFP, 300W output (600W X-Boost), 110W solar, full recharge in 60 minutes, 8.4 lbs. Is the $259 River 3 the best entry-level power station for California camping, CPAP use, and short outages?',
  alternates: {
    canonical: '/reviews/ecoflow-river-3-review',
  },
  openGraph: {
    title:
      'EcoFlow River 3 Review 2026: The $259 LFP Power Station Worth Buying?',
    description:
      'In-depth review of the EcoFlow River 3 — 245 Wh LFP battery, 300W output with X-Boost to 600W, 1-hour full recharge, 8.4 lbs. Is it the best budget power station of 2026?',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'EcoFlow River 3 Review',
  reviewBody:
    'The EcoFlow River 3 delivers 245 Wh of LFP battery capacity with 300W continuous output (600W X-Boost for resistive loads), 110W solar input, and a full 0-100% recharge in 60 minutes. At $259 it is one of the most affordable LFP power stations on the market, and at 8.4 lbs it is legitimately portable. It is ideal for California camping, CPAP use, short outages, and keeping essential devices running for 8-24 hours.',
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
    name: 'EcoFlow River 3',
    brand: {
      '@type': 'Brand',
      name: 'EcoFlow',
    },
    description:
      'Ultra-portable power station with 245 Wh LiFePO4 battery, 300W AC output, 600W X-Boost, 110W solar input, and 60-minute full recharge.',
    offers: {
      '@type': 'Offer',
      price: '259',
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
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can the EcoFlow River 3 run a CPAP machine overnight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With a typical CPAP drawing 30-60W (without humidifier), the River 3\'s 245 Wh capacity supports 4-8 hours of use on a single charge — enough for most single-night use. Using DC output instead of AC adds another 20-30% of runtime by skipping the inverter loss.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can the River 3 power during a short outage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The River 3 is best for small devices: phones (30+ charges), laptops (3-5 charges), a Wi-Fi router (8-15 hours), LED lights (10-20 hours), or a small fan. It will not run a full-size refrigerator for long (only 1-2 hours of compressor cycling) — for that you\'d want the 1 kWh SOLIX C1000 or larger.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does X-Boost work on the EcoFlow River 3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'X-Boost is EcoFlow\'s technology that lets the 300W inverter handle resistive loads up to 600W by briefly reducing the output voltage. This means you can run small hair dryers, coffee makers, or electric kettles that would normally trip a 300W inverter. It does not work with sensitive electronics or motor-driven tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the River 3 worth it over the River 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The River 3 replaces the older River 2 with a slightly different form factor, faster charging (60 min vs 70 min), and a refreshed app. Real-world performance is similar — the River 3 is slightly lighter and a bit more refined. If you already own a River 2, there is no need to upgrade. If you are buying new, the River 3 is the better pick at similar pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the battery lifespan of the River 3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The LFP battery is rated for 3,000 cycles to 80% original capacity. At one cycle per day, that is roughly 8 years. For typical weekend camping or occasional outage use (20-30 cycles per year), the battery will last well past the 5-year warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the River 3 charge from a car battery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The River 3 accepts 12V car input through the included car charging cable. Expect roughly 100W real-world input from a typical car outlet, meaning a full recharge takes about 2.5-3 hours of engine runtime. It can also combine car + solar simultaneously to speed up recharge.',
      },
    },
  ],
};

export default function EcoFlowRiver3Review() {
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
                EcoFlow River 3
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                EcoFlow River 3 Review 2026: The $259 LFP Power Station Worth Buying?
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
              badge="Best Budget Pick"
              rating={4.5}
              verdict="The EcoFlow River 3 is the best-value entry-level LFP power station of 2026. 245 Wh, 300W output (600W X-Boost), 1-hour full recharge, and a true-portable 8.4 lbs. At $259 MSRP (and often $199 on promo), it is the easiest-to-recommend power station under $300."
              pros={[
                'Weekend camping and RV trips',
                'CPAP and medical device backup',
                'Single-device outage protection',
              ]}
              cons={['Multi-device or fridge backup', 'Larger high-draw appliances']}
              source="river-3"
              variant="top"
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.5</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The EcoFlow River 3 is exactly what the entry-level power
                station category needed: a real LFP battery, a fast 60-minute
                recharge, a 300W inverter with X-Boost for higher-draw
                resistive loads, and a weight of just 8.4 pounds — light
                enough to actually carry around. At $259 MSRP and frequent
                promos under $200, it is the clearest buy in the category. It
                will not run your fridge for a day, but it will keep your
                CPAP, phone, laptop, and Wi-Fi alive during a single-night
                outage — and it will power a weekend of camping, tailgating,
                or remote work without hesitation. For California residents
                looking for a cheap insurance policy against short PSPS events,
                this is the one.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Weekend camping and RV trips
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      CPAP and medical device backup
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      First-time power station buyers
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
                      Running a refrigerator more than 1-2 hours
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Whole-home backup (even partial)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Multi-day outages without solar
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
                      <td className='px-4 py-3 text-foreground/80'>245 Wh</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        AC Output
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        300W continuous / 600W X-Boost
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Sun className='h-4 w-4 text-primary' />
                        Solar Input
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>110W max (MPPT)</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        AC Charging
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>0-100% in 60 min</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>Battery Type</td>
                      <td className='px-4 py-3 text-foreground/80'>LiFePO4 (LFP)</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>Cycle Life</td>
                      <td className='px-4 py-3 text-foreground/80'>3,000 cycles to 80%</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>8.4 lbs (3.8 kg)</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>Dimensions</td>
                      <td className='px-4 py-3 text-foreground/80'>10.2 x 8.3 x 8.9 in</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Connectivity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>Wi-Fi, Bluetooth, EcoFlow App</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>Outlets</td>
                      <td className='px-4 py-3 text-foreground/80'>
                        3x AC, 1x USB-C (100W), 2x USB-A, 1x Car
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>UPS Switchover</td>
                      <td className='px-4 py-3 text-foreground/80'>&lt;30ms</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Sun className='h-4 w-4 text-primary' />
                        Operating Temp
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>14-104&deg;F</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>5 years</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>Price (MSRP)</td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>$259</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Design &amp; Build Quality
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 8.4 pounds, the River 3 is the first power station in
                EcoFlow&apos;s lineup that feels genuinely &quot;grab and go.&quot;
                You can carry it with one hand without thinking about it, and
                it fits easily on a truck bed, a cabin shelf, or in a closet
                next to the router. The form factor is boxy but clean —
                roughly the size of a loaf of bread. The integrated handle on
                top is solid (not a flimsy flap), the plastic chassis feels
                dense without being brittle, and the LCD display is bright and
                easy to read.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EcoFlow&apos;s industrial design is polished at this price
                point. There is no wasted plastic, the port layout is
                logical, and the included accessories (AC cable, DC car
                adapter, MC4 solar cable) are well-made. Compared to some of
                the Amazon-brand power stations at similar pricing — which
                often feel like repackaged OEM units — the River 3 feels
                like a product someone actually designed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Battery &amp; Capacity
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                245 Wh of LFP capacity is the floor for what we&apos;d call a
                &quot;useful&quot; power station. Anything less (the Jackery
                Explorer 100 or similar) is really more of a large battery
                bank than a proper power station. At 245 Wh, the River 3 has
                enough energy to run a CPAP machine for a full night, charge
                a laptop 3-5 times, run a Wi-Fi router for 8-15 hours, or
                keep lights on for an evening. These are not small wins
                during an outage — they are the difference between a
                disrupted night and an inconvenient one.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The choice of LFP over cheaper NMC chemistry is significant
                at this price point. Most $250 power stations still ship
                with NMC batteries rated for 500-800 cycles. The River 3&apos;s
                3,000-cycle LFP battery will genuinely last for a decade of
                occasional use, and the chemistry is more stable (no thermal
                runaway risk) and more tolerant of partial charging. It is
                worth an extra $50-$75 vs the NMC competitors any day.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Charging Speed
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EcoFlow&apos;s X-Stream fast charging carries over to the
                River 3, and the result is a 0-100% recharge in just 60
                minutes from a wall outlet. That is remarkable for an
                entry-level unit — most competitors in this price range
                take 2-3 hours. If a PSPS shutoff warning hits late in the
                afternoon, you have plenty of time to top off before the
                lights drop.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar input is capped at 110W, which is enough to pair with
                a single 100W portable panel and get a full recharge in
                roughly 3 hours of California sun. That is a very reasonable
                match for the unit&apos;s capacity — the River 3 is not
                designed to be a stationary solar setup, but for camping or
                remote work scenarios, a single 100W panel keeps the unit
                topped up indefinitely during daylight.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Car charging (12V input) delivers roughly 100W real-world
                power, meaning a 2.5-hour full recharge on a road trip. You
                can combine AC + solar + car simultaneously to stack sources,
                though at this capacity the AC-only mode is almost always
                fast enough on its own.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Output &amp; Ports
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 300W continuous inverter is right-sized for the unit.
                It handles laptops, phones, LED lights, small fans, Wi-Fi
                routers, CPAP machines, and small TVs without breaking a
                sweat. Where things get interesting is X-Boost: a clever
                technology that lets the inverter handle up to 600W from
                resistive loads by briefly reducing output voltage. This
                means you can actually run a small coffee maker, a phone
                kettle, or a low-wattage hair dryer — things that would be
                hard limits on a standard 300W inverter. It does not work
                with motor-driven appliances or sensitive electronics, but
                for the vast majority of camping and outage use cases, it
                meaningfully expands what the unit can run.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Port layout: three AC outlets (enough for most needs), one
                USB-C port rated at 100W (enough to fast-charge most
                laptops), two USB-A ports, and a 12V car outlet. For a
                camping trip running two phones, a laptop, and some lights,
                this covers everything without needing a power strip.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Smart Features &amp; App
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow app (iOS and Android) connects via Wi-Fi or
                Bluetooth. You can monitor input and output power in real
                time, check battery state of charge, adjust charging speed
                (faster charging vs quieter/longer battery life), and push
                firmware updates. It is the most polished app in the
                portable power station category by a wide margin.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                One small note: the River 3 supports UPS-mode pass-through
                with a &lt;30ms switchover. Plug it between a wall outlet
                and a small desktop device, and it will take over
                instantly if the grid drops. 30ms is slightly slower than
                the &lt;20ms on the larger EcoFlow units — some sensitive
                electronics may blink — but most laptops, routers, and
                devices won&apos;t notice the switch.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Noise Level
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Fans stay off during normal use. During X-Stream fast
                charging, the fans are audible but not disruptive — closer
                to a laptop on medium load than a refrigerator. If you want
                to use the unit next to a bed (to run a CPAP for example),
                it is essentially silent during discharge. Just charge it
                before bed, not during.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California-Specific: Short Outages, Camping &amp; CPAP
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A small power station like the River 3 serves a specific
                California use case that the bigger units don&apos;t:
                insurance against short outages without a $1,000+ commitment.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Short PSPS Events
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Not every PSPS event is a 3-day multi-county affair. Many
                are 4-12 hour targeted shutoffs on a single neighborhood
                during red-flag wind events. For these shorter outages, the
                River 3 is genuinely useful: it runs a Wi-Fi router and
                phone chargers for the full duration, keeps essential
                lights on, and lets you use a laptop for remote work. For
                medical device users (especially CPAP), the River 3 is a
                literal lifesaver — 4-8 hours of CPAP runtime covers a
                full night.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                TOU and Energy Cost Context
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 245 Wh, the River 3 is too small for meaningful TOU rate
                arbitrage — cycling it daily off peak to on peak saves
                roughly $0.05-$0.10 per day, which doesn&apos;t add up to
                anything meaningful. Its value proposition is pure outage
                protection and portability, not shifting rates. For TOU
                arbitrage, step up to the Anker SOLIX C1000 or EcoFlow
                Delta 2. For context on TOU rates, see our article on{' '}
                <Link
                  href='/blog/pge-vs-sce-vs-sdge-rates-compared'
                  className='text-primary hover:underline'
                >
                  PG&amp;E vs. SCE vs. SDG&amp;E rates
                </Link>
                .
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Camping, Off-Grid Work, RV
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Where the River 3 really earns its keep is outside the
                house. Van life, weekend camping, tailgating, festival
                setups, outdoor photography — this is the perfect size for
                running laptops, cameras, lights, and audio gear for a
                couple of days. At 8.4 lbs, you actually bring it with
                you. At 28 lbs (like a SOLIX C1000), the psychology is
                different — it stays home.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      $259 MSRP — lowest for real LFP power stations
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      8.4 lbs — truly portable
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      60-minute full recharge
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      X-Boost extends usable load to 600W
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      LFP chemistry — 3,000 cycles
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Best-in-class EcoFlow app
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      100W USB-C for laptop fast charging
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      UPS pass-through
                    </li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-800 dark:text-red-400 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      245 Wh is small — can&apos;t run a fridge for long
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      110W solar input limits off-grid self-sufficiency
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No battery expansion
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Not for TOU arbitrage
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Only 3 AC outlets
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      30ms UPS switchover (slower than larger units)
                    </li>
                  </ul>
                </div>
              </div>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge="Buy now"
                verdict="The River 3 is in stock at EcoFlow.com. MSRP $259, with frequent drops to $199-$219 during promotional windows."
                source="river-3"
                variant="mid"
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How It Compares
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The entry-level power station market is crowded with sub-300 Wh units. Here is where the River 3 sits:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Feature</th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>River 3</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Jackery 300 Plus</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Bluetti EB3A</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Anker 521</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Capacity</td>
                      <td className='px-3 py-2 font-medium text-foreground'>245 Wh</td>
                      <td className='px-3 py-2 text-foreground/70'>288 Wh</td>
                      <td className='px-3 py-2 text-foreground/70'>268 Wh</td>
                      <td className='px-3 py-2 text-foreground/70'>256 Wh</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>Output</td>
                      <td className='px-3 py-2 font-medium text-foreground'>300W / 600W</td>
                      <td className='px-3 py-2 text-foreground/70'>300W</td>
                      <td className='px-3 py-2 text-foreground/70'>600W / 1,200W</td>
                      <td className='px-3 py-2 text-foreground/70'>200W</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Full Charge</td>
                      <td className='px-3 py-2 font-medium text-foreground'>60 min</td>
                      <td className='px-3 py-2 text-foreground/70'>120 min</td>
                      <td className='px-3 py-2 text-foreground/70'>80% in 30 min</td>
                      <td className='px-3 py-2 text-foreground/70'>150 min</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>Weight</td>
                      <td className='px-3 py-2 font-medium text-foreground'>8.4 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>8.27 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>10.1 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>8 lbs</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Price</td>
                      <td className='px-3 py-2 font-medium text-foreground'>$259</td>
                      <td className='px-3 py-2 text-foreground/70'>$299</td>
                      <td className='px-3 py-2 text-foreground/70'>$299</td>
                      <td className='px-3 py-2 text-foreground/70'>$249</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The <strong>Bluetti EB3A</strong> wins on output (600W
                continuous) and has faster 30-minute 80% charging. The{' '}
                <strong>Jackery 300 Plus</strong> matches the River 3 on
                weight but charges much slower. The <strong>Anker 521</strong>{' '}
                is cheaper but has only 200W output. For most buyers, the
                River 3 hits the best balance of size, output, and charging
                speed. If you need more real-world output for small
                appliances, the EB3A is worth the extra $40.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy the EcoFlow River 3
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>Campers and weekend adventurers</strong> who need a light, portable power source.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>CPAP users</strong> who want reliable overnight power during outages or camping.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>California renters</strong> who want cheap insurance against short PSPS events.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>Remote workers</strong> needing a UPS for a laptop and router during brief outages.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>First-time power station buyers</strong> testing the category on a tight budget.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Skip it if you need to run a refrigerator for more than an
                hour or two, if you need whole-home backup, or if you&apos;re
                trying to capture TOU arbitrage value.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Can the River 3 run a CPAP overnight?</h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. A typical CPAP at 30-60W runs for 4-8 hours on a single charge. Using DC output instead of AC adds another 20-30% runtime.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>What can it power during an outage?</h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Phones (30+ charges), laptops (3-5 charges), a Wi-Fi router (8-15 hours), LED lights (10-20 hours), or a small fan. Not enough for long fridge runtime.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>How does X-Boost work?</h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    It briefly reduces output voltage so the 300W inverter can handle up to 600W from resistive loads. It doesn&apos;t work with motor-driven tools or sensitive electronics.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>River 3 vs River 2?</h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    River 3 has faster charging (60 vs 70 min), a slightly lighter chassis, and a refreshed app. Similar overall performance — buy new units as the River 3.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Battery lifespan?</h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    3,000 cycles to 80% original capacity. At one cycle per day, 8+ years. Typical home use will easily exceed the 5-year warranty.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Car charging?</h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, via 12V car input. Roughly 100W real-world input, full recharge in 2.5-3 hours. Can stack with solar + AC simultaneously.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Bottom Line</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow River 3 is the easiest-to-recommend power station
                under $300. It gets the fundamentals right — LFP chemistry,
                X-Boost for higher loads, 60-minute recharge, true portability
                — and wraps them in the best software in the category. For
                California campers, CPAP users, and homeowners who want a
                cheap insurance policy against short outages, the River 3 is
                the obvious pick. It won&apos;t replace a larger unit for
                serious home backup, but at $259 (and often $199 on promo),
                it doesn&apos;t need to. It just needs to be good at what it
                is — and it is.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Final Verdict"
              verdict="The best entry-level LFP power station of 2026. Check current pricing — River 3 regularly drops below $220 during promotional windows."
              source="river-3"
              variant="final"
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how the River 3 compares to the Jackery 300 Plus, Bluetti EB3A, and Anker 521.
              </p>
              <Link href='/reviews/best-portable-power-stations' className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'>
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link href='/reviews/best-portable-power-stations' className='text-primary hover:underline font-medium inline-flex items-center gap-2'>
                <ArrowLeft className='h-4 w-4' />
                All Power Stations
              </Link>
              <Link href='/blog' className='text-primary hover:underline font-medium inline-flex items-center gap-2'>
                Read Our Blog
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source="river-3" />
    </ReviewLayout>
  );
}
