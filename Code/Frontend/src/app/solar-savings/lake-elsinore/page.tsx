import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Lake Elsinore, CA: 2026 Rates, Costs & Your Options',
  description:
    'Lake Elsinore residents pay ~$324/month for electricity. Learn your actual SCE rate, what solar costs in Lake Elsinore in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/lake-elsinore',
  },
  openGraph: {
    title: 'Solar Savings in Lake Elsinore, CA: 2026 Rates, Costs & Options',
    description:
      'Lake Elsinore residents pay ~$324/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Lake Elsinore',
  url: 'https://ratereliefca.com/solar-savings/lake-elsinore',
  description:
    'Helping Lake Elsinore homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Lake Elsinore',
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
      name: 'How much does solar cost in Lake Elsinore in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 9.5 kW solar system in Lake Elsinore costs approximately $22,000 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Lake Elsinore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lake Elsinore residents pay an average of approximately $324 per month for electricity, or about $3,888 per year. This is roughly 35% higher than the national average, driven by SCE\'s rates and extreme summer heat requiring heavy air conditioning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Lake Elsinore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Lake Elsinore get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lake Elsinore averages approximately 3,300 hours of sunshine per year with 6.2 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Lake Elsinore an excellent location for solar energy production.',
      },
    },
  ],
};

export default function LakeElsinoreSolarPage() {
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
                Lake Elsinore, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Lake Elsinore: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Lake Elsinore homeowners — your local rates,
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
                <div className='text-2xl font-bold text-foreground'>$324</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. monthly bill
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Sun className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>6.2 hrs</div>
                <div className='text-xs text-muted-foreground'>
                  Peak sun hours/day
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Home className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>~75K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Lake Elsinore sits in the heart of the Inland Empire, a city of about
                75,000 known for scorching summers, outdoor recreation, and some of
                the hottest electricity bills in Southern California Edison territory.
                During summer months, air conditioning runs nearly 24/7, and those bills
                can shock even long-time residents. With rates among the highest in the nation at 34.5¢/kWh with summer peaks reaching 58-74¢,
                Lake Elsinore homeowners are paying more than ever. This
                guide breaks down your rates, solar economics, and every realistic option
                to take control of your energy costs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Lake Elsinore Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Lake Elsinore household pays approximately $324 per month
                for electricity, or about $3,888 per year. That&apos;s roughly 35% above
                the national average, and there&apos;s a clear reason: Lake Elsinore is
                one of the hottest cities in Riverside County. Summer temperatures
                routinely exceed 100°F, and some days hit 110°F+. Your air conditioning
                runs heavily from May through October, and even moderate AC usage
                generates enormous bills.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s average residential rate is currently around 34.5 cents per
                kWh, but that average masks the real cost structure. During peak time-of-use
                hours (4-9 PM), rates jump to 58-74 cents per kWh. If you&apos;re running
                your AC to cool your home before evening (and pre-cooling is exactly what
                you need to do in Lake Elsinore heat), you&apos;re often paying the peak rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                There&apos;s also a $24.15 monthly fixed charge on every SCE bill,
                regardless of how little or how much electricity you use. For a Lake
                Elsinore household using 1,100+ kWh per month (common for summer months),
                combined with rates among the highest in the nation and additional increases
                already approved through 2028, summer bills can easily reach $380-$450.
                Winter bills are lower but still $250+.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check Your SCE Rate Plan (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before exploring solar, log into your{' '}
                <a
                  href='https://www.sce.com/mysce/myaccount'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE My Account
                </a>{' '}
                and check which rate plan you&apos;re on. SCE offers several TOU
                (time-of-use) plans, and many Lake Elsinore households are on a
                default plan that doesn&apos;t optimize for their usage pattern.
                The rate comparison tool shows what you&apos;d pay on each plan based on
                your actual last 12 months of usage. Switching is free and takes minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In Lake Elsinore specifically, the most impactful TOU strategy is
                pre-cooling: run your AC hard during off-peak hours (morning and early
                afternoon, before 4 PM), cool your home to 72-74°F, then run minimal AC
                during peak hours (4-9 PM) while relying on your cooled-down home. This
                alone can save 15-20% on your summer bill, and it&apos;s free to do
                starting today.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers income-based assistance programs that many Lake Elsinore
                households qualify for but haven&apos;t applied. <strong>CARE</strong> provides
                a 30-35% discount on your entire bill if your household income falls
                below certain thresholds (varies by household size). <strong>FERA</strong> offers
                an 18% discount for families of 3 or more with slightly higher income
                limits. Check eligibility and apply at{' '}
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
                (CPAP, oxygen concentrator, powered wheelchair, home dialysis, etc.),
                you may qualify for <strong>Medical Baseline</strong>, which gives you
                additional electricity at the lowest rate tier. This can mean hundreds of
                dollars in savings annually.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Lake Elsinore&apos;s Solar Potential: Excellent
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Lake Elsinore is one of the best locations in Southern California for solar.
                The city averages 3,300 hours of sunshine per year and 6.2 peak sun hours
                per day for fixed-mount panels — significantly above the national average and
                among the best in California. The high desert climate means low humidity,
                minimal cloud cover year-round, and consistently strong solar production even
                in winter.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Lake Elsinore homes have either composition shingle or tile roofs with
                good south or southwest-facing exposure. The city has neighborhoods ranging
                from older downtown properties to newer master-planned communities (Canyon
                Hills, Summerly, Tuscany Hills). Newer homes typically have better roof
                conditions and orientation for solar. You can check your specific roof&apos;s
                solar potential instantly at{' '}
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
                What Solar Costs in Lake Elsinore (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Lake Elsinore household needs a 9.5 kW solar system to cover
                their electricity usage (higher than the national average due to the extreme
                heat and heavy AC demand). Here&apos;s what that looks like across different
                financing options.
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
                        Cash purchase (9.5 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$22,000
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~6.08 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (9.5 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $180-$250
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
                        $150-$210
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
                        $324+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Lake Elsinore.
                Actual costs vary by roof condition, system size, and provider. PPA monthly
                costs include remaining utility charges ($24 fixed charge + any grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To get detailed quotes from multiple local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/lake-elsinore/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Lake Elsinore page
                </a>{' '}
                lets you compare quotes side by side from vetted installers. Always get at
                least 3 quotes and compare warranties, equipment brands, and company reviews
                before deciding.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Lake Elsinore
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Lake Elsinore neighborhoods, especially the newer master-planned
                communities, have HOAs. The good news: under California&apos;s Solar Rights
                Act (Civil Code § 714), your HOA <strong>cannot prohibit</strong> you from
                installing solar panels. They can impose reasonable aesthetic restrictions
                (like requesting darker-colored panels or specific placement), but any
                restriction that increases your system cost by more than $1,000 or reduces
                efficiency by more than 10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, most Lake Elsinore HOAs have streamlined their solar approval
                process because so many homeowners are going solar. You submit an architectural
                review application (usually online), and if the HOA doesn&apos;t respond with
                a written denial within 45 days, your application is deemed approved by default.
                If your HOA gives you unreasonable pushback, the law is clearly on your side
                — they can be liable for your damages plus attorney&apos;s fees if they
                illegally block your installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Lake Elsinore
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Lake Elsinore is on SCE&apos;s NEM 3.0 (Net Billing) tariff, which significantly
                changes how solar economics work. The excess solar energy you send back to the
                grid earns only 5-8 cents per kWh — far less than the 34-50 cents you pay to
                buy electricity back during peak hours. This is why battery storage has become
                critical for maximizing savings in Lake Elsinore.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery system, you store excess daytime solar and use it during peak
                evening hours (4-9 PM) when SCE rates are highest. A solar + battery system
                typically offsets 70-90% of your grid usage, compared to 40-60% with solar
                alone. Given Lake Elsinore&apos;s extreme summer heat and peak-hour AC usage,
                battery storage often delivers payback in 8-10 years (faster than solar alone).
                For a detailed breakdown, see our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 guide
                </Link>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP) may offer rebates
                for battery storage, though funding is limited and allocated first-come,
                first-served. Check current availability at{' '}
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
                When Solar Doesn&apos;t Make Sense in Lake Elsinore
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for nearly all Lake Elsinore homes, but there are
                exceptions. If your monthly bill is under $100 (very rare in Lake Elsinore),
                the payback period may be too long. If your roof is heavily shaded by mature
                trees or neighboring hills, production will be limited — Google Project
                Sunroof will show you exactly. If your roof needs replacement in the next
                3-5 years, address that first (it&apos;s cheaper than re-doing your solar later).
                And if you&apos;re planning to sell within 1-2 years, the timing doesn&apos;t
                work well for a purchase (PPAs can transfer to buyers, however).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Lake Elsinore-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Extreme heat AC optimization:</strong> Lake Elsinore&apos;s summer
                temperatures are among the highest in Southern California. If you have central
                AC, invest in a smart thermostat (free to install, takes 30 minutes) that
                learns your usage and can pre-cool automatically during off-peak hours. This
                single change saves $40-$60/month in summer. Combined with solar, it extends
                your PPA or loan payback by months.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Lakefront and recreation properties:</strong> Properties near the lake
                (Canyon Hills, lakefront areas) may experience higher humidity and occasional
                salt spray from water recreation activities. This can slightly reduce panel
                efficiency over time. Consider high-quality panels with extra corrosion
                protection and discuss this with your installer. Properties on large lots
                with full sun exposure benefit the most from larger systems.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Equestrian and rural properties:</strong> Many Lake Elsinore properties
                include horse stables, barns, or agricultural buildings that consume electricity
                (water pumps, barn lighting, hay conditioning). These loads are excellent
                candidates for solar + battery systems because they often run during the day
                (when solar produces most). Farmers and horse owners often see faster payback
                due to higher overall electricity consumption.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Newer master-planned communities:</strong> If you live in a newer
                development like Canyon Hills, Summerly, or Tuscany Hills, your electrical
                panel and roof are likely in excellent condition, which reduces installation
                costs. Some of these developments have pre-negotiated solar pricing with
                installers — ask your HOA if they have preferred vendors.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Lake Elsinore in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 9.5 kW system costs approximately $22,000 before incentives if
                purchased outright. With a PPA, there is no upfront cost — you pay a fixed
                per-kWh rate (typically 18-25 cents) for the energy produced on your roof,
                compared to SCE&apos;s average of 34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Lake Elsinore?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Lake Elsinore residents pay approximately $324 per month on average, or
                about $3,888 per year. Summer bills often exceed $400 due to heavy air
                conditioning in the extreme inland heat. Winter bills are lower, typically
                $250-$300.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels in Lake Elsinore?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right to install solar.
                HOAs can request reasonable aesthetic changes, but cannot prohibit installation
                or impose restrictions that increase cost by more than $1,000 or reduce
                efficiency by more than 10%.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Why is Lake Elsinore&apos;s electricity bill so high?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Lake Elsinore is one of the hottest cities in Riverside County. Summer
                temperatures routinely exceed 100°F, driving heavy air conditioning usage from
                May through October. Combined with SCE&apos;s high rates (34.5¢/kWh average,
                58-74¢ during peak hours) and rates among the highest in the nation, bills are
                significantly above the national average. Solar + battery is especially
                effective here.
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
                The Bottom Line for Lake Elsinore
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 6.2 peak sun hours per day, SCE rates among the highest in the nation at 34.5 cents with summer peaks reaching 58-74 cents,
                and average bills around $324/month (often exceeding $400 in summer),
                Lake Elsinore is one of the strongest solar markets in California. The extreme
                heat that drives your electric bills is the same thing that makes solar incredibly
                productive. Start with the free wins: optimize your SCE rate plan, check for
                CARE/FERA eligibility, and implement pre-cooling strategies. Then evaluate whether
                a cash purchase, loan, or PPA makes the most sense for your situation. Your HOA
                can&apos;t stop you, the sun is on your side, and every year you wait costs you
                thousands more in rising utility bills.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="sce" cityName="Lake Elsinore" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Lake Elsinore Homeowner? See Your Options
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
