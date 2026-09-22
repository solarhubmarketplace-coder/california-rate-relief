import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "CPUC: CSLB solar disclosure documents",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/cslb-disclosure-documents",
  },
  {
    label: "IRS: Residential Clean Energy Credit",
    url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
  {
    label: "Sunrun: What's a Solar Lease or PPA?",
    url: "https://sunrun.com/go-solar-center/solar-faq/whats-a-solar-lease-or-ppa",
  },
  {
    label: "Palmetto: LightReach",
    url: "https://palmetto.com/lightreach",
  },
  {
    label: "Tesla: Buying Out Your Tesla Solar Panel Lease",
    url: "https://tesla.com/learn/tesla-solar-lease-buyout-guide",
  },
  {
    label: "Sunnova Energy International: Form 8-K (Item 1.03), filed 2025-06-09",
    url: "https://sec.gov/Archives/edgar/data/1772695/000177269525000105/nova-20250608.htm",
  },
];

export const metadata: Metadata = {
  title: "Prepaid Solar PPA California: What to Check Before Signing",
  description:
    "A prepaid label does not decide ownership, future payments, buyout, transfer, or utility bills. Compare the signed contract, not the name.",
  alternates: { canonical: "/blog/prepaid-ppa-california-2026" },
  openGraph: {
    title: "Prepaid solar PPA in California: contract checklist for 2026",
    description:
      "How to compare a prepaid solar PPA with other California solar payment structures.",
    type: "article",
    url: "https://ratereliefca.com/blog/prepaid-ppa-california-2026",
    modifiedTime: "2026-09-22T00:00:00Z",
  },
};

export default function PrepaidPpaCalifornia2026() {
  return (
    <DecisionPage
      title="Prepaid solar PPA in California: contract checklist for 2026"
      intro="A prepaid solar PPA can involve a large upfront payment, but the name does not settle ownership, future payments, buyout, transfer or utility-bill results. Use the signed documents to compare it with other options."
      path="/blog/prepaid-ppa-california-2026"
      sources={sources}
      sourceCheckedDate="2026-09-22"
      topic="Prepaid solar PPA comparison"
    >
      <section>
        <h2>Start with the actual contract, not the label</h2>
        <p>
          A power-purchase agreement is generally an arrangement in which a
          provider owns the solar system and the customer pays for electricity
          it produces. A proposal described as &ldquo;prepaid&rdquo; may include one
          large payment, but the specific payment schedule, term and rights come
          from that agreement and its attached disclosures.
        </p>
        <p className="mt-3">
          Do not assume that prepaid means no future payment, no escalator, no
          transfer requirement or automatic ownership. Ask the provider to point
          to the exact contract clause for each answer.
        </p>
      </section>

      <section>
        <h2>How a prepaid PPA is actually structured</h2>
        <p>
          Most PPAs default to $0 down with a monthly rate. Palmetto&apos;s
          LightReach program describes itself as &ldquo;lower and more stable
          than your current utility bill, with no upfront cost,&rdquo; over a
          25-year term (Palmetto, accessed 2026-09-22). Prepaid is the
          alternative: Sunrun pays &ldquo;for the system equipment/energy
          cost upfront,&rdquo; and the customer will &ldquo;forgo the annual
          escalator and will not have a monthly solar bill&rdquo; (Sunrun,
          &ldquo;What&apos;s a Solar Lease or PPA?,&rdquo; accessed
          2026-09-22) — but Sunrun is explicit this is still &ldquo;without
          the hassle of ownership&rdquo;: the customer is buying electricity,
          not equipment. Tesla&apos;s own numbers show the range of upfront
          amounts across its options: about $600 to start a lease, roughly
          10% down on a loan, and full cost for cash (Tesla, &ldquo;Buying
          Out Your Tesla Solar Panel Lease,&rdquo; accessed 2026-09-22) —
          prepaid sits at the far end.
        </p>
        <p className="mt-3">
          What transfers at a home sale is governed by ownership, not
          payment timing — the same whether the customer paid monthly or
          prepaid. See{" "}
          <Link
            className="underline"
            href="/blog/what-happens-to-solar-lease-when-i-sell-california"
          >
            what happens to a solar lease when you sell in California
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
            <thead className="bg-slate-100">
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
        <h2>Compare the full payment obligation, not the first number</h2>
        <p>
          The CPUC consumer guide directs customers to review total and monthly
          costs, financing terms and standardized bill-savings assumptions. For
          a prepaid offer, ask for the full schedule even if a proposal emphasizes
          the initial payment. Compare that schedule with the cash price and with
          any loan, lease or monthly-PPA proposal on the same system design and
          utility-use assumptions.
        </p>
        <p className="mt-3">
          A smaller payment or a claimed provider tax benefit does not establish
          a lower lifetime cost. The proposal should identify the system, the
          payment obligation and the bill assumptions separately.
        </p>
      </section>

      <section>
        <h2>Keep homeowner tax treatment separate</h2>
        <p>
          The IRS states that the Residential Clean Energy Credit is unavailable
          for property placed in service after December 31, 2025. A provider&apos;s
          business tax position is not a homeowner credit or a guaranteed price
          reduction. Ask a tax professional about personal tax treatment and do
          not use a sales presentation as tax advice.
        </p>
      </section>

      <section>
        <h2>Who actually claims the incentives</h2>
        <p>
          Prepaying doesn&apos;t change who owns the system, and ownership
          decides who can claim a credit tied to it. Tesla says so directly
          for its own lease/PPA: Tesla &ldquo;claims the Section 48E
          investment tax credit and passes savings through&rdquo; to the
          customer, not the reverse (Tesla, accessed 2026-09-22). The
          homeowner-side credit, Section 25D, ended for new homeowner
          purchases as of January 1, 2026 per the same page — only relevant
          if buying outright, since under a PPA it was never the
          customer&apos;s credit: the IRS computes the Residential Clean
          Energy Credit on property the taxpayer acquires, and that credit
          is unavailable for property placed in service after December 31,
          2025 (IRS, accessed 2026-09-22). This page found no source stating
          whether a prepaid PPA provider issues a 1099 or any other tax form
          for the arrangement — don&apos;t assume either way; ask the
          provider in writing what tax documents, if any, it sends for a
          prepaid plan. A salesperson who suggests otherwise, or an LLC
          workaround, is a red flag California&apos;s guide names directly —
          see{" "}
          <Link className="underline" href="/blog/free-solar-panels-california">
            are free solar panels really free in California?
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
          CPUC&apos;s consumer guide names this as a real risk to raise
          before signing: a &ldquo;solar provider could go out of business
          during the contract period&rdquo; (CPUC, California Solar
          Consumer Protection Guide, accessed 2026-09-22) — flagged, not
          resolved. California has already seen it: Sunnova Energy
          International filed Chapter 11 on June 8, 2025, in the U.S.
          Bankruptcy Court for the Southern District of Texas (Sunnova, Form
          8-K, filed 2025-06-09, accessed 2026-09-22). Systems and contracts
          moved through a court process to a new operator, not into limbo.
          What that filing said, how Sunnova&apos;s dealer-based sales model
          shaped it, and what the company now tells customers, is covered in
          the{" "}
          <Link className="underline" href="/solar-installers/sunnova-review">
            Sunnova review
          </Link>
          .
        </p>
        <p className="mt-3">
          One point specific to prepaying: if a provider fails after the
          customer has paid in full, that money is already spent — a
          monthly customer&apos;s future payments simply stop. Get warranty,
          maintenance and production-guarantee terms in writing before
          prepaying, tied to what happens if the company is sold or shuts
          down.
        </p>
      </section>

      <section>
        <h2>A referral request does not select a payment model</h2>
        <p>
          California Rate Relief is a private referral service. A request for a
          review does not approve a PPA, determine a price or tax result, or
          promise a buyout, savings or provider availability. Review the written
          documents from any provider before choosing a payment structure.
        </p>
        <p className="mt-3">
          Use the <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">California payment-option comparison</Link> to put cash, loan, lease and PPA terms side by side.
        </p>
      </section>
      <RelatedGuides
        heading="Terms to price before prepaying"
        links={[
          { href: "/solar-problems/solar-escalator-clause-explained", label: "What an escalator does when it is not prepaid" },
          { href: "/solar-problems/solar-dealer-fees-explained", label: "Where the fee sits inside the price" },
          { href: "/blog/solar-ppa-vs-lease-california", label: "How a PPA differs from a lease" },
          { href: "/blog/what-happens-to-solar-lease-when-i-sell-california", label: "What happens to the agreement if the home is sold" },
          // claude/ca-financing-20260918
          { href: "/blog/is-it-better-to-buy-or-lease-solar-panels-california", label: "Buying versus a third-party structure in 2026" },
          { href: "/blog/how-much-does-it-cost-to-lease-solar-panels-california", label: "What determines a lease or PPA payment" },
        ]}
      />
    </DecisionPage>
  );
}
