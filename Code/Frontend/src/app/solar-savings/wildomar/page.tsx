import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Wildomar, CA: 2026 Rates, Costs & Your Options',
  description:
    'Wildomar residents pay ~$360/month for electricity. Learn your actual SCE rate, what solar costs in Wildomar in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/wildomar',
  },
  openGraph: {
    title: 'Solar Savings in Wildomar, CA: 2026 Rates, Costs & Options',
    description:
      'Wildomar residents pay ~$360/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Wildomar',
  url: 'https://ratereliefca.com/solar-savings/wildomar',
  description:
    'Helping Wildomar homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Wildomar',
    containedInPlace: {
      '@type': 'State',
      name: 'California',
    },
  },
  serviceType: 'Solar Power Purchase Agreement (PPA)',
  priceRange: '$0 down',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does solar cost in Wildomar in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 10 kW solar system in Wildomar costs approximately $23,500 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Wildomar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wildomar residents pay an average of approximately $360 per month for electricity, or about $4,320 per year. This is roughly 45% higher than the national average, driven by SCE\'s rates and the fact that many Wildomar homes are larger with higher overall electrical demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Wildomar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Wildomar get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wildomar averages approximately 3,250 hours of sunshine per year with 5.8 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Wildomar an excellent location for solar energy production.',
      },
    },
  ],
};

export default function WildomarSolarPage() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Wildomar, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Wildomar: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Wildomar homeowners — your local rates,
                solar costs, incentives, HOA rules, and every option for
                lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Zap className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>33¢</div>
                <div className='text-xs text-muted-foreground'>
                  SCE avg. rate/kWh
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <DollarSign className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>$360</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. monthly bill
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Sun className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>5.8 hrs</div>
                <div className='text-xs text-muted-foreground'>
                  Peak sun hours/day
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Home className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>~37K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Wildomar is a small city of about 37,000 located between Murrieta and
                Lake Elsinore in Riverside County. Incorporated in 2008, it&apos;s a mix of
                suburban and semi-rural properties — everything from newer master-planned
                developments to multi-acre equestrian estates. What makes Wildomar unique is
                that many homes are larger than average, with bigger lots and higher-than-typical
                electricity consumption. That means bigger electric bills and bigger savings
                potential with solar. This guide walks you through your rates, solar costs,
                and every realistic option to lower your power bills.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Wildomar Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Wildomar household pays approximately $360 per month for
                electricity, or about $4,320 per year. That&apos;s roughly 45% above
                the national average — significantly higher than many California cities.
                The reason is straightforward: Wildomar homes tend to be larger, often
                sitting on bigger lots with more square footage, and many properties have
                additional structures (barns, stables, outbuildings) that add to grid demand.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s average residential rate for Wildomar is around 33 cents per kWh,
                but as with all of SCE&apos;s territory, that&apos;s an average that masks
                the real cost structure. During peak time-of-use hours (4-9 PM), rates jump
                to 44-50 cents per kWh. For a larger home running AC during those hours,
                peak-period consumption can double your per-kWh cost.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                There&apos;s also a $24.15 monthly fixed charge on every SCE bill,
                regardless of usage. For a typical Wildomar home using 1,000+ kWh per
                month, combined with SCE&apos;s 12.9% rate hike in 2026 and multi-year
                increases already approved through 2028, expect summer bills of $380-$450
                and winter bills of $280-$350.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check Your SCE Rate Plan (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before anything else, log into your{' '}
                <a
                  href='https://www.sce.com/mysce/myaccount'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE My Account
                </a>{' '}
                and check which rate plan you&apos;re currently on. SCE offers several TOU
                (time-of-use) plans, and many Wildomar households are on a default plan that
                doesn&apos;t align with their usage. The rate comparison tool in your account
                shows what you&apos;d pay on each plan based on your actual 12-month usage
                history. Switching is free and takes minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For Wildomar specifically, if you have barn electricity, pool pumps, or
                heating/cooling for multiple structures, the savings from shifting those loads
                to off-peak hours (before 4 PM or after 9 PM) can be substantial. For example,
                running your barn pump and livestock waterers during morning/afternoon hours
                instead of evening peak hours can save 15-20% of those loads&apos; costs
                immediately.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers income-qualified assistance programs that many Wildomar households
                can benefit from. <strong>CARE</strong> provides a 30-35% discount on your entire
                bill if household income is below certain thresholds. <strong>FERA</strong> offers
                an 18% discount for families of 3+ with slightly higher income limits. Check
                eligibility and apply at{' '}
                <a
                  href='https://www.sce.com/residential/assistance/care-fera'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE&apos;s CARE/FERA page
                </a>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If anyone in your household uses electricity-dependent medical equipment
                (oxygen, CPAP, powered mobility devices, home dialysis), you may qualify for
                <strong> Medical Baseline</strong>, which provides additional electricity at
                the lowest rate tier. For larger homes with medical needs, this can result in
                hundreds of dollars in annual savings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Wildomar&apos;s Solar Potential: Excellent
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Wildomar is an excellent location for solar. The city averages 3,250 hours of
                sunshine per year and 5.8 peak sun hours per day for fixed-mount panels — well
                above the national average. The high desert inland location means low humidity,
                minimal cloud cover year-round, and consistent solar production even in winter.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Wildomar homes have composite shingle or tile roofs with south or
                southwest-facing exposure. The terrain varies — some properties have gently
                rolling hills with excellent unshaded exposure, while others sit in terrain
                with afternoon hillside shading. Luckily, you can check your specific roof&apos;s
                solar potential instantly (and for free) at{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>
                . This tool accounts for terrain, shading, and roof orientation on your exact
                address.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Solar Costs in Wildomar (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Wildomar household needs a 10 kW solar system to cover their
                electricity usage (larger than the national average, reflecting Wildomar&apos;s
                higher consumption). Here&apos;s what that looks like across different financing
                options.
              </p>

              {/* Cost Comparison Table */}
              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>
                        Option
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Upfront Cost
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Monthly Cost
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Payback
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Cash purchase (10 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$23,500
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~5.90 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (10 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $200-$270
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~8-11 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar PPA
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $160-$230
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Day 1 savings
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        No solar (SCE only)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $360+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Wildomar. Actual costs
                vary by roof condition, system size, lot configuration, and installer. PPA
                monthly costs include remaining utility charges ($24 fixed charge + any grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For detailed quotes from multiple local installers,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/wildomar/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Wildomar page
                </a>{' '}
                lets you compare side by side. Always get at least 3 quotes and compare
                equipment quality, warranty terms, and installer reviews before making
                your decision.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Wildomar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Some Wildomar neighborhoods have HOAs, particularly in newer developments.
                The important fact: under California&apos;s Solar Rights Act (Civil Code § 714),
                your HOA <strong>cannot prohibit</strong> you from installing solar panels.
                They can impose reasonable aesthetic restrictions (panel placement, color
                preferences), but any restriction that increases system cost by more than $1,000
                or reduces efficiency by more than 10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Wildomar HOAs have streamlined their solar approval process because so
                many homeowners are going solar. You submit an architectural review application,
                and if the HOA doesn&apos;t respond with a written denial within 45 days, your
                application is deemed approved by default. If they unreasonably block you, the
                law is on your side — they can be liable for your damages plus attorney&apos;s
                fees.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Wildomar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Wildomar is on SCE&apos;s NEM 3.0 (Net Billing) tariff. This means excess solar
                energy you send back to the grid earns only 5-8 cents per kWh — far less than the
                34-50 cents you pay to buy electricity during peak hours. This is why battery
                storage has become essential for maximizing savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you store excess daytime solar and use it during peak evening
                hours (4-9 PM) when SCE rates are highest. A solar + battery system typically
                offsets 70-90% of your grid usage, compared to 40-60% with solar alone. For
                Wildomar homes with higher consumption, battery storage often delivers faster
                payback. For more details, see our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 guide
                </Link>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP) may offer battery
                rebates, though funding is limited and first-come, first-served. Check current
                availability at{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense in Wildomar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Wildomar homes, but there are exceptions. If your
                monthly bill is under $150 (rare in Wildomar given the larger homes), the
                savings may not justify the investment. If your roof is heavily shaded by
                hillside terrain or mature trees, production will be limited — check Google
                Project Sunroof first. If your roof needs replacement in the next 3-5 years,
                do that before installing solar. And if you&apos;re planning to sell within
                1-2 years, timing may not work well for an ownership model (PPAs can transfer
                to buyers, however).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Wildomar-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Equestrian and agricultural properties:</strong> Wildomar has a large
                population of horse owners and small farm operations. These properties typically
                have barns, stables, and outbuildings with significant electricity demand (water
                pumps, lighting, hay conditioning equipment, heated water troughs). This extra
                load means your bill is higher but also means solar + battery delivers bigger
                savings. A 10 kW system combined with battery storage is especially effective
                for these properties because barn usage is often during the day (when solar
                produces most).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Larger lots and multi-structure properties:</strong> Many Wildomar homes
                sit on 1+ acres with multiple buildings. This terrain variation can create
                shading challenges on some roof areas but also provides opportunities for ground-mounted
                solar on cleared land if your home&apos;s roofs are inadequate. Discuss ground-mount
                options with your installer when getting quotes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Newer developments vs. older properties:</strong> Wildomar has both
                newer master-planned areas and older rural properties. Newer homes typically have
                better electrical infrastructure and roofs in excellent condition, which reduces
                installation costs. Older properties may need panel upgrades or roof work
                first — factor this into your quotes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Water usage (well systems, septic):</strong> If you have a private well
                with an electric pump (common in rural Wildomar), your household electricity
                usage is higher than typical suburban homes. Solar is an excellent way to offset
                well-pump costs, which run continuously year-round.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Wildomar in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 10 kW system costs approximately $23,500 before incentives if
                purchased outright. With a PPA, there is no upfront cost — you pay a fixed
                per-kWh rate (typically 18-25 cents) for the energy produced on your roof,
                compared to SCE&apos;s average of 34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Why is my electric bill so high in Wildomar?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Wildomar homes tend to be larger than average and sit on bigger lots, which
                means higher overall electricity consumption. Many properties also have barns,
                stables, or outbuildings with additional electrical loads. Combined with SCE&apos;s
                high rates (34.5¢/kWh average, 44-50¢ during peak hours) and the 12.9% rate
                increase in 2026, bills are significantly higher than the national average.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels in Wildomar?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right to install solar.
                HOAs can request reasonable aesthetic changes, but cannot prohibit installation
                or impose restrictions that increase cost by more than $1,000 or reduce
                efficiency by more than 10%.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is solar worth it for equestrian properties?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes, absolutely. Horse properties with barns and water systems have higher
                electricity usage year-round, which means larger bills and larger savings from
                solar. A 10 kW system combined with battery storage is especially effective
                because it can cover barn loads during the day and peak-hour household loads
                with stored energy in the evening.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal solar tax credit still available?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the end of 2025. If you
                buy a system outright, there is no federal credit. However, the commercial
                credit (Section 48E) is still available, which is how PPA providers can offer
                $0-down solar at rates below utility prices. See our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Wildomar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.8 peak sun hours per day, higher-than-average electricity consumption,
                SCE rates at 34.5 cents and climbing 12.9% in 2026, and average bills around
                $360/month, Wildomar is an excellent solar market — especially for equestrian
                and multi-structure properties. Start with the free wins: optimize your SCE rate
                plan, check CARE/FERA eligibility, and shift loads to off-peak hours. Then
                evaluate whether a cash purchase, loan, or PPA makes sense for your situation.
                Your HOA can&apos;t stop you, the sun is reliable, and every year you wait costs
                thousands more in rising utility bills.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Wildomar Homeowner? See Your Options
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re exploring the PPA route, check your eligibility
                for the California Rate Relief Program in about 60 seconds. No
                cost, no obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Related Content */}
            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>
                Related Articles
              </h3>
              <div className='space-y-3'>
                <Link
                  href='/blog/sce-rate-increase-2026'
                  className='block text-primary hover:underline font-medium'
                >
                  SCE Rate Increase 2026: What You Need to Know →
                </Link>
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='block text-primary hover:underline font-medium'
                >
                  Is Solar Still Worth It Under NEM 3.0? →
                </Link>
                <Link
                  href='/blog/california-24-dollar-fixed-charge-explained'
                  className='block text-primary hover:underline font-medium'
                >
                  The New $24 Fixed Charge, Explained →
                </Link>
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='block text-primary hover:underline font-medium'
                >
                  Solar Tax Credit Expired — Your Options Now →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
