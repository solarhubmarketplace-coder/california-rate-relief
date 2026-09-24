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

const PATH = '/blog/solar-panel-removal-reinstall-cost';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar panel maintenance', href: '/solar-panel-maintenance-california' };
const metaTitle = 'Solar Panel Removal and Reinstall Cost in California';
const metaDescription =
  'Solar panel removal in California: what sets the cost to remove and reinstall for a new roof, who may do it, removing panels for good, and disposal rules.';

const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CPUC_NBT = 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const CSLB_LOOKUP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const DOE_ROOF = 'https://www.energy.gov/eere/solar/articles/replacing-your-roof-its-great-time-add-solar';
const LADWP_GUIDE = 'https://www.ladwp.com/sites/default/files/2026-01/Revised%20SRP%20Guidelines%20(BES%2011-3-25%20v.2).pdf';
const CSLB_FIND = 'https://www2.cslb.ca.gov/Newsletter/2018-summer/Find_My_Licensed_Contractor.asp';
const CSLB_ZIP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/ZipCodeSearch.aspx';
const CCR_UW = 'https://www.law.cornell.edu/regulations/california/22-CCR-66261.9';
const RIVCO = 'https://rcwaste.org/solar-panels';

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide and buyer questions', url: CPUC_GUIDE },
  { label: 'CPUC: Net energy metering and net billing (tariff for new interconnections)', url: CPUC_NBT },
  { label: 'CSLB: Solar Smart, license classes authorized for solar work', url: CSLB_SOLAR },
  { label: 'CSLB: License and salesperson lookup', url: CSLB_LOOKUP },
  { label: 'U.S. Department of Energy: Replacing your roof? It’s a great time to add solar', url: DOE_ROOF },
  { label: 'LADWP: Solar Rooftops Program guidelines (revised, posted January 2026)', url: LADWP_GUIDE },
  { label: 'CSLB: Find My Licensed Contractor, search by classification and city or ZIP (Summer 2018 newsletter)', url: CSLB_FIND },
  { label: 'Cal. Code of Regs., tit. 22, § 66261.9 (photovoltaic modules as universal waste, operative Jan. 1, 2021)', url: CCR_UW },
  { label: 'Riverside County Department of Waste Resources: solar panels', url: RIVCO },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Ask before you buy',
    value: 'Removal + reinstall cost',
    note: 'The CPUC lists it, including inspection fees, among questions for any solar seller.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
  },
  {
    label: 'Licensed for solar work',
    value: 'C-46, C-10 and others',
    note: 'CSLB’s list of classes that may install and repair solar; roofing alone is not on it.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_SOLAR },
  },
  {
    label: 'Panel vs roof life',
    value: '25–30 vs 20–50 years',
    note: 'Roof life depends on material; timing both together avoids a later reinstall.',
    source: { publisher: 'energy.gov', date: UPDATED, url: DOE_ROOF },
  },
  {
    label: 'Moving panels to a new home',
    value: 'New interconnection',
    note: 'IOU customers applying since April 15, 2023 take service on net billing.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_NBT },
  },
];

const faqs = [
  {
    question: 'How much does it cost to remove solar panels?',
    answer:
      'No California agency or research lab publishes removal prices, and a per-panel figure from a sales page cannot account for your roof. The quote depends on the number of panels, the roof material and pitch, whether mounts and flashing are replaced, electrical disconnection and reconnection, storage, permits and inspection. Ask for those as separate lines, and get the reinstall priced at the same time, because a removal-only price is not the full cost.',
  },
  {
    question: 'Who can remove solar panels from a roof?',
    answer:
      'A contractor licensed for solar work. CSLB lists the classes allowed to install and repair solar systems, including C-46 solar and C-10 electrical contractors, and tells consumers not to use a contractor who is not licensed for solar work. If a company owns the system under a lease or PPA, the contract may require that company or its crew to do the removal.',
  },
  {
    question: 'Can my roofer remove the solar panels?',
    answer:
      'Only if the company also holds a license class that covers solar work. Many roofers subcontract the solar part. Either way, ask who will disconnect, remove, store and reinstall the equipment, get that company’s license number, and check it on the CSLB lookup.',
  },
  {
    question: 'Can I remove solar panels myself?',
    answer:
      'It isn’t a safe do-it-yourself job. Panels produce voltage whenever light hits them, and removal means disconnecting live circuits, lifting fragile glass on a roof and sealing the holes the mounts leave. CSLB tells consumers not to use anyone who is not licensed for solar work, and a leased system’s contract usually forbids anyone but the owner’s crew from touching it.',
  },
  {
    question: 'Can I throw old solar panels in the trash?',
    answer:
      'No. California lists photovoltaic modules as a universal waste, operative since January 1, 2021, so they go to a handler or recycler rather than a trash bin. Riverside County, for example, says it does not accept them at its landfills or household hazardous waste program and points residents to the state’s lists of universal waste handlers. Ask the removal contractor where the panels will go.',
  },
  {
    question: 'Do I need a permit to remove and reinstall solar panels?',
    answer:
      'Ask your city or county building department; the answer depends on the jurisdiction and on whether anything about the system changes. The CPUC’s buyer question about removal cost specifically mentions inspection fees, so budget for an inspection and ask the contractor to state who pulls any permit.',
  },
  {
    question: 'Will removing my panels void the warranty?',
    answer:
      'It can affect the installer’s workmanship warranty if another company does the work. Before booking, ask the original installer in writing whether removal by someone else changes its coverage, and ask the new contractor what warranty it gives on the reinstall and the new roof penetrations.',
  },
  {
    question: 'How much does it cost to move solar panels to a new house?',
    answer:
      'Moving panels means paying for removal at the old house plus most of a new installation at the new one: design for the new roof, new mounts, electrical work, permits and a new interconnection application with the utility. For PG&E, SCE and SDG&E customers, applications since April 15, 2023 go onto the net billing tariff. Compare that with leaving the system and pricing a new one.',
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

export default function SolarPanelRemovalReinstallCost() {
  return (
    <PublicLayout breadcrumbLabel="Removal and reinstall cost" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar panel removal and reinstall cost in California: what to expect"
        url="https://ratereliefca.com/blog/solar-panel-removal-reinstall-cost"
        dateModified="2026-09-23"
        description="What decides the price of removing and reinstalling solar panels for roof work in California, who is licensed to do it, how leases and PPAs handle it, and what the quote should list."
      />
      <Header />
      <GuideShell
        title="Solar panel removal and reinstall cost in California: what to expect"
        eyebrow="Solar panel maintenance"
        crumbs={[HUB]}
        crumbLabel="Removal and reinstall cost"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="maintenance"
        path={PATH}
        quickCheckTopic="Solar removal and reinstallation review"
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar removal and reinstallation review" />}
      >
        <p>
          There is no official price list for removing and reinstalling solar panels, so a fair quote is one
          that itemizes the job. The price turns on how many panels you have, your roof type, whether mounts and
          flashing are replaced, permits and inspection, and whether a lease makes someone else responsible.
          Settle who owns the system and who may touch it before you book the roofer.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          We do not remove or reinstall panels. For all other upkeep, see <Link href="/solar-panel-maintenance-california">our solar panel maintenance guide</Link>.
        </p>

        <section>
          <h2>Who can remove solar panels from a roof</h2>
          <p>
            Taking panels off means disconnecting a live electrical system, so it is solar work, not just roof
            work. The Contractors State License Board lists the license classes authorized to install solar,
            including C-46 solar contractors, who “install, modify, maintain, and repair thermal and
            photovoltaic solar energy systems,” and C-10 electrical contractors. Its advice: “Do not use a
            contractor who is not licensed to perform solar work.”{' '}
            <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} /> Roofing is not on that list, which is why
            many roofers bring in a solar subcontractor.
          </p>
          <p>Before anyone quotes, sort out three things:</p>
          <ul>
            <li>
              <strong>Who owns the system.</strong> If you lease it or buy its power under a PPA, the contract says
              who may remove it and who pays. Some owners require their own crew.
            </li>
            <li>
              <strong>Who holds the warranties.</strong> Ask the original installer in writing whether removal by
              another company affects its workmanship warranty.
            </li>
            <li>
              <strong>Whose license covers what.</strong> Get license numbers for both the roof and the solar
              scope and check them on the <a href={CSLB_LOOKUP} target="_blank" rel="noopener noreferrer">CSLB lookup</a>,
              or follow <Link href="/solar-installers/how-to-verify-a-solar-contractor-california">our contractor verification steps</Link>.
            </li>
          </ul>
          <h3>Finding a company that removes and reinstalls solar panels</h3>
          <p>
            Start with the company that installed the system: it knows the layout, and doing the work itself keeps
            its workmanship warranty simple. If it has closed or won’t take the job, CSLB’s{' '}
            <a href={CSLB_ZIP} target="_blank" rel="noopener noreferrer">Find My Licensed Contractor</a> search
            lists licensed contractors “by classification within a specific geographic area using either a city or
            zip code.” <Cite publisher="CSLB" href={CSLB_FIND} date={UPDATED} /> Search the C-46 solar class, and
            ask your roofer which solar contractor it works with so you can check that license too. Our page on{' '}
            <Link href="/solar-installers/licensed-solar-installer">finding licensed solar installers by county</Link>{' '}
            walks through the lookup.
          </p>
          <p>
            A roof repair doesn’t always mean lifting the whole array. If the leak or damage sits under a few
            panels, ask whether only that section can come off, and get the price for a partial removal as well as
            a full one.
          </p>
        </section>

        <section>
          <h2>What drives the cost</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Cost drivers for solar panel removal and reinstallation</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Cost driver</th>
                  <th className={th}>Why it changes the price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>Panel count and layout</th><td className={td}>Labor scales with the number of panels and roof planes.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Roof material and pitch</th><td className={td}>Tile and steep roofs are slower and riskier to work on than low-slope shingle.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Mounts and flashing</th><td className={td}>A new roof usually needs new flashing at every mount; reused racking must be in good shape.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Electrical work</th><td className={td}>Safe shutdown, disconnection, reconnection, conduit and any code updates.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Microinverters or optimizers</th><td className={td}>Units under each panel come off with it and must be handled and re-tested.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Storage</th><td className={td}>On-site or off-site, and who is liable for damage while the panels are down.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Permits and inspection</th><td className={td}>Your building department sets these; the CPUC’s question about this cost names inspection fees.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Old or failing parts</th><td className={td}>A reinstall is when a worn inverter or discontinued panel becomes an upgrade decision.</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            A price per panel quoted over the phone leaves most of this out. Ask each bidder to see the same
            system documents and roof, then compare written, line-item quotes.
          </p>
        </section>

        <section>
          <h2>How a removal for roof replacement usually runs</h2>
          <ol>
            <li>Gather the original contract, permit record, equipment list and warranty documents.</li>
            <li>Screenshot a month or two of production so you can compare output after the reinstall.</li>
            <li>Photograph the array, roof and equipment before work starts.</li>
            <li>A licensed solar contractor shuts the system down, disconnects it, and removes and labels the panels and racking.</li>
            <li>Panels are stored as agreed in writing.</li>
            <li>The roofer replaces the roof, coordinating new flashing or mounts with the solar contractor.</li>
            <li>The solar contractor reinstalls, reconnects and tests the system, and any required inspection happens.</li>
            <li>You compare production with your baseline and keep every document from the job.</li>
          </ol>
          <p>
            If your roof replacement is part of an insurance claim, ask the insurer whether removing and
            reinstalling the panels is included; contractors sometimes call this line “detach and reset.” Our
            guide to <Link href="/solar-problems/solar-homeowners-insurance">homeowners insurance and solar panels</Link>{' '}
            covers what policies look at.
          </p>
        </section>

        <section>
          <h2>Leased, PPA and utility-program systems</h2>
          <p>
            When a company owns the panels, the removal terms are in its contract: who does the work, how much
            notice you must give, whether there is a fee, and how long the system can be off. Read that section
            before you sign with a roofer, and get the owner’s approval in writing.{' '}
            <Link href="/blog/rent-solar-panels-for-your-home-california">How solar leases and PPAs work</Link>{' '}
            explains the contract types.
          </p>
          <p>
            Utility programs set their own rules. LADWP’s Solar Rooftops guidelines, for example, say the
            utility-owned system “can be twice removed at no expense to the customer”: once for rooftop repairs
            and once at the end of the program term.{' '}
            <Cite publisher="LADWP" href={LADWP_GUIDE} date={UPDATED} /> Details are in{' '}
            <Link href="/blog/ladwp-solar-rooftops-program">our LADWP Solar Rooftops guide</Link>.
          </p>
        </section>

        <section>
          <h2>Moving solar panels to a new house</h2>
          <p>
            Moving panels is a removal at one address and close to a new installation at another: a new design
            for a different roof, new mounts, electrical work, permits and an interconnection application with
            the utility. For customers of PG&amp;E, SCE and SDG&amp;E, the CPUC says those applying for
            interconnection since April 15, 2023 have taken service on the net billing tariff, so a moved system
            would not keep an older net metering plan.{' '}
            <Cite publisher="CPUC" href={CPUC_NBT} date={UPDATED} /> If the system is leased, transferring the
            lease to the buyer is usually the path; see{' '}
            <Link href="/blog/what-happens-to-solar-lease-when-i-sell-california">what happens to a solar lease when you sell</Link>.
          </p>
        </section>

        <section>
          <h2>Removing solar panels for good</h2>
          <p>
            Sometimes the panels are not going back up: the system has failed, you are replacing it with a new
            one, or you want the roof clear. A permanent removal has its own checklist.
          </p>
          <ol>
            <li><strong>Settle ownership first.</strong> If the system is leased or on a PPA, the contract decides whether and how it can come off, and what you owe. If a loan financed it, ask the lender whether removal affects the loan.</li>
            <li><strong>Tell your utility.</strong> Your interconnection agreement and billing plan are tied to that system. Ask how to close it out, especially if a new system will follow.</li>
            <li><strong>Hire a licensed solar contractor</strong> to disconnect and remove the equipment, and ask whether your building department needs a permit for the work.</li>
            <li><strong>Seal the roof.</strong> Every mount leaves a penetration. Get the patching or re-roofing of those spots in the same contract, or book your roofer for the day the panels come off.</li>
            <li><strong>Plan where the panels go.</strong> California lists photovoltaic modules as a universal waste, operative January 1, 2021, so they go to a permitted handler or recycler rather than the trash. <Cite publisher="22 CCR § 66261.9" href={CCR_UW} date={UPDATED} /> Riverside County, for example, does not accept them at its landfills or household hazardous waste program and points residents to the state’s lists of universal waste handlers. <Cite publisher="Riverside County" href={RIVCO} date={UPDATED} /></li>
          </ol>
          <p>
            A removal-only quote should list disconnection, removal, roof patching, hauling and the recycling or
            disposal fee as separate lines. If the system still works, ask whether it has resale value before you
            pay to recycle it. And if a new system will replace it, ask the utility before you sign how the change affects your
            billing plan; <Link href="/blog/adding-solar-panels-existing-system-california">adding panels to an existing system</Link>{' '}
            covers the same question for expansions.
          </p>
        </section>

        <section>
          <h2>Plan the roof and the solar together</h2>
          <p>
            The best time to deal with removal cost is before the panels go up. The CPUC’s consumer guide
            suggests asking any seller: “Roughly how much will it cost to remove and re-install the panels if I
            need to replace my roof in the future, including inspection fees?” and “Does my roof need to be
            replaced before installing solar panels?” <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} />
          </p>
          <p>
            The U.S. Department of Energy notes that panels last about 25 to 30 years and a roof 20 to 50
            depending on material, and that doing both at once avoids having to reinstall the panels later.{' '}
            <Cite publisher="energy.gov" href={DOE_ROOF} date={UPDATED} /> If your roof is near the end of its
            life, compare a roof-first plan using{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california">our roof suitability guide</Link>, check any
            bundled offer against <Link href="/blog/free-roof-replacement-with-solar-panels-california">the roof-and-solar proposal checklist</Link>,
            and for tile see <Link href="/blog/solar-panels-tile-roof-california">solar on tile roofs</Link>. If a
            leak is what started this, read{' '}
            <Link href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after solar</Link>{' '}
            first.
          </p>
        </section>

        <section>
          <h2>What the written quote should say</h2>
          <ul>
            <li>Every company involved, with license numbers, and which one is responsible for each part.</li>
            <li>Equipment inventory: panel, inverter and optimizer models and counts.</li>
            <li>Removal, storage, reinstall, new flashing or mounts, electrical work and testing as separate lines.</li>
            <li>Who pulls permits, who schedules inspection and who pays for it.</li>
            <li>Responsibility for damage to panels, roof or interior during the work.</li>
            <li>Warranty on the reinstall and on the new roof penetrations.</li>
            <li>Change-order rules if hidden roof damage or failed parts turn up.</li>
          </ul>
          <p>
            Other repairs that come up while the panels are down are covered in{' '}
            <Link href="/blog/solar-panel-repair-cost">what drives solar panel repair cost</Link>, and the
            yearly picture is in <Link href="/blog/solar-panel-maintenance-cost">maintenance and cleaning costs</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
