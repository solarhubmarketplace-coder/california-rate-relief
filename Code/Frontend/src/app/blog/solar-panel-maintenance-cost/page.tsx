import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { GuideShell, Cite } from '@/components/growth/GuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import type { KeyFact } from '@/components/trust/KeyFacts';

const PATH = '/blog/solar-panel-maintenance-cost';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar panel maintenance', href: '/solar-panel-maintenance-california' };
const metaTitle = 'Solar Panel Maintenance & Cleaning Cost in California';
const metaDescription =
  'NREL’s $30 per kW a year upkeep benchmark, what cleaning, inspection and repair prices depend on, and how to tell if a cleaning pays for itself.';

const NREL_ATB = 'https://atb.nrel.gov/electricity/2024/residential_pv';
const NREL_OM = 'https://www.nrel.gov/docs/fy19osti/73822.pdf';
const UCSD = 'https://jacobsschool.ucsd.edu/news/release/1393?id=1393';
const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';

const sources: Source[] = [
  { label: 'NREL: Annual Technology Baseline 2024, residential PV operation and maintenance costs', url: NREL_ATB },
  { label: 'NREL: Best Practices for Operation and Maintenance of PV and Energy-Storage Systems, 3rd ed. (Dec. 2018)', url: NREL_OM },
  { label: 'UC San Diego Jacobs School of Engineering: cleaning solar panels often not worth the cost (July 31, 2013)', url: UCSD },
  { label: 'CPUC: California Solar Consumer Protection Guide and buyer questions', url: CPUC_GUIDE },
  { label: 'CSLB: Solar Smart, license classes for solar work', url: CSLB_SOLAR },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Upkeep benchmark (2023)',
    value: '$30 per kW a year',
    note: 'NREL’s residential estimate; $27 system costs plus $3 administration.',
    source: { publisher: 'NREL ATB 2024', date: UPDATED, url: NREL_ATB },
  },
  {
    label: 'Range NREL gives',
    value: '$0 to $40 per kW',
    note: 'Per year, depending on which upkeep practices a system gets.',
    source: { publisher: 'NREL ATB 2024', date: UPDATED, url: NREL_ATB },
  },
  {
    label: 'Value of a mid-summer wash',
    value: 'About $20',
    note: 'Typical 5 kW home system, California study of 186 sites.',
    source: { publisher: 'UC San Diego', date: UPDATED, url: UCSD },
  },
  {
    label: 'Who pays if you own it',
    value: 'You',
    note: 'Unless you bought a maintenance plan or the system came with one.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
  },
];

const faqs = [
  {
    question: 'What is the maintenance cost of solar panels per year?',
    answer:
      'NREL’s 2024 Annual Technology Baseline uses $30 per kW of panels per year as its 2023 estimate for residential systems, within a range of $0 to $40 per kW. For a 5 kW system that is $150 a year on average, for 7 kW $210, and for 10 kW $300. It is an average across years: most years cost almost nothing and a year with an out-of-warranty repair costs more.',
  },
  {
    question: 'Are solar panels expensive to maintain?',
    answer:
      'Not usually. The benchmark above is small next to the price of the system, and a UC San Diego study found that washing a typical California home system mid-summer was worth about $20 of electricity. The costs that hurt are the uneven ones: an inverter that fails after its warranty, or a roof replacement that needs the panels removed and reinstalled.',
  },
  {
    question: 'How much does solar panel cleaning cost in California?',
    answer:
      'No government or research body publishes California cleaning prices, so treat any single figure you see online as one company’s rate. Quotes depend on panel count, the number of stories, roof pitch and material, how dirty the panels are and whether purified water is used. Get two written quotes and compare them with the electricity a cleaning would actually recover.',
  },
  {
    question: 'How often should solar panels be cleaned in California?',
    answer:
      'Only as often as the lost output justifies. The UC San Diego study found that more than 0.1 inch of rain restored panels to clean output, so most of California’s cleaning happens in the wet season for free. Clean after a long dry spell only if monitoring shows the loss, and sooner for bird droppings, panels tilted under five degrees, or homes beside a highway, factory or farm.',
  },
  {
    question: 'Is a solar maintenance plan worth it?',
    answer:
      'Compare it line by line with your warranties. The CPUC’s guide says owners are responsible for maintenance and repairs unless they buy a plan or the system includes one. A plan is worth pricing when it covers labor, roof penetrations or response times your warranties leave out, and not when it mostly repeats them.',
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
    publishedTime: '2026-04-16T00:00:00Z',
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function SolarPanelMaintenanceCost() {
  return (
    <PublicLayout breadcrumbLabel="Maintenance and cleaning costs" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar panel maintenance and cleaning costs in California"
        url="https://ratereliefca.com/blog/solar-panel-maintenance-cost"
        datePublished="2026-04-16"
        dateModified="2026-09-23"
        description="What solar panel upkeep costs a year by NREL's benchmark, what cleaning, inspection and repair quotes depend on in California, and how to judge whether a cleaning pays."
      />
      <Header />
      <GuideShell
        title="Solar panel maintenance and cleaning costs in California"
        eyebrow="Solar panel maintenance"
        crumbs={[HUB]}
        crumbLabel="Maintenance and cleaning costs"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="maintenance"
        path={PATH}
        quickCheckTopic="Solar panel maintenance cost and comparison"
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar panel maintenance cost and comparison" />}
      >
        <p>
          Solar panel upkeep is cheap in most years. NREL’s 2024 benchmark for home systems is $30 per kW of
          panels per year, or about $210 for a 7 kW system, within a range of $0 to $40 per kW. Cleaning is often the
          smallest part: a 2013 UC San Diego study found a mid-summer wash was worth about $20 of power. Repairs and
          roof work are where real money goes.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor. We do not sell
          cleaning, repair or maintenance services. For the full picture of upkeep, see{' '}
          <Link href="/solar-panel-maintenance-california">our solar panel maintenance guide</Link>.
        </p>

        <section>
          <h2>What the $30 per kW benchmark covers</h2>
          <p>
            The figure comes from the National Renewable Energy Laboratory’s Annual Technology Baseline, 2024
            edition, which sets residential operation and maintenance at $30 per kW of direct-current capacity
            per year for 2023, down from $34 in 2022. NREL splits the 2023 figure into $27 of system costs and
            $3 of administration, and lists what it covers: “asset management (including compliance and
            reporting for incentive payments), insurance products, cleaning, vegetation removal, and component
            failure.” <Cite publisher="NREL" href={NREL_ATB} date={UPDATED} />
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">NREL upkeep benchmark applied to common home system sizes</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>System size</th>
                  <th className={th}>At $30 per kW a year</th>
                  <th className={th}>At NREL’s $40 upper end</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>5 kW</th><td className={td}>$150</td><td className={td}>$200</td></tr>
                <tr className="border-t"><th scope="row" className={th}>7 kW</th><td className={td}>$210</td><td className={td}>$280</td></tr>
                <tr className="border-t"><th scope="row" className={th}>10 kW</th><td className={td}>$300</td><td className={td}>$400</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Source: NREL Annual Technology Baseline 2024 benchmark multiplied by system size; checked September 2026.
          </p>
          <p>
            Read these as long-run averages, not a yearly bill. Some items on NREL’s list, such as incentive
            reporting, matter more to a company that owns many systems than to a homeowner. What an owner
            actually pays arrives in lumps: nothing for several years, then an inverter or a remove-and-reinstall
            job. Setting the benchmark aside each year is a simple way to be ready for that.
          </p>
        </section>

        <section>
          <h2>Solar panel cleaning prices: what sets the quote</h2>
          <p>
            Cleaning companies price per visit, per panel or with a minimum charge, and nobody publishes a
            reliable California average. Instead of trusting a number from a cleaning company’s own website,
            ask each bidder to price the same job and name these factors:
          </p>
          <ul>
            <li><strong>Panel count and layout.</strong> One flat array is quicker than several small ones spread over hips and valleys.</li>
            <li><strong>Height and pitch.</strong> A second story or steep roof means more safety equipment and time.</li>
            <li><strong>Roof material.</strong> Tile needs careful footing, and a cracked tile is a repair of its own.</li>
            <li><strong>How dirty the panels are.</strong> Bird droppings, wildfire ash and farm dust take longer than ordinary dust.</li>
            <li><strong>Water and method.</strong> Whether they use purified water, soft brushes and low pressure. Check the answer against the care section of your panel maker’s manual.</li>
            <li><strong>Extras.</strong> Bird-proofing mesh, a visual inspection or a before-and-after output report.</li>
          </ul>
          <p>
            Anyone doing more than washing, such as touching wiring or moving panels, should hold a license for
            solar work. The Contractors State License Board lists C-46 solar and C-10 electrical among the
            classes allowed, and warns: “Do not use a contractor who is not licensed to perform solar work.”{' '}
            <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>Does a cleaning pay for itself?</h2>
          <p>
            Compare the quote with the electricity it would win back. A UC San Diego team studied 186 California
            homes and businesses using 2010 data and found panels lost a little under 0.05 percent of
            efficiency per day without rain, reaching 7.4 percent after a 145-day summer drought. For a typical
            5 kW system, washing halfway through summer was worth about $20 of electricity before the rains
            returned (UC San Diego, July 2013). <Cite publisher="UC San Diego" href={UCSD} date={UPDATED} />
          </p>
          <p>To check your own roof:</p>
          <ol>
            <li>In your monitoring app, compare a dry-season month with the same month last year.</li>
            <li>Estimate the kWh a cleaning would recover before the next real rain.</li>
            <li>Multiply by the price per kWh on your electric bill, or by your export credit value if that power would have gone to the grid.</li>
            <li>If the result is smaller than the cleaning quote, wait for rain.</li>
          </ol>
          <p>
            The exceptions the researchers named are real: bird droppings that rain won’t remove, panels tilted
            under five degrees, and homes beside a highway, factory or agricultural operation. The methods and
            warranty rules are in <Link href="/blog/solar-panel-cleaning-california">our guide to cleaning solar panels in California</Link>.
          </p>
        </section>

        <section>
          <h2>Inspection costs</h2>
          <p>
            An inspection is worth paying for when output falls without an obvious reason, after storm or fire
            damage, when you buy a house that already has solar, or before roof work. Its price depends on
            whether the inspector climbs the roof, tests each circuit, uses a thermal camera and writes a report.
            What a good inspection covers is in{' '}
            <Link href="/blog/solar-panel-inspection-california">our solar panel inspection guide</Link>.
          </p>
        </section>

        <section>
          <h2>Repair and replacement costs</h2>
          <p>
            NREL’s operation and maintenance guide calls inverter failure “one of the most frequent causes of PV
            system performance loss,” and noted in December 2018 that 10-year inverter warranties were then
            commonly available. <Cite publisher="NREL" href={NREL_OM} date={UPDATED} /> Whether a repair costs
            you anything depends on the warranty, whether it covers labor as well as parts, and whether panels
            have to come off to reach the fault.{' '}
            <Link href="/blog/solar-panel-repair-cost">How much solar panel repair costs</Link> goes through
            inverters, microinverters, cracked panels, wiring and leaks one at a time. The largest one-off job,
            taking the array off for a new roof, has its own guide:{' '}
            <Link href="/blog/solar-panel-removal-reinstall-cost">solar panel removal and reinstall costs</Link>.
          </p>
        </section>

        <section>
          <h2>Maintenance plans versus warranties</h2>
          <p>
            The CPUC’s consumer guide says: “Unless you purchase a maintenance plan or your system comes with
            one, you will be responsible for any maintenance and repairs.”{' '}
            <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} /> Before buying a plan, lay it next to the
            warranties you already have.
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Maintenance plan comparison checklist</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Question</th>
                  <th className={th}>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>Does it cover labor?</th><td className={td}>Product warranties often replace a part without paying for the visit to install it.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Does it cover roof penetrations?</th><td className={td}>Leaks at mounts are a workmanship issue; check whether the installer’s warranty already covers them.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>How many cleanings, and when?</th><td className={td}>A fixed schedule may clean panels that rain would have cleaned anyway.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>What is the response time?</th><td className={td}>The CPUC suggests asking for a typical response time by phone or email.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Can you cancel, and does it transfer?</th><td className={td}>A plan tied to the house matters if you sell.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Owned, leased or PPA: who pays</h2>
          <p>
            If you bought the system with cash or a loan, the costs above are yours. If a company owns it under a
            lease or power purchase agreement, service is normally that company’s job, but the contract decides
            the details, including whether cleaning falls to you and who pays for removal before a new roof.
            Read those sections before calling anyone else; a third party working on a leased array can cause a
            dispute. <Link href="/blog/rent-solar-panels-for-your-home-california">How solar leases and PPAs work</Link>{' '}
            explains the contract types, and{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california">our roof suitability guide</Link> covers the
            roof questions that drive the largest future costs.
          </p>
        </section>

        <section>
          <h2>A simple yearly budget</h2>
          <ol>
            <li>Find the warranty end dates for panels, inverters and workmanship, and put them on a calendar.</li>
            <li>Set aside NREL’s $30 per kW a year, or less if your warranties still cover labor.</li>
            <li>Check monitoring monthly so a fault costs weeks of output, not months.</li>
            <li>
              Price the inverter replacement before its warranty ends, so the bill is not a surprise.{' '}
              <Link href="/blog/replacement-solar-inverter-cost">What a replacement solar inverter costs</Link> shows
              what goes into that quote.
            </li>
            <li>Ask for a written remove-and-reinstall quote whenever a roofer gives you a roof estimate.</li>
          </ol>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
