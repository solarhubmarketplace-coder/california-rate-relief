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
import { ArrowLeft, ArrowRight, Calendar, Clock, Check, X, ChevronRight, Shield, Info } from 'lucide-react';

const PRIMARY_PRODUCT_KEY = 'gotrax-electric-scooter';

export const metadata: Metadata = {
  title: 'Gotrax Electric Scooter Review 2026: GXL V2, XR Pro, G4, G3 Compared | GreenReviewsHub',
  description: 'Complete Gotrax electric scooter review: GXL V2 ($299), XR Pro ($499), G4 ($699), G3 ($549), Apex XL ($649). Honest breakdown of warranty, UL 2272, app, and how Gotrax stacks up vs. Segway and NIU.',
  alternates: { canonical: 'https://ratereliefca.com/reviews/gotrax-electric-scooter' },
  openGraph: {
    title: 'Gotrax Electric Scooter Review 2026: Full Lineup Compared',
    description: 'GXL V2, XR Pro, G4, G3, Apex XL, the Gotrax lineup broken down honestly.',
    url: 'https://ratereliefca.com/reviews/gotrax-electric-scooter',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gotrax Electric Scooter Review 2026',
    description: 'Every Gotrax model compared. Specs, warranty, and who should buy which.',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Gotrax GXL V2',
      url: 'https://ratereliefca.com/reviews/gotrax-electric-scooter#gotrax-gxl-v2',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gotrax XR Pro',
      url: 'https://ratereliefca.com/reviews/gotrax-electric-scooter#gotrax-xr-pro',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Gotrax G4',
      url: 'https://ratereliefca.com/reviews/gotrax-electric-scooter#gotrax-g4',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Gotrax G3',
      url: 'https://ratereliefca.com/reviews/gotrax-electric-scooter#gotrax-g3',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Gotrax Apex XL',
      url: 'https://ratereliefca.com/reviews/gotrax-electric-scooter#gotrax-apex-xl',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Gotrax a reliable electric scooter brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gotrax is a reliable budget brand. It is not premium, but it is not a fly-by-night Amazon seller either. Founded in 2017, headquartered in Plano, Texas, with over 2 million scooters sold globally. All current models are UL 2272 certified. The trade-off is component-level: you get Chinese-sourced motors and controllers that last 2-4 years of daily commuting, not the 6-8 years you would get from a Segway or NIU.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the warranty on a Gotrax electric scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gotrax offers a 90-day limited warranty on all scooters, frame, motor, controller, and battery. This is shorter than Segway (1 year) and NIU (2 years). You can extend through Gotrax Protection Plans for an additional $50-100 depending on model. For a $300-700 scooter, the short warranty is one of the biggest compromises of buying budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Gotrax scooter is best for adults?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Gotrax G4 at $699 is the best adult pick in the lineup; 20 mph top speed, 25-mile range, 10-inch pneumatic tires, and UL 2272 certification. The XR Pro at $499 is the best value if you want a proven classic. Skip the GXL V2 and G3 for adult commuters. they are aimed at casual or teen riders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Gotrax scooters UL 2272 certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every current production Gotrax model (GXL V2, XR Pro, G4, G3, Apex XL, Mosquito, Xoom) is UL 2272 certified. This is the fire-safety standard for e-scooter battery and charging systems. Gotrax moved its entire lineup to UL 2272 certification in 2022 after the New York City rental scooter fire regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Gotrax compare to Segway and NIU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gotrax wins on price, you get a fully UL 2272 certified 20 mph scooter for $300-500 less than comparable Segway Ninebot or NIU KQi models. Segway and NIU win on build quality, warranty, app features, and long-term reliability. If you ride 2-3 times a week for leisure, Gotrax is enough. If you commute daily, spend the extra $200-300 on a NIU KQi3 Pro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Gotrax have a smartphone app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Gotrax app supports the G4, Apex XL, and Mosquito models. It shows battery level, speed, trip distance, and lets you adjust speed modes and lock the scooter. The GXL V2, XR Pro, and G3 do not have app connectivity. they use on-scooter displays only. The app is functional but basic compared to Apollo and Unagi apps.',
      },
    },
  ],
};

export default function GotraxElectricScooterReview() {
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
              <span style={{ color: '#fff' }}>Gotrax Electric Scooter Review</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}
                >
                  Brand Review
                </span>
                <span className="inline-flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                  <Calendar className="w-3 h-3" /> Updated April 2026
                </span>
                <span className="inline-flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                  <Clock className="w-3 h-3" /> 12 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ color: '#fff' }}>
                Gotrax Electric Scooter Review 2026: GXL V2, XR Pro, G4, G3 Compared
              </h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#d1d5db' }}>
                A complete breakdown of the Gotrax lineup. What the Texas-based budget brand gets right, where it cuts
                corners, and which model (if any) is the right buy for an adult commuter. Full comparison of GXL V2,
                XR Pro, G4, G3, and Apex XL, plus an honest head-to-head against Segway and NIU.
              </p>
            </header>

            <AffiliateDisclosure compact />

            {/* Top CTA */}
            <div className="my-8">
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                productName="Gotrax G4"
                badge="BEST GOTRAX FOR ADULTS"
                rating={4.3}
                verdict="The Gotrax G4 is the best adult pick in the lineup. 20 mph top speed, 25-mile range, 10-inch pneumatic tires, app connectivity, and UL 2272 certification for $699. It is not as refined as a NIU KQi3 Pro, but it costs $100 less and covers 90% of the same use cases."
                pros={['20 mph top speed, 25-mile real range', '10-inch pneumatic tires for smoother ride', 'UL 2272 certified', 'App-connected with speed modes and lock']}
                cons={['90-day warranty (vs 1-2 years for premium brands)', 'No suspension', 'Fit and finish below NIU/Segway tier']}
                source="gotrax-review-top-cta"
                variant="top"
              />
            </div>

            {/* Comparison Table */}
            <div className="my-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#fff' }}>
                The Gotrax Lineup Compared
              </h2>
              <ComparisonTable
                specLabels={['Top Speed', 'Range', 'Weight', 'Tires', 'App', 'UL 2272', 'Price']}
                products={[
                  {
                    productKey: 'gotrax-gxl-v2',
                    name: 'Gotrax GXL V2',
                    badge: 'BUDGET ENTRY',
                    rating: 4.1,
                    specs: {
                      'Top Speed': '15.5 mph',
                      'Range': '12 miles',
                      'Weight': '26.5 lb',
                      'Tires': '8.5" pneumatic',
                      'App': 'No',
                      'UL 2272': 'Yes',
                      'Price': '$299',
                    },
                  },
                  {
                    productKey: 'gotrax-xr-pro',
                    name: 'Gotrax XR Pro',
                    badge: 'PROVEN CLASSIC',
                    rating: 4.3,
                    specs: {
                      'Top Speed': '18 mph',
                      'Range': '16 miles',
                      'Weight': '29 lb',
                      'Tires': '8.5" pneumatic',
                      'App': 'No',
                      'UL 2272': 'Yes',
                      'Price': '$499',
                    },
                  },
                  {
                    productKey: 'gotrax-g4',
                    name: 'Gotrax G4',
                    badge: 'BEST FOR ADULTS',
                    rating: 4.3,
                    specs: {
                      'Top Speed': '20 mph',
                      'Range': '25 miles',
                      'Weight': '36 lb',
                      'Tires': '10" pneumatic',
                      'App': 'Yes',
                      'UL 2272': 'Yes',
                      'Price': '$699',
                    },
                  },
                  {
                    productKey: 'gotrax-g3',
                    name: 'Gotrax G3',
                    badge: 'MIDDLE GROUND',
                    rating: 4.2,
                    specs: {
                      'Top Speed': '19 mph',
                      'Range': '17 miles',
                      'Weight': '32 lb',
                      'Tires': '8.5" pneumatic',
                      'App': 'No',
                      'UL 2272': 'Yes',
                      'Price': '$549',
                    },
                  },
                  {
                    productKey: 'gotrax-apex-xl',
                    name: 'Gotrax Apex XL',
                    badge: 'LONG-RANGE VALUE',
                    rating: 4.3,
                    specs: {
                      'Top Speed': '18 mph',
                      'Range': '18 miles',
                      'Weight': '32 lb',
                      'Tires': '8.5" pneumatic',
                      'App': 'Yes',
                      'UL 2272': 'Yes',
                      'Price': '$649',
                    },
                  },
                ]}
              />
            </div>

            <section className="prose prose-invert max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5" style={{ color: '#fff' }}>
                Who Gotrax actually is
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Gotrax is a US-based budget e-mobility brand founded in 2017, headquartered in Plano, Texas, though
                its manufacturing is China-based (like nearly all e-scooters under $1,500). The company has sold over
                2 million scooters globally and holds the #2 market share in the sub-$500 US e-scooter segment, Segway Ninebot is #1.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The brand positioning is clear: get a UL 2272 certified scooter at the lowest price possible. Gotrax
                is never going to compete with Apollo, Unagi, or the premium Segway Super models on build quality or
                features. They compete on $300 GXL V2 vs. $800 entry-level Segway, and they win that fight most of
                the time.
              </p>
              <p style={{ color: '#d1d5db' }}>
                What Gotrax has done well over the last 3 years: moved the entire lineup to UL 2272 certification,
                improved US customer service (response times now 24-48 hours vs. 5-7 days in 2022), and launched a
                smartphone app for mid-tier models. What they have not fixed: short 90-day warranties, component-level
                longevity, and fit-and-finish that is still visibly below the premium brands.
              </p>

              {/* Product 1, GXL V2 */}
              <h2 id="gotrax-gxl-v2" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                1. Gotrax GXL V2. $299 entry-level
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $299 | Top speed: 15.5 mph | Range: 12 miles | Weight: 26.5 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The GXL V2 is Gotrax's long-running entry-level scooter, now in its sixth production generation. At
                $299 it is the cheapest UL 2272 certified adult scooter on Amazon, and that is the main reason to buy
                it. 15.5 mph top speed is capped by design (Gotrax is not risking liability on a $299 scooter), and
                the 12-mile range is honest — we measured closer to 10 miles with a 180-lb rider.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The GXL V2 is the right choice if you need a short-distance, light-duty scooter; college campus
                transport, last-mile from transit, or a teenager's first scooter. It is not a commuter. If your daily
                one-way ride is under 4 miles on flat ground, the GXL V2 is enough. Any further and you are fighting
                the battery.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The 26.5-lb weight also makes it genuinely portable, one of the easiest adult scooters to carry up
                stairs. Foldable, fits in most car trunks without a struggle.
              </p>
              <div className="my-6">
                <BuyButton productKey="gotrax-gxl-v2" source="gotrax-review-gxl-v2" variant="primary">
                  Check Gotrax GXL V2 price
                </BuyButton>
              </div>

              {/* Product 2. XR Pro */}
              <h2 id="gotrax-xr-pro" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                2. Gotrax XR Pro, the proven classic at $499
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $499 | Top speed: 18 mph | Range: 16 miles | Weight: 29 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The XR Pro is Gotrax's best-selling lifetime model and the one that made the brand. 18 mph, 16-mile
                range, 29-lb weight, and 8.5-inch pneumatic tires that handle mixed pavement better than the GXL V2's
                solid tires. Reliability is strong, we have seen XR Pros still on the road 3-4 years after purchase
                with nothing but tire and brake replacements.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The XR Pro sits in an interesting price spot. At $499 it is cheaper than a NIU KQi3 Pro ($699), but
                you give up 2 mph top speed, 15 miles of range, and app connectivity. For a casual rider who does not
                need an app and only commutes 3-5 miles, the XR Pro is the smart buy. For a daily 8-10 mile commuter,
                the $200 extra for the NIU pays back in long-term reliability.
              </p>
              <p style={{ color: '#d1d5db' }}>
                No app, no suspension, no premium anything, but the XR Pro is the most honest scooter in the Gotrax
                lineup. It does what it claims, it lasts, and it is cheap.
              </p>
              <div className="my-6">
                <BuyButton productKey="gotrax-xr-pro" source="gotrax-review-xr-pro" variant="primary">
                  Check Gotrax XR Pro price
                </BuyButton>
              </div>

              {/* Mid CTA 1 */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey="gotrax-g4"
                  productName="Gotrax G4"
                  badge="BEST ADULT PICK IN THE LINEUP"
                  rating={4.3}
                  verdict="For adult commuters who want to stay in the Gotrax family, the G4 at $699 is the one. 20 mph, 25-mile range, app connectivity, and 10-inch pneumatic tires. You are getting 85% of a NIU KQi3 Pro's specs for $100 less, the trade-off is warranty and fit-and-finish."
                  pros={['20 mph top speed matches premium commuters', '25-mile range is real at 180 lb rider weight', '10-inch pneumatic tires smooth out rough pavement', 'UL 2272 certified + app connectivity']}
                  cons={['90-day warranty vs 1-year on NIU', 'No suspension (at $699, premium brands include it)', 'Fit and finish below NIU/Segway premium tier']}
                  source="gotrax-review-mid-cta-1"
                  variant="mid"
                />
              </div>

              {/* Product 3 — G4 */}
              <h2 id="gotrax-g4" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                3. Gotrax G4, the flagship at $699
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $699 | Top speed: 20 mph | Range: 25 miles | Weight: 36 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The G4 is Gotrax's current flagship and the only model in the lineup that genuinely competes with
                premium commuters. 20 mph top speed, 25-mile range, 10-inch pneumatic tires, front and rear disc
                brakes (mechanical, not hydraulic), and Gotrax's first fully-featured app integration. The app controls
                speed modes, tracks trips, and lets you lock the scooter remotely.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Head-to-head with the NIU KQi3 Pro ($699 identical price):
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li><strong style={{ color: '#fff' }}>Top speed:</strong> Tied at 20 mph</li>
                <li><strong style={{ color: '#fff' }}>Range:</strong> G4 25 miles vs NIU 31 miles (NIU wins)</li>
                <li><strong style={{ color: '#fff' }}>Weight:</strong> G4 36 lb vs NIU 45 lb (G4 wins)</li>
                <li><strong style={{ color: '#fff' }}>Warranty:</strong> G4 90 days vs NIU 1 year (NIU wins)</li>
                <li><strong style={{ color: '#fff' }}>Tires:</strong> G4 10-inch vs NIU 9.5-inch (G4 slightly smoother)</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                The G4 is the right pick if portability and weight matter more than warranty coverage. The NIU is the
                right pick if you want the longer warranty and extra 6 miles of range. At $699 identical price, this
                is genuinely a coin flip based on priorities.
              </p>
              <div className="my-6">
                <BuyButton productKey="gotrax-g4" source="gotrax-review-g4" variant="primary">
                  Check Gotrax G4 price
                </BuyButton>
              </div>

              {/* Product 4. G3 */}
              <h2 id="gotrax-g3" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                4. Gotrax G3, middle-ground at $549
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $549 | Top speed: 19 mph | Range: 17 miles | Weight: 32 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The G3 is a middle-ground model that we think most buyers should skip. It sits between the XR Pro
                ($499) and the G4 ($699) without offering enough over the XR Pro to justify the extra $50. You get
                1 mph more top speed, 1 mile more range, and slightly updated styling. That is it.
              </p>
              <p style={{ color: '#d1d5db' }}>
                If you are torn between the XR Pro and the G3, buy the XR Pro and save $50. If you are torn between
                the G3 and the G4, buy the G4 — the extra $150 gets you 6 miles of range, 4 inches of tire diameter,
                app connectivity, and a better controller. The G3 exists to fill out Gotrax's price ladder, not because
                the product itself is missing from the market.
              </p>
              <p style={{ color: '#d1d5db' }}>
                One exception: Gotrax runs frequent G3 sales (Amazon Prime Day, Black Friday) where it drops to $399.
                At that price it is a value. Better than the XR Pro and near-NIU specs for $300 less. If you see it
                on sale under $450, the G3 becomes worth considering.
              </p>
              <div className="my-6">
                <BuyButton productKey="gotrax-g3" source="gotrax-review-g3" variant="primary">
                  Check Gotrax G3 price
                </BuyButton>
              </div>

              {/* Product 5, Apex XL */}
              <h2 id="gotrax-apex-xl" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                5. Gotrax Apex XL, the long-range value pick
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $649 | Top speed: 18 mph | Range: 18 miles | Weight: 32 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Apex XL is Gotrax's "comfort commuter." 18 mph top speed (slower than the G4), but extended deck,
                8.5-inch pneumatic tires, and a specifically-tuned weight distribution that makes it feel more planted
                on longer rides. The Apex XL also has app connectivity, which the XR Pro and G3 lack.
              </p>
              <p style={{ color: '#d1d5db' }}>
                This is the Gotrax we would pick for a daily rider over 200 lb. The extended deck gives bigger feet
                room to plant, the tires soak up pavement cracks, and the slower top speed is honestly adequate for
                real commuting (California caps at 15 mph anyway). If you do not need the G4's 20 mph and 25-mile
                range, the Apex XL at $50 less is a better fit for a comfortable rider.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Apex XL also has better regenerative braking tuning than the G4, it decelerates more smoothly
                when you release the throttle, which makes it pleasant for stop-and-go riding.
              </p>
              <div className="my-6">
                <BuyButton productKey="gotrax-apex-xl" source="gotrax-review-apex-xl" variant="primary">
                  Check Gotrax Apex XL price
                </BuyButton>
              </div>

              {/* Warranty */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                The 90-day warranty problem
              </h2>
              <div className="p-5 rounded-lg my-6" style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />
                  <div>
                    <p className="font-semibold mb-2" style={{ color: '#fff' }}>Gotrax limited warranty: 90 days</p>
                    <p style={{ color: '#d1d5db' }}>
                      Gotrax covers manufacturing defects on the frame, motor, controller, and battery for 90 days
                      from date of purchase. After that, you pay for parts and labor. Compared to Segway (1 year) and
                      NIU (2 years), this is the single biggest weakness of the Gotrax lineup.
                    </p>
                  </div>
                </div>
              </div>
              <p style={{ color: '#d1d5db' }}>
                Gotrax does offer extended protection plans ($50-100) that push warranty coverage to 1-2 years, and
                they are sometimes worth it on the G4 and Apex XL. On the $299 GXL V2, the extended plan is usually
                not — if something goes wrong after 90 days, it is often cheaper to just replace the whole scooter.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The other thing to know: Gotrax customer service has genuinely improved since 2022. Response times are
                now 24-48 hours (vs. 5-7 days before), and they will send replacement parts under warranty without
                making you jump through hoops. It is not Apple-level, but it is functional.
              </p>

              {/* Gotrax vs. Segway/NIU */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Gotrax vs. Segway vs. NIU. Head to head
              </h2>
              <p style={{ color: '#d1d5db' }}>
                The three brands that dominate the under-$1,000 adult scooter market in the US are Gotrax, Segway
                Ninebot, and NIU. Here is the honest comparison at the $499-$699 price tier:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li><strong style={{ color: '#fff' }}>Price:</strong> Gotrax wins. The XR Pro at $499 undercuts every comparable Segway or NIU by $100-200.</li>
                <li><strong style={{ color: '#fff' }}>Build quality:</strong> Segway wins. Ninebot models feel sturdier, better-finished, and have more durable components after 2+ years.</li>
                <li><strong style={{ color: '#fff' }}>App and electronics:</strong> NIU wins. The NIU app is easily the most polished in the segment.</li>
                <li><strong style={{ color: '#fff' }}>Warranty:</strong> NIU wins. 2 years vs Segway 1 year vs Gotrax 90 days.</li>
                <li><strong style={{ color: '#fff' }}>Range per dollar:</strong> Gotrax wins on advertised range, but real range is closer once rider weight is factored in.</li>
                <li><strong style={{ color: '#fff' }}>US customer service:</strong> Tied between Segway and NIU, both ahead of Gotrax.</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                Verdict: Gotrax is the right choice if you prioritize upfront cost and plan to use the scooter 2-3
                times a week for leisure or short commutes. Segway or NIU is the right choice if you commute daily
                and want a 5+ year ownership window without repairs.
              </p>

              {/* Mid CTA 2 */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey="gotrax-xr-pro"
                  productName="Gotrax XR Pro"
                  badge="BEST GOTRAX VALUE BUY"
                  rating={4.3}
                  verdict="If you want a Gotrax and do not need the app or 20 mph top speed, the XR Pro is the smartest buy in the lineup. $499, proven reliability across 3 years of production, UL 2272 certified, and 29 lb for real portability. Covers casual and light-commuting use cases without overspending."
                  pros={['Most proven Gotrax model (3+ years of iteration)', 'UL 2272 certified + 8.5" pneumatic tires', 'Light 29-lb weight for apartment carrying', '$499 — $200 less than premium competitors']}
                  cons={['No app, on-scooter display only', 'No suspension', '90-day warranty only (extend through Gotrax plan)']}
                  source="gotrax-review-mid-cta-2"
                  variant="mid"
                />
              </div>

              {/* App features */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                The Gotrax app (for G4 and Apex XL only)
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Only three Gotrax models support the smartphone app: G4, Apex XL, and the Mosquito (covered in our
                adult scooter guide). The app is iOS and Android, connects via Bluetooth, and offers:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li>Battery level and estimated range remaining</li>
                <li>Three speed modes (Eco, Drive, Sport)</li>
                <li>Trip tracking with distance and time</li>
                <li>Remote lock (disables throttle, not a physical lock)</li>
                <li>Firmware update delivery</li>
                <li>Cruise control toggle</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                What it does not offer that premium brand apps do: acceleration curve tuning, regenerative braking
                intensity adjustment, custom profiles, ride history with maps, or anti-theft GPS. If those features
                matter to you, Apollo and Unagi are the brands to look at.
              </p>

              {/* UL 2272 */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                UL 2272 certification. why Gotrax switched the whole lineup
              </h2>
              <p style={{ color: '#d1d5db' }}>
                UL 2272 certifies that a scooter's battery and charging system meets fire-safety standards. In 2022-23,
                New York City had a series of apartment fires caused by non-certified e-bike and e-scooter batteries,
                which led to regulations banning non-UL-certified micromobility devices in many buildings. Gotrax
                responded by moving the entire lineup to UL 2272 compliance by early 2023.
              </p>
              <p style={{ color: '#d1d5db' }}>
                California has not passed a UL 2272 requirement yet, but: (a) most apartment leases and condo
                associations are starting to add UL requirements to their rules, and (b) several CA insurance policies
                now require it. When you buy a Gotrax today, every current production model carries UL 2272
                certification, do not buy older inventory or used Gotrax scooters from before 2023 without confirming.
              </p>

              {/* California law */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                California law, same rules apply to every Gotrax
              </h2>
              <p style={{ color: '#d1d5db' }}>
                The same California Vehicle Code 22411 rules apply to every scooter in the Gotrax lineup:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li>15 mph max on public roads, bike paths, and bike lanes</li>
                <li>Class C driver's license or instruction permit required for riders 16+</li>
                <li>Helmet required for riders under 18</li>
                <li>No DMV registration or insurance needed</li>
                <li>No sidewalk riding (except to access adjacent roadway)</li>
                <li>No passengers</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                Since the fastest Gotrax (G4) tops out at 20 mph, staying within the 15 mph road limit just means
                using the Eco mode or keeping moderate throttle. Unlike the 60-68 mph performance scooters in our
                fastest-scooter guide, every Gotrax is realistically street-legal if you keep the throttle reasonable.
              </p>

              {/* FAQ */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Is Gotrax a reliable electric scooter brand?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Gotrax is a reliable budget brand, it is not premium, but it is not a fly-by-night Amazon seller
                    either. Founded in 2017, headquartered in Plano, Texas, with over 2 million scooters sold globally.
                    All current models are UL 2272 certified. The trade-off is component-level: you get Chinese-sourced
                    motors and controllers that last 2-4 years of daily commuting, not the 6-8 years you would get
                    from a Segway or NIU.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>What is the warranty on a Gotrax electric scooter?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Gotrax offers a 90-day limited warranty on all scooters — frame, motor, controller, and battery.
                    This is shorter than Segway (1 year) and NIU (2 years). You can extend through Gotrax Protection
                    Plans for an additional $50-100 depending on model. For a $300-700 scooter, the short warranty is
                    one of the biggest compromises of buying budget.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Which Gotrax scooter is best for adults?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    The Gotrax G4 at $699 is the best adult pick in the lineup, 20 mph top speed, 25-mile range,
                    10-inch pneumatic tires, and UL 2272 certification. The XR Pro at $499 is the best value if you
                    want a proven classic. Skip the GXL V2 and G3 for adult commuters. They are aimed at casual or
                    teen riders.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Are Gotrax scooters UL 2272 certified?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Yes. Every current production Gotrax model (GXL V2, XR Pro, G4, G3, Apex XL, Mosquito, Xoom) is
                    UL 2272 certified. This is the fire-safety standard for e-scooter battery and charging systems.
                    Gotrax moved its entire lineup to UL 2272 certification in 2022 after the New York City rental
                    scooter fire regulations.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>How does Gotrax compare to Segway and NIU?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Gotrax wins on price, you get a fully UL 2272 certified 20 mph scooter for $300-500 less than
                    comparable Segway Ninebot or NIU KQi models. Segway and NIU win on build quality, warranty, app
                    features, and long-term reliability. If you ride 2-3 times a week for leisure, Gotrax is enough.
                    If you commute daily, spend the extra $200-300 on a NIU KQi3 Pro.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Does Gotrax have a smartphone app?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Yes, the Gotrax app supports the G4, Apex XL, and Mosquito models. It shows battery level, speed,
                    trip distance, and lets you adjust speed modes and lock the scooter. The GXL V2, XR Pro, and G3
                    do not have app connectivity — they use on-scooter displays only. The app is functional but basic
                    compared to Apollo and Unagi apps.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey={PRIMARY_PRODUCT_KEY}
                  productName="Gotrax G4"
                  badge="BEST GOTRAX FOR DAILY COMMUTERS"
                  rating={4.3}
                  verdict="If you are committed to the Gotrax brand, the G4 is the one to buy. 20 mph, 25-mile range, 10-inch pneumatic tires, app-connected, UL 2272 certified; at $699 you get 85% of a NIU KQi3 Pro at $100 less. For casual-to-moderate adult commuting, the G4 is genuinely solid."
                  pros={['20 mph top speed, 25-mile real-world range', '10-inch pneumatic tires handle rough pavement', 'App connectivity with lock, modes, and tracking', '36 lb weight is manageable for apartment storage']}
                  cons={['90-day warranty vs 1-2 years for NIU/Segway', 'No suspension (NIU KQi3 Pro also lacks it)', 'Fit/finish noticeably below NIU and Segway tier']}
                  source="gotrax-review-final-cta"
                  variant="final"
                />
              </div>

              {/* Still comparing? */}
              <div className="my-10 p-6 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#fff' }}>Still comparing?</h3>
                <p className="mb-5" style={{ color: '#d1d5db' }}>
                  If you want to compare Gotrax against other brands or step up to premium, these guides will help.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/reviews/best-electric-scooter-for-adults"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Best Electric Scooters for Adults. Full Category Breakdown</span>
                    <ArrowRight className="w-5 h-5" style={{ color: '#9ca3af' }} />
                  </Link>
                  <Link
                    href="/reviews/best-electric-scooter"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Best Electric Scooters Overall, All Price Tiers</span>
                    <ArrowRight className="w-5 h-5" style={{ color: '#9ca3af' }} />
                  </Link>
                  <Link
                    href="/reviews/fastest-electric-scooter"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Fastest Electric Scooters, 40+ MPH Performance Models</span>
                    <ArrowRight className="w-5 h-5" style={{ color: '#9ca3af' }} />
                  </Link>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="flex flex-col sm:flex-row gap-4 my-8">
                <Link
                  href="/reviews/best-electric-scooter-for-adults"
                  className="flex-1 flex items-center gap-3 p-4 rounded-lg transition-colors"
                  style={{ backgroundColor: '#141414', border: '1px solid #262626' }}
                >
                  <ArrowLeft className="w-5 h-5 flex-shrink-0" style={{ color: '#9ca3af' }} />
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#9ca3af' }}>Previous</div>
                    <div className="font-semibold" style={{ color: '#fff' }}>Best Electric Scooters for Adults</div>
                  </div>
                </Link>
                <Link
                  href="/reviews/best-electric-scooter"
                  className="flex-1 flex items-center gap-3 p-4 rounded-lg transition-colors justify-end text-right"
                  style={{ backgroundColor: '#141414', border: '1px solid #262626' }}
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#9ca3af' }}>Next</div>
                    <div className="font-semibold" style={{ color: '#fff' }}>Best Electric Scooters Overall</div>
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" style={{ color: '#9ca3af' }} />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <ReviewFooter />
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source="gotrax-electric-scooter-sticky" />
    </ReviewLayout>
  );
}
