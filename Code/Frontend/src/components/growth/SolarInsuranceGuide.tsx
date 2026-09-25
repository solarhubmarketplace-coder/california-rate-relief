import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "./DecisionPage";
import { CRR_SOCIAL_CARD } from "@/lib/crr-social";

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
  {
    label: "California FAIR Plan: Dwelling Policy and About FAIR Plan",
    url: "https://www.cfpnet.com/policies/dwelling/",
  },
  {
    label: "REC Group: N-Peak Solar Panel Limited Warranty",
    url: "https://www.recgroup.com/sites/default/files/documents/warranty_rec_n-peak_rev_b3_web.pdf",
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
    modifiedTime: "2026-09-22T00:00:00Z",
    images: [CRR_SOCIAL_CARD],
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
      sourceCheckedDate="2026-09-22"
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
        <h2>Owned, leased, PPA, and ground-mounted: which coverage line applies</h2>
        <p>
          A system you own outright &mdash; paid in cash or financed with a
          loan &mdash; is an improvement to a structure you own. California&apos;s
          Department of Insurance splits a homeowners policy into Coverage A
          (the dwelling itself, and things attached to it) and Coverage B
          (other structures on the property that are not attached to the
          dwelling), and notes that &ldquo;Coverage B is normally limited to
          10% of the coverage A limit,&rdquo; though you can buy more for an
          additional premium. A roof- or wall-mounted system you own is
          generally an attached improvement &mdash; that&apos;s a Coverage A
          question &mdash; and the CDI guide tells homeowners to
          &ldquo;contact your insurance agent or broker to increase the
          dwelling limit when appropriate&rdquo; after a change like this.
          Put the request in writing: the guide specifically calls for
          discussing &ldquo;any modifications to your home, in writing, with
          your agent, broker, or insurer that may cause the replacement cost
          of your dwelling limit to increase.&rdquo;
        </p>
        <p className="mt-3">
          A ground-mounted array that stands apart from the house is a
          different question. It may fall under Coverage B rather than
          Coverage A, and because that coverage defaults to roughly 10% of
          your dwelling limit, a ground-mount system worth more than that
          could be underinsured unless you ask your insurer to schedule it
          separately or raise the Coverage B limit specifically.
        </p>
        <p className="mt-3">
          If the system is leased or under a power purchase agreement (PPA),
          you don&apos;t own the equipment &mdash; the solar company or a
          third-party investor typically does. Confirm in writing which
          party is expected to insure the hardware itself; don&apos;t assume
          your homeowners policy extends automatically to equipment you
          don&apos;t own. See{" "}
          <Link className="underline" href="/blog/solar-ppa-explained-california">
            how a solar PPA works
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/blog/is-it-better-to-buy-or-lease-solar-panels-california">
            buying versus leasing solar panels
          </Link>{" "}
          for how ownership is structured in each case.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Source: California Department of Insurance, Residential Insurance:
          Homeowners and Renters guide (Form 401, revised January 2026).
        </p>
      </section>

      <section>
        <h2>Hail, wind, and fire: what your policy covers and what the manufacturer&apos;s warranty covers instead</h2>
        <p>
          Two different documents respond to two different kinds of damage.
          Your homeowners (or FAIR Plan) policy responds to a covered peril
          &mdash; a storm, a fire, a falling branch. The panel
          manufacturer&apos;s warranty responds to a defective product or
          panels that underperform their rated output over time. They are
          not substitutes for each other.
        </p>
        <p className="mt-3">
          <strong>If your address is on the California FAIR Plan.</strong>{" "}
          Homeowners in high wildfire-risk parts of California who
          can&apos;t find or keep standard-market coverage often end up on
          the California FAIR Plan, which describes itself as &ldquo;an
          insurer of last resort, established by statute to provide basic
          property insurance to Californians statewide when no other option
          is reasonably available.&rdquo; The FAIR Plan itself notes that
          &ldquo;in the last decade, more Californians have turned to the
          California FAIR Plan as wildfires have devastated California and
          some insurers have pulled back from these markets.&rdquo;
        </p>
        <p className="mt-3">
          The FAIR Plan&apos;s Dwelling policy is a named-peril policy. By
          its own description, the Dwelling Fire Policy &ldquo;provides
          coverage only for damage caused by the specific causes of loss
          listed in the policy&rdquo; &mdash; Fire &amp; Lightning, Internal
          Explosion, and Smoke. Windstorm, hail, and theft are not on that
          list. The FAIR Plan directs policyholders who want broader
          protection to add a Difference in Conditions (DIC) policy
          &ldquo;to supplement your California FAIR Plan policy by covering
          additional perils.&rdquo; In plain terms: if your only fire
          coverage is a FAIR Plan Basic Dwelling policy, hail or wind damage
          to your solar array needs a DIC policy or another coverage source
          to respond &mdash; the Basic policy alone will not cover it.
          Confirm with the FAIR Plan or your broker how it treats panels
          mounted to, or standing apart from, the insured dwelling before
          you rely on it.
        </p>
        <p className="mt-3">
          <strong>What the manufacturer&apos;s warranty covers instead.</strong>{" "}
          A solar panel&apos;s manufacturer warranty is a separate document
          from your insurance and covers different things. As one example,
          REC Group&apos;s N-Peak panel warranty guarantees the panel
          against manufacturing defects for 20 years and against
          power-output decline for 25 years (98% of rated output in year
          one, declining toward a minimum of 86%&ndash;92% by year 25
          depending on the series). It explicitly excludes damage from
          &ldquo;abuse, misuse, accident, negligent acts, power failures or
          surges, lightning, fire, flood, accidental breakage, actions of
          third parties and other events or accidents outside REC&apos;s
          reasonable control,&rdquo; plus damage from improper installation
          and normal cosmetic wear &mdash; and it does not cover the labor
          to remove, transport, or reinstall a panel. In practice: a
          hailstone that cracks a panel or a windstorm that tears one loose
          is a property-insurance claim, not a warranty claim, unless the
          failure traces to a manufacturing defect. Warranty terms vary by
          manufacturer &mdash; read the document that ships with your
          specific panels. See{" "}
          <Link className="underline" href="/solar-problems/solar-panel-degradation-california">
            how solar panel output degrades over time
          </Link>{" "}
          for more on the performance side of that warranty.
        </p>
        <p className="mt-3">
          <strong>Ground-mount and battery storage.</strong> A ground-mounted
          array typically carries more direct wind exposure than a
          roof-mounted one &mdash; another reason to get written
          confirmation of which coverage line and which perils apply to it.
          For{" "}
          <Link className="underline" href="/battery">
            battery storage
          </Link>
          , ask your insurer directly whether the battery is covered under
          the same terms as the panels, whether it needs to be scheduled
          separately, and what exclusions apply to fire or thermal events
          tied to the battery. None of the sources checked for this page
          name batteries specifically, so don&apos;t assume the answer
          either way &mdash; get it in writing.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Sources: California FAIR Plan (cfpnet.com) &mdash; home page,
          &ldquo;About FAIR Plan,&rdquo; and &ldquo;Dwelling&rdquo; policy
          page; REC Group N-Peak solar panel limited warranty.
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
