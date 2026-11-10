// 2026-11-09 new page. The site explains leases, PPAs and escalators in a
// dozen places but had nowhere a homeowner already inside a contract could do
// the one piece of arithmetic that decides a buyout: what the payments left on
// the term actually total, and how a quoted payoff figure compares to them.
// The query is a head term with no California-qualified variant worth titling
// for, so the title targets the unqualified head and California lives in the
// H1 and the body.
//
// COMPLIANCE NOTE for anyone editing this file. The intent of this page is
// financial and contractual, which makes it the easiest page on the site to
// get wrong. Three standing rules:
//   (a) NO INDUSTRY FIGURES. There is no typical escalator here, no typical
//       buyout percentage, no typical term and no average payment, because
//       src/data/facts.ts carries no lease, PPA, escalator or buyout fact and
//       an invented figure on this subject is a liability, not filler. Every
//       number the reader sees is one they typed into the calculator. If you
//       want to state a benchmark, put it in facts.ts with its source and
//       checkedAt first, then read it from there.
//   (b) NO ADVICE. The page does not say whether to buy out. It sets out what
//       each path leaves you holding and what to get in writing. The only
//       authoritative documents are the reader's own contract and a written
//       payoff quote from the lease company.
//   (c) Statements about liens, filing offices and lapse periods trace to the
//       California Commercial Code sections linked on the page. They are
//       carried over from /solar-problems/ucc-1-lien-solar-california, which
//       cites the same sections, and they are stamped with that page's own
//       review date, not with today's.
//
// CITATION-DATE NOTE. `updated` below is the page's modification date and is
// wired to exactly three places: openGraph.modifiedTime, ArticleJsonLd
// dateModified and GuideHeader updated. It never reaches a source chip.
// SOURCES_CHECKED and the two other *_CHECKED constants are the dates those
// documents were actually read, all of them in September 2026. Nothing was
// re-verified today, so nothing claims to have been.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ReferralDisclosure } from '@/components/shared/ReferralDisclosure';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { BuyoutCalculator } from '@/components/growth/BuyoutCalculator';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceChip, sourceHost } from '@/components/trust/SourceChip';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const path = '/blog/solar-lease-buyout-calculator';
const url = `https://ratereliefca.com${path}`;
// 54 characters. The head term "solar lease buyout" leads; California is held
// back to the H1 and the body so the title leads with the head term.
// (The California-qualified variant returned no Ahrefs SERP snapshot on
// 2026-11-09, but that pull is not cited on the page, so no volume claim is
// made here.)
const title = 'Solar Lease Buyout Calculator: Buy Out or Stay to Term';
const h1 =
  'Solar Lease Buyout Calculator: What Buying Out Is Compared Against in California';
const description =
  'Solar lease buyout calculator: total the payments left on your term with your own escalator, then set that against the payoff figure you were quoted.';
const published = '2026-11-09';
const updated = '2026-11-09';
const hub = {
  label: 'Solar lease vs PPA vs purchase in California',
  href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
};

// REGISTRY GAP, on the record. None of the documents this page relies on has a
// key in src/data/rate-sources.ts or src/data/facts.ts: the registries hold
// utility rate and incentive sources, and nothing on this page is a rate or an
// incentive. So the sources are page-local constants, each with the date it was
// read recorded beside it. The dates are copied from routes that already cite
// these documents; they are not new checks made today:
//   - Cal. Com. Code secs. 9501 and 9515 and the Secretary of State UCC page:
//     reviewedAt 2026-09-22 on /solar-problems/ucc-1-lien-solar-california.
//   - CSLB Solar Energy System Disclosure Document (Form 13L-6): same route,
//     same review date.
//   - CPUC California Solar Consumer Protection Guide: checked 2026-09-23 on
//     /blog/solar-payback-period-california and /blog/energysage-reviews-california.
//   - CSLB Check a License: checked 2026-09-24 on
//     /blog/solar-panel-inspection-california and 14 other routes.
// If any of these gets a registry key, import it and delete the constant.
const SOURCES_CHECKED = '2026-09-22';
const CPUC_CONSUMER_GUIDE_CHECKED = '2026-09-23';
const CSLB_LICENSE_LOOKUP_CHECKED = '2026-09-24';

const COM_CODE_9501 =
  'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=9501.&lawCode=COM';
const COM_CODE_9515 =
  'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=9515.&lawCode=COM';
const SOS_UCC = 'https://www.sos.ca.gov/business-programs/ucc';
const CSLB_DISCLOSURE_FORM =
  'https://www.cslb.ca.gov/Resources/IndustryBulletins/Solar_Energy_Disclosure_Document.pdf';
const CPUC_CONSUMER_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CSLB_LICENSE_LOOKUP =
  'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';

/** A source plus the date that source was read. One blanket date would be false
 *  here: three of these were read on different days in September 2026. */
type PageSource = { label: string; url: string; checked: string };

const sources: PageSource[] = [
  {
    label: 'California Commercial Code sec. 9501 (where a UCC-1 financing statement is filed, and where a fixture filing goes instead)',
    url: COM_CODE_9501,
    checked: SOURCES_CHECKED,
  },
  {
    label: 'California Commercial Code sec. 9515 (five-year effectiveness of a financing statement, and continuation statements)',
    url: COM_CODE_9515,
    checked: SOURCES_CHECKED,
  },
  {
    label: 'California Secretary of State: Uniform Commercial Code (filing office and the UCC Connect search)',
    url: SOS_UCC,
    checked: SOURCES_CHECKED,
  },
  {
    label: 'Contractors State License Board: Solar Energy System Disclosure Document (Form 13L-6)',
    url: CSLB_DISCLOSURE_FORM,
    checked: SOURCES_CHECKED,
  },
  {
    label: 'CPUC: California Solar Consumer Protection Guide',
    url: CPUC_CONSUMER_GUIDE,
    checked: CPUC_CONSUMER_GUIDE_CHECKED,
  },
  {
    label: 'Contractors State License Board: Check a License (license status, classification and complaint disclosure)',
    url: CSLB_LICENSE_LOOKUP,
    checked: CSLB_LICENSE_LOOKUP_CHECKED,
  },
];

/**
 * Sources with a date each. The shared SourceList prints one date for the whole
 * list and repeats it on every chip, which would be false here: these documents
 * were read on three different dates. Same markup, same anchor, one date per
 * source.
 */
function PageSources({ items }: { items: PageSource[] }) {
  return (
    <aside
      id="sources"
      className="my-8 scroll-mt-24 border-t border-border pt-5 text-sm text-muted-foreground"
    >
      <h2 className="font-bold text-foreground" data-toc-label="Sources">
        Sources, with the date each one was checked
      </h2>
      <ul className="mt-3 space-y-3">
        {items.map((s) => (
          <li key={s.label} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-foreground underline decoration-border underline-offset-2 hover:text-primary hover:decoration-primary"
            >
              {s.label}
            </a>
            {sourceHost(s.url) && <SourceChip publisher={sourceHost(s.url)} date={s.checked} />}
          </li>
        ))}
      </ul>
    </aside>
  );
}

const faqs = [
  {
    question: 'What is a solar lease buyout?',
    answer:
      'It is paying the lease or power purchase agreement out early, in one amount, instead of continuing the monthly payments to the end of the term. What you get for that amount is set by your own agreement and is not the same in every contract. Some let you buy the equipment outright, so it becomes yours and stays on the roof. Some end the payments and leave removal or ownership to be settled separately. The clause that says which one applies to you is in your contract, usually under early purchase, early termination or purchase option.',
  },
  {
    question: 'How do I calculate a solar lease buyout?',
    answer:
      'You cannot calculate the figure the lease company will quote, because that figure is theirs to set under the terms you signed. What you can calculate, and what the calculator on this page does, is the thing the quote has to be judged against: the payments left on the term with your own escalator applied, the same payments with no escalator, and what each works out to per year. Ask the lease company for the payoff figure in writing, enter it, and the page shows the difference between the two.',
  },
  {
    question: 'Is buying out a solar lease worth it?',
    answer:
      'That depends on numbers only you have, and this page does not answer it for you. The comparison has at least four parts: the quoted payoff, the payments left under your escalator, what you would still owe or still save on electricity either way, and whether buying out actually transfers ownership of the equipment to you. Run the arithmetic on your own figures, then read the purchase-option clause before you decide. A written payoff quote is the only version of the figure that binds anyone.',
  },
  {
    question: 'Can I sell my house with a solar lease still on it?',
    answer:
      'Yes, and in California there are generally two routes. Either the buyer assumes the agreement and the lease company approves the transfer, or the contract is paid off at or before close of escrow. The CPUC California Solar Consumer Protection Guide describes both options. Which one is available to you, what the lease company charges to process a transfer, and what credit standard a buyer has to meet are all set by your agreement, so start by asking the lease company in writing.',
  },
  {
    question: 'Does a solar lease put a lien on my house?',
    answer:
      'Many third-party-owned systems are secured by a UCC-1 financing statement, which is filed with the California Secretary of State and attaches to the equipment rather than to the real property. A fixture filing is a different instrument and goes to the county recorder. Under California Commercial Code section 9515 a financing statement is effective for five years from filing unless it is continued. A title company will see whatever is on record, so find out which instrument exists in your case before a sale is in motion.',
  },
  {
    question: 'What if the company that installed my system is gone?',
    answer:
      'The installer and the party that owns the lease are often not the same company, and the lease obligation does not disappear when an installer closes. Find the current servicer named on your most recent statement or payment notice and send the payoff request there. For any company still trading, the Contractors State License Board Check a License lookup shows the license status and classification for the exact legal name on your paperwork.',
  },
  {
    question: 'Does California Rate Relief buy out solar leases?',
    answer:
      'No. California Rate Relief is a referral service. We are not a licensed contractor. We do not buy, assume, service or terminate anyone’s lease, and we cannot release a lien or issue a payoff figure. Those come from the company that holds your agreement. What this page offers is the arithmetic and a list of what to ask them to put in writing.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    publishedTime: `${published}T00:00:00Z`,
    modifiedTime: `${updated}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(title, description),
};

export default function SolarLeaseBuyoutCalculatorPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar lease buyout calculator"
      breadcrumbParent={hub}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={url}
        datePublished={published}
        dateModified={updated}
        description={description}
      />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader
              parent={hub}
              current="Solar lease buyout"
              kicker="Leases and PPAs · California"
              title={h1}
              updated={updated}
              sourceCount={sources.length}
            />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                A buyout quote arrives as one number with nothing to compare it
                to. The comparison you need is the payments left on your term
                with your own escalator applied. That is arithmetic on four
                figures off your own contract, so do it first, before anyone
                explains anything to you. The calculator is immediately below.
              </p>
            </div>

            {/* The tool is the page. It sits above every heading on purpose:
                the reader arrives mid-contract with a quote in hand. */}
            <div className="not-prose">
              <BuyoutCalculator />
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                Two things to settle before reading further. This page states no
                typical escalator, no typical buyout percentage and no average
                payment, because an average has nothing to do with what you
                signed and a wrong one would send you into a negotiation with a
                false anchor. And nothing here is a payoff figure: only the
                company that holds your agreement can issue one, and only in
                writing. California Rate Relief is a referral service. We are
                not a licensed contractor.
              </p>

              <h2>What a buyout actually is, and what it leaves you holding</h2>
              <p>
                Ending a lease early and owning the system are different
                outcomes, and a quoted figure can deliver either one depending
                on the clause it is issued under. That is the first thing to
                pin down, because the whole calculation changes if the payments
                stop but the equipment is not yours. The table sets out the four
                paths and what each leaves behind.
              </p>
              <DataTable
                caption="Four ways a third-party-owned system ends, and what each leaves you holding"
                columns={[
                  'Path',
                  'What happens to the payments',
                  'Who owns the equipment afterwards',
                  'What to get in writing first',
                ]}
                rows={[
                  [
                    'Keep paying to the end of the term',
                    'They continue, rising each year by whatever escalator your contract sets.',
                    'The lease company, until the end-of-term clause says otherwise.',
                    'The end-of-term clause: renewal, purchase at a stated basis, or removal.',
                  ],
                  [
                    'Buy out mid-term',
                    'They stop on the date the payoff clears.',
                    'Depends entirely on the clause the payoff is issued under. An early purchase option transfers the equipment; an early termination does not necessarily.',
                    'Which clause the figure is issued under, what it includes, and that the lien release follows.',
                  ],
                  [
                    'Transfer the agreement to the buyer of the house',
                    'They continue, in the buyer’s name, on the existing terms.',
                    'Unchanged. The agreement moves, not the ownership.',
                    'The transfer conditions, any processing charge, the credit standard the buyer must meet, and the lease company’s written approval.',
                  ],
                  [
                    'Pay it off at close of escrow',
                    'They stop at closing, out of proceeds.',
                    'Per the payoff clause, same question as a mid-term buyout.',
                    'A written payoff figure with an expiry date, plus confirmation of what comes off record and when.',
                  ],
                ]}
                note={
                  <>
                    Which paths exist for you is set by your own agreement, not
                    by this table. If the system was bought with a loan rather
                    than leased, none of this applies and the payoff is an
                    ordinary lender payoff. The difference between the
                    structures is in{' '}
                    <Link href={hub.href} className={guideLink}>
                      solar lease vs PPA vs purchase
                    </Link>
                    .
                  </>
                }
              />

              <h2>How to make a quoted payoff figure explain itself</h2>
              <p>
                A payoff figure is produced by the lease company under the terms
                you signed, so the useful move is not guessing how it was
                derived. It is making them state it. Each question below changes
                either the figure or what you get for it, and each one has an
                answer somewhere in your paperwork.
              </p>
              <DataTable
                caption="What to ask the company that holds your agreement to state in writing"
                columns={[
                  'Ask for this',
                  'Why it changes the figure or what you get',
                  'Where your own answer is',
                ]}
                rows={[
                  [
                    'The clause the figure is issued under',
                    'An early purchase option and an early termination are different outcomes at a similar price. One hands you the equipment.',
                    'The purchase option, early purchase or early termination section of the agreement.',
                  ],
                  [
                    'Whether equipment ownership transfers to you',
                    'If it does not, you have bought your way out of payments and still do not own what is bolted to the roof.',
                    'The same clause, plus any bill-of-sale or transfer-of-title language.',
                  ],
                  [
                    'An expiry date on the quote',
                    'A figure with no stated expiry gives escrow nothing to rely on, and escalating payments keep moving underneath it — ask for the date it stops being good.',
                    'Ask for it. Agreements rarely promise one.',
                  ],
                  [
                    'What is released from record, and when',
                    'A paid-off agreement with a financing statement still on record is a title problem at the worst possible moment.',
                    'Your preliminary title report, and the Secretary of State UCC search.',
                  ],
                  [
                    'Any charge on top of the payoff',
                    'Processing, transfer, removal or administrative charges sit outside the figure the calculator compares.',
                    'The fee schedule or charges section of the agreement.',
                  ],
                  [
                    'Who the current servicer is',
                    'Sending a payoff request to the installer rather than the owner of the agreement is a common way weeks get lost.',
                    'The most recent statement or payment notice, not the original contract.',
                  ],
                ]}
                note={
                  <>
                    California Business and Professions Code section 7169
                    requires a Solar Energy System Disclosure Document (CSLB
                    Form 13L-6) on every residential solar contract, and
                    Section 2 of that form asks the provider what liens or
                    other obligations the financing will put against the
                    property. Both it and the CPUC guide are
                    listed under{' '}
                    <a href="#sources" className={guideLink}>
                      sources
                    </a>
                    .
                  </>
                }
              />

              <h2>Buying out against staying to term</h2>
              <p>
                The calculator gives you three figures for the staying side: the
                remaining payments with your escalator applied, the same
                payments with no escalator, and what the escalated total works out to
                per year. The
                gap between the first two is what the escalator alone costs you
                over the rest of the term, which is the part people
                consistently underestimate because it arrives one annual
                increase at a time. That mechanism, on its own, is in{' '}
                <Link
                  href="/solar-problems/solar-escalator-clause-explained"
                  className={guideLink}
                >
                  how a solar escalator clause works
                </Link>
                .
              </p>
              <p>
                What the calculator deliberately does not do is discount future
                payments to a present value, or net off the electricity the
                system produces, or put a value on the equipment. Each of those
                needs an assumption, and an assumption dressed as a result is
                worse than a blank. If you want the brand-specific version of
                how one company describes its payoff basis, that is{' '}
                <Link
                  href="/solar-installers/sunrun-buyout-cost"
                  className={guideLink}
                >
                  how a Sunrun buyout cost is calculated
                </Link>
                . If what you are weighing is stopping payment rather than
                paying out, read{' '}
                <Link
                  href="/blog/what-happens-if-stop-paying-solar-lease-california"
                  className={guideLink}
                >
                  what happens if you stop paying a solar lease
                </Link>{' '}
                first, because the consequences are not symmetrical.
              </p>

              <div className="not-prose my-8">
                <HeroQuickCheck topic="California solar lease or PPA buyout review" />
              </div>

              <h2>Selling the house: transfer or pay it off</h2>
              <p>
                This is where a buyout stops being optional and starts having a
                deadline. The CPUC{' '}
                <a
                  href={CPUC_CONSUMER_GUIDE}
                  target="_blank"
                  rel="noopener external"
                  className={guideLink}
                >
                  California Solar Consumer Protection Guide
                </a>{' '}
                sets out the two routes a California seller has: the buyer
                assumes the agreement with the lease company&apos;s approval, or
                the agreement is paid off. Both run on the lease company&apos;s
                timetable, which is why the request goes in early rather than
                when escrow opens. The full sequence, including what a buyer&apos;s
                lender tends to ask for, is in{' '}
                <Link
                  href="/blog/what-happens-to-solar-lease-when-i-sell-california"
                  className={guideLink}
                >
                  selling a house with a solar lease or PPA in California
                </Link>
                .
              </p>
              <p>
                Run the calculator twice here. Once with the quoted payoff, to
                see what closing it out costs against the payments it ends. Once
                with the payoff left blank, so you can tell a buyer what they
                would be assuming in plain numbers. A buyer who is handed the
                remaining payment schedule argues about the house instead of
                about the panels.
              </p>

              {/* The only two figures in this section's prose are the "five
                  years" in Cal. Com. Code sec. 9515 and the CSLB form number
                  13L-6, both of them from the primary documents linked here and
                  both carried over from /solar-problems/ucc-1-lien-solar-california,
                  which cites the same sections and records 2026-09-22 as its
                  review date. They were NOT re-read today, which is why
                  SOURCES_CHECKED stays at that date. No escalator, buyout or
                  payment figure is stated anywhere on this page; those come
                  from the reader's inputs in the calculator only. */}
              <h2>The financing statement on record, and why title cares</h2>
              <p>
                Third-party-owned systems are commonly secured by a UCC-1
                financing statement. Under California Commercial Code{' '}
                <a
                  href={COM_CODE_9501}
                  target="_blank"
                  rel="noopener external"
                  className={guideLink}
                >
                  section 9501
                </a>{' '}
                that statement is filed with the Secretary of State and reaches
                the equipment; a fixture filing is a different instrument and is
                filed with the county recorder, where it shows up against the
                real property. Under{' '}
                <a
                  href={COM_CODE_9515}
                  target="_blank"
                  rel="noopener external"
                  className={guideLink}
                >
                  section 9515
                </a>{' '}
                a financing statement is effective for five years from the date
                of filing and lapses unless a continuation statement is filed.
              </p>
              <p>
                Practically, that means two searches before you rely on
                anything: the{' '}
                <a
                  href={SOS_UCC}
                  target="_blank"
                  rel="noopener external"
                  className={guideLink}
                >
                  Secretary of State UCC search
                </a>{' '}
                for a financing statement in your name, and your preliminary
                title report for anything recorded against the property. Then
                make the release part of the payoff instruction, in writing,
                rather than a thing you chase afterwards. Which instrument does
                what, and how the priority questions fall out, is in{' '}
                <Link
                  href="/solar-problems/ucc-1-lien-solar-california"
                  className={guideLink}
                >
                  the UCC-1 lien on a California solar system
                </Link>
                .
              </p>

              <h2>When the installer no longer exists</h2>
              <p>
                An installer closing does not cancel the agreement, because in a
                third-party-owned structure the installer and the owner of the
                contract are frequently separate companies to begin with. The
                payoff request goes to whoever is named on your most recent
                statement, not to the name on the original proposal. For any
                entity still trading, the{' '}
                <a
                  href={CSLB_LICENSE_LOOKUP}
                  target="_blank"
                  rel="noopener external"
                  className={guideLink}
                >
                  CSLB Check a License
                </a>{' '}
                lookup shows the license status and classification for the exact
                legal name on your paperwork, which is how you tell a successor
                servicer from a sales brand. The step-by-step version is in{' '}
                <Link
                  href="/solar-installers/solar-installer-bankruptcy-california"
                  className={guideLink}
                >
                  what to do when a California solar installer goes out of
                  business
                </Link>
                , and the warning signs in the paperwork itself are in{' '}
                <Link
                  href="/solar-problems/solar-contract-red-flags-california"
                  className={guideLink}
                >
                  solar contract red flags
                </Link>
                .
              </p>

              <h2>Where this site sits</h2>
              <p>
                California Rate Relief is an independent California information
                and referral service. It is not a contractor, a utility, a lease
                company or a government agency. It does not buy, assume,
                service or terminate agreements, cannot release a lien and
                cannot issue a payoff figure. The calculator, the tables and the
                source links on this page can be used without submitting
                anything. If you do submit an inquiry, you are referred to a
                solar company, and that company decides what it can offer.
              </p>
              {/* Owner-authored sentence, byte-exact and on one line on
                  purpose: the release gate matches it against raw source. */}
              <p>
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <div className="not-prose my-6 rounded-xl border border-border bg-muted/30 p-5">
                <ReferralDisclosure />
              </div>
              <p>
                The full statement is on{' '}
                <Link href="/how-we-make-money" className={guideLink}>
                  how we make money
                </Link>
                , with the form&apos;s own terms on the{' '}
                <Link href="/affiliate-disclosure" className={guideLink}>
                  referral service disclosure
                </Link>{' '}
                page and handling of submitted details in the{' '}
                <Link href="/privacy" className={guideLink}>
                  privacy policy
                </Link>
                .
              </p>

              <h2>What to do next</h2>
              <p>
                In order: find the escalator and the term in your agreement, run
                the calculator, then request a written payoff figure and the
                clause it is issued under. With the remaining-payment total
                already in front of you, the quote is a number you can argue
                with instead of a number you have to accept. If you are weighing
                this against a different system entirely, the cost side is in{' '}
                <Link
                  href="/blog/rent-solar-panels-for-your-home-california"
                  className={guideLink}
                >
                  what it costs to rent or lease solar panels in California
                </Link>
                .
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <PageSources items={sources} />
              {/* DRAFT — NEEDS APPROVAL (2026-11-09): new homeowner legal/tax/financial
                  advice disclaimer and lease-specific scope limits. No sitewide precedent
                  for this wording; owner has not approved it. */}
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a
                licensed contractor. This page does not value any system, does
                not issue or verify a payoff figure, and is not legal, tax or
                financial advice. Your own agreement and a written quote from
                the company that holds it are the only authoritative documents.
              </p>
              <HubSpokeLinks hub="financing" currentPath={path} />
            </div>

            <SolarInquiry
              topic="California solar lease or PPA buyout review"
              variant="decision"
            />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4">
        <TrustedSources
          domain="crr"
          variant="compact"
          palette={{
            fg: 'hsl(var(--foreground))',
            muted: 'hsl(var(--foreground) / 0.85)',
            mutedFg: 'hsl(var(--muted-foreground))',
            accent: 'hsl(var(--primary))',
            cardBg: 'hsl(var(--card))',
            cardBorder: 'hsl(var(--border))',
          }}
        />
      </div>
    </PublicLayout>
  );
}
