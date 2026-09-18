// 2026-09-18 sourced replacement body (claude/ca-green-20260918) built from
// DRAFT_solar-ppa-vs-lease-california_FIX_2026-09-17.md. The prior body carried
// unsourced price, rate, escalator, buyout, contract-term and market-share
// figures and no sources list; the audit in that draft removed 25 claims, none
// of which survive here. Every number below is a quoted rate, statute or study
// result with its source and verified date.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";
import { SolarInquiry } from "@/components/growth/SolarInquiry";

const sources: Source[] = [
  {
    label:
      "26 U.S.C. § 25D (termination for expenditures after December 31, 2025; completion-of-installation dating rule)",
    url: "https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A25D+edition%3Aprelim%29",
  },
  {
    label: "IRS: Residential Clean Energy Credit",
    url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
  {
    label: "26 U.S.C. § 48E (business credit; subsection (i) leasing denial)",
    url: "https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29",
  },
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide",
  },
  {
    label:
      "Board of Equalization: Active Solar Energy System Exclusion frequently asked questions",
    url: "https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm",
  },
  {
    label:
      "California Revenue and Taxation Code § 73 (change-of-ownership limit; sunset January 1, 2027)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73.",
  },
  {
    label:
      "Berkeley Lab: Leasing Into the Sun — Transactions of Homes With Third Party Owned Solar (LBNL-1007003, January 2017)",
    url: "https://www.osti.gov/servlets/purl/1342946",
  },
  {
    label:
      "California Business and Professions Code § 7169 (solar energy system disclosure document; lease-versus-purchase and home-sale impacts)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169",
  },
  {
    label: "CSLB: Solar requirements and disclosure information",
    url: "https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx",
  },
  {
    label:
      "CSLB: Check a contractor license or home-improvement salesperson registration",
    url: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  },
  {
    label:
      "California Civil Code § 1689.6 (three- and five-business-day cancellation window; receipt-of-copy trigger)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.6",
  },
  {
    label: "California Civil Code § 1689.5 (senior citizen defined as 65 or older)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.5",
  },
  {
    label: "CSLB: Solar Energy System Disclosure Document",
    url: "https://www.cslb.ca.gov/Resources/Contractors/SolarDisclosureDoc.pdf",
  },
  {
    label: "CSLB: Solar Energy System Supporting Information form",
    url: "https://www.cslb.ca.gov/Resources/Contractors/SOLAR_ENERGY_SYSTEM_SUPPORTING_INFORMATION.pdf",
  },
];

export const metadata: Metadata = {
  title: "Solar PPA vs Lease in California: How They Differ",
  description:
    "A PPA charges for the electricity produced; a lease charges a fixed fee for the equipment. Compare the terms with primary sources — no price guesses.",
  alternates: {
    canonical: "/blog/solar-ppa-vs-lease-california",
  },
  openGraph: {
    title: "Solar PPA vs Lease in California: What Actually Differs",
    description:
      "The structural difference between a PPA and a lease, what the law requires a provider to disclose, and the questions that decide the cost.",
    type: "article",
    url: "https://ratereliefca.com/blog/solar-ppa-vs-lease-california",
    modifiedTime: "2026-09-17T00:00:00Z",
  },
};

export default function SolarPPAVsLeaseCalifornia() {
  return (
    <DecisionPage
      title="Solar PPA vs Lease in California: What Actually Differs"
      intro="If you don’t want to pay for a solar system outright or with a loan, a power purchase agreement (PPA) and a lease are the two common third-party-ownership structures. In both, a provider — not you — owns the equipment. This page explains the structural difference between them, what the law requires a provider to disclose, and the questions that actually decide the cost and the transfer terms for your specific contract. It does not quote a price, a rate or a market-share figure for either structure: those numbers vary by provider, roof and contract, and the ones a prior version of this page carried were not sourced to anything. Where a number does appear below, it is a quoted rate, statute, or study result, with its source and verified date."
      path="/blog/solar-ppa-vs-lease-california"
      sources={sources}
      sourceCheckedDate="2026-09-17"
      topic="California solar PPA vs lease comparison"
      inquiry={
        <SolarInquiry
          variant="decision"
          topic="California solar PPA vs lease comparison"
          market="CA"
        />
      }
    >
      <section>
        <h2>How a Solar PPA Works</h2>
        <p>
          In a PPA, the solar provider owns the system and sells you the
          electricity it produces. You pay based on metered output — a rate
          applied to the kilowatt-hours the system generates, set in your specific
          contract. (Bus. &amp; Prof. Code §7169(c)(10), verified 17 Sep 2026.)
          Ask your provider for the exact starting rate, whether it changes over
          the contract term, and the full schedule of any change — do not accept a
          verbal range.
        </p>
      </section>

      <section>
        <h2>How a Solar Lease Works</h2>
        <p>
          In a lease, the solar provider owns the system and you pay a periodic fee
          for the right to use it — a payment based on your agreement, not directly
          on how much electricity the system produces in a given period. (Bus.
          &amp; Prof. Code §7169(c)(10), verified 17 Sep 2026.) As with a PPA, get
          the exact fee, the term, and whether the fee is fixed or scheduled to
          change, in writing.
        </p>
      </section>

      <section>
        <h2>The Difference Between a Solar Lease and a PPA</h2>
        <p>The structural difference is what you’re paying for:</p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>PPA — you pay for the output.</strong> Your bill moves with
            what the system produces. A lower-production period is typically
            billed at a lower amount, because you’re billed on metered kWh.
          </li>
          <li>
            <strong>Lease — you pay for the equipment.</strong> The fee is set by
            the contract and generally does not move with output in either
            direction. Some lease contracts include a{" "}
            <strong>production guarantee</strong> — a clause under which the
            provider credits you if actual output falls below a stated minimum.
            Ask whether your contract has one, and exactly what it guarantees.
          </li>
        </ul>
        <p className="mt-3">
          Everything else people associate with “PPA” or “lease” — the rate, the
          fee, whether either escalates, the term, and what happens at a home sale
          — is a term of the specific contract in front of you, not a property of
          the label. Bus. &amp; Prof. Code §7169(c)(10) lists “information about
          the difference between a solar energy system lease and a solar energy
          system purchase” as content the required disclosure document may cover.
          (Verified 17 Sep 2026.)
        </p>
        <h3 className="mt-6">
          Contract escalators: two different numbers, don’t conflate them
        </h3>
        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>
            <strong>A contract escalator</strong> raises your PPA rate or lease
            payment over the term, if your specific contract includes one. Ask for
            the escalator rate and the full year-by-year payment schedule in
            writing — this is not the same figure across providers or contracts.
            What that clause does over a term is set out in{" "}
            <Link
              className="underline"
              href="/solar-problems/solar-escalator-clause-explained"
            >
              the escalator clause explainer
            </Link>
            .
          </li>
          <li>
            <strong>A utility-rate-escalation assumption</strong> is a separate
            input some providers use to build a savings estimate. The CPUC states:
            “Solar providers are allowed to use a maximum electricity rate
            escalation of 10% in any calculation, as of 2025.” (Verified 17 Sep
            2026.) A savings estimate built on this assumption is not the same
            thing as your contract’s escalator, and the CPUC also notes that lease
            and PPA customers “will also receive a monthly bill from a loan company
            or solar provider” in addition to any remaining utility bill — the bill
            does not go to zero. (Verified 17 Sep 2026.)
          </li>
        </ol>
      </section>

      <section>
        <h2>Side-by-Side: Solar PPA vs Lease</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Solar PPA and lease mechanism comparison
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">What it is</th>
                <th className="p-4">PPA</th>
                <th className="p-4">Lease</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  What you pay for
                </th>
                <td className="p-4">
                  The electricity the system produces (a rate per kWh set in your
                  contract)
                </td>
                <td className="p-4">
                  The right to use the equipment (a periodic fee set in your
                  contract)
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Upfront payment
                </th>
                <td className="p-4">
                  Typically none in the base structure; a{" "}
                  <strong>prepaid PPA</strong> is a different variant that
                  requires a lump sum upfront in exchange for a lower ongoing rate
                  — ask which structure you’re being quoted
                </td>
                <td className="p-4">Typically none</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Who owns the system
                </th>
                <td className="p-4">
                  The provider (third-party owner), in both structures
                </td>
                <td className="p-4">The provider</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Maintenance &amp; repair
                </th>
                <td className="p-4">
                  Typically the equipment owner’s responsibility under the contract
                  term — confirm exactly what’s covered and for how long
                </td>
                <td className="p-4">Same — confirm in the contract</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  If output is low
                </th>
                <td className="p-4">
                  Your bill is generally lower that period, since you’re billed on
                  metered output
                </td>
                <td className="p-4">
                  Your fee generally doesn’t change; ask whether a production
                  guarantee applies
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Federal tax credit
                </th>
                <td className="p-4">
                  Neither gives <em>you</em> the homeowner credit — the provider
                  owns the equipment, not you (see below)
                </td>
                <td className="p-4">Same</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Contract term
                </th>
                <td className="p-4">
                  Set by your specific contract — there is no statutory standard
                  length; get the exact number of years in writing
                </td>
                <td className="p-4">Same</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Ending it early
                </th>
                <td className="p-4">
                  Typically requires a buyout; the amount and formula are set by
                  your contract — ask for the formula in writing before you sign
                </td>
                <td className="p-4">Same</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  At a home sale
                </th>
                <td className="p-4">
                  Governed by the contract’s assignment clause — see below
                </td>
                <td className="p-4">Same</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          No dollar figures, percentages or “typical” ranges appear in this table
          because none in the source live page were traceable to a primary source;
          each row states the mechanism instead.
        </p>
      </section>

      <section>
        <h2>How the 2026 Federal Tax Credit Change Affects This Comparison</h2>
        <p>
          The federal residential clean energy credit under 26 U.S.C. §25D “shall
          not apply with respect to any expenditures made after December 31, 2025”
          (§25D(h), verified 17 Sep 2026), and the expenditure is dated to “the
          original installation of the item” being “completed” (§25D(e)(8)(A),
          verified 17 Sep 2026). The IRS states the same result: “The credit is not
          available for any property placed in service after December 31, 2025,”
          and “you must claim the credit for the tax year when the property is
          installed, not merely purchased” (verified 17 Sep 2026).
        </p>
        <p className="mt-3">
          That change is most relevant to a{" "}
          <strong>cash-purchase or loan comparison</strong>, because in a purchase,
          you are the one who could have claimed §25D. In a PPA or a lease, the
          provider owns the equipment, not you — so §25D was never available to you
          in either structure, before or after this change. What the 2026 change
          actually shifts is the earlier decision (buy vs. go third-party), not the
          PPA-vs-lease choice itself. That earlier decision is laid out in{" "}
          <Link
            className="underline"
            href="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
          >
            cash, loan, lease and PPA side by side
          </Link>
          .
        </p>
        <p className="mt-3">
          Separately, a provider that owns leased or PPA equipment may have its own
          federal business credit position under 26 U.S.C. §48E. That is the
          equipment owner’s tax position, not yours: as the site states elsewhere, a
          provider’s §48E position is not a resident’s entitlement, and it does not
          establish savings. One specific point worth knowing: §48E(i) denies the
          credit for property leased to a third party, but only for property
          described in §25D(d)(1) (solar water heating) and §25D(d)(4) (small wind)
          — not §25D(d)(2), which is residential solar electric property (verified
          17 Sep 2026). So §48E(i)’s leasing denial does not, on this text, reach a
          residential solar PV lease or PPA.
        </p>
        <p className="mt-3">
          None of the above is tax advice. Talk to a qualified tax professional
          about your own return.
        </p>
      </section>

      <section>
        <h2>What Happens at a Home Sale or Contract Transfer</h2>
        <p>
          Whether a PPA or lease transfers to a new owner, and on what terms, is
          set by the contract’s assignment clause — it is not automatic.
          California’s solar contract disclosure law requires providers to disclose
          “the impacts that the financing options, lease agreement terms, or
          contract terms will have on the sale of the consumer’s home, including
          any balloon payments or solar energy system relocation that may be
          required if the contract is not assigned to the new owner of the home”
          (Bus. &amp; Prof. Code §7169(c)(11), verified 17 Sep 2026).
        </p>
        <p className="mt-3">
          Ask your provider, in writing, before you sign: does the new owner need to
          qualify to assume the contract; what happens if they don’t or won’t; and
          what a buyout would cost and how it’s calculated. Find the actual clause
          in your contract rather than relying on a description from the
          salesperson. The document-by-document version of that review is in{" "}
          <Link
            className="underline"
            href="/blog/what-happens-to-solar-lease-when-i-sell-california"
          >
            selling a California home with a solar lease or PPA
          </Link>
          , and if a financing statement was recorded against the property, see{" "}
          <Link className="underline" href="/solar-problems/ucc-1-lien-solar-california">
            how a UCC-1 filing shows up at title
          </Link>
          .
        </p>
        <p className="mt-3">
          On resale value specifically, the only California-specific study available
          is LBNL’s “Leasing Into the Sun” (Jan. 2017), which examined 20,106
          California home sales including 113 with third-party-owned solar, and
          “fails to uncover statistically significant premiums for TPO PV homes nor
          for those with pre-paid leases as compared to non-PV homes” (verified 17
          Sep 2026). The authors describe this as an absence of evidence, not proof
          that there is no effect — treat any specific percentage or dollar premium
          you’re quoted elsewhere with that caveat.
        </p>
      </section>

      <section>
        <h2>Questions to Ask Before You Sign</h2>
        <p>
          California law requires a specific disclosure document, and the CPUC
          publishes a specific question list. Use both rather than relying on this
          page or a verbal quote.
        </p>
        <p className="mt-3">
          <strong>Get the document the law requires.</strong> Bus. &amp; Prof. Code
          §7169(b) requires that the front or cover page of every solar energy
          contract, in boldface 16-point type, include “[t]he total cost and
          payments for the system, including financing costs” (verified 17 Sep
          2026). This is the CSLB Solar Energy System Disclosure Document and its
          accompanying Supporting Information form, and it is where the actual
          number for your household belongs — not a website.
        </p>
        <p className="mt-3">
          <strong>Ask the CPUC’s own questions</strong> (verified 17 Sep 2026):
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Is there a down payment?</li>
          <li>
            How much is the payment per month, and when and by how much does it
            increase?
          </li>
          <li>
            Is the standardized bill-savings estimate I was given different from
            other quotes, and why?
          </li>
          <li>
            If I sell my home, what are my options, and where in the contract does
            it say so?
          </li>
        </ul>
        <p className="mt-3">
          <strong>Ask two more, specific to a PPA or lease:</strong>
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            What is the escalator rate (if any), and can I see the full year-by-year
            payment schedule?
          </li>
          <li>
            What is the buyout formula if I need to end the contract early or a
            buyer won’t assume it?
          </li>
        </ul>
        <p className="mt-3">
          A fee folded into the price is a separate question again —{" "}
          <Link className="underline" href="/solar-problems/solar-dealer-fees-explained">
            the dealer fee explainer
          </Link>{" "}
          covers where it sits.
        </p>
        <p className="mt-3">
          <strong>Check who you’re dealing with.</strong> Get the contractor’s CSLB
          license number, and — if you were contacted by phone or door-to-door — the
          individual home improvement salesperson’s registration number. A valid
          license must be active in classification C-46 (Solar Contractor), C-10
          (Electrical Contractor), or B (General Building Contractor) (verified 17
          Sep 2026). Verify it directly at the CSLB’s license lookup.
        </p>
        <p className="mt-3">
          <strong>Know your cancellation window.</strong> You have at least three
          business days to cancel a home solar contract, or five if you are 65 or
          older, running from receipt of a signed and dated copy (Civ. Code
          §1689.6(a); §1689.5(f), verified 17 Sep 2026). The mechanics are in{" "}
          <Link
            className="underline"
            href="/blog/can-you-cancel-solar-panel-contract-before-installation-california"
          >
            cancelling a California solar contract before installation
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <div className="mt-3 space-y-6">
          <div>
            <h3>What is the difference between a solar lease and a PPA?</h3>
            <p>
              A lease is a payment for the right to use the equipment — a fixed
              periodic fee. A PPA is a payment for the electricity the equipment
              produces — a rate applied to metered output. Neither figure is quoted
              here; ask your specific bidder for the exact rate, fee and escalator,
              in writing.
            </p>
          </div>
          <div>
            <h3>Which one is cheaper — a lease or a PPA?</h3>
            <p>
              That’s a contract question, not a label question. It depends on your
              usage, your roof’s production, and the specific terms in the specific
              contract in front of you. Get the completed CSLB Solar Energy System
              Disclosure Document for every bid and compare total cost and payments
              on the same usage history and the same utility tariff (verified 17 Sep
              2026).
            </p>
          </div>
          <div>
            <h3>Do both a lease and a PPA transfer when I sell my home?</h3>
            <p>
              Both raise assignment and buyout questions that are set by your
              specific contract. California’s disclosure law requires providers to
              address “the impacts that the financing options, lease agreement
              terms, or contract terms will have on the sale of the consumer’s home,
              including any balloon payments or solar energy system relocation”
              (Bus. &amp; Prof. Code §7169(c)(11), verified 17 Sep 2026). Find that
              clause in your own contract before you sign.
            </p>
          </div>
          <div>
            <h3>Do I get the federal tax credit with either a lease or a PPA?</h3>
            <p>
              No. In both structures, the provider owns the equipment, not you, and
              the credit at issue for the owner’s equipment (26 U.S.C. §48E) is a
              business tax position — it does not establish or guarantee a specific
              saving passed through to you (verified 17 Sep 2026). Separately, the
              homeowner residential credit under §25D(h) does not apply to
              expenditures made after 31 Dec 2025 in any case, so it is unavailable
              even to a cash or loan buyer completing installation in 2026 (verified
              17 Sep 2026).
            </p>
          </div>
          <div>
            <h3>Will a leased or PPA system raise my property taxes?</h3>
            <p>
              No. The California State Board of Equalization states “the system is
              excluded whether it is leased or owned,” and “ownership of the system
              is not a condition of exclusion” (verified 17 Sep 2026). The exclusion
              ends at a subsequent change in ownership of the property either way,
              and the statute authorizing it is scheduled to become inoperative 1
              Jan 2027 (Rev. &amp; Tax. Code §73(i)(1), verified 17 Sep 2026). The
              detail is in{" "}
              <Link
                className="underline"
                href="/blog/do-solar-panels-increase-property-taxes-california"
              >
                do solar panels increase property taxes in California
              </Link>
              .
            </p>
          </div>
          <div>
            <h3>Does a leased or PPA system add to my home’s value?</h3>
            <p>
              The only California-specific study available does not support a value
              claim either way: LBNL’s “Leasing Into the Sun” (Jan. 2017) “fails to
              uncover statistically significant premiums for TPO PV homes nor for
              those with pre-paid leases as compared to non-PV homes,” on a sample
              of 113 third-party-owned sales (verified 17 Sep 2026). Treat any
              specific percentage you’re quoted elsewhere with that caveat. The
              wider question is covered in{" "}
              <Link
                className="underline"
                href="/blog/does-solar-increase-home-value-california"
              >
                does solar increase home value in California
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <RelatedGuides
        heading="Read these alongside the contract"
        links={[
          {
            href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california",
            label: "Cash, loan, lease and PPA side by side",
          },
          {
            href: "/blog/prepaid-ppa-california-2026",
            label: "What a prepaid PPA actually is",
          },
          {
            href: "/blog/solar-ppa-explained-california",
            label: "How a California solar PPA works, start to finish",
          },
          {
            href: "/blog/what-happens-to-solar-lease-when-i-sell-california",
            label: "Selling a home with a lease or PPA in place",
          },
          {
            href: "/solar-problems/solar-escalator-clause-explained",
            label: "What an escalator clause does over a term",
          },
          {
            href: "/solar-problems/solar-dealer-fees-explained",
            label: "Fees folded into a price",
          },
          {
            href: "/solar-problems/ucc-1-lien-solar-california",
            label: "Liens and title with third-party-owned equipment",
          },
          {
            href: "/blog/can-you-cancel-solar-panel-contract-before-installation-california",
            label: "The statutory cancellation window",
          },
        ]}
      />
    </DecisionPage>
  );
}
