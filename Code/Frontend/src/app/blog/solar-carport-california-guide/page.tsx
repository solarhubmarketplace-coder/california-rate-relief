import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Byline } from '@/components/trust/Byline';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// 2026-09-23 upgrade: the page now owns the general "solar carport" intent
// (residential and commercial readers both land here), not only the
// residential permit question. Every figure below was re-fetched on
// 2026-09-23 from the primary source it cites.

const title = 'Solar Carports in California: Cost, Permits and Design';
const h1 = 'Solar Carports in California: Cost Drivers, Permits and Design';
const description =
  'A California solar carport costs more than the same panels on a roof. What drives the price, which permit path applies, and the fire and access rules.';
const path = '/blog/solar-carport-california-guide';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const DATE_PUBLISHED = '2026-04-24';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const tts2024Report =
  'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf';
const tts2024Summary =
  'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf';
const nrel2023 = 'https://www.nrel.gov/docs/fy23osti/87303.pdf';
const cecSb379 = 'https://www.energy.ca.gov/residential-solar-permitting-program-dashboard';
const solarAppFaq = 'https://solarapp.nrel.gov/faq';
const bscCodes = 'https://www.dgs.ca.gov/BSC/Codes';
const dsaIr168 =
  'https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_16-8_2022-CBC.pdf';
const dsaIr11b9 =
  'https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_11B-9.pdf';
const sonomaFire =
  'https://permitsonoma.org/divisions/firepreventionandhazmat/servicesandfees/permitsandinspections/photovoltaicsystems';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc25d = usc('25D');
const irc48e = usc('48E');
const irc30c = usc('30C');
const pgeBev = 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_BEV.pdf';

const faqs = [
  {
    question: 'How much does a solar carport cost in California?',
    answer:
      'No government lab or state agency publishes a carport-specific price, so any single figure you see online is an estimate, not a benchmark. The closest primary data is LBNL Tracking the Sun: in 2023, large California systems at tax-exempt sites had a median price of $4.1 per watt versus $2.3 for commercial and $2.0 for agricultural sites, and LBNL lists shade and parking structures as one possible reason for the gap. Price your own carport from itemized bids.',
  },
  {
    question: 'Is a solar carport more expensive than rooftop solar?',
    answer:
      'Usually, because you are paying for a steel structure, foundations and site work that a roof already provides. The solar equipment itself can be similar. Ask each bidder to price the canopy separately from the panels and electrical work so you can compare the solar portion against a roof quote.',
  },
  {
    question: 'Do I need a permit for a residential solar carport?',
    answer:
      "Yes. Plan on your city or county's standard building-permit review, not the instant rooftop path. The online permitting platforms that SB 379 requires cover residential solar systems, and SolarAPP+ lists ground mount and non-residential systems among the project types it does not currently support. A freestanding canopy is reviewed as a structure under the California Residential Code.",
  },
  {
    question: 'How high does a solar carport over parking have to be?',
    answer:
      "For school and state projects under the Division of the State Architect, DSA's IR 16-8 treats a high-profile PV installation over parking as having at least 6 feet 8 inches of clearance where there is a use underneath, at least 8 feet 2 inches over accessible parking spaces and at least 13 feet 6 inches over a fire lane. Private projects are reviewed by the local building and fire departments, so confirm the clearances they apply.",
  },
  {
    question: 'Is there a tax credit for a solar carport at my house?',
    answer:
      'Not for a homeowner who buys the system in 2026. The federal residential clean energy credit in 26 U.S.C. §25D does not apply to expenditures made after December 31, 2025. If a third party owns the system under a lease or PPA, ask who claims any business credit and confirm the details with a tax professional.',
  },
  {
    question: 'Can a business claim the federal credit on a solar carport?',
    answer:
      'The business credit is 26 U.S.C. §48E. Its definition of qualified property excludes "a building or its structural components," and a solar facility that began construction after July 4, 2026 gets no credit for property placed in service after December 31, 2027. Whether the canopy structure itself counts toward the credit basis is a question for a tax professional, not a sales proposal.',
  },
  {
    question: 'Who installs solar carports for businesses in California?',
    answer:
      'Commercial carports are built by contractors licensed for solar or electrical work, usually with a structural engineer for the canopy and foundations and sometimes a general building contractor for the site work. Ask each bidder which licensed entity signs the contract and who designs the structure, then check the license yourself.',
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
    publishedTime: `${DATE_PUBLISHED}T00:00:00Z`,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    url: canonicalUrl,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(title, description),
};

export default function SolarCarportCAGuide() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar carports in California"
      breadcrumbParent={{ label: 'Commercial Solar', href: '/commercial-solar' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={canonicalUrl}
        datePublished={DATE_PUBLISHED}
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
              <span className="text-foreground">Solar carports in California</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Carports and canopies · California
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                A solar carport is a freestanding canopy over parking whose roof is the solar
                array. In California it usually costs more than the same panels on a roof,
                because you are also buying a steel structure, foundations and site work. It
                normally goes through a standard building permit rather than the instant rooftop
                path, and no public agency publishes a carport price, so itemized bids are the
                number to trust.
              </p>
              <p>
                This guide covers both home carports and parking-lot canopies. If you run a
                business, a school, a church or a public agency, the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar overview
                </Link>{' '}
                explains how those projects are bid and financed, and the{' '}
                <Link href="/commercial-solar/commercial-solar-carport-cost" className={link}>
                  commercial carport cost breakdown
                </Link>{' '}
                works through canopy pricing for parking lots. Sources were checked {CHECKED}.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Carport, ground mount or roof: which structure fits
              </h2>
              <p>
                A carport and a ground-mounted array both put panels somewhere other than the
                roof, but they are different products. A carport is a roofed structure over
                parking. The panels form or sit on its roof, and the structure is useful as
                covered parking whether or not the solar pays off. A ground mount is a rack
                anchored in open ground, with nothing underneath it.
              </p>
              <p>
                Off-roof mounting is common on businesses and rare on houses. Lawrence Berkeley
                National Laboratory&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener external" className={link}>
                  2026 distributed solar data update
                </a>{' '}
                (August 2026) reports ground-mounting on 30&ndash;60% of large non-residential
                systems each year from 2010 to 2025 and 10&ndash;40% of small non-residential
                systems, but describes it as &ldquo;rarely used&rdquo; for residential systems.
                LBNL&apos;s mounting data does not split carports from other ground-supported
                structures.
              </p>
              <p>
                Settle the roof first. If the roof is shaded, too small or close to replacement,
                read{' '}
                <Link href="/blog/is-my-roof-good-for-solar-california" className={link}>
                  whether your roof is a good candidate for solar
                </Link>
                . A carport becomes a real option when the roof is not, or when covered parking
                is worth paying for on its own.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What does a solar carport cost?
              </h2>
              <p>
                No federal lab or California agency publishes a carport-specific price. NREL&apos;s{' '}
                <a href={nrel2023} target="_blank" rel="noopener external" className={link}>
                  Q1 2023 cost benchmark
                </a>{' '}
                models a residential rooftop system, a ground-mounted community solar system and
                a utility-scale system, and no carport. LBNL&apos;s Tracking the Sun reports prices
                by customer segment and system size, not by mounting type.
              </p>
              <p>
                The closest primary evidence is indirect. In the{' '}
                <a href={tts2024Summary} target="_blank" rel="noopener external" className={link}>
                  Tracking the Sun 2024 summary
                </a>
                , large California systems (over 100 kW) at tax-exempt sites had a 2023 median
                price of $4.1 per watt, against $2.3 per watt at commercial sites and $2.0 per
                watt at agricultural sites. The{' '}
                <a href={tts2024Report} target="_blank" rel="noopener external" className={link}>
                  full report
                </a>{' '}
                lists the &ldquo;prevalence of shade or parking structures&rdquo; as one possible
                reason, alongside domestic-content or prevailing-wage requirements and lower
                borrowing costs. That is a signal that canopies add cost, not a carport price.
              </p>
              <p>What moves a carport quote, in rough order of how much it can change:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>The structure.</strong> Span, number of bays, single or double
                  cantilever design, steel weight and the wind and seismic loads the engineer has
                  to design for.
                </li>
                <li>
                  <strong>Foundations and soil.</strong> Drilled piers or footings sized to the
                  site&apos;s soil, which may need a geotechnical report.
                </li>
                <li>
                  <strong>Site work.</strong> Cutting and patching paving, drainage, trenching,
                  and any restriping of the lot.
                </li>
                <li>
                  <strong>The electrical run.</strong> The distance from the canopy to the service
                  panel or switchgear, and whether the service needs an upgrade.
                </li>
                <li>
                  <strong>Add-ons.</strong> Under-canopy lighting, EV charging and batteries.
                  Keep each one as a separate line.
                </li>
              </ul>
              <p>
                Ask for at least two quotes that break those lines out, and compute a per-watt
                figure for the solar equipment alone so you can hold it against a roof proposal.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Residential solar carports: permits and design
              </h2>
              <p>
                California&apos;s SB 379 requires non-exempt cities and counties to run an online
                permitting platform that checks code compliance and issues permits in real time
                for a residential solar system and a paired residential battery, according to
                the California Energy Commission&apos;s{' '}
                <a href={cecSb379} target="_blank" rel="noopener external" className={link}>
                  SB 379 dashboard
                </a>{' '}
                (last updated August 3, 2026). The most common platform,{' '}
                <a href={solarAppFaq} target="_blank" rel="noopener external" className={link}>
                  SolarAPP+
                </a>
                , supports residential roof-mounted systems and lists ground mount, new
                construction and non-residential projects among the types it does not currently
                support.
              </p>
              <p>
                A home carport is a new accessory structure, so expect the standard review your
                city or county uses for patio covers and detached structures, under the{' '}
                <a href={bscCodes} target="_blank" rel="noopener external" className={link}>
                  California Residential Code (Title 24, Part 2.5)
                </a>
                , whose 2025 edition took effect January 1, 2026. That review is where setback,
                lot-coverage and height limits come in. Fees and timelines vary by jurisdiction,
                so ask your building department before you finalize a design.
              </p>
              <p>
                If you live in an HOA,{' '}
                <Link href="/blog/hoa-solar-rights-california" className={link}>
                  check what the HOA can and cannot restrict
                </Link>
                . A freestanding structure&apos;s footprint and appearance can still go through
                architectural review separately from the solar question.
              </p>
              <p>A home carport changes the comparison with a roof system in four ways:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>You are buying a structure.</strong> The canopy is a permanent
                  improvement with its own foundation, drainage and warranty questions.
                </li>
                <li>
                  <strong>Orientation is a design choice.</strong> Ask the designer to state the
                  canopy&apos;s orientation and tilt and the production assumption behind them.
                </li>
                <li>
                  <strong>Roof age stops being the gating question.</strong> That helps when the
                  roof is near the end of its life, but confirm it first, because it changes
                  which project you should be pricing.
                </li>
                <li>
                  <strong>EV charging needs its own scope.</strong> See{' '}
                  <Link href="/blog/solar-panels-for-ev-charging-california" className={link}>
                    solar panels for EV charging in California
                  </Link>{' '}
                  before adding a charger to the canopy quote.
                </li>
              </ul>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Parking-lot canopies: clearance, access and fire rules
              </h2>
              <p>
                Commercial and public carports carry rules a home carport rarely meets. The
                clearest published statement of them is from the Division of the State
                Architect, which reviews school and state projects. Its{' '}
                <a href={dsaIr168} target="_blank" rel="noopener external" className={link}>
                  IR 16-8
                </a>{' '}
                (revised January 18, 2024) has solar carports designed to ASCE 7, using its
                open-building wind provisions and its Chapter 12 seismic rules. For an
                open-sided, high-profile array
                over parking, it applies at least 6 feet 8 inches of clearance where there is a
                use underneath, 8 feet 2 inches over accessible parking spaces and 13 feet 6
                inches over a designated fire lane. It also sets a 5-foot minimum distance to
                property lines for non-combustible construction.
              </p>
              <p>
                On accessibility, IR 16-8 says new canopies and carports that carry solar panels
                need access compliance review, and{' '}
                <a href={dsaIr11b9} target="_blank" rel="noopener external" className={link}>
                  IR 11B-9
                </a>{' '}
                (revised June 26, 2026) explains how. Parking under an elevated array must meet
                California Building Code Section 11B-307, and canopy foundations must not
                interfere with the accessibility of the space. Work that alters the area under the
                array can trigger path-of-travel upgrades under Section 11B-202.4. The value of the solar system cannot be subtracted from the
                construction cost used for that calculation.
              </p>
              <p>
                DSA&apos;s interpretations govern DSA projects. For a private lot, the local
                building and fire departments apply the same state codes, so ask them how they
                read these points. On fire access, Permit Sonoma&apos;s{' '}
                <a href={sonomaFire} target="_blank" rel="noopener external" className={link}>
                  fire-prevention guidance for PV
                </a>{' '}
                states that detached, non-habitable structures such as parking shade structures
                and carports are not subject to the rooftop access-pathway rules that apply to
                arrays on buildings. Confirm the current code section and any local amendment
                with your own fire authority.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Tax credits and rate plans for a solar carport
              </h2>
              <p>
                <strong>Homeowners.</strong> The federal residential clean energy credit,{' '}
                <a href={irc25d} target="_blank" rel="noopener external" className={link}>
                  26 U.S.C. §25D
                </a>
                , &ldquo;shall not apply with respect to any expenditures made after December 31,
                2025.&rdquo; A homeowner buying a carport system in 2026 cannot count on that
                credit.
              </p>
              <p>
                <strong>Businesses and nonprofits.</strong> The credit for a commercial system is{' '}
                <a href={irc48e} target="_blank" rel="noopener external" className={link}>
                  26 U.S.C. §48E
                </a>
                . Two parts of the statute matter for a canopy. Its definition of qualified
                property excludes &ldquo;a building or its structural components,&rdquo; so ask a
                tax professional which parts of a carport count toward the credit basis. And for
                a solar facility whose construction began after July 4, 2026, the credit does not
                apply to property placed in service after December 31, 2027. The{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial cost and tax guide
                </Link>{' '}
                covers the rest of the credit rules.
              </p>
              <p>
                <strong>EV charging.</strong> The federal charger credit in{' '}
                <a href={irc30c} target="_blank" rel="noopener external" className={link}>
                  26 U.S.C. §30C
                </a>{' '}
                does not apply to property placed in service after June 30, 2026. For
                businesses, PG&amp;E&apos;s{' '}
                <a href={pgeBev} target="_blank" rel="noopener external" className={link}>
                  Schedule BEV
                </a>{' '}
                is an optional rate for EV charging metered separately from the rest of the
                site. It replaces the traditional demand charge with a monthly kW subscription:
                10 kW blocks at $12.41 each on BEV-1, for usage up to about 100 kW, in rates
                effective March 1, 2026.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Ask for a scope that separates the moving parts
              </h2>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Solar carport scope checklist</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Scope</th>
                      <th className="p-3">What to get in writing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Canopy and site work</th><td className="p-3 align-top">Frame, foundations, drainage or paving work, clearance height and who is responsible for each item.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Solar equipment</th><td className="p-3 align-top">System size in DC watts, module and inverter models, production assumptions and equipment ownership.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Electrical work</th><td className="p-3 align-top">Service-panel or switchgear work, the wiring route, EV charging or battery equipment, and items priced separately.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Local review</th><td className="p-3 align-top">Who prepares plans and structural calculations, submits applications, answers plan-check comments and carries excluded work.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Contract terms</th><td className="p-3 align-top">Cash price, any lease or PPA terms, escalator, service responsibility, transfer terms and removal or repair responsibilities.</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Common comparison mistakes
              </h2>
              <p>
                Do not compare a carport&apos;s all-in price against a roof system&apos;s
                solar-only price. Do not assume a lease or PPA payment covers the same scope as a
                cash proposal. Do not assume a permit, accessibility or fire answer from one
                property applies to another. Put each answer in the written proposal, and check
                the contractor&apos;s license with the steps in{' '}
                <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className={link}>
                  how to verify a California solar contractor
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Questions to ask a provider
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>What work is included in the canopy price, and what can change it after signing?</li>
                <li>Who designs the structure and foundations, and who signs the structural calculations?</li>
                <li>What clearance height is proposed, and does it work for vans, accessible spaces and any fire lane?</li>
                <li>What does the proposal assume about the utility bill after installation?</li>
                <li>Who owns, maintains and insures the canopy and the equipment under this payment option?</li>
              </ol>

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
                This page does not quote a carport price or confirm a permit, tax or code result
                for any property.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener external" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026)</li>
                <li>LBNL, <a href={tts2024Summary} target="_blank" rel="noopener external" className={link}>Tracking the Sun 2024 executive summary</a> (August 2024) and <a href={tts2024Report} target="_blank" rel="noopener external" className={link}>full report</a> (October 2024)</li>
                <li>NREL, <a href={nrel2023} target="_blank" rel="noopener external" className={link}>U.S. Solar PV System and Energy Storage Cost Benchmarks, Q1 2023</a> (NREL/TP-7A40-87303)</li>
                <li>California Energy Commission, <a href={cecSb379} target="_blank" rel="noopener external" className={link}>SB 379 residential solar permitting dashboard</a> (updated August 3, 2026)</li>
                <li>SolarAPP+, <a href={solarAppFaq} target="_blank" rel="noopener external" className={link}>frequently asked questions</a></li>
                <li>California Building Standards Commission, <a href={bscCodes} target="_blank" rel="noopener external" className={link}>2025 California Building Standards Code (Title 24)</a></li>
                <li>Division of the State Architect, <a href={dsaIr168} target="_blank" rel="noopener external" className={link}>IR 16-8</a> (revised January 18, 2024) and <a href={dsaIr11b9} target="_blank" rel="noopener external" className={link}>IR 11B-9</a> (revised June 26, 2026)</li>
                <li>Permit Sonoma, <a href={sonomaFire} target="_blank" rel="noopener external" className={link}>fire prevention: photovoltaic systems</a></li>
                <li>26 U.S.C. <a href={irc25d} target="_blank" rel="noopener external" className={link}>§25D</a>, <a href={irc48e} target="_blank" rel="noopener external" className={link}>§48E</a> and <a href={irc30c} target="_blank" rel="noopener external" className={link}>§30C</a>, Office of the Law Revision Counsel (text in effect September 22, 2026)</li>
                <li>PG&amp;E, <a href={pgeBev} target="_blank" rel="noopener external" className={link}>Electric Schedule BEV, Business Electric Vehicles</a> (rates effective March 1, 2026)</li>
              </ul>
            </div>

            {/* The closing ask (2026-09-23): the inline commercial form. This path is
                commercial intent in src/lib/intake-routing.ts, so its header button,
                sticky bar and mid-page button all scroll here. */}
            <CommercialReviewForm legacyAnchor className="mt-12" />
            <HubSpokeLinks hub="commercial" currentPath={path} />
            <RelatedGuides
              heading="Before choosing a carport over the roof"
              links={[
                { href: '/blog/is-my-roof-good-for-solar-california', label: 'Whether the roof is a candidate first' },
                { href: '/blog/how-big-of-a-solar-system-do-i-need-california', label: 'How much capacity the household needs' },
                { href: '/solar-panels-california', label: 'What a home rooftop system costs in California' },
                { href: '/solar-problems/hidden-costs-of-solar-california', label: 'Costs that sit outside the structure price' },
              ]}
            />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className="container mx-auto max-w-3xl px-4"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
