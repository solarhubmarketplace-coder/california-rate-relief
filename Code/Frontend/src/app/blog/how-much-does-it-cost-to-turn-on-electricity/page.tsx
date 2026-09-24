import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, QuickAnswer, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';

// Tier 3 (2026-09-23). What it costs a California household to start
// electric service: start fees, deposits, the fixed charge that begins on day
// one, reconnection, and why a new connection is a different question. Every
// fee is from the utility's tariff or fee page or the CPUC decision.

const path = '/blog/how-much-does-it-cost-to-turn-on-electricity';
const url = `https://ratereliefca.com${path}`;
const title = 'How Much Does It Cost to Turn On Electricity in California?';
const h1 = 'How Much Does It Cost to Turn On Electricity in California? Fees, Deposits and the First Bill';
const description =
  'Starting electric service in California: no home deposit at PG&E, SCE or SDG&E, a $19 LADWP turn-on fee, SMUD deposit rules and first-bill charges.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'cpucD2006003',
  'pgeRule3',
  'pgeRule7',
  'pgeRule11',
  'sceDeposit',
  'ladwpBillingFaq',
  'ladwpServiceRules',
  'smudFees',
  'pgeResRatesCurrent',
  'sceBsc',
  'sdgeTouDr1Aug2026',
  'smudResRates',
  'ladwpResRates',
  'pgeCca',
  'pgeTariffIndex',
  'ladwpConstructionCharges',
);

const faqs = [
  {
    question: 'Does PG&E charge a deposit to turn on electricity?',
    answer:
      'No, not for a home. PG&E’s Electric Rule 7 says that under CPUC Decision 20-06-003 it is prohibited from requiring residential customers to pay deposits to establish credit for new service. PG&E’s application rule, Electric Rule 3, lists the information it asks for but no start-up fee.',
  },
  {
    question: 'Does SCE charge a deposit to start service?',
    answer:
      'SCE says it is currently not billing deposits for residential customers. Its deposit rules apply to business accounts, which can be asked for twice the average or highest monthly bill.',
  },
  {
    question: 'What is the $19 charge on a first LADWP bill?',
    answer:
      'It is LADWP’s Turn On Service Charge for electric and/or water service. LADWP applies it each time you turn on or transfer service, shows it on the opening bill, and does not refund it.',
  },
  {
    question: 'Does SMUD require a deposit?',
    answer:
      'Not if you have good credit. SMUD’s fee schedule, effective June 1, 2026, requires no deposit for new service with good credit standing. With a record of bankruptcy or late payments, the deposit is the greatest of $200, twice the highest estimated monthly bill, or twice the highest actual bill.',
  },
  {
    question: 'Is there a fee to reconnect electricity in California?',
    answer:
      'Not at PG&E, SCE or SDG&E for a home: the CPUC’s 2020 decision on disconnections precludes those utilities from charging reconnection fees. SMUD charges $25 for a reconnection during business hours and $134 for a truck reconnect.',
  },
  {
    question: 'How much is the first electric bill in California?',
    answer:
      'Usage plus a fixed charge that starts with service. At PG&E, SCE and SDG&E the Base Services Charge is about 79 cents a day for most homes, around $24 for a 30-day bill; SMUD’s fixed charge is $27 a month. Add your kWh at your plan’s prices, plus LADWP’s $19 turn-on fee if you are in Los Angeles.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function CostToTurnOnElectricityPage() {
  return (
    <PublicLayout breadcrumbLabel="Cost to turn on electricity" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Cost to turn on electricity" kicker="California · Electric bills" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Turning on electricity at a California home usually costs little or nothing up front. The CPUC stopped PG&amp;E,
                SCE and SDG&amp;E from requiring residential deposits in 2020, and PG&amp;E&apos;s service rules list no start-up
                fee. LADWP charges a one-time $19 turn-on fee, and SMUD asks for a deposit only if your credit is poor. The
                real cost is the first bill.
              </p>
              <p>
                That bill starts with a fixed daily charge from the day service begins, whatever you use. Below are the start
                fees, deposit rules and fixed charges for California&apos;s five largest utilities, each taken from the
                utility&apos;s tariff or fee page or the CPUC decision and checked on September 23, 2026.
              </p>

              <QuickAnswer>
                <p>
                  <strong>PG&amp;E, SCE, SDG&amp;E:</strong> no residential deposit and no reconnection fee under CPUC Decision
                  20-06-003. <strong>LADWP:</strong> $19 Turn On Service Charge on the opening bill. <strong>SMUD:</strong> no
                  deposit with good credit, otherwise at least $200. Everyone pays the monthly fixed charge from day one.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="Starting service in California"
                  facts={[
                    { label: 'Residential deposit, PG&E/SCE/SDG&E', value: 'None', note: 'CPUC D.20-06-003 (June 2020)', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucD2006003.url } },
                    { label: 'LADWP turn-on fee', value: '$19.00', note: 'One-time, non-refundable', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpBillingFaq.url } },
                    { label: 'SMUD deposit, poor credit', value: '$200 minimum', note: 'None with good credit', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudFees.url } },
                    { label: 'Fixed charge from day one', value: '≈$24/month', note: 'PG&E, SCE, SDG&E standard tier', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                  ]}
                />
              </div>

              <h2>Start fees and deposits by utility</h2>
              <DataTable
                caption="What California's five largest utilities charge to start residential electric service"
                columns={['Utility', 'Start fee', 'Deposit', 'Fixed charge once service starts']}
                rows={[
                  ['PG&E', 'None in its application rule (Electric Rule 3)', 'Not allowed for residential customers (Electric Rule 7)', 'Base Services Charge $0.79343/day; $0.39688 FERA, $0.19713 CARE'],
                  ['SCE', 'None listed on its start-service pages', 'SCE says it is not billing residential deposits', 'Base Services Charge about $0.80/day ($24.15/month); $12.08 FERA, $6.00 CARE'],
                  ['SDG&E', 'None listed on its start-service page', 'Not allowed for residential customers (CPUC D.20-06-003)', 'Base Services Charge $0.79343/day; $0.39688 FERA'],
                  ['LADWP', '$19.00 Turn On Service Charge, electric and/or water', 'Only if credit is not established; generally no more than the estimated bill for two billing periods', 'R-1A Power Access Charge $2.30–$22.70/month; R-1B $12.00/month'],
                  ['SMUD', 'None listed in its fee schedule', 'None with good credit; with poor credit, the greatest of $200 or twice the highest estimated or actual monthly bill', 'System Infrastructure Fixed Charge $27.00/month ($17 on the Low Use rate)'],
                ]}
                note={
                  <>
                    Sources: PG&amp;E Electric Rules 3 and 7; SCE deposit help page and Base Services Charge page; SDG&amp;E Schedule
                    TOU-DR1 rates effective August 1, 2026; CPUC Decision 20-06-003; LADWP billing questions page, service rules and
                    residential rates; SMUD fees and deposits (effective June 1, 2026) and residential rates. All checked September
                    23, 2026.
                  </>
                }
              />

              <h2>Why PG&amp;E, SCE and SDG&amp;E do not take residential deposits</h2>
              <p>
                In Decision 20-06-003, issued in June 2020 in its rulemaking on disconnections, the CPUC prohibited the large
                investor-owned utilities, PG&amp;E, SCE, SDG&amp;E and Southern California Gas, from requiring an establishment of
                service deposit or a reestablishment deposit from residential customers. The commission found deposits can hurt a
                household&apos;s ability to keep up with its bills and saw no evidence that they keep customers current. The same
                decision precludes those utilities from charging reconnection fees.
              </p>
              <p>
                PG&amp;E wrote the rule into its tariff: Electric Rule 7 says PG&amp;E is prohibited from requiring any residential
                customer to pay an establishment of credit deposit for new service. Business accounts are different; PG&amp;E can
                ask a nonresidential customer for up to twice the estimated maximum or average monthly bill, and SCE lists
                business deposits of twice the average or highest monthly bill.
              </p>

              <h2>What you need to start service</h2>
              <p>
                PG&amp;E&apos;s Electric Rule 3 lists what an application covers: your legal name and the other adults living at the
                home, the service address and the date you will be ready, whether the home had service before, how you will use
                it, where to send bills, whether you own or rent, and the rate plan you want where there is a choice. PG&amp;E may
                accept a spoken request instead of a signed form. If your city buys power through a community choice
                aggregator, you still call PG&amp;E; PG&amp;E says it will work with the CCA to begin service.
              </p>
              <p>
                Two things are worth doing at the same moment. If your household income qualifies, ask for CARE or FERA when
                you start, because both lower the fixed charge as well as the price per kWh; our guide to{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  PG&amp;E&apos;s CARE and FERA discounts
                </Link>{' '}
                lists the income limits. And ask which rate plan the account will start on, since the default may not be the
                cheapest for your hours.
              </p>

              <h2>What your first bill will include</h2>
              <p>
                The first bill covers the days from your start date to the next meter read, so it is often shorter or longer
                than a normal month. It includes the fixed charge for those days and the kWh you used at your plan&apos;s prices.
                At PG&amp;E, a 30-day first bill on the standard tier carries $23.80 of Base Services Charge before any usage.
                SCE&apos;s charge works out to $24.15 a month for most customers. LADWP bills every two months, and says a new
                customer&apos;s first bill may cover more or fewer than 60 days; the $19 turn-on fee appears on that opening bill.
              </p>
              <p>
                To estimate the usage part, multiply your expected kWh by your plan&apos;s price. The{' '}
                <Link href="/blog/electricity-rates-by-zip-code" className={guideLink}>
                  rate lookup by address
                </Link>{' '}
                gives the standard plan price for each large utility, and the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>{' '}
                shows what typical homes spend.
              </p>

              <h2>If the power was shut off: reconnection</h2>
              <p>
                For PG&amp;E, SCE and SDG&amp;E customers, Decision 20-06-003 precludes reconnection fees and reestablishment
                deposits, although PG&amp;E&apos;s Electric Rule 11 still lets it require the amount due before restoring service
                that was shut off for nonpayment. SMUD&apos;s fee schedule
                lists $25 for a reconnection during business hours and $134 for a truck reconnect. If you are behind, the{' '}
                <Link href="/blog/help-with-pge-bill" className={guideLink}>
                  PG&amp;E bill-help programs
                </Link>{' '}
                and payment plans are the place to start.
              </p>

              <h2>A new connection is a different cost</h2>
              <p>
                Everything above assumes the home already has a meter and a service line. Bringing power to a new house, an ADU
                with its own meter or a bare lot is priced separately. PG&amp;E handles that under its line and service extension
                rules, Electric Rules 15 and 16, and the cost depends on the job. LADWP says installation charges are generally
                not involved when an existing service can carry a new load, but work in public property, transformer work or
                street resurfacing is charged case by case. Its standard temporary construction service costs $1,000 for an
                overhead drop of 200 amps or less, or $170 for an underground temporary service fed from an existing one.
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="electric_bills" currentPath={path} />
            </div>

            <SolarInquiry topic="Starting electric service and solar comparison" heading="Compare Solar Against Your New Electric Bill" />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4">
        <TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
