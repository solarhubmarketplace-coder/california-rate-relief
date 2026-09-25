import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
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
  } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox, type InstallerLicense, DGSTATS_LICENSE_BASIS } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { HubUpLink } from '@/components/growth/HubUpLink';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// License numbers tied to the company by a primary source; CSLB status checked September 24, 2026.
const SUNNOVA_LICENSES: InstallerLicense[] = [
  { number: '1003498', holder: 'Sunnova Energy Corporation', basis: DGSTATS_LICENSE_BASIS, status: 'revoked', checked: 'September 24, 2026' }
];

export const metadata: Metadata = {
  title: "Sunnova Reviews 2026: Is It Still in Business?",
  description: "Sunnova filed Chapter 11 in June 2025. What SEC and bankruptcy court filings show about the case, the dealer model, and what it means for customers.",
  alternates: {
    canonical: '/solar-installers/sunnova-review',
  },
  openGraph: {
    title:
      'Sunnova Reviews (2026): Is It Still in Business?',
    description:
      'What the 2025 Sunnova bankruptcy and SunStrong asset sale mean for the ~500,000 legacy customers and for California solar shoppers in 2026.',
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Sunnova Reviews (2026): Is It Still in Business?',
  description:
    'Sunnova filed Chapter 11 in June 2025 and assets transitioned to Solaris Assets / SunStrong Management. A plain-English review of what it means for customers.',
  datePublished: '2026-04-23',
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
    '@id': 'https://ratereliefca.com/solar-installers/sunnova-review',
  },
};

// No Review/Rating JSON-LD here: Google's review-snippet rules require
// ratings for a local business or organization to come directly from users,
// not from editors, and this site does not collect user ratings
// (developers.google.com/search/docs/appearance/structured-data/review-snippet,
// fetched 2026-09-23).

export default function SunnovaReview() {
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
              <span className='text-foreground font-medium'>Sunnova Review</span>
            </nav>

            {/* Status Banner */}
            <div className='mb-6 rounded-xl border-2 border-red-500/40 bg-red-500/10 p-5'>
              <div className='flex items-start gap-3'>
                <AlertTriangle className='h-6 w-6 text-red-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs font-bold uppercase tracking-widest text-red-300 mb-1'>
                    Status Update. 2025 Bankruptcy Completed
                  </p>
                  <p className='text-foreground font-semibold leading-relaxed'>
                    Sunnova filed for Chapter 11 bankruptcy in June 2025. The
                    bankruptcy is now complete, Sunnova&apos;s assets were
                    acquired by Solaris Assets (backed by its bondholders) and
                    transitioned to SunStrong Management, which now
                    administers the ~500,000 legacy customer accounts. The
                    brand continues, but the counterparty on every contract,
                    warranty, and service obligation has changed.
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
                Sunnova Reviews (2026): Is It Still in Business?
              </h1>

              <LastReviewedStamp date="2026-09-22" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>11 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-2 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Best for
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  Existing Sunnova customers needing to understand their
                  post-bankruptcy status
                </p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Not recommended for
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  New California solar shoppers — better options available
                </p>
              </div>
            </div>

            {/* TL;DR */}
            <div className='mb-10 rounded-xl border border-border bg-card p-6'>
              <h2 className='text-lg font-bold text-foreground mb-3 tracking-tight'>
                TL;DR
              </h2>
              <ul className='space-y-2 text-foreground/80 leading-relaxed'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Sunnova filed Chapter 11 in June 2025. Before the filing
                    it was a public company (NYSE: NOVA) with roughly
                    $839 million in 2025 revenue and approximately 500,000
                    customers.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Substantially all assets were acquired by Solaris Assets
                    (backed by Sunnova&apos;s bondholders) and are now managed
                    by SunStrong Management.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Sunnova was never vertically integrated — it sourced
                    third-party panels, inverters, and batteries and relied
                    heavily on a dealer/subcontractor network for
                    installation.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Pre-bankruptcy reputation was weak on post-install
                    service. Post-bankruptcy, those issues have continued and
                    in some cases worsened as the new owner focuses on
                    portfolio management.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    California shoppers comparing installers in 2026 have
                    stronger options. Legacy Sunnova customers should
                    understand their rights under the new ownership.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bill-first step after the TL;DR; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Sunnova review and quote comparison" className="mb-10" />

            {/* Body */}
            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Happened: The June 2025 Chapter 11
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova Energy International was, for most of its history, one
                of the largest residential solar-and-storage providers in the
                United States — a publicly traded company on the NYSE under
                the ticker NOVA, headquartered in Houston, with approximately
                500,000 customer agreements spread across multiple states.
                The business model was primarily lease and power purchase
                agreement (PPA), with Sunnova owning the system on the
                customer&apos;s roof and selling the electricity back for a
                fixed monthly rate.
              </p>
              <HubUpLink path="/solar-installers/sunnova-review" />

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In June 2025, Sunnova filed for Chapter 11 bankruptcy
                protection. Revenue for FY2025 was approximately $839 million,
                but the company was carrying unsustainable debt levels
                relative to the cash generated by its customer portfolio.
                NEM 3.0&apos;s 75% cut to California export credits hit the
                whole sector, interest rate pressure through 2024 and 2025
                made third-party-ownership economics thinner, and the
                balance-sheet math did not pencil out.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Through the bankruptcy process, substantially all of
                Sunnova&apos;s operating assets were sold to Solaris Assets, a
                vehicle backed by the company&apos;s bondholders. The sale
                closed and the ongoing portfolio, leases, PPAs, customer
                accounts, servicing operations. transitioned to a new
                operating company called SunStrong Management. The Sunnova
                brand name continues to be used for customer-facing
                communications, but the legal entity behind your contract, if
                you&apos;re a Sunnova customer, is no longer the pre-2025
                Sunnova.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>
                The bankruptcy, from the source documents
              </h3>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova Energy International Inc., along with affiliates
                Sunnova Energy Corporation and Sunnova Intermediate Holdings,
                LLC, filed for Chapter 11 protection on June 8, 2025, in the
                U.S. Bankruptcy Court for the Southern District of Texas
                (Houston Division), jointly administered under Case No.
                25-90160 before Judge Alfredo R. Perez (Sunnova Energy
                International Inc., Case No. 25-90160, U.S. Bankruptcy Court,
                S.D. Tex., accessed via court docket September 22, 2026). A
                related developer entity, Sunnova TEP Developer, LLC, had
                already filed on June 1, 2025 (Case No. 25-90153).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova&apos;s own SEC filing made the same day confirms the
                company intended to &ldquo;continue to operate their
                businesses and manage their properties as &lsquo;debtors in
                possession&rsquo;&rdquo; during the case, and separately
                disclosed that it expected the New York Stock Exchange to
                move to delist its common stock &mdash; while noting that
                delisting &ldquo;does not change its reporting requirements
                under the rules of the U.S. Securities and Exchange
                Commission&rdquo; (Form 8-K, Item 1.03 and Item 3.01, filed
                2025-06-09, accessed September 22, 2026). The filing also
                listed defaults triggered under four debt instruments &mdash;
                two bond indentures and two warehouse credit facilities
                &mdash; under Item 2.04.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The case closed out several months later: the
                court-approved plan&apos;s Effective Date was November 14,
                2025, at which point the plan was formally consummated (case
                docket, via restructuring.ra.kroll.com/Sunnova, the case&apos;s
                official noticing agent, accessed September 22, 2026).
                That&apos;s the point at which the asset sale and the shift
                to SunStrong Management became final, not just proposed.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can read the docket yourself: <a href='https://www.courtlistener.com/docket/70491405/sunnova-energy-international-inc/' className='text-primary underline underline-offset-2' target='_blank' rel='noopener noreferrer'>Sunnova Energy International Inc., No. 25-90160 (Bankr. S.D. Tex.)</a>, filed June 8, 2025 (CourtListener, checked September 24, 2026).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Utility records show the effect in California. Sunnova Energy Corporation (CSLB #1003498) is listed on 2,832 residential systems approved at PG&amp;E, SCE and SDG&amp;E in 2025, 94% of them leases or PPAs, but on 28 from January through May 2026 (<a href='https://www.californiadgstats.ca.gov/downloads/' className='text-primary underline underline-offset-2' target='_blank' rel='noopener noreferrer'>California Distributed Generation Statistics</a>, CPUC interconnection data through May 31, 2026, downloaded September 24, 2026).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What It Means for Existing Sunnova Customers
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your solar is already installed and producing, the
                short-term reality is similar to any residential solar owner:
                the panels keep producing, the inverter keeps inverting, and
                your utility keeps crediting exports under whichever NEM
                tariff you&apos;re on. That part doesn&apos;t depend on
                Sunnova or SunStrong.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                What <em>does</em> depend on the new ownership is the
                25-year performance guarantee, the lease or PPA payment
                administration, and post-install service (repairs,
                monitoring, billing disputes). The Chapter 11 plan provides
                that SunStrong honors the existing contract terms. Your
                monthly rate stays the same, your annual escalator stays the
                same, the 90% production guarantee persists. In practice,
                post-bankruptcy service response times have lengthened
                according to customer reports on BBB, Trustpilot and Reddit,
                as the new entity focuses on
                portfolio management rather than growth.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Manufacturer warranties on your panels, inverter, and battery
                are from the equipment makers themselves (not Sunnova) and
                are unaffected by the ownership change. Keep a copy of your
                original installation paperwork and the spec sheets for every
                component, if SunStrong service is slow on a warranty issue,
                you can sometimes pursue the manufacturer directly.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Practical steps for legacy Sunnova customers:</strong>{' '}
                confirm in writing (email is fine) that SunStrong is
                administering your specific contract. Keep paying your lease
                or PPA on schedule through the payment portal. Download and
                keep any production history from the monitoring app. If
                you&apos;re on a lease and considering selling your house,
                get the transfer-to-buyer process documented in writing
                before listing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova&apos;s own site states plainly: &ldquo;new owners have
                acquired substantially all of Sunnova&apos;s assets&rdquo;
                through the court-supervised sale process, and instructs
                existing customers to &ldquo;continue to make payments as
                usual until you receive updated instructions directly from
                SunStrong&rdquo; (sunnova.com, accessed September 22, 2026).
                For anyone with an installation that was still in progress
                when the case closed, the same page states SunStrong is
                working with GoodLeap, a financing company, &ldquo;to
                facilitate completion of certain in-progress
                installations,&rdquo; and that affected customers would be
                contacted by their original dealer or a GoodLeap
                representative (sunnova.com, accessed September 22, 2026).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Business Model & Why It Struggled
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova was never vertically integrated. It did not
                manufacture panels, inverters, or batteries — it bought
                equipment from third parties (Tesla Powerwall for batteries,
                a mix of Tier-1 panel brands, various inverters). Its
                installation work was handled primarily through a large
                network of local dealers and subcontractors rather than
                in-house W-2 crews. And while Sunnova owned its own leases
                and PPAs, the underlying financing still required capital
                markets access.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                That model — asset-light, dealer-heavy, capital-markets
                dependent. was efficient for scaling fast in the NEM 2.0
                era but brittle under rate pressure and the NEM 3.0
                transition. The dealer structure also created the
                service-quality pattern that dominates Sunnova&apos;s
                complaint record: great sales pitch, mixed install quality,
                slow post-install service. When a dealer moves on or
                closes, Sunnova/SunStrong becomes the default servicer for
                systems the dealer installed, and the service queue
                backs up.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>
                What &ldquo;dealer model&rdquo; means for a Sunnova customer
              </h3>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova didn&apos;t design, manufacture, or (in most cases)
                directly install anything. It financed and owned systems
                that independent local solar dealers sold and installed on
                its behalf, then bundled the resulting customer contracts
                &mdash; leases, loans, and power-purchase agreements &mdash;
                into portfolios (sunnova.com, accessed September 22, 2026).
                That&apos;s a materially different relationship than working
                with a company like Sunrun or Tesla Energy, which employ or
                directly manage their own install crews: with Sunnova, the
                entity that showed up at your house and the entity that owns
                your contract were usually two different companies.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                That split matters for two practical reasons. First, service
                quality varied by dealer, not just by Sunnova &mdash; a
                complaint pattern the reputation section below already
                reflects. Second, <strong>the CSLB license that matters for
                your installation is the dealer&apos;s, not Sunnova&apos;s</strong>
                &mdash; Sunnova itself does not appear to publish its own
                California contractor license, because Sunnova wasn&apos;t
                the licensed installer of record; your dealer was. Check
                whichever company&apos;s name is actually on your contract
                and permit at CSLB directly &mdash; see{' '}
                <Link
                  href='/solar-installers/how-to-verify-a-solar-contractor-california'
                  className='text-primary hover:underline font-medium'
                >
                  how to verify a California solar contractor
                </Link>
                . For how the dealer-fee markup embedded in a solar loan
                works more generally, see{' '}
                <Link
                  href='/solar-problems/solar-dealer-fees-explained'
                  className='text-primary hover:underline font-medium'
                >
                  solar dealer fees, explained
                </Link>
                , and for how lease, PPA, loan, and cash purchase compare as
                structures, see{' '}
                <Link
                  href='/blog/ppa-loan-vs-solar-lease-vs-cash-california'
                  className='text-primary hover:underline font-medium'
                >
                  PPA vs. loan vs. lease vs. cash in California
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Reputation Before and After the Bankruptcy
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova&apos;s pre-bankruptcy reputation was a weak point.
                BBB complaint volume ran into the thousands over the prior
                three-year period. Trustpilot ratings sat in the
                mixed-to-poor range, with install-phase
                experiences rated more positively than post-install service.
                Reddit&apos;s r/solar regularly warned new buyers about
                Sunnova&apos;s service response times. Legacy class-action
                exposure from earlier years continues through the new
                entity.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Post-bankruptcy, the customer-facing reputation has not
                improved. SunStrong&apos;s mandate is portfolio management —
                keep the existing customers paying, keep warranties from
                becoming a lawsuit. rather than growth or service
                excellence. For a California homeowner considering installing
                new solar in 2026, Sunnova is not a strong candidate. For
                existing customers, it&apos;s worth knowing what you have and
                what recourse options you have if service issues arise.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California-Specific Notes
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova historically served California through its dealer
                network rather than with direct crews. Post-bankruptcy, new
                California installs through the Sunnova brand are limited to
                portfolio-maintenance additions. A California homeowner
                shopping for solar in 2026 is unlikely to get a compelling
                proposal through the Sunnova channel compared to
                financially stable installers operating in-state — and
                certainly should weigh the long-duration warranty question
                carefully before committing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a detailed comparison of every major installer active in
                California in 2026, see our{' '}
                <Link
                  href='/best-solar-companies-california'
                  className='text-primary hover:underline font-medium'
                >
                  Best Solar Companies in California
                </Link>{' '}
                guide.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Sunnova still in business?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The Sunnova brand continues to operate, but the legal
                    entity behind customer contracts changed in 2025 after
                    Chapter 11. Operations are now administered by SunStrong
                    Management under ownership of Solaris Assets. Customer
                    accounts, leases, PPAs, and warranty obligations
                    transferred through the asset sale.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Will my Sunnova warranty still be honored?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    SunStrong administers the 25-year performance guarantee
                    and workmanship warranties that Sunnova previously
                    offered, per the Chapter 11 plan. Manufacturer warranties
                    on your panels, inverter, and battery are separate from
                    Sunnova entirely and are unaffected. Service response
                    times under the new ownership have been mixed according
                    to customer reports.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Do I still owe my Sunnova lease or PPA payments?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. The lease or PPA contract transferred to SunStrong
                    through the bankruptcy process. Keep paying on schedule
                    through the customer portal. If the payment address
                    changed, you&apos;ll have received a written notice from
                    SunStrong.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Should I consider Sunnova for a new solar install in
                    California?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    For most California shoppers in 2026, there are stronger
                    options. Sunnova&apos;s post-bankruptcy focus is
                    portfolio management rather than new-customer acquisition
                    or service excellence, and the complaint pattern that
                    preceded the bankruptcy has continued through the
                    transition. Compare at least two or three alternative
                    installers before committing to any proposal.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    If I want to leave my Sunnova lease, what are my options?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Early termination of a residential solar lease or PPA
                    typically requires paying off the remaining contract
                    value, which is often tens of thousands of dollars.
                    Transferring the contract to a buyer when selling your
                    home is usually the cheaper option — SunStrong should
                    have a transfer process documented. Consult the specific
                    terms of your contract before making any decision.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    What court handled the Sunnova bankruptcy, and is the
                    case over?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The U.S. Bankruptcy Court for the Southern District of
                    Texas, Case No. 25-90160, filed June 8, 2025. The
                    court-approved plan took effect November 14, 2025,
                    closing out the case (SEC Form 8-K; case docket via
                    restructuring.ra.kroll.com/Sunnova, accessed September
                    22, 2026).
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Whose CSLB license should I check if I already have a
                    Sunnova system?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Not Sunnova&apos;s &mdash; check the license of the
                    dealer who actually installed your system, since that&apos;s
                    the company that held the contractor license for the
                    job. See our{' '}
                    <Link
                      href='/solar-installers/how-to-verify-a-solar-contractor-california'
                      className='text-primary hover:underline font-medium'
                    >
                      contractor-verification walkthrough
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Multi-Quote CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>
                Shopping Solar in California? Compare Written Quotes Before
                You Sign.
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.
              </p>
              <div className='flex justify-center'>
                <Link
                  href='#solar-inquiry'
                  className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                >
                  Request a solar review
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Sunnova review and quote comparison" />
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
        <VerifyInstallerBox installerName="Sunnova" licenses={SUNNOVA_LICENSES} />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
