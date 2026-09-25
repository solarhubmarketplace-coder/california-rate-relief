// claude/ca-financing-20260918 — Tier A financing-decision cluster, B2.
// Built from DRAFT_financing_decision_cluster_2026-09-17.md. No price figure,
// payment figure, escalator percentage or savings figure appears on this page:
// California requires the provider to give the number in a specified document,
// and this page explains the mechanism instead of inventing one.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { FaqJsonLd } from "@/components/shared/FaqJsonLd";
import { SolarInquiry } from "@/components/growth/SolarInquiry";
import {
  DecisionPage,
  QuoteChecklist,
  type Source,
} from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label:
      "Business and Professions Code §7169(a)–(b), (c)(10)–(c)(11): contents of the Solar Energy System Disclosure Document, the front-or-cover-page and boldface 16-point requirement, and the home-sale, balloon-payment and relocation disclosures (verified 17 September 2026)",
    url:
      "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169",
  },
  {
    label:
      "CSLB: Solar requirements — the board’s own reproduction of §7169(b), the 3-day and 5-day disclosure versions in English and Spanish, and the Solar Energy System Supporting Information form (verified 18 September 2026)",
    url: "https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx",
  },
  {
    label:
      "CPUC: California Solar Consumer Protection Guide — the false-claims list, the lease/PPA/loan monthly-bill statement, the stated maximum electricity rate escalation usable in a calculation, the questions-to-ask list, the C-46/C-10/B licence classes and home improvement salesperson registration, and the cancellation window (verified 18 September 2026)",
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
      "CPUC: solar guide landing page and the provider distribution requirement (verified 17 September 2026)",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label:
      "CSLB: Solar Energy System Disclosure Document cover page (PDF) (verified 17 September 2026)",
    url: "https://www.cslb.ca.gov/Resources/Contractors/SolarDisclosureDoc.pdf",
  },
  {
    label:
      "CSLB: Solar Energy System Supporting Information form (PDF) (verified 17 September 2026)",
    url:
      "https://www.cslb.ca.gov/Resources/Contractors/SOLAR_ENERGY_SYSTEM_SUPPORTING_INFORMATION.pdf",
  },
  {
    label:
      "CSLB: contractor licence and home improvement salesperson lookup (verified 17 September 2026)",
    url:
      "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  },
  {
    label:
      "Civil Code §1689.6(a)(1)–(2): the three and five business-day cancellation window for a home solicitation contract and the receipt-of-copy trigger (verified 17 September 2026)",
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
      "Sunrun: “What’s a Solar Lease or PPA?” — escalator range and production guarantee description (verified 22 September 2026)",
    url: "https://www.sunrun.com/go-solar-center/solar-faq/whats-a-solar-lease-or-ppa",
  },
  {
    label:
      "Tesla: “Buying Out Your Tesla Solar Panel Lease” — production guarantee and buyout pricing mechanics (verified 22 September 2026)",
    url: "https://www.tesla.com/learn/tesla-solar-lease-buyout-guide",
  },
  {
    label: "Sunrun: “Moving Made Easy” — prepay-and-bundle option at a home sale (verified 22 September 2026)",
    url: "https://www.sunrun.com/moving-made-easy",
  },
  {
    label: "IRS: Residential Clean Energy Credit (verified 22 September 2026)",
    url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
];

const faqs = [
  {
    question: "What does a solar lease cost in California?",
    answer:
      "There is no single figure, and any number a web page gives you is invented. Business and Professions Code section 7169(b) requires the Solar Energy System Disclosure Document on the front page or cover page of every solar energy contract, in boldface 16-point type, carrying “the total cost and payments for the system, including financing costs.” The number comes from the provider on that document, for your roof, your usage history and your tariff.",
  },
  {
    question: "Will my solar lease payment go up over the term?",
    answer:
      "It can, if the contract contains an escalator. That is a contract term, not a property of the word “lease,” so ask for the escalator clause and the full payment schedule for every year of the term in writing. Keep it separate from the utility rate escalation assumption used inside a provider’s savings estimate; the CPUC states that “solar providers are allowed to use a maximum electricity rate escalation of 10% in any calculation, as of 2025.”",
  },
  {
    question: "Is a solar lease the same thing as a PPA?",
    answer:
      "No. A lease is a payment for use of the equipment. A power purchase agreement is a payment for the electricity the equipment produces. Everything else — term, escalator, maintenance, transfer at a home sale — is a contract term rather than something the label settles.",
  },
  {
    question: "Will I still get an electricity bill if I lease solar panels?",
    answer:
      "Typically yes. The CPUC lists “You will never pay an electricity bill ever again after a solar system is installed” among the claims to treat as false, and states that customers who take out a solar loan or sign a lease or power purchase agreement “will also receive a monthly bill from a loan company or solar provider.” Compare the lease payment plus the remaining utility bill, not the lease payment alone.",
  },
  {
    question: "What should I compare between two solar lease quotes?",
    answer:
      "Put them on one basis first: the same system size and design, the same production assumptions, the same usage history and the same tariff. Then compare the total of payments over the full term, the escalator clause, the term length, the end-of-term options, the buyout and the home-sale assignment terms. A smaller monthly payment can sit on a longer contract, less equipment or a larger remaining electric bill.",
  },
  {
    question: "What if I change my mind after signing?",
    answer:
      "For a home solicitation contract, Civil Code section 1689.6(a) gives at least three business days to cancel, and five business days if the buyer is a senior citizen, defined in section 1689.5(f) as 65 or older. For a home improvement contract the period runs from receipt of a signed and dated copy of the contract. The CPUC states the same three-day and five-day windows in its consumer guide.",
  },
];

export const metadata: Metadata = {
  title: "How Much to Lease Solar Panels in California: What Sets It",
  description:
    "No two solar lease quotes are built the same way. What determines the payment, which terms move it, and the document that has to show you the total.",
  alternates: {
    canonical: "/blog/how-much-does-it-cost-to-lease-solar-panels-california",
  },
  openGraph: {
    title:
      "How much does it cost to lease solar panels in California?",
    description:
      "What determines a California solar lease or PPA payment, which contract terms move it, and the disclosure document that has to carry the total.",
    type: "article",
    url:
      "https://ratereliefca.com/blog/how-much-does-it-cost-to-lease-solar-panels-california",
    modifiedTime: "2026-09-22T00:00:00Z",
  },
};

export default function HowMuchToLeaseSolarPanelsCalifornia() {
  return (
    <DecisionPage
      title="How much does it cost to lease solar panels in California?"
      intro="This page gives no payment figure, because any figure here would be invented and would not describe your roof, your usage or your tariff. What it does give you is the mechanism: what a lease or PPA payment is built from, which contract terms move it, and the document California requires the provider to hand you with the total on it."
      path="/blog/how-much-does-it-cost-to-lease-solar-panels-california"
      sources={sources}
      sourceCheckedDate="2026-09-22"
      topic="Understanding a solar lease or PPA quote"
      primaryResourceHref="/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa"
      primaryResourceLabel="Lease and PPA compared"
      comparisonHref="/blog/is-it-better-to-buy-or-lease-solar-panels-california"
      comparisonLabel="Buy or lease"
      inquiry={
        <SolarInquiry
          variant="decision"
          topic="Understanding a solar lease or PPA quote"
        />
      }
    >
      <FaqJsonLd items={faqs} />

      <section>
        <h2>Why there is no single number, and who is required to give you one</h2>
        <p>
          A solar lease payment is not a list price. It is the output of a
          calculation about one roof, one production estimate, one contract term
          and one household&rsquo;s electricity use. Two quotes for the same
          address can be built from different assumptions and still both be
          described as a monthly lease payment.
        </p>
        <p className="mt-3">
          California does not leave that to a sales conversation. Business and
          Professions Code section 7169(a) requires a disclosure that gives the
          consumer &ldquo;accurate, clear, and concise information regarding the
          installation of a solar energy system, total costs of installation,
          anticipated savings, the assumptions and inputs used to estimate the
          savings, and the implications of various financing options&rdquo;
          (verified 17 September 2026). Section 7169(b) then requires the Solar
          Energy System Disclosure Document on the front page or cover page of
          every solar energy contract, in boldface 16-point type, carrying
          &ldquo;the total cost and payments for the system, including financing
          costs,&rdquo; information on how and to whom complaints may be made,
          and the consumer&rsquo;s cancellation right under section 7159. The
          CSLB publishes the document itself, in three-day and five-day versions
          in English and Spanish, along with the separate Solar Energy System
          Supporting Information form (verified 18 September 2026).
        </p>
        <p className="mt-3">
          So the answer to &ldquo;how much&rdquo; exists, in writing, in a
          specified place, produced by the company that would actually install
          the system. Everything below is about reading it.
        </p>
      </section>

      <section>
        <h2>What a lease or PPA payment is actually built from</h2>
        <p className="mb-4">
          These are the inputs. None of them has a standard value, which is why
          a figure quoted without them tells you nothing.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>System size and design.</strong> The DC system size, the
            module and inverter models, and the roof layout the proposal assumes.
          </li>
          <li>
            <strong>The production estimate and its assumptions.</strong> How
            much the system is projected to produce, and what shading, tilt,
            orientation and loss assumptions produced that projection.
          </li>
          <li>
            <strong>What the payment is charged against.</strong> A lease
            generally charges for use of the equipment. A power purchase
            agreement generally charges for the output. That difference changes
            what happens in a low-production year.
          </li>
          <li>
            <strong>Contract term.</strong> How many years the obligation runs.
          </li>
          <li>
            <strong>Payment timing.</strong> Monthly, or prepaid in whole or in
            part. A prepaid label does not by itself end future payments.
          </li>
          <li>
            <strong>Whether an escalator applies.</strong> A clause that changes
            the payment over the term.
          </li>
          <li>
            <strong>What else is in scope.</strong> Storage, roof work,
            electrical panel work, trenching, permits and interconnection
            handling.
          </li>
          <li>
            <strong>What utility charges remain.</strong> Imports, fixed and
            delivery charges, and whatever the proposal assumes about export
            compensation on your tariff.
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Before relying on any statement about export compensation or the size
          of the remaining bill, ask the provider for the tariff and the
          assumptions in writing and check them against your own utility
          account. This page does not describe current export terms.
        </p>
      </section>

      <section>
        <h2>Escalators: two different things get called the same name</h2>
        <p>
          Both come up in a lease conversation and they are not the same number.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>A contract escalator</strong> changes what you pay the
            provider over the term. It is a clause in your agreement. The only
            way to know what it does is to read it and to ask for the full
            payment schedule, year by year, for the whole term. Do not accept a
            single monthly figure as the answer.
          </li>
          <li>
            <strong>A utility rate escalation assumption</strong> is an input to
            the provider&rsquo;s savings estimate, not a charge. It is the rate
            at which the estimate assumes your utility prices will rise. The
            CPUC states that &ldquo;solar providers are allowed to use a maximum
            electricity rate escalation of 10% in any calculation, as of
            2025&rdquo; (verified 18 September 2026). Two otherwise identical
            proposals can show very different savings on this assumption alone,
            which is why section 7169(a) requires the assumptions and inputs to
            be disclosed alongside the estimate.
          </li>
        </ol>
        <p className="mt-4">
          Ask which of the two a salesperson is describing, every time. More on
          the first of them in{" "}
          <Link
            className="underline"
            href="/solar-problems/solar-escalator-clause-explained"
          >
            what an escalator clause does
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>What the escalator range actually is, and what it compounds to</h2>
        <p>
          California&rsquo;s solar consumer guide puts a number on the
          contract escalator this page already tells you to ask about:
          &ldquo;Escalators are typically in the range of a 1 percent to 3
          percent increase above the rate you paid in the previous year. Be
          cautious of entering into a contract with an escalator higher than
          that&rdquo; (CPUC, California Solar Consumer Protection Guide,
          verified 22 September 2026). Sunrun&rsquo;s own materials describe
          a wider band for its leases and PPAs &mdash; &ldquo;somewhere
          between 1 and 5 percent&rdquo; each year (Sunrun, &ldquo;What&rsquo;s
          a Solar Lease or PPA?,&rdquo; verified 22 September 2026) &mdash;
          which is exactly why the state guide&rsquo;s caution matters: a
          contract can be entirely real and still sit above what CPUC calls
          typical.
        </p>
        <p className="mt-3">
          An escalator compounds, so small percentages move more than they
          sound like over a 20-25-year term. Indexing year one&rsquo;s
          payment at 100, here is what each rate alone does to that index
          &mdash; no dollar figure, because none applies to your contract:
        </p>
        <div className="overflow-x-auto rounded-xl border my-4">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Escalator compounding index by year, at 1%, 2% and 3%
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">1% escalator</th>
                <th className="p-4">2% escalator</th>
                <th className="p-4">3% escalator</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">1</td>
                <td className="p-4">100</td>
                <td className="p-4">100</td>
                <td className="p-4">100</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">5</td>
                <td className="p-4">104</td>
                <td className="p-4">108</td>
                <td className="p-4">113</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">10</td>
                <td className="p-4">109</td>
                <td className="p-4">120</td>
                <td className="p-4">130</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">15</td>
                <td className="p-4">115</td>
                <td className="p-4">132</td>
                <td className="p-4">151</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">20</td>
                <td className="p-4">121</td>
                <td className="p-4">146</td>
                <td className="p-4">175</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">25</td>
                <td className="p-4">127</td>
                <td className="p-4">161</td>
                <td className="p-4">203</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          At a 3% escalator, a 25-year payment schedule runs almost double
          where it started. For the full dollar-denominated version of this
          math against real California utility rate history, see{" "}
          <Link
            className="underline"
            href="/solar-problems/solar-escalator-clause-explained"
          >
            what a solar escalator clause does
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>The bill does not go to zero</h2>
        <p>
          The CPUC lists &ldquo;You will never pay an electricity bill ever
          again after a solar system is installed&rdquo; among the claims a
          consumer should treat as false, and states that customers who take out
          a solar loan or sign a lease or power purchase agreement &ldquo;will
          also receive a monthly bill from a loan company or solar
          provider&rdquo; (verified 18 September 2026).
        </p>
        <p className="mt-3">
          That means the comparison is the lease payment{" "}
          <em>plus</em> whatever utility bill remains, against the utility bill
          you pay now, on the same usage history and the same tariff. A proposal
          that compares only the lease payment against your current bill is
          comparing two different things.
        </p>
      </section>

      <QuoteChecklist />

      <section>
        <h2>The terms that decide a cost you have not been quoted</h2>
        <p className="mb-4">
          Most of what a lease or PPA will cost over its life is not the monthly
          number. Ask where each of these appears in the contract, by section.
        </p>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Solar lease and PPA contract terms to locate before signing
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Term</th>
                <th className="p-4">What to ask for in writing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Term length and end of term
                </th>
                <td className="p-4">
                  How many years, and what the stated options are at the end:
                  renewal, removal, purchase, or nothing specified.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Buyout and early termination
                </th>
                <td className="p-4">
                  The formula in the contract, not a verbal estimate, and
                  whether any fee applies for ending early.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Assignment at a home sale
                </th>
                <td className="p-4">
                  Whether a buyer may assume the agreement, what qualification
                  applies, and what happens if no assignment occurs. Section
                  7169(c)(11) identifies the impacts of the financing or lease
                  terms on the sale of the home, &ldquo;including any balloon
                  payments or solar energy system relocation that may be
                  required if the contract is not assigned to the new owner of
                  the home,&rdquo; as disclosure content &mdash; so ask for the
                  clause by name.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Repair, monitoring and insurance
                </th>
                <td className="p-4">
                  Who is responsible for each, for how long, and what is
                  excluded.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Production guarantee
                </th>
                <td className="p-4">
                  Whether one exists at all; what output level it guarantees;
                  how a shortfall is measured; what the remedy is and who
                  initiates it. A production estimate is not a guarantee.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">
                  Roof and equipment access
                </th>
                <td className="p-4">
                  What happens, and who pays, if the roof needs work or the
                  system needs removal and reinstallation during the term.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>What a production guarantee actually does</h2>
        <p>
          The table above tells you to ask whether your contract has one.
          Here is what that answer typically covers, in two providers&rsquo;
          own words. Sunrun states: &ldquo;If your system produces less than
          Sunrun predicted, you may be eligible for a Production Guarantee
          that compensates you for the difference between what we guaranteed
          and what the system actually produced&rdquo; (Sunrun, &ldquo;What&rsquo;s
          a Solar Lease or PPA?,&rdquo; verified 22 September 2026).
          Tesla&rsquo;s solar subscription guarantees &ldquo;95% system
          availability, calculated every two years; if your system ever
          falls short, Tesla compensates you&rdquo; (Tesla, &ldquo;Buying Out
          Your Tesla Solar Panel Lease,&rdquo; verified 22 September 2026).
          Both describe the same shape: a floor on output or uptime, checked
          on a stated schedule, with compensation if the system falls under
          it.
        </p>
        <p className="mt-3">
          A production guarantee is not protection against the escalator. It
          insures the electricity side of the bargain &mdash; what the
          panels generate &mdash; not the payment side, which can still rise
          on schedule even in a year the guarantee pays out. Confirm both
          separately: what output or uptime level is guaranteed, how a
          shortfall is measured, and what triggers payment, per the
          checklist above.
        </p>
      </section>

      <section>
        <h2>What &ldquo;$0 down&rdquo; changes about this math, and what it doesn&rsquo;t</h2>
        <p>
          CPUC&rsquo;s guide lists paying more up front to lower the monthly
          payment as one of the standard ways leases and PPAs &ldquo;can be
          arranged&rdquo; &mdash; the flip side of $0 down. &ldquo;$0
          down&rdquo; only sets when the first payment is due. It does not
          remove the escalator from a monthly-pay contract, does not change
          the contract term, and does not change what you owe in total. For
          what the claim does and doesn&rsquo;t mean, including
          California&rsquo;s cap on required down payments, see{" "}
          <Link className="underline" href="/blog/free-solar-panels-california#no-money-down">
            what a $0-down solar offer means
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>How buyout pricing actually works, in two providers&rsquo; own terms</h2>
        <p>
          The table above tells you to get the buyout formula in writing
          rather than a verbal estimate. CPUC&rsquo;s guide describes the
          outcome only in general terms &mdash; buying out a lease or PPA
          &ldquo;can cost thousands of dollars,&rdquo; with the number set by
          your contract (CPUC, California Solar Consumer Protection Guide,
          verified 22 September 2026). Two providers publish more of the
          mechanism.
        </p>
        <p className="mt-3">
          Tesla&rsquo;s published guide sets the buyout at &ldquo;whichever
          amount is lower, the estimated price from your contract or the
          appraised FMV&rdquo; (Tesla, &ldquo;Buying Out Your Tesla Solar
          Panel Lease,&rdquo; verified 22 September 2026). The full mechanics
          &mdash; the year-six standard-buyout window, the tax-credit
          vesting rule behind it, and why an earlier buyout (commonly at a
          home sale) is priced higher &mdash; are covered at{" "}
          <Link
            className="underline"
            href="/blog/what-happens-to-solar-lease-when-i-sell-california"
          >
            what happens to a solar lease when you sell in California
          </Link>
          .
        </p>
        <p className="mt-3">
          Sunrun does not publish a fixed buyout formula, but its own
          home-sale guidance describes a related option: a seller
          &ldquo;can prepay for the remainder of your service and bundle it
          into the price of your home&rdquo; rather than transferring the
          agreement to the buyer (Sunrun, &ldquo;Moving Made Easy,&rdquo;
          verified 22 September 2026). See{" "}
          <Link className="underline" href="/solar-installers/sunrun-review">
            Sunrun reviews
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/solar-installers/tesla-solar-review">
            Tesla Solar reviews
          </Link>{" "}
          for what to check with each before you sign, and{" "}
          <Link
            className="underline"
            href="/blog/what-happens-to-solar-lease-when-i-sell-california"
          >
            what happens to a solar lease when you sell in California
          </Link>{" "}
          for the full sale mechanics. Neither company&rsquo;s terms above
          substitute for your own contract&rsquo;s buyout schedule.
        </p>
      </section>

      <section>
        <h2>The lifetime cost shape: lease or PPA versus buying</h2>
        <p>
          This page does not tell you which structure costs less over its
          life &mdash; that depends on the same inputs named above, applied
          to one roof. What differs by structure, on cost shape alone:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>A lease or PPA is a payment stream that can grow.</strong>{" "}
            If it carries an escalator, the payment rises on the schedule
            above for the full term &mdash; 20-25 years, per CPUC&rsquo;s
            guide &mdash; and stops only at contract end, buyout, or an
            assumed transfer at sale.
          </li>
          <li>
            <strong>A cash purchase or loan has no escalator</strong>,
            because there is no recurring equipment or electricity charge to
            escalate; a loan&rsquo;s payment is typically fixed, and once
            paid off (or from day one, for cash), the only remaining charges
            are the utility&rsquo;s and, past the workmanship warranty, your
            own repair costs.
          </li>
          <li>
            <strong>
              The federal credit is out of this comparison for a 2026
              installation, either way.
            </strong>{" "}
            The Residential Clean Energy Credit &ldquo;is not available for
            any property placed in service after December 31, 2025&rdquo;
            (IRS, Residential Clean Energy Credit, verified 22 September
            2026) &mdash; that removes it from a purchase made now. Under a
            lease or PPA it was never the homeowner&rsquo;s credit to claim
            regardless of that cutoff: the credit is calculated on
            &ldquo;the costs of new, qualified clean energy property&rdquo;
            you acquire (IRS, Residential Clean Energy Credit), and a
            lessee does not acquire the equipment. That also answers whether
            a lease or PPA <em>payment</em> itself is a tax credit or
            deduction &mdash; it is not; the credit, where it applied,
            attached to ownership of the property, not to a monthly payment
            for someone else&rsquo;s.
          </li>
        </ul>
        <p className="mt-3">
          For the CPUC-sourced maintenance-responsibility split and a
          buy-if/lease-if checklist, see{" "}
          <Link
            className="underline"
            href="/blog/is-it-better-to-buy-or-lease-solar-panels-california"
          >
            buy or lease solar panels in California
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Check the provider before you compare the payment</h2>
        <p>
          The CPUC directs consumers to get the contractor&rsquo;s CSLB licence
          number, and the individual home improvement salesperson registration
          number if they were contacted by phone or door-to-door, and states
          that the licence must be active and in classification C-46 (Solar
          Contractor), C-10 (Electrical Contractor) or B (General Building
          Contractor) to be valid for this work (verified 18 September 2026). The
          CSLB lookup lets you check both. For what else separates one provider
          from another, see{" "}
          <Link className="underline" href="/blog/solar-leasing-company">
            how to compare solar leasing companies
          </Link>
          .
        </p>
        <p className="mt-3">
          The CPUC also requires solar providers to give you its consumer
          protection guide, and it publishes the guide itself. Read the copy you
          are given rather than a summary of it.
        </p>
      </section>

      <section>
        <h2>Before you sign</h2>
        <p>
          Civil Code section 1689.6(a) gives a buyer at least three business days
          to cancel a home solicitation contract, and five business days if the
          buyer is a senior citizen &mdash; defined in section 1689.5(f) as a
          person 65 years of age or older. For a home improvement contract,
          section 1689.6(a)(2) runs that period from the buyer&rsquo;s receipt of
          a signed and dated copy of the contract (verified 17 September 2026).
          The CPUC states the same three-day and five-day windows.
        </p>
        <p className="mt-3">
          Ask for the completed Solar Energy System Disclosure Document and the
          Supporting Information form, in the language the sale was negotiated
          in, and keep every signed version and change order.
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
          review contracts or give legal or tax advice. Sending project details
          is a referral request: it does not approve anything, does not determine
          a price, a payment or a tax result, and does not establish that any
          provider is available for your address. The checklists on this page
          work whether or not you send anything.
        </p>
      </section>

      <RelatedGuides
        heading="Read next, before you compare payments"
        intro="The terms that move a lease or PPA payment have their own pages."
        links={[
          {
            href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa",
            label: "Solar lease vs PPA in California",
            note: "what the two structures actually charge for",
          },
          {
            href: "/blog/is-it-better-to-buy-or-lease-solar-panels-california",
            label: "Buy or lease solar panels in California",
            note: "the 2026 federal-credit dating rule and what it changes",
          },
          {
            href: "/blog/free-solar-panels-california#no-money-down",
            label: "What a no-down-payment solar offer means",
            note: "why the first payment is not the total",
          },
          {
            href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california",
            label: "Cash, loan, lease and PPA compared",
            note: "the four payment structures side by side",
          },
          {
            href: "/blog/what-happens-to-solar-lease-when-i-sell-california",
            label: "Selling a home with a solar lease or PPA",
            note: "the assignment and buyout clauses to find first",
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
