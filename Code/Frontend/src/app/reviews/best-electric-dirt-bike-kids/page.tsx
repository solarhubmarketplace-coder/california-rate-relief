import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  ArrowRight,
  Battery,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Search,
  Shield,
  Star,
  Sun,
  X,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Dirt Bikes for Kids (2026): Razor MX650 vs KTM SX-E 3 vs Stacyc vs Husqvarna — Top 5 Reviewed',
  description:
    'Compare the best electric dirt bikes for kids in 2026. In-depth reviews of Razor MX650, KTM SX-E 3, Stacyc 16eDRIVE, Razor SX500, and Husqvarna EE 3. Age guide, safety gear checklist, specs, and buying guide.',
  alternates: {
    canonical: '/reviews/best-electric-dirt-bike-kids',
  },
  openGraph: {
    title: 'Best Electric Dirt Bikes for Kids (2026): Top 5 Reviewed',
    description:
      'Razor MX650 vs KTM SX-E 3 vs Stacyc 16eDRIVE vs Razor SX500 vs Husqvarna EE 3. Full specs, age guide, safety gear checklist, pros/cons, and buying guide for parents.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Dirt Bikes for Kids (2026): Razor MX650 vs KTM SX-E 3 vs Stacyc vs Husqvarna — Top 5 Reviewed',
  description:
    'Compare the best electric dirt bikes for kids in 2026. In-depth reviews covering Razor MX650, KTM SX-E 3, Stacyc 16eDRIVE, Razor SX500, and Husqvarna EE 3 with age guide, safety gear, specs, and buying guide.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-dirt-bike-kids',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric dirt bike for kids in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Razor MX650 is the best overall electric dirt bike for kids ages 12 and up. At $650 with a 650W motor, 17 mph top speed, 40-minute runtime, and dual suspension, it delivers the best combination of performance, safety features, and value. For younger kids ages 3-7, the Stacyc 16eDRIVE at $749 is the best starter bike with its balance-bike concept and 3 power modes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What age can a child start riding an electric dirt bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kids can start riding electric dirt bikes as young as 3 years old on models like the Stacyc 16eDRIVE and KTM SX-E 3, which are designed specifically for toddlers with very low speeds and balance-bike designs. Ages 8-11 can move to bikes like the Razor SX500 (15 mph max), while kids 12 and up are ready for the Razor MX650 (17 mph) or similar mid-range models.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric dirt bikes safe for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric dirt bikes are generally safer than gas dirt bikes for kids because they offer adjustable power modes, lower speeds, instant throttle cutoff, no hot exhaust pipes, and no dangerous fluids. Models like the Stacyc and KTM SX-E 3 have multiple power settings so parents can limit speed as kids learn. That said, full safety gear (helmet, goggles, gloves, boots, chest protector, knee/elbow pads) is essential regardless of bike type.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do kids electric dirt bike batteries last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most kids electric dirt bikes provide 20-40 minutes of ride time per charge depending on the model, rider weight, terrain, and speed. The Razor MX650 and SX500 both get about 40 minutes. The Stacyc 16eDRIVE gets 20+ minutes. Charge times range from 4-12 hours. Many parents buy a second battery to double ride sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a kids electric dirt bike cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kids electric dirt bikes range from about $400 to $5,100. Budget options like the Razor SX500 ($400) and Razor MX650 ($650) are great entry points. Mid-range options include the Stacyc 16eDRIVE at $749. Premium competition-grade models from KTM ($5,090) and Husqvarna ($4,799) are designed for kids entering organized motocross.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do kids need a license to ride an electric dirt bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No license is needed to ride electric dirt bikes on private property. Most kids electric dirt bikes are not street legal and should only be ridden on private land, designated OHV areas, or motocross tracks. Laws vary by state regarding public trails and OHV parks, so check your local regulations. Some states require OHV registration even for electric models on public land.',
      },
    },
  ],
};

interface KidsBike {
  name: string;
  badge: string;
  price: string;
  motor: string;
  topSpeed: string;
  runtime: string;
  capacity: string;
  ageRange: string;
  features: string;
  rating: number;
  affiliateLink: string;
}

const bikes: KidsBike[] = [
  {
    name: 'Razor MX650',
    badge: 'Best Overall (Ages 12+)',
    price: '$650',
    motor: '650W',
    topSpeed: '17 mph',
    runtime: '40 min',
    capacity: '220 lbs',
    ageRange: '12+',
    features: 'Dual suspension, variable-speed throttle, pneumatic knobby tires',
    rating: 4.5,
    affiliateLink: '#',
  },
  {
    name: 'KTM SX-E 3',
    badge: 'Premium (Ages 4-7)',
    price: '$5,090',
    motor: 'Adjustable power',
    topSpeed: 'Adjustable (3 modes)',
    runtime: '~2 hr (varies)',
    capacity: 'Up to ~88 lbs',
    ageRange: '4-7',
    features: 'Pro suspension, training wheels compatible, 3 ride modes',
    rating: 4.7,
    affiliateLink: '#',
  },
  {
    name: 'Stacyc 16eDRIVE',
    badge: 'Best for Beginners (Ages 3-7)',
    price: '$749',
    motor: '3 power modes',
    topSpeed: '11 mph',
    runtime: '20+ min',
    capacity: '75 lbs',
    ageRange: '3-7',
    features: 'Balance bike concept, no pedals, low seat height, lightweight',
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'Razor SX500',
    badge: 'Best Budget (Ages 8+)',
    price: '$400',
    motor: '500W',
    topSpeed: '15 mph',
    runtime: '40 min',
    capacity: '175 lbs',
    ageRange: '8+',
    features: 'Chain driven, single-speed, retractable kickstand',
    rating: 4.3,
    affiliateLink: '#',
  },
  {
    name: 'Husqvarna EE 3',
    badge: 'Premium (Ages 4-7)',
    price: '$4,799',
    motor: 'Adjustable power',
    topSpeed: 'Adjustable (6 modes)',
    runtime: '~2 hr (varies)',
    capacity: 'Up to ~88 lbs',
    ageRange: '4-7',
    features: 'STACYC technology, pro frame, 6 ride modes, competition ready',
    rating: 4.6,
    affiliateLink: '#',
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < fullStars
              ? 'text-yellow-500 fill-yellow-500'
              : i === fullStars && hasHalf
                ? 'text-yellow-500 fill-yellow-500/50'
                : 'text-muted-foreground/30'
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-semibold text-foreground">{rating}</span>
    </div>
  );
}

export default function BestElectricDirtBikeKids() {
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
                Comparison Guide
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Best Electric Dirt Bikes for Kids (2026)
              </h1>
              <p className="text-lg text-muted-foreground mb-3">
                Razor MX650 vs KTM SX-E 3 vs Stacyc vs Razor SX500 vs Husqvarna EE 3
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80&auto=format&fit=crop' alt='Electric dirt bike for kids' className='w-full h-64 object-cover' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Overview / Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Getting your kid into dirt biking used to mean dealing with a loud, heavy, gas-powered machine
                that required constant maintenance and a healthy dose of parental anxiety. Electric dirt bikes
                for kids have changed the equation entirely. They are quieter, lighter, easier to control, and
                come with adjustable power modes that let parents dial in the right speed for their child&apos;s
                skill level.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Whether your 3-year-old is ready for their first balance bike experience or your 12-year-old
                wants to tear up the backyard, there is an electric dirt bike designed specifically for them.
                No clutch to stall, no kickstart to wrestle, no hot exhaust to burn little legs. Just twist
                the throttle and go.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We tested and compared the top 5 kids electric dirt bikes available in 2026, evaluating
                safety features, build quality, age-appropriateness, battery life, and value. Here is what
                we found.
              </p>
            </div>

            {/* Age & Size Guide */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Age &amp; Size Guide: Which Bike Fits Your Kid?
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                This is the most important section of this guide. Buying the wrong size bike is the
                number one mistake parents make. Too big and the child cannot touch the ground or
                control the weight. Too small and they outgrow it in months. Use this chart as your
                starting point.
              </p>
              <div className="rounded-xl border border-border overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: 'hsl(var(--card))' }}>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Age Range</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Rider Height</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Max Speed</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Best Pick</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground/80">3-5 years</td>
                      <td className="px-4 py-3 text-foreground/80">36-42&quot;</td>
                      <td className="px-4 py-3 text-foreground/80">5-7 mph</td>
                      <td className="px-4 py-3 text-primary font-medium">Stacyc 16eDRIVE</td>
                    </tr>
                    <tr className="border-t border-border" style={{ backgroundColor: 'hsl(var(--card)/0.5)' }}>
                      <td className="px-4 py-3 text-foreground/80">4-7 years</td>
                      <td className="px-4 py-3 text-foreground/80">38-48&quot;</td>
                      <td className="px-4 py-3 text-foreground/80">Adjustable</td>
                      <td className="px-4 py-3 text-primary font-medium">KTM SX-E 3 / Husqvarna EE 3</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground/80">8-11 years</td>
                      <td className="px-4 py-3 text-foreground/80">48-56&quot;</td>
                      <td className="px-4 py-3 text-foreground/80">15 mph</td>
                      <td className="px-4 py-3 text-primary font-medium">Razor SX500</td>
                    </tr>
                    <tr className="border-t border-border" style={{ backgroundColor: 'hsl(var(--card)/0.5)' }}>
                      <td className="px-4 py-3 text-foreground/80">12+ years</td>
                      <td className="px-4 py-3 text-foreground/80">56&quot;+</td>
                      <td className="px-4 py-3 text-foreground/80">17 mph</td>
                      <td className="px-4 py-3 text-primary font-medium">Razor MX650</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="rounded-xl border border-border p-5" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold mb-1">Parent Tip</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Have your child sit on the bike before buying. Both feet should be able to touch the
                      ground flat. If they can only reach with tippy toes, the bike is too tall. When in
                      doubt, size down. A confident rider on a smaller bike learns faster and safer than a
                      scared rider on a bike that is too big.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Picks by Age */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Quick Picks by Age
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { age: 'Ages 3-5 (First Bike)', pick: 'Stacyc 16eDRIVE', price: '$749', why: 'Balance-bike design teaches fundamentals without overwhelming young riders' },
                  { age: 'Ages 4-7 (Competition Track)', pick: 'KTM SX-E 3', price: '$5,090', why: 'Pro-level build quality with adjustable power that grows with the rider' },
                  { age: 'Ages 8-11 (Budget Friendly)', pick: 'Razor SX500', price: '$400', why: 'Best value entry point with solid 40-minute runtime and 15 mph cap' },
                  { age: 'Ages 12+ (Best Overall)', pick: 'Razor MX650', price: '$650', why: 'Dual suspension, 17 mph, 40-min battery, and room to grow into' },
                ].map((item) => (
                  <div
                    key={item.age}
                    className="rounded-xl border border-border p-5"
                    style={{ backgroundColor: 'hsl(var(--card))' }}
                  >
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{item.age}</p>
                    <p className="text-foreground font-bold text-lg mb-1">{item.pick}</p>
                    <p className="text-primary font-semibold mb-2">{item.price}</p>
                    <p className="text-foreground/60 text-sm">{item.why}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Side-by-Side Comparison
              </h2>
              <div className="rounded-xl border border-border overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: 'hsl(var(--card))' }}>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Bike</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Price</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Ages</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Top Speed</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Runtime</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Capacity</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bikes.map((bike, idx) => (
                      <tr
                        key={bike.name}
                        className="border-t border-border"
                        style={idx % 2 === 1 ? { backgroundColor: 'hsl(var(--card)/0.5)' } : undefined}
                      >
                        <td className="px-4 py-3">
                          <span className="text-foreground font-medium">{bike.name}</span>
                        </td>
                        <td className="px-4 py-3 text-primary font-semibold">{bike.price}</td>
                        <td className="px-4 py-3 text-foreground/80">{bike.ageRange}</td>
                        <td className="px-4 py-3 text-foreground/80">{bike.topSpeed}</td>
                        <td className="px-4 py-3 text-foreground/80">{bike.runtime}</td>
                        <td className="px-4 py-3 text-foreground/80">{bike.capacity}</td>
                        <td className="px-4 py-3"><StarRating rating={bike.rating} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Individual Bike Reviews */}
            <section className="mb-14 space-y-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                In-Depth Reviews
              </h2>

              {/* 1. Razor MX650 */}
              <div className="rounded-xl border border-border overflow-hidden" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Best Overall (Ages 12+)
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mt-3">1. Razor MX650</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-primary">$650</p>
                      <StarRating rating={4.5} />
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    The Razor MX650 is where most kids electric dirt bike journeys should start for tweens and
                    teens. It strikes the best balance of power, safety, build quality, and price that we found
                    in testing. The 650W motor delivers a controlled 17 mph top speed, which is fast enough to
                    feel exciting but manageable enough that parents do not lose sleep. Dual suspension (front
                    and rear) smooths out bumps that would rattle cheaper single-suspension models, and the
                    variable-speed throttle gives riders proportional control instead of on/off lurching.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    At 98 lbs, it is heavier than the smaller kids bikes, which actually works in its favor
                    for older riders because the weight adds stability at speed. The 220 lb weight capacity means
                    smaller adults can ride it too, which is why you see so many MX650s on college campuses. Battery
                    life is a solid 40 minutes of continuous riding, and the 36V sealed lead-acid battery charges
                    in about 12 hours.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Motor:</span> 650W electric</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Battery className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Runtime:</span> 40 min continuous</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Capacity:</span> 220 lbs</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Charge Time:</span> ~12 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Top Speed:</span> 17 mph</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Price:</span> $650</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Pros
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Dual suspension for genuine off-road capability</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Variable-speed throttle (not just on/off)</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />220 lb capacity — kids will not outgrow it quickly</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Pneumatic knobby tires grip real dirt</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Affordable at $650</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />12-hour charge time is painfully slow</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Lead-acid battery adds weight (98 lbs total)</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />No adjustable power modes</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Assembly required out of the box</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <BuyButton
                      productKey="razor-mx650"
                      source="electric-dirt-bike-kids-hub"
                      variant="primary"
                      label="Check Price — Razor MX650"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* 2. KTM SX-E 3 */}
              <div className="rounded-xl border border-border overflow-hidden" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Premium Pick (Ages 4-7)
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mt-3">2. KTM SX-E 3</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-primary">$5,090</p>
                      <StarRating rating={4.7} />
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    The KTM SX-E 3 is not a toy. It is a scaled-down version of KTM&apos;s professional motocross
                    bikes, built for kids who are serious about racing or whose parents want the absolute best
                    equipment money can buy. The adjustable power output with 3 distinct ride modes means you
                    start your 4-year-old at a walking pace and progressively unlock more power as their skills
                    develop. The suspension is genuine WP (same supplier as KTM&apos;s adult race bikes), not the
                    spring-and-damper units on consumer models.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Training wheels are available as an accessory, which sounds silly on a motocross bike until
                    you see a 4-year-old confidently learning throttle control without fear of tipping. The
                    battery is removable and swappable, so parents who buy a second battery can essentially
                    eliminate downtime. Build quality is in a different league from anything Razor makes.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Motor:</span> Adjustable output</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Battery className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Runtime:</span> ~2 hrs (varies by mode)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Ride Modes:</span> 3 power levels</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Charge Time:</span> ~1.5 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Suspension:</span> WP XACT pro</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Price:</span> $5,090</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Pros
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Professional-grade build quality and suspension</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />3 adjustable power modes grow with the child</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Removable/swappable lithium battery</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Training wheel compatible</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Fast ~1.5 hour charge time</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />$5,090 is extremely expensive for a kids bike</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Kids outgrow the age range in 2-3 years</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Dealer network required for service</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Overkill unless the child races competitively</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <BuyButton
                      productKey="ktm-sx-e-3"
                      source="electric-dirt-bike-kids-hub"
                      variant="primary"
                      label="Check Price — KTM SX-E 3"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* 3. Stacyc 16eDRIVE */}
              <div className="rounded-xl border border-border overflow-hidden" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Best for Beginners (Ages 3-7)
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mt-3">3. Stacyc 16eDRIVE</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-primary">$749</p>
                      <StarRating rating={4.6} />
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    The Stacyc 16eDRIVE is brilliant in its simplicity. It is not technically a dirt bike. It is
                    an electric balance bike with a twist throttle, designed to teach young kids the fundamentals
                    of two-wheeled motorized riding without overwhelming them. There are no pedals and no training
                    wheels. Kids straddle it, push off with their feet, and gradually learn to use the throttle
                    as confidence builds.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Three power modes let parents start at a walking pace (about 5 mph) and progress to
                    11 mph as the child develops balance and throttle control. The low seat height and 17-lb
                    weight mean even a 3-year-old can pick the bike up after a fall. This is the bike that
                    KTM and Husqvarna licensed technology from for their own youth models, which tells you
                    everything about how well the concept works.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Power Modes:</span> 3 settings</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Battery className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Runtime:</span> 20+ minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Capacity:</span> 75 lbs</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Charge Time:</span> ~1 hour</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Top Speed:</span> 11 mph (mode 3)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Weight:</span> ~17 lbs</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Pros
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Ultra-lightweight at 17 lbs — kids can handle it alone</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />3 progressive power modes build confidence</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Balance bike concept teaches real riding fundamentals</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Fast ~1 hour charge time</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Proven platform (licensed by KTM/Husqvarna)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />20-minute runtime is the shortest here</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />75 lb weight limit — some kids outgrow it by age 6</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />No suspension (balance bike, not dirt bike)</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />11 mph max may feel slow for older kids in age range</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <BuyButton
                      productKey="stacyc-16edrive"
                      source="electric-dirt-bike-kids-hub"
                      variant="primary"
                      label="Check Price — Stacyc 16eDRIVE"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* 4. Razor SX500 */}
              <div className="rounded-xl border border-border overflow-hidden" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Best Budget (Ages 8+)
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mt-3">4. Razor SX500</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-primary">$400</p>
                      <StarRating rating={4.3} />
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    The Razor SX500 is the gateway drug of kids electric dirt bikes. At $400, it is the
                    cheapest legitimate option on this list, and it does a surprisingly good job of
                    delivering a real dirt bike experience on a tight budget. The 500W chain-driven motor
                    pushes to 15 mph, the hand-operated rear brake provides stopping power, and the
                    large pneumatic tires handle grass and packed dirt without complaint.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Where it cuts corners is refinement. Single-speed throttle means it is more on/off than
                    the variable-speed MX650. There is no front suspension. The steel frame is sturdy but adds
                    weight. And like the MX650, the lead-acid battery takes about 12 hours to charge. But for
                    a kid who is not sure if dirt biking is their thing, the SX500 is a smart first investment.
                    If they love it, upgrade later. If they do not, you are only out $400.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Motor:</span> 500W chain-driven</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Battery className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Runtime:</span> 40 min continuous</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Capacity:</span> 175 lbs</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Charge Time:</span> ~12 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Top Speed:</span> 15 mph</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Price:</span> $400</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Pros
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Best price on this list at $400</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Solid 40-minute battery life</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Large pneumatic knobby tires</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Retractable kickstand included</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Low-risk entry point to test interest</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Single-speed throttle (on/off, no variable control)</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />No front suspension</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />12-hour charge time</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />175 lb capacity limits longevity</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <BuyButton
                      productKey="razor-sx500"
                      source="electric-dirt-bike-kids-hub"
                      variant="primary"
                      label="Check Price — Razor SX500"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* 5. Husqvarna EE 3 */}
              <div className="rounded-xl border border-border overflow-hidden" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Premium Pick (Ages 4-7)
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mt-3">5. Husqvarna EE 3</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-primary">$4,799</p>
                      <StarRating rating={4.6} />
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    The Husqvarna EE 3 is the KTM SX-E 3&apos;s sibling. Both are built on the same platform (KTM
                    owns Husqvarna), share the same STACYC-derived technology, and target the same 4-7 age
                    group. The difference is in the details: the Husqvarna gets 6 ride modes instead of 3,
                    slightly different ergonomics, and the Husqvarna brand aesthetic.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Six ride modes is genuinely useful. You get finer granularity between &quot;barely moving&quot;
                    and &quot;race pace,&quot; which means you can make smaller power jumps as your child progresses.
                    The pro-grade frame, hydraulic brakes, and WP suspension are identical in quality to the
                    KTM. At $4,799 it is slightly cheaper, making it the better value if you are deciding
                    between the two premium options. The choice often comes down to which brand your local
                    dealer carries.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Motor:</span> Adjustable output</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Battery className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Runtime:</span> ~2 hrs (varies by mode)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Ride Modes:</span> 6 power levels</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Charge Time:</span> ~1.5 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Suspension:</span> WP XACT pro</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70"><span className="text-foreground font-medium">Price:</span> $4,799</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Pros
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />6 ride modes for finer progression control</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Same pro-grade build quality as KTM SX-E 3</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />$291 cheaper than the KTM equivalent</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Removable lithium battery with fast charging</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Competition-ready out of the box</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4 border border-border" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <p className="text-foreground font-semibold text-sm mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </p>
                      <ul className="space-y-1.5 text-sm text-foreground/70">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />$4,799 is still very expensive for ages 4-7</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Short age window means resale is important</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Requires dealer for parts and service</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Essentially the same bike as KTM with different graphics</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <BuyButton
                      productKey="husqvarna-ee-3"
                      source="electric-dirt-bike-kids-hub"
                      variant="primary"
                      label="Check Price — Husqvarna EE 3"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Safety Gear Checklist */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                Essential Safety Gear Checklist
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                No child should ride any electric dirt bike without proper safety gear. This is not optional.
                Even at 11 mph, a fall onto hard-packed dirt can cause serious injury without protection.
                Here is the complete checklist.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { item: 'DOT/ECE Certified Helmet', note: 'Full-face MX helmet, properly fitted. Replace after any crash.' },
                  { item: 'MX Goggles', note: 'Protects eyes from dirt, dust, and debris. Must seal against helmet.' },
                  { item: 'Riding Gloves', note: 'Padded knuckles, reinforced palms. Prevents blisters and abrasions.' },
                  { item: 'MX Boots', note: 'Ankle support and shin protection. Regular shoes are not enough.' },
                  { item: 'Chest/Roost Protector', note: 'Shields ribs and sternum from handlebars during falls.' },
                  { item: 'Knee & Elbow Pads', note: 'The joints that hit the ground first. Minimum CE Level 1.' },
                  { item: 'Riding Pants & Jersey', note: 'MX-specific gear with built-in padding at hips and knees.' },
                  { item: 'Neck Brace (Recommended)', note: 'Limits dangerous neck extension during crashes. Highly recommended for racing.' },
                ].map((gear) => (
                  <div
                    key={gear.item}
                    className="rounded-lg border border-border p-4 flex items-start gap-3"
                    style={{ backgroundColor: 'hsl(var(--card))' }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold text-sm">{gear.item}</p>
                      <p className="text-foreground/60 text-xs mt-0.5">{gear.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-border p-5 mt-6" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold mb-1">Budget Tip</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      A full safety gear set for a kid costs $200-$500 depending on brands. Do not skimp on
                      the helmet. Spend at least $80-$150 on a properly certified MX helmet. Everything else
                      can be entry-level. Factor gear cost into your total budget when choosing a bike.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Battery & Charging */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                Battery &amp; Charging: What Parents Need to Know
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Battery technology is the biggest differentiator between budget and premium kids bikes.
                Understanding the trade-offs will help you set realistic expectations about ride time
                and plan your charging routine.
              </p>
              <div className="rounded-xl border border-border overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: 'hsl(var(--card))' }}>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Bike</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Battery Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Runtime</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Charge Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { bike: 'Razor MX650', type: 'Sealed Lead-Acid', runtime: '40 min', charge: '~12 hrs' },
                      { bike: 'KTM SX-E 3', type: 'Lithium-ion (removable)', runtime: '~2 hrs', charge: '~1.5 hrs' },
                      { bike: 'Stacyc 16eDRIVE', type: 'Lithium-ion', runtime: '20+ min', charge: '~1 hr' },
                      { bike: 'Razor SX500', type: 'Sealed Lead-Acid', runtime: '40 min', charge: '~12 hrs' },
                      { bike: 'Husqvarna EE 3', type: 'Lithium-ion (removable)', runtime: '~2 hrs', charge: '~1.5 hrs' },
                    ].map((row, idx) => (
                      <tr
                        key={row.bike}
                        className="border-t border-border"
                        style={idx % 2 === 1 ? { backgroundColor: 'hsl(var(--card)/0.5)' } : undefined}
                      >
                        <td className="px-4 py-3 text-foreground font-medium">{row.bike}</td>
                        <td className="px-4 py-3 text-foreground/80">{row.type}</td>
                        <td className="px-4 py-3 text-foreground/80">{row.runtime}</td>
                        <td className="px-4 py-3 text-foreground/80">{row.charge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-5" style={{ backgroundColor: 'hsl(var(--card))' }}>
                  <p className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <Battery className="h-4 w-4 text-primary" /> Lead-Acid vs Lithium-Ion
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    The Razor models use sealed lead-acid batteries, which are cheaper but heavier and take 12
                    hours to charge. The KTM, Husqvarna, and Stacyc use lithium-ion batteries that charge in
                    1-2 hours and weigh significantly less. If ride frequency matters (daily backyard sessions),
                    lithium-ion is worth the premium. For weekend-only riding, lead-acid is fine since you can
                    charge overnight.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-5" style={{ backgroundColor: 'hsl(var(--card))' }}>
                  <p className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" /> Pro Tip: Buy a Second Battery
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    For the KTM and Husqvarna models with removable batteries, buying a second battery
                    effectively doubles your child&apos;s ride time. Swap in the fresh battery in seconds and keep
                    riding. It costs $200-$400 extra but eliminates the number one complaint about electric
                    bikes: downtime waiting for a charge.
                  </p>
                </div>
              </div>
            </section>

            {/* Supervision Tips */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                Supervision &amp; Teaching Tips
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Even the safest electric dirt bike requires responsible adult supervision. Here are the
                practices that experienced dirt bike families follow.
              </p>
              <div className="space-y-3">
                {[
                  { title: 'Start on the lowest power mode', desc: 'Every bike on this list has multiple speeds or adjustable power. Always start at the lowest setting and only move up after the child demonstrates consistent control and stopping ability.' },
                  { title: 'Teach braking before throttle', desc: 'Before the first ride, have your child practice squeezing the brake while walking the bike. Knowing how to stop is more important than knowing how to go.' },
                  { title: 'Use flat, open terrain first', desc: 'Start on a flat grass field or smooth packed dirt. No hills, no obstacles, no other riders. Add complexity only after basic skills are solid.' },
                  { title: 'Set clear boundaries', desc: 'Mark a visible riding area with cones or flags. Young kids get target fixation and ride wherever they look. Give them clear visual limits.' },
                  { title: 'Ride with them (not behind them)', desc: 'If possible, ride alongside on a bicycle or another electric bike. Being at their level builds confidence and lets you intervene faster than running behind them.' },
                  { title: 'Check gear before every ride', desc: 'Helmet strapped, goggles sealed, gloves on, boots laced, chest protector secured. Make it a ritual. Every single ride.' },
                ].map((tip, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-border p-4 flex items-start gap-3"
                    style={{ backgroundColor: 'hsl(var(--card))' }}
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{tip.title}</p>
                      <p className="text-foreground/60 text-sm mt-1 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Electric vs Gas for Kids */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                Electric vs Gas Dirt Bikes for Kids
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                If you are a dirt bike parent yourself, you might be wondering whether to start your kid
                on gas or electric. Here is the honest comparison.
              </p>
              <div className="rounded-xl border border-border overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: 'hsl(var(--card))' }}>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Factor</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Electric</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Gas (e.g., PW50/CRF50)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: 'Starting', electric: 'Twist throttle and go', gas: 'Kickstart or pull-start' },
                      { factor: 'Noise', electric: 'Near silent', gas: 'Loud (neighbors will notice)' },
                      { factor: 'Maintenance', electric: 'Minimal (brakes, tires)', gas: 'Oil, filter, spark plug, valve adj.' },
                      { factor: 'Hot parts', electric: 'No hot exhaust', gas: 'Exhaust pipe burns are common' },
                      { factor: 'Speed control', electric: 'Adjustable power modes', gas: 'Throttle limiter screw only' },
                      { factor: 'Operating cost', electric: '$0.15-$0.60/charge', gas: '$3-$5/ride in fuel' },
                      { factor: 'Runtime', electric: '20-40 min (2 hr premium)', gas: '1-3 hours per tank' },
                      { factor: 'Resale value', electric: 'Good (growing demand)', gas: 'Excellent (proven market)' },
                    ].map((row, idx) => (
                      <tr
                        key={row.factor}
                        className="border-t border-border"
                        style={idx % 2 === 1 ? { backgroundColor: 'hsl(var(--card)/0.5)' } : undefined}
                      >
                        <td className="px-4 py-3 text-foreground font-medium">{row.factor}</td>
                        <td className="px-4 py-3 text-foreground/80">{row.electric}</td>
                        <td className="px-4 py-3 text-foreground/80">{row.gas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-xl border border-border p-5" style={{ backgroundColor: 'hsl(var(--card))' }}>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold mb-1">Our Take</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      For kids under 8, electric is the clear winner. No kickstart frustration, no hot exhaust,
                      no fuel spills, adjustable power modes, and near-silent operation that will not annoy your
                      neighbors. For kids 10+ who ride at tracks and want longer sessions, gas bikes like the
                      Yamaha PW50 or Honda CRF50 still have runtime advantages. Many families start electric and
                      transition to gas as the child grows.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Where to Ride Legally */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                Where Can Kids Ride Electric Dirt Bikes?
              </h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Knowing where your child can legally ride is just as important as choosing the right bike.
                Here are your options.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { place: 'Your Own Property', status: 'Always legal', note: 'Backyards, acreage, private land. No registration or license needed anywhere in the US.' },
                  { place: 'Friends/Family Private Land', status: 'Legal with permission', note: 'Make sure the landowner is aware and comfortable with the liability.' },
                  { place: 'Designated OHV Parks', status: 'Usually legal', note: 'Many OHV parks welcome electric bikes. Some require registration. Check park rules — minimum age varies.' },
                  { place: 'Motocross Tracks', status: 'Track dependent', note: 'More tracks are adding electric-only sessions. Call ahead. Most require membership and safety gear.' },
                  { place: 'Public Roads/Sidewalks', status: 'Not legal', note: 'Kids electric dirt bikes are not street legal. Never ride on public roads, sidewalks, or bike paths.' },
                  { place: 'Public Parks', status: 'Usually not legal', note: 'Most city and county parks prohibit motorized vehicles including electric bikes. Check local ordinances.' },
                ].map((loc) => (
                  <div
                    key={loc.place}
                    className="rounded-lg border border-border p-4"
                    style={{ backgroundColor: 'hsl(var(--card))' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-foreground font-semibold text-sm">{loc.place}</p>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        loc.status.includes('Always') || loc.status.includes('Legal with')
                          ? 'text-green-400 bg-green-500/10'
                          : loc.status.includes('Usually legal') || loc.status.includes('Track')
                            ? 'text-yellow-400 bg-yellow-500/10'
                            : 'text-red-400 bg-red-500/10'
                      }`}>
                        {loc.status}
                      </span>
                    </div>
                    <p className="text-foreground/60 text-xs leading-relaxed">{loc.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Overall Pros & Cons */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Electric Dirt Bikes for Kids: Pros &amp; Cons
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border p-6" style={{ backgroundColor: 'hsl(var(--card))' }}>
                  <p className="text-foreground font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" /> Advantages
                  </p>
                  <ul className="space-y-3 text-sm text-foreground/70">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Adjustable power modes let parents control max speed</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />No hot exhaust pipes to burn kids</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Near-silent operation — ride without disturbing neighbors</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />No clutch, no kickstart — just twist and go</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Minimal maintenance (no oil changes, no air filters)</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Instant throttle cutoff when released</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />No fuel spills or fumes around kids</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Lower operating costs (pennies per charge)</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-border p-6" style={{ backgroundColor: 'hsl(var(--card))' }}>
                  <p className="text-foreground font-bold text-lg mb-4 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" /> Disadvantages
                  </p>
                  <ul className="space-y-3 text-sm text-foreground/70">
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Limited runtime (20-40 min on budget models)</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Long charge times on lead-acid battery bikes</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Premium models ($4,800-$5,100) are expensive for short age window</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Battery degrades over 2-3 years of heavy use</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Cannot refuel on the trail — once dead, ride is over</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Near-silence means pedestrians may not hear the bike</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Fewer model options compared to gas (but growing fast)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border p-5"
                    style={{ backgroundColor: 'hsl(var(--card))' }}
                  >
                    <h3 className="text-foreground font-bold mb-2 flex items-start gap-2">
                      <Search className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      {faq.name}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed pl-6">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Verdict */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                The Verdict
              </h2>
              <div className="rounded-xl border border-primary/30 p-6 md:p-8" style={{ backgroundColor: 'hsl(var(--primary)/0.05)' }}>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The best electric dirt bike for your kid depends on two things: their age and your budget.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      <span className="text-foreground font-bold">For most families,</span> the{' '}
                      <span className="text-primary font-semibold">Razor MX650 ($650)</span> is the clear winner
                      for kids 12 and up. Dual suspension, variable throttle, 40-minute battery, and a price
                      that does not sting if the hobby does not stick.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      <span className="text-foreground font-bold">For young beginners (ages 3-7),</span> the{' '}
                      <span className="text-primary font-semibold">Stacyc 16eDRIVE ($749)</span> is the smartest
                      first bike. Its balance-bike design teaches fundamentals that transfer directly to bigger bikes.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      <span className="text-foreground font-bold">For budget-conscious families,</span> the{' '}
                      <span className="text-primary font-semibold">Razor SX500 ($400)</span> is the lowest-risk
                      way to find out if your kid actually likes dirt biking before committing more money.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      <span className="text-foreground font-bold">For competition-bound kids,</span> the{' '}
                      <span className="text-primary font-semibold">KTM SX-E 3 ($5,090)</span> or{' '}
                      <span className="text-primary font-semibold">Husqvarna EE 3 ($4,799)</span> are the
                      real deal. Only worth it if your child is already racing or you are committed to competitive
                      motocross.
                    </p>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Whichever bike you choose, invest in proper safety gear and supervise every ride. Electric dirt
                  bikes are one of the best ways to get kids outdoors, active, and building confidence on two
                  wheels. Start slow, gear up, and let them ride.
                </p>
              </div>
            </section>

            {/* Related Content CTAs */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4 tracking-tight">
                Related Reviews
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/reviews/best-electric-dirt-bike-adults"
                  className="group rounded-xl border border-border p-5 flex items-center justify-between transition-colors hover:border-primary/50"
                  style={{ backgroundColor: 'hsl(var(--card))' }}
                >
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      Best Electric Dirt Bikes for Adults (2026)
                    </p>
                    <p className="text-foreground/50 text-sm mt-1">Sur-Ron, KTM, Stark Varg, and more</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
                <Link
                  href="/reviews"
                  className="group rounded-xl border border-border p-5 flex items-center justify-between transition-colors hover:border-primary/50"
                  style={{ backgroundColor: 'hsl(var(--card))' }}
                >
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      All GreenReviewsHub Reviews
                    </p>
                    <p className="text-foreground/50 text-sm mt-1">Power stations, e-bikes, lawn gear, and more</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
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
