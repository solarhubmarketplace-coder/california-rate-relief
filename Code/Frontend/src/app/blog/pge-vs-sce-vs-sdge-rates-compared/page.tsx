import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title:
    'PG&E vs. SCE vs. SDG&E: Which California Utility Customers Pay the Most in 2026?',
  description:
    'A side-by-side comparison of PG&E, SCE, and SDG&E rates in 2026, what\'s driving the differences, what each utility offers to lower your bill, and how solar savings compare across all three.',
  alternates: {
    canonical: '/blog/pge-vs-sce-vs-sdge-rates-compared',
  },
  openGraph: {
    title:
      'PG&E vs. SCE vs. SDG&E: Which Utility Customers Pay the Most in 2026?',
    description:
      'Compare California\'s three major utilities side by side: rates, fixed charges, programs, and solar savings potential.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'PG&E vs. SCE vs. SDG&E: Which California Utility Customers Pay the Most in 2026?',
  description:
    'A side-by-side comparison of California\'s three major utility rates in 2026, what drives the differences, and what you can do about it.',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/blog/pge-vs-sce-vs-sdge-rates-compared',
  },
};

export default function UtilityRatesCompared() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"PG&E vs. SCE vs. SDG&E: Which California Utility Customers Pay the Most in 2026?"} url="https://ratereliefca.com/blog/pge-vs-sce-vs-sdge-rates-compared" datePublished="2026-04-14" dateModified="2026-04-24" description={"A side-by-side comparison of PG&E, SCE, and SDG&E rates in 2026, what's driving the differences, what each utility offers to lower your bill, and how solar savings compare across all three."} />
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Utility Rates
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                PG&E vs. SCE vs. SDG&E: Which California Utility Customers Pay
                the Most in 2026?
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-14'>April 14, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>10 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                California has three major investor-owned utilities, and they
                don&apos;t charge the same rates. Whether you&apos;re with PG&E
                in the Bay Area, SCE in Los Angeles, or SDG&E in San Diego, your
                electricity costs are among the highest in the country — but the
                specifics differ significantly. This guide compares all three
                side by side and walks through what each utility offers to help
                you lower your bill.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                2026 Rate Comparison
              </h2>

              {/* Rate Comparison Table */}
              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>
                        &nbsp;
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        PG&E
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        SCE
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        SDG&E
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Avg. Residential Rate
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~41.5¢/kWh
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~34.5¢/kWh
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~45.7¢/kWh
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Monthly Fixed Charge
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$24.15
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$24.15
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$24.15
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Avg. Monthly Bill
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$270
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$250
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$325
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        2026 Rate Change
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~−5% (temporary)
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        −2 to −3%
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        +11.4%
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Peak TOU Rate
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~48-61¢/kWh
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~58-74¢/kWh
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~55-65¢/kWh
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Territory
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        N. &amp; Central CA
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        Greater LA area
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        San Diego area
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Customers
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~5.5 million
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~5 million
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~1.4 million
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Rates are approximate averages as of early 2026 and vary by rate
                plan, tier, and time of use. Sources: CPUC rate filings, utility
                rate schedules.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                SDG&E: The Highest Rates in the Continental U.S.
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SDG&E customers consistently pay the highest electricity rates
                of any major utility in the lower 48 states. At roughly 45.7
                cents per kWh, SDG&E is nearly triple the national average.
                Peak TOU rates can exceed 60 cents per kWh during summer
                evenings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Why so expensive?</strong> SDG&E has a smaller customer
                base (1.4 million versus PG&E&apos;s 5.5 million) to spread
                infrastructure costs across. San Diego County&apos;s wildfire
                risk means massive spending on grid hardening and liability
                insurance. SDG&E also invested heavily in importing natural gas
                for power generation, costs that flowed through to ratepayers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>What SDG&E offers to help:</strong> SDG&E has CARE (30-35%
                discount for qualifying incomes), FERA (18% discount for families
                of 3+), Medical Baseline, and a rate comparison tool in your
                online account. SDG&E also offers a Level Pay Plan that averages
                your bill over 12 months to smooth out summer spikes — it
                doesn&apos;t save money, but makes budgeting easier. Details at{' '}
                <a
                  href='https://www.sdge.com/residential/pricing-plans/about-our-pricing-plans'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SDG&E pricing plans
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                PG&E: A Temporary Dip (Don&apos;t Get Comfortable)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                PG&E is the only California utility with a projected rate
                decrease in 2026 — approximately 5%. This is largely due to
                lower-than-expected wildfire fund contributions and some
                regulatory true-ups, not a fundamental cost improvement. PG&E
                has multi-year rate increase requests pending before the CPUC
                that would push rates back up in 2027 and beyond.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Even with the temporary dip, PG&E&apos;s average rate of ~41.5
                cents per kWh is still roughly double the national average of 18 cents.
                PG&E&apos;s fixed charge of ~$24.15/month took effect in March
                2026.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>What PG&E offers to help:</strong> CARE and FERA
                discounts, Medical Baseline, a rate plan comparison tool in
                your online account, SmartAC and other demand response programs
                that pay you small credits for letting PG&E cycle your AC during
                extreme heat events, and rebates on energy-efficient appliances.
                Check{' '}
                <a
                  href='https://www.pge.com/en/account/rate-plans/find-your-best-rate-plan.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  PG&E&apos;s rate plan finder
                </a>{' '}
                to see if you&apos;re on the cheapest plan for your usage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                SCE: Rising the Fastest
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE sits in the middle on per-kWh rates (~34.5 cents) but surprised many with a 2-3% rate decrease in January 2026 instead of the projected increase. However, with peak TOU rates reaching 58-74 cents per kWh, the savings are offset by extremely high peak charges. SCE serves the greater Los Angeles area, the Inland Empire, and parts of Central California — some of the hottest regions in the state, where air conditioning drives heavy summer usage.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>The rate surprise:</strong> Unlike PG&E and SDG&E, SCE rates actually decreased 2-3% as of January 1, 2026, despite being in the middle of a massive wildfire mitigation program. The company is undergrounding thousands of miles of power lines in high-fire-risk areas — multi-billion-dollar capital projects that typically get added to the rate base. However, the 2026 decrease was due to specific regulatory adjustments. Going forward, expect rates to resume their upward trajectory.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>What SCE offers to help:</strong> CARE and FERA discounts,
                Medical Baseline, multiple TOU rate plans (use the rate comparison
                tool in{' '}
                <a
                  href='https://www.sce.com/mysce/myaccount'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE My Account
                </a>{' '}
                to find your cheapest option), rebates on smart thermostats and
                efficient appliances, and the Summer Discount Plan which provides
                bill credits in exchange for limited AC cycling during heat events.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What About Community Choice Aggregators (CCAs)?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many California communities have formed CCAs — local energy
                programs that purchase electricity on behalf of residents, using
                the existing utility grid for delivery. If you&apos;re in a CCA
                area, your rates may differ from the standard utility rates above.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Some CCAs offer rates slightly below or at parity with the default
                utility, with a higher percentage of renewable energy. Others are
                slightly more expensive. Check whether you&apos;re enrolled in a
                CCA (it&apos;s usually the default in CCA areas — you may have
                been switched without realizing it). You can opt out and return
                to your utility&apos;s bundled service at any time if the CCA
                rate isn&apos;t competitive. A list of California CCAs is
                available at{' '}
                <a
                  href='https://cal-cca.org/cca-members/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  CalCCA&apos;s member directory
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Actionable Steps for Any Utility Customer
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Regardless of which utility you&apos;re with, these steps can
                help reduce your electricity costs right now, at no cost.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Compare rate plans.</strong> Every utility offers
                multiple TOU plans. Log into your account and use the rate
                comparison tool to see which plan is cheapest based on your
                actual usage history. This is free, takes 10 minutes, and can
                save you 10-15%.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Check CARE/FERA eligibility.</strong> If your household
                income qualifies, you can get 18-35% off your entire bill. Many
                eligible households haven&apos;t applied. The income limits are
                higher than you might expect.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Check for Medical Baseline.</strong> If anyone in your
                household uses electricity-dependent medical equipment, you may
                qualify for extra electricity at the lowest rate tier.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>4. Shift heavy usage off-peak.</strong> All three utilities
                have significantly cheaper off-peak rates (typically before 4 PM
                and after 9 PM). Running your dishwasher, laundry, and EV charger
                during off-peak hours costs 40-50% less per kWh than peak hours.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>5. Check utility rebates before buying appliances.</strong>{' '}
                All three utilities offer rebates on energy-efficient appliances,
                smart thermostats, and weatherization. Check your utility&apos;s
                rebate page before buying anything — you might save $50 to $200.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Solar Savings Compare Across the Three Utilities
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Because utility rates differ significantly, solar savings also
                vary by utility. The higher your per-kWh rate, the more you save
                by offsetting grid purchases with solar.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a household paying $300/month, here&apos;s a rough comparison
                of what solar + battery savings look like across the three
                utilities (assuming a well-designed system with 75-85%
                self-consumption).
              </p>

              {/* Savings Comparison Table */}
              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>
                        &nbsp;
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        PG&E
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        SCE
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        SDG&E
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Current monthly bill
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $300
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $300
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $300
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Est. total with solar
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $190-$230
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $180-$220
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $170-$210
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Est. monthly savings
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $70-$110
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $80-$120
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $90-$130
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Est. year 1 savings
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $840-$1,320
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $960-$1,440
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $1,080-$1,560
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Estimates assume solar + battery PPA with 75-85%
                self-consumption. Actual savings depend on system size, roof
                orientation, usage patterns, and specific PPA rate. These
                numbers are for illustration only.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                These numbers grow each year because your solar rate stays fixed
                while utility rates continue rising. By year 5, monthly savings
                are typically 40-60% higher than year-1 figures.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Whether solar makes sense for you depends on more than just your
                utility — your roof condition, sun exposure, how long you plan to
                stay in your home, and your financial priorities all matter. Our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 guide
                </Link>{' '}
                walks through how to evaluate your specific situation step by step.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                All three California utilities charge rates far above the national
                average of 18 cents/kWh. SDG&E is the most expensive at 45.7 cents/kWh,
                followed by PG&E at 41.5 cents and SCE at 34.5 cents. While SCE posted a
                surprising 2-3% decrease in 2026, all three utilities have rate increases already
                approved through 2028. Before considering solar or any major change, start with
                the free stuff: check your rate plan, apply for CARE or FERA if eligible, and
                shift heavy usage off-peak. Those three steps alone can save 10-30% with zero
                investment. For longer-term protection against rates that keep climbing, solar
                with battery storage delivers the most meaningful savings across all three utility territories.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Curious About Your Savings Potential?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re exploring the PPA route, the California Rate
                Relief Program offers a quick eligibility check for PG&E, SCE,
                and SDG&E customers. 60 seconds, no obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/blog/nem-3-california-still-worth-it'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                All Articles
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
