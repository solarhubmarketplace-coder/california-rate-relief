import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label: "CPUC: California Solar Consumer Protection Guide (ownership and PPA structure)",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "California State Treasurer: PACE background and history",
    url: "https://www.treasurer.ca.gov/caeatfa/pace/background",
  },
  {
    label: "U.S. Small Business Administration: 7(a) loans",
    url: "https://www.sba.gov/funding-programs/loans/7a-loans",
  },
];

export const metadata: Metadata = {
  title: "Commercial solar financing in California: documents to compare",
  description:
    "Compare ownership, payment, transfer, utility and project documents for a California commercial solar proposal before selecting a financing structure.",
  alternates: { canonical: "/blog/commercial-solar-financing-california" },
  openGraph: {
    title: "Commercial solar financing in California: documents to compare",
    description:
      "A contract-first checklist for California commercial solar financing proposals.",
    type: "article",
    url: "https://ratereliefca.com/blog/commercial-solar-financing-california",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
};

function CommercialInquiry() {
  return (
    <section id="solar-inquiry" className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
      <h2>Discuss a commercial solar project</h2>
      <p>
        California Rate Relief is a private referral service. A commercial
        assessment request does not approve financing, select a lender or PPA
        provider, establish utility eligibility, or promise a price, savings or
        project outcome.
      </p>
      <Link
        href="/commercial-assessment"
        className="mt-5 inline-block rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white"
      >
        Request a commercial assessment
      </Link>
    </section>
  );
}

export default function CommercialSolarFinancingCalifornia() {
  return (
    <DecisionPage
      title="Commercial solar financing in California: documents to compare"
      intro="Commercial solar proposals can use a purchase, lender financing, a power-purchase agreement or a property-based assessment. The label does not determine the project cost, ownership, utility outcome or sale obligations. Compare the signed documents for the same technical project before choosing a structure."
      path="/blog/commercial-solar-financing-california"
      sources={sources}
      sourceCheckedDate="2026-09-11"
      topic="Commercial solar proposal review"
      commercial
      inquiry={<CommercialInquiry />}
    >
      <section>
        <h2>Start with one project scope</h2>
        <p>
          A financing comparison is useful only when each proposal describes the
          same project. Ask every provider to identify the system size, equipment,
          roof, canopy or ground-mount scope, electrical upgrades, battery scope,
          permits, interconnection work and service responsibilities separately.
        </p>
        <p className="mt-3">
          Then compare the cash price, every payment, ownership, production
          assumptions, remaining utility charges and end-of-term rights. A lower
          initial payment does not show the total obligation or decide which party
          will own and operate the equipment.
        </p>
      </section>

      <section>
        <h2>Put each financing structure on the same sheet</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Commercial solar financing document comparison checklist
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Structure</th>
                <th className="p-4">Questions that the documents must answer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Purchase or lender financing</th>
                <td className="p-4">Who owns the system, the cash price, every loan payment and fee, security or collateral terms, maintenance responsibility, and what happens on a property sale or refinancing.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Power-purchase agreement</th>
                <td className="p-4">Who owns and maintains the system, how electricity is measured and priced, the escalation formula, minimum or other payment duties, term, performance remedy, transfer and end-of-term terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Property Assessed Clean Energy (PACE)</th>
                <td className="p-4">Whether the property lies in a participating district, the assessment and property-tax collection terms, lender and title-holder consents, priority, transfer treatment, total payment and default terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Potential SBA-backed financing</th>
                <td className="p-4">Whether the actual project and borrower qualify, the lender&apos;s underwriting, collateral, rate, maturity, fees, guarantees and closing conditions. SBA program eligibility is not a project approval.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Understand ownership before comparing payments</h2>
        <p>
          The CPUC&apos;s consumer guide describes a purchase as a customer-owned
          system, while a power-purchase agreement generally has a provider own
          the equipment and sell the electricity it generates. Commercial
          agreements can be more complex, so the signed commercial contract—not
          a residential example or a sales label—controls the specific project.
        </p>
        <p className="mt-3">
          For any third-party-owned structure, obtain the written price schedule,
          annual change formula, operations and maintenance duties, insurance,
          roof-access rights, performance terms, transfer process and end-of-term
          options. Ask the provider to identify where each answer appears in the
          agreement.
        </p>
      </section>

      <section>
        <h2>PACE is property-based, so check the property documents</h2>
        <p>
          The California State Treasurer describes PACE as a way to finance clean
          energy improvements through an assessment on the local property-tax
          bill in authorized districts. The State also notes that the assessment
          is associated with the property and has priority over other
          property-based debts in a foreclosure.
        </p>
        <p className="mt-3">
          That makes title, existing-lender, district and sale documents central
          to a PACE review. Do not assume a program, funding source, consent,
          rate, term or transfer result is available at a particular property.
          Confirm the current local program and every proposed assessment term in
          writing before relying on it.
        </p>
      </section>

      <section>
        <h2>SBA programs are a lender conversation, not a solar quote</h2>
        <p>
          The SBA says that its 7(a) program can support uses including purchase
          and installation of machinery and equipment, subject to program and
          lender requirements. That general use does not establish that a
          specific solar project, borrower or term will qualify.
        </p>
        <p className="mt-3">
          If a proposal refers to SBA financing, request the actual lender term
          sheet and compare it with other offers. Separate the solar contractor&apos;s
          project proposal from the lender&apos;s financing agreement and do not
          treat a sales estimate as a lending approval.
        </p>
      </section>

      <section>
        <h2>Keep utility and tax assumptions separate</h2>
        <p>
          A financing model can include production, utility-bill, tax or
          incentive assumptions. Those are not guaranteed by the financing label.
          Put each assumption beside its source, observation date and party
          responsible for it. Obtain current utility and tax advice that applies
          to the actual customer, property, ownership model and project date.
        </p>
        <p className="mt-3">
          Do not subtract a claimed incentive, utility credit or tax result from
          a project price until the applicable source and eligibility have been
          confirmed for the proposed structure.
        </p>
      </section>

      <section>
        <h2>Documents to collect before a decision</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>A line-item technical scope and cash price for the same project.</li>
          <li>The proposed financing, lease, PPA or assessment agreement and every exhibit.</li>
          <li>A full payment schedule, including any escalation, fees, taxes and end-of-term terms.</li>
          <li>Written production, utility-tariff and remaining-bill assumptions.</li>
          <li>Written allocation of ownership, maintenance, insurance, roof or site access and removal obligations.</li>
          <li>Property-sale, transfer, refinancing, lender-consent and default provisions.</li>
          <li>Current tax, accounting and legal advice for the business and property before signing.</li>
        </ol>
      </section>
    </DecisionPage>
  );
}
