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
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    type: "article",
    url: `https://ratereliefca.com${path}`,
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
      ]}
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
