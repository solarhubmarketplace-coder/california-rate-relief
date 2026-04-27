import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Star,
  Zap,
  Shield,
  Sun,
  Check,
  X,
  ChevronRight,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Smart Thermostats (2026): Ecobee vs Nest, Full Comparison & Reviews',
  description:
    'Compare the best smart thermostats for 2026. Ecobee Premium vs Google Nest Learning (4th Gen) vs Ecobee Enhanced vs Nest Thermostat. HomeKit, Alexa, Google Home compatibility, energy savings, and California TOU optimization guide.',
  alternates: {
    canonical: '/reviews/best-smart-thermostat',
  },
  openGraph: {
    title: 'Best Smart Thermostats (2026): Ecobee vs Nest',
    description:
      'Ecobee Smart Thermostat Premium vs Google Nest Learning Thermostat (4th Gen) vs Ecobee Enhanced vs Nest Thermostat. Specs, pros/cons, smart home compatibility, and California energy savings guide.',
    type: 'article',
    publishedTime: '2026-04-17T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Smart Thermostats (2026): Ecobee vs Nest — Full Comparison & Reviews',
  description:
    'Compare the best smart thermostats for 2026. In-depth reviews of Ecobee Smart Thermostat Premium, Google Nest Learning Thermostat (4th Gen), Ecobee Enhanced, and Google Nest Thermostat. Smart home compatibility, energy savings, and California TOU optimization.',
  datePublished: '2026-04-17',
  dateModified: '2026-04-17',
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
    '@id': 'https://ratereliefca.com/reviews/best-smart-thermostat',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ecobee or Nest, which smart thermostat is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your smart home ecosystem. The Ecobee Smart Thermostat Premium is the best overall pick because it works with Apple HomeKit, Amazon Alexa, AND Google Home, it is the only thermostat that supports all three. If you are fully invested in Google Home and want the sleekest design, the Nest Learning Thermostat (4th Gen) is excellent. Both save comparable energy. Ecobee wins on compatibility and included SmartSensors; Nest wins on design and Matter support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do smart thermostats really save money on energy bills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ecobee reports up to 26% savings on heating and cooling costs, and the EPA estimates ENERGY STAR certified smart thermostats save about $50 per year on average. In California, where TOU (time-of-use) rates mean electricity can cost 40-70 cents per kWh during peak hours, a smart thermostat that pre-cools your home before peak pricing kicks in can save significantly more, potentially $100-$200+ per year depending on your usage and rate plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Nest Learning Thermostat work with Apple HomeKit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Google Nest Learning Thermostat (4th Gen) does NOT support Apple HomeKit. It works with Google Home and supports the Matter protocol, but Apple HomeKit integration is not available. If you need HomeKit support, the Ecobee Smart Thermostat Premium or Ecobee Enhanced are your best options, both have native HomeKit support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best smart thermostat for California homeowners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ecobee Smart Thermostat Premium is our top recommendation for California homeowners. Its eco+ feature can automatically participate in utility demand response programs, helping you avoid the most expensive TOU peak rates. When paired with rooftop solar, a smart thermostat can shift heavy HVAC usage to midday when your panels are generating excess power, reducing the energy you pull from the grid during expensive evening peak hours (4-9 PM).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a smart thermostat worth it if I have solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Solar panels and smart thermostats are a powerful combination, especially under California NEM 3.0. A smart thermostat can pre-cool or pre-heat your home during midday hours when your solar panels are producing at peak capacity. This means you use your own free solar electricity for HVAC instead of pulling expensive grid power during the 4-9 PM peak TOU window. This strategy — called peak shaving or load shifting, can save California homeowners an additional $150-$300 per year on top of their solar savings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a C-wire to install a smart thermostat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most smart thermostats work best with a C-wire (common wire) that provides constant 24V power. Ecobee thermostats include a Power Extender Kit in the box that lets you install without a C-wire, making them compatible with virtually any home. Nest thermostats can charge their internal battery from existing wires, but a C-wire ensures the most reliable operation. If your home does not have a C-wire, the Ecobee models are the safer choice.',
      },
    },
  ],
};

interface Thermostat {
  name: string;
  badge: string;
  price: string;
  rating: string;
  ecosystem: string;
  smartFeatures: string;
  sensors: string;
  bestFor: string;
  affiliateLink: string;
}

const thermostats: Thermostat[] = [
  {
    name: 'Ecobee Smart Thermostat Premium',
    badge: 'Best Overall',
    price: '$249',
    rating: '4.7/5',
    ecosystem: 'HomeKit + Alexa + Google Home',
    smartFeatures: 'Occupancy detection, eco+, weather-responsive',
    sensors: '1 SmartSensor included',
    bestFor: 'Most homeowners, Apple households',
    affiliateLink: '#',
  },
  {
    name: 'Google Nest Learning Thermostat (4th Gen)',
    badge: 'Best Design',
    price: '$280',
    rating: '4.6/5',
    ecosystem: 'Google Home + Matter',
    smartFeatures: 'Soli radar sensing, AI learning, weather animations',
    sensors: 'Built-in Soli radar',
    bestFor: 'Google Home households, design-conscious buyers',
    affiliateLink: '#',
  },
  {
    name: 'Ecobee Smart Thermostat Enhanced',
    badge: 'Best Value',
    price: '~$180',
    rating: '4.5/5',
    ecosystem: 'HomeKit + Alexa + Google Home',
    smartFeatures: 'Occupancy detection, eco+, SmartSensor support',
    sensors: 'SmartSensor compatible (sold separately)',
    bestFor: 'Budget buyers who want Ecobee quality',
    affiliateLink: '#',
  },
  {
    name: 'Google Nest Thermostat',
    badge: 'Best Budget',
    price: '~$130',
    rating: '4.4/5',
    ecosystem: 'Google Home + Matter',
    smartFeatures: 'Basic learning, Savings Finder, Home/Away',
    sensors: 'Nest Temperature Sensor compatible',
    bestFor: 'Renters, budget smart home setups',
    affiliateLink: '#',
  },
];

export default function BestSmartThermostatPage() {
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
      <main className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
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
                Smart Home Reviews
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Best Smart Thermostats (2026): Ecobee vs Nest, Full Comparison
              </h1>
              
              <LastReviewedStamp date="2026-04-26" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <time dateTime="2026-04-17">April 17, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='/img/products/thermostats/hero-ecobee-premium-livingroom.jpg' alt='Ecobee Smart Thermostat Premium installed on a living-room wall — top pick for 2026' className='w-full h-auto max-h-[480px] object-cover' loading='eager' fetchPriority='high' />
            </div>

            <AffiliateDisclosure compact />

            {/* Trust badges strip */}
            <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">4</div>
                <div className="text-xs text-muted-foreground">Thermostats compared</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">$0</div>
                <div className="text-xs text-muted-foreground">Manufacturer payouts</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">2026</div>
                <div className="text-xs text-muted-foreground">Updated April 26</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">Plain</div>
                <div className="text-xs text-muted-foreground">English first, tech second</div>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Your thermostat controls roughly half your home&apos;s energy bill. In
                California, where time-of-use rates can spike to 40-70 cents per kWh during
                peak hours, the right smart thermostat doesn&apos;t just add convenience — it
                can save you hundreds of dollars per year by shifting your HVAC usage away
                from the most expensive electricity windows.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We compared every major smart thermostat on the market and narrowed it down
                to four clear winners. Whether you&apos;re team Apple HomeKit, Google Home, or
                just want the most energy savings for the least money, this guide has you
                covered.
              </p>
            </div>

            {/* ========== QUICK PICKS ========== */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold text-foreground">Quick Picks: Our Top 4 Smart Thermostats</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Ecobee Smart Thermostat Premium, Best Overall ($249)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The only thermostat that works with Apple HomeKit, Alexa, AND Google
                      Home. Up to 26% energy savings, included SmartSensor, built-in Alexa
                      speaker, and eco+ learning. The best all-around pick for most
                      homeowners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Google Nest Learning Thermostat (4th Gen). Best Design ($280)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Stunning circular glass display with weather animations, Soli radar
                      presence detection, and AI-powered schedule learning. Supports Matter.
                      Best for Google Home households.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Ecobee Smart Thermostat Enhanced, Best Value (~$180)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Same core Ecobee platform at ~$70 less than the Premium. Still
                      supports HomeKit, Alexa, and Google Home. Skips the built-in speaker
                      and some premium features, but keeps the excellent energy savings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Google Nest Thermostat, Best Budget (~$130)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      A simplified, affordable smart thermostat with basic learning,
                      Home/Away detection, and Google Home integration. Great for renters or
                      anyone who wants smart features without the premium price.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Smart Thermostat Comparison Table
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 text-left">
                      <th className="p-3 font-semibold text-foreground">Thermostat</th>
                      <th className="p-3 font-semibold text-foreground">Price</th>
                      <th className="p-3 font-semibold text-foreground">Rating</th>
                      <th className="p-3 font-semibold text-foreground">Ecosystem</th>
                      <th className="p-3 font-semibold text-foreground">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thermostats.map((t, i) => (
                      <tr
                        key={t.name}
                        className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}
                      >
                        <td className="p-3">
                          <div className="font-medium text-foreground">{t.name}</div>
                          <span className="text-xs font-semibold text-primary">{t.badge}</span>
                        </td>
                        <td className="p-3 font-semibold text-foreground">{t.price}</td>
                        <td className="p-3 text-foreground">{t.rating}</td>
                        <td className="p-3 text-foreground text-xs">{t.ecosystem}</td>
                        <td className="p-3 text-muted-foreground text-xs">{t.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== DETAILED REVIEWS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Detailed Reviews
              </h2>

              {/* --- Ecobee Premium --- */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/thermostats/ecobee-premium-product.jpg" alt="Ecobee Smart Thermostat Premium product close-up — black square touchscreen showing 72°" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-yellow-600 bg-yellow-500/15 px-2 py-0.5 rounded-full">
                      BEST OVERALL
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      Ecobee Smart Thermostat Premium
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-foreground">$249</span>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">4.7/5</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Ecobee Smart Thermostat Premium is the most versatile smart thermostat
                  you can buy. It is the <strong>only thermostat that works natively with
                  Apple HomeKit, Amazon Alexa, AND Google Home</strong>, which means it fits
                  into any smart home ecosystem without compromise. Ecobee reports up to 26%
                  savings on heating and cooling costs, backed by occupancy detection, weather
                  responsiveness, and the eco+ learning system that optimizes your schedule
                  automatically.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  It ships with one SmartSensor for multi-room temperature monitoring — place
                  it in a bedroom or living room to balance comfort across your home. The
                  built-in microphone and speaker double as an Alexa device, so you can control
                  it by voice, check the weather, or set timers without pulling out your phone.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-green-200">
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Works with HomeKit, Alexa, AND Google Home</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Up to 26% energy savings</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Included SmartSensor for multi-room monitoring</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Built-in Alexa speaker</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Includes Power Extender Kit (no C-wire needed)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> eco+ participates in utility demand response</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-red-200">
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> $249 is pricey for a thermostat</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> Built-in mic may raise privacy concerns</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> Plastic build doesn&apos;t feel as premium as Nest</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Specs</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div><span className="text-muted-foreground">Price:</span> <span className="font-medium">$249</span></div>
                    <div><span className="text-muted-foreground">Sensors:</span> <span className="font-medium">1 included</span></div>
                    <div><span className="text-muted-foreground">Display:</span> <span className="font-medium">Touchscreen</span></div>
                    <div><span className="text-muted-foreground">C-wire:</span> <span className="font-medium">Not required</span></div>
                  </div>
                </div>

                <div className="mt-6">
                  <BuyButton
                    productKey="ecobee-smart-thermostat-premium"
                    source="best-smart-thermostat"
                    variant="primary"
                    label="Check Price; Ecobee Smart Thermostat Premium"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Nest Learning 4th Gen --- */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/thermostats/nest-learning-thermostat.jpg" alt="Google Nest Learning Thermostat 4th gen — round dial showing 66° with characteristic warm glow" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-500/15 px-2 py-0.5 rounded-full">
                      BEST DESIGN
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      Google Nest Learning Thermostat (4th Gen)
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-foreground">$280</span>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">4.6/5</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  The 4th-generation Nest Learning Thermostat is a stunning piece of
                  industrial design. Its circular glass display with weather animations looks
                  more like a piece of art than a thermostat, and the <strong>Soli radar
                  presence sensing</strong> detects you approaching from across the room to
                  light up the display before you even touch it. Google&apos;s AI-powered
                  learning adapts to your daily schedule within about a week of use.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The 4th Gen supports the <strong>Matter protocol</strong>, which is the new
                  universal smart home standard. This means it can integrate with more devices
                  going forward, though notably it still does NOT support Apple HomeKit. If you
                  are a Google Home household, this is the most beautiful and intelligent
                  thermostat you can buy.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-green-200">
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Best-in-class design and build quality</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Soli radar presence detection</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> AI schedule learning is industry-leading</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Matter protocol support</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Beautiful weather animations on display</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-red-200">
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> Does NOT support Apple HomeKit</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> $280 is the most expensive option</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> No included remote temperature sensor</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> C-wire recommended for reliable operation</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Specs</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div><span className="text-muted-foreground">Price:</span> <span className="font-medium">$280</span></div>
                    <div><span className="text-muted-foreground">Sensors:</span> <span className="font-medium">Soli radar built-in</span></div>
                    <div><span className="text-muted-foreground">Display:</span> <span className="font-medium">Circular glass</span></div>
                    <div><span className="text-muted-foreground">C-wire:</span> <span className="font-medium">Recommended</span></div>
                  </div>
                </div>

                <div className="mt-6">
                  <BuyButton
                    productKey="nest-learning-thermostat"
                    source="best-smart-thermostat"
                    variant="primary"
                    label="Check Price — Google Nest Learning Thermostat (4th Gen)"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Ecobee Enhanced --- */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/thermostats/ecobee-enhanced-hallway.jpg" alt="Ecobee Smart Thermostat Enhanced installed in a modern home hallway" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-green-600 bg-green-500/15 px-2 py-0.5 rounded-full">
                      BEST VALUE
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      Ecobee Smart Thermostat Enhanced
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-foreground">~$180</span>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">4.5/5</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Ecobee Enhanced is the sweet spot of the lineup. It uses the same core
                  platform as the Premium. same app, same eco+ system, same HomeKit + Alexa
                  + Google Home compatibility — but at roughly <strong>$70 less</strong>. You
                  lose the built-in Alexa speaker, the air quality monitor, and some cosmetic
                  touches, but none of the core smart thermostat functionality that actually
                  saves you money.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  SmartSensors are sold separately, but the thermostat fully supports them.
                  If you already have an Alexa device in your home and don&apos;t need the
                  built-in speaker, the Enhanced is the smarter buy. It still includes the
                  Power Extender Kit for homes without a C-wire.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-green-200">
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> ~$70 cheaper than Premium</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Same HomeKit + Alexa + Google Home support</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Same eco+ energy savings system</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Power Extender Kit included (no C-wire)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Best value per dollar for energy savings</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-red-200">
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> No SmartSensor included (sold separately)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> No built-in speaker or air quality monitor</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> Slightly less premium display</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Specs</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div><span className="text-muted-foreground">Price:</span> <span className="font-medium">~$180</span></div>
                    <div><span className="text-muted-foreground">Sensors:</span> <span className="font-medium">Compatible (separate)</span></div>
                    <div><span className="text-muted-foreground">Display:</span> <span className="font-medium">Touchscreen</span></div>
                    <div><span className="text-muted-foreground">C-wire:</span> <span className="font-medium">Not required</span></div>
                  </div>
                </div>

                <div className="mt-6">
                  <BuyButton
                    productKey="ecobee-smart-thermostat-enhanced"
                    source="best-smart-thermostat"
                    variant="primary"
                    label="Check Price; Ecobee Smart Thermostat Enhanced"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Google Nest Thermostat --- */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/thermostats/nest-thermostat-with-plant.jpg" alt="Google Nest Thermostat (entry-level) — sand-color dial showing 72° next to a houseplant" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-500/15 px-2 py-0.5 rounded-full">
                      BEST BUDGET
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      Google Nest Thermostat
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-foreground">~$130</span>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-foreground">4.4/5</span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  The standard Nest Thermostat is Google&apos;s entry-level smart thermostat,
                  and at around $130 it is the most affordable way to add smart climate
                  control to your home. It features a mirrored display, basic schedule
                  learning, Home/Away detection, and the <strong>Savings Finder</strong>{' '}
                  feature that proactively suggests energy-saving adjustments.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  It works with Google Home and supports Matter, but like its premium sibling,
                  it does not support Apple HomeKit. The simplified interface makes it
                  especially easy to set up, ideal for renters or anyone who just wants a
                  &quot;set it and forget it&quot; smart thermostat that learns your
                  preferences over time.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-green-200">
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Most affordable smart thermostat at ~$130</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Easy setup and simple interface</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Savings Finder suggests optimizations</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Matter protocol support</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> Works well for renters (easy to remove)</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-red-200">
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> No Apple HomeKit support</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> No radar or advanced presence sensing</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> Less sophisticated learning than 4th Gen</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" /> C-wire recommended but not always required</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Specs</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div><span className="text-muted-foreground">Price:</span> <span className="font-medium">~$130</span></div>
                    <div><span className="text-muted-foreground">Sensors:</span> <span className="font-medium">Temp sensor compatible</span></div>
                    <div><span className="text-muted-foreground">Display:</span> <span className="font-medium">Mirrored</span></div>
                    <div><span className="text-muted-foreground">C-wire:</span> <span className="font-medium">Recommended</span></div>
                  </div>
                </div>

                <div className="mt-6">
                  <BuyButton
                    productKey="nest-thermostat"
                    source="best-smart-thermostat"
                    variant="primary"
                    label="Check Price; Google Nest Thermostat"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SMART HOME ECOSYSTEM GUIDE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Smart Home Ecosystem Guide: Which Thermostat Fits Your Home?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Your smart home ecosystem should be the first factor in choosing a
                thermostat. Here is a quick breakdown of compatibility:
              </p>

              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 text-left">
                      <th className="p-3 font-semibold text-foreground">Thermostat</th>
                      <th className="p-3 font-semibold text-foreground text-center">Apple HomeKit</th>
                      <th className="p-3 font-semibold text-foreground text-center">Amazon Alexa</th>
                      <th className="p-3 font-semibold text-foreground text-center">Google Home</th>
                      <th className="p-3 font-semibold text-foreground text-center">Matter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Ecobee Premium</td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Nest Learning (4th Gen)</td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Ecobee Enhanced</td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Nest Thermostat</td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" /> Apple HomeKit Users
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Your only options are Ecobee Premium or Ecobee Enhanced. Neither Nest
                    model supports HomeKit. If Siri and the Apple Home app are your control
                    center, go Ecobee.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" /> Google Home Users
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All four thermostats work with Google Home, but the Nest models offer the
                    deepest integration with the Google ecosystem including energy dashboards
                    and Home/Away routines.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" /> Amazon Alexa Users
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All four work with Alexa, but only the Ecobee Premium has a built-in Alexa
                    speaker. If you want voice control directly from your thermostat, the
                    Premium is the clear choice.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== ENERGY SAVINGS SECTION ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                How Much Will a Smart Thermostat Actually Save You?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                HVAC accounts for roughly 50% of a typical home&apos;s energy usage.
                Smart thermostats reduce that by learning your schedule, detecting when
                you leave, and optimizing run times. Here is what the data shows:
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-primary mb-1">26%</div>
                    <div className="text-sm text-muted-foreground">
                      Max savings reported by Ecobee on heating/cooling costs
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-primary mb-1">~$50/yr</div>
                    <div className="text-sm text-muted-foreground">
                      EPA ENERGY STAR average annual savings estimate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-primary mb-1">$100-$300/yr</div>
                    <div className="text-sm text-muted-foreground">
                      Potential CA savings with TOU optimization
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">
                California TOU Rate Optimization
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                California utilities (PG&E, SCE, SDG&E) use time-of-use pricing where
                electricity costs significantly more during peak hours. A smart
                thermostat can exploit this by <strong>pre-cooling your home before peak
                rates kick in</strong>:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-foreground/80">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>PG&E peak hours (4-9 PM):</strong> Rates jump to 40-48 cents/kWh. Pre-cool your home by 3:30 PM when rates are 25-30 cents/kWh.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>SCE peak hours (4-9 PM):</strong> Rates can reach 36-47 cents/kWh. Smart scheduling shifts cooling to off-peak at 20-28 cents/kWh.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>SDG&E peak hours (4-9 PM):</strong> Peak TOU rates hit 47-70 cents/kWh — the highest in the state. Pre-cooling savings here are the biggest.</span>
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ecobee&apos;s eco+ feature can automatically participate in utility demand
                response programs, earning you credits during high-demand events. The
                Nest models do the same through Google&apos;s Rush Hour Rewards (where
                available from your utility).
              </p>
            </section>

            {/* ========== SOLAR + SMART THERMOSTAT ========== */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Solar + Smart Thermostat: The Ultimate California Combo
                  </h2>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  A smart thermostat is powerful on its own, but paired with rooftop solar
                  panels it becomes a game-changer for California homeowners. Here is why:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/80 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Peak Shaving</h4>
                    <p className="text-sm text-muted-foreground">
                      Your solar panels generate the most power at midday. A smart thermostat
                      can run your HVAC during those hours, using your own free solar
                      electricity — so you pull less from the grid during expensive 4-9 PM
                      peak TOU hours.
                    </p>
                  </div>
                  <div className="bg-card/80 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Load Shifting</h4>
                    <p className="text-sm text-muted-foreground">
                      Under NEM 3.0, the value of exported solar energy has dropped
                      significantly. Using your solar power directly (self-consumption)
                      through smart HVAC scheduling maximizes the value of every kWh your
                      panels produce.
                    </p>
                  </div>
                  <div className="bg-card/80 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Pre-Cooling Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Set your smart thermostat to pre-cool your home to 72-74 degrees
                      between 11 AM and 3 PM when solar production peaks. Then let the
                      temperature drift up slightly during the 4-9 PM peak window. Your home
                      stays comfortable while you avoid peak rates entirely.
                    </p>
                  </div>
                  <div className="bg-card/80 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Combined Savings</h4>
                    <p className="text-sm text-muted-foreground">
                      Solar alone can reduce your bill by 30-50%. A smart thermostat adds
                      another 10-26% reduction on what remains. Together, many California
                      homeowners bring their effective energy cost close to zero during
                      spring and fall months.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-foreground/80 mb-4">
                    Looking for more ways to cut your energy costs? Browse our full library
                    of independent green energy product reviews.
                  </p>
                  <Link
                    href="/reviews"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Browse All GreenReviewsHub Reviews
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ========== BUYING GUIDE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                How to Choose the Right Smart Thermostat
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Check your smart home ecosystem</h4>
                    <p className="text-sm text-muted-foreground">
                      If you use Apple HomeKit, your choices are Ecobee only. Google Home
                      users can choose any of the four. Mixed households should go Ecobee
                      Premium for maximum compatibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Check for a C-wire</h4>
                    <p className="text-sm text-muted-foreground">
                      Look behind your current thermostat for a blue &quot;C&quot; wire. If
                      you don&apos;t have one, Ecobee models include a Power Extender Kit
                      that solves the problem. Nest models work without one but are more
                      reliable with it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Consider multi-room sensing</h4>
                    <p className="text-sm text-muted-foreground">
                      If you have hot or cold spots in your home, the Ecobee Premium
                      (included SmartSensor) or Ecobee Enhanced (sensors sold separately) let
                      you balance temperatures across multiple rooms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Set your budget</h4>
                    <p className="text-sm text-muted-foreground">
                      The Nest Thermostat at ~$130 pays for itself in 2-3 years. The Ecobee
                      Premium at $249 takes slightly longer but delivers more features and
                      broader compatibility. All four will save you money in the long run.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    Ecobee or Nest — which smart thermostat is better?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    It depends on your smart home ecosystem. The Ecobee Premium is the best
                    overall because it works with Apple HomeKit, Amazon Alexa, AND Google
                    Home; the only thermostat to support all three. If you are fully
                    invested in Google Home and want the sleekest design, the Nest Learning
                    Thermostat (4th Gen) is excellent. Both deliver comparable energy savings.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    Do smart thermostats really save money on energy bills?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes. Ecobee reports up to 26% savings on heating and cooling costs, and
                    ENERGY STAR estimates about $50/year in savings on average. In California,
                    where TOU rates can hit 40-70 cents/kWh during peak hours, a smart
                    thermostat that pre-cools before peak pricing can save $100-$200+ per year
                    depending on your usage and rate plan.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    Does the Google Nest Learning Thermostat work with Apple HomeKit?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No. Neither the Nest Learning Thermostat (4th Gen) nor the standard Nest
                    Thermostat supports Apple HomeKit. They work with Google Home and support
                    the Matter protocol. If you need HomeKit support, the Ecobee Premium or
                    Ecobee Enhanced are your only options among top-tier smart thermostats.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    What is the best smart thermostat for California homeowners?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Ecobee Premium is our top recommendation. Its eco+ feature can
                    participate in utility demand response programs, helping you avoid the most
                    expensive TOU peak rates. Paired with solar panels, a smart thermostat can
                    shift HVAC usage to midday solar production hours, reducing grid pull
                    during the 4-9 PM peak window.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    Is a smart thermostat worth it if I already have solar panels?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Absolutely. Solar and smart thermostats are a powerful combination under
                    NEM 3.0. A smart thermostat pre-cools your home during peak solar
                    production (midday) so you use your own free electricity for HVAC instead
                    of drawing from the grid during the expensive 4-9 PM window. This peak
                    shaving strategy can save California homeowners an additional $150-$300
                    per year on top of solar savings.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    Do I need a C-wire to install a smart thermostat?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most smart thermostats work best with a C-wire for constant 24V power.
                    Ecobee includes a Power Extender Kit that lets you install without one. Making it compatible with virtually any home. Nest thermostats can charge
                    from existing wires but a C-wire ensures the most reliable operation. If
                    your home lacks a C-wire, Ecobee is the safer choice.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Want More Independent Energy Product Reviews?
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                  GreenReviewsHub publishes hands-on, data-driven reviews of smart home energy
                  products, portable power stations, e-bikes, and more. Every review includes
                  real specs, honest pros and cons, and no manufacturer influence. Browse our
                  full review library to find the best products for your home.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Explore All GreenReviewsHub Reviews
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
      <section className="container mx-auto px-4 max-w-3xl mb-12">
        <div className="rounded-xl p-6 text-center border-2" style={{ backgroundColor: '#0a3d1f', borderColor: '#16a34a' }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#f5f5f5' }}>Ready to lock in our top pick?</h3>
          <p className="mb-4" style={{ color: '#d4d4d8' }}>The Editor&apos;s Pick smart thermostat is sitting at our recommended price right now — lock it in before promo windows shift.</p>
          <BuyButton productKey="ecobee-smart-thermostat-premium" source="best-smart-thermostat-final-cta" variant="secondary" label="See Today&apos;s Best Price" />
        </div>
      </section>
      <ReviewFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
