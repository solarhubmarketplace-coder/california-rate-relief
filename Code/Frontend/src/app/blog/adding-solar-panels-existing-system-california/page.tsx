import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const path = "/blog/adding-solar-panels-existing-system-california";
const title = "Adding Solar Panels to an Existing System in California";
const sources: Source[] = [
  { label: "SCE: Solar Billing Plan FAQ", url: "https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/solar-billing-plan-faqs" },
  { label: "SDG&E: Solar and battery installation center", url: "https://www.sdge.com/solar/solar-and-battery-installation-center" },
  { label: "SolarAPP+: Existing systems", url: "https://help.gosolarapp.org/article/388-solarapp-and-existing-systems" },
  { label: "Tesla: Combining systems with Powerwall", url: "https://www.tesla.com/support/energy/powerwall/learn/combining-systems" },
];

export const metadata: Metadata = {
  title,
  description: "Adding solar capacity to an existing California system is a design, compatibility and approval decision. Start with the records and serving utility process.",
  alternates: { canonical: path },
  openGraph: { title, description: "What to confirm before adding solar panels to an existing California system.", type: "article", url: `https://ratereliefca.com${path}`, publishedTime: "2026-09-20T00:00:00Z", modifiedTime: "2026-09-20T00:00:00Z" },
};

export default function AddingSolarPanelsExistingSystem() {
  return (
    <DecisionPage title={title} path={path} sources={sources} sourceCheckedDate="2026-09-20" topic="Existing solar system expansion review" intro="Adding capacity can be possible, but it is a new design and approval decision—not simply matching more panels to open roof space. Start with the actual problem, the existing equipment and the serving utility's process before accepting a proposal.">
      <section>
        <h2>Choose the actual problem first</h2>
        <p>More household demand, a suspected production shortfall, failed equipment and a battery or backup goal lead to different next steps. More panels are not the prescribed answer to each one. An EV load belongs in the <Link className="underline" href="/blog/solar-panels-for-ev-charging-california">EV and solar planning</Link> record; a settlement question belongs in the <Link className="underline" href="/solar-problems/true-up-bill-california-explained">California True-Up guide</Link>; a storage question needs its own <Link className="underline" href="/battery/home-battery-cost-california">battery scope and cost comparison</Link>.</p>
      </section>
      <section>
        <h2>Collect the existing-system record</h2>
        <p>Gather the serving utility and current program shown on the account, current bills and production records, the original PTO or application, module and inverter models, roof layout, equipment ownership, warranties and any authorization requirement. Ask whether the proposal adds capacity, replaces equipment or adds storage. Those are different scopes.</p>
      </section>
      <section>
        <h2>Confirm the utility-specific path before accepting a proposal</h2>
        <p>SCE says an added-panel project requires a new interconnection application describing both the existing and new equipment, followed by a new PTO. Its FAQ separately addresses other equipment changes, so do not apply one modification rule to every design. For SDG&amp;E, use Customer Generation to confirm the applicable DIIS process; its published process distinguishes technical review, installation, Authority Having Jurisdiction release, utility review and PTO.</p>
        <p className="mt-3">Local inspection release and utility permission to operate are separate handoffs. Before signing, have the serving utility confirm the applicable modification process and billing treatment for the proposed change. Other California utilities set their own process; these SCE and SDG&amp;E examples are not statewide permission.</p>
      </section>
      <section>
        <h2>Get compatibility and permitting in writing</h2>
        <p>Ask for model-specific compatibility, a revised electrical and site plan, and the permit path for the actual scope. Tesla, for example, says Powerwall 3 cannot be added to a Powerwall 2 or Powerwall+ system. That is why the model and generation matter; it does not establish compatibility, availability or permission for another system.</p>
        <p className="mt-3">SolarAPP+ describes a limited path for specified new PV or PV-plus-storage work alongside an existing PV-only system. It does not make a route automatic or authorize altering an operating existing system. A battery retrofit remains a separate branch of the project.</p>
      </section>
      <section>
        <h2>Compare the full scope and every handoff</h2>
        <p>Put existing and new equipment, roof and electrical work, application and inspection responsibilities, commissioning and exclusions in one written comparison. California Rate Relief is a private referral service. An optional inquiry does not arrange a retrofit, alter a financed or leased system, or confirm any utility or contractor outcome.</p>
      </section>
      <section>
        <h2>Does an expansion always change billing?</h2>
        <p>No single answer applies to every account. The result depends on the account and proposed change. Ask the serving utility to confirm the billing treatment before you accept the proposal.</p>
      </section>
    </DecisionPage>
  );
}
