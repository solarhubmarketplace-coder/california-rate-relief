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
    label: "IRS: Residential Clean Energy Credit",
    url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
  {
    label: "CSLB: Check a contractor license or home-improvement salesperson registration",
    url: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  },
];

export const metadata: Metadata = {
  title: "Free Roof Replacement with Solar in California: Verify First",
  description:
    "A solar proposal can include roof work, but a headline does not make it free. Separate the roof, solar and financing terms before you sign.",
  alternates: { canonical: "/blog/free-roof-replacement-with-solar-panels-california" },
  openGraph: {
    title: "Free roof replacement with solar in California: what to verify",
    description:
      "How to separate roof work, solar equipment and payment terms in a California proposal.",
    type: "article",
    url: "https://ratereliefca.com/blog/free-roof-replacement-with-solar-panels-california",
    modifiedTime: "2026-09-18T00:00:00Z",
  },
};

export default function FreeRoofReplacementWithSolarCalifornia() {
  return (
    <DecisionPage
      title="Free roof replacement with solar in California: what to verify"
      intro="A solar proposal can include roof work, but a headline does not establish that the roof is free. Compare the roof, solar equipment and payment terms as separate pieces before signing."
      path="/blog/free-roof-replacement-with-solar-panels-california"
      sources={sources}
      sourceCheckedDate="2026-09-18"
      topic="Solar and roof proposal comparison"
    >
      <section>
        <h2>Is free roof replacement with solar panels ever actually free?</h2>
        <p>
          Not in the sense the phrase implies. A solar proposal can legitimately
          include roof work, and you may owe nothing at signing &mdash; but the roof is
          paid for somewhere in the agreement, through a loan balance, a lease or
          power-purchase payment, or a higher system price. There is no California or
          federal program that pays for a conventional roof replacement because solar
          is installed on it.
        </p>
        <p className="mt-3">
          Two specific things are worth knowing before you read any such offer. The
          IRS states that the Residential Clean Energy Credit &ldquo;is not available
          for any property placed in service after December 31, 2025.&rdquo; It also
          states that &ldquo;traditional building components that primarily serve a
          roofing or structural function generally don&apos;t qualify. For example,
          roof trusses and traditional shingles that support solar panels don&apos;t
          qualify, but solar roofing tiles and solar shingles do because they generate
          clean energy.&rdquo; Source:{" "}
          <a
            className="underline"
            href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRS, Residential Clean Energy Credit
          </a>
          , verified September 18, 2026.
        </p>
        <p className="mt-3">
          So a conventional roof replacement is not a covered expense under that
          credit even when it is bundled with solar, and the credit itself is stated as
          unavailable for property placed in service after the end of 2025. A tax
          claim is not roof funding. The rest of this page is how to separate what you
          are actually being offered.
        </p>
      </section>

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
        <p className="mt-3">
          Before any of that, settle{" "}
          <Link className="underline" href="/blog/is-my-roof-good-for-solar-california">
            whether the roof is a good candidate in the first place
          </Link>
          . A roof that needs replacing is a roofing decision; a roof that cannot
          carry an array is a different answer altogether.
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
        <h2>Frequently asked questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">
              Is free roof replacement with solar panels really free?
            </h3>
            <p>
              No. The roof work is paid for inside the agreement even when nothing is
              due at signing. Ask for the roof scope priced as its own line, then
              compare that against a roof-only quote from a licensed roofing
              contractor on the same property. If the combined proposal will not
              itemise the roof, you cannot tell what it costs.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              How does free roof replacement with solar panels work?
            </h3>
            <p>
              A provider bundles roof work into a solar contract and finances the
              total, so the monthly payment covers both. The roof may be performed by
              a different licensed contractor than the solar installer, under a
              separate warranty. Get both licence numbers, both warranties and the
              full payment schedule before signing.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              What&apos;s the difference between a bundled roof offer and a solar loan?
            </h3>
            <p>
              A loan leaves you owning the system and the roof, with a balance to
              repay. A lease or power-purchase agreement leaves a third party owning
              the system while you pay for equipment or power, which changes
              transferability at sale and who is responsible when a roof leak appears
              under the array. The roof work can be folded into either structure.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              Does the federal tax credit cover roof-replacement costs bundled with
              solar?
            </h3>
            <p>
              Not for conventional roofing. The IRS states that traditional building
              components serving a roofing or structural function generally do not
              qualify, naming roof trusses and traditional shingles specifically, while
              solar roofing tiles and solar shingles do because they generate energy.
              The IRS also states the credit is not available for property placed in
              service after December 31, 2025. Verified September 18, 2026. Tax
              treatment depends on your facts and tax year; confirm with a qualified
              tax professional rather than a sales estimate.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              What should I verify before accepting a &ldquo;free roof&rdquo; solar
              offer?
            </h3>
            <p>
              The licence number of every contractor named in the scope, the
              home-improvement salesperson registration of whoever signed you up, the
              separate roof and solar scopes, the financing agreement in full, the
              ownership of the system at close, and who pays to remove and reinstall
              the array if the roof needs work later. Use the CSLB lookup listed in
              the sources below for the licence checks.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Related reading before you sign</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link className="underline" href="/blog/is-my-roof-good-for-solar-california">
              Is my roof good for solar in California?
            </Link>
          </li>
          <li>
            <Link className="underline" href="/blog/is-solar-worth-it-california-2026">
              Is solar worth it in California in 2026?
            </Link>
          </li>
          <li>
            <Link className="underline" href="/blog/free-solar-panels-california">
              What a no-cost solar offer in California actually involves
            </Link>
          </li>
          <li>
            <Link className="underline" href="/blog/solar-panel-removal-reinstall-cost">
              What removal and reinstallation costs when the roof is replaced later
            </Link>
          </li>
        </ul>
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
      <RelatedGuides
        heading="Read these before signing the combined scope"
        links={[
          { href: "/solar-problems/hidden-costs-of-solar-california", label: "The cost lines that arrive after the quote" },
          { href: "/solar-problems/solar-contract-red-flags-california", label: "What the California disclosure forms are meant to stop" },
          { href: "/solar-problems/solar-homeowners-insurance", label: "How panels change the homeowner policy" },
          { href: "/solar-problems/solar-company-took-my-money-california", label: "What to do if a contractor takes the money and stops" },
        ]}
      />
    </DecisionPage>
  );
}
