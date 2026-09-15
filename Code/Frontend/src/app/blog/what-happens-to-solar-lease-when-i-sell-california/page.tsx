import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "CSLB: Solar requirements and disclosure information",
    url: "https://www.cslb.ca.gov/Consumers/Solar_Requirements.aspx",
  },
  {
    label: "CSLB: Solar Smart consumer guide",
    url: "https://www.cslb.ca.gov/Consumers/Solar_Smart/",
  },
];

export const metadata: Metadata = {
  title: "Selling a CA Home With a Solar Lease or PPA: What to Check",
  description:
    "Selling a California home with a solar lease or PPA? Check the transfer, payment, buyout, and disclosure terms in the signed agreement first.",
  alternates: {
    canonical: "/blog/what-happens-to-solar-lease-when-i-sell-california",
  },
  openGraph: {
    title: "Selling a California home with a solar lease or PPA: documents to check",
    description:
      "A contract-first checklist for a California home sale involving a solar lease or PPA.",
    type: "article",
    url: "https://ratereliefca.com/blog/what-happens-to-solar-lease-when-i-sell-california",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
};

export default function SolarLeaseHomeSaleCA() {
  return (
    <DecisionPage
      title="Selling a California home with a solar lease or PPA: documents to check"
      intro="A solar lease or power-purchase agreement can continue beyond a home sale. The contract controls the available transfer, payment and end-of-term paths, so collect the documents before listing rather than relying on a general rule."
      path="/blog/what-happens-to-solar-lease-when-i-sell-california"
      sources={sources}
      sourceCheckedDate="2026-09-11"
      topic="Solar lease or PPA home-sale review"
    >
      <section>
        <h2>Start with the signed agreement</h2>
        <p>
          The CPUC explains that solar leases and power-purchase agreements
          usually have long terms, and that a seller may need to transfer the
          agreement or address the remaining obligation when selling the home.
          The applicable contract and disclosures determine what is available
          in a particular sale.
        </p>
        <p className="mt-3">
          Do not assume a buyer will qualify, that a buyout is available, or
          that a transfer will happen on a particular timetable. Ask the
          provider to identify the exact contract section that answers each
          question and keep its answer in writing.
        </p>
      </section>

      <section>
        <h2>Put the home-sale terms on one sheet</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Solar lease or PPA home-sale document checklist
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Question</th>
                <th className="p-4">Document or clause to review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Who owns the system?</th>
                <td className="p-4">The agreement&apos;s ownership, maintenance and insurance terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Can the agreement transfer to a buyer?</th>
                <td className="p-4">The transfer or assignment section, including any provider review and the buyer documents it requires.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What payment obligation remains?</th>
                <td className="p-4">The payment schedule, escalator, taxes, fees and any early-termination or payoff terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What happens at the end of the term?</th>
                <td className="p-4">The end-of-term, renewal, purchase and removal provisions.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What records exist for the transaction?</th>
                <td className="p-4">The signed agreement, disclosure documents, amendments, provider correspondence and any separate financing papers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Common paths need written confirmation</h2>
        <p>
          A provider may describe a contract transfer, a payoff or buyout, or
          another contract solution. Those labels do not establish the price,
          availability, timing, buyer requirements or final responsibility.
          Request the current written terms from the provider before making a
          listing or closing decision.
        </p>
        <p className="mt-3">
          The CPUC tells homeowners to ask what happens if they sell the home,
          whether a buyer must qualify and whether transfer or early-termination
          charges apply. Those are contract questions, not universal California
          outcomes.
        </p>
      </section>

      <section>
        <h2>Collect documents before listing</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Find the complete signed solar agreement and every amendment or change order.</li>
          <li>Request the provider&apos;s current written home-sale or transfer instructions.</li>
          <li>List the remaining payment, escalator, payoff and end-of-term terms from the contract.</li>
          <li>Give the relevant documents to the professionals handling the sale so they can address the actual agreement.</li>
          <li>Keep written confirmation of any provider instruction, quote or completed contract step.</li>
        </ol>
      </section>

      <section>
        <h2>Use the California disclosure documents</h2>
        <p>
          CSLB states that California solar disclosure materials must address
          how financing, lease or PPA terms can affect a sale of the home,
          including the consequences if an agreement is not assigned. The same
          materials and the signed agreement are the starting point for a
          property-specific review.
        </p>
        <p className="mt-3">
          CSLB&apos;s consumer guidance also advises customers to check escalator,
          sale, early-exit and performance terms before signing. For a pending
          sale, review those terms again rather than relying on a sales
          presentation or a general internet estimate.
        </p>
      </section>

      <section>
        <h2>A referral request does not resolve a home sale</h2>
        <p>
          California Rate Relief is a private referral service. A request for a
          review does not approve a transfer, determine a payoff, promise a
          buyer outcome or establish a sale timeline. Review written documents
          from the provider and the professionals handling the transaction
          before choosing a path.
        </p>
        <p className="mt-3">
          For the underlying payment structures, use the <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">California payment-option comparison</Link> to organize cash, loan, lease and PPA documents separately.
        </p>
      </section>
    </DecisionPage>
  );
}
