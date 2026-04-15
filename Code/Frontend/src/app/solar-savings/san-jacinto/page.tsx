import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in San Jacinto, CA: 2026 Rates, Costs & Your Options',
  description:
    'San Jacinto residents pay ~$318/month for electricity. Learn your actual SCE rate, what solar costs in San Jacinto in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/san-jacinto',
  },
  openGraph: {
    title: 'Solar Savings in San Jacinto, CA: 2026 Rates, Costs & Options',
    description:
      'San Jacinto residents pay ~$318/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — San Jacinto',
  url: 'https://ratereliefca.com/solar-savings/san-jacinto',
  description:
    'Helping San Jacinto homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'San Jacinto',
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
      name: 'How much does solar cost in San Jacinto in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 9.3 kW solar system in San Jacinto costs approximately $21,800 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in San Jacinto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Jacinto residents pay an average of approximately $318 per month for electricity, or about $3,816 per year. This is roughly 30% higher than the national average, driven by SCE\'s rates and the extreme summer heat in the San Jacinto Valley.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in San Jacinto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does San Jacinto get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Jacinto averages approximately 3,300 hours of sunshine per year with 5.9 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes San Jacinto an excellent location for solar energy production.',
      },
    },
  ],
};

export default function SanJacintoSolarPage() {
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
                San Jacinto, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in San Jacinto: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for San Jacinto homeowners — your local rates,
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
                <div className='text-2xl font-bold text-foreground'>$318</div>
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
                <div className='text-2xl font-bold text-foreground'>55K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                San Jacinto is a mid-sized city in the San Jacinto Valley, east
                of Hemet and in the heart of Southern California Edison territory.
                The city sits in one of the hottest regions in the Inland Empire,
                with summer temperatures regularly exceeding 105°F. That heat
                drives high air conditioning usage and higher-than-average
                electricity costs — with rates among the highest in the nation at 34.5¢/kWh with summer peaks reaching 58-74¢,
                San Jacinto homeowners are feeling real pressure on their bills.
                Here&apos;s a complete breakdown of what&apos;s happening and what
                you can actually do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What San Jacinto Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average San Jacinto household pays approximately $318 per
                month for electricity, or about $3,816 per year. That&apos;s
                roughly 30% above the national average, driven by SCE&apos;s
                rates, the extreme summer heat, and the prevalence of older homes
                with less efficient cooling systems.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s average residential rate is currently around 34.5
                cents per kWh, but that&apos;s an average across all hours.
                During peak time-of-use hours (4-9 PM), rates jump to 58-74
                cents per kWh. In San Jacinto, where AC demand peaks in the
                afternoon and evening, most homes hit those peak rates during
                their heaviest usage periods. If you&apos;re running cooling
                from 4-9 PM — which is nearly unavoidable in summer — you&apos;re
                paying the highest rate SCE offers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of per-kWh charges, there&apos;s now a $24.15 monthly
                fixed charge on every SCE bill regardless of usage. Combined with
                rates among the highest in the nation and multi-year increases already
                approved through 2028, a typical San Jacinto household using 950+
                kWh per month can expect summer bills of $340 to $390 or higher.
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
                (time-of-use) plans, and many San Jacinto households are on a
                default plan that isn&apos;t optimal for them. The rate comparison
                tool in your account will show you what you&apos;d pay on each
                plan based on your actual last 12 months of usage. Switching is
                free and takes minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In San Jacinto specifically, consider the early morning advantage:
                if you can shift heavy loads to before 4 PM (or after 9 PM), you
                can save 10-15% just by being on the right TOU plan. Pre-cooling
                your home before peak hours, running laundry and dishwashing in
                the morning, and using window shades aggressively in afternoon sun
                are high-impact, free moves.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers income-based discount programs that many qualifying
                San Jacinto households haven&apos;t applied for.{' '}
                <strong>CARE</strong> provides a 30-35% discount on your entire
                bill if your household income is below certain thresholds.{' '}
                <strong>FERA</strong> offers an 18% discount for families of 3+
                with slightly higher income limits. Given San Jacinto&apos;s
                median income demographics, many residents are likely eligible.
                Check eligibility and apply at{' '}
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
                medical equipment (CPAP, home dialysis, powered wheelchair, etc.),
                you may qualify for <strong>Medical Baseline</strong>, which gives
                you additional electricity at the lowest rate tier.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                San Jacinto&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                San Jacinto is an excellent location for solar. The city sits at
                higher elevation in the valley, averages 3,300 hours of sunshine
                per year, and gets 5.9 peak sun hours per day for fixed-mount
                panels — well above the national average. The heat and low
                humidity mean consistent, year-round solar production. Clear
                desert air and minimal marine layer mean very few cloudy days.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                San Jacinto&apos;s housing stock is mixed: many older single-
                family homes, some mobile home and manufactured home communities,
                and newer tract developments on the outskirts. Mobile homes and
                manufactured homes need special consideration — solar can work but
                may require ground-mount or roof-reinforcement assessments due to
                lighter framing. You can check your specific home&apos;s solar
                potential for free at{' '}
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
                What Solar Costs in San Jacinto (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average San Jacinto household needs a 9.3 kW solar system to
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
                        Cash purchase (9.3 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$21,800
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~6.1 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (9.3 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $175-$245
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
                        $145-$195
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
                        $318+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for San
                Jacinto. Actual costs vary by roof, system size, mobile home
                considerations, and provider. PPA monthly costs include remaining
                utility charges ($24 fixed charge + any grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/san-jacinto/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s San Jacinto page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at least 3
                quotes before committing to any option.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in San Jacinto
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                San Jacinto has a mix of HOA and non-HOA neighborhoods. If you're
                in an HOA-governed community, here's what you need to know: under
                California's Solar Rights Act (Civil Code § 714), your HOA{' '}
                <strong>cannot prohibit</strong> you from installing solar panels.
                They can impose reasonable aesthetic restrictions (like panel
                placement preferences), but any restriction that increases your
                system cost by more than $1,000 or reduces efficiency by more than
                10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, most San Jacinto HOAs have streamlined their solar
                approval process because so many homeowners are going solar. You
                typically submit an architectural review application, and if the
                HOA doesn't respond with a written denial within 45 days, your
                application is deemed approved by default. If your HOA gives you
                pushback, the law is clearly on your side — and they can be liable
                for damages plus your attorney's fees if they unreasonably block
                your installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in San Jacinto
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                San Jacinto is on SCE's NEM 3.0 (Net Billing) tariff, which means
                the excess solar energy you send back to the grid earns only 5-8
                cents per kWh — far less than the 34-50 cents you pay to buy it
                back during peak hours. This is why battery storage has become
                essential for maximizing savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you store excess daytime solar and use it during
                peak evening hours (4-9 PM) when SCE rates are highest. A solar +
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
                California's Self-Generation Incentive Program (SGIP) may still
                offer rebates for battery storage — check current availability at{' '}
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
                When Solar Doesn&apos;t Make Sense in San Jacinto
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most San Jacinto homes, but there are
                situations where it may not be the right move. If your monthly
                bill is under $100 (uncommon in San Jacinto given the heat), the
                savings may not justify the complexity. If you own a mobile home
                or manufactured home with structural concerns, consult a specialist
                before committing. If your roof needs replacement in the next 3-5
                years, handle that first. And if you're planning to sell within
                1-2 years, the timing may not work (though PPAs can transfer to
                the buyer).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                San Jacinto-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Manufactured home owners:</strong> If you live in one of
                San Jacinto's many mobile home or manufactured home communities,
                solar is absolutely achievable but requires special attention.
                Ground-mount systems are a common alternative to roof-mount if
                roof loading is a concern. Some communities have their own solar
                programs or allow community solar systems. Check with your park
                management first — many are now embracing solar as a way to lower
                resident bills.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Extreme heat advantage:</strong> The hotter your area, the
                more you benefit from solar. San Jacinto's 105-110°F summer days
                mean higher AC loads but also consistent, strong solar output.
                Modern panels actually perform well in heat, and the
                year-round consistency of San Jacinto's sun is a major asset.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Community solar alternative:</strong> If your roof isn't
                suitable (heavy shade, roof condition, mobile home constraints),
                California's community solar programs may allow you to subscribe to
                a solar farm in the area. You won't own the panels, but you'll
                benefit from solar production and savings. Ask about availability
                at your utility office or via EnergySage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in San Jacinto in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 9.3 kW system costs approximately $21,800 before
                incentives if purchased outright. With a PPA, there is no upfront
                cost — you pay a fixed per-kWh rate (typically 18-25 cents) for
                the energy produced on your roof, compared to SCE's average of
                34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in San Jacinto?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                San Jacinto residents pay approximately $318 per month on average,
                or about $3,816 per year. Summer bills can be significantly higher
                for homes with central air conditioning due to the extreme valley
                heat.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California's Solar Rights Act protects your right to install
                solar. HOAs can request reasonable aesthetic changes, but cannot
                prohibit installation or impose restrictions that increase cost by
                more than $1,000 or reduce efficiency by more than 10%.
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
                The Bottom Line for San Jacinto
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.9 peak sun hours per day, SCE rates among the highest in the nation at 34.5 cents with summer peaks reaching 58-74 cents,
                and average bills around $318/month,
                San Jacinto is one of the best cities in California for solar
                savings. Start with the free stuff — optimize your SCE rate plan,
                check for CARE/FERA eligibility, and run your address through
                Google Project Sunroof. Then evaluate whether a cash purchase,
                loan, or PPA makes sense for your situation. Your HOA can't stop
                you (if you have one), the sun is on your side, and the math gets
                better every year as utility rates keep rising.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="sce" cityName="San Jacinto" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                San Jacinto Homeowner? See Your Options
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you're exploring the PPA route, check your eligibility for the
                California Rate Relief Program in about 60 seconds. No cost, no
                obligation.
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
