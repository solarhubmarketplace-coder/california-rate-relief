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
    'Honeywell Home T9 Smart Thermostat Review: Room Sensors Change Everything (2026)',
  description:
    'In-depth Honeywell Home T9 smart thermostat review with room sensors. Geofencing, adaptive learning, multi-room comfort, Alexa/Google Home support. Full specs, energy savings analysis, and honest pros/cons.',
  alternates: {
    canonical: '/reviews/honeywell-smart-thermostat-review',
  },
  openGraph: {
    title:
      'Honeywell Home T9 Smart Thermostat Review: Room Sensors Change Everything (2026)',
    description:
      'Detailed review of the Honeywell Home T9 smart thermostat with room sensors. Smart Response learning, geofencing, multi-room comfort control, and up to 23% energy savings. Honest pros/cons from real-world testing.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Honeywell Home T9 Smart Thermostat Review: Room Sensors Change Everything',
  description:
    'In-depth review of the Honeywell Home T9 smart thermostat covering room sensors, geofencing, adaptive learning, app control, voice assistant integration, energy savings, and honest pros/cons.',
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
    '@id':
      'https://ratereliefca.com/reviews/honeywell-smart-thermostat-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Honeywell Home T9 Smart Thermostat with Room Sensors Review',
  headline:
    'Honeywell Home T9 Smart Thermostat Review: Room Sensors Change Everything',
  description:
    'In-depth review of the Honeywell Home T9 smart thermostat with room sensors. Geofencing, Smart Response adaptive learning, multi-room comfort, voice control.',
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
    name: 'Honeywell Home T9 Smart Thermostat with Room Sensors',
    brand: {
      '@type': 'Brand',
      name: 'Honeywell Home',
    },
    description:
      'Wi-Fi smart thermostat with wireless room sensors for multi-room comfort control. Features Smart Response adaptive learning, geofencing, 7-day flexible scheduling, and voice assistant compatibility. Works with Alexa, Google Home, and IFTTT.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '169',
      highPrice: '199',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.3',
    bestRating: '5',
    worstRating: '1',
  },
  reviewBody:
    'The Honeywell Home T9 is a solid smart thermostat that stands out from the competition with its wireless room sensors. Instead of relying on a single temperature reading from the hallway where your thermostat sits, the T9 uses sensors placed in the rooms you actually occupy to make smarter heating and cooling decisions. Combined with geofencing, adaptive Smart Response learning, and reliable voice assistant integration, the T9 delivers meaningful energy savings of up to 23% on heating and cooling bills. The app experience is functional if not flashy, and installation is straightforward for most HVAC systems. At $169-$199 with one sensor included, it undercuts the Ecobee Premium while offering comparable room sensor functionality.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://ratereliefca.com/reviews/honeywell-smart-thermostat-review',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the Honeywell T9 come with room sensors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Honeywell Home T9 includes one wireless room sensor in the box. You can purchase additional sensors separately (sold in 2-packs for around $39-$49) and connect up to 20 sensors total. Each sensor measures both temperature and humidity, and you can prioritize specific sensors during different times of day through the Resideo app.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Honeywell T9 compatible with my HVAC system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Honeywell Home T9 works with most 24V HVAC systems including forced air (gas, electric, oil), heat pumps (with or without auxiliary heat), hot water/steam boilers, and radiant heat systems. It does NOT work with 120V/240V baseboard heaters, millivolt systems (some older gas fireplaces), or proprietary systems from certain manufacturers. Check the Resideo compatibility tool online with your current wiring configuration before purchasing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Honeywell T9 compare to the Nest Learning Thermostat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The T9 and Nest Learning Thermostat (4th gen) are closely matched. The T9 wins on room sensors (included in the box vs. sold separately for Nest), price ($169-$199 vs. $249 for Nest 4th gen), and broad HVAC compatibility. The Nest wins on design aesthetics (the rotating bezel is more intuitive), learning algorithms (Nest has had more years to refine its machine learning), and the Google Home ecosystem integration. If multi-room comfort is your priority, the T9 has the edge. If you want the sleekest design and are already deep in the Google ecosystem, the Nest is hard to beat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Honeywell T9 work with Alexa and Google Home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Honeywell Home T9 works with Amazon Alexa, Google Home/Google Assistant, and IFTTT. You can change the temperature, switch modes, and check the current temperature using voice commands. It does NOT natively support Apple HomeKit, though you can work around this with IFTTT or Homebridge for limited functionality.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can the Honeywell T9 save on energy bills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Honeywell estimates up to 23% savings on heating and cooling costs when using the T9 with its smart features enabled (geofencing, scheduling, Smart Response learning). Real-world savings typically range from 10-23%, depending on your previous thermostat, climate, insulation, and how consistently you used manual scheduling before. For an average US household spending $1,000-$1,500 per year on heating and cooling, that translates to roughly $100-$345 in annual savings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install the Honeywell T9 myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most homeowners can install the T9 in 30-60 minutes. The thermostat comes with a detailed installation guide, labels for your existing wires, and the Resideo app walks you through the process step by step. You will need a screwdriver and possibly a drill if mounting in a new location. If your current thermostat has a C-wire (common wire), installation is plug-and-play. If you do not have a C-wire, Honeywell includes a C-wire adapter in the box. The only scenario where professional installation is recommended is if you have no existing thermostat wiring at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do the Honeywell T9 room sensor batteries last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The wireless room sensors use a single CR2032 coin cell battery that typically lasts about 2-3 years under normal use. The Resideo app will notify you when a sensor battery is running low. Replacement CR2032 batteries cost about $1-$3 each and are widely available at any grocery or hardware store.',
      },
    },
  ],
};

export default function HoneywellSmartThermostatReview() {
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
      <main className='min-h-screen' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='py-16'>
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
                  Best Smart Thermostats
                </Link>
                <ChevronRight className='h-3 w-3' />
                <span className='text-foreground font-medium'>
                  Honeywell Home T9
                </span>
              </nav>

              {/* Article Header */}
              <header className='mb-10'>
                <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                  Product Review
                </span>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                  Honeywell Home T9 Smart Thermostat Review: Room Sensors Change
                  Everything
                </h1>
                <p className='text-lg text-muted-foreground mb-4'>
                  Multi-room comfort with wireless sensors, geofencing, and
                  adaptive learning — at $70 less than the Ecobee Premium.
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
                    <span className='font-bold text-foreground'>4.3</span>
                    <span className='text-muted-foreground text-sm'>/ 5</span>
                  </div>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-5'>
                  The Honeywell Home T9 solves the biggest problem with most
                  smart thermostats: they only measure the temperature in the
                  hallway where they&apos;re mounted, not in the rooms you
                  actually use. The included wireless room sensor lets you
                  prioritize comfort in your bedroom at night and your living
                  room during the day. Geofencing automatically sets the
                  thermostat to away mode when you leave and resumes your
                  schedule when you return. Smart Response learning figures out
                  how long your system takes to reach your target temperature and
                  starts heating or cooling early. At $169-$199 with a sensor
                  included, it undercuts the Ecobee Premium ($249) while
                  delivering comparable multi-room intelligence. The tradeoff?
                  The Resideo app is functional but not as polished as Nest or
                  Ecobee, and there&apos;s no native Apple HomeKit support.
                </p>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <p className='text-sm font-semibold text-foreground mb-2'>
                      Best for:
                    </p>
                    <ul className='text-sm text-foreground/80 space-y-1'>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                        Homes with uneven temperatures between rooms
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                        Budget-conscious buyers who still want room sensors
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                        Alexa and Google Home households
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
                        Apple HomeKit households (no native support)
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                        Design-forward buyers (Nest looks nicer)
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                        120V/240V baseboard heater systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className='rounded-2xl p-6 md:p-8 mb-12 text-center'
                style={{ backgroundColor: '#141414' }}
              >
                <p
                  className='text-lg font-bold mb-2'
                  style={{ color: '#f5f5f5' }}
                >
                  Honeywell Home T9 Smart Thermostat
                </p>
                <p className='text-sm mb-4' style={{ color: '#a1a1aa' }}>
                  $169-$199 with one room sensor included
                </p>
                <a
                  href='#'
                  className='inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-xl transition-all'
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Check Price on Amazon
                  <ArrowRight className='h-4 w-4' />
                </a>
                <p className='text-xs mt-3' style={{ color: '#52525b' }}>
                  GreenVerdict is reader-supported. We may earn a commission
                  through affiliate links.
                </p>
              </div>

              {/* Key Specs */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-6 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Key Specs at a Glance
                </h2>
                <div className='grid md:grid-cols-2 gap-4'>
                  {[
                    {
                      icon: Zap,
                      label: 'Connectivity',
                      value: 'Wi-Fi (2.4 GHz)',
                    },
                    {
                      icon: Sun,
                      label: 'Display',
                      value: '3.5" color touchscreen',
                    },
                    {
                      icon: Shield,
                      label: 'Compatibility',
                      value: 'Most 24V HVAC systems',
                    },
                    {
                      icon: DollarSign,
                      label: 'Price',
                      value: '$169-$199 (with 1 sensor)',
                    },
                    {
                      icon: Star,
                      label: 'Room Sensors',
                      value: 'Up to 20 wireless sensors',
                    },
                    {
                      icon: CheckCircle,
                      label: 'Voice Assistants',
                      value: 'Alexa, Google Home, IFTTT',
                    },
                    {
                      icon: Calendar,
                      label: 'Scheduling',
                      value: '7-day flexible scheduling',
                    },
                    {
                      icon: Zap,
                      label: 'Energy Savings',
                      value: 'Up to 23% on HVAC costs',
                    },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className='flex items-center gap-4 rounded-xl p-4'
                      style={{ backgroundColor: '#141414' }}
                    >
                      <div
                        className='w-10 h-10 rounded-lg flex items-center justify-center shrink-0'
                        style={{ backgroundColor: '#1a2e1a' }}
                      >
                        <spec.icon
                          className='h-5 w-5'
                          style={{ color: '#22c55e' }}
                        />
                      </div>
                      <div>
                        <p
                          className='text-xs font-semibold uppercase tracking-wide'
                          style={{ color: '#a1a1aa' }}
                        >
                          {spec.label}
                        </p>
                        <p
                          className='text-sm font-bold'
                          style={{ color: '#f5f5f5' }}
                        >
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Full Spec Table */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-6 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Full Technical Specifications
                </h2>
                <div
                  className='rounded-2xl overflow-hidden'
                  style={{ backgroundColor: '#141414' }}
                >
                  <table className='w-full text-sm'>
                    <tbody>
                      {[
                        ['Model Number', 'RCHT9610WFSW2003/U'],
                        ['Display', '3.5-inch color touchscreen (480 x 320)'],
                        ['Power', 'C-wire (adapter included if no C-wire)'],
                        ['Wi-Fi', '2.4 GHz 802.11 b/g/n'],
                        ['Sensor Protocol', '920 MHz wireless (proprietary)'],
                        ['Included Sensors', '1 temperature + humidity sensor'],
                        ['Max Sensors', '20'],
                        ['Sensor Battery', 'CR2032 (2-3 year life)'],
                        ['HVAC Compatibility', 'Most 24V systems (see details)'],
                        ['Heat Pump', 'Yes, up to 3 stages + aux/emergency heat'],
                        ['Humidifier/Dehumidifier', 'Yes'],
                        ['Geofencing', 'Yes (via Resideo app)'],
                        ['Learning', 'Smart Response adaptive recovery'],
                        ['Voice Assistants', 'Amazon Alexa, Google Home, IFTTT'],
                        ['Apple HomeKit', 'No'],
                        ['Dimensions', '4.38" x 4.38" x 1.08"'],
                        ['Warranty', '5-year limited'],
                        ['ENERGY STAR', 'Yes, certified'],
                      ].map(([label, value], i) => (
                        <tr
                          key={label}
                          style={{
                            borderBottom:
                              i < 17 ? '1px solid #27272a' : 'none',
                          }}
                        >
                          <td
                            className='py-3 px-5 font-semibold'
                            style={{ color: '#a1a1aa' }}
                          >
                            {label}
                          </td>
                          <td
                            className='py-3 px-5'
                            style={{ color: '#f5f5f5' }}
                          >
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Room Sensors Deep Dive */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-4 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Room Sensors: The T9&apos;s Biggest Advantage
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  Here is the fundamental problem with most thermostats: they
                  measure temperature at one point in your house — usually a
                  hallway or living room wall. If your bedroom is 5 degrees
                  warmer than the hallway where the thermostat sits, the
                  thermostat has no idea. It thinks the whole house is at 72
                  degrees while you&apos;re sweating through the night at 77.
                </p>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The Honeywell T9&apos;s room sensors solve this by measuring
                  temperature and humidity in the rooms that actually matter to
                  you. You place the small wireless sensors (about the size of a
                  deck of cards) in bedrooms, home offices, nurseries — wherever
                  comfort matters most. Then you tell the T9 which sensors to
                  prioritize at different times of day.
                </p>
                <div
                  className='rounded-2xl p-6 mb-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3
                    className='text-lg font-bold mb-4'
                    style={{ color: '#f5f5f5' }}
                  >
                    How Room Sensor Scheduling Works
                  </h3>
                  <div className='space-y-3'>
                    {[
                      {
                        time: '6:00 AM - 9:00 AM',
                        room: 'Kitchen sensor',
                        why: 'Prioritize the kitchen during morning routine',
                      },
                      {
                        time: '9:00 AM - 5:00 PM',
                        room: 'Home office sensor',
                        why: 'Keep the office comfortable during work hours',
                      },
                      {
                        time: '5:00 PM - 10:00 PM',
                        room: 'Living room sensor',
                        why: 'Focus on the main living area in the evening',
                      },
                      {
                        time: '10:00 PM - 6:00 AM',
                        room: 'Bedroom sensor',
                        why: 'Optimize sleeping temperature overnight',
                      },
                    ].map((slot) => (
                      <div
                        key={slot.time}
                        className='flex items-start gap-3 p-3 rounded-lg'
                        style={{ backgroundColor: '#1a1a1a' }}
                      >
                        <Clock
                          className='h-5 w-5 mt-0.5 shrink-0'
                          style={{ color: '#22c55e' }}
                        />
                        <div>
                          <p
                            className='text-sm font-bold'
                            style={{ color: '#f5f5f5' }}
                          >
                            {slot.time} — {slot.room}
                          </p>
                          <p
                            className='text-xs'
                            style={{ color: '#a1a1aa' }}
                          >
                            {slot.why}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                  Each sensor also reads humidity, which matters more than most
                  people realize. A room at 74 degrees with 30% humidity feels
                  completely different from 74 degrees at 60% humidity. The T9
                  factors both into its decisions. You can connect up to 20
                  sensors total, though most homes need 3-5 to cover the rooms
                  that matter. Additional 2-packs typically run $39-$49.
                </p>
              </section>

              {/* Smart Features */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-4 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Smart Features: Geofencing, Learning, and Scheduling
                </h2>

                {/* Geofencing */}
                <div
                  className='rounded-2xl p-6 mb-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <div
                      className='w-8 h-8 rounded-lg flex items-center justify-center'
                      style={{ backgroundColor: '#1a2e1a' }}
                    >
                      <Shield
                        className='h-4 w-4'
                        style={{ color: '#22c55e' }}
                      />
                    </div>
                    <h3
                      className='text-lg font-bold'
                      style={{ color: '#f5f5f5' }}
                    >
                      Geofencing
                    </h3>
                  </div>
                  <p
                    className='leading-relaxed mb-3'
                    style={{ color: '#d4d4d8' }}
                  >
                    The T9 uses your phone&apos;s GPS (through the Resideo app)
                    to detect when everyone leaves the house. When the last
                    person crosses the geofence boundary, the thermostat
                    automatically switches to Away mode, reducing heating or
                    cooling to save energy. When someone arrives home, it
                    resumes your scheduled temperature.
                  </p>
                  <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                    This works with multiple phones — the T9 only enters Away
                    mode when all registered phones have left. In practice, this
                    eliminates the single biggest source of wasted energy: an
                    empty house running at full comfort temperature for hours.
                    Honeywell estimates geofencing alone can save 5-10% on
                    annual HVAC costs.
                  </p>
                </div>

                {/* Smart Response Learning */}
                <div
                  className='rounded-2xl p-6 mb-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <div
                      className='w-8 h-8 rounded-lg flex items-center justify-center'
                      style={{ backgroundColor: '#1a2e1a' }}
                    >
                      <Zap
                        className='h-4 w-4'
                        style={{ color: '#22c55e' }}
                      />
                    </div>
                    <h3
                      className='text-lg font-bold'
                      style={{ color: '#f5f5f5' }}
                    >
                      Smart Response Adaptive Learning
                    </h3>
                  </div>
                  <p
                    className='leading-relaxed mb-3'
                    style={{ color: '#d4d4d8' }}
                  >
                    Smart Response is Honeywell&apos;s adaptive recovery
                    feature. Over the first week or two of use, the T9 learns
                    how long your HVAC system takes to heat or cool your home by
                    a given number of degrees. If you have a schedule set for 72
                    degrees at 7:00 AM, and the T9 has learned that your system
                    needs 25 minutes to go from 68 to 72, it will start heating
                    at 6:35 AM so you wake up to the right temperature.
                  </p>
                  <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                    This is not as aggressive as Nest&apos;s full machine
                    learning approach (which tries to learn your entire schedule
                    from scratch), but it is more predictable. You still set
                    your schedule manually — the T9 just makes sure transitions
                    happen on time rather than starting when the clock hits your
                    scheduled time.
                  </p>
                </div>

                {/* Flexible Scheduling */}
                <div
                  className='rounded-2xl p-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <div
                      className='w-8 h-8 rounded-lg flex items-center justify-center'
                      style={{ backgroundColor: '#1a2e1a' }}
                    >
                      <Calendar
                        className='h-4 w-4'
                        style={{ color: '#22c55e' }}
                      />
                    </div>
                    <h3
                      className='text-lg font-bold'
                      style={{ color: '#f5f5f5' }}
                    >
                      7-Day Flexible Scheduling
                    </h3>
                  </div>
                  <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                    The T9 supports fully customizable 7-day scheduling with up
                    to 4 time periods per day. Each period can have its own
                    target temperature and sensor priority. You can set
                    different schedules for weekdays vs. weekends, or make
                    every day unique. The scheduling interface on the
                    touchscreen is decent but much easier to configure through
                    the Resideo app, where you can drag time periods and copy
                    days. There is also a simple &quot;Follow Me&quot; mode
                    that uses occupancy detection from the room sensors to
                    automatically prioritize occupied rooms without any
                    schedule setup.
                  </p>
                </div>
              </section>

              {/* App & Voice Control */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-4 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  App and Voice Control
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The Honeywell Home T9 is controlled through the Resideo app
                  (available on iOS and Android). The app handles all the core
                  functions: setting schedules, managing sensors, configuring
                  geofencing, viewing temperature and humidity history, and
                  receiving maintenance reminders (filter changes, etc.).
                </p>
                <div
                  className='rounded-2xl p-6 mb-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3
                    className='text-lg font-bold mb-4'
                    style={{ color: '#f5f5f5' }}
                  >
                    App Strengths and Weaknesses
                  </h3>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <p
                        className='text-sm font-semibold mb-3'
                        style={{ color: '#22c55e' }}
                      >
                        What the app does well:
                      </p>
                      <ul className='space-y-2'>
                        {[
                          'Remote temperature control from anywhere',
                          'Sensor management and scheduling',
                          'Temperature and humidity history charts',
                          'Filter change and maintenance reminders',
                          'Geofencing configuration for multiple phones',
                          'Indoor air quality alerts (with sensors)',
                        ].map((item) => (
                          <li
                            key={item}
                            className='flex items-start gap-2 text-sm'
                            style={{ color: '#d4d4d8' }}
                          >
                            <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        className='text-sm font-semibold mb-3'
                        style={{ color: '#ef4444' }}
                      >
                        Where it falls short:
                      </p>
                      <ul className='space-y-2'>
                        {[
                          'UI feels dated compared to Nest/Ecobee apps',
                          'Occasional connection delays (5-10 seconds)',
                          'No energy usage reports (just temp history)',
                          'Geofencing setup can be finicky initially',
                          'No dark mode option',
                        ].map((item) => (
                          <li
                            key={item}
                            className='flex items-start gap-2 text-sm'
                            style={{ color: '#d4d4d8' }}
                          >
                            <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                  For voice control, the T9 works with Amazon Alexa and Google
                  Home natively. Voice commands let you adjust the temperature
                  (&quot;Alexa, set the thermostat to 72&quot;), check the
                  current reading (&quot;Hey Google, what&apos;s the
                  temperature inside?&quot;), and switch modes. The
                  integration is reliable and responsive — commands execute in
                  1-2 seconds. The notable gap is Apple HomeKit: if you&apos;re
                  in the Apple ecosystem, the T9 does not offer native
                  HomeKit support. You can work around this with Homebridge
                  or IFTTT, but it&apos;s not a seamless experience.
                </p>
              </section>

              {/* Energy Savings */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-4 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Energy Savings: What to Realistically Expect
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  Honeywell&apos;s marketing claims up to 23% savings on
                  heating and cooling costs with the T9. That number is based
                  on EPA ENERGY STAR estimates for programmable thermostats
                  used consistently. Here is what that looks like in practice:
                </p>
                <div
                  className='rounded-2xl p-6 mb-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3
                    className='text-lg font-bold mb-4'
                    style={{ color: '#f5f5f5' }}
                  >
                    Estimated Annual Savings by Scenario
                  </h3>
                  <div className='space-y-3'>
                    {[
                      {
                        scenario: 'Upgrading from a basic manual thermostat',
                        savings: '$150-$345/year',
                        percent: '15-23%',
                        note: 'Biggest gains — scheduling and geofencing eliminate most waste',
                      },
                      {
                        scenario:
                          'Upgrading from a programmable thermostat (rarely used)',
                        savings: '$100-$250/year',
                        percent: '10-18%',
                        note: 'Geofencing and auto-scheduling pick up where manual programming failed',
                      },
                      {
                        scenario:
                          'Upgrading from an older smart thermostat (no sensors)',
                        savings: '$50-$150/year',
                        percent: '5-10%',
                        note: 'Room sensors reduce overcooling/overheating in unused rooms',
                      },
                      {
                        scenario:
                          'Upgrading from another smart thermostat with sensors',
                        savings: '$0-$50/year',
                        percent: '0-3%',
                        note: 'Marginal gains — mainly from updated algorithms',
                      },
                    ].map((row) => (
                      <div
                        key={row.scenario}
                        className='p-4 rounded-lg'
                        style={{ backgroundColor: '#1a1a1a' }}
                      >
                        <div className='flex items-start justify-between gap-4 mb-1'>
                          <p
                            className='text-sm font-semibold'
                            style={{ color: '#f5f5f5' }}
                          >
                            {row.scenario}
                          </p>
                          <div className='text-right shrink-0'>
                            <p
                              className='text-sm font-bold'
                              style={{ color: '#22c55e' }}
                            >
                              {row.savings}
                            </p>
                            <p
                              className='text-xs'
                              style={{ color: '#a1a1aa' }}
                            >
                              {row.percent}
                            </p>
                          </div>
                        </div>
                        <p className='text-xs' style={{ color: '#a1a1aa' }}>
                          {row.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The T9 is ENERGY STAR certified, which means it meets the
                  EPA&apos;s standards for energy efficiency in connected
                  thermostat testing. At $169-$199, the payback period is
                  typically 6-18 months depending on your starting point and
                  climate. In hot climates like California&apos;s Central
                  Valley or Arizona, where AC bills can run $200-$400/month in
                  summer, the payback happens even faster.
                </p>
              </section>

              {/* Installation */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-4 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Installation: Easier Than You Think
                </h2>
                <p className='mb-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The T9 is designed for DIY installation, and most homeowners
                  can finish in 30-60 minutes. The Resideo app has a built-in
                  installation guide that walks you through each step with
                  photos. Here is the process:
                </p>
                <div className='space-y-4 mb-6'>
                  {[
                    {
                      step: '1',
                      title: 'Turn off HVAC power',
                      desc: 'Switch off the breaker for your heating/cooling system. Never work on thermostat wiring with power on.',
                    },
                    {
                      step: '2',
                      title: 'Remove old thermostat and photograph wires',
                      desc: 'Take a photo of your current wiring before disconnecting anything. Label each wire with the included stickers. Common wires: R (power), W (heat), Y (cool), G (fan), C (common).',
                    },
                    {
                      step: '3',
                      title: 'Mount the T9 backplate',
                      desc: 'Use the included wall anchors and screws. The T9 mounts on a standard thermostat footprint, so existing screw holes usually line up.',
                    },
                    {
                      step: '4',
                      title: 'Connect wires to the T9 backplate',
                      desc: 'Push each labeled wire into the matching terminal. The terminals are clearly labeled and use push-in connectors — no screwdriver needed for the wires themselves.',
                    },
                    {
                      step: '5',
                      title: 'Snap the T9 onto the backplate and power on',
                      desc: 'The thermostat clicks into the backplate magnetically. Turn the HVAC breaker back on. The T9 will boot up and walk you through Wi-Fi setup, sensor pairing, and basic configuration.',
                    },
                    {
                      step: '6',
                      title: 'Place room sensors',
                      desc: 'Position the included room sensor on a shelf or mount it on the wall using the included stand or adhesive. Avoid placing sensors near windows, vents, or direct sunlight for the most accurate readings.',
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className='flex gap-4 p-4 rounded-xl'
                      style={{ backgroundColor: '#141414' }}
                    >
                      <div
                        className='w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold'
                        style={{
                          backgroundColor: '#22c55e',
                          color: '#0a0a0a',
                        }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <p
                          className='text-sm font-bold mb-1'
                          style={{ color: '#f5f5f5' }}
                        >
                          {item.title}
                        </p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className='rounded-2xl p-6'
                  style={{
                    backgroundColor: '#141414',
                    borderLeft: '4px solid #22c55e',
                  }}
                >
                  <p
                    className='text-sm font-bold mb-2'
                    style={{ color: '#f5f5f5' }}
                  >
                    C-Wire Note
                  </p>
                  <p className='text-sm leading-relaxed' style={{ color: '#d4d4d8' }}>
                    The T9 needs a C-wire (common wire) for power. If your
                    existing thermostat does not have a C-wire — which is
                    common in homes built before 2000 — Honeywell includes a
                    C-wire adapter in the box. The adapter installs at your
                    HVAC equipment&apos;s control board and takes an
                    additional 10-15 minutes. If you are not comfortable
                    accessing your furnace&apos;s control board, this is the
                    one step where you might want to call a professional.
                  </p>
                </div>
              </section>

              {/* Pros and Cons */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-6 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Pros and Cons
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  {/* Pros */}
                  <div
                    className='rounded-2xl p-6'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className='flex items-center gap-2 mb-4'>
                      <CheckCircle
                        className='h-5 w-5'
                        style={{ color: '#22c55e' }}
                      />
                      <h3
                        className='text-lg font-bold'
                        style={{ color: '#22c55e' }}
                      >
                        Pros
                      </h3>
                    </div>
                    <ul className='space-y-3'>
                      {[
                        'Room sensor included in the box (competitors charge extra)',
                        'Supports up to 20 sensors for whole-home coverage',
                        'Sensors measure both temperature and humidity',
                        'Geofencing works with multiple phones',
                        'Smart Response pre-conditions your home on schedule',
                        'ENERGY STAR certified with up to 23% savings',
                        'C-wire adapter included (no extra purchase needed)',
                        'Broad HVAC compatibility including heat pumps',
                        'Works with Alexa, Google Home, and IFTTT',
                        '$169-$199 undercuts Ecobee Premium by $50-$80',
                        '5-year warranty',
                        'DIY installation in 30-60 minutes',
                      ].map((pro) => (
                        <li
                          key={pro}
                          className='flex items-start gap-2 text-sm'
                          style={{ color: '#d4d4d8' }}
                        >
                          <Check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div
                    className='rounded-2xl p-6'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className='flex items-center gap-2 mb-4'>
                      <XCircle
                        className='h-5 w-5'
                        style={{ color: '#ef4444' }}
                      />
                      <h3
                        className='text-lg font-bold'
                        style={{ color: '#ef4444' }}
                      >
                        Cons
                      </h3>
                    </div>
                    <ul className='space-y-3'>
                      {[
                        'No Apple HomeKit support (deal-breaker for some)',
                        'Resideo app UI feels dated and occasionally sluggish',
                        'No built-in occupancy sensor on the thermostat itself',
                        'No energy usage reports (just temperature history)',
                        'Touchscreen is functional but not as sharp as Nest or Ecobee',
                        'Wi-Fi is 2.4 GHz only (no 5 GHz support)',
                        'Sensors use proprietary 920 MHz protocol (cannot mix brands)',
                        'No built-in air quality sensor (Ecobee Premium has one)',
                        'Geofencing can be unreliable on some Android phones',
                      ].map((con) => (
                        <li
                          key={con}
                          className='flex items-start gap-2 text-sm'
                          style={{ color: '#d4d4d8' }}
                        >
                          <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Comparison Table */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-4 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  How the T9 Compares: Nest vs. Ecobee vs. Honeywell T10 Pro
                </h2>
                <p className='mb-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The smart thermostat market has three strong options in the
                  room-sensor category. Here is how the Honeywell T9 stacks up
                  against the Google Nest Learning Thermostat (4th gen), the
                  Ecobee Premium, and Honeywell&apos;s own T10 Pro.
                </p>
                <div
                  className='rounded-2xl overflow-x-auto'
                  style={{ backgroundColor: '#141414' }}
                >
                  <table className='w-full text-sm min-w-[700px]'>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #27272a' }}>
                        <th
                          className='py-3 px-4 text-left font-bold'
                          style={{ color: '#a1a1aa' }}
                        >
                          Feature
                        </th>
                        <th
                          className='py-3 px-4 text-left font-bold'
                          style={{ color: '#22c55e' }}
                        >
                          Honeywell T9
                        </th>
                        <th
                          className='py-3 px-4 text-left font-bold'
                          style={{ color: '#f5f5f5' }}
                        >
                          Nest (4th Gen)
                        </th>
                        <th
                          className='py-3 px-4 text-left font-bold'
                          style={{ color: '#f5f5f5' }}
                        >
                          Ecobee Premium
                        </th>
                        <th
                          className='py-3 px-4 text-left font-bold'
                          style={{ color: '#f5f5f5' }}
                        >
                          Honeywell T10 Pro
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          feature: 'Price',
                          t9: '$169-$199',
                          nest: '$249',
                          ecobee: '$249',
                          t10: '$219-$259',
                        },
                        {
                          feature: 'Sensor Included',
                          t9: 'Yes (1)',
                          nest: 'No (sold separately)',
                          ecobee: 'Yes (1)',
                          t10: 'Yes (1)',
                        },
                        {
                          feature: 'Max Sensors',
                          t9: '20',
                          nest: '6',
                          ecobee: '32',
                          t10: '20',
                        },
                        {
                          feature: 'Sensor Measures',
                          t9: 'Temp + Humidity',
                          nest: 'Temp + Occupancy',
                          ecobee: 'Temp + Occupancy',
                          t10: 'Temp + Humidity',
                        },
                        {
                          feature: 'Learning',
                          t9: 'Smart Response',
                          nest: 'Full ML learning',
                          ecobee: 'Eco+ algorithms',
                          t10: 'Smart Response',
                        },
                        {
                          feature: 'Geofencing',
                          t9: 'Yes',
                          nest: 'Yes',
                          ecobee: 'Yes',
                          t10: 'Yes',
                        },
                        {
                          feature: 'Apple HomeKit',
                          t9: 'No',
                          nest: 'No',
                          ecobee: 'Yes',
                          t10: 'No',
                        },
                        {
                          feature: 'Alexa Built-in',
                          t9: 'No',
                          nest: 'No',
                          ecobee: 'Yes (speaker)',
                          t10: 'No',
                        },
                        {
                          feature: 'Air Quality Sensor',
                          t9: 'No',
                          nest: 'No',
                          ecobee: 'Yes',
                          t10: 'No',
                        },
                        {
                          feature: 'Display',
                          t9: '3.5" color touch',
                          nest: '2.7" LCD (rotating bezel)',
                          ecobee: '3.5" color touch',
                          t10: '3.5" color touch',
                        },
                        {
                          feature: 'ENERGY STAR',
                          t9: 'Yes',
                          nest: 'Yes',
                          ecobee: 'Yes',
                          t10: 'Yes',
                        },
                        {
                          feature: 'Warranty',
                          t9: '5 years',
                          nest: '2 years',
                          ecobee: '3 years',
                          t10: '5 years',
                        },
                        {
                          feature: 'Pro Install Required',
                          t9: 'No (DIY)',
                          nest: 'No (DIY)',
                          ecobee: 'No (DIY)',
                          t10: 'Yes (pro only)',
                        },
                      ].map((row, i) => (
                        <tr
                          key={row.feature}
                          style={{
                            borderBottom:
                              i < 12 ? '1px solid #27272a' : 'none',
                          }}
                        >
                          <td
                            className='py-3 px-4 font-semibold'
                            style={{ color: '#a1a1aa' }}
                          >
                            {row.feature}
                          </td>
                          <td
                            className='py-3 px-4 font-medium'
                            style={{ color: '#22c55e' }}
                          >
                            {row.t9}
                          </td>
                          <td
                            className='py-3 px-4'
                            style={{ color: '#d4d4d8' }}
                          >
                            {row.nest}
                          </td>
                          <td
                            className='py-3 px-4'
                            style={{ color: '#d4d4d8' }}
                          >
                            {row.ecobee}
                          </td>
                          <td
                            className='py-3 px-4'
                            style={{ color: '#d4d4d8' }}
                          >
                            {row.t10}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Comparison Summary */}
                <div className='mt-6 space-y-4'>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <h4
                      className='text-sm font-bold mb-2'
                      style={{ color: '#f5f5f5' }}
                    >
                      Choose the Honeywell T9 if:
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      You want room sensors without paying Ecobee or Nest
                      prices. The T9 is the best value in the room-sensor
                      thermostat category. It also has the longest warranty (5
                      years vs. 2-3 for competitors) and includes a C-wire
                      adapter that others charge extra for.
                    </p>
                  </div>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <h4
                      className='text-sm font-bold mb-2'
                      style={{ color: '#f5f5f5' }}
                    >
                      Choose the Nest Learning Thermostat if:
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      Design matters to you and you are deep in the Google
                      ecosystem. The Nest is objectively the best-looking
                      thermostat on the market, and its learning algorithms
                      are the most mature. The $80 premium over the T9 is
                      mostly for aesthetics and Google Home integration.
                    </p>
                  </div>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <h4
                      className='text-sm font-bold mb-2'
                      style={{ color: '#f5f5f5' }}
                    >
                      Choose the Ecobee Premium if:
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      You need Apple HomeKit support, want a built-in Alexa
                      speaker, or care about indoor air quality monitoring.
                      The Ecobee Premium is the most feature-rich smart
                      thermostat on the market — you just pay a premium for
                      those extras ($249 vs. $169-$199 for the T9).
                    </p>
                  </div>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <h4
                      className='text-sm font-bold mb-2'
                      style={{ color: '#f5f5f5' }}
                    >
                      Choose the Honeywell T10 Pro if:
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      You want a professionally installed thermostat with the
                      same Honeywell room sensor ecosystem. The T10 Pro is
                      essentially a contractor-grade T9 with enhanced
                      diagnostics and installation support. It is not sold
                      retail — you get it through an HVAC professional.
                    </p>
                  </div>
                </div>
              </section>

              {/* Who Should Buy This */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-4 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Who Should Buy the Honeywell T9?
                </h2>
                <div className='space-y-4'>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className='flex items-start gap-3'>
                      <CheckCircle
                        className='h-5 w-5 mt-0.5 shrink-0'
                        style={{ color: '#22c55e' }}
                      />
                      <div>
                        <p
                          className='text-sm font-bold mb-1'
                          style={{ color: '#f5f5f5' }}
                        >
                          Homeowners with uneven temperatures
                        </p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          If your second floor is always hotter than the first,
                          or certain rooms are always uncomfortable, the room
                          sensors give the T9 the information it needs to make
                          better decisions. This is the single biggest reason
                          to choose the T9 over a basic smart thermostat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className='flex items-start gap-3'>
                      <CheckCircle
                        className='h-5 w-5 mt-0.5 shrink-0'
                        style={{ color: '#22c55e' }}
                      />
                      <div>
                        <p
                          className='text-sm font-bold mb-1'
                          style={{ color: '#f5f5f5' }}
                        >
                          Budget-conscious smart home buyers
                        </p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          At $169-$199 with a sensor included, the T9 delivers
                          90% of the Ecobee Premium&apos;s functionality at
                          68-80% of the price. If you do not need HomeKit or a
                          built-in Alexa speaker, the T9 is the smarter
                          financial decision.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className='flex items-start gap-3'>
                      <CheckCircle
                        className='h-5 w-5 mt-0.5 shrink-0'
                        style={{ color: '#22c55e' }}
                      />
                      <div>
                        <p
                          className='text-sm font-bold mb-1'
                          style={{ color: '#f5f5f5' }}
                        >
                          Families with different comfort needs
                        </p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          Parents who want the nursery at 70 degrees overnight
                          while keeping the rest of the house at 66. Remote
                          workers who need the home office comfortable during
                          the day. The sensor scheduling handles all of this
                          automatically.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='rounded-xl p-5'
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className='flex items-start gap-3'>
                      <XCircle
                        className='h-5 w-5 mt-0.5 shrink-0'
                        style={{ color: '#ef4444' }}
                      />
                      <div>
                        <p
                          className='text-sm font-bold mb-1'
                          style={{ color: '#f5f5f5' }}
                        >
                          Skip it if you are all-in on Apple
                        </p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          If HomeKit is non-negotiable, go with the Ecobee
                          Premium. The workarounds (Homebridge, IFTTT) are
                          possible but clunky. The Ecobee is the only
                          top-tier smart thermostat with native HomeKit
                          support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className='mb-14'>
                <h2
                  className='text-2xl md:text-3xl font-extrabold mb-6 tracking-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Frequently Asked Questions
                </h2>
                <div className='space-y-4'>
                  {faqSchema.mainEntity.map((faq) => (
                    <div
                      key={faq.name}
                      className='rounded-xl p-5'
                      style={{ backgroundColor: '#141414' }}
                    >
                      <h3
                        className='text-base font-bold mb-2'
                        style={{ color: '#f5f5f5' }}
                      >
                        {faq.name}
                      </h3>
                      <p
                        className='text-sm leading-relaxed'
                        style={{ color: '#d4d4d8' }}
                      >
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final Verdict */}
              <section className='mb-14'>
                <div
                  className='rounded-2xl p-6 md:p-8'
                  style={{
                    backgroundColor: '#141414',
                    border: '1px solid #27272a',
                  }}
                >
                  <div className='flex items-center gap-3 mb-4'>
                    <h2
                      className='text-2xl font-extrabold tracking-tight'
                      style={{ color: '#f5f5f5' }}
                    >
                      Final Verdict
                    </h2>
                    <div className='flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full'>
                      <Star className='h-5 w-5 text-yellow-500 fill-yellow-500' />
                      <span
                        className='font-bold text-lg'
                        style={{ color: '#f5f5f5' }}
                      >
                        4.3
                      </span>
                      <span className='text-sm' style={{ color: '#a1a1aa' }}>
                        / 5
                      </span>
                    </div>
                  </div>

                  {/* Rating Breakdown */}
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
                    {[
                      { category: 'Room Sensors', score: '4.7' },
                      { category: 'Energy Savings', score: '4.5' },
                      { category: 'Ease of Install', score: '4.5' },
                      { category: 'App Quality', score: '3.5' },
                      { category: 'Voice Control', score: '4.2' },
                      { category: 'Build Quality', score: '4.3' },
                      { category: 'Value', score: '4.6' },
                      { category: 'Smart Features', score: '4.1' },
                    ].map((rating) => (
                      <div key={rating.category} className='text-center'>
                        <p
                          className='text-2xl font-extrabold'
                          style={{ color: '#22c55e' }}
                        >
                          {rating.score}
                        </p>
                        <p
                          className='text-xs font-semibold'
                          style={{ color: '#a1a1aa' }}
                        >
                          {rating.category}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p
                    className='leading-relaxed mb-4'
                    style={{ color: '#d4d4d8' }}
                  >
                    The Honeywell Home T9 is the best value smart thermostat
                    with room sensors in 2026. It does not have the
                    Nest&apos;s design elegance or the Ecobee&apos;s feature
                    list, but it nails the fundamentals: accurate multi-room
                    temperature control, reliable geofencing, solid voice
                    assistant integration, and a price that undercuts the
                    competition by $50-$80 — while including a sensor and
                    C-wire adapter in the box.
                  </p>
                  <p
                    className='leading-relaxed mb-4'
                    style={{ color: '#d4d4d8' }}
                  >
                    The biggest weakness is the Resideo app. It works, it is
                    reliable, but it feels like it was designed in 2019 and
                    never meaningfully updated. If Honeywell refreshes the
                    app experience, the T9 would easily jump to a 4.5+
                    rating. The lack of HomeKit support is the other notable
                    gap, but that only matters if you are in the Apple
                    ecosystem.
                  </p>
                  <p
                    className='leading-relaxed mb-6'
                    style={{ color: '#d4d4d8' }}
                  >
                    For most homeowners — especially those upgrading from a
                    manual or basic programmable thermostat — the T9
                    delivers the most comfort improvement per dollar spent.
                    Room sensors are no longer a luxury feature reserved for
                    $250+ thermostats. The T9 proves you can get genuine
                    multi-room intelligence for under $200.
                  </p>

                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      href='#'
                      className='inline-flex items-center justify-center gap-2 font-semibold px-8 py-3 rounded-xl transition-all text-center'
                      style={{
                        backgroundColor: '#22c55e',
                        color: '#0a0a0a',
                      }}
                    >
                      Check Price on Amazon
                      <ArrowRight className='h-4 w-4' />
                    </a>
                    <Link
                      href='/reviews/best-smart-thermostat'
                      className='inline-flex items-center justify-center gap-2 font-semibold px-8 py-3 rounded-xl transition-all text-center'
                      style={{
                        backgroundColor: '#1a1a1a',
                        color: '#f5f5f5',
                        border: '1px solid #27272a',
                      }}
                    >
                      See All Smart Thermostats
                      <ArrowRight className='h-4 w-4' />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Reviews */}
              <section>
                <h2
                  className='text-xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  Related Reviews
                </h2>
                <div className='grid md:grid-cols-2 gap-4'>
                  {[
                    {
                      title: 'Best Smart Thermostats 2026',
                      desc: 'Full comparison of every smart thermostat worth buying.',
                      href: '/reviews/best-smart-thermostat',
                    },
                    {
                      title: 'MrCool DIY 4th Gen Mini Split Review',
                      desc: 'The only mini split you can install yourself — no HVAC tech needed.',
                      href: '/reviews/mrcool-diy-4th-gen-review',
                    },
                    {
                      title: 'Best Mini Split AC Systems 2026',
                      desc: 'Ductless cooling and heating for every budget.',
                      href: '/reviews/best-mini-split-ac',
                    },
                    {
                      title: 'Best Portable Power Stations 2026',
                      desc: 'Keep your HVAC running during blackouts with battery backup.',
                      href: '/reviews/best-portable-power-stations',
                    },
                  ].map((related) => (
                    <Link
                      key={related.href}
                      href={related.href}
                      className='block rounded-xl p-5 transition-all group'
                      style={{
                        backgroundColor: '#141414',
                        border: '1px solid transparent',
                      }}
                    >
                      <p
                        className='text-sm font-bold mb-1 group-hover:underline'
                        style={{ color: '#f5f5f5' }}
                      >
                        {related.title}
                      </p>
                      <p className='text-xs' style={{ color: '#a1a1aa' }}>
                        {related.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
