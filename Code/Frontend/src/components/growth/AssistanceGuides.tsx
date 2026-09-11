import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage } from "./DecisionPage";

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
const definitions = {
  options: {
    path: "/blog/solar-tax-credit-expired-2026-options",
    title: "Solar tax credit ended: California options in 2026",
    intro:
      "A new proposal needs to work with the incentives actually available to your project. Start by removing any homeowner tax credit the project cannot claim. Then compare the full cost.",
  },
  california: {
    path: "/blog/california-solar-tax-credit-2026",
    title: "California solar incentives in 2026: which program does what?",
    intro:
      "A federal tax credit, a battery rebate and an electric-bill discount solve different problems. Put each in the right column before you compare a solar offer.",
  },
  records: {
    path: "/blog/solar-tax-credit-2026",
    title: "Solar tax credit in 2026: completion dates and prior-year records",
    intro:
      "A payment receipt is only part of the record. For the federal residential credit, the installation timeline and the proper tax year matter. A deposit does not settle either.",
  },
  seniors: {
    path: "/blog/free-solar-for-seniors-california",
    title: "Free solar for seniors in California: check the actual program",
    intro:
      "Start with the program name. Being a senior does not, by itself, establish solar-program eligibility. Income, the property, the utility and available funding need to be checked.",
  },
  free: {
    path: "/blog/free-solar-panels-california",
    title: "Free solar panels in California: what does the offer cost?",
    intro:
      "A zero-dollar upfront payment and a fully funded solar installation are different offers. Ask who owns the equipment, who pays over time and which organization is funding the project.",
  },
  income: {
    path: "/blog/low-income-solar-california",
    title: "Low-income solar in California: find the right application path",
    intro:
      "If the electric bill is urgent, start with bill assistance. If you want rooftop solar, check the property and program rules separately. One application does not automatically approve the other.",
  },
};
type AssistanceKey = keyof typeof definitions;
export function assistanceMetadata(kind: AssistanceKey): Metadata {
  const { title, intro, path } = definitions[kind];
  return {
    title,
    description: intro,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: intro,
      type: "article",
      url: `https://ratereliefca.com${path}`,
      modifiedTime: "2026-09-10T00:00:00Z",
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
              application includes.
            </p>
          </section>
          <OfferQuestions />
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
      {kind === "free" && (
        <>
          <section>
            <h2>Identify the offer before comparing it</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                [
                  "Subsidized project",
                  "An administrator evaluates program eligibility, the property and funding. Get any homeowner contribution confirmed.",
                ],
                [
                  "Lease or PPA",
                  "A company owns the equipment and you have a payment contract. No upfront payment does not mean no cost.",
                ],
                [
                  "Financed purchase",
                  "You buy the equipment with borrowed money. Compare the cash price, financed price, interest and fees.",
                ],
              ].map(([heading, body]) => (
                <div key={heading} className="rounded-xl border p-5">
                  <h3>{heading}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </section>
          <DacBoundary />
          <OfferQuestions />
          <section>
            <h2>A program name is not an approval</h2>
            <p>
              SASH is closed. DAC-SASH and SGIP have their own rules and budget
              status. Verify the official administrator and the project&apos;s
              written funding terms. A salesperson showing a program logo does
              not establish a reservation.
            </p>
            <p className="mt-3">
              Use{" "}
              <Link href={definitions.income.path} className={link}>
                the low-income application checklist
              </Link>{" "}
              for assistance, or{" "}
              <Link
                href="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
                className={link}
              >
                compare purchase and payment contracts
              </Link>
              . The inquiry below asks California Rate Relief to review a
              referral; it does not enroll you in a public program.
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
        </>
      )}
    </DecisionPage>
  );
}
