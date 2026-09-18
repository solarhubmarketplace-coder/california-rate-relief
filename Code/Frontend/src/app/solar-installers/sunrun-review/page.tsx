import { SolarInquiry } from '@/components/growth/SolarInquiry';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: "Sunrun Review 2026: Is It Still in Business?",
  description: "Sunrun 2026 business status from its own investor filings, plus PPA vs. lease terms and Tesla Powerwall availability, sourced and dated.",
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
  dateModified: '2026-09-18',
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


export default function SunrunReview() {
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
                California Installer Reviews
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
              
              <LastReviewedStamp date="2026-09-18" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-09-18'>Updated September 18, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>11 min read</span>
                </div>
              </div>
            </header>

            {/* Score */}
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
                Is Sunrun Going Out of Business in 2026?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On the evidence published at Sunrun&apos;s own investor-relations
                site, checked on <strong>September 18, 2026</strong>: no. There was
                no bankruptcy filing, Chapter 11 petition, restructuring
                announcement or wind-down notice posted there. The most recent item
                was a press release dated September 17, 2026, and the most recent
                results release was the company&apos;s second-quarter 2026 report
                dated August 5, 2026, which stated Aggregate Subscriber Value of
                $1.2 billion and Cash Generation of $23 million for the quarter.
                Source:{' '}
                <a
                  href='https://investors.sunrun.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary underline'
                >
                  Sunrun investor relations
                </a>
                , verified September 18, 2026.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Two limits on that answer, stated plainly. It is a point-in-time
                check of what the company itself had published as of that date, not
                a forecast and not an assessment of financial health. And the absence
                of a filing at that source is not proof that none exists anywhere; it
                is the absence of one where a public company would be required to
                announce it.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The question behind this search is usually not about the share price.
                It is: if this company fails, what happens to the system on my roof
                and the contract I signed? That is a contract question, and it is
                worth answering before signing rather than after. Under a lease or
                power-purchase agreement the system is owned by Sunrun or a financing
                entity, and the agreement &mdash; including your payment obligation
                and the transfer terms on a home sale &mdash; is an asset that can be
                sold or assigned to another party. Ask specifically who holds the
                agreement today, which entity is obliged to perform service and
                warranty work, what happens to those obligations on an assignment,
                and what your rights are if service stops. Take the answers from the
                signed documents rather than a sales conversation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you are reading this well after the verification date above, check
                the source yourself. A business-status claim has a short shelf life,
                which is why this page dates it.
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
                This page states no Sunrun price per watt. No primary,
                dated source publishing Sunrun&apos;s California cash pricing
                was obtained when this page was checked on September 18,
                2026, so no figure is asserted here. Ask for the cash price
                and the DC system size in writing and divide them yourself.
                Most homeowners do not buy
                outright in any case; Sunrun is known primarily for its
                Subscription (PPA) and lease products, which roll panels,
                batteries, and warranties into a single monthly payment
                with no upfront cost. The trade-off with a Subscription:
                you don&apos;t own the system, and the contract typically
                includes an annual escalator (often 2.9 to 3.9%). The
                federal credit is no longer a point of difference — a
                homeowner who buys gets none either, because IRC § 25D
                does not apply to expenditures made after December 31,
                2025. Sunrun, as the owner, is the party that may claim
                the § 48E commercial credit if its project qualifies.
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
                This page states no complaint count and no review-platform
                rating for Sunrun. The BBB, Trustpilot and review-aggregator
                figures previously shown here could not be re-verified at
                their own sources when this page was checked on September 18,
                2026, so they have been removed rather than carried forward
                with a stale date. Complaint counts and star ratings move
                continuously, and a figure without a verification date is not
                information.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Check them yourself, and note the date you looked. Sunrun&apos;s
                BBB profile carries its own accreditation status and a rolling
                three-year complaint count; Trustpilot, Google and the solar
                review aggregators each publish a current rating and review
                volume. Read the recent one-star reviews rather than the
                headline number: complaint <em>themes</em> are more durable and
                more useful than a score, and the themes are what you can ask
                about before signing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For litigation and regulatory history, search the company name
                directly in the public court record rather than relying on a
                summary. Federal dockets and opinions are searchable at{' '}
                <a
                  href='https://www.courtlistener.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary underline'
                >
                  CourtListener
                </a>
                ; state consumer-protection actions are published by the
                relevant state Attorney General&apos;s office. A settlement, a
                dismissal and a pending claim are materially different things,
                and a docket shows which is which. Any claim this page makes
                about a legal matter carries its own citation and date; where
                none appears, the page makes no claim.
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
                is among the larger residential fleets, though this page
                states no networked-capacity figure: none was re-verified at
                a primary source on September 18, 2026. Ask for the specific
                VPP program name, the credit calculation and how often the
                battery can be dispatched, in writing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun fits less well if you want to own the system outright,
                if post-install service responsiveness is your deciding factor,
                or if you want a single known install crew rather than whichever
                direct or subcontracted team covers your market. This page does
                not recommend or rank installers; it sets out what to verify.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Sunrun PPA vs. Lease: Which Should You Choose?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Both leave the system owned by Sunrun or a financing entity, and
                both mean you are buying an energy service rather than an asset.
                The difference is what the payment is calculated on:
              </p>

              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>
                  <strong>Under a power-purchase agreement</strong> you pay a rate
                  per kilowatt-hour the system actually produces. A weak production
                  year lowers the bill; a strong one raises it.
                </li>
                <li>
                  <strong>Under a lease</strong> you pay a fixed amount for the
                  equipment regardless of what it produces. The payment is
                  predictable, and production risk sits with you unless a separate
                  performance guarantee covers it.
                </li>
              </ul>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Neither is inherently better, and the choice is usually decided by
                four contract terms rather than the label: the escalator (whether the
                rate rises annually and by how much), the term length, the
                end-of-term options (renew, purchase, or removal and at whose cost),
                and the transfer provisions if you sell the home. Ask for those four
                in writing for both structures and compare them side by side. Since
                you are not buying the system, the federal residential credit is not
                available to you under either structure &mdash; the owner claims any
                credit. Work through{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>
                  cash, loan, lease and PPA obligations side by side
                </Link>{' '}
                before choosing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Does Sunrun Offer the Tesla Powerwall?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunrun does not manufacture batteries; it installs third-party
                units, and Tesla Powerwall has been among the battery products
                named on this page alongside Lunar and FranklinWH. Availability is
                the part that matters and the part that changes: which battery you
                can actually get depends on your market, current supply and what the
                proposal specifies on the day it is written.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                So treat this as a question for the proposal, not for a review page.
                Ask for the battery make and model, the usable kWh capacity, the
                continuous and peak power output, which circuits it is wired to back
                up, and whose warranty covers it &mdash; the battery manufacturer&apos;s
                or the installer&apos;s. If the proposal names a battery generically,
                that is a scope gap to close before signing. This page states no
                current Powerwall availability claim for Sunrun: none was verified at
                a primary source on September 18, 2026.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Sunrun going out of business in 2026?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Not on the evidence published at its own investor-relations
                    site, checked September 18, 2026: no bankruptcy filing,
                    Chapter 11 petition, restructuring announcement or wind-down
                    notice appeared there, and the company posted second-quarter
                    2026 results on August 5, 2026. That is a point-in-time check
                    of the company&apos;s own disclosures, not a forecast.{' '}
                    <a href='https://investors.sunrun.com/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>
                      Source
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Sunrun still in business?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, as of September 18, 2026, on the basis of the
                    investor-relations disclosures above. Because a business-status
                    answer goes stale quickly, check that source directly and note
                    the date you looked.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Did Sunrun file for bankruptcy?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    No bankruptcy or Chapter 11 filing was announced at Sunrun&apos;s
                    investor-relations site when it was checked on September 18,
                    2026. A public company is required to disclose such a filing, so
                    its absence there is meaningful &mdash; but it is the absence of a
                    disclosure at one source on one date, not a permanent finding.
                    Federal bankruptcy dockets are searchable at{' '}
                    <a href='https://www.courtlistener.com/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>
                      CourtListener
                    </a>{' '}
                    if you want to check the court record yourself.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Should I choose a Sunrun PPA or lease?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    A PPA charges for the kilowatt-hours produced; a lease charges a
                    fixed amount for the equipment. Under both, the system is owned by
                    Sunrun or a financing entity and any tax credit belongs to the
                    owner, not you. Decide on the escalator, term length, end-of-term
                    options and home-sale transfer terms rather than the label.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Does Sunrun offer the Tesla Powerwall?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Sunrun installs third-party batteries and Tesla Powerwall has
                    been among the products named on this page, but availability
                    varies by market and supply, and this page asserts no current
                    availability: none was verified at a primary source on
                    September 18, 2026. Ask the proposal to name the make, model,
                    usable capacity, backed-up circuits and warranty holder.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    How does Sunrun compare with other residential solar providers?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The structural difference is ownership: Sunrun sells mostly
                    third-party-owned lease and PPA arrangements, where many
                    California regional contractors sell systems you buy. That single
                    choice drives the tax treatment, the transfer process at sale and
                    who is responsible for service for 20 to 25 years. Direct
                    comparisons:{' '}
                    <Link href='/solar-installers/sunrun-vs-tesla-solar' className='text-primary underline'>
                      Sunrun vs. Tesla Solar
                    </Link>
                    ,{' '}
                    <Link href='/solar-installers/sunrun-vs-sunpower' className='text-primary underline'>
                      Sunrun vs. SunPower
                    </Link>{' '}
                    and the{' '}
                    <Link href='/solar-installers/palmetto-solar-review' className='text-primary underline'>
                      Palmetto Solar profile
                    </Link>
                    , which uses a comparable third-party-ownership model.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Sunrun still honoring Vivint Solar contracts?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Legacy Vivint Solar agreements are serviced under the Sunrun
                    umbrella on their original terms. If you hold one, confirm in
                    writing which entity is the current counterparty on your
                    agreement and where service and warranty claims should be sent.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Does Sunrun install its own panels or use subcontractors?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Both, depending on the market: Sunrun uses direct crews in some
                    areas and a subcontractor network in others, and it does not
                    manufacture panels. Ask during the proposal whether your install
                    crew will be Sunrun-direct or subcontracted, and get the
                    contracting entity&apos;s California licence number so you can
                    check it in the CSLB lookup below.
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
                California Rate Relief is a private referral service. Submit
                one short form and it may forward your inquiry to independent
                California providers, subject to availability, so you can
                compare pricing, equipment and warranty terms side by side
                before you commit. No installer is named as a partner and no
                provider is endorsed.
              </p>
              <div className='flex justify-center'>
                <Link
                  href='#solar-inquiry'
                  className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                >
                  Get My 3 Quotes
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                No cost to submit. No obligation. No impact on your credit score.
              </p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Sunrun review and quote comparison" />
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
                Back to California installer reviews
              </Link>
            </div>
            <RelatedGuides
              heading="What the agreement does over its full term"
              links={[
                { href: "/blog/solar-ppa-vs-lease-california", label: "How a PPA differs from a lease" },
                { href: "/blog/what-happens-to-solar-lease-when-i-sell-california", label: "What happens to the contract if the home is sold" },
                { href: "/blog/what-happens-if-stop-paying-solar-lease-california", label: "What default does to the agreement" },
                { href: "/solar-problems/solar-escalator-clause-explained", label: "What an annual escalator does to the later years" },
              ]}
            />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="Sunrun" cslbLicenseNumber="925340" bbbProfileUrl="https://www.bbb.org/us/ca/san-francisco/profile/solar-energy-contractors/sunrun-inc-1116-22011110" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
