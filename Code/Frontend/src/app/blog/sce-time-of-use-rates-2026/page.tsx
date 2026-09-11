import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage } from "@/components/growth/DecisionPage";
import { SolarCalculator } from "@/components/growth/SolarCalculator";

const title = "SCE time-of-use rates in 2026: peak hours and plan choice";
const description =
  "Compare SCE 4–9 PM, 5–8 PM and PRIME peak hours. Check your own generation provider, baseline credit and bill before choosing a plan or solar quote.";
const path = "/blog/sce-time-of-use-rates-2026";
const tou =
  "https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans";
const compare =
  "https://www.sce.com/save-money/rates-financing/rate-plan-comparison-tool";
const cca =
  "https://www.sce.com/customer-service-center/community-choice-aggregation";
const bsc =
  "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc";
const link = "text-emerald-800 underline underline-offset-2";
const plans = [
  [
    "TOU-D 4–9 PM",
    "4–9 p.m.; summer weekday on-peak, summer weekend and winter mid-peak.",
    "Summer: off-peak 9 p.m.–4 p.m. the following day. Winter: off-peak 9 p.m.–8 a.m.; super off-peak 8 a.m.–4 p.m.",
    "A baseline credit applies up to the account allocation.",
  ],
  [
    "TOU-D 5–8 PM",
    "5–8 p.m.; summer weekday on-peak, summer weekend and winter mid-peak.",
    "Summer: off-peak 8 p.m.–5 p.m. the following day. Winter: off-peak 8 p.m.–8 a.m.; super off-peak 8 a.m.–5 p.m.",
    "A shorter window can carry a higher price. Compare annual cost.",
  ],
  [
    "TOU-D-PRIME",
    "4–9 p.m.; summer weekday on-peak, summer weekend and winter mid-peak.",
    "Summer: off-peak 9 p.m.–4 p.m. the following day. Winter: off-peak 9 p.m.–8 a.m.; super off-peak 8 a.m.–4 p.m.",
    "No baseline credit. Eligibility and Solar Billing Plan requirements matter.",
  ],
];
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

export default function SceTimeOfUsePage() {
  return (
    <DecisionPage
      title={title}
      intro="Start with the plan name on your bill. SCE has more than one peak window. A cheaper off-peak price does not, by itself, make a plan cheaper for your household."
      path={path}
      utility="sce"
      sources={[
        {
          label: "SCE: residential TOU plans, prices and eligibility",
          url: tou,
        },
        {
          label: "SCE: compare plans using your account history",
          url: compare,
        },
        {
          label: "SCE: community choice generation and delivery billing",
          url: cca,
        },
        {
          label: "SCE: Base Services Charge and assistance categories",
          url: bsc,
        },
      ]}
    >
      <section id="peak-hours">
        <h2>What are SCE peak and off-peak hours?</h2>
        <p className="mb-4">
          SCE&apos;s published plan comparison shows the following windows. The
          table summarizes timing; use the current bill and SCE&apos;s account
          tool for your actual prices. Checked September 10, 2026.{" "}
          <a href={tou} className={link}>
            Source: SCE residential TOU plans
          </a>
          .
        </p>
        <div className="space-y-4 md:hidden">
          {plans.map(([plan, hours, offPeak, detail]) => (
            <section key={plan} className="rounded-xl border p-4">
              <h3>{plan}</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold">Higher-priced window</dt>
                  <dd className="mt-1 leading-relaxed">{hours}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Off-peak and super off-peak</dt>
                  <dd className="mt-1 leading-relaxed">{offPeak}</dd>
                </div>
                <div>
                  <dt className="font-semibold">What changes the comparison</dt>
                  <dd className="mt-1 leading-relaxed">{detail}</dd>
                </div>
              </dl>
            </section>
          ))}
        </div>
        <div className="hidden overflow-x-auto rounded-xl border md:block">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              SCE residential time-of-use peak windows
            </caption>
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Plan</th>
                <th className="p-4">Higher-priced window</th>
                <th className="p-4">Off-peak and super off-peak</th>
                <th className="p-4">What changes the comparison</th>
              </tr>
            </thead>
            <tbody>
              {plans.map(([plan, hours, offPeak, detail]) => (
                <tr key={plan} className="border-t">
                  <th scope="row" className="p-4 align-top">
                    {plan}
                  </th>
                  <td className="p-4 align-top">{hours}</td>
                  <td className="p-4 align-top">{offPeak}</td>
                  <td className="p-4 align-top">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Summer runs June–September. Winter runs October–May, with a daytime
          super off-peak period. Weekend labels differ from summer weekdays.
        </p>
      </section>
      <section id="choose-plan">
        <h2>Which plan is cheapest for your home?</h2>
        <p>
          Use{" "}
          <a href={compare} className={link}>
            SCE&apos;s rate comparison tool
          </a>{" "}
          with your own account. It compares eligible plans using your energy
          history. Then check what will change: an EV, a heat pump, a
          work-from-home schedule or a new battery can make last year a poor
          guide to next year.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-6">
          <li>
            Find the full rate-plan name and whether your generation comes from
            SCE or a community choice provider.
          </li>
          <li>
            Review interval usage, especially during the higher-priced window.
            Ask the proposal to show seasonal and weekend effects.
          </li>
          <li>
            Keep fixed charges, baseline adjustments and generation charges in
            the comparison. A single advertised cents-per-kWh number leaves too
            much out.
          </li>
          <li>
            Check eligibility before switching. SCE states that Solar Billing
            Plan customers must use TOU-D-PRIME. Existing NEM customers should
            check their own enrollment rules with SCE.
          </li>
        </ol>
        <p className="mt-4">
          The utility tool is the place to compare tariffs. The calculator below
          compares bill and quote inputs you supply; it does not choose a tariff
          or simulate hourly solar production.
        </p>
      </section>
      <section id="cca">
        <h2>Does a CCA change the rate?</h2>
        <p>
          Yes. SCE&apos;s displayed bundled prices include its generation and
          delivery. A community choice customer pays the CCA for generation
          while SCE continues delivery and billing. Use both portions of the
          bill.{" "}
          <a href={cca} className={link}>
            SCE explains CCA billing here
          </a>
          .
        </p>
      </section>
      <section id="fixed-charge">
        <h2>Will solar remove the Base Services Charge?</h2>
        <p>
          No. The{" "}
          <a href={bsc} className={link}>
            Base Services Charge
          </a>{" "}
          remains a separate bill item, including for solar customers.
          Assistance categories can change the charge. A proposal should
          identify your category instead of treating the entire bill as
          avoidable energy use.
        </p>
      </section>
      <section id="solar-choice">
        <h2>Where solar and a battery fit</h2>
        <p>
          Ask for two separate estimates: electricity used directly while solar
          produces, and electricity shifted by a battery into a later hour. Keep
          export credits separate from the retail price of imported electricity.
          A useful proposal shows the remaining utility bill as well as the new
          solar payment.
        </p>
        <p className="mt-3">
          Already have a quote? Enter its assumptions below. Still diagnosing
          the bill? Start with the{" "}
          <Link href="/blog/why-is-my-sce-bill-so-high" className={link}>
            SCE high-bill checklist
          </Link>
          , then compare{" "}
          <Link href="/blog/what-is-nem-3-california" className={link}>
            net billing
          </Link>{" "}
          and{" "}
          <Link href="/blog/solar-battery-backup-california" className={link}>
            battery options
          </Link>
          .
        </p>
      </section>
      <SolarCalculator utility="sce" />
    </DecisionPage>
  );
}
