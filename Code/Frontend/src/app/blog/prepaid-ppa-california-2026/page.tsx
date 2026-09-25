// 2026-09-23 upgrade (topical-authority wave, agent costfin): opening answer
// now defines a prepaid PPA; added "Can you buy out a solar PPA?", the
// prepaid-lease distinction (the "prepaid lease" impressions now have their own
// page at /blog/prepaid-lease-solar), a FAQ and the financing hub block.
// Removed the installer-marketing citations (Sunrun, Palmetto, Tesla): installer
// pages are not sources on this site. Every remaining figure was re-fetched on
// 2026-09-23. The prior body is in git history.
// 2026-09-23 Tier 2 (agent costfin): added "Solar PPAs in California: the rules
// that apply to any PPA" for the "ppa solar california" / "power purchase
// agreement california" cluster (CPUC guide, DG Stats), linking the PPA
// explainer, the PPA-company page and the commercial PPA page.
import type { Metadata } from "next";
import { CRR_SOCIAL_CARD, crrTwitter } from "@/lib/crr-social";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";
import { HubSpokeLinks } from "@/components/growth/HubSpokeLinks";
import { SolarInquiry } from "@/components/growth/SolarInquiry";
import type { FaqJsonLdItem } from "@/components/shared/FaqJsonLd";

const CPUC_GUIDE =
  "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide";
const CPUC_NEM = "https://www.cpuc.ca.gov/NEM/";
const IRS_25D = "https://www.irs.gov/credits-deductions/residential-clean-energy-credit";
const DG_STATS = "https://www.californiadgstats.ca.gov/charts/nem/";
const SUNRUN_10K =
  "https://www.sec.gov/Archives/edgar/data/1469367/000162828026012289/run-20251231.htm";
const SUNNOVA_8K =
  "https://www.sec.gov/Archives/edgar/data/1772695/000177269525000105/nova-20250608.htm";

const sources: Source[] = [
  { label: "CPUC: California Solar Consumer Protection Guide", url: CPUC_GUIDE },
  {
    label: "CPUC: CSLB solar disclosure documents",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/cslb-disclosure-documents",
  },
  { label: "CPUC: net energy metering and the Net Billing Tariff", url: CPUC_NEM },
  { label: "IRS: Residential Clean Energy Credit", url: IRS_25D },
  {
    label: "Sunnova Energy International: Form 8-K (Item 1.03), filed 2025-06-09",
    url: SUNNOVA_8K,
  },
  {
    label: "California Distributed Generation Statistics (CPUC-authorized): residential ownership by type, data through May 31, 2026",
    url: DG_STATS,
  },
  {
    label: "Sunrun Inc.: Form 10-K for fiscal year 2025, filed February 26, 2026 (prepaid production true-up)",
    url: SUNRUN_10K,
  },
];

const metaTitle = "Prepaid Solar Power (PPA) in California: 5 Terms to Check";
const metaDescription =
  "Prepaid solar power, or a prepaid PPA, pays upfront for a system's power while the provider owns it. What is still owed, buyout, sale and the bill left.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "/blog/prepaid-ppa-california-2026" },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "article",
    url: "https://ratereliefca.com/blog/prepaid-ppa-california-2026",
    modifiedTime: "2026-09-23T00:00:00Z",
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const faqs: FaqJsonLdItem[] = [
  {
    question: "What is a prepaid PPA?",
    answer:
      "It is a power purchase agreement where you pay upfront for electricity the system is expected to produce, instead of paying a per-kWh solar bill each month. The provider still owns the system. The CPUC's question list asks whether you can make a down payment to reduce the kilowatt-hour rate on a PPA; a prepaid PPA takes that to its end point.",
  },
  {
    question: "Can you buy out a solar PPA?",
    answer:
      "Often, but only on the contract's terms. The CPUC warns that if you sell or end early you might have to buy out the contract, 'which could be thousands of dollars,' and suggests asking whether you would owe a balloon payment or an early termination fee. Get the buyout formula in writing before you sign or prepay.",
  },
  {
    question: "Is a prepaid PPA better than a monthly PPA?",
    answer:
      "It removes the monthly solar bill and any escalator on it, but you pay the whole contract's worth of electricity before the system has produced any of it. Compare the prepaid price with the total of the monthly schedule, with a cash price for the same system, and with the utility bill that remains in each case.",
  },
  {
    question: "Does a prepaid PPA qualify for the federal solar tax credit?",
    answer:
      "Not for you. The provider owns the system. The IRS says the homeowner Residential Clean Energy Credit is not available for any property placed in service after December 31, 2025, and it was never a credit for buying electricity.",
  },
];

export default function PrepaidPpaCalifornia2026() {
  return (
    <DecisionPage
      title="Prepaid solar PPA in California: contract checklist for 2026"
      intro="A prepaid PPA is a power purchase agreement where you pay upfront for the electricity the system is expected to make, instead of a per-kWh bill each month. The solar provider still owns the system. Paying first does not settle future charges, buyout, transfer at a sale or the utility bill you keep."
      path="/blog/prepaid-ppa-california-2026"
      sources={sources}
      sourceCheckedDate="2026-09-23"
      contentModifiedDate="2026-09-23"
      topic="Prepaid solar PPA comparison"
      inquiry={<SolarInquiry utility="" topic="Prepaid solar PPA comparison" market="CA" />}
      faqs={faqs}
      breadcrumbs={[{ label: "Leases, PPAs and financing", href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california" }]}
      breadcrumbLabel="Prepaid solar PPA"
    >
      <section>
        <h2>What prepaid solar power actually buys</h2>
        <p>
          The CPUC describes a PPA this way: &ldquo;you typically pay for all the
          power the solar system generates (at a fixed per-kilowatt-hour
          rate),&rdquo; and &ldquo;the solar provider owns the system on your
          property.&rdquo; Its question list for PPA shoppers includes: &ldquo;Is
          there an option to make a down payment to reduce my monthly payments (for a
          lease) or kilowatt-hour rate (for a PPA)?&rdquo; (
          <a className="underline" href={CPUC_GUIDE}>
            CPUC, California Solar Consumer Protection Guide
          </a>
          , checked September 23, 2026.) A prepaid PPA is that option taken all the
          way: you pay for the expected electricity at the start.
        </p>
        <p className="mt-3">
          So &ldquo;prepaid solar power&rdquo; or &ldquo;prepaid solar energy&rdquo;
          means electricity you have paid for before it is made, from equipment you do
          not own. Where your payments sit within the four ways to pay for solar is
          set out in{" "}
          <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
            the lease, PPA, loan and cash comparison
          </Link>
          .
        </p>
        <p className="mt-3">
          Do not assume that prepaid means no future payment, no escalator, no
          transfer requirement or ownership. Ask the provider to point to the exact
          contract clause for each answer.
        </p>
      </section>

      <section>
        <h2>Solar PPAs in California: the rules that apply to any PPA</h2>
        <p>
          Prepaid or monthly, a residential power purchase agreement in California comes with the
          same state protections. PPAs are also the most common way Californians go solar without
          buying: California Distributed Generation Statistics shows PPAs were about 42% of
          residential solar projects at PG&amp;E, SCE and SDG&amp;E that received permission to
          operate in 2025 (
          <a className="underline" href={DG_STATS}>
            DG Stats
          </a>
          , data through May 31, 2026, checked September 23, 2026). Before you sign any PPA, the
          CPUC&rsquo;s consumer guide says (
          <a className="underline" href={CPUC_GUIDE}>
            CPUC
          </a>
          , checked September 23, 2026):
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            The provider&rsquo;s CSLB license &ldquo;must be active and in classification C-46 (Solar
            Contractor), C-10 (Electrical Contractor), or B (General Building Contractor).&rdquo;
          </li>
          <li>
            By law the provider must give you a completed Solar Energy System Disclosure Document: a
            cover page showing the total costs and supporting information with a standardized bill
            savings estimate.
          </li>
          <li>
            Savings estimates may assume utility rates rise by no more than 10% a year, and
            &ldquo;electricity bill savings estimates do not guarantee savings.&rdquo;
          </li>
          <li>
            You have at least three business days to cancel for any reason, or five if you are 65 or
            older.
          </li>
        </ul>
        <p className="mt-3">
          How a monthly PPA works from start to finish is in{" "}
          <Link className="underline" href="/blog/solar-ppa-explained-california">
            solar PPAs explained
          </Link>
          , and how to choose between providers in{" "}
          <Link className="underline" href="/blog/solar-ppa-companies">
            how to compare solar PPA companies
          </Link>
          . A business weighing a PPA should read{" "}
          <Link className="underline" href="/commercial-solar/commercial-solar-ppa-vs-purchase-california">
            commercial solar PPA vs purchase
          </Link>
          ; the rules and tax position differ.
        </p>
      </section>

      <section>
        <h2>Prepaid PPA or prepaid lease?</h2>
        <p>
          Both move the payments to the start and both leave the provider owning the
          system. A prepaid lease pays ahead for scheduled lease payments. A prepaid
          PPA pays ahead for electricity at a per-kWh price, so ask what happens if the
          system produces more or less than the amount you prepaid for: is there a
          true-up, a refund or a minimum energy guarantee? One provider&apos;s annual report
          shows what a written answer looks like: Sunrun says that if a prepaid system&apos;s
          estimated production is less than actual production &ldquo;after the first full one to
          two years of the agreement, prepaid customers are refunded the difference at the end of
          each such year,&rdquo; and extra production is theirs at no charge (
          <a className="underline" href={SUNRUN_10K}>
            Sunrun Form 10-K, filed February 26, 2026
          </a>
          ). Other contracts differ. The lease version has{" "}
          <Link className="underline" href="/blog/prepaid-lease-solar">
            its own guide to prepaid solar leases
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Put these terms in one comparison sheet</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Prepaid PPA contract comparison checklist
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Question</th>
                <th className="p-4">Document to check</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Who owns the system?</th>
                <td className="p-4">The agreement&apos;s ownership, maintenance and insurance terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What will be paid over the full term?</th>
                <td className="p-4">The prepaid amount, every future payment, escalation formula, taxes and fees.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Can the customer buy out or end the agreement?</th>
                <td className="p-4">The buyout, early-termination and end-of-term sections; do not rely on a verbal estimate.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What happens when the home is sold?</th>
                <td className="p-4">The transfer, assumption, payoff and credit-review requirements in the contract.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What utility bill remains?</th>
                <td className="p-4">The proposal&apos;s tariff, production, onsite-use, imports, exports and remaining-charge assumptions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Can you buy out a solar PPA?</h2>
        <p>
          Usually there is a way out, but it is priced by the contract, not by law.
          The CPUC warns that ending a lease or PPA early can mean you &ldquo;might
          have to buy out the contract, which could be thousands of dollars,&rdquo;
          and puts two questions on its list: &ldquo;What happens if I wish to end the
          lease or PPA early?&rdquo; and &ldquo;If I end my agreement early, will I owe
          a balloon payment and/or an early termination fee? If so, how much will I
          owe?&rdquo;
        </p>
        <p className="mt-3">
          On a prepaid PPA, ask two more: does a buyout credit the electricity you
          already paid for but have not received, and is the buyout price a formula
          you can calculate yourself for any year of the contract? Get both answers
          in the contract, not in an email.
        </p>
      </section>

      <section>
        <h2>Compare the full payment obligation, not the first number</h2>
        <p>
          The CPUC&apos;s first two questions for any lease or PPA are &ldquo;What is
          the total cost of the solar system or solar energy over the entire course of
          the contract?&rdquo; and &ldquo;How much will I pay up front, how much over
          time, and for how long?&rdquo; For a prepaid offer, ask for the full schedule
          even if the proposal leads with one payment. Compare it with the cash price
          and with any loan, lease or monthly-PPA proposal on the same system design
          and utility-use assumptions.
        </p>
        <p className="mt-3">
          Then add the utility bill that remains. On PG&amp;E, SCE and SDG&amp;E, new
          solar customers take service on the Net Billing Tariff, which credits
          exported electricity at values the CPUC says are &ldquo;usually lower than
          the retail rate&rdquo; (
          <a className="underline" href={CPUC_NEM}>
            CPUC
          </a>
          , checked September 24, 2026). You have prepaid for every kWh the system
          makes, including the ones you export for a smaller credit.
        </p>
      </section>

      <section>
        <h2>Who claims the tax benefits</h2>
        <p>
          Prepaying does not change who owns the system, and ownership decides who
          can claim a credit tied to it. The homeowner credit is gone for new
          systems anyway: the IRS says the Residential Clean Energy Credit &ldquo;is
          not available for any property placed in service after December 31,
          2025&rdquo; (
          <a className="underline" href={IRS_25D}>
            IRS
          </a>
          , checked September 23, 2026). The provider may have its own business tax
          position. That is not a credit you claim and not a promised price cut. This
          page found no source stating whether a prepaid PPA provider issues a 1099 or
          any other tax form for the arrangement; ask the provider in writing what tax
          documents, if any, it sends, and ask a tax professional about your own
          return. What California still offers is in{" "}
          <Link className="underline" href="/blog/california-solar-tax-credit-2026">
            California solar incentives in 2026
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Review California disclosure documents before signing</h2>
        <p>
          California&apos;s consumer-protection materials direct solar customers to
          review the Solar Energy System Disclosure Document and supporting
          information, along with the contract and any separate financing papers.
          Check the contractor license and the salesperson registration where
          applicable. Keep a copy of every signed version and change order.
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Ask for the complete agreement and all exhibits before deciding.</li>
          <li>Confirm the contractor, salesperson and equipment named in the documents.</li>
          <li>Compare the prepaid structure with cash, loan, lease and monthly-PPA documents on the same design.</li>
          <li>Check home-sale, roof-work, removal, repair and end-of-term terms before signing.</li>
        </ol>
      </section>

      <section>
        <h2>What happens if the provider stops operating</h2>
        <p>
          The CPUC names the risk in its guide: &ldquo;Solar provider could go out of
          business during the contract period&rdquo; (CPUC, checked September 23,
          2026). It has happened to a large residential provider: Sunnova Energy
          International and two affiliates filed Chapter 11 petitions on June 8, 2025,
          in the U.S. Bankruptcy Court for the Southern District of Texas, and said
          they planned to keep operating while pursuing asset sales under the
          court&apos;s supervision (
          <a className="underline" href={SUNNOVA_8K}>
            Sunnova, Form 8-K, filed June 9, 2025
          </a>
          ). What that filing means for customers is covered in the{" "}
          <Link className="underline" href="/solar-installers/sunnova-review">
            Sunnova review
          </Link>
          .
        </p>
        <p className="mt-3">
          One point is specific to prepaying: if a provider fails after you have paid
          in full, that money is already spent, while a monthly customer&apos;s future
          payments simply stop. Get warranty, maintenance and production-guarantee
          terms in writing before prepaying, including what happens if the company is
          sold or shuts down.
        </p>
      </section>

      <section>
        <h2>A referral request does not select a payment model</h2>
        <p>
          California Rate Relief is a referral service. We are not a licensed contractor. A
          request for a review does not approve a PPA, determine a price or tax result, or
          promise a buyout, savings or provider availability. Review the written
          documents from any provider before choosing a payment structure.
        </p>
      </section>
      <RelatedGuides
        heading="Terms to price before prepaying"
        links={[
          { href: "/solar-problems/solar-escalator-clause-explained", label: "What an escalator does when it is not prepaid" },
          { href: "/solar-problems/solar-dealer-fees-explained", label: "Where the fee sits inside the price" },
          { href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa", label: "How a PPA differs from a lease" },
          { href: "/blog/what-happens-to-solar-lease-when-i-sell-california", label: "What happens to the agreement if the home is sold" },
          // claude/ca-financing-20260918
          { href: "/blog/is-it-better-to-buy-or-lease-solar-panels-california", label: "Buying versus a third-party structure in 2026" },
          { href: "/blog/how-much-does-it-cost-to-lease-solar-panels-california", label: "What determines a lease or PPA payment" },
        ]}
      />
      <HubSpokeLinks hub="financing" currentPath="/blog/prepaid-ppa-california-2026" />
    </DecisionPage>
  );
}
