import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Sunrun Review 2026: California Solar + Vivint Solar, Compared',
  description:
    'Sunrun is the largest residential solar installer in the U.S. — here is an honest 2026 review for California homeowners, including what happened to Vivint Solar customers.',
  alternates: {
    canonical: '/solar-installers/sunrun-review',
  },
  openGraph: {
    title:
      'Sunrun Review 2026: California Solar + Vivint Solar, Compared',
    description:
      'What California homeowners need to know about Sunrun in 2026, including the Vivint Solar absorption and current reputation data.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sunrun Review 2026: California Solar + Vivint Solar, Compared',
  description:
    'An honest 2026 review of Sunrun for California homeowners, including what the Vivint Solar acquisition means for legacy customers.',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
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
    '@id': 'https://ratereliefca.com/solar-installers/sunrun-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'Sunrun',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '3.1',
    bestRating: '5',
  },
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
  },
  reviewBody:
    'Sunrun is the largest residential solar + storage provider in the U.S. Strengths: scale, VPP programs, Vivint Solar absorption. Concerns: very high BBB complaint volume, subcontractor quality variability, multiple class-action settlements.',
};

export default function SunrunReview() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>
                Home
              </Link>
              <span>/</span>
              <Link
                href='/best-solar-companies-california'
                className='hover:text-primary transition-colors'
              >
                Best Solar Companies in California
              </Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Sunrun Review</span>
            </nav>

            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Installer Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunrun Review 2026: California Solar + Vivint Solar,
                Compared
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>Updated April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>11 min read</span>
                </div>
              </div>
            </header>

            {/* Score */}
            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Our take
                </p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>
                  3.1 <span className='text-lg text-muted-foreground'>/ 5</span>
                </p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Best for
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  PPA/lease shoppers who want the biggest installed base
                  and VPP options
                </p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Think twice if
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  Post-install service quality is your top priority
                </p>
              </div>
            </div>

            {/* Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Sunrun (NYSE: RUN) is the largest residential solar and
                storage company in the United States with more than one
                million customers, roughly $3 billion in 2025 revenue, and
                operations in 22 states plus DC and Puerto Rico. For
                California homeowners, that scale is both Sunrun&apos;s
                biggest selling point and the thing that drives most of
                the complaints on its record. This review covers what
                Sunrun actually installs, how it prices, what the service
                experience looks like, and what happened to Vivint Solar
                customers after Sunrun absorbed the brand.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Sunrun Is, In One Paragraph
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun is a publicly traded residential solar and
                storage provider. Unlike Tesla or Qcells, Sunrun does
                not manufacture its own panels — it buys panels from
                third parties (recently Maxeon and REC), inverters from
                Enphase and SolarEdge, and batteries from Tesla (Powerwall),
                Lunar, and FranklinWH. What Sunrun does own is its
                financing: most of the company&apos;s installs are sold
                as a lease or a Power Purchase Agreement (PPA) where
                Sunrun retains ownership of the system and sells the
                electricity back to the homeowner at a fixed monthly
                payment.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pricing and Contract Structure (California)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun&apos;s average cash price in California ran around
                $3.33 per watt in 2025 — on the higher end of the
                installer spread. Most homeowners don&apos;t buy
                outright, however; Sunrun is known primarily for its
                Subscription (PPA) and lease products, which roll panels,
                batteries, and warranties into a single monthly payment
                with no upfront cost. The trade-off with a Subscription:
                you don&apos;t own the system, you don&apos;t claim the
                federal tax credit, and the contract typically includes
                an annual escalator (often 2.9 to 3.9%).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Storage attachment in Q4 2025 was 71% of new installs —
                unusually high, and consistent with NEM 3.0&apos;s push
                toward battery-integrated systems. If you&apos;re shopping
                Sunrun in 2026, expect the proposal to include a battery
                (Tesla Powerwall, Lunar, or FranklinWH depending on your
                market).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Install Timeline and Who Actually Shows Up
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun uses a hybrid model — direct W-2 installation
                crews in some markets, a large subcontractor network in
                others. California timelines from contract to PTO
                typically run 2 to 6 months, sometimes longer depending on
                your utility&apos;s interconnection queue. The crew that
                shows up at your house may be a Sunrun-badged team or it
                may be a subcontractor who works for several installers.
                This is the single biggest source of service-quality
                variability in the Sunrun experience.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Reputation, Complaints, and Lawsuits
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where Sunrun&apos;s scale cuts against it.
                Sunrun is BBB accredited, but the BBB profile shows
                approximately 4,045 complaints closed in the last three
                years. That is by far the highest complaint volume of any
                installer in our California comparison — roughly 225 times
                the complaint volume of Solar Optimum, a comparably
                California-focused installer, and considerably higher
                than the next closest national player.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Trustpilot sits at approximately 3.1 out of 5, with
                install-phase experiences rated more positively than
                post-install service. Class-action settlements over the
                last several years have covered deceptive marketing
                claims, and legacy issues inherited from the Vivint
                Solar acquisition. Connecticut&apos;s Attorney General
                brought a consumer-protection case in 2024, and ongoing
                California consumer protection concerns have been raised
                by multiple county-level agencies.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The recurring themes across complaints are consistent:
                systems under-producing versus modeled output, billing
                surprises, subcontractor quality variability, and slow
                post-install repairs. That does not mean every Sunrun
                install goes poorly — a million-plus customers is a
                million-plus data points, and plenty of them are happy —
                but the complaint rate is high enough that any California
                buyer considering Sunrun should go in with eyes open
                about the service experience.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Happened to Vivint Solar Customers?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun acquired Vivint Solar in 2020 for approximately
                $3.2 billion. By 2026, Vivint Solar is fully absorbed into
                Sunrun — the brand is effectively retired for new
                installs, and approximately 100,000 to 150,000 legacy
                Vivint Solar systems are now serviced under the Sunrun
                umbrella. If you&apos;re a legacy Vivint Solar customer,
                that means Sunrun is now the counterparty on your
                20-year PPA, your workmanship warranty, and your
                production guarantee. Your original contract terms don&apos;t
                change, but all service tickets, billing questions, and
                warranty claims now go through Sunrun.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Some legacy Vivint Solar complaints — deceptive sales
                practices, especially around PPA escalators — carried
                forward into the Sunrun entity as class-action exposure,
                and Sunrun has been managing those cases as part of its
                normal legal operations. If you bought from Vivint Solar
                and have a service issue, Sunrun&apos;s customer
                service is the right channel. If the service response is
                slow, state consumer-protection offices are generally
                receptive to written complaints.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Warranty
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun&apos;s flagship warranty on Subscription and lease
                products is a 25-year performance guarantee — if the
                system produces less than 90% of modeled output over its
                life, Sunrun makes up the difference. Workmanship warranty
                is also 25 years on those products. Panel, inverter, and
                battery warranties are from the underlying manufacturers
                (Maxeon, REC, Enphase, SolarEdge, Tesla, etc.) and are
                unaffected by Sunrun-specific issues.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Sunrun Makes Sense
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun makes the most sense for California homeowners who
                want a predictable fixed monthly payment without any
                upfront capital outlay, and who value participating in
                virtual power plant (VPP) programs — where you earn
                credits for letting Sunrun dispatch battery capacity back
                to the grid during peak hours. Sunrun&apos;s VPP footprint
                (roughly 4 GWh networked across its fleet as of 2025) is
                the largest of any residential installer, and the payments
                are real.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun makes less sense if you want to own your system
                and claim the federal tax credit outright (pricing is
                higher than competitors), if you value post-install
                service quality above all else (complaint volume is high),
                or if you want a consistent install crew quality
                (subcontractor variability is real).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Sunrun going out of business?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    No. Sunrun is a publicly traded company (NYSE: RUN)
                    with approximately $3 billion in 2025 revenue and
                    continues to operate normally. You can read its
                    quarterly financial disclosures on the SEC&apos;s
                    EDGAR system for current financial health.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Sunrun still honoring Vivint Solar contracts?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. Legacy Vivint Solar PPAs, leases, and warranties
                    are now serviced by Sunrun under the original
                    contract terms. The Vivint Solar brand is effectively
                    retired, but your contract is still in force.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Does Sunrun install its own panels or use
                    subcontractors?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Both. Sunrun uses a hybrid model of direct W-2
                    installation crews and a large subcontractor network.
                    Which team shows up at your house depends on your
                    market. Ask during the proposal whether the install
                    crew will be Sunrun-direct or subcontracted.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    What panels does Sunrun install?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Sunrun buys panels from multiple third-party
                    manufacturers — Maxeon and REC have been recent
                    suppliers. Sunrun does not manufacture its own
                    panels. For batteries, expect a Tesla Powerwall, Lunar,
                    or FranklinWH depending on the market and availability.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>
                Considering Sunrun? Compare With Two Other Installers
                First.
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                California Rate Relief works with multiple top-rated
                California solar installers. Fill out one 60-second form
                and we&apos;ll bring you quotes from up to three
                installers — including Sunrun — so you can compare
                pricing, equipment, and warranty terms side by side
                before you commit.
              </p>
              <div className='flex justify-center'>
                <Link
                  href='/#qualify'
                  className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                >
                  Get My 3 Quotes
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                Free. No obligation. No impact on your credit score.
              </p>
            </div>

            {/* Related */}
            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>
                More California Installer Reviews
              </h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link
                  href='/solar-installers/freedom-forever-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Freedom Forever Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
                <Link
                  href='/solar-installers/tesla-solar-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Tesla Solar Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
                <Link
                  href='/solar-installers/sunpower-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      SunPower Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
                <Link
                  href='/solar-installers/solar-optimum-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Solar Optimum Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
              </div>
            </div>

            <div className='mt-10'>
              <Link
                href='/best-solar-companies-california'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Best Solar Companies in California
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
