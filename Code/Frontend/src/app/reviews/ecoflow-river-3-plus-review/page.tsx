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

const PRODUCT_KEY = 'ecoflow-river-3-plus';

export const metadata: Metadata = {
  title: 'EcoFlow River 3 Plus Review 2026: Upgraded LFP for $399',
  description:
    'Full EcoFlow River 3 Plus review — 286 Wh LFP (expandable to 572 Wh), 600W output (1,200W X-Boost), 220W solar, 60-minute recharge, 9.9 lbs. How does the $399 River 3 Plus compare to the base River 3?',
  alternates: {
    canonical: '/reviews/ecoflow-river-3-plus-review',
  },
  openGraph: {
    title: 'EcoFlow River 3 Plus Review 2026: Upgraded LFP for $399',
    description:
      'Hands-on review of the EcoFlow River 3 Plus — 286 Wh LFP (expandable to 572 Wh), 600W continuous output, expansion battery support. Is the $140 upgrade over the base River 3 worth it?',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'EcoFlow River 3 Plus Review',
  reviewBody:
    'The EcoFlow River 3 Plus delivers 286 Wh of LFP capacity (expandable to 572 Wh with a second battery module), a 600W continuous inverter (1,200W X-Boost), 220W solar input, and a full 0-100% recharge in 60 minutes. At $399 MSRP, it is the upgrade path from the base River 3 for buyers who want real-world utility from a small unit — including running most household appliances and capacity expansion for longer outages.',
  datePublished: '2026-04-22',
  author: { '@type': 'Organization', name: 'GreenReviewsHub', url: 'https://ratereliefca.com' },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'EcoFlow River 3 Plus',
    brand: { '@type': 'Brand', name: 'EcoFlow' },
    description:
      'Portable power station with 286 Wh LiFePO4 battery (expandable to 572 Wh), 600W AC output, 1,200W X-Boost, 220W solar input, and 60-minute full recharge.',
    offers: {
      '@type': 'Offer',
      price: '399',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.6', bestRating: '5', worstRating: '1' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the River 3 Plus worth the upgrade over the River 3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for most buyers. The River 3 Plus offers 2x the inverter output (600W vs 300W), slightly more capacity (286 vs 245 Wh), 2x the solar input (220W vs 110W), and can expand to 572 Wh with an optional battery. That extra $140 genuinely doubles what the unit can do. If you only need to charge phones and laptops, save the money and get the base River 3. If you want to run a microwave, coffee maker, or blender, the Plus is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the River 3 Plus run a refrigerator during a PSPS outage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For 2-3 hours. A standard refrigerator pulls 100-150W average with cycling. The River 3 Plus at 286 Wh keeps it running for about 2 hours, or 4 hours if you pair it with the 286 Wh expansion battery (572 Wh total). For longer fridge runtime, step up to the SOLIX C1000 or Delta 3 Plus.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the expansion battery work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EcoFlow sells a 286 Wh River 3 Plus Extra Battery that connects via a proprietary cable. Plug it in and the main unit automatically recognizes it and uses both batteries as a single 572 Wh pool. The expansion battery is slightly smaller than the main unit and adds roughly 8 lbs. It costs approximately $279 separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the battery lifespan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LFP chemistry rated for 3,000 cycles to 80% original capacity. At one cycle per day, that is roughly 8 years before meaningful degradation. For typical home backup use, the battery will easily outlast the 5-year warranty period.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does X-Boost work at 1,200W?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'X-Boost on the River 3 Plus can briefly handle up to 1,200W from resistive loads by reducing output voltage. This means you can power a 1,000W microwave, a 1,100W hair dryer, or a small space heater — all things that would trip the 600W continuous inverter. It does not work with motor-driven appliances or sensitive electronics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the River 3 Plus support UPS mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with a sub-30ms switchover. Plug it between your wall outlet and a desktop or router, and if the grid drops, the unit takes over automatically. The switchover is fast enough for most computers, routers, and TVs to continue running without reboot.',
      },
    },
  ],
};

export default function EcoFlowRiver3PlusReview() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link href='/reviews' className='hover:text-primary transition-colors'>Reviews</Link>
              <ChevronRight className='h-3 w-3' />
              <Link href='/reviews/best-portable-power-stations' className='hover:text-primary transition-colors'>Best Portable Power Stations</Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>EcoFlow River 3 Plus</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Product Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                EcoFlow River 3 Plus Review 2026: Upgraded LFP for $399
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>13 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Best Small-Format Expandable"
              rating={4.6}
              verdict="The EcoFlow River 3 Plus is the small-format power station that grows with you. 286 Wh base, expandable to 572 Wh, a genuine 600W inverter (1,200W X-Boost), and 220W solar input. At $399, it is the sweet spot for small-unit buyers who want real appliance support."
              pros={[
                'Expandable capacity for longer outages',
                'Real-world appliance support (microwave, coffee maker)',
                'Lightweight enough for camping and RV use',
              ]}
              cons={['Still too small for whole-home backup', 'Expansion battery adds $279 to total cost']}
              source="river-3-plus"
              variant="top"
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>Quick Verdict</h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.6</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The River 3 Plus takes everything right about the base River 3
                and doubles it where it matters: twice the inverter (600W vs
                300W), twice the solar input (220W vs 110W), and expandable
                capacity up to 572 Wh. That combination transforms the unit
                from a &quot;phone and laptop&quot; power station into one that
                can run a coffee maker, a microwave, or a space heater briefly —
                the appliances people actually want to use during an outage. At
                $399 MSRP, it sits between the budget River 3 ($259) and the
                mid-size River 2 Pro ($499), and for most California homeowners
                who want outage insurance without committing to a 30-lb unit,
                this is the smart middle ground.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>Best for:</p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Small-format expandable backup</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />RV and camping with real appliances</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />CPAP + fridge stop-gap during PSPS</li>
                  </ul>
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>Not ideal for:</p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Whole-home backup</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Multi-day outages without solar</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Heavy TOU arbitrage (capacity too small)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>Key Specifications</h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Battery className='h-4 w-4 text-primary' />Capacity</td>
                      <td className='px-4 py-3 text-foreground/80'>286 Wh (expandable to 572 Wh)</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Zap className='h-4 w-4 text-primary' />AC Output</td>
                      <td className='px-4 py-3 text-foreground/80'>600W continuous / 1,200W X-Boost</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Sun className='h-4 w-4 text-primary' />Solar Input</td>
                      <td className='px-4 py-3 text-foreground/80'>220W max (MPPT)</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Zap className='h-4 w-4 text-primary' />AC Charging</td>
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
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Shield className='h-4 w-4 text-primary' />Weight</td>
                      <td className='px-4 py-3 text-foreground/80'>9.9 lbs (4.5 kg)</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>Dimensions</td>
                      <td className='px-4 py-3 text-foreground/80'>10.6 x 8.3 x 9.1 in</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Zap className='h-4 w-4 text-primary' />Connectivity</td>
                      <td className='px-4 py-3 text-foreground/80'>Wi-Fi, Bluetooth, EcoFlow App</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>Outlets</td>
                      <td className='px-4 py-3 text-foreground/80'>4x AC, 1x USB-C (100W), 2x USB-A, 1x Car</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>UPS Switchover</td>
                      <td className='px-4 py-3 text-foreground/80'>&lt;30ms</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Sun className='h-4 w-4 text-primary' />Operating Temp</td>
                      <td className='px-4 py-3 text-foreground/80'>14-104&deg;F</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Shield className='h-4 w-4 text-primary' />Warranty</td>
                      <td className='px-4 py-3 text-foreground/80'>5 years</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>Price (MSRP)</td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>$399 base / $678 with expansion battery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Design &amp; Build Quality</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The River 3 Plus looks nearly identical to the base River 3 —
                same boxy silhouette, same rugged handle, same bright LCD. At
                9.9 lbs, it&apos;s a pound and a half heavier than the base
                model, which comes from the larger inverter transformer and
                slightly more battery capacity. The unit still fits in a
                normal shelf or cabinet, still carries easily with one hand,
                and still feels premium for its price point.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The expansion port for the optional second battery is a new
                addition on the back panel — a proprietary connector with
                robust retention. EcoFlow has been refining their expansion
                ecosystem for years, and the River 3 Plus inherits the
                battle-tested designs from the Delta line. The port is
                covered with a rubberized flap when not in use to keep dust
                out.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Battery &amp; Capacity</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 286 Wh base, the River 3 Plus has about 17% more capacity
                than the base River 3&apos;s 245 Wh — not a huge absolute
                jump, but when combined with the expansion battery option,
                you can double it to 572 Wh. That 572 Wh number is genuinely
                useful: it can run a full-size refrigerator for about 4 hours,
                keep a CPAP machine going for 10-15 hours, or power a home
                office (laptop + monitor + router + lighting) for 8-12 hours.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The LFP chemistry is the same 3,000-cycle battery across both
                the main unit and the expansion battery. You can use either
                independently too — if you take the main unit camping, the
                expansion battery doesn&apos;t go to waste sitting at home;
                it is just unused until you reconnect.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A practical note: the expansion battery costs roughly $279.
                So the total expanded system is about $678. At that price
                point, you&apos;re within striking distance of a base Anker
                SOLIX C1000 at 1,056 Wh. If expansion is the plan from day
                one, do the math carefully — the C1000 may be the better
                value.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Charging Speed</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Like its smaller sibling, the River 3 Plus uses X-Stream
                charging to hit 0-100% in 60 minutes from AC. When the
                expansion battery is attached, the total capacity is larger,
                and full charge time extends to roughly 2 hours — still
                faster than most competitors even with the doubled capacity.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar input jumps from 110W on the base unit to 220W on the
                Plus. That means you can pair it with a pair of 100W panels
                or a single 200W panel for a full recharge in roughly 2
                hours of California sun. 220W makes the unit much more
                viable for extended off-grid use — you can stay at capacity
                indefinitely during daylight with moderate panel sizing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Output &amp; Ports</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The headline upgrade vs the base River 3 is the inverter:
                600W continuous, 1,200W X-Boost. This is the threshold at
                which the unit stops being &quot;phones and laptops&quot; and
                starts being able to run real appliances. A 1,000W microwave?
                Yes, via X-Boost. A 1,100W hair dryer? Yes. A 600W blender?
                Easy. A 500W coffee maker? No problem. The practical
                difference is substantial — if you want a small unit that
                can run the kitchen appliances you actually use, the Plus is
                the minimum tier.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Port layout: four AC outlets (one more than the base unit),
                one USB-C at 100W (enough for a MacBook Pro 14&quot;), two
                USB-A, and a 12V car outlet. Enough for a typical outage
                scenario running a router, a laptop, two phones, and a
                lamp simultaneously.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Smart Features &amp; App</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow app is the gold standard in the category. You
                get real-time monitoring of every port individually, adjustable
                charging speeds (quiet mode vs fast mode), firmware updates,
                scheduled charging windows, and UPS pass-through monitoring.
                The app even tracks cumulative cycles on the battery and
                gives you an estimated remaining life.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                One nice feature: you can set the unit to charge only during
                off-peak TOU hours via the app&apos;s scheduled charging
                window. For California owners on a TOU-C or E-TOU plan,
                this is a one-click way to always charge cheap.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Noise Level</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Effectively silent during discharge below about 400W. Fans
                engage during X-Stream fast charging and during sustained
                loads above 400W. The fan noise is audible but not
                disruptive — comparable to a desk fan on medium. The quiet
                charging mode in the app drops charge speed to about 300W,
                which eliminates fan noise entirely at the cost of doubling
                recharge time.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>California-Specific: Outage Insurance &amp; Solar Pairing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The River 3 Plus is positioned as a small-format outage
                insurance policy. It doesn&apos;t pretend to be a whole-home
                backup — it can&apos;t run your central AC or electric
                oven. What it can do is meaningful:
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>PSPS Fridge-Stretching</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                During a PSPS event, a refrigerator is the single biggest
                concern — spoiled food costs hundreds of dollars. The River
                3 Plus can cycle a fridge on and off for 2-3 hours on the
                base capacity, or 4-5 hours with the expansion battery. For
                the typical 12-24 hour PSPS event, pair the unit with a
                single 200W solar panel and you can often keep the fridge
                running indefinitely during daylight, with a couple of
                hours of coverage overnight from the stored energy.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>Medical Device &amp; Remote Work</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For CPAP users, the River 3 Plus&apos;s 286 Wh base supports
                8-15 hours of CPAP runtime — a full night, with margin. For
                remote workers, the 600W inverter handles a laptop, monitor,
                router, and lamp simultaneously. The UPS pass-through means
                when the grid flickers, there&apos;s no reboot, no lost
                work.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>SGIP Rebate Reality Check</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The SGIP general market rebate ($150/kWh) typically requires
                permanent installation and interconnection, so portable
                units like the River 3 Plus are not ordinarily eligible.
                Equity customers in high fire-threat districts may have
                more flexible pathways. Verify eligibility with your
                utility. For a deeper look at California&apos;s storage
                incentive landscape, see our article on{' '}
                <Link href='/blog/nem-3-california-still-worth-it' className='text-primary hover:underline'>
                  NEM 3.0 and battery economics
                </Link>
                .
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>TOU Scheduling</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The app&apos;s scheduled charging feature is a small but
                legitimate California value. Set the unit to charge only
                during the super off-peak window (typically midnight to 6
                AM), and you&apos;re paying 15-20&cent;/kWh instead of the
                40-60&cent;/kWh peak rate. At 286 Wh, the savings are
                modest — pennies per cycle — but over 100 cycles per year,
                it adds up. Combined with outage protection and CPAP/medical
                backup, the total value proposition is solid.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Pros &amp; Cons</h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Expandable to 572 Wh</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />600W inverter handles real appliances</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />1,200W X-Boost for microwave/hair dryer</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />220W solar input (2x base River 3)</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />60-minute full recharge</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Best-in-class app with TOU scheduling</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />LFP — 3,000 cycles / 5-yr warranty</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Quiet charging mode in app</li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-800 dark:text-red-400 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Still too small for whole-home backup</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Expansion battery is proprietary ($279)</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Fully expanded nears SOLIX C1000 price</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />No AC-in + solar simultaneous limit</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Heavier (9.9 lbs) than base River 3</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />30ms UPS switchover</li>
                  </ul>
                </div>
              </div>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge="Ready to buy?"
                verdict="The River 3 Plus is in stock at EcoFlow.com. MSRP $399 base, $678 bundled with expansion battery. Promo pricing occasionally drops both 15-25%."
                source="river-3-plus"
                variant="mid"
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How It Compares</h2>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Feature</th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>River 3 Plus</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>River 3</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>River 2 Pro</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Bluetti EB3A</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Capacity</td>
                      <td className='px-3 py-2 font-medium text-foreground'>286 Wh (572 Wh expanded)</td>
                      <td className='px-3 py-2 text-foreground/70'>245 Wh</td>
                      <td className='px-3 py-2 text-foreground/70'>768 Wh</td>
                      <td className='px-3 py-2 text-foreground/70'>268 Wh</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>Output</td>
                      <td className='px-3 py-2 font-medium text-foreground'>600W / 1,200W</td>
                      <td className='px-3 py-2 text-foreground/70'>300W / 600W</td>
                      <td className='px-3 py-2 text-foreground/70'>800W / 1,600W</td>
                      <td className='px-3 py-2 text-foreground/70'>600W / 1,200W</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Solar Input</td>
                      <td className='px-3 py-2 font-medium text-foreground'>220W</td>
                      <td className='px-3 py-2 text-foreground/70'>110W</td>
                      <td className='px-3 py-2 text-foreground/70'>220W</td>
                      <td className='px-3 py-2 text-foreground/70'>200W</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>Weight</td>
                      <td className='px-3 py-2 font-medium text-foreground'>9.9 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>8.4 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>17 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>10.1 lbs</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Price</td>
                      <td className='px-3 py-2 font-medium text-foreground'>$399</td>
                      <td className='px-3 py-2 text-foreground/70'>$259</td>
                      <td className='px-3 py-2 text-foreground/70'>$499</td>
                      <td className='px-3 py-2 text-foreground/70'>$299</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The <strong>base River 3</strong> is the right pick if you
                only need to charge phones and laptops — it saves $140. The{' '}
                <strong>River 2 Pro</strong> offers 2.5x the capacity for
                $100 more, but at 17 lbs it loses the true-portable edge.
                The <strong>Bluetti EB3A</strong> matches the Plus on
                inverter output but can&apos;t expand. If expandability
                matters to you, the River 3 Plus is the only option in
                this class.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Should Buy the River 3 Plus</h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>California homeowners wanting modular backup</strong> — start at 286 Wh, add the expansion later if needs grow.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>RV campers</strong> who need real appliance power (microwave, coffee maker) in a portable format.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>Remote workers</strong> running a laptop, monitor, and router on UPS protection.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span><strong>PSPS-vulnerable renters</strong> who need fridge-stretching capability during typical overnight outages.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Skip it if you&apos;re 100% sure you only need to charge
                small electronics — the base River 3 saves you money. Skip
                it if you need a bigger base unit — the River 2 Pro is a
                better fit for &gt;500 Wh needs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Is the Plus worth the upgrade over the River 3?</h3>
                  <p className='text-foreground/80 leading-relaxed'>For most buyers yes — 2x inverter, 2x solar, and expansion capability for $140 more.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Can it run a refrigerator?</h3>
                  <p className='text-foreground/80 leading-relaxed'>2-3 hours base, 4-5 hours with expansion battery. Longer runtime needs a bigger unit.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>How does the expansion battery work?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Proprietary cable connection. Automatically recognized and pooled into a single 572 Wh battery. Costs about $279.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Battery lifespan?</h3>
                  <p className='text-foreground/80 leading-relaxed'>3,000 cycles to 80% — roughly 8 years at daily use. Expansion battery is same chemistry.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>X-Boost at 1,200W?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Briefly reduces voltage to handle resistive loads up to 1,200W. Works with microwaves, hair dryers, coffee makers. Not with motors or sensitive electronics.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>UPS mode?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Yes, sub-30ms switchover. Keeps desktops and routers running through grid blips.</p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Bottom Line</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The River 3 Plus is a thoughtfully upgraded version of the
                base River 3 — not a marketing rebrand. Twice the inverter,
                twice the solar input, and expansion capability genuinely
                change what the unit can do. For California buyers who want
                a small-format backup that can run real appliances and scale
                with their needs, it&apos;s the clearest pick at $399. Just
                do the math honestly: if you&apos;re going to buy the
                expansion battery immediately anyway, the total cost climbs
                toward the SOLIX C1000 territory and you should consider
                stepping up.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Final Verdict"
              verdict="The best small-format expandable power station of 2026. Check current EcoFlow pricing for the base unit and expansion battery bundles."
              source="river-3-plus"
              variant="final"
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how the River 3 Plus compares to the base River 3, River 2 Pro, and Bluetti EB3A.
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
      <StickyMobileCTA productKey={PRODUCT_KEY} source="river-3-plus" />
    </ReviewLayout>
  );
}
