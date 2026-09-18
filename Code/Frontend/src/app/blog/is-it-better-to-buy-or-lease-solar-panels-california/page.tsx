// claude/ca-financing-20260918 — Tier A financing-decision cluster, B1.
// Built from DRAFT_financing_decision_cluster_2026-09-17.md. The 2026 hinge is
// the §25D expenditure-dating rule, stated from the statute. It changes one
// input in the purchase arithmetic; it does not make leasing better, and this
// page does not say that it does. No price, payment, escalator or savings
// figure appears here, and no tax outcome is stated for any reader.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { FaqJsonLd } from "@/components/shared/FaqJsonLd";
import { SolarInquiry } from "@/components/growth/SolarInquiry";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label:
      "26 U.S.C. §25D — §25D(h) termination of the residential clean energy credit for expenditures made after 31 December 2025; §25D(e)(8)(A)–(B) when an expenditure is treated as made; §25D(c) carryforward; §25D(d)(1)–(6) definitions; most recent amendment Pub. L. 119-21, §70506, 4 July 2025 (verified 18 September 2026)",
    url:
      "https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A25D+edition%3Aprelim%29",
  },
  {
    label:
      "IRS: Residential Clean Energy Credit — “The credit is not available for any property placed in service after December 31, 2025” and “You must claim the credit for the tax year when the property is installed, not merely purchased”; page last reviewed or updated 4 July 2026 (verified 18 September 2026)",
    url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
  {
    label:
      "26 U.S.C. §48E — the clean electricity investment credit claimed by the owner of the property; §48E(e)(4)(A) placed-in-service termination after 31 December 2027 for an applicable facility; §48E(e)(4)(C) storage exception; §48E(i) denial for leasing arrangements, referencing paragraphs (1) and (4) of §25D(d) (verified 18 September 2026)",
    url:
      "https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29",
  },
  {
    label:
      "26 U.S.C. §48 — the legacy energy credit and its begin-construction limits for solar electric energy property (verified 17 September 2026)",
    url:
      "https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48+edition%3Aprelim%29",
  },
  {
    label:
      "CPUC: California Solar Consumer Protection Guide — the questions-to-ask list, the false-claims list, the lease/PPA/loan monthly-bill statement, the C-46/C-10/B licence classes and home improvement salesperson registration, and the cancellation window (verified 18 September 2026)",
    url:
      "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide",
  },
  {
    label:
      "Business and Professions Code §7169(a)–(b), (c)(10)–(c)(11): the Solar Energy System Disclosure Document, its front-or-cover-page and boldface 16-point requirement, lease-versus-purchase information, and the home-sale, balloon-payment and relocation disclosures (verified 17 September 2026)",
    url:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169",
  },
  {
    label:
      "CSLB: Solar requirements — the board’s reproduction of §7169(b), the disclosure document in three-day and five-day versions in English and Spanish, and the Solar Energy System Supporting Information form (verified 18 September 2026)",
    url: "https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx",
  },
  {
    label:
      "California State Board of Equalization: active solar energy system new construction exclusion — FAQ, “The system is excluded whether it is leased or owned” and “Ownership of the system is not a condition of exclusion”; no form or filing required (verified 18 September 2026)",
    url:
      "https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm",
  },
  {
    label:
      "California State Board of Equalization: active solar energy system exclusion — an exclusion and not an exemption, installation results in neither an increase nor a decrease in the existing assessment, statute scheduled to sunset 1 January 2027 (verified 18 September 2026)",
    url: "https://boe.ca.gov/proptaxes/active-solar-energy-system/",
  },
  {
    label:
      "Revenue and Taxation Code §73 — §73(a) the exclusion, §73(f) the subsequent change-in-ownership limit, §73(i)(1)–(2) the 1 January 2027 inoperative date and grandfathering (verified 17 September 2026)",
    url:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73.",
  },
  {
    label:
      "Lawrence Berkeley National Laboratory, LBNL-1007003 “Selling into the Sun” third-party-ownership analysis (January 2017), California only, 20,106 home sales including 113 third-party-owned PV sales — the study “fails to uncover statistically significant premiums for TPO PV homes nor for those with pre-paid leases as compared to non-PV homes,” and the authors state that “an absence of evidence of a TPO effect does not necessarily construe evidence of an effect’s absence” (verified 18 September 2026)",
    url: "https://www.osti.gov/servlets/purl/1342946",
  },
  {
    label:
      "Lawrence Berkeley National Laboratory, LBNL-6942E “Selling into the Sun” fact sheet — 3,951 PV and 18,871 non-PV home sales across eight states, and “All PV systems in this dataset were homeowner owned rather than leased” (verified 18 September 2026)",
    url:
      "https://eta-publications.lbl.gov/sites/default/files/lbnl-6942e-fullreport-factsheet.pdf",
  },
  {
    label:
      "Lawrence Berkeley National Laboratory: “Selling into the Sun” publication record, LBNL-6942E (verified 17 September 2026)",
    url: "https://emp.lbl.gov/publications/selling-sun-price-premium-analysis",
  },
  {
    label:
      "CSLB: contractor licence and home improvement salesperson lookup (verified 17 September 2026)",
    url:
      "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  },
];

const faqs = [
  {
    question: "Is there still a federal tax credit if I buy solar in 2026?",
    answer:
      "26 U.S.C. section 25D(h) states that “the credit allowed under this section shall not apply with respect to any expenditures made after December 31, 2025.” Section 25D(e)(8)(A) states that “an expenditure with respect to an item shall be treated as made when the original installation of the item is completed.” The IRS states that “the credit is not available for any property placed in service after December 31, 2025” and that “you must claim the credit for the tax year when the property is installed, not merely purchased.” On that text, a purchase whose installation is completed in 2026 has no section 25D credit for that expenditure, whatever date is on the contract. This is a reading of the statute, not tax advice; ask a qualified tax professional about your own return and check current IRS guidance.",
  },
  {
    question: "Does leasing get me a tax credit instead?",
    answer:
      "No. In a third-party-owned structure the credit at issue is a business credit belonging to whoever owns the equipment, not to the resident. A provider’s tax position is not a resident’s entitlement, and it does not establish savings, a price or a payment.",
  },
  {
    question: "Does the 2026 change mean leasing is better?",
    answer:
      "No. It removes one input from the purchase side of the arithmetic, so any comparison built on subtracting a homeowner credit the project cannot claim needs redoing. That is a statement about arithmetic, not a recommendation. Ownership, maintenance responsibility, contract term, escalators, home-sale assignment and what you want to be responsible for in fifteen years all still point in different directions for different households.",
  },
  {
    question: "Will a solar lease raise my property taxes?",
    answer:
      "The California State Board of Equalization states that “the system is excluded whether it is leased or owned” and that “ownership of the system is not a condition of exclusion,” and that installation of a qualifying system results in neither an increase nor a decrease in the existing assessment. Revenue and Taxation Code section 73(f) ends the exclusion at a subsequent change in ownership either way, and section 73(i)(1) makes the section inoperative from 1 January 2027, with section 73(i)(2) preserving what already qualified. Property tax is therefore not a buy-versus-lease discriminator.",
  },
  {
    question: "Which is easier when I sell the house?",
    answer:
      "They are different problems rather than one being easier. An owned system is part of the property. A lease or power purchase agreement raises assignment, buyout and relocation questions, which Business and Professions Code section 7169(c)(11) identifies as disclosure content, including balloon payments and system relocation if the contract is not assigned to the new owner. On resale value, the California third-party-ownership study found no statistically significant premium for third-party-owned or pre-paid-lease PV homes compared with non-PV homes, on 113 third-party-owned sales, and its authors describe that as an absence of evidence rather than proof of no effect.",
  },
  {
    question: "What single document should I ask for first?",
    answer:
      "The completed Solar Energy System Disclosure Document and the Solar Energy System Supporting Information form. Business and Professions Code section 7169(b) requires the disclosure document on the front page or cover page of every solar energy contract, in boldface 16-point type, carrying the total cost and payments for the system including financing costs, the complaint routing, and the cancellation right under section 7159.",
  },
];

export const metadata: Metadata = {
  title: "Buy or Lease Solar Panels in California? 2026 Decision",
  description:
    "The federal residential credit ended for expenditures after 31 Dec 2025. What that changes about buying versus leasing, and what it does not change at all.",
  alternates: {
    canonical: "/blog/is-it-better-to-buy-or-lease-solar-panels-california",
  },
  openGraph: {
    title: "Is it better to buy or lease solar panels in California?",
    description:
      "The 2026 federal-credit dating rule, stated from the statute, and the structural differences it does not touch.",
    type: "article",
    url:
      "https://ratereliefca.com/blog/is-it-better-to-buy-or-lease-solar-panels-california",
    modifiedTime: "2026-09-18T00:00:00Z",
  },
};

export default function IsItBetterToBuyOrLeaseSolarPanelsCalifornia() {
  return (
    <DecisionPage
      title="Is it better to buy or lease solar panels in California?"
      intro="One input to this decision changed for 2026: the federal residential clean energy credit no longer applies to expenditures made after 31 December 2025, and the statute dates the expenditure to completion of installation. That breaks comparisons built on subtracting a homeowner credit. It does not decide the question, and this page does not decide it for you."
      path="/blog/is-it-better-to-buy-or-lease-solar-panels-california"
      sources={sources}
      sourceCheckedDate="2026-09-18"
      topic="Comparing a solar purchase and a solar lease"
      primaryResourceHref="/blog/how-much-does-it-cost-to-lease-solar-panels-california"
      primaryResourceLabel="What sets a lease payment"
      comparisonHref="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
      comparisonLabel="All four payment structures"
      inquiry={
        <SolarInquiry
          variant="decision"
          topic="Comparing a solar purchase and a solar lease"
        />
      }
    >
      <FaqJsonLd items={faqs} />

      <section>
        <h2>What changed for 2026, stated from the statute</h2>
        <p>
          26 U.S.C. section 25D(h) reads: &ldquo;The credit allowed under this
          section shall not apply with respect to any expenditures made after
          December 31, 2025.&rdquo; Section 25D(e)(8)(A) reads: &ldquo;Except as
          provided in subparagraph (B), an expenditure with respect to an item
          shall be treated as made when the original installation of the item is
          completed.&rdquo; Section 25D(e)(8)(B) applies a different rule to
          expenditures made in connection with the construction or
          reconstruction of a structure, treating them as made when the
          taxpayer&rsquo;s original use of the structure begins. The most recent
          amendment to the section is Pub. L. 119-21, section 70506, enacted
          4 July 2025 (verified 18 September 2026).
        </p>
        <p className="mt-3">
          The IRS states the same two points in its own words: &ldquo;The credit
          is not available for any property placed in service after December 31,
          2025,&rdquo; and &ldquo;You must claim the credit for the tax year when
          the property is installed, not merely purchased.&rdquo; That page&rsquo;s
          stated last review date is 4 July 2026 (verified 18 September 2026).
        </p>
        <p className="mt-3">
          Read together: a purchase whose original installation is completed in
          2026 has no section 25D credit for that expenditure, regardless of the
          date on the contract or the deposit. Section 25D(c) allows a valid
          unused credit to be carried to a succeeding taxable year, which is a
          separate matter and does not create a credit for a project that misses
          the expenditure date.
        </p>
        <p className="mt-3 rounded-lg border-l-4 border-slate-300 bg-slate-50 p-4 text-slate-700">
          This is a reading of the statutory text, not tax advice, and it states
          no tax outcome for you. Take your own facts to a qualified tax
          professional and check current IRS guidance before relying on any of
          it.
        </p>
      </section>

      <section>
        <h2>Why that matters to the comparison, and only that far</h2>
        <p>
          A great many buy-versus-lease comparisons were built by taking a
          purchase price, subtracting a homeowner federal credit, and setting the
          remainder against a monthly third-party payment. If the project&rsquo;s
          installation completes in 2026, that subtraction is not available. The
          comparison has to be redone.
        </p>
        <p className="mt-3">
          That is a statement about arithmetic. It is not a statement that
          leasing is now the better choice, and nobody should read it that way.
          The change removes one number from one side of a comparison that also
          contains ownership, maintenance responsibility, contract term,
          escalators, transfer rights at a home sale and what the household wants
          to be committed to in fifteen or twenty years. Those did not move.
        </p>
      </section>

      <section>
        <h2>A provider&rsquo;s tax position is not yours</h2>
        <p>
          When a company owns the equipment on your roof, the credit in play is a
          business investment credit under 26 U.S.C. section 48E, claimed by the
          owner of the property. Its own dates and restrictions are real: section
          48E(e)(4)(A) provides that the section &ldquo;shall not apply to any
          qualified property placed in service by the taxpayer after December 31,
          2027, which is part of an applicable facility,&rdquo; and section
          48E(e)(4)(C) excepts energy storage technology placed in service at such
          a facility (verified 18 September 2026).
        </p>
        <p className="mt-3">
          One point is worth stating precisely because it is widely garbled.
          Section 48E(i) denies the credit where the taxpayer rents or leases to a
          third party property &ldquo;described in paragraph (1) or (4) of section
          25D(d).&rdquo; In section 25D(d), paragraph (1) is a qualified solar
          water heating property expenditure and paragraph (4) is a qualified
          small wind energy property expenditure. Residential solar{" "}
          <em>electric</em> property is paragraph (2), which section 48E(i) does
          not reference. So that leasing denial does not, on this text, reach a
          residential solar electricity lease or power purchase agreement.
        </p>
        <p className="mt-3">
          None of it tells you what a lease or PPA will cost. A provider&rsquo;s
          business credit is not a resident&rsquo;s entitlement, and it does not
          establish savings. Treat any pitch that converts a provider&rsquo;s tax
          position into your saving as a claim to be sourced, not a fact.
        </p>
      </section>

      <section>
        <h2>What actually differs between the four structures</h2>
        <p className="mb-4">
          Mechanism only. The figures belong on the disclosure document for your
          address, not on a web page.
        </p>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Structural differences between a cash purchase, a loan, a lease and
              a power purchase agreement
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Question</th>
                <th className="p-4">Cash purchase</th>
                <th className="p-4">Loan</th>
                <th className="p-4">Lease</th>
                <th className="p-4">PPA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Who owns the equipment
                </th>
                <td className="p-4">You</td>
                <td className="p-4">You, subject to the lender&rsquo;s security interest</td>
                <td className="p-4">The provider</td>
                <td className="p-4">The provider</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  What the payment is charged against
                </th>
                <td className="p-4">Nothing after completion</td>
                <td className="p-4">The borrowed principal and interest</td>
                <td className="p-4">Use of the equipment</td>
                <td className="p-4">The electricity produced</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Can the payment change over time
                </th>
                <td className="p-4">No payment</td>
                <td className="p-4">Per the note; read the rate terms</td>
                <td className="p-4">Only if the contract has an escalator</td>
                <td className="p-4">With output, and with any escalator</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Who repairs and monitors it
                </th>
                <td className="p-4">You, within warranty terms</td>
                <td className="p-4">You, within warranty terms</td>
                <td className="p-4">Per the contract; usually the owner</td>
                <td className="p-4">Per the contract; usually the owner</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Term
                </th>
                <td className="p-4">None</td>
                <td className="p-4">The loan term</td>
                <td className="p-4">The lease term, typically long</td>
                <td className="p-4">The agreement term, typically long</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  At a home sale
                </th>
                <td className="p-4">Part of the property</td>
                <td className="p-4">Payoff or transfer of the debt; check any lien</td>
                <td className="p-4">Assignment, buyout or relocation per the contract</td>
                <td className="p-4">Assignment, buyout or relocation per the contract</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  At end of term
                </th>
                <td className="p-4">Nothing scheduled</td>
                <td className="p-4">Debt discharged; you keep the system</td>
                <td className="p-4">Whatever options the contract names</td>
                <td className="p-4">Whatever options the contract names</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          A loan also raises a question the other three do not: whether a
          financing statement is filed against the system. See{" "}
          <Link className="underline" href="/solar-problems/ucc-1-lien-solar-california">
            what a UCC-1 filing on a solar system is
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>What does not differ: the property tax position</h2>
        <p>
          The California State Board of Equalization states that &ldquo;the
          system is excluded whether it is leased or owned&rdquo; and that
          &ldquo;ownership of the system is not a condition of exclusion.&rdquo;
          It describes the treatment as a new construction exclusion rather than
          an exemption, and states that installation of a qualifying system
          &ldquo;will not result in either an increase or a decrease in the
          assessment of the existing property.&rdquo; It also states that no form
          or filing is required to receive the exclusion (verified
          18 September 2026).
        </p>
        <p className="mt-3">
          Revenue and Taxation Code section 73(f) ends the exclusion at a
          subsequent change in ownership, either way. Section 73(i)(1) makes the
          section inoperative from 1 January 2027, with section 73(i)(2)
          preserving what qualified before then; the Board states the same sunset
          date (verified 17 September 2026). So property tax does not favour
          buying or leasing. It is not a discriminator here.
        </p>
        <p className="mt-3">
          The other costs a comparison tends to leave out are on{" "}
          <Link className="underline" href="/solar-problems/hidden-costs-of-solar-california">
            what a solar proposal does not price
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>What the resale research says, and about which structure</h2>
        <p>
          Two Lawrence Berkeley National Laboratory studies get quoted in this
          argument, and they are not about the same thing.
        </p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>LBNL-6942E</strong> covered 3,951 PV and 18,871 non-PV home
            sales across eight states. Its fact sheet states: &ldquo;All PV
            systems in this dataset were homeowner owned rather than
            leased&rdquo; (verified 18 September 2026). Whatever it found, it
            found about host-owned systems. It says nothing about a lease or a
            PPA.
          </li>
          <li>
            <strong>LBNL-1007003</strong> (January 2017) is the California-only
            third-party-ownership analysis: 20,106 home sales, of which 113 were
            third-party-owned PV. It &ldquo;fails to uncover statistically
            significant premiums for TPO PV homes nor for those with pre-paid
            leases as compared to non-PV homes.&rdquo; The authors immediately
            qualify that: &ldquo;an absence of evidence of a TPO effect does not
            necessarily construe evidence of an effect&rsquo;s absence;
            potentially more data might allow a smaller TPO effect to be
            discovered&rdquo; (verified 18 September 2026).
          </li>
        </ul>
        <p className="mt-4">
          Neither study supports a percentage promise about your house, in either
          direction. If a salesperson quotes a resale premium at you, ask which
          study, which ownership structure and which state.
        </p>
        <p className="mt-3">
          The contract-side version of the same question is on{" "}
          <Link className="underline" href="/blog/what-happens-to-solar-lease-when-i-sell-california">
            selling a California home with a solar lease or PPA
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>The documents that decide it for your address</h2>
        <p>
          Business and Professions Code section 7169(b) requires the Solar Energy
          System Disclosure Document on the front page or cover page of every
          solar energy contract, in boldface 16-point type, carrying &ldquo;the
          total cost and payments for the system, including financing costs,&rdquo;
          information on how and to whom complaints may be made, and the
          consumer&rsquo;s cancellation right under section 7159. Section
          7169(c)(10) expressly contemplates &ldquo;information about the
          difference between a solar energy system lease and a solar energy
          system purchase&rdquo; as supporting content, and section 7169(c)(11)
          covers the impacts of the financing or lease terms on the sale of the
          home, including balloon payments and system relocation if the contract
          is not assigned to the new owner (verified 17 September 2026). The CSLB
          publishes the document, in three-day and five-day versions in English
          and Spanish, with the separate Supporting Information form (verified
          18 September 2026).
        </p>
        <p className="mt-3">
          Get that document, completed, from every bidder &mdash; including the
          purchase bidders. It is the only place the comparison exists in
          numbers for your roof.
        </p>
      </section>

      <section>
        <h2>Questions that settle the comparison</h2>
        <p className="mb-4">
          The CPUC&rsquo;s consumer guide directs consumers to ask about the
          company, the roof, the system design, the warranties, the method behind
          any bill-savings figure, the effect on a home sale and the timeline
          (verified 18 September 2026). Ask every bidder the same list and write
          the answers down.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Is there a down payment, and if so what is it based on?</li>
          <li>
            What is the payment, when does it change, by how much, and where is
            the schedule in the contract?
          </li>
          <li>
            How was any bill-savings estimate calculated, and what assumptions
            and inputs went into it?
          </li>
          <li>Who owns the equipment, and who repairs it?</li>
          <li>
            If I sell my home, what are my options, and where in the contract is
            that written?
          </li>
          <li>What happens at the end of the term, in the contract&rsquo;s words?</li>
          <li>
            What is your CSLB licence number, in what classification, and the
            salesperson&rsquo;s home improvement salesperson registration number?
            The CPUC states the licence must be active and in classification C-46
            (Solar Contractor), C-10 (Electrical Contractor) or B (General
            Building Contractor) to be valid for this work.
          </li>
        </ul>
      </section>

      <section>
        <h2>Questions and answers</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>A referral request is optional and separate</h2>
        <p>
          California Rate Relief is a private solar referral service. It is not a
          contractor, it does not install or finance anything, and it does not
          review contracts or give legal or tax advice. Sending project details
          is a referral request: it does not approve anything, does not determine
          a price, a payment or a tax result, and does not establish that any
          provider is available for your address.
        </p>
      </section>

      <RelatedGuides
        heading="The pages this decision actually turns on"
        intro="Each of these covers one input to the comparison above."
        links={[
          {
            href: "/blog/how-much-does-it-cost-to-lease-solar-panels-california",
            label: "What determines a solar lease or PPA payment",
            note: "and the document that has to carry the total",
          },
          {
            href: "/blog/solar-ppa-vs-lease-california",
            label: "Solar lease vs PPA in California",
            note: "one pays for equipment, the other for output",
          },
          {
            href: "/blog/zero-down-solar-california",
            label: "What a no-down-payment solar offer means",
            note: "the first payment is not the total",
          },
          {
            href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california",
            label: "Cash, loan, lease and PPA compared",
          },
          {
            href: "/blog/what-happens-to-solar-lease-when-i-sell-california",
            label: "Selling a home with a solar lease or PPA",
          },
          {
            href: "/blog/solar-tax-credit-expired-2026-options",
            label: "The federal credit ended: what is left in California",
          },
          {
            href: "/solar-problems/solar-escalator-clause-explained",
            label: "What a solar escalator clause does",
          },
          {
            href: "/solar-problems/solar-dealer-fees-explained",
            label: "Where a dealer fee sits inside a price",
          },
        ]}
      />
    </DecisionPage>
  );
}
