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
    'The Solar Tax Credit Expired in 2026. Here Are Your Best Options Now.',
  description:
    'The federal residential solar tax credit (Section 25D) ended December 31, 2025. A clear breakdown of what\'s gone, what\'s still available, and every option for going solar in 2026.',
  alternates: {
    canonical: '/blog/solar-tax-credit-expired-2026-options',
  },
  openGraph: {
    title:
      'The Solar Tax Credit Expired in 2026. Here Are Your Best Options Now.',
    description:
      'The residential solar tax credit ended. Here\'s exactly what changed and what every option looks like now.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'The Solar Tax Credit Expired in 2026. Here Are Your Best Options Now.',
  description:
    'The federal residential solar tax credit ended December 31, 2025. A breakdown of every option for California homeowners in 2026.',
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
    '@id':
      'https://ratereliefca.com/blog/solar-tax-credit-expired-2026-options',
  },
};

export default function SolarTaxCreditExpired() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"The Solar Tax Credit Expired in 2026. Here Are Your Best Options Now."} url="https://ratereliefca.com/blog/solar-tax-credit-expired-2026-options" datePublished="2026-04-14" dateModified="2026-04-24" description={"The federal residential solar tax credit (Section 25D) ended December 31, 2025. A clear breakdown of what's gone, what's still available, and every option for going solar in 2026."} />
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
                Solar Savings
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                The Solar Tax Credit Expired in 2026. Here Are Your Best Options
                Now.
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-14'>April 14, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>8 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The federal solar Investment Tax Credit for residential systems
                — Section 25D of the tax code — expired on December 31, 2025.
                There&apos;s a lot of confusion about what this means, so
                let&apos;s be precise: if you buy and own a new solar system
                placed in service in 2026 or later, there is no federal tax
                credit. Zero percent.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This article covers exactly what expired, what incentives are
                still available, and a straightforward comparison of every option
                for going solar in 2026 — including the situations where waiting
                or not going solar at all might be the right call.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Exactly Expired (and What Didn&apos;t)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Gone: The residential solar tax credit (Section
                25D).</strong> This used to cover 30% of the cost of a solar
                system you purchased and owned. For a $30,000 system, that was
                a $9,000 tax credit. As of 2026, that credit is 0% for new
                installations. If you installed solar in 2025 or earlier and
                haven&apos;t claimed the credit yet, you can still claim it on
                your 2025 taxes — it hasn&apos;t been retroactively removed.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Still alive: The commercial/business solar tax credit
                (Section 48E).</strong> This credit is still available at 30%
                (with potential bonuses up to 50% for domestic content and energy
                community qualifications) for systems owned by businesses. This
                is the credit that solar leasing and PPA companies use to reduce
                their costs — and it&apos;s why $0-down solar programs still
                exist in 2026 even though the residential credit is gone.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Still alive: California SGIP (Self-Generation Incentive
                Program).</strong> This state program provides rebates for battery
                storage systems, typically $200 to $1,000 per kWh of storage
                capacity depending on the budget step. SGIP can be combined with
                any solar installation type. Check current availability at the{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SGIP website
                </a>
                . Note: SGIP funds are limited and allocated on a first-come basis.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Still alive: Local utility rebates.</strong> Some
                municipal utilities and Community Choice Aggregators (CCAs) offer
                their own solar and storage incentives. These vary widely by
                location. Your installer or PPA provider can usually identify
                what&apos;s available in your area, or you can check the{' '}
                <a
                  href='https://www.dsireusa.org'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  DSIRE database
                </a>{' '}
                for a comprehensive list of incentives by ZIP code.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Your Four Options for Going Solar in 2026
              </h2>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>
                Option 1: Cash Purchase
              </h3>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>How it works:</strong> You buy the system outright. You
                own it. All the energy savings are yours.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Typical cost:</strong> $25,000 to $40,000 for a 7-10 kW
                system with battery, depending on your roof and local
                installation costs.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Payback period:</strong> Roughly 9 to 12 years without
                the tax credit, depending on your utility and usage. After
                payback, electricity is essentially free for the remaining 15+ years
                of the system&apos;s life.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Best for:</strong> Homeowners with cash available who plan
                to stay in their home for 15+ years and want maximum long-term
                savings. Over 25 years, this option produces the most total
                savings of any approach.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Where to compare quotes:</strong>{' '}
                <a
                  href='https://www.energysage.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage
                </a>{' '}
                lets you compare multiple installer quotes side by side. Get at
                least 3 quotes before deciding.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>
                Option 2: Solar Loan
              </h3>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>How it works:</strong> You finance the full purchase price
                through a solar loan. You own the system and make monthly loan
                payments.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>What to watch out for:</strong> Without the 30% tax credit
                to pay down the loan balance early, your monthly payments will be
                higher than they were for people who financed in 2024-2025. In many
                cases, the loan payment exceeds the utility savings for the first
                several years, meaning you&apos;re paying more per month until the
                loan is paid off. Watch for dealer fees hidden in loan terms —
                these can add 15-30% to the true cost of the system.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Best for:</strong> Homeowners who want to own their system
                but don&apos;t have the cash for a full purchase. Make sure the
                math works by comparing your projected loan payment + remaining
                utility bill versus your current utility bill. If the loan
                payment alone exceeds your current bill, the terms may not be
                favorable.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>
                Option 3: Solar Lease
              </h3>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>How it works:</strong> A company installs panels on your
                roof and you pay a fixed monthly lease payment, regardless of how
                much the system produces. You don&apos;t own the system.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Pros:</strong> $0 down, predictable payments, maintenance
                included.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Cons:</strong> You pay the same amount in cloudy months
                when the system produces less. Lease payments sometimes include
                annual escalators (1-3% per year), which can eat into savings over
                time. Read the escalator clause carefully — a 2.9% annual
                escalator means your payment increases roughly 50% over 15 years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Best for:</strong> Homeowners who want simplicity and
                don&apos;t want to think about their energy system at all. Less
                optimal for maximum savings.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>
                Option 4: Power Purchase Agreement (PPA)
              </h3>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>How it works:</strong> A company installs solar (and often
                a battery) on your roof at no cost. You pay a fixed per-kWh rate
                for the electricity the system produces. You don&apos;t own the
                system. The company claims the Section 48E commercial tax credit,
                which is why they can offer a rate below utility prices.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Typical PPA rate:</strong> 18 to 25 cents per kWh,
                compared to 34.5 to 46 cents per kWh from California utilities.
                Some PPAs have annual escalators; some offer flat rates for the
                full term. Flat-rate PPAs provide the most predictable savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Pros:</strong> $0 down, immediate savings from day one,
                maintenance and warranty included, battery often included. Your
                payment is tied to actual production, so you only pay for energy
                you receive.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Cons:</strong> You don&apos;t build equity in the system.
                If you sell your home, the PPA must transfer to the buyer (most
                are transferable, but the buyer must qualify). Total savings over
                25 years are less than a cash purchase because the PPA company
                keeps their margin.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Best for:</strong> Homeowners who want immediate savings
                with no upfront cost or risk, especially now that the residential
                tax credit is gone. The PPA effectively passes the benefit of the
                still-available commercial tax credit to you in the form of a
                lower rate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Side-by-Side Comparison
              </h2>

              {/* Comparison Table */}
              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>
                        &nbsp;
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Cash
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Loan
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Lease
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        PPA
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Upfront cost
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $25-40K
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        You own system?
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Yes
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Yes
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        No
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        No
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Day 1 savings?
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        No (payback)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Maybe
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Yes
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Yes
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        25-year savings
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Highest
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        High
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Moderate
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Moderate
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Maintenance
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        You handle
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        You handle
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Included
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Included
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Tax credit benefit
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        None (expired)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        None (expired)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Indirect
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Indirect
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense (Even Now)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Not every situation calls for solar, regardless of the tax credit
                situation. You should probably hold off if your monthly electric
                bill is under $100 (the savings may not justify the complexity of
                any solar arrangement), if you need a new roof within the next 3-5
                years (replace the roof first), if your roof faces north with
                heavy shade and no viable alternative mounting location, or if
                you&apos;re planning to sell your home within 1-2 years (a PPA
                transfer adds complexity to the sale, and you won&apos;t recoup a
                cash purchase).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What About Waiting for the Tax Credit to Come Back?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is a fair question. The residential credit has been extended
                and revived by Congress multiple times in the past, so it&apos;s
                possible it could return. However, there&apos;s no pending
                legislation to restore it as of early 2026, and the current
                political environment doesn&apos;t suggest it&apos;s imminent.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you wait and rates continue rising at 6-12% per year, you may
                end up paying significantly more in utility bills during the
                waiting period than you would have saved from a restored credit.
                For example, if you&apos;re paying $300/month and rates rise 10%,
                that&apos;s an extra $360 in the first year alone. Over 2-3 years
                of waiting, that adds up to $1,000+ in additional utility costs
                — and there&apos;s no guarantee the credit returns.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential solar tax credit is gone, and that changes the
                math — particularly for cash purchases and loans, where the
                payback period is now 3-5 years longer. But solar hasn&apos;t
                stopped making sense in California. The state&apos;s electricity
                rates are so far above the national average that the economics
                still work, especially through PPAs and leases that leverage the
                still-available commercial tax credit. The right option depends on
                your financial situation, how long you plan to stay in your home,
                and whether you prioritize ownership or simplicity.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Exploring the PPA Option?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program offers $0-down solar PPAs for
                qualifying homeowners. See if it makes sense for your situation.
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
                href='/blog/california-24-dollar-fixed-charge-explained'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog/nem-3-california-still-worth-it'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Next Article
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
