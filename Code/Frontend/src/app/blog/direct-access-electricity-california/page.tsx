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
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';

const path = '/blog/direct-access-electricity-california';
const url = `https://ratereliefca.com${path}`;
const title = 'California Direct Access Electricity: Lottery, Cap and Rules';
const h1 = 'Direct Access Electricity in California: Who Can Still Get It and How the Lottery Works';
const description =
  'Direct Access lets a business buy power from a competitive supplier, but it is capped and closed to homes. See the 2025 lottery results and how to enroll.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('cpucDirectAccess', 'cpucDaProgram', 'cpucDaLottery2025', 'sceDirectAccess', 'pgeCca', 'cpucRateComparison');

const faqs = [
  {
    question: 'Can a homeowner sign up for Direct Access in California?',
    answer:
      'No. SCE says current law excludes residential customers from signing up. Households that were on Direct Access before the 2001 suspension can stay as long as they remain with a registered Electric Service Provider. For a household, the way to choose a different generation supplier is a community choice aggregator, if your city or county has one.',
  },
  {
    question: 'How do I enroll a business in Direct Access?',
    answer:
      "Submit a Six-Month Notice to your utility during the second full week of June; in 2025 that was June 9 to 13. The utility reviews notices for up to 30 business days, then assigns random lottery numbers. Customers are accepted while room remains under the utility's cap, and the rest go on a waitlist for the next calendar year.",
  },
  {
    question: 'Is Direct Access cheaper than buying power from the utility?',
    answer:
      'Sometimes. SCE says Direct Access may let a business obtain power at a lower price, but nothing guarantees it. The utility still bills delivery, and state rules are designed so customers who stay with the utility do not pick up costs left behind, so compare an ESP contract with the full utility bill, not just the energy line.',
  },
  {
    question: 'What is the Direct Access cap in California?',
    answer:
      'SB 237 in 2018 raised the statewide cap by 4,000 GWh to roughly 28,800 GWh a year, effective January 1, 2021, per the CPUC. In 2021 the CPUC recommended against further expansion. Each utility has its own share, which is why SDG&E had no room at the 2025 lottery while SCE had 1,645 GWh.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function DirectAccessElectricityCaliforniaPage() {
  return (
    <PublicLayout breadcrumbLabel="Direct Access electricity in California" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Direct Access electricity" kicker="Retail choice · Business" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Direct Access lets a California business buy its electricity from a competitive Electric Service Provider
                instead of PG&amp;E, SCE or SDG&amp;E, while the utility still delivers it. It is closed to new residential
                customers and capped for businesses. New load gets in only through a yearly lottery in June; 1,455 businesses
                entered the 2025 lottery.
              </p>
              <p>
                If you run a business, this page explains the cap, the lottery, what the 2025 results say about your odds and
                what changes on the bill. If you are a homeowner who heard you can &ldquo;choose your power company,&rdquo; the
                short version is that Direct Access is not open to you, and the section on community choice explains the
                option that is. For how retail rates got so high in the first place, see our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to high California electric bills
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="Direct Access in numbers"
                  facts={[
                    { label: 'Statewide cap since January 1, 2021', value: '≈28,800 GWh/yr', note: 'After SB 237 added 4,000 GWh', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucDirectAccess.url } },
                    { label: 'Businesses entering the 2025 lottery', value: '1,455', note: '2,077 GWh of room available', source: { publisher: 'CPUC Energy Division', date: RATE_SOURCES_CHECKED, url: SRC.cpucDaLottery2025.url } },
                    { label: 'Still on a waitlist, December 31, 2025', value: '783 customers', note: '1,700 GWh of load', source: { publisher: 'CPUC Energy Division', date: RATE_SOURCES_CHECKED, url: SRC.cpucDaLottery2025.url } },
                    { label: 'New residential enrollment', value: 'Closed', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceDirectAccess.url } },
                  ]}
                />
              </div>

              <h2>How Direct Access works</h2>
              <p>
                On a normal, or bundled, account the utility buys the power, moves it over the transmission grid and delivers
                it on local wires. On Direct Access, an Electric Service Provider takes over the first job: it contracts with
                you, arranges the supply and bills you for generation. The utility keeps the other two. SCE puts it plainly:
                for Direct Access customers, generation is provided solely by the ESP, while SCE continues to own and run the
                distribution lines and remains responsible for safe, reliable delivery. The ESP has to meet CPUC requirements
                and the utility&apos;s own financial and technical requirements before it can serve customers.
              </p>

              <h2>A short history: open, closed, partly reopened</h2>
              <DataTable
                caption="Direct Access in California, key dates"
                columns={['Year', 'What happened']}
                rows={[
                  ['1996', 'Created in California’s electricity restructuring (Public Utilities Code §365.1)'],
                  ['1998', 'Program begins; residential and business customers can switch'],
                  ['2001', 'AB X1 suspends new enrollment after the Western power crisis'],
                  ['2009–2013', 'SB 695 reopens a capped amount of load to non-residential customers only, phased in over 2010 to 2013'],
                  ['2013', 'Lottery replaces first-come, first-served enrollment (D.12-12-026)'],
                  ['2018–2021', 'SB 237 raises the cap by 4,000 GWh to roughly 28,800 GWh; effective January 1, 2021 (D.19-05-043)'],
                  ['2021', 'CPUC recommends against further expansion (D.21-06-033)'],
                ]}
                note={<>Sources: CPUC Direct Access and Direct Access Program pages; SCE Direct Access overview. All checked September 23, 2026.</>}
              />
              <p>
                The 2021 recommendation matters most for anyone waiting on a bigger cap. SB 237 asked the CPUC whether it could
                open Direct Access to all remaining non-residential customers while meeting four findings on greenhouse gases,
                air pollution, reliability and cost shifting. The CPUC said it could not make those findings, so the cap stays
                where the Legislature set it until the Legislature acts again.
              </p>

              <h2>The June lottery, step by step</h2>
              <ol>
                <li>During the second full week of June, you or your agent submit a Six-Month Notice to your utility.</li>
                <li>The utility has 30 business days to review, audit and confirm the notices.</li>
                <li>A randomizer assigns lottery numbers. Customers are told by email whether they fit under the utility&apos;s cap.</li>
                <li>Everyone else goes on a waitlist, in lottery order, for the following calendar year.</li>
                <li>On the last business day of each month, the utility checks for room under the cap and notifies the next customer on the list.</li>
                <li>On the last business day of December, unused lottery numbers are cancelled, and the new waitlist takes over on January 1.</li>
              </ol>
              <p>
                SCE adds two conditions for its territory: customers on certain rate plans are not eligible, and a former
                Direct Access customer who returned to SCE must complete an 18-month Bundled Portfolio Service commitment
                before switching again.
              </p>

              <h2>What the 2025 lottery results say about your odds</h2>
              <p>
                The CPUC&apos;s Energy Division published its report on the 2025 lottery in June 2026. The room available
                differs sharply by utility, because each has its own share of the cap.
              </p>
              <DataTable
                caption="2025 Direct Access lottery and 2025 switching activity, by utility"
                columns={['', 'PG&E', 'SCE', 'SDG&E', 'Total']}
                rows={[
                  ['Valid Six-Month Notices, June 9–13, 2025', '702', '467', '286', '1,455'],
                  ['Room under the cap at lottery start (GWh)', '432', '1,645', '0', '2,077'],
                  ['Customers able to switch in 2025 (from the 2024 lottery)', '95', '350', '0', '445'],
                  ['Customers still waitlisted, December 31, 2025', '503', '0', '280', '783'],
                  ['Waitlisted load (GWh)', '1,060', '0', '640', '1,700'],
                ]}
                note={<>Source: CPUC Energy Division, 2025 Direct Access Lottery Enrollment Report (June 2026), from utility reports to the CPUC as of April 1, 2026. Checked September 23, 2026.</>}
              />
              <p>
                Read plainly: in SDG&amp;E territory there was no room at all in 2025, and 280 customers were still waiting at
                year end. In SCE territory, 350 customers were able to switch in 2025 and nobody was left on the waitlist.
                PG&amp;E sat in between, with 95 customers switching and 503 still in line. A business in San Diego should not
                count on Direct Access; one in SCE territory has a realistic path through the June window.
              </p>

              <h2>What changes on the bill, and whether it saves money</h2>
              <p>
                You still get a utility bill for delivery. The generation part comes from the ESP under your contract with it.
                SCE says Direct Access may let a business buy power at a lower price, and it also says state rules are meant
                to keep customers who stay with the utility from being financially affected when others leave. So compare an
                ESP offer with your whole utility bill, not just the energy rate, and read the contract&apos;s term, exit
                terms and how it prices peak hours.
              </p>
              <p>
                The utility still sets the delivery side of the bill, so the utility figures in the{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  California utility rate tracker
                </Link>{' '}
                and{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E vs. SCE vs. SDG&amp;E comparison
                </Link>{' '}
                still set much of what you pay. Businesses weighing on-site generation instead can start with{' '}
                <Link href="/commercial-solar" className={guideLink}>
                  commercial solar in California
                </Link>{' '}
                and the{' '}
                <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className={guideLink}>
                  PPA vs. purchase comparison
                </Link>
                .
              </p>

              <h2>For households: community choice is the option that is open</h2>
              <p>
                The CPUC&apos;s Direct Access rules exclude community choice aggregators from the suspension, and many cities
                and counties now buy power for their residents that way. PG&amp;E says 12 community choice providers operate in
                its territory. If you have one, its generation charges appear on your PG&amp;E bill along with PG&amp;E&apos;s
                delivery charges. Our guide to{' '}
                <Link href="/blog/what-is-3rd-party-electric-on-pge-bill" className={guideLink}>
                  third-party electric charges on a PG&amp;E bill
                </Link>{' '}
                explains how to read those lines, and the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>{' '}
                shows where a typical household lands.
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

            <SolarInquiry topic="Direct Access and business electricity" variant="bill" heading="Compare Solar With Your Electric Bill" />
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
