import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Byline } from '@/components/trust/Byline';
import { TocRail, RAIL_GRID } from '@/components/trust/TocRail';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import {
  COMPLIANCE_SENTENCE,
  COST_RULES_PATH,
  COST_RULES_TITLE,
  GOV_66015_SOURCE,
  USC_25D_SOURCE,
  formatVerified,
} from '@/lib/city-cost-content';
import {
  CPUC_GUIDE_DGSTATS_NOTE,
  DG_MIN_COST_N,
  DG_SOURCE,
  DG_UTILITY_NAME,
  formatDollars,
  formatPerWatt,
  stateDg,
  systemPrice,
  utilityDg,
  type DgUtilityCode,
} from '@/data/dgstats';
import {
  COST_INDEX_PATH,
  computeCostIndexFindings,
  getCostIndexRows,
  listJoin,
} from '@/data/solar-cost-index';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// =============================================================================
// /solar-cost/california-tax-and-permit-rules — the one page for the rules
// every California city shares.
//
// Before 2026-09-24 each of the 93 /solar-cost/<city> pages carried the same
// long statute text (§25D, §48E, §73, §7169, §66015, §65850.52), which made
// the pages 88% alike. That text now lives here once; the city pages link to
// it. Every statute was read on leginfo or uscode on 2026-09-24, the CPUC
// guide, CSLB and BOE pages the same day. The statewide DG Stats figures are
// read from the data file, and the fee counts from the cost index, never typed.
// =============================================================================

const CHECKED = '2026-09-24';
const path = COST_RULES_PATH;
const title = COST_RULES_TITLE;
const description =
  'No federal credit for a system finished after 2025, a property-tax exclusion ending January 1, 2027, the $450 permit fee limit and the contract cover page.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url: `https://ratereliefca.com${path}`, images: [CRR_SOCIAL_CARD] },
};

const SOURCES = {
  usc25d: USC_25D_SOURCE,
  usc48e: {
    label: '26 U.S.C. §48E, clean electricity investment credit: §48E(i), leasing arrangements',
    url: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29',
    verifiedAt: CHECKED,
  },
  rtc73: {
    label: 'California Revenue and Taxation Code §73, active solar energy system exclusion (amended by SB 710, Stats. 2025, Ch. 328)',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73',
    verifiedAt: CHECKED,
  },
  boe: {
    label: 'California State Board of Equalization, Active Solar Energy System Exclusion',
    url: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/',
    verifiedAt: CHECKED,
  },
  lta: {
    label: 'BOE Letter to Assessors No. 2024/031, section 73 sunset and construction in progress',
    url: 'https://www.boe.ca.gov/proptaxes/pdf/lta24031.pdf',
    verifiedAt: CHECKED,
  },
  bpc7169: {
    label: 'California Business and Professions Code §7169, solar energy system disclosure document (amended by SB 826, Stats. 2021, Ch. 188)',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169',
    verifiedAt: CHECKED,
  },
  cslbSolar: {
    label: 'CSLB, Solar Energy System Disclosure (Solar Requirements)',
    url: 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx',
    verifiedAt: CHECKED,
  },
  cslbLicense: {
    label: 'CSLB, Check a Contractor License or Home Improvement Salesperson Registration',
    url: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx',
    verifiedAt: CHECKED,
  },
  gov66015: GOV_66015_SOURCE,
  gov6585052: {
    label: 'California Government Code §65850.52, online automated solar permitting (amended by AB 1754, Stats. 2023, Ch. 131)',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52',
    verifiedAt: CHECKED,
  },
  cpucGuide: {
    label: 'CPUC, California Solar Consumer Protection Guide',
    url: CPUC_GUIDE_DGSTATS_NOTE.url,
    verifiedAt: CHECKED,
  },
  dg: { label: DG_SOURCE.label, url: DG_SOURCE.url, verifiedAt: DG_SOURCE.verifiedAt },
} as const;

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

function Src({ s, children }: { s: { url: string }; children: ReactNode }) {
  return (
    <a href={s.url} target='_blank' rel='noopener noreferrer' className={link}>
      {children}
    </a>
  );
}

const FAQS = [
  {
    question: 'Is there still a federal tax credit for home solar in 2026?',
    answer:
      'No, not for a system you own whose installation is completed after December 31, 2025. 26 U.S.C. §25D(h) says the residential clean energy credit does not apply to expenditures made after that date, and §25D(e)(8)(A) counts an expenditure as made when installation is completed. Checked September 24, 2026. This is not tax advice.',
  },
  {
    question: 'Does solar raise my property taxes in California?',
    answer:
      "Not while Revenue and Taxation Code §73 applies. It keeps a qualifying active solar system out of \"new construction\", so it does not add to your assessment. The section is in effect only until January 1, 2027; a system that qualifies before then stays excluded until the property changes ownership. The Board of Equalization says a system completed before January 1, 2027 may qualify. Checked September 24, 2026.",
  },
  {
    question: 'How much can a California city charge for a solar permit?',
    answer:
      'For a home photovoltaic system, Government Code §66015 limits the total of a city\'s permit charges to $450 plus $15 per kW above 15 kW, unless the city adopts a written finding, in a resolution or ordinance, with substantial evidence that its reasonable cost is higher. The section runs until January 1, 2034. Checked September 24, 2026.',
  },
  {
    question: 'Can I go solar without paying upfront?',
    answer:
      "Often, but that is a payment structure, not a lower cost. The CPUC's Solar Consumer Protection Guide lists little or no upfront cost for leases, PPAs, PACE and loan purchases. Lease and PPA payments typically rise 1 to 3 percent a year under an escalator, and the guide warns that solar energy is rarely free. Checked September 24, 2026.",
  },
];

export default function CaliforniaSolarTaxAndPermitRules() {
  const state = stateDg();
  const statePrice = systemPrice(state.medianSizeKwDc2025 as number, state.costPerWatt.median as number);
  const utilities = (['PGE', 'SCE', 'SDGE'] as DgUtilityCode[]).map((code) => ({ code, area: utilityDg(code) })).filter((u) => u.area);
  const findings = computeCostIndexFindings(getCostIndexRows());
  const sourceList = Object.values(SOURCES);

  return (
    <PublicLayout
      breadcrumbLabel='Tax and permit rules'
      breadcrumbParent={{ label: 'Solar cost by city', href: '/solar-cost' }}
    >
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline={title}
        url={`https://ratereliefca.com${path}`}
        dateModified={CHECKED}
        description={description}
      />
      <FaqJsonLd items={FAQS} />
      <Header />
      <main className='pb-16 pt-8 md:pt-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className={`mx-auto max-w-6xl ${RAIL_GRID}`}>
            <article className='min-w-0 max-w-3xl'>
              <nav aria-label='Breadcrumb' className='mb-4 md:mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
                <Link href='/' className='hover:text-primary'>Home</Link><span aria-hidden='true'>/</span>
                <Link href='/solar-cost' className='hover:text-primary'>Solar cost by city</Link><span aria-hidden='true'>/</span>
                <span className='text-foreground' aria-current='page'>Tax and permit rules</span>
              </nav>
              <header className='mb-6'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight'>
                  {title}
                </h1>
                <Byline updated={CHECKED} dateLabel='Updated' sourceCount={sourceList.length} sourcesHref='#sources' />
              </header>

              <div id='rules-body' className='prose prose-slate max-w-none [&_h2]:scroll-mt-24'>
                <p className='text-lg text-foreground/85 leading-relaxed'>
                  Four rules apply to a California home solar purchase in 2026, whatever the city. The
                  federal credit does not cover a system completed after December 31, 2025. New solar
                  stays out of your property-tax assessment if it qualifies before January 1, 2027. Your
                  city&apos;s permit fee is capped at $450 up to 15 kW. And the contract must open with a
                  page showing the total cost.
                </p>
                <p className='text-foreground/60 text-sm'>{COMPLIANCE_SENTENCE} This page explains the rules; it is not tax or legal advice.</p>

                <h2 id='federal-credit' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  The federal credit ended for systems finished after 2025
                </h2>
                <p>
                  Section 25D(h) of the Internal Revenue Code says the residential clean energy credit
                  &ldquo;shall not apply with respect to any expenditures made after December 31,
                  2025.&rdquo; Section 25D(e)(8)(A) treats an expenditure as made &ldquo;when the original
                  installation of the item is completed.&rdquo;
                </p>
                <p>
                  So a system you buy gets no federal credit if installation is completed in 2026, even
                  if you signed in 2025. Public Law 119-21 (July 4, 2025) moved the end date from
                  December 31, 2034 to December 31, 2025. Ask a tax professional about your own return.
                </p>
                <p className='text-foreground/60 text-sm'>
                  Source: <Src s={SOURCES.usc25d}>26 U.S.C. §25D</Src>, U.S. House Office of the Law Revision
                  Counsel, checked {formatVerified(CHECKED)}.
                </p>

                <h2 id='lease-ppa' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  Leases and PPAs: the company&apos;s credit, not yours
                </h2>
                <p>
                  Under a lease or a power purchase agreement the solar company owns the equipment. Any
                  credit it claims is a business credit under section 48E. That is the company&apos;s tax
                  position; it is not a credit you claim and it does not by itself lower what you pay.
                </p>
                <p>
                  Section 48E(i) denies the credit for leased property described in section 25D(d)(1)
                  or (d)(4), which are solar water heating and small wind. Residential solar electric
                  property is section 25D(d)(2), which that denial does not name.
                </p>
                <p>
                  The CPUC&apos;s guide says lease and PPA payments typically rise 1 to 3 percent a year
                  under an escalator and advises caution about a higher one. Compare the total of all payments
                  with the total cost of buying. Further reading:{' '}
                  <Link href='/blog/is-it-better-to-buy-or-lease-solar-panels-california' className={link}>buying versus leasing</Link>,{' '}
                  <Link href='/solar-problems/solar-escalator-clause-explained' className={link}>escalator clauses</Link> and{' '}
                  <Link href='/solar-problems/solar-dealer-fees-explained' className={link}>dealer fees</Link>.
                </p>
                <p className='text-foreground/60 text-sm'>
                  Sources: <Src s={SOURCES.usc48e}>26 U.S.C. §48E</Src>;{' '}
                  <Src s={SOURCES.cpucGuide}>CPUC, California Solar Consumer Protection Guide</Src>. Checked{' '}
                  {formatVerified(CHECKED)}.
                </p>

                <h2 id='property-tax' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  Property tax: the solar exclusion ends January 1, 2027
                </h2>
                <p>
                  Revenue and Taxation Code section 73(a) says &ldquo;newly constructed&rdquo; does not
                  include adding an active solar energy system. So a qualifying system does not add to
                  your assessment. The Board of Equalization calls it an exclusion, not an exemption: it
                  neither raises nor lowers the assessment of what is already there.
                </p>
                <p>
                  Section 73(i)(1) keeps the section in effect only until January 1, 2027, and (i)(2)
                  keeps a system that qualifies before then excluded until the property changes
                  ownership. The Board&apos;s Letter to Assessors 2024/031 says a system completed on any
                  day before January 1, 2027 may qualify.
                </p>
                <p>
                  The same letter says construction added during 2026 is not excluded unless it is
                  completed before January 1, 2027. If your installation might finish around that date,
                  ask your county assessor, not the contractor.
                </p>
                <p className='text-foreground/60 text-sm'>
                  Sources: <Src s={SOURCES.rtc73}>Rev. &amp; Tax. Code §73</Src>;{' '}
                  <Src s={SOURCES.boe}>BOE, Active Solar Energy System Exclusion</Src>;{' '}
                  <Src s={SOURCES.lta}>BOE LTA 2024/031</Src>. Checked {formatVerified(CHECKED)}.
                </p>

                <h2 id='contract' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  The contract must open with the total cost
                </h2>
                <p>
                  Business and Professions Code section 7169(b) requires a &ldquo;solar energy system
                  disclosure document&rdquo; on the front or cover page of every solar contract, in
                  boldface 16-point type. It must show the total cost and payments for the system,
                  including financing costs, how to complain, and your right to cancel under section 7159.
                </p>
                <p>
                  The pages after it may include the salesperson&apos;s calculations of how many panels
                  you need and how much energy they will make, and the company&apos;s contractor license
                  number. Ask for them if they are missing, and look up the license and the
                  salesperson on the{' '}
                  <Src s={SOURCES.cslbLicense}>CSLB license check</Src>.
                </p>
                <p className='text-foreground/60 text-sm'>
                  Sources: <Src s={SOURCES.bpc7169}>Bus. &amp; Prof. Code §7169</Src>;{' '}
                  <Src s={SOURCES.cslbSolar}>CSLB, Solar Energy System Disclosure</Src>;{' '}
                  <Src s={SOURCES.cslbLicense}>CSLB, Check a License</Src>. Checked {formatVerified(CHECKED)}.
                </p>

                <h2 id='permit-fees' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  Permit fees: $450 up to 15 kW
                </h2>
                <p>
                  Government Code section 66015(a) says a city&apos;s residential permit fee for solar
                  may not exceed the reasonable cost of the service. For a photovoltaic system it may not
                  exceed $450 plus $15 for each kW above 15 kW. The fee means the sum of all the charges
                  for an application on a single- or two-family home.
                </p>
                <p>
                  A city may charge more only if, in a written finding and an adopted resolution or
                  ordinance, it gives substantial evidence of its reasonable cost. The section is in
                  effect until January 1, 2034.
                </p>
                {findings.published && (
                  <p>
                    Of the {findings.total} cities in the{' '}
                    <Link href={COST_INDEX_PATH} className={link}>California Solar Cost Index</Link>,{' '}
                    {findings.published.count} publish a fee for a standard home system;{' '}
                    {findings.atOrBelowStateLimit} are at or under $450 and {findings.aboveStateLimit.length} are
                    above it
                    {findings.aboveStateLimit.length
                      ? ` (${listJoin(findings.aboveStateLimit.map((c) => `${c.city}, ${c.amountDisplay}`))})`
                      : ''}
                    . Each city&apos;s own page states its fee and path.
                  </p>
                )}
                <p className='text-foreground/60 text-sm'>
                  Source: <Src s={SOURCES.gov66015}>Gov. Code §66015</Src>, checked {formatVerified(CHECKED)}.
                </p>

                <h2 id='online-permits' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  Online permits: SolarAPP+ and similar platforms
                </h2>
                <p>
                  Government Code section 65850.52 requires an online, automated permitting platform
                  that issues permits in real time for a home system up to 38.4 kW AC and a battery
                  paired with it. Cities over 50,000 people had until September 30, 2023; smaller cities
                  until September 30, 2024.
                </p>
                <p>
                  Cities under 5,000 people, and counties under 150,000 with the cities inside them, are
                  exempt. A design the platform cannot process can still go through ordinary plan review.
                </p>
                <p className='text-foreground/60 text-sm'>
                  Source: <Src s={SOURCES.gov6585052}>Gov. Code §65850.52</Src>, checked {formatVerified(CHECKED)}.
                </p>

                <h2 id='drivers' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  What moves the price on one house
                </h2>
                <ul className='list-disc pl-6 space-y-3'>
                  <li>
                    <strong>Size versus your bill.</strong> Size follows twelve months of billed kWh, not
                    square footage. A larger array is more modules, racking and labor.
                  </li>
                  <li>
                    <strong>The roof.</strong> Material, pitch, number of planes and remaining life change
                    the labor and the attachments. A roof near the end of its life raises a sequencing
                    question: see{' '}
                    <Link href='/blog/is-my-roof-good-for-solar-california' className={link}>whether your roof suits solar</Link>.
                  </li>
                  <li>
                    <strong>Shade.</strong> Trees, chimneys and neighboring buildings change the layout and
                    the equipment list, and the production the system is sold on.
                  </li>
                  <li>
                    <strong>Main panel.</strong> If the main service panel cannot take the new circuit,
                    the job adds a panel upgrade or a derate, with its own permit.
                  </li>
                  <li>
                    <strong>A battery.</strong> It is a separate system with its own equipment and
                    interconnection. Price it as its own line.
                  </li>
                </ul>

                <h2 id='method' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  Where the city cost figures come from
                </h2>
                <p>
                  Every city cost page uses the California Distributed Generation Statistics
                  Interconnected Project Sites data set, published under CPUC authorization, with data
                  through May 31, 2026. It covers systems connected by PG&amp;E, SCE and SDG&amp;E only;
                  municipal utilities such as LADWP and SMUD are not in it.
                </p>
                <p>
                  The cost per watt is the reported total system cost divided by system size, for
                  homeowner-owned, solar-only systems of 1 to 25 kW approved from January 2025 to May
                  2026. Leases, PPAs and systems with a battery are left out, and values outside $1.50
                  to $12 per watt are dropped.
                </p>
                <p>
                  A city page shows the city&apos;s figure when at least {DG_MIN_COST_N} owners reported a
                  cost there, and otherwise the county, the utility territory or the statewide figure,
                  always named. The typical system price is that median times the median size of
                  systems connected in 2025, rounded to $100.
                </p>
                <p>
                  The CPUC&apos;s consumer guide points shoppers to this data for recent installation
                  costs and notes they are not verified by the government. A &ldquo;city&rdquo; is the
                  service city written on the application, which can include nearby unincorporated
                  addresses.
                </p>
                <div className='not-prose my-6 overflow-x-auto rounded-xl border border-border' role='region' aria-label='Reported cost by utility' tabIndex={0}>
                  <table className='w-full text-sm'>
                    <caption className='px-4 py-3 text-left text-sm text-muted-foreground'>
                      Reported cost per watt by utility territory, January 2025 to May 2026 (CPUC DG Stats)
                    </caption>
                    <thead className='bg-muted/50'>
                      <tr>
                        <th scope='col' className='px-3 py-2 text-left font-semibold'>Territory</th>
                        <th scope='col' className='px-3 py-2 text-left font-semibold'>Median</th>
                        <th scope='col' className='px-3 py-2 text-left font-semibold'>Middle half</th>
                        <th scope='col' className='px-3 py-2 text-left font-semibold'>Reports</th>
                        <th scope='col' className='px-3 py-2 text-left font-semibold'>Median size, 2025</th>
                      </tr>
                    </thead>
                    <tbody>
                      {utilities.map(({ code, area }) => (
                        <tr key={code} className='border-t border-border'>
                          <th scope='row' className='px-3 py-2 text-left font-normal'>{DG_UTILITY_NAME[code]}</th>
                          <td className='px-3 py-2'>{formatPerWatt(area!.costPerWatt.median as number)}/W</td>
                          <td className='px-3 py-2 whitespace-nowrap'>
                            {formatPerWatt(area!.costPerWatt.p25 as number)} to {formatPerWatt(area!.costPerWatt.p75 as number)}
                          </td>
                          <td className='px-3 py-2'>{area!.costPerWatt.n.toLocaleString('en-US')}</td>
                          <td className='px-3 py-2'>{area!.medianSizeKwDc2025} kW</td>
                        </tr>
                      ))}
                      <tr className='border-t border-border font-semibold'>
                        <th scope='row' className='px-3 py-2 text-left'>All three</th>
                        <td className='px-3 py-2'>{formatPerWatt(state.costPerWatt.median as number)}/W</td>
                        <td className='px-3 py-2 whitespace-nowrap'>
                          {formatPerWatt(state.costPerWatt.p25 as number)} to {formatPerWatt(state.costPerWatt.p75 as number)}
                        </td>
                        <td className='px-3 py-2'>{state.costPerWatt.n.toLocaleString('en-US')}</td>
                        <td className='px-3 py-2'>{state.medianSizeKwDc2025} kW</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Across all three territories, a {state.medianSizeKwDc2025} kW system at the median comes
                  to about {formatDollars(statePrice)}. Your own quote depends on your roof, panel and
                  contract. <Link href='/solar-cost' className={link}>Find your city&apos;s figure</Link>.
                </p>
                <p className='text-foreground/60 text-sm'>
                  Sources: <Src s={SOURCES.dg}>{DG_SOURCE.label}</Src>, checked {formatVerified(DG_SOURCE.verifiedAt)};{' '}
                  <Src s={SOURCES.cpucGuide}>CPUC, California Solar Consumer Protection Guide</Src>, checked{' '}
                  {formatVerified(CHECKED)}.
                </p>

                <h2 id='faq' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  Frequently asked questions
                </h2>
                <div className='space-y-6'>
                  {FAQS.map((faq) => (
                    <div key={faq.question}>
                      <h3 className='text-lg font-semibold text-foreground mb-2'>{faq.question}</h3>
                      <p className='text-foreground/80 m-0'>{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <h2 id='sources' className='text-2xl font-bold text-foreground mt-10 mb-4'>
                  Sources
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-sm [overflow-wrap:anywhere]'>
                  {sourceList.map((s) => (
                    <li key={s.url}>
                      <Src s={s}>{s.label}</Src> &mdash; checked {formatVerified(s.verifiedAt)}
                    </li>
                  ))}
                </ul>
              </div>

              <SolarInquiry variant='bill' topic='California solar tax and permit rules' />
            </article>
            <TocRail rootId='rules-body' />
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
