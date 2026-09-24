import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { GuideShell, Cite } from '@/components/growth/GuideShell';
import { QuoteChecklist, type Source } from '@/components/growth/DecisionPage';
import type { KeyFact } from '@/components/trust/KeyFacts';

/*
 * Roofs and structures hub (roof_structures). Moved from the DecisionPage-based
 * RoofSuitabilityGuide component into this route on 2026-09-23 so that
 * scripts/qc-gate-tsx.mjs, which reads only route source, can see the Article
 * schema, the CTA and the compliance sentence. The fire-access figures were
 * updated from the 2008 draft CAL FIRE guideline to the 2019 Solar Permitting
 * Guidebook checklist (CFC 605.11 / CRC R324.6).
 */

const PATH = '/blog/is-my-roof-good-for-solar-california';
const UPDATED = '2026-09-23';
const metaTitle = 'Is My Roof Good for Solar? California Suitability Guide';
const metaDescription =
  "Check your roof type, age, shade, orientation and structure against California's fire code and permit rules before you get a solar quote.";

const DOE_GUIDE = 'https://www.energy.gov/cmei/systems/homeowners-guide-solar';
const DOE_STEPS = 'https://www.energy.gov/cmei/systems/articles/walk-me-through-it-step-step-guide-consumers-going-solar';
const PVWATTS = 'https://pvwatts.nrel.gov/';
const DOE_TEMP = 'https://www.energy.gov/cmei/systems/solar-photovoltaic-performance-and-efficiency-basics';
const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const DOE_ROOF = 'https://www.energy.gov/eere/solar/articles/replacing-your-roof-its-great-time-add-solar';
const GUIDEBOOK = 'https://lci.ca.gov/docs/20190226-Solar_Permitting_Guidebook_4th_Edition.pdf';
const SOLARAPP = 'https://help.gosolarapp.org/article/43-what-types-of-systems-are-eligible-for-solarapp-review';

const sources: Source[] = [
  { label: "U.S. Department of Energy: Homeowner's Guide to Solar", url: DOE_GUIDE },
  { label: 'U.S. Department of Energy: Step-by-Step Guide for Consumers Going Solar', url: DOE_STEPS },
  { label: 'NREL: PVWatts Calculator', url: PVWATTS },
  { label: 'U.S. Department of Energy: Solar Photovoltaic Performance and Efficiency Basics', url: DOE_TEMP },
  { label: 'CPUC: California Solar Consumer Protection Guide (Version 4, 2025)', url: CPUC_GUIDE },
  { label: "U.S. Department of Energy: Replacing Your Roof? It's a Great Time to Add Solar (July 28, 2021)", url: DOE_ROOF },
  { label: "California Solar Permitting Guidebook, 4th edition (Governor's Office of Planning and Research, 2019): fire-safety and structural checklists", url: GUIDEBOOK },
  { label: 'SolarAPP+ help center: system types eligible for automated permit review (ballasted systems excluded)', url: SOLARAPP },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Best-performing roofs',
    value: 'South, 15°–40°',
    note: 'DOE’s typical best case; other roofs may be suitable too.',
    source: { publisher: 'energy.gov', date: UPDATED, url: DOE_GUIDE },
  },
  {
    label: 'Panel vs roof life',
    value: '25–30 vs 20–50 yrs',
    note: 'Roof life depends on the material.',
    source: { publisher: 'energy.gov', date: UPDATED, url: DOE_ROOF },
  },
  {
    label: 'Firefighter pathways',
    value: '36 inches wide',
    note: 'At least two, eave to ridge, on roofs steeper than 2:12.',
    source: { publisher: 'CA Solar Permitting Guidebook', date: UPDATED, url: GUIDEBOOK },
  },
  {
    label: 'Roof near replacement?',
    value: 'Replace it first',
    note: 'The CPUC’s advice if you plan a new roof soon.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
  },
];

const faqs = [
  {
    question: 'Do solar panels need direct sunlight?',
    answer:
      'No. They produce from diffuse daylight too, which is why they still generate on overcast days. But shade on even part of an array cuts output more than the shaded area alone suggests, because panels share wiring in strings. That is why a shade map and a facet-by-facet production estimate matter more than a single roof-wide percentage.',
  },
  {
    question: 'Can you put solar panels on a metal roof?',
    answer:
      'Yes. Standing-seam metal can usually be clamped to the raised seams with no new penetrations. Corrugated or trapezoidal metal roofs typically need a bracket bolted through the metal and sealed, since there is no seam to clamp.',
  },
  {
    question: 'Do solar panels damage your roof?',
    answer:
      'Not when each mount is properly flashed or sealed and the roof was structurally sound to begin with. Most damage complaints trace back to one of those two being skipped, not to solar mounting itself. Get the mounting method, penetrations and workmanship coverage in writing.',
  },
  {
    question: 'Can I let a utility use my roof instead of buying solar?',
    answer:
      'In LADWP territory, yes: its Solar Rooftops program installs and owns a system on eligible owner-occupied homes and pays for the roof space. It does not lower your own bill the way your own system would. Elsewhere in California, roof leases are mostly for large commercial roofs.',
  },
  {
    question: 'Are solar roof tiles the same as panels on a tile roof?',
    answer:
      'No. Solar tiles and shingles are the roof covering itself, so the job includes a re-roof. Panels on a tile roof sit on mounts above the tile you already have. The two are priced, permitted and warranted differently.',
  },
  {
    question: 'Do home warranties or homeowners insurance cover solar panels?',
    answer:
      'That depends on your specific policy and on the system’s own workmanship warranty, not on solar panels generally. Read the policy’s coverage for attached structures and ask your insurer before you assume either way.',
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function IsMyRoofGoodForSolar() {
  return (
    <PublicLayout breadcrumbLabel="Is my roof good for solar?">
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Is My Roof Good for Solar? A California Suitability Checklist"
        url="https://ratereliefca.com/blog/is-my-roof-good-for-solar-california"
        dateModified="2026-09-23"
        description="How to check a California roof for solar: roof age and condition, shade, orientation, heat, mounting on each roof type, fire-code pathways, structure and the permit sequence, plus every roof guide on the site."
      />
      <Header />
      <GuideShell
        title="Is My Roof Good for Solar? A California Suitability Checklist"
        eyebrow="Roofs and solar"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="roof_structures"
        path={PATH}
        quickCheckTopic="California solar roof suitability"
        leadCount={2}
        inquiry={<SolarInquiry topic="California solar roof suitability" />}
      >
        <p>
          Most California roofs, including composition shingle, tile, metal and flat, can carry solar. Yours is a
          good candidate when it has enough unshaded area, a structure that can take the added weight, and enough
          life left that you won’t pay to remove and reinstall the array a few years in. Check those in the
          order a site survey and permit review apply them.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor. We don’t inspect roofs;
          this checklist tells you what to ask a bidder to show you.
        </p>

        <section>
          <h2>The best roof is the one the proposal has actually measured</h2>
          <p>
            The U.S. Department of Energy says that “typically, solar panels perform best on south-facing roofs
            with a slope between 15 and 40 degrees, though other roofs may be suitable too.”{' '}
            <Cite publisher="energy.gov" href={DOE_GUIDE} date={UPDATED} /> That is a starting point. It does not
            decide whether a particular array fits, how much shade it receives or whether the roof should be
            repaired first.
          </p>
        </section>

        <section>
          <h2>1. Check roof age and condition before system size</h2>
          <p>
            Find the roof permit, replacement date and any repair history. Look for active leaks, damaged
            covering, soft areas or visible deterioration, then have the appropriate roofing or structural
            professional address anything uncertain. DOE advises homeowners to consider how long remains before
            roof replacement, because later work can require the solar array to be removed and reinstalled.
          </p>
        </section>

        <section>
          <h2>How your roof’s remaining life compares to a 25–30 year system</h2>
          <p>
            A solar system and a roof age on different clocks, and the mismatch is the real reason to check this
            before signing anything. DOE puts panel life at about 25 to 30 years, while a roof lasts “anywhere
            from 20 to 50 years depending on the materials used,” and notes that doing both at the same time
            avoids having to reinstall the panels later. <Cite publisher="energy.gov" href={DOE_ROOF} date={UPDATED} />{' '}
            A shingle roof already partway through its life can force a mid-system tear-off, while a newer tile or
            metal roof more comfortably outlasts the array.
          </p>
          <p>
            California’s own consumer guide says it plainly: “If you plan to replace your roof soon, you should
            replace it before installing a rooftop solar system.” <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} />{' '}
            Ask any bidder for your roof’s installation or last-replacement date and get a written estimate of
            remaining life before you compare system quotes. A system sized for a roof that needs work in five
            years is a different proposal from one sized for a roof good for twenty. What a later lift-off costs is
            in <Link href="/blog/solar-panel-removal-reinstall-cost">the removal and reinstallation checklist</Link>.
          </p>
        </section>

        <section>
          <h2>2. Map shade and usable roof area</h2>
          <p>
            Trees, neighboring buildings, chimneys, vents, roof peaks and other obstructions can reduce usable area
            or production. Ask the bidder for a roof layout and a production model that states its shade and loss
            assumptions. NREL’s <a href={PVWATTS} target="_blank" rel="noopener noreferrer">PVWatts calculator</a>{' '}
            can produce an independent starting estimate, but remote tools do not replace a site and structural
            review.
          </p>
          <p>
            Solar panels don’t need unbroken direct sun; they respond to diffuse daylight too. What matters more
            is partial shade on part of an array: because panels are wired together in strings, shade on a
            portion of one panel can drag down output from panels around it, not just the shaded one. Trees that
            grow into the array later are a maintenance question; California’s Solar Shade Control Act and what it
            covers are explained in <Link href="/solar-panel-maintenance-california">the solar maintenance guide</Link>.
          </p>
        </section>

        <section>
          <h2>3. Separate orientation from the household’s actual need</h2>
          <p>
            A south-facing facet can produce well across the day. East-, west-, southeast- and southwest-facing
            roofs can still carry a workable system; production spreads across more of the day instead of
            concentrating around midday, which can suit a household that uses more power in the morning or
            evening. California’s consumer guide draws the line narrowly: “Roofs that are mostly shaded or face
            due north are not good candidates for solar.” <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} />
          </p>
          <p>
            Rather than rely on a rule of thumb, ask your installer to run PVWatts with your roof’s measured tilt
            and compass heading and to hand you projected output by month and by roof facet, not a single annual
            percentage or a claim that one direction automatically wins.
          </p>
        </section>

        <section>
          <h2>4. Ask how heat is reflected in the production model</h2>
          <p>
            Sunlight and equipment temperature are different inputs. The Department of Energy explains that higher
            temperatures cause “a slight increase in current, but a much larger decrease in voltage,” so ask which
            module temperature and installation assumptions the monthly model uses.{' '}
            <Cite publisher="energy.gov" href={DOE_TEMP} date={UPDATED} /> That is a request to show the model’s
            inputs, not a promise about output on a particular roof.
          </p>
        </section>

        <section>
          <h2>5. Make the mounting and roof responsibilities visible</h2>
          <p>
            Roof material changes the attachment and flashing plan. Structure and local code determine what the
            roof can support. Get the mounting method, penetrations, waterproofing responsibility, workmanship
            coverage, exclusions and the process for a future roof repair in writing. If a leak shows up after the
            system goes in, the steps are in{' '}
            <Link href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after a solar install</Link>.
          </p>
        </section>

        <section>
          <h2>How solar panels are mounted on California’s common roof types</h2>
          <p>
            The mounting approach, and how much it disturbs your roof covering, depends on what the roof is made
            of. In general terms, useful for comparing bids rather than specifying hardware:
          </p>
          <ul>
            <li>
              <strong>Composition shingle</strong>, the most common California roof, is mounted with flashed
              attachment points set into the rafters, with a rail or rail-less racking system carrying the panels
              above the roof surface.
            </li>
            <li>
              <strong>Tile roofs</strong> need tile-specific hardware: a hook set under a full or trimmed tile, or
              a replacement mount that takes the tile’s place with its own flashing. That adds labor and breakage
              risk; see <Link href="/blog/solar-panels-tile-roof-california">solar roof tiles vs panels on a tile roof</Link>,
              which also covers solar tiles and shingles that replace the roof covering.
            </li>
            <li>
              <strong>Metal roofs</strong>: standing-seam metal can usually be clamped to the seams with no new
              penetrations, while corrugated or trapezoidal panels need a sealed bracket bolted through the metal.
            </li>
            <li>
              <strong>Flat or foam roofs</strong> usually take a tilted rack that is either ballasted with weight
              or anchored through the membrane. Ballast makes the structural check below matter more, and
              SolarAPP+, the automated permit tool some California cities use, lists ballasted systems as outside its
              scope.{' '}
              <Cite publisher="SolarAPP+" href={SOLARAPP} date={UPDATED} /> The trade-offs are in{' '}
              <Link href="/blog/flat-roof-solar-panels">our guide to solar panels on a flat roof</Link>.
            </li>
          </ul>
          <p>
            Any of these methods, done correctly, should be flashed or sealed at every attachment point, covered
            by a workmanship warranty, and documented in writing. Most reports of solar “damaging” a roof trace
            back to a bad install on a marginal roof, not to a properly flashed mount on a sound structure.
          </p>
        </section>

        <section>
          <h2>Photos and records to collect before the site visit</h2>
          <ul>
            <li>Aerial or street view showing the roof facets and nearby shade.</li>
            <li>Close photos of the roof covering, damage, repairs and obstructions.</li>
            <li>The roof permit or best available installation and repair dates.</li>
            <li>A current electric bill and a full year of usage when available.</li>
            <li>Photos of the main electrical service label and accessible equipment area.</li>
          </ul>
          <p>
            These records help a bidder prepare. They do not prove structural capacity, code compliance or roof
            condition from a distance.
          </p>
        </section>

        <section>
          <h2>Fire code setbacks and roof access pathways</h2>
          <p>
            California requires rooftop arrays on homes to leave clear pathways for firefighters, and this is one
            of the few parts of a layout that isn’t negotiable with your installer: it comes from the fire and
            residential codes, not from equipment choice. The state’s Solar Permitting Guidebook (2019) lists
            these checks for roofs steeper than 2:12, citing the California Fire Code and California Residential
            Code R324.6. <Cite publisher="CA Solar Permitting Guidebook" href={GUIDEBOOK} date={UPDATED} />
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Fire-code roof access requirements for residential solar</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Requirement</th>
                  <th className={th}>What the checklist says</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>Pathways, eave to ridge</th>
                  <td className={td}>At least two 36-inch-wide pathways on separate roof planes, one on the street or driveway side</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Each plane with panels</th>
                  <td className={td}>A 36-inch pathway on that plane, an adjacent plane, or straddling the two</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Ridge setback, array ≤ 33% of roof</th>
                  <td className={td}>18 inches clear on both sides of a horizontal ridge</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Ridge setback, array &gt; 33% of roof</th>
                  <td className={td}>36 inches clear on both sides of a horizontal ridge</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>With NFPA 13D fire sprinklers</th>
                  <td className={td}>18 inches up to 66% coverage; 36 inches above that</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Emergency escape windows</th>
                  <td className={td}>No panels on the roof below one, and a 36-inch pathway to it</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Codes are updated on a regular cycle and your local fire authority applies the current edition, so
            treat these figures as what to look for, not as the final word. The guidebook also says “the
            installation of solar PV systems must also allow for fire department smoke ventilation operations,”
            and asks installers to submit a roof plan showing the pathways with the permit. Your proposal should
            show them on your actual roof plan, not just state that the system is “code compliant.” Flat roofs at
            2:12 or less are reviewed differently; see the flat-roof guide above.
          </p>
        </section>

        <QuoteChecklist />

        <section>
          <h2>If roof work is part of the sale, price it separately</h2>
          <p>
            A bundled contract can still hide who performs the roof work, who holds the roofing license, which
            warranty applies and what happens if the solar company disappears. Ask for the roof scope, solar
            scope, cash prices, contractors and warranty claim process as separate written items. The questions to
            ask are in{' '}
            <Link href="/blog/free-roof-replacement-with-solar-panels-california">what to check in a roof-plus-solar offer</Link>.
          </p>
        </section>

        <section>
          <h2>Structural review and the permit sequence</h2>
          <p>
            Before a system goes on your roof, two separate things get checked: whether the structure can carry
            it, and whether the local building department signs off on the plan. The guidebook says the weight of
            a solar system “shall be considered as dead load in the design of the structure,” and that a building
            official may waive structural calculations on an existing roof when the added weight clearly does not
            affect the building’s structural integrity; some jurisdictions use a prescriptive checklist for that.{' '}
            <Cite publisher="CA Solar Permitting Guidebook" href={GUIDEBOOK} date={UPDATED} /> DOE frames it the
            same way for homeowners: “A solar installer, roofing expert, or structural engineer can help you
            determine your roof’s solar suitability.” <Cite publisher="energy.gov" href={DOE_STEPS} date={UPDATED} />
          </p>
          <p>
            On the permit side, the usual sequence is a site visit to confirm the roof, ground and electrical
            conditions match the proposal, a final design, a building permit application to your city or county
            with the roof plan the guidebook calls for, and an inspection of the finished system. What happens
            after the permit is issued is in{' '}
            <Link href="/blog/solar-installation-timeline-california">the full installation timeline</Link>.
          </p>
        </section>

        <section>
          <h2>If the roof isn’t the right place</h2>
          <p>
            A roof that is shaded, too small, near replacement or not strong enough doesn’t end the question. A{' '}
            <Link href="/blog/solar-carport-california-guide">solar carport</Link> puts panels on a new structure
            built for them. In Los Angeles, LADWP will install and own a system on an eligible roof and pay you for
            the space; how that works, and what roof leases look like elsewhere, is in{' '}
            <Link href="/blog/lease-roof-for-solar-panels">leasing your roof for solar panels</Link> and{' '}
            <Link href="/blog/ladwp-solar-rooftops-program">the LADWP Solar Rooftops guide</Link>. Homeowners
            insurance questions are in{' '}
            <Link href="/solar-problems/solar-homeowners-insurance">how solar affects your homeowners insurance</Link>.
          </p>
        </section>

        <section>
          <h2>Every roof and structure guide on this site</h2>
          <ul>
            <li><Link href="/blog/solar-panels-tile-roof-california">Tile roofs and solar roof tiles</Link>: mounts, breakage, and how a solar tile bid compares.</li>
            <li><Link href="/blog/flat-roof-solar-panels">Flat and low-slope roofs</Link>: ballasted vs attached racks, tilt, weight and permits.</li>
            <li><Link href="/blog/roof-leak-after-solar-panel-install">Roof leak after a solar install</Link>: first steps and who is responsible.</li>
            <li><Link href="/blog/solar-panel-removal-reinstall-cost">Removing and reinstalling panels</Link>: for a new roof, a repair or for good.</li>
            <li><Link href="/blog/free-roof-replacement-with-solar-panels-california">Roof replacement offered with solar</Link>: what a bundle really includes.</li>
            <li><Link href="/blog/solar-carport-california-guide">Solar carports</Link>: when a new structure beats the roof.</li>
            <li><Link href="/blog/lease-roof-for-solar-panels">Leasing your roof for solar</Link> and the <Link href="/blog/ladwp-solar-rooftops-program">LADWP Solar Rooftops program</Link>: getting paid for roof space.</li>
            <li><Link href="/blog/solar-panels-over-canals-california">Solar panels over canals</Link>: California’s canal-solar pilots and what they found.</li>
          </ul>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
