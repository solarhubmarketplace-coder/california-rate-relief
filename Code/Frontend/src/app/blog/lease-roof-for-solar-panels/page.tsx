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

const PATH = '/blog/lease-roof-for-solar-panels';
const UPDATED = '2026-09-23';
const HUB = { label: 'Roofs and solar', href: '/blog/is-my-roof-good-for-solar-california' };
const metaTitle = 'Leasing Your Roof for Solar in California: How It Works';
const metaDescription =
  'Can you lease your roof for solar panels in California? Who pays homeowners for roof space, what LADWP pays, business roof deals and contract terms to check.';

const LADWP_SRP = 'https://www.ladwp.com/residential-services/solar-programs/solar-rooftops';
const LADWP_GUIDE = 'https://www.ladwp.com/sites/default/files/2026-01/Revised%20SRP%20Guidelines%20(BES%2011-3-25%20v.2).pdf';
const LADWP_FIT = 'https://www.ladwp.com/commercial-services/programs-and-rebates-commercial/feed-tariff-fit-program';
const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CPUC_COMMUNITY = 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/community-solar-in-california';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';

const sources: Source[] = [
  { label: 'LADWP: Solar Rooftops program page (payments, eligibility, how it works)', url: LADWP_SRP },
  { label: 'LADWP: Solar Rooftops Program Guidelines and lease agreement (revised, posted January 2026)', url: LADWP_GUIDE },
  { label: 'LADWP: Feed-in Tariff (FiT) program (pricing table updated September 18, 2026)', url: LADWP_FIT },
  { label: 'CPUC: California Solar Consumer Protection Guide (Version 4, 2025), leases and PPAs', url: CPUC_GUIDE },
  { label: 'CPUC: Community solar in California', url: CPUC_COMMUNITY },
  { label: 'CSLB: Solar Smart, license classes for solar work', url: CSLB_SOLAR },
];

const keyFacts: KeyFact[] = [
  {
    label: 'LADWP roof payment',
    value: '$360–$900 a year',
    note: 'Fixed, by system size, whatever the panels produce.',
    source: { publisher: 'LADWP', date: UPDATED, url: LADWP_SRP },
  },
  {
    label: 'LADWP lease term',
    value: 'Up to 20 years',
    note: 'From the date the system is installed and approved by LADBS.',
    source: { publisher: 'LADWP', date: UPDATED, url: LADWP_GUIDE },
  },
  {
    label: 'Who uses the power',
    value: 'The utility',
    note: 'LADWP owns the system and receives all the energy it generates.',
    source: { publisher: 'LADWP', date: UPDATED, url: LADWP_SRP },
  },
  {
    label: 'Business roofs, LA',
    value: '30 kW and up',
    note: 'LADWP’s Feed-in Tariff buys output from larger local projects.',
    source: { publisher: 'LADWP', date: UPDATED, url: LADWP_FIT },
  },
];

const faqs = [
  {
    question: 'Can I lease my roof for solar panels in California?',
    answer:
      'If you are an LADWP customer in an owner-occupied home, yes: its Solar Rooftops program installs and owns a system on qualifying roofs and pays a fixed yearly amount for the space. We found no comparable program for homes served by PG&E, SCE or SDG&E. Outside Los Angeles, roof leases are mostly deals between developers and owners of large commercial roofs.',
  },
  {
    question: 'How much do solar companies pay to lease your roof?',
    answer:
      'The one published residential figure in California is LADWP’s: $30 to $75 a month for the panels, set by system size, which is $360 to $900 a year for up to 20 years. Revised guidelines add $25 a month for a battery once they take effect. Business roof leases are negotiated privately, so there is no public rate.',
  },
  {
    question: 'Does leasing my roof lower my electric bill?',
    answer:
      'Not directly. In LADWP’s program the utility keeps all the power the panels make, and you receive a payment for the roof space instead. LADWP may pay it as on-bill credits, but your charges are still set by your own usage and rate. If lowering your bill is the goal, compare owning, a solar lease or a PPA, which all put the power to use in your home.',
  },
  {
    question: 'What happens to a roof lease if I sell my house?',
    answer:
      'That is set by the contract. Under LADWP’s guidelines the new owner takes your place in the agreement, you must notify the program at least 30 days before the transfer, and a buyer who doesn’t want to participate can give notice to end it. Ask any other roof tenant for the same terms in writing before you sign.',
  },
  {
    question: 'Is a roof lease the same as a solar lease?',
    answer:
      'No, the money runs in opposite directions. In a solar lease you pay a company to use panels on your roof and you use their power. In a roof lease the company or utility pays you for the space and keeps the power. Read the payment section of any offer to see which one you are being sold.',
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

export default function LeaseRoofForSolarPanels() {
  return (
    <PublicLayout breadcrumbLabel="Leasing your roof for solar" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Leasing your roof for solar panels in California: who pays, and what to check"
        url="https://ratereliefca.com/blog/lease-roof-for-solar-panels"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="How renting out roof space for solar works in California: LADWP's Solar Rooftops payments and terms, business roof leases, how a roof lease differs from a solar lease or PPA, and the contract terms to check."
      />
      <Header />
      <GuideShell
        title="Leasing your roof for solar panels in California: who pays, and what to check"
        eyebrow="Roofs and solar"
        crumbs={[HUB]}
        crumbLabel="Leasing your roof for solar"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="roof_structures"
        path={PATH}
        quickCheckTopic="Roof lease or solar for your home"
        leadCount={2}
        inquiry={<SolarInquiry topic="Roof lease or solar for your home" />}
      >
        <p>
          For a California home, leasing your roof for solar is possible mainly in Los Angeles. LADWP’s Solar
          Rooftops program puts a utility-owned system on qualifying owner-occupied homes and pays $360 to $900 a
          year for up to 20 years. The utility keeps all the power, so what you get is rent for the space, not cheaper electricity. Elsewhere, roof leases
          are mostly deals for large commercial roofs.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor. We don’t lease roofs or
          run any utility program; this guide explains how the arrangements work.
        </p>

        <section>
          <h2>Roof lease, solar lease and PPA: who pays whom</h2>
          <p>
            Three arrangements put someone else’s panels on your roof, and they are easy to confuse because
            salespeople use the word “lease” for more than one of them. The California Public Utilities
            Commission’s consumer guide describes the two common ones: “With a lease, the solar provider owns the
            system on your property and ‘rents’ it to you,” and in a power purchase agreement “the solar provider
            owns the system on your property and sells you the electricity it generates.”{' '}
            <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} /> A roof lease turns that around.
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Roof lease compared with a solar lease and a PPA</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Arrangement</th>
                  <th className={th}>Who owns the panels</th>
                  <th className={th}>Money flows</th>
                  <th className={th}>Who uses the power</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>Roof lease</th>
                  <td className={td}>Utility or developer</td>
                  <td className={td}>They pay you for the space</td>
                  <td className={td}>Them; it goes to the grid</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Solar lease</th>
                  <td className={td}>Solar company</td>
                  <td className={td}>You pay a set monthly amount</td>
                  <td className={td}>You</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>PPA</th>
                  <td className={td}>Solar company</td>
                  <td className={td}>You pay for each kWh produced</td>
                  <td className={td}>You</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            If an offer to “lease your roof” asks you to make monthly payments, it is a solar lease or PPA, not a
            roof lease. Those can be reasonable choices; they just answer a different question. Our guide to{' '}
            <Link href="/blog/rent-solar-panels-for-your-home-california">renting solar panels through a lease or PPA</Link>{' '}
            explains that side.
          </p>
        </section>

        <section>
          <h2>LADWP Solar Rooftops: California’s residential roof lease</h2>
          <p>
            LADWP describes the program in one line: “Customers receive a check for rooftop use—regardless of how
            much solar energy is produced.” It inspects the home, designs a 1 to 10 kW system, pulls the permit
            with the Los Angeles Department of Building and Safety, installs it and connects it to its grid.
            “LADWP owns the system and receives all energy generated.” Residential customers on rate schedules
            R1-A, R1-B, R1-D or R1-E may qualify, and homes must be owner-occupied.{' '}
            <Cite publisher="LADWP" href={LADWP_SRP} date={UPDATED} />
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">LADWP Solar Rooftops lease payment by system size</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>System size</th>
                  <th className={th}>Monthly lease payment</th>
                  <th className={th}>Most over 20 years</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>1 kW to under 2 kW</th><td className={td}>$30</td><td className={td}>$7,200</td></tr>
                <tr className="border-t"><th scope="row" className={th}>2 kW to 5 kW</th><td className={td}>$45</td><td className={td}>$10,800</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Over 5 kW to 8 kW</th><td className={td}>$60</td><td className={td}>$14,400</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Over 8 kW to 10 kW</th><td className={td}>$75</td><td className={td}>$18,000</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Source: LADWP Solar Rooftops Program Guidelines, Table 1.{' '}
            <Cite publisher="LADWP" href={LADWP_GUIDE} date={UPDATED} /> The revised guidelines add $25 a month
            for homes that also host an LADWP battery, but they take effect only when the City Council approves
            the revised lease agreement, so confirm with LADWP whether the battery option is open. Payments come as
            a prorated 12-month prepayment once the system is approved, then yearly prepayments or on-bill credits
            at LADWP’s choice; leave early and you repay the unused part of that year.
          </p>
          <p>
            The terms, application steps and eligibility details are covered in full in{' '}
            <Link href="/blog/ladwp-solar-rooftops-program">our LADWP Solar Rooftops guide</Link>.
          </p>
        </section>

        <section>
          <h2>Outside Los Angeles</h2>
          <p>
            We found no program that rents roof space from homeowners in PG&amp;E, SCE or SDG&amp;E territory. The
            CPUC’s community solar programs work the other way round: customers subscribe to off-site solar
            projects rather than host panels. Its DAC Green Tariff, for instance, serves income-qualified
            residential customers in disadvantaged communities “who may be unable to install solar on their roof.”{' '}
            <Cite publisher="CPUC" href={CPUC_COMMUNITY} date={UPDATED} /> Whether subscribing makes sense is covered in{' '}
            <Link href="/blog/is-community-solar-worth-it">is community solar worth it</Link>.
          </p>
          <p>
            Your own municipal utility may run something local, so check its website before assuming there is
            nothing. If a private company offers to pay you for roof space, ask what it will do with the power,
            which utility contract it sells under, and for its contractor license number, which you can check
            against CSLB’s list of classes allowed to install solar.{' '}
            <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>Business and large roofs</h2>
          <p>
            Roof leases are far more common on warehouses, schools and shopping centers, where a developer puts up
            a system large enough to sell power to a utility. In Los Angeles, LADWP’s Feed-in Tariff “allows
            property owners and developers to sell the output of local eligible renewable energy projects directly
            to LADWP” under a standard power purchase agreement of up to 20 years. Its pricing table starts at
            projects of 30 kW, and as of September 18, 2026 lists 14.5 cents per kWh for in-basin solar projects
            from 30 kW to 500 kW. <Cite publisher="LADWP" href={LADWP_FIT} date={UPDATED} />
          </p>
          <p>
            That price is what the utility pays the project. What a building owner receives depends on the lease
            with the developer: a fixed rent, a share of revenue, or owning the project outright. How developers
            secure a site, including roof leases, is covered in{' '}
            <Link href="/commercial-solar/solar-developers">what a solar developer does</Link>, and roof
            condition questions for commercial buildings are in{' '}
            <Link href="/commercial-solar/commercial-solar-roofing">commercial solar roofing</Link>.
          </p>
        </section>

        <section>
          <h2>Contract terms to check in any roof lease</h2>
          <p>
            A roof lease runs for decades, so the contract matters more than the monthly figure. LADWP’s guidelines
            answer most of these questions, which makes them a useful benchmark for any other offer.
          </p>
          <ul>
            <li><strong>Term and early exit.</strong> LADWP’s agreement runs 20 years from the date the system is installed and approved, and either side can end it with 60 days’ written notice after the first year.</li>
            <li><strong>Removal at the end.</strong> LADWP must remove its equipment at its own cost within 60 days of termination or expiration; equipment it leaves behind is treated as abandoned, and what happens to it is up to you.</li>
            <li><strong>Roof repairs.</strong> LADWP’s system can be removed twice at no expense to you: once for rooftop repairs and once at the end of the term. Ask any other tenant who pays to lift the array, and how many times.</li>
            <li><strong>Sale of the home.</strong> Under LADWP’s terms the new owner takes your place, you give 30 days’ notice before the transfer, and a buyer can choose to end the agreement.</li>
            <li><strong>Maintenance and safety.</strong> LADWP keeps sole responsibility for operating and repairing its system, and owners must not attempt repairs or open system cabinets.</li>
            <li><strong>Payments.</strong> Fixed or tied to production? LADWP’s are fixed, whatever the panels produce.</li>
          </ul>
          <p>
            <Cite publisher="LADWP" href={LADWP_GUIDE} date={UPDATED} /> For any other roof tenant, also ask who
            carries liability insurance for the equipment, whether the agreement will be recorded against your
            property, and how your roof warranty is affected. Have the roof checked first: a lease locks the roof
            under panels for years, and our <Link href="/blog/is-my-roof-good-for-solar-california">roof suitability guide</Link>{' '}
            covers what to look at.
          </p>
        </section>

        <section>
          <h2>Roof lease or your own system?</h2>
          <p>
            A roof lease and your own panels compete for the same roof, so you can’t easily have both. The trade
            is simple to state. A roof lease pays a small, fixed amount with no upfront cost and no maintenance,
            and leaves your electric bill where it was. Owning, leasing or signing a PPA for your own system puts
            the power to work on your bill, with more cost, paperwork and risk.
          </p>
          <p>
            To weigh the second route, start with{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">cash, loan, lease or PPA compared</Link>.
            If the roof itself is the obstacle, a{' '}
            <Link href="/blog/flat-roof-solar-panels">flat roof</Link> or{' '}
            <Link href="/blog/solar-panels-tile-roof-california">tile roof</Link> has its own guide. And if
            someone at the door promises “free” panels in exchange for your roof, read{' '}
            <Link href="/blog/are-solar-panels-a-scam">how to spot a solar scam</Link> before you sign anything.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
