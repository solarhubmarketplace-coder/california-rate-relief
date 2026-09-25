import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Byline } from '@/components/trust/Byline';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// Created 2026-09-23 (topical-authority program, CREATE_DEDICATED) for the
// "commercial solar roofing" intent, which had no on-topic page. Every figure
// was fetched on 2026-09-23 from the source it cites.

const title = 'Commercial Solar Roofing in California: What to Check';
const h1 = 'Commercial Solar Roofing in California: Roof Condition, Mounting and Who Does the Work';
const description =
  'Solar on a business roof starts with the roof: remaining life, membrane and structure, fire-access pathways, and which CSLB license covers each part of the work.';
const path = '/commercial-solar/commercial-solar-roofing';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const cslb = (c: string) =>
  `https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=${c}`;
const cslbC39 = cslb('C39');
const cslbC46 = cslb('C46');
const cslbC10 = cslb('C10');
const cslbB = cslb('B');
const dsaIr168 =
  'https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_16-8_2022-CBC.pdf';
const sonomaFire =
  'https://permitsonoma.org/divisions/firepreventionandhazmat/servicesandfees/permitsandinspections/photovoltaicsystems';
const cecNonresPv =
  'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-15';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const bscCodes = 'https://www.dgs.ca.gov/BSC/Codes';
const irc48e =
  'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section48E&num=0&edition=prelim';

const faqs = [
  {
    question: 'Should I replace a commercial roof before installing solar?',
    answer:
      'If the roof will need replacing during the solar contract term, usually yes. Taking an array off and putting it back later means paying for removal, storage, reinstallation and electrical work on top of the new roof. Get a roofer to state the remaining life of the roof in writing and compare it with the solar contract term before deciding.',
  },
  {
    question: 'Can a solar contractor replace my roof?',
    answer:
      'Not under the solar license alone. CSLB says a C-46 solar contractor "shall not undertake or perform building or construction trades" except when required to install the solar system. Roof replacement is C-39 roofing work, or can be taken by a B general building contractor on a project involving at least two unrelated trades. Many projects use a roofer and a solar contractor under one prime contract.',
  },
  {
    question: 'What is the best commercial roof for solar?',
    answer:
      'One with years of life left, a structure that can take the added load, and an attachment method the roofing manufacturer will warrant. Low-slope membrane roofs can take ballasted or attached racking; standing-seam metal roofs can use clamps that avoid penetrations. The right answer depends on the structural review and the roof warranty, not the roof type alone.',
  },
  {
    question: 'How much roof area does a commercial solar system need?',
    answer:
      "It depends on module efficiency, row spacing and required fire-access pathways. As a reference point, LBNL's 2026 data update found non-residential arrays covered a wide range of roof area in 2025, from 15% to 47% of the roof across the percentile band it reports. Ask the designer for the layout with pathways shown.",
  },
  {
    question: 'Does new commercial construction in California have to include solar?',
    answer:
      "For many building types, yes. The California Energy Commission's 2025 Energy Code, Section 140.10(a), requires solar PV on newly constructed nonresidential buildings of listed types, including offices, retail, warehouses, schools and places of worship, with battery storage in most cases, subject to listed exceptions.",
  },
  {
    question: 'Do roofing costs count toward the federal solar tax credit?',
    answer:
      'Be careful. 26 U.S.C. §48E defines qualified property to exclude "a building or its structural components." Ask a tax professional before treating any roofing cost as part of the credit basis, and keep roof work on its own line in the contract.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: `${DATE_MODIFIED}T00:00:00Z`,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    url: canonicalUrl,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(title, description),
};

export default function CommercialSolarRoofing() {
  return (
    <PublicLayout breadcrumbLabel="Commercial solar roofing">
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={canonicalUrl}
        datePublished={DATE_MODIFIED}
        dateModified={DATE_MODIFIED}
        description={description}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/commercial-solar" className="hover:text-primary">Commercial Solar</Link>
              <span>/</span>
              <span className="text-foreground">Commercial solar roofing</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Roofs · Racking · Licensing
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                On a business building, the roof decides most of the solar project. Before you
                sign, confirm three things: the roof will outlast the solar contract, the
                membrane and structure can take the attachments or ballast, and each part of the
                work is covered by the right license and warranty. California licenses roofing
                (C-39) and solar (C-46) as separate trades, so the roof and the array often come
                from different contractors.
              </p>
              <p>
                This guide sits under the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub
                </Link>
                . If your roof is not a good host, a{' '}
                <Link href="/commercial-solar/commercial-solar-carport-cost" className={link}>
                  parking-lot solar carport
                </Link>{' '}
                is the usual alternative. Sources were checked {CHECKED}.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Start with the roof&apos;s remaining life
              </h2>
              <p>
                A commercial PPA or lease runs for many years, and an owned system is expected
                to keep producing well beyond a typical financing term. If the roof will need replacing during that
                period, the array has to come off and go back on, which means paying for
                removal, storage, reinstallation, electrical reconnection and possibly a new
                inspection. That cost belongs in the decision now, not in year twelve.
              </p>
              <p>Ask a roofer for a written condition report that states:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The roof type, age and remaining service life.</li>
                <li>Any areas of ponding, soft insulation or prior leaks under the planned array.</li>
                <li>Whether the manufacturer&apos;s warranty is active, and what it says about rooftop equipment.</li>
                <li>What repair or replacement is recommended before an array goes on.</li>
              </ul>
              <p>
                If replacement is close, price the reroof and the solar together, with the roof
                on its own line.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Roof types and how arrays attach
              </h2>
              <p>
                <strong>Low-slope membrane roofs</strong> (single-ply, built-up and modified
                bitumen) are the most common host for warehouses and retail buildings. Arrays
                either attach through the membrane to the structure, with flashed penetrations,
                or sit on ballasted racking held by weight. The Division of the State
                Architect&apos;s{' '}
                <a href={dsaIr168} target="_blank" rel="noopener noreferrer" className={link}>
                  IR 16-8
                </a>
                , which governs school and state buildings, requires ballasted systems that
                resist seismic forces by friction alone to be designed under its own section on
                ballasted systems, and requires the added seismic weight on the building to be
                evaluated. Local building departments apply the California Building Code to
                private buildings; the same questions belong in your structural review. If the
                low-slope roof is on a house, not a business, see{' '}
                <Link href="/blog/flat-roof-solar-panels" className={link}>
                  flat-roof solar on a home
                </Link>
                .
              </p>
              <p>
                <strong>Standing-seam metal roofs</strong> can take clamps that grip the seams,
                avoiding penetrations. IR 16-8 treats these as their own category because the
                panels are held by concealed clips that let the roof move with temperature, so
                the clamp and the roof system have to be checked together.
              </p>
              <p>
                <strong>Steep-slope roofs</strong> (tile, shingle, metal panel) on offices,
                churches and smaller commercial buildings use attached racking much like a home
                system, with flashing at every mount.
              </p>
              <p>
                <strong>Solar-integrated roofing</strong>, where the solar element is the roof
                covering, is a separate product category. IR 16-8 requires a preliminary meeting
                with DSA before any building-integrated system is used on a DSA project; for a
                private building, expect the product&apos;s listing and evaluation report to be
                the first plan-check question.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Structure, loads and fire-access pathways
              </h2>
              <p>
                An array adds dead load, wind load and seismic weight. IR 16-8 requires roof
                framing on DSA projects to be designed for live loads both with and without the
                panels present, and to include unbalanced live loads. Ask the structural engineer
                to state which loads were checked and whether any framing needs reinforcement.
              </p>
              <p>
                Fire access shapes the layout. Permit Sonoma&apos;s{' '}
                <a href={sonomaFire} target="_blank" rel="noopener noreferrer" className={link}>
                  fire-prevention guidance for PV
                </a>{' '}
                describes, for commercial buildings, a 6-foot clear perimeter around the roof
                (4 feet where the building is 250 feet or less on either axis), center-line
                pathways at least 4 feet wide on both axes, arrays no larger than 150 by 150
                feet, and ventilation pathways between arrays. It cites the code sections in
                force when it was written, so confirm the current California Fire Code section
                and any local amendment with your fire authority. Pathways can take a real share
                of a roof: LBNL&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                found non-residential arrays covered 15% to 47% of roof area in 2025 across the
                range it reports.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Who does the roofing and who does the solar
              </h2>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">CSLB license classifications on a commercial solar roof project</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">CSLB class</th>
                      <th className="p-3">What CSLB says it covers</th>
                      <th className="p-3">Role on a solar roof job</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top"><a href={cslbC39} className={link}>C-39 Roofing</a></th><td className="p-3 align-top">Installs products and repairs surfaces that seal, waterproof and weatherproof structures, including membrane and metal roofing</td><td className="p-3 align-top">Reroofing, repairs, flashing and sealing at penetrations</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top"><a href={cslbC46} className={link}>C-46 Solar</a></th><td className="p-3 align-top">Installs, modifies, maintains and repairs photovoltaic systems; no other building trades except when required for the solar installation</td><td className="p-3 align-top">The array, racking and solar electrical work</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top"><a href={cslbC10} className={link}>C-10 Electrical</a></th><td className="p-3 align-top">Electrical wiring and equipment, including solar photovoltaic cells</td><td className="p-3 align-top">Switchgear, service upgrades, interconnection wiring</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top"><a href={cslbB} className={link}>B General Building</a></th><td className="p-3 align-top">Projects requiring at least two unrelated building trades or crafts</td><td className="p-3 align-top">Prime contractor managing roof, structural and solar trades together</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The warranty question matters as much as the license. Ask the roofer, in writing,
                whether the proposed attachment method keeps the roof warranty in force, and ask
                the solar contractor who is responsible for a leak at a penetration. If one
                company offers both, confirm which licensed entity does each part and check them
                in the CSLB lookup. The guide to{' '}
                <Link href="/commercial-solar/companies-california" className={link}>
                  comparing commercial solar companies
                </Link>{' '}
                lists the rest of the proposal items to get in writing.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                New buildings: the Title 24 solar requirement
              </h2>
              <p>
                For new construction, the roof is often required to carry solar. The California
                Energy Commission&apos;s{' '}
                <a href={cecNonresPv} target="_blank" rel="noopener noreferrer" className={link}>
                  2025 nonresidential solar PV guidance
                </a>{' '}
                says Section 140.10(a) of the 2025 Energy Code requires PV on newly constructed
                nonresidential buildings of listed types, including offices, retail, grocery,
                warehouses, schools, hotels and places of worship. The system is sized from the
                solar access roof area at 14 watts per square foot on low-sloped roofs or 18 on
                steep-sloped roofs, or by the code&apos;s equation, and battery storage is
                required unless an exception applies. The 2025 Title 24 edition took effect
                January 1, 2026, according to the{' '}
                <a href={bscCodes} target="_blank" rel="noopener noreferrer" className={link}>
                  Building Standards Commission
                </a>
                . The{' '}
                <Link href="/commercial-solar/title-24-requirements" className={link}>
                  Title 24 commercial solar requirements page
                </Link>{' '}
                covers the exceptions.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Pricing roof work and solar together
              </h2>
              <p>
                Keep the roof and the solar on separate lines, even under one contract. That lets
                you compare the solar portion against the{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial solar cost-per-watt benchmarks
                </Link>
                , and it matters for tax: 26 U.S.C.{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  §48E
                </a>{' '}
                excludes &ldquo;a building or its structural components&rdquo; from qualified
                property, so ask a tax professional before treating roofing cost as part of the
                credit basis. For how ownership changes who takes the credit, see{' '}
                <Link href="/blog/commercial-solar-financing-california" className={link}>
                  commercial solar financing options
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                When the roof is the wrong place for solar
              </h2>
              <p>
                Skip the roof, or fix it first, if it has less life left than the solar contract,
                if the structure needs reinforcement that costs more than the site can justify,
                if you lease the building and the landlord will not sign a roof agreement, or if
                pathways and equipment leave too little usable area. In those cases, compare a
                carport or ground mount, or look at{' '}
                <Link href="/commercial-solar/warehouse-solar-california" className={link}>
                  warehouse solar
                </Link>{' '}
                if a different building on the site has a better roof.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{f.question}</h3>
                    <p>{f.answer}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
                This page does not assess any roof or confirm a code, warranty or tax result.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>CSLB, <a href={cslbC39} className={link}>C-39 Roofing</a>, <a href={cslbC46} className={link}>C-46 Solar</a>, <a href={cslbC10} className={link}>C-10 Electrical</a> and <a href={cslbB} className={link}>B General Building</a> classifications</li>
                <li>Division of the State Architect, <a href={dsaIr168} className={link}>IR 16-8, Solar Photovoltaic and Thermal Systems Review and Approval Requirements</a> (revised January 18, 2024)</li>
                <li>Permit Sonoma, <a href={sonomaFire} className={link}>fire prevention: photovoltaic systems</a></li>
                <li>California Energy Commission, <a href={cecNonresPv} className={link}>2025 Nonresidential Solar PV</a>; California Building Standards Commission, <a href={bscCodes} className={link}>2025 Title 24 codes</a></li>
                <li>LBNL, <a href={lbnl2026} className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026)</li>
                <li>26 U.S.C. <a href={irc48e} className={link}>§48E</a>, Office of the Law Revision Counsel (text in effect September 22, 2026)</li>
              </ul>
            </div>

            <CommercialReviewForm className="mt-12" />
            <HubSpokeLinks hub="commercial" currentPath={path} />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
