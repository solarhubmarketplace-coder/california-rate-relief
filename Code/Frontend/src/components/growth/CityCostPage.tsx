import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { IntentCTA } from '@/components/growth/IntentCTA';
import { BillComparison } from '@/components/growth/BillComparison';
import { Calendar, MapPin } from 'lucide-react';
import type { CityCostRow } from '@/data/city-cost-data';
import {
  RATE_TRACKER_PATH,
  formatAverageRateCents,
  getUtilityRate,
} from '@/data/utility-rate-tracker';

// =============================================================================
// CityCostPage — the template behind /solar-cost/[city]
//
// The query family is "solar panel cost <city>" / "how much does solar cost in
// <city>". Page one for those terms is full of price ranges nobody sourced.
// This page answers the question the other way round: it states plainly that no
// reliable public price exists for the city, then explains, with a source for
// every claim, the things that actually move the number for that address — the
// utility that bills it, the city's own permit rules, the physical work the roof
// and the main panel may force, and the state rules on buying versus
// third-party ownership and on property tax.
//
// HARD CONSTRAINTS
//   - No price, no range, no per-watt figure, no payback period. Not anywhere.
//     The mechanisms are described; the arithmetic is the reader's, on their own
//     quote and their own bill.
//   - The utility rate is IMPORTED from src/data/utility-rate-tracker.ts. It is
//     never typed into this file. (Strategy of record §7.2-§7.3.)
//   - California Rate Relief is a private solar referral service and not a
//     contractor. No installer is named, nothing is described as ours, and
//     nothing is called free.
//   - Rows reach this component only through the gate in city-cost-data.ts, so
//     every field rendered below already carries a source and a fetched date.
// =============================================================================

export interface CityCostSource {
  label: string;
  url: string;
  /** ISO date this source was fetched and the sentence checked against it. */
  verifiedAt: string;
}

const STATE_SOURCES: CityCostSource[] = [
  {
    label: '26 U.S.C. §25D — Residential clean energy credit (§25D(h) termination; §25D(e)(8)(A) timing), U.S. House Office of the Law Revision Counsel',
    url: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A25D+edition%3Aprelim%29',
    verifiedAt: '2026-09-17',
  },
  {
    label: '26 U.S.C. §48E — Clean electricity investment credit (§48E(i) leasing denial)',
    url: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'CPUC, California Solar Consumer Protection Guide',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'California Business and Professions Code §7169 — solar energy system disclosure document',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'CSLB, Solar Requirements (reproduces §7169; disclosure and Supporting Information forms)',
    url: 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'CSLB licence and home improvement salesperson lookup',
    url: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'California Revenue and Taxation Code §73 — active solar energy system new construction exclusion (§73(a), §73(i)(1)-(2))',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'California State Board of Equalization, Active Solar Energy System Exclusion',
    url: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'BOE Letter to Assessors No. 2024/031 (26 August 2024) — §73 sunset and construction in progress',
    url: 'https://www.boe.ca.gov/proptaxes/pdf/lta24031.pdf',
    verifiedAt: '2026-09-17',
  },
];

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

/** Titles are capped at 60 characters, so a long city name falls back. */
export function cityCostTitle(city: string): string {
  const full = `Solar Panel Cost in ${city}, CA: What Sets the Price (2026)`;
  return full.length <= 60 ? full : `Solar Panel Cost in ${city}, CA (2026)`;
}

/** Meta descriptions are capped at 155 characters. */
export function cityCostDescription(city: string): string {
  const full =
    `What actually sets the price of a solar system in ${city}, CA: the utility rate, ` +
    'city permit rules, the roof and the main panel. Sourced, with no price estimate.';
  return full.length <= 155
    ? full
    : `What sets the price of solar in ${city}, CA: utility rate, permits, roof and main panel. Sourced, with no price estimate.`;
}

export function cityCostPath(slug: string): string {
  return `/solar-cost/${slug}`;
}

function formatVerified(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const month = months[Number(match[2]) - 1];
  return month ? `${month} ${Number(match[3])}, ${match[1]}` : iso;
}

export function CityCostPage({ row }: { row: CityCostRow }) {
  const utility = getUtilityRate(row.utilityKey);
  const path = cityCostPath(row.slug);
  const canonicalUrl = `https://ratereliefca.com${path}`;
  const title = cityCostTitle(row.city);
  const description = cityCostDescription(row.city);
  const rate = formatAverageRateCents(utility);

  const sources: CityCostSource[] = [
    {
      label: `${row.city} solar permitting — ${row.permitFeeSource}`,
      url: row.permitUrl,
      verifiedAt: row.sourcesFetchedAt,
    },
    {
      label: utility.sourceUrl
        ? `${utility.name} average residential rate — ${utility.sourceLabel}`
        : `${utility.name} — ${utility.sourceLabel}`,
      url: utility.sourceUrl ?? `https://ratereliefca.com${RATE_TRACKER_PATH}`,
      verifiedAt: utility.fetchedAt,
    },
    ...STATE_SOURCES,
  ];

  const faqs = [
    {
      question: `How much does solar cost in ${row.city}?`,
      answer:
        `No source publishes a reliable price for a solar system in ${row.city}. ` +
        'Under Business and Professions Code section 7169(b), the figure that governs your project has to be handed to you in writing: the solar energy system disclosure document, on the front or cover page of the contract, in boldface 16-point type, carrying the total cost and payments for the system including financing costs. Ask for that document before comparing anything.',
    },
    {
      question: `Is solar worth it in ${row.city}?`,
      answer:
        `That depends on the bill the system would offset and on the contract you are offered, not on the city. The CPUC's California Solar Consumer Protection Guide requires a standardised bill savings estimate with the inputs and assumptions behind it, and caps any electricity rate escalation used in such a calculation at 10 percent. Compare ${utility.name}'s own billed usage history against that estimate, and check that the estimate's assumptions match your household.`,
    },
    {
      question: `Do I need a permit for solar in ${row.city}?`,
      answer:
        `Yes. A rooftop solar installation is permitted construction, and ${row.city} publishes its own fee schedule and filing process: ${row.permitFeeNote} Online filing: ${row.permitOnline} Verified ${formatVerified(row.sourcesFetchedAt)}.`,
    },
    {
      question: `Which utility serves ${row.city}?`,
      answer:
        `${utility.longName} (${utility.name}). Its current average residential rate is ${rate}, as of ${utility.asOf}, per ${utility.sourceLabel}, fetched ${formatVerified(utility.fetchedAt)}. That rate is ${utility.basisNote}.`,
    },
  ];

  return (
    <PublicLayout breadcrumbLabel={`Solar cost in ${row.city}`}>
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline={`How Much Does Solar Cost in ${row.city}? What Actually Sets the Price`}
        url={canonicalUrl}
        dateModified={row.sourcesFetchedAt}
        description={description}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <span className='text-foreground'>Solar cost in {row.city}</span>
            </nav>

            <header className='mb-8'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                {row.county} &middot; Cost drivers
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                How Much Does Solar Cost in {row.city}? What Actually Sets the Price
              </h1>
              <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
                <Link href='/author/chad-simpson' className='font-medium text-foreground hover:text-primary'>By Chad Simpson</Link>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={row.sourcesFetchedAt}>Sources verified {formatVerified(row.sourcesFetchedAt)}</time></div>
                <div className='flex items-center gap-1'><MapPin className='h-4 w-4' /><span>{row.city}, {row.county}</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              {/* ---------- Short answer: no price, and why ---------- */}
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                There is no reliable public price for a solar system in {row.city}, and this page
                does not print one. Every figure a homeowner is quoted turns on the size of the
                system, the roof it goes on, the electrical work the house needs and the contract
                structure &mdash; and the one document that is required to state the total cost for
                a specific address is the contract&apos;s own disclosure, not a web page. What this
                page does instead is name the things that genuinely differ between {row.city} and
                the next city over, each with its source: the utility that bills the address and
                what that utility currently charges, the city&apos;s own permit fee and filing
                process, and the California rules on ownership and on property tax that apply to
                the purchase either way. Bring those to a quote and the quote becomes checkable.
              </p>
              <p className='text-sm text-foreground/70 mb-8'>
                California Rate Relief is a private solar referral service. It is not a contractor,
                it does not install anything, and it does not estimate what a system would cost you.
              </p>

              {/* ---------- Utility ---------- */}
              <h2 id='utility' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Your utility: {utility.name}
              </h2>
              <p>
                {row.city} is billed by {utility.longName} ({utility.name}).
                {utility.averageResidentialRateCents === null ? (
                  <> No comparable average residential rate is published for {utility.name} on our
                  tracker: {utility.basisNote}. Read your own tariff schedule and your own bill
                  instead of an average.</>
                ) : (
                  <> Its current average residential rate is <strong>{rate}</strong>, as of{' '}
                  {utility.asOf}. That figure is {utility.basisNote}.</>
                )}
              </p>
              {row.cca ? (
                <p>
                  Generation for many addresses in {row.city} is supplied by {row.cca} rather than by
                  {' '}{utility.name}, while {utility.name} still bills the delivery side. Check which
                  generation line appears on your own bill before comparing any estimate.
                </p>
              ) : null}
              <p className='text-foreground/60 text-sm'>
                {utility.sourceUrl ? (
                  <>
                    Source:{' '}
                    <a href={utility.sourceUrl} target='_blank' rel='noopener noreferrer' className={link}>
                      {utility.sourceLabel}
                    </a>
                    . Fetched {formatVerified(utility.fetchedAt)}.{' '}
                  </>
                ) : (
                  <>{utility.sourceLabel}. Checked {formatVerified(utility.fetchedAt)}. </>
                )}
                This page pulls the figure from our own rate record rather than restating it, so it
                cannot drift from the tracker &mdash;{' '}
                <Link href={RATE_TRACKER_PATH} className={link}>see the tracker</Link> for the rate
                history, the fixed charges and the per-row sources behind it.
              </p>
              <p>
                Why the rate matters to a cost question at all: the rate is what the system is worth
                against, not what it costs. A higher rate does not make a system cheaper to install
                in {row.city}; it changes how quickly the same install offsets a bill. Those are two
                different questions and quotes routinely blur them.
              </p>

              {/* ---------- Permits ---------- */}
              <h2 id='permits' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                {row.city} permits
              </h2>
              <p>
                Rooftop solar is permitted construction, and the permit is a line a contractor either
                passes through to you or absorbs. It is worth knowing what the city itself charges so
                you can tell which of those two a quote is doing.
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>What {row.city} publishes:</strong> {row.permitFeeNote}</li>
                <li><strong>Filing online:</strong> {row.permitOnline}</li>
                <li>
                  <strong>Source:</strong>{' '}
                  <a href={row.permitUrl} target='_blank' rel='noopener noreferrer' className={link}>
                    {row.permitFeeSource}
                  </a>
                  . Fetched {formatVerified(row.sourcesFetchedAt)}.
                </li>
              </ul>
              <p>
                Ask for the permit and inspection scope in writing, and ask who pulls the permit. A
                quote that leaves permitting out of its scope is not the same quote as one that
                includes it, whatever the two bottom lines look like side by side.
              </p>

              {/* ---------- Cost drivers ---------- */}
              <h2 id='drivers' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                What drives the cost of a system here
              </h2>
              <p>
                These are mechanisms, not figures. Each one changes the scope of the job, which is
                what a price is attached to. Work through them against your own house and you will
                know which parts of two quotes are not comparable.
              </p>
              <ul className='list-disc pl-6 space-y-3'>
                <li>
                  <strong>System size versus your bill.</strong> Size follows the usage you actually
                  want to offset, which comes off twelve months of billed kWh &mdash; not off square
                  footage and not off a neighbour&apos;s system. A larger array is a larger job:
                  more modules, more racking, more labour. Sizing a system past the usage it offsets
                  adds scope without adding much to the bill it replaces.
                </li>
                <li>
                  <strong>The roof.</strong> Covering material, pitch, plane count, framing condition
                  and remaining life all change the labour and the attachment method. Tile and
                  low-slope roofs are handled differently from composition shingle. A roof near the
                  end of its life raises a sequencing question, because removing and reinstalling an
                  array later is its own job &mdash; see{' '}
                  <Link href='/blog/is-my-roof-good-for-solar-california' className={link}>
                    whether your roof is suited to solar
                  </Link>.
                </li>
                <li>
                  <strong>Shade.</strong> Trees, neighbouring structures, chimneys and vents reduce
                  what a given module produces, and the response is usually design: fewer usable
                  planes, module-level electronics, or a different layout. Shade therefore changes
                  both the equipment list and the production the system is sold on.
                </li>
                <li>
                  <strong>Main panel and electrical work.</strong> The point of interconnection has
                  to accept the new circuit. Where the existing main service panel cannot, the job
                  grows to include a panel upgrade or a derate, plus its own permit and inspection.
                  This is one of the largest scope differences between two otherwise identical
                  houses on the same street.
                </li>
                <li>
                  <strong>Battery, or no battery.</strong> A battery is a separate system with its own
                  equipment, its own interconnection and its own installation work. It answers a
                  different question from the solar array &mdash; what happens during an outage, and
                  when energy is used rather than how much is produced. Decide whether you are buying
                  it, and price it as its own line, rather than letting it ride inside a single figure.
                </li>
              </ul>

              {/* ---------- Buying vs TPO ---------- */}
              <h2 id='ownership' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Buying vs third-party ownership in 2026
              </h2>
              <p>
                The federal picture changed and it changed for everyone, {row.city} included.{' '}
                <strong>
                  Section 25D(h) of the Internal Revenue Code provides that the residential clean
                  energy credit &ldquo;shall not apply with respect to any expenditures made after
                  December 31, 2025,&rdquo; and section 25D(e)(8)(A) treats an expenditure as made
                  when the original installation of the item is completed &mdash; so a purchase whose
                  installation completes in 2026 carries no federal residential credit, whatever date
                  the contract was signed.
                </strong>{' '}
                (<a href={STATE_SOURCES[0].url} target='_blank' rel='noopener noreferrer' className={link}>26 U.S.C. §25D</a>,
                verified {formatVerified(STATE_SOURCES[0].verifiedAt)}. This is not tax advice; a tax
                professional should confirm your own position.)
              </p>
              <p>
                Under a lease or a power purchase agreement the equipment belongs to the provider, and
                any credit the provider claims is a business credit under section 48E. That is the
                provider&apos;s tax position, not a resident&apos;s entitlement, and it does not
                establish savings. On the statutory text, section 48E(i)&apos;s denial for leasing
                arrangements reaches property described in section 25D(d)(1) and (d)(4) &mdash; solar
                water heating and small wind &mdash; not (d)(2), which is residential solar electric.
                (<a href={STATE_SOURCES[1].url} target='_blank' rel='noopener noreferrer' className={link}>26 U.S.C. §48E</a>,
                verified {formatVerified(STATE_SOURCES[1].verifiedAt)}.) So the honest comparison is
                between total cost and payments on one side and a payment schedule with an escalator
                on the other &mdash; which is exactly what section 7169(b) requires to be disclosed on
                the front or cover page of the contract, in boldface 16-point type, including
                financing costs.
              </p>
              <p>
                Three pages go further into the parts of that comparison people get caught by:{' '}
                <Link href='/blog/is-it-better-to-buy-or-lease-solar-panels-california' className={link}>
                  buying versus leasing in California
                </Link>,{' '}
                <Link href='/solar-problems/solar-dealer-fees-explained' className={link}>
                  dealer fees
                </Link>{' '}and{' '}
                <Link href='/solar-problems/solar-escalator-clause-explained' className={link}>
                  escalator clauses
                </Link>.
              </p>

              {/* ---------- Property taxes ---------- */}
              <h2 id='property-tax' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Property taxes
              </h2>
              <p>
                <strong>
                  California Revenue and Taxation Code section 73(a) provides that
                  &ldquo;newly constructed&rdquo; does not include the construction or addition of a
                  qualifying active solar energy system, so installing one does not by itself increase
                  the existing assessment on your {row.city} home &mdash; and the Board of
                  Equalization is explicit that this is an exclusion from new construction, not an
                  exemption, meaning it removes nothing from the roll and lowers no existing tax bill.
                </strong>
              </p>
              <p>
                The date matters. Section 73(i)(1) keeps the section in effect only until January 1,
                2027; section 73(i)(2) preserves what has already been granted, so a system that
                qualifies before that date stays excluded afterwards until there is a change in
                ownership. SB 710 (Stats. 2025, Ch. 328) made January 1, 2027 the date the exclusion
                becomes inoperative. The Board of Equalization reads the sunset as covering new
                construction &ldquo;in progress or completed before January 1, 2027,&rdquo; while
                cautioning that completed construction is assessable on the lien date and on the day
                of completion &mdash; so timing questions about a project that straddles the date
                belong with your county assessor, not with a contractor.
              </p>
              <p className='text-foreground/60 text-sm'>
                Sources:{' '}
                <a href={STATE_SOURCES[6].url} target='_blank' rel='noopener noreferrer' className={link}>Rev. &amp; Tax. Code §73</a>,{' '}
                <a href={STATE_SOURCES[7].url} target='_blank' rel='noopener noreferrer' className={link}>BOE, Active Solar Energy System Exclusion</a>{' '}and{' '}
                <a href={STATE_SOURCES[8].url} target='_blank' rel='noopener noreferrer' className={link}>BOE LTA 2024/031</a>.
                Verified {formatVerified(STATE_SOURCES[6].verifiedAt)}.
              </p>

              {/* ---------- Tool ---------- */}
              <h2 id='bill-tool' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Start from your own bill, not from an average
              </h2>
              <p>
                A quote is only checkable against real usage. This compares two of your own{' '}
                {utility.name} bills on the same basis &mdash; billing days, kWh and charges &mdash;
                so you can see what actually moved before anyone tells you what a system would do
                about it. Nothing is sent anywhere; the arithmetic runs in your browser.
              </p>
              <div className='not-prose my-8'>
                <BillComparison utilityName={utility.name} />
              </div>

              {/* ---------- FAQ ---------- */}
              <h2 id='faq' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Frequently asked questions
              </h2>
              <div className='space-y-6'>
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>{faq.question}</h3>
                    <p className='text-foreground/80 m-0'>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* ---------- Sources ---------- */}
              <h2 id='sources' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Sources
              </h2>
              <ul className='list-disc pl-6 space-y-2 text-sm'>
                {sources.map((source) => (
                  <li key={`${source.url}-${source.label}`}>
                    <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                      {source.label}
                    </a>{' '}
                    &mdash; {source.url} &mdash; verified {formatVerified(source.verifiedAt)}
                  </li>
                ))}
              </ul>
              <p className='text-foreground/60 text-sm'>
                Related reference pages on this site:{' '}
                <Link href={RATE_TRACKER_PATH} className={link}>California utility rate tracker</Link>,{' '}
                <Link href='/solar-problems/solar-dealer-fees-explained' className={link}>dealer fees</Link>,{' '}
                <Link href='/solar-problems/solar-escalator-clause-explained' className={link}>escalator clauses</Link>,{' '}
                <Link href='/blog/is-it-better-to-buy-or-lease-solar-panels-california' className={link}>buy or lease</Link>,{' '}
                <Link href='/blog/is-my-roof-good-for-solar-california' className={link}>is my roof suited to solar</Link>.
              </p>
            </div>

            <IntentCTA variant='bill' />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
