// 2026-09-23 new page (claude/ta-installers-20260923), CREATE_DEDICATED for
// "solar resources". Impressions for the query were landing on
// /solar-cost/san-diego. The page is a sourced directory of the free, official
// tools a California homeowner can use, each described from its own page as
// fetched on 2026-09-23. It covers both senses of the phrase: sunlight data
// (NREL) and the agencies, rules and data behind a solar decision.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/solar-resources';
const UPDATED = '2026-09-23';
const metaTitle = 'California Solar Resources: Official Tools and Data (2026)';
const metaDescription =
  'Free, official solar resources for California homeowners: sunlight and production data, license checks, net billing rules, incentives and market data.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

type Resource = { name: string; url: string; publisher: string; what: string; when: string };

const SUNLIGHT: Resource[] = [
  {
    name: 'PVWatts calculator',
    url: 'https://pvwatts.nrel.gov/',
    publisher: 'National Renewable Energy Laboratory',
    what: 'Estimates the energy production of grid-connected photovoltaic systems for a location, for homeowners, building owners and installers.',
    when: 'Use it to sanity-check the yearly and monthly production in a proposal. NREL notes that version 8 estimates may differ from earlier versions depending on location and inputs.',
  },
  {
    name: 'National Solar Radiation Database (NSRDB)',
    url: 'https://nsrdb.nrel.gov/',
    publisher: 'National Renewable Energy Laboratory',
    what: 'Hourly and half-hourly weather data with the three standard measures of sunlight: global horizontal, direct normal and diffuse horizontal irradiance.',
    when: 'This is the “solar resource” in the technical sense: how much sun a place receives. Most homeowners reach it through PVWatts rather than directly.',
  },
];

const COMPANIES: Resource[] = [
  {
    name: 'Check a License',
    url: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx',
    publisher: 'Contractors State License Board',
    what: 'Searches contractor licenses by number, business name or personnel name, and salesperson registrations by number or name.',
    when: 'Before a second meeting with any installer, and again on the day you sign. The database is offline Sunday 8 p.m. to Monday 6 a.m.',
  },
  {
    name: 'Public Data Portal: licensees by classification and county',
    url: 'https://www.cslb.ca.gov/onlineservices/dataportal/ListByCounty',
    publisher: 'Contractors State License Board',
    what: 'A free spreadsheet of currently renewed licenses for up to 10 classifications and 10 counties, with status, bond and workers’ compensation details.',
    when: 'When you want every licensed C-46 Solar or C-10 Electrical contractor in your county rather than the few names a map search shows.',
  },
  {
    name: 'Solar energy system disclosure requirements',
    url: 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx',
    publisher: 'Contractors State License Board',
    what: 'The rules for the disclosure document that must sit on the front page of a residential solar contract, with the documents for 3-day and 5-day cancellation periods.',
    when: 'While reading a contract, to confirm the total cost, complaint process and cancellation rights are all there.',
  },
  {
    name: 'California Solar Consumer Protection Guide',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
    publisher: 'California Public Utilities Commission',
    what: 'The state’s plain-language guide to buying, leasing and financing solar. Version 4 was published in 2025.',
    when: 'Before you request quotes. It advises bids from at least three qualified providers and explains your right to cancel.',
  },
];

const BILLS: Resource[] = [
  {
    name: 'Net energy metering and the Net Billing Tariff',
    url: 'https://www.cpuc.ca.gov/NEM/',
    publisher: 'California Public Utilities Commission',
    what: 'How PG&E, SCE and SDG&E customers are credited for exported solar, including the Net Billing Tariff that applies to interconnection applications since April 15, 2023.',
    when: 'When a proposal models your future bill. The export credit it assumes should match the tariff you will be on.',
  },
  {
    name: 'California Distributed Generation Statistics',
    url: 'https://www.californiadgstats.ca.gov/',
    publisher: 'CPUC-overseen data site',
    what: 'Every solar system interconnected under net metering in PG&E, SCE and SDG&E territory, updated monthly with about a six-week delay.',
    when: 'To see how much solar is being connected in your area. It does not cover municipal utilities such as LADWP or SMUD.',
  },
];

const MONEY: Resource[] = [
  {
    name: 'Residential Clean Energy Credit',
    url: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
    publisher: 'Internal Revenue Service',
    what: 'The federal 30% credit for home solar and batteries of 3 kWh or more, available for property installed from 2022 through December 31, 2025.',
    when: 'Only if your system was completed by the end of 2025. It is not available for property placed in service after that date.',
  },
  {
    name: 'Active solar energy system exclusion',
    url: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/',
    publisher: 'Board of Equalization',
    what: 'The rule that keeps a qualifying solar installation from raising your property assessment. It is an exclusion, not an exemption.',
    when: 'If you are worried about property taxes. The statute is scheduled to sunset on January 1, 2027.',
  },
  {
    name: 'Low-income solar programs',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/low-income-solar-programs',
    publisher: 'California Public Utilities Commission',
    what: 'DAC-SASH no-cost rooftop systems for income-qualified homeowners in disadvantaged communities, SGIP storage incentives and bill-discount programs.',
    when: 'Before paying market price, if your household income may qualify.',
  },
  {
    name: 'IRA residential energy rebate programs',
    url: 'https://www.energy.ca.gov/programs-and-topics/programs/inflation-reduction-act-residential-energy-rebate-programs',
    publisher: 'California Energy Commission',
    what: 'The HEEHRA and HOMES rebates for heat pumps and electrification. Solar panels are not on the list.',
    when: 'If you are pairing solar with a heat pump. Single-family HEEHRA rebates were fully reserved statewide as of February 24, 2026.',
  },
  {
    name: 'PACE financing',
    url: 'https://dfpi.ca.gov/consumers/housing/pace/',
    publisher: 'Department of Financial Protection and Innovation',
    what: 'How PACE loans work: payments are added to your annual property tax bill, and DFPI has licensed PACE program administrators since 2019.',
    when: 'Before agreeing to any financing that goes on your property tax bill; DFPI warns PACE contracts are difficult to void.',
  },
];

const DATA: Resource[] = [
  {
    name: 'Tracking the Sun',
    url: 'https://emp.lbl.gov/tracking-the-sun',
    publisher: 'Lawrence Berkeley National Laboratory',
    what: 'Installed-price and design trends for distributed solar across the United States, with a public data file.',
    when: 'For a price benchmark. Its 2024 edition put most host-owned residential systems installed in 2023 between $3.20 and $5.50 per watt.',
  },
  {
    name: 'California electricity data',
    url: 'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2024-total-system-electric-generation',
    publisher: 'California Energy Commission',
    what: 'Statewide generation by source. Solar was 21.30% of total system power in 2024, before counting rooftop systems.',
    when: 'For context on where California’s power comes from and how much rooftop solar displaces.',
  },
  {
    name: '2025 Energy Code: single-family solar PV',
    url: 'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-12',
    publisher: 'California Energy Commission',
    what: 'The solar requirement for newly built single-family homes, including how system size is calculated and the exceptions.',
    when: 'If you are building or buying a new home permitted on or after January 1, 2026.',
  },
];

const sources: Source[] = [...SUNLIGHT, ...COMPANIES, ...BILLS, ...MONEY, ...DATA].map((r) => ({
  label: `${r.publisher}: ${r.name}`,
  url: r.url,
}));

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What does “solar resource” mean?',
    answer:
      'In technical use it means how much sunlight reaches a location. NREL’s National Solar Radiation Database measures it as global horizontal, direct normal and diffuse horizontal irradiance, in hourly and half-hourly values. PVWatts turns that data into an estimate of what a solar system at your address would produce.',
  },
  {
    question: 'Where can I check if a California solar company is licensed?',
    answer:
      'At the Contractors State License Board’s Check a License tool, which searches by license number, business name, personnel name or salesperson registration. For a full list of licensed solar contractors in your county, use the CSLB Public Data Portal’s list by classification and county.',
  },
  {
    question: 'Is there a free government solar calculator?',
    answer:
      'Yes. NREL’s PVWatts estimates the energy production of a grid-connected solar system anywhere in the United States. It estimates production only, so pair it with your own bill and your utility’s export rules to judge savings.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

function ResourceList({ items }: { items: Resource[] }) {
  return (
    <dl className="mb-4 divide-y divide-border rounded-xl border">
      {items.map((r) => (
        <div key={r.url} className="p-4">
          <dt className="font-semibold text-foreground">
            <a href={r.url} className={link} target="_blank" rel="noopener noreferrer">
              {r.name}
            </a>
            <span className="ml-2 text-sm font-normal text-muted-foreground">{r.publisher}</span>
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground/80">{r.what}</dd>
          <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
            <span className="font-medium text-foreground">When to use it: </span>
            {r.when}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function SolarResourcesPage() {
  return (
    <PublicLayout
      breadcrumbLabel="California solar resources"
      breadcrumbParent={{ label: 'California solar companies', href: '/best-solar-companies-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="California solar resources: the official tools, data and rules worth bookmarking"
        url={`https://ratereliefca.com${PATH}`}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/best-solar-companies-california" className="hover:text-primary">California solar companies</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Solar resources</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Tools and data</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          California solar resources: the official tools, data and rules worth bookmarking
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          The most useful solar resources for a California homeowner are free and official: NREL&rsquo;s
          sunlight data and production calculator, the state contractor board&rsquo;s license check,
          the CPUC&rsquo;s consumer guide and net billing rules, and the Energy Commission&rsquo;s
          electricity data. Each one below is described from its own page, with the question it
          answers and when in the process to use it.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <div>
          <h2 className={h2}>Sunlight and production: the solar resource itself</h2>
          <p className={p}>
            Engineers use &ldquo;solar resource&rdquo; to mean how much sunlight a place gets. That is
            the starting point for every production estimate in a quote. You do not need the raw data,
            but it helps to know where an installer&rsquo;s numbers come from and how to check them.
          </p>
          <ResourceList items={SUNLIGHT} />
          <p className={p}>
            A proposal should show production month by month, not just a yearly total, because the
            winter months produce less and the bill math depends on when power is made. The{' '}
            <Link href="/solar-problems/solar-production-winter-california" className={link}>
              guide to winter solar production in California
            </Link>{' '}
            explains why a December bill looks different.
          </p>

          <h2 className={h2}>Checking a solar company before you sign</h2>
          <p className={p}>
            Each of these takes a few minutes and costs nothing. Use them on every company you are
            considering, including any this site refers you to.
          </p>
          <ResourceList items={COMPANIES} />
          <p className={p}>
            How to use them together is covered in{' '}
            <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className={link}>
              the contractor verification walkthrough
            </Link>{' '}
            and the{' '}
            <Link href="/best-solar-companies-california" className={link}>
              statewide guide to choosing a solar company
            </Link>
            .
          </p>

          <h2 className={h2}>Your bill and the export credit</h2>
          <p className={p}>
            The value of solar depends on how your utility bills you after it is installed. For
            customers of the three big investor-owned utilities, the CPUC sets those rules.
            Municipal utilities such as LADWP, SMUD and Roseville Electric publish their own.
          </p>
          <ResourceList items={BILLS} />
          <p className={p}>
            For what the rules mean in practice, see{' '}
            <Link href="/blog/nem-2-vs-nem-3-california" className={link}>
              NEM 2.0 versus net billing
            </Link>{' '}
            and the{' '}
            <Link href="/california-utility-rate-tracker" className={link}>
              California utility rate tracker
            </Link>
            .
          </p>

          <h2 className={h2}>Tax credits, rebates and financing rules</h2>
          <p className={p}>
            Incentives change more often than anything else on this page, so go to the agency&rsquo;s
            own page before you count on one. As of September 23, 2026, the federal residential credit
            no longer applies to new installs, and the most useful state-level items are the property
            tax exclusion and the income-qualified programs.
          </p>
          <ResourceList items={MONEY} />
          <p className={p}>
            The{' '}
            <Link href="/blog/california-solar-tax-credit-2026" className={link}>
              overview of California solar incentives
            </Link>{' '}
            ties these together, and{' '}
            <Link href="/blog/inflation-reduction-act-solar-california" className={link}>
              the Inflation Reduction Act page
            </Link>{' '}
            explains what happened to the federal credit.
          </p>

          <h2 className={h2}>Market data and building rules</h2>
          <p className={p}>
            These are for context: what systems have cost, how much of the state&rsquo;s power is solar,
            and what the building code now requires on new homes.
          </p>
          <ResourceList items={DATA} />
          <p className={p}>
            A plain-language reading of the generation data is in{' '}
            <Link href="/blog/what-percentage-of-california-power-is-solar" className={link}>
              what share of California&rsquo;s power is solar
            </Link>
            .
          </p>

          <h2 className={h2}>Which resource to use at each step</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-5 text-foreground/80">
            <li>
              <strong>Deciding whether to look at solar at all:</strong> your last twelve months of
              bills, the CPUC&rsquo;s net billing page and the consumer protection guide.
            </li>
            <li>
              <strong>Choosing who to ask for quotes:</strong> the CSLB contractor list for your county,
              then the license check on each name.
            </li>
            <li>
              <strong>Comparing quotes:</strong> PVWatts for the production estimate, the Tracking the
              Sun price range for context, and the same line items from every bidder.
            </li>
            <li>
              <strong>Paying for it:</strong> the IRS, BOE and CPUC pages for what incentives still
              apply, and DFPI&rsquo;s PACE page before any property-tax financing.
            </li>
            <li>
              <strong>Signing:</strong> the CSLB disclosure requirements, read against the front page of
              the contract you are handed, and a second license check on the day.
            </li>
          </ol>

          <h2 className={h2}>Tools on this site</h2>
          <p className={p}>
            This site is a referral service, so treat its tools as a second opinion next to the
            official resources above. The{' '}
            <Link href="/tools/solar-panel-calculator" className={link}>
              bill and quote calculator
            </Link>{' '}
            works out a quote&rsquo;s price per watt and checks its bill estimate against your own
            bill. The{' '}
            <Link href="/california-solar-cost-index" className={link}>
              California solar cost index
            </Link>{' '}
            and the{' '}
            <Link href="/solar-cost" className={link}>
              city cost guides
            </Link>{' '}
            cover what goes into a price, including the{' '}
            <Link href="/solar-cost/san-diego" className={link}>
              San Diego solar cost guide
            </Link>{' '}
            for SDG&amp;E customers. The{' '}
            <Link href="/solar-panels-california" className={link}>
              statewide solar panel guide
            </Link>{' '}
            pulls the cost, rules and incentives into one place.
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: California solar resources" />
        <HubSpokeLinks hub="installers" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="California solar resources" />
        </div>
        <AuthorBio
          domain="crr"
          palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }}
        />
      </main>
      <Footer />
    </PublicLayout>
  );
}
