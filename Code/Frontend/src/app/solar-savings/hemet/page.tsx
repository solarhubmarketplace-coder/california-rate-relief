import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Hemet, CA: 2026 Rates, Costs & Your Options',
  description:
    'Hemet residents pay ~$280/month for electricity. Learn your actual SCE rate, what solar costs in Hemet in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/hemet',
  },
  openGraph: {
    title: 'Solar Savings in Hemet, CA: 2026 Rates, Costs & Options',
    description:
      'Hemet residents pay ~$280/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Hemet',
  url: 'https://ratereliefca.com/solar-savings/hemet',
  description:
    'Helping Hemet homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Hemet',
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
      name: 'How much does solar cost in Hemet in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 8 kW solar system in Hemet costs approximately $18,800 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Hemet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hemet residents pay an average of approximately $280 per month for electricity, or about $3,360 per year. This is driven by SCE\'s rates, the hot San Jacinto Valley climate, and Hemet\'s significant retiree population living in fixed-income households.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are CARE and FERA discounts available in Hemet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Hemet has a significant population that may qualify for SCE\'s income-based CARE (30-35% discount) and FERA (18% discount) programs. With a large retiree and fixed-income population, many Hemet residents qualify for these discounts without realizing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Hemet get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hemet averages approximately 3,300 hours of sunshine per year with 5.9 peak sun hours per day for fixed-mount solar panels. This is among the highest in Southern California and makes Hemet one of the best solar locations in the region.',
      },
    },
  ],
};

export default function HemetSolarPage() {
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
                Hemet, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Hemet: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Hemet homeowners — your local rates,
                solar costs, incentives, HOA rules, and every option for
                lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Zap className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>34.5¢</div>
                <div className='text-xs text-muted-foreground'>
                  SCE avg. rate/kWh
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <DollarSign className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>$280</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. monthly bill
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Sun className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>5.9 hrs</div>
                <div className='text-xs text-muted-foreground'>
                  Peak sun hours/day
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Home className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>92.6K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Hemet is a city of about 92,600 in the San Jacinto Valley of
                Riverside County, known for its large retiree population,
                affordable housing, and — most notably — some of the hottest
                summers in Southern California. Summer temperatures regularly top
                105°F, which drives electricity consumption (and bills) through
                the roof. Hemet is also in Southern California Edison territory,
                where rates are climbing fast. If you&apos;re a Hemet homeowner
                on a fixed income or watching your air conditioning costs soar,
                here&apos;s a complete breakdown of what&apos;s happening and
                what you can do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Hemet Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Hemet household pays approximately $280 per month for
                electricity, or about $3,360 per year. That&apos;s roughly 20%
                above the national average, driven by SCE&apos;s rates, the
                intense San Jacinto Valley heat, and the reality that most Hemet
                homes require air conditioning from May through September — six
                months or more.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s average residential rate is currently around 34.5 cents
                per kWh, but that&apos;s an average across all hours. During peak
                time-of-use hours (4-9 PM), rates jump to 58-74 cents per kWh.
                In Hemet, where people are cooling their homes during the
                hottest time of day (peak afternoon), peak-hour rates hit directly
                when you need them most. Hemet residents running AC in the 4-9 PM
                window can easily see daily costs jump $8-$12 just during those
                hours.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of per-kWh charges, there&apos;s now a $24.15 monthly
                fixed charge on every SCE bill regardless of usage. Combined with
                rates among the highest in the nation and multi-year increases already
                approved through 2028, a typical Hemet household using 750-900 kWh
                per month (high due to AC) can expect summer bills of $300 to $380
                in the coming years.
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
                and check which rate plan you&apos;re on. SCE offers several TOU
                (time-of-use) plans, and many Hemet households are on a default
                plan that isn&apos;t optimal for them. The rate comparison tool
                in your account will show you what you&apos;d pay on each plan
                based on your actual last 12 months of usage. Switching is free
                and takes minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you can shift heavy electricity use (laundry, dishwasher, EV
                charging, pool pump) to off-peak hours (before 4 PM or after 9 PM),
                you can save 10-15% just by being on the right TOU plan. In
                Hemet specifically, pre-cooling your home aggressively before 4 PM
                — getting your house down to 72°F by 4 PM so it drifts up to 76°F
                by 9 PM — can cut 10-20% off your summer bill. This strategy works
                in the dry Hemet climate better than humid coastal areas.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers income-based discount programs, and Hemet residents
                should pay special attention. <strong>CARE</strong> provides a
                30-35% discount on your entire bill if your household income is
                below certain thresholds. <strong>FERA</strong> offers an 18%
                discount for families of 3+ with slightly higher income limits.
                With Hemet&apos;s large retiree and fixed-income population, many
                residents qualify for these programs without realizing it. Check
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
                If anyone in your household relies on electricity-dependent
                medical equipment (oxygen concentrator, CPAP, powered wheelchair,
                hospital bed, etc.), you may qualify for{' '}
                <strong>Medical Baseline</strong>, which gives you additional
                electricity at the lowest rate tier — critical for Hemet residents
                in the heat where medical equipment may run longer hours or at
                higher demand during summer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Hemet&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Hemet is one of the best locations for solar in Southern
                California. The city averages 3,300 hours of sunshine per year and
                5.9 peak sun hours per day for fixed-mount panels — among the
                highest totals in the region. The extremely hot, dry San Jacinto
                Valley climate means almost no cloud cover and consistent solar
                production year-round.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Hemet&apos;s housing stock is mixed. Many homes were built in the
                1970s-1990s and may have older composition or tile roofs that could
                need replacement before solar installation. However, Four Seasons
                (a large 55+ community) and newer subdivisions have more modern
                roofs. The good news: <strong>because Hemet receives so much sun,
                even on older roofs, solar still produces excellent returns.</strong>{' '}
                You can check your specific home&apos;s solar potential for free at{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Solar Costs in Hemet (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Hemet household needs an 8 kW solar system to cover
                their electricity usage. Here&apos;s what that looks like across
                different options.
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
                        Cash purchase (8 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$18,800
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~6.2 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (8 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $150-$210
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~9-12 years
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
                        $130-$175
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
                        $280+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Hemet.
                Actual costs vary by roof condition, system size, and provider.
                Older homes may incur roof reinforcement costs. PPA monthly costs
                include remaining utility charges ($24 fixed charge + any grid
                usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/hemet/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&s Hemet page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at least 3
                quotes before committing. For older homes, ask installers about
                roof reinforcement costs before finalizing quotes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Hemet
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Hemet neighborhoods, especially large communities like Four
                Seasons, have HOAs. Here&apos;s what you need to know: under
                California&apos;s Solar Rights Act (Civil Code § 714), your HOA{' '}
                <strong>cannot prohibit</strong> you from installing solar panels.
                They can impose reasonable aesthetic restrictions (like panel
                placement preferences), but any restriction that increases your
                system cost by more than $1,000 or reduces efficiency by more than
                10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, many Hemet HOAs have streamlined their solar approval
                process because so many residents are going solar to offset high AC
                costs. You typically submit an architectural review application, and
                if the HOA doesn&apos;t respond with a written denial within 45
                days, your application is deemed approved by default. If your HOA
                gives you pushback, the law is clearly on your side — and they can
                be liable for damages plus your attorney&apos;s fees if they
                unreasonably block your installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Hemet
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Hemet is on SCE&apos;s NEM 3.0 (Net Billing) tariff, which means
                the excess solar energy you send back to the grid earns only 5-8
                cents per kWh — far less than the 34-50 cents you pay to buy it
                back during peak hours. This is especially painful in Hemet because
                peak hours (4-9 PM) coincide with the hottest time of day when you
                need cooling most.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you store excess daytime solar and use it during
                peak evening hours (4-9 PM) when SCE rates are highest. For Hemet
                residents, this is a game-changer: a solar + battery system
                typically offsets 70-90% of your grid usage, compared to 40-60%
                with solar alone. A battery helps you avoid the worst peak rates.
                For more detail, see our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 guide
                </Link>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP) may
                still offer rebates for battery storage — check current
                availability at{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>
                . SGIP funds are limited and allocated first-come, first-served.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense in Hemet
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Hemet homes given the abundant sun,
                but there are situations where it may not be the right move. If
                your monthly bill is under $100 (rare in Hemet due to AC costs),
                the savings may not justify the complexity. If your roof faces
                north or is heavily shaded by trees, production will be low —
                check Google Project Sunroof first. If your roof is old (pre-2000)
                and needs replacement in the next 3-5 years, handle that before
                installing panels — roof costs can be significant. And if
                you&apos;re planning to move within 1-2 years, the timing may not
                work (though PPAs can transfer to the buyer).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Hemet-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Four Seasons and retirement communities:</strong> If you
                live in one of Hemet&apos;s large 55+ communities, you&apos;re
                likely on a fixed income during retirement. Solar makes even more
                sense for you because it locks in a predictable electricity cost
                for decades, protecting you from rate increases. Many Four Seasons
                residents are already going solar — check with neighbors about
                their experience and recommended installers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Extreme summer AC usage:</strong> If you use window AC
                units or run your central AC for 12+ hours a day (common in Hemet),
                your usage is likely 30-50% higher than average. That means solar
                savings are <em>higher</em> for you, not lower. A PPA at 20¢/kWh
                vs. SCE peak rates of 50¢/kWh during your peak usage window is a
                massive win.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Roof age matters:</strong> Many Hemet homes are 30-50
                years old with aging composition roofs. Before committing to
                solar, get a roof inspection. If your roof has 10+ years of life
                left, you can install solar now. If it needs replacement within
                3-5 years, replace the roof first, then solar — it&apos;s cheaper
                and cleaner than removing and reinstalling panels. Some installers
                offer roof replacement bundled with solar financing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Diamond Valley Lake nearby:</strong> Hemet is home to
                Diamond Valley Lake, a beautiful recreation area. If your property
                backs to the lake or is in a lakeside community, check whether lake
                HOA or county rules affect solar installation. Most don&apos;t, but
                it&apos;s worth confirming with your installer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Hemet in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 8 kW system costs approximately $18,800 before
                incentives if purchased outright. With a PPA, there is no upfront
                cost — you pay a fixed per-kWh rate (typically 18-25 cents) for
                the energy produced on your roof, compared to SCE&apos;s average
                of 34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Hemet?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Hemet residents pay approximately $280 per month on average, or
                about $3,360 per year. Summer bills can be $350-$400+ for homes
                running AC heavily in the San Jacinto Valley heat.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Do I qualify for CARE or FERA discounts?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your household income is below SCE&apos;s thresholds, you likely
                qualify for either CARE (30-35% discount) or FERA (18% discount).
                Hemet has a large fixed-income and retiree population — many
                residents qualify without realizing it. Check at{' '}
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

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Will solar help reduce my AC costs in the summer?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes, dramatically. Solar production peaks during the day, which
                aligns perfectly with Hemet&apos;s hot summers (when the sun is
                strongest). A solar + battery system is even better, letting you
                store daytime production and use it during peak evening hours
                (4-9 PM) when rates are highest and you&apos;re still cooling your
                home.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal solar tax credit still available?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the end of
                2025. If you buy a system outright, there is no federal credit.
                However, the commercial credit (Section 48E) is still available,
                which is how PPA providers can offer $0-down solar at rates below
                utility prices. See our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Hemet
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.9 peak sun hours per day (among the highest in the nation),
                SCE rates among the highest in the nation at 34.5 cents with summer peaks reaching 58-74 cents, and average
                bills around $280/month, Hemet is one of the absolute best cities
                in California for solar savings. The San Jacinto Valley&apos;s
                intense sun is literally a resource that sits on your roof year-
                round. Start with the free stuff — optimize your SCE rate plan,
                check for CARE/FERA eligibility, and run a roof inspection. Then
                evaluate whether a cash purchase, loan, or PPA makes sense for your
                situation. Your HOA can&apos;t stop you, the sun is on your side,
                and the math gets better every year as utility rates keep rising —
                especially for retirees on fixed incomes trying to protect their
                budgets.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="sce" cityName="Hemet" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Hemet Homeowner? See Your Options
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
