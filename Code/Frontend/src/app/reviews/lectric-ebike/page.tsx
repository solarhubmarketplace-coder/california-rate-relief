import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { AffiliateCTABox } from '@/components/reviews/AffiliateCTABox';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import { BuyButton } from '@/components/reviews/BuyButton';
import { StickyMobileCTA } from '@/components/reviews/StickyMobileCTA';
import { ComparisonTable } from '@/components/reviews/ComparisonTable';
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
  ChevronRight,
} from 'lucide-react';

// Brand-level affiliate CTA, for overall Lectric brand pick
const PRIMARY_PRODUCT_KEY = 'lectric-xp-3';

export const metadata: Metadata = {
  title:
    'Lectric eBikes Review 2026: Full Lineup Compared (XP, XPedition, XP Lite, ONE)',
  description:
    'Honest Lectric eBikes review covering the full 2026 lineup: XP 3.0, XP Lite 2.0, XPedition 2.0, XPress 750, and Lectric ONE. Direct-to-consumer value, 1-year warranty, and how Lectric compares to Rad Power and Aventon.',
  alternates: {
    canonical: '/reviews/lectric-ebike',
  },
  openGraph: {
    title: 'Lectric eBikes Review 2026: Full Lineup Compared',
    description:
      'Every Lectric e-bike. XP 3.0, XP Lite 2.0, XPedition 2.0, XPress 750, Lectric ONE, reviewed and compared. Best value pick and premium pick.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Lectric eBike Lineup 2026',
  description:
    'Complete comparison of the 2026 Lectric eBikes lineup: XP 3.0, XP Lite 2.0, XPedition 2.0, XPress 750, and Lectric ONE.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Lectric XP 3.0',
      url: 'https://ratereliefca.com/reviews/lectric-ebike#xp-3',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Lectric XP Lite 2.0',
      url: 'https://ratereliefca.com/reviews/lectric-ebike#xp-lite',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Lectric XPedition 2.0',
      url: 'https://ratereliefca.com/reviews/lectric-ebike#xpedition',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Lectric XPress 750',
      url: 'https://ratereliefca.com/reviews/lectric-ebike#xpress',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Lectric ONE',
      url: 'https://ratereliefca.com/reviews/lectric-ebike#one',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are Lectric eBikes any good?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lectric eBikes is one of the top-selling e-bike brands in North America with over 500,000 bikes sold since 2019. Their direct-to-consumer model keeps prices low ($799-$2,199), and the XP 3.0 is consistently ranked among the best-value folding e-bikes. The trade-offs are a 1-year warranty (shorter than Aventon\'s 2 years or Trek\'s lifetime frame warranty) and mostly hub-drive motors instead of torque-sensing mid-drives.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are Lectric eBikes made?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lectric eBikes are designed in Phoenix, Arizona, where the company is headquartered. Final manufacturing and assembly happens in China. Quality control and warranty claims are handled by Lectric\'s Phoenix customer service team, which is a meaningful differentiator vs drop-ship brands with no U.S. Presence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Lectric eBike has the longest range?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Lectric XPedition 2.0 has the longest range. up to 150 miles with the optional dual-battery configuration (2x 672 Wh). For single-battery bikes, the Lectric ONE offers the longest verified range at 60+ miles due to its Pinion mid-drive efficiency. The XP 3.0 gets 45-65 miles per charge in real-world conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Lectric eBikes qualify as California Class 2 or Class 3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All Lectric e-bikes ship in California as Class 2 (throttle + pedal assist, 20 mph max) by default to stay legal on bike lanes and multi-use paths. Most models can be user-unlocked to Class 3 (28 mph pedal assist) through the LCD display settings, but riders should unlock at their own risk since Class 3 restricts access to sidewalks and certain paths. Class 3 also requires a helmet in California.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is the Lectric eBike warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lectric eBikes carries a 1-year comprehensive warranty on frame, motor, battery, and electronics. That is shorter than Aventon (2 years) or Rad Power (1 year comprehensive + 2 years on frame) but consistent with most direct-to-consumer e-bike brands at this price point. The battery is warrantied for 1 year or 800 charge cycles, whichever comes first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Lectric eBikes pre-assembled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lectric eBikes ship 85% pre-assembled. Owner assembly takes 15-30 minutes and involves unfolding the bike, attaching the front wheel, mounting the pedals, adjusting the handlebars, and pumping up the tires. No special tools beyond the included multi-tool are needed. Shipping is free within the contiguous U.S.',
      },
    },
  ],
};

export default function LectricEbikeHub() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
              <span className='text-foreground font-medium'>
                Lectric eBikes
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Brand Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Lectric eBikes Review 2026: Full Lineup Compared (XP, XPedition, XP Lite, ONE)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>16 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* Above-the-fold brand CTA — XP 3.0 as value pick */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Best Value Pick'
              rating={4.6}
              verdict='The Lectric XP 3.0 at $999 is the single best-value folding e-bike of 2026 — 500W motor, 65-mile range, 28 mph unlocked, and ships 85% assembled. For most buyers, it is the right pick in the Lectric lineup.'
              pros={[
                'Commuters who need a folding bike',
                'Budget-conscious first-time e-bike buyers',
                'Apartment dwellers without bike storage',
              ]}
              cons={['Serious off-road or gravel riding', 'Riders over 6\'2" who want a full-size frame']}
              source='lectric-ebike-hub'
              variant='top'
            />

            {/* Intro */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Lectric eBikes went from a Phoenix garage startup in 2019 to one of the three best-selling e-bike brands in North America — selling more than 500,000 bikes in six years without a single retail store. The entire business runs direct-to-consumer online, which is how they can offer a full-featured folding e-bike at $999 when Rad Power charges $1,999 and traditional bike shops charge $2,500+.
              </p>
              <p className='text-lg text-foreground/80 leading-relaxed mb-8'>
                The question for 2026 is: which Lectric do you actually buy? The lineup has expanded from one model (the original XP) to a full range, folding commuter, lightweight step-through, electric cargo, premium urban, and a belt-drive high-end flagship. We rode the full 2026 range and this guide breaks down who each bike is for.
              </p>
            </div>

            {/* Comparison Table */}
            <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
              Lectric eBike Lineup Comparison
            </h2>
            <ComparisonTable
              source='lectric-ebike-hub'
              specLabels={['Motor', 'Top Speed', 'Range', 'Weight', 'Best For', 'Price']}
              products={[
                {
                  productKey: 'lectric-xp-3',
                  name: 'Lectric XP 3.0',
                  badge: 'Best Value',
                  rating: 4.7,
                  specs: {
                    Motor: '500W hub (1,000W peak)',
                    'Top Speed': '28 mph (unlocked)',
                    Range: '45-65 mi',
                    Weight: '65 lbs',
                    'Best For': 'Commuting & folding',
                    Price: '$999',
                  },
                },
                {
                  productKey: 'lectric-xp-lite',
                  name: 'Lectric XP Lite 2.0',
                  badge: 'Lightest Pick',
                  rating: 4.5,
                  specs: {
                    Motor: '300W hub (819W peak)',
                    'Top Speed': '20 mph',
                    Range: '60 mi',
                    Weight: '46 lbs',
                    'Best For': 'Apartment & recreation',
                    Price: '$799',
                  },
                },
                {
                  productKey: 'lectric-xpedition',
                  name: 'Lectric XPedition 2.0',
                  badge: 'Cargo Hauler',
                  rating: 4.6,
                  specs: {
                    Motor: '750W hub (1,310W peak)',
                    'Top Speed': '28 mph (unlocked)',
                    Range: '75-150 mi (dual)',
                    Weight: '78 lbs',
                    'Best For': 'Family & cargo',
                    Price: '$1,399',
                  },
                },
                {
                  productKey: 'lectric-xpress',
                  name: 'Lectric XPress 750',
                  badge: 'Premium Commuter',
                  rating: 4.6,
                  specs: {
                    Motor: '750W hub',
                    'Top Speed': '28 mph (unlocked)',
                    Range: '60 mi',
                    Weight: '61 lbs',
                    'Best For': 'Daily commuting',
                    Price: '$1,099',
                  },
                },
                {
                  productKey: 'lectric-one',
                  name: 'Lectric ONE',
                  badge: 'Flagship',
                  rating: 4.8,
                  specs: {
                    Motor: 'Pinion C1.9i (belt drive)',
                    'Top Speed': '28 mph',
                    Range: '60+ mi',
                    Weight: '72 lbs',
                    'Best For': 'Performance urban',
                    Price: '$2,199',
                  },
                },
              ]}
            />

            <div className='prose prose-slate max-w-none'>
              {/* Who Is Lectric */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Is Lectric eBikes?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Lectric eBikes was founded in 2019 by Levi Conlow and Robby Deziel — two Arizona State students who noticed that folding e-bikes in the U.S. Cost $2,000+ while comparable bikes overseas sold for half that. They cut out the middleman (no retail stores, no dealer markup, direct online sales only) and launched the original XP at $899. Five years and half a million bikes later, they&apos;re still in Phoenix and still direct-to-consumer.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What this means for buyers:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Prices are $300-$800 lower</strong> than comparable name-brand e-bikes</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>U.S.-based customer service</strong> out of Phoenix (not a call center in Asia)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Free shipping</strong> in the contiguous U.S., ships 85% pre-assembled</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>No retail test rides</strong> — you&apos;re buying sight unseen (though return policy is 30 days)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>Warranty is 1 year</strong> — shorter than some competitors (Aventon is 2 years)</span>
                </li>
              </ul>

              {/* XP 3.0 Deep Dive */}
              <h2 id='xp-3' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Lectric XP 3.0 — The Best-Selling Folding eBike in America
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $999 · <strong>Motor:</strong> 500W hub (1,000W peak) · <strong>Range:</strong> 45-65 mi · <strong>Top speed:</strong> 28 mph unlocked · <strong>Weight:</strong> 65 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The XP 3.0 is the bike that made Lectric famous and it remains their volume leader by an enormous margin. It&apos;s a folding fat-tire e-bike built around a 500W rear hub motor, a 500 Wh battery, hydraulic disc brakes, and 20-inch by 3-inch fat tires. The fold-in-half design brings the bike down to 40 x 16 x 25 inches — small enough to fit in a car trunk, under a desk, or beside an apartment door.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Real-world performance: 45-65 miles of range per charge depending on terrain and rider weight, 20 mph on throttle-only, and up to 28 mph with pedal assist once you unlock Class 3 mode through the display. Torque is strong enough to pull a 220-pound rider up a 15% grade without drama. Hydraulic brakes are genuinely good, better than the mechanical brakes on the original XP 2.0 and most cheap competitors.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The weaknesses are honest: 65 pounds is heavy for something called &quot;folding&quot; — you can lift it, but not gracefully; and the fat tires create noticeable rolling resistance on pavement. The motor is cadence-sensor based, not torque-sensor, so pedal assist feels more on/off than linear. For the price, none of these are dealbreakers.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='lectric-xp-3'
                  source='lectric-hub-xp-3'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* XP Lite 2.0 */}
              <h2 id='xp-lite' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Lectric XP Lite 2.0, The Entry Point
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $799 · <strong>Motor:</strong> 300W hub (819W peak) · <strong>Range:</strong> 60 mi · <strong>Top speed:</strong> 20 mph · <strong>Weight:</strong> 46 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The XP Lite 2.0 is Lectric&apos;s cheapest and lightest e-bike. It shares the folding design of the XP 3.0 but trades the 500W motor for a smaller 300W unit, skinnier 20x2.4 tires, and a lighter 48V battery. The result is a 46-lb bike (vs 65 lbs for the XP 3.0) that you can actually carry up stairs and into an apartment.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At $799, it&apos;s the cheapest genuinely good folding e-bike in the U.S. market. The trade-offs vs the XP 3.0: less power up hills (you&apos;ll feel it above 10% grade), no throttle-only operation above 15 mph, mechanical disc brakes instead of hydraulic, and a top speed capped at 20 mph. For a recreational rider, apartment commuter, or someone buying their first e-bike to see if they like the category, this is the right pick.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='lectric-xp-lite'
                  source='lectric-hub-xp-lite'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* XPedition 2.0 */}
              <h2 id='xpedition' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Lectric XPedition 2.0; The Cargo Workhorse
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,399 · <strong>Motor:</strong> 750W hub (1,310W peak) · <strong>Range:</strong> 75-150 mi (dual battery) · <strong>Top speed:</strong> 28 mph unlocked · <strong>Weight:</strong> 78 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The XPedition 2.0 is Lectric&apos;s electric cargo bike and the single best price-to-capability ratio in the cargo e-bike category. Most competitors (Rad Wagon 5, Aventon Abound, Tern GSD) cost $2,300-$5,000. The XPedition does 85% of what those bikes do for $1,399.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It has a 450-pound total capacity, a long rear rack that fits two kids with the optional seat kit, running boards on both sides, and a 750W rear hub motor that moves serious loads without complaint. The killer feature: dual battery support. Add a second 672 Wh battery and you&apos;re at 150+ mile range, enough to run errands all week on one charge.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The weaknesses: at 78 lbs it&apos;s heavy to maneuver at walking pace, the low step-through frame flexes more than a traditional diamond frame under load, and it doesn&apos;t fold (so apartment storage is harder). For a family that wants an electric minivan replacement, none of that matters.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='lectric-xpedition'
                  source='lectric-hub-xpedition'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* XPress 750 */}
              <h2 id='xpress' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Lectric XPress 750, The Traditional Commuter
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,099 · <strong>Motor:</strong> 750W hub · <strong>Range:</strong> 60 mi · <strong>Top speed:</strong> 28 mph unlocked · <strong>Weight:</strong> 61 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The XPress 750 is the Lectric for riders who don&apos;t want a folding bike. It&apos;s a full-size commuter with 27.5-inch wheels (vs the 20-inch wheels on the XP series), a step-through frame option, a torque sensor (instead of the cadence sensor used on cheaper Lectric models), and a 750W rear hub motor.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The torque sensor is the meaningful difference here. It measures how hard you&apos;re pedaling and delivers proportional assist — you get a more natural, bicycle-like feel instead of the on/off sensation of cadence-sensor bikes. For daily commuters who ride every day, it&apos;s a real quality-of-life upgrade over the XP 3.0.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The bike also includes integrated fenders, a rear rack with 65 lb capacity, integrated turn-signal lights, and an IPS (hydraulic disc) brake set. At $1,099, it undercuts comparable commuter e-bikes from Aventon or Rad Power by $500-$800.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='lectric-xpress'
                  source='lectric-hub-xpress'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Still the Top Pick'
                verdict='For the majority of buyers the XP 3.0 remains the sweet spot in the Lectric lineup — $999 for a folding, 28-mph, hydraulic-brake e-bike with a 65-mile range.'
                source='lectric-ebike-mid'
                variant='mid'
              />

              {/* Lectric ONE */}
              <h2 id='one' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Lectric ONE, The $2,199 Flagship
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $2,199 · <strong>Motor:</strong> Pinion C1.9i (belt drive) · <strong>Range:</strong> 60+ mi · <strong>Top speed:</strong> 28 mph · <strong>Weight:</strong> 72 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Lectric ONE is Lectric&apos;s answer to &quot;can a direct-to-consumer brand build a genuinely premium e-bike?&quot; The answer is yes. The ONE replaces the hub-drive motor used on every other Lectric with a Pinion C1.9i mid-drive gearbox — the same 9-speed internally-geared system found on $5,000+ Riese & Müller touring e-bikes — and pairs it with a Gates Carbon Drive belt instead of a conventional chain.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What this gets you: zero chain maintenance (the belt lasts 20,000+ miles and never needs lubrication), sealed-gearbox shifting that works while stopped or under full load, and a dramatically more efficient drivetrain that stretches range. It also feels genuinely different to ride; because the motor is at the crank instead of the rear hub, weight distribution is more balanced and the bike handles more like a conventional bicycle.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At $2,199, the Lectric ONE is the most expensive Lectric by a wide margin, but it undercuts comparable Pinion-equipped belt-drive e-bikes by $2,000-$3,000. For a rider who wants a low-maintenance, premium e-bike and can&apos;t justify $5,000+, this is the play.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='lectric-one'
                  source='lectric-hub-one'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Warranty & Shipping */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Warranty, Shipping &amp; Assembly
              </h2>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>Warranty</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Lectric eBikes carries a 1-year comprehensive warranty covering frame, motor, battery, and electronics from manufacturing defects. The battery is additionally warrantied for 800 charge cycles or 1 year (whichever comes first). Warranty claims go through Lectric&apos;s Phoenix-based customer service, and common parts (batteries, chargers, displays, controllers) are available for purchase directly if something needs replacement outside warranty.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Compared to competitors: Aventon warranties frame and motor for 2 years. Rad Power Bikes is 1 year comprehensive + 2 years on frame. Trek offers lifetime frame warranty on most e-bikes. Lectric is on the shorter end — but their replacement parts are inexpensive and readily available, so most mechanical issues resolve quickly out-of-warranty.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>Shipping &amp; Assembly</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Free shipping in the contiguous U.S. Alaska, Hawaii, and Canada have surcharges. Delivery time is typically 3-7 business days from order confirmation. Bikes arrive in a large cardboard carton at your door. UPS or FedEx Ground, no signature required on most orders.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Assembly takes 15-30 minutes and is genuinely straightforward. The bike ships 85% assembled. You install the front wheel (folding models only have the front wheel loose), attach the pedals, adjust handlebars, pump up the tires, and you&apos;re riding. A multi-tool is included; no special skills required.
              </p>

              {/* California Compliance */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                California Bike Class Compliance
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California law (CVC §312.5) divides e-bikes into three classes:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Class 1:</strong> Pedal assist only, max 20 mph, no throttle. Allowed on all bike paths.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Class 2:</strong> Pedal assist and throttle, max 20 mph. Allowed on most bike paths and lanes.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Class 3:</strong> Pedal assist only, max 28 mph, no throttle above 20 mph. Helmet required. Restricted from certain paths.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                All Lectric e-bikes ship as Class 2 in California by default (throttle + 20 mph pedal assist). The XP 3.0, XPedition, XPress, and ONE can all be user-unlocked to &quot;Class 3&quot; via LCD settings — but with throttle still active above 20 mph, this technically puts the bike outside any California class and into gray-area out-of-class territory. Most riders run Class 2 in town and unlock the higher speed for roads and dedicated paths. Do so at your own risk and check local ordinances.
              </p>

              {/* Lectric vs Competitors */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Lectric vs Rad Power vs Aventon: Which Direct-to-Consumer Wins?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The three big direct-to-consumer e-bike brands in the U.S. Are Lectric, Rad Power Bikes, and Aventon. Each has a different personality:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>Lectric:</span>
                  <span>Cheapest of the three by $200-$600. Focused on folding bikes and cargo. Shorter warranty, faster growth, great customer service. Best value play.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>Rad Power Bikes:</span>
                  <span>Originated the DTC e-bike category in 2015. More traditional commuter and cargo frames. Premium-feeling but priced closer to retail bikes. Strong utility bike lineup.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>Aventon:</span>
                  <span>Most premium-feeling of the three. Torque sensors across the lineup. 2-year warranty. Best app integration. Higher price.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                See our separate <Link href='/reviews/rad-power-bikes' className='text-primary hover:underline'>Rad Power Bikes review</Link> and <Link href='/reviews/aventon-ebike' className='text-primary hover:underline'>Aventon e-bike review</Link> for head-to-head comparisons.
              </p>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are Lectric eBikes any good?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, top-three U.S. e-bike brand with 500,000+ bikes sold and strong independent reviews. Trade-offs: 1-year warranty (vs 2-year Aventon) and mostly hub motors vs torque-sensing mid-drives.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Where are Lectric eBikes made?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Designed in Phoenix, Arizona. Final assembly and manufacturing in China. Customer service and warranty claims handled by the Phoenix team.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Which Lectric has the longest range?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    XPedition 2.0 with dual battery: up to 150 miles. For single-battery bikes: Lectric ONE at 60+ miles thanks to Pinion mid-drive efficiency.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Class 2 or Class 3 in California?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Ships as Class 2 by default. Most models can be user-unlocked to higher speeds, but doing so may put the bike outside legal class definitions depending on configuration.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Warranty length?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    1 year comprehensive on frame, motor, battery, and electronics. Battery also warrantied for 800 cycles.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are they pre-assembled?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    85% assembled. 15-30 minutes of owner assembly. No special tools beyond the included multi-tool.
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most readers, the answer is still the <strong>Lectric XP 3.0</strong> at $999. Folding, fat-tired, hydraulic-brake, 65-mile range, 28 mph unlocked, it does everything 80% of e-bike buyers actually need for a price that makes competitors look overpriced. Upgrade to the <strong>Lectric ONE</strong> ($2,199) if you want premium low-maintenance belt drive, or the <strong>XPedition 2.0</strong> ($1,399) if you need to haul kids or cargo.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Lectric&apos;s direct-to-consumer model keeps prices real. It&apos;s the main reason to buy the brand. If you need a retail test ride or a 2-year warranty, look at Aventon instead. For everyone else, Lectric delivers exactly what it claims: a good e-bike at a price that makes sense.
              </p>
            </div>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Final Verdict'
              verdict='The Lectric XP 3.0 is the best-value e-bike of 2026. Check current pricing and availability.'
              source='lectric-ebike-final'
              variant='final'
            />

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Comparing direct-to-consumer brands?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our full reviews of Rad Power Bikes and Aventon e-bikes to compare against Lectric.
              </p>
              <div className='flex flex-wrap gap-3 justify-center'>
                <Link
                  href='/reviews/rad-power-bikes'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Rad Power Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/aventon-ebike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Aventon
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/best-electric-bikes'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  All E-Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Reviews
              </Link>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Read Our Blog
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source='lectric-ebike-sticky' />
    </ReviewLayout>
  );
}
