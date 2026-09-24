import type { Metadata } from "next";
import Link from "next/link";
import { HubSpokeLinks } from "@/components/growth/HubSpokeLinks";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";

const path = "/blog/is-my-roof-good-for-solar-california";
const title = "Is My Roof Good for Solar? A California Suitability Checklist";
const intro = "Most California roofs — composition shingle, tile, metal and flat — can support solar, but yours needs a few things confirmed before it's a good candidate: enough usable, unshaded area; a structure that can carry the added weight; and enough roof life left that you aren't paying to remove and reinstall the array a few years in. The sections below walk through each check in the order a site survey and permit review actually apply them, including the state fire code's roof access rules.";


// The two consts above are visible copy: `title` heads the page and `intro` is the
// opening paragraph a reader sees. The search snippet has a different job and a
// hard length budget, so it is declared separately here. Reusing `intro` as the
// meta description is what caused a draft pass to overwrite a live opening
// paragraph on the SDG&E guide.
const metaTitle = "Is My Roof Good for Solar? California Suitability Guide";
const metaDescription =
  "Check your roof type, age, shade, orientation and structure against California's fire code and permit rules before you get a solar quote.";

const sources: Source[] = [
  {
    label: "U.S. Department of Energy: Homeowner's Guide to Solar",
    url: "https://www.energy.gov/cmei/systems/homeowners-guide-solar",
  },
  {
    label: "U.S. Department of Energy: Step-by-Step Guide for Consumers Going Solar",
    url: "https://www.energy.gov/cmei/systems/articles/walk-me-through-it-step-step-guide-consumers-going-solar",
  },
  {
    label: "NREL: PVWatts Calculator",
    url: "https://pvwatts.nrel.gov/",
  },
  {
    label: "U.S. Department of Energy: Solar Photovoltaic Performance and Efficiency Basics (temperature check September 20, 2026)",
    url: "https://www.energy.gov/cmei/systems/solar-photovoltaic-performance-and-efficiency-basics",
  },
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "U.S. Department of Energy: Replacing Your Roof? It's a Great Time to Add Solar",
    url: "https://www.energy.gov/eere/solar/articles/replacing-your-roof-its-great-time-add-solar",
  },
  {
    label: "California Solar Permitting Guidebook, 4th Edition (Governor's Office of Planning and Research)",
    url: "https://lci.ca.gov/docs/20190226-Solar_Permitting_Guidebook_4th_Edition.pdf",
  },
  {
    label: "CAL FIRE / Office of the State Fire Marshal: Solar Photovoltaic Installation Guideline",
    url: "https://cdi.santacruzcountyca.gov/Portals/35/CDI/UnifiedPermitCenter/Building/Forms%20&%20Publications/Fire/CalFiresolarphotovoltaicguideline.pdf",
  },
];

export const roofSuitabilityMetadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-22T00:00:00Z",
  },
};

export function RoofSuitabilityGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      topic="California solar roof suitability"
      sourceCheckedDate="2026-09-22"
      contentModifiedDate="2026-09-22"
      primaryResourceHref="/blog/solar-panels-tile-roof-california"
      primaryResourceLabel="Tile-roof solar guide"
      comparisonHref="/blog/solar-panel-removal-reinstall-cost"
      comparisonLabel="Removal and reinstallation checklist"
    >
      <section>
        <h2>The best roof is the one the proposal has actually measured</h2>
        <p>
          The U.S. Department of Energy says solar panels typically perform best
          on south-facing roofs with a slope between 15 and 40 degrees, while
          other roofs can still be suitable. That is a starting point. It does
          not decide whether a particular array fits, how much shade it receives
          or whether the roof should be repaired first.
        </p>
      </section>

      <section>
        <h2>1. Check roof age and condition before system size</h2>
        <p>
          Find the roof permit, replacement date and any repair history. Look for
          active leaks, damaged covering, soft areas or visible deterioration,
          then have the appropriate roofing or structural professional address
          anything uncertain. DOE advises homeowners to consider how long remains
          before roof replacement because later work can require the solar array
          to be removed and reinstalled.
        </p>
      </section>

      <section>
        <h2>How your roof&apos;s remaining life compares to a 25&ndash;30 year system</h2>
        <p>
          A solar system and a roof age on different clocks, and the
          mismatch is the real reason to check this before signing anything.
          The U.S. Department of Energy puts panel life at roughly 25 to 30
          years, while a roof&apos;s lifespan runs anywhere from 20 to 50
          years depending on the roofing material &mdash; so a shingle roof
          already partway through its life can force a mid-system tear-off,
          while a newer tile or metal roof more comfortably outlasts the
          array. DOE&apos;s guidance is direct about the sequencing:
          installing solar at the same time as a roof replacement avoids
          paying twice to remove and reinstall the array later.
          California&apos;s own consumer guide backs this up in plain terms:
          &ldquo;If you plan to replace your roof soon, you should replace
          it before installing a rooftop solar system.&rdquo; Ask any bidder
          for your roof&apos;s installation or last-replacement date and get
          a written estimate of remaining life before you compare system
          quotes &mdash; a system sized for a roof that needs work in five
          years is a different proposal than one sized for a roof good for
          twenty.
        </p>
      </section>

      <section>
        <h2>2. Map shade and usable roof area</h2>
        <p>
          Trees, neighboring buildings, chimneys, vents, roof peaks and other
          obstructions can reduce usable area or production. Ask the bidder for a
          roof layout and a production model that states its shade and loss
          assumptions. NREL&apos;s PVWatts can produce an independent starting
          estimate, but remote tools do not replace a site and structural review.
        </p>
      </section>

      <section>
        <h2>Shade and direct sunlight: what actually cuts production</h2>
        <p>
          Solar panels don&apos;t need unbroken direct sun to produce power
          &mdash; they respond to diffuse daylight too, which is why they
          still generate on overcast days. What matters more is partial
          shade on part of an array: because panels are wired together in
          strings, shade falling on even a portion of one panel can drag
          down output from panels around it, not just the shaded one. This
          is a bigger factor than most homeowners expect, and it&apos;s
          exactly why the section above recommends getting a shade map and a
          facet-by-facet production estimate rather than accepting a single
          roof-wide percentage from a bidder.
        </p>
      </section>

      <section>
        <h2>3. Separate orientation from the household&apos;s actual need</h2>
        <p>
          A south-facing facet can produce well across the day. Other orientations
          may still support a workable design, depending on shade, roof shape,
          tariff and when the home uses electricity. Ask for monthly production by
          roof facet instead of accepting a single annual percentage or a claim
          that one compass direction automatically wins.
        </p>
      </section>

      <section>
        <h2>If your roof doesn&apos;t face south, or isn&apos;t at an ideal pitch</h2>
        <p>
          A roof does not have to face true south to work. East-, west-,
          southeast- and southwest-facing roofs can still carry a workable
          system &mdash; the tradeoff is that production spreads across more
          of the day instead of concentrating around midday, which can
          actually suit a household that uses more power in the morning or
          evening. What California&apos;s solar consumer guide flags as a
          real problem is narrower: a roof that is mostly shaded or faces
          due north. Rather than rely on a rule of thumb for your own roof,
          ask your installer to run NREL&apos;s PVWatts calculator &mdash;
          the same government modeling tool referenced above &mdash; using
          your roof&apos;s actual measured tilt and compass heading, and to
          hand you the projected output by month, not just a single annual
          number. That&apos;s the only way to see what your specific
          orientation actually costs you in production, instead of guessing
          from a generic best-case figure.
        </p>
      </section>

      <section>
        <h2>4. Ask how heat is reflected in the production model</h2>
        <p>
          Sunlight and equipment temperature are different inputs. The Department
          of Energy explains that higher cell temperatures affect photovoltaic
          performance, so ask which module temperature and installation
          assumptions the monthly model uses. That is a request to show the
          model&apos;s inputs, not a promise about output on a particular roof.
        </p>
      </section>

      <section>
        <h2>5. Make the mounting and roof responsibilities visible</h2>
        <p>
          Roof material changes the attachment and flashing plan. Structure and
          local code determine what the roof can support. Get the mounting method,
          penetrations, waterproofing responsibility, workmanship coverage,
          exclusions and the process for a future roof repair in writing. For a
          tile roof, use the <Link className="underline" href="/blog/solar-panels-tile-roof-california">tile-roof checklist</Link> before comparing proposals.
          If a leak shows up after the system goes in, the steps are in{" "}
          <Link className="underline" href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after a solar install</Link>.
        </p>
      </section>

      <section>
        <h2>How solar panels are mounted on California&apos;s common roof types</h2>
        <p>
          The mounting approach &mdash; and how much it will disturb your
          roof covering &mdash; depends on what the roof is made of. In
          general terms, useful for comparing bids rather than specifying
          hardware:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Composition shingle</strong>, the most common California
            roof, is mounted with flashed attachment points set into the
            rafters, with a rail or rail-less racking system carrying the
            panels above the roof surface.
          </li>
          <li>
            <strong>Tile roofs</strong> need tile-specific attachment
            hardware &mdash; either a raised hook under a full or cut tile,
            or removing tiles at each mount point and replacing them with
            waterproof flashing. This adds cost and installer skill
            requirements beyond a shingle job; see our{" "}
            <Link className="underline" href="/blog/solar-panels-tile-roof-california">
              dedicated guide to solar on tile roofs
            </Link>{" "}
            for that scope in detail.
          </li>
          <li>
            <strong>Metal roofs</strong> split into two mounting approaches:
            standing-seam metal can usually be clamped to the raised seams
            with no new penetrations at all, while corrugated or trapezoidal
            panel roofs typically need a bracket bolted through the metal
            and sealed, since there&apos;s no seam to clamp.
          </li>
          <li>
            <strong>Flat or foam roofs</strong> are usually mounted with a
            ballasted, tilted rack that adds weight instead of adding
            penetrations &mdash; which is one more reason the structural
            check below matters more on this roof type than on a pitched
            one.
          </li>
        </ul>
        <p className="mt-3">
          Any of these methods, done correctly, should be flashed or sealed
          at every attachment point, covered by a workmanship warranty, and
          documented in writing &mdash; which is what the section above on
          mounting and roof responsibilities already asks you to get from a
          bidder. Most reports of solar &ldquo;damaging&rdquo; a roof trace
          back to a bad install on a marginal roof, not to a properly
          flashed mount on a sound structure.
        </p>
      </section>

      <section>
        <h2>Photos and records to collect before the site visit</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Aerial or street view showing the roof facets and nearby shade.</li>
          <li>Close photos of the roof covering, damage, repairs and obstructions.</li>
          <li>The roof permit or best available installation and repair dates.</li>
          <li>A current electric bill and a full year of usage when available.</li>
          <li>Photos of the main electrical service label and accessible equipment area.</li>
        </ul>
        <p className="mt-3">
          These records help a bidder prepare. They do not prove structural
          capacity, code compliance or roof condition from a distance.
        </p>
      </section>

      <section>
        <h2>Fire code setbacks and roof access pathways</h2>
        <p>
          California requires rooftop PV arrays on homes to leave clear
          pathways for firefighters, and this is one of the few parts of a
          solar layout that isn&apos;t negotiable with your installer &mdash;
          it comes from the fire code, not from equipment choice. The
          Office of the State Fire Marshal&apos;s Solar Photovoltaic
          Installation Guideline sets the baseline figures for one- and
          two-family homes:
        </p>
        <div className="overflow-x-auto rounded-xl border my-4">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Fire-code roof access requirements for residential solar
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Requirement</th>
                <th className="p-4">Figure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Clear access pathway, eave to ridge (hip roof layout)</td>
                <td className="p-4">One 3-foot-wide pathway per roof slope with modules</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Clear access pathway, eave to ridge (single-ridge layout)</td>
                <td className="p-4">Two 3-foot-wide pathways per roof slope with modules</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Setback below the ridge (for smoke ventilation)</td>
                <td className="p-4">Modules no higher than 3 feet below the ridge</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Clearance from a hip or valley (modules on both sides)</td>
                <td className="p-4">1.5 feet minimum</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Plan review trigger</td>
                <td className="p-4">Required when the array covers more than 50% of the roof area</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          California&apos;s Solar Permitting Guidebook confirms the same
          principle at the state level: &ldquo;The installation of solar PV
          systems must also allow for fire department smoke ventilation
          operations. The California Building, Residential and Fire Codes
          outline the requirements for a roof access point and clear access
          pathways along the roof,&rdquo; and requires your installer to
          submit a roof plan showing these pathways as part of the permit
          package. Your installer&apos;s proposal should show these
          pathways on your actual roof plan, not just state that the system
          is &ldquo;code compliant.&rdquo;
        </p>
      </section>

      <QuoteChecklist />

      <section>
        <h2>If roof work is part of the sale, price it separately</h2>
        <p>
          A bundled contract can still hide who performs the roof work, who holds
          the roofing license, which warranty applies and what happens if the solar
          company disappears. Ask for the roof scope, solar scope, cash prices,
          contractors and warranty claim process as separate written items. If the
          roof may need service later, use the <Link className="underline" href="/blog/solar-panel-removal-reinstall-cost">removal and reinstallation checklist</Link> before signing.
        </p>
      </section>

      <section>
        <h2>Structural review and the permit sequence</h2>
        <p>
          Before a system goes on your roof, two separate things get
          checked: whether the structure can carry it, and whether the
          local building department signs off on the plan. On the
          structural side, California&apos;s Solar Permitting Guidebook is
          explicit that &ldquo;the additional weight must be accounted for
          to ensure that the building can safely bear the weight of the
          solar installation,&rdquo; and that building codes give an
          engineer or architect the design criteria to calculate the
          support a given roof needs &mdash; some smaller systems qualify
          for a simplified, prescriptive check instead of a full
          engineering review, but that&apos;s a determination your
          installer or the city makes, not an assumption to accept on
          faith. DOE&apos;s consumer guide frames it the same way for
          homeowners: &ldquo;A solar installer, roofing expert, or
          structural engineer can help you determine your roof&apos;s solar
          suitability.&rdquo;
        </p>
        <p className="mt-3">
          On the permit side, California&apos;s solar consumer guide lays
          out the actual sequence: the installer performs a home site visit
          to confirm the roof, ground and electrical conditions match the
          proposal; the solar provider then finalizes the system design and
          applies for a building permit with your city or county; and a
          city or county inspector inspects the completed system for permit
          compliance. What that site visit checks is largely the same list
          the section above on photos and records already asks you to
          prepare &mdash; roof condition, obstructions, electrical panel
          location and capacity &mdash; because the visit exists to confirm
          those assumptions in person before the design is finalized. For
          what happens after the permit is issued, see the{" "}
          <Link className="underline" href="/blog/solar-installation-timeline-california">
            full installation timeline
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Quick answers</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Do solar panels need direct sunlight?</strong> No &mdash;
            they produce from diffuse daylight too, but shade on even part
            of an array cuts output more than the shaded area alone
            suggests, because panels share wiring in strings.
          </li>
          <li>
            <strong>Can you put solar panels on a metal roof?</strong> Yes.
            Standing-seam metal usually clamps on with no new penetrations;
            corrugated or trapezoidal metal typically needs a sealed,
            bolted bracket instead.
          </li>
          <li>
            <strong>Do solar panels damage your roof?</strong> Not when a
            mount is properly flashed or sealed and the roof was
            structurally sound to begin with &mdash; most damage complaints
            trace back to one of those two things being skipped, not to
            solar mounting itself.
          </li>
          <li>
            <strong>Can I let the utility use my roof instead?</strong> In
            LADWP territory, yes: the{" "}
            <Link className="underline" href="/blog/ladwp-solar-rooftops-program">
              LADWP Solar Rooftops program
            </Link>{" "}
            pays eligible owners to host a utility-owned system. It does not
            lower your own bill the way your own system would.
          </li>
          <li>
            <strong>Do home warranties cover solar panels?</strong> That
            depends on your specific homeowners policy and the system&apos;s
            own workmanship warranty, not on solar panels generally &mdash;
            see{" "}
            <Link className="underline" href="/solar-problems/solar-homeowners-insurance">
              how solar affects your homeowners insurance
            </Link>{" "}
            before you assume either way.
          </li>
        </ul>
      </section>
      <HubSpokeLinks hub="roof_structures" currentPath={path} />
    </DecisionPage>
  );
}
