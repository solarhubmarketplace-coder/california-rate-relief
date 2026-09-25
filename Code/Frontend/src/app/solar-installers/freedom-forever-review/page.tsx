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
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox, type InstallerLicense, DGSTATS_LICENSE_BASIS } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { HubUpLink } from '@/components/growth/HubUpLink';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// License numbers tied to the company by a primary source; CSLB status checked September 24, 2026.
const FREEDOM_FOREVER_LICENSES: InstallerLicense[] = [
  { number: '1029644', holder: 'Freedom Forever LLC dba Freedom Forever', basis: DGSTATS_LICENSE_BASIS, status: 'under suspension (Employee/Worker Bond Suspension)', checked: 'September 24, 2026' },
  { number: '1125479', holder: 'Freedom Forever Northern California LLC dba Freedom Forever', basis: DGSTATS_LICENSE_BASIS, status: 'expired August 31, 2026', checked: 'September 24, 2026' },
  { number: '1124448', holder: 'Freedom Forever Southern California LLC dba Freedom Forever', basis: DGSTATS_LICENSE_BASIS, status: 'expired July 31, 2026', checked: 'September 24, 2026' }
];

export const metadata: Metadata = {
  title:
    "Freedom Forever Reviews (2026): Licenses & Financing",
  description:
    "Freedom Forever filed Chapter 11 in April 2026. Here is what its own site says about financing, warranty terms, CSLB licenses, and court filings.",
  alternates: {
    canonical: '/solar-installers/freedom-forever-review',
  },
  openGraph: {
    title:
      'Freedom Forever Solar Reviews (2026): Licenses, Financing, and What Its Site Doesn’t Say',
    description:
      'What the April 15 Chapter 11 filing means for existing Freedom Forever customers and anyone shopping for solar in California right now.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Freedom Forever Solar Reviews (2026): Licenses, Financing, and What Its Site Doesn’t Say',
  description:
    'Freedom Forever filed Chapter 11 on April 15, 2026. A plain-English review of what it means for customers and what Californians should do if they have a pending quote.',
  datePublished: '2026-04-22',
  dateModified: '2026-09-22',
  author: CRR_AUTHOR_PERSON,
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief',
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

// No Review/Rating JSON-LD here: Google's review-snippet rules require
// ratings for a local business or organization to come directly from users,
// not from editors, and this site does not collect user ratings
// (developers.google.com/search/docs/appearance/structured-data/review-snippet,
// fetched 2026-09-23).

export default function FreedomForeverReview() {
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
                href='/solar-installers'
                className='hover:text-primary transition-colors'
              >
                Solar company reviews
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
                    Status update, September 23, 2026
                  </p>
                  <p className='text-foreground font-semibold leading-relaxed'>Freedom Forever LLC filed Chapter 11 in Delaware on April
                    15, 2026, and the court signed an order converting the
                    case to Chapter 7 liquidation on August 7, 2026 (Bankr. D.
                    Del. No. 26-10522, Doc. 533;{' '}
                    <a
                      href='https://www.courtlistener.com/docket/73192534/freedom-forever-llc/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='underline'
                    >
                      docket
                    </a>
                    , checked September 23, 2026). Sections below that describe
                    a Chapter 11 reorganization describe the case before that
                    order.</p>
                  <p className='text-foreground font-semibold leading-relaxed'>For current steps, see{' '}
                    <Link href='/solar-installers/freedom-forever-bankruptcy-what-to-do' className='underline'>
                      what Freedom Forever customers should do now
                    </Link>
                    .</p>
                </div>
              </div>
            </div>

            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Installer Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Freedom Forever Solar Reviews (2026): Licenses, Financing,
                and What Its Site Doesn&apos;t Say
              </h1>

              <LastReviewedStamp date="2026-09-22" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-09-22'>Updated September 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>11 min read</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mt-6'>
                Freedom Forever filed for Chapter 11 reorganization on April 15, 2026 (covered in detail below). Separately from that, its own site currently advertises three financing paths — Purchase, Lease, and PPA — a 25-year production guarantee, and three California contractor licenses. Below is what freedomforever.com says, what its site still doesn&apos;t publish (a transfer-on-sale process), and what federal court records — not review-site scores — show about the complaint pattern.
              </p>
              <HubUpLink path="/solar-installers/freedom-forever-review" />
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
                    The case was converted to Chapter 7 liquidation by an
                    order signed August 7, 2026 (Bankr. D. Del. No.
                    26-10522). Promises made during the Chapter 11 period,
                    including about the 25-year production guarantee, should
                    not be relied on without written confirmation from
                    whoever now holds your agreement.
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

            {/* Bill-first step after the TL;DR; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Freedom Forever review and quote comparison" className="mb-10" />

            {/* Body */}
            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Freedom Forever in California after the Chapter 7 conversion
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>If you have a Freedom Forever system or contract in California,
                start from the court record rather than the company’s own site.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>The Delaware bankruptcy docket shows the main case converted to
                Chapter 7 by an order signed August 7, 2026, and lists Chapter 7
                cases for two affiliates, Freedom Forever Procurement LLC (No.
                26-10652) and Freedom Forever Pennsylvania, LLC (No. 26-10651),
                both filed May 2, 2026.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>The same docket records a court order
                approving a settlement between Freedom Forever LLC and Sunrun,
                including the rejection of certain agreements between them, and
                an order approving termination of an agreement between Freedom
                Forever LLC and EverBright LLC (
                <a
                  href='https://www.courtlistener.com/docket/73192534/freedom-forever-llc/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary underline'
                >
                  CourtListener
                </a>
                , checked September 23, 2026).</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>What that means for you depends on who holds your paperwork. If
                your lease, PPA or loan is with a financing company rather than
                Freedom Forever itself, contact that company about your agreement
                and payments. Equipment warranties come from the panel, inverter
                and battery makers, so file equipment claims with them directly.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Workmanship and roof coverage came from Freedom Forever itself, so
                document any problem in writing and ask how such claims are being
                handled in the case. Our guide to{' '}
                <Link href='/solar-installers/freedom-forever-bankruptcy-what-to-do' className='text-primary underline'>
                  what Freedom Forever customers should do
                </Link>{' '}
                and the broader page on{' '}
                <Link href='/solar-installers/solar-installer-bankruptcy-california' className='text-primary underline'>
                  what survives a solar company bankruptcy in California
                </Link>{' '}
                walk through the steps.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What the April 15 Chapter 11 Filing Actually Says
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>On April 15, 2026, Freedom Forever Solar, headquartered in
                Temecula, California with operations in Las Vegas, Nevada, filed a voluntary petition for Chapter 11 bankruptcy
                protection. Chapter 11 is not liquidation. It is a legal
                process that lets a company continue operating while it
                restructures its debts under court supervision.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>The company
                has indicated publicly that it plans to keep installing
                systems and servicing existing customers during
                restructuring.</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>The filing lists estimated liabilities of $500 million to $1
                billion against assets of $100 million to $500 million. The
                largest creditor is Mosaic Funding, the third-party loan
                provider Freedom Forever used to finance many customer
                systems, with a reported claim of roughly $120 million.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Before filing, the company had already laid off
                approximately 20% of its workforce and pulled out of more
                than ten state markets.</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>By installation volume, Freedom Forever was one of the
                largest residential solar companies in the country — roughly
                2 GW installed and about 6.1% of national market share in
                2025, placing it in the top two for U.S. residential solar
                volume. That is what makes the filing significant: this is
                not a small regional installer going under.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>It is one of
                the most active installers in California going through
                court-supervised restructuring with tens of thousands of
                in-state customers on its books.</p>

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

              <p className='text-foreground/80 leading-relaxed mb-6'>What <em>does</em> depend on Freedom Forever is the
                25-year production guarantee, workmanship warranty, and
                post-install service. The production guarantee is Freedom
                Forever&apos;s flagship promise: if your system under-produces
                the modeled output, they cut you a check for the difference. That obligation is now subject to the bankruptcy case.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>The
                company has stated it intends to keep honoring the
                guarantee during restructuring, but ultimately the court
                and the reorganization plan will determine how service
                obligations are treated going forward.</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>Panel, inverter, and battery manufacturer warranties are a
                separate matter. If Freedom Forever installed Qcells,
                Trina, or JA Solar panels on your roof, the panel
                warranty is between you and the panel manufacturer, not
                Freedom Forever. Same for Enphase microinverters or
                SolarEdge string inverters. Those manufacturer warranties
                do not disappear with Freedom Forever.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>What you may lose,
                depending on how the case resolves, is the workmanship
                warranty and the roof penetration warranty, Freedom
                Forever&apos;s own obligations — and the single point of
                contact for scheduling a repair.</p>

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

              <p className='text-foreground/80 leading-relaxed mb-6'>This is where the calculus changes sharply. If you have a
                Freedom Forever proposal on your kitchen table but
                haven&apos;t signed yet, you have flexibility — and you
                should use it to shop. A 25-year warranty is only as
                valuable as the company behind it.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>For a project that
                won&apos;t even reach PTO (Permission to Operate) for two
                to six months under normal timelines, it is reasonable to
                pause and compare.</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>If you&apos;ve already signed but the install has not yet
                started, look carefully at your contract&apos;s cancellation
                window and deposit terms. California solar contracts
                typically include a 3-day right of rescission by state law,
                and many installers offer a longer cancellation window
                before material is ordered.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>If you&apos;re outside both
                windows, consult an attorney before taking any action, a
                Chapter 11 filing does not automatically void existing
                contracts, and the company&apos;s intent during
                restructuring is to keep building systems.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Freedom Forever&apos;s Business Model (And How It Led Here)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Freedom Forever was founded in 2011 in Temecula, California
                and grew aggressively on the back of a dealer-and-sales
                network known internally as the LIGHTSPEED platform. Rather than a single in-house crew nationwide, the company
                combined direct-install teams with a large network of
                third-party dealers who sold and installed under the
                Freedom Forever brand.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>That model scaled faster than a
                pure in-house operation could, which is how the company
                reached 36 states and 2 GW of installs, but it also meant
                less direct quality control on what ended up on the roof. Customer complaints clustered predictably: install
                quality varied from crew to crew, post-install service
                was slow, and billing surprises were common.</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>On the financial side, Freedom Forever relied heavily on
                third-party lenders — Mosaic Funding most of all. to
                finance customer systems. When a residential solar company
                doesn&apos;t own its financing, the gross margin is
                thinner, and the company has less cushion when installs
                slow down.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>NEM 3.0&apos;s 75% cut to California export
                credits in April 2023 slowed California installs sharply
                across the whole industry, and interest rates through 2024
                and 2025 made loan-financed solar a harder sell. The
                combination squeezed installers that depended on third-party
                financing and scale, and Freedom Forever hit the wall in
                April 2026.</p>

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
                This review does not have a verified California price for
                Freedom Forever systems.
                Install-to-PTO timelines ran 1 to 3 months for installation
                and 2 to 6 months for full PTO, in line with other large
                installers working through utility interconnection
                queues.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California Contractor Licenses Freedom Forever Publishes
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Freedom Forever&apos;s own published license page lists three California CSLB numbers, not one: <strong>#1029644</strong> for Freedom Forever LLC (C10 Electrical, B General Building Contractor, C39 Roofing, C46 Solar), <strong>#1125479</strong> for Freedom Forever Northern California, LLC, and <strong>#1124448</strong> for Freedom Forever Southern California, LLC (freedomforever.com, Contractor Licenses, accessed September 22, 2026). The same three numbers are the ones reported for Freedom Forever on utility interconnection applications in California DG Stats (CPUC), data through May 31, 2026. An earlier version of this page cited #1015697; CSLB shows that number belongs to an unrelated framing contractor.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On CSLB&apos;s license lookup (checked September 24, 2026), none of the three was current and active. #1029644 (Freedom Forever LLC) was under suspension for an Employee/Worker Bond Suspension. #1125479 (Northern California) expired on August 31, 2026, and #1124448 (Southern California) expired on July 31, 2026. Status can change, so check the number on your contract at CSLB before you sign; see our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className='text-primary hover:underline font-medium'>
                  full contractor-verification walkthrough
                </Link>
                . Given the Chapter 11 case, confirming the specific entity name on your contract against one of these three numbers matters more than usual — a lease, PPA, or service agreement is with a specific LLC, not the &ldquo;Freedom Forever&rdquo; brand generally.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Freedom Forever Structures a Purchase
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Freedom Forever&apos;s own site names three financing paths: <strong>Purchase, Lease, and PPA</strong> (freedomforever.com, accessed September 22, 2026), on top of the third-party Mosaic loan financing already described above. It also brands a financing option <strong>&ldquo;Aura by Freedom Forever&rdquo;</strong> on its services page, without publishing rate, term, or down-payment detail there (freedomforever.com, accessed September 22, 2026). The site states that lease and PPA customers can &ldquo;take advantage of available tax credit benefits&rdquo; through those structures (freedomforever.com/why-go-solar/, accessed September 22, 2026) — get the specific mechanism in writing, since a lease or PPA customer typically doesn&apos;t claim the federal tax credit directly; the financing company does. No escalator rate, lease term length, or down-payment figure is published on its site (checked September 22, 2026) — ask for those in writing before signing, and see our{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary hover:underline font-medium'>
                  Solar Lease vs. PPA vs. Loan vs. Cash explainer
                </Link>{' '}
                for what each structure generally means.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How the Guarantee Actually Works, Bankruptcy Aside
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Independent of the bankruptcy question above, here&apos;s how the guarantee is supposed to work day-to-day: your system is monitored continuously, and if it underproduces relative to the estimate, Freedom Forever says it will &ldquo;make it right through repairs, equipment replacement, or financial compensation&rdquo; (freedomforever.com/faq/, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Underneath that guarantee, equipment carries its own manufacturer terms — solar panels typically 25-year product-and-performance coverage, inverters typically 10 to 25 years &ldquo;depending on brand and model&rdquo; (same source) — and workmanship is covered under Freedom Forever&apos;s own installation warranty. The company&apos;s stated exclusions include &ldquo;major shading changes or natural disasters.&rdquo;</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>None of this changes what the bankruptcy risk section above already tells you: whether any of it is honored going forward depends on the Chapter 11 outcome, not on what the website currently promises.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Requesting Service, and What Happens If You Sell
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>For a roof leak, Freedom Forever&apos;s own instructions say to email customer support &ldquo;right away&rdquo; and states the company will &ldquo;respond with urgency&rdquo;; for a production or equipment issue, it asks you to check the monitoring app, inverter status, and breakers first, then says it will &ldquo;schedule a service visit if needed&rdquo; (freedomforever.com/faq/, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>No published response-time commitment (a number of hours or days) appears on any service page we could reach.</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Freedom Forever&apos;s FAQ, guarantee page, and both service pages publish <strong>no process for transferring the system, the guarantee, or a Lease/PPA agreement to a home buyer</strong> (freedomforever.com, checked September 22, 2026) — unlike Sunrun and Palmetto, which each publish a step-by-step transfer flow on their own sites. That&apos;s a real gap, not an oversight in this review, and it&apos;s more consequential than usual given the open bankruptcy case.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-2'><strong>Questions to ask before you rely on any of this:</strong></p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Which of the three licensed entities — Freedom Forever LLC, Northern California LLC, or Southern California LLC — is the actual counterparty on your contract, and does its CSLB number match one of the three above?</li>
                <li>What&apos;s the written escalator rate and term length for a lease or PPA, and does &ldquo;Aura by Freedom Forever&rdquo; financing carry different terms than a third-party Mosaic loan?</li>
                <li>In writing: what happens to your guarantee, service commitment, and any remaining financing balance if you sell the home before the Chapter 11 case resolves?</li>
                <li>
                  If you already have a signed contract or an open Chapter 11 claim question, see our{' '}
                  <Link href='/solar-problems/solar-company-took-my-money-california' className='text-primary hover:underline font-medium'>
                    solar company took my money guide
                  </Link>{' '}
                  for what recourse generally looks like.
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Reputation & Complaint History
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Before the filing, Freedom Forever&apos;s customer
                reputation was already a weak spot. The Better Business
                Bureau did not accredit the company, and the BBB profile
                listed approximately 1,359 complaints closed in the prior
                three years. A high volume for any installer.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Trustpilot&apos;s rating sat at roughly 3.9 out of 5,
                buoyed by positive install-phase reviews but dragged down
                by a steady stream of post-install complaints.</p>

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
                What Federal Court Records Show (Not Review-Site Scores)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Beyond the BBB and Trustpilot figures above, federal court records offer a different, primary-source view. A search of CourtListener&apos;s RECAP database (federal PACER filings) for &ldquo;Freedom Forever&rdquo; turns up 42 dockets naming a Freedom Forever entity as a party, filed between 2019 and 2026 (courtlistener.com, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>The largest single category is claims under the <strong>Telephone Consumer Protection Act</strong> — unsolicited sales calls or texts — filed in Texas, California, Pennsylvania, and Massachusetts federal courts; the rest include diversity-jurisdiction fraud claims, a Fair Credit Reporting Act claim, a Truth in Lending Act claim, and a Magnuson-Moss Warranty Act claim (courtlistener.com, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Eight of the 42 are consumer telephone-marketing (TCPA) claims filed in California federal courts — four in the Southern District (<em>Ewing v. Freedom Forever, LLC</em>, filed 2020, 2023, 2024, and 2025), three in the Central District (<em>Bales</em>, 2023; <em>Clark</em>, 2024; <em>Shelton</em>, 2025), and one in the Northern District (<em>Naiman v. Freedom Forever, LLC</em>, filed 2019).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Two more California federal dockets name the company but aren&apos;t consumer complaints: an employment-discrimination removal (<em>Gomez</em>, C.D. Cal., 2022) and a supplier breach-of-contract claim Freedom Forever itself filed as plaintiff (<em>v. Silfab Solar Inc.</em>, S.D. Cal., 2024) (courtlistener.com, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>These are filed allegations, not court findings — a docket existing doesn&apos;t mean a court ruled against the company — but the pattern (repeated TCPA claims specifically) is a more concrete signal than a star rating.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Should You Still Consider Freedom Forever in California?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Honestly? No one can tell you with certainty how this
                bankruptcy plays out. Chapter 11 cases can take anywhere
                from several months to more than a year. The company may
                emerge smaller and more focused. Its assets may be
                acquired by another installer who takes on the service
                obligations.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Or the reorganization plan may leave existing
                customers dependent on manufacturer warranties and
                goodwill.</p>

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

              <p className='text-foreground/80 leading-relaxed mb-6'>California still has strong options across every price
                point and business model, national public companies,
                mid-sized private installers, and local CA-native
                operators. The right fit depends on your priorities
                (cheapest upfront vs. best warranty vs. simplest process),
                your utility, and the equipment you want on your roof.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Rather than guessing, the fastest way to see real
                side-by-side pricing for your address is to request
                multiple quotes at once.</p>

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

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    What CSLB license does Freedom Forever use in California?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Freedom Forever&apos;s own site lists three: #1029644, #1125479, and #1124448 (freedomforever.com, accessed September 22, 2026). On CSLB&apos;s lookup on September 24, 2026, #1029644 was under suspension (Employee/Worker Bond Suspension) and the other two had expired. Check whichever number is on your contract at CSLB before signing.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Does Freedom Forever say what happens to my contract if I sell my home?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Not on its public site as of September 22, 2026. Get that answer in writing from your sales rep before signing, especially while the Chapter 11 case is open.
                  </p>
                </div>
              </div>
            </div>

            {/* The closing ask (2026-09-23): the inquiry form itself. It replaces a
                link-only box that sent this page's readers to the home page and
                promised quotes this site cannot promise. */}
            <SolarInquiry
              variant="review"
              topic="Freedom Forever review and quote comparison"
            />

            <HubSpokeLinks hub='installer_reviews' currentPath='/solar-installers/freedom-forever-review' />

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
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="Freedom Forever" licenses={FREEDOM_FOREVER_LICENSES} />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
