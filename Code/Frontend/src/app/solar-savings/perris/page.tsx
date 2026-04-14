import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Perris, CA: 2026 Rates, Costs & Your Options',
  description:
    'Perris residents pay ~$241/month for electricity. Learn your actual SCE rate, what solar costs in Perris in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/perris',
  },
  openGraph: {
    title: 'Solar Savings in Perris, CA: 2026 Rates, Costs & Options',
    description:
      'Perris residents pay ~$241/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Perris',
  url: 'https://ratereliefca.com/solar-savings/perris',
  description:
    'Helping Perris homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Perris',
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
      name: 'How much does solar cost in Perris in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 7 kW solar system in Perris costs approximately $16,500 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s rates averaging around 23-35 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Perris?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perris residents pay an average of approximately $241 per month for electricity, or about $2,892 per year. This is roughly 20% above the national average, driven by SCE\'s rates and Southern California\'s hot climate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Perris?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Perris get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perris averages approximately 3,250 hours of sunshine per year with 5.8 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Perris an excellent location for solar energy production.',
      },
    },
  ],
};

export default function PerrisSolarPage() {
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
                Perris, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Perris: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Perris homeowners — your local rates,
                solar costs, incentives, HOA rules, and every option for
                lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Zap className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>23¢</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. rate/kWh
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <DollarSign className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>$241</div>
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
                <div className='text-2xl font-bold text-foreground'>68K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Perris is a rapidly growing city in western Riverside County,
                driven by the logistics and warehouse boom. The city sits in
                Southern California Edison territory, where electricity rates are
                climbing year after year — up 12.9% in 2026 alone. Perris has a
                lower-than-average electric bill compared to neighboring areas,
                but that's relative; with more jobs and growth, property values
                are rising, and more homeowners are looking at long-term housing
                decisions. Here&apos;s a complete breakdown of what&apos;s
                happening and what you can actually do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Perris Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Perris household pays approximately $241 per month
                for electricity, or about $2,892 per year. That&apos;s roughly
                20% above the national average, but somewhat lower than other
                SCE cities in the region. This may reflect a mix of older homes
                with lower usage and some newer, more efficient construction in
                the newer neighborhoods.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your actual rate depends on your specific SCE rate plan and your
                usage pattern. Perris residents on average pay around 23 cents per
                kWh, but rates vary significantly by time of use. During peak
                time-of-use hours (4-9 PM), rates jump to 44-50 cents per kWh.
                Most households experience their peak usage during summer afternoons
                and early evenings, meaning they're paying the highest rates when
                they use the most electricity.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                There's also a $24.15 monthly fixed charge on every SCE bill
                regardless of usage. Combined with the 12.9% rate increase in 2026
                and multi-year increases already approved through 2028, a typical
                Perris household using 700-800 kWh per month can expect bills of
                $260 to $310 or higher in summer months.
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
                and check which rate plan you're on. SCE offers several TOU
                (time-of-use) plans, and many Perris households are on a default
                plan that isn't optimal for them. The rate comparison tool in
                your account will show you what you'd pay on each plan based on
                your actual last 12 months of usage. Switching is free and takes
                minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In Perris specifically, consider strategic load shifting: if you
                can run heavy electrical loads (laundry, dishwasher, EV charging)
                before 4 PM, you can save 10-15% just by being on the right TOU
                plan. Running your pool pump in the morning, pre-cooling your home
                before peak hours, and deferring major household appliances to
                off-peak times are all high-impact, zero-cost moves.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers income-based discount programs that many qualifying
                Perris households haven't applied for.{' '}
                <strong>CARE</strong> provides a 30-35% discount on your entire
                bill if your household income is below certain thresholds.{' '}
                <strong>FERA</strong> offers an 18% discount for families of 3+
                with slightly higher income limits. Check eligibility and apply at{' '}
                <a
                  href='https://www.sce.com/residential/assistance/care-fera'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE's CARE/FERA page
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
                Perris&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Perris is an excellent location for solar. The city averages
                3,250 hours of sunshine per year and 5.8 peak sun hours per day
                for fixed-mount panels — well above the national average. The
                relatively low humidity and clear air mean consistent, year-round
                solar production.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Perris has two distinct housing types: the older downtown core
                with smaller, 1960s-80s era homes, and rapidly growing newer
                tracts with modern single-family homes and townhomes. The newer
                neighborhoods tend to have more ideal roof angles and better roof
                condition, but older homes can be solar-friendly too if their
                roofs are in reasonable shape. Note that Perris Valley Airport and
                March Air Reserve Base are nearby — while most homes are fine for
                solar, some properties may have airspace restrictions worth
                checking. You can verify your specific home's solar potential for
                free at{' '}
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
                What Solar Costs in Perris (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Perris household needs a 7 kW solar system to cover
                their electricity usage. Here's what that looks like across
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
                        Cash purchase (7 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$16,500
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~4 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (7 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $130-$180
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~7-9 years
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
                        $110-$160
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
                        $241+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Perris.
                Actual costs vary by roof condition, system size, and provider.
                PPA monthly costs include remaining utility charges ($24 fixed
                charge + any grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/perris/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage's Perris page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at least 3
                quotes before committing to any option.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Perris
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Perris has both HOA-governed and non-HOA neighborhoods. If you're
                in an HOA community, here's what you need to know: under
                California's Solar Rights Act (Civil Code § 714), your HOA{' '}
                <strong>cannot prohibit</strong> you from installing solar panels.
                They can impose reasonable aesthetic restrictions (like panel
                placement preferences), but any restriction that increases your
                system cost by more than $1,000 or reduces efficiency by more than
                10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, most Perris HOAs have streamlined their solar
                approval process because so many homeowners are going solar. You
                typically submit an architectural review application, and if the
                HOA doesn't respond with a written denial within 45 days, your
                application is deemed approved by default. If your HOA gives you
                pushback, the law is clearly on your side — and they can be liable
                for damages plus your attorney's fees if they unreasonably block
                your installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Perris
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Perris is on SCE's NEM 3.0 (Net Billing) tariff, which means the
                excess solar energy you send back to the grid earns only 5-8
                cents per kWh — far less than the 23+ cents you pay to buy it
                back. This is why battery storage has become important for
                maximizing savings in Perris.
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
                When Solar Doesn&apos;t Make Sense in Perris
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Perris homes, but there are
                situations where it may not be the right move. If your monthly
                bill is under $100, the savings may not justify the complexity.
                If your roof is north-facing with heavy shade or has structural
                issues, production will be low or installation may not be feasible
                — check Google Project Sunroof first. If your roof needs
                replacement in the next 3-5 years, handle that before installing
                panels. And if you're planning to sell within 1-2 years and have
                lower home equity, the timing may not align with your goals
                (though PPAs can transfer to the buyer).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Perris-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Homeownership and long-term value:</strong> Perris is
                growing, and home values are rising as the logistics industry
                expands. If you recently bought or plan to stay long-term, solar
                makes strong financial sense — you'll benefit from the production
                over 10-20+ years. If you're early in your ownership or unsure
                about staying, run the numbers carefully. PPAs transfer to new
                owners, which can actually add appeal when you sell.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Industrial zone proximity:</strong> Some Perris homes are
                near the warehouse and industrial district. This is great for jobs
                and property appreciation, but check your address for any airspace
                restrictions from March Air Reserve Base before committing to
                rooftop solar. Ground-mount systems may be an alternative if needed.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Newer construction advantage:</strong> If you're in one of
                Perris's newer developments, your home may have been built with
                solar-ready wiring and structural readiness. This can reduce
                installation cost and complexity. California's Title 24 building
                code requires solar readiness on most homes, so check whether your
                builder included any solar infrastructure.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Perris in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 7 kW system costs approximately $16,500 before
                incentives if purchased outright. With a PPA, there is no upfront
                cost — you pay a fixed per-kWh rate (typically 18-25 cents) for
                the energy produced on your roof.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Perris?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Perris residents pay approximately $241 per month on average, or
                about $2,892 per year. This is lower than some neighboring SCE
                cities but still significantly above the national average.
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
                The Bottom Line for Perris
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.8 peak sun hours per day, relatively lower-than-regional
                rates, and an average bill around $241/month, Perris offers solid
                solar economics — especially with a 4-year payback for cash
                purchases. Start with the free stuff — optimize your SCE rate
                plan and check for CARE/FERA eligibility. Then evaluate whether a
                cash purchase, loan, or PPA makes sense for your situation and
                long-term housing plans. Your HOA can't stop you, the sun is on
                your side, and the math gets better every year as utility rates
                keep rising.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Perris Homeowner? See Your Options
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
