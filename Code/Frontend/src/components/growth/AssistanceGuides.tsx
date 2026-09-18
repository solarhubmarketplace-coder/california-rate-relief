import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage } from "./DecisionPage";
import { RelatedGuides } from "@/components/shared/RelatedGuides";

const link = "text-emerald-800 underline underline-offset-2";
const law25 =
  "https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A25D+edition%3Aprelim%29";
const law48 =
  "https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29";
const sash =
  "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/california-solar-initiative/csi-single-family-affordable-solar-homes-program";
const dac =
  "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities";
const handbook =
  "https://gridalternatives.org/sites/default/files/2025-11/DAC%20Handbook%20v.6%208.1.2025%20%281%29.pdf";
const billHelp =
  "https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/family-electric-rate-assistance-program";
const tracker = "https://www.selfgenca.com/home/program_metrics/";
const guide = "https://www.cpuc.ca.gov/solarguide/";
// 2026-09-17 refresh: additional primary sources for kind === 'free' only
// (claude/ca-green-20260918). Nothing above this line changed.
const protectionGuide =
  "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide";
const guideV4 =
  "https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/solar-guide/2025-versions/solarguide25.pdf";
const gridDac =
  "https://gridalternatives.org/what-we-do/program-administration/dac-sash";
const somah = "https://calsomah.org/about";
const irs =
  "https://www.irs.gov/credits-deductions/residential-clean-energy-credit";
const downPayment =
  "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7159.5";
const disclosureDoc =
  "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169";
const cancelWindow =
  "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1689.6";
const definitions = {
  options: {
    path: "/blog/solar-tax-credit-expired-2026-options",
    title: "Solar tax credit ended: California options in 2026",
    intro:
      "A new proposal needs to work with the incentives actually available to your project. Start by removing any homeowner tax credit the project cannot claim. Then compare the full cost.",
    metaTitle: "Solar tax credit ended: California options in 2026",
    metaDescription:
      "A new proposal needs to work with the incentives actually available. Start by removing any homeowner tax credit the project cannot claim, then compare cost.",
  },
  california: {
    path: "/blog/california-solar-tax-credit-2026",
    title: "California solar incentives in 2026: which program does what?",
    intro:
      "A federal tax credit, a battery rebate and an electric-bill discount solve different problems. Put each in the right column before you compare a solar offer.",
    metaTitle: "California solar incentives 2026: which program does what?",
    metaDescription:
      "A federal tax credit, a battery rebate and an electric-bill discount solve different problems. Put each in the right column before you compare a solar offer.",
  },
  records: {
    path: "/blog/solar-tax-credit-2026",
    title: "Solar tax credit in 2026: completion dates and prior-year records",
    intro:
      "A payment receipt is only part of the record. For the federal residential credit, the installation timeline and the proper tax year matter. A deposit does not settle either.",
    metaTitle: "Solar tax credit 2026: completion dates, prior-year records",
    metaDescription:
      "A payment receipt alone is not enough. The federal residential credit depends on the installation timeline and correct tax year, not just a deposit.",
  },
  seniors: {
    path: "/blog/free-solar-for-seniors-california",
    title: "Free solar for seniors in California: check the actual program",
    intro:
      "Start with the program name. Being a senior does not, by itself, establish solar-program eligibility. Income, the property, the utility and available funding need to be checked.",
    metaTitle: "Free Solar for Seniors in California: Check DAC-SASH First",
    metaDescription:
      "Age alone does not qualify you for free solar in California. Check DAC-SASH income and property rules before signing anything. SASH is closed.",
  },
  // 2026-09-17 refresh (claude/ca-green-20260918). The 2026-09-10 reviewed
  // wording was: title "Free solar panels in California: what does the offer
  // cost?", intro "A zero-dollar upfront payment and a fully funded solar
  // installation are different offers...", metaTitle "Free Solar Panels in
  // California: What's the Catch?", metaDescription "A zero-dollar upfront offer
  // is not a funded installation...". Both were compliant; the replacements
  // target the query phrasing "can you get solar panels for free" directly.
  // The superseded text is retained in git history at d23af74.
  free: {
    path: "/blog/free-solar-panels-california",
    title: "Can you get solar panels for free in California?",
    intro:
      "Usually not, and the CPUC says so in those terms. A small number of government-funded programmes are genuinely no-cost for households that qualify. Everything else advertised as free is a payment contract with the payment moved somewhere you have not looked yet.",
    metaTitle: "Can You Get Solar Panels for Free in California?",
    metaDescription:
      "Most offers advertised as free are financing, a lease or a PPA. A small number of government programs are genuinely no-cost. How to tell which one you are in.",
  },
  income: {
    path: "/blog/low-income-solar-california",
    title: "Low-income solar in California: find the right application path",
    intro:
      "If the electric bill is urgent, start with bill assistance. If you want rooftop solar, check the property and program rules separately. One application does not automatically approve the other.",
    metaTitle: "Low-income solar in California: find the application path",
    metaDescription:
      "Bill assistance and rooftop solar have separate rules. If the bill is urgent, start with assistance. One application does not automatically approve the other.",
  },
};
type AssistanceKey = keyof typeof definitions;
export function assistanceMetadata(kind: AssistanceKey): Metadata {
  const def = definitions[kind];
  const { title, intro, path } = def;
  const metaTitle = "metaTitle" in def && def.metaTitle ? def.metaTitle : title;
  const metaDescription =
    "metaDescription" in def && def.metaDescription ? def.metaDescription : intro;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `https://ratereliefca.com${path}`,
      modifiedTime:
        kind === "free" ? "2026-09-17T00:00:00Z" : "2026-09-10T00:00:00Z",
    },
  };
}
function TaxTiming() {
  return (
    <section id="federal-credit">
      <h2>The federal residential credit has a completion deadline</h2>
      <p>
        Section 25D does not allow a credit for expenditures made after December
        31, 2025. Under its timing rule, an expenditure is generally made when
        original installation is completed. For construction or reconstruction
        of a structure, the taxpayer&apos;s original use of that structure sets
        the timing. Paying or signing in 2025 does not establish eligibility for
        a 2026 completion.
      </p>
      <p className="mt-3">
        Valid unused credit can carry forward under Section 25D(c). That does
        not create a credit for a new project that misses the expenditure
        deadline. Check the correct expenditure year and your records with your
        tax preparer.{" "}
        <a href={law25} className={link}>
          26 U.S.C. § 25D(c), (e)(8), (h)
        </a>
        , checked September 10, 2026.
      </p>
    </section>
  );
}
function ProgramPaths() {
  return (
    <section id="programs">
      <h2>Separate the available paths</h2>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            California assistance and solar program paths
          </caption>
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Path</th>
              <th className="p-4">What to check</th>
              <th className="p-4">Where to start</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <th scope="row" className="p-4 align-top">
                CARE / FERA
              </th>
              <td className="p-4">
                Electric-bill discounts with household and income rules. These
                programs do not install solar.
              </td>
              <td className="p-4">
                <a href={billHelp} className={link}>
                  CPUC and your utility
                </a>
              </td>
            </tr>
            <tr className="border-t">
              <th scope="row" className="p-4 align-top">
                DAC-SASH
              </th>
              <td className="p-4">
                Subsidized solar for eligible owner-occupied homes in qualifying
                areas; site suitability and funding are reviewed.
              </td>
              <td className="p-4">
                <a href={dac} className={link}>
                  CPUC program details
                </a>
              </td>
            </tr>
            <tr className="border-t">
              <th scope="row" className="p-4 align-top">
                SGIP
              </th>
              <td className="p-4">
                Specific storage or residential solar-and-storage budgets.
                Administrator, customer category and reservation status matter.
              </td>
              <td className="p-4">
                <Link
                  href="/battery/sgip-battery-rebate-california"
                  className={link}
                >
                  Current category guide
                </Link>
              </td>
            </tr>
            <tr className="border-t">
              <th scope="row" className="p-4 align-top">
                Cash, loan, lease or PPA
              </th>
              <td className="p-4">
                A purchase or payment contract. Compare total obligations and
                the remaining utility bill.
              </td>
              <td className="p-4">
                <Link
                  href="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
                  className={link}
                >
                  Payment comparison
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        The older{" "}
        <a href={sash} className={link}>
          SASH program is closed
        </a>
        . A page mentioning SASH is not evidence that new applications are open.
        Check DAC-SASH as its own program.
      </p>
    </section>
  );
}
function DacBoundary() {
  return (
    <section id="dac-sash">
      <h2>Who should check DAC-SASH?</h2>
      <p>
        The official handbook identifies several checks: PG&amp;E, SCE or
        SDG&amp;E service; a single-family primary residence owned and occupied
        by the applicant; household income meeting CARE or FERA income
        requirements; and a qualifying disadvantaged-community or California
        Indian Country location.
      </p>
      <p className="mt-3">
        The administrator also reviews the site and available funding. The
        handbook allows for funding gaps and possible applicant contributions.
        Ask for the approved project scope and any amount you would pay before
        treating an installation as fully funded.{" "}
        <a href={handbook} className={link}>
          GRID Alternatives DAC-SASH handbook, sixth edition, sections
          4.2.1–4.2.3
        </a>
        ; reviewed September 10, 2026.
      </p>
    </section>
  );
}
function BillDiscounts() {
  return (
    <section id="bill-discounts">
      <h2>Check bill discounts while you research solar</h2>
      <p>
        <a href={billHelp} className={link}>
          CARE and FERA
        </a>{" "}
        reduce eligible utility bills. They do not provide panels. FERA now
        includes eligible one- and two-person households; older advice limiting
        it to larger households is out of date. Use the current utility
        application and household-income schedule.
      </p>
      <p className="mt-3">
        Do not use a generic online income example to decide that you are
        excluded. Ask the utility which income sources count and which documents
        it accepts. Meeting a bill-discount rule does not automatically approve
        a separate solar application.
      </p>
    </section>
  );
}
function OfferQuestions() {
  return (
    <section id="offer-questions">
      <h2>Ask these questions before signing</h2>
      <ul className="list-disc space-y-3 pl-6">
        <li>
          What is the exact program or contract name, and who administers it?
        </li>
        <li>
          Who owns the panels and battery? Who is responsible for repairs?
        </li>
        <li>
          What do you pay upfront, each month, at a home sale and at the end of
          the contract?
        </li>
        <li>
          Can the payment increase? Ask for the full schedule and any escalator.
        </li>
        <li>
          What utility charges remain? Request the assumptions behind that
          estimate.
        </li>
        <li>If a rebate or subsidy is denied, who pays the difference?</li>
      </ul>
      <p className="mt-4">
        Get the answers in the actual documents. Use the{" "}
        <a href={guide} className={link}>
          California Solar Consumer Protection Guide
        </a>{" "}
        while reviewing an offer.
      </p>
    </section>
  );
}
export function AssistanceGuide({ kind }: { kind: AssistanceKey }) {
  const d = definitions[kind];
  return (
    <DecisionPage
      title={d.title}
      intro={d.intro}
      path={d.path}
      sourceCheckedDate={kind === "free" ? "2026-09-17" : "2026-09-10"}
      sources={[
        ...(kind === "options" || kind === "records" || kind === "california"
          ? [
              {
                label:
                  "U.S. Code: Section 25D expenditure timing, termination and carryforward",
                url: law25,
              },
              {
                label: "U.S. Code: Section 48E business credit requirements",
                url: law48,
              },
            ]
          : []),
        { label: "CPUC: SASH program closure", url: sash },
        { label: "CPUC: solar in disadvantaged communities", url: dac },
        {
          label: "GRID Alternatives: DAC-SASH handbook, sixth edition",
          url: handbook,
        },
        { label: "CPUC: current CARE and FERA requirements", url: billHelp },
        {
          label: "Official SGIP program metrics and category status",
          url: tracker,
        },
        { label: "CPUC: Solar Consumer Protection Guide", url: guide },
        ...(kind === "free"
          ? [
              {
                label:
                  "CPUC: California Solar Consumer Protection Guide overview and FAQ",
                url: protectionGuide,
              },
              {
                label:
                  "CPUC: California Solar Consumer Protection Guide, Version 4 (2025)",
                url: guideV4,
              },
              {
                label: "GRID Alternatives: DAC-SASH program administration",
                url: gridDac,
              },
              {
                label:
                  "SOMAH: Solar on Multifamily Affordable Housing program",
                url: somah,
              },
              {
                label:
                  "26 U.S.C. § 25D (termination and expenditure timing rule)",
                url: law25,
              },
              { label: "IRS: Residential Clean Energy Credit", url: irs },
              {
                label:
                  "California Business and Professions Code § 7159.5 (down payment cap)",
                url: downPayment,
              },
              {
                label:
                  "California Business and Professions Code § 7169 (solar energy system disclosure document)",
                url: disclosureDoc,
              },
              {
                label:
                  "California Civil Code § 1689.6 (three- and five-business-day cancellation window)",
                url: cancelWindow,
              },
            ]
          : []),
      ]}
    >
      {kind === "options" && (
        <>
          <TaxTiming />
          <section id="provider-credit">
            <h2>A provider&apos;s tax position is not your homeowner credit</h2>
            <p>
              Section 48E may apply to qualifying business-owned equipment. That
              does not give the resident a tax credit or establish a particular
              PPA price. Ask the provider to price the actual contract; do not
              subtract a provider credit from your own bill calculation.{" "}
              <a href={law48} className={link}>
                26 U.S.C. § 48E
              </a>
              .
            </p>
          </section>
          <ProgramPaths />
          <section>
            <h2>Make the proposal work without an unavailable credit</h2>
            <p>
              Request the cash price before incentives. Put battery, roof and
              electrical work on separate lines. For financing, add the total
              payments and remaining utility bill. If the proposal only works
              after subtracting a homeowner credit the project cannot claim, the
              comparison needs to be redone.
            </p>
            <p className="mt-3">
              Use the{" "}
              <Link href="/tools/solar-panel-calculator" className={link}>
                bill and quote calculator
              </Link>{" "}
              with the proposal&apos;s actual inputs. It does not calculate tax
              eligibility.
            </p>
          </section>
        </>
      )}
      {kind === "california" && (
        <>
          <section>
            <h2>Start with the incentive&apos;s owner and purpose</h2>
            <p>
              A federal credit belongs in the eligible taxpayer&apos;s
              calculation. A project rebate needs an approved budget and
              reservation. A household bill discount reduces utility charges.
              None should appear as an automatic reduction on every California
              solar quote.
            </p>
            <p className="mt-3">
              For a new homeowner purchase, read the{" "}
              <Link href={definitions.options.path} className={link}>
                2026 federal-credit and payment-options guide
              </Link>{" "}
              before accepting an incentive line. State program availability
              does not extend the federal expenditure deadline.
            </p>
          </section>
          <ProgramPaths />
          <DacBoundary />
          <section>
            <h2>Check the address before the estimate</h2>
            <p>
              Identify the electric utility, any community choice provider and
              the actual program administrator. A city name or ZIP code is a
              starting point, not an approval. Ask whether the budget covers
              your customer category and whether the project has a reservation.
            </p>
            <p className="mt-3">
              The{" "}
              <a href={tracker} className={link}>
                SGIP tracker
              </a>{" "}
              separates categories that can be open, closed or waitlisted. Read
              the row and administrator together. A remaining dollar balance
              alone does not establish availability.
            </p>
          </section>
        </>
      )}
      {kind === "records" && (
        <>
          <TaxTiming />
          <section id="records">
            <h2>Put the timeline in one file</h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>Keep the signed contract, invoices and payment dates.</li>
              <li>
                Ask for records showing original installation completion,
                including the work that was still outstanding.
              </li>
              <li>
                For construction or reconstruction, retain the original-use
                timeline for the structure.
              </li>
              <li>
                Keep prior returns and credit worksheets if you are claiming a
                valid carryforward.
              </li>
              <li>
                Have your preparer determine the proper expenditure year and
                filing treatment. A prior-year project does not automatically
                belong on the 2025 return.
              </li>
            </ul>
          </section>
          <section>
            <h2>What if the proposal calls the credit a discount?</h2>
            <p>
              Ask who claims it and where the discount appears in the signed
              price. A provider may have a separate business tax position under{" "}
              <a href={law48} className={link}>
                Section 48E
              </a>
              . That is not a resident&apos;s entitlement, and it does not
              establish savings.
            </p>
            <p className="mt-3">
              Comparing a new purchase now? Use the{" "}
              <Link href={definitions.options.path} className={link}>
                current options guide
              </Link>
              . Looking for local assistance? Review{" "}
              <Link href={definitions.california.path} className={link}>
                California program paths
              </Link>
              .
            </p>
          </section>
        </>
      )}
      {kind === "seniors" && (
        <>
          <section>
            <h2>Does age qualify you for free panels?</h2>
            <p>
              The programs linked here have their own eligibility rules. Do not
              assume that retirement, Social Security, Medicare or home equity
              settles the application. Start with the current
              administrator&apos;s requirements, not a &ldquo;senior
              solar&rdquo; advertisement.
            </p>
          </section>
          <DacBoundary />
          <BillDiscounts />
          <section>
            <h2>If you rent or share the home</h2>
            <p>
              Ask the utility about the household&apos;s bill-assistance
              options. DAC-SASH&apos;s homeowner rule does not mean every
              assistance or community program is unavailable to renters. For a
              shared household, check who holds the account and whose income the
              application includes. If a purchase or contract is the next step,{" "}
              <Link
                href="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
                className={link}
              >
                compare cash, loan, lease and PPA obligations
              </Link>
              , read{" "}
              <Link href="/blog/solar-ppa-vs-lease-california" className={link}>
                how a PPA differs from a lease
              </Link>
              , and check{" "}
              <Link
                href="/blog/what-happens-to-solar-lease-when-i-sell-california"
                className={link}
              >
                what happens to the contract if the home is sold
              </Link>
              . Where no rooftop is available,{" "}
              <Link href="/blog/is-community-solar-worth-it" className={link}>
                a shared community project
              </Link>{" "}
              is the other route to compare.
            </p>
          </section>
          <OfferQuestions />
          <RelatedGuides
            heading="If someone is selling at the door"
            intro="The complaint patterns Californian households report most often."
            links={[
              { href: "/solar-problems/solar-door-to-door-sales-california", label: "What a door-to-door rep can and cannot legally do" },
              { href: "/solar-problems/free-solar-california-is-it-real", label: "What a free-solar offer actually is" },
              { href: "/solar-problems/does-solar-mean-free-electricity-california", label: "Why solar is not free electricity" },
            ]}
          />
          <section>
            <h2>Where to apply</h2>
            <p>
              Follow the{" "}
              <a href={dac} className={link}>
                official DAC-SASH program path
              </a>{" "}
              for program screening and your utility for CARE or FERA. SASH is
              closed. California Rate Relief&apos;s optional inquiry below is a
              private solar referral request; it is not a government-benefit
              application.
            </p>
          </section>
        </>
      )}
      {/*
        2026-09-17 sourced refresh of the kind === 'free' body
        (claude/ca-green-20260918), from
        DRAFT_free-solar-panels-california_REFRESH_2026-09-17.md.
        Added at this date: the CPUC "solar energy is rarely free" quotation as
        the opening answer; a $0-down section keyed to Bus. & Prof. Code
        §7159.5(a)(3); SOMAH for renters and multifamily; the §25D 2026 position;
        the statutory cancellation route; and the Track 1 internal links.
        The four-row "what an advertisement can mean" table supersedes the
        2026-09-10 three-card grid and covers the same distinction plus the
        $0-down and bundled-item cases. The shared DacBoundary and OfferQuestions
        components are left untouched for the other assistance pages; this page
        carries the draft's own DAC-SASH and offer-question sections instead,
        because the handbook section numbers 4.2.1–4.2.3 that DacBoundary cites
        are an open verification item. The superseded 2026-09-10 reviewed
        correction body is retained in git history at d23af74.
        Rule applied throughout: "free" and "no cost" appear only inside an
        attributed government quotation, or as a description of what an
        advertisement claims, immediately qualified.
      */}
      {kind === "free" && (
        <>
          <section>
            <h2>Start with what the state regulator says</h2>
            <p>
              The California Public Utilities Commission lists “You can get free
              solar energy at no cost to you” first among the false claims it
              tells consumers to watch for, and answers it directly:
            </p>
            <blockquote className="mt-4 border-l-4 border-emerald-700 pl-4 italic">
              “Solar energy is rarely free. An honest company will be upfront
              about all the costs you will pay over time. There is one exception:
              a few government-funded solar programs offer free or low-cost solar
              to low-income households.”
              <span className="mt-2 block not-italic text-sm">
                —{" "}
                <a href={protectionGuide} className={link}>
                  CPUC, California Solar Consumer Protection Guide Overview
                  &amp; FAQ
                </a>{" "}
                (verified 2026-09-17)
              </span>
            </blockquote>
            <p className="mt-4">
              That is the whole answer in outline. The rest of this page is which
              of the two situations you are in, and how to tell.
            </p>
            <p className="mt-3">
              The CPUC also warns, in the same list, against “You will never pay
              an electricity bill ever again after a solar system is installed,”
              and states: “Customers who take out a solar loan or sign a lease or
              power purchase agreement will also receive a monthly bill from a
              loan company or solar provider.” If you use PACE financing, the
              CPUC notes “you will also make a payment once or twice a year with
              your property taxes or monthly with your mortgage payment.”
              (Verified 2026-09-17.)
            </p>
          </section>
          <section>
            <h2>The four things an advertisement can mean by “free”</h2>
            <p>
              An offer marketed as free is almost always one of these. They are
              not equivalent and the paperwork is different for each.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  What an advertisement marketed as free can actually mean
                </caption>
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">What the ad means</th>
                    <th className="p-4">What you actually have</th>
                    <th className="p-4">Where the cost sits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <th scope="row" className="p-4 align-top">
                      $0 down
                    </th>
                    <td className="p-4">
                      A purchase financed with borrowed money
                    </td>
                    <td className="p-4">
                      Interest, fees, term and total payments — none of which are
                      reduced by a $0 down payment
                    </td>
                  </tr>
                  <tr className="border-t">
                    <th scope="row" className="p-4 align-top">
                      Lease
                    </th>
                    <td className="p-4">
                      A company owns the equipment; you have a payment contract
                    </td>
                    <td className="p-4">
                      A monthly payment, possibly an escalator, a term, and
                      end-of-term and home-sale terms
                    </td>
                  </tr>
                  <tr className="border-t">
                    <th scope="row" className="p-4 align-top">
                      Power purchase agreement (PPA)
                    </th>
                    <td className="p-4">
                      A company owns the equipment; you buy the output
                    </td>
                    <td className="p-4">
                      A rate per kilowatt-hour, possibly an escalator, plus
                      whatever grid electricity you still use
                    </td>
                  </tr>
                  <tr className="border-t">
                    <th scope="row" className="p-4 align-top">
                      “Free” roof, “free” battery, “free” upgrade
                    </th>
                    <td className="p-4">
                      An item folded into one total price
                    </td>
                    <td className="p-4">
                      Inside the financed amount, the lease payment or the PPA
                      rate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              The existing site guidance applies unchanged: separate the solar
              scope, the roof scope, the financing agreement and any change-order
              terms, and compare them as separate pieces. A monthly payment alone
              does not show what each part of the project costs or who is
              responsible for it.
            </p>
            <p className="mt-3">
              Also: no down payment is not the same as no cost, and California
              caps the down payment on a home improvement contract anyway.
              Business and Professions Code section 7159.5(a)(3): “If a
              downpayment will be charged, the downpayment shall not exceed one
              thousand dollars ($1,000) or 10 percent of the contract amount,
              whichever amount is less.”{" "}
              <a href={downPayment} className={link}>
                Bus. &amp; Prof. Code §7159.5
              </a>
              , verified 2026-09-17. A $0 down payment is therefore a small
              distance from the legal maximum, not a gift.
            </p>
            <p className="mt-3">
              How the two third-party structures differ from each other:{" "}
              <Link href="/blog/solar-ppa-vs-lease-california" className={link}>
                solar PPA versus lease in California
              </Link>
              .
            </p>
          </section>
          <section id="dac-sash">
            <h2>
              The genuine no-cost route for a single-family homeowner: DAC-SASH
            </h2>
            <p>
              This is the programme the CPUC’s “one exception” points at for
              single-family homes. Use its real name, and apply through its real
              administrator.
            </p>
            <p className="mt-3">
              <strong>What the CPUC says it is.</strong> “Disadvantaged
              Communities – Single-family Solar Homes (DAC-SASH): This program
              enables income-qualified homeowners in DACs to receive no-cost
              rooftop solar installations.” The CPUC’s own instruction on that
              page: “Please visit GRID Alternatives’ website to apply for a
              no-cost solar system.” (
              <a href={dac} className={link}>
                CPUC, Solar in Disadvantaged Communities
              </a>
              , verified 2026-09-17.)
            </p>
            <p className="mt-3">
              <strong>Who administers it.</strong> “Through a competitive
              solicitation, GRID Alternatives was selected to serve as the
              statewide program administrator for the DAC-SASH program.” The CPUC
              approved the DAC-SASH Program Handbook and Program Implementation
              Plan in Resolution E-5020 on 12 September 2019. (Verified
              2026-09-17.)
            </p>
            <p className="mt-3">
              <strong>Eligibility, as the CPUC states it.</strong>{" "}
              “Income-qualified, single-family homeowners in DACs (must be
              eligible for CARE or FERA) or in San Joaquin Valley (SJV) pilot
              communities identified in R.15-03-010.” Project location: “In DACs
              on a qualified customer’s property.” Project size: “1 kilowatt (kW)
              or higher.” (Verified 2026-09-17.)
            </p>
            <p className="mt-3">
              <strong>Eligibility, as the programme handbook states it.</strong>{" "}
              The DAC-SASH Program Handbook, sixth edition, approved 1 August
              2025, sets four minimum requirements at application: the applicant
              must be a customer of PG&amp;E, SCE or SDG&amp;E; “[t]he
              single-family residence must be owned, and occupied, by the
              Applicant as their primary residence”; “[t]he household’s total
              annual income must meet the income eligibility requirements for
              either the California Alternate Rates for Energy (CARE) or Family
              Electric Rate Assistance (FERA) programs”; and “[t]he residence must
              be located in a qualified Disadvantaged Community (DAC)” or within
              California Indian Country. (
              <a href={handbook} className={link}>
                GRID Alternatives, DAC-SASH Handbook v.6
              </a>
              , verified 2026-09-17.)
            </p>
            <p className="mt-3">
              <strong>What “no-cost” does and does not guarantee.</strong> The
              incentive is a rate, not a blank cheque. The CPUC states customers
              receive “$3/watt incentives to install an onsite solar system and
              energy efficiency training.” The handbook is explicit about what
              happens when the project costs more than that: “If the system cost
              is higher than the incentive, GRID Alternatives will make a good
              faith effort to identify additional funding resources … Applicants
              will also be advised of the financing gap and offered the
              opportunity to pay it out-of-pocket.” The handbook also notes GRID
              “typically does not install on properties with less than 10 years of
              roof-life remaining.” (Verified 2026-09-17.)
            </p>
            <p className="mt-3">
              So: ask the administrator, in writing, for the approved project
              scope and any amount you would pay, before treating any installation
              as fully funded. The CPUC’s own Energy Division has published a
              staff report on exactly this problem, titled “Closing the Funding
              Gap: Evaluating Solar-Readiness Costs in California’s Disadvantaged
              Communities – Single Family Affordable Homes (DAC-SASH) Program,”
              listed among the programme documents on the CPUC page. (Verified
              2026-09-17.)
            </p>
            <p className="mt-3">
              <strong>How the geography is defined.</strong> The CPUC relies on
              CalEnviroScreen and defines a disadvantaged community, for these
              programmes, as “a community that appears among the top 25 percent of
              census tracts identified by CalEnviroScreen statewide, as well as 22
              census tracts in the highest 5 percent of CalEnviroScreen’s
              Pollution Burden, but that do not have an overall CalEnviroScreen
              score because of unreliable socioeconomic or health data,” later
              expanded to California Indian Country. A city name or a ZIP code is
              not the unit of measurement — the census tract is. (Verified
              2026-09-17.)
            </p>
            <p className="mt-3">
              <strong>Programme scale and horizon.</strong> CPUC: “Program budget:
              $120 million total ($10 million per year 2019 - 2030).”{" "}
              <a href={gridDac} className={link}>
                GRID Alternatives
              </a>{" "}
              states it is “accepting applications to DAC-SASH through our Energy
              for All Program,” describes roughly “$8.5 million in incentives
              annually,” and states “the DAC-SASH program runs through 2030.”
              (Verified 2026-09-17.) Intake status changes; ask the administrator
              what is open before you rely on a page for it.
            </p>
          </section>
          <section id="somah">
            <h2>
              If you rent or live in an apartment: SOMAH, and who it is actually
              for
            </h2>
            <p>
              SOMAH is for the <strong>property</strong>, not for the tenant to
              apply to directly. Say so plainly, because the query brings renters.
            </p>
            <p className="mt-3">
              The CPUC adopted the Solar on Multifamily Affordable Housing
              programme in Decision 17-12-022 and states it “provides an avenue
              for customers residing in multifamily affordable housing to access
              solar electric generation, with a special provision to increase
              solar installation in DACs.” (Verified 2026-09-17.)
            </p>
            <p className="mt-3">
              The programme’s own site states SOMAH “provides financial incentives
              for installing solar panel and integrated storage systems that
              benefit both low-income tenants and property owners of multifamily
              affordable housing properties throughout California,” that the
              programme administrators are the Center for Sustainable Energy
              (primary contract holder), GRID Alternatives, the Association for
              Energy Affordability and California Housing Partnership, that SOMAH
              “provides an average of $100 million in financial incentives each
              year” with payments made “60% after solar and storage projects reach
              mechanical completion, and the remaining 40% after interconnection
              is complete,” and that it targets 300 megawatts of generating
              capacity by 2032. Applications are submitted through the PowerClerk
              portal. (
              <a href={somah} className={link}>
                calsomah.org
              </a>
              , verified 2026-09-17.)
            </p>
            <p className="mt-3">
              If you rent, the practical step is to give the programme information
              to the property owner or manager, and separately to ask your utility
              about bill assistance for your own account.
            </p>
          </section>
          <section id="bill-assistance">
            <h2>
              Bill assistance is a different door, and it is usually the faster
              one
            </h2>
            <p>
              <a href={billHelp} className={link}>
                CARE and FERA
              </a>{" "}
              reduce eligible electric bills. They do not provide panels. If the
              bill is the urgent problem, that is the application to start, and it
              does not depend on a roof, a landlord or a census tract. The CPUC
              publishes the current household and income requirements and the
              utility takes the application. (CPUC, verified 2026-09-17.)
            </p>
            <p className="mt-3">
              The assistance application path in full:{" "}
              <Link href={definitions.income.path} className={link}>
                the low-income solar checklist
              </Link>
              . Age by itself does not qualify anyone —{" "}
              <Link href={definitions.seniors.path} className={link}>
                DAC-SASH rules do
              </Link>
              .
            </p>
          </section>
          <section>
            <h2>SASH is closed</h2>
            <p>
              The CPUC’s page for the older Single-family Affordable Solar Homes
              programme states: “NOTE: This program is closed.” (
              <a href={sash} className={link}>
                CPUC
              </a>
              , verified 2026-09-17.) A page, brochure or sales script mentioning
              SASH is not evidence that new applications are open. DAC-SASH is a
              separate programme with its own rules, administrator and handbook.
            </p>
            <p className="mt-3">
              For storage or solar-and-storage funding, check the{" "}
              <Link href="/battery/sgip-battery-rebate-california" className={link}>
                SGIP category guide
              </Link>{" "}
              — read the row and the administrator together rather than the
              programme name alone.
            </p>
          </section>
          <section id="federal-credit-2026">
            <h2>There is no homeowner federal tax credit for a 2026 completion</h2>
            <p>
              A “free after the tax credit” pitch has a dating problem in 2026.
            </p>
            <p className="mt-3">
              26 U.S.C. §25D(h): “The credit allowed under this section shall not
              apply with respect to any expenditures made after December 31,
              2025.” §25D(e)(8)(A): “Except as provided in subparagraph (B), an
              expenditure with respect to an item shall be treated as made when
              the original installation of the item is completed.” §25D(e)(8)(B)
              dates an expenditure in connection with the construction or
              reconstruction of a structure to when the taxpayer’s original use of
              that structure begins. The section was last amended by Pub. L.
              119-21, title VII, §70506, enacted 4 July 2025. (
              <a href={law25} className={link}>
                uscode.house.gov
              </a>
              , verified 2026-09-17.)
            </p>
            <p className="mt-3">
              The IRS states on its Residential Clean Energy Credit page: “The
              credit is not available for any property placed in service after
              December 31, 2025,” and “You must claim the credit for the tax year
              when the property is installed, not merely purchased.” That page’s
              stated last review date is 4 July 2026. (
              <a href={irs} className={link}>
                irs.gov
              </a>
              , verified 2026-09-17.)
            </p>
            <p className="mt-3">
              Signing or paying in 2025 does not establish eligibility for a 2026
              completion. Tax treatment depends on the facts and the applicable
              tax year; use the current IRS guidance and a qualified tax
              professional, not a sales estimate.
            </p>
            <p className="mt-3">
              A provider may have its own separate business tax position. That is
              not a homeowner entitlement and it does not establish a price or a
              saving. See{" "}
              <Link href={definitions.options.path} className={link}>
                what the ended homeowner credit leaves available in 2026
              </Link>{" "}
              for the §48E detail.
            </p>
          </section>
          <section id="offer-questions">
            <h2>How to read the offer in front of you</h2>
            <p>
              Ask these, and get the answers in the actual documents rather than
              in conversation.
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6">
              <li>
                <strong>
                  What is the exact programme or contract name, and who
                  administers it?
                </strong>{" "}
                A logo on a flyer is not a reservation.
              </li>
              <li>
                <strong>Who owns the equipment?</strong> Owned, financed, leased
                or PPA. This determines almost everything else.
              </li>
              <li>
                <strong>
                  What do I pay upfront, each month, at a home sale, and at the
                  end of the contract?
                </strong>
              </li>
              <li>
                <strong>Can the payment increase?</strong> Ask for the full
                schedule and any escalator.
              </li>
              <li>
                <strong>
                  What utility charges remain, and what assumptions produced that
                  estimate?
                </strong>{" "}
                The CPUC states that “[s]olar providers are allowed to use a
                maximum electricity rate escalation of 10% in any calculation, as
                of 2025,” and tells homeowners to ask how a savings figure was
                calculated. (Verified 2026-09-17.)
              </li>
              <li>
                <strong>
                  If a rebate, incentive or subsidy is denied, who pays the
                  difference?
                </strong>
              </li>
              <li>
                <strong>
                  What is the contractor’s licence number, and is it valid?
                </strong>{" "}
                The CPUC states the CSLB licence “must be active and in
                classification C-46 (Solar Contractor), C-10 (Electrical
                Contractor), or B (General Building Contractor) in order to be
                valid,” and that a door-to-door or telephone salesperson should
                give an individual home improvement salesperson registration
                number. (Verified 2026-09-17.)
              </li>
              <li>
                <strong>
                  Where is the Solar Energy System Disclosure Document?
                </strong>{" "}
                <a href={disclosureDoc} className={link}>
                  Business and Professions Code section 7169(b)
                </a>{" "}
                requires it on “the front page or cover page of every solar energy
                contract,” in “boldface 16-point type,” including the total cost
                and payments, how to complain, and the cancellation right under
                section 7159. (Verified 2026-09-17.)
              </li>
            </ol>
            <p className="mt-4">
              You are not obliged to decide at the door. The CPUC: “An honest
              salesperson would never rush you to sign anything without giving you
              time to review what you are signing,” and “[y]ou are entitled by law
              to have a printed version of the Consumer Protection Guide if you
              ask for it.” (
              <a href={guideV4} className={link}>
                California Solar Consumer Protection Guide, Version 4 (2025)
              </a>
              ; verified 2026-09-17.)
            </p>
          </section>
          <section id="already-signed">
            <h2>If you already signed</h2>
            <p>
              There is a statutory cancellation window and it runs on a clock.{" "}
              <a href={cancelWindow} className={link}>
                Civil Code section 1689.6(a)
              </a>{" "}
              gives at least three business days, or five business days for a buyer
              who is a senior citizen — defined by section 1689.5(f) as 65 or older
              — and for a home improvement contract section 1689.6(a)(2) runs that
              clock from when you receive a signed and dated copy of the contract.
              See{" "}
              <Link
                href="/blog/can-you-cancel-solar-panel-contract-before-installation-california"
                className={link}
              >
                the cancellation guide
              </Link>{" "}
              for how to send the notice. (Verified 2026-09-17.)
            </p>
          </section>
          <section>
            <h2>A referral request is optional and separate</h2>
            <p>
              California Rate Relief is a private referral service. It is not a
              government programme, not an administrator of one, and cannot
              determine eligibility for DAC-SASH, SOMAH, CARE, FERA or SGIP. A
              referral request does not enrol you in any public programme, does not
              approve financing, and does not promise a price, a savings figure or
              an installation. If you may qualify for a government-funded
              programme, apply through its administrator first.
            </p>
          </section>
          <section>
            <h2>Frequently asked questions</h2>
            <div className="mt-3 space-y-6">
              <div>
                <h3>Can you actually get free solar panels in California?</h3>
                <p>
                  The CPUC’s answer: “Solar energy is rarely free. An honest
                  company will be upfront about all the costs you will pay over
                  time. There is one exception: a few government-funded solar
                  programs offer free or low-cost solar to low-income households.”
                  For single-family homeowners the programme the CPUC points to is
                  DAC-SASH, which it describes as enabling “income-qualified
                  homeowners in DACs to receive no-cost rooftop solar
                  installations.” Everything else advertised as free is a payment
                  contract. (Verified 2026-09-17.)
                </p>
              </div>
              <div>
                <h3>Who qualifies for DAC-SASH?</h3>
                <p>
                  The CPUC states: “Income-qualified, single-family homeowners in
                  DACs (must be eligible for CARE or FERA) or in San Joaquin Valley
                  (SJV) pilot communities.” The programme handbook, sixth edition
                  (approved 1 August 2025), requires service from PG&amp;E, SCE or
                  SDG&amp;E; a single-family residence “owned, and occupied, by the
                  Applicant as their primary residence”; household income meeting
                  CARE or FERA requirements; and a location in a qualified
                  Disadvantaged Community or California Indian Country. Apply
                  through GRID Alternatives, the CPUC-selected statewide
                  administrator. (Verified 2026-09-17.)
                </p>
              </div>
              <div>
                <h3>If I qualify, is it definitely $0 to me?</h3>
                <p>
                  Ask for the approved scope and any amount you would pay, in
                  writing. The incentive is “$3/watt” per the CPUC, and the
                  handbook states that if “the system cost is higher than the
                  incentive, GRID Alternatives will make a good faith effort to
                  identify additional funding resources … Applicants will also be
                  advised of the financing gap and offered the opportunity to pay
                  it out-of-pocket.” The handbook also notes GRID “typically does
                  not install on properties with less than 10 years of roof-life
                  remaining.” (Verified 2026-09-17.)
                </p>
              </div>
              <div>
                <h3>I rent. Is there anything for me?</h3>
                <p>
                  DAC-SASH requires the applicant to own and occupy the residence.
                  For multifamily affordable housing, SOMAH provides incentives for
                  systems benefiting low-income tenants and property owners,
                  administered by the Center for Sustainable Energy with GRID
                  Alternatives, the Association for Energy Affordability and
                  California Housing Partnership under CPUC oversight — but the
                  application comes from the property, not the tenant. Separately,
                  ask your utility about CARE or FERA bill assistance for your own
                  account. (Verified 2026-09-17.)
                </p>
              </div>
              <div>
                <h3>Does “$0 down” mean free?</h3>
                <p>
                  No. It describes the first payment, not the total. California
                  caps a home improvement down payment at “one thousand dollars
                  ($1,000) or 10 percent of the contract amount, whichever amount
                  is less” (Bus. &amp; Prof. Code §7159.5(a)(3)), so $0 down is a
                  small distance from the legal maximum. Compare the cash price,
                  the total of payments, the interest or escalator, and the
                  electricity bill that remains. (Verified 2026-09-17.)
                </p>
              </div>
              <div>
                <h3>What about “free after the tax credit”?</h3>
                <p>
                  26 U.S.C. §25D(h) provides the credit “shall not apply with
                  respect to any expenditures made after December 31, 2025,” and
                  §25D(e)(8)(A) treats an expenditure as made “when the original
                  installation of the item is completed.” The IRS states the credit
                  “is not available for any property placed in service after
                  December 31, 2025.” A 2026 completion does not qualify, whatever
                  the signing date. Use a qualified tax professional. (Verified
                  2026-09-17.)
                </p>
              </div>
            </div>
          </section>
          <RelatedGuides
            heading="What the offer turns out to be"
            links={[
              { href: "/solar-problems/free-solar-california-is-it-real", label: "Is free solar in California real?" },
              { href: "/solar-problems/does-solar-mean-free-electricity-california", label: "Does solar mean free electricity?" },
              { href: "/solar-problems/hidden-costs-of-solar-california", label: "The costs that arrive after the quote" },
              { href: "/solar-problems/solar-sales-tactics-california", label: "What each sales tactic obscures" },
              { href: "/solar-problems/why-solar-reps-get-a-bad-name", label: "Why the sales channel earns its reputation" },
              { href: "/blog/solar-ppa-vs-lease-california", label: "How a PPA differs from a lease" },
              { href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california", label: "Cash, loan, lease and PPA side by side" },
              { href: "/blog/can-you-cancel-solar-panel-contract-before-installation-california", label: "The statutory cancellation window" },
              { href: "/blog/solar-tax-credit-expired-2026-options", label: "The 2026 federal-credit position" },
            ]}
          />
          <section>
            <h2>A programme name is not an approval</h2>
            <p>
              SASH is closed. DAC-SASH and SGIP have their own rules and budget
              status. Verify the official administrator and the project’s written
              funding terms. A salesperson showing a programme logo does not
              establish a reservation. The inquiry below asks California Rate
              Relief to review a referral; it does not enroll you in a public
              program.
            </p>
          </section>
        </>
      )}
      {kind === "income" && (
        <>
          <BillDiscounts />
          <DacBoundary />
          <section id="application">
            <h2>Build the application checklist</h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li>Confirm the utility account and service address.</li>
              <li>
                Ask which household members and income sources the program
                includes.
              </li>
              <li>
                Use the administrator&apos;s location screening; do not assume
                an entire city qualifies.
              </li>
              <li>
                For rooftop solar, confirm ownership, occupancy, roof condition
                and who can authorize work.
              </li>
              <li>
                Request current funding status, any waitlist rules and any
                expected homeowner contribution.
              </li>
            </ol>
            <p className="mt-4">
              Keep sensitive income documents for the official program&apos;s
              application channel. This site&apos;s solar inquiry does not need
              tax returns, benefit statements or Social Security numbers.
            </p>
          </section>
          <section>
            <h2>If one program does not fit</h2>
            <p>
              Ask the utility about bill assistance and the official
              administrator about other eligible paths. A closed SASH
              application route is not proof that every program is closed. A
              denied rooftop application is not a reason to skip available bill
              discounts.
            </p>
            <p className="mt-3">
              For storage or solar-and-storage funding, check the{" "}
              <Link
                href="/battery/sgip-battery-rebate-california"
                className={link}
              >
                SGIP category guide
              </Link>
              . If you are considering a private contract, review{" "}
              <Link href={definitions.free.path} className={link}>
                what a free-solar offer actually costs
              </Link>
              .
            </p>
          </section>
          <RelatedGuides
            heading="Other routes when a rooftop project does not fit"
            links={[
              { href: "/blog/is-community-solar-worth-it", label: "Whether a shared community project is worth it" },
              { href: "/solar-problems/free-solar-california-is-it-real", label: "What a free-solar offer actually is" },
            ]}
          />
        </>
      )}
    </DecisionPage>
  );
}
