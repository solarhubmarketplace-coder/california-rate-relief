// claude/ca-financing-20260918 — Tier A financing-decision cluster, B3.
//
// COMPLIANCE HOLD: this page shares a claim class with the compliance-flagged
// no-cost-claim refresh at /blog/free-solar-panels-california (Strategy of
// Record §7 rule 4, Gate C2). It must not ship before that refresh has cleared
// compliance review. The words "free" and "no cost" appear here only inside an
// attributed government quotation, or as a described advertising claim that is
// immediately qualified.
//
// The query term itself is the only place a dollar sign appears. The statutory
// downpayment cap in Bus. & Prof. Code §7159.5(a)(3) is rendered in words
// rather than numerals so the page carries no price numeral of any kind.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { FaqJsonLd } from "@/components/shared/FaqJsonLd";
import { SolarInquiry } from "@/components/growth/SolarInquiry";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label:
      "Business and Professions Code §7159.5(a)(3) and (a)(5): a downpayment on a home improvement contract may not exceed one thousand dollars or 10 percent of the contract amount, whichever amount is less, and except for a downpayment the contractor may neither request nor accept payment exceeding the value of work performed or material delivered (verified 17 September 2026)",
    url:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7159.5",
  },
  {
    label:
      "CPUC: California Solar Consumer Protection Guide — “Solar energy is rarely free” and the single government-funded exception; the false-claims list; the statement that loan, lease and power purchase agreement customers also receive a monthly bill from a loan company or solar provider; the C-46/C-10/B licence classes and home improvement salesperson registration; and the cancellation window (verified 18 September 2026)",
    url:
      "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide",
  },
  {
    label:
      "CPUC: California Solar Consumer Protection Guide, Version 4 (2025) — full guide (PDF) (verified 17 September 2026)",
    url:
      "https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/solar-guide/2025-versions/solarguide25.pdf",
  },
  {
    label:
      "Business and Professions Code §7169(a)–(b): the Solar Energy System Disclosure Document, required on the front page or cover page of every solar energy contract in boldface 16-point type, carrying the total cost and payments for the system including financing costs (verified 17 September 2026)",
    url:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169",
  },
  {
    label:
      "CSLB: Solar requirements — the board’s reproduction of §7169(b), the three-day and five-day disclosure versions in English and Spanish, and the Solar Energy System Supporting Information form (verified 18 September 2026)",
    url: "https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx",
  },
  {
    label:
      "26 U.S.C. §25D — §25D(h) termination of the residential clean energy credit for expenditures made after 31 December 2025 and §25D(e)(8)(A) treating an expenditure as made when the original installation is completed (verified 18 September 2026)",
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
      "Civil Code §1689.6(a)(1)–(2): the three and five business-day cancellation window and the receipt-of-copy trigger for a home improvement contract (verified 17 September 2026)",
    url:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.6",
  },
  {
    label:
      "Civil Code §1689.5(e)–(f): definitions of “business day” and “senior citizen” (65 or older) (verified 17 September 2026)",
    url:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.5",
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
    question: "Does a no-down-payment solar offer mean the solar is free?",
    answer:
      "No. The CPUC states: “Solar energy is rarely free. An honest company will be upfront about all the costs you will pay over time. There is one exception: a few government-funded solar programs offer free or low-cost solar to low-income households.” A no-down-payment offer is a statement about when the first payment falls due, not about whether there are payments.",
  },
  {
    question:
      "What is the maximum down payment a California contractor can charge?",
    answer:
      "Business and Professions Code section 7159.5(a)(3) provides that if a downpayment will be charged on a home improvement contract, it may not exceed one thousand dollars or 10 percent of the contract amount, whichever amount is less. Section 7159.5(a)(5) provides that except for a downpayment, the contractor may neither request nor accept payment that exceeds the value of the work performed or material delivered. The statutory ceiling is therefore not far above zero to begin with, which is part of why the phrase carries less information than it sounds like it does.",
  },
  {
    question: "Is a no-down-payment solar offer a loan?",
    answer:
      "It can be a loan, a lease or a power purchase agreement, and those are materially different arrangements. Ask which one it is and get the ownership answer in writing: who owns the equipment, who repairs it, what the payment is charged against, and what the term is.",
  },
  {
    question: "What should I compare between two no-down-payment offers?",
    answer:
      "The cash price before financing; the total of payments over the full term; the interest rate on a loan or the escalator clause on a lease or PPA; the term length; who owns the equipment; what happens at a home sale and at the end of the term; and the utility bill that remains. Business and Professions Code section 7169(b) requires the disclosure document to carry the total cost and payments for the system, including financing costs, on the front page or cover page of the contract.",
  },
  {
    question:
      "Is there a federal tax credit in 2026 to offset a no-down-payment purchase?",
    answer:
      "26 U.S.C. section 25D(h) states that the credit “shall not apply with respect to any expenditures made after December 31, 2025,” and section 25D(e)(8)(A) treats an expenditure as made when the original installation is completed. The IRS states that the credit “is not available for any property placed in service after December 31, 2025” and that you must claim it “for the tax year when the property is installed, not merely purchased.” So a pitch that pairs no money down with a homeowner federal credit for a 2026 installation has a dating problem. This is a reading of the statute rather than tax advice; take your own facts to a qualified tax professional and check current IRS guidance.",
  },
  {
    question: "Will I still get a utility bill?",
    answer:
      "Typically yes. The CPUC lists “You will never pay an electricity bill ever again after a solar system is installed” among the claims to treat as false, and states that customers who take out a solar loan or sign a lease or power purchase agreement will also receive a monthly bill from a loan company or solar provider. Count both when comparing.",
  },
];

export const metadata: Metadata = {
  title: "$0 Down Solar in California: What It Actually Means",
  description:
    "$0 down describes the first payment, not the total. What a no-down-payment solar offer is, what California caps anyway, and what to compare instead.",
  alternates: { canonical: "/blog/zero-down-solar-california" },
  openGraph: {
    title: "What does $0 down solar mean in California?",
    description:
      "A no-down-payment solar offer is a statement about timing. Where the cost sits, what California already caps, and the document that has to show the total.",
    type: "article",
    url: "https://ratereliefca.com/blog/zero-down-solar-california",
    modifiedTime: "2026-09-18T00:00:00Z",
  },
};

export default function ZeroDownSolarCalifornia() {
  return (
    <DecisionPage
      title="What does $0 down solar mean in California?"
      intro="It means the first payment is not due at signing. It does not tell you the term, the rate, the escalator, the total of payments, or who ends up owning the equipment. This page is about where the cost actually sits in a no-down-payment offer and which document is required to show you the total."
      path="/blog/zero-down-solar-california"
      sources={sources}
      sourceCheckedDate="2026-09-18"
      topic="Understanding a no-down-payment solar offer"
      primaryResourceHref="/blog/how-much-does-it-cost-to-lease-solar-panels-california"
      primaryResourceLabel="What sets a lease payment"
      comparisonHref="/blog/is-it-better-to-buy-or-lease-solar-panels-california"
      comparisonLabel="Buy or lease"
      inquiry={
        <SolarInquiry
          variant="decision"
          topic="Understanding a no-down-payment solar offer"
        />
      }
    >
      <FaqJsonLd items={faqs} />

      <section>
        <h2>It is a statement about the first payment, not the total</h2>
        <p>
          A no-down-payment offer describes timing. It says nothing about the
          contract term, the interest rate or escalator, the total of payments,
          or who owns the equipment at the end. The same phrase is used for a
          loan, for a lease and for a power purchase agreement, and those are
          three different arrangements with three different sets of consequences.
        </p>
        <p className="mt-3">
          So the first question is not &ldquo;how much down?&rdquo; It is
          &ldquo;which of the three is this, and what is the total?&rdquo;
        </p>
      </section>

      <section>
        <h2>California caps the down payment anyway</h2>
        <p>
          Business and Professions Code section 7159.5(a)(3) provides that if a
          downpayment will be charged on a home improvement contract, it may not
          exceed one thousand dollars or 10 percent of the contract amount,
          whichever amount is less. Section 7159.5(a)(5) provides that except for
          a downpayment, the contractor &ldquo;shall neither request nor accept
          payment that exceeds the value of the work performed or material
          delivered&rdquo; (verified 17 September 2026).
        </p>
        <p className="mt-3">
          That matters for how much weight the phrase can carry. The lawful
          ceiling on a down payment is already low, and the rest of the money is
          already tied to work actually done. The distance between nothing at
          signing and the legal maximum is a small part of a long contract, which
          is why a no-down-payment headline is a weak basis for choosing between
          offers.
        </p>
      </section>

      <section>
        <h2>What the regulator says about &ldquo;free&rdquo;</h2>
        <p>
          The CPUC&rsquo;s consumer guide is direct about it: &ldquo;Solar energy
          is rarely free. An honest company will be upfront about all the costs
          you will pay over time. There is one exception: a few government-funded
          solar programs offer free or low-cost solar to low-income
          households&rdquo; (verified 18 September 2026). The guide also lists
          claims to treat as false, including &ldquo;You will never pay an
          electricity bill ever again after a solar system is installed&rdquo; and
          pressure to sign quickly on an electronic tablet.
        </p>
        <p className="mt-3">
          If the offer in front of you is being described as costing nothing
          rather than as being financed, those are two different claims. The
          government-funded exception the CPUC names is a separate route with its
          own administration and its own eligibility rules, decided by the
          programme and not by a sales call. The two pages for that are{" "}
          <Link className="underline" href="/blog/free-solar-panels-california">
            the advertising claim, examined
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/blog/low-income-solar-california">
            California low-income solar programmes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Where the cost in a no-down-payment offer actually sits</h2>
        <p className="mb-4">
          Nothing at signing means the cost is somewhere else in the paperwork.
          Where depends on the structure.
        </p>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Where the cost sits in a no-down-payment solar offer, by structure
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Structure</th>
                <th className="p-4">Where the cost sits</th>
                <th className="p-4">What to ask for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Financed purchase (loan)
                </th>
                <td className="p-4">
                  Interest over the loan term, plus any fees folded into the
                  financed amount.
                </td>
                <td className="p-4">
                  The cash price before financing, the rate, the term, the total
                  of payments, and whether a financing statement is filed against
                  the system.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Lease
                </th>
                <td className="p-4">
                  The payment schedule over the term, and any escalator clause
                  that changes it.
                </td>
                <td className="p-4">
                  The escalator clause, the full year-by-year payment schedule,
                  the term, the buyout formula and the end-of-term options.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Power purchase agreement
                </th>
                <td className="p-4">
                  The rate charged per unit of output, for as long as the
                  agreement runs.
                </td>
                <td className="p-4">
                  The rate terms, the production estimate and its assumptions,
                  any escalator, and what happens in a low-production year.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          In every one of the three, a fee can be inside one quoted total rather
          than shown as a line. See{" "}
          <Link className="underline" href="/solar-problems/solar-dealer-fees-explained">
            where a dealer fee sits inside a price
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/solar-problems/solar-escalator-clause-explained">
            what an escalator clause does
          </Link>
          . For a loan, also read{" "}
          <Link className="underline" href="/solar-problems/ucc-1-lien-solar-california">
            what a UCC-1 filing on a solar system is
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Ask for these instead of a down payment figure</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>The cash price for the same system, before any financing.</li>
          <li>The total of payments over the full term.</li>
          <li>The interest rate on a loan, or the escalator clause on a lease or PPA.</li>
          <li>The term length, and what the contract says happens at the end of it.</li>
          <li>Who owns the equipment, and who repairs and monitors it.</li>
          <li>What the utility bill is expected to be afterwards, and on what assumptions.</li>
        </ol>
        <p className="mt-4">
          Then ask for the document those belong on. Business and Professions
          Code section 7169(b) requires the Solar Energy System Disclosure
          Document on the front page or cover page of every solar energy
          contract, in boldface 16-point type, carrying &ldquo;the total cost and
          payments for the system, including financing costs,&rdquo; the complaint
          routing, and the cancellation right under section 7159 (verified
          17 September 2026). The CSLB publishes it in three-day and five-day
          versions in English and Spanish, with the separate Supporting
          Information form (verified 18 September 2026).
        </p>
      </section>

      <section>
        <h2>There is no homeowner federal credit for a 2026 completion</h2>
        <p>
          26 U.S.C. section 25D(h) states that the credit &ldquo;shall not apply
          with respect to any expenditures made after December 31, 2025,&rdquo;
          and section 25D(e)(8)(A) states that &ldquo;an expenditure with respect
          to an item shall be treated as made when the original installation of
          the item is completed.&rdquo; The IRS states that the credit &ldquo;is
          not available for any property placed in service after December 31,
          2025&rdquo; and that &ldquo;you must claim the credit for the tax year
          when the property is installed, not merely purchased&rdquo; (verified
          18 September 2026).
        </p>
        <p className="mt-3">
          A pitch that pairs no money down with a homeowner federal credit
          covering the cost, for a system installed in 2026, has a dating problem
          on that text. This states no tax outcome for you: take your own facts to
          a qualified tax professional and check current IRS guidance. The wider
          picture is on{" "}
          <Link className="underline" href="/blog/solar-tax-credit-expired-2026-options">
            the federal credit ending and what is left in California
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Before you sign</h2>
        <p>
          Civil Code section 1689.6(a) gives at least three business days to
          cancel, and five business days if the buyer is a senior citizen, defined
          in section 1689.5(f) as 65 or older; for a home improvement contract
          section 1689.6(a)(2) runs the period from receipt of a signed and dated
          copy of the contract (verified 17 September 2026). The CPUC states the
          same three-day and five-day windows and tells consumers not to be
          rushed.
        </p>
        <p className="mt-3">
          Check the contractor&rsquo;s CSLB licence, and the salesperson&rsquo;s
          home improvement salesperson registration if you were contacted by
          phone or at the door. The CPUC states the licence must be active and in
          classification C-46 (Solar Contractor), C-10 (Electrical Contractor) or
          B (General Building Contractor) to be valid for this work (verified
          18 September 2026).
        </p>
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
          review contracts or give legal or tax advice. Sending project details is
          a referral request: it does not approve anything, does not determine a
          price, a payment or a tax result, does not decide eligibility for any
          programme, and does not establish that any provider is available for
          your address.
        </p>
      </section>

      <RelatedGuides
        heading="Compare the structure, not the headline"
        intro="A no-down-payment offer is one of three arrangements. These pages cover each."
        links={[
          {
            href: "/blog/is-it-better-to-buy-or-lease-solar-panels-california",
            label: "Buy or lease solar panels in California",
            note: "including the 2026 federal-credit dating rule",
          },
          {
            href: "/blog/how-much-does-it-cost-to-lease-solar-panels-california",
            label: "What determines a solar lease or PPA payment",
          },
          {
            href: "/blog/solar-ppa-vs-lease-california",
            label: "Solar lease vs PPA in California",
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
            href: "/solar-problems/solar-dealer-fees-explained",
            label: "Where a dealer fee sits inside a price",
          },
          {
            href: "/solar-problems/solar-escalator-clause-explained",
            label: "What a solar escalator clause does",
          },
          {
            href: "/solar-problems/solar-contract-red-flags-california",
            label: "Contract terms worth stopping on",
          },
        ]}
      />
    </DecisionPage>
  );
}
