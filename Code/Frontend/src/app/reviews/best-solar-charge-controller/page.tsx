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
  Check,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Shield,
  Star,
  Sun,
  X,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Solar Charge Controllers in 2026: MPPT vs PWM Compared',
  description:
    'Compare the best solar charge controllers for 2026. In-depth reviews of Victron SmartSolar, Renogy Rover, EPEver Tracer, Rich Solar, and BougeRV. MPPT vs PWM explainer, sizing guide, and FAQ included.',
  alternates: {
    canonical: '/reviews/best-solar-charge-controller',
  },
  openGraph: {
    title:
      'Best Solar Charge Controllers in 2026: MPPT vs PWM Compared',
    description:
      'Victron SmartSolar vs Renogy Rover vs EPEver Tracer vs Rich Solar vs BougeRV. Full specs, pros/cons, and solar charge controller sizing guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Solar Charge Controllers in 2026: MPPT vs PWM Compared',
  description:
    'Compare the best solar charge controllers for 2026. In-depth reviews of Victron SmartSolar MPPT 100/50, Renogy Rover 40A MPPT, EPEver Tracer 4210AN, Rich Solar 60A MPPT, and BougeRV 40A MPPT. Includes MPPT vs PWM explainer, sizing guide, and FAQ.',
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
    '@id': 'https://ratereliefca.com/reviews/best-solar-charge-controller',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best solar charge controller in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Victron SmartSolar MPPT 100/50 is our top pick for 2026. It delivers up to 98% conversion efficiency, built-in Bluetooth for monitoring via the VictronConnect app, and adaptive three-stage charging with programmable battery presets. Its 50A rating handles up to 700W of solar at 12V, making it ideal for mid-size off-grid and RV systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between MPPT and PWM charge controllers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MPPT (Maximum Power Point Tracking) controllers convert excess panel voltage into additional charging current, achieving 95-99% efficiency. PWM (Pulse Width Modulation) controllers simply match panel voltage to battery voltage, wasting the difference as heat, with 75-80% efficiency. MPPT controllers harvest 20-30% more energy, especially in cold weather or when panels are rated well above battery voltage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size solar charge controller do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divide your total solar panel wattage by your battery bank voltage to get the minimum amperage rating, then add a 25% safety margin. For example, 400W of panels on a 12V battery bank: 400 / 12 = 33.3A, so a 40A controller is the minimum safe choice. For MPPT controllers, also verify that the open-circuit voltage (Voc) of your panel array does not exceed the controller maximum input voltage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a PWM controller with a 24V panel on a 12V battery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically yes, but it is very inefficient. A PWM controller will clamp the 24V panel down to ~14.4V for charging, wasting nearly half the panel voltage as heat. You would lose roughly 40-50% of your panel capacity. An MPPT controller converts that extra voltage into additional current, so you get the full wattage. If you have mismatched panel and battery voltages, MPPT is the only sensible choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar charge controllers work with lithium batteries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but the controller must have a lithium battery charging profile. All five controllers reviewed here support LiFePO4 (LFP) batteries with configurable voltage setpoints. Using a controller without a lithium profile can overcharge or undercharge the battery, reducing lifespan or triggering the BMS to disconnect. Always verify the controller has a dedicated lithium setting before purchasing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do solar charge controllers last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality MPPT charge controllers typically last 10-15 years. Victron and EPEver units are known for longevity, with many users reporting 8-10 years of continuous service. Factors that reduce lifespan include overheating (poor ventilation), running at or above rated capacity consistently, and moisture exposure. Installing in a cool, dry, well-ventilated location extends life significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it worth upgrading from PWM to MPPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost always yes. The 20-30% efficiency gain from MPPT means you effectively get 20-30% more energy from the same panels. For a 400W system, that is 80-120W of additional harvest per hour of peak sun. Over a year in a sunny climate with 5-6 peak sun hours daily, the extra energy adds up quickly. The price difference between a 30A PWM ($25-40) and a 30A MPPT ($100-180) typically pays for itself within 6-12 months through increased energy production.',
      },
    },
  ],
};

interface Controller {
  name: string;
  badge: string;
  price: string;
  type: string;
  ampRating: string;
  maxPvInput: string;
  maxVoc: string;
  efficiency: string;
  batteryCompat: string;
  monitoring: string;
  affiliateLink: string;
}

const controllers: Controller[] = [
  {
    name: 'Victron SmartSolar MPPT 100/50',
    badge: 'Best Overall',
    price: '$230',
    type: 'MPPT',
    ampRating: '50A',
    maxPvInput: '700W (12V) / 1,400W (24V)',
    maxVoc: '100V',
    efficiency: '~98%',
    batteryCompat: '12V / 24V / LFP',
    monitoring: 'Bluetooth + VictronConnect App',
    affiliateLink: '#',
  },
  {
    name: 'Renogy Rover 40A MPPT',
    badge: 'Best Value',
    price: '$160',
    type: 'MPPT',
    ampRating: '40A',
    maxPvInput: '520W (12V) / 1,040W (24V)',
    maxVoc: '100V',
    efficiency: '~97%',
    batteryCompat: '12V / 24V / LFP',
    monitoring: 'BT-1 Module (optional) + Renogy DC Home App',
    affiliateLink: '#',
  },
  {
    name: 'EPEver Tracer 4210AN',
    badge: 'Best Budget MPPT',
    price: '$110',
    type: 'MPPT',
    ampRating: '40A',
    maxPvInput: '520W (12V) / 1,040W (24V)',
    maxVoc: '100V',
    efficiency: '~96%',
    batteryCompat: '12V / 24V / LFP',
    monitoring: 'MT50 Remote Meter or eBox Bluetooth/WiFi (sold separately)',
    affiliateLink: '#',
  },
  {
    name: 'Rich Solar 60A MPPT',
    badge: 'Best High-Amp',
    price: '$280',
    type: 'MPPT',
    ampRating: '60A',
    maxPvInput: '780W (12V) / 1,560W (24V)',
    maxVoc: '150V',
    efficiency: '~97%',
    batteryCompat: '12V / 24V / 36V / 48V / LFP',
    monitoring: 'Built-in LCD + Bluetooth App',
    affiliateLink: '#',
  },
  {
    name: 'BougeRV 40A MPPT',
    badge: 'Best for RVs',
    price: '$140',
    type: 'MPPT',
    ampRating: '40A',
    maxPvInput: '520W (12V) / 1,040W (24V)',
    maxVoc: '100V',
    efficiency: '~96%',
    batteryCompat: '12V / 24V / LFP',
    monitoring: 'Built-in LCD + Bluetooth App',
    affiliateLink: '#',
  },
];

export default function BestSolarChargeControllerPage() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <main className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <article>

            {/* JSON-LD Schemas */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ========== BREADCRUMB ========== */}
            <nav className="mb-8">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:underline"
                style={{ color: '#22c55e' }}
              >
                <ArrowLeft className="h-4 w-4" />
                All Reviews
              </Link>
            </nav>

            {/* ========== HERO ========== */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                >
                  <Sun className="h-3.5 w-3.5" />
                  Comparison Guide
                </span>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#ffffff10', color: '#a1a1aa' }}
                >
                  Updated April 2026
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{ color: '#f5f5f5' }}
              >
                Best Solar Charge Controllers in 2026: MPPT vs PWM Compared
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<p
                className="text-lg md:text-xl leading-relaxed max-w-3xl"
                style={{ color: '#a1a1aa' }}
              >
                Whether you are building an off-grid cabin, outfitting an RV, or adding battery
                backup to your home solar system, the charge controller is the brain of your setup.
                We tested and reviewed the top five solar charge controllers of 2026 across
                efficiency, features, build quality, and value.
              </p>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop' alt='Solar charge controller system' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* ========== TABLE OF CONTENTS ========== */}
            <nav
              className="rounded-xl border p-6 mb-12"
              style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#a1a1aa' }}>
                In This Guide
              </h2>
              <ol className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                {[
                  { href: '#mppt-vs-pwm', label: 'MPPT vs PWM: Which Type Do You Need?' },
                  { href: '#top-picks', label: 'Our Top 5 Picks at a Glance' },
                  { href: '#comparison-table', label: 'Side-by-Side Comparison Table' },
                  { href: '#victron-review', label: 'Victron SmartSolar MPPT 100/50 Review' },
                  { href: '#renogy-review', label: 'Renogy Rover 40A MPPT Review' },
                  { href: '#epever-review', label: 'EPEver Tracer 4210AN Review' },
                  { href: '#rich-solar-review', label: 'Rich Solar 60A MPPT Review' },
                  { href: '#bougervreview', label: 'BougeRV 40A MPPT Review' },
                  { href: '#sizing-guide', label: 'How to Size a Solar Charge Controller' },
                  { href: '#faq', label: 'FAQ' },
                  { href: '#verdict', label: 'Final Verdict' },
                ].map((item, i) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 hover:underline transition-colors"
                      style={{ color: '#d4d4d8' }}
                    >
                      <span
                        className="flex items-center justify-center h-5 w-5 rounded text-xs font-bold"
                        style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                      >
                        {i + 1}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ========== MPPT VS PWM EXPLAINER ========== */}
            <section id="mppt-vs-pwm" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                MPPT vs PWM: Which Type Do You Need?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                Every solar charge controller sits between your panels and your battery bank,
                regulating voltage and current to prevent overcharging. The two technologies
                available, PWM and MPPT. Differ dramatically in how they handle that job, and the
                efficiency gap is significant enough to affect your system cost and energy harvest
                for years.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* PWM Card */}
                <div
                  className="rounded-xl border p-6"
                  style={{ backgroundColor: '#171717', borderColor: '#ffffff12' }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    PWM (Pulse Width Modulation)
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: 'check', text: 'Low cost ($15-$50 for 30A units)' },
                      { icon: 'check', text: 'Simple, reliable, fewer components' },
                      { icon: 'x', text: '75-80% efficiency in real-world use' },
                      { icon: 'x', text: 'Panel voltage must closely match battery voltage' },
                      { icon: 'x', text: 'Wastes excess voltage as heat' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        {item.icon === 'check' ? (
                          <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        ) : (
                          <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        )}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm mt-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#d4d4d8' }}>Best for:</strong> Small systems under 200W
                    where panel voltage matches battery voltage (e.g., a single 12V panel charging a 12V battery).
                  </p>
                </div>

                {/* MPPT Card */}
                <div
                  className="rounded-xl border p-6"
                  style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>
                      MPPT (Maximum Power Point Tracking)
                    </h3>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      RECOMMENDED
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { icon: 'check', text: '95-99% conversion efficiency' },
                      { icon: 'check', text: 'Converts excess voltage to additional current' },
                      { icon: 'check', text: 'Works with higher-voltage panel strings' },
                      { icon: 'check', text: '20-30% more energy harvest vs PWM' },
                      { icon: 'x', text: 'Higher cost ($100-$300 for 40A units)' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        {item.icon === 'check' ? (
                          <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        ) : (
                          <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        )}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm mt-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#d4d4d8' }}>Best for:</strong> Any system over 200W, mismatched
                    panel/battery voltages, cold climates, and anyone who wants maximum energy from their panels.
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg border p-4 text-sm leading-relaxed"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff12', color: '#a1a1aa' }}
              >
                <strong style={{ color: '#22c55e' }}>Bottom line:</strong> If your total solar array
                is over 200W, and especially if your panels produce a higher voltage than your
                battery bank; MPPT is the clear winner. The upfront cost difference pays for itself
                in extra energy harvest within 6-12 months. Every controller in our top five list
                below is MPPT.
              </div>
            </section>

            {/* ========== TOP PICKS OVERVIEW ========== */}
            <section id="top-picks" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Our Top 5 Picks at a Glance
              </h2>
              <div className="space-y-4">
                {controllers.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-xl border p-5 flex flex-col md:flex-row md:items-center gap-4"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded"
                          style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                        >
                          {c.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>
                        {c.name}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: '#a1a1aa' }}>
                        {c.ampRating} &middot; {c.efficiency} efficiency &middot; Max Voc {c.maxVoc}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold" style={{ color: '#22c55e' }}>
                        {c.price}
                      </span>
                      <a
                        href={c.affiliateLink}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:opacity-90"
                        style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                      >
                        Check Price
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section id="comparison-table" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#ffffff12' }}>
                <table className="w-full text-sm" style={{ color: '#d4d4d8' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      {['Spec', 'Victron 100/50', 'Renogy Rover 40A', 'EPEver 4210AN', 'Rich Solar 60A', 'BougeRV 40A'].map(
                        (h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                            style={{ color: '#a1a1aa', borderColor: '#ffffff12' }}
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { spec: 'Price', vals: ['$230', '$160', '$110', '$280', '$140'] },
                      { spec: 'Amp Rating', vals: ['50A', '40A', '40A', '60A', '40A'] },
                      { spec: 'Max PV (12V)', vals: ['700W', '520W', '520W', '780W', '520W'] },
                      { spec: 'Max Voc', vals: ['100V', '100V', '100V', '150V', '100V'] },
                      { spec: 'Efficiency', vals: ['~98%', '~97%', '~96%', '~97%', '~96%'] },
                      { spec: 'Battery Voltage', vals: ['12/24V', '12/24V', '12/24V', '12-48V', '12/24V'] },
                      { spec: 'LFP Support', vals: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
                      { spec: 'Bluetooth', vals: ['Built-in', 'Optional', 'Optional', 'Built-in', 'Built-in'] },
                      { spec: 'Warranty', vals: ['5 year', '2 year', '2 year', '2 year', '2 year'] },
                    ].map((row, i) => (
                      <tr
                        key={row.spec}
                        style={{
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                          borderColor: '#ffffff08',
                        }}
                      >
                        <td
                          className="px-4 py-3 font-medium whitespace-nowrap"
                          style={{ color: '#f5f5f5' }}
                        >
                          {row.spec}
                        </td>
                        {row.vals.map((val, j) => (
                          <td key={j} className="px-4 py-3 whitespace-nowrap">
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== VICTRON REVIEW ========== */}
            <section id="victron-review" className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  #1 Best Overall
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                Victron SmartSolar MPPT 100/50 Review
              </h2>
              <p className="text-sm mb-6" style={{ color: '#a1a1aa' }}>
                $230 &middot; 50A &middot; 100V Voc &middot; ~98% Efficiency
              </p>
              <div
                className="rounded-xl border p-6 mb-6"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  Victron is the gold standard in off-grid power electronics, and the SmartSolar
                  MPPT 100/50 shows why. This controller pairs industry-leading tracking efficiency
                  (up to 98%) with Victron&apos;s rock-solid build quality and a 5-year warranty — the
                  longest on our list by a wide margin.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The built-in Bluetooth connects instantly to the VictronConnect app, where you
                  can monitor real-time solar harvest, battery voltage, charge state, and historical
                  yield data without buying any add-on modules. The adaptive three-stage charging
                  algorithm (bulk, absorption, float) automatically adjusts to your battery chemistry,
                  with factory presets for LFP, AGM, gel, and flooded lead-acid.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  At 50A, it handles up to 700W of solar on a 12V system or 1,400W on 24V. The
                  100V maximum Voc means you can string two standard 60-cell panels in series
                  without exceeding limits. A common and efficient wiring configuration for
                  mid-size off-grid and RV setups.
                </p>
                <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                  The only downside is price: at $230, it costs $70-$120 more than comparable 40A
                  controllers. But the extra 10A headroom, superior efficiency, 5-year warranty, and
                  Victron&apos;s ecosystem (GX devices, VRM portal, Cerbo integration) make it worth
                  every cent for anyone building a serious system.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#22c55e' }}>
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Industry-leading ~98% tracking efficiency',
                      'Built-in Bluetooth; no extra modules needed',
                      '5-year warranty (best in class)',
                      'Adaptive 3-stage charging with battery presets',
                      'Integrates with Victron GX ecosystem / VRM portal',
                      '50A handles up to 700W on 12V',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#ef4444' }}>
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Most expensive on our list at $230',
                      'No built-in LCD display (app-only monitoring)',
                      'Overkill for small systems under 300W',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <BuyButton
                productKey="victron-smartsolar-mppt-100-50"
                source="best-solar-charge-controller"
                variant="primary"
                label="Check Price, Victron SmartSolar MPPT 100/50 Review"
                showPrice
              />
            </section>

            {/* ========== RENOGY REVIEW ========== */}
            <section id="renogy-review" className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded"
                  style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                >
                  #2 Best Value
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                Renogy Rover 40A MPPT Review
              </h2>
              <p className="text-sm mb-6" style={{ color: '#a1a1aa' }}>
                $160 &middot; 40A &middot; 100V Voc &middot; ~97% Efficiency
              </p>
              <div
                className="rounded-xl border p-6 mb-6"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The Renogy Rover 40A MPPT hits the sweet spot between performance and price. At
                  $160, it delivers 97% conversion efficiency with a feature set that rivals
                  controllers costing twice as much. Renogy is one of the best-known names in
                  consumer solar, and the Rover is their flagship charge controller for good reason.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The built-in LCD screen shows real-time charging data. Panel voltage, battery
                  voltage, charge current, and daily/cumulative yield, without needing a phone.
                  For remote monitoring, you can add the optional BT-1 Bluetooth module ($20) to
                  connect to the Renogy DC Home app, which provides historical data and lets you
                  adjust charging parameters remotely.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  Charging profiles cover all common battery types: sealed, gel, flooded, lithium,
                  and user-defined. The four-stage charging algorithm (bulk, boost, float,
                  equalization) keeps batteries topped off optimally. Multiple electronic protections
                  are built in: overcharge, over-discharge, short circuit, reverse polarity, and
                  overload.
                </p>
                <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                  At 40A, it handles up to 520W of solar at 12V, enough for a typical RV or
                  small cabin system. The only real compromise vs. the Victron is the 2-year
                  warranty (vs. 5) and the lack of built-in Bluetooth.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#22c55e' }}>
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Excellent price-to-performance at $160',
                      'Built-in LCD display for at-a-glance monitoring',
                      '97% efficiency — only 1% behind Victron',
                      'Comprehensive electronic protections',
                      'Widely available with strong community support',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#ef4444' }}>
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Bluetooth requires separate BT-1 module ($20)',
                      '2-year warranty (vs. Victron 5-year)',
                      'Fan can be audible under heavy load',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <BuyButton
                productKey="renogy-rover-40a-mppt"
                source="best-solar-charge-controller"
                variant="primary"
                label="Check Price, Renogy Rover 40A MPPT Review"
                showPrice
              />
            </section>

            {/* ========== EPEVER REVIEW ========== */}
            <section id="epever-review" className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded"
                  style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                >
                  #3 Best Budget MPPT
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                EPEver Tracer 4210AN Review
              </h2>
              <p className="text-sm mb-6" style={{ color: '#a1a1aa' }}>
                $110 &middot; 40A &middot; 100V Voc &middot; ~96% Efficiency
              </p>
              <div
                className="rounded-xl border p-6 mb-6"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The EPEver Tracer 4210AN is the workhorse of the budget MPPT segment. At $110,
                  it offers genuine MPPT tracking at a price that undercuts PWM controllers from
                  premium brands. EPEver (also known as EPEVER or Epsolar) has been manufacturing
                  charge controllers for over a decade, and the Tracer AN series is their most
                  popular line worldwide.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  Performance is solid: 96% peak efficiency with reliable tracking across varying
                  light conditions. The controller supports 12V and 24V battery banks with auto-detection,
                  and handles up to 520W of solar input at 12V. It includes a built-in timer for
                  load control, making it useful for lighting systems and automated off-grid setups.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The main tradeoff at this price point is monitoring. The unit itself has only
                  basic LED indicators, no LCD screen. For detailed data, you need the MT50 remote
                  meter ($25) or the eBox Bluetooth/WiFi dongle ($30-$40). Once connected, though,
                  the EPEver app provides comprehensive monitoring and full parameter adjustment.
                </p>
                <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                  Build quality is functional rather than premium. The housing is sturdy aluminum
                  with good heat dissipation, but the terminal blocks and wire connectors feel
                  a step below Victron or Renogy. For the price, it is an outstanding value. Especially for first-time builders and budget-conscious off-grid projects.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#22c55e' }}>
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Lowest price for genuine MPPT at $110',
                      'Reliable 96% efficiency under real conditions',
                      'Built-in load timer for automated systems',
                      'Huge user community with extensive documentation',
                      'Modbus RS-485 communication for advanced setups',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#ef4444' }}>
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'No built-in display. LED indicators only',
                      'Bluetooth/WiFi monitoring requires add-on purchase',
                      'Terminal block quality is average',
                      '2-year warranty',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <BuyButton
                productKey="epever-tracer-4210an"
                source="best-solar-charge-controller"
                variant="primary"
                label="Check Price, EPEver Tracer 4210AN Review"
                showPrice
              />
            </section>

            {/* ========== RICH SOLAR REVIEW ========== */}
            <section id="rich-solar-review" className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded"
                  style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                >
                  #4 Best High-Amp
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                Rich Solar 60A MPPT Review
              </h2>
              <p className="text-sm mb-6" style={{ color: '#a1a1aa' }}>
                $280 &middot; 60A &middot; 150V Voc &middot; ~97% Efficiency
              </p>
              <div
                className="rounded-xl border p-6 mb-6"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  If you are building a larger off-grid system and need more amperage headroom,
                  the Rich Solar 60A MPPT is the standout choice. It is the only controller on
                  our list that supports 48V battery banks natively and offers a 150V maximum Voc,
                  allowing longer panel strings without exceeding voltage limits.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  At 60A, it handles up to 780W at 12V, 1,560W at 24V, or 3,120W at 48V. That
                  kind of capacity makes it suitable for serious off-grid cabins, workshop setups,
                  or small commercial solar installations. The 150V Voc ceiling means you can
                  wire three 60-cell panels in series without exceeding the input limit — reducing
                  wire gauge requirements and voltage drop over long cable runs.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The built-in LCD screen provides comprehensive real-time data, and the Bluetooth
                  module connects to the Rich Solar app for historical monitoring and remote
                  parameter adjustment. The charging algorithm supports LFP, AGM, gel, flooded,
                  and custom user-defined profiles.
                </p>
                <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                  At $280, it sits in the same price range as the Victron 100/50 but offers 10A
                  more capacity, 48V support, and a higher Voc ceiling. The tradeoff is a shorter
                  warranty (2 years vs. 5) and a less mature monitoring ecosystem compared to
                  Victron&apos;s VRM portal.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#22c55e' }}>
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      '60A rating, highest on our list',
                      '150V Voc supports longer panel strings',
                      'Native 48V battery bank support',
                      'Built-in LCD + Bluetooth monitoring',
                      '97% tracking efficiency',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#ef4444' }}>
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Most expensive at $280',
                      '2-year warranty',
                      'Newer brand, less long-term reliability data',
                      'Overkill for systems under 500W',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <BuyButton
                productKey="rich-solar-60a-mppt"
                source="best-solar-charge-controller"
                variant="primary"
                label="Check Price, Rich Solar 60A MPPT Review"
                showPrice
              />
            </section>

            {/* ========== BOUGERV REVIEW ========== */}
            <section id="bougervreview" className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded"
                  style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                >
                  #5 Best for RVs
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                BougeRV 40A MPPT Review
              </h2>
              <p className="text-sm mb-6" style={{ color: '#a1a1aa' }}>
                $140 &middot; 40A &middot; 100V Voc &middot; ~96% Efficiency
              </p>
              <div
                className="rounded-xl border p-6 mb-6"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  BougeRV has built a loyal following in the RV and van-life community, and their
                  40A MPPT charge controller is purpose-built for mobile solar setups. At $140,
                  it slots between the budget EPEver and the mid-range Renogy, offering built-in
                  Bluetooth and an LCD display, features that both competitors charge extra for.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The compact form factor is designed for tight RV electrical compartments, and
                  the fanless passive cooling design means zero noise, a real advantage when your
                  charge controller is a few feet from where you sleep. The BougeRV app provides
                  clean, straightforward monitoring with daily yield tracking and battery health
                  indicators.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  Performance is on par with the EPEver at 96% efficiency, handling up to 520W
                  of solar input at 12V. The LFP charging profile is well-calibrated for the
                  lithium batteries that are now standard in modern RV builds. It also supports
                  sealed lead-acid, gel, and flooded batteries for older setups.
                </p>
                <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                  The main limitation is the 2-year warranty and the fact that BougeRV&apos;s
                  ecosystem is smaller than Victron&apos;s or Renogy&apos;s. But for RV owners who want
                  a clean, quiet, app-connected controller at a competitive price, the BougeRV
                  is hard to beat.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#22c55e' }}>
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Built-in Bluetooth + LCD at just $140',
                      'Fanless/silent design, ideal for RVs',
                      'Compact form factor for tight installs',
                      'Clean, intuitive app interface',
                      'Well-calibrated LFP charging profile',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-lg border p-4"
                  style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                >
                  <h4 className="text-sm font-semibold mb-3" style={{ color: '#ef4444' }}>
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      '2-year warranty',
                      'Smaller brand ecosystem vs Victron/Renogy',
                      '96% efficiency (slightly below top tier)',
                      'Limited to 12V/24V battery banks',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <BuyButton
                productKey="bougerv-40a-mppt"
                source="best-solar-charge-controller"
                variant="primary"
                label="Check Price, BougeRV 40A MPPT Review"
                showPrice
              />
            </section>

            {/* ========== SIZING GUIDE ========== */}
            <section id="sizing-guide" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                How to Size a Solar Charge Controller
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                Choosing the right amperage rating is critical. An undersized controller will
                throttle your solar harvest; an oversized one wastes money. Here is the step-by-step
                process for sizing an MPPT charge controller.
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Calculate maximum charge current',
                    desc: 'Divide your total solar panel wattage by your battery bank voltage. Example: 600W of panels / 12V battery = 50A. For a 24V bank: 600W / 24V = 25A.',
                  },
                  {
                    step: '2',
                    title: 'Add a 25% safety margin',
                    desc: 'Panels can exceed rated output in ideal conditions (cold, clear days). Multiply your result by 1.25. Example: 50A x 1.25 = 62.5A, so you need at least a 60A controller.',
                  },
                  {
                    step: '3',
                    title: 'Check open-circuit voltage (Voc)',
                    desc: 'Add up the Voc of all panels wired in series. This number must stay below the controller maximum input voltage. For cold climates, add 10% to Voc since voltage increases in cold temperatures. Example: 2 panels x 45V Voc = 90V + 10% = 99V, a 100V controller works, but barely.',
                  },
                  {
                    step: '4',
                    title: 'Verify battery compatibility',
                    desc: 'Confirm the controller supports your battery voltage (12V, 24V, 48V) and chemistry (LFP, AGM, gel, flooded). Most MPPT controllers auto-detect voltage, but always verify the charging profile matches your battery specs.',
                  },
                  {
                    step: '5',
                    title: 'Consider future expansion',
                    desc: 'If you plan to add more panels later, size the controller for your future array — not just your current one. It is much cheaper to buy a slightly larger controller now than to replace it later.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xl border p-5 flex gap-4"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                  >
                    <div
                      className="flex items-center justify-center h-8 w-8 rounded-lg flex-shrink-0 text-sm font-bold"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 rounded-xl border p-6"
                style={{ backgroundColor: '#171717', borderColor: '#ffffff12' }}
              >
                <h3 className="font-bold mb-4" style={{ color: '#f5f5f5' }}>
                  Quick Sizing Reference
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ color: '#d4d4d8' }}>
                    <thead>
                      <tr>
                        {['Solar Array', '12V Battery', '24V Battery', '48V Battery'].map((h) => (
                          <th
                            key={h}
                            className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider"
                            style={{ color: '#a1a1aa' }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { array: '200W', v12: '20A', v24: '10A', v48: '5A' },
                        { array: '400W', v12: '40A', v24: '20A', v48: '10A' },
                        { array: '600W', v12: '60A', v24: '30A', v48: '15A' },
                        { array: '800W', v12: '80A', v24: '40A', v48: '20A' },
                        { array: '1,000W', v12: '100A', v24: '50A', v48: '25A' },
                      ].map((row, i) => (
                        <tr
                          key={row.array}
                          style={{ backgroundColor: i % 2 === 0 ? '#141414' : '#171717' }}
                        >
                          <td className="px-4 py-2 font-medium" style={{ color: '#f5f5f5' }}>
                            {row.array}
                          </td>
                          <td className="px-4 py-2">{row.v12}</td>
                          <td className="px-4 py-2">{row.v24}</td>
                          <td className="px-4 py-2">{row.v48}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-3 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  * Minimum controller amperage shown. Add 25% safety margin for real-world sizing.
                  Values assume standard test conditions (STC).
                </p>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section id="faq" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq, i) => (
                  <details
                    key={i}
                    className="rounded-xl border group"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
                  >
                    <summary
                      className="flex items-center justify-between gap-4 px-4 py-4 cursor-pointer font-medium text-sm md:text-base list-none"
                      style={{ color: '#f5f5f5' }}
                    >
                      {faq.name}
                      <ChevronRight
                        className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-90"
                        style={{ color: '#a1a1aa' }}
                      />
                    </summary>
                    <div
                      className="px-4 pb-4 text-sm leading-relaxed"
                      style={{ color: '#a1a1aa' }}
                    >
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== FINAL VERDICT ========== */}
            <section id="verdict" className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Final Verdict
              </h2>
              <div
                className="rounded-xl border p-6 md:p-8 mb-8"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff12' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  All five controllers on this list are genuine MPPT units that will dramatically
                  outperform any PWM controller. The right choice depends on your budget, system
                  size, and feature priorities.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      pick: 'Best Overall',
                      name: 'Victron SmartSolar MPPT 100/50',
                      reason: 'Unmatched 98% efficiency, 5-year warranty, built-in Bluetooth, and integration with the Victron ecosystem. Worth the premium for any serious build.',
                    },
                    {
                      pick: 'Best Value',
                      name: 'Renogy Rover 40A MPPT',
                      reason: 'The best balance of performance, features, and price. Built-in LCD, 97% efficiency, and Renogy\'s proven reliability at $160.',
                    },
                    {
                      pick: 'Best Budget',
                      name: 'EPEver Tracer 4210AN',
                      reason: 'Genuine MPPT for just $110. Perfect for first-time builders and budget projects where every dollar counts.',
                    },
                    {
                      pick: 'Best High-Amp',
                      name: 'Rich Solar 60A MPPT',
                      reason: '60A capacity, 150V Voc, and 48V battery support make it the only choice for larger off-grid systems.',
                    },
                    {
                      pick: 'Best for RVs',
                      name: 'BougeRV 40A MPPT',
                      reason: 'Silent fanless design, compact size, built-in Bluetooth + LCD at $140. Purpose-built for mobile life.',
                    },
                  ].map((v) => (
                    <div
                      key={v.pick}
                      className="flex flex-col md:flex-row md:items-start gap-3 p-4 rounded-lg"
                      style={{ backgroundColor: '#171717' }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded whitespace-nowrap"
                        style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                      >
                        <Star className="h-3.5 w-3.5" />
                        {v.pick}
                      </span>
                      <div>
                        <span className="font-semibold" style={{ color: '#f5f5f5' }}>
                          {v.name}
                        </span>
                        <span className="mx-2" style={{ color: '#a1a1aa' }}>
                          &mdash;
                        </span>
                        <span style={{ color: '#d4d4d8' }}>{v.reason}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl border p-6 md:p-8 text-center"
                style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}
              >
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Building a Solar System?
                </h2>
                <p
                  className="max-w-2xl mx-auto mb-6 leading-relaxed"
                  style={{ color: '#a1a1aa' }}
                >
                  Check out our full lineup of solar product reviews, portable power stations,
                  and off-grid gear guides.
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
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
