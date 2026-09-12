import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const lbnlReport =
  "https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf";

const sources: Source[] = [
  {
    label: "Lawrence Berkeley National Laboratory: 2026 Distributed Solar and Storage Data Update",
    url: lbnlReport,
  },
  {
    label: "CPUC: California Solar Consumer Protection Guide (proposal and contract questions)",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
];

export const metadata: Metadata = {
  title: "Commercial solar installation cost in California: quote checklist",
  description:
    "A commercial solar installation price depends on the actual scope. Compare system size, cash price, site work, ownership, utility assumptions and contract terms in writing.",
  alternates: { canonical: "/blog/commercial-solar-installation-cost-california" },
  openGraph: {
    title: "Commercial solar installation cost in California: quote checklist",
    description:
      "How to compare a California commercial solar installation quote without treating a generic price range as a project estimate.",
    type: "article",
    url: "https://ratereliefca.com/blog/commercial-solar-installation-cost-california",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
};

function CommercialInquiry() {
  return (
    <section id="solar-inquiry" className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
      <h2>Discuss a commercial solar project</h2>
      <p>
        California Rate Relief is a private referral service. A commercial
        assessment request does not establish a project price, tax result,
        utility outcome, financing approval or provider availability.
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

export default function CommercialSolarInstallationCostCalifornia() {
  return (
    <DecisionPage
      title="Commercial solar installation cost in California: quote checklist"
      intro="A commercial solar installation price depends on the technical scope, site conditions, contract structure and date of the proposal. Compare written bids for the same project instead of treating a general price range, tax claim or utility estimate as a project quote."
      path="/blog/commercial-solar-installation-cost-california"
      sources={sources}
      sourceCheckedDate="2026-09-11"
      topic="Commercial solar cost and quote review"
      commercial
      inquiry={<CommercialInquiry />}
    >
      <section>
        <h2>Start with the same technical project</h2>
        <p>
          A useful cost comparison begins with a single written scope. Ask every
          bidder to identify the DC system size, equipment, roof, ground-mount or
          canopy scope, electrical upgrades, storage, interconnection work,
          permits, engineering and service responsibilities.
        </p>
        <p className="mt-3">
          If the scopes differ, the total prices do not describe the same project.
          A lower number can omit site work, roof work, storage, electrical work
          or a later contract obligation.
        </p>
      </section>

      <section>
        <h2>Use historical benchmarks only as context</h2>
        <p>
          Lawrence Berkeley National Laboratory&apos;s data update reports historical
          installed-price observations for defined project types. Those observations
          are useful context, but they are not a current bid or a prediction for a
          particular California property, ownership model or construction scope.
        </p>
        <p className="mt-3">
          For the cited California 2025 host-owned, stand-alone non-residential
          benchmark details, see the <Link className="underline" href="/commercial-solar/cost-per-watt-california">commercial solar cost benchmark</Link>. Do not apply a historical median to a different system and call it a project price.
        </p>
      </section>

      <section>
        <h2>Ask every bidder for these line items</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Commercial solar installation quote checklist
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Category</th>
                <th className="p-4">What to receive in writing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">System and site</th>
                <td className="p-4">DC size, equipment, layout, roof/canopy/ground scope, structural work, electrical upgrades and exclusions.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Cash price</th>
                <td className="p-4">A line-item cash price, taxes, fees, allowances, change-order conditions and which costs are outside the bid.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Utility and production</th>
                <td className="p-4">Production assumptions, tariff and load inputs, grid imports and exports, demand assumptions, interconnection responsibilities and remaining-bill assumptions.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Ownership and service</th>
                <td className="p-4">Owner, maintenance, monitoring, insurance, warranties, roof access, removal, transfer and end-of-term terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Payment structure</th>
                <td className="p-4">Every payment, financing or PPA term, escalation, fee, security interest, default term and sale/refinancing condition.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Separate price from finance and tax assumptions</h2>
        <p>
          First compare the same cash project price and physical scope. Then put
          financing, lease, PPA, tax and incentive assumptions on separate rows.
          A payment illustration does not replace the cash price, and a claimed
          incentive or tax result is not a reduction that applies to every owner
          or project.
        </p>
        <p className="mt-3">
          Ask the relevant utility, lender, tax professional and project parties
          to confirm current terms that apply to the specific site and ownership
          structure. Do not use a marketing estimate as a financing approval or a
          tax determination.
        </p>
      </section>

      <section>
        <h2>Check the contract before comparing savings</h2>
        <p>
          The CPUC consumer guide advises customers to review the written contract,
          payment terms and proposal assumptions. The principle applies to a
          commercial bid as well: identify who supplies the assumptions, what
          happens when conditions change and which party bears each responsibility.
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Request full proposals and every contract exhibit before deciding.</li>
          <li>Match technical scope and cash price across bidders.</li>
          <li>List production, tariff, incentive and remaining-bill assumptions beside their sources and dates.</li>
          <li>Review ownership, service, finance and property-transfer terms separately.</li>
          <li>Keep the final contract, change orders and supporting projections together.</li>
        </ol>
      </section>
    </DecisionPage>
  );
}
