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

// 2026-09-23 (topical-authority wave, Tier 2): the SDG&E spoke of the NEM hub.
// Covers "sdge net metering", "sdge nem 2.0 (rates)" and "sdge nem 3.0".
// Rates are from SDG&E's EV-TOU-5 total rates table effective 2026-08-01;
// rules from SDG&E's solar pages, the CPUC and Decision 22-12-056; CCA
// surplus terms from San Diego Community Power's own page.
const path = '/blog/sdge-net-metering';
const url = `https://ratereliefca.com${path}`;
const title = 'SDG&E Net Metering: NEM 2.0 vs Solar Billing Plan (2026)';
const h1 = 'SDG&E Net Metering: How NEM 2.0 and the Solar Billing Plan Work in San Diego';
const description =
  'SDG&E NEM 2.0 vs the Solar Billing Plan (NEM 3.0): who is on each, the EV-TOU-5 rate, how export credits work, why there is no bonus, and the true-up.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const plans: [string, string, string][] = [
  ['Who is on it', 'Applied before April 15, 2023', 'Applied April 15, 2023 or later'],
  ['How exports are credited', 'At retail (import) rates', 'At hourly avoided-cost values, as generation and delivery credits'],
  ['Rate plan', 'A time-of-use rate', 'EV-TOU-5'],
  ['How long the terms last', '20 years from interconnection', '9 years'],
  ['Export bonus', 'None', 'None in SDG&E territory'],
  ['Payment', 'Monthly, or by the annual anniversary date', 'Monthly, with an annual true-up'],
];

// SDG&E Schedule EV-TOU-5 total rates, effective 8/1/2026 (bundled service).
const rateRows: [string, string, string][] = [
  ['On-peak (4–9 p.m.)', '80.2¢', '52.4¢'],
  ['Off-peak', '49.6¢', '46.6¢'],
  ['Super off-peak', '13.1¢', '12.3¢'],
];

const sources: Source[] = [
  { label: 'SDG&E: Solar Billing Plan', url: 'https://www.sdge.com/solar/solar-billing-plan' },
  { label: 'SDG&E: Understanding your solar bill', url: 'https://www.sdge.com/solar/solar-billing-plan/UnderstandingYourSolarBill' },
  { label: 'SDG&E: Net Energy Metering (NEM)', url: 'https://www.sdge.com/solar/net-energy-metering' },
  { label: 'SDG&E: Your residential NEM bill', url: 'https://www.sdge.com/residential/solar/your-nem-bill' },
  { label: 'SDG&E: Schedule EV-TOU-5 total rates, effective Aug. 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20EV-TOU-5%20Total%20Rates%20Table.pdf' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'San Diego Community Power: Net Energy Metering', url: 'https://sdcommunitypower.org/net-energy-metering/' },
];

const faqs = [
  {
    question: 'What is SDG&E net metering?',
    answer:
      'It is how SDG&E bills a home with solar for the difference between the power it uses from the grid and the power it sends back. Older systems are on net energy metering (NEM 1.0 or 2.0), which credits exports at retail rates. Systems that applied from April 15, 2023 are on the Solar Billing Plan, which credits exports at lower hourly values.',
  },
  {
    question: 'Is SDG&E NEM 3.0 the same as the Solar Billing Plan?',
    answer:
      'Yes. NEM 3.0 is the informal name for the CPUC’s net billing tariff, and the CPUC says the utilities, SDG&E included, call it the Solar Billing Plan.',
  },
  {
    question: 'What rate do SDG&E Solar Billing Plan customers pay?',
    answer:
      'SDG&E says residential Solar Billing Plan customers are on the EV-TOU-5 time-of-use plan. Its August 1, 2026 table lists about 80 cents per kWh on-peak in summer and about 13 cents super off-peak, plus a Base Services Charge of $0.79343 a day.',
  },
  {
    question: 'How long does SDG&E NEM 2.0 last?',
    answer:
      'The CPUC lets NEM 2.0 customers stay on the tariff for 20 years from the date they interconnected. SDG&E says that when your legacy period ends, the account moves to the Solar Billing Plan.',
  },
  {
    question: 'Do SDG&E customers get the NEM 3.0 export bonus?',
    answer:
      'No. The CPUC set the export bonus for SDG&E residential customers at zero, because its modeling showed they already reach payback in under nine years without it.',
  },
  {
    question: 'What happens to extra solar credits at SDG&E?',
    answer:
      'On the Solar Billing Plan, SDG&E rolls excess export credits forward month to month. At the annual true-up, if you exported more than you imported, SDG&E pays net surplus compensation on the excess instead of the regular export value, which it says prevents double compensation.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function SdgeNetMeteringPage() {
  return (
    <PublicLayout breadcrumbLabel="SDG&E net metering" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'SDG&E net metering'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                SDG&amp;E runs two solar billing systems. Homes that applied before April 15, 2023 stay on net energy
                metering, NEM 2.0, which credits exports at retail rates for 20 years from interconnection. Newer
                systems are on the Solar Billing Plan, SDG&amp;E’s NEM 3.0, which uses the EV-TOU-5 rate and credits
                exports at hourly avoided-cost values, with no export bonus in SDG&amp;E territory.
              </p>
              <p>
                This guide covers who is on each plan, what you pay for grid power, how SDG&amp;E splits export credits
                into generation and delivery, how the true-up works, and what changes if San Diego Community Power or
                Clean Energy Alliance supplies your electricity.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="SDG&E net metering" utility="SDG&E" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'NEM 2.0 legacy period', value: '20 years', note: 'From the date the system interconnected. CPUC.' },
                  { label: 'Solar Billing Plan rate', value: 'EV-TOU-5', note: 'Peak 4–9 p.m. SDG&E.' },
                  { label: 'Summer on-peak price', value: '80.2¢/kWh', note: 'EV-TOU-5, effective Aug. 1, 2026. SDG&E.' },
                  { label: 'Export bonus', value: '$0.000/kWh', note: 'SDG&E residential. CPUC D.22-12-056.' },
                ]}
              />

              <h2>Which SDG&amp;E solar plan are you on?</h2>
              <p>
                The date your interconnection application went in decides it. The CPUC says customers applying since
                April 15, 2023 take service on the net billing tariff, which the utilities call the Solar Billing Plan.
                Earlier applicants kept net energy metering. The CPUC allows NEM 2.0 customers to stay on it for 20
                years from the date they interconnected, and SDG&amp;E says that when the legacy period ends, the account
                moves to the Solar Billing Plan.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">SDG&amp;E NEM 2.0 compared with the Solar Billing Plan</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3"></th>
                      <th className="p-3">NEM 2.0</th>
                      <th className="p-3">Solar Billing Plan (NEM 3.0)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map(([label, nem2, sbp]) => (
                      <tr key={label} className="border-t border-border align-top">
                        <th scope="row" className="p-3 font-medium">{label}</th>
                        <td className="p-3">{nem2}</td>
                        <td className="p-3">{sbp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                From the CPUC’s net billing page, Decision 22-12-056 and SDG&amp;E’s solar pages.
              </p>

              <h2>How SDG&amp;E NEM 2.0 works</h2>
              <p>
                On NEM 2.0, what you export earns a credit at the retail price for that hour, which the CPUC describes as
                crediting exports at import rates. The CPUC requires NEM 2.0 customers to take a time-of-use rate and to
                pay non-bypassable charges on the power they draw in each metered interval. Those charges cannot be
                erased by credits.
              </p>
              <p>
                SDG&amp;E lets residential NEM customers pay the bill in full each month, or pay part of it as long as the
                balance is cleared by the annual anniversary date. At the end of each 12 months you get a true-up bill for
                what remains; generation credit can go toward it, and then the credit balance resets to zero. SDG&amp;E
                warns that even a home that exports more than it uses all year may still owe fixed monthly fees. If you
                exported more than you used over the year, the CPUC says the surplus is paid at net surplus compensation,
                about 2 to 3 cents per kWh.
              </p>
              <p>
                SDG&amp;E’s time-of-use plans and current prices for NEM 2.0 homes are in{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={link}>SDG&amp;E peak hours and TOU plans</Link>.
                How long your own account keeps NEM 2.0 is covered in{' '}
                <Link href="/blog/when-does-nem-2-expire" className={link}>when NEM 2.0 expires</Link>.
              </p>

              <h2>The Solar Billing Plan: SDG&amp;E’s NEM 3.0</h2>
              <p>
                SDG&amp;E says residential Solar Billing Plan customers are on the EV-TOU-5 plan, which has on-peak,
                off-peak and super off-peak periods. The CPUC’s net billing decision named EV-TOU-5 as SDG&amp;E’s eligible
                rate for these customers. SDG&amp;E’s total rates table effective August 1, 2026 lists these bundled prices
                per kWh:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">SDG&amp;E EV-TOU-5 energy prices per kWh, effective August 1, 2026</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">EV-TOU-5 period</th>
                      <th className="p-3">Summer</th>
                      <th className="p-3">Winter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rateRows.map(([period, summer, winter]) => (
                      <tr key={period} className="border-t border-border">
                        <td className="p-3">{period}</td>
                        <td className="p-3">{summer}</td>
                        <td className="p-3">{winter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                EV-TOU-5 also carries a Base Services Charge of $0.79343 per day, about $24 over a 30-day month, or
                $0.39688 per day for FERA customers. The spread between super off-peak and on-peak, about 13 cents
                against 80 cents in summer, is wider than on either PG&amp;E’s or SCE’s net billing rate.
              </p>

              <h3>How SDG&amp;E credits what you export</h3>
              <p>
                SDG&amp;E issues two credits for each exported kWh: a Generation Export Credit and a Delivery Export
                Credit. It says generation credits can offset only generation import charges, and delivery credits only
                delivery import charges. Neither can pay what SDG&amp;E calls required charges: the Base Services Charge,
                customer, meter and facilities charges, demand charges and surcharges, non-bypassable charges and any
                fixed charges.
              </p>
              <p>
                The values are set by the CPUC and vary by time of day and season. SDG&amp;E posts them in an Export Data
                and Pricing spreadsheet in its My Energy Center. The CPUC says the original customer keeps net billing
                terms for nine years. For how SDG&amp;E’s values compare with the other utilities’, see{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>NEM 3.0 export rates across California</Link>.
              </p>

              <h3>Why SDG&amp;E customers get no export bonus</h3>
              <p>
                PG&amp;E and SCE customers who applied before the end of 2027 get a small fixed bonus on each exported
                kWh. SDG&amp;E customers do not. In Decision 22-12-056 the CPUC modeled SDG&amp;E residential paybacks at
                4.70 to 8.43 years without a bonus, because of the utility’s higher rates. Since that was already under
                the nine-year target, it set SDG&amp;E’s residential bonus at $0.000 per kWh for CARE and non-CARE
                customers alike.
              </p>

              <h2>Monthly bills and the annual true-up</h2>
              <p>
                You still get a monthly bill on the Solar Billing Plan. SDG&amp;E says that in months with excess export
                credits, the credits roll over to later months until used or until you end service. At the end of each
                12-month cycle, SDG&amp;E runs a true-up. If your exports exceeded your imports for the year, it switches
                the compensation for the excess from avoided-cost values to net surplus compensation rates, which it
                says keeps the same exports from being paid twice.
              </p>
              <p>
                That adjustment is one reason a solar bill can look higher than expected at true-up. The other common
                causes are covered in{' '}
                <Link href="/blog/why-are-my-nem-charges-so-high" className={link}>why NEM charges run high</Link>{' '}
                and{' '}
                <Link href="/blog/why-is-my-sdge-bill-so-high" className={link}>why an SDG&amp;E bill runs high</Link>.
              </p>

              <h2>San Diego Community Power and Clean Energy Alliance customers</h2>
              <p>
                SDG&amp;E says that if San Diego Community Power or Clean Energy Alliance supplies your electricity, the
                community choice aggregator sets the price for your generation import charges and generation export
                credits. SDG&amp;E still handles delivery.
              </p>
              <p>
                San Diego Community Power says it runs a true-up for the generation portion of your service at the same
                time as your SDG&amp;E true-up. It pays net surplus at a wholesale rate plus its own $0.0075 per kWh bonus;
                its table shows $0.03684 per kWh for January 2026. Customers automatically receive a check when the
                amount is above $100. Clean Energy Alliance customers should ask it for its own terms.
              </p>

              <h2>Multiple meters: NEM Aggregation is closed to new applicants</h2>
              <p>
                SDG&amp;E says its NEM Aggregation program closed to new applications after February 14, 2024. It says
                customers who applied after that date would take service on NEM Aggregation temporarily, until their
                accounts moved to the new Solar Billing Plan Aggregation, which it scheduled for early 2025. How aggregation and virtual net metering work under the
                CPUC’s newer rules is in{' '}
                <Link href="/commercial-solar/vnem-aggregation-multi-meter" className={link}>virtual net metering and meter aggregation</Link>.
              </p>

              <h2>Batteries in SDG&amp;E territory</h2>
              <p>
                SDG&amp;E’s own Solar Billing Plan page recommends pairing solar with a battery so you can use stored
                energy during the 4 to 9 p.m. on-peak hours, when prices are highest. With summer on-peak near 80 cents
                and no export bonus, the hours you use your own solar matter more in San Diego than almost anywhere in
                the state. The state’s SGIP battery incentive is administered here by the Center for Sustainable Energy,
                and its equity budget was waitlisted when checked; see the{' '}
                <Link href="/battery/sgip-battery-rebate-california" className={link}>SGIP status page</Link>{' '}
                and{' '}
                <Link href="/blog/solar-battery-backup-california" className={link}>what a backup battery runs and costs</Link>.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Other SDG&E and net billing questions"
                links={[
                  { href: '/blog/sdge-rate-increase-2026', label: 'SDG&E rate changes in 2026' },
                  { href: '/blog/pge-vs-sce-vs-sdge-rates-compared', label: 'PG&E, SCE and SDG&E rates compared' },
                  { href: '/blog/sce-solar-billing-plan', label: 'How SCE’s Solar Billing Plan differs' },
                  { href: '/blog/what-is-nem-true-up', label: 'How an annual true-up settles' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'Whether a battery pays back on net billing' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry utility="SDG&E" topic="SDG&E net metering" variant="bill" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
