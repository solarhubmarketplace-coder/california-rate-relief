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

const PATH = '/blog/solar-panel-repair-cost';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar panel maintenance', href: '/solar-panel-maintenance-california' };
const metaTitle = 'Solar Panel Repair Cost in California: What Drives It';
const metaDescription =
  'What sets the cost of a solar repair in California: the part that failed, whether a warranty pays for labor, roof access and panel removal. Checklist inside.';

const NREL_ATB = 'https://atb.nrel.gov/electricity/2024/residential_pv';
const NREL_OM = 'https://www.nrel.gov/docs/fy19osti/73822.pdf';
const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const CSLB_LICENSED = 'https://www.cslb.ca.gov/Consumers/Filing_A_Complaint/Complaint_Against_Licensed_Contractors.aspx';
const CSLB_LOOKUP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';

const sources: Source[] = [
  { label: 'NREL: Best Practices for Operation and Maintenance of PV and Energy-Storage Systems, 3rd ed. (Dec. 2018)', url: NREL_OM },
  { label: 'NREL: Annual Technology Baseline 2024, residential PV operation and maintenance costs', url: NREL_ATB },
  { label: 'CPUC: California Solar Consumer Protection Guide and buyer questions', url: CPUC_GUIDE },
  { label: 'CSLB: Solar Smart, license classes that may repair solar', url: CSLB_SOLAR },
  { label: 'CSLB: Complaint process against licensed contractors', url: CSLB_LICENSED },
  { label: 'CSLB: License and salesperson lookup', url: CSLB_LOOKUP },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Most frequent fault',
    value: 'Inverters',
    note: 'NREL calls inverter failure one of the most frequent causes of performance loss.',
    source: { publisher: 'NREL', date: UPDATED, url: NREL_OM },
  },
  {
    label: 'Upkeep benchmark incl. failures',
    value: '$30 per kW a year',
    note: 'NREL’s 2023 residential average, which includes component failure.',
    source: { publisher: 'NREL ATB 2024', date: UPDATED, url: NREL_ATB },
  },
  {
    label: 'Who pays if you own it',
    value: 'You, after warranties',
    note: 'Unless a maintenance plan covers it.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
  },
  {
    label: 'CSLB citation penalties',
    value: 'Up to $30,000',
    note: 'Against a licensed contractor, plus possible orders to repair.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_LICENSED },
  },
];

const faqs = [
  {
    question: 'How much does it cost to repair a solar panel?',
    answer:
      'It depends on what failed, and no California agency publishes repair prices. A fault covered by the panel or inverter warranty, including labor, can cost you nothing; the same fault after the warranty ends means paying for the part, a roof visit and sometimes removing neighboring panels. Get a written diagnosis first, then an itemized quote that separates parts, labor, access and any permit.',
  },
  {
    question: 'Does homeowners insurance cover solar panel repair?',
    answer:
      'It can for sudden damage such as a fallen tree, fire or a storm, depending on your policy and deductible. Wear, defects and poor installation are normally warranty or workmanship questions, not insurance claims. Read the policy and call your insurer before a contractor starts work that you want covered.',
  },
  {
    question: 'Can a cracked solar panel be repaired?',
    answer:
      'A panel with broken glass is normally replaced rather than patched, because the glass keeps moisture out of the cells. The cost question is whether a matching panel is still available and whether the replacement works electrically with the rest of the string. Ask the contractor to confirm the replacement model in writing.',
  },
  {
    question: 'Who repairs solar panels if my installer went out of business?',
    answer:
      'Panel and inverter warranties usually come from the manufacturers, so a claim for the part may still be possible even though the installer is gone. For the labor, hire a contractor licensed for solar work and check the license on the CSLB lookup. If a lease or PPA company owns the system, call that company.',
  },
  {
    question: 'Is a failed inverter covered by warranty?',
    answer:
      'Often, if it is still within the term. NREL noted in 2018 that 10-year inverter warranties were commonly available and that 20-year extended warranties and service plans were gaining ground. Check whether yours pays for labor and shipping as well as the unit, and whether it had to be registered.',
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

export default function SolarPanelRepairCost() {
  return (
    <PublicLayout breadcrumbLabel="Solar panel repair cost" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar panel repair cost in California: what drives the price"
        url="https://ratereliefca.com/blog/solar-panel-repair-cost"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="What decides the cost of fixing a home solar system in California: which part failed, warranty coverage for parts and labor, roof access, panel removal and permits."
      />
      <Header />
      <GuideShell
        title="Solar panel repair cost in California: what drives the price"
        eyebrow="Solar panel maintenance"
        crumbs={[HUB]}
        crumbLabel="Solar panel repair cost"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="maintenance"
        path={PATH}
        quickCheckTopic="Solar panel repair in California"
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar panel repair in California" />}
      >
        <p>
          A solar repair can cost nothing or a great deal, and the difference is rarely the panel itself. What
          you pay depends on which part failed, whether a warranty covers both the part and the labor, how hard
          the roof is to work on, and whether panels must come off to reach the fault. Inverters and other
          electronics fail far more often than panels, so start the diagnosis there.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          We do not repair solar equipment. Our <Link href="/solar-panel-maintenance-california">solar panel maintenance guide</Link>{' '}
          covers the rest of the upkeep picture.
        </p>

        <section>
          <h2>Diagnose before you pay for anything</h2>
          <p>
            Your monitoring data usually narrows the problem before anyone climbs a ladder. A whole-system
            shutdown points to the inverter, a breaker or the monitoring connection. One panel or one string
            lagging points to shade, a failed microinverter or optimizer, a damaged panel or a wiring fault. A
            slow loss across the whole array that returns after rain is dirt, not a repair. Walk through{' '}
            <Link href="/solar-problems/solar-panels-not-producing-enough">the checks for panels that under-produce</Link>{' '}
            first; a reset or a tripped breaker costs nothing to fix.
          </p>
          <p>
            When you do call someone, ask for a written diagnosis that names the failed component, its serial
            number and whether it is under warranty. That document is what you will need for a warranty claim or
            for comparing a second opinion.
          </p>
        </section>

        <section>
          <h2>Repair by repair: who usually pays and what moves the price</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Common solar repairs, likely coverage and cost drivers</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Problem</th>
                  <th className={th}>Usually covered by</th>
                  <th className={th}>What drives your cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>String inverter failure</th>
                  <td className={td}>Inverter manufacturer’s warranty</td>
                  <td className={td}>Whether labor is covered, whether the same model is still made, any electrical changes and permit</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Microinverter or optimizer failure</th>
                  <td className={td}>Manufacturer’s warranty</td>
                  <td className={td}>Roof access and whether panels must be lifted to reach the unit underneath</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Cracked or damaged panel</th>
                  <td className={td}>Panel warranty for defects; homeowners insurance for storm or impact</td>
                  <td className={td}>Availability of a matching panel, removal of neighbors to reach it, your deductible</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Wiring, connectors, conduit</th>
                  <td className={td}>Installer’s workmanship warranty</td>
                  <td className={td}>Where the fault is and how much of the array must be opened</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Leak at a roof mount</th>
                  <td className={td}>Workmanship warranty; possibly the roof warranty</td>
                  <td className={td}>Roof material, number of mounts affected, interior damage</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Monitoring stopped reporting</th>
                  <td className={td}>Installer or equipment maker</td>
                  <td className={td}>Often a gateway or Wi-Fi reset; sometimes a failed communications device</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Animal damage to wiring</th>
                  <td className={td}>Check each warranty’s exclusions</td>
                  <td className={td}>Extent of damage, plus guards to stop a repeat</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For roof penetrations, NREL’s 2018 operation and maintenance guide put flashing repair “on the order
            of $100 per flashing of a roof stanchion or conduit penetration and as much as $500 for larger
            objects,” mostly with larger commercial roofs in mind.{' '}
            <Cite publisher="NREL, Dec. 2018" href={NREL_OM} date={UPDATED} /> Treat that as a sign of scale,
            not a current California price: one leaking mount is a small job next to lifting the whole array. If
            water is already coming in, read{' '}
            <Link href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after solar</Link>.
          </p>
        </section>

        <section>
          <h2>Inverters: the repair most owners eventually face</h2>
          <p>
            NREL’s guide says “a sound O&amp;M plan should account for inverter failure because it is one of the
            most frequent causes of PV system performance loss.” It also noted, in December 2018, that 10-year
            inverter warranties were commonly available and 20-year extended warranties or service plans were
            becoming more common. A string inverter is one box, usually on a wall near the electrical panel, so
            replacing it rarely involves the roof. Microinverters and optimizers sit under each panel, so one
            failure is cheaper in parts but needs roof access.{' '}
            <Link href="/blog/string-inverter-vs-microinverter">String inverters versus microinverters</Link>{' '}
            compares how each design fails, and <Link href="/blog/what-is-a-solar-inverter">the inverter explainer</Link>{' '}
            covers what the box does.
          </p>
          <p>
            If you have a home battery, its inverter or controller may be part of the same repair. The{' '}
            <Link href="/battery">home battery guide</Link> explains how batteries tie into the solar system.
          </p>
        </section>

        <section>
          <h2>Warranties decide most repair bills</h2>
          <p>
            The CPUC’s consumer guide says that unless you buy a maintenance plan or the system comes with one,
            “you will be responsible for any maintenance and repairs.” It suggests asking, before you sign, how
            long the panel and inverter warranties last and whom you contact to replace those components.{' '}
            <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} /> When something breaks, check:
          </p>
          <ul>
            <li><strong>Parts versus labor.</strong> A product warranty may ship a new unit but leave the installation visit to you.</li>
            <li><strong>Registration.</strong> Some manufacturer warranties require the system to have been registered.</li>
            <li><strong>Workmanship term.</strong> Leaks, loose wiring and mounting problems fall here, and it comes from the installer.</li>
            <li><strong>Who else has touched it.</strong> Ask in writing whether work by another company affects coverage before you hire one.</li>
          </ul>
          <p>
            If you lease the system or buy its power under a PPA, repairs are normally the owner’s job under the
            contract. Call that company first.
          </p>
        </section>

        <section>
          <h2>Who can do the repair</h2>
          <p>
            The Contractors State License Board lists the license classes allowed to work on solar systems. It
            describes C-46 solar contractors as those who “install, modify, maintain, and repair thermal and
            photovoltaic solar energy systems,” and lists C-10 electrical contractors as well. Its advice is:
            “Do not use a contractor who is not licensed to perform solar work.”{' '}
            <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} /> Check the license number on the{' '}
            <a href={CSLB_LOOKUP} target="_blank" rel="noopener noreferrer">CSLB lookup</a> before anyone goes on
            the roof, or use <Link href="/solar-installers/how-to-verify-a-solar-contractor-california">our step-by-step license check</Link>.
          </p>
          <p>
            If a licensed contractor won’t fix its own faulty work, a CSLB complaint is the next step. CSLB says
            it may try to mediate, and that citations against licensed contractors “may contain civil penalties
            of up to $30,000” along with orders to repair or pay; it also warns that it cannot guarantee you will
            get money back. <Cite publisher="CSLB" href={CSLB_LICENSED} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>Getting a repair quote you can compare</h2>
          <ol>
            <li>The written diagnosis: failed part, serial number, how it was tested.</li>
            <li>Parts, labor, roof access and any panel removal priced on separate lines.</li>
            <li>The replacement model, and confirmation it works with the rest of the system.</li>
            <li>Whether a permit or utility notice is needed, and who handles it.</li>
            <li>The warranty on the repair itself, in writing.</li>
            <li>The contractor’s license number and the name of the person doing the work.</li>
          </ol>
          <p>
            Storm, fire or falling-branch damage may be an insurance question rather than a warranty one; see{' '}
            <Link href="/solar-problems/solar-homeowners-insurance">what homeowners insurance covers on solar</Link>.
          </p>
        </section>

        <section>
          <h2>Repair, replace or remove?</h2>
          <p>
            On an older system, a big repair bill raises the question of whether to keep fixing it. Weigh the
            repair against the output the system still produces, the warranties it has left, and the roof’s
            remaining life, because a roof replacement soon would mean paying to{' '}
            <Link href="/blog/solar-panel-removal-reinstall-cost">remove and reinstall the panels</Link> anyway.
            If you are thinking about changing the size of the system, ask your utility first how that affects
            your billing plan. Our <Link href="/blog/solar-panel-maintenance-cost">maintenance cost guide</Link>{' '}
            sets out a yearly budget that makes these decisions less of a shock.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
