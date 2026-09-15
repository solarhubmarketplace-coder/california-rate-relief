import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "./DecisionPage";

const path = "/solar-problems/solar-homeowners-insurance";
const title = "Does Homeowners Insurance Cover Solar Panels? Check the Policy, System and Contract";
const intro = "Many homeowners policies treat an attached rooftop system as part of the home, but that does not answer every coverage question. Ownership, mounting location, policy limits, exclusions, deductibles and the solar contract can change the result.";


// The two consts above are visible copy: `title` heads the page and `intro` is the
// opening paragraph a reader sees. The search snippet has a different job and a
// hard length budget, so it is declared separately here. Reusing `intro` as the
// meta description is what caused a draft pass to overwrite a live opening
// paragraph on the SDG&E guide.
const metaTitle = "Does Homeowners Insurance Cover Solar Panels?";
const metaDescription =
  "Ownership, mounting location, policy limits, exclusions, deductibles and the solar contract can all change whether a system is covered.";

const sources: Source[] = [
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "California Department of Insurance: Residential Insurance Guide",
    url: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-ins-guide.cfm",
  },
  {
    label: "NAIC: Understanding Your Homeowners or Renter's Policy",
    url: "https://content.naic.org/article/consumer-insight-understanding-your-homeowners-or-renters-policy",
  },
  {
    label: "U.S. Department of Energy: Fire Safety With Solar Systems",
    url: "https://www.energy.gov/cmei/systems/guide-fire-safety-solar-systems",
  },
];

export const solarInsuranceMetadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-12T00:00:00Z",
  },
};

export function SolarInsuranceGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      topic="California solar homeowners insurance question"
      sourceCheckedDate="2026-09-12"
      primaryResourceHref="/blog/is-my-roof-good-for-solar-california"
      primaryResourceLabel="Roof suitability checklist"
      comparisonHref="/blog/solar-panel-removal-reinstall-cost"
      comparisonLabel="Removal and reinstallation checklist"
    >
      <section>
        <h2>The useful answer is written confirmation from the insurer</h2>
        <p>
          The U.S. Department of Energy says most homeowners policies cover
          rooftop panels because an attached system is generally treated as part
          of the property. That general statement is not a coverage decision for
          a particular home. Read the policy and ask the insurer or licensed agent
          to confirm how the proposed system will be classified before work starts.
        </p>
      </section>

      <section>
        <h2>Tell the insurer exactly what is being installed</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Rooftop, carport, ground-mounted or another location.</li>
          <li>Owned with cash or a loan, leased, or covered by a power purchase agreement.</li>
          <li>Solar panels alone or solar plus a battery.</li>
          <li>Installed contract price and any separate roof or electrical work.</li>
          <li>Installer, license, permits, equipment and expected completion date.</li>
        </ul>
        <p className="mt-3">
          Ask whether the insurer needs the contract, plans, permit, final
          inspection, photos or proof of interconnection. Keep its answer with the
          policy instead of relying on a salesperson&apos;s description.
        </p>
      </section>

      <section>
        <h2>Policy pages and terms to check</h2>
        <p>
          Start with the declarations page, which the California Department of
          Insurance describes as the section listing the insured property,
          coverage limits and deductibles. Then check the coverage form,
          endorsements and exclusions. Ask which limit applies to the system,
          whether the limit reflects the completed installation, and whether any
          separate deductible or restriction applies.
        </p>
      </section>

      <section>
        <h2>Questions to send the insurer in writing</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Is this specific system covered once installed, and under which policy section?</li>
          <li>Does rooftop versus detached mounting change the coverage or limit?</li>
          <li>Does ownership through a lease or PPA change what I must insure?</li>
          <li>Do I need a higher dwelling limit, endorsement or separate policy?</li>
          <li>Which causes of loss and exclusions apply to panels, battery and related wiring?</li>
          <li>How are removal, reinstallation, roof access and code-required work handled after a covered loss?</li>
          <li>Will the installation change the premium, deductible, inspection or renewal requirements?</li>
        </ol>
      </section>

      <section>
        <h2>Match the insurance answer to the solar contract</h2>
        <p>
          The CPUC consumer guide tells buyers to ask whether insurance comes with
          the system or whether additional homeowners insurance is needed. It also
          tells buyers to ask what the contract requires if fire, earthquake or
          another disaster stops the system from working. For a lease or PPA,
          identify who owns the equipment, who files a claim, who pays the
          deductible and who must restore the system. The policy and contract need
          to describe the same responsibility.
        </p>
      </section>

      <section>
        <h2>Keep the proof a future claim or home sale may need</h2>
        <p>
          Save the signed contract, cash price, financing or ownership agreement,
          equipment list, warranties, installer and subcontractor licenses,
          permit, final inspection, interconnection approval, before-and-after
          photos and the insurer&apos;s written response. If roof work becomes
          necessary, use the <Link className="underline" href="/blog/solar-panel-removal-reinstall-cost">removal and reinstallation checklist</Link> to separate that scope from the solar repair.
        </p>
      </section>

      <section>
        <h2>Do not wait for damage to discover the gap</h2>
        <p>
          Verify coverage after installation and whenever the policy, system,
          ownership or roof changes. If damage occurs, protect people first,
          follow the insurer&apos;s notice and documentation instructions, and
          coordinate roof and electrical work through properly licensed parties.
          Coverage and payment depend on the actual policy and facts of the loss.
        </p>
      </section>
    </DecisionPage>
  );
}
