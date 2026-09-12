import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "IRS: Residential Clean Energy Credit",
    url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
  {
    label: "CSLB: Check a contractor license or home-improvement salesperson registration",
    url: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  },
];

export const metadata: Metadata = {
  title: "Free roof replacement with solar in California: what to verify",
  description:
    "A solar proposal can include roof work, but a headline does not make a roof free. Compare the separate scope, contract, financing and license information before signing.",
  alternates: { canonical: "/blog/free-roof-replacement-with-solar-panels-california" },
  openGraph: {
    title: "Free roof replacement with solar in California: what to verify",
    description:
      "How to separate roof work, solar equipment and payment terms in a California proposal.",
    type: "article",
    url: "https://ratereliefca.com/blog/free-roof-replacement-with-solar-panels-california",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
};

export default function FreeRoofReplacementWithSolarCalifornia() {
  return (
    <DecisionPage
      title="Free roof replacement with solar in California: what to verify"
      intro="A solar proposal can include roof work, but a headline does not establish that the roof is free. Compare the roof, solar equipment and payment terms as separate pieces before signing."
      path="/blog/free-roof-replacement-with-solar-panels-california"
      sources={sources}
      sourceCheckedDate="2026-09-11"
      topic="Solar and roof proposal comparison"
    >
      <section>
        <h2>Start by separating “no money down” from “free”</h2>
        <p>
          A project may have no payment due at signing while still charging for
          roof work through a loan, lease, power-purchase agreement or other
          contract. The California Public Utilities Commission warns consumers
          to understand all costs over time rather than relying on a free-solar
          claim. A roof proposal needs the same care.
        </p>
        <p className="mt-3">
          Ask for the solar scope, roof scope, financing agreement and any
          change-order terms in writing. A monthly payment alone does not show
          what each part of the project costs or who is responsible for it.
        </p>
      </section>

      <section>
        <h2>Get these items on separate lines</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Roof and solar proposal comparison checklist
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Item</th>
                <th className="p-4">What to obtain before signing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Roof work</th>
                <td className="p-4">Materials, roof area, exclusions, warranty, permit responsibility and the licensed contractor responsible for the work.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Solar work</th>
                <td className="p-4">System size, equipment, layout, interconnection assumptions, cash price and the contractor responsible for installation.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Payment</th>
                <td className="p-4">Upfront amount, total payments, interest or escalator terms, ownership and what happens if the property is sold.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Future work</th>
                <td className="p-4">Removal, reinstallation, roof repairs, equipment service and who pays for each item if it is not included.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Check the roof before a rooftop-solar decision</h2>
        <p>
          The CPUC&apos;s consumer guide tells homeowners to ask whether a roof
          needs replacement before solar, who will do the work, the license
          number and the roof warranty. It also advises replacing a roof first
          if it is expected to need replacement soon. That is a property-specific
          question for the actual roof, not a universal number of remaining years.
        </p>
        <p className="mt-3">
          Request a written scope from the responsible contractor and compare it
          with a roof-only option and a solar-only option on the same property.
          Do not assume the companies, warranties or exclusions are the same just
          because the proposal uses one total price.
        </p>
      </section>

      <section>
        <h2>Do not treat a tax claim as roof funding</h2>
        <p>
          The IRS states that the Residential Clean Energy Credit is unavailable
          for property placed in service after December 31, 2025. Its current
          guidance also distinguishes traditional roofing materials and structural
          components from solar roofing tiles or shingles that generate energy.
          A conventional roof replacement is not made free by calling it part of
          a solar proposal.
        </p>
        <p className="mt-3">
          Tax treatment depends on the facts and the applicable tax year. Use the
          current IRS guidance and a qualified tax professional for a personal tax
          decision rather than a sales estimate.
        </p>
      </section>

      <section>
        <h2>Verify the people and documents</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Obtain the license number for every contractor named in the work scope.</li>
          <li>Use the CSLB license and home-improvement-salesperson lookup before signing.</li>
          <li>Read the solar disclosure, contract and separate financing papers together.</li>
          <li>Check that every claimed roof, solar, warranty and payment term appears in the signed documents.</li>
          <li>Keep copies of the proposal, disclosure documents and change orders for later roof, repair or sale questions.</li>
        </ol>
      </section>

      <section>
        <h2>A referral request is optional and separate from the offer</h2>
        <p>
          California Rate Relief is a private referral service. A referral request
          does not approve financing, establish program eligibility or promise a
          roof, solar system, price or savings. If you request a review, compare
          the resulting provider documents using the checklist above before you
          decide.
        </p>
        <p className="mt-3">
          For a conventional tile roof, see the <Link className="underline" href="/blog/solar-panels-tile-roof-california">California tile-roof solar guide</Link> before treating a roof question as a financing question.
        </p>
      </section>
    </DecisionPage>
  );
}
