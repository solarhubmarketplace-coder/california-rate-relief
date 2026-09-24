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

const PATH = '/solar-panel-maintenance-california';
const UPDATED = '2026-09-23';
const metaTitle = 'Solar Panel Maintenance in California: Complete Guide';
const metaDescription =
  'What solar panel maintenance a California home needs: monitoring, cleaning, inspections, repairs, removal for roof work, warranties and who to call.';

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
const CSLB_FIND = 'https://www2.cslb.ca.gov/Newsletter/2018-summer/Find_My_Licensed_Contractor.asp';
const CSLB_ZIP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/ZipCodeSearch.aspx';
const PRC = (n: string) => `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PRC&sectionNum=${n}`;
const CCR_UW = 'https://www.law.cornell.edu/regulations/california/22-CCR-66261.9';

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
  { label: 'CSLB: Find My Licensed Contractor, search by classification and city or ZIP (Summer 2018 newsletter)', url: CSLB_FIND },
  { label: 'Public Resources Code § 25982 (Solar Shade Control Act: trees planted after a solar collector)', url: PRC('25982') },
  { label: 'Public Resources Code § 25983 (shading tree as a private nuisance after written notice)', url: PRC('25983') },
  { label: 'Public Resources Code § 25984 (trees the Act does not cover)', url: PRC('25984') },
  { label: 'Public Resources Code § 25985 (city and county opt-outs and local ordinances)', url: PRC('25985') },
  { label: 'Cal. Code of Regs., tit. 22, § 66261.9 (photovoltaic modules as universal waste, operative Jan. 1, 2021)', url: CCR_UW },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Who pays for repairs',
    value: 'You, if you own it',
    note: 'Unless you bought a maintenance plan or the system came with one.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
  },
  {
    label: 'National upkeep benchmark',
    value: '$30 per kW a year',
    note: 'NREL’s 2023 residential estimate; its range is $0 to $40 per kW a year.',
    source: { publisher: 'NREL ATB 2024', date: UPDATED, url: NREL_ATB },
  },
  {
    label: 'Dust loss, dry summer',
    value: '7.4% after 145 days',
    note: 'Panels with no rain or washing, 186 California sites, 2010 data.',
    source: { publisher: 'UC San Diego', date: UPDATED, url: UCSD },
  },
  {
    label: 'CSLB complaint window',
    value: '4 years',
    note: 'From the date of the act, licensed or unlicensed contractor.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_COMPLAINT },
  },
];

const faqs = [
  {
    question: 'How much does solar panel maintenance cost per year?',
    answer:
      'NREL’s 2024 Annual Technology Baseline uses $30 per kW of panels per year as its 2023 estimate for residential operation and maintenance, and says the figure can run from $0 to $40 per kW a year depending on which practices a system gets. That covers cleaning, component failure, insurance products and asset management, so an owner who rarely cleans and has no failures pays far less in a given year.\n\nFor a 7 kW system, $30 per kW works out to $210 a year on average. Real spending is lumpy: most years cost little, and a year with an inverter replacement outside warranty costs much more.',
  },
  {
    question: 'Do solar panels need maintenance at all?',
    answer:
      'Very little routine work, but not none. The job is mostly watching: check the monitoring app, look at the array from the ground after storms, and act when output drops for a reason you can’t explain. Electronics such as inverters are the parts most likely to need service over the life of a system, according to NREL’s operation and maintenance guide.',
  },
  {
    question: 'How often should solar panels be cleaned in California?',
    answer:
      'There is no fixed schedule that suits every roof. A UC San Diego study of 186 California sites found rain of more than 0.1 inch restored output, and that washing a typical 5 kW home system halfway through summer gained about $20 of electricity. Clean when monitoring shows a dry-season loss you can see, or sooner for bird droppings, very flat panels, or homes next to a highway, factory or farm.',
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
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function SolarPanelMaintenanceCalifornia() {
  return (
    <PublicLayout breadcrumbLabel="Solar panel maintenance in California">
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar panel maintenance in California: what it takes and who to call"
        url="https://ratereliefca.com/solar-panel-maintenance-california"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="The maintenance a California home solar system needs, what it costs, which warranty covers what, and who to call for cleaning, repairs, roof work and disputes."
      />
      <Header />
      <GuideShell
        title="Solar panel maintenance in California: what it takes and who to call"
        eyebrow="Solar panel maintenance"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="maintenance"
        path={PATH}
        quickCheckTopic="Solar panel maintenance in California"
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar panel maintenance in California" />}
      >
        <p>
          Solar panels need little routine care, but a system still needs an owner who watches it. In
          California that means checking the monitoring app, cleaning only when dirt or bird droppings
          actually cost output, getting inverter and wiring faults fixed under warranty, and planning panel
          removal before roof work. If you own the system, the CPUC says maintenance and repairs are yours
          unless a plan covers them.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor. We do not clean,
          repair, remove or install solar equipment; this guide explains the work and who is responsible for it.
        </p>

        <section>
          <h2>What maintenance a California system actually needs</h2>
          <p>
            A rooftop system has no moving parts on the roof, so the care it needs is mostly checking, plus the
            occasional repair. The California Public Utilities Commission’s consumer guide puts the
            responsibility plainly: “Unless you purchase a maintenance plan or your system comes with one, you
            will be responsible for any maintenance and repairs.”{' '}
            <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} />
          </p>
          <p>For an owned system, the realistic list looks like this:</p>
          <ul>
            <li><strong>Monthly:</strong> open the monitoring app and compare output with the same month last year.</li>
            <li><strong>After storms, wind or wildfire ash:</strong> look at the array from the ground for debris, cracked glass, loose wiring or nesting.</li>
            <li><strong>When output drops:</strong> find the cause before paying for anything. Soiling, shade, an inverter fault and a tripped breaker look different in the data.</li>
            <li><strong>Over the system’s life:</strong> expect electronics to need service. NREL’s operation and maintenance guide calls inverter failure “one of the most frequent causes of PV system performance loss.” <Cite publisher="NREL" href={NREL_OM} date={UPDATED} /></li>
            <li><strong>Before any roof work:</strong> plan removal and reinstallation with both contractors.</li>
            <li><strong>Always:</strong> keep the contract, warranty documents, permit records and monitoring login where you can find them.</li>
          </ul>
          <p>
            The costs behind each of those items are broken out in{' '}
            <Link href="/blog/solar-panel-maintenance-cost">what solar panel maintenance costs in California</Link>.
          </p>
        </section>

        <section>
          <h2>What you can do yourself, and what needs a licensed contractor</h2>
          <p>
            Most solar upkeep is looking, not touching. The line to hold is the roof edge and the equipment
            cabinets: anything on the array, the wiring or the inverter is solar work under California license
            law. CSLB describes C-46 solar contractors as the class that may “install, modify, maintain, and
            repair” solar energy systems. <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} /> LADWP’s
            rules for the systems it owns on customers’ roofs put the safety reason plainly: owners must not
            open system cabinets or touch exposed wiring, because “hazardous voltages can be present throughout
            the entire system at any time.” <Cite publisher="LADWP" href={LADWP_GUIDE} date={UPDATED} />
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Solar maintenance tasks an owner can do and tasks for a licensed contractor</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Task</th>
                  <th className={th}>Who</th>
                  <th className={th}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>Check the monitoring app</th>
                  <td className={td}>You</td>
                  <td className={td}>Compare each month with the same month last year.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Look over the array after a storm or ash fall</th>
                  <td className={td}>You, from the ground</td>
                  <td className={td}>Binoculars or a phone zoom are enough to spot debris, cracked glass or hanging wires.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Rinse dust off panels</th>
                  <td className={td}>You, if reachable from the ground and the manual allows it</td>
                  <td className={td}>Normal hose pressure, cool glass; see the <Link href="/blog/solar-panel-cleaning-california">cleaning guide</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Trim your own trees</th>
                  <td className={td}>You or a tree service</td>
                  <td className={td}>Keep branches and ladders clear of the array and the service wires.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Anything on the roof or panels</th>
                  <td className={td}>Licensed contractor</td>
                  <td className={td}>Walking on panels or mounts can crack cells and break roof seals.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Inverter faults, wiring, breakers beyond a manual reset</th>
                  <td className={td}>Licensed C-46 or C-10 contractor</td>
                  <td className={td}>Follow only the reset steps in your inverter manual; call for anything else.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Any work on a leased or PPA system</th>
                  <td className={td}>The system owner</td>
                  <td className={td}>The contract says who may touch it.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>A year of solar upkeep in California</h2>
          <p>
            California’s long dry season and its winter rains set a natural rhythm. None of these steps needs a
            ladder.
          </p>
          <ul>
            <li><strong>Late summer and early fall, before the rains:</strong> compare output with last year. This is when dust has built up longest, so it is the one time a cleaning might pay.</li>
            <li><strong>After the first real storm:</strong> check that output recovered. UC San Diego’s study used more than 0.1 inch of rain as the point that cleaned panels. <Cite publisher="UC San Diego" href={UCSD} date={UPDATED} /></li>
            <li><strong>Winter:</strong> expect lower numbers from shorter days; look for storm damage and debris instead.</li>
            <li><strong>Spring:</strong> trim trees before the growing season adds shade, and look for birds nesting under the array.</li>
            <li><strong>Fire season:</strong> after nearby fires, look for ash on the glass and damage to exposed wiring.</li>
            <li><strong>At your annual true-up:</strong> read the bill against a year of production, and confirm your warranty papers and monitoring login still work.</li>
          </ul>
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
            <Cite publisher="UC San Diego" href={UCSD} date={UPDATED} />
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
          <h2>Monitoring is the maintenance that matters most</h2>
          <p>
            The CPUC tells buyers to ask, before signing, “Will I be able to monitor the performance of the
            system once it’s installed? If so, how?” Once the system is running, that app is how you notice a
            problem in days instead of at the annual true-up bill.
          </p>
          <p>Three patterns tell you where to look:</p>
          <ul>
            <li>
              <strong>The whole system drops slowly through a dry season and recovers after rain:</strong> soiling.
            </li>
            <li>
              <strong>One panel or one string falls behind the rest:</strong> shade, damage, a failed microinverter
              or optimizer, or a wiring fault. See{' '}
              <Link href="/solar-problems/solar-panels-not-producing-enough">what to check when panels under-produce</Link>.
            </li>
            <li>
              <strong>Everything stops at once:</strong> an inverter fault, a tripped breaker or a lost connection
              to the monitoring service.
            </li>
          </ul>
          <p>
            Lower output in December is not a fault; compare month to same month.{' '}
            <Link href="/solar-problems/solar-production-winter-california">Why winter output falls in California</Link>{' '}
            explains the seasonal curve, and{' '}
            <Link href="/solar-problems/solar-panel-degradation-california">the slow decline panels show over the years</Link>{' '}
            is a separate, expected effect.
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
            <Cite publisher="Public Resources Code § 25982" href={PRC('25982')} date={UPDATED} /> Such a tree
            becomes a private nuisance only if the owner fails to remove or alter it after receiving a written
            notice from the solar owner. <Cite publisher="PRC § 25983" href={PRC('25983')} date={UPDATED} />
          </p>
          <p>The limits matter as much as the rule:</p>
          <ul>
            <li>It does not apply to a tree or shrub planted before the solar collector was installed. <Cite publisher="PRC § 25984" href={PRC('25984')} date={UPDATED} /></li>
            <li>It does not apply to trees on timberland or commercial farmland, or to trees covered by a city or county ordinance.</li>
            <li>A city, or a county for unincorporated areas, may adopt an ordinance exempting itself, and a local tree-preservation or solar-shade ordinance governs where one exists. <Cite publisher="PRC § 25985" href={PRC('25985')} date={UPDATED} /></li>
          </ul>
          <p>
            Keep the permit or installation date, and photos of the neighboring trees at that time; they are what
            the law turns on. If production has fallen and you suspect shade, confirm it in your monitoring data
            first, following{' '}
            <Link href="/solar-problems/solar-panels-not-producing-enough">the checks for panels that under-produce</Link>.
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
            <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>Finding a company for solar maintenance or repair</h2>
          <p>
            Call in this order: the company that owns the system if you lease it, then the original installer if
            it is still in business (its workmanship warranty may cover the fix), then the equipment maker for a
            failed panel or inverter under warranty. Only after those should you hire someone new.
          </p>
          <p>
            To find a licensed company near you, CSLB’s{' '}
            <a href={CSLB_ZIP} target="_blank" rel="noopener noreferrer">Find My Licensed Contractor</a> search
            lists contractors “by classification within a specific geographic area using either a city or zip
            code,” with a link to each license record. <Cite publisher="CSLB" href={CSLB_FIND} date={UPDATED} />{' '}
            Search the C-46 solar class, and C-10 electrical for inverter and wiring work. Our page on{' '}
            <Link href="/solar-installers/licensed-solar-installer">finding licensed solar installers by county</Link>{' '}
            walks through the same lookup.
          </p>
          <p>Before you book, ask:</p>
          <ul>
            <li>Do you service systems you did not install, and this inverter and panel brand?</li>
            <li>Is the first visit a flat diagnostic fee, and does it apply to the repair?</li>
            <li>Will you file the warranty claim with the manufacturer, and who pays labor if the part is covered?</li>
            <li>What warranty do you give on your own work and on any new roof penetrations?</li>
          </ul>
          <p>
            If the original installer has closed, the steps in{' '}
            <Link href="/solar-installers/solar-installer-bankruptcy-california">what to do when a solar installer goes bankrupt</Link>{' '}
            apply to your warranties too.
          </p>
        </section>

        <section>
          <h2>Repairs: inverters, panels, wiring and roof penetrations</h2>
          <p>
            Most repair bills come from the electronics, not the glass. NREL’s best-practices guide, written in
            December 2018, noted that 10-year inverter warranties were then “commonly available” and that
            20-year extended warranties and service plans were gaining ground. Microinverters, optimizers,
            connectors, conduit and the flashing around roof mounts are the other usual suspects. Rodents and
            birds can damage wiring under the array.
          </p>
          <p>
            What a repair costs depends on the part, whether a warranty covers the part and the labor, and
            whether panels must come off to reach it.{' '}
            <Link href="/blog/solar-panel-repair-cost">What drives solar panel repair cost</Link> walks through
            each case, and <Link href="/blog/what-is-a-solar-inverter">the inverter explainer</Link> covers the
            part most likely to fail. If a leak shows up under the array, go straight to{' '}
            <Link href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after solar</Link>.
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
            <Cite publisher="energy.gov" href={DOE_ROOF} date={UPDATED} />
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
          <h2>Warranties: which one covers what</h2>
          <p>
            A home system usually carries several warranties from different companies, and each answers a
            different question. The CPUC’s buyer questions include: “Are there warranties for the panels and
            inverters? If yes, how long do they last and whom do I contact to replace these components?” and
            “What is your typical response time via phone or email?”
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Solar warranty types and what to check</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Warranty</th>
                  <th className={th}>Usually issued by</th>
                  <th className={th}>What to check in the document</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>Panel product and output</th>
                  <td className={td}>Panel manufacturer</td>
                  <td className={td}>Term, output guarantee, whether labor to swap a panel is included, how to file</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Inverter or microinverter</th>
                  <td className={td}>Inverter manufacturer</td>
                  <td className={td}>Term, parts versus labor, registration requirements</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Workmanship or installation</th>
                  <td className={td}>Installer</td>
                  <td className={td}>Roof penetrations and leaks, wiring, what voids it, what happens if the installer closes</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Roof</th>
                  <td className={td}>Roofer or roof-material maker</td>
                  <td className={td}>Whether solar mounts or a later removal affect coverage</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Lease or PPA service terms</th>
                  <td className={td}>System owner</td>
                  <td className={td}>Repairs, response times, cleaning, removal for roof work, production guarantees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Before you let anyone else touch the array, ask the installer in writing whether it would affect
            the workmanship warranty.
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
            LADWP’s Solar Rooftops program is one example of a utility-owned system: LADWP designs, installs,
            owns and maintains the panels and pays the homeowner for the roof space.{' '}
            <Cite publisher="LADWP" href={LADWP_SRP} date={UPDATED} /> The terms are in{' '}
            <Link href="/blog/ladwp-solar-rooftops-program">our LADWP Solar Rooftops guide</Link>.
          </p>
        </section>

        <section>
          <h2>Who to call for each problem</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Who to contact for common solar problems in California</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Problem</th>
                  <th className={th}>Call first</th>
                  <th className={th}>If that fails</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>Output drop or inverter error</th>
                  <td className={td}>Installer, or the system owner if leased; the maker for a warranty part</td>
                  <td className={td}>A licensed C-46 or C-10 contractor; a CSLB complaint if a licensed installer won’t honor its work</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Leak near roof mounts</th>
                  <td className={td}>Installer (workmanship) and your roofer</td>
                  <td className={td}>CSLB complaint; your homeowners insurer for interior damage</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Bill, true-up or export credits</th>
                  <td className={td}>Your utility</td>
                  <td className={td}>A complaint to the CPUC</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Loan, lease or PACE payments</th>
                  <td className={td}>The lender or system owner</td>
                  <td className={td}>The CPUC guide points PACE financing disputes to the DFPI</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Contractor vanished or unlicensed</th>
                  <td className={td}>CSLB, 800-321-2752</td>
                  <td className={td}>Small claims up to $12,500; an attorney above that</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            CSLB handles violations of contractor license law “for up to four years from the date of the act,”
            whether the contractor is licensed or not.{' '}
            <Cite publisher="CSLB" href={CSLB_COMPLAINT} date={UPDATED} /> For money you want back, CSLB points
            people with damages of $12,500 or less to small claims court and tells those above that to consult
            an attorney. <Cite publisher="CSLB" href={CSLB_SMALL_CLAIMS} date={UPDATED} /> Our guides on{' '}
            <Link href="/solar-problems/solar-company-took-my-money-california">what to do when a solar contractor took your money</Link>,{' '}
            <Link href="/solar-problems/attorney-to-sue-solar-company-california">finding an attorney for a solar dispute</Link>{' '}
            and <Link href="/solar-problems/solar-lawsuit-california">how solar lawsuits work in California</Link>{' '}
            cover the next steps. For bill questions, the{' '}
            <Link href="/solar-problems/true-up-bill-california-explained">true-up bill explainer</Link> is the place to start.
          </p>
        </section>

        <section>
          <h2>What maintenance costs, in round terms</h2>
          <p>
            NREL’s Annual Technology Baseline (2024 edition) puts residential operation and maintenance at $30
            per kW of panels per year for 2023, covering “asset management (including compliance and reporting
            for incentive payments), insurance products, cleaning, vegetation removal, and component failure,”
            and says the cost can range from $0 to $40 per kW a year.{' '}
            <Cite publisher="NREL" href={NREL_ATB} date={UPDATED} /> On a 7 kW system, $30 per kW is $210 a
            year, averaged over years with and without repairs.
          </p>
          <p>
            No public agency publishes California prices for a cleaning visit, a panel swap or a
            remove-and-reinstall job, so this site does not print price ranges for them. The drivers are
            predictable, though: roof height and pitch, tile versus shingle, panel count, whether a warranty
            covers labor, permits, and travel. Get the scope and the price in writing.
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
            <Cite publisher="22 CCR § 66261.9" href={CCR_UW} date={UPDATED} /> Ask whoever removes old panels,
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
            <li><Link href="/blog/solar-panel-removal-reinstall-cost">Removal and reinstall costs</Link>: roof replacement, moving panels and quote checklist.</li>
          </ul>
          <h3>Performance problems</h3>
          <ul>
            <li><Link href="/solar-problems/solar-panels-not-producing-enough">Panels not producing enough</Link>: the order to check causes.</li>
            <li><Link href="/solar-problems/solar-production-winter-california">Winter production drop</Link>: what is normal in California.</li>
            <li><Link href="/solar-problems/solar-panel-degradation-california">Panel degradation</Link>: the slow decline over decades.</li>
            <li><Link href="/blog/string-inverter-vs-microinverter">String inverters vs microinverters</Link>: how each fails and gets fixed.</li>
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
