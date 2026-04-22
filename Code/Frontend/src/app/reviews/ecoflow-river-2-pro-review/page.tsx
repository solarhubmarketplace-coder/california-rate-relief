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

const PRODUCT_KEY = 'ecoflow-river-2-pro';

export const metadata: Metadata = {
  title:
    'EcoFlow River 2 Pro Review 2026: The 768Wh LFP Portable for Camping and CPAP',
  description:
    'In-depth EcoFlow River 2 Pro review — 768 Wh LFP, 800W output (1,600W X-Boost), 220W solar, 70-minute full recharge, 17 lbs. How the $499 River 2 Pro performs for California PSPS outages, multi-day CPAP, and long camping trips.',
  alternates: { canonical: '/reviews/ecoflow-river-2-pro-review' },
  openGraph: {
    title: 'EcoFlow River 2 Pro Review 2026: The 768Wh LFP Portable for Camping and CPAP',
    description:
      'Hands-on review of the EcoFlow River 2 Pro — 768 Wh LFP, 800W continuous output, 220W solar input, 70-minute full recharge. The best mid-capacity LFP power station under $500?',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'EcoFlow River 2 Pro Review',
  reviewBody:
    'The EcoFlow River 2 Pro delivers 768 Wh of LFP battery capacity with 800W continuous output (1,600W X-Boost for resistive loads), 220W solar input, and a full 0-100% recharge in 70 minutes. At $499 MSRP and 17 lbs, it is the best-value mid-capacity portable for California homeowners who want real outage insurance plus camping usability.',
  datePublished: '2026-04-22',
  author: { '@type': 'Organization', name: 'GreenVerdict', url: 'https://ratereliefca.com' },
  publisher: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'EcoFlow River 2 Pro',
    brand: { '@type': 'Brand', name: 'EcoFlow' },
    description:
      'Portable power station with 768 Wh LiFePO4 battery, 800W AC output, 1,600W X-Boost, 220W solar input, and 70-minute full recharge.',
    offers: { '@type': 'Offer', price: '499', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.7', bestRating: '5', worstRating: '1' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does the River 2 Pro run a CPAP machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With 768 Wh of capacity, the River 2 Pro runs a typical CPAP (30-60W without humidifier) for 14-24 hours on a single charge. For humidifier use (which can push draw to 80-100W), expect 8-12 hours. Using DC output instead of AC adds another 20% runtime.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the River 2 Pro run a refrigerator during a PSPS outage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for roughly 6-8 hours. A full-size refrigerator pulls 100-150W average with compressor cycling, so the River 2 Pro\'s 768 Wh capacity delivers meaningful fridge runtime. For single-night PSPS events, this is often enough to prevent food spoilage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is X-Boost and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'X-Boost is EcoFlow\'s technology that allows the 800W continuous inverter to handle up to 1,600W from resistive loads (hair dryers, coffee makers, space heaters) by briefly reducing output voltage. It does not work with motor-driven appliances or sensitive electronics, but meaningfully expands what you can plug in.',
      },
    },
    {
      '@type': 'Question',
      name: 'River 2 Pro vs the base River 3 Plus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The River 2 Pro has significantly more capacity (768 Wh vs 286 Wh base, 572 Wh fully expanded on the Plus), a higher continuous inverter (800W vs 600W), and similar solar input. The River 3 Plus is lighter and adds the optional expansion battery. For pure capacity-per-dollar, the River 2 Pro wins — $499 vs $678 for a fully expanded 3 Plus.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the battery lifespan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LFP chemistry rated for 3,000 cycles to 80% original capacity. At one cycle per day, roughly 8 years. For typical home backup or camping use (30-60 cycles per year), the battery will easily outlast the 5-year warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run it at night without fan noise waking me up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, during normal discharge below 400W the unit is effectively silent. Fans only engage during fast charging or sustained high-load output. For CPAP use overnight, the unit runs silently — just charge it before bed, not during.',
      },
    },
  ],
};

export default function EcoFlowRiver2ProReview() {
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
              <span className='text-foreground font-medium'>EcoFlow River 2 Pro</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Product Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                EcoFlow River 2 Pro Review 2026: The 768Wh LFP Portable for Camping and CPAP
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
              badge="Best Mid-Capacity Pick"
              rating={4.7}
              verdict="The EcoFlow River 2 Pro hits the sweet spot at 768 Wh / 800W / $499. Enough capacity to run a fridge for 6-8 hours, a CPAP machine all night with margin, or a laptop and router for 2+ days — without the 30+ lb weight of step-up units."
              pros={[
                'Multi-day CPAP and medical device backup',
                'Overnight PSPS refrigerator protection',
                'Full-featured weekend camping power',
              ]}
              cons={['Not enough for multi-day whole-home backup', '17 lbs is a step up from ultra-portable units']}
              source="river-2-pro"
              variant="top"
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>Quick Verdict</h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.7</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The River 2 Pro is the best-value unit in the 500-800 Wh
                category. 768 Wh of LFP capacity is enough to meaningfully
                bridge a PSPS event — 6-8 hours of refrigerator, an entire
                night of CPAP, or a couple of days of lights, router, and
                laptop. The 800W continuous inverter handles most household
                appliances, and the 1,600W X-Boost extends that to things
                like coffee makers and small space heaters. At $499 MSRP, it
                is priced below the 1 kWh units but offers roughly 75% of
                their real-world utility. For California owners who want
                outage insurance without climbing into the $1,000+ tier,
                this is the unit to buy.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>Best for:</p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Overnight PSPS fridge + CPAP</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Long camping trips (3-5 days)</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Remote work UPS and backup</li>
                  </ul>
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>Not ideal for:</p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Multi-day whole-home backup</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Running central AC or ovens</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Light-weight hiking or backpacking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>Key Specifications</h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Battery className='h-4 w-4 text-primary' />Capacity</td><td className='px-4 py-3 text-foreground/80'>768 Wh</td></tr>
                    <tr><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Zap className='h-4 w-4 text-primary' />AC Output</td><td className='px-4 py-3 text-foreground/80'>800W continuous / 1,600W X-Boost</td></tr>
                    <tr className='bg-muted/30'><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Sun className='h-4 w-4 text-primary' />Solar Input</td><td className='px-4 py-3 text-foreground/80'>220W max (MPPT)</td></tr>
                    <tr><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Zap className='h-4 w-4 text-primary' />AC Charging</td><td className='px-4 py-3 text-foreground/80'>0-100% in 70 min</td></tr>
                    <tr className='bg-muted/30'><td className='px-4 py-3 font-medium text-foreground'>Battery Type</td><td className='px-4 py-3 text-foreground/80'>LiFePO4 (LFP)</td></tr>
                    <tr><td className='px-4 py-3 font-medium text-foreground'>Cycle Life</td><td className='px-4 py-3 text-foreground/80'>3,000 cycles to 80%</td></tr>
                    <tr className='bg-muted/30'><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Shield className='h-4 w-4 text-primary' />Weight</td><td className='px-4 py-3 text-foreground/80'>17 lbs (7.8 kg)</td></tr>
                    <tr><td className='px-4 py-3 font-medium text-foreground'>Dimensions</td><td className='px-4 py-3 text-foreground/80'>10.6 x 10.2 x 8.9 in</td></tr>
                    <tr className='bg-muted/30'><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Zap className='h-4 w-4 text-primary' />Connectivity</td><td className='px-4 py-3 text-foreground/80'>Wi-Fi, Bluetooth, EcoFlow App</td></tr>
                    <tr><td className='px-4 py-3 font-medium text-foreground'>Outlets</td><td className='px-4 py-3 text-foreground/80'>4x AC, 1x USB-C (100W), 2x USB-A, 1x Car</td></tr>
                    <tr className='bg-muted/30'><td className='px-4 py-3 font-medium text-foreground'>UPS Switchover</td><td className='px-4 py-3 text-foreground/80'>&lt;30ms</td></tr>
                    <tr><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Sun className='h-4 w-4 text-primary' />Operating Temp</td><td className='px-4 py-3 text-foreground/80'>14-104&deg;F</td></tr>
                    <tr className='bg-muted/30'><td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'><Shield className='h-4 w-4 text-primary' />Warranty</td><td className='px-4 py-3 text-foreground/80'>5 years</td></tr>
                    <tr><td className='px-4 py-3 font-medium text-foreground'>Price (MSRP)</td><td className='px-4 py-3 text-foreground/80 font-semibold'>$499</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Design &amp; Build Quality</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 17 pounds, the River 2 Pro is the heaviest of the River
                series but still fits in the &quot;portable&quot; category —
                you can carry it comfortably with one hand, though you&apos;ll
                notice it more than the 8.4-lb base River 3. The unit is
                slightly taller than the smaller Rivers to accommodate the
                larger battery pack, but the footprint stays compact enough
                for a small shelf or countertop. The integrated carry handle
                is sturdy, the rubberized feet prevent slipping, and the LCD
                is bright and clear.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EcoFlow&apos;s design language carries through from the rest
                of the lineup: clean lines, black-and-silver aesthetic, and
                clearly labeled ports. Nothing feels cheap. For a $499 unit
                competing against Amazon-brand knockoffs, the build quality
                is a meaningful differentiator.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Battery &amp; Capacity</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                768 Wh of LFP capacity is the inflection point at which a
                power station becomes genuinely useful for home backup
                scenarios. For comparison: a standard full-size refrigerator
                uses roughly 100-150W average (with compressor cycling)
                and will run on the River 2 Pro for 6-8 hours on a single
                charge. For the typical 12-hour overnight PSPS event, that
                means food safety through the outage with room to spare.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Other real-world runtimes: a CPAP machine (30-60W) runs for
                14-24 hours. A Wi-Fi router (10-15W) runs for 50+ hours. A
                laptop (40-60W) charges 8-12 times. A 55-inch LED TV (80W)
                runs for roughly 9 hours. These are all meaningful numbers
                for an extended outage — enough to bridge most PSPS events
                without needing to supplement with solar.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                LFP chemistry delivers 3,000 cycles to 80% original capacity.
                At one cycle per day, that is roughly 8 years before
                meaningful degradation. For typical home backup use (30-50
                cycles per year) or weekend camping (maybe 25-30 cycles per
                year), the battery will easily last well past the 5-year
                warranty.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Charging Speed</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The River 2 Pro uses EcoFlow&apos;s X-Stream fast charging
                for a full 0-100% recharge in 70 minutes from a wall outlet.
                That is fast — competitors at this capacity often take 2+
                hours. If a PSPS warning drops at 3 PM, you can be fully
                topped off well before sunset.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar input is capped at 220W, matching the River 3 Plus. In
                practice, pair the unit with a single 200W panel (or a pair
                of 100W panels) and you&apos;ll recharge in roughly 4 hours
                of California sun. For extended off-grid use, 220W is
                enough to stay fully topped up during daylight while still
                running some loads. For emergency recharge during a multi-day
                outage, it is a little under-powered compared to the EcoFlow
                Delta 2&apos;s 500W input — so if extended PSPS events are a
                real concern, consider stepping up.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Car charging via 12V input delivers roughly 100W real-world
                input — useful for top-ups on a road trip but not practical
                for full recharges. AC + solar + car can be stacked
                simultaneously, which is helpful in a pinch.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Output &amp; Ports</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 800W continuous inverter is the real story here. This is
                the threshold at which the unit can run most
                single-appliance loads without workarounds: small
                microwaves, blenders, desktop computers, toasters, and
                table saws all work directly. The X-Boost feature extends
                this to 1,600W for resistive loads — meaning a 1,100W hair
                dryer, a 1,500W space heater, or a 1,200W coffee maker all
                work fine.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Where 800W falls short: central AC units (need 2,000W+),
                electric ovens (need 3,000W+), and pumps or power tools
                with big starting loads. For those, you need a 1,800W+
                unit like the Anker SOLIX C1000.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Port layout: four AC outlets, one USB-C at 100W (laptop
                fast-charge), two USB-A ports, and a 12V car outlet. Enough
                for a typical outage scenario with fridge + laptop + phones
                + router + lamp all running simultaneously.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Smart Features &amp; App</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow app on the River 2 Pro provides the full suite:
                real-time power monitoring, individual outlet control,
                charging speed adjustment (quiet vs fast), firmware updates,
                and scheduled charging windows for TOU optimization. The
                app is the gold standard in the portable power station
                market — responsive, stable, and feature-rich.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                UPS pass-through with sub-30ms switchover keeps desktops,
                routers, and TVs running through grid blips. For home
                offices in California&apos;s increasingly unstable grid,
                this is a meaningful everyday feature beyond just
                emergency use.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Noise Level</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Silent below 400W output. Fans engage during fast charging
                or sustained high-load discharge. The quiet charging mode
                in the app caps charging at ~300W, which keeps the unit
                nearly silent but doubles recharge time. For overnight
                use (CPAP, Wi-Fi, lights), the unit runs completely silent
                during discharge — no concern for bedroom placement.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>California-Specific: PSPS Backup &amp; Medical Devices</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The River 2 Pro sits in a meaningful spot for California
                outage planning. At 768 Wh, it&apos;s big enough to matter
                but small enough to be truly portable.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>Single-Night PSPS Protection</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The majority of PSPS events last 12-24 hours. The River 2
                Pro covers this window well: a fridge runs for 6-8 hours
                (enough to bridge a single night), lights and Wi-Fi stay
                on for 2+ days, and a CPAP machine lasts well beyond a
                single night. If your primary goal is preventing food
                spoilage and keeping essential comms alive during typical
                PSPS events, this is the right size.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>Medical Device Backup</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For CPAP users, 768 Wh is a meaningful buffer. A typical
                CPAP at 30-60W runs for 14-24 hours on the River 2 Pro —
                two full nights or a night plus a day of recharge
                opportunity. With humidifier use, expect 8-12 hours. For
                sleep apnea patients in PSPS zones, the River 2 Pro is
                often the right first purchase: large enough to handle the
                outage reality, small enough to actually keep charged and
                ready.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>TOU Arbitrage Reality</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 768 Wh, TOU arbitrage math is modest: charging off-peak
                (12-25&cent;/kWh) and discharging on-peak (40-65&cent;/kWh)
                saves roughly $0.15-$0.35 per full cycle. Daily cycling
                would net $55-$130 per year — not a &quot;pays for itself&quot;
                story on its own, but a legitimate supplemental value
                alongside the outage protection. The app&apos;s scheduled
                charging makes this a one-time setup. For a deeper look at
                California TOU rate structures, see our{' '}
                <Link href='/blog/sdge-time-of-use-rates' className='text-primary hover:underline'>
                  SDG&amp;E time-of-use rates article
                </Link>
                .
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>SGIP Rebate Reality</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SGIP general market rebates ($150/kWh) require permanent
                installation, so portable units like the River 2 Pro are
                typically not eligible. Equity customers (low-income, high
                fire-threat districts, medically vulnerable) may have more
                flexible pathways. Verify eligibility with your utility. At
                $499 MSRP, the math doesn&apos;t depend on rebates — the
                unit pays for itself in one prevented food spoilage event.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Pros &amp; Cons</h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />768 Wh runs a fridge for 6-8 hours</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />800W continuous handles real appliances</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />1,600W X-Boost for hair dryers, coffee makers</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />70-minute full recharge</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />220W solar input for off-grid use</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />LFP — 3,000 cycles, 5-year warranty</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Best-in-class EcoFlow app</li>
                    <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />Excellent dollar-per-Wh at $499</li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-800 dark:text-red-400 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />17 lbs — less portable than Rivers</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />No battery expansion</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />800W can&apos;t run central AC or oven</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />220W solar behind Delta 2&apos;s 500W</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />30ms UPS switchover</li>
                    <li className='flex items-start gap-2'><X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />Multi-day outages need solar or step-up</li>
                  </ul>
                </div>
              </div>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge="Ready to buy?"
                verdict="The River 2 Pro is in stock at EcoFlow.com. MSRP $499, with frequent drops to $379-$429 during promotional windows."
                source="river-2-pro"
                variant="mid"
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How It Compares</h2>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Feature</th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>River 2 Pro</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>River 3 Plus</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Bluetti AC180</th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>Jackery 700 Plus</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Capacity</td>
                      <td className='px-3 py-2 font-medium text-foreground'>768 Wh</td>
                      <td className='px-3 py-2 text-foreground/70'>286 Wh (572 expanded)</td>
                      <td className='px-3 py-2 text-foreground/70'>1,152 Wh</td>
                      <td className='px-3 py-2 text-foreground/70'>680 Wh</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>Output</td>
                      <td className='px-3 py-2 font-medium text-foreground'>800W / 1,600W</td>
                      <td className='px-3 py-2 text-foreground/70'>600W / 1,200W</td>
                      <td className='px-3 py-2 text-foreground/70'>1,800W / 2,700W</td>
                      <td className='px-3 py-2 text-foreground/70'>1,000W / 2,000W</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Full Charge</td>
                      <td className='px-3 py-2 font-medium text-foreground'>70 min</td>
                      <td className='px-3 py-2 text-foreground/70'>60 min</td>
                      <td className='px-3 py-2 text-foreground/70'>80 min</td>
                      <td className='px-3 py-2 text-foreground/70'>110 min</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>Weight</td>
                      <td className='px-3 py-2 font-medium text-foreground'>17 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>9.9 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>35 lbs</td>
                      <td className='px-3 py-2 text-foreground/70'>19 lbs</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Price</td>
                      <td className='px-3 py-2 font-medium text-foreground'>$499</td>
                      <td className='px-3 py-2 text-foreground/70'>$399</td>
                      <td className='px-3 py-2 text-foreground/70'>$899</td>
                      <td className='px-3 py-2 text-foreground/70'>$599</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The <strong>River 3 Plus</strong> is lighter but has less
                base capacity and lower output. The <strong>Bluetti
                AC180</strong> offers more capacity and much higher inverter
                output at a significantly higher price. The{' '}
                <strong>Jackery 700 Plus</strong> is similar in capacity but
                charges slower. Dollar-per-watt-hour, the River 2 Pro wins
                in this class.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Should Buy the River 2 Pro</h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-1 shrink-0' /><span><strong>CPAP users and medical device owners</strong> who need reliable overnight backup through PSPS events.</span></li>
                <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-1 shrink-0' /><span><strong>California homeowners in moderate PSPS zones</strong> who want fridge-stretching + essential circuits without climbing into the $1,000+ tier.</span></li>
                <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-1 shrink-0' /><span><strong>RV and van life users</strong> with 3-5 day trips and real appliance needs (coffee maker, small microwave).</span></li>
                <li className='flex items-start gap-2'><Check className='h-4 w-4 text-green-600 mt-1 shrink-0' /><span><strong>Remote workers</strong> running a home office through California&apos;s unstable grid via UPS pass-through.</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Skip it if you need to run a central AC or oven (step up to
                a 1,800W+ unit), if you need multi-day whole-home backup
                (look at Delta Pro 3), or if you&apos;re going hiking (the
                17 lbs becomes painful on the trail).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>How long does it run a CPAP?</h3>
                  <p className='text-foreground/80 leading-relaxed'>14-24 hours without humidifier, 8-12 hours with humidifier. DC output saves another 20%.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Can it run a refrigerator?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Yes — 6-8 hours. Enough for typical overnight PSPS events and food preservation.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>How does X-Boost work?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Reduces voltage to let the 800W inverter handle up to 1,600W from resistive loads. Not for motor tools or sensitive electronics.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>River 2 Pro vs River 3 Plus?</h3>
                  <p className='text-foreground/80 leading-relaxed'>River 2 Pro has 2.5x the capacity and a higher inverter. River 3 Plus is lighter and expandable. Dollar-per-Wh, the Pro wins.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Battery lifespan?</h3>
                  <p className='text-foreground/80 leading-relaxed'>3,000 cycles to 80% — roughly 8 years at daily use. Typical home use will easily exceed warranty.</p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>Fan noise at night?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Silent below 400W. Fans only spin on fast charge or high load. Fine for bedroom CPAP use.</p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Bottom Line</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow River 2 Pro is the best value mid-capacity power
                station on the market. 768 Wh is enough to meaningfully
                handle a PSPS event, 800W/1,600W inverter runs real
                appliances, and $499 is genuinely affordable for what you
                get. For California owners who need more than a camping
                battery but don&apos;t need whole-home backup, this is the
                unit to buy. The only real question is whether you need
                more capacity (step up to SOLIX C1000 or Delta 3 Plus) —
                and for most households, 768 Wh is enough.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Final Verdict"
              verdict="The best mid-capacity LFP power station under $500. Check current pricing — River 2 Pro regularly drops to $399 during promos."
              source="river-2-pro"
              variant="final"
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>See how the River 2 Pro compares to River 3 Plus, Bluetti AC180, and Jackery 700 Plus.</p>
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
      <StickyMobileCTA productKey={PRODUCT_KEY} source="river-2-pro" />
    </ReviewLayout>
  );
}
