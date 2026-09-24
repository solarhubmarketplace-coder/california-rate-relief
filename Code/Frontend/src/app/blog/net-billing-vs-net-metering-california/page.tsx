import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

// 2026-09-23 (topical-authority wave): rebuilt as a self-contained page from
// NetBillingGuide kind="billing" so it can own "california nem 3.0 decision":
// what D.22-12-056 adopted, what the 2021 proposal dropped, and the NEM vs
// NBT comparison from the CPUC's own table.
const path = '/blog/net-billing-vs-net-metering-california';
const url = `https://ratereliefca.com${path}`;
const title = 'Net Billing vs Net Metering: The CPUC NEM 3.0 Decision';
const h1 = 'Net Billing vs. Net Metering in California: What the CPUC’s NEM 3.0 Decision Changed';
const description =
  'Net metering credits solar exports at retail; net billing (NEM 3.0) pays hourly avoided cost. What CPUC Decision 22-12-056 adopted, dropped and left alone.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const cpucTable: [string, string, string, string][] = [
  ['Import rate', 'Any TOU rate', 'Any TOU rate', 'Specific electrification TOU rate'],
  ['Solar used at home avoids imports', 'Yes', 'Yes', 'Yes'],
  ['Credit for exports before true-up', 'Import (retail) rates', 'Import (retail) rates', 'Avoided Cost Calculator values, usually lower'],
  ['Credit for net surplus at true-up', 'Wholesale energy price', 'Wholesale energy price', 'Wholesale energy price'],
  ['Non-bypassable charges on', 'Net energy over the year', 'Net energy in each hour (homes)', 'All imports'],
  ['Interconnection fee', 'None', '$94–$145', '$94–$145'],
  ['Billing', 'Annual billing and true-up', 'Annual billing and true-up', 'Monthly billing; annual true-up for credits'],
  ['System size limit', 'Annual load; capped at 1 MW', 'Annual load, limited exceptions', 'Annual load plus up to 50% with attestation'],
];

const names: [string, string][] = [
  ['Net Energy Metering (NEM)', 'The CPUC’s term for NEM 1.0 and NEM 2.0, which credit exports at retail rates. Closed to new customers.'],
  ['Net Billing Tariff (NBT)', 'The CPUC’s name for the tariff adopted in D.22-12-056 for applications from April 15, 2023.'],
  ['NEM 3.0', 'The common name for the net billing tariff. Same tariff, same decision.'],
  ['Solar Billing Plan', 'What the utilities call the net billing tariff on customer bills and websites.'],
];

const sources: Source[] = [
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC: Net Billing Tariff proceeding page', url: 'https://www.cpuc.ca.gov/nbt' },
  { label: 'CPUC: Solar tariff decision press release, Dec. 15, 2022', url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/cpuc-modernizes-solar-tariff-to-support-reliability-and-decarbonization' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'CPUC: December 2021 proposed decision fact sheet', url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/net-energy-metering-nem/nemrevisit/net-billing-tariff-fact-sheet.pdf' },
  { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  { label: 'SCE: How Solar Billing Plans work', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan' },
  { label: 'Court of Appeal: Center for Biological Diversity v. PUC, A167721A (Mar. 9, 2026), via Justia', url: 'https://law.justia.com/cases/california/court-of-appeal/2026/a167721a.html' },
];

const faqs = [
  {
    question: 'What is the difference between net billing and net metering?',
    answer:
      'Net metering (NEM 1.0 and 2.0) credits solar exports at the retail rates you pay for electricity and bills annually. Net billing, the tariff adopted in 2022, credits exports at hourly values from the CPUC’s Avoided Cost Calculator, which are usually lower, and bills monthly. Solar used at home offsets purchases under both.',
  },
  {
    question: 'What was the CPUC’s NEM 3.0 decision?',
    answer:
      'Decision 22-12-056, adopted December 15, 2022. It created the net billing tariff for new solar customers of PG&E, SCE and SDG&E applying from April 15, 2023, with avoided-cost export credits, a temporary export bonus for PG&E and SCE residential customers, required electrification rates and a nine-year legacy period.',
  },
  {
    question: 'Is NEM 3.0 the same as the Net Billing Tariff?',
    answer:
      'Yes. Net Billing Tariff is the CPUC’s name, NEM 3.0 is the common name, and the utilities call it the Solar Billing Plan. All three refer to the tariff adopted in Decision 22-12-056.',
  },
  {
    question: 'Did the NEM 3.0 decision add a fixed charge for solar customers?',
    answer:
      'No. A December 2021 proposed decision included a monthly Grid Participation Charge of $8 per kilowatt, but the CPUC’s announcement of the final decision says it does not include any charges specific to solar customers.',
  },
  {
    question: 'Did the decision change existing NEM 2.0 customers?',
    answer:
      'No. The CPUC said the decision has no impact on existing rooftop solar customers. The 2021 proposal would have moved existing customers to the new tariff after 15 years; that was not adopted, and NEM 2.0 customers keep their 20-year period.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function NetBillingVsNetMeteringPage() {
  return (
    <PublicLayout breadcrumbLabel="Net billing vs. net metering" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={h1} url={url} dateModified={updated} description={description} />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {[{ label: 'Home', href: '/' }, hub].map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                  <span aria-hidden="true">/</span>
                </span>
              ))}
              <span className="text-foreground">{'Net billing vs. net metering'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                Net metering credits the solar you export at the same retail rates you pay for electricity. Net
                billing credits it at hourly values based on what the grid would otherwise pay for that energy,
                which are usually much lower. California switched new solar customers from the first to the second
                in the CPUC’s NEM 3.0 decision, Decision 22-12-056, adopted December 15, 2022, for interconnection
                applications filed on or after April 15, 2023 with PG&amp;E, SCE and SDG&amp;E.
              </p>
              <p>
                This page sorts out the names, lays out the CPUC’s own side-by-side, and explains what the decision
                adopted, what an earlier proposal would have done that didn’t survive, and what it left alone.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="Net billing decision" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'Decision', value: 'D.22-12-056', note: 'Adopted December 15, 2022. CPUC.' },
                  { label: 'Applies to applications from', value: 'April 15, 2023', note: 'PG&E, SCE and SDG&E customers. CPUC.' },
                  { label: 'Starting export bonus', value: '$0.022 PG&E / $0.040 SCE', note: 'Per kWh, residential non-CARE; none at SDG&E. D.22-12-056.' },
                  { label: 'Legacy period', value: '9 years', note: 'Tied to the customer who installed the system. D.22-12-056.' },
                ]}
              />

              <h2>Four names, two systems</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Net metering and net billing terms</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Term</th>
                      <th className="p-3">What it means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {names.map(([term, meaning]) => (
                      <tr key={term} className="border-t border-border align-top">
                        <th scope="row" className="p-3 font-medium">{term}</th>
                        <td className="p-3">{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                The CPUC says the utilities refer to the net billing tariff as the Solar Billing Plan. PG&amp;E and
                SCE both use that name on their sites, so a customer on the Solar Billing Plan is on what everyone
                else calls NEM 3.0.
              </p>

              <h2>The CPUC’s side-by-side</h2>
              <p>
                Under all three tariffs, solar used at home first serves the home and cuts what you buy. The
                differences are in how exports are credited, which charges apply, and how often you pay. This table
                follows the CPUC’s own comparison.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">NEM 1.0, NEM 2.0 and net billing compared, per the CPUC</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">NEM 1.0</th>
                      <th className="p-3">NEM 2.0</th>
                      <th className="p-3">Net billing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cpucTable.map(([k, a, b, c]) => (
                      <tr key={k} className="border-t border-border align-top">
                        <th scope="row" className="p-3 font-medium">{k}</th>
                        <td className="p-3">{a}</td>
                        <td className="p-3">{b}</td>
                        <td className="p-3">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>What Decision 22-12-056 adopted</h2>
              <p>
                <strong>Avoided-cost export credits.</strong> Exports are credited at values from the CPUC’s Avoided
                Cost Calculator. The decision has the utilities publish average monthly values for each hour,
                separated into weekdays and weekends. The CPUC says those values are usually lower than retail
                rates but can rise above them on late summer evenings. See{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>the 2026 export values by hour</Link>.
              </p>
              <p>
                <strong>A temporary export bonus.</strong> The decision added an ACC Plus adder for residential
                customers of PG&amp;E and SCE, designed to target a nine-year simple payback. The starting amounts
                were $0.022 per kWh at PG&amp;E and $0.040 at SCE for non-CARE customers, and $0.090 and $0.093 for
                CARE customers. SDG&amp;E customers got none, because the CPUC’s modeling showed paybacks under nine
                years there without it. The adder falls 20 percent at the end of each calendar year and ends after
                five years; customers lock in their amount for nine years.
              </p>
              <p>
                <strong>Electrification rates.</strong> New customers take a time-of-use rate with a wide gap
                between peak and off-peak prices. The decision named E-ELEC for PG&amp;E, EV-TOU-5 for SDG&amp;E
                and TOU-D-PRIME for SCE.
              </p>
              <p>
                <strong>A nine-year legacy period tied to the customer.</strong> The tariff’s terms, other than the
                import rate, hold for nine years from interconnection. The decision says the legacy period belongs
                to the customer who originally caused the system to be installed, not to the system: a later owner
                of the home doesn’t get one, unless they are that customer’s spouse or domestic partner.
              </p>
              <p>
                <strong>Monthly billing.</strong> The CPUC says bills are due monthly under net billing so customers
                aren’t surprised by a large annual bill, with surplus credits rolling forward to the annual
                true-up. Non-bypassable charges apply to all imports.
              </p>
              <p>
                <strong>Help for lower-income customers.</strong> The CPUC’s announcement said low-income customers,
                disadvantaged communities and California Indian Country residents receive more than double the extra
                bill credits, alongside $630 million in state funding the Legislature set aside for upfront
                low-income incentives.
              </p>

              <h2>What the 2021 proposal would have done, and didn’t</h2>
              <p>
                The first draft, a proposed decision from December 13, 2021, looked different. According to the
                CPUC’s fact sheet on it, it would have charged residential solar customers a monthly Grid
                Participation Charge of $8 per kilowatt, used a Market Transition Credit locked for 10 years, and
                moved existing NEM 1.0 and NEM 2.0 customers, except low-income customers, to the new tariff after
                15 years of interconnection.
              </p>
              <p>
                The final decision dropped all three. The CPUC’s December 2022 announcement said the adopted
                decision does not include any charges specific to solar customers and has no impact on existing
                rooftop solar customers. That is why NEM 2.0 accounts still run for 20 years; see{' '}
                <Link href="/blog/when-does-nem-2-expire" className={link}>when NEM 2.0 expires</Link>.
              </p>

              <h2>After the decision</h2>
              <p>
                The decision was challenged in court, and on March 9, 2026 the Court of Appeal affirmed it after the
                California Supreme Court had sent the case back on the standard of review. The CPUC’s own review is
                built in: the decision calls for three years of data after full implementation and a draft
                evaluation within five years, and the CPUC lists Decision 23-11-068 as planning that evaluation. The{' '}
                <Link href="/blog/nem-3-lawsuit" className={link}>NEM 3.0 lawsuit page</Link>{' '}
                has the court history, and the{' '}
                <Link href="/blog/nem-3-california-timeline" className={link}>NEM 3.0 timeline</Link>{' '}
                has the remaining deadlines.
              </p>

              <h2>Which one applies to your account</h2>
              <p>
                If PG&amp;E, SCE or SDG&amp;E serves you and your solar application went in on or after April 15,
                2023, you are on net billing. If it went in earlier, you are on NEM 1.0 or 2.0 until your 20-year
                period ends or an expansion moves you. The CPUC’s tariff doesn’t cover customers of city-owned
                utilities, and the smaller investor-owned utilities have their own tariffs. Your bill names the
                program; if it disagrees with what you were told, go with the bill.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Where the difference shows up"
                links={[
                  { href: '/blog/what-is-nem-3-california', label: 'NEM 3.0 explained from the bill' },
                  { href: '/blog/how-does-net-metering-work', label: 'How net metering works, step by step' },
                  { href: '/blog/what-is-nem-true-up', label: 'How the annual true-up settles' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'Whether storage changes the arithmetic' },
                  { href: '/blog/california-public-utilities-commission', label: 'How the CPUC makes rate decisions' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry topic="Net billing decision" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
