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
import { ArrowLeft, ArrowRight, Calendar, Clock, Check, X, ChevronRight, AlertTriangle, Zap, Gauge } from 'lucide-react';

const PRIMARY_PRODUCT_KEY = 'dualtron-x-limited';

export const metadata: Metadata = {
  title: 'Fastest Electric Scooters 2026: 40+ MPH Adult Scooters Tested | GreenReviewsHub',
  description: 'The fastest electric scooters in 2026: Dualtron X Limited (68 mph), Weped FS (62 mph), Kaabo Wolf King GT Pro, NAMI Burn-E 2 Max, Apollo Pro. Honest speed, range, and California legality breakdown.',
  alternates: { canonical: 'https://ratereliefca.com/reviews/fastest-electric-scooter' },
  openGraph: {
    title: 'Fastest Electric Scooters 2026: 40+ MPH Adult Scooters Tested',
    description: 'Dualtron, Weped, Kaabo, NAMI, and Apollo — the 5 fastest e-scooters you can actually buy, tested and compared.',
    url: 'https://ratereliefca.com/reviews/fastest-electric-scooter',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fastest Electric Scooters 2026: 40+ MPH Adult Scooters Tested',
    description: 'Dualtron, Weped, Kaabo, NAMI, Apollo — ranked by real-world speed, not marketing.',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Dualtron X Limited',
      url: 'https://ratereliefca.com/reviews/fastest-electric-scooter#dualtron-x-limited',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Weped FS',
      url: 'https://ratereliefca.com/reviews/fastest-electric-scooter#weped-fs',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Kaabo Wolf King GT Pro',
      url: 'https://ratereliefca.com/reviews/fastest-electric-scooter#kaabo-wolf-king-gt-pro',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'NAMI Burn-E 2 Max',
      url: 'https://ratereliefca.com/reviews/fastest-electric-scooter#nami-burn-e-2-max',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Apollo Pro',
      url: 'https://ratereliefca.com/reviews/fastest-electric-scooter#apollo-pro',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the fastest electric scooter you can legally buy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no federal speed cap on purchase — the fastest production e-scooter sold in the US is the Dualtron X Limited at roughly 68 mph. However, almost every state limits public-road scooter use to 15-25 mph, so these machines are legally intended for private property, tracks, and closed courses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I ride a 60 mph electric scooter on the street in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. California Vehicle Code 22411 caps electric scooter speed at 15 mph on public roads, bike paths, and bike lanes. Riding a 60 mph scooter on a public street is illegal regardless of how fast you actually go. Enforcement is inconsistent, but you can be ticketed, and your insurance will not cover a crash.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a license to ride a fast electric scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California requires a valid driver\'s license or instruction permit (Class C or higher) to operate an electric scooter in public. Riders under 18 must wear a helmet. No registration, no insurance, no license plate — but any scooter capable of 28+ mph is technically a motor vehicle in some states, which creates a gray area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do these scooters cost $3,000 to $6,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dual 3,000-6,000W motors, 72V-84V battery packs, hydraulic brakes, full suspension, and aerospace-grade aluminum frames. A $500 scooter uses a 250W hub motor and drum brakes. Moving a 100-lb scooter and 200-lb rider at 60+ mph safely requires car-grade components, and those cost real money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are dual-motor electric scooters worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For 40+ mph speeds, yes — single-motor scooters cap out around 35-40 mph and struggle on hills with a heavy rider. Dual motors also provide traction on wet pavement and give you a single-motor "economy" mode that doubles range. If you only ride flat, paved streets under 25 mph, a single-motor unit is lighter, cheaper, and more than enough.',
      },
    },
    {
      '@type': 'Question',
      name: 'What safety gear do I need at 50+ mph?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full-face DOT motorcycle helmet (not a bike helmet), motorcycle gloves, armored jacket, and knee/elbow protection at minimum. At 50 mph, a crash has the same energy as falling off a 5-story building. Plan your gear like you are riding a motorcycle, because the physics are identical.',
      },
    },
  ],
};

export default function FastestElectricScooterHub() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: '#9ca3af' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link>
              <ChevronRight className="w-4 h-4" />
              <span style={{ color: '#fff' }}>Fastest Electric Scooters</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}
                >
                  Buyer's Guide
                </span>
                <span className="inline-flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                  <Calendar className="w-3 h-3" /> Updated April 2026
                </span>
                <span className="inline-flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                  <Clock className="w-3 h-3" /> 14 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ color: '#fff' }}>
                Fastest Electric Scooters 2026: 40+ MPH Adult Scooters Tested
              </h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#d1d5db' }}>
                Five machines that genuinely hit 40+ mph, and what you are actually signing up for when you buy one.
                Real top speeds, hydraulic brake performance, California legality, and an honest answer to the question
                nobody selling these scooters wants to answer: should you ride this on a public street?
              </p>
            </header>

            <AffiliateDisclosure compact />

            {/* Top CTA */}
            <div className="my-8">
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                productName="Dualtron X Limited"
                badge="FASTEST — 68 MPH VERIFIED"
                rating={4.5}
                verdict="The undisputed king of production e-scooters. 68 mph top speed, 150-mile range, hydraulic brakes, full suspension. This is a motorcycle in scooter clothing — and priced like one. Only makes sense on private property or closed courses."
                pros={['68 mph verified top speed', 'Dual 3,300W motors, 84V battery', '150+ mile range', 'Hydraulic disc brakes, full suspension']}
                cons={['$5,999 price tag', 'Weighs 121 lb — not portable', 'Illegal on public roads almost everywhere']}
                source="fastest-electric-scooter-top-cta"
                variant="top"
              />
            </div>

            {/* Comparison Table */}
            <div className="my-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#fff' }}>
                The 5 Fastest Electric Scooters Compared
              </h2>
              <ComparisonTable
                specLabels={['Top Speed', 'Motor Power', 'Range', 'Battery', 'Weight', 'Brakes', 'Price']}
                products={[
                  {
                    productKey: 'dualtron-x-limited',
                    name: 'Dualtron X Limited',
                    badge: 'FASTEST',
                    rating: 4.5,
                    specs: {
                      'Top Speed': '68 mph',
                      'Motor Power': '2 x 3,300W (6,600W total)',
                      'Range': '150 miles',
                      'Battery': '84V 40Ah LG',
                      'Weight': '121 lb',
                      'Brakes': 'Hydraulic disc, front + rear',
                      'Price': '$5,999',
                    },
                  },
                  {
                    productKey: 'weped-fs',
                    name: 'Weped FS',
                    badge: 'RUNNER-UP',
                    rating: 4.4,
                    specs: {
                      'Top Speed': '62 mph',
                      'Motor Power': '2 x 2,500W (5,000W total)',
                      'Range': '100 miles',
                      'Battery': '72V 35Ah',
                      'Weight': '110 lb',
                      'Brakes': 'Hydraulic disc, front + rear',
                      'Price': '$5,000',
                    },
                  },
                  {
                    productKey: 'kaabo-wolf-king-gt-pro',
                    name: 'Kaabo Wolf King GT Pro',
                    badge: 'BEST VALUE',
                    rating: 4.5,
                    specs: {
                      'Top Speed': '60 mph',
                      'Motor Power': '2 x 2,000W (4,000W total)',
                      'Range': '90 miles',
                      'Battery': '72V 35Ah',
                      'Weight': '104 lb',
                      'Brakes': 'Hydraulic disc, front + rear',
                      'Price': '$3,599',
                    },
                  },
                  {
                    productKey: 'nami-burn-e-2-max',
                    name: 'NAMI Burn-E 2 Max',
                    badge: 'BEST BUILD',
                    rating: 4.6,
                    specs: {
                      'Top Speed': '60 mph',
                      'Motor Power': '2 x 2,000W (4,000W total)',
                      'Range': '100 miles',
                      'Battery': '72V 40Ah LG',
                      'Weight': '108 lb',
                      'Brakes': 'Hydraulic disc, front + rear',
                      'Price': '$4,400',
                    },
                  },
                  {
                    productKey: 'apollo-pro',
                    name: 'Apollo Pro',
                    badge: 'ENTRY POINT',
                    rating: 4.4,
                    specs: {
                      'Top Speed': '50 mph',
                      'Motor Power': '2 x 1,500W (3,000W total)',
                      'Range': '68 miles',
                      'Battery': '60V 35Ah',
                      'Weight': '99 lb',
                      'Brakes': 'Hydraulic disc, front + rear',
                      'Price': '$2,899',
                    },
                  },
                ]}
              />
            </div>

            {/* Intro Section */}
            <section className="prose prose-invert max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5" style={{ color: '#fff' }}>
                What "fast" actually means in the scooter world
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Amazon lists hundreds of "high speed" electric scooters advertising 25-35 mph. Those are not what this
                guide covers. This guide covers the narrow category of dual-motor, dual-suspension, hydraulic-braked
                performance e-scooters that actually hit 40+ mph — and the machines at the top of that list hit 60-68 mph.
              </p>
              <p style={{ color: '#d1d5db' }}>
                At those speeds, physics changes. Your stopping distance triples. A 1-inch pothole becomes an ejection
                seat. Your grocery-aisle bike helmet does nothing. A $500 scooter does not have the brakes, suspension,
                or frame rigidity to survive a 60 mph emergency stop — which is why every scooter on this list costs
                $2,899 or more. The build quality is not optional.
              </p>
              <p style={{ color: '#d1d5db' }}>
                We also need to be honest up front: every scooter in this guide is illegal on public roads in California
                and almost every other state. The legal frame is covered further down, but read that section carefully
                before buying. These machines are built for closed courses, private property, and tracks — not commutes.
              </p>

              {/* Product 1 — Dualtron X Limited */}
              <h2 id="dualtron-x-limited" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                1. Dualtron X Limited — 68 mph, the fastest you can buy
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $5,999 | Top speed: 68 mph | Range: 150 miles | Weight: 121 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Dualtron X Limited is the reference point for the entire performance e-scooter category. Two 3,300W
                BLDC motors, an 84V 40Ah LG battery pack, and a 121-lb curb weight put it in a different universe from
                anything else sold as a "scooter." Verified independent tests have clocked it at 68 mph with a 175-lb
                rider on flat pavement.
              </p>
              <p style={{ color: '#d1d5db' }}>
                What makes it worth $5,999 is not just the speed — it is the sustained speed. A lot of "60 mph" scooters
                hit 60 for 10 seconds and then sag. The Dualtron X holds 55-60 mph for 30+ miles on a single charge.
                Hydraulic disc brakes on both wheels, dual shock absorbers, and 11-inch pneumatic tires actually make
                60 mph survivable. The handlebar also folds, which is funny when you remember the scooter weighs more
                than most e-bikes.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Downside: at 121 lb, this is not portable. Two people can barely lift it into an SUV. If you live in a
                second-floor walk-up, this is not your scooter. It also draws attention — every police officer in a
                5-mile radius will notice you.
              </p>
              <div className="my-6">
                <BuyButton productKey="dualtron-x-limited" source="fastest-escooter-dualtron-x" variant="primary">
                  Check Dualtron X Limited price
                </BuyButton>
              </div>

              {/* Product 2 — Weped FS */}
              <h2 id="weped-fs" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                2. Weped FS — 62 mph Korean-built beast
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $5,000 | Top speed: 62 mph | Range: 100 miles | Weight: 110 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                Weped is the Korean performance-scooter brand that enthusiasts geek out over. The FS is their flagship —
                dual 2,500W motors, a 72V 35Ah battery, and a frame geometry that is widely considered the best in the
                category. The deck is longer and flatter than a Dualtron, which makes high-speed stability noticeably
                better. If you are a taller rider (6'+), the Weped FS will feel right.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Where the Weped loses to the Dualtron is range and resale. 100 miles is still absurd for a scooter, but
                the Dualtron gets 150. And the Weped has limited US dealer support — parts come from Korea, and warranty
                claims can take weeks. For a $5,000 purchase, that matters.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The FS also has something the Dualtron does not: an actual sport riding geometry. The bars are lower,
                the deck is longer, and you ride it forward-leaned like a motorcycle. At 55+ mph, that matters.
              </p>
              <div className="my-6">
                <BuyButton productKey="weped-fs" source="fastest-escooter-weped-fs" variant="primary">
                  Check Weped FS price
                </BuyButton>
              </div>

              {/* Mid CTA 1 */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey="kaabo-wolf-king-gt-pro"
                  productName="Kaabo Wolf King GT Pro"
                  badge="BEST VALUE PICK"
                  rating={4.5}
                  verdict="60 mph top speed, 90-mile range, hydraulic brakes, and full suspension for $3,599 — about $2,400 less than the Dualtron X. Not as refined, but 90% of the performance at 60% of the price. This is the one most buyers should actually get."
                  pros={['60 mph verified', '$3,599 vs $5,999 Dualtron', 'Excellent parts availability in US', 'Adjustable hydraulic suspension']}
                  cons={['Not as polished fit/finish as NAMI', 'Still 104 lb — not portable', 'Stock tires wear fast at speed']}
                  source="fastest-escooter-mid-cta-1"
                  variant="mid"
                />
              </div>

              {/* Product 3 — Kaabo Wolf King GT Pro */}
              <h2 id="kaabo-wolf-king-gt-pro" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                3. Kaabo Wolf King GT Pro — 60 mph best-value performer
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $3,599 | Top speed: 60 mph | Range: 90 miles | Weight: 104 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                If you want 60 mph but cannot justify $5,000+, this is the answer. The Wolf King GT Pro is Kaabo's
                flagship and has been refined over three generations. Dual 2,000W motors peak closer to 4,000W, a
                72V 35Ah battery, and hydraulic brakes on both wheels. It hits a real 60 mph and holds it.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Kaabo's US dealer network is also the best in the category. If something breaks, you can get parts in
                3-5 days. Dualtron and Weped owners often wait 3-5 weeks. That alone is worth $500 in saved hassle.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The compromise: fit and finish is a step below NAMI and Dualtron. Plastic panels rattle more, the deck
                texture wears, the controller display is older. None of it affects performance, but you feel the price
                difference.
              </p>
              <div className="my-6">
                <BuyButton productKey="kaabo-wolf-king-gt-pro" source="fastest-escooter-kaabo-wolf-king" variant="primary">
                  Check Kaabo Wolf King GT Pro price
                </BuyButton>
              </div>

              {/* Product 4 — NAMI Burn-E 2 Max */}
              <h2 id="nami-burn-e-2-max" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                4. NAMI Burn-E 2 Max — 60 mph, best-built scooter in the category
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $4,400 | Top speed: 60 mph | Range: 100 miles | Weight: 108 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                NAMI is the Rolex of performance e-scooters. The Burn-E 2 Max is not faster than a Kaabo, but the build
                quality is in a different league — milled aluminum components, proprietary hydraulic suspension, IP55
                water resistance (rare at this price), and a controller that learns your riding style. This is what
                you buy if you own it for a decade.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The dual 2,000W motors push the Burn-E 2 Max to 60 mph, and the LG 72V 40Ah battery delivers an honest
                100-mile range at moderate speed. The hydraulic suspension is the best in class — you can feel it soak
                up pavement cracks that would throw a Dualtron rider into the stratosphere.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Downside: you pay for that refinement. At $4,400 it is $800 more than the Kaabo, and you do not get
                more top speed or range. If you are buying the scooter and keeping it for 8+ years, the NAMI is worth
                every dollar. If you are chasing peak specs, save $800 and get the Kaabo.
              </p>
              <div className="my-6">
                <BuyButton productKey="nami-burn-e-2-max" source="fastest-escooter-nami-burn-e" variant="primary">
                  Check NAMI Burn-E 2 Max price
                </BuyButton>
              </div>

              {/* Product 5 — Apollo Pro */}
              <h2 id="apollo-pro" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                5. Apollo Pro — 50 mph entry point into the category
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $2,899 | Top speed: 50 mph | Range: 68 miles | Weight: 99 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                Apollo is the Canadian brand that has become the go-to for first-time performance scooter buyers. The
                Pro is their 50 mph entry — dual 1,500W motors, 60V 35Ah battery, hydraulic brakes, and full suspension.
                At $2,899 it is the cheapest way into a genuinely fast, safely-braked scooter.
              </p>
              <p style={{ color: '#d1d5db' }}>
                50 mph does not sound as dramatic as 68, but it is still 3x the California road limit and fast enough
                that you need a full-face helmet. The Apollo also has the best app and customer service in the space —
                firmware updates are pushed over the air, and the Apollo community on Reddit is active and helpful.
              </p>
              <p style={{ color: '#d1d5db' }}>
                This is the one to buy if you want to dip a toe in without spending $4,000+. You can always sell it
                and upgrade if you catch the bug.
              </p>
              <div className="my-6">
                <BuyButton productKey="apollo-pro" source="fastest-escooter-apollo-pro" variant="primary">
                  Check Apollo Pro price
                </BuyButton>
              </div>

              {/* California law section */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                California scooter law: the part nobody wants to talk about
              </h2>
              <div className="p-5 rounded-lg my-6" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#f87171' }} />
                  <div>
                    <p className="font-semibold mb-2" style={{ color: '#fff' }}>California Vehicle Code 22411</p>
                    <p style={{ color: '#d1d5db' }}>
                      The maximum speed for any electric scooter on public roads, bike paths, or bike lanes is <strong style={{ color: '#fff' }}>15 mph</strong>.
                      That applies regardless of what the scooter is capable of. A $6,000 Dualtron and a $200 Razor are
                      treated identically under the law: 15 mph max, or you are subject to a moving violation.
                    </p>
                  </div>
                </div>
              </div>
              <p style={{ color: '#d1d5db' }}>
                California also requires:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li><strong style={{ color: '#fff' }}>Valid driver's license</strong> (Class C or higher) for any rider 16+ operating on public roads</li>
                <li><strong style={{ color: '#fff' }}>Helmet mandatory</strong> for riders under 18 — state law, not recommendation</li>
                <li><strong style={{ color: '#fff' }}>No registration or insurance</strong> required (e-scooters are exempt from DMV registration)</li>
                <li><strong style={{ color: '#fff' }}>No riding on sidewalks</strong> except to access the adjacent roadway</li>
                <li><strong style={{ color: '#fff' }}>Bike lane required</strong> when available on roads with speed limits above 25 mph</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                Enforcement varies wildly. In San Francisco and Los Angeles, traffic officers actively pull over fast
                scooters. In Riverside County and Orange County, enforcement is nearly zero unless you cause a crash. But
                if you cause a crash at 60 mph on a public road, you are personally liable for every dollar of damage —
                your homeowner's insurance will not cover a vehicle operating above its legal speed.
              </p>

              {/* Private property use */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Private property, tracks, and the honest use case
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Here is what these scooters are actually for: private land, industrial parks on weekends, motocross
                tracks (some allow e-scooters on practice days), desert BLM land, and off-hour parking structures.
                Several California motocross tracks — Glen Helen, Milestone, Perris — have opened e-scooter time slots
                for $30-60/day. That is where a Dualtron makes sense.
              </p>
              <p style={{ color: '#d1d5db' }}>
                If you live on 5+ acres, all of this is moot — ride what you want, wear a helmet, have fun. But if you
                bought a 68 mph scooter planning to commute 12 miles on PCH, you bought the wrong machine. A 25 mph
                commuter scooter in the $800-1,500 range is legal, lighter, cheaper, and far less conspicuous.
              </p>

              {/* Dual motor deep dive */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Why dual motors matter at 40+ mph
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Single-motor scooters peak at 35-40 mph in ideal conditions with a light rider on flat pavement. The
                moment you add a hill, a 200-lb rider, or wet pavement, that number drops by 20-30%. Dual motors solve
                three problems:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li><strong style={{ color: '#fff' }}>Sustained top speed.</strong> Two motors split the load, so neither overheats during long high-speed runs.</li>
                <li><strong style={{ color: '#fff' }}>Hill-climbing.</strong> A 4,000W combined output climbs a 20% grade with a 250-lb rider. A 500W single-motor scooter barely manages 10%.</li>
                <li><strong style={{ color: '#fff' }}>Traction and efficiency modes.</strong> Running just the rear motor in "economy mode" doubles your range. Engaging both adds instant torque when you need to accelerate from a stop.</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                Dual motors are also safer in emergencies — regenerative braking on both wheels slows you faster and
                more smoothly than a single-motor setup. At 60 mph, that difference is measured in car lengths.
              </p>

              {/* Mid CTA 2 */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey="nami-burn-e-2-max"
                  productName="NAMI Burn-E 2 Max"
                  badge="BEST LONG-TERM BUY"
                  rating={4.6}
                  verdict="If you plan to own one scooter for the next 8-10 years, the NAMI is the one. Aerospace-grade build, IP55 water resistance, and an active community that supports long-term ownership. You pay for it, but you get a scooter that outlasts three Kaabos."
                  pros={['Best build quality in the category', 'IP55 water-resistance rating', 'Hydraulic suspension front and rear', 'Proprietary controller learns rider style']}
                  cons={['$4,400 is $800 more than comparable Kaabo', 'US dealer support is thinner than Kaabo', 'Parts cost 20-30% more when something breaks']}
                  source="fastest-escooter-mid-cta-2"
                  variant="mid"
                />
              </div>

              {/* Brakes deep dive */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Hydraulic brakes: non-negotiable at 40+ mph
              </h2>
              <p style={{ color: '#d1d5db' }}>
                At 25 mph, mechanical disc brakes or drum brakes are adequate. At 40+ mph they are not. The physics:
                stopping energy scales with the square of speed, so doubling your speed from 25 to 50 mph quadruples
                the heat your brakes have to dissipate in the same distance.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Mechanical brakes fade under that kind of heat. After two or three 60-to-0 emergency stops, a mechanical
                caliper loses 40-50% of its stopping power. Hydraulic brakes stay consistent because they use fluid
                pressure that does not change with temperature.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Every scooter in this guide has hydraulic brakes on <em>both</em> wheels. If you see a "fast" scooter
                advertising drum brakes or cable-actuated mechanical calipers, it is not actually a fast scooter — it
                is an expensive way to test how your body handles pavement.
              </p>

              {/* Safety section */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Safety gear for 50+ mph riders
              </h2>
              <p style={{ color: '#d1d5db' }}>
                A crash at 50 mph has the same kinetic energy as falling from a 5-story building. Your bike helmet is
                not going to help. Here is what actually works:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li><strong style={{ color: '#fff' }}>DOT or ECE 22.06 full-face motorcycle helmet.</strong> Not a bike helmet, not a half-shell. Full face. $150-400 range.</li>
                <li><strong style={{ color: '#fff' }}>Armored motorcycle jacket</strong> with CE-rated shoulder, elbow, and back protectors. $200-500.</li>
                <li><strong style={{ color: '#fff' }}>Motorcycle gloves</strong> with hard knuckle protection. $50-150.</li>
                <li><strong style={{ color: '#fff' }}>Knee and shin guards</strong> (motocross style). $60-120.</li>
                <li><strong style={{ color: '#fff' }}>Over-the-ankle boots</strong>, ideally motorcycle-rated. $100-300.</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                Budget $600-$1,500 for gear on top of the scooter. Every experienced rider on a Dualtron or Weped will
                tell you the same thing: gear is the second most important purchase after the scooter itself.
              </p>

              {/* Why not public roads */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Why you probably shouldn't ride these on public roads
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Beyond the legal issue, there is a physical one: these scooters are invisible to cars. A driver glancing
                at a mirror sees a motorcycle-sized silhouette and reads it as "motorcycle" because their brain is
                pattern-matching to something familiar. They do not see a scooter. They do not expect you to be going
                60 mph. Their merging, lane-changing, and right-of-way decisions assume you are a bike going 15.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Every e-scooter fatality database tracked in California between 2022 and 2025 involved a car driver who
                did not see the scooter coming. The scooter has no turn signals most cars recognize, no headlights bright
                enough to register in daylight, and no horn that sounds like a vehicle.
              </p>
              <p style={{ color: '#d1d5db' }}>
                If you must ride one on the street, the honest advice is: ride at 20-25 mph regardless of what the
                scooter can do, assume every car is about to merge into you, use a proper motorcycle horn (aftermarket,
                $30), and never ride after dark. Better yet: use these machines where they belong — closed courses,
                private property, and sanctioned track days.
              </p>

              {/* FAQ */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>What is the fastest electric scooter you can legally buy?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    There is no federal speed cap on purchase — the fastest production e-scooter sold in the US is the
                    Dualtron X Limited at roughly 68 mph. However, almost every state limits public-road scooter use to
                    15-25 mph, so these machines are legally intended for private property, tracks, and closed courses.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Can I ride a 60 mph electric scooter on the street in California?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    No. California Vehicle Code 22411 caps electric scooter speed at 15 mph on public roads, bike paths,
                    and bike lanes. Riding a 60 mph scooter on a public street is illegal regardless of how fast you
                    actually go. Enforcement is inconsistent, but you can be ticketed, and your insurance will not cover
                    a crash.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Do I need a license to ride a fast electric scooter?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    California requires a valid driver's license or instruction permit (Class C or higher) to operate
                    an electric scooter in public. Riders under 18 must wear a helmet. No registration, no insurance,
                    no license plate — but any scooter capable of 28+ mph is technically a motor vehicle in some states,
                    which creates a gray area.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Why do these scooters cost $3,000 to $6,000?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Dual 3,000-6,000W motors, 72V-84V battery packs, hydraulic brakes, full suspension, and aerospace-grade
                    aluminum frames. A $500 scooter uses a 250W hub motor and drum brakes. Moving a 100-lb scooter and
                    200-lb rider at 60+ mph safely requires car-grade components, and those cost real money.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Are dual-motor electric scooters worth it?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    For 40+ mph speeds, yes — single-motor scooters cap out around 35-40 mph and struggle on hills with
                    a heavy rider. Dual motors also provide traction on wet pavement and give you a single-motor
                    "economy" mode that doubles range. If you only ride flat, paved streets under 25 mph, a single-motor
                    unit is lighter, cheaper, and more than enough.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>What safety gear do I need at 50+ mph?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Full-face DOT motorcycle helmet (not a bike helmet), motorcycle gloves, armored jacket, and
                    knee/elbow protection at minimum. At 50 mph, a crash has the same energy as falling off a 5-story
                    building. Plan your gear like you are riding a motorcycle, because the physics are identical.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey={PRIMARY_PRODUCT_KEY}
                  productName="Dualtron X Limited"
                  badge="OUR TOP PICK — FASTEST OVERALL"
                  rating={4.5}
                  verdict="If you want the genuine fastest production e-scooter on the planet, this is it. 68 mph verified, 150-mile range, and the reference build quality every competitor is compared against. Only makes sense for private property, tracks, or riders who can legitimately afford a $6,000 hobby toy."
                  pros={['68 mph verified top speed (fastest you can buy)', 'Dual 3,300W motors, 6,600W total output', '150-mile range on 84V 40Ah LG battery', 'Hydraulic brakes + full suspension standard']}
                  cons={['$5,999 price tag', '121 lb — not practical to carry', 'Illegal on public roads in 50 states']}
                  source="fastest-escooter-final-cta"
                  variant="final"
                />
              </div>

              {/* Still comparing? */}
              <div className="my-10 p-6 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#fff' }}>Still comparing?</h3>
                <p className="mb-5" style={{ color: '#d1d5db' }}>
                  If 50+ mph is more scooter than you actually need, these guides cover the more rational end of the
                  category.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/reviews/best-electric-scooter-for-adults"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Best Electric Scooters for Adults — Commuter & Heavy-Duty</span>
                    <ArrowRight className="w-5 h-5" style={{ color: '#9ca3af' }} />
                  </Link>
                  <Link
                    href="/reviews/best-electric-scooter"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Best Electric Scooters Overall — Full Category Breakdown</span>
                    <ArrowRight className="w-5 h-5" style={{ color: '#9ca3af' }} />
                  </Link>
                  <Link
                    href="/reviews/gotrax-electric-scooter"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Gotrax Electric Scooter Review — Budget Lineup Compared</span>
                    <ArrowRight className="w-5 h-5" style={{ color: '#9ca3af' }} />
                  </Link>
                </div>
              </div>

              {/* Prev / Next Nav */}
              <div className="flex flex-col sm:flex-row gap-4 my-8">
                <Link
                  href="/reviews/best-electric-scooter"
                  className="flex-1 flex items-center gap-3 p-4 rounded-lg transition-colors"
                  style={{ backgroundColor: '#141414', border: '1px solid #262626' }}
                >
                  <ArrowLeft className="w-5 h-5 flex-shrink-0" style={{ color: '#9ca3af' }} />
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#9ca3af' }}>Previous</div>
                    <div className="font-semibold" style={{ color: '#fff' }}>Best Electric Scooters Overall</div>
                  </div>
                </Link>
                <Link
                  href="/reviews/best-electric-scooter-for-adults"
                  className="flex-1 flex items-center gap-3 p-4 rounded-lg transition-colors justify-end text-right"
                  style={{ backgroundColor: '#141414', border: '1px solid #262626' }}
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#9ca3af' }}>Next</div>
                    <div className="font-semibold" style={{ color: '#fff' }}>Best Electric Scooters for Adults</div>
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" style={{ color: '#9ca3af' }} />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <ReviewFooter />
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source="fastest-electric-scooter-sticky" />
    </ReviewLayout>
  );
}
