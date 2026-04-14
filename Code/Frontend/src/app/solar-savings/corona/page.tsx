import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Corona, CA: 2026 Rates, Costs & Your Options',
  description:
    'Corona residents pay ~$357/month for electricity. Learn your actual SCE rate, what solar costs in Corona in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/corona',
  },
  openGraph: {
    title: 'Solar Savings in Corona, CA: 2026 Rates, Costs & Options',
    description:
      'Corona residents pay ~$357/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Corona',
  url: 'https://ratereliefca.com/solar-savings/corona',
  description:
    'Helping Corona homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Corona',
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
      name: 'How much does solar cost in Corona in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 7.3 kW solar system in Corona costs approximately $17,000 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Corona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corona residents pay an average of approximately $357 per month for electricity, or about $4,284 per year. This is roughly 35% higher than the national average, driven by SCE\'s rates and Southern California\'s hot summers requiring air conditioning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Corona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Corona get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corona averages approximately 3,150 hours of sunshine per year with 5.6 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Corona an excellent location for solar energy production.',
      },
    },
  ],
};

export default function CoronaSolarPage() {
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
                Corona, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Corona: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Corona homeowners — your local rates,
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
                <div className='text-2xl font-bold text-foreground'>$357</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. monthly bill
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Sun className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>5.6 hrs</div>
                <div className='text-xs text-muted-foreground'>
                  Peak sun hours/day
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Home className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>157K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Corona is the largest city in Riverside County with a population
                of around 157,000, and it&apos;s the geographic heart of
                Southern California. Historically known as the "Circle City" for
                its iconic downtown circle, Corona has evolved into one of the
                Inland Empire&apos;s most vibrant communities — with higher home
                values than most neighboring cities and a strong population of
                dual-income professional families. You&apos;re also squarely in
                Southern California Edison territory, where electricity rates
                climbed 12.9% in 2026 alone. If you&apos;re a Corona homeowner
                watching your electric bill creep toward $400 or beyond,
                here&apos;s what&apos;s driving that and what you can actually
                do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Corona Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Corona household pays approximately $357 per month
                for electricity, or about $4,284 per year. That&apos;s roughly
                35% above the national average, driven by SCE&apos;s rates and
                the reality that Corona summers are hot — most homes need
                air conditioning running five or more months per year.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s average residential rate is currently around 34.5
                cents per kWh, but that&apos;s an average across all hours.
                During peak time-of-use hours (4-9 PM), rates jump to 44-50
                cents per kWh. If you&apos;re running your AC during those
                hours — which nearly every Corona household is during summer
                afternoons and evenings — you&apos;re paying the premium rate
                when you need cooling most.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of per-kWh charges, there&apos;s now a $24.15 monthly
                fixed charge on every SCE bill regardless of usage. Combined with
                the 12.9% rate increase in 2026 and additional increases already
                approved through 2028, a typical Corona household using 1,050+
                kWh per month can expect summer bills of $370 to $420. And
                that&apos;s before rates go up again next year.
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
                (time-of-use) plans, and many Corona households are on a default
                plan that isn&apos;t optimized for their usage patterns. The rate
                comparison tool in your account will show you what you&apos;d pay
                on each plan based on your actual last 12 months of usage.
                Switching is free and takes minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you can shift heavy electricity use (laundry, dishwasher, EV
                charging, pool pump) to off-peak hours (before 4 PM or after 9
                PM), you can save 10-15% just by being on the right TOU plan. In
                Corona specifically, pre-cooling your home to 78-80°F before 4 PM
                during summer and running the pool pump in the early morning are
                two of the highest-impact changes you can make immediately.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers income-based discount programs that many qualifying
                Corona households haven&apos;t applied for.{' '}
                <strong>CARE</strong> provides a 30-35% discount on your entire
                bill if your household income is below certain thresholds.{' '}
                <strong>FERA</strong> offers an 18% discount for families of 3+
                with slightly higher income limits. Check eligibility and apply
                at{' '}
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
                medical equipment (CPAP, home dialysis, powered wheelchair,
                oxygen concentrator, etc.), you may qualify for{' '}
                <strong>Medical Baseline</strong>, which gives you additional
                electricity at the lowest rate tier.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Corona&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Corona is an excellent location for solar. The city averages
                3,150 hours of sunshine per year and 5.6 peak sun hours per day
                for fixed-mount panels — well above the national average. The
                relatively low humidity and minimal cloud cover mean consistent,
                high solar production year-round, even during winter months.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Corona homes built in the last 20 years have composite
                shingle or tile roofs with good south or west-facing exposure.
                The newer neighborhoods (Sierra Del Oro, Eagle Glen, South
                Corona developments) are particularly well-suited — newer roofs
                mean you won&apos;t need a roof replacement before installing
                solar. You can check your specific home&apos;s solar potential
                for free at{' '}
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
                What Solar Costs in Corona (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Corona household needs a 7.3 kW solar system to
                cover their electricity usage. Here&apos;s what that looks like
                across different options.
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
                        Cash purchase (7.3 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$17,000
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~5-6 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (7.3 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $140-$200
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
                        $120-$180
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
                        $357+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Corona.
                Actual costs vary by roof, system size, and provider. PPA monthly
                costs include remaining utility charges ($24 fixed charge + any
                grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/corona/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Corona page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at least 3
                quotes before committing to any option.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Corona
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Corona neighborhoods have HOAs, particularly in the newer
                developments like Eagle Glen and Sierra Del Oro. Homeowners often
                worry about getting approval for solar panels, but here&apos;s
                the good news: under California&apos;s Solar Rights Act (Civil
                Code § 714), your HOA <strong>cannot prohibit</strong> you from
                installing solar panels. They can impose reasonable aesthetic
                restrictions (like panel placement or color preferences), but any
                restriction that increases your system cost by more than $1,000
                or reduces efficiency by more than 10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, most Corona HOAs have streamlined their solar
                approval process because so many homeowners are going solar. You
                typically submit an architectural review application, and if the
                HOA doesn&apos;t respond with a written denial within 45 days,
                your application is deemed approved by default. If your HOA gives
                you pushback, the law is clearly on your side — and they can be
                liable for damages plus your attorney&apos;s fees if they
                unreasonably block your installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Corona
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Corona is on SCE&apos;s NEM 3.0 (Net Billing) tariff, which
                means the excess solar energy you send back to the grid earns
                only 5-8 cents per kWh — far less than the 34-50 cents you pay
                to buy it back during peak hours. This is why battery storage has
                become essential for maximizing savings in Corona.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you store excess daytime solar and use it during
                peak evening hours (4-9 PM) when SCE rates are highest — exactly
                when Corona residents are running AC most intensely. A solar +
                battery system typically offsets 70-90% of your grid usage,
                compared to 40-60% with solar alone. For more detail on how this
                works, see our{' '}
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
                When Solar Doesn&apos;t Make Sense in Corona
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Corona homes, but there are
                situations where it may not be the right move. If your monthly
                bill is under $150 (uncommon in Corona given the hot climate),
                the savings may not justify the complexity. If your roof is
                north-facing with heavy shade from mature trees or a hillside,
                production will be low — check Google Project Sunroof first. If
                your roof needs replacement in the next 3-5 years, handle that
                before installing panels. And if you&apos;re planning to sell
                within 1-2 years, the timing may not work (though PPAs can
                transfer to the buyer).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Corona-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>EV owners:</strong> Corona has a high concentration of
                dual-income professional families, and many drive EVs or are
                considering them. If you own or are planning to buy an electric
                car, solar + EV charging is a natural combo. You can charge
                during off-peak hours (before 4 PM) using solar energy or stored
                battery, cutting your EV charging cost in half compared to peak
                charging rates. Some Corona residents are already combining solar
                PPAs with dedicated EV charging stations.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Pool ownership:</strong> Many Corona homes, especially in
                Sierra Del Oro and Eagle Glen, have pools. Pool pumps running
                during peak hours (4-9 PM) can add $60-$100/month to your bill.
                Switching your pool pump to run during morning off-peak hours is
                a free way to cut costs immediately, and solar can offset the
                remaining pool energy costs.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>New construction and built-in solar:</strong> If you
                recently bought in Sierra Del Oro, Eagle Glen, or another new
                development, your home may have been built with solar-ready
                conduit and electrical panels. This reduces installation
                complexity and cost. California&apos;s Title 24 building code
                requires solar on most new homes built after 2020, so if your
                home already has builder-installed solar, check whether you own
                it or if it&apos;s under a lease/PPA from the builder.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Commute patterns:</strong> Corona is a major commuter
                city — many residents drive to Orange County, LA, or San Diego
                for work via the 91 and 15 freeways. If you&apos;re commuting
                long distances and charging an EV, solar becomes even more
                valuable. You can pre-cool your home and charge your car during
                off-peak morning hours for maximum savings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Corona in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 7.3 kW system costs approximately $17,000 before
                incentives if purchased outright. With a PPA, there is no upfront
                cost — you pay a fixed per-kWh rate (typically 18-25 cents) for
                the energy produced on your roof, compared to SCE&apos;s average
                of 34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Corona?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Corona residents pay approximately $357 per month on average, or
                about $4,284 per year. Summer bills are significantly higher for
                homes with central air conditioning running during peak rate
                hours.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels in Corona?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right to
                install solar. HOAs can request reasonable aesthetic changes, but
                cannot prohibit installation or impose restrictions that increase
                cost by more than $1,000 or reduce efficiency by more than 10%.
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
                The Bottom Line for Corona
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.6 peak sun hours per day, SCE rates at 34.5 cents and
                climbing 12.9% in 2026, and average bills around $357/month,
                Corona is one of the best cities in California for solar savings.
                Start with the free stuff — optimize your SCE rate plan and check
                for CARE/FERA eligibility. Then evaluate whether a cash purchase,
                loan, or PPA makes sense for your situation. Your HOA
                can&apos;t stop you, the sun is on your side, and if you own an
                EV or are considering one, solar becomes an even smarter move.
                The math gets better every year as utility rates keep rising.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Corona Homeowner? See Your Options
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
