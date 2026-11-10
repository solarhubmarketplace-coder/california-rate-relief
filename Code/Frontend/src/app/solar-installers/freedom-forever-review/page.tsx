// Freedom Forever review, retargeted 2026-11-09 to the two queries that pass a
// wall check: "freedom forever bankruptcy" (300/mo) and "freedom forever solar
// lawsuit" (250/mo). "freedom forever solar" (8,400/mo) is page-one-walled by
// the brand's own site, Reddit, Trustpilot and a DR-77 trade title, and
// "freedom forever solar reviews" carries a local pack at position 2. Neither
// of those two is a target here.
//
// COMPLIANCE NOTE for anyone editing this file:
//  - Every docket fact on this page traces to the CourtListener docket for
//    Bankr. D. Del. No. 26-10522, checked September 23, 2026, or to the court's
//    Chapter 7 notice (Doc. 568) as recorded there. Do not add a case number, a
//    bar date, a trustee name, a judge or a court that is not already on this
//    page and already attributed. Anything unverified stays out of rendered text.
//  - The three CSLB licence numbers, their statuses and their September 24,
//    2026 check date are a separate, earlier verification. Nothing in the
//    2026-11-09 pass re-read CSLB, freedomforever.com or CourtListener, so no
//    "checked" or "accessed" date on this page moved.
//  - No ratings or scores of our own. No BBB or Trustpilot figures are stated
//    or dated, and none is repeated here until re-checked against its source.
//  - California Rate Relief is a referral service, not a contractor. Never
//    write "our installers" or name any installer as a partner.
//  - General bankruptcy mechanics (the stay, priority, who the stay does not
//    protect) are described without statute numbers on purpose. If a reviewer
//    wants the cites, verify them against uscode.house.gov first.
//
// 2026-11-09 pass, what changed and why:
//  - The word "lawsuit" appeared zero times on a page that already summarised
//    42 federal dockets. Added the two litigation sections, the suing-versus-
//    claiming table and the lawsuit FAQ entries. No new docket facts.
//  - Added a faqs array and <FaqBlock>, which emits the FAQPage JSON-LD node
//    this page was missing, in place of the hand-written h3 list.
//  - Added two <DataTable>s: the California claim types the page already
//    summarised in prose, and lawsuit versus proof of claim.
//  - dateModified and the visible stamp moved to 2026-11-09 together. The
//    source dates did not move.
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
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { HubUpLink } from '@/components/growth/HubUpLink';
import { DataTable } from '@/components/growth/RateGuideParts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// License numbers tied to the company by a primary source; CSLB status checked September 24, 2026.
const FREEDOM_FOREVER_LICENSES: InstallerLicense[] = [
  { number: '1029644', holder: 'Freedom Forever LLC dba Freedom Forever', basis: DGSTATS_LICENSE_BASIS, status: 'under suspension (Employee/Worker Bond Suspension)', checked: 'September 24, 2026' },
  { number: '1125479', holder: 'Freedom Forever Northern California LLC dba Freedom Forever', basis: DGSTATS_LICENSE_BASIS, status: 'expired August 31, 2026', checked: 'September 24, 2026' },
  { number: '1124448', holder: 'Freedom Forever Southern California LLC dba Freedom Forever', basis: DGSTATS_LICENSE_BASIS, status: 'expired July 31, 2026', checked: 'September 24, 2026' }
];

// This page's own modification date, and nothing else. It must never be copied
// into a source "checked" or "accessed" date: every citation on this page
// carries its own September 2026 date inline, and bumping those would claim a
// re-verification that did not happen.
const UPDATED = '2026-11-09';

// The date the Delaware docket behind every court fact below was actually read.
// Unchanged on 2026-11-09 because the docket was not re-read in that pass.
const DOCKET_CHECKED = 'September 23, 2026';

// The date the CourtListener RECAP party search behind the 42-docket count was
// run. A day earlier than the bankruptcy docket check, and kept separate for
// that reason.
const RECAP_CHECKED = 'September 22, 2026';

// 52 characters. Both target queries lead; "review" stays because the page is
// still the installer review and still ranks as one.
const H1 = 'Freedom Forever Bankruptcy and Lawsuits: What California Customers Can Do';

export const metadata: Metadata = {
  title:
    "Freedom Forever Bankruptcy and Lawsuits: 2026 Review",
  description:
    "Freedom Forever's Chapter 11 became a Chapter 7 liquidation on August 7, 2026. What the federal lawsuits actually allege, and what a claim gets you.",
  alternates: {
    canonical: '/solar-installers/freedom-forever-review',
  },
  openGraph: {
    title: H1,
    description:
      'What the Chapter 7 conversion of August 7, 2026 means for existing Freedom Forever customers, and where a lawsuit goes once a company is in liquidation.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: H1,
  description:
    'Freedom Forever filed Chapter 11 on April 15, 2026, and the court converted the case to Chapter 7 liquidation on August 7, 2026. What the federal lawsuits against it allege, and where a California customer takes a claim now.',
  datePublished: '2026-04-22',
  dateModified: UPDATED,
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

// Visible Q&A and the page's FAQPage JSON-LD are built from these same
// strings by <FaqBlock>, so the markup can never describe text a reader cannot
// see. Every date, docket number and count below is one already stated and
// attributed in the body above — no new docket fact enters through the FAQ.
const faqs = [
  // DRAFT — NEEDS APPROVAL (2026-11-09): new disclaimer wording; owner has not approved it.
  {
    question: 'Is any of this legal advice?',
    answer:
      'No. California Rate Relief is a private referral service, not a law firm and not a contractor. The answers here describe general bankruptcy mechanics and the public court record in Bankr. D. Del. No. 26-10522. They are not advice about your situation, and nothing here creates a lawyer-client relationship. Have an attorney read your own contract before you act on any of it.',
  },
  {
    question: 'Is the Freedom Forever bankruptcy a Chapter 11 or a Chapter 7?',
    answer:
      `Both, in sequence. Freedom Forever filed Chapter 11 on April 15, 2026, and the court signed an order converting the case to Chapter 7 liquidation on August 7, 2026 (Bankr. D. Del. No. 26-10522, Doc. 533; docket checked ${DOCKET_CHECKED}). Chapter 11 is a restructuring a company keeps operating through. Chapter 7 is a liquidation run by a trustee, with no reorganisation plan. Anything the company said during the Chapter 11 period about continuing to install and service systems describes the case before that order.`,
  },
  {
    question: 'Is there a Freedom Forever solar lawsuit I can join?',
    answer:
      `Not a consolidated consumer case, in the record we checked. A CourtListener RECAP search turned up 42 federal dockets naming a Freedom Forever entity between 2019 and 2026, and eight of the ten California ones are individual telephone-marketing (TCPA) suits, each brought by a named plaintiff (courtlistener.com, accessed ${RECAP_CHECKED}). Those are filed allegations, not court findings.\n\nIf your own dispute is about money the company owes you, the move was never a new lawsuit against a company in liquidation — it was a proof of claim in the Delaware bankruptcy case. That deadline has passed; see the deadline question below.`,
  },
  {
    question: 'Can I still sue Freedom Forever now that the case is a Chapter 7?',
    answer:
      'Not without the bankruptcy court’s permission. A bankruptcy case triggers a stay that halts lawsuits against the company that filed, and a suit already on file is stopped where it stood. You can ask the court to lift the stay, which on a consumer-sized claim usually costs more in fees than the claim is likely to return.\n\nWhat the stay does not touch is a claim against anyone else — your lender, the dealer that sold you the system, the panel or inverter manufacturer, or your own insurer. Those are separate parties and separate obligations.',
  },
  {
    question: 'What was the deadline to file a claim in the Freedom Forever bankruptcy?',
    answer:
      `October 16, 2026, per the court’s Chapter 7 notice (Doc. 568). That date has passed. A proof of claim filed before the August 7, 2026 conversion already counts in the Chapter 7 case, so if you filed earlier you are in.\n\nIf you did not, a claim filed after a bar date is handled differently from a timely one, and whether it is allowed at all is up to the court. Deadlines in a bankruptcy case can also be extended or reset, so check the current status on the Delaware docket (No. 26-10522, last checked here ${DOCKET_CHECKED}) and talk to a bankruptcy lawyer before you assume anything.`,
  },
  {
    question: 'Is Freedom Forever going out of business?',
    answer:
      'The company filed Chapter 11 on April 15, 2026, and the court signed an order converting the case to Chapter 7 liquidation on August 7, 2026 (Bankr. D. Del. No. 26-10522, Doc. 533). In Chapter 7 a trustee collects and sells the company’s assets for its creditors. It is not a plan to keep the business running.',
  },
  {
    question: 'Will my Freedom Forever warranty still be honored?',
    answer:
      'Don’t count on it without written confirmation. During the Chapter 11 period the company said it intended to honor its 25-year production guarantee, but the case has since been converted to Chapter 7 liquidation. Manufacturer warranties on your panels, inverters and batteries come from the manufacturers, not Freedom Forever. Ask whoever now holds or services your agreement, in writing, what happens to the workmanship and roof-penetration warranties.',
  },
  {
    question: 'What should I do if I financed through Mosaic?',
    answer:
      'A solar loan is generally an obligation to the lender, not to the installer, so a Mosaic loan does not disappear with Freedom Forever’s bankruptcy — Mosaic is a separate company and is listed as Freedom Forever’s largest creditor in the case. Missing payments on a loan you still owe can affect your credit, so read your own loan agreement and raise any dispute with Mosaic directly rather than stopping payment on the strength of a web page.',
  },
  {
    question: 'Can I cancel a signed Freedom Forever contract because of the bankruptcy?',
    answer:
      'A bankruptcy filing does not automatically void existing contracts. California has a 3-day right of rescission on home solicitation contracts, and many contracts have additional cancellation windows. Outside those windows, cancellation terms depend on your specific agreement. If you are considering cancelling a signed contract, consult an attorney before acting.',
  },
  {
    question: 'Who is the largest creditor in the bankruptcy?',
    answer:
      'Mosaic Funding, the third-party loan provider Freedom Forever used to finance many customer systems, is listed as the largest creditor with a claim of approximately $120 million. The Chapter 11 filing listed estimated liabilities of $500 million to $1 billion against assets of $100 million to $500 million.',
  },
  {
    question: 'What CSLB license does Freedom Forever use in California?',
    answer:
      'Freedom Forever’s own site lists three: #1029644, #1125479, and #1124448 (freedomforever.com, accessed September 22, 2026). On CSLB’s lookup on September 24, 2026, #1029644 was under suspension (Employee/Worker Bond Suspension) and the other two had expired. Check whichever number is on your contract at CSLB before signing.',
  },
  {
    question: 'Does Freedom Forever say what happens to my contract if I sell my home?',
    answer:
      'Not on its public site as of September 22, 2026. Get that answer in writing from whoever holds or services your agreement, especially while the Chapter 7 case is open.',
  },
];

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
                {H1}
              </h1>

              <LastReviewedStamp date={UPDATED} variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>11 min read</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mt-6'>
                Freedom Forever filed Chapter 11 on April 15, 2026. The court converted the case to a Chapter 7 liquidation on August 7, 2026. That order is the whole story: a trustee is now selling the company off, so a new lawsuit against Freedom Forever runs into the bankruptcy stay first and an empty balance sheet second. The step that preserved a California customer&apos;s money claim was a proof of claim in the Delaware case, on a deadline of October 16, 2026 that has now passed.
              </p>
              <p className='text-foreground/80 leading-relaxed mt-4'>
                The litigation was there before the filing. A search of federal court records turned up 42 dockets naming a Freedom Forever entity between 2019 and 2026, eight of them consumer telephone-marketing suits in California federal courts (courtlistener.com, accessed {RECAP_CHECKED}). Below: what the bankruptcy record shows, what those suits allege, the difference between suing a company in Chapter 7 and filing a claim against its estate, and what the company&apos;s own site still doesn&apos;t publish — a transfer-on-sale process for the guarantee or a Lease/PPA.
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
                    Freedom Forever&apos;s bankruptcy was converted to a
                    Chapter 7 liquidation by an order signed August 7, 2026
                    (Bankr. D. Del. No.
                    26-10522). Promises made during the Chapter 11 period,
                    including about the 25-year production guarantee, should
                    not be relied on without written confirmation from
                    whoever now holds your agreement.
                  </span>
                </li>
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
                    The proof-of-claim deadline in the Chapter 7 case was
                    October 16, 2026 (the court&apos;s Chapter 7 notice, Doc.
                    568). That date has passed. A claim filed before the
                    conversion already counts; if you missed the deadline, ask
                    a bankruptcy lawyer about a late claim rather than assuming
                    the door is shut.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Suing Freedom Forever and filing a claim against it are not
                    the same move. A bankruptcy case stops lawsuits against the
                    company that filed. It does not stop a claim against your
                    lender, the dealer who sold you the system, or the
                    manufacturer whose warranty is on your equipment, and that
                    is usually where a live remedy still is.
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
                The Freedom Forever bankruptcy, and where it leaves California
                customers
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
              <p className='text-foreground/80 leading-relaxed mb-6'>At the time,
                the company said publicly that it planned to keep installing
                systems and servicing existing customers during
                restructuring. The court converted the case to Chapter 7
                liquidation on August 7, 2026.</p>

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
              <p className='text-foreground/80 leading-relaxed mb-6'>It was one of
                the most active installers in California.</p>

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
              <p className='text-foreground/80 leading-relaxed mb-6'>During the
                Chapter 11 period the company said it intended to keep
                honoring the guarantee. Since the August 7, 2026 conversion
                to Chapter 7 there is no reorganization plan; how service
                obligations are treated is decided in the Chapter 7 case.</p>

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
                windows, consult an attorney before taking any action. A
                bankruptcy filing does not automatically void a contract,
                and in Chapter 7 a trustee winds the company down, so ask
                what happens to your deposit and an unfinished project.</p>

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
              <p className='text-foreground/80 leading-relaxed mb-6'>NEM 3.0&apos;s sharp reduction in the value of California export
                credits from April 2023 slowed California installs sharply
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
                . Given the bankruptcy case, confirming the specific entity name on your contract against one of these three numbers matters more than usual — a lease, PPA, or service agreement is with a specific LLC, not the &ldquo;Freedom Forever&rdquo; brand generally.</p>

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
              <p className='text-foreground/80 leading-relaxed mb-6'>None of this changes what the bankruptcy risk section above already tells you: whether any of it is honored going forward depends on the Chapter 7 case and on whoever now holds your agreement, not on what the website promises.</p>

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
                <li>In writing: what happens to your guarantee, service commitment, and any remaining financing balance if you sell the home while the Chapter 7 case is open?</li>
                <li>
                  If you already have a signed contract or an open bankruptcy claim question, see our{' '}
                  <Link href='/solar-problems/solar-company-took-my-money-california' className='text-primary hover:underline font-medium'>
                    solar company took my money guide
                  </Link>{' '}
                  for what recourse generally looks like.
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Reputation & Complaint History
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Review-site and Better Business Bureau profiles for
                Freedom Forever are public and change over time, so read them
                directly rather than relying on a figure repeated here. This
                page does not state a BBB complaint count, a Trustpilot score or
                a regulator inquiry, because none of them has been re-checked
                against its source for this update.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What federal court records show about Freedom Forever lawsuits
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Federal court records offer a different, primary-source view. A search of CourtListener&apos;s RECAP database (federal PACER filings) for &ldquo;Freedom Forever&rdquo; turns up 42 dockets naming a Freedom Forever entity as a party, filed between 2019 and 2026 (courtlistener.com, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>The largest single category is claims under the <strong>Telephone Consumer Protection Act</strong> — unsolicited sales calls or texts — filed in Texas, California, Pennsylvania, and Massachusetts federal courts; the rest include diversity-jurisdiction fraud claims, a Fair Credit Reporting Act claim, a Truth in Lending Act claim, and a Magnuson-Moss Warranty Act claim (courtlistener.com, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Eight of the 42 are consumer telephone-marketing (TCPA) claims filed in California federal courts — four in the Southern District (<em>Ewing v. Freedom Forever, LLC</em>, filed 2020, 2023, 2024, and 2025), three in the Central District (<em>Bales</em>, 2023; <em>Clark</em>, 2024; <em>Shelton</em>, 2025), and one in the Northern District (<em>Naiman v. Freedom Forever, LLC</em>, filed 2019).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Two more California federal dockets name the company but aren&apos;t consumer complaints: an employment-discrimination removal (<em>Gomez</em>, C.D. Cal., 2022) and a supplier breach-of-contract claim Freedom Forever itself filed as plaintiff (<em>v. Silfab Solar Inc.</em>, S.D. Cal., 2024) (courtlistener.com, accessed September 22, 2026).</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>These are filed allegations, not court findings — a docket existing doesn&apos;t mean a court ruled against the company — but the pattern (repeated TCPA claims specifically) is a more concrete signal than a star rating.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                A Freedom Forever solar lawsuit, sorted by what the claims
                actually are
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>People searching for a Freedom Forever solar lawsuit are usually looking for one case to join. There isn&apos;t one in this record. What the record holds is a scatter of individual federal cases, and the largest cluster is not about a bad install at all.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>It&apos;s about phone calls.</p>

              {/* The rows below only re-sort facts already summarised in the
                  section above; no new docket fact is introduced. The 32 figure
                  is arithmetic on the page's own numbers: 42 dockets less the
                  ten California ones named above.
                  Not stated: a non-California venue breakdown or per-state TCPA count
                  would need a fresh RECAP search; the checked record does not break it out. */}
              <DataTable
                caption={`Federal dockets naming a Freedom Forever entity, 2019 to 2026, by claim type (courtlistener.com, accessed ${RECAP_CHECKED})`}
                columns={['Claim type', 'Where it was filed', 'Dockets', 'What the claim is about']}
                rows={[
                  [
                    'Telephone Consumer Protection Act (TCPA)',
                    'S.D. Cal. (Ewing, 2020, 2023, 2024, 2025); C.D. Cal. (Bales, 2023; Clark, 2024; Shelton, 2025); N.D. Cal. (Naiman, 2019)',
                    '8 of the 42 (California filings)',
                    'Unsolicited sales calls or texts. A claim about how you were contacted, not about what went on your roof.',
                  ],
                  [
                    'Employment discrimination',
                    'C.D. Cal. (Gomez, 2022), removed to federal court',
                    '1 of the 42',
                    'A workplace dispute, not a customer complaint. Listed here so the count isn’t read as all-consumer.',
                  ],
                  [
                    'Breach of contract, company as plaintiff',
                    'S.D. Cal. (Freedom Forever v. Silfab Solar Inc., 2024)',
                    '1 of the 42',
                    'A supplier dispute Freedom Forever filed itself. It is the plaintiff here, not the defendant.',
                  ],
                  [
                    'Everything filed outside California',
                    'Not broken out by court in the record we checked; the TCPA cluster names Texas, Pennsylvania and Massachusetts',
                    '32 of the 42',
                    'More TCPA claims, plus diversity-jurisdiction fraud claims, one Fair Credit Reporting Act claim, one Truth in Lending Act claim and one Magnuson-Moss Warranty Act claim.',
                  ],
                ]}
                note={
                  <>
                    Filed allegations, not court findings. Counts come from a CourtListener RECAP
                    party search for &ldquo;Freedom Forever,&rdquo; accessed {RECAP_CHECKED}. The 32
                    is the 42 total less the ten California dockets named in the rows above.
                  </>
                }
              />

              <p className='text-foreground/80 leading-relaxed mb-6'>Two things follow from that shape. First, the claim most often filed against this company in federal court is a marketing claim under a federal telephone statute, which is a claim about contact, not construction. Second, the install-quality and service complaints that filled the BBB file (see Reputation and Complaint History above) mostly never became federal lawsuits. They went to the BBB, to CSLB, or nowhere.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>A docket count is a floor on the dispute volume. Not a measure of it.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Suing Freedom Forever in Chapter 7 versus filing a proof of
                claim
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>This is the distinction most coverage blurs, and it decides where your remaining options actually are.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>A lawsuit asks a court to decide the company owes you something. A proof of claim tells the bankruptcy court you are already one of the people it owes. Once a company is in bankruptcy, the first blocks the second: the case triggers a stay that halts lawsuits against the company that filed, and a suit already on file sits where it stood. You can ask the bankruptcy court for permission to go forward anyway. On a consumer-sized claim that permission usually costs more in legal fees than the claim is likely to return.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>And the stay protects the company that filed. Only that company.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Your loan is with Mosaic. Your panel warranty is with the panel manufacturer, your inverter warranty with Enphase or SolarEdge, and the dealer who sold you the system may well be its own LLC. None of those parties is the debtor in the Delaware case, so a claim against one of them is not stopped by Freedom Forever&apos;s bankruptcy. That is the practical difference between a dead end and a live remedy.</p>

              {/* Case number and bar date are the two already stated above and
                  in the TL;DR, both from the Delaware docket / Doc. 568 as
                  checked September 23, 2026. No trustee name, judge, or
                  distribution figure is stated anywhere on this page.
                  The October 16, 2026 bar date has passed. Not stated on this page: the
                  trustee's name, any claims-agent address, any extension or reset, and
                  whether late-filed claims are allowed; none has been verified here. */}
              <DataTable
                caption='Five routes, and what each one can realistically do'
                columns={['The move', 'Where it goes', 'What it can realistically do', 'The deadline that matters']}
                rows={[
                  [
                    'Start a new lawsuit against Freedom Forever',
                    'Stopped by the bankruptcy stay unless the bankruptcy court lifts it for you first',
                    'At best a judgment against a company a trustee is already selling off',
                    'No separate deadline. The stay runs as long as the case is open.',
                  ],
                  [
                    'A suit you already had on file against it',
                    'Halted at whatever stage it had reached',
                    'Keeps the claim alive on paper, but recovery still runs through the bankruptcy estate',
                    'The October 16, 2026 claims deadline has passed. Ask your own lawyer what the stay means for a suit you already have on file.',
                  ],
                  [
                    'File a proof of claim',
                    'U.S. Bankruptcy Court for the District of Delaware, No. 26-10522',
                    'Makes you a general unsecured creditor, paid after secured lenders and the costs of running the case, if anything is left',
                    'October 16, 2026, per the court’s Chapter 7 notice (Doc. 568) — a date that has now passed. A claim filed before the August 7 conversion already counts. A late claim is treated differently from a timely one, so get advice before filing one.',
                  ],
                  [
                    'A claim against anyone other than Freedom Forever',
                    'Ordinary state or federal court, or that company’s own warranty or dispute process',
                    'Not stayed by this bankruptcy. Lender, dealer, equipment maker, your own insurer — this is where live remedies usually sit.',
                    'Your contract terms and the ordinary limitations period, which keep running.',
                  ],
                  [
                    'CSLB complaint',
                    'Contractors State License Board, against the licence on your contract',
                    'Puts the problem on the licence record. At this scale it is not a payout mechanism.',
                    'Depends on the complaint type. Confirm the current window with CSLB before relying on one.',
                  ],
                ]}
                note={
                  <>
                    Mechanics, not legal advice. Which route fits depends on your contract and which
                    entity is the counterparty on it. The case number and claims deadline are from
                    the Delaware docket and the court&apos;s Chapter 7 notice (Doc. 568), checked{' '}
                    {DOCKET_CHECKED}. If a signed contract or a paid deposit is involved, have a
                    California attorney read it.
                  </>
                }
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What a claim against a liquidating estate actually gets you
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Be honest about the arithmetic before you build a plan on it. The Chapter 11 filing listed estimated liabilities of $500 million to $1 billion against assets of $100 million to $500 million, and Mosaic Funding alone is listed as a creditor at roughly $120 million. A homeowner&apos;s claim for a deposit, an unfinished install or an unpaid production-guarantee check is an ordinary unsecured claim. In a Chapter 7 those get paid after the secured lenders and after the cost of administering the case.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>Which, on those numbers, means an ordinary unsecured claim should be planned around as returning little or nothing. That is our arithmetic on the figures above, not a prediction of what the trustee will actually distribute.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>If you filed a claim before the October 16, 2026 deadline, it is in the queue and there is nothing more to do but wait on the trustee. If you didn&apos;t, a late claim is a question for a bankruptcy lawyer, not a form to mail off on a guess. Either way, build the actual repair plan around the parties that are still solvent and still obligated: the equipment manufacturers, your lender, your homeowner&apos;s insurer if a roof penetration failed, and a licensed California contractor for the work itself. Our guide to{' '}
                <Link href='/solar-installers/freedom-forever-bankruptcy-what-to-do' className='text-primary underline'>
                  what Freedom Forever customers should do now
                </Link>{' '}
                walks that order step by step.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Should You Still Consider Freedom Forever in California?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>Not as a new customer. Since the August 7, 2026
                conversion order, the case is a Chapter 7 liquidation: a
                trustee gathers and sells the company&apos;s assets to pay
                its creditors, and there is no reorganization plan that
                keeps Freedom Forever installing and servicing systems.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>If you already have a system, the manufacturer
                warranties still come from the manufacturers. For service,
                the guarantee and any lease or PPA, ask in writing who now
                holds your agreement; the docket records, for example, a
                court-approved settlement with Sunrun that covers certain
                agreements between the two companies.</p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a California homeowner making a 20- to 25-year decision
                today, the sensible move is to get comparable quotes from
                installers that are not in bankruptcy, check each one&apos;s
                CSLB license, and weigh the equipment and warranty terms side
                by side.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California Rate Relief is a referral service. We are not a licensed contractor.
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

            </div>

            {/* One FaqBlock, built from the module-level faqs array. It emits the
                page's only FAQPage JSON-LD node; the Article node above stays the
                page's only Article node. */}
            <div className='not-prose'>
              <FaqBlock items={faqs} />
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
