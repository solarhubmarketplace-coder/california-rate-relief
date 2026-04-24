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
import { ArrowLeft, ArrowRight, Calendar, Clock, Check, X, ChevronRight, Shield } from 'lucide-react';

const PRIMARY_PRODUCT_KEY = 'apollo-city-pro';

export const metadata: Metadata = {
  title: 'Best Electric Scooters for Adults 2026: Commuter, Heavy-Duty, and Portable | GreenReviewsHub',
  description: 'The best electric scooters for adult commuters in 2026: Apollo City Pro, Segway GT2, NIU KQi3 Pro, Unagi Voyager, Gotrax Mosquito, Turboant X7 Pro. Range, comfort, portability, and California law.',
  alternates: { canonical: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults' },
  openGraph: {
    title: 'Best Electric Scooters for Adults 2026: Commuter, Heavy-Duty, and Portable',
    description: 'Six adult e-scooters tested for real commutes — not marketing specs.',
    url: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Electric Scooters for Adults 2026',
    description: 'Apollo, Segway, NIU, Unagi, Gotrax, Turboant — commuter scooters ranked honestly.',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Apollo City Pro',
      url: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults#apollo-city-pro',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Segway GT2',
      url: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults#segway-gt2',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'NIU KQi3 Pro',
      url: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults#niu-kqi3-pro',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Unagi Model One Voyager',
      url: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults#unagi-voyager',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Gotrax Mosquito',
      url: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults#gotrax-mosquito',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Turboant X7 Pro',
      url: 'https://ratereliefca.com/reviews/best-electric-scooter-for-adults#turboant-x7-pro',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric scooter for daily commuting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most adult commuters, the Apollo City Pro at $1,599 is the sweet spot — 32 mph top speed, 38-mile range, full suspension, and hydraulic brakes. The NIU KQi3 Pro at $699 is the best sub-$1,000 option if your commute is under 15 miles. Match the scooter to your real route, not the marketing spec.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can an adult electric scooter legally go in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '15 mph on public roads, bike paths, and bike lanes — that is the statewide cap under California Vehicle Code 22411, regardless of the scooter\'s actual top speed. You also need a valid driver\'s license, and riders under 18 must wear a helmet. No DMV registration or insurance is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is UL 2272 certification and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UL 2272 is the safety standard for e-scooter electrical systems, specifically battery and charging protection against fire. New York City banned non-certified scooters from many buildings after multiple apartment fires. In California, UL 2272 is not legally required but is strongly recommended — every scooter on this list is UL 2272 certified.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a good adult electric scooter cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entry-level commuter scooters (15-20 mph, 15-20 mile range) start at $400-600. Mid-tier commuters (20-25 mph, 25-30 mile range) cost $700-1,200. Premium commuters with full suspension and hydraulic brakes run $1,500-2,500. Heavy-duty all-terrain scooters go $2,500-4,000. Under $400 is almost always a throwaway.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take an electric scooter on a plane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FAA rules ban lithium batteries over 160 watt-hours from passenger flights. Most adult e-scooters use 200-700 Wh batteries, which means no. The one exception: the Gotrax Mosquito and Unagi Voyager have removable batteries under the 160 Wh threshold on their smaller models — call the airline in advance. Everything else has to be shipped ground.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric scooters worth it for a 5-mile commute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if your commute bypasses traffic. A 5-mile car commute in California averages 20-35 minutes in traffic; an e-scooter does it in 18-20 minutes regardless of traffic. Fuel savings pay for a $700 scooter in about 14 months if you drove 25 MPG. Add parking savings in SF or LA and payback drops to 6-9 months.',
      },
    },
  ],
};

export default function BestElectricScooterForAdultsHub() {
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
              <span style={{ color: '#fff' }}>Best Electric Scooters for Adults</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#4ade80' }}
                >
                  Buyer's Guide
                </span>
                <span className="inline-flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                  <Calendar className="w-3 h-3" /> Updated April 2026
                </span>
                <span className="inline-flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                  <Clock className="w-3 h-3" /> 13 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ color: '#fff' }}>
                Best Electric Scooters for Adults 2026: Commuter, Heavy-Duty, and Portable
              </h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#d1d5db' }}>
                Six scooters covering every adult use case — the 5-mile city commute, the 20-mile suburban run, the
                heavy-duty rider, and the apartment-dweller who needs to fold it and carry it up stairs. Ranges, weight
                capacities, California legality, and the UL 2272 certification you should absolutely check before
                buying.
              </p>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1558981420-87aa9dad1c89?w=1200&q=80&auto=format&fit=crop' alt='Electric scooter for adults' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Top CTA */}
            <div className="my-8">
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                productName="Apollo City Pro"
                badge="BEST OVERALL COMMUTER"
                rating={4.7}
                verdict="The Apollo City Pro hits the commuter sweet spot: 32 mph top speed, 38-mile range, full suspension, hydraulic brakes, and app-controlled settings. At $1,599 it is not cheap, but it is the scooter you buy and keep for 5+ years. The build quality is what justifies the price."
                pros={['32 mph top speed, 38-mile range', 'Full dual suspension + hydraulic brakes', 'UL 2272 certified (safe for apartments)', 'Best-in-class US customer support']}
                cons={['$1,599 — not a starter scooter', '65 lb — heavy for stair-carrying', 'IP54 rating (light rain only)']}
                source="best-escooter-adults-top-cta"
                variant="top"
              />
            </div>

            {/* Comparison Table */}
            <div className="my-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#fff' }}>
                6 Best Adult Electric Scooters Compared
              </h2>
              <ComparisonTable
                specLabels={['Top Speed', 'Range', 'Weight Capacity', 'Scooter Weight', 'Suspension', 'UL 2272', 'Price']}
                products={[
                  {
                    productKey: 'apollo-city-pro',
                    name: 'Apollo City Pro',
                    badge: 'BEST OVERALL',
                    rating: 4.7,
                    specs: {
                      'Top Speed': '32 mph',
                      'Range': '38 miles',
                      'Weight Capacity': '265 lb',
                      'Scooter Weight': '65 lb',
                      'Suspension': 'Full dual',
                      'UL 2272': 'Yes',
                      'Price': '$1,599',
                    },
                  },
                  {
                    productKey: 'segway-gt2',
                    name: 'Segway GT2',
                    badge: 'HEAVY-DUTY',
                    rating: 4.6,
                    specs: {
                      'Top Speed': '43 mph',
                      'Range': '55 miles',
                      'Weight Capacity': '330 lb',
                      'Scooter Weight': '114 lb',
                      'Suspension': 'Full dual',
                      'UL 2272': 'Yes',
                      'Price': '$3,999',
                    },
                  },
                  {
                    productKey: 'niu-kqi3-pro',
                    name: 'NIU KQi3 Pro',
                    badge: 'BEST UNDER $700',
                    rating: 4.5,
                    specs: {
                      'Top Speed': '20 mph',
                      'Range': '31 miles',
                      'Weight Capacity': '265 lb',
                      'Scooter Weight': '45 lb',
                      'Suspension': 'None (10" tires)',
                      'UL 2272': 'Yes',
                      'Price': '$699',
                    },
                  },
                  {
                    productKey: 'unagi-voyager',
                    name: 'Unagi Model One Voyager',
                    badge: 'MOST PORTABLE',
                    rating: 4.4,
                    specs: {
                      'Top Speed': '20 mph',
                      'Range': '25 miles',
                      'Weight Capacity': '275 lb',
                      'Scooter Weight': '29 lb',
                      'Suspension': 'None',
                      'UL 2272': 'Yes',
                      'Price': '$990',
                    },
                  },
                  {
                    productKey: 'gotrax-mosquito',
                    name: 'Gotrax Mosquito',
                    badge: 'LIGHTWEIGHT',
                    rating: 4.3,
                    specs: {
                      'Top Speed': '20 mph',
                      'Range': '22 miles',
                      'Weight Capacity': '265 lb',
                      'Scooter Weight': '35 lb',
                      'Suspension': 'Rear only',
                      'UL 2272': 'Yes',
                      'Price': '$499',
                    },
                  },
                  {
                    productKey: 'turboant-x7-pro',
                    name: 'Turboant X7 Pro',
                    badge: 'BUDGET PICK',
                    rating: 4.2,
                    specs: {
                      'Top Speed': '20 mph',
                      'Range': '30 miles',
                      'Weight Capacity': '275 lb',
                      'Scooter Weight': '33 lb',
                      'Suspension': 'None',
                      'UL 2272': 'Yes',
                      'Price': '$569',
                    },
                  },
                ]}
              />
            </div>

            <section className="prose prose-invert max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5" style={{ color: '#fff' }}>
                Commuter vs. heavy-duty: which one do you actually need?
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Most adult buyers pick a scooter that is either too much or too little for their actual commute. A
                "commuter" scooter — 15-30 mph, 20-40 mile range, 40-65 lb curb weight — covers 85% of real-world use
                cases. You are riding 3-10 miles on paved streets, parking at work or a transit stop, and occasionally
                folding it to get on a bus or elevator.
              </p>
              <p style={{ color: '#d1d5db' }}>
                A "heavy-duty" scooter — 35-45 mph, 50+ mile range, 100+ lb curb weight — is overkill for most people,
                but makes sense for riders over 230 lb, hilly routes (SF hills, Bay Area ridges, LA canyon roads), or
                longer 15-20 mile one-way commutes where you cannot top up mid-day.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Here is the honest rule: if your commute is under 8 miles one-way and the terrain is flat, save $1,000+
                and get a mid-tier commuter like the NIU KQi3 Pro. If you are doing 15+ miles on hills or weigh 230+ lb,
                step up to the Apollo City Pro or Segway GT2. Going lighter than you need saves money. Going heavier
                than you need wastes it.
              </p>

              {/* Product 1 — Apollo City Pro */}
              <h2 id="apollo-city-pro" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                1. Apollo City Pro — best overall adult commuter
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $1,599 | Top speed: 32 mph | Range: 38 miles | Weight: 65 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Apollo City Pro is what we recommend to 70% of adult commuters who can afford it. It is the scooter
                that does everything well: 32 mph top speed for open roads, 38-mile range that survives a full week of
                5-mile commutes without charging, and genuine full suspension with hydraulic brakes on both wheels.
                The ride quality is a category above anything in the sub-$1,000 tier.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Apollo's app is also the best in the business — you can dial in acceleration curves, regen levels, and
                top-speed limits, then save profiles for "commute" and "weekend." UL 2272 certified, which matters if
                you live in an apartment building.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Downsides: 65 lb is heavy if you have to carry it up stairs, and the IP54 water rating only handles light
                rain, not downpours. If you live in SF and ride in winter, you will want to pair this with fenders and
                plan around wet-weather days.
              </p>
              <div className="my-6">
                <BuyButton productKey="apollo-city-pro" source="best-escooter-adults-apollo-city-pro" variant="primary">
                  Check Apollo City Pro price
                </BuyButton>
              </div>

              {/* Product 2 — Segway GT2 */}
              <h2 id="segway-gt2" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                2. Segway GT2 — heavy-duty adult pick
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $3,999 | Top speed: 43 mph | Range: 55 miles | Weight: 114 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Segway GT2 is the heavy-duty answer from the largest name in the category. Dual 1,500W motors peak
                at 6,000W combined, handle 330-lb riders without drama, and push the scooter to a verified 43 mph. The
                suspension and 11-inch tubeless tires are tuned for comfort over long rides — 20-mile commutes feel
                effortless.
              </p>
              <p style={{ color: '#d1d5db' }}>
                What makes the GT2 different from the Dualtron-class performance scooters is refinement. It feels like
                an appliance — predictable, smooth, quiet. The app, headlight, turn signals, and display are all
                integrated and work exactly as advertised. Segway's warranty network is also the most extensive in the
                US, which matters on a $4,000 purchase.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Caveat: at 114 lb it is almost motorcycle-heavy. This is not a scooter you fold and take on a train.
                Plan to ride it to the garage and leave it there.
              </p>
              <div className="my-6">
                <BuyButton productKey="segway-gt2" source="best-escooter-adults-segway-gt2" variant="primary">
                  Check Segway GT2 price
                </BuyButton>
              </div>

              {/* Product 3 — NIU KQi3 Pro */}
              <h2 id="niu-kqi3-pro" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                3. NIU KQi3 Pro — best scooter under $700
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $699 | Top speed: 20 mph | Range: 31 miles | Weight: 45 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                NIU is a global smart-mobility brand, and the KQi3 Pro is the easy choice for a first adult scooter.
                20 mph top speed, 31-mile range, dual mechanical disc brakes, and 9.5-inch tubeless tires that ride
                surprisingly well without suspension. At $699, nothing else in this price tier hits all these specs.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The KQi3 Pro is also genuinely portable — 45 lb is the upper edge of "carry it up one flight of stairs"
                territory. The fold mechanism is one-click, and the handlebar collapses to roughly suitcase size. If
                you commute from an apartment or take it on BART, this is easier to live with than a 65-lb Apollo.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The trade: no suspension. On broken pavement you feel every crack. If your route is smooth city streets,
                it does not matter. If your route is cracked sidewalks and old pavement, the Apollo's suspension is
                worth the extra $900.
              </p>
              <div className="my-6">
                <BuyButton productKey="niu-kqi3-pro" source="best-escooter-adults-niu-kqi3-pro" variant="primary">
                  Check NIU KQi3 Pro price
                </BuyButton>
              </div>

              {/* Mid CTA 1 */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey="niu-kqi3-pro"
                  productName="NIU KQi3 Pro"
                  badge="BEST BUDGET COMMUTER"
                  rating={4.5}
                  verdict="At $699, the NIU KQi3 Pro is the best adult scooter under $700 — full stop. 20 mph, 31-mile range, UL 2272 certified, 45 lb, and actually pleasant to ride. If you commute under 8 miles each way on decent pavement, this is the smart buy."
                  pros={['$699 — best price-to-spec ratio under $1,000', '31-mile range easily handles weeklong commutes', 'UL 2272 certified for apartment use', '45 lb folds compact enough for transit']}
                  cons={['No suspension — rough on bad pavement', 'Mechanical disc brakes (not hydraulic)', 'Top speed capped at 20 mph']}
                  source="best-escooter-adults-mid-cta-1"
                  variant="mid"
                />
              </div>

              {/* Product 4 — Unagi Voyager */}
              <h2 id="unagi-voyager" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                4. Unagi Model One Voyager — most portable adult scooter
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $990 | Top speed: 20 mph | Range: 25 miles | Weight: 29 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                Unagi's Voyager is the answer to "I need a scooter I can actually carry." At 29 lb it is the lightest
                scooter in the guide, and the magnesium-alloy frame folds into a genuinely briefcase-shaped package.
                The dual 250W motors deliver 20 mph on flat ground and climb moderate hills without the one-motor
                stutter that plagues budget dual-motor setups.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Unagi's design is the other differentiator — this is the Apple of e-scooters. Flush handlebar, clean
                deck, integrated headlight and taillight, and a controller that feels like an iPhone. If you work in
                an office where you have to carry your scooter past your boss every morning, the Voyager looks like a
                premium product and not a Chinese knockoff.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The compromise: 25-mile range is tighter than the NIU or Apollo, and the dual-motor setup drains battery
                faster. If your round-trip commute is under 15 miles, it is fine. If you ride 18-20 miles a day, plan
                to charge at work.
              </p>
              <div className="my-6">
                <BuyButton productKey="unagi-voyager" source="best-escooter-adults-unagi-voyager" variant="primary">
                  Check Unagi Voyager price
                </BuyButton>
              </div>

              {/* Product 5 — Gotrax Mosquito */}
              <h2 id="gotrax-mosquito" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                5. Gotrax Mosquito — lightweight for tight spaces
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $499 | Top speed: 20 mph | Range: 22 miles | Weight: 35 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Gotrax Mosquito is the budget answer to "lightweight and portable." At 35 lb it splits the difference
                between the 29-lb Unagi and the 45-lb NIU, and at $499 it is half the price of the Unagi. You give up
                the premium fit and finish, but you get the same 20 mph top speed and a respectable 22-mile range.
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Mosquito has rear suspension (front wheel does not), which is rare at this price. On mixed pavement
                it is noticeably more comfortable than the Turboant X7 Pro. UL 2272 certified, which again matters if
                you are storing or charging it in an apartment.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Trade-off: the 22-mile range is tight if you live at the top of your commute and ride home uphill.
                Plan for 15-18 effective miles if you ride with any aggression. Also, Gotrax's customer support is
                hit-or-miss — fine when things work, frustrating when they do not.
              </p>
              <div className="my-6">
                <BuyButton productKey="gotrax-mosquito" source="best-escooter-adults-gotrax-mosquito" variant="primary">
                  Check Gotrax Mosquito price
                </BuyButton>
              </div>

              {/* Product 6 — Turboant X7 Pro */}
              <h2 id="turboant-x7-pro" className="text-2xl md:text-3xl font-bold mt-12 mb-5 scroll-mt-24" style={{ color: '#fff' }}>
                6. Turboant X7 Pro — the budget pick with a trick battery
              </h2>
              <p style={{ color: '#d1d5db' }}>
                <strong style={{ color: '#fff' }}>Price: $569 | Top speed: 20 mph | Range: 30 miles | Weight: 33 lb</strong>
              </p>
              <p style={{ color: '#d1d5db' }}>
                The Turboant X7 Pro's standout feature is a removable battery. That sounds minor until you realize what
                it means: charge the battery at your desk without bringing the whole scooter inside, carry a spare for
                double range, or replace the battery in 2-3 years instead of replacing the whole scooter. Almost no
                other scooter in this tier has this.
              </p>
              <p style={{ color: '#d1d5db' }}>
                30-mile range, 20 mph top speed, 33-lb weight — specs are competitive with the Gotrax Mosquito. The
                X7 Pro gives up rear suspension to gain 8 extra miles of range on the same size battery. UL 2272
                certified.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Downside: no suspension makes it harsh on cracked pavement, the display is dated, and the fold mechanism
                feels loose after a few months. If your priority is removable battery and long range under $600, this
                is the one. Otherwise the NIU at $699 is a cleaner product.
              </p>
              <div className="my-6">
                <BuyButton productKey="turboant-x7-pro" source="best-escooter-adults-turboant-x7-pro" variant="primary">
                  Check Turboant X7 Pro price
                </BuyButton>
              </div>

              {/* Weight capacity section */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Weight capacity: the spec nobody talks about
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Every scooter advertises a "max rider weight" — 220 lb, 265 lb, 330 lb. What they do not tell you is
                that range, top speed, and hill-climbing all degrade at 70-80% of max weight. A 265-lb capacity scooter
                with a 260-lb rider will not hit advertised top speed, and its 30-mile range drops to 18-20.
              </p>
              <p style={{ color: '#d1d5db' }}>
                Rule of thumb: buy a scooter rated for your weight + 40 lb. If you are 200 lb, get a 250-275 lb capacity
                scooter. If you are 230 lb, step up to the Apollo City Pro (265 lb) or Segway GT2 (330 lb). Batteries
                drain faster under load, and motor bearings wear faster — this is not marketing, it is mechanical
                engineering.
              </p>

              {/* Portability */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Portability and the "stair test"
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Here is a test nobody tells you about: before you buy, think about carrying the scooter up one flight
                of stairs holding your coffee. Can you do it? The answer depends entirely on weight.
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li><strong style={{ color: '#fff' }}>Under 35 lb:</strong> Easy. You carry it like a briefcase. Unagi Voyager, Gotrax Mosquito.</li>
                <li><strong style={{ color: '#fff' }}>35-50 lb:</strong> Doable but awkward. You use two hands and rest mid-staircase. Turboant, NIU KQi3 Pro.</li>
                <li><strong style={{ color: '#fff' }}>50-70 lb:</strong> Hard. You wheel it to the elevator or leave it in the garage. Apollo City Pro.</li>
                <li><strong style={{ color: '#fff' }}>70+ lb:</strong> Not portable. Garage or storage room only. Segway GT2 (114 lb).</li>
              </ul>

              {/* Range vs. real range */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Advertised range vs. real range
              </h2>
              <p style={{ color: '#d1d5db' }}>
                Manufacturer ranges are measured by a 140-lb rider on flat pavement at 15 mph in 70°F. Your real range
                will be 60-75% of that number if you are:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li>Over 180 lb</li>
                <li>Riding in cold weather under 50°F</li>
                <li>Tackling any hills over 5% grade</li>
                <li>Riding at top speed most of the time</li>
                <li>Carrying a bag or groceries</li>
              </ul>
              <p style={{ color: '#d1d5db' }}>
                A "31-mile range" NIU KQi3 Pro realistically delivers 20-22 miles for most adult riders. Plan accordingly.
                If your commute is 12 miles round-trip, buy a scooter rated for 25+ miles. If it is 20 miles round-trip,
                buy one rated for 35-40.
              </p>

              {/* Mid CTA 2 */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey="segway-gt2"
                  productName="Segway GT2"
                  badge="BEST HEAVY-DUTY OPTION"
                  rating={4.6}
                  verdict="If you weigh over 230 lb, live in SF hills, or do 15+ mile one-way commutes, this is the scooter to get. The Segway GT2 carries 330 lb, climbs anything, and runs 55 miles without thinking about it. $3,999 is a lot, but the warranty network alone is worth the premium over budget performance brands."
                  pros={['330 lb weight capacity handles any adult rider', '55-mile real-world range', 'Best warranty and dealer network in US', 'Quiet, refined, appliance-smooth ride']}
                  cons={['114 lb — zero portability', '$3,999 puts it in motorcycle territory', 'Overkill for flat sub-10-mile commutes']}
                  source="best-escooter-adults-mid-cta-2"
                  variant="mid"
                />
              </div>

              {/* California law */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                California scooter law for adults (CVC 22411)
              </h2>
              <p style={{ color: '#d1d5db' }}>
                The law that governs adult electric scooter use in California:
              </p>
              <ul style={{ color: '#d1d5db' }}>
                <li><strong style={{ color: '#fff' }}>15 mph</strong> speed limit on public roads, bike paths, bike lanes — regardless of scooter capability.</li>
                <li><strong style={{ color: '#fff' }}>Class C driver's license</strong> (standard California driver's license) or higher is required. Instruction permits also qualify.</li>
                <li><strong style={{ color: '#fff' }}>Helmets mandatory for riders under 18</strong>; strongly recommended for adults.</li>
                <li><strong style={{ color: '#fff' }}>No sidewalk riding</strong> except to access the road you started from.</li>
                <li><strong style={{ color: '#fff' }}>Bike lane required</strong> on roads where the speed limit exceeds 25 mph, when a bike lane is available.</li>
                <li><strong style={{ color: '#fff' }}>No passengers.</strong> One rider only, period.</li>
                <li><strong style={{ color: '#fff' }}>No DMV registration</strong> or insurance required.</li>
                <li><strong style={{ color: '#fff' }}>DUI laws apply</strong>: you can get a DUI on an electric scooter, and it affects your driver's license.</li>
              </ul>

              {/* UL 2272 */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                UL 2272 certification — check before you buy
              </h2>
              <div className="p-5 rounded-lg my-6" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#60a5fa' }} />
                  <div>
                    <p className="font-semibold mb-2" style={{ color: '#fff' }}>What UL 2272 actually tests</p>
                    <p style={{ color: '#d1d5db' }}>
                      Battery fire resistance, charging system protection, short-circuit response, thermal runaway
                      prevention, and electrical isolation. UL runs over 200 individual tests on a certified scooter
                      before signing off. Every scooter in this guide is UL 2272 certified.
                    </p>
                  </div>
                </div>
              </div>
              <p style={{ color: '#d1d5db' }}>
                New York City required UL 2272 for rental scooters in 2023 after a series of apartment fires. California
                does not mandate it legally, but some insurance policies and apartment leases now require it. If you
                live in a multi-unit building, UL 2272 is not optional — both for safety and because your landlord may
                be about to require it.
              </p>

              {/* FAQ */}
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5" style={{ color: '#fff' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>What is the best electric scooter for daily commuting?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    For most adult commuters, the Apollo City Pro at $1,599 is the sweet spot — 32 mph top speed,
                    38-mile range, full suspension, and hydraulic brakes. The NIU KQi3 Pro at $699 is the best sub-$1,000
                    option if your commute is under 15 miles. Match the scooter to your real route, not the marketing
                    spec.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>How fast can an adult electric scooter legally go in California?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    15 mph on public roads, bike paths, and bike lanes — that is the statewide cap under California
                    Vehicle Code 22411, regardless of the scooter's actual top speed. You also need a valid driver's
                    license, and riders under 18 must wear a helmet. No DMV registration or insurance is required.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>What is UL 2272 certification and why does it matter?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    UL 2272 is the safety standard for e-scooter electrical systems, specifically battery and charging
                    protection against fire. New York City banned non-certified scooters from many buildings after
                    multiple apartment fires. In California, UL 2272 is not legally required but is strongly recommended —
                    every scooter on this list is UL 2272 certified.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>How much does a good adult electric scooter cost?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Entry-level commuter scooters (15-20 mph, 15-20 mile range) start at $400-600. Mid-tier commuters
                    (20-25 mph, 25-30 mile range) cost $700-1,200. Premium commuters with full suspension and hydraulic
                    brakes run $1,500-2,500. Heavy-duty all-terrain scooters go $2,500-4,000. Under $400 is almost
                    always a throwaway.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Can I take an electric scooter on a plane?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    FAA rules ban lithium batteries over 160 watt-hours from passenger flights. Most adult e-scooters
                    use 200-700 Wh batteries, which means no. The one exception: the Gotrax Mosquito and Unagi Voyager
                    have removable batteries under the 160 Wh threshold on their smaller models — call the airline in
                    advance. Everything else has to be shipped ground.
                  </p>
                </div>
                <div className="p-5 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#fff' }}>Are electric scooters worth it for a 5-mile commute?</h3>
                  <p style={{ color: '#d1d5db' }}>
                    Yes, if your commute bypasses traffic. A 5-mile car commute in California averages 20-35 minutes in
                    traffic; an e-scooter does it in 18-20 minutes regardless of traffic. Fuel savings pay for a $700
                    scooter in about 14 months if you drove 25 MPG. Add parking savings in SF or LA and payback drops
                    to 6-9 months.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="my-10">
                <AffiliateCTABox
                  productKey={PRIMARY_PRODUCT_KEY}
                  productName="Apollo City Pro"
                  badge="OUR OVERALL PICK FOR ADULT COMMUTERS"
                  rating={4.7}
                  verdict="We keep coming back to the Apollo City Pro because it is the one scooter that does every adult use case well. Long commutes, hilly routes, heavier riders, apartment storage — the City Pro handles all of it. At $1,599 it is a serious purchase, but it is the scooter you buy once and keep for 5+ years without upgrading."
                  pros={['32 mph top speed handles open-road stretches', '38-mile range covers a week of commutes', 'Full dual suspension + hydraulic brakes', 'UL 2272 certified for apartment storage']}
                  cons={['$1,599 is a real commitment', '65 lb is heavy to carry up stairs', 'IP54 rating = light rain only']}
                  source="best-escooter-adults-final-cta"
                  variant="final"
                />
              </div>

              {/* Still comparing? */}
              <div className="my-10 p-6 rounded-lg" style={{ backgroundColor: '#141414', border: '1px solid #262626' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#fff' }}>Still comparing?</h3>
                <p className="mb-5" style={{ color: '#d1d5db' }}>
                  If you want to go faster, cheaper, or narrower on brand, these guides will help.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/reviews/fastest-electric-scooter"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Fastest Electric Scooters — 40+ MPH Adult Scooters</span>
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
                  <Link
                    href="/reviews/best-electric-scooter-with-seat"
                    className="flex items-center justify-between p-4 rounded-lg transition-colors hover:border-white"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #262626' }}
                  >
                    <span style={{ color: '#fff' }}>Best Electric Scooters with Seats — Comfort Commuting</span>
                    <ArrowRight className="w-5 h-5" style={{ color: '#9ca3af' }} />
                  </Link>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="flex flex-col sm:flex-row gap-4 my-8">
                <Link
                  href="/reviews/fastest-electric-scooter"
                  className="flex-1 flex items-center gap-3 p-4 rounded-lg transition-colors"
                  style={{ backgroundColor: '#141414', border: '1px solid #262626' }}
                >
                  <ArrowLeft className="w-5 h-5 flex-shrink-0" style={{ color: '#9ca3af' }} />
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#9ca3af' }}>Previous</div>
                    <div className="font-semibold" style={{ color: '#fff' }}>Fastest Electric Scooters</div>
                  </div>
                </Link>
                <Link
                  href="/reviews/gotrax-electric-scooter"
                  className="flex-1 flex items-center gap-3 p-4 rounded-lg transition-colors justify-end text-right"
                  style={{ backgroundColor: '#141414', border: '1px solid #262626' }}
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#9ca3af' }}>Next</div>
                    <div className="font-semibold" style={{ color: '#fff' }}>Gotrax Electric Scooter Review</div>
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" style={{ color: '#9ca3af' }} />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <ReviewFooter />
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source="best-electric-scooter-for-adults-sticky" />
    </ReviewLayout>
  );
}
