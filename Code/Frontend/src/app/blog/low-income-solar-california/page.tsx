import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    "Low-Income Solar in California: DAC-SASH, SASH, CARE, and FERA Programs",
  description:
    "California has multiple programs that make solar dramatically more affordable for low-income households: DAC-SASH (free solar), SASH, CARE, and FERA. Here is who qualifies and how each works.",
  alternates: {
    canonical: '/blog/low-income-solar-california',
  },
  openGraph: {
    title:
      "Low-Income Solar in California: DAC-SASH, SASH, CARE, and FERA Programs",
    description:
      "California programs that make solar affordable for low-income households — DAC-SASH, SASH, CARE, FERA. and who qualifies.",
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    "Low-Income Solar in California: DAC-SASH, SASH, CARE, and FERA Programs",
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
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
      'https://ratereliefca.com/blog/low-income-solar-california',
  },
};

export default function LowIncomeSolarCalifornia() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                California Solar Incentives
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Low-Income Solar in California: DAC-SASH, SASH, CARE, and
                FERA Programs
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-23'>April 23, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>9 min read</span>
                </div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                California has built one of the most comprehensive sets of
                low-income energy assistance programs in the country. For
                qualifying households, these programs combine to make solar
                dramatically more affordable. and in some cases fully
                subsidized. This guide walks through the four main
                California programs that lower-income homeowners should
                know about: DAC-SASH, SASH, CARE, and FERA. Each targets a
                different part of the affordability problem, and the
                eligibility rules differ.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DAC-SASH: Essentially Free Solar for Qualifying Households
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                DAC-SASH stands for &quot;Disadvantaged Communities, Single-Family Affordable Solar Homes.&quot; It is
                California&apos;s headline solar equity program and the
                strongest low-income solar benefit available in the state.
                For qualifying households, DAC-SASH provides a residential
                solar system at no cost, the installation, equipment, and
                interconnection are fully subsidized by the program.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                To qualify for DAC-SASH, a household typically must:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Own and live in a single-family home in a
                    Disadvantaged Community (DAC) as designated by
                    CalEnviroScreen (generally, census tracts in the top
                    25% for pollution burden and socioeconomic vulnerability).
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Be a PG&amp;E, SCE, or SDG&amp;E customer.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Meet low-income qualifications, typically household
                    income at or below 80% of area median income, OR
                    participation in another qualified income program
                    (CARE, FERA, CalFresh, Medi-Cal, etc.).
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Have a suitable roof for solar installation
                    (south/west facing, minimal shade, structurally sound).
                  </span>
                </li>
              </ul>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                DAC-SASH is administered by GRID Alternatives, a nonprofit
                partner of the CPUC. Applications are taken on a rolling
                basis subject to program funding. Wait times vary but
                qualified households typically receive installations
                within 6-18 months of application depending on region and
                program capacity.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                SASH: The Broader Single-Family Affordable Solar Program
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SASH — Single-Family Affordable Solar Homes; is the
                broader statewide program that DAC-SASH is a subset of.
                SASH provides solar for low-income homeowners across
                California who meet the income qualifications but aren&apos;t
                necessarily in a designated Disadvantaged Community. The
                subsidy is substantial. covering a major portion of the
                system cost — but not always 100% like DAC-SASH.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SASH eligibility is similar to DAC-SASH on income and
                ownership requirements but doesn&apos;t require the
                DAC census-tract designation. It&apos;s administered by
                GRID Alternatives and also operates on a waiting-list
                basis subject to program funding.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                CARE: California Alternate Rates for Energy (Utility Bill
                Discount)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                CARE is not a solar program — it&apos;s a utility rate
                discount that reduces electric bills by approximately 30-35%
                for qualifying low-income households. It&apos;s relevant to
                solar shoppers because CARE enrollment often qualifies you
                for DAC-SASH and SASH automatically, and because CARE rates
                change the math on whether solar makes financial sense
                compared to staying on the utility.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                CARE eligibility is based on household income:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    1-2 person household: up to $40,880/year (2025
                    guidelines — check current year)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>3 person household: up to $51,640/year</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>4 person household: up to $62,400/year</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Each additional person: add ~$10,760/year
                  </span>
                </li>
              </ul>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Alternatively, participation in certain public assistance
                programs (CalFresh/SNAP, Medi-Cal, SSI, WIC, etc.)
                automatically qualifies a household for CARE. You apply
                through your utility&apos;s website. PG&amp;E, SCE, and
                SDG&amp;E all have CARE enrollment portals.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                FERA: Family Electric Rate Assistance (Smaller Discount)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                FERA is CARE&apos;s sibling program for households that
                earn too much to qualify for CARE but still face energy
                cost burden. The discount is smaller, typically around
                12% off the electric bill — and income eligibility runs
                from the CARE upper limit to roughly 250% of the Federal
                Poverty Level.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                FERA is specifically for households with 3 or more people
                (FERA is designed for larger families just above CARE
                eligibility). 1-2 person households aren&apos;t eligible.
                Apply through your utility&apos;s bill assistance page.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How the Programs Interact
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s the useful part: these programs stack together
                to create a much better outcome than any one alone. A
                typical low-income California household might:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Enroll in CARE</strong> through their utility,
                getting a 30-35% discount on their monthly electric bill.
                This alone saves roughly $50-$80 per month for most
                households.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Apply for DAC-SASH or SASH</strong> through GRID
                Alternatives. If approved (and the applicant is in a DAC
                census tract), solar is installed at no or very low cost.
                CARE participation usually auto-qualifies the applicant on
                the income side.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Keep the CARE discount</strong> on the remaining
                utility portion of the bill (anything not offset by
                solar).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A household that started paying $250/month for electricity
                can end up paying roughly $30-$60 per month after CARE +
                DAC-SASH solar. The math is genuinely transformative for
                qualifying households.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What If You Don&apos;t Qualify for DAC-SASH or SASH?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most California households don&apos;t qualify for DAC-SASH
                or SASH, they target the lowest income tier. If your
                income is above those thresholds but you still find your
                utility bill painful, the standard options are still
                available: cash purchase, solar loan, solar lease, or a
                power purchase agreement (PPA). See our{' '}
                <Link
                  href='/blog/ppa-loan-vs-solar-lease-vs-cash-california'
                  className='text-primary hover:underline'
                >
                  PPA vs Loan vs Lease vs Cash comparison
                </Link>{' '}
                for the breakdown.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Rate Relief Program is a PPA — $0 down,
                fixed monthly rate below your current utility bill. It&apos;s
                designed for credit-worthy California homeowners who want
                solar without the upfront capital outlay. Most homeowners
                with a $150+ monthly utility bill and a credit score above
                650 qualify.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How to Apply
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CARE:</strong> apply online through your utility —
                PG&amp;E, SCE, SDG&amp;E, or smaller municipal utilities
                all have CARE enrollment pages. Takes about 10 minutes.
                Documentation of income or eligible program participation
                required.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>FERA:</strong> also through your utility. Same
                process as CARE, just different income tier.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>DAC-SASH / SASH:</strong> apply through GRID
                Alternatives at gridalternatives.org. Wait times vary;
                program funding is appropriated periodically and
                applications are processed in order.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Standard solar (PPA, loan, lease, or cash):</strong>{' '}
                for households above the low-income program thresholds,
                start with two or three quotes from reputable California
                installers and compare apples-to-apples.
              </p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Not Sure Which Program Fits Your Situation?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you qualify for DAC-SASH or SASH, apply through GRID
                Alternatives directly. If your income is above those
                thresholds, the California Rate Relief Program can give you
                a free eligibility check for our $0-down PPA option.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
