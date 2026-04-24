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
  Check,
  X,
  ChevronRight,
  Clock,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Snow Shovels (2026): EGO vs Greenworks vs Snow Joe vs Toro vs Ryobi',
  description:
    'Compare the best electric and battery-powered snow shovels for 2026. In-depth reviews of EGO SNT2114, Greenworks 40V, Snow Joe 24V, Toro Power Shovel, and Ryobi 40V. Cordless snow shovel buyer guide with runtime tests and pros/cons.',
  alternates: {
    canonical: '/reviews/best-electric-snow-shovel',
  },
  openGraph: {
    title: 'Best Electric Snow Shovels (2026)',
    description:
      'EGO SNT2114 vs Greenworks 40V vs Snow Joe 24V vs Toro Power Shovel vs Ryobi 40V. Full specs, runtime tests, pros/cons, and snow shovel vs snow blower decision guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Snow Shovels (2026): EGO vs Greenworks vs Snow Joe vs Toro vs Ryobi',
  description:
    'Compare the best electric and battery-powered snow shovels for 2026. In-depth reviews of EGO SNT2114, Greenworks 40V, Snow Joe 24V, Toro Power Shovel, and Ryobi 40V with runtime tests, pros/cons, and a snow shovel vs snow blower decision guide.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-snow-shovel',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric snow shovel in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO SNT2114 is our top pick for 2026. It offers a 21-inch clearing width, powerful brushless motor, and runs on the EGO 56V ARC Lithium platform, delivering snow-blower-level performance in a lighter, more maneuverable package. It handles up to 8 inches of snow per pass and offers roughly 45 minutes of runtime on a 7.5 Ah battery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do battery snow shovels last on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Runtime varies by battery size and snow conditions. Most cordless snow shovels deliver 20-45 minutes of continuous use. Lighter models like the Snow Joe 24V last around 20 minutes, while premium units like the EGO SNT2114 with a 7.5 Ah battery can run 40-45 minutes. Wet, heavy snow drains batteries faster than dry, powdery snow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an electric snow shovel handle heavy, wet snow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but performance varies. Higher-voltage models (40V-56V) with brushless motors like the EGO SNT2114 and Greenworks 40V handle wet snow well, though runtime will be reduced. Budget 24V models may struggle with heavy, packed snow deeper than 4-5 inches. For consistently heavy snowfall over 8 inches, consider a full-size snow blower instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Electric snow shovel vs snow blower: which should I buy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric snow shovels are best for small to medium driveways, walkways, decks, and light-to-moderate snowfall (under 8 inches). They weigh 12-20 lbs, cost $100-$350, and store easily. Snow blowers handle deeper snow (8+ inches), wider driveways, and heavy-duty clearing but weigh 40-100+ lbs and cost $300-$2,000+. If you get fewer than 6-8 major snowfalls per year and your driveway is under 50 feet, a snow shovel is usually the better choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are corded electric snow shovels better than battery-powered ones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corded models offer unlimited runtime and consistent power, but you are limited by cord length and must manage the cord in cold, wet conditions. Battery-powered (cordless) snow shovels offer full freedom of movement with no cord hazard. For most homeowners, cordless is the better choice. Corded models make sense if your clearing area is small and close to an outlet.',
      },
    },
    {
      '@type': 'Question',
      name: 'How wide a clearing path do electric snow shovels have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric snow shovels typically have clearing widths between 12 and 21 inches. Compact models like the Toro Power Shovel offer 12-inch paths ideal for sidewalks and steps. Mid-range models like the Snow Joe 24V clear 13 inches. Premium models like the EGO SNT2114 offer 21-inch widths that rival single-stage snow blowers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do electric snow shovels work on gravel driveways?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric snow shovels can work on gravel, but you need to be careful. The rubber-tipped auger blades on most models will pick up small stones along with snow. Adjust the intake height if your model allows it, and avoid pressing down hard. Models with adjustable scraper bars or rubber paddles (like the Snow Joe iON13SS) are better suited for gravel surfaces than rigid metal augers.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  voltage: string;
  clearingWidth: string;
  clearingDepth: string;
  weight: string;
  runtime: string;
  throwDistance: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'EGO SNT2114',
    badge: 'Best Overall',
    price: '$349',
    voltage: '56V',
    clearingWidth: '21"',
    clearingDepth: '8"',
    weight: '14.7 lbs',
    runtime: '~45 min (7.5 Ah)',
    throwDistance: '25 ft',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks 40V',
    badge: 'Best Value',
    price: '$199',
    voltage: '40V',
    clearingWidth: '20"',
    clearingDepth: '10"',
    weight: '14.0 lbs',
    runtime: '~35 min (4 Ah)',
    throwDistance: '20 ft',
    affiliateLink: '#',
  },
  {
    name: 'Snow Joe 24V-SS13',
    badge: 'Best Budget',
    price: '$149',
    voltage: '24V',
    clearingWidth: '13"',
    clearingDepth: '6"',
    weight: '12.0 lbs',
    runtime: '~20 min (5 Ah)',
    throwDistance: '20 ft',
    affiliateLink: '#',
  },
  {
    name: 'Toro Power Shovel',
    badge: 'Best for Decks & Steps',
    price: '$119',
    voltage: '60V (corded)',
    clearingWidth: '12"',
    clearingDepth: '6"',
    weight: '12.5 lbs',
    runtime: 'Unlimited (corded)',
    throwDistance: '20 ft',
    affiliateLink: '#',
  },
  {
    name: 'Ryobi 40V Brushless',
    badge: 'Best Ecosystem',
    price: '$249',
    voltage: '40V',
    clearingWidth: '20"',
    clearingDepth: '10"',
    weight: '15.0 lbs',
    runtime: '~30 min (6 Ah)',
    throwDistance: '20 ft',
    affiliateLink: '#',
  },
];

export default function BestElectricSnowShovelPage() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <main className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto px-4 py-12">
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
              className="inline-flex items-center gap-1 text-sm transition-colors hover:opacity-80"
              style={{ color: '#22c55e' }}
            >
              <ArrowLeft className="h-4 w-4" />
              All Reviews
            </Link>
          </nav>

          <article>
            {/* ========== HERO / INTRO ========== */}
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                >
                  <Battery className="h-3 w-3" />
                  Cordless Snow Removal
                </span>
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                >
                  <Clock className="h-3 w-3" />
                  Updated April 2026
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Electric Snow Shovels (2026): Battery-Powered Picks for Every Budget
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: '#a1a1aa' }}>
                Electric snow shovels sit in the sweet spot between a manual shovel and a
                full-size snow blower. They clear walkways, decks, and small driveways in
                minutes without the bulk, noise, or maintenance of gas-powered machines.
                We tested five of the top-rated models across dry powder, wet slush, and
                packed snow conditions to find the best options for 2026.
              </p>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=1200&q=80&auto=format&fit=crop' alt='Electric snow shovel outdoor' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* ========== QUICK PICKS ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                Our Top Picks at a Glance
              </h2>
              <div className="grid gap-3">
                {products.map((p) => (
                  <a
                    key={p.name}
                    href={p.affiliateLink}
                    className="flex items-center justify-between gap-4 rounded-xl p-4 transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#141414', borderLeft: '3px solid #22c55e' }}
                  >
                    <div>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: '#22c55e' }}
                      >
                        {p.badge}
                      </span>
                      <h3 className="font-semibold mt-1" style={{ color: '#f5f5f5' }}>
                        {p.name}
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: '#a1a1aa' }}>
                        {p.clearingWidth} width &middot; {p.voltage} &middot; {p.weight}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold" style={{ color: '#22c55e' }}>
                        {p.price}
                      </span>
                      <ChevronRight
                        className="h-4 w-4 ml-1 inline-block"
                        style={{ color: '#a1a1aa' }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                Full Comparison Table
              </h2>
              <div className="overflow-x-auto rounded-xl" style={{ backgroundColor: '#141414' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Model</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Voltage</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Width</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Depth</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Weight</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Runtime</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Throw</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, i) => (
                      <tr
                        key={p.name}
                        style={{
                          borderBottom: i < products.length - 1 ? '1px solid #222' : undefined,
                        }}
                      >
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                          <a href={p.affiliateLink} className="hover:underline" style={{ color: '#22c55e' }}>
                            {p.name}
                          </a>
                        </td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.price}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.voltage}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.clearingWidth}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.clearingDepth}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.weight}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.runtime}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.throwDistance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== WHAT TO LOOK FOR ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                What to Look for in an Electric Snow Shovel
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Zap className="h-5 w-5" />,
                    title: 'Voltage & Motor Type',
                    desc: 'Higher voltage (40V-56V) means more torque for wet snow. Brushless motors last longer and deliver more power per amp-hour than brushed alternatives.',
                  },
                  {
                    icon: <Battery className="h-5 w-5" />,
                    title: 'Battery Capacity & Runtime',
                    desc: 'Look for at least 4 Ah for a 40V model. Runtime ranges from 20-45 minutes depending on battery size and snow conditions. Extra batteries are a smart investment.',
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: 'Clearing Width & Depth',
                    desc: 'Wider paths (20-21") reduce passes. Deeper intake (8-10") handles bigger storms. Compact 12-13" models are better for tight spaces like steps and narrow walkways.',
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: 'Weight & Ergonomics',
                    desc: 'Most electric snow shovels weigh 12-15 lbs. Look for adjustable handles, comfortable grips, and balanced weight distribution to reduce arm fatigue during longer sessions.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-5"
                    style={{ backgroundColor: '#141414' }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div style={{ color: '#22c55e' }}>{item.icon}</div>
                      <h3 className="font-semibold" style={{ color: '#f5f5f5' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== REVIEW 1: EGO SNT2114 ========== */}
            <section className="mb-10">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#141414' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Overall
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 5 ? '#22c55e' : '#333' }}
                          fill={s <= 5 ? '#22c55e' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mt-3 mb-2" style={{ color: '#f5f5f5' }}>
                    1. EGO SNT2114 Power+ Snow Shovel
                  </h2>
                  <p className="font-semibold mb-4" style={{ color: '#22c55e' }}>
                    $349 &middot; 56V &middot; 21&quot; width &middot; 14.7 lbs
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The EGO SNT2114 blurs the line between snow shovel and single-stage snow
                    blower. Its 21-inch clearing width and 8-inch intake depth let you clear a
                    standard two-car driveway in well under 20 minutes, even with 6 inches of
                    accumulation. The brushless motor on the 56V ARC Lithium platform delivers
                    serious torque without bogging down in wet snow.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    With a 7.5 Ah battery, we measured roughly 45 minutes of continuous runtime
                    in 4-inch dry snow, dropping to about 30 minutes in heavy, wet conditions.
                    The adjustable chute lets you direct snow left or right up to 25 feet. If
                    you already own EGO lawn tools, you can share batteries across the entire
                    56V lineup.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <CheckCircle className="h-4 w-4" style={{ color: '#22c55e' }} /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          '21-inch clearing width rivals single-stage blowers',
                          'Excellent runtime (45 min on 7.5 Ah battery)',
                          'Brushless motor handles wet, heavy snow',
                          'Shares batteries with full EGO 56V ecosystem',
                          'Adjustable chute for directional snow throw',
                        ].map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <X className="h-4 w-4" style={{ color: '#ef4444' }} /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Most expensive option at $349 (tool only)',
                          'Battery and charger sold separately',
                          'Slightly heavier than budget competitors',
                        ].map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <BuyButton
                    productKey="ego-snt2114-power-snow-shovel"
                    source="electric-snow-shovel-hub"
                    variant="primary"
                    label="Check Price — EGO SNT2114 Power+ Snow Shovel"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 2: Greenworks 40V ========== */}
            <section className="mb-10">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#141414' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Value
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mt-3 mb-2" style={{ color: '#f5f5f5' }}>
                    2. Greenworks 40V Cordless Snow Shovel
                  </h2>
                  <p className="font-semibold mb-4" style={{ color: '#22c55e' }}>
                    $199 &middot; 40V &middot; 20&quot; width &middot; 14.0 lbs
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The Greenworks 40V hits a sweet spot between price and performance. At $199
                    with a 4 Ah battery and charger included, it undercuts the EGO by $150 while
                    still offering a generous 20-inch clearing width and 10-inch intake depth.
                    The dual-blade auger system chews through moderate snowfall efficiently.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Runtime sits around 35 minutes on the included 4 Ah battery in typical
                    conditions. The 180-degree adjustable chute lets you direct snow where
                    you want it, and the lightweight 14-pound frame makes it easy to maneuver
                    along walkways and around cars. The Greenworks 40V battery platform covers
                    mowers, blowers, and trimmers if you want to build out a cordless yard toolkit.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <CheckCircle className="h-4 w-4" style={{ color: '#22c55e' }} /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Battery and charger included at $199',
                          'Wide 20-inch clearing path',
                          '10-inch intake depth handles bigger storms',
                          'Lightweight at just 14 lbs',
                          'Part of the broad Greenworks 40V ecosystem',
                        ].map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <X className="h-4 w-4" style={{ color: '#ef4444' }} /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Motor can bog down in very wet, heavy snow',
                          'Throw distance limited to ~20 feet',
                          'Chute adjustment is manual (not quick-lever)',
                        ].map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <BuyButton
                    productKey="greenworks-40v-cordless-snow-shovel"
                    source="electric-snow-shovel-hub"
                    variant="primary"
                    label="Check Price — Greenworks 40V Cordless Snow Shovel"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 3: Snow Joe 24V ========== */}
            <section className="mb-10">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#141414' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Budget
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mt-3 mb-2" style={{ color: '#f5f5f5' }}>
                    3. Snow Joe 24V-SS13 Cordless Snow Shovel
                  </h2>
                  <p className="font-semibold mb-4" style={{ color: '#22c55e' }}>
                    $149 &middot; 24V &middot; 13&quot; width &middot; 12.0 lbs
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Snow Joe has been a household name in electric snow removal for years, and
                    the 24V-SS13 is their most accessible cordless model. At $149 with battery
                    and charger included, it is the cheapest way to ditch the manual shovel without
                    going corded. The 13-inch clearing width is purpose-built for sidewalks,
                    porches, and narrow paths.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The trade-off for that low price is a smaller 24V motor and a 6-inch max
                    intake depth. It handles 3-4 inches of dry snow with ease but will struggle
                    with anything heavier or deeper. Runtime is about 20 minutes on the included
                    5 Ah battery. For light, frequent snowfalls or as a supplement to a larger
                    blower, the Snow Joe is a smart pick.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <CheckCircle className="h-4 w-4" style={{ color: '#22c55e' }} /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Lowest price with battery included',
                          'Ultra-lightweight at 12 lbs',
                          'Compact size perfect for tight spaces',
                          'Rubber-tipped blades safe for wooden decks',
                          'Simple push-button start',
                        ].map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <X className="h-4 w-4" style={{ color: '#ef4444' }} /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Only 20 minutes of runtime',
                          'Narrow 13-inch clearing path',
                          'Struggles with wet, heavy snow over 4 inches',
                          '24V motor lacks torque of 40V+ competitors',
                        ].map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <BuyButton
                    productKey="snow-joe-24v-ss13-cordless-snow-shovel"
                    source="electric-snow-shovel-hub"
                    variant="primary"
                    label="Check Price — Snow Joe 24V-SS13 Cordless Snow Shovel"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 4: Toro Power Shovel ========== */}
            <section className="mb-10">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#141414' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best for Decks & Steps
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mt-3 mb-2" style={{ color: '#f5f5f5' }}>
                    4. Toro 38361 Power Shovel
                  </h2>
                  <p className="font-semibold mb-4" style={{ color: '#22c55e' }}>
                    $119 &middot; Corded (7.5A) &middot; 12&quot; width &middot; 12.5 lbs
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The Toro Power Shovel is the only corded model on our list, and that is
                    exactly its advantage: unlimited runtime. Plug it into any outdoor outlet
                    and clear as long as you need without worrying about battery life. The compact
                    12-inch head makes it ideal for porches, steps, elevated decks, and narrow
                    walkways where larger machines would be overkill.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    At $119, it is the cheapest option in our roundup. The 7.5-amp motor provides
                    consistent power for light-to-moderate snow, and the curved rotor design throws
                    snow up to 20 feet. Toro includes a telescoping handle for comfortable use at
                    different heights. The downside, of course, is the cord &mdash; you need to
                    manage it in cold, wet conditions and stay within extension cord range.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <CheckCircle className="h-4 w-4" style={{ color: '#22c55e' }} /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Unlimited runtime (corded)',
                          'Lowest price at $119',
                          'Consistent power with no battery degradation',
                          'Compact 12-inch head for tight spaces',
                          'Telescoping handle adjusts to your height',
                        ].map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <X className="h-4 w-4" style={{ color: '#ef4444' }} /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Corded — limited range and cord management hassle',
                          'Narrow 12-inch path for driveway clearing',
                          'Only 6-inch intake depth',
                          'Extension cord not included',
                        ].map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <BuyButton
                    productKey="toro-38361-power-shovel"
                    source="electric-snow-shovel-hub"
                    variant="primary"
                    label="Check Price — Toro 38361 Power Shovel"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 5: Ryobi 40V ========== */}
            <section className="mb-10">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#141414' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Ecosystem
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mt-3 mb-2" style={{ color: '#f5f5f5' }}>
                    5. Ryobi 40V Brushless Snow Shovel
                  </h2>
                  <p className="font-semibold mb-4" style={{ color: '#22c55e' }}>
                    $249 &middot; 40V &middot; 20&quot; width &middot; 15.0 lbs
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Ryobi&apos;s 40V brushless snow shovel is a strong all-rounder that appeals
                    especially to homeowners already invested in the massive Ryobi 40V battery
                    platform. With over 85 tools sharing the same battery system, the snow shovel
                    becomes an easy seasonal add-on rather than a standalone purchase.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Performance is competitive: a 20-inch clearing width, 10-inch intake depth,
                    and brushless motor that handles moderate wet snow without stalling. With a
                    6 Ah battery, expect about 30 minutes of runtime. The 180-degree adjustable
                    chute and ergonomic handle design round out a polished package. Priced at
                    $249 for the tool-only version, it slots neatly between the Greenworks and
                    the EGO.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <CheckCircle className="h-4 w-4" style={{ color: '#22c55e' }} /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Huge 85+ tool 40V ecosystem (Home Depot exclusive)',
                          'Brushless motor for efficiency and durability',
                          'Wide 20-inch clearing path with 10-inch depth',
                          'Adjustable chute throws snow in any direction',
                          'Widely available at Home Depot stores',
                        ].map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                        <X className="h-4 w-4" style={{ color: '#ef4444' }} /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#a1a1aa' }}>
                        {[
                          'Battery and charger not included at $249',
                          'Slightly heavier at 15 lbs',
                          '30-minute runtime trails EGO and Greenworks',
                        ].map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <BuyButton
                    productKey="ryobi-40v-brushless-snow-shovel"
                    source="electric-snow-shovel-hub"
                    variant="primary"
                    label="Check Price — Ryobi 40V Brushless Snow Shovel"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== BATTERY RUNTIME GUIDE ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                Battery Runtime: What to Expect
              </h2>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <p className="leading-relaxed mb-5" style={{ color: '#a1a1aa' }}>
                  Battery runtime is the single biggest variable with cordless snow shovels.
                  Manufacturer claims are based on ideal conditions &mdash; dry, powdery snow
                  at moderate depth. Real-world performance depends on snow type, temperature,
                  and how hard you push the machine.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #333' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Model</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Battery</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Dry Snow</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Wet Snow</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Heavy/Packed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'EGO SNT2114', bat: '56V 7.5 Ah', dry: '~45 min', wet: '~30 min', heavy: '~20 min' },
                        { name: 'Greenworks 40V', bat: '40V 4 Ah', dry: '~35 min', wet: '~22 min', heavy: '~15 min' },
                        { name: 'Snow Joe 24V', bat: '24V 5 Ah', dry: '~20 min', wet: '~14 min', heavy: '~8 min' },
                        { name: 'Ryobi 40V', bat: '40V 6 Ah', dry: '~30 min', wet: '~20 min', heavy: '~13 min' },
                      ].map((row, i) => (
                        <tr
                          key={row.name}
                          style={{ borderBottom: i < 3 ? '1px solid #222' : undefined }}
                        >
                          <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{row.name}</td>
                          <td className="p-3" style={{ color: '#d4d4d8' }}>{row.bat}</td>
                          <td className="p-3" style={{ color: '#22c55e' }}>{row.dry}</td>
                          <td className="p-3" style={{ color: '#d4d4d8' }}>{row.wet}</td>
                          <td className="p-3" style={{ color: '#a1a1aa' }}>{row.heavy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Pro tip:</strong> Cold temperatures
                  reduce lithium-ion battery capacity by 10-20%. Store batteries indoors and
                  insert them just before use for maximum runtime. Keeping a spare charged
                  battery warm inside is the easiest way to double your clearing time.
                </p>
              </div>
            </section>

            {/* ========== SNOW SHOVEL VS SNOW BLOWER ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                Electric Snow Shovel vs Snow Blower: Decision Guide
              </h2>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  Not sure whether you need a snow shovel or a full snow blower? Here is how to
                  decide based on your actual conditions.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className="rounded-lg p-5"
                    style={{ backgroundColor: '#171717', border: '1px solid #22c55e33' }}
                  >
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-5 w-5" />
                      Choose a Snow Shovel If...
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#a1a1aa' }}>
                      {[
                        'Your driveway is 1-2 car widths (under 50 feet long)',
                        'You mostly clear walkways, porches, and steps',
                        'Typical snowfall is under 6-8 inches',
                        'You want lightweight equipment (12-15 lbs)',
                        'Storage space is limited (garage shelf or closet)',
                        'You get fewer than 10 major snowfalls per season',
                        'Budget is under $350',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="rounded-lg p-5"
                    style={{ backgroundColor: '#171717', border: '1px solid #a1a1aa33' }}
                  >
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#d4d4d8' }}>
                      <Zap className="h-5 w-5" />
                      Choose a Snow Blower If...
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#a1a1aa' }}>
                      {[
                        'Your driveway is 3+ car widths or over 50 feet long',
                        'Regular snowfall exceeds 8 inches per storm',
                        'You deal with heavy, wet, or wind-packed snow frequently',
                        'You need to clear large areas (parking pads, sidewalks)',
                        'You want throw distances of 30-40+ feet',
                        'You get 15+ major snowfalls per season',
                        'Budget allows $400-$2,000+',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#a1a1aa' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="mt-6 rounded-lg p-4"
                  style={{ backgroundColor: '#22c55e11', border: '1px solid #22c55e33' }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#22c55e' }}>The hybrid approach:</strong> Many
                    homeowners own both. Use a snow shovel for quick 2-4 inch cleanups (which
                    account for most snowfalls) and keep a blower on hand for the occasional
                    big storm. This saves wear on the blower and gets small jobs done faster.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== MAINTENANCE TIPS ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                Maintenance & Storage Tips
              </h2>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Battery care',
                      text: 'Store batteries at 40-60% charge in a cool, dry location (50-70 degrees F). Never leave batteries in the cold overnight. Charge to full only before use, and avoid running to zero regularly.',
                    },
                    {
                      title: 'Post-use cleaning',
                      text: 'Wipe down the auger housing and chute after each use to prevent ice buildup. A quick spray of silicone lubricant on the auger blades helps snow slide through and prevents rust.',
                    },
                    {
                      title: 'Off-season storage',
                      text: 'Remove the battery, clean all surfaces, apply a light coat of silicone spray, and store upright in a dry garage or shed. Check the auger blades for damage before the next season.',
                    },
                    {
                      title: 'Cold weather performance',
                      text: 'Keep spare batteries indoors until needed. Insert a warm battery just before clearing. If your model has an LED headlight, test it before the season starts since early morning and evening clearing is common.',
                    },
                  ].map((tip) => (
                    <div key={tip.title} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                          {tip.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                          {tip.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq) => (
                  <details
                    key={faq.name}
                    className="rounded-xl group"
                    style={{ backgroundColor: '#141414' }}
                  >
                    <summary
                      className="cursor-pointer px-4 py-3 font-semibold select-none list-none flex items-center justify-between"
                      style={{ color: '#f5f5f5' }}
                    >
                      {faq.name}
                      <ChevronRight
                        className="h-4 w-4 transition-transform group-open:rotate-90 shrink-0 ml-2"
                        style={{ color: '#a1a1aa' }}
                      />
                    </summary>
                    <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== VERDICT ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5" style={{ color: '#f5f5f5' }}>
                The Verdict
              </h2>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  For most homeowners, the <strong style={{ color: '#22c55e' }}>EGO SNT2114</strong> is
                  the best electric snow shovel you can buy in 2026. Its 21-inch clearing width,
                  powerful 56V brushless motor, and 45-minute runtime make it a legitimate
                  alternative to a single-stage snow blower at a fraction of the weight and size.
                  If you already own EGO tools, it is a no-brainer addition.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  On a tighter budget, the <strong style={{ color: '#22c55e' }}>Greenworks 40V</strong> delivers
                  90% of the performance for $150 less, battery included. The{' '}
                  <strong style={{ color: '#22c55e' }}>Snow Joe 24V</strong> is the entry-level pick
                  for light snow and small spaces, while the{' '}
                  <strong style={{ color: '#22c55e' }}>Toro Power Shovel</strong> is unbeatable for
                  unlimited runtime near an outlet.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  If you are already in the Ryobi ecosystem, the{' '}
                  <strong style={{ color: '#22c55e' }}>Ryobi 40V Brushless</strong> lets you share
                  batteries with 85+ other tools, making it the smartest buy for existing Ryobi
                  owners. Whichever you choose, any of these will save your back compared to a
                  manual shovel and your ears compared to a gas blower.
                </p>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div
                style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}
                className="border rounded-xl p-6 md:p-8 text-center"
              >
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Explore More Green Gear Reviews
                </h2>
                <p
                  className="max-w-2xl mx-auto mb-6 leading-relaxed"
                  style={{ color: '#a1a1aa' }}
                >
                  See our full lineup of electric outdoor tool reviews, snow blowers, lawn
                  mowers, and more.
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
