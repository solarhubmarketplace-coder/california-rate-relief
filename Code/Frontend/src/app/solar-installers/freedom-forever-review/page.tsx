import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Clock,
  Calendar,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Freedom Forever Solar Review 2026: What the Chapter 11 Bankruptcy Means',
  description:
    'Freedom Forever filed Chapter 11 on April 15, 2026. Here is what the bankruptcy means for existing customers, pending installs, and California homeowners who got a quote — plus how to compare alternatives.',
  alternates: {
    canonical: '/solar-installers/freedom-forever-review',
  },
  openGraph: {
    title:
      'Freedom Forever Solar Review 2026: The Chapter 11 Bankruptcy, Explained',
    description:
      'What the April 15 Chapter 11 filing means for existing Freedom Forever customers and anyone shopping for solar in California right now.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Freedom Forever Solar Review 2026: What the Chapter 11 Bankruptcy Means',
  description:
    'Freedom Forever filed Chapter 11 on April 15, 2026. A plain-English review of what it means for customers and what Californians should do if they have a pending quote.',
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
    '@id':
      'https://ratereliefca.com/solar-installers/freedom-forever-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'Freedom Forever Solar',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Temecula',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '2.5',
    bestRating: '5',
  },
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
  },
  reviewBody:
    'Freedom Forever filed for Chapter 11 bankruptcy on April 15, 2026. Existing customers face uncertainty on long-term service and warranty fulfillment. New shoppers should obtain multiple quotes from financially stable installers before making a decision.',
};

export default function FreedomForeverReview() {
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
              <span className='text-foreground font-medium'>
                Freedom Forever Review
              </span>
            </nav>

            {/* Breaking News Banner */}
            <div className='mb-6 rounded-xl border-2 border-red-500/40 bg-red-500/10 p-5'>
              <div className='flex items-start gap-3'>
                <AlertTriangle className='h-6 w-6 text-red-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs font-bold uppercase tracking-widest text-red-300 mb-1'>
                    Breaking, April 15, 2026
                  </p>
                  <p className='text-foreground font-semibold leading-relaxed'>
                    Freedom Forever filed for Chapter 11 bankruptcy
                    protection on April 15, 2026. The company is continuing
                    to operate under restructuring. This review was last
                    updated April 22, 2026 with confirmed filing details.
                  </p>
                </div>
              </div>
            </div>

            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Installer Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Freedom Forever Solar Review 2026: What the Chapter 11
                Bankruptcy Means
              </h1>
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

            {/* TL;DR */}
            <div className='mb-10 rounded-xl border border-border bg-card p-6'>
              <h2 className='text-lg font-bold text-foreground mb-3 tracking-tight'>
                TL;DR
              </h2>
              <ul className='space-y-2 text-foreground/80 leading-relaxed'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Freedom Forever filed Chapter 11 on April 15, 2026 with
                    roughly $500M to $1B in liabilities against $100M to
                    $500M in assets.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    The company is still operating under restructuring and
                    says it intends to continue honoring its 25-year
                    production guarantee while the case proceeds.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Roughly 190,000 existing solar systems across the U.S.
                    depend on Freedom Forever for long-term service and
                    warranty support. The outcome of the bankruptcy case
                    will determine how those obligations are honored.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Pre-filing, Freedom Forever had 1,359 BBB complaints
                    over the prior three years and was not BBB accredited.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Anyone in California currently holding a Freedom
                    Forever quote should get at least two additional quotes
                    from financially stable installers before signing.
                  </span>
                </li>
              </ul>
            </div>

            {/* Body */}
            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What the April 15 Chapter 11 Filing Actually Says
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On April 15, 2026, Freedom Forever Solar, headquartered in
                Temecula, California with operations in Las Vegas, Nevada, filed a voluntary petition for Chapter 11 bankruptcy
                protection. Chapter 11 is not liquidation. It is a legal
                process that lets a company continue operating while it
                restructures its debts under court supervision. The company
                has indicated publicly that it plans to keep installing
                systems and servicing existing customers during
                restructuring.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The filing lists estimated liabilities of $500 million to $1
                billion against assets of $100 million to $500 million. The
                largest creditor is Mosaic Funding, the third-party loan
                provider Freedom Forever used to finance many customer
                systems, with a reported claim of roughly $120 million.
                Before filing, the company had already laid off
                approximately 20% of its workforce and pulled out of more
                than ten state markets.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                By installation volume, Freedom Forever was one of the
                largest residential solar companies in the country — roughly
                2 GW installed and about 6.1% of national market share in
                2025, placing it in the top two for U.S. residential solar
                volume. That is what makes the filing significant: this is
                not a small regional installer going under. It is one of
                the most active installers in California going through
                court-supervised restructuring with tens of thousands of
                in-state customers on its books.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What It Means If You Already Have a Freedom Forever System
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your panels are already installed and producing, not
                much changes in the short term. Your inverter will keep
                inverting. Your meter will keep spinning. Your utility will
                keep crediting you for exports under whichever NEM tariff
                you are on. None of that depends on Freedom Forever.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                What <em>does</em> depend on Freedom Forever is the
                25-year production guarantee, workmanship warranty, and
                post-install service. The production guarantee is Freedom
                Forever&apos;s flagship promise: if your system under-produces
                the modeled output, they cut you a check for the difference.
                That obligation is now subject to the bankruptcy case. The
                company has stated it intends to keep honoring the
                guarantee during restructuring, but ultimately the court
                and the reorganization plan will determine how service
                obligations are treated going forward.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Panel, inverter, and battery manufacturer warranties are a
                separate matter. If Freedom Forever installed Qcells,
                Trina, or JA Solar panels on your roof, the panel
                warranty is between you and the panel manufacturer, not
                Freedom Forever. Same for Enphase microinverters or
                SolarEdge string inverters. Those manufacturer warranties
                do not disappear with Freedom Forever. What you may lose,
                depending on how the case resolves, is the workmanship
                warranty and the roof penetration warranty, Freedom
                Forever&apos;s own obligations — and the single point of
                contact for scheduling a repair.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Practical steps for existing customers:</strong>{' '}
                locate your original contract and keep it. Locate your
                system&apos;s serial numbers and equipment spec sheets.
                Download any recent production data from the monitoring
                app. If you financed through Mosaic, keep paying your
                loan on schedule; Mosaic is the creditor, not Freedom
                Forever, and the loan obligation continues regardless of
                what happens to Freedom Forever.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What It Means If You Have a Pending Freedom Forever Quote
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where the calculus changes sharply. If you have a
                Freedom Forever proposal on your kitchen table but
                haven&apos;t signed yet, you have flexibility — and you
                should use it to shop. A 25-year warranty is only as
                valuable as the company behind it. For a project that
                won&apos;t even reach PTO (Permission to Operate) for two
                to six months under normal timelines, it is reasonable to
                pause and compare.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;ve already signed but the install has not yet
                started, look carefully at your contract&apos;s cancellation
                window and deposit terms. California solar contracts
                typically include a 3-day right of rescission by state law,
                and many installers offer a longer cancellation window
                before material is ordered. If you&apos;re outside both
                windows, consult an attorney before taking any action, a
                Chapter 11 filing does not automatically void existing
                contracts, and the company&apos;s intent during
                restructuring is to keep building systems.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Freedom Forever&apos;s Business Model (And How It Led Here)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Freedom Forever was founded in 2011 in Temecula, California
                and grew aggressively on the back of a dealer-and-sales
                network known internally as the LIGHTSPEED platform.
                Rather than a single in-house crew nationwide, the company
                combined direct-install teams with a large network of
                third-party dealers who sold and installed under the
                Freedom Forever brand. That model scaled faster than a
                pure in-house operation could, which is how the company
                reached 36 states and 2 GW of installs, but it also meant
                less direct quality control on what ended up on the roof.
                Customer complaints clustered predictably: install
                quality varied from crew to crew, post-install service
                was slow, and billing surprises were common.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On the financial side, Freedom Forever relied heavily on
                third-party lenders — Mosaic Funding most of all. to
                finance customer systems. When a residential solar company
                doesn&apos;t own its financing, the gross margin is
                thinner, and the company has less cushion when installs
                slow down. NEM 3.0&apos;s 75% cut to California export
                credits in April 2023 slowed California installs sharply
                across the whole industry, and interest rates through 2024
                and 2025 made loan-financed solar a harder sell. The
                combination squeezed installers that depended on third-party
                financing and scale, and Freedom Forever hit the wall in
                April 2026.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Equipment, Pricing, and Install Timeline (Pre-Filing)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Pre-filing, Freedom Forever installed Qcells, Trina, and JA
                Solar panels, paired primarily with Enphase microinverters
                or SolarEdge string inverters. Battery options were
                third-party, typically Tesla Powerwall or Enphase IQ, and
                batteries were not vertically integrated with the company.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California pricing ran roughly $2.79 to $3.20 per watt
                installed, competitive with the national mid-market.
                Install-to-PTO timelines ran 1 to 3 months for installation
                and 2 to 6 months for full PTO, in line with other large
                installers working through utility interconnection
                queues.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Reputation & Complaint History
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before the filing, Freedom Forever&apos;s customer
                reputation was already a weak spot. The Better Business
                Bureau did not accredit the company, and the BBB profile
                listed approximately 1,359 complaints closed in the prior
                three years. A high volume for any installer.
                Trustpilot&apos;s rating sat at roughly 3.9 out of 5,
                buoyed by positive install-phase reviews but dragged down
                by a steady stream of post-install complaints.
                SolarReviews gave the company a composite of about 3.31
                out of 5.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Texas Attorney General had an open investigation into
                the company&apos;s sales practices before the filing, and
                Freedom Forever had also settled earlier Telephone Consumer
                Protection Act (TCPA) claims related to robocall marketing.
                The recurring themes across complaints were familiar for
                the dealer-network model: slow service response, billing
                surprises after install, subcontractor quality
                variability, and difficulty getting warranty work
                scheduled.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Should You Still Consider Freedom Forever in California?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Honestly? No one can tell you with certainty how this
                bankruptcy plays out. Chapter 11 cases can take anywhere
                from several months to more than a year. The company may
                emerge smaller and more focused. Its assets may be
                acquired by another installer who takes on the service
                obligations. Or the reorganization plan may leave existing
                customers dependent on manufacturer warranties and
                goodwill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a California homeowner making a 20 to 25 year decision
                today, that uncertainty is a real cost even if the final
                outcome turns out fine. The sensible move is to get
                comparable quotes from installers that are not currently
                in bankruptcy, weigh the equipment and warranty terms side
                by side, and make a decision based on full information.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Alternatives to Freedom Forever for California Homeowners
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California still has strong options across every price
                point and business model, national public companies,
                mid-sized private installers, and local CA-native
                operators. The right fit depends on your priorities
                (cheapest upfront vs. best warranty vs. simplest process),
                your utility, and the equipment you want on your roof.
                Rather than guessing, the fastest way to see real
                side-by-side pricing for your address is to request
                multiple quotes at once.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a more detailed comparison of every major installer
                operating in California, see our{' '}
                <Link
                  href='/best-solar-companies-california'
                  className='text-primary hover:underline font-medium'
                >
                  Best Solar Companies in California
                </Link>{' '}
                guide. If you want reviews of specific Freedom Forever
                competitors, start with{' '}
                <Link
                  href='/solar-installers/sunrun-review'
                  className='text-primary hover:underline font-medium'
                >
                  Sunrun
                </Link>
                ,{' '}
                <Link
                  href='/solar-installers/sunpower-review'
                  className='text-primary hover:underline font-medium'
                >
                  SunPower
                </Link>
                , and{' '}
                <Link
                  href='/solar-installers/tesla-solar-review'
                  className='text-primary hover:underline font-medium'
                >
                  Tesla Solar
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Freedom Forever going out of business?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    As of the April 15, 2026 filing, Freedom Forever is in
                    Chapter 11 reorganization, not liquidation. The
                    company has stated it intends to continue operating
                    and installing systems during restructuring. The
                    final outcome, whether the company emerges
                    reorganized, is acquired, or converts to Chapter 7
                    liquidation, will be determined by the bankruptcy
                    case.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Will my Freedom Forever warranty still be honored?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The company has stated it intends to honor its 25-year
                    production guarantee during restructuring.
                    Manufacturer warranties on your panels, inverters, and
                    batteries are separate from Freedom Forever and
                    remain in force regardless. How the workmanship and
                    roof penetration warranties are treated long-term
                    depends on the outcome of the Chapter 11 case.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    What should I do if I financed through Mosaic?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Keep paying your Mosaic loan on schedule. Mosaic is a
                    separate company and is actually Freedom Forever&apos;s
                    largest creditor in the bankruptcy, your loan
                    obligation is to Mosaic, not to Freedom Forever, and
                    continues unchanged.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Can I cancel a signed Freedom Forever contract
                    because of the bankruptcy?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    A Chapter 11 filing does not automatically void
                    existing contracts. California has a 3-day right of
                    rescission on home solicitation contracts, and many
                    contracts have additional cancellation windows.
                    Outside those windows, cancellation terms depend on
                    your specific agreement. If you&apos;re considering
                    cancelling a signed contract, consult an attorney
                    before acting.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Who is the largest creditor in the bankruptcy?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Mosaic Funding, the third-party loan provider Freedom
                    Forever used to finance many customer systems, is
                    listed as the largest creditor with a claim of
                    approximately $120 million.
                  </p>
                </div>
              </div>
            </div>

            {/* Multi-Quote CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>
                Holding a Freedom Forever Quote? Get 3 Competing Quotes
                Before You Sign.
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                California Rate Relief works with multiple top-rated
                California solar installers. Fill out one 60-second form
                and we&apos;ll bring you quotes from up to three
                financially stable installers for your address. So you
                can compare pricing, equipment, and warranty terms side
                by side before you commit to a 25-year decision.
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

            {/* Related Reviews */}
            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>
                More California Installer Reviews
              </h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link
                  href='/solar-installers/sunrun-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Sunrun Review
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
                  href='/solar-installers/momentum-solar-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Momentum Solar Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
              </div>
            </div>

            {/* Back */}
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
    </PublicLayout>
  );
}
