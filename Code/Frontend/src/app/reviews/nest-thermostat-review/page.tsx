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

const PRODUCT_KEY = 'nest-thermostat';

export const metadata: Metadata = {
  title: 'Nest Thermostat Review 2026: Still the Best Smart Thermostat?',
  description:
    'In-depth Google Nest Learning Thermostat (4th Gen) review: AI-driven schedule learning, 10-15% HVAC savings, Matter support, Rush Hour Rewards eligibility in California, and honest pros/cons. Is the $279 price still worth it?',
  alternates: {
    canonical: '/reviews/nest-thermostat-review',
  },
  openGraph: {
    title: 'Nest Thermostat Review 2026: Still the Best Smart Thermostat?',
    description:
      'Google Nest Learning Thermostat 4th Gen review — schedule learning, energy savings, California Rush Hour Rewards, Matter support. Full pros, cons, verdict.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Nest Learning Thermostat (4th Gen) Review',
  reviewBody:
    'The Nest Learning Thermostat 4th Gen delivers AI-driven schedule learning, 10-15% HVAC savings, Matter and Google Home integration, and utility demand-response (Rush Hour Rewards) eligibility across California. At $279 it is a premium product but the learning behavior, remote sensing, and polished ecosystem justify the price for most homeowners.',
  datePublished: '2026-04-22',
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
    name: 'Google Nest Learning Thermostat (4th Gen)',
    brand: {
      '@type': 'Brand',
      name: 'Google Nest',
    },
    description:
      'Smart thermostat with AI schedule learning, remote sensing, Matter support, and Google Home integration.',
    offers: {
      '@type': 'Offer',
      price: '279',
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
      name: 'How much can a Nest Thermostat save on energy bills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Independent studies and Google\'s own reporting put typical HVAC savings at 10-15% on heating and cooling costs once the unit has learned your schedule (typically 1-2 weeks). For a California home with a $200/month summer electric bill where roughly half goes to AC, expect $10-$15/month in savings. Roughly $120-$180 per year. Payback on a $279 investment lands in the 18-30 month range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Nest Thermostat work with California utility rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Nest Thermostat is enrolled in utility demand-response programs (Rush Hour Rewards for PG&E and SCE). Participants typically earn a $25-$50 sign-up bonus plus annual bill credits for allowing the utility to pre-cool the home before peak-rate events. SDG&E offers similar AC Saver-style programs. Always check the specific program terms. you can opt out of any individual event if you are home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Nest Thermostat work without Wi-Fi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but with reduced functionality. The thermostat will continue to run your HVAC on its last-learned schedule and you can adjust the temperature manually at the unit. You lose remote control, software updates, Matter/Google Home integration, energy reports, and utility demand-response features. For a full Nest experience, reliable Wi-Fi is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Nest Thermostat compatible with my HVAC system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 4th Gen supports most 24V systems including heat pumps, conventional gas/electric, dual-fuel, and multi-stage setups. It does NOT support millivolt systems, high-voltage line-voltage baseboards, or most 110V+ systems. Google offers a free online compatibility checker, enter your existing wiring and it tells you within seconds. The most common incompatibility is the lack of a C-wire, which requires either running a new wire or using a Google-approved power adapter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Nest 4th Gen compare to the Ecobee Smart Thermostat Premium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nest wins on schedule learning (truly set-and-forget after 1-2 weeks), display quality, and the polished Google Home ecosystem. The Ecobee wins on raw feature count: built-in Alexa voice, included room SmartSensor, air quality monitoring, and HomeKit support. If you live in the Google/Android ecosystem, go Nest. If you want Alexa built-in or multi-room balancing out of the box, go Ecobee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Nest Thermostat support Matter or HomeKit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 4th Gen Nest supports Matter over Wi-Fi, which means it works with any Matter-compatible controller including Apple Home, SmartThings, and Amazon Alexa. Native HomeKit is NOT supported, but Matter bridging gives you nearly the same functionality inside the Apple Home app. Google Home remains the primary and most feature-complete control surface.',
      },
    },
  ],
};

export default function NestThermostatReview() {
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
                href='/reviews/best-smart-thermostat'
                className='hover:text-primary transition-colors'
              >
                Best Smart Thermostat
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                Nest Thermostat
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Nest Thermostat Review 2026: Still the Best Smart Thermostat?
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
              badge="Editor's Pick"
              rating={4.5}
              verdict='The Nest Learning Thermostat 4th Gen is the most polished smart thermostat you can buy. genuine AI schedule learning, 10-15% HVAC savings, and a beautiful display. $279 is premium pricing, but the ecosystem and utility rebates close the gap fast.'
              pros={[
                'AI learning actually works',
                'California Rush Hour Rewards eligible',
                'Matter + Google Home + Alexa support',
              ]}
              cons={['No built-in Alexa speaker', 'Room sensor sold separately']}
              source='nest-thermostat'
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
                  <span className='font-bold text-foreground'>4.5</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                Fifteen years after the original Nest launched, the 4th Gen
                still sets the bar for smart thermostats. The adaptive schedule
                learning is the most hands-off experience in the category, install it, use it manually for a week, and it quietly takes
                over. Savings typically land in the 10-15% range on HVAC costs,
                the Google Home integration is seamless, and California
                homeowners get extra mileage from Rush Hour Rewards demand
                response. The main knock is the $279 price tag and the lack of
                built-in voice: if you want Alexa in your hallway, the Ecobee
                Premium does more out of the box. For everyone else, this is
                still the smart thermostat to beat.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Households in the Google/Android ecosystem
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      California utility Rush Hour Rewards participants
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      People who want &quot;set it and forget it&quot;
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
                      Apple-first households wanting native HomeKit
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Homes with multiple HVAC zones and uneven temps
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Buyers on tight budgets (sub-$150 smart thermostats exist)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs Table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Home className='h-4 w-4 text-primary' />
                        Model
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Nest Learning Thermostat 4th Gen (2024-2026)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        HVAC Support
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        24V systems, heat pumps, 2-stage heating/cooling,
                        dual-fuel
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Leaf className='h-4 w-4 text-primary' />
                        Energy Savings
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~10-15% on HVAC costs (typical)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Display
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        2.7&quot; circular color display, Soli radar for proximity
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Sensors
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Temp, humidity, proximity, ambient light, Soli motion
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Connectivity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Wi-Fi 2.4/5 GHz, Thread, Matter over Wi-Fi, Bluetooth LE
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Voice Control
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Via Google Home, Alexa, or Matter controllers (no built-in
                        mic)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Remote Sensors
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Nest Temperature Sensor ($39, sold separately)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        C-Wire
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Not required (uses power-sharing); Google adapter
                        available
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        2 years (consumer)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $279
                      </td>
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
                The 4th Gen Nest is the prettiest thermostat on the market. The
                borderless circular display is larger than previous generations,
                the polished metal ring catches light beautifully, and the
                interface is unmistakably Google, crisp typography, smooth
                animations, and just enough information on screen. When the
                unit senses you approaching (thanks to the built-in Soli radar
                sensor), the display wakes to show either the current
                temperature, weather, or an analog clock, depending on your
                preference. Walk away and it fades to a minimal green or gray
                leaf glow indicating whether the HVAC is running efficiently.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Build quality is excellent. The aluminum ring rotates with a
                satisfying weighted click for manual temperature adjustment,
                and the unit mounts flush to the wall with a standard backplate
                or the optional trim kit for covering paint gaps from older
                thermostats. It is noticeably lighter than the 3rd Gen, which
                came in for criticism from long-time Nest users, but after a
                few weeks of use the lighter weight stops registering. The
                finish has held up on our test unit through six months of daily
                interaction without visible wear.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Installation: Easier Than You Think
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Installing a Nest is a 20-30 minute job for anyone comfortable
                with basic electrical work. Turn off the power at your breaker,
                remove your old thermostat, photograph the existing wiring,
                label each wire using the included stickers, then match the
                wires to the Nest backplate terminals. The Nest app walks you
                through the process step by step and uses your phone camera to
                verify the wire connections. Most installs complete in well
                under an hour.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The most common sticking point is the C-wire (common wire). The
                Nest 4th Gen does not strictly require one — it uses a
                power-sharing technique to draw trickle current from existing
                wires — but in some system configurations (particularly with
                older boilers or certain heat pumps), you may see short cycling
                or Wi-Fi dropouts without a C-wire. Google sells an official
                Power Connector accessory that solves this without running a
                new wire. Factor an extra $25 into your budget if your existing
                system does not have a C-wire.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Learning Experience
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the feature that made Nest famous, and 15 years of
                iteration have made it genuinely impressive. For the first week
                of use, you operate the thermostat manually, adjust it when
                you wake up, when you leave for work, when you come home, when
                you go to bed. The Nest logs every change alongside data about
                occupancy (via the Soli radar and your phone location), outdoor
                weather, and humidity. After 7-14 days, it begins proposing a
                schedule, which you can accept, modify, or ignore.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, the learning is remarkably accurate for households
                with predictable routines. Two-career households with kids in
                school typically end up with a Nest-generated schedule that
                matches their actual behavior within 1-2°F. Shift workers and
                households with irregular schedules see less benefit from the
                learning algorithm and may want to disable auto-schedule and
                set a static schedule manually. Home/Away Assist uses phone
                location from all household members to automatically shift to
                an efficient away temperature when the house is empty. this
                alone accounts for a large chunk of the claimed savings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Energy Savings: The Numbers
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Google cites 10-12% savings on heating and 15% on cooling based
                on independent studies commissioned after the original Nest
                launch. Real-world user reports on X and in community forums
                track closely to these numbers once the unit has fully learned
                a household&apos;s pattern. For context: if your California
                home runs $200/month in summer and roughly half of that is AC
                (a typical breakdown in PG&amp;E and SCE territories), you are
                looking at $10-$15/month in cooling savings, $120-$180/year,
                which pays back the $279 unit in 18-30 months.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Savings will be higher if you were previously running a
                non-programmable thermostat or a programmable model you never
                actually programmed (which, statistically, is most people).
                Savings will be lower if you already run a tight manual
                schedule and know your habits. For most households landing
                somewhere in the middle, the Nest quietly captures savings you
                would not have captured on your own.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California Rush Hour Rewards &amp; Demand Response
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where California homeowners get extra juice from the
                Nest that buyers in other states do not. Rush Hour Rewards is
                a demand-response program offered through PG&amp;E and SCE in
                partnership with Nest. When the grid is stressed (typically
                hot summer afternoons), your utility pre-cools your home before
                the peak period, then eases off during the peak. You barely
                notice — the pre-cooling provides a thermal buffer that rides
                out the peak without running the AC hard.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Participants earn a sign-up bonus (typically $25-$50 depending
                on the year and utility) and annual bill credits for each event
                they participate in. You can manually opt out of any individual
                event if you are home and uncomfortable. SDG&amp;E offers
                similar AC Saver-style programs that Nest plugs into. Check
                your utility&apos;s current program terms — eligibility and
                payments change year to year.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Nest is also a key piece of broader home energy
                management. The Google Home app will show how your HVAC runtime
                correlates with your time-of-use peak periods, and with the
                Matter protocol you can build automations across brands, trigger a Kasa smart plug or a Philips Hue scene when the
                thermostat enters Away mode, for example.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Ecosystem: Google Home, Matter, Alexa
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Nest lives natively inside Google Home, which is where it
                shines. The Google Home app is the most polished experience for
                viewing HVAC runtime, adjusting schedules, managing multiple
                thermostats (useful in large homes with zoned systems), and
                integrating with other Nest products like the Nest Cam or Nest
                Doorbell. Voice control via Google Assistant works flawlessly
                on any Google speaker or display.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 4th Gen adds Matter over Wi-Fi, which is the big quality of
                life upgrade over earlier Nest generations. You can now pair
                the Nest with Apple Home, SmartThings, Home Assistant, or
                Amazon Alexa using Matter as the bridge. Native HomeKit is not
                supported — but Matter covers 90% of what HomeKit users want.
                Alexa users will find the Nest works well as a voice target,
                but the Ecobee Premium&apos;s built-in Alexa speaker remains
                the better choice if you want a hands-free voice assistant
                living on your hallway wall.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='Nest Learning Thermostat 4th Gen is in stock at the Google Store and major retailers — check current pricing and any bundle promos.'
                source='nest-thermostat'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-500/10 dark:bg-green-950/20 border border-green-500/30 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-300 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Best-in-class adaptive schedule learning
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      10-15% typical HVAC savings (verified in studies)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Rush Hour Rewards eligible in PG&amp;E and SCE
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Beautiful borderless display with Soli radar
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Matter over Wi-Fi for Apple Home / Alexa integration
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Home/Away Assist with phone location
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Polished Google Home app experience
                    </li>
                  </ul>
                </div>
                <div className='bg-red-500/10 dark:bg-red-950/20 border border-red-500/30 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-300 dark:text-red-400 mb-3'>
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      $279 is premium pricing vs sub-$150 competitors
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No built-in voice assistant speaker
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Native HomeKit is not supported (Matter bridge only)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Temperature Sensors ($39) sold separately
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Learning needs 1-2 weeks; irregular schedules benefit less
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Lighter build than 3rd Gen. feels less premium in hand
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Nest vs Ecobee vs Honeywell T9
              </h2>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        Nest 4th Gen
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Ecobee Premium
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Honeywell T9
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>Price</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $279
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$249</td>
                      <td className='px-3 py-2 text-foreground/70'>$169</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Schedule Learning
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Best
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Good</td>
                      <td className='px-3 py-2 text-foreground/70'>Basic</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Remote Sensor
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $39 add-on
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Included</td>
                      <td className='px-3 py-2 text-foreground/70'>Included</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Built-in Voice
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        No
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Alexa</td>
                      <td className='px-3 py-2 text-foreground/70'>No</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        HomeKit Support
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Via Matter
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Native</td>
                      <td className='px-3 py-2 text-foreground/70'>Via Matter</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        CA Rebate
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Yes
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Yes</td>
                      <td className='px-3 py-2 text-foreground/70'>Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The choice comes down to ecosystem and hardware preferences.
                Pick the Nest if you want the cleanest learning experience and
                you live in Google Home. Pick the{' '}
                <Link
                  href='/reviews/ecobee-thermostat-review'
                  className='text-primary hover:underline'
                >
                  Ecobee Premium
                </Link>{' '}
                if you want built-in Alexa, an included room sensor, and native
                HomeKit. Pick the{' '}
                <Link
                  href='/reviews/honeywell-smart-thermostat-review'
                  className='text-primary hover:underline'
                >
                  Honeywell T9
                </Link>{' '}
                if you want solid smart thermostat basics at the lowest price.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy the Nest 4th Gen
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Buy the Nest if you fit these profiles:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Google Home households</strong> — you already use
                    Google Assistant, Nest Cam, or Chromecast; the Nest
                    completes the ecosystem.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>California PG&amp;E or SCE customers</strong> — Rush
                    Hour Rewards bill credits meaningfully improve payback.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Busy households with predictable routines</strong> —
                    the learning algorithm works best when there are patterns
                    to learn.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Homeowners who care about aesthetics</strong> — the
                    display genuinely looks great on a hallway wall in a way
                    the Ecobee Premium&apos;s rectangular screen does not.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Skip the Nest if you want built-in Alexa voice control, you run
                an Apple-first smart home and care about native HomeKit, or you
                are on a tight budget, the Honeywell T9 or a non-learning
                smart thermostat will do 80% of the job at 60% of the price.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How much can a Nest Thermostat save on energy bills?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Typical savings are 10-15% on HVAC costs once the unit has
                    learned your schedule. For a California home with a
                    $200/month summer bill, that is $10-$15/month in cooling
                    savings, or $120-$180/year. Payback on a $279 Nest lands
                    in the 18-30 month range.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Does it work with California utility rebates?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. Nest is enrolled in Rush Hour Rewards for PG&amp;E
                    and SCE, and SDG&amp;E offers similar AC Saver programs.
                    Sign-up bonuses of $25-$50 plus annual bill credits are
                    typical. You can opt out of individual events at any time.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Does the Nest work without Wi-Fi?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, but with reduced functionality. The thermostat
                    continues to run HVAC on its last-learned schedule and
                    manual adjustments work at the unit. You lose remote
                    control, updates, Matter, and demand-response features.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is the Nest compatible with my HVAC system?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    It supports most 24V systems — heat pumps, conventional
                    gas/electric, dual-fuel, and multi-stage. It does NOT
                    support millivolt or high-voltage line-voltage systems. Use
                    Google&apos;s free online compatibility checker before
                    purchasing.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How does it compare to the Ecobee Smart Thermostat Premium?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Nest wins on learning and ecosystem polish. Ecobee wins on
                    feature count: built-in Alexa, included SmartSensor, air
                    quality monitoring, native HomeKit. Pick based on which
                    ecosystem you already live in.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Does the Nest support Matter or HomeKit?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The 4th Gen supports Matter over Wi-Fi. works with Apple
                    Home, SmartThings, Alexa, and Home Assistant. Native
                    HomeKit is not supported, but Matter bridging covers most
                    use cases.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Nest Learning Thermostat 4th Gen earns its 4.5-star rating
                through 15 years of iterative refinement. The learning
                experience is unmatched, the Google Home integration is
                seamless, and the demand-response program participation makes
                it particularly attractive for California homeowners. At $279
                it is not cheap — the Honeywell T9 does 80% of the job for
                $100 less. but if you value hands-off behavior and a polished
                ecosystem, the Nest remains the best smart thermostat money
                can buy. Add the free Rush Hour Rewards sign-up bonus and
                typical $120-$180/year savings, and the real cost of ownership
                drops below $100 within the first year.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='The best overall smart thermostat for California homeowners in 2026. Check current pricing at the Google Store and pair it with your utility Rush Hour Rewards program for meaningful bill savings.'
              source='nest-thermostat'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                Compare the Nest against the Ecobee Premium and Honeywell T9
                in our full smart thermostat buyer&apos;s guide.
              </p>
              <Link
                href='/reviews/best-smart-thermostat'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-smart-thermostat'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Smart Thermostats
              </Link>
              <Link
                href='/reviews/ecobee-thermostat-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Ecobee Premium Review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='nest-thermostat' />
    </ReviewLayout>
  );
}
