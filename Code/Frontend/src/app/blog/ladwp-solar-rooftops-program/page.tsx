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

const PATH = '/blog/ladwp-solar-rooftops-program';
const UPDATED = '2026-09-23';
const HUB = { label: 'Roofs and solar', href: '/blog/is-my-roof-good-for-solar-california' };
const metaTitle = 'LADWP Solar Rooftops Program: Pay, Terms, Who Qualifies';
const metaDescription =
  'LADWP rents your roof for a utility-owned solar system: $360 to $900 a year for up to 20 years. Eligibility, roof rules, selling your home and leaving early.';

const LADWP_PAGE = 'https://www.ladwp.com/residential-services/solar-programs/solar-rooftops';
const LADWP_FACTS = 'https://www.ladwp.com/sites/default/files/2026-01/Rev._1.2025.Solar_Fact_Sheet.pdf';
const LADWP_GUIDE = 'https://www.ladwp.com/sites/default/files/2026-01/Revised%20SRP%20Guidelines%20(BES%2011-3-25%20v.2).pdf';

const sources: Source[] = [
  { label: 'LADWP: Solar Rooftops program page', url: LADWP_PAGE },
  { label: 'LADWP: Solar Rooftops fact sheet (rev. 1/2025)', url: LADWP_FACTS },
  { label: 'LADWP: Solar Rooftops Program Guidelines, revised (BES 11-3-25 v.2, posted January 2026)', url: LADWP_GUIDE },
];

const keyFacts: KeyFact[] = [
  {
    label: 'What LADWP pays',
    value: '$360–$900 a year',
    note: 'Fixed by system size, for up to 20 years ($7,200–$18,000 in total).',
    source: { publisher: 'LADWP', date: UPDATED, url: LADWP_PAGE },
  },
  {
    label: 'System on your roof',
    value: '1–10 kW',
    note: 'Designed, owned and maintained by LADWP.',
    source: { publisher: 'LADWP', date: UPDATED, url: LADWP_PAGE },
  },
  {
    label: 'Effect on your bill',
    value: 'None',
    note: 'LADWP receives all the energy; the payment is rent for the roof.',
    source: { publisher: 'LADWP fact sheet', date: UPDATED, url: LADWP_FACTS },
  },
  {
    label: 'Program size',
    value: 'Up to 1 MW',
    note: 'Estimated 300–450 homes, per the revised guidelines.',
    source: { publisher: 'LADWP guidelines', date: UPDATED, url: LADWP_GUIDE },
  },
];

const faqs = [
  {
    question: 'How much does LADWP pay for the Solar Rooftops program?',
    answer:
      'LADWP’s program page says participants receive fixed annual payments between $360 and $900 depending on system size, for up to 20 years, totaling $7,200 to $18,000. The guidelines set the monthly equivalent at $30 for systems of at least 1 kW and under 2 kW, $45 up to 5 kW, $60 up to 8 kW and $75 up to 10 kW. LADWP pays the same amount regardless of how much the panels produce.',
  },
  {
    question: 'Will Solar Rooftops lower my LADWP bill?',
    answer:
      'No. The panels connect to LADWP’s grid on the utility side of your meter, and LADWP’s fact sheet says the customer’s electric bill will not be affected. What you get is the roof payment, by check or bill credit. If lowering your own bill is the goal, owning or leasing a system that serves your home is a different decision.',
  },
  {
    question: 'What happens to the agreement if I sell my house?',
    answer:
      'Under the guidelines, the new owner takes your place in the agreement. You must tell the Community Solar staff at least 30 days before the transfer, and a buyer who does not want to participate can submit a notice of termination, after which LADWP removes the system at its own cost.',
  },
  {
    question: 'Can I leave the Solar Rooftops program early?',
    answer:
      'Yes, after the first year. The guidelines let either LADWP or the homeowner end the agreement with 60 days’ written notice once the first lease year has passed. If you leave before a prepaid year ends, you pay back a prorated share of that year’s prepayment, and LADWP removes the system within 60 days at its cost.',
  },
  {
    question: 'Is the LADWP Solar Rooftops program legit?',
    answer:
      'It is LADWP’s own program, described on ladwp.com with a published fact sheet and guidelines. Apply only through your LADWP online account, the PDF application on ladwp.com or LADWP’s program line, (866) 484-0433. A salesperson who says they are signing you up for an LADWP program should be able to show you that on LADWP’s own site.',
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

export default function LadwpSolarRooftopsProgram() {
  return (
    <PublicLayout breadcrumbLabel="LADWP Solar Rooftops program" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="LADWP Solar Rooftops program: what it pays, what you give up, and who qualifies"
        url="https://ratereliefca.com/blog/ladwp-solar-rooftops-program"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="How LADWP's Solar Rooftops program works: payments by system size, the 20-year agreement, eligibility and roof checks, maintenance, selling your home and leaving early."
      />
      <Header />
      <GuideShell
        title="LADWP Solar Rooftops program: what it pays, what you give up, and who qualifies"
        eyebrow="Roofs and solar"
        crumbs={[HUB]}
        crumbLabel="LADWP Solar Rooftops program"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="roof_structures"
        path={PATH}
        quickCheckTopic="LADWP solar options"
        leadCount={2}
        inquiry={<SolarInquiry utility="ladwp" topic="LADWP solar options" />}
      >
        <p>
          LADWP’s Solar Rooftops program rents your roof. The utility installs, owns and maintains a 1 to 10 kW
          solar system on your house and pays you a fixed $360 to $900 a year for up to 20 years, depending on
          system size. The power goes to LADWP’s grid, not your home, so your electric bill doesn’t change. It is
          open to owner-occupied LADWP homes on residential rates, as of September 2026.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          We are not affiliated with LADWP; this page summarizes LADWP’s own published program documents.
        </p>

        <section>
          <h2>How the program works</h2>
          <ol>
            <li>You apply through your LADWP online account, or by mailing or emailing the PDF application.</li>
            <li>LADWP inspects the home to confirm eligibility, check that the roof can support the system, and look for shading from nearby structures.</li>
            <li>LADWP designs the system and pulls a permit from the Los Angeles Department of Building and Safety (LADBS).</li>
            <li>LADWP installs a 1 to 10 kW system; LADBS inspects and approves it; it is connected to LADWP’s grid.</li>
            <li>LADWP receives all the energy, and you receive a check or bill credit for the use of your roof.</li>
          </ol>
          <p>
            The payment does not depend on output: LADWP’s page says customers are paid for rooftop use
            “regardless of how much solar energy is produced.” <Cite publisher="LADWP" href={LADWP_PAGE} date={UPDATED} />{' '}
            The guidelines add that there is no net energy meter and that no energy is delivered to the home from
            the system.
          </p>
        </section>

        <section>
          <h2>What LADWP pays, by system size</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">LADWP Solar Rooftops lease payment by system size</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>System size</th>
                  <th className={th}>Per month</th>
                  <th className={th}>Per year</th>
                  <th className={th}>Maximum over 20 years</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>At least 1 kW, under 2 kW</th><td className={td}>$30</td><td className={td}>$360</td><td className={td}>$7,200</td></tr>
                <tr className="border-t"><th scope="row" className={th}>2 kW to 5 kW</th><td className={td}>$45</td><td className={td}>$540</td><td className={td}>$10,800</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Over 5 kW to 8 kW</th><td className={td}>$60</td><td className={td}>$720</td><td className={td}>$14,400</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Over 8 kW to 10 kW</th><td className={td}>$75</td><td className={td}>$900</td><td className={td}>$18,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Source: LADWP Solar Rooftops Program Guidelines, Table 1, revised version posted January 2026; yearly
            column is the monthly rate times 12. <Cite publisher="LADWP" href={LADWP_GUIDE} date={UPDATED} />
          </p>
          <p>
            After installation and LADBS approval, the guidelines say you receive a prepayment for the first 12
            months, prorated, and then a yearly prepayment or monthly bill credits at LADWP’s discretion. The
            revised guidelines also describe an optional battery add-on paying another $25 a month, but say no
            battery will be added until LADWP staff brief the Board of Water and Power Commissioners, which could
            change that payment. The revised guidelines take effect once the revised lease agreement is approved,
            so check the current version with LADWP before counting on the battery option.
          </p>
        </section>

        <section>
          <h2>Who qualifies</h2>
          <p>According to LADWP’s page, fact sheet and guidelines, you need:</p>
          <ul>
            <li>LADWP residential service on rate schedule R1-A (standard), R1-B (time-of-use), R1-D (low-income) or R1-E (lifeline).</li>
            <li>An owner-occupied home, with the same person as account holder and homeowner on the application.</li>
            <li>A home in the Los Angeles Basin part of LADWP’s service territory.</li>
            <li>No existing solar system and no past participation in LADWP’s Solar Incentive Program.</li>
            <li>A home that passes LADBS’s expedited solar permit criteria and LADWP’s own evaluation. The fact sheet specifies a single-family home with composite shingles.</li>
          </ul>
          <p>
            LADWP’s on-site evaluation asks, among other things, whether the home is one or two stories, which way
            the roof faces (south or southwest preferred), whether it has one layer of roofing, whether the
            structure looks sound without sagging, the roof pitch and rafter spacing, shading from trees or
            buildings, and whether there is room for an extra meter near your electrical panel.
          </p>
          <p>
            Space is limited. The guidelines cap the program at about one megawatt, estimated at 300 to 450 homes,
            and say applications are reviewed monthly in the order received, with selection at LADWP’s discretion
            to spread systems across the city and build on the most suitable homes. Applying does not guarantee a
            place. If you aren’t selected, or you rent or live in a condo,{' '}
            <Link href="/blog/ladwp-solar-program">LADWP’s other solar programs</Link> include Shared Solar for
            apartment and condo households and SGIP funding for income-qualified customers.
          </p>
        </section>

        <section>
          <h2>What you give up</h2>
          <ul>
            <li><strong>The roof space, for up to 20 years.</strong> The agreement runs 20 years from LADBS approval, unless ended early.</li>
            <li><strong>The electricity.</strong> None of it serves your home, and LADWP keeps the environmental attributes.</li>
            <li><strong>Flexibility on the roof.</strong> The guidelines say the system can be removed twice at no expense to you: once for rooftop repairs and once at the end of the term.</li>
            <li><strong>Hands-off equipment.</strong> You may not repair, open or disconnect any part of the system.</li>
          </ul>
          <p>
            If your roof may need replacing during the term, that single no-cost removal matters. Get the roof
            looked at before you apply; <Link href="/blog/is-my-roof-good-for-solar-california">our roof suitability guide</Link>{' '}
            explains what to check, and <Link href="/blog/solar-panel-removal-reinstall-cost">removal and reinstall costs</Link>{' '}
            covers what a removal involves on a system you own.
          </p>
        </section>

        <section>
          <h2>Maintenance, problems and safety</h2>
          <p>
            LADWP “has the sole responsibility for the operation” of the system, and all repairs are done by LADWP
            or people it authorizes, according to the guidelines. Report problems to LADWP’s solar line at
            1-866-484-0433. The guidelines tell homeowners not to attempt repairs, open cabinets, touch exposed
            wiring or disconnect modules, because hazardous voltage can be present. If you notice a leak under
            the array, report it to LADWP and document it; <Link href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after solar</Link>{' '}
            lists the evidence to collect.
          </p>
        </section>

        <section>
          <h2>Selling your home, leaving early and the end of the term</h2>
          <p>
            If you sell, the buyer steps into your agreement. You must notify Community Solar staff at least 30
            days before the transfer, and a buyer who doesn’t want the system can submit a termination notice.
            After the first year, either side may end the agreement with 60 days’ written notice; leaving before a
            prepaid year is up means paying back a prorated share of that prepayment. At early termination or the
            end of the term, LADWP removes the system within 60 days at its own cost. The guidelines say that if
            it doesn’t, the equipment is considered abandoned and what happens to it is up to you.{' '}
            <Cite publisher="LADWP" href={LADWP_GUIDE} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>Solar Rooftops compared with owning or leasing solar</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Solar Rooftops compared with owned and leased solar</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Question</th>
                  <th className={th}>Solar Rooftops</th>
                  <th className={th}>Owned or leased system</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>Who gets the power</th><td className={td}>LADWP</td><td className={td}>Your home first, exports to the grid</td></tr>
                <tr className="border-t"><th scope="row" className={th}>What you receive</th><td className={td}>Fixed roof payment</td><td className={td}>A lower bill, depending on use and rates</td></tr>
                <tr className="border-t"><th scope="row" className={th}>What you pay</th><td className={td}>No program fees, per LADWP</td><td className={td}>Purchase, loan or lease payments</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Maintenance</th><td className={td}>LADWP</td><td className={td}>You, or the leasing company</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Which is better depends on your bill and your roof. If a high bill is the reason you are looking,
            start with <Link href="/blog/why-is-my-ladwp-bill-so-high">why LADWP bills run high</Link>; for
            renting panels that serve your own home, see <Link href="/blog/rent-solar-panels-for-your-home-california">solar leases and PPAs</Link>;
            and for subscription options, see <Link href="/blog/is-community-solar-worth-it">whether community solar is worth it</Link>.
            Tile-roofed homes don’t meet the fact sheet’s composite-shingle requirement, so{' '}
            <Link href="/blog/solar-panels-tile-roof-california">solar on a tile roof</Link> is the route to read
            if that is your roof. If your home is outside LADWP’s service area, see{' '}
            <Link href="/blog/lease-roof-for-solar-panels">how roof leases work outside Los Angeles</Link> and the
            contract terms to check before you sign one.
          </p>
        </section>

        <section>
          <h2>How to apply</h2>
          <ul>
            <li><strong>Online:</strong> log into or create an LADWP account and choose the Solar Rooftops application from the rebates and programs list.</li>
            <li><strong>Mail or email:</strong> download the PDF application from LADWP’s program page and send it to the Solar Rooftops Program Manager address shown there.</li>
            <li><strong>Phone:</strong> (866) 484-0433.</li>
          </ul>
          <p>
            LADWP’s page also says the program “shall at all times be subject to change or termination without
            notice,” so read the lease agreement you are offered, not just this summary.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
