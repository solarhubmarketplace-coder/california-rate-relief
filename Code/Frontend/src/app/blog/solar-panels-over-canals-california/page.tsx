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

const PATH = '/blog/solar-panels-over-canals-california';
const UPDATED = '2026-09-23';
const HUB = { label: 'Roofs and solar', href: '/blog/is-my-roof-good-for-solar-california' };
const metaTitle = 'California Solar Panels Over Canals: Projects and Results';
const metaDescription =
  'Is California covering its canals with solar panels? What Project Nexus built, the Delta-Mendota floating solar test, the research estimates and the limits.';

const TID = 'https://www.tid.org/current-projects/project-nexus/';
const GOV = 'https://www.gov.ca.gov/2026/04/29/governor-newsom-announces-the-completion-of-first-of-its-kind-solar-covered-canal-in-the-central-valley-piloting-a-new-way-to-save-water-and-reduce-costs/';
const UCM_2026 = 'https://news.ucmerced.edu/news/2026/states-first-solar-canal-project-moves-uc-merced-lab-real-world';
const UCM_2021 = 'https://news.ucmerced.edu/news/2021/solar-panels-over-canals-can-save-money-energy-and-water-study-shows';
const PAPER = 'https://www.nature.com/articles/s41893-021-00693-8';
const DOI = 'https://www.doi.gov/pressreleases/biden-harris-administration-announces-19-million-investing-america-agenda-innovative';
const SLDMWA = 'https://sldmwa.org/san-luis-delta-mendota-water-authority-receives-15-million-grant-for-delta-mendota-canal-floating-solar-project/';

const sources: Source[] = [
  { label: 'Turlock Irrigation District: Project Nexus', url: TID },
  { label: 'Office of the Governor: completion of first-of-its-kind solar-covered canal (April 29, 2026)', url: GOV },
  { label: 'UC Merced: State’s first solar canal project moves from UC Merced lab to real world (April 29, 2026)', url: UCM_2026 },
  { label: 'UC Merced: Solar panels over canals can save money, energy and water, study shows (March 18, 2021)', url: UCM_2021 },
  { label: 'McKuin et al., “Energy and water co-benefits from covering canals with solar panels,” Nature Sustainability 4, 609–617 (2021)', url: PAPER },
  { label: 'U.S. Department of the Interior: $19 million for solar panels over canals (April 4, 2024)', url: DOI },
  { label: 'San Luis & Delta-Mendota Water Authority: $15 million grant for Delta-Mendota Canal floating solar project', url: SLDMWA },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Built so far',
    value: 'About 1.6 MW',
    note: 'Project Nexus, two Turlock Irrigation District canal sites, done August 2025.',
    source: { publisher: 'TID', date: UPDATED, url: TID },
  },
  {
    label: 'State funding',
    value: '$20 million',
    note: 'From the state general fund through the Department of Water Resources.',
    source: { publisher: 'TID', date: UPDATED, url: TID },
  },
  {
    label: 'Canal network studied',
    value: '6,350 km',
    note: 'About 4,000 miles of open canals, per UC Merced.',
    source: { publisher: 'Nature Sustainability (2021)', date: UPDATED, url: PAPER },
  },
  {
    label: 'Pilot evaporation result',
    value: 'Up to 70% less',
    note: 'Shaded canals at the pilot sites, reported by UC Merced in April 2026.',
    source: { publisher: 'UC Merced', date: UPDATED, url: UCM_2026 },
  },
];

const faqs = [
  {
    question: 'Is California covering its canals with solar panels?',
    answer:
      'Only as pilots so far. Project Nexus put about 1.6 MW of panels over two Turlock Irrigation District canal sites, completed in August 2025, and a federally funded project is testing floating solar on the Delta-Mendota Canal. Covering the state’s roughly 4,000 miles of canals is a research estimate, not an adopted state plan.',
  },
  {
    question: 'Where is California’s first solar canal?',
    answer:
      'In Stanislaus County, on Turlock Irrigation District canals. UC Merced lists the pilot sites in Hickman and Keyes. The Governor’s office announced the completion of Project Nexus on April 29, 2026, calling it a first-of-its-kind solar-covered canal in the Central Valley.',
  },
  {
    question: 'How much water could solar canals save in California?',
    answer:
      'A 2021 UC Merced and UC Santa Cruz study estimated that covering about 4,000 miles of California canals could save 63 billion gallons of water a year by cutting evaporation. The peer-reviewed paper puts the average at 39,000 cubic meters per kilometer of canal each year, give or take 12,000. These are modeled estimates; the pilot is measuring real results.',
  },
  {
    question: 'Why put solar panels over canals instead of on land?',
    answer:
      'The shade cuts evaporation and weed growth, the panels use space over existing canals rather than open land, and case studies have found the cooler air next to a canal helps panels perform. The Nature Sustainability study found the financial benefits of shading outweighed the added cost of the structures needed to span canals, with a net present value 20 to 50 percent above conventional ground-mounted solar.',
  },
  {
    question: 'Will solar canals lower my electric bill?',
    answer:
      'Not in any way you can count on. Canal projects are utility-scale: their power goes into the grid of the utility or agency that owns them, like any other power plant. Your bill depends on your utility’s rates and your own usage. Rooftop solar, community solar and batteries are the options that act on a household bill.',
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
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function SolarPanelsOverCanalsCalifornia() {
  return (
    <PublicLayout breadcrumbLabel="Solar panels over canals" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar panels over canals in California: what has been built and what the research says"
        url="https://ratereliefca.com/blog/solar-panels-over-canals-california"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="California's solar-over-canal projects: Turlock Irrigation District's Project Nexus, the Delta-Mendota Canal floating solar test, the UC Merced research estimates, and what canal solar means for homeowners."
      />
      <Header />
      <GuideShell
        title="Solar panels over canals in California: what has been built and what the research says"
        eyebrow="Solar structures"
        crumbs={[HUB]}
        crumbLabel="Solar panels over canals"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="roof_structures"
        path={PATH}
        quickCheckTopic={null}
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar for your California home" />}
      >
        <p>
          California is testing it, not yet doing it at scale. The state’s first solar-covered canals are Project
          Nexus, where the Turlock Irrigation District finished about 1.6 MW of panels over two canal sites in
          August 2025 with $20 million in state funding. A federally funded project is testing floating solar on
          the Delta-Mendota Canal. Covering all of the state’s canals is still a research estimate.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor. This page reports on
          public water-agency projects; figures come from the agencies and researchers named, as of the date
          above.
        </p>

        <section>
          <h2>Project Nexus: what has been built</h2>
          <p>
            The Turlock Irrigation District describes Project Nexus as “the installation of solar panel canopies
            over various sections of Turlock Irrigation District’s (TID) irrigation canals,” built as a
            proof-of-concept to study how solar over canals is designed, deployed and what else it achieves.{' '}
            <Cite publisher="TID" href={TID} date={UPDATED} />
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Project Nexus facts</caption>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>Where</th><td className={td}>Two sites on TID canals in Stanislaus County; UC Merced names them as Hickman and Keyes</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Canal widths</th><td className={td}>Sections “ranging from 20 feet to 100 feet wide,” per TID</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Capacity</th><td className={td}>“Over 1.6 MW,” plus 75 kW of iron-flow batteries at the narrow site</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Built</th><td className={td}>Narrow canal by March 2025; both sites completed and commissioned by August 2025</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Paid for by</th><td className={td}>$20 million from the state general fund, through the California Department of Water Resources</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Partners</th><td className={td}>TID, the Department of Water Resources, Solar AquaGrid (program manager) and UC Merced (research)</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Sources: <Cite publisher="TID" href={TID} date={UPDATED} />{' '}
            <Cite publisher="UC Merced, April 2026" href={UCM_2026} date={UPDATED} /> The Governor’s office
            announced the project’s completion on April 29, 2026, describing it as a first-of-its-kind
            solar-covered canal in the Central Valley. The pilot is set up to measure how much electricity the
            panels generate, how much water they save by cutting evaporation, changes in water quality, and whether
            limiting vegetation growth lowers the district’s canal maintenance costs.{' '}
            <Cite publisher="Office of the Governor" href={GOV} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>What the pilot has shown so far</h2>
          <p>
            In April 2026, UC Merced reported that the shaded canals saw “up to 70 percent less evaporation and 85
            percent less weed growth.” Its researchers are still monitoring energy output and evaporation with
            sensors at the sites, and algae growth as well. They also added a caveat worth keeping in mind:
            “not all canals are suitable for solar installations.”{' '}
            <Cite publisher="UC Merced" href={UCM_2026} date={UPDATED} />
          </p>
          <p>
            Those are early findings from two short stretches of canal. Treat them as a sign the idea works where
            it was tried, not as a figure that scales automatically to every canal in the state.
          </p>
        </section>

        <section>
          <h2>The research behind the idea</h2>
          <p>
            The project grew out of a 2021 study by researchers at UC Merced and UC Santa Cruz, published in
            <em> Nature Sustainability</em>. It modeled solar panels over California’s 6,350-kilometer canal
            network, which the authors call the world’s largest water conveyance system, and found that covering
            it could cut evaporation by an average of 39,000 cubic meters per kilometer of canal a year, give or
            take 12,000. It also found that the financial benefits of shading the canals outweigh the extra cost
            of the cable-support structures needed to span them, putting the net present value of over-canal
            solar 20 to 50 percent above conventional ground-mounted solar.{' '}
            <Cite publisher="Nature Sustainability (2021)" href={PAPER} date={UPDATED} />
          </p>
          <p>
            UC Merced’s summary of the same study put it in round numbers: covering about 4,000 miles of
            California’s canals could save 63 billion gallons of water a year and provide 13 gigawatts of solar
            power, with maintenance savings of as much as $40,000 per mile of canal.{' '}
            <Cite publisher="UC Merced, March 2021" href={UCM_2021} date={UPDATED} />
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Modeled estimates compared with pilot results</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Figure</th>
                  <th className={th}>What it is</th>
                  <th className={th}>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className={td}>63 billion gallons a year</td><td className={td}>Modeled water savings if about 4,000 miles were covered</td><td className={td}>UC Merced, 2021</td></tr>
                <tr className="border-t"><td className={td}>13 gigawatts</td><td className={td}>Modeled solar capacity for the same coverage</td><td className={td}>UC Merced, 2021</td></tr>
                <tr className="border-t"><td className={td}>20–50% higher net present value</td><td className={td}>Modeled, compared with conventional ground-mounted solar</td><td className={td}>Nature Sustainability, 2021</td></tr>
                <tr className="border-t"><td className={td}>About 1.6 MW</td><td className={td}>Actually built, Project Nexus</td><td className={td}>TID</td></tr>
                <tr className="border-t"><td className={td}>Up to 70% less evaporation</td><td className={td}>Measured at the pilot sites</td><td className={td}>UC Merced, 2026</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Floating solar on the Delta-Mendota Canal</h2>
          <p>
            A second, federally funded test takes a different approach. In April 2024, the U.S. Department of the
            Interior announced $15 million for the San Luis and Delta-Mendota Water Authority to “deploy
            potentially up to three floating solar technologies to assess the viability, costs, and benefits” on
            the Delta-Mendota Canal, with the Bureau of Reclamation and UC Merced as partners.{' '}
            <Cite publisher="U.S. Department of the Interior" href={DOI} date={UPDATED} /> The water authority
            describes a five-year project in phases, from site selection and engineering through construction,
            operation and maintenance. <Cite publisher="SLDMWA" href={SLDMWA} date={UPDATED} /> Floating panels sit
            on the water rather than on a canopy above it, which is why it is being tested separately.
          </p>
        </section>

        <section>
          <h2>What canal solar means for a California household</h2>
          <p>
            Canal solar is utility-scale power. Its output feeds the grid of the district or agency that owns it,
            the same as a solar farm, so it doesn’t change what you pay on your own bill in any way you could
            plan around. The choices that act on a household bill are the ones on your own property or your own
            account:
          </p>
          <ul>
            <li>Panels on your roof; start with <Link href="/blog/is-my-roof-good-for-solar-california">whether your roof is ready for solar</Link>.</li>
            <li>A carport or patio structure when the roof won’t work; see <Link href="/blog/solar-carport-california-guide">residential solar carports in California</Link>.</li>
            <li>A subscription to an off-site project; see <Link href="/blog/is-community-solar-worth-it">whether community solar is worth it</Link>.</li>
            <li>In Los Angeles, hosting a utility-owned system for a fixed payment; see <Link href="/blog/lease-roof-for-solar-panels">leasing your roof for solar</Link>.</li>
          </ul>
          <p>
            If you farm and have an irrigation ditch on your land, a canopy over it is a custom structure that
            needs engineering and permits, and if a water district owns the ditch or its right-of-way, the
            district decides what can be built over it. Ask the district before you ask an installer.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
