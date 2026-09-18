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
    label: "CSLB: Solar Smart consumer guide",
    url: "https://www.cslb.ca.gov/Consumers/Solar_Smart/",
  },
  {
    label: "CSLB: Check a contractor license or home-improvement salesperson registration",
    url: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  },
];

export const metadata: Metadata = {
  title: "Solar Panel Removal and Reinstall Quotes in California",
  description: "Before roof work or a solar-system change, compare the removal, storage, reinstallation, permit, warranty and contract terms in writing.",
  alternates: { canonical: "/blog/solar-panel-removal-reinstall-cost" },
  openGraph: {
    title: "Solar panel removal and reinstallation in California: quote checklist",
    description:
      "How to compare the scope and documents for a California solar removal and reinstallation project.",
    type: "article",
    url: "https://ratereliefca.com/blog/solar-panel-removal-reinstall-cost",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
};

export default function SolarPanelRemovalReinstallCost() {
  return (
    <DecisionPage
      title="Solar panel removal and reinstallation in California: quote checklist"
      intro="Roof work, a system change or a repair can require solar equipment to be removed and reinstalled. A statewide price range cannot show the actual scope, contract duties or site conditions, so obtain a written, itemized proposal before authorizing work."
      path="/blog/solar-panel-removal-reinstall-cost"
      sources={sources}
      sourceCheckedDate="2026-09-11"
      topic="Solar removal and reinstallation review"
    >
      <section>
        <h2>Start with ownership and written permission</h2>
        <p>
          Find the original solar agreement before arranging roof or equipment
          work. A customer-owned system, a lease and a PPA can assign different
          approval, access, maintenance and payment duties. The CPUC tells solar
          customers to read the contract and keep its terms in writing.
        </p>
        <p className="mt-3">
          Do not assume that the original installer, a roof contractor or a
          third-party owner must perform, approve or pay for removal and
          reinstallation. Ask the party named in the agreement to identify the
          applicable contract section and any required process before work starts.
        </p>
      </section>

      <section>
        <h2>Separate the work into written scopes</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Solar removal and reinstallation scope checklist
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Scope</th>
                <th className="p-4">What the written proposal should identify</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Solar work</th>
                <td className="p-4">Equipment inventory, removal, storage, reinstallation, electrical work, testing, monitoring and responsibility for equipment damage.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Roof or building work</th>
                <td className="p-4">The roof scope, materials, flashing or penetrations, exclusions, warranty and which contractor is responsible for each part.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Permits and utility steps</th>
                <td className="p-4">Who checks local permit, inspection and utility requirements, what is included, and what work would change the approved system configuration.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Contract changes</th>
                <td className="p-4">Every change order, payment, schedule, access right and warranty condition that applies to the work.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Get an itemized quote instead of a per-panel estimate</h2>
        <p>
          Request a written proposal that separates the solar scope from the roof
          scope. Ask each contractor to state whether the quote includes labor,
          equipment handling, storage, replacement parts, electrical work,
          permits, inspection, travel, roofing repairs, taxes, fees and possible
          change-order conditions.
        </p>
        <p className="mt-3">
          A panel count alone does not establish the work required at a particular
          roof, electrical system or contract. Compare proposals only after the
          bidders have seen the same scope and existing system documents.
        </p>
      </section>

      <section>
        <h2>Check the contractor and the documents together</h2>
        <p>
          The CPUC advises customers to verify contractor and, where applicable,
          home-improvement-salesperson information before signing solar work.
          Use the CSLB lookup for the business and individual named in the
          proposal, then confirm that the license, work scope and written contract
          match each other.
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Collect the original solar contract, proposal, permit records and any warranty documents.</li>
          <li>Ask for the license number and the responsible party for both solar and roof work.</li>
          <li>Read the original contract and the new proposal for access, removal, damage, service and warranty provisions.</li>
          <li>Keep the executed scope, change orders, photos, payment records and completion documents.</li>
        </ol>
      </section>

      <section>
        <h2>Do not make warranty assumptions</h2>
        <p>
          A product, installation, roof or service warranty can have different
          terms and exclusions. Before approving removal, ask each responsible
          company to identify in writing what remains covered, what documentation
          it requires and who handles a problem after the work is complete.
        </p>
        <p className="mt-3">
          CSLB advises consumers to get specific promises in writing and read the
          contract closely. That is particularly important when two trades and an
          existing solar agreement meet at the same roof.
        </p>
      </section>

      <section>
        <h2>Plan roof and solar work as one decision</h2>
        <p>
          The CPUC asks prospective customers to consider roof condition and to
          ask about the cost to remove and reinstall panels for future roof work.
          If a roof issue is already known, compare the roof and solar scopes at
          the same time instead of treating a solar removal quote as the entire
          project cost.
        </p>
        <p className="mt-3">
          See the <Link className="underline" href="/blog/free-roof-replacement-with-solar-panels-california">California roof-and-solar proposal checklist</Link> for the documents to keep separate in a combined offer.
        </p>
      </section>

      <section>
        <h2>A referral request does not arrange the work</h2>
        <p>
          California Rate Relief is a private referral service. A request for a
          review does not approve removal, choose a contractor, establish a price,
          confirm warranty coverage or determine who must pay. Compare the written
          documents from the responsible parties before authorizing work.
        </p>
      </section>
      <RelatedGuides
        heading="Who carries the cost, and what is excluded"
        links={[
          { href: "/solar-problems/solar-panel-degradation-california", label: "What 25 years of output actually looks like" },
          { href: "/solar-problems/solar-homeowners-insurance", label: "What the homeowner policy does and does not cover" },
        ]}
      />
    </DecisionPage>
  );
}
