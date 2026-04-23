import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Battery,
  Zap,
  DollarSign,
  Star,
  Shield,
  Sun,
  Check,
  X,
  ChevronRight,
  Clock,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Home EV Chargers (Level 2) in 2026: ChargePoint vs Wallbox vs JuiceBox vs Tesla',
  description:
    'Compare the best Level 2 home EV chargers in 2026. In-depth reviews of ChargePoint Home Flex, Wallbox Pulsar Plus, JuiceBox 48, Emporia Smart, Grizzl-E Classic, and Tesla Wall Connector. Installation costs, smart features, and solar pairing guide.',
  alternates: {
    canonical: '/reviews/best-ev-charger',
  },
  openGraph: {
    title: 'Best Home EV Chargers (Level 2) in 2026',
    description:
      'ChargePoint Home Flex vs Wallbox Pulsar Plus vs JuiceBox 48 vs Emporia vs Grizzl-E vs Tesla. Full specs, pros/cons, and buyer guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Home EV Chargers (Level 2) in 2026: ChargePoint vs Wallbox vs JuiceBox vs Tesla',
  description:
    'Compare the best Level 2 home EV chargers in 2026. In-depth reviews covering ChargePoint Home Flex, Wallbox Pulsar Plus, JuiceBox 48, Emporia Smart Level 2, Grizzl-E Classic, and Tesla Wall Connector.',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/best-ev-charger',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best Level 2 home EV charger in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ChargePoint Home Flex is our top pick for 2026. It delivers up to 50 amps (12 kW) of charging power, works with every EV on the market, has an excellent app with energy tracking and scheduling, and is backed by ChargePoint\'s extensive charging network ecosystem. It offers the best balance of speed, features, and reliability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to install a Level 2 EV charger at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Level 2 EV charger installation typically costs $500 to $2,000 including parts and labor. The charger itself runs $400 to $700 for most models. Electrical work depends on your panel\'s existing capacity: if you need a panel upgrade (from 100A to 200A), total costs can reach $3,000 to $5,000. A simple installation with an existing 240V outlet nearby can be as low as $200 to $400 for labor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I plug an EV charger into a regular outlet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every EV comes with a Level 1 portable charger that plugs into a standard 120V household outlet (NEMA 5-15). However, Level 1 charging only adds 3 to 5 miles of range per hour, meaning a full charge can take 40 to 60 hours. A Level 2 charger on a 240V circuit adds 25 to 40+ miles per hour, making it far more practical for daily driving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a smart EV charger or is a basic one fine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A smart charger is worth it for most EV owners. Smart features like scheduled charging let you take advantage of off-peak electricity rates (which can cut charging costs by 40-60% on time-of-use plans). Energy monitoring helps track costs, and Wi-Fi connectivity enables firmware updates. If you have solar panels, a smart charger can coordinate with your solar production for maximum savings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can non-Tesla EVs use the Tesla Wall Connector?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, as of 2025 the Tesla Wall Connector ships with a NACS connector that works with Tesla vehicles natively. Non-Tesla EVs with CCS ports can use the Tesla Wall Connector with an adapter, or you can purchase the J1772 version. With most major automakers adopting NACS starting in 2025-2026, the Tesla Wall Connector is becoming increasingly universal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many amps do I need for my EV charger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most EV owners, a 40-amp charger on a 50-amp circuit is the sweet spot, delivering about 9.6 kW and adding 28-35 miles of range per hour. If you have a long commute (60+ miles daily) or drive a large EV with a big battery, a 48-amp charger on a 60-amp circuit delivers up to 11.5 kW. A 32-amp charger (7.7 kW) works fine if you drive under 40 miles per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge my EV with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Pairing a home EV charger with rooftop solar is one of the best ways to reduce or eliminate charging costs. A typical 7 kW solar system in California produces about 30-35 kWh per day, which is enough to fully charge most EVs. Smart chargers with solar integration (like the Wallbox Pulsar Plus or JuiceBox 48) can schedule charging during peak solar production hours for maximum self-consumption.',
      },
    },
  ],
};

interface Charger {
  name: string;
  badge: string;
  price: string;
  amps: string;
  power: string;
  cordLength: string;
  connector: string;
  smart: string;
  warranty: string;
  affiliateLink: string;
}

const chargers: Charger[] = [
  {
    name: 'ChargePoint Home Flex',
    badge: 'Best Overall',
    price: '$549',
    amps: '16-50A (adjustable)',
    power: 'Up to 12 kW',
    cordLength: '23 ft',
    connector: 'J1772 / NACS',
    smart: 'Wi-Fi, App, Alexa/Google',
    warranty: '3 years',
    affiliateLink: '#',
  },
  {
    name: 'Emporia Smart Level 2',
    badge: 'Best Budget',
    price: '$399',
    amps: '48A',
    power: 'Up to 11.5 kW',
    cordLength: '24 ft',
    connector: 'J1772',
    smart: 'Wi-Fi, App, Energy Monitoring',
    warranty: '3 years',
    affiliateLink: '#',
  },
  {
    name: 'Grizzl-E Classic',
    badge: 'Most Durable',
    price: '$439',
    amps: '16-40A (adjustable)',
    power: 'Up to 9.6 kW',
    cordLength: '24 ft',
    connector: 'J1772',
    smart: 'None (Classic model)',
    warranty: '3 years',
    affiliateLink: '#',
  },
  {
    name: 'JuiceBox 48',
    badge: 'Best Smart Features',
    price: '$589',
    amps: '48A',
    power: 'Up to 11.5 kW',
    cordLength: '25 ft',
    connector: 'J1772',
    smart: 'Wi-Fi, App, TOU Scheduling, Alexa',
    warranty: '3 years',
    affiliateLink: '#',
  },
  {
    name: 'Wallbox Pulsar Plus',
    badge: 'Best Design',
    price: '$549',
    amps: '48A',
    power: 'Up to 11.5 kW',
    cordLength: '25 ft',
    connector: 'J1772 / NACS',
    smart: 'Wi-Fi, Bluetooth, App, Solar Integration',
    warranty: '3 years',
    affiliateLink: '#',
  },
  {
    name: 'Tesla Wall Connector',
    badge: 'Best for Tesla',
    price: '$475',
    amps: '48A',
    power: 'Up to 11.5 kW',
    cordLength: '24 ft',
    connector: 'NACS (J1772 adapter avail.)',
    smart: 'Wi-Fi, Tesla App, Power Sharing',
    warranty: '4 years',
    affiliateLink: '#',
  },
];

export default function BestEVCharger() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen py-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Reviews
              </Link>
            </nav>

            {/* Article Header */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                Comparison Guide
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight" style={{ color: '#f5f5f5' }}>
                Best Home EV Chargers (Level 2) in 2026: The Complete Buyer&apos;s Guide
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                If you own an electric vehicle &mdash; or you&apos;re about to buy one &mdash; a
                Level 2 home charger is the single best upgrade you can make. Instead of waiting
                40+ hours on a standard wall outlet, a Level 2 charger can fully replenish your
                battery overnight while you sleep. In 2026, with electricity costs rising and
                time-of-use rates spreading across California, the right charger can also save you
                hundreds of dollars per year by scheduling sessions during off-peak hours.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We researched and compared every major home EV charger on the market, evaluating
                charging speed, smart features, build quality, installation flexibility, and
                long-term value. Here are the six best Level 2 EV chargers for 2026 &mdash; and
                exactly which one to buy for your situation.
              </p>
            </div>

            {/* ========== QUICK PICKS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Star className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Our Quick Picks
              </h2>
              <div className="grid gap-3">
                {[
                  { label: 'Best Overall', pick: 'ChargePoint Home Flex', why: '50A adjustable, universal compatibility, excellent app' },
                  { label: 'Best Budget', pick: 'Emporia Smart Level 2', why: '48A smart charger under $400 with energy monitoring' },
                  { label: 'Most Durable', pick: 'Grizzl-E Classic', why: 'NEMA 4 rated, works in extreme temps, no-frills reliability' },
                  { label: 'Best Smart Features', pick: 'JuiceBox 48', why: 'TOU scheduling, solar integration, Alexa voice control' },
                  { label: 'Best Design', pick: 'Wallbox Pulsar Plus', why: 'Compact, sleek design with Bluetooth + Wi-Fi + solar pairing' },
                  { label: 'Best for Tesla', pick: 'Tesla Wall Connector', why: 'Seamless Tesla integration, NACS native, power sharing' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg p-4"
                    style={{ backgroundColor: '#141414', borderLeft: '3px solid #22c55e' }}
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <div>
                      <span className="font-semibold" style={{ color: '#22c55e' }}>{item.label}:</span>{' '}
                      <span className="font-semibold" style={{ color: '#f5f5f5' }}>{item.pick}</span>{' '}
                      <span style={{ color: '#a1a1aa' }}>&mdash; {item.why}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Battery className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#22c55e33' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Charger</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Amps</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Power</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Cord</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Connector</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Smart</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Warranty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chargers.map((c, i) => (
                      <tr
                        key={i}
                        className="border-t"
                        style={{ borderColor: '#ffffff10' }}
                      >
                        <td className="p-3">
                          <div className="font-semibold" style={{ color: '#f5f5f5' }}>{c.name}</div>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>
                            {c.badge}
                          </span>
                        </td>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>{c.price}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{c.amps}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{c.power}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{c.cordLength}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{c.connector}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{c.smart}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{c.warranty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#f5f5f5' }}>
                Detailed Reviews
              </h2>

              {/* --- ChargePoint Home Flex --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Best Overall</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2" style={{ color: '#f5f5f5' }}>ChargePoint Home Flex</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>$549</div>
                    <div className="flex items-center gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" style={{ color: '#22c55e' }} />)}</div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The ChargePoint Home Flex remains the gold standard for home EV charging in 2026.
                  Its adjustable amperage (16A to 50A) means it works with any electrical panel
                  &mdash; whether you have a 20-amp spare breaker or a full 60-amp dedicated circuit.
                  At maximum output, it delivers 12 kW and adds up to 37 miles of range per hour,
                  enough to fully charge any EV overnight.
                </p>
                <p className="leading-relaxed mb-5" style={{ color: '#a1a1aa' }}>
                  The ChargePoint app is best-in-class: you get real-time charging status,
                  energy usage history, cost tracking, and scheduling down to the minute. It
                  integrates with Amazon Alexa and Google Home for voice control. The 23-foot
                  cable with a holster keeps things tidy in your garage. UL-listed and Energy
                  Star certified, it is built for daily reliability.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Adjustable 16-50A fits any panel</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Industry-leading app and scheduling</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Works with every EV (J1772 + NACS)</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Energy Star certified, UL-listed</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />23-ft cord with built-in cable holster</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Higher price than budget options</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Requires hardwire for 50A (no plug option at max)</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />No built-in solar integration</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="chargepoint-home-flex"
                  source="best-ev-charger"
                  variant="primary"
                  label="Check Price — ChargePoint Home Flex"
                  showPrice
                />
              </div>

              {/* --- Emporia Smart Level 2 --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Best Budget</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2" style={{ color: '#f5f5f5' }}>Emporia Smart Level 2</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>$399</div>
                    <div className="flex items-center gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" style={{ color: j < 4 ? '#22c55e' : '#a1a1aa' }} />)}</div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Emporia has disrupted the EV charger market the same way they disrupted home
                  energy monitoring &mdash; by delivering premium smart features at a budget price.
                  At under $400, the Emporia Smart Level 2 is the cheapest 48-amp smart charger
                  you can buy, and it does not feel like a compromise. You get Wi-Fi connectivity,
                  a clean app with real-time power monitoring, charge scheduling, and the ability
                  to integrate with Emporia&apos;s home energy monitoring system for a whole-home
                  energy dashboard.
                </p>
                <p className="leading-relaxed mb-5" style={{ color: '#a1a1aa' }}>
                  Where Emporia really shines is if you already use their Vue energy monitor.
                  The charger plugs into the same app, giving you a single view of your entire
                  home&apos;s energy consumption alongside EV charging data. The 24-foot cord is
                  generous, and you can choose between a NEMA 14-50 plug-in or hardwired
                  installation. For anyone who wants smart charging without paying $550+, the
                  Emporia is the clear winner.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Unbeatable price for a 48A smart charger</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Integrates with Emporia energy monitoring</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />24-ft cable, NEMA 14-50 plug or hardwire</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Real-time energy usage tracking in app</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Not adjustable &mdash; fixed 48A only</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />App is functional but less polished than ChargePoint</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Brand less established in EV charging space</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="emporia-smart-level-2"
                  source="best-ev-charger"
                  variant="primary"
                  label="Check Price — Emporia Smart Level 2"
                  showPrice
                />
              </div>

              {/* --- Grizzl-E Classic --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Most Durable</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2" style={{ color: '#f5f5f5' }}>Grizzl-E Classic</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>$439</div>
                    <div className="flex items-center gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" style={{ color: j < 4 ? '#22c55e' : '#a1a1aa' }} />)}</div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Built in Canada and designed to survive harsh conditions, the Grizzl-E Classic
                  is the charger you buy if you want something that simply works &mdash; forever.
                  It carries a NEMA 4 rating (IP44 equivalent), meaning it handles rain, dust,
                  snow, and extreme temperatures from -22&deg;F to 122&deg;F without flinching.
                  The adjustable amperage (16A, 24A, 32A, or 40A via internal DIP switches) gives
                  you installation flexibility without needing an app.
                </p>
                <p className="leading-relaxed mb-5" style={{ color: '#a1a1aa' }}>
                  The Grizzl-E Classic is the anti-smart charger &mdash; and that is its strength.
                  No Wi-Fi means no firmware bugs, no app outages, and no cloud dependency. You
                  plug it in and it charges. The cable is noticeably thicker than competitors,
                  and the unit feels overbuilt in the best possible way. If you park outside or
                  in an open carport, the Grizzl-E is the only charger on this list we would
                  trust without hesitation in exposed conditions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />NEMA 4 rated &mdash; extreme weather durability</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Adjustable amps via DIP switches (no app needed)</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Premium build quality, thick cable</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />No Wi-Fi/app dependency = no failure points</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />No smart features (Classic model)</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Max 40A (9.6 kW) vs 48A competitors</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Utilitarian design &mdash; not the prettiest</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="grizzl-e-classic"
                  source="best-ev-charger"
                  variant="primary"
                  label="Check Price — Grizzl-E Classic"
                  showPrice
                />
              </div>

              {/* --- JuiceBox 48 --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Best Smart Features</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2" style={{ color: '#f5f5f5' }}>JuiceBox 48</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>$589</div>
                    <div className="flex items-center gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" style={{ color: j < 4 ? '#22c55e' : '#a1a1aa' }} />)}</div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The JuiceBox 48 (now under the Enel X Way brand) packs the most intelligent
                  features of any home charger. Its standout capability is automatic TOU rate
                  optimization: tell the app your utility plan and it figures out the cheapest
                  hours to charge, potentially saving you hundreds annually on California&apos;s
                  steep peak rates. It also supports utility demand response programs, meaning
                  you could earn credits for reducing charging during grid stress events.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Automatic TOU rate optimization</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Utility demand response participation</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Amazon Alexa integration</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />25-ft cable, NEMA 14-50 plug or hardwire</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Enel X Way brand transition caused some app confusion</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Higher price for similar hardware specs</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Occasional Wi-Fi connectivity complaints</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="juicebox-48"
                  source="best-ev-charger"
                  variant="primary"
                  label="Check Price — JuiceBox 48"
                  showPrice
                />
              </div>

              {/* --- Wallbox Pulsar Plus --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Best Design</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2" style={{ color: '#f5f5f5' }}>Wallbox Pulsar Plus</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>$549</div>
                    <div className="flex items-center gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" style={{ color: '#22c55e' }} />)}</div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Wallbox Pulsar Plus is the charger you buy when aesthetics matter. About
                  the size of a toaster, it is the most compact Level 2 charger on the market
                  and comes in multiple colors. But looks aside, it is a serious performer:
                  48A output, Bluetooth + Wi-Fi dual connectivity, and native solar integration
                  through Wallbox&apos;s Eco-Smart feature, which syncs charging with your
                  rooftop solar production for maximum self-consumption.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Most compact design on the market</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Native solar integration (Eco-Smart)</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Bluetooth + Wi-Fi dual connectivity</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Power Boost prevents tripping your main breaker</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Hardwire only &mdash; no NEMA plug option</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Solar integration requires Wallbox energy meter ($100+)</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Customer support can be slow</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="wallbox-pulsar-plus"
                  source="best-ev-charger"
                  variant="primary"
                  label="Check Price — Wallbox Pulsar Plus"
                  showPrice
                />
              </div>

              {/* --- Tesla Wall Connector --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Best for Tesla</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2" style={{ color: '#f5f5f5' }}>Tesla Wall Connector</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>$475</div>
                    <div className="flex items-center gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" style={{ color: j < 4 ? '#22c55e' : '#a1a1aa' }} />)}</div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Tesla&apos;s Wall Connector is the obvious choice for Tesla owners, delivering
                  seamless integration with the Tesla ecosystem. It uses the NACS connector
                  natively (no adapter needed for Tesla vehicles) and communicates directly with
                  your car for smart charging, scheduled departures, and energy tracking through
                  the Tesla app. The power-sharing feature is unique: install up to six Wall
                  Connectors on a single circuit and they intelligently distribute available
                  power across all connected vehicles.
                </p>
                <p className="leading-relaxed mb-5" style={{ color: '#a1a1aa' }}>
                  With most major automakers adopting NACS in 2025-2026, the Tesla Wall Connector
                  is becoming increasingly universal. Non-Tesla CCS vehicles can charge with an
                  adapter, and a dedicated J1772 version is available for households with mixed
                  EV brands.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Seamless Tesla app integration</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Power sharing across up to 6 units</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />4-year warranty (longest in this roundup)</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Sleek, minimal design with LED status ring</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Competitive pricing at $475</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Non-Tesla vehicles need adapter for NACS version</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Hardwire only installation</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Smart features limited outside Tesla ecosystem</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="tesla-wall-connector"
                  source="best-ev-charger"
                  variant="primary"
                  label="Check Price — Tesla Wall Connector"
                  showPrice
                />
              </div>
            </section>

            {/* ========== LEVEL 1 vs LEVEL 2 vs DC FAST ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Zap className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Level 1 vs Level 2 vs DC Fast Charging: What&apos;s the Difference?
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#22c55e33' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}></th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Level 1</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Level 2</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>DC Fast</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { spec: 'Voltage', l1: '120V', l2: '240V', dc: '200-1,000V' },
                      { spec: 'Typical Power', l1: '1.2-1.4 kW', l2: '7.7-19.2 kW', dc: '50-350 kW' },
                      { spec: 'Range per Hour', l1: '3-5 miles', l2: '25-40+ miles', dc: '150-800+ miles' },
                      { spec: 'Full Charge Time', l1: '40-60 hours', l2: '4-10 hours', dc: '20-60 min' },
                      { spec: 'Installation', l1: 'Standard outlet', l2: '240V circuit required', dc: 'Commercial only' },
                      { spec: 'Cost (charger)', l1: 'Included with EV', l2: '$400-$700', dc: '$10,000-$100,000+' },
                      { spec: 'Best For', l1: 'Emergency / very short commutes', l2: 'Daily home charging', dc: 'Road trips / commercial' },
                    ].map((row, i) => (
                      <tr key={i} className="border-t" style={{ borderColor: '#ffffff10' }}>
                        <td className="p-3 font-semibold" style={{ color: '#f5f5f5' }}>{row.spec}</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>{row.l1}</td>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>{row.l2}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{row.dc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Bottom line:</strong> Level 2 is the sweet
                spot for home charging. Level 1 is too slow for anyone driving more than 20 miles
                a day, and DC fast charging is for commercial stations and road trips only. A
                Level 2 charger on a 240V circuit will fully charge any EV overnight.
              </p>
            </section>

            {/* ========== AMPERAGE & SPEED GUIDE ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Shield className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Amperage and Charging Speed Guide
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Amperage determines how fast your charger delivers power. Higher amps mean faster
                charging, but you need the electrical panel capacity to support it. Here is what
                each amperage level actually delivers in real-world charging:
              </p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#22c55e33' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Charger Amps</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Circuit Breaker</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Power (kW)</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Miles/Hour</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Full Charge (60 kWh)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { amps: '16A', breaker: '20A', kw: '3.8 kW', mph: '12-15', full: '~16 hours' },
                      { amps: '24A', breaker: '30A', kw: '5.8 kW', mph: '18-22', full: '~10 hours' },
                      { amps: '32A', breaker: '40A', kw: '7.7 kW', mph: '25-30', full: '~8 hours' },
                      { amps: '40A', breaker: '50A', kw: '9.6 kW', mph: '28-35', full: '~6.5 hours' },
                      { amps: '48A', breaker: '60A', kw: '11.5 kW', mph: '33-40', full: '~5.5 hours' },
                      { amps: '50A', breaker: '60A', kw: '12.0 kW', mph: '35-42', full: '~5 hours' },
                    ].map((row, i) => (
                      <tr key={i} className="border-t" style={{ borderColor: '#ffffff10' }}>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>{row.amps}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{row.breaker}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{row.kw}</td>
                        <td className="p-3 font-semibold" style={{ color: '#f5f5f5' }}>{row.mph}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{row.full}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded-lg p-4" style={{ backgroundColor: '#141414' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>NEC 80% Rule:</strong> Your circuit breaker
                  must be rated for 125% of the charger&apos;s continuous amperage. A 40A charger
                  needs a 50A breaker. A 48A charger needs a 60A breaker. This is a code requirement,
                  not a suggestion &mdash; your electrician will size it correctly.
                </p>
              </div>
            </section>

            {/* ========== INSTALLATION COSTS ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <DollarSign className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Installation Costs: What to Expect
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                The charger itself is only part of the cost. Installation complexity varies
                dramatically depending on your home&apos;s electrical setup. Here is a realistic
                breakdown:
              </p>
              <div className="grid gap-4 md:grid-cols-3 mb-6">
                {[
                  {
                    title: 'Simple Install',
                    cost: '$200-$500',
                    desc: 'Existing 240V outlet near parking spot, panel has capacity',
                    items: ['NEMA 14-50 outlet exists', 'Panel within 10 ft', 'No permit needed'],
                  },
                  {
                    title: 'Moderate Install',
                    cost: '$500-$1,500',
                    desc: 'New 240V circuit needed, some conduit run, panel has spare slots',
                    items: ['New dedicated circuit', '20-50 ft conduit run', 'Permit may be required'],
                  },
                  {
                    title: 'Complex Install',
                    cost: '$1,500-$5,000',
                    desc: 'Panel upgrade needed (100A to 200A), long conduit runs, permits',
                    items: ['100A to 200A panel upgrade', 'Subpanel installation', 'Permit and inspection required'],
                  },
                ].map((tier, i) => (
                  <div key={i} className="rounded-xl border p-5" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                    <h3 className="font-bold mb-1" style={{ color: '#f5f5f5' }}>{tier.title}</h3>
                    <div className="text-xl font-bold mb-2" style={{ color: '#22c55e' }}>{tier.cost}</div>
                    <p className="text-sm mb-3" style={{ color: '#a1a1aa' }}>{tier.desc}</p>
                    <ul className="space-y-1.5 text-sm">
                      {tier.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2" style={{ color: '#d4d4d8' }}>
                          <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-4" style={{ backgroundColor: '#141414' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Plug vs Hardwire:</strong> A NEMA 14-50
                  plug-in installation is simpler and lets you unplug the charger if you move.
                  Hardwiring is cleaner and required for chargers over 40A. If you rent or might
                  move soon, choose a plug-in model like the Emporia or ChargePoint (at 40A).
                </p>
              </div>
            </section>

            {/* ========== SMART FEATURES ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Star className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Smart Features: What Actually Matters
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Every charger claims to be &quot;smart,&quot; but the features that actually save
                you money and add convenience vary widely. Here is what to look for:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    feature: 'Scheduled Charging',
                    icon: <Clock className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    why: 'Set your charger to run during off-peak hours (typically midnight to 6 AM on California TOU plans). This alone can cut your charging costs by 40-60%.',
                    who: 'ChargePoint, JuiceBox, Wallbox, Emporia, Tesla',
                  },
                  {
                    feature: 'Energy Monitoring',
                    icon: <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    why: 'Track exactly how much energy and money each charging session costs. Essential for budgeting and comparing against gas costs.',
                    who: 'ChargePoint, JuiceBox, Emporia, Wallbox',
                  },
                  {
                    feature: 'Solar Integration',
                    icon: <Sun className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    why: 'Automatically charge your EV when your solar panels are producing excess energy, maximizing self-consumption under NEM 3.0.',
                    who: 'Wallbox (Eco-Smart), JuiceBox, Tesla (Powerwall)',
                  },
                  {
                    feature: 'Power Sharing / Load Management',
                    icon: <Battery className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    why: 'Split available power between multiple chargers or prevent your charger from overloading your panel. Critical for older homes.',
                    who: 'Tesla (up to 6 units), Wallbox (Power Boost), ChargePoint',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-5" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h3 className="font-bold" style={{ color: '#f5f5f5' }}>{item.feature}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: '#a1a1aa' }}>{item.why}</p>
                    <p className="text-xs" style={{ color: '#22c55e' }}>Available on: {item.who}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== SOLAR + EV INTEGRATION ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Sun className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Solar + EV Charging: The Ultimate Pairing
              </h2>
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Pairing rooftop solar with a Level 2 EV charger is one of the best financial
                  moves a California homeowner can make. Here is why: the average California
                  driver covers about 13,500 miles per year. At roughly 3.5 miles per kWh,
                  that is about 3,860 kWh of annual charging demand.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-bold mb-3" style={{ color: '#f5f5f5' }}>Charging from the Grid</h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        3,860 kWh x $0.35/kWh avg = <strong style={{ color: '#ef4444' }}>$1,351/year</strong>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        On peak TOU rates: up to <strong style={{ color: '#ef4444' }}>$1,850+/year</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-bold mb-3" style={{ color: '#f5f5f5' }}>Charging from Solar</h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        3,860 kWh from rooftop solar = <strong style={{ color: '#22c55e' }}>$0/year</strong>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Lifetime savings (25 years): <strong style={{ color: '#22c55e' }}>$33,000+</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Under California&apos;s NEM 3.0, excess solar sent back to the grid earns
                  far less than what you pay to pull it back at night. Smart chargers with solar
                  integration (like the Wallbox Pulsar Plus or JuiceBox 48) solve this by
                  shifting your EV charging to midday hours when your panels are producing
                  surplus energy &mdash; maximizing self-consumption and minimizing grid
                  dependence. A typical 7 kW solar system in California produces about
                  30-35 kWh per day, enough to charge most EVs from empty to full.
                </p>
              </div>
            </section>

            {/* ========== WHO SHOULD BUY WHAT ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <CheckCircle className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Which EV Charger Should You Buy?
              </h2>
              <div className="space-y-3">
                {[
                  {
                    profile: 'You want the best all-around charger',
                    pick: 'ChargePoint Home Flex',
                    reason: 'Adjustable amperage, universal compatibility, top-tier app. The safe choice that works for everyone.',
                  },
                  {
                    profile: 'You want to spend as little as possible',
                    pick: 'Emporia Smart Level 2',
                    reason: 'Full 48A smart charging for under $400. You give up very little vs chargers costing $150+ more.',
                  },
                  {
                    profile: 'You park outdoors or in harsh conditions',
                    pick: 'Grizzl-E Classic',
                    reason: 'NEMA 4 rated, no electronics to fail. The charger that will outlast your car.',
                  },
                  {
                    profile: 'You want to minimize electricity costs',
                    pick: 'JuiceBox 48',
                    reason: 'Automatic TOU optimization and demand response integration. The charger that pays for itself.',
                  },
                  {
                    profile: 'You have solar panels (or plan to)',
                    pick: 'Wallbox Pulsar Plus',
                    reason: 'Native Eco-Smart solar integration charges your EV from surplus solar production automatically.',
                  },
                  {
                    profile: 'You drive a Tesla (or multiple EVs)',
                    pick: 'Tesla Wall Connector',
                    reason: 'Seamless Tesla integration, power sharing across 6 units, and NACS is becoming the standard.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-3"
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className="md:w-1/3">
                      <span className="text-sm font-medium" style={{ color: '#a1a1aa' }}>If {item.profile}:</span>
                    </div>
                    <div className="md:w-2/3">
                      <span className="font-bold" style={{ color: '#22c55e' }}>{item.pick}</span>
                      <span style={{ color: '#d4d4d8' }}> &mdash; {item.reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border overflow-hidden"
                    style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}
                  >
                    <summary
                      className="cursor-pointer px-4 py-3 font-semibold flex items-center justify-between"
                      style={{ color: '#f5f5f5' }}
                    >
                      {faq.name}
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#22c55e' }} />
                    </summary>
                    <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Charge Smarter, Save More
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Pairing your EV charger with rooftop solar can eliminate your charging costs
                  entirely. See how much California homeowners are saving with solar + EV.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Browse All Reviews
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
