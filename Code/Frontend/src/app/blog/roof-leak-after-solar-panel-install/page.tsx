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

const PATH = '/blog/roof-leak-after-solar-panel-install';
const UPDATED = '2026-09-23';
const HUB = { label: 'Roofs and solar', href: '/blog/is-my-roof-good-for-solar-california' };
const metaTitle = 'Roof Leak After Solar Panel Install? What to Do in CA';
const metaDescription =
  'A roof leak after solar goes in: protect the house, document it, give the installer written notice, and escalate to CSLB if it won’t fix its work.';

const NREL_OM = 'https://www.nrel.gov/docs/fy19osti/73822.pdf';
const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const CSLB_COMPLAINT = 'https://www.cslb.ca.gov/Consumers/Filing_A_Complaint/';
const CSLB_LICENSED = 'https://www.cslb.ca.gov/Consumers/Filing_A_Complaint/Complaint_Against_Licensed_Contractors.aspx';
const CSLB_SMALL = 'https://www.cslb.ca.gov/Consumers/Legal_Issues_For_Consumers/Small_Claims_Court.aspx';
const CCP_33715 = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CCP&sectionNum=337.15';
const LADWP_GUIDE = 'https://www.ladwp.com/sites/default/files/2026-01/Revised%20SRP%20Guidelines%20(BES%2011-3-25%20v.2).pdf';

const sources: Source[] = [
  { label: 'NREL: Best Practices for Operation and Maintenance of PV and Energy-Storage Systems, 3rd ed. (Dec. 2018), roof penetrations', url: NREL_OM },
  { label: 'CPUC: California Solar Consumer Protection Guide and buyer questions', url: CPUC_GUIDE },
  { label: 'CSLB: Solar Smart, solar complaint statistics and license classes', url: CSLB_SOLAR },
  { label: 'CSLB: Filing a complaint (four-year jurisdiction)', url: CSLB_COMPLAINT },
  { label: 'CSLB: Complaint process against licensed contractors (mediation, arbitration, penalties)', url: CSLB_LICENSED },
  { label: 'CSLB: Small claims court', url: CSLB_SMALL },
  { label: 'Code of Civil Procedure § 337.15 (latent construction defects)', url: CCP_33715 },
  { label: 'Business and Professions Code § 7071.5 (who the contractor’s bond protects)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7071.5' },
  { label: 'LADWP: Solar Rooftops Program Guidelines (operation and maintenance)', url: LADWP_GUIDE },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Top solar complaint type',
    value: 'Workmanship',
    note: '1,232 of 1,625 investigated solar complaints in FY 2022/23 were workmanship or abandonment.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_SOLAR },
  },
  {
    label: 'CSLB complaint window',
    value: '4 years',
    note: 'From the date of the act, for licensed or unlicensed contractors.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_COMPLAINT },
  },
  {
    label: 'CSLB arbitration',
    value: 'Up to $25,000',
    note: 'Mandatory program for qualifying disputes; voluntary from $25,000 to $50,000.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_LICENSED },
  },
  {
    label: 'Hidden defects',
    value: '10-year outer limit',
    note: 'For latent construction deficiencies, from substantial completion.',
    source: { publisher: 'CCP § 337.15', date: UPDATED, url: CCP_33715 },
  },
];

const faqs = [
  {
    question: 'Do solar companies replace your roof if they cause a leak?',
    answer:
      'They are expected to fix what their work caused, under the workmanship warranty in your contract and California’s contractor license law. Whether that means a patch, new flashing or new roofing depends on the damage and the exact warranty terms. Get the installer’s repair plan in writing, and if it won’t make things right, file a CSLB complaint.',
  },
  {
    question: 'Will a solar company pay for a new roof?',
    answer:
      'Only if your contract or its warranty says so, or a court or CSLB orders it. Some sellers bundle a new roof into a solar contract up front, which is paid for inside the financing rather than given away; see our guide to roof replacement offers bundled with solar before signing one.',
  },
  {
    question: 'Does homeowners insurance cover a leak caused by solar panels?',
    answer:
      'It may cover sudden water damage inside the house, depending on your policy, while treating the faulty installation as the installer’s responsibility. Call your insurer, report the damage promptly and ask how a claim interacts with the installer’s warranty.',
  },
  {
    question: 'Can I hire my own roofer to fix a leak under solar panels?',
    answer:
      'Ask the installer in writing first, because work on the array by another company can affect its workmanship warranty. If the installer won’t respond in a reasonable time, a roofer working with a contractor licensed for solar work can repair it; keep every record so you can seek the cost from the installer.',
  },
  {
    question: 'How long do I have to make a claim for a solar roof leak?',
    answer:
      'Check your workmanship warranty term first. CSLB can act on license-law violations for up to four years from the date of the act, and California’s outer limit for suits over hidden construction defects is 10 years from substantial completion. Which rule applies depends on your facts; this is general information, not legal advice.',
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

export default function RoofLeakAfterSolarInstall() {
  return (
    <PublicLayout breadcrumbLabel="Roof leak after solar install" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Roof leak after a solar panel install: what to do in California"
        url="https://ratereliefca.com/blog/roof-leak-after-solar-panel-install"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="What to do when a roof leaks after solar panels are installed in California: protect the house, document it, notify the installer in writing, and escalate to CSLB, small claims or insurance."
      />
      <Header />
      <GuideShell
        title="Roof leak after a solar panel install: what to do in California"
        eyebrow="Roofs and solar"
        crumbs={[HUB]}
        crumbLabel="Roof leak after solar install"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="roof_structures"
        path={PATH}
        quickCheckTopic={null}
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar roof and installation review" />}
      >
        <p>
          Act quickly and in writing. Protect the inside of the house, photograph the leak and the array, and
          send the installer written notice under its workmanship warranty before anyone else touches the
          panels. A leak near an array can start where mounts or conduit pass through the roof, which makes it a
          question about the installer’s work. If it won’t fix it, CSLB takes complaints for up to four years.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          We don’t inspect or repair roofs; this page explains the steps and who is responsible, as general
          information rather than legal advice.
        </p>

        <section>
          <h2>The first day: protect the house and build the record</h2>
          <ol>
            <li>Stop the damage inside: move belongings, catch the water, and turn off power to any light fixture or outlet the water reaches.</li>
            <li>Photograph and video the ceiling, walls and attic (if you can reach it safely), with the date visible.</li>
            <li>From the ground, photograph the array and the roof around it. Don’t climb onto the roof or the panels.</li>
            <li>Note the weather: which rain, how heavy, and how soon after it the leak appeared.</li>
            <li>Find your contract and the workmanship warranty, and check who owns the system.</li>
            <li>Call the installer, then send the same report by email so there is a dated written record.</li>
          </ol>
          <p>
            Hold off on letting a roofer lift panels or reseal mounts until you have asked the installer, in
            writing, whether that affects its warranty. Emergency tarping to protect the house is different; tell
            the installer you did it and keep the receipt.
          </p>
        </section>

        <section>
          <h2>Who is responsible depends on who did the work and who owns the system</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Who to hold responsible for a roof leak near solar panels</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Situation</th>
                  <th className={th}>Start with</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>You own the system and the installer is in business</th><td className={td}>The installer, under its workmanship warranty</td></tr>
                <tr className="border-t"><th scope="row" className={th}>The installer has closed</th><td className={td}>A roofer working with a contractor licensed for solar work; a claim against the contractor’s license bond</td></tr>
                <tr className="border-t"><th scope="row" className={th}>A company owns the system (lease or PPA)</th><td className={td}>That company; the contract says who repairs the roof under the array</td></tr>
                <tr className="border-t"><th scope="row" className={th}>LADWP Solar Rooftops</th><td className={td}>LADWP, which is solely responsible for the system under the program guidelines</td></tr>
                <tr className="border-t"><th scope="row" className={th}>The roof was already failing</th><td className={td}>Your roofer and any roof warranty; the leak may not be the installer’s</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Panel and inverter warranties cover the equipment itself, so they rarely help with a leak. The
            warranty that matters is the installer’s workmanship warranty, so check its term and what it
            excludes. Leases and PPAs are covered in{' '}
            <Link href="/blog/rent-solar-panels-for-your-home-california">how solar leases and PPAs work</Link>, and
            the utility-owned program in <Link href="/blog/ladwp-solar-rooftops-program">LADWP Solar Rooftops</Link>.
          </p>
        </section>

        <section>
          <h2>Where solar-related leaks come from</h2>
          <p>
            Every mount, conduit run or rooftop box that passes through the roof has to be flashed and sealed.
            NREL’s operation and maintenance guide treats flashing at “a roof stanchion or conduit penetration”
            as a routine repair item, and recommends that the roofing company specify procedures for notifying
            it and the manufacturer of roof problems related to a PV system.{' '}
            <Cite publisher="NREL, Dec. 2018" href={NREL_OM} date={UPDATED} /> Other common sources:
          </p>
          <ul>
            <li>Mounts that missed a rafter, or were sealed with caulk alone instead of flashing.</li>
            <li>Tiles cracked during installation on clay or concrete tile roofs.</li>
            <li>Debris and leaves trapped under the array, blocking drainage.</li>
            <li>Roofing that was already near the end of its life when the panels went on.</li>
          </ul>
          <p>
            On tile, the attachment method matters; see{' '}
            <Link href="/blog/solar-panels-tile-roof-california">how panels attach to a tile roof</Link>. If the
            repair means lifting panels, <Link href="/blog/solar-panel-repair-cost">what drives solar repair cost</Link>{' '}
            explains the charges.
          </p>
        </section>

        <section>
          <h2>Getting the installer to fix it</h2>
          <p>
            Put your request in writing: the date the leak appeared, what you have seen, photos, the warranty
            clause, and a reasonable deadline for an inspection and repair. Ask the installer to show you, with
            photos, what it found and what it replaced. Keep copies of everything, including your own
            costs for interior repairs.
          </p>
          <p>
            Workmanship is the biggest category of solar complaints to the Contractors State License Board. In
            fiscal year 2022/2023, 1,232 of the 1,625 solar complaints CSLB investigated involved workmanship or
            abandonment. <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>If the installer won’t respond</h2>
          <ul>
            <li>
              <strong>CSLB complaint.</strong> CSLB handles license-law violations “for up to four years from the
              date of the act,” licensed or unlicensed. <Cite publisher="CSLB" href={CSLB_COMPLAINT} date={UPDATED} />{' '}
              It may mediate; its arbitration program is mandatory for qualifying disputes of $25,000 or less and
              voluntary from $25,000 to $50,000; and citations can carry civil penalties of up to $30,000 plus
              orders to repair. It also says it cannot guarantee you will get money back.{' '}
              <Cite publisher="CSLB" href={CSLB_LICENSED} date={UPDATED} />
            </li>
            <li>
              <strong>Small claims court.</strong> CSLB points people with damages of $12,500 or less to small
              claims and advises consulting an attorney above that. <Cite publisher="CSLB" href={CSLB_SMALL} date={UPDATED} />
            </li>
            <li>
              <strong>Hidden defects.</strong> For defects not apparent by reasonable inspection, Code of Civil
              Procedure § 337.15 sets an outer limit of 10 years after substantial completion for a lawsuit.
              Shorter limits can apply, so don’t wait.
            </li>
          </ul>
          <p>
            <Link href="/solar-problems/attorney-to-sue-solar-company-california">When to bring in an attorney</Link>{' '}
            and <Link href="/solar-problems/solar-company-took-my-money-california">what to do if the contractor has disappeared</Link>{' '}
            cover the next steps.
          </p>
        </section>

        <section>
          <h2>Insurance for the damage inside</h2>
          <p>
            Interior water damage may be a homeowners insurance claim even when the cause is the installer’s
            work, depending on your policy and deductible. Report it promptly and ask the insurer how the claim
            and the installer’s warranty fit together. <Link href="/solar-problems/solar-homeowners-insurance">How homeowners insurance treats solar panels</Link>{' '}
            covers the policy side.
          </p>
        </section>

        <section>
          <h2>Before the next roof or solar decision</h2>
          <p>
            The CPUC’s consumer guide suggests asking any solar seller, before signing, whether the roof needs
            replacing first, and what it would cost to remove and reinstall the panels for a future roof
            replacement. <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} /> If this leak has you thinking
            about a new roof, read <Link href="/blog/solar-panel-removal-reinstall-cost">solar panel removal and reinstall costs</Link>,{' '}
            <Link href="/blog/free-roof-replacement-with-solar-panels-california">what to check in a roof-plus-solar offer</Link>,
            and <Link href="/blog/is-my-roof-good-for-solar-california">whether your roof is right for solar</Link>. Ongoing
            upkeep is in <Link href="/solar-panel-maintenance-california">our solar panel maintenance guide</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
