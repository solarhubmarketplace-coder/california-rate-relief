import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage } from "@/components/growth/DecisionPage";
import { SolarCalculator } from "@/components/growth/SolarCalculator";

const title = "SCE Time-of-Use Rates 2026: Plans, Prices, Peak Hours";
const description =
  "See SCE's TOU-D-4-9PM, TOU-D-5-8PM, TOU-D-PRIME and tiered rates: peak windows, prices per kWh, the base charge, and which plan fits your home.";
const path = "/blog/sce-time-of-use-rates-2026";
const tou =
  "https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans";
const compare =
  "https://www.sce.com/save-money/rates-financing/rate-plan-comparison-tool";
const cca =
  "https://www.sce.com/customer-service-center/community-choice-aggregation";
const bsc =
  "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc";
const tiered =
  "https://www.sce.com/save-money/rates-financing/residential-rate-plans/tiered-rate-plan";
const link = "text-primary underline underline-offset-2";
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
const pricedPlans = [
  {
    name: "TOU-D 4–9 PM",
    rows: [
      ["On-peak / mid-peak", "4–9 p.m. daily", "58¢/kWh weekdays; 46¢/kWh weekends", "51¢/kWh, all days"],
      ["Off-peak", "rest of the day", "34¢/kWh, 9 p.m.–4 p.m. next day", "37¢/kWh, 9 p.m.–8 a.m."],
      ["Super off-peak", "—", "none", "33¢/kWh, 8 a.m.–4 p.m."],
    ],
    note: "Base Services Charge: $0.79/day, billed separately (see below). Baseline credit: $0.10/kWh off usage up to your monthly baseline allocation.",
  },
  {
    name: "TOU-D 5–8 PM",
    rows: [
      ["On-peak / mid-peak", "5–8 p.m. daily", "74¢/kWh weekdays; 54¢/kWh weekends", "60¢/kWh, all days"],
      ["Off-peak", "rest of the day", "34¢/kWh, 8 p.m.–5 p.m. next day", "38¢/kWh, 8 p.m.–8 a.m."],
      ["Super off-peak", "—", "none", "32¢/kWh, 8 a.m.–5 p.m."],
    ],
    note: "Same $0.79/day Base Services Charge and $0.10/kWh baseline credit as TOU-D-4-9PM. The 3-hour peak window costs more per kWh than TOU-D-4-9PM's 5-hour window — a narrower window isn't automatically cheaper; it depends on how much of your usage actually falls inside it.",
  },
  {
    name: "TOU-D-PRIME",
    rows: [
      ["On-peak / mid-peak", "4–9 p.m. daily", "59¢/kWh weekdays; 40¢/kWh weekends", "56¢/kWh, all days"],
      ["Off-peak", "rest of the day", "26¢/kWh, 9 p.m.–4 p.m. next day", "24¢/kWh, 9 p.m.–8 a.m."],
      ["Super off-peak", "—", "none", "24¢/kWh, 8 a.m.–4 p.m."],
    ],
    note: "Base Services Charge: same $0.79/day. Baseline credit: none. TOU-D-PRIME enrollment requires confirming ownership or lease of an EV or plug-in hybrid, a home battery, or an electric heat pump system — or being enrolled in SCE's Solar Billing Plan, which requires TOU-D-PRIME regardless of other equipment (see \"Solar Billing Plan\" below).",
  },
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
      intro="Southern California Edison bills residential customers on one of four rate schedules: three time-of-use plans (TOU-D-4-9PM, TOU-D-5-8PM, TOU-D-PRIME) and one tiered plan (Schedule D). As currently published on sce.com, on-peak and mid-peak prices span 40¢ to 74¢ per kWh depending on the plan and season, the tiered plan is a flat 30¢/40¢ per kWh, and every plan carries the same separate $24.15/month Base Services Charge ($6.00 for CARE, $12.08 for FERA). Solar Billing Plan (NEM 3.0) customers are required to be on TOU-D-PRIME. Full tables, the fixed charge, baseline regions, and which plan fits which household are below."
      path={path}
      utility="sce"
      sourceCheckedDate="2026-09-22"
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
        {
          label: "SCE: Domestic (tiered) rate plan",
          url: tiered,
        },
      ]}
    >
      <section id="peak-hours">
        <h2>What are SCE peak and off-peak hours?</h2>
        <p className="mb-4">
          SCE&apos;s published plan comparison shows the following windows. The
          table summarizes timing; use the current bill and SCE&apos;s account
          tool for your actual prices. Checked September 22, 2026.{" "}
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
            <thead className="bg-muted">
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
      <section id="prices">
        <h2>SCE time-of-use prices by plan</h2>
        {pricedPlans.map((p) => (
          <div key={p.name} className="mb-8">
            <h3>{p.name}</h3>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{p.name} prices by season</caption>
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4">Period</th>
                    <th className="p-4">When</th>
                    <th className="p-4">Summer (Jun–Sep)</th>
                    <th className="p-4">Winter (Oct–May)</th>
                  </tr>
                </thead>
                <tbody>
                  {p.rows.map((row) => (
                    <tr key={row[0]} className="border-t">
                      <th scope="row" className="p-4 align-top">{row[0]}</th>
                      <td className="p-4 align-top">{row[1]}</td>
                      <td className="p-4 align-top">{row[2]}</td>
                      <td className="p-4 align-top">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">{p.note}</p>
          </div>
        ))}
        <h3>Domestic (tiered) rate — Schedule D</h3>
        <p>
          SCE&apos;s non-time-of-use option, still listed as an active plan on
          sce.com. Price depends only on how much you use each month, not
          when:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Tier 1: 30¢/kWh for the first 0–384 kWh (your baseline allocation)</li>
          <li>Tier 2: 40¢/kWh for 385–1,535 kWh</li>
        </ul>
        <p className="mt-3">
          Same $0.79/day Base Services Charge. SCE labels this pricing
          &ldquo;current rates as of 6/1/26.&rdquo; No peak-hour risk, but
          usage above baseline jumps a full 10¢/kWh. Separately: TOU-D-A,
          TOU-D-B and TOU-D-T (older time-of-use plans) are discontinued —
          closed to new enrollment, and a customer who switches away from one
          can&apos;t switch back.
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
        <p className="mt-4 font-semibold">As a starting point:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            Own or lease an EV, home battery, or heat pump — or required onto
            the Solar Billing Plan: TOU-D-PRIME. No baseline credit, but the
            deepest off-peak and super off-peak prices (as low as 24¢/kWh),
            which rewards shifting usage or charging overnight or midday.
          </li>
          <li>
            Can shift some usage off-peak, want the baseline credit, and
            aren&apos;t required onto TOU-D-PRIME: TOU-D-4-9PM or TOU-D-5-8PM —
            compare both against actual hours in SCE&apos;s tool; TOU-D-5-8PM&apos;s
            shorter window carries a higher on-peak price (74¢ vs. 58¢/kWh in
            summer).
          </li>
          <li>
            Usage is steady through the day and shifting it isn&apos;t
            realistic: Domestic tiered (Schedule D). No time-of-day risk, but
            Tier 2 usage above baseline costs a flat 40¢/kWh.
          </li>
        </ul>
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
        <p className="mt-3">
          Every plan above carries the same separate fixed charge, in place
          since a November 2025 bill restructuring: $24.15/month for standard
          customers (roughly $0.79–$0.80/day), $6.00/month for CARE customers,
          and $12.08/month for FERA customers and residents of qualified
          deed-restricted affordable housing (about $24/month on
          master-metered accounts). Solar customers are not exempt — the
          charge is billed even with net solar export — though it was paired
          with an approximate 10% cut to per-kWh generation prices when it
          took effect.
        </p>
        <h3 className="mt-6">Baseline regions</h3>
        <p>
          Your baseline allocation (and where Tier 1 ends, on the tiered
          plan) depends on where you live. SCE assigns every address a
          numbered baseline region grouped by climate — for example Hot
          (regions 13, 14, 15), Moderate (5, 9, 10) and Cool (6, 8, 16) —
          using SCE&apos;s own service-territory map, not a self-selected
          choice. Check your region on your SCE bill or SCE&apos;s rate-plan
          pages rather than assuming one; a Hot-region allocation runs well
          above a Cool-region one.
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
        <h3 className="mt-6">Solar Billing Plan: the required rate</h3>
        <p>
          If a solar system is on SCE&apos;s Solar Billing Plan
          (California&apos;s Net Billing Tariff, commonly called NEM 3.0),
          SCE requires the account to be on TOU-D-PRIME — it isn&apos;t a
          choice among the four plans above. Customers still on the earlier
          NEM 2.0 tariff only need to be on some time-of-use plan, not
          specifically TOU-D-PRIME. For how export credits themselves are
          calculated, see{" "}
          <Link href="/blog/what-is-nem-3-california" className={link}>
            what NEM 3.0 changed in California
          </Link>
          .
        </p>
        <p className="mt-3">
          Once enrolled in a time-of-use rate, SCE locks the account into it
          for a full 12 months before another switch is allowed.
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
          {" "}and plan any added home-charging load with the{" "}
          <Link href="/blog/solar-panels-for-ev-charging-california" className={link}>
            EV load checklist
          </Link>
          . On a different utility, the peak windows are set separately and the plan names do not
          carry across:{" "}
          <Link href="/blog/pge-time-of-use-rates-2026" className={link}>
            PG&amp;E time-of-use rates
          </Link>{" "}
          and{" "}
          <Link href="/blog/sdge-time-of-use-rates-2026" className={link}>
            SDG&amp;E time-of-use rates
          </Link>{" "}
          cover those.
        </p>
        <p className="mt-3">
          For why SCE&apos;s overall rate level has moved recently, see{" "}
          <Link href="/california-utility-rate-tracker" className={link}>
            California&apos;s utility rate tracker
          </Link>
          . If a bill still looks wrong after picking the right plan, see{" "}
          <Link href="/blog/why-is-my-california-electric-bill-so-high" className={link}>
            why your California electric bill might be high
          </Link>
          .
        </p>
      </section>
      <SolarCalculator utility="sce" />
    </DecisionPage>
  );
}
