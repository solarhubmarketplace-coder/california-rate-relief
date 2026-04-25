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
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
  Flame,
} from 'lucide-react';

const PRODUCT_KEY = 'noritz-tankless-water-heater';

export const metadata: Metadata = {
  title:
    'Noritz Tankless Water Heater Review 2026: NRC, EZ Series, and CB Combi Compared',
  description:
    'In-depth Noritz tankless water heater review covering the NRC1111-DV indoor condensing ($1,600), EZTR75 tank-replacement model ($1,400), and CB199 combi ($3,500). Japanese engineering, 0.95-0.97 UEF, 12-year heat exchanger warranty, California SoCalGas rebates.',
  alternates: {
    canonical: '/reviews/noritz-tankless-water-heater-review',
  },
  openGraph: {
    title:
      'Noritz Tankless Water Heater Review 2026: NRC, EZ Series, and CB Combi Compared',
    description:
      'Noritz invented tankless. This review breaks down the NRC, EZ, and CB lines, efficiency, warranty, California rebates, and who should actually buy.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Noritz Tankless Water Heater Review',
  reviewBody:
    'Noritz tankless water heaters offer Japanese engineering pedigree, condensing efficiency of 0.95-0.97 UEF, a 12-year heat exchanger warranty, and a unique EZ Series designed for simple tank-to-tankless conversion without gas line upsizing. The NRC1111-DV indoor condensing ($1,600), EZTR75 ($1,400), and CB199 combi ($3,500) cover most California residential use cases.',
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
    name: 'Noritz Tankless Water Heater',
    brand: {
      '@type': 'Brand',
      name: 'Noritz',
    },
    description:
      'Japanese-engineered tankless water heaters including NRC indoor condensing, EZ Series tank-replacement, and CB Combi heating + hot water lines.',
    offers: {
      '@type': 'Offer',
      price: '1600',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.5',
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
      name: 'How does Noritz compare to Rinnai and Navien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All three are top-tier Japanese/Korean tankless brands. Rinnai has the broadest contractor support and service network in California. Navien leads in condensing efficiency (0.97 UEF on the NPE-A2). Noritz offers the longest heat exchanger warranty (12 years on condensing models, 15 years on commercial), the strongest tank-to-tankless retrofit story via the EZ Series (designed to bolt in without gas line upgrades), and generally the deepest engineering lineage (Noritz invented tankless water heating in 1951).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Noritz EZ Series and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EZ Series (EZTR40 and EZTR75) is engineered specifically as a drop-in replacement for 40-gallon and 75-gallon tank water heaters. Unlike most tankless units that require a 3/4" gas line upgrade, the EZTR75 runs on the existing 1/2" gas line used by tank heaters in most homes. It also uses existing vent pipe dimensions. For retrofits, this cuts $500-$1,500 off the typical install cost and reduces the conversion timeline from 2-3 days to a single day. Unique in the tankless market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Noritz eligible for California SoCalGas rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most Noritz condensing models (NRC series, CB Combi) meet the CEE Advanced Tier efficiency threshold and qualify for SoCalGas rebates of $200-$700 depending on the model and current program year. The federal 25C tax credit also applies — 30% of cost up to $600 per year for qualifying gas tankless units through 2032. Combining both incentives typically nets $800-$1,200 in savings on a Noritz condensing install.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is the Noritz warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Residential Noritz models carry a 12-year heat exchanger warranty (condensing models), 10-year heat exchanger warranty (non-condensing), 5-year parts warranty, and 1-year labor warranty. Commercial installations extend to a 15-year heat exchanger warranty. This is among the longest in the tankless industry and covers the typical failure point (heat exchanger corrosion from scale or acid condensate).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Noritz make outdoor-rated tankless water heaters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The NR series includes outdoor-rated non-condensing models (NR501-OD, NR981-OD) that mount on an exterior wall, ideal for California homes with mild climates where interior space is at a premium. Outdoor installation simplifies venting (no stainless or PVC vent pipe needed) and frees interior square footage. Outdoor models are not rated for freezing climates, so they are essentially a California/Arizona/Texas/Florida product.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Noritz CB Combi and who is it for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The CB199 and CB180 are combi units — they provide both domestic hot water and hydronic space heating from a single appliance. For California homes with hydronic radiant floor heating or hot-water baseboard systems, a combi replaces two separate appliances (water heater plus boiler) with one, saving space and install cost. Output is 180,000-199,000 Btu/hr with 0.95 UEF. Install cost runs $4,500-$6,500 for a condensing combi retrofit, but eliminates a separate boiler ($3,000-$5,000) from the equation.',
      },
    },
  ],
};

export default function NoritzTanklessReview() {
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
                href='/reviews/best-tankless-water-heater'
                className='hover:text-primary transition-colors'
              >
                Tankless Water Heaters
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>Noritz</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Noritz Tankless Water Heater Review 2026: NRC, EZ Series, and
                CB Combi Compared
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>13 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best for Retrofits'
              rating={4.5}
              verdict='Noritz brings 70+ years of Japanese engineering pedigree (they invented tankless in 1951), the longest heat exchanger warranty in the category, and a unique EZ Series that drops into existing tank installations without gas line upsizing.'
              pros={[
                '12-year heat exchanger warranty',
                'EZ Series fits existing 1/2" gas line',
                'Condensing UEF 0.95-0.97',
              ]}
              cons={[
                'Smaller CA contractor network than Rinnai',
                'Fewer DIY parts at big-box stores',
              ]}
              source='noritz-review'
              variant='top'
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.5</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                Noritz is the quiet veteran of the tankless category, the
                Japanese company that literally invented tankless water
                heating in 1951 and still makes some of the best-engineered
                units you can buy. The NRC1111-DV ($1,600) is a solid indoor
                condensing pick for typical California homes. The EZTR75
                ($1,400) solves a problem no other tankless on the market
                solves: drop-in replacement without gas line upsizing. The
                CB199 ($3,500) combi is the right answer for homes with
                hydronic heat. The tradeoff is a smaller contractor network
                than Rinnai — but if your installer carries Noritz, it
                punches above its price.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Tank-to-tankless retrofits (EZ Series)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Hydronic-heat homes (CB Combi)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Long-term owners who want max warranty
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
                      Areas without a trained Noritz installer
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      DIY-leaning buyers (limited big-box stock)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Smart-home integration priorities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                The Noritz Lineup at a Glance
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Model
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Type
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        GPM
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        UEF
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        NRC1111-DV
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Indoor Condensing
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        11.1 GPM
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.96</td>
                      <td className='px-3 py-2 text-foreground/70'>$1,600</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        NRCP1112-DV
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Indoor Condensing w/ Pump
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        11.1 GPM
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.96</td>
                      <td className='px-3 py-2 text-foreground/70'>$2,100</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        EZTR75
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Tank Replacement
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        7.5 GPM
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.91</td>
                      <td className='px-3 py-2 text-foreground/70'>$1,400</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        EZTR40
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Tank Replacement
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        6.0 GPM
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.89</td>
                      <td className='px-3 py-2 text-foreground/70'>$1,100</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        CB199-DV
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Combi (hot water + heat)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        11.1 GPM
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.95</td>
                      <td className='px-3 py-2 text-foreground/70'>$3,500</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        NR501-OD
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Outdoor Non-Condensing
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        5.0 GPM
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.82</td>
                      <td className='px-3 py-2 text-foreground/70'>$1,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-xs text-muted-foreground mt-2 italic'>
                Unit-only pricing (April 2026). Installation adds
                $1,500-$3,500 depending on complexity.
              </p>
            </div>

            <div className='prose prose-slate max-w-none'>
              {/* Brand */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                About Noritz: 70+ Years of Tankless Engineering
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Noritz is a Japanese manufacturer founded in 1951 — and
                they literally invented the residential tankless water
                heater. For decades, tankless was the standard in Japan
                while the US defaulted to tank storage. When the US
                tankless market finally took off in the early 2000s,
                Noritz arrived with 50 years of engineering refinement
                that newer entrants were still working through.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The company runs its US headquarters out of Fountain
                Valley, California, with a technical training center in
                Anaheim. That West Coast presence matters for California
                homeowners — training, spare parts, and warranty service
                are staffed locally. Noritz is generally considered on par
                with Rinnai and Navien at the premium tier, and above
                mass-market brands like Rheem or AO Smith on engineering
                pedigree.
              </p>

              {/* NRC */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The NRC Series: The Core Indoor Condensing Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The NRC1111-DV is the model most California homeowners end
                up installing. It is a mid-to-upper-size indoor condensing
                unit delivering 11.1 GPM at a 35&deg;F rise (sufficient for
                most California climates where winter inlet water runs
                55-65&deg;F). Rated at 0.96 UEF, it is within a hair of the
                most efficient condensing tankless sold. The heat exchanger
                is stainless steel (not copper), which resists scale and
                condensate acidity better, particularly important in
                California&apos;s hard-water regions.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The NRCP1112-DV is the same unit with an integrated
                recirculation pump. For homes with long hot water runs
                (common in California single-story homes with the water
                heater in the garage), the recirculation loop eliminates
                the 30-90 second wait for hot water at distant fixtures and
                largely mitigates the cold-water sandwich effect. The $500
                premium over the base NRC is worth it if your shower is
                more than 30 feet from the heater.
              </p>

              {/* EZ Series */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The EZ Series: The Retrofit Trick
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is Noritz&apos;s most distinctive product, and the
                reason I keep recommending the brand for retrofits. Every
                other major tankless requires a 3/4&quot; gas line to feed
                its burner. most tank heaters use 1/2&quot; lines.
                Upgrading the gas line to 3/4&quot; adds $300-$800 and a
                day of work to every tank-to-tankless conversion. The EZ
                Series (EZTR40, EZTR75) is engineered specifically to run
                on the existing 1/2&quot; gas line feeding a 40 or 75
                gallon tank. It does this by tuning burner sizing and BTU
                throughput to match what the 1/2&quot; line can deliver.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The tradeoff is slightly lower peak output — 7.5 GPM on the
                EZTR75 versus 11.1 GPM on the NRC1111. but for most
                homes that replaces a tank with similar hot water demand,
                that capacity is sufficient. The EZ Series also uses
                existing vent pipe dimensions, simplifying the swap even
                further. End result: a tank-to-EZ conversion typically
                completes in a single day at $2,500-$3,500 installed
                versus $3,500-$5,000 for a full NRC conversion with gas
                line upgrade.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your existing gas tank is in a tight retrofit spot and
                you want tankless benefits without the full infrastructure
                upgrade, the EZ Series is nearly unique in the market.
              </p>

              {/* Condensing efficiency */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Condensing Efficiency: 0.95-0.97 UEF
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                All of Noritz&apos;s modern indoor units use condensing
                technology. The primary heat exchanger captures the
                majority of the gas combustion energy; a secondary
                exchanger recovers heat from the exhaust gases that would
                otherwise escape through the vent. The result is UEF
                ratings of 0.95-0.97 — meaning 95-97% of the fuel energy
                reaches the water. By comparison, a standard
                non-condensing tankless posts 0.81-0.83 UEF, and a typical
                gas tank runs 0.58-0.70.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The condensing exchange requires a condensate drain
                (roughly a gallon per day for a typical California
                household) and PVC venting instead of stainless Category
                III. If your install location has a nearby drain or
                utility sink, condensing is the right pick. If you are in
                a tight spot without drain access, non-condensing outdoor
                models (NR series) simplify the install.
              </p>

              {/* Warranty */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                12-Year Heat Exchanger Warranty
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is arguably Noritz&apos;s biggest selling point.
                Residential condensing models carry a 12-year heat
                exchanger warranty, 5-year parts, and 1-year labor. The
                non-condensing units step down to a 10-year heat
                exchanger warranty. Commercial installations extend to 15
                years on the heat exchanger. By comparison, Rinnai and
                Navien typically warranty their residential heat
                exchangers for 10-12 years.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The heat exchanger is the component most likely to fail on
                any tankless — mineral scale buildup and condensate
                acidity gradually degrade it over years of service. A
                12-year warranty signals that Noritz has engineered for
                longevity. Note that warranty compliance typically requires
                proof of annual descaling in hard-water regions — the
                warranty does not cover heat exchangers destroyed by
                neglected maintenance.
              </p>

              {/* California rebates */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California Rebates: SoCalGas and Beyond
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Noritz condensing models meet the CEE Advanced Tier
                efficiency threshold that SoCalGas uses for rebates.
                Qualifying models (NRC1111-DV, NRCP1112-DV, CB199-DV) earn
                $200-$700 rebates depending on the current program year and
                the specific model. The rebate submission happens through
                your installer and typically processes in 6-10 weeks.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The federal 25C Energy Efficient Home Improvement Credit
                stacks on top, 30% of cost up to $600 per year for
                qualifying gas tankless through 2032. Stacking SoCalGas +
                25C + any utility-specific program (SMUD, PG&amp;E, SDG&amp;E
                all run seasonal rebates) typically nets $800-$1,200 off a
                Noritz install. That brings a $4,500 installed condensing
                unit down to roughly $3,300-$3,700 net — narrowing the gap
                against a $1,500 tank replacement.
              </p>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='Noritz units are available through most California plumbing supply houses. Check noritz.com for the dealer locator to find a trained installer in your area.'
                source='noritz-review'
                variant='mid'
              />

              {/* Noritz vs competition */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Noritz vs Rinnai vs Navien
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                All three are top-tier tankless manufacturers. Here is how
                they break down in practice:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        Noritz
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Rinnai
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Navien
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Peak UEF
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        0.97
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>0.96</td>
                      <td className='px-3 py-2 text-foreground/70'>0.97</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        HX Warranty
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        12 yr
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>10-12 yr</td>
                      <td className='px-3 py-2 text-foreground/70'>10-15 yr</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        EZ Retrofit
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Yes (EZ Series)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>No</td>
                      <td className='px-3 py-2 text-foreground/70'>No</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Combi Option
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        CB199
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        M-Series
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        NCB-H
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        CA Contractor Network
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Medium</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Largest
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Large</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Wi-Fi/App
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>Optional</td>
                      <td className='px-3 py-2 text-foreground/70'>Yes</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Best
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Price (11 GPM condensing)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$1,600</td>
                      <td className='px-3 py-2 text-foreground/70'>$1,800</td>
                      <td className='px-3 py-2 text-foreground/70'>$1,700</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Pick Noritz if:</strong> You are retrofitting from a
                tank and want the EZ Series, you need a combi for hydronic
                heat, or you want the longest heat exchanger warranty
                available. <strong>Pick Rinnai if:</strong> Your priority
                is broad contractor support and service availability.{' '}
                <strong>Pick Navien if:</strong> You want the best
                smart-home integration and highest peak efficiency. For
                deeper competitor analysis, see our{' '}
                <Link
                  href='/reviews/rinnai-tankless-water-heater-review'
                  className='text-primary hover:underline'
                >
                  Rinnai review
                </Link>{' '}
                and{' '}
                <Link
                  href='/reviews/navien-tankless-water-heater-review'
                  className='text-primary hover:underline'
                >
                  Navien review
                </Link>
                .
              </p>

              {/* Pros and cons */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-500/10 dark:bg-green-950/20 border border-green-500/30 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-300 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      12-year heat exchanger warranty
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Unique EZ Series fits existing 1/2&quot; gas lines
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Stainless heat exchanger resists scale
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      0.95-0.97 UEF condensing efficiency
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      CB Combi covers hydronic heat homes
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      US headquarters in California
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      SoCalGas rebate eligible
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      70+ years of engineering pedigree
                    </li>
                  </ul>
                </div>
                <div className='bg-red-500/10 dark:bg-red-950/20 border border-red-500/30 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-300 dark:text-red-400 mb-3'>
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Smaller CA contractor network than Rinnai
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Limited big-box retail presence
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Wi-Fi app is an optional extra
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      EZ Series caps at 7.5 GPM
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Combi install is not DIY-friendly
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Descaling required annually for warranty
                    </li>
                  </ul>
                </div>
              </div>

              {/* Who should buy */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy Noritz
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Retrofit buyers.</strong> The EZ Series is
                    genuinely unique — drop-in tank replacement without
                    the gas line upsize. Saves $500-$1,500 and a day of
                    install time.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Hydronic heat homes.</strong> The CB199 combi
                    replaces a separate water heater and boiler with one
                    appliance, saving space and $3,000-$5,000 on the
                    boiler alone.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Long-term owners.</strong> The 12-year heat
                    exchanger warranty is as good as the category offers.
                    Combined with strong California service presence, you
                    are covered for the first two-thirds of the unit&apos;s
                    service life.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Homeowners with a Noritz-certified
                    installer nearby.</strong> If your plumber carries
                    Noritz, you get all the benefits without any of the
                    parts-availability concerns.
                  </span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How does Noritz compare to Rinnai and Navien?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    All three are top-tier. Rinnai has the broadest
                    California contractor support. Navien leads on
                    condensing efficiency and smart-home integration.
                    Noritz offers the longest heat exchanger warranty, the
                    unique EZ Series for retrofits, and the deepest
                    engineering pedigree (invented tankless in 1951).
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is the EZ Series and why does it matter?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The EZTR40 and EZTR75 are drop-in tank replacements
                    that run on the existing 1/2&quot; gas line, no
                    upsize needed. Unique in the tankless market. Saves
                    $500-$1,500 and cuts install time from 2-3 days to
                    one day.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is Noritz eligible for SoCalGas rebates?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. Most condensing NRC and CB models qualify for
                    $200-$700 SoCalGas rebates. Stack with the federal
                    25C tax credit (up to $600/year) for total savings
                    of $800-$1,200 on a typical install.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How long is the Noritz warranty?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Residential condensing: 12-year heat exchanger,
                    5-year parts, 1-year labor. Non-condensing: 10-year
                    heat exchanger. Commercial: 15-year heat exchanger.
                    Warranty requires proof of annual descaling in
                    hard-water regions.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Does Noritz make outdoor-rated tankless units?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. The NR series (NR501-OD, NR981-OD) is outdoor
                    non-condensing and mounts on exterior walls. ideal
                    for California mild climates. Simplifies venting and
                    frees interior space. Not rated for freezing
                    climates.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is the CB Combi and who is it for?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The CB199 provides both domestic hot water and
                    hydronic space heating from one unit. replaces a
                    separate water heater and boiler. Ideal for homes
                    with radiant floors or hot-water baseboard. 0.95
                    UEF, 11.1 GPM, $3,500 unit / $5,500+ installed.
                  </p>
                </div>
              </div>

              {/* Bottom line */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Noritz is the under-the-radar premium brand in tankless.
                It does not have Rinnai&apos;s ubiquity or Navien&apos;s
                app polish, but it offers engineering depth, the longest
                warranty in its class, and the truly unique EZ Series for
                California retrofits. If you are doing a planned
                tank-to-tankless conversion and you have a Noritz-certified
                installer available, it is a very defensible pick. Often
                the technically best pick for retrofits specifically. For
                greenfield new construction or when broad service is
                paramount, Rinnai remains the safer default. For
                hydronic-heat homes, the Noritz CB Combi is difficult to
                beat.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='Noritz, especially the EZ Series for retrofits and CB Combi for hydronic homes. Delivers Japanese engineering quality and the longest heat exchanger warranty in the category.'
              source='noritz-review'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how Noritz stacks up against Rinnai, Navien, and Rheem
                in our full tankless water heater comparison.
              </p>
              <Link
                href='/reviews/best-tankless-water-heater'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-tankless-water-heater'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Tankless Reviews
              </Link>
              <Link
                href='/reviews/tankless-water-heater-vs-tank'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Tankless vs Tank
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='noritz-review' />
    </ReviewLayout>
  );
}
