import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { GuideShell, Cite } from '@/components/growth/GuideShell';
import { DataTable } from '@/components/growth/RateGuideParts';
import type { Source } from '@/components/growth/DecisionPage';
import type { KeyFact } from '@/components/trust/KeyFacts';
import { FACTS, usd, formatFactDate } from '@/data/facts';
import { SRC, rateSources, RATE_SOURCES_CHECKED } from '@/data/rate-sources';

// 2026-11-09 upgrade: the page now answers the broad "solar maintenance"
// question for an owner who already has panels — what the system needs and how
// often, what to check before paying anyone, how to read an output drop, and
// when the complaint is really a rate or billing problem. Every rate figure
// comes from src/data/facts.ts; every rate document from src/data/rate-sources.ts.
//
// DATES — two different things, deliberately kept apart:
//   UPDATED         the page's own last-modified date (Article dateModified,
//                   openGraph modifiedTime). Editing the page sets it.
//   SOURCES_CHECKED the date the documents named in page-local constants below
//                   (CPUC, NREL, UC San Diego, CSLB, DOE, LADWP, PRC, 22 CCR)
//                   were last read end to end.
// The 2026-11-09 revision reworked framing and copy; it did NOT recheck those
// documents, so no citation may print 2026-11-09 as a "checked" date. Rate
// figures print their registry fact's own checkedAt, and the rate documents
// print RATE_SOURCES_CHECKED. Bump SOURCES_CHECKED only after actually
// rereading the sources.

const PATH = '/solar-panel-maintenance-california';
const PUBLISHED = '2026-09-23';
const UPDATED = '2026-11-09';
const SOURCES_CHECKED = '2026-09-23';
const metaTitle = 'Solar Panel Maintenance in California: 2026 Guide';
const metaDescription =
  'What maintenance a California solar system needs and how often, what to check yourself when output drops, inverter and warranty rules, and who to call.';

const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const NREL_ATB = 'https://atb.nrel.gov/electricity/2024/residential_pv';
const NREL_OM = 'https://www.nrel.gov/docs/fy19osti/73822.pdf';
const UCSD = 'https://jacobsschool.ucsd.edu/news/release/1393?id=1393';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const CSLB_COMPLAINT = 'https://www.cslb.ca.gov/Consumers/Filing_A_Complaint/';
const CSLB_SMALL_CLAIMS = 'https://www.cslb.ca.gov/Consumers/Legal_Issues_For_Consumers/Small_Claims_Court.aspx';
const DOE_ROOF = 'https://www.energy.gov/eere/solar/articles/replacing-your-roof-its-great-time-add-solar';
const LADWP_SRP = 'https://www.ladwp.com/residential-services/solar-programs/solar-rooftops';
const LADWP_GUIDE = 'https://www.ladwp.com/sites/default/files/2026-01/Revised%20SRP%20Guidelines%20(BES%2011-3-25%20v.2).pdf';
// 2026-11-09: the Summer 2018 "Find My Licensed Contractor" newsletter URL this
// page cited now returns 404, and the ZipCodeSearch page it linked redirects to
// CheckLicense.aspx, which searches by license number, business name or
// personnel name — not by classification within a city or ZIP. The claim and
// the quote that rested on the dead newsletter were rewritten to what the live
// tool does.
const CSLB_CHECK = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
/** The one source on this page that WAS read on 2026-11-09: it replaced a 404. */
const CSLB_CHECK_CHECKED = '2026-11-09';
const PRC = (n: string) => `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PRC&sectionNum=${n}`;
const CCR_UW = 'https://www.law.cornell.edu/regulations/california/22-CCR-66261.9';

// --- Rate facts used in the "is it the panels or the bill?" section ---------
const PGE_RATE = FACTS.pgeResidentialAverageRate;
const SCE_RATE = FACTS.sceResidentialAverageRate;
const SDGE_RATE = FACTS.sdgeResidentialAverageRate;
const SMUD_EXPORT = FACTS.smudExportRate;
const RATES_CHECKED = formatFactDate(PGE_RATE.checkedAt);

/** Retail value of kWh a system stops making, at a published average rate. */
const lostValue = (cents: number, kwh: number) => usd((cents / 100) * kwh, 2);

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (Version 4) and questions to ask', url: CPUC_GUIDE },
  { label: 'NREL: Annual Technology Baseline 2024, residential PV operation and maintenance costs', url: NREL_ATB },
  { label: 'NREL: Best Practices for Operation and Maintenance of PV and Energy-Storage Systems, 3rd ed. (Dec. 2018)', url: NREL_OM },
  { label: 'UC San Diego Jacobs School of Engineering: cleaning solar panels often not worth the cost (July 31, 2013)', url: UCSD },
  { label: 'Mejia and Kleissl, “Soiling losses for solar photovoltaic systems in California,” Solar Energy 95 (2013)', url: 'https://escholarship.org/uc/item/5kd297nm' },
  { label: 'CSLB: Solar Smart, license classes that may install and repair solar', url: CSLB_SOLAR },
  { label: 'CSLB: Filing a complaint (four-year jurisdiction)', url: CSLB_COMPLAINT },
  { label: 'CSLB: Small claims court', url: CSLB_SMALL_CLAIMS },
  { label: 'U.S. Department of Energy: Replacing your roof? It’s a great time to add solar', url: DOE_ROOF },
  { label: 'LADWP: Solar Rooftops program', url: LADWP_SRP },
  { label: 'LADWP: Solar Rooftops Program Guidelines, safety and maintenance rules (revised, posted January 2026)', url: LADWP_GUIDE },
  { label: 'CSLB: Check a License or Home Improvement Salesperson Registration', url: CSLB_CHECK },
  { label: 'Public Resources Code § 25982 (Solar Shade Control Act: trees planted after a solar collector)', url: PRC('25982') },
  { label: 'Public Resources Code § 25983 (shading tree as a private nuisance after written notice)', url: PRC('25983') },
  { label: 'Public Resources Code § 25984 (trees the Act does not cover)', url: PRC('25984') },
  { label: 'Public Resources Code § 25985 (city and county opt-outs and local ordinances)', url: PRC('25985') },
  { label: 'Cal. Code of Regs., tit. 22, § 66261.9 (photovoltaic modules as universal waste, operative Jan. 1, 2021)', url: CCR_UW },
  ...rateSources(
    'paoQ2_2026',
    'cpucNbt',
    'cpucMyBill',
    'pgeSolarBill',
    'sceNemBill',
    'sdgeNemBill',
  ),
  { label: `${SMUD_EXPORT.publisher}: ${SMUD_EXPORT.sourceTitle} (export credit)`, url: SMUD_EXPORT.sourceUrl },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Who pays for repairs',
    value: 'You, if you own it',
    note: 'Unless you bought a maintenance plan or the system came with one.',
    source: { publisher: 'CPUC', date: SOURCES_CHECKED, url: CPUC_GUIDE },
  },
  {
    label: 'National upkeep benchmark',
    value: '$30 per kW a year',
    note: 'NREL’s 2023 residential estimate; its range is $0 to $40 per kW a year.',
    source: { publisher: 'NREL ATB 2024', date: SOURCES_CHECKED, url: NREL_ATB },
  },
  {
    label: 'Dust loss, dry summer',
    value: '7.4% after 145 days',
    note: 'Panels with no rain or washing, 186 California sites, 2010 data.',
    source: { publisher: 'UC San Diego', date: SOURCES_CHECKED, url: UCSD },
  },
  {
    label: 'What a lost kWh costs',
    value: `${PGE_RATE.value}¢ to ${SDGE_RATE.value}¢`,
    // Each utility carries its own as-of string; PG&E's does not describe
    // SDG&E's rate and must not be applied to the combined range.
    note: `PG&E’s bundled residential average as of ${PGE_RATE.asOf}; SDG&E’s as of ${SDGE_RATE.asOf}. Both exclude the California Climate Credit.`,
    source: { publisher: PGE_RATE.publisher, date: PGE_RATE.checkedAt, url: PGE_RATE.sourceUrl },
  },
  {
    label: 'CSLB complaint window',
    value: '4 years',
    note: 'From the date of the act, licensed or unlicensed contractor.',
    source: { publisher: 'CSLB', date: SOURCES_CHECKED, url: CSLB_COMPLAINT },
  },
];

const faqs = [
  {
    question: 'What maintenance do solar panels need?',
    answer:
      'Very little routine work, but not none. The real job is watching: open the monitoring app monthly and compare output with the same month last year, look the array over from the ground after storms and wildfire ash, keep your own trees trimmed, and keep the contract, warranty papers and monitoring login somewhere you can find them. Cleaning is optional in most of California because rain does it. Electronics are what actually need service: NREL’s operation and maintenance guide calls inverter failure one of the most frequent causes of lost output.',
  },
  {
    question: 'How often should solar panels be serviced in California?',
    answer:
      'There is no required service interval for a home system. A sensible rhythm is monthly monitoring checks, a ground-level look after any storm or nearby fire, a tree trim each spring, and a careful read of the annual true-up bill against a full year of production. Pay for a professional inspection only when output has fallen and you cannot explain it, after storm or fire damage, when buying a house that already has solar, or before roof work.',
  },
  {
    question: 'My solar output dropped. What should I check first?',
    answer:
      'Work from free to expensive. First, confirm the drop is real by comparing the same month last year, not last month, because output falls every autumn. Second, look at whether the whole system fell or only part of it: a slow whole-system decline through a dry season that recovers after rain is dust, one panel or string falling behind is shade, damage or a failed microinverter, and everything stopping at once is usually an inverter fault, a tripped breaker or a lost monitoring connection. Third, check the inverter display and your breaker panel. Only then call someone, and ask whether the first visit is a flat diagnostic fee.',
  },
  {
    question: 'How much does solar panel maintenance cost per year?',
    answer:
      'NREL’s 2024 Annual Technology Baseline uses $30 per kW of panels per year as its 2023 estimate for residential operation and maintenance, and says the figure can run from $0 to $40 per kW a year depending on which practices a system gets. That covers cleaning, component failure, insurance products and asset management, so an owner who rarely cleans and has no failures pays far less in a given year.\n\nFor a 7 kW system, $30 per kW works out to $210 a year on average. Real spending is lumpy: most years cost little, and a year with an inverter replacement outside warranty costs much more.',
  },
  {
    question: 'How long does a solar inverter last, and who pays to replace it?',
    answer:
      'No public agency publishes an average service life, so treat any single number you see as a guess. What is documented is the warranty picture: NREL’s best-practices guide, written in December 2018, noted that 10-year inverter warranties were then commonly available and that 20-year extended warranties and service plans were gaining ground, while the U.S. Department of Energy puts panel life at about 25 to 30 years. The practical consequence is that an inverter usually needs replacing at least once in the life of the panels, and whether you pay depends on the warranty term, whether it covers labor as well as the part, and whether panels must come off to reach it.',
  },
  {
    question: 'How often should solar panels be cleaned in California?',
    answer:
      'There is no fixed schedule that suits every roof. A UC San Diego study of 186 California sites found rain of more than 0.1 inch restored output, and that washing a typical 5 kW home system halfway through summer gained about $20 of electricity. Clean when monitoring shows a dry-season loss you can see, or sooner for bird droppings, very flat panels, or homes next to a highway, factory or farm.',
  },
  {
    question: 'My panels are fine but my bill went up. What happened?',
    answer:
      `A higher bill with healthy production is usually a rate change, a plan change or a true-up, not a hardware fault. California’s bundled residential average rates were ${PGE_RATE.value}¢ per kWh at PG&E, ${SCE_RATE.value}¢ at SCE and ${SDGE_RATE.value}¢ at SDG&E in the CPUC Public Advocates Office’s Q2 2026 report, excluding the California Climate Credit, so the same usage costs more than it did a few years ago. Add a fixed monthly service charge, a shift in time-of-use hours, a new export credit structure or twelve months of netting arriving at once, and the bill moves without the array changing at all. Read the true-up statement and the rate plan on it before paying anyone to inspect the roof.`,
  },
  {
    question: 'Who fixes my solar panels if the installer went out of business?',
    answer:
      'Start with the paperwork. Equipment warranties usually come from the manufacturer, not the installer, so a panel or inverter claim may still be possible. For the labor, hire a contractor licensed for solar work (CSLB lists C-46 solar and C-10 electrical among the classes allowed) and check the license before anyone goes on the roof. If a lease or PPA company owns the system, call that company, because the contract assigns service to someone.',
  },
  {
    question: 'Does a solar lease or PPA include maintenance?',
    answer:
      'Usually the company that owns the equipment keeps responsibility for it, but only the contract can tell you what is included, such as whether cleaning is your job. Read the service, warranty and roof-work sections before you call anyone else to touch the system.',
  },
  {
    question: 'Can I do solar panel maintenance myself?',
    answer:
      'The watching part, yes: check the monitoring app, look at the array from the ground, rinse dust from the ground if your panel manual allows it, and keep your own trees trimmed. Anything on the roof, on the panels or on the wiring is solar work for a licensed contractor. Solar equipment can carry dangerous voltage whenever the sun is up, so don’t open inverter or combiner cabinets.',
  },
  {
    question: 'Can my neighbor’s tree block my solar panels?',
    answer:
      'California’s Solar Shade Control Act limits trees and shrubs placed on a neighbor’s property after your system went in: they may not shade more than 10 percent of the collector area at any one time between 10 a.m. and 2 p.m. It does not cover trees that were there first, and cities and counties can opt out or apply their own ordinance, so check yours before sending the written notice the law requires.',
  },
  {
    question: 'Is a solar maintenance plan worth paying for?',
    answer:
      'Compare the plan with what your warranties already cover. The CPUC’s guide says owners are responsible for maintenance and repairs unless they buy a plan or the system includes one. A plan that mostly repeats warranty coverage adds little; one that covers labor, roof penetrations or response times your warranties leave out can be worth pricing.',
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

// GuideShell's `updated` prop feeds BOTH the byline and the "Sources checked …"
// header over the source list, where it also becomes every row's chip date. The
// source list is a verification claim, so it is given SOURCES_CHECKED, the date
// the sources were actually read. The page's own modified date stays on UPDATED,
// which is what ArticleJsonLd and openGraph carry. See the DATES note above.
//
// The intake has no existing-system / has_solar path: SolarInquiry asks utility,
// bill, address, homeowner and roof age only, `topic` is an analytics label, and
// no CtaVariant covers an owner who already has panels, so nothing on this page
// can switch the form off the new-solar ask. That gap is reported, not invented
// around. `heading` is the one lever the component exposes, so it states the ask
// this page's traffic can actually answer: a bill review on an existing system.
export default function SolarPanelMaintenanceCalifornia() {
  return (
    <PublicLayout breadcrumbLabel="Solar panel maintenance in California">
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar panel maintenance in California: what it takes and who to call"
        url="https://ratereliefca.com/solar-panel-maintenance-california"
        datePublished={PUBLISHED}
        dateModified={UPDATED}
        description="The maintenance a California home solar system needs, how often, what to check yourself when output drops, which warranty covers what, and who to call."
      />
      <Header />
      <GuideShell
        title="Solar panel maintenance in California: what it takes and who to call"
        eyebrow="Solar panel maintenance"
        updated={SOURCES_CHECKED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="maintenance"
        path={PATH}
        quickCheckTopic="California solar maintenance and system performance check"
        leadCount={1}
        inquiry={
          <SolarInquiry
            topic="California solar maintenance and system performance check"
            heading="Already have solar and the bill is still over $200?"
          />
        }
      >
        {/* The lead: the one paragraph GuideShell renders above the quick
            check. The disclosure paragraph below it used to be a second lead
            child, which printed the referral-service sentence twice in the
            first screen, once by hand and once inside HeroQuickCheck's own
            ReferralDisclosure. It is the first body paragraph now, so the
            sentence appears once above the fold. */}
        <p>
          Washing panels is the smallest lever a California owner has. In the best measurement of it, panels
          that went 145 days with no rain and no washing lost 7.4 percent of their efficiency, and washing a
          typical 5 kW system halfway through summer bought back about $20 of electricity.{' '}
          <Cite publisher="UC San Diego" href={UCSD} date={SOURCES_CHECKED} /> So if the power bill is still
          over $200 a month, or the inverter is dark, or the company that installed the system has closed,
          dirt is not the problem. This guide is for owners diagnosing a system they already have: what the
          hardware really needs, how to read an output drop, and when the complaint turns out to be the rate
          rather than the roof.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor. We do not clean,
          repair, remove or install solar equipment; this guide explains the work and who is responsible for it.
        </p>

        <section>
          <h2>Start with the money: is it the panels, or is it the bill?</h2>
          <p>
            Most people searching for solar maintenance are not looking at a broken array. They are looking at a
            bill that got worse and assuming the panels must be the reason. Separating the two is free, it takes
            about ten minutes, and it decides whether you need a contractor at all. Do it before you pay anyone.
          </p>
          <p>
            Start with what a lost kWh is actually worth. California’s bundled residential average rates, as
            reported by the CPUC Public Advocates Office, were {PGE_RATE.value}¢ per kWh at PG&amp;E,{' '}
            {SCE_RATE.value}¢ at SCE and {SDGE_RATE.value}¢ at SDG&amp;E, all excluding the California Climate
            Credit. <Cite publisher={PGE_RATE.publisher} href={PGE_RATE.sourceUrl} date={PGE_RATE.checkedAt} />{' '}
            Those averages let you price a performance problem before you pay anyone to look at it.
          </p>
          <DataTable
            caption="What an output loss costs a month at published average residential rates"
            columns={['Utility', 'Bundled residential average rate', '80 kWh a month lost', '160 kWh a month lost']}
            rows={[
              [
                'PG&E',
                `${PGE_RATE.value}¢ per kWh`,
                lostValue(PGE_RATE.value, 80),
                lostValue(PGE_RATE.value, 160),
              ],
              [
                'SCE',
                `${SCE_RATE.value}¢ per kWh`,
                lostValue(SCE_RATE.value, 80),
                lostValue(SCE_RATE.value, 160),
              ],
              [
                'SDG&E',
                `${SDGE_RATE.value}¢ per kWh`,
                lostValue(SDGE_RATE.value, 80),
                lostValue(SDGE_RATE.value, 160),
              ],
            ]}
            note={
              <>
                Rates are the bundled residential averages in the CPUC Public Advocates Office’s Q2 2026
                Electric Rates Report, published July 2026 and checked {RATES_CHECKED}, and they exclude the
                California Climate Credit. PG&amp;E’s figure is the rate in effect as of {PGE_RATE.asOf}.
                The monthly figures are those rates multiplied by the lost kWh, and they value
                lost output at the price of buying that power back. Output you would have exported is worth your
                export credit instead, which can be much lower: SMUD’s Solar and Storage Rate credits exports at{' '}
                {SMUD_EXPORT.value}¢ per kWh at every hour and season.{' '}
                <Link href="/california-utility-rate-tracker">
                  Our California utility rate tracker
                </Link>{' '}
                carries the current figures for each utility.
              </>
            }
          />
          <p>
            Now look at the bill itself. A higher bill on a healthy system almost always comes from one of five
            things, none of which a roof visit fixes: a rate increase, a change of rate plan or time-of-use
            hours, a fixed monthly service charge, a different export credit structure, or twelve months of
            netting landing at once in a true-up. The utilities publish their own walk-throughs of a solar
            statement — PG&amp;E’s{' '}
            <a href={SRC.pgeSolarBill.url} target="_blank" rel="noopener noreferrer">
              solar bill explainer
            </a>
            , SCE’s{' '}
            <a href={SRC.sceNemBill.url} target="_blank" rel="noopener noreferrer">
              guide to a net energy metering bill
            </a>{' '}
            and SDG&amp;E’s{' '}
            <a href={SRC.sdgeNemBill.url} target="_blank" rel="noopener noreferrer">
              NEM bill guide
            </a>{' '}
            — and the CPUC explains how net energy metering and net billing differ.{' '}
            <Cite publisher="CPUC" href={SRC.cpucNbt.url} date={RATE_SOURCES_CHECKED} />
          </p>
          <p>
            If after all that the bill still looks wrong rather than merely high, the CPUC publishes the route
            for a disputed utility bill.{' '}
            <Cite publisher="CPUC" href={SRC.cpucMyBill.url} date={RATE_SOURCES_CHECKED} /> Our own guides cover
            the three complaints that bring most existing-system owners here:{' '}
            <Link href="/solar-problems/solar-bill-still-high-california">
              why a bill is still high with solar
            </Link>
            ,{' '}
            <Link href="/solar-problems/true-up-bill-california-explained">what a true-up bill is</Link> and{' '}
            <Link href="/solar-problems/do-i-still-get-a-utility-bill-with-solar">
              why a utility bill arrives at all
            </Link>
            . If your evening usage is what the bill is punishing, adding storage to an existing array is a
            different fix from any repair; see{' '}
            <Link href="/battery/add-powerwall-to-existing-solar">adding a battery to an existing system</Link>.
          </p>
          <p>
            One sentence is worth keeping in mind through all of this: a rate problem and a hardware problem feel
            identical on a bill, and only production data tells them apart.
          </p>
        </section>

        <section>
          <h2>What maintenance does a California solar system need, and how often?</h2>
          <p>
            A rooftop system has no moving parts, so the care it needs is mostly checking, plus the occasional
            repair. The California Public Utilities Commission’s consumer guide puts the responsibility plainly:
            “Unless you purchase a maintenance plan or your system comes with one, you will be responsible for
            any maintenance and repairs.” <Cite publisher="CPUC" href={CPUC_GUIDE} date={SOURCES_CHECKED} />
          </p>
          <p>Here is the whole list for an owned home system.</p>
          <DataTable
            caption="Solar maintenance tasks, how often, and who should do them"
            columns={['Task', 'How often', 'You or a licensed pro', 'What it costs']}
            rows={[
              [
                'Compare output with the same month last year in the monitoring app',
                'Monthly',
                'You',
                'Free',
              ],
              [
                'Look the array over from the ground for debris, cracked glass, loose wiring or nesting',
                'After storms, high wind and wildfire ash',
                'You, from the ground',
                'Free',
              ],
              [
                'Rinse dust off panels you can reach from the ground',
                'Only when monitoring shows a dry-season loss',
                'You, if the panel manual allows it',
                'Free, or a quoted cleaning visit',
              ],
              [
                'Trim your own trees back from the array and the service wires',
                'Each spring, before the growing season',
                'You or a tree service',
                'Tree-service quote',
              ],
              [
                'Read the annual true-up against a full year of production',
                'Once a year',
                'You',
                'Free',
              ],
              [
                'Diagnose an unexplained output drop on the roof or in the wiring',
                'When monitoring shows a drop you cannot explain',
                'Licensed C-46 solar or C-10 electrical contractor',
                'Ask for a flat diagnostic fee and whether it applies to the repair',
              ],
              [
                'Replace an inverter, a panel or damaged wiring',
                'Once or twice in the life of the panels',
                'Licensed contractor, through the warranty where one applies',
                'Warranty, or a written quote',
              ],
              [
                'Remove and reinstall the array for roof work',
                'When the roof is replaced',
                'Licensed contractor, coordinated with the roofer',
                'Written quote itemising removal, storage and reinstallation',
              ],
            ]}
            note={
              <>
                Frequencies are the practical rhythm of a California system, not a required service schedule; no
                agency mandates one for a home array. For the money side, NREL’s Annual Technology Baseline puts
                residential operation and maintenance at $30 per kW of panels a year for 2023, in a range of $0
                to $40 per kW, and counts asset management, insurance products, cleaning, vegetation removal and
                component failure within it. That is about $210 a year on a 7 kW system, averaged over years
                with and without repairs (NREL, checked September 23, 2026). Dollar figures for individual jobs
                are in{' '}
                <Link href="/blog/solar-panel-maintenance-cost">what solar panel maintenance costs</Link>.
              </>
            }
          />
          <p>
            Two things are worth saying about that list. The first is that nothing on it requires a ladder. The
            second is that the expensive items are electrical, not cosmetic: NREL’s operation and maintenance
            guide names inverter failure among the most frequent causes of lost PV system performance.{' '}
            <Cite publisher="NREL" href={NREL_OM} date={SOURCES_CHECKED} />
          </p>
        </section>

        <section>
          <h2>What to check yourself before you call anyone</h2>
          <p>
            Most service calls on a healthy system are avoidable, and most real faults show themselves in the
            data before anyone climbs on the roof. Work through this from the ground, in order, and write down
            what you find.
          </p>
          <ol>
            <li>
              <strong>Confirm the drop is real.</strong> Compare the same month last year, not last month.
              Output falls every autumn in California on its own.
            </li>
            <li>
              <strong>Decide whether it is the whole system or part of it.</strong> The monitoring app usually
              shows per-panel or per-string output. This single question narrows the cause more than anything
              else you can do.
            </li>
            <li>
              <strong>Look at the inverter.</strong> Note any fault code or warning light exactly as it reads.
              Follow only the reset steps printed in your inverter manual.
            </li>
            <li>
              <strong>Check the breakers.</strong> A solar or inverter breaker in the main panel or an AC
              disconnect can trip and stop production entirely.
            </li>
            <li>
              <strong>Check whether monitoring itself is down.</strong> A dead Wi-Fi link or an expired gateway
              shows as zero production from a system that is actually working. The utility meter will disagree
              with the app.
            </li>
            <li>
              <strong>Look at the array from the ground.</strong> Debris, a tarp, new shade, bird nests, cracked
              glass, hanging wiring, scorch marks.
            </li>
            <li>
              <strong>Look at the bill.</strong> If production is normal and the bill is what changed, it is a
              rate or billing question, not a repair.
            </li>
          </ol>
          <p>
            Those seven steps are what a good technician asks you on the phone anyway. Having the answers
            shortens the visit and keeps a diagnostic call from becoming an open-ended one. A deeper walk-through
            of the order to check things is in{' '}
            <Link href="/solar-problems/solar-panels-not-producing-enough">
              what to check when panels under-produce
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Reading an output drop: symptom, likely cause, what to check</h2>
          <p>
            An output drop has a shape, and the shape points at the cause. Find the row that matches what your
            monitoring shows.
          </p>
          <DataTable
            caption="Solar output symptoms, likely causes and the first thing to check"
            columns={['What you observe', 'Most likely cause', 'Check this first', 'Who to call']}
            rows={[
              [
                'Whole system declines slowly through a dry season, recovers after rain',
                'Soiling: dust, pollen or wildfire ash',
                'Whether output returned after more than 0.1 inch of rain',
                'Nobody, unless the loss is large enough to justify a cleaning quote',
              ],
              [
                'One panel or one string falls behind the rest',
                'New shade, a cracked or soiled panel, a failed microinverter or optimiser, or a wiring fault',
                'Whether a tree, vent or antenna is new, and whether that panel reads zero or just low',
                'Licensed C-46 or C-10 contractor; the maker if the part is under warranty',
              ],
              [
                'Everything stops at once, inverter dark or showing a fault',
                'Inverter fault, tripped breaker, or utility outage',
                'The inverter display, the solar breaker and the AC disconnect',
                'Installer or the system owner first; a licensed contractor if neither responds',
              ],
              [
                'Monitoring shows zero but the house is clearly using solar power',
                'Monitoring link failure, not a production failure',
                'The gateway’s network connection, and the utility meter reading',
                'Installer or monitoring provider; this is often fixed remotely',
              ],
              [
                'Output lower every winter, back to normal by spring',
                'Normal seasonal curve, not a fault',
                'The same month last year rather than last month',
                'Nobody',
              ],
              [
                'A small, steady decline year over year',
                'Expected panel degradation',
                'The output guarantee in the panel warranty',
                'The panel maker, only if output has fallen below the guarantee',
              ],
              [
                'Production normal, bill much higher',
                'Rate increase, plan change, fixed charges or an annual true-up',
                'The rate plan and the true-up statement on the bill',
                'Your utility, then the CPUC if the bill looks wrong',
              ],
              [
                'Water stain on a ceiling under the array',
                'Roof penetration or flashing failure',
                'The installer’s workmanship warranty and its term',
                'Installer and your roofer, together',
              ],
            ]}
            note={
              <>
                The rain threshold is UC San Diego’s: in a study of 186 California systems using 2010 data, rain
                of more than 0.1 inch restored panels to clean output. Panel degradation, winter output and
                under-production each have their own guide:{' '}
                <Link href="/solar-problems/solar-panel-degradation-california">degradation</Link>,{' '}
                <Link href="/solar-problems/solar-production-winter-california">winter output</Link> and{' '}
                <Link href="/solar-problems/solar-panels-not-producing-enough">panels not producing enough</Link>.
              </>
            }
          />
        </section>

        <section>
          <h2>Monitoring is the maintenance that matters most</h2>
          <p>
            The CPUC tells buyers to ask, before signing, “Will I be able to monitor the performance of the
            system once it’s installed? If so, how?” Once the system is running, that app is how you notice a
            problem in days instead of at the annual true-up bill, and the difference between those two is
            months of lost output you never get back.
          </p>
          <p>Three habits make monitoring worth having:</p>
          <ul>
            <li>
              <strong>Compare like with like.</strong> Month against the same month last year. Lower output in
              December is not a fault.
            </li>
            <li>
              <strong>Turn on alerts if the platform offers them.</strong> A fault email is worth more than a
              dashboard you remember to open twice a year.
            </li>
            <li>
              <strong>Keep the login.</strong> Monitoring accounts are often set up in the installer’s name. If
              that company closes, an account you cannot access is a system you cannot diagnose.
            </li>
          </ul>
          <p>
            It also helps to know roughly what your household should be using, so an odd bill separates into a
            usage question and a production question. Typical California figures are in{' '}
            <Link href="/blog/average-kwh-per-day-california">
              average kWh per day and per month in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Cleaning: in most of California, rain does most of it</h2>
          <p>
            The best California evidence on dirty panels is a UC San Diego study of 186 home and business
            systems, from the Bay Area to the Mexican border, using 2010 data. Panels lost a little under 0.05
            percent of efficiency per day without rain, and those left unwashed through a 145-day summer drought
            lost 7.4 percent. For a typical 5 kW home system, washing halfway through summer was worth about $20
            of electricity, and the researchers concluded most homeowners “won’t get their money back” paying
            someone to wash the panels (UC San Diego, July 2013).{' '}
            <Cite publisher="UC San Diego" href={UCSD} date={SOURCES_CHECKED} />
          </p>
          <p>
            The same researchers named the exceptions: panels heavily soiled by bird droppings, panels tilted
            less than five degrees, and homes directly beside a highway, factory or farm operation. If your roof
            fits one of those, or your monitoring shows a dry-season loss that a rain clears, cleaning can pay.
            The how, the risks and the warranty rules are in{' '}
            <Link href="/blog/solar-panel-cleaning-california">our solar panel cleaning guide</Link>, and birds
            nesting under the array are covered in{' '}
            <Link href="/blog/solar-panel-bird-proofing">the bird-proofing guide</Link>.
          </p>
        </section>

        <section>
          <h2>What you can do yourself, and what needs a licensed contractor</h2>
          <p>
            Most solar upkeep is looking, not touching. The line to hold is the roof edge and the equipment
            cabinets: anything on the array, the wiring or the inverter is solar work under California license
            law. CSLB describes C-46 solar contractors as the class that may “install, modify, maintain, and
            repair” solar energy systems. <Cite publisher="CSLB" href={CSLB_SOLAR} date={SOURCES_CHECKED} /> LADWP’s
            rules for the systems it owns on customers’ roofs put the safety reason plainly: owners must not
            open system cabinets or touch exposed wiring, because “hazardous voltages can be present throughout
            the entire system at any time.” <Cite publisher="LADWP" href={LADWP_GUIDE} date={SOURCES_CHECKED} />
          </p>
          <DataTable
            caption="Solar maintenance tasks an owner can do and tasks for a licensed contractor"
            columns={['Task', 'Who', 'Notes']}
            rows={[
              ['Check the monitoring app', 'You', 'Compare each month with the same month last year.'],
              [
                'Look over the array after a storm or ash fall',
                'You, from the ground',
                'Binoculars or a phone zoom are enough to spot debris, cracked glass or hanging wires.',
              ],
              [
                'Rinse dust off panels',
                'You, if reachable from the ground and the manual allows it',
                <>
                  Normal hose pressure, cool glass; see the{' '}
                  <Link href="/blog/solar-panel-cleaning-california">cleaning guide</Link>.
                </>,
              ],
              [
                'Trim your own trees',
                'You or a tree service',
                'Keep branches and ladders clear of the array and the service wires.',
              ],
              [
                'Anything on the roof or panels',
                'Licensed contractor',
                'Walking on panels or mounts can crack cells and break roof seals.',
              ],
              [
                'Inverter faults, wiring, breakers beyond a manual reset',
                'Licensed C-46 or C-10 contractor',
                'Follow only the reset steps in your inverter manual; call for anything else.',
              ],
              [
                'Any work on a leased or PPA system',
                'The system owner',
                'The contract says who may touch it.',
              ],
            ]}
          />
        </section>

        <section>
          <h2>A year of solar upkeep in California</h2>
          <p>
            California’s long dry season and its winter rains set a natural rhythm. None of these steps needs a
            ladder.
          </p>
          <ul>
            <li><strong>Late summer and early fall, before the rains:</strong> compare output with last year. This is when dust has built up longest, so it is the one time a cleaning might pay.</li>
            <li><strong>After the first real storm:</strong> check that output recovered. UC San Diego’s study used more than 0.1 inch of rain as the point that cleaned panels. <Cite publisher="UC San Diego" href={UCSD} date={SOURCES_CHECKED} /></li>
            <li><strong>Winter:</strong> expect lower numbers from shorter days; look for storm damage and debris instead.</li>
            <li><strong>Spring:</strong> trim trees before the growing season adds shade, and look for birds nesting under the array.</li>
            <li><strong>Fire season:</strong> after nearby fires, look for ash on the glass and damage to exposed wiring.</li>
            <li><strong>At your annual true-up:</strong> read the bill against a year of production, and confirm your warranty papers and monitoring login still work.</li>
          </ul>
        </section>

        <section>
          <h2>Inverters: the part most likely to need replacing</h2>
          <p>
            If a home system has one predictable repair, it is the inverter. NREL’s best-practices guide names
            inverter failure among the most frequent causes of lost PV system performance, and reported in
            December 2018 that 10-year inverter warranties were then commonly available, with 20-year extended
            warranties and service plans gaining ground.{' '}
            <Cite publisher="NREL" href={NREL_OM} date={SOURCES_CHECKED} /> Set that against panel life: the U.S.
            Department of Energy says panels last about 25 to 30 years.{' '}
            <Cite publisher="energy.gov" href={DOE_ROOF} date={SOURCES_CHECKED} /> The arithmetic of those two numbers
            is the whole point — the electronics will almost certainly need attention before the glass does.
          </p>
          <p>
            No public agency publishes an average inverter service life, so this guide does not print one. What
            you can do is act on the warranty dates you actually have:
          </p>
          <ul>
            <li>Find the inverter warranty term and its end date, and put it on a calendar.</li>
            <li>Check whether the warranty covers labor and shipping, or only the part.</li>
            <li>Register the equipment if the maker requires registration for coverage.</li>
            <li>Ask for a replacement price before the warranty expires, so the bill is not a surprise.</li>
          </ul>
          <p>
            A string inverter, microinverters and optimisers fail and get repaired differently;{' '}
            <Link href="/blog/string-inverter-vs-microinverter">string inverters versus microinverters</Link>{' '}
            compares them, <Link href="/blog/what-is-a-solar-inverter">the inverter explainer</Link> covers what
            the part does, and{' '}
            <Link href="/blog/replacement-solar-inverter-cost">what a replacement inverter costs</Link> walks
            through a quote.
          </p>
        </section>

        <section>
          <h2>Maintenance and service contracts: what they typically cover</h2>
          <p>
            A maintenance plan is only worth buying for what your warranties leave out. Lay the two side by side
            before you sign, and ask about each of these.
          </p>
          <DataTable
            caption="What to ask about a solar maintenance or service contract"
            columns={['Question', 'Why it matters']}
            rows={[
              [
                'Does it cover labor, or only parts?',
                'Product warranties often replace a component without paying for the visit to install it.',
              ],
              [
                'Does it cover roof penetrations and leaks?',
                'Leaks at mounts are a workmanship issue; the installer’s warranty may already cover them.',
              ],
              [
                'How many cleanings, and on whose schedule?',
                'A fixed schedule may clean panels that rain would have cleaned anyway.',
              ],
              [
                'What is the guaranteed response time?',
                'The CPUC suggests asking for a typical response time by phone or email.',
              ],
              [
                'Does it include monitoring, and in whose account?',
                'A plan that keeps monitoring in the company’s name leaves you blind if the company closes.',
              ],
              [
                'Does it cover removal and reinstallation for roof work?',
                'This is the largest one-off job a system creates, and plans usually exclude it.',
              ],
              [
                'Can you cancel, and does it transfer when you sell?',
                'A plan tied to the house matters at resale; one tied to you does not transfer.',
              ],
              [
                'Who actually performs the work, and under which license?',
                'CSLB warns: “Do not use a contractor who is not licensed to perform solar work.”',
              ],
            ]}
            note={
              <>
                The response-time question comes from CPUC’s consumer guide and the license warning from CSLB’s
                Solar Smart page, both checked September 23, 2026. What such a plan tends to be priced against
                is in{' '}
                <Link href="/blog/solar-panel-maintenance-cost">maintenance and cleaning costs</Link>.
              </>
            }
          />
        </section>

        <section>
          <h2>Warranties: which one covers what</h2>
          <p>
            A home system usually carries several warranties from different companies, and each answers a
            different question. Two of the CPUC’s buyer questions go straight at them: “Are there warranties for
            the panels and inverters?” and “What is your typical response time via phone or email?”{' '}
            <Cite publisher="CPUC" href={CPUC_GUIDE} date={SOURCES_CHECKED} /> Ask for the term, and for the name
            of whoever handles a claim.
          </p>
          <DataTable
            caption="Solar warranty types, who issues them and what to check"
            columns={['Warranty', 'Usually issued by', 'What to check in the document']}
            rows={[
              [
                'Panel product and output',
                'Panel manufacturer',
                'Term, output guarantee, whether labor to swap a panel is included, how to file',
              ],
              [
                'Inverter or microinverter',
                'Inverter manufacturer',
                'Term, parts versus labor, registration requirements',
              ],
              [
                'Workmanship or installation',
                'Installer',
                'Roof penetrations and leaks, wiring, what voids it, what happens if the installer closes',
              ],
              ['Roof', 'Roofer or roof-material maker', 'Whether solar mounts or a later removal affect coverage'],
              [
                'Lease or PPA service terms',
                'System owner',
                'Repairs, response times, cleaning, removal for roof work, production guarantees',
              ],
            ]}
          />
          <p>
            Before you let anyone else touch the array, ask the installer in writing whether it would affect the
            workmanship warranty.
          </p>
        </section>

        <section>
          <h2>What to do when the original installer is gone</h2>
          <p>
            This is the most common hard case on an older California system, and it is not hopeless. Equipment
            warranties are usually issued by the panel and inverter manufacturers, not by the installer, so a
            closed installer does not automatically end your coverage. What generally does end is the
            workmanship warranty on the installation itself.
          </p>
          <ol>
            <li>
              <strong>Find the paperwork first.</strong> The contract, the equipment list with model and serial
              numbers, the permit and the monitoring login. Serial numbers are what a manufacturer warranty
              claim turns on.
            </li>
            <li>
              <strong>Go to the manufacturer directly.</strong> Ask whether the part is in warranty and whether
              they have an authorised service company in your area.
            </li>
            <li>
              <strong>Take control of the monitoring account.</strong> Get it into your own name and email while
              you still can.
            </li>
            <li>
              <strong>Hire on license, not on sales pitch.</strong> Search the C-46 solar class, and C-10
              electrical for inverter and wiring work, and check the license before anyone goes on the roof.
            </li>
            <li>
              <strong>Ask the new contractor the awkward questions.</strong> Do you service systems you did not
              install, and this inverter and panel brand? Is the first visit a flat diagnostic fee, and does it
              apply to the repair? Will you file the warranty claim with the manufacturer, and who pays the
              labor if the part is covered? What warranty do you give on your own work and on any new roof
              penetrations?
            </li>
            <li>
              <strong>Keep the complaint route open.</strong> CSLB handles violations of contractor license law
              “for up to four years from the date of the act,” whether the contractor is licensed or not.{' '}
              <Cite publisher="CSLB" href={CSLB_COMPLAINT} date={SOURCES_CHECKED} />
            </li>
          </ol>
          <p>
            Before anyone goes on the roof, run the company through CSLB’s{' '}
            <a href={CSLB_CHECK} target="_blank" rel="noopener noreferrer">license check</a>, which looks a
            contractor up by license number, business name or personnel name and returns the license record,
            including the classifications that license actually holds.{' '}
            <Cite publisher="CSLB" href={CSLB_CHECK} date={CSLB_CHECK_CHECKED} /> Our pages on{' '}
            <Link href="/solar-installers/licensed-solar-installer">
              finding licensed solar installers by county
            </Link>{' '}
            and{' '}
            <Link href="/solar-installers/how-to-verify-a-solar-contractor-california">
              how to verify a solar contractor
            </Link>{' '}
            walk through the same lookup. If your installer specifically went under, the steps in{' '}
            <Link href="/solar-installers/solar-installer-bankruptcy-california">
              what to do when a solar installer goes bankrupt
            </Link>{' '}
            and{' '}
            <Link href="/solar-installers/freedom-forever-bankruptcy-what-to-do">
              the Freedom Forever bankruptcy walk-through
            </Link>{' '}
            apply to your warranties too.
          </p>
        </section>

        <section>
          <h2>Inspections: when a professional look is worth it</h2>
          <p>
            A system that produces what it did last year rarely needs a paid inspection. Four moments justify
            one: output has fallen and you can’t find why, a storm or fire may have damaged the array, you are
            buying a home that already has solar, or a roofer is about to work around the panels. What an
            inspection covers and how it is priced is in{' '}
            <Link href="/blog/solar-panel-inspection-california">our solar panel inspection guide</Link>.
          </p>
          <p>
            Hire someone licensed for the work. The Contractors State License Board lists the classes that may
            install solar, and describes C-46 solar contractors as those who “install, modify, maintain, and
            repair” solar energy systems; C-10 electrical contractors are also on its list. Its advice is
            blunt: “Do not use a contractor who is not licensed to perform solar work.”{' '}
            <Cite publisher="CSLB" href={CSLB_SOLAR} date={SOURCES_CHECKED} />
          </p>
        </section>

        <section>
          <h2>Repairs: inverters, panels, wiring and roof penetrations</h2>
          <p>
            Most repair bills come from the electronics, not the glass. Microinverters, optimisers, connectors,
            conduit and the flashing around roof mounts are the usual suspects after the inverter itself, and
            rodents and birds can damage wiring under the array.
          </p>
          <p>
            What a repair costs depends on the part, whether a warranty covers the part and the labor, and
            whether panels must come off to reach it.{' '}
            <Link href="/blog/solar-panel-repair-cost">What drives solar panel repair cost</Link> walks through
            each case. If a leak shows up under the array, go straight to{' '}
            <Link href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after solar</Link>.
          </p>
        </section>

        <section>
          <h2>Trees, shade and California’s Solar Shade Control Act</h2>
          <p>
            A tree that grows into the sun path cuts output every day, which makes shade the one maintenance
            issue that gets worse on its own. Trimming your own trees is ordinary upkeep. A neighbor’s trees are
            covered by a state law with a narrow reach.
          </p>
          <p>
            Under the Solar Shade Control Act, once a solar collector is installed, a person who owns or controls
            another property may not let a tree or shrub be placed or grow there so that it shades more than 10
            percent of the collector area at any one time between 10 a.m. and 2 p.m., local standard time.{' '}
            <Cite publisher="Public Resources Code § 25982" href={PRC('25982')} date={SOURCES_CHECKED} /> Such a tree
            becomes a private nuisance only if the owner fails to remove or alter it after receiving a written
            notice from the solar owner. <Cite publisher="PRC § 25983" href={PRC('25983')} date={SOURCES_CHECKED} />
          </p>
          <p>The limits matter as much as the rule:</p>
          <ul>
            <li>It does not apply to a tree or shrub planted before the solar collector was installed. <Cite publisher="PRC § 25984" href={PRC('25984')} date={SOURCES_CHECKED} /></li>
            <li>It does not apply to trees on timberland or commercial farmland, or to trees covered by a city or county ordinance.</li>
            <li>A city, or a county for unincorporated areas, may adopt an ordinance exempting itself, and a local tree-preservation or solar-shade ordinance governs where one exists. <Cite publisher="PRC § 25985" href={PRC('25985')} date={SOURCES_CHECKED} /></li>
          </ul>
          <p>
            Keep the permit or installation date, and photos of the neighboring trees at that time; they are what
            the law turns on. If production has fallen and you suspect shade, confirm it in your monitoring data
            first, following{' '}
            <Link href="/solar-problems/solar-panels-not-producing-enough">the checks for panels that under-produce</Link>.
          </p>
        </section>

        <section>
          <h2>Removing and reinstalling panels for roof work</h2>
          <p>
            A new roof under an existing array means the panels come off and go back on. The CPUC suggests
            asking before you sign: “Roughly how much will it cost to remove and re-install the panels if I need
            to replace my roof in the future, including inspection fees?” The U.S. Department of Energy says
            panels last about 25 to 30 years and a roof 20 to 50 years depending on material, and that doing
            both together avoids a later reinstall.{' '}
            <Cite publisher="energy.gov" href={DOE_ROOF} date={SOURCES_CHECKED} />
          </p>
          <p>
            Who may do the work, what the quote should itemize and how leases handle it are in{' '}
            <Link href="/blog/solar-panel-removal-reinstall-cost">solar panel removal and reinstall costs</Link>.
            Tile roofs add their own steps; see{' '}
            <Link href="/blog/solar-panels-tile-roof-california">solar on clay and concrete tile roofs</Link>. For
            the roof itself, start with{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california">whether your roof is ready for solar</Link>.
          </p>
        </section>

        <section>
          <h2>Leased, PPA and utility-owned systems</h2>
          <p>
            When a company owns the panels on your roof, service is normally that company’s job, but the
            contract decides the details, including whether cleaning is left to you and who pays to remove
            panels for a new roof. <Link href="/blog/rent-solar-panels-for-your-home-california">How solar leases and PPAs work</Link>{' '}
            covers the contract terms.
          </p>
          <p>
            LADWP’s Solar Rooftops program is one example of a utility-owned system: LADWP designs, installs and
            owns the panels, and pays the homeowner for the roof space.{' '}
            <Cite publisher="LADWP" href={LADWP_SRP} date={SOURCES_CHECKED} /> Its program rules tell homeowners
            not to repair the equipment themselves and to phone LADWP with any problem.{' '}
            <Cite publisher="LADWP" href={LADWP_GUIDE} date={SOURCES_CHECKED} /> The terms are in{' '}
            <Link href="/blog/ladwp-solar-rooftops-program">our LADWP Solar Rooftops guide</Link>.
          </p>
        </section>

        <section>
          <h2>Who to call for each problem</h2>
          <DataTable
            caption="Who to contact for common solar problems in California"
            columns={['Problem', 'Call first', 'If that fails']}
            rows={[
              [
                'Output drop or inverter error',
                'Installer, or the system owner if leased; the maker for a warranty part',
                'A licensed C-46 or C-10 contractor; a CSLB complaint if a licensed installer won’t honor its work',
              ],
              [
                'Leak near roof mounts',
                'Installer (workmanship) and your roofer',
                'CSLB complaint; your homeowners insurer for interior damage',
              ],
              ['Bill, true-up or export credits', 'Your utility', 'A complaint to the CPUC'],
              [
                'Loan, lease or PACE payments',
                'The lender or system owner',
                'The CPUC guide points PACE financing disputes to the DFPI',
              ],
              [
                'Contractor vanished or unlicensed',
                'CSLB, 800-321-2752',
                'Small claims up to $12,500; an attorney above that',
              ],
            ]}
          />
          <p>
            CSLB handles violations of contractor license law “for up to four years from the date of the act,”
            whether the contractor is licensed or not.{' '}
            <Cite publisher="CSLB" href={CSLB_COMPLAINT} date={SOURCES_CHECKED} /> For money you want back, CSLB points
            people with damages of $12,500 or less to small claims court and tells those above that to consult
            an attorney. <Cite publisher="CSLB" href={CSLB_SMALL_CLAIMS} date={SOURCES_CHECKED} /> Our guides on{' '}
            <Link href="/solar-problems/solar-company-took-my-money-california">what to do when a solar contractor took your money</Link>,{' '}
            <Link href="/solar-problems/attorney-to-sue-solar-company-california">finding an attorney for a solar dispute</Link>{' '}
            and <Link href="/solar-problems/solar-lawsuit-california">how solar lawsuits work in California</Link>{' '}
            cover the next steps.
          </p>
        </section>

        <section>
          <h2>What maintenance costs, in round terms</h2>
          <p>
            NREL’s Annual Technology Baseline (2024 edition) puts residential operation and maintenance at $30
            per kW of panels per year for 2023, and says the cost can range from $0 to $40 per kW a year. What
            it counts in that figure is asset management, including compliance and reporting for incentive
            payments, plus insurance products, cleaning, vegetation removal and component failure.{' '}
            <Cite publisher="NREL" href={NREL_ATB} date={SOURCES_CHECKED} /> On a 7 kW system, $30 per kW is $210 a
            year, averaged over years with and without repairs.
          </p>
          <p>
            No public agency publishes California prices for a cleaning visit, a panel swap or a
            remove-and-reinstall job, so this site does not print price ranges for them. The drivers are
            predictable, though: roof height and pitch, tile versus shingle, panel count, whether a warranty
            covers labor, permits, and travel. Get the scope and the price in writing. The companion page,{' '}
            <Link href="/blog/solar-panel-maintenance-cost">
              solar panel maintenance and cleaning costs in California
            </Link>
            , is where the money side lives: it applies the NREL benchmark to common system sizes, lists what a
            cleaning quote should itemise and shows how to work out whether a wash pays for itself. This page
            stays with the work itself and the diagnosis.
          </p>
        </section>

        <section>
          <h2>Batteries and end of life</h2>
          <p>
            A home battery adds equipment to monitor and its own warranty to keep. If you are adding one to an
            existing system, the <Link href="/battery">California home battery guide</Link> covers sizing and
            cost. When panels near the end of their service life, output keeps falling slowly rather than
            stopping; see <Link href="/blog/how-long-do-solar-panels-last">how long solar panels last</Link> and{' '}
            <Link href="/blog/what-happens-to-solar-panels-after-25-years">what happens after 25 years</Link>.
            Old panels can’t simply go in the trash bin: California’s hazardous waste rules list photovoltaic
            modules as a universal waste, a category operative since January 1, 2021.{' '}
            <Cite publisher="22 CCR § 66261.9" href={CCR_UW} date={SOURCES_CHECKED} /> Ask whoever removes old panels,
            in writing, where they will go; <Link href="/blog/solar-panel-removal-reinstall-cost">the removal guide</Link>{' '}
            covers taking a system off for good.
          </p>
        </section>

        <section>
          <h2>Every solar maintenance guide on this site</h2>
          <h3>Care, cleaning and inspection</h3>
          <ul>
            <li><Link href="/blog/solar-panel-cleaning-california">Solar panel cleaning in California</Link>: when washing pays, safe methods and warranty rules.</li>
            <li><Link href="/blog/solar-panel-inspection-california">Solar panel inspections</Link>: what an inspection checks and when to book one.</li>
            <li><Link href="/blog/solar-panel-bird-proofing">Bird proofing under panels</Link>: nesting, droppings and mesh guards.</li>
          </ul>
          <h3>Costs</h3>
          <ul>
            <li><Link href="/blog/solar-panel-maintenance-cost">Maintenance and cleaning costs</Link>: NREL’s upkeep benchmark and what drives a quote.</li>
            <li><Link href="/blog/solar-panel-repair-cost">Repair costs</Link>: inverters, panels, wiring and who pays under warranty.</li>
            <li><Link href="/blog/replacement-solar-inverter-cost">Replacement inverter cost</Link>: what goes into the quote for the part most likely to fail.</li>
            <li><Link href="/blog/solar-panel-removal-reinstall-cost">Removal and reinstall costs</Link>: roof replacement, moving panels and quote checklist.</li>
          </ul>
          <h3>Performance problems</h3>
          <ul>
            <li><Link href="/solar-problems/solar-panels-not-producing-enough">Panels not producing enough</Link>: the order to check causes.</li>
            <li><Link href="/solar-problems/solar-production-winter-california">Winter production drop</Link>: what is normal in California.</li>
            <li><Link href="/solar-problems/solar-panel-degradation-california">Panel degradation</Link>: the slow decline over decades.</li>
            <li><Link href="/blog/string-inverter-vs-microinverter">String inverters vs microinverters</Link>: how each fails and gets fixed.</li>
          </ul>
          <h3>Bills and rates on an existing system</h3>
          <ul>
            <li><Link href="/solar-problems/solar-bill-still-high-california">Bill still high with solar</Link>: the reasons that are not the panels.</li>
            <li><Link href="/solar-problems/true-up-bill-california-explained">True-up bill explained</Link>: how a year of netting arrives at once.</li>
            <li><Link href="/california-utility-rate-tracker">California utility rate tracker</Link>: current residential rates by utility.</li>
            <li><Link href="/blog/average-kwh-per-day-california">Average kWh per day in California</Link>: what normal household usage looks like.</li>
          </ul>
          <h3>Roof and structure</h3>
          <ul>
            <li><Link href="/blog/roof-leak-after-solar-panel-install">Roof leak after solar install</Link>: first steps and who is responsible.</li>
            <li><Link href="/blog/free-roof-replacement-with-solar-panels-california">Roof replacement offers bundled with solar</Link>: what to verify.</li>
            <li><Link href="/blog/solar-panels-tile-roof-california">Tile roofs</Link> and <Link href="/blog/flat-roof-solar-panels">flat roofs</Link>: mounts, breakage, ballast and the extra upkeep low-tilt panels need.</li>
            <li><Link href="/solar-problems/solar-homeowners-insurance">Homeowners insurance and solar</Link>: what a policy covers.</li>
          </ul>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
