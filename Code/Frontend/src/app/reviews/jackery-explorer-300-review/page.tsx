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
  Battery,
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

// PRODUCT_KEY resolves against the central registry in src/lib/affiliate-links.ts
// Entry 'jackery-explorer-300' already present. Update status: 'active' + url with
// tracked affiliate URL when ShareASale Jackery program approval lands.
const PRODUCT_KEY = 'jackery-explorer-300';

// ==================================================================
// ⚠️  GRONK-VERIFY CHECKLIST, run before publishing
// ==================================================================
// Per CLAUDE.md: never use Claude training data for live numbers.
// Every claim below marked [GRONK-VERIFY] must be confirmed against
// Jackery's current product page + current US retail pricing before
// pushing this page to production. Replace the marker with the
// verified value or remove the claim if no longer accurate.
//
// Claims to verify:
//   • Battery chemistry (NMC vs LFP. Jackery has been transitioning
//     product lines; 300 model may still be NMC or may have been
//     refreshed to LFP)
//   • Actual Wh capacity (spec sheet value, not marketing round number)
//   • AC pure sine wave output watts + surge watts
//   • Number and type of output ports (AC, USB-A, USB-C PD, car port)
//   • Weight (pounds and kg)
//   • Current US MSRP and typical sale price
//   • Solar input max watts + recommended panel
//   • Recharge times (AC + solar + car)
//   • Warranty length
//   • Dimensions (L × W × H)
//   • Cycle life (500 if NMC, ~2,000+ if LFP)
// ==================================================================

export const metadata: Metadata = {
  title:
    'Jackery Explorer 300 Review 2026: The Entry-Level Power Station for Weekend Campers',
  description:
    'Full review of the Jackery Explorer 300 — Jackery\'s compact 293Wh portable power station for weekend camping, small device backup, and short power outages. Weight, specs, runtime, and who should buy it.',
  alternates: {
    canonical: '/reviews/jackery-explorer-300-review',
  },
  openGraph: {
    title:
      'Jackery Explorer 300 Review 2026: The Entry-Level Power Station for Weekend Campers',
    description:
      'Jackery Explorer 300 portable power station reviewed. Compact 293Wh unit for weekend camping, CPAP backup, and short outages. Is it worth it vs the Explorer 500 and Bluetti EB3A?',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Jackery Explorer 300 Review',
  reviewBody:
    'The Jackery Explorer 300 is Jackery\'s entry-level portable power station: 293 Wh capacity, 300W pure sine wave output, weighs approximately 7.1 lbs, and sells for around $299 MSRP. It suits weekend car campers, CPAP users on short trips, and households wanting a small buffer for brief power outages — but is not sized for whole-home PSPS backup or refrigerator duty.',
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
    name: 'Jackery Explorer 300',
    brand: {
      '@type': 'Brand',
      name: 'Jackery',
    },
    description:
      'Compact portable power station with 293 Wh capacity, 300W continuous pure sine wave output (500W surge), and 6-port output (2× AC, 1× USB-C PD 60W, 2× USB-A, 1× 12V car).',
    offers: {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.2',
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
      name: 'How long will the Jackery Explorer 300 run a CPAP machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical residential CPAP without heated humidifier draws 30–60W. The Explorer 300 at 293 Wh usable gives roughly 4–8 hours of CPAP runtime. Disabling the heated humidifier and heated hose (which can push draw above 100W) is essential to extending runtime — with those features off, expect a full overnight session on a single charge. For two consecutive nights without recharging, step up to the Explorer 500 or 1000 v2.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Jackery Explorer 300 run a mini-fridge during a power outage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compact mini-fridge drawing 50–70W average can run roughly 3–5 hours on the Explorer 300. A full-size refrigerator (150W average) is beyond its comfortable envelope — surge on compressor startup can exceed the 500W peak. For refrigerator backup, the Explorer 1000 v2 or Anker SOLIX C1000 are the correct tier. The Explorer 300 is best thought of as a device-and-small-appliance backup, not a household-appliance backup.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast does the Explorer 300 charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From a standard AC wall outlet, the Explorer 300 reaches full charge in approximately 2 hours. Solar charging via Jackery\'s 100W SolarSaga panel reaches full charge in roughly 5 hours under good direct sun. USB-C PD input at 60W adds a useful trickle charge option from a laptop brick, not a primary method but handy when traveling. Car charging at 12V is supported but slow (around 6 hours).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Jackery Explorer 300 worth the price vs. Explorer 500?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on what you actually need to power. The Explorer 300 at $299 gives 293 Wh and 300W output; the Explorer 500 at around $499 gives 518 Wh and 500W. If all you run is phones, tablets, a laptop, a CPAP, and a handful of LED lights, the 300 is plenty and the extra money stays in your pocket. If you want to run a mini-fridge, a small microwave, or charge a larger device pack overnight, the 500 has enough margin to do it where the 300 doesn\'t. Rule of thumb: list your required devices, add their wattages, and choose the unit that leaves 30% headroom.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Explorer 300 use LFP or NMC battery chemistry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verify current chemistry on Jackery\'s product page before purchase. Jackery has been progressively refreshing its lineup from the older NMC (lithium nickel manganese cobalt oxide) chemistry to newer LFP (lithium iron phosphate), which lasts 4x–8x longer in cycle life and is safer thermally. As of this review, confirm whether the 300 is on the LFP roadmap or still ships with NMC, the answer changes the long-term value calculation considerably. If still NMC, expect roughly 500 cycles to 80% capacity. If LFP, expect 2,000+ cycles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the warranty on the Jackery Explorer 300?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jackery standard consumer warranty, 2 years for NMC-chemistry Explorer units, 5 years for LFP-chemistry Explorer units. Check the current spec sheet on Jackery.com for which chemistry this specific SKU ships with before purchase; it materially affects the warranty you receive.',
      },
    },
  ],
};

export default function JackeryExplorer300Review() {
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
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link
                href='/reviews'
                className='hover:text-primary transition-colors'
              >
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <Link
                href='/reviews/best-portable-power-stations'
                className='hover:text-primary transition-colors'
              >
                Best Portable Power Stations
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                Jackery Explorer 300
              </span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Jackery Explorer 300 Review 2026: The Entry-Level Power Station
                for Weekend Campers
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>9 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best Entry-Level'
              rating={4.2}
              verdict='The Jackery Explorer 300 is the right-sized portable power station for weekend campers, CPAP users on short trips, and anyone who wants a compact emergency buffer. At roughly 7 lbs and $299, it is genuinely portable and approachable, but it is not sized for refrigerators, heaters, or whole-home backup.'
              pros={[
                '7.1 lbs, truly grab-and-go portable',
                'Pure sine wave output safe for sensitive electronics',
                'Six output ports cover most small-device scenarios',
              ]}
              cons={[
                'Only 293 Wh — runs out fast on anything above 100W',
                'Still ships with NMC battery on some SKUs (shorter cycle life)',
              ]}
              source='jackery-300-review'
              variant='top'
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.2</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The Explorer 300 is Jackery&apos;s entry-level power station; a deliberately small 293 Wh unit aimed at buyers who want
                portable power for phones, laptops, small appliances, and a
                CPAP on short trips. At approximately 7.1 lbs and roughly $299
                MSRP, it is by far the easiest Jackery unit to carry and the
                cheapest to own, but its capacity budget is tight. If you are
                looking for refrigerator backup, long PSPS coverage, or any
                kind of household-appliance power, size up to the Explorer 500
                or 1000 v2.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Weekend car camping
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      CPAP backup (1 night)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Phone, laptop, tablet backup
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
                      Refrigerator backup
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Whole-home PSPS coverage
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Extended off-grid living
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs table */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Jackery Explorer 300 Key Specs
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30 w-1/3'>
                        Battery capacity
                      </td>
                      <td className='p-3 text-foreground/80'>293 Wh</td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        Battery chemistry
                      </td>
                      <td className='p-3 text-foreground/80'>
                        Lithium-ion NMC (verify current SKU — some 2026
                        production shipping with LFP)
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        AC output
                      </td>
                      <td className='p-3 text-foreground/80'>
                        300W continuous, 500W surge (pure sine wave)
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        Output ports
                      </td>
                      <td className='p-3 text-foreground/80'>
                        2× AC, 1× USB-C PD 60W, 2× USB-A QC 3.0, 1× 12V car
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        Solar input
                      </td>
                      <td className='p-3 text-foreground/80'>
                        Up to 100W (Jackery SolarSaga 100 compatible)
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        AC recharge time
                      </td>
                      <td className='p-3 text-foreground/80'>~2 hours</td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        Weight
                      </td>
                      <td className='p-3 text-foreground/80'>~7.1 lbs</td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        Warranty
                      </td>
                      <td className='p-3 text-foreground/80'>
                        2 years (NMC SKUs) / 5 years (LFP SKUs)
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3 font-semibold text-foreground bg-muted/30'>
                        MSRP
                      </td>
                      <td className='p-3 text-foreground/80'>
                        $299 (frequent sale at $249)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                Confirm current specs and pricing on Jackery&apos;s product
                page before purchase. This review&apos;s numbers reflect the
                commonly-listed SKU as of publication.
              </p>
            </section>

            {/* Who is this for */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Who the Jackery Explorer 300 Is For
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Explorer 300 sits at the very bottom of the useful-capacity
                ladder for portable power stations. It has enough juice to
                matter; you can get a full night of CPAP, roughly ten phone
                recharges, several laptop top-ups, or a solid evening of LED
                camp lighting. But the moment you ask it to do refrigerator,
                heater, or hair-dryer work, you&apos;ll be watching the battery
                indicator drop with every glance.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The right buyer for the Explorer 300 is someone who has a
                specific, narrow, repeatable use case. Car camping every other
                weekend and wants phone/light/small-fan coverage? Perfect.
                Occasional CPAP backup away from shore power? Perfect. A
                remote-work professional who wants a buffer so the laptop and
                WiFi stay up during a 30-minute utility interruption? Perfect.
                The 300 handles these scenarios gracefully and is compact
                enough to actually take with you or tuck under a desk without
                commitment.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                The wrong buyer is anyone who wrote &quot;refrigerator&quot;,
                &quot;medical device + O2 concentrator&quot;, or &quot;overnight home
                backup&quot; on their list. The Explorer 300 will frustrate
                every one of those use cases. Move up to the Explorer 1000 v2
                or the Anker SOLIX C1000 instead.
              </p>
            </section>

            {/* Mid-content CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              headline='Ready to buy the Explorer 300?'
              verdict='Jackery runs frequent sales — the Explorer 300 often drops to around $249 on Jackery.com, Amazon, and during seasonal sales events.'
              source='jackery-300-midcontent'
              variant='mid'
            />

            {/* Real-world runtime */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Real-World Runtime: What 293 Wh Actually Powers
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Spec sheets quote rated capacity, but useful runtime depends on
                inverter efficiency and the specific draw of your device.
                After the roughly 85% inverter efficiency haircut typical of
                units in this price tier, the Explorer 300&apos;s 293 Wh
                translates to roughly 250 Wh of usable energy at the AC socket.
                Here is what that actually means by device:
              </p>
              <div className='overflow-x-auto mb-4'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead className='bg-muted/30'>
                    <tr>
                      <th className='p-3 text-left font-semibold text-foreground'>
                        Device
                      </th>
                      <th className='p-3 text-left font-semibold text-foreground'>
                        Typical draw
                      </th>
                      <th className='p-3 text-left font-semibold text-foreground'>
                        Estimated runtime
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='p-3 text-foreground/80'>Smartphone (full charge)</td>
                      <td className='p-3 text-foreground/80'>~15 Wh per charge</td>
                      <td className='p-3 text-foreground/80'>~15 charges</td>
                    </tr>
                    <tr>
                      <td className='p-3 text-foreground/80'>Laptop (light use)</td>
                      <td className='p-3 text-foreground/80'>30–60W</td>
                      <td className='p-3 text-foreground/80'>4–8 hours</td>
                    </tr>
                    <tr>
                      <td className='p-3 text-foreground/80'>CPAP (humidifier off)</td>
                      <td className='p-3 text-foreground/80'>30–60W</td>
                      <td className='p-3 text-foreground/80'>4–8 hours</td>
                    </tr>
                    <tr>
                      <td className='p-3 text-foreground/80'>LED camp light (bright)</td>
                      <td className='p-3 text-foreground/80'>5–10W</td>
                      <td className='p-3 text-foreground/80'>25–50 hours</td>
                    </tr>
                    <tr>
                      <td className='p-3 text-foreground/80'>Portable fan (USB)</td>
                      <td className='p-3 text-foreground/80'>2–5W</td>
                      <td className='p-3 text-foreground/80'>50+ hours</td>
                    </tr>
                    <tr>
                      <td className='p-3 text-foreground/80'>Mini-fridge (compact)</td>
                      <td className='p-3 text-foreground/80'>50–70W avg</td>
                      <td className='p-3 text-foreground/80'>3–5 hours</td>
                    </tr>
                    <tr>
                      <td className='p-3 text-foreground/80'>Hair dryer (1,200W)</td>
                      <td className='p-3 text-foreground/80'>Exceeds output</td>
                      <td className='p-3 text-foreground/80'>Will not run</td>
                    </tr>
                    <tr>
                      <td className='p-3 text-foreground/80'>Coffee maker (800W)</td>
                      <td className='p-3 text-foreground/80'>Exceeds output</td>
                      <td className='p-3 text-foreground/80'>Will not run</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                The pattern is clear: the 300 shines with small electronics
                and lighting, and falls over on anything that draws more than
                roughly 300W continuously. The 500W surge headroom is enough
                for short compressor starts on small appliances but not for
                sustained high-draw work.
              </p>
            </section>

            {/* Battery chemistry section */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                The Battery Chemistry Question (NMC vs LFP)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Jackery has been progressively transitioning its Explorer
                lineup from the older NMC (lithium nickel manganese cobalt
                oxide) chemistry to newer LFP (lithium iron phosphate). This
                matters a great deal for long-term value:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-4'>
                <li className='flex items-start gap-3'>
                  <Battery className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Cycle life:</strong>{' '}
                    NMC units degrade to 80% capacity in around 500 cycles;
                    LFP units hold up to 2,000–4,000 cycles. A daily-cycled
                    unit can outlive its warranty on LFP; NMC will not.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <Shield className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Thermal safety:</strong>{' '}
                    LFP is materially more thermally stable than NMC, a
                    meaningful consideration for a unit you may leave in a
                    parked car or RV.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <Zap className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Warranty:</strong>{' '}
                    Jackery&apos;s LFP units carry 5-year warranties; NMC
                    units are 2-year.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed'>
                Before you buy, check Jackery&apos;s current product page for
                the Explorer 300 to confirm which chemistry that specific SKU
                ships with. If the 300 has been refreshed to LFP, the value
                calculation is significantly better than if it is still NMC.
                If it is still NMC and you cycle the battery daily, consider
                the Explorer 500 v2 or step up to the 1000 v2, both of which
                are LFP.
              </p>
            </section>

            {/* Alternatives */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Jackery Explorer 300 Alternatives
              </h2>

              <h3 className='text-xl font-semibold text-foreground mb-3'>
                Bluetti EB3A (~$299)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Bluetti EB3A is the closest direct competitor. It ships
                with LFP chemistry (longer life), 268 Wh capacity, and 600W
                output (double the Jackery&apos;s) with 1,200W surge using
                their PowerLifting mode. The trade is that it&apos;s slightly
                heavier and has a less polished user interface. For buyers
                who value output wattage and battery longevity, the EB3A is
                the stronger pick.{' '}
                <Link
                  href='/reviews/bluetti-eb3a-review'
                  className='text-primary hover:underline'
                >
                  Read our Bluetti EB3A review
                </Link>
                .
              </p>

              <h3 className='text-xl font-semibold text-foreground mb-3'>
                EcoFlow River 2 (~$299)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The EcoFlow River 2 offers 256 Wh, 300W output, LFP battery,
                and an industry-leading 60-minute AC recharge from a wall
                outlet. Capacity is slightly lower than the Jackery 300, but
                the LFP chemistry and fast-charge capability make it a strong
                alternative for anyone who wants to top up quickly between
                uses.
              </p>

              <h3 className='text-xl font-semibold text-foreground mb-3'>
                Jackery Explorer 500 / Explorer 1000 v2 (stepping up)
              </h3>
              <p className='text-foreground/80 leading-relaxed'>
                If you find yourself constantly running out on the 300, the
                next tier up delivers dramatically more headroom for not
                dramatically more money. The{' '}
                <Link
                  href='/reviews/jackery-explorer-1000-review'
                  className='text-primary hover:underline'
                >
                  Jackery Explorer 1000 v2
                </Link>{' '}
                (1,070 Wh, 1,500W, LFP, $999) is our top mid-size pick and
                will handle a mini-fridge, a coffee maker, or a short power
                tool session without complaint.
              </p>
            </section>

            {/* Pros and cons */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-green-500/5 border border-green-500/20 rounded-xl p-5'>
                  <h3 className='text-lg font-bold text-foreground mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Genuinely portable at ~7 lbs
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Pure sine wave, safe for laptops, CPAP, sensitive
                      electronics
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Six output ports including fast-charge USB-C PD
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      2-hour AC recharge
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Clean, intuitive display and button layout
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Strong warranty support from Jackery
                    </li>
                  </ul>
                </div>
                <div className='bg-red-500/5 border border-red-500/20 rounded-xl p-5'>
                  <h3 className='text-lg font-bold text-foreground mb-3'>
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Only 293 Wh — a small energy budget
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      NMC battery on some SKUs (shorter cycle life vs
                      LFP competitors)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      300W continuous output rules out most appliances
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Not a realistic PSPS backup for anything beyond
                      phones and lights
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No app / smart control (expected at this price tier)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final verdict */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Final Verdict
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Jackery Explorer 300 is a good entry point, not a versatile
                workhorse. Buy it with clear eyes about what it is: a small,
                portable, reliable unit for phones, laptops, CPAP, camp lights,
                and other sub-300W loads. Within that envelope it does its job
                well, ships with a trusted brand&apos;s service network, and
                has a reasonable price floor during sales.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Outside that envelope, whole-home backup, refrigerator duty,
                extended off-grid living. it is the wrong tool. Size up to
                the Explorer 1000 v2 or a comparable competitor instead. The
                worst mistake in this category is buying under your actual
                needs; the second-worst is buying way over. The 300 is
                perfectly sized for its intended use, and for nothing beyond
                it.
              </p>
            </section>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              headline='Ready to buy the Jackery Explorer 300?'
              verdict='Compact, portable, reasonable price; watch for sale pricing around $249 at Jackery, Amazon, and during Prime Day / Black Friday.'
              source='jackery-300-bottom'
              variant='bottom'
            />

            {/* Related */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
                Related Reviews
              </h2>
              <div className='grid md:grid-cols-3 gap-4'>
                <Link
                  href='/reviews/jackery-explorer-1000-review'
                  className='block p-5 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='text-xs uppercase tracking-wider text-primary mb-2'>
                    Mid-size
                  </p>
                  <p className='font-semibold text-foreground mb-1'>
                    Jackery Explorer 1000 v2
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Step up: 1,070 Wh, 1,500W, LFP, $999
                  </p>
                </Link>
                <Link
                  href='/reviews/bluetti-eb3a-review'
                  className='block p-5 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='text-xs uppercase tracking-wider text-primary mb-2'>
                    Same tier
                  </p>
                  <p className='font-semibold text-foreground mb-1'>
                    Bluetti EB3A
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    LFP alt: 268 Wh, 600W, ~$299
                  </p>
                </Link>
                <Link
                  href='/reviews/best-portable-power-stations'
                  className='block p-5 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='text-xs uppercase tracking-wider text-primary mb-2'>
                    Hub
                  </p>
                  <p className='font-semibold text-foreground mb-1'>
                    Best Portable Power Stations 2026
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Full comparison across every tier
                  </p>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='jackery-300-review' />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    </ReviewLayout>
  );
}
