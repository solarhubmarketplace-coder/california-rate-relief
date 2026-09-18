// Reviewed local replacement. Original company claims remain at base e605685.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage } from "@/components/growth/DecisionPage";
import { CommercialAssessmentForm } from "@/components/landing/CommercialAssessmentForm";

const title =
  "Commercial Solar Companies in California: Compare by Scope";
const description =
  "Compare bids on license, electrical scope, tariff, demand charges, interconnection and financing before choosing a California commercial solar company.";
const path = "/commercial-solar/companies-california";
const link = "text-emerald-800 underline underline-offset-2";
const businessRates =
  "https://www.sce.com/business/rates-financing/rate-plans/business-time-of-use-rate-plans";
const cslbClassifications =
  "https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/";
const lbnlReport =
  "https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf";
const VERIFIED = "September 18, 2026";
export const metadata: Metadata = {
  title: "Commercial Solar Companies in California: What to Compare",
  description:
    "Compare California commercial solar companies and EPCs on scope, tariff, demand charges and financing — not just the sticker price.",
  alternates: { canonical: path },
  openGraph: {
    title: "Commercial Solar Companies in California: What to Compare",
    description:
      "Compare California commercial solar companies and EPCs on scope, tariff, demand charges and financing — not just the sticker price.",
    type: "article",
    url: `https://ratereliefca.com${path}`,
    publishedTime: "2026-04-23T00:00:00Z",
    modifiedTime: "2026-09-18T00:00:00Z",
  },
};

export default function CommercialSolarCompanies() {
  return (
    <DecisionPage
      title={title}
      intro="A warehouse, a machine shop and an office building can have the same annual electricity use and very different solar economics. Start with how the business uses power. Then compare who can deliver the work."
      path={path}
      commercial
      sources={[
        {
          label: "SCE: commercial solar and interconnection resources",
          url: "https://www.sce.com/business/smart-energy-solar/solar-for-business",
        },
        {
          label: "SCE: business TOU plans and demand charges",
          url: businessRates,
        },
        {
          label: "CSLB: check a California contractor license",
          url: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
        },
        {
          label: "CSLB: contractor licence classifications (C-46 Solar, C-10 Electrical)",
          url: cslbClassifications,
        },
        {
          label:
            "LBNL: U.S. Distributed Solar and Storage 2026 Data Update (August 2026)",
          url: lbnlReport,
        },
      ]}
      sourceCheckedDate="2026-09-18"
      inquiry={
        <section id="solar-inquiry" className="my-10 scroll-mt-24">
          <h2 className="mb-3 text-2xl font-bold">
            Discuss a California commercial project
          </h2>
          <p className="mb-5 text-slate-700">
            Send the property basics to California Rate Relief. This is a
            private referral inquiry. Project review, provider availability and
            a proposal come later.
          </p>
          <CommercialAssessmentForm />
        </section>
      }
    >
      <section id="what-is-an-epc">
        <h2>What is a commercial solar EPC, and how is it different from an installer?</h2>
        <p className="mb-4">
          EPC stands for engineering, procurement and construction. On a commercial
          project it describes a contracting role rather than a licence category: the
          EPC engineers the system, buys the equipment and builds the job, usually
          under a single contract for the whole scope. A residential-style
          &ldquo;installer&rdquo; typically sells and installs a standard package;
          an EPC is engaged to deliver a designed project on a specific building.
        </p>
        <p className="mb-4">
          Three separate parties can appear on one commercial deal, and they are
          often confused in a sales conversation:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            <strong>The developer</strong> originates the project and may arrange the
            financing structure.
          </li>
          <li>
            <strong>The EPC contractor</strong> performs the engineering,
            procurement and construction work.
          </li>
          <li>
            <strong>The owner</strong> holds title to the system. Under a
            third-party-owned structure that is not the business occupying the
            building.
          </li>
        </ul>
        <p className="mb-4">
          Whatever the commercial label, the physical work in California is performed
          under a state contractor licence. CSLB publishes the classifications,
          including <strong>C-46 Solar Contractor</strong> and{" "}
          <strong>C-10 Electrical Contractor</strong>.{" "}
          <a href={cslbClassifications} className={link}>
            Source: CSLB licence classifications
          </a>
          , verified {VERIFIED}. Ask which licensed entity will actually sign the
          contract and pull the permits, then check that licence number yourself in
          the CSLB lookup. A company that markets itself as an EPC is not
          automatically the licensed entity performing your work.
        </p>
      </section>
      <section id="epc-comparison">
        <h2>What to compare across commercial solar companies</h2>
        <p className="mb-4">
          Ask each bidder to price the same scope. An engineering, procurement
          and construction contractor may build the project; a developer or
          financing company may own it. Get the responsible legal entities in
          writing.
        </p>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Commercial solar proposal comparison
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Project item</th>
                <th className="p-4">Evidence to request</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Relevant work",
                  "Completed projects with similar roof, operating hours and utility. Request owner references and permission to check them.",
                ],
                [
                  "Contractor and service",
                  "The exact contracting entity, current license record, insurance, subcontractors, warranty exclusions and who handles a failed system.",
                ],
                [
                  "Electrical and structural scope",
                  "Service capacity, roof life, structural review, equipment location, roof penetrations and any main-panel or transformer work.",
                ],
                [
                  "Bill model",
                  "Actual interval data, tariff name, generation provider, energy charges, demand charges and fixed charges.",
                ],
                [
                  "Interconnection",
                  "Utility application responsibility, studies, upgrade allowances, milestones and permission-to-operate assumptions.",
                ],
                [
                  "Price and financing",
                  "Solar-only price, storage, carport or roof work, financing costs, operations, insurance, replacement assumptions and end-of-term obligations.",
                ],
              ].map(([item, detail]) => (
                <tr key={item} className="border-t">
                  <th scope="row" className="p-4 align-top">
                    {item}
                  </th>
                  <td className="p-4">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          A company website describes its own offering. It does not establish
          current license standing, capacity to take your project or the final
          installed price. Check the contractor before signing.
        </p>
      </section>
      <section id="by-property-type">
        <h2>Commercial solar by property type</h2>
        <p className="mb-4">
          Ask whether a bidder has completed work on your property type, not only in
          your county. Roof structure, operating hours, refrigeration load and
          interconnection path differ enough between these categories that relevant
          experience is a real screening question. Each guide below covers the scope
          questions specific to that use:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link href="/commercial-solar/agricultural-solar-california" className={link}>
              Agricultural solar projects
            </Link>{" "}
            — pumping loads, seasonal use and metering across multiple service points.
          </li>
          <li>
            <Link href="/commercial-solar/warehouse-solar-california" className={link}>
              Warehouse solar projects
            </Link>{" "}
            — large flat roofs, membrane condition and lighting or refrigeration load.
          </li>
          <li>
            <Link href="/commercial-solar/retail-solar-california" className={link}>
              Retail solar projects
            </Link>{" "}
            — leased premises, landlord consent and shorter occupancy horizons.
          </li>
          <li>
            <Link href="/commercial-solar/multifamily-solar-california" className={link}>
              Multifamily solar projects
            </Link>{" "}
            — common-area versus tenant metering and allocation rules.
          </li>
          <li>
            <Link href="/commercial-solar/self-storage-solar-california" className={link}>
              Self-storage solar projects
            </Link>{" "}
            — low, flat load profiles with large available roof area.
          </li>
        </ul>
      </section>
      <section id="largest-companies">
        <h2>Who are the largest commercial solar companies serving California?</h2>
        <p className="mb-4">
          This page does not name a company as the largest. No dated, primary-source
          ranking of commercial solar companies operating in California was obtained
          for this update, and a scale claim without one is a guess. What can be said
          is how the question is normally measured, so you can read any published
          list critically:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Installed capacity (MW) in a period</strong> — the usual industry
            metric, and the one that most favours utility-scale developers over
            commercial rooftop specialists.
          </li>
          <li>
            <strong>Project count</strong> — a very different ordering, because many
            small rooftop jobs can outnumber a few large ones.
          </li>
          <li>
            <strong>National versus California-only volume</strong> — a large national
            EPC may have completed little work in your utility territory.
          </li>
          <li>
            <strong>Segment</strong> — commercial rooftop, carport, ground mount and
            utility-scale are different businesses with different contractors.
          </li>
        </ul>
        <p className="mb-4">
          Size is also a weak proxy for what you are buying. A larger company does not
          guarantee a current licence in good standing, capacity to take your project
          this year, or the specific roof and tariff experience your building needs.
          The comparison table above is a better screen than a ranking.
        </p>
        <p>
          California Rate Relief is a private referral service. It does not rank
          commercial solar companies, endorse any company, or name any company as a
          preferred provider.
        </p>
      </section>
      <section id="business-bill">
        <h2>Compare the business bill, not a residential average</h2>
        <p>
          Energy charges measure electricity consumed in kWh. Demand charges can
          depend on the highest measured kW during a billing period or a
          specified time window. SCE publishes both facilities-related and
          time-related demand charges for applicable business tariffs.{" "}
          <a href={businessRates} className={link}>
            Source: SCE business TOU plans
          </a>
          , checked September 10, 2026.
        </p>
        <p className="mt-3">
          That distinction changes the calculation. A solar array may reduce
          annual purchases without eliminating the interval that sets a demand
          charge. Ask for the billing model with solar alone and, separately,
          with the proposed battery controls. A Los Angeles or San Diego street
          address does not identify the tariff; confirm the utility account.
        </p>
      </section>
      <section id="manufacturing">
        <h2>Manufacturing and industrial solar projects</h2>
        <p>
          A factory proposal needs an operating schedule. Identify shift
          changes, weekend production, process heating, compressors,
          refrigeration and planned equipment additions. Ask whether the model
          includes startup peaks and shutdown periods.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            Separate existing loads from an expansion that has not opened.
          </li>
          <li>
            Document any roof access, ventilation, fire-lane or
            production-interruption constraints.
          </li>
          <li>
            Define the loads that need backup. Bill savings and outage operation
            are different requirements.
          </li>
          <li>
            Compare maintenance access and response obligations alongside price.
          </li>
        </ul>
        <p className="mt-4">
          Use the same project brief for each bid. This checklist is a starting
          point for engineering review, not a design for your facility.
        </p>
      </section>
      <section id="cost">
        <h2>Put the cost per watt in context</h2>
        <p>
          A price-per-watt comparison needs the same DC system-size denominator
          and the same included work. Storage, a carport, roof repairs or
          electrical upgrades can change the total substantially. Keep those
          lines visible. Start with the{" "}
          <Link
            href="/commercial-solar/cost-per-watt-california"
            className={link}
          >
            commercial cost-per-watt guide
          </Link>
          , then request itemized proposals.
        </p>
      </section>
      <section id="faq">
        <h2>Frequently asked questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">What is a commercial solar EPC?</h3>
            <p>
              Engineering, procurement and construction — a contracting role in which
              one party designs the system, buys the equipment and builds the project
              under a single contract. It is a commercial contracting term, not a
              California licence category. The physical work is still performed under
              a CSLB licence such as C-46 Solar or C-10 Electrical, verified{" "}
              {VERIFIED}.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              What are the largest commercial solar companies operating in California?
            </h3>
            <p>
              This page names none. No dated primary-source ranking was obtained for
              this update, and scale is a poor proxy for licence standing, current
              capacity or relevant roof and tariff experience. See the section above
              for how published lists are usually measured.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              How do I find commercial solar installers in California?
            </h3>
            <p>
              Start from the project, not a directory. Identify the utility account
              and tariff, the roof or site condition and the electrical service
              capacity, then ask each candidate for completed projects with a similar
              roof, operating schedule and utility. Verify the exact contracting
              entity in the CSLB lookup before signing.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              What&apos;s the difference between a commercial solar company and an EPC?
            </h3>
            <p>
              Often nothing but the label. What matters is which legal entity carries
              the engineering, the construction, the warranty and the ongoing service,
              and whether those are the same entity. Get all four in writing; they are
              frequently split.
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              How do commercial solar companies in California price a project?
            </h3>
            <p>
              A commercial price is built from DC system size, mounting type,
              electrical and structural scope, interconnection requirements and the
              ownership structure. Published per-watt medians are historical
              references, split at 100 kW in the LBNL series, verified {VERIFIED} —
              not quotes. Work through the{" "}
              <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                commercial cost-per-watt guide
              </Link>{" "}
              before comparing numbers.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Get the right project reviewed</h2>
        <p>
          Share what you know. An uncertain budget or installation date should
          not keep you from describing the property. This inquiry does not
          require a sale, appointment or financing approval.
        </p>
        <div className="mt-4 flex flex-wrap gap-5">
          <Link
            href="/commercial-solar/warehouse-solar-california"
            className={link}
          >
            Warehouse projects
          </Link>
          <Link
            href="/commercial-solar/multifamily-solar-california"
            className={link}
          >
            Multifamily projects
          </Link>
          <Link
            href="/commercial-solar/commercial-solar-ppa-vs-purchase-california"
            className={link}
          >
            PPA versus purchase
          </Link>
          <Link href="/commercial-solar/financing-options" className={link}>
            Financing options
          </Link>
          <Link href="/commercial-assessment" className={link}>
            Open the commercial form
          </Link>
        </div>
      </section>
    <RelatedGuides
      heading="Contract and paperwork checks that apply to any scope"
      intro="The disclosure and financing traps are the same ones residential buyers hit first."
      links={[
        { href: "/solar-problems/solar-contract-red-flags-california", label: "What the California disclosure forms are meant to stop" },
        { href: "/solar-problems/solar-dealer-fees-explained", label: "Why a low advertised rate carries a dealer fee" },
        { href: "/solar-problems", label: "All California solar problem guides" },
      ]}
    />
    </DecisionPage>
  );
}
