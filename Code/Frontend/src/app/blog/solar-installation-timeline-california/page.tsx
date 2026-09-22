import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const path = "/blog/solar-installation-timeline-california";
const title = "Solar Installation Timeline in California: From Quote to Permission to Operate";
const sources: Source[] = [
  { label: "City of Temecula: Photovoltaic systems", url: "https://www.temeculaca.gov/304/Photovoltaic-Systems" },
  { label: "City of Murrieta: Self-issuing permits and SolarAPP+", url: "https://www.murrietaca.gov/1368/Self--Issuing-Permits-Solar-App" },
  { label: "City of San Diego: Information Bulletin 301", url: "https://www.sandiego.gov/development-services/forms-publications/information-bulletins/301" },
  { label: "SDG&E: Solar and battery installation center", url: "https://www.sdge.com/solar/solar-and-battery-installation-center" },
];

export const metadata: Metadata = {
  title,
  description: "A California solar schedule needs every approval, inspection and responsible handoff from quote through permission to operate—not one statewide promise in weeks.",
  alternates: { canonical: path },
  openGraph: { title, description: "Map a California solar project from quote through permission to operate.", type: "article", url: `https://ratereliefca.com${path}`, publishedTime: "2026-09-20T00:00:00Z", modifiedTime: "2026-09-20T00:00:00Z" },
};

const stages = [
  ["Scope, records and bids", "Provide bills, roof information and the desired electrical or backup scope.", "Request comparable bids that identify the design assumptions and exclusions."],
  ["Design and site review", "Confirm roof, electrical, equipment and any storage location with the proposed design.", "Ask who owns the site review, revisions and the next submission."],
  ["Utility application and local permitting", "Provide the account and project documents required for the applicable utility and local process.", "Get the responsible party and submitted path in writing; parallel work varies by project."],
  ["Physical installation", "Confirm the approved scope matches the work underway.", "Ask who records changes and owns any resulting permit or utility update."],
  ["Local inspection and corrections", "Keep the inspection result and any correction list.", "Confirm who schedules correction work and the reinspection."],
  ["Utility final review and PTO", "Provide the final local approval and remaining documents when required.", "Confirm who tracks the utility review. Do not operate before the required permission to operate."],
];

export default function SolarInstallationTimelineCalifornia() {
  return (
    <DecisionPage title={title} path={path} sources={sources} sourceCheckedDate="2026-09-20" topic="California solar installation timeline review" intro="Physical installation is only one stage. A reliable California solar schedule identifies each approval and the party responsible for the next handoff instead of promising one statewide number of weeks.">
      <section>
        <h2>Map the project by handoff, not a calendar promise</h2>
        <div className="overflow-x-auto rounded-xl border"><table className="w-full text-left text-sm"><caption className="sr-only">California solar project stages and homeowner handoffs</caption><thead className="bg-muted"><tr><th className="p-4">Stage</th><th className="p-4">What to provide or request</th><th className="p-4">Who owns the next handoff</th></tr></thead><tbody>{stages.map(([stage, request, handoff]) => <tr className="border-t" key={stage}><th className="p-4 align-top" scope="row">{stage}</th><td className="p-4">{request}</td><td className="p-4">{handoff}</td></tr>)}</tbody></table></div>
      </section>
      <section>
        <h2>Local approval is not utility permission to operate</h2>
        <p>Local paths depend on the property and scope. Temecula identifies fire and building inspections, while Murrieta describes an eligible SolarAPP+ path and a separate service-panel permit when that work is needed. San Diego Bulletin 301 also separates permit paths by structure, battery, electrical and project scope.</p>
        <p className="mt-3">For its process, SDG&amp;E describes technical review before installation and then Authority Having Jurisdiction release followed by any required utility review or inspection before PTO. That is an SDG&amp;E example, not a statewide sequence for every utility or city.</p>
      </section>
      <section>
        <h2>Expect a scope change to change the schedule</h2>
        <p>Roof replacement, a panel upgrade, storage location, structural work, incomplete records, design revisions and inspection corrections can each add a dependency. Treat them as project questions to resolve, not as a probability or a promised delay.</p>
      </section>
      <section>
        <h2>Use the local project guide that matches the address</h2>
        <p>For local permit and written-scope questions, start with the cost guides for <Link className="underline" href="/solar-cost/temecula">Temecula</Link>, <Link className="underline" href="/solar-cost/chula-vista">Chula Vista</Link> and <Link className="underline" href="/solar-cost/san-diego">San Diego</Link>. Check roof readiness before finalizing the installation path with the <Link className="underline" href="/blog/is-my-roof-good-for-solar-california">California roof guide</Link>.</p>
      </section>
      <section>
        <h2>An inquiry does not set the schedule</h2>
        <p>California Rate Relief is a private referral service. An optional inquiry does not secure a permit, utility approval, contractor availability or a completion date. Compare written responsibilities before you rely on a project schedule.</p>
      </section>
    </DecisionPage>
  );
}
