// 2026-09-23 Tier 2 upgrade (claude/t2-installers-20260923) for the "solar
// quote" cluster. The April version gave a checklist with no sources, product
// examples nobody had checked, and bankruptcy dates quoted without a record;
// this rewrite keeps its structure and its referral disclosure, and sources
// every rule to the CPUC or CSLB as fetched on 2026-09-23. Choosing a company
// lives on /best-solar-companies-california; what solar costs lives on
// /solar-panels-california. This page is the step between them: getting bids
// and putting them on the same basis.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { QuoteChecklist, SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/solar-system-quotes-california';
const PUBLISHED = '2026-04-23';
const UPDATED = '2026-09-23';
const metaTitle = 'Solar Quotes in California: How to Get and Compare Bids';
const metaDescription =
  'Where to get solar quotes in California, the two state forms every solar contract must carry, and how to compare three bids on the same basis.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const CPUC_DGSTATS = 'https://www.californiadgstats.ca.gov/find_installer/';
const CSLB_CONTRACTS = 'https://www.cslb.ca.gov/Resources/IndustryBulletins/2020/20-22_solar_contracts.pdf';
const CSLB_SOLAR_REQ = 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx';
const CSLB_BROKER = 'https://www.cslb.ca.gov/Media_Room/Industry_Bulletins/2020/January_9.aspx';
const CSLB_CHECK = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const NREL_PVWATTS = 'https://pvwatts.nrel.gov/';

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (version 4, 2025)', url: CPUC_GUIDE },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
  { label: 'CPUC California DG Statistics: Find an Installer (recent project costs by ZIP code, city or county)', url: CPUC_DGSTATS },
  { label: 'CSLB industry bulletin #20-22: solar contract requirements (November 17, 2020)', url: CSLB_CONTRACTS },
  { label: 'CSLB: solar energy system disclosure document requirements (B&P Code §7169)', url: CSLB_SOLAR_REQ },
  { label: 'CSLB industry bulletin: restrictions on lead generation and solar broker services (2020)', url: CSLB_BROKER },
  { label: 'CSLB: Check a License (license and salesperson search)', url: CSLB_CHECK },
  { label: 'NREL: PVWatts calculator (production estimates for grid-connected PV)', url: NREL_PVWATTS },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'How many solar quotes should I get in California?',
    answer:
      'At least three. The CPUC’s Solar Consumer Protection Guide tells homeowners to get bids from at least three qualified solar providers, compare them and ask questions. Two quotes rarely show whether a price is high or low; a third gives you a middle.',
  },
  {
    question: 'Can a solar broker or lead generator give me a quote?',
    answer:
      'No. The CSLB says solar lead generators and solar brokers may refer you to licensed contractors and set up appointments, but they cannot provide quotes or offers for the sale and installation of a solar system. The quote and the contract have to come from the licensed contractor.',
  },
  {
    question: 'What is the standardized bill savings estimate?',
    answer:
      'It is part of the Solar Energy System Supporting Information form that accompanies the state’s disclosure cover page. It estimates your bill savings on a standard basis and lists the inputs and assumptions behind it. The CPUC caps the utility rate increase a provider may assume at 10% a year, and suggests asking why any other savings estimate you were shown differs from it.',
  },
  {
    question: 'Is the cheapest solar quote the best one?',
    answer:
      'Not necessarily. The CPUC guide warns that the cheapest bid is not necessarily the best option and that a very low bid may indicate a provider trying to cut corners. Compare what each price buys: system size, equipment, production estimate, warranties and who installs and services the system.',
  },
  {
    question: 'How do I compare solar quotes for different system sizes?',
    answer:
      'Divide each cash price by the system size in watts to get a price per watt, and divide each first-year production estimate by the system size in kilowatts to see which design expects more output per kilowatt. Then check each size against your last 12 months of use; the CPUC notes systems are typically sized to around 80 to 85 percent of the previous year’s use.',
  },
  {
    question: 'Can I cancel a solar contract after I sign?',
    answer:
      'Yes, within a short window. The CPUC guide says you have at least three business days to cancel for any reason, or five business days if you are 65 or older, counted from when you receive a signed, dated copy of the contract. Different rules may apply to contracts negotiated at the company’s place of business.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const h3 = 'text-lg font-semibold text-foreground mt-6 mb-2';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs(PATH);
const CRUMB_LABEL = 'Solar quotes';

export default function SolarSystemQuotes() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="How to get solar quotes in California and compare them fairly"
        url={`https://ratereliefca.com${PATH}`}
        datePublished={PUBLISHED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 md:pt-12">
        <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} />
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Getting quotes</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          How to get solar quotes in California and compare them fairly
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          To get a useful solar quote in California, ask at least three licensed installers to bid
          on your home using your last 12 months of electricity use. Each contract must carry a
          state disclosure cover page and a supporting form with a standardized bill savings
          estimate. Compare cash price per watt, expected production and those savings estimates
          side by side.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
        <div className="my-8">
          <HeroQuickCheck topic="Solar quote comparison in California" />
        </div>

        <KeyFacts
          facts={[
            { label: 'Bids to collect', value: 'At least 3', note: 'From qualified solar providers, compared side by side.', source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE } },
            { label: 'Rate increase a savings estimate may assume', value: '10% a year', note: 'The CPUC’s cap on the escalation assumption.', source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE } },
            { label: 'Largest legal down payment', value: '$1,000 or 10%', note: 'Whichever is less, on a home improvement contract.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_CONTRACTS } },
            { label: 'Time to cancel after signing', value: '3 business days', note: 'Five business days if you are 65 or older.', source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>Before you ask for a quote: what to have ready</h2>
          <p className={p}>
            A quote is only as good as the numbers it starts from. Gather these before the first
            call, and give every bidder the same set:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
            <li>
              <strong>Twelve months of electricity use</strong>, month by month, from your bill or
              your utility account, plus the name of your rate plan.
            </li>
            <li>
              <strong>Which billing rules apply to you.</strong> PG&amp;E, SCE and SDG&amp;E
              customers applying to connect since April 15, 2023 take service on the Net Billing
              Tariff, which credits exported power at values that are &ldquo;usually lower than
              the retail rate&rdquo; (CPUC, checked September 24, 2026). City-run utilities such as
              LADWP and SMUD write their own rules. A quote modeled on the wrong tariff is wrong
              from the first line.
            </li>
            <li>
              <strong>Your roof&rsquo;s age.</strong> The CPUC guide says to replace a roof you plan
              to replace soon before the panels go on.
            </li>
            <li>
              <strong>What you want priced.</strong> Solar alone, solar with a battery, or both.
              The guide also suggests asking for quotes on differently sized systems to see how
              size changes your finances.
            </li>
          </ul>

          <h2 className={h2}>Where to get solar quotes</h2>
          <p className={p}>
            Start with a list of licensed companies that actually work near you. The CPUC guide
            points to two public tools. The CSLB&rsquo;s contractor search finds licensed
            contractors by city in the C-46 Solar, C-10 Electrical or B General Building
            classification. The CPUC&rsquo;s{' '}
            <a href={CPUC_DGSTATS} className={link} target="_blank" rel="noopener noreferrer">
              DGStats Find an Installer
            </a>{' '}
            search lists solar projects interconnected near a ZIP code in the last 24 months. Our{' '}
            <Link href="/best-solar-companies-california#near-me" className={link}>
              guide to finding solar installers near you
            </Link>{' '}
            walks through both. Then there are three practical ways to ask:
          </p>
          <p className={p}>
            <strong>1. Direct installer request.</strong> Call or email the installer you&apos;re
            interested in and ask for a quote. Downside: one quote at a time, and you&apos;ll get
            repeat sales contact.
          </p>
          <p className={p}>
            <strong>2. Marketplace platforms.</strong> Online solar marketplaces connect you with
            multiple installers at once. Useful, but your information goes to several installers,
            so expect calls from more than one.
          </p>
          <p className={p}>
            <strong>3. Referral services.</strong> A referral service such as California Rate
            Relief passes your request to a solar provider, which decides whether it can serve your
            address and what it can offer. California Rate Relief is compensated by a solar
            provider when a homeowner we refer signs an agreement. A referral does not guarantee a
            set number of quotes or a particular provider, and the providers you hear from depend
            on the service&apos;s arrangements; see{' '}
            <Link href="/how-we-make-money" className={link}>
              how we make money
            </Link>
            .
          </p>
          <p className={p}>
            Whichever route you take, the price has to come from the licensed contractor. The CSLB
            says solar lead generators and brokers &ldquo;cannot provide quotes or offers for the
            sale and installation of solar photovoltaic systems&rdquo; (CSLB, checked September 23,
            2026). More on that line in{' '}
            <Link href="/blog/solar-broker" className={link}>
              what a solar broker can and cannot do
            </Link>
            .
          </p>

          <h2 className={h2}>Why three quotes is the target</h2>
          <p className={p}>
            The CPUC&apos;s guide says it plainly: get bids from at least three qualified solar
            providers, compare them and ask questions. Two quotes rarely show you whether a price
            is high or low; a third gives you a middle. The guide adds a warning worth taping to
            the fridge: the cheapest bid is not necessarily the best option, and &ldquo;a very low
            bid may indicate that a solar provider is trying to cut corners&rdquo; (CPUC, checked
            September 23, 2026).
          </p>

          <h2 className={h2}>What a complete solar quote includes</h2>
          <p className={p}>Ask every bidder for the same items, in writing:</p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
            <li><strong>System size</strong> in kilowatts, and the panel count.</li>
            <li><strong>Panel and inverter makes and model numbers</strong>, so you can look up the spec sheets and warranties yourself.</li>
            <li><strong>Battery details</strong>, if one is quoted: usable capacity, which circuits it backs up and its warranty.</li>
            <li><strong>Production estimate</strong> by month for the first year, with shading and roof orientation accounted for.</li>
            <li><strong>Cash price</strong>, with solar, battery, roof work and electrical upgrades listed separately.</li>
            <li><strong>Financing terms</strong>, if offered, quoted apart from the cash price: rate, term, escalator and total of payments.</li>
            <li><strong>Warranties</strong> for panels, inverters, workmanship and roof penetrations, each with who honors it.</li>
            <li><strong>Who installs and who services</strong> the system, with license numbers for both.</li>
            <li><strong>A schedule</strong>: when work would start and roughly when it would finish.</li>
          </ul>
          <p className={p}>
            A quote that shows only a monthly payment, without the math under it, is incomplete.
            Ask for the missing pieces before you compare.
          </p>

          <h2 className={h2}>The two state forms that come with every solar contract</h2>
          <p className={p}>
            California standardizes part of the comparison for you. Business and Professions Code
            section 7169 requires a solar energy system disclosure document on the front or cover
            page of every solar contract, printed in boldface 16-point type. It must show the total
            cost and payments for the system including financing costs, how and to whom you can
            complain, and your cancellation rights, and it must be in the language used in the
            sales presentation (CSLB, checked September 23, 2026).
          </p>
          <p className={p}>
            A second document, the Solar Energy System Supporting Information form, summarizes your
            financial obligations and gives a standardized bill savings estimate along with the
            inputs and assumptions behind it (CPUC, checked September 23, 2026). The CPUC caps the
            utility rate increase that estimate may assume at 10% a year. Because every provider
            fills out the same form, it is the one savings number you can compare across bids. The
            CPUC suggests asking a simple question: is this standardized estimate significantly
            different from other savings estimates you gave me, and if so, why?
          </p>
          <p className={p}>
            The law requires the documents before a sale is completed. There is nothing stopping
            you from asking for draft versions with the quote, so you can compare them before you
            are anywhere near a signature.
          </p>

          <h2 className={h2}>How to compare solar quotes side by side</h2>
          <h3 className={h3}>1. Put the price on a per-watt basis</h3>
          <p className={p}>
            Divide each cash price by the system size in watts. A 7-kilowatt system is 7,000 watts.
            Price per watt lets you compare a larger system with a smaller one, and it is how the{' '}
            <Link href="/solar-panels-california" className={link}>
              statewide solar cost guide
            </Link>{' '}
            states its benchmark.
          </p>
          <h3 className={h3}>2. Check the production estimates against each other</h3>
          <p className={p}>
            Divide each first-year production estimate by the system size in kilowatts. If one
            bidder expects far more output per kilowatt from the same roof, ask why, and run your
            address through NREL&rsquo;s{' '}
            <a href={NREL_PVWATTS} className={link} target="_blank" rel="noopener noreferrer">
              PVWatts calculator
            </a>{' '}
            as a neutral check.
          </p>
          <h3 className={h3}>3. Check the size against your use</h3>
          <p className={p}>
            The CPUC notes that a system sized to cover all of your use &ldquo;isn&rsquo;t
            necessarily the best investment&rdquo; and that systems are typically sized to around
            80&ndash;85% of the previous year&rsquo;s use. On the Net Billing Tariff, a system
            that produces more than your last 12 months of use needs a signed attestation that
            you expect your use to grow, and it can go no higher than 150% of that history (CPUC,
            checked September 23, 2026). If a bid is well above your history, ask what it
            assumes, such as a future electric car.
          </p>
          <h3 className={h3}>4. Compare the savings on the same form</h3>
          <p className={p}>
            Line up the standardized bill savings estimates, not the sales projections. Then look
            at what is left on your bill under each design: under net billing, power you use at
            home saves more than power you export, so a design that exports most of its output
            will save less than its production suggests. The{' '}
            <Link href="/blog/nem-2-vs-nem-3-california" className={link}>
              net billing explainer
            </Link>{' '}
            shows why.
          </p>
          <h3 className={h3}>5. Compare financing last</h3>
          <p className={p}>
            A loan quote can bundle a dealer fee into the amount you borrow, so the financed price
            and the cash price for the same system are rarely the same number. Get both in writing.
            Our explainer on{' '}
            <Link href="/solar-problems/solar-dealer-fees-explained" className={link}>
              solar dealer fees
            </Link>{' '}
            shows how to find the gap, and the{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>
              cash, loan, lease and PPA comparison
            </Link>{' '}
            covers the rest.
          </p>
        </div>

        <div className="mt-10">
          <QuoteChecklist />
        </div>

        <div>
          <h2 className={h2}>Is my solar quote fair? Three ways to check</h2>
          <ul className="mb-4 list-disc space-y-3 pl-5 text-foreground/80">
            <li>
              <strong>Against your other quotes.</strong> Three bids on the same basis are the best
              benchmark you will get, which is why the CPUC asks for three.
            </li>
            <li>
              <strong>Against recent jobs near you.</strong> The DGStats search shows the cost per
              watt of recent projects near your ZIP code. The figures are self-reported and
              unverified, cover only PG&amp;E, SCE and SDG&amp;E territory, and are figured on AC
              capacity, so they run on a different basis from a quote priced per panel watt
              (CPUC DGStats, checked September 23, 2026). Read them as a range, not a price you are
              owed.
            </li>
            <li>
              <strong>Against the state picture.</strong> The{' '}
              <Link href="/solar-panels-california#cost" className={link}>
                California solar cost guide
              </Link>{' '}
              gives the statewide installed-price band and what moves a price within it, and the{' '}
              <Link href="/solar-cost" className={link}>
                city cost guides
              </Link>{' '}
              add each city&rsquo;s utility and permit details.
            </li>
          </ul>

          <h2 className={h2}>Red flags in a solar quote</h2>
          <ul className="mb-4 list-disc space-y-3 pl-5 text-foreground/80">
            <li>
              <strong>No cash price.</strong> A financed-only quote hides what the equipment costs.
              Ask for both numbers.
            </li>
            <li>
              <strong>&ldquo;Sign today&rdquo; pressure.</strong> A legitimate price holds long
              enough for you to compare it.
            </li>
            <li>
              <strong>Production with no shade analysis.</strong> A real estimate is modeled for
              your roof and its surroundings.
            </li>
            <li>
              <strong>Savings that lean on steep rate increases.</strong> Ask what rate increase is
              assumed; the standardized estimate may not assume more than 10% a year.
            </li>
            <li>
              <strong>A down payment above the legal limit.</strong> A contractor cannot ask for
              more than $1,000 or 10% of the contract price, whichever is less, or take payments
              that exceed the value of work done or materials delivered (CSLB bulletin #20-22).
            </li>
            <li>
              <strong>A price quoted by someone who is not the contractor.</strong> Brokers and lead
              generators may refer you but may not quote.
            </li>
            <li>
              <strong>A company whose future is in doubt.</strong> Warranties are only as good as
              whoever stands behind them. Check the name against{' '}
              <Link href="/solar-installers/worst-solar-companies-california" className={link}>
                the solar bankruptcy and license record
              </Link>{' '}
              and read{' '}
              <Link href="/solar-installers/solar-installer-bankruptcy-california" className={link}>
                what survives if an installer goes bankrupt
              </Link>
              .
            </li>
            <li>
              <strong>A license that does not match.</strong> Look up the company and the
              salesperson with the CSLB&rsquo;s{' '}
              <a href={CSLB_CHECK} className={link} target="_blank" rel="noopener noreferrer">
                Check a License
              </a>{' '}
              tool before a second meeting.
            </li>
          </ul>

          <h2 className={h2}>After you choose: the cancellation window</h2>
          <p className={p}>
            Signing is not the last chance to back out. The CPUC guide says you have at least three
            business days to cancel for any reason, five if you are 65 or older, counted from when
            you receive a signed, dated copy of the contract; different rules may apply to a
            contract negotiated at the company&rsquo;s own place of business (CPUC, checked
            September 23, 2026). The steps are in{' '}
            <Link href="/blog/can-you-cancel-solar-panel-contract-before-installation-california" className={link}>
              cancelling a solar contract before installation
            </Link>
            , and the{' '}
            <Link href="/blog/solar-installation-timeline-california" className={link}>
              installation timeline
            </Link>{' '}
            shows what happens between signing and switch-on.
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: solar quotes in California" />
        <HubSpokeLinks hub="installers" currentPath={PATH} />

        {/* The closing ask is the inquiry form itself (2026-09-23); the link-only
            box it replaced sent this form-less page to the home page. */}
        <div className="mt-10">
          <SolarInquiry topic="Solar quote comparison in California" variant="review" />
        </div>
        <AuthorBio
          domain="crr"
          palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }}
        />
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className="container mx-auto max-w-3xl px-4"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
