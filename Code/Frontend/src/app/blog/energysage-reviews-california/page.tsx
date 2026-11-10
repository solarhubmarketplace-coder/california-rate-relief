// 2026-11-09 new page. The site had nothing on the "how do I choose where to
// get solar quotes" question, which is mid-funnel and high intent: the reader
// is actively collecting quotes and has signed nothing.
//
// COMPLIANCE NOTE for anyone editing this file. This page names a company in
// its title and URL. Every statement about any named company must be either
// (a) a fact traceable to src/data/rate-sources.ts, src/data/facts.ts or a
// primary source linked on the page, or (b) nothing at all. There are no
// ratings, no scores, no complaint counts and no user numbers here on purpose:
// an unsourced negative claim about a named business is a legal exposure, not
// a copy choice. The page compares ROUTES a homeowner can take, not companies.
// If you want to add a claim about a named platform, find a primary source
// first or leave it out. The page states no fact about EnergySage at all: the
// name appears because it is the query, and the routes described are route
// categories, not descriptions of any one platform's business.
//
// 2026-11-09 (same day, second pass):
//   - Route renamed from /blog/energysage-reviews-california-alternatives.
//     The release QC gate reads "alternatives" in a path as a non-CRR marker
//     (scripts/qc-gate-tsx.mjs NON_CRR_MARKERS) and skipped the old route, so
//     the page shipped ungated. Keep this path.
//   - Title and H1 no longer promise "alternatives": the page names no
//     alternative platform and must not, so it promises what it delivers —
//     how to review a quote marketplace and the three routes to a California
//     quote.
//   - The compensation sentence is imported (COMPENSATION_SENTENCE), never
//     retyped. A FAQ answer here had drifted to "a homeowner it refers".
//   - Sources carry a per-source checked date instead of one blanket date,
//     because the registry documents were read on RATE_SOURCES_CHECKED
//     (2026-09-23) and the facts registry entries on their own checkedAt
//     (2026-09-24). One blanket date would have been false for one group, and
//     the old page rendered both dates inside a single entry.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { COMPENSATION_SENTENCE, ReferralDisclosure } from '@/components/shared/ReferralDisclosure';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceChip, sourceHost } from '@/components/trust/SourceChip';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC } from '@/data/rate-sources';
import { FACTS, type Fact, formatFactDate } from '@/data/facts';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const path = '/blog/energysage-reviews-california';
const url = `https://ratereliefca.com${path}`;
// 55 characters. "EnergySage" stays because it is the query; the rest of the
// title is what the page actually delivers.
const title = 'EnergySage Reviews: Ways to Get California Solar Quotes';
const h1 = 'EnergySage Reviews and the Three Ways to Get California Solar Quotes';
const description =
  'Reading EnergySage reviews? Compare the three routes to a California solar quote on what each does first, who ends up calling you and which rates it uses.';
const published = '2026-11-09';
const updated = '2026-11-09';
const hub = {
  label: 'Compare solar companies in California',
  href: '/best-solar-companies-california',
};

// REGISTRY GAP, on the record. Two primary sources this page relies on have no
// key in src/data/rate-sources.ts or src/data/facts.ts, so they are held as
// page-local constants with the date they were read recorded beside them. Both
// are already cited at these URLs elsewhere on the site, and the dates below
// are the dates those routes record, not new checks:
//   - CSLB Check a License: "checked September 24, 2026" on
//     /blog/solar-panel-inspection-california (and 14 other routes).
//   - CPUC California Solar Consumer Protection Guide: checked 2026-09-23 on
//     /blog/solar-payback-period-california.
// If either gets a registry key, import it and delete the constant.
const CSLB_LICENSE_LOOKUP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const CSLB_LICENSE_LOOKUP_CHECKED = '2026-09-24';
const CPUC_CONSUMER_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_CONSUMER_GUIDE_CHECKED = '2026-09-23';

const RATE_CHECKED = formatFactDate(FACTS.pgeResidentialAverageRate.checkedAt);

/**
 * A source plus the date that source was read. One blanket date cannot be true
 * for this list: the rate-source registry documents were read on
 * RATE_SOURCES_CHECKED, the facts registry entries on their own checkedAt.
 */
type PageSource = { label: string; url: string; checked: string };

/** Cite a facts-registry document by its own publisher, title and locator. */
function factSource(f: Fact<unknown>, locatorNote?: string): PageSource {
  const where = locatorNote ?? f.locator;
  return {
    label: `${f.publisher}: ${f.sourceTitle}${where ? ` (${where})` : ''}`,
    url: f.sourceUrl,
    checked: f.checkedAt,
  };
}

const sources: PageSource[] = [
  // The rate and net billing figures this page states come from the facts
  // registry, so these two documents carry the date the facts registry last
  // read them, not the earlier date the rate-source registry recorded.
  { ...SRC.paoQ2_2026, checked: FACTS.pgeResidentialAverageRate.checkedAt },
  { ...SRC.cpucNbt, checked: FACTS.netBillingTariff.checkedAt },
  { ...SRC.pgeSolarBilling, checked: RATE_SOURCES_CHECKED },
  { ...SRC.sdgeSolarBillingPlan, checked: RATE_SOURCES_CHECKED },
  { ...SRC.smudResRates, checked: RATE_SOURCES_CHECKED },
  factSource(FACTS.lbnlResidentialPrice2025, 'California median installed price, slide 8 and slide 37'),
  // Same document, different slide: the paired-storage premium the KeyFacts box
  // and the hardware-cost paragraph both state.
  factSource(FACTS.lbnlPairedStoragePremium2025, 'paired solar-plus-storage price premium, slide 9'),
  factSource(FACTS.smudExportRate),
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
 * list and repeats it on every chip, which on this page contradicted the date
 * inside two of the entries' own labels. Same markup and same anchor, one date
 * per source.
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
            {sourceHost(s.url) && <SourceChip href={s.url} date={s.checked} />}
          </li>
        ))}
      </ul>
    </aside>
  );
}

const faqs = [
  {
    question: 'What are the ways to get California solar quotes?',
    answer:
      'Three routes, and most homeowners end up using two of them. You can submit your details to a national multi-bid marketplace, which generates an automated estimate from what you type and routes your contact details to several contractors who then bid. You can call California installers directly and collect proposals yourself. Or you can start with a California bill review: one reading of your utility, your rate schedule and what net billing would credit your exports, then one referral rather than a bidding war. The routes differ in what happens first, in how many companies end up with your number, and in how much state-specific detail the comparison carries.',
  },
  {
    question: 'How many solar quotes should I get in California?',
    answer:
      'Two is the floor and three is better, because the second quote is what tells you whether the first one is normally priced. Ask every bidder for the same system size in DC watts, the same module and inverter models where possible, and a monthly production estimate. Then compare the price per watt rather than the monthly payment.',
  },
  {
    question: 'Why does a California quote need California-specific numbers?',
    answer: `Because the value of a solar system here is set by your own utility, not by a national average. The CPUC Public Advocates Office put the PG&E residential average at ${FACTS.pgeResidentialAverageRate.value}¢ a kWh, SCE at ${FACTS.sceResidentialAverageRate.value}¢ and SDG&E at ${FACTS.sdgeResidentialAverageRate.value}¢, excluding the California Climate Credit (checked ${RATE_CHECKED}). Exports are credited under the Net Billing Tariff at investor-owned utilities and under a separate rate at SMUD. Those two inputs move a payback estimate more than the panel brand does.`,
  },
  {
    question: 'Who pays for a free solar quote service?',
    // COMPENSATION_SENTENCE is the owner-authored wording in
    // src/components/shared/ReferralDisclosure.tsx. Interpolated, never retyped.
    answer: `Somebody always does, and it is worth asking which company and at which moment. On this site the answer is written down: ${COMPENSATION_SENTENCE} Ask any platform the same question and read the answer before you submit a form, because it tells you how many companies have a reason to call you.`,
  },
  {
    question: 'How do I check a California solar contractor myself?',
    answer:
      'Use the Contractors State License Board Check a License lookup. It shows the license status, the classification the company holds, the bond, and any complaint disclosure. Do it for the exact legal name and license number printed on the contract, not the brand name on the proposal, and do it before you sign anything.',
  },
  {
    question: 'Is a quote platform the same thing as an installer?',
    answer:
      'No, and the distinction decides who answers when something goes wrong. A quote platform or referral service introduces you to companies. The company that signs the contract is the one that holds the license, pulls the permit, does the work and owes you the workmanship warranty. Read the contract for which legal entity is on it.',
  },
  {
    question: 'What should be in writing before I sign a California solar contract?',
    answer:
      'The system size in DC watts, the equipment models, a production estimate with its assumptions, the total cash price and any financing terms in full, the licensed entity doing the work, and what happens if production falls short. The CPUC publishes a Solar Consumer Protection Guide that California customers receive with a solar contract; read it alongside the proposal.',
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

export default function EnergySageReviewsCaliforniaPage() {
  return (
    <PublicLayout breadcrumbLabel="EnergySage reviews and California quote routes" breadcrumbParent={hub}>
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
              current="EnergySage reviews"
              kicker="Getting quotes · California"
              title={h1}
              updated={updated}
              sourceCount={sources.length}
            />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                If you are reading EnergySage reviews, you are really asking one question: which
                route to solar quotes is worth your phone number? There are three, and they differ
                in mechanism, not in branding. That difference is the whole decision, so here it is
                before anything else.
              </p>
              <p>
                <strong>A national multi-bid marketplace</strong> generates an automated estimate
                from what you type and routes your contact details to several bidding contractors.
                You get a spread of prices, and several companies get your number.{' '}
                <strong>Calling installers yourself</strong> keeps the list short, and the work of
                making the proposals comparable is yours. <strong>This site starts earlier.</strong>{' '}
                Before any contractor has your number, it is one California bill review: your
                utility, the rate schedule printed on your bill, and what the Net Billing Tariff
                would actually credit your exports. One conversation, no bidding war, and the first
                thing you find out is whether solar pencils out on your own rate schedule at all.
                Sometimes the answer is that it does not, and that is a useful answer to get for
                free.
              </p>
              <p>
                This guide does not score, rate or review any quote platform, and it states no fact
                about any named one; what a particular platform does with a form is set by that
                platform&apos;s own terms, which is where to read it. What follows is how the three
                routes differ, how to review a marketplace yourself in six questions, which
                California numbers a proposal has to answer, and how to check a
                contractor&apos;s license without taking anyone&apos;s word for it. Where this site
                sits in all of that is stated plainly further down: California Rate Relief is a
                referral service. We are not a licensed contractor.
              </p>

              {/* Bill-first step, high on the page: it takes two answers and hands
                  them to the inquiry form at the foot of the page. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California solar quote comparison and bill review" />
              </div>

              <div className="not-prose">
                <KeyFacts
                  heading="The California numbers a quote has to answer"
                  facts={[
                    {
                      label: 'PG&E residential average',
                      value: `${FACTS.pgeResidentialAverageRate.value}¢/kWh`,
                      note: `${FACTS.pgeResidentialAverageRate.asOf}; excludes the Climate Credit`,
                      source: {
                        publisher: 'CPUC Public Advocates Office',
                        date: FACTS.pgeResidentialAverageRate.checkedAt,
                        url: FACTS.pgeResidentialAverageRate.sourceUrl,
                      },
                    },
                    {
                      label: 'SCE residential average',
                      value: `${FACTS.sceResidentialAverageRate.value}¢/kWh`,
                      note: FACTS.sceResidentialAverageRate.asOf,
                      source: {
                        publisher: 'CPUC Public Advocates Office',
                        date: FACTS.sceResidentialAverageRate.checkedAt,
                        url: FACTS.sceResidentialAverageRate.sourceUrl,
                      },
                    },
                    {
                      label: 'SDG&E residential average',
                      value: `${FACTS.sdgeResidentialAverageRate.value}¢/kWh`,
                      note: FACTS.sdgeResidentialAverageRate.asOf,
                      source: {
                        publisher: 'CPUC Public Advocates Office',
                        date: FACTS.sdgeResidentialAverageRate.checkedAt,
                        url: FACTS.sdgeResidentialAverageRate.sourceUrl,
                      },
                    },
                    {
                      label: 'California median installed price',
                      value: `$${FACTS.lbnlResidentialPrice2025.value.california}/W`,
                      note: 'Host-owned residential systems installed in 2025, before incentives',
                      source: {
                        publisher: 'Berkeley Lab',
                        date: FACTS.lbnlResidentialPrice2025.checkedAt,
                        url: FACTS.lbnlResidentialPrice2025.sourceUrl,
                      },
                    },
                    {
                      label: 'Added price with a battery',
                      value: `+$${FACTS.lbnlPairedStoragePremium2025.value}/W`,
                      note: 'Median premium per watt of PV, cash purchases, 2025 installs',
                      source: {
                        publisher: 'Berkeley Lab',
                        date: FACTS.lbnlPairedStoragePremium2025.checkedAt,
                        url: FACTS.lbnlPairedStoragePremium2025.sourceUrl,
                      },
                    },
                    {
                      label: 'SMUD export credit',
                      value: `${FACTS.smudExportRate.value}¢/kWh`,
                      note: 'Solar and Storage Rate, every hour and season',
                      source: {
                        publisher: 'SMUD',
                        date: FACTS.smudExportRate.checkedAt,
                        url: FACTS.smudExportRate.sourceUrl,
                      },
                    },
                  ]}
                />
              </div>

              <h2>Three ways to get California solar quotes</h2>
              <p>
                The table below compares the routes, not companies, and the first column is the one
                that decides the rest: what happens before anyone calls you. The other thing worth
                settling is what you are optimizing for — the fewest phone calls, the widest spread
                of prices, or the most state-specific detail in the comparison. No route gives you
                all three.
              </p>
              <DataTable
                caption="Three routes to a California solar quote, compared on what happens first and who ends up with your number"
                columns={[
                  'Route',
                  'What happens first',
                  'How many companies end up contacting you',
                  'California rate and export detail',
                  'Who checks the license',
                ]}
                rows={[
                  [
                    'National multi-bid marketplace',
                    'An automated estimate generated from the details you type, then your contact details go out to contractors who bid against each other.',
                    'Several, on terms set by that platform. Read how many companies may contact you, for how long, and whether the details can be passed on again.',
                    'Depends on the platform. Check whether it prices exports under California net billing and your own utility’s rate rather than a national average.',
                    'Ask, then check the license number yourself before signing.',
                  ],
                  [
                    'Calling installers directly',
                    'Nothing until you dial. You build the list, book the site visits and set the pace.',
                    'Only the companies you contact. You control the list and the timing.',
                    'Each company prices your utility and rate plan in its own proposal. Normalizing the proposals so they can be compared is your job.',
                    'You do, on the CSLB lookup, for every entity on the contract.',
                  ],
                  [
                    'California bill review, then a referral (this site)',
                    'A review of your own bill: the utility, the rate schedule on it and what net billing would credit your exports, before any contractor has your number.',
                    'One solar provider, by referral, after one conversation. No bidding war. It does not guarantee three quotes or a particular provider, and the privacy policy says how details are handled.',
                    'Written for one state, so net billing, your utility’s average rate and its export credit are the starting point.',
                    'You still check the license yourself before signing.',
                  ],
                ]}
                note={
                  <>
                    Whichever route you take, the authority on what happens to your contact
                    details is the platform&apos;s own terms and privacy policy, not a comparison
                    table. This site&apos;s are at{' '}
                    <Link href="/privacy" className={guideLink}>
                      privacy
                    </Link>{' '}
                    and{' '}
                    <Link href="/affiliate-disclosure" className={guideLink}>
                      referral service disclosure
                    </Link>
                    .
                  </>
                }
              />

              <h2>What a quote marketplace does, and what it does not do</h2>
              <p>
                A multi-bid marketplace is an introduction layer with an estimate on the front of
                it. You describe the house, software turns that description into a number, and the
                description and your contact details go in front of companies that have signed up
                to receive them, which then decide whether to bid. The platform does not hold the contractor
                license, does not pull the permit, does not mount the panels and does not owe you a
                workmanship warranty. The company whose name is on the contract does all four.
              </p>
              <p>
                That means the useful questions about any platform, this one included, are not
                about star ratings. They are: how many companies can contact me, for how long, who
                pays the platform, and what state-specific detail does the comparison actually
                carry. A platform paid per introduction has a reason to make more introductions.
                That is not a scandal, it is a structure, and it is worth knowing before you type a
                phone number.
              </p>

              <h2>The California inputs a national comparison has to generalize</h2>
              <p>
                Four things decide what a California solar system is worth, and three of them are
                set by your own utility.
              </p>
              <p>
                <strong>Your rate.</strong> The CPUC Public Advocates Office reported a bundled
                residential average of {FACTS.pgeResidentialAverageRate.value}¢ a kWh at PG&amp;E,{' '}
                {FACTS.sceResidentialAverageRate.value}¢ at SCE and{' '}
                {FACTS.sdgeResidentialAverageRate.value}¢ at SDG&amp;E, excluding the California
                Climate Credit (checked {RATE_CHECKED}). A proposal built on a national average
                rate is not describing your bill. Current prices by utility are on the{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>
              <p>
                <strong>How exports are credited.</strong> New systems at PG&amp;E, SCE and
                SDG&amp;E take service under the Net Billing Tariff, in effect since{' '}
                {formatFactDate(FACTS.netBillingTariff.value.effective)} under CPUC decision{' '}
                {FACTS.netBillingTariff.value.decision}. Exports are credited at values from the
                CPUC Avoided Cost Calculator, which are usually below the retail rate. Municipal
                utilities set their own: SMUD&apos;s Solar and Storage Rate credits exports at{' '}
                {FACTS.smudExportRate.value}¢ a kWh at every hour and season. How that changes a
                design is covered in{' '}
                <Link href="/blog/how-does-net-metering-work" className={guideLink}>
                  how net metering and net billing work
                </Link>
                .
              </p>
              <p>
                <strong>What the hardware costs here.</strong> Berkeley Lab put the median
                installed price of host-owned residential systems built in California in 2025 at $
                {FACTS.lbnlResidentialPrice2025.value.california} a watt before incentives, with a
                median premium of ${FACTS.lbnlPairedStoragePremium2025.value} a watt of PV for
                paired solar-plus-storage among cash purchases. Two bids a long way either side of
                that are both telling you something.
              </p>
              <p>
                <strong>Local permitting and licensing.</strong> Permit fees, inspection timelines
                and utility interconnection queues are set city by city and utility by utility. A
                national page can describe the process; only the company bidding on your roof can
                tell you what your jurisdiction does, and only the state license board can tell you
                whether that company is entitled to do it.
              </p>

              <DataTable
                caption={`What your utility changes about a quote (CPUC and SMUD figures checked ${RATE_CHECKED})`}
                columns={['Utility', 'Residential average rate', 'How exports are credited']}
                rows={[
                  [
                    'PG&E',
                    `${FACTS.pgeResidentialAverageRate.value}¢/kWh`,
                    'Net Billing Tariff; export values from the CPUC Avoided Cost Calculator',
                  ],
                  [
                    'SCE',
                    `${FACTS.sceResidentialAverageRate.value}¢/kWh`,
                    'Net Billing Tariff; same avoided-cost basis',
                  ],
                  [
                    'SDG&E',
                    `${FACTS.sdgeResidentialAverageRate.value}¢/kWh`,
                    'Net Billing Tariff; excluded from the nine-year export adder',
                  ],
                  [
                    'SMUD',
                    'Published by SMUD, not in the CPUC report',
                    `Solar and Storage Rate: ${FACTS.smudExportRate.value}¢/kWh, flat across hours and seasons`,
                  ],
                ]}
                note={
                  <>
                    Averages are bundled residential rates from the CPUC Public Advocates Office
                    Q2 2026 report and exclude the California Climate Credit. Export treatment is
                    from the CPUC net billing page and SMUD&apos;s own rate page. Both are listed
                    in full under{' '}
                    <a href="#sources" className={guideLink}>
                      sources
                    </a>
                    .
                  </>
                }
              />

              <h2>How to check a California installer without taking anyone&apos;s word for it</h2>
              <p>
                This is the concrete step, and it takes about four minutes. Every company that
                installs solar in California needs a Contractors State License Board license.
                Open{' '}
                <a
                  href={CSLB_LICENSE_LOOKUP}
                  target="_blank"
                  rel="noopener external"
                  className={guideLink}
                >
                  CSLB Check a License
                </a>{' '}
                and look up the license number printed on the proposal.
              </p>
              <ol>
                <li>
                  <strong>Match the name.</strong> Check the legal entity name on the license
                  against the entity named in the contract, not the brand on the brochure. A sales
                  brand and the licensed installer are often different companies.
                </li>
                <li>
                  <strong>Check the status and the classification.</strong> The record shows
                  whether the license is active and which classification it carries. Solar work
                  sits under C-46, and electrical work under C-10.
                </li>
                <li>
                  <strong>Read the disclosures.</strong> The record shows the bond and any
                  complaint disclosure the board publishes.
                </li>
                <li>
                  <strong>Do it for every entity.</strong> If a roofer, an electrician or a
                  separate battery installer appears in the scope, each one gets looked up.
                </li>
              </ol>
              <p>
                The CPUC also publishes a{' '}
                <a
                  href={CPUC_CONSUMER_GUIDE}
                  target="_blank"
                  rel="noopener external"
                  className={guideLink}
                >
                  California Solar Consumer Protection Guide
                </a>{' '}
                that customers of the large utilities receive with a solar contract. Read it
                alongside the proposal rather than after signing. The longer walk-through is in{' '}
                <Link
                  href="/solar-installers/how-to-verify-a-solar-contractor-california"
                  className={guideLink}
                >
                  how to verify a California solar contractor
                </Link>
                .
              </p>

              <h2>How to review a quote marketplace yourself, in six questions</h2>
              <p>
                This is what reviewing a marketplace actually looks like. Star ratings describe how
                a sales call felt; these six answers describe the mechanism, and a platform that
                answers them in writing has told you what you need before you type a phone number.
              </p>
              <ol>
                <li>How many companies can contact me as a result of this form, and for how long?</li>
                <li>Who pays you, and at what point in the process?</li>
                <li>Can my details be passed to anyone beyond the companies that quote?</li>
                <li>
                  Does your comparison use my utility&apos;s rate and export credit, or a national
                  average?
                </li>
                <li>Do you hold a contractor license, or do the companies you introduce?</li>
                <li>What happens to my details if I decide not to go ahead?</li>
              </ol>
              <p>
                A platform that answers all six in writing is easier to judge than one with a high
                rating and no answers. Once you have proposals in hand, the comparison checklist in{' '}
                <Link href="/blog/solar-system-quotes-california" className={guideLink}>
                  getting and comparing California solar quotes
                </Link>{' '}
                lines them up side by side.
              </p>

              <h2>Where this site sits</h2>
              <p>
                California Rate Relief is an independent California information and referral
                service. It is not a contractor, a utility or a government agency, and it installs
                nothing. The guides, calculators, source links and checklists can be used without
                submitting anything. If you do submit an inquiry, you are referred to a solar
                provider, and that provider decides whether it can serve the project and what it
                can offer. A submission is not a quote, a financing approval or an eligibility
                decision, and it does not guarantee three quotes or a particular provider.
              </p>
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
                Start from your own bill, not from a platform. Pull twelve months of kWh and the
                total you paid, work out{' '}
                <Link href="/blog/average-kwh-per-day-california" className={guideLink}>
                  your kWh per day
                </Link>
                , then size a system against that in{' '}
                <Link
                  href="/blog/how-big-of-a-solar-system-do-i-need-california"
                  className={guideLink}
                >
                  how big a system a California home needs
                </Link>
                . With those two numbers written down, every proposal you collect becomes
                comparable, whichever route you used to collect it.
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <PageSources items={sources} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
                This page does not rate, score or review any quote platform, and it does not quote
                a price for any property.
              </p>
              <HubSpokeLinks hub="installers" currentPath={path} />
            </div>

            <SolarInquiry
              topic="California solar quote comparison and bill review"
              variant="bill"
              heading="Have Your Bill Reviewed Before You Collect Quotes"
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
