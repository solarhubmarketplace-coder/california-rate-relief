// 2026-09-18 new sourced page (claude/ca-green-20260918) built from
// DRAFT_can-you-cancel-solar-panel-contract-before-installation-california_2026-09-17.md.
// This page states statutory rights. It is not legal advice and must not read as
// legal advice. Every right, deadline and dollar limit is attributed to the code
// section or the agency that states it.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";
import { SolarInquiry } from "@/components/growth/SolarInquiry";

const sources: Source[] = [
  {
    label:
      "California Civil Code § 1689.5 (home solicitation contract, appropriate trade premises, business day, senior citizen)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.5",
  },
  {
    label:
      "California Civil Code § 1689.6 (three- and five-business-day cancellation right, notice and mailing rules)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.6",
  },
  {
    label:
      "California Civil Code § 1689.7 (required cancellation statements, first-page seller details, Notice of Cancellation form)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.7",
  },
  {
    label:
      "California Civil Code § 1689.10 (seller must tender payments and any note within 10 days)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.10",
  },
  {
    label:
      "California Civil Code § 1689.11 (buyer’s 20-day tender duty; no compensation for services performed before cancellation)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.11",
  },
  {
    label:
      "California Business and Professions Code § 7159 (home improvement contract requirements and cancellation notices)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7159",
  },
  {
    label: "California Business and Professions Code § 7151.2 (home improvement contract)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7151.2",
  },
  {
    label:
      "California Business and Professions Code § 7159.5 (down payment cap and progress payment limits)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7159.5",
  },
  {
    label:
      "California Business and Professions Code § 7169 (solar energy system disclosure document)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169",
  },
  {
    label: "CSLB: Solar requirements and disclosure information",
    url: "https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx",
  },
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide",
  },
  {
    label: "CPUC: California Solar Consumer Protection Guide, Version 4 (2025)",
    url: "https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/solar-guide/2025-versions/solarguide25.pdf",
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
  title: "Cancel a Solar Contract Before Install in California: Rules",
  description:
    "California gives at least three business days to cancel a home-solicited solar contract, five if you are 65 or older. What the statutes say and how to do it.",
  alternates: {
    canonical:
      "/blog/can-you-cancel-solar-panel-contract-before-installation-california",
  },
  openGraph: {
    title:
      "Can you cancel a solar panel contract before installation in California?",
    description:
      "The statutory cancellation window, when the clock starts, how to send the notice, and where a cancellation fee sits relative to the statutory right.",
    type: "article",
    url: "https://ratereliefca.com/blog/can-you-cancel-solar-panel-contract-before-installation-california",
    modifiedTime: "2026-09-17T00:00:00Z",
  },
};

export default function CancelSolarContractBeforeInstallationCalifornia() {
  return (
    <DecisionPage
      title="Can you cancel a solar panel contract before installation in California?"
      intro="California gives a cancellation right that runs on a clock, and the clock does not start where most people assume. What the statute allows, when the window opens, how to send the notice, and where a contractual cancellation fee sits relative to the statutory right."
      path="/blog/can-you-cancel-solar-panel-contract-before-installation-california"
      sources={sources}
      sourceCheckedDate="2026-09-17"
      topic="Solar contract review before signing"
      inquiry={
        <SolarInquiry
          variant="decision"
          topic="Solar contract review before signing"
          market="CA"
        />
      }
    >
      <section>
        <h2>Yes — and the window is set by statute, not by the contract</h2>
        <p>
          Civil Code section 1689.6(a)(1) provides that, “[i]n addition to any
          other right to revoke an offer, the buyer has the right to cancel a home
          solicitation contract or offer until midnight of the third business day,
          or until midnight of the fifth business day if the buyer is a senior
          citizen, after the day on which the buyer signs an agreement or offer to
          purchase which complies with Section 1689.7.” (Civ. Code §1689.6(a)(1),
          leginfo.legislature.ca.gov, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The CPUC states the same right in plain terms in its California Solar
          Consumer Protection Guide material: “You have at least three business
          days to cancel your contract for any reason. If you are 65 years old or
          older, you have five business days. You may cancel the contract by
          emailing, mailing, faxing, or delivering a notice to your solar provider
          by midnight of the third business day after you received a signed, dated
          copy of the contract. Note that different rules may apply for contracts
          negotiated at a company’s place of business.” (CPUC, verified
          2026-09-17.)
        </p>
        <p className="mt-3">
          “For any reason” is accurate. The statute does not require a reason, a
          defect or a dispute.
        </p>
      </section>

      <section>
        <h2>When the clock starts — this is where people lose the right</h2>
        <p>
          The counting rule depends on which statute your contract was written
          under, and the difference is real.
        </p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>A home improvement contract</strong> — which is what most
            residential solar installation contracts are, under Business and
            Professions Code section 7151.2 — is covered by Civil Code section
            1689.6(a)(2): the buyer may cancel “until midnight of the third
            business day, or until midnight of the fifth business day if the buyer
            is a senior citizen, <strong>after the buyer receives a signed and
            dated copy of the contract or offer to purchase</strong> that complies
            with Section 1689.7.” (Civ. Code §1689.6(a)(2), verified 2026-09-17.)
          </li>
          <li>
            Business and Professions Code section 7159(d)(3)(A) makes the same
            point from the contractor’s side: “Before any work is started, the
            contractor shall give the buyer a copy of the contract that is signed
            and dated by both the contractor and the buyer.{" "}
            <strong>
              The buyer’s receipt of the copy of the contract initiates the
              buyer’s rights to cancel the contract
            </strong>{" "}
            pursuant to Sections 1689.5 to 1689.14, inclusive, of the Civil Code.”
            (Bus. &amp; Prof. Code §7159(d)(3)(A), verified 2026-09-17.)
          </li>
          <li>
            <strong>Other home solicitation contracts</strong> run from the day
            the buyer signs, under section 1689.6(a)(1).
          </li>
        </ul>
        <p className="mt-3">
          “Business day” is defined, and it is not the same as a weekday. Civil
          Code section 1689.5(e): “‘Business day’ means any calendar day except
          Sunday, or the following business holidays: New Year’s Day, Washington’s
          Birthday, Memorial Day, Independence Day, Labor Day, Columbus Day,
          Veterans’ Day, Thanksgiving Day, and Christmas Day.” (Verified
          2026-09-17.) Saturday counts. Sunday does not.
        </p>
        <p className="mt-3">
          “Senior citizen” is also defined: Civil Code section 1689.5(f), “an
          individual who is 65 years of age or older.” Section 1689.6(a)(4)
          records that the five-day right applies to contracts entered into, or
          offers conveyed, on or after 1 January 2021. (Verified 2026-09-17.)
        </p>
      </section>

      <section>
        <h2>The window depends on where the contract was negotiated</h2>
        <p>
          The right is a <strong>home solicitation</strong> right. Civil Code
          section 1689.5(a) defines a “home solicitation contract or offer” as a
          contract or offer for the sale, lease or rental of goods or services
          “made at other than appropriate trade premises” in an amount of $25 or
          more, and section 1689.5(b) defines “appropriate trade premises” as
          “premises where either the owner or seller normally carries on a
          business, or where goods are normally offered or exposed for sale in the
          course of a business carried on at those premises.” (Verified
          2026-09-17.)
        </p>
        <p className="mt-3">
          Business and Professions Code section 7159(d)(6)(A) states the exception
          from the contractor’s side: the “Three-Day Right to Cancel” notice — or
          “Five-Day Right to Cancel” for a senior citizen — must be given “unless
          the contract is: (i) Negotiated at the contractor’s place of business,”
          or subject to the seven-day disaster-repair right, or subject to Alarm
          Company Act licensure. (Verified 2026-09-17.)
        </p>
        <p className="mt-3">
          So a contract signed at a kitchen table, on a doorstep or on a tablet in
          a driveway is the case the statute was written for. A contract negotiated
          in the company’s own showroom may not be. The CPUC says the same:
          “different rules may apply for contracts negotiated at a company’s place
          of business.” If that is your situation, read your own contract’s
          cancellation clause and, if the stakes justify it, get a California
          attorney to read it. The setting the statute was written for is covered
          in{" "}
          <Link
            className="underline"
            href="/solar-problems/solar-door-to-door-sales-california"
          >
            the door-to-door solar sales guide
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>The contract has to tell you this, in a specified size and place</h2>
        <p>
          This is a checkable thing, and if it is missing, that is itself a fact.
        </p>
        <p className="mt-3">
          Business and Professions Code section 7169(b) requires that the “solar
          energy system disclosure document” — developed by the Contractors State
          License Board with the CPUC — “shall be printed on the front page or
          cover page of every solar energy contract,” “shall be printed in
          boldface 16-point type,” and shall include “(1) The total cost and
          payments for the system, including financing costs. (2) Information on
          how and to whom customers may provide complaints. (3) The consumer’s
          right to the applicable cancellation period pursuant to Section 7159 of
          the Business and Professions Code.” (Verified 2026-09-17.)
        </p>
        <p className="mt-3">
          CSLB publishes that disclosure in both a three-day and a five-day
          version, in English and Spanish, and reproduces the statutory text on its
          Solar Requirement page. (CSLB, verified 2026-09-17.) The CPUC states: “By
          law, a solar provider must provide you with a completed Solar Energy
          System Disclosure Document created by the Contractors State License Board
          (CSLB).” (Verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Business and Professions Code section 7169(d) requires the contract and
          the disclosure to be “written in the same language as was principally
          used in the oral sales presentation made to the consumer or the print or
          digital marketing material given to the consumer.” (Verified
          2026-09-17.)
        </p>
        <p className="mt-3">
          And section 7159(a)(6): “If the applicable ‘Notice of Cancellation’ is
          not included in or attached to the contract as required by this section,
          the buyer may file a complaint with the Contractors State License
          Board.” (Verified 2026-09-17.) What these documents are meant to stop is
          set out in{" "}
          <Link
            className="underline"
            href="/solar-problems/solar-contract-red-flags-california"
          >
            the solar contract red flags guide
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>How to cancel, exactly</h2>
        <p>The statute is specific, and specificity protects you.</p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>In writing.</strong> Civil Code section 1689.6(d):
            “Cancellation occurs when the buyer gives written notice of
            cancellation to the seller at the address or email address specified in
            the agreement or offer.” (Verified 2026-09-17.)
          </li>
          <li>
            <strong>Use the address or email in the contract.</strong> Section
            1689.7(b) requires the agreement to carry on the first page the name,
            address and email address of the seller to which the notice is to be
            sent, the date the buyer signed, and a telephone number to help the
            buyer locate and fill out the Notice of Cancellation. Business and
            Professions Code section 7159(d)(3)(B) imposes the equivalent
            requirement on a home improvement contract. (Verified 2026-09-17.)
          </li>
          <li>
            <strong>Mailing is effective on deposit.</strong> Section 1689.6(e):
            “Notice of cancellation, if given by mail, is effective when deposited
            in the mail properly addressed with postage prepaid.” (Verified
            2026-09-17.) You are not at the mercy of when it is opened.
          </li>
          <li>
            <strong>The wording does not have to match the form.</strong> Section
            1689.6(f): notice “need not take the particular form as provided with
            the contract or offer to purchase and, however expressed, is effective
            if it indicates the intention of the buyer not to be bound by the home
            solicitation contract or offer.” (Verified 2026-09-17.)
          </li>
          <li>
            <strong>The statutory notice text names the channels.</strong> The
            “Three-Day Right to Cancel” notice prescribed by Business and
            Professions Code section 7159(d)(6)(B)(i) states: “You may cancel by
            emailing, mailing, faxing, or delivering a written notice to the
            contractor at the contractor’s place of business by midnight of the
            third business day after you received a signed and dated copy of the
            contract that includes this notice. Include your name, your address,
            and the date you received the signed copy of the contract and this
            notice.” (Verified 2026-09-17.)
          </li>
        </ul>
        <p className="mt-3">
          Keep proof of what you sent and when. Send it by more than one of the
          permitted channels if the deadline is close.
        </p>
      </section>

      <section>
        <h2>What the provider owes you back, and on what clock</h2>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>Ten days for money and notes.</strong> Civil Code section
            1689.10(a): “within 10 days after a home solicitation contract or offer
            has been canceled, the seller must tender to the buyer any payments
            made by the buyer and any note or other evidence of indebtedness.”
            (Verified 2026-09-17.) The section 7159 notice states the same: “If you
            cancel, the contractor must return to you anything you paid within 10
            days of receiving the notice of cancellation.”
          </li>
          <li>
            <strong>No charge for work already done.</strong> Civil Code section
            1689.11(c): “If the seller has performed any services pursuant to a
            home solicitation contract or offer prior to its cancellation, the
            seller is entitled to no compensation. If the seller’s services result
            in the alteration of property of the buyer, the seller shall restore
            the property to substantially as good condition as it was at the time
            the services were rendered.” (Verified 2026-09-17.)
          </li>
          <li>
            <strong>You have duties too.</strong> Civil Code section 1689.11(a):
            within 20 days after cancellation the buyer, on demand, must tender any
            goods delivered, but is not obliged to tender anywhere other than the
            buyer’s own address; “[i]f the seller fails to demand possession of
            goods within 20 days after cancellation, the goods become the property
            of the buyer without obligation to pay for them.” Section 1689.11(b)
            puts a duty of reasonable care on the buyer and otherwise places the
            risk on the seller during that 20-day period. (Verified 2026-09-17.)
          </li>
          <li>
            <strong>
              The statutory Notice of Cancellation form itself says “without any
              penalty or obligation.”
            </strong>{" "}
            The form text prescribed by Business and Professions Code section
            7159(d)(6)(B)(vi)(I) and by Civil Code section 1689.7(c)(1) reads: “You
            may cancel this transaction, without any penalty or obligation, within
            three business days from the above date.” (Verified 2026-09-17.)
          </li>
        </ul>
        <p className="mt-3">
          If money was taken and the work stopped, see{" "}
          <Link
            className="underline"
            href="/solar-problems/solar-company-took-my-money-california"
          >
            what to do when a solar company took the deposit
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>A cancellation right and a cancellation fee are two different things</h2>
        <p>
          This is the distinction the query is really asking about, so state it
          cleanly and do not overstate it.
        </p>
        <p className="mt-3">
          <strong>Inside the statutory window</strong>, the statutory notice form
          says the transaction may be cancelled “without any penalty or
          obligation,” and Civil Code section 1689.11(c) provides that a seller who
          performed services before cancellation “is entitled to no compensation.”
        </p>
        <p className="mt-3">
          <strong>Outside the statutory window</strong>, the statute is no longer
          the instrument. What governs is the contract you signed — its termination
          clause, any liquidated-damages or restocking provision, any engineering,
          permitting, design or site-visit charge, and any separate financing
          agreement. Those terms vary by contract and this page cannot tell you
          what yours says.
        </p>
        <p className="mt-3">Three practical consequences:</p>
        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>
            <strong>
              A fee named in a contract is not the same as a fee that is lawful or
              enforceable.
            </strong>{" "}
            Nothing on this page determines whether a particular charge is valid.
            That is a question for a California attorney, and, where it concerns a
            licensed contractor’s conduct, a matter you can raise with CSLB. How
            fees sit inside a price is covered in{" "}
            <Link
              className="underline"
              href="/solar-problems/solar-dealer-fees-explained"
            >
              the dealer fee explainer
            </Link>
            .
          </li>
          <li>
            <strong>
              The deposit and progress-payment rules are separate and checkable.
            </strong>{" "}
            Business and Professions Code section 7159.5(a)(3): “If a downpayment
            will be charged, the downpayment shall not exceed one thousand dollars
            ($1,000) or 10 percent of the contract amount, whichever amount is
            less.” Section 7159.5(a)(5): “Except for a downpayment, the contractor
            shall neither request nor accept payment that exceeds the value of the
            work performed or material delivered.” (Verified 2026-09-17.)
          </li>
          <li>
            <strong>
              Cancelling the installation contract is not automatically cancelling
              the financing.
            </strong>{" "}
            Civil Code section 1689.10(a) requires the seller to tender back “any
            note or other evidence of indebtedness,” but a separate agreement with
            a separate lender has its own terms. Civil Code section 1689.5(a) also
            carves out of “home solicitation contract” “any contract under which
            the buyer has the right to rescind pursuant to Title 1, Chapter 2,
            Section 125 of the Federal Consumer Credit Protection Act” — a
            different rescission right with its own rules. Ask the lender, in
            writing, what cancelling the installation does to the loan. Business
            and Professions Code section 7169(e) confirms only that the PACE
            Financing Estimate and Disclosure form satisfies section 7169 for the
            financing contract, not for the underlying installation contract.
            (Verified 2026-09-17.)
          </li>
        </ol>
      </section>

      <section>
        <h2>If the provider refuses</h2>
        <p>
          The CPUC states the route: “If your solar provider refuses to cancel the
          contract, report them to the CSLB at 800-321-CSLB (2752) or
          cslb.ca.gov/consumers.” (Verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Business and Professions Code section 7159(a)(6) gives the same route
          where the required Notice of Cancellation was not included or attached.
          Keep your copy of the contract, the disclosure document, the Notice of
          Cancellation form and proof of what you sent and when.
        </p>
      </section>

      <section>
        <h2>Before you sign anything else</h2>
        <p>
          The CPUC’s guidance for checking a provider is specific: get the CSLB
          licence number, get the individual home improvement salesperson
          registration number if you were contacted by telephone or door-to-door,
          and check both. The CPUC states the licence “must be active and in
          classification C-46 (Solar Contractor), C-10 (Electrical Contractor), or
          B (General Building Contractor) in order to be valid.” (Verified
          2026-09-17.)
        </p>
        <p className="mt-3">
          The CPUC also states, on savings estimates, that “[s]olar providers are
          allowed to use a maximum electricity rate escalation of 10% in any
          calculation, as of 2025,” and tells homeowners to ask how a bill-savings
          figure was calculated. (Verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Comparing offers instead of signing one starts with{" "}
          <Link className="underline" href="/blog/solar-system-quotes-california">
            putting California solar quotes on the same basis
          </Link>
          , and the pressure that produces a same-day signature is described in{" "}
          <Link
            className="underline"
            href="/solar-problems/solar-sales-tactics-california"
          >
            what each sales tactic obscures
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>A referral request is optional and separate</h2>
        <p>
          California Rate Relief is a private referral service. It does not review
          contracts, does not give legal or tax advice, does not cancel anything on
          your behalf, and cannot preserve or extend a statutory deadline. A
          referral request does not approve financing, establish program
          eligibility or promise a price or savings figure. If a cancellation
          deadline is running, act on the deadline first.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <div className="mt-3 space-y-6">
          <div>
            <h3>How long do I have to cancel a California solar contract?</h3>
            <p>
              Civil Code section 1689.6(a) gives at least three business days, or
              five business days for a buyer who is a senior citizen, for a home
              solicitation contract. For a home improvement contract under Business
              and Professions Code section 7151.2, section 1689.6(a)(2) runs the
              clock from when you receive a signed and dated copy of the contract.
              The CPUC states the same three-day and five-day rule. (Verified
              2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Who counts as a senior citizen for the five-day rule?</h3>
            <p>
              Civil Code section 1689.5(f): “an individual who is 65 years of age
              or older.” Section 1689.6(a)(4) records that the five-day right
              applies to contracts entered into, or offers conveyed, on or after 1
              January 2021. (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Does Saturday count as a business day?</h3>
            <p>
              Yes. Civil Code section 1689.5(e) defines “business day” as any
              calendar day except Sunday and nine named holidays: New Year’s Day,
              Washington’s Birthday, Memorial Day, Independence Day, Labor Day,
              Columbus Day, Veterans’ Day, Thanksgiving Day and Christmas Day.
              (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>How do I actually send the cancellation?</h3>
            <p>
              In writing, to the address or email address specified in the
              agreement — Civil Code section 1689.6(d). If mailed, it is “effective
              when deposited in the mail properly addressed with postage prepaid”
              under section 1689.6(e). Section 1689.6(f) provides the notice need
              not use the form supplied and is effective “however expressed” if it
              indicates your intention not to be bound. The statutory contractor
              notice also lists emailing, mailing, faxing or delivering. Keep proof
              of what you sent and when. (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Can the company charge me a cancellation fee?</h3>
            <p>
              Inside the statutory window, the statutory Notice of Cancellation
              states the transaction may be cancelled “without any penalty or
              obligation,” and Civil Code section 1689.11(c) provides a seller who
              performed services before cancellation “is entitled to no
              compensation.” Outside that window, your contract’s own termination
              terms govern, and this page cannot tell you what they say or whether a
              particular charge is enforceable. That is a question for a California
              attorney; conduct by a licensed contractor can also be reported to
              CSLB. (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Does cancelling the contract cancel my solar loan?</h3>
            <p>
              Not automatically. Civil Code section 1689.10(a) requires the seller
              to tender back any payments “and any note or other evidence of
              indebtedness,” but a separate lender agreement has its own terms, and
              Civil Code section 1689.5(a) excludes from “home solicitation
              contract” any contract carrying a federal Consumer Credit Protection
              Act section 125 rescission right. Ask the lender in writing.
              (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>What if they refuse to honour the cancellation?</h3>
            <p>
              The CPUC’s stated route: “report them to the CSLB at 800-321-CSLB
              (2752) or cslb.ca.gov/consumers.” Business and Professions Code
              section 7159(a)(6) gives the same route where the required Notice of
              Cancellation was not included or attached to the contract. (Verified
              2026-09-17.)
            </p>
          </div>
        </div>
      </section>

      <RelatedGuides
        heading="Read these before you sign the next one"
        links={[
          {
            href: "/solar-problems/solar-contract-red-flags-california",
            label: "What to look for in the document",
          },
          {
            href: "/solar-problems/solar-door-to-door-sales-california",
            label: "The home-solicitation context the statute is written for",
          },
          {
            href: "/solar-problems/solar-sales-tactics-california",
            label: "Pressure tactics and the right to time",
          },
          {
            href: "/solar-problems/solar-company-took-my-money-california",
            label: "Deposits and refunds",
          },
          {
            href: "/solar-problems/solar-dealer-fees-explained",
            label: "Fees inside a price",
          },
          {
            href: "/blog/solar-system-quotes-california",
            label: "Comparing offers instead of signing one",
          },
        ]}
      />
    </DecisionPage>
  );
}
