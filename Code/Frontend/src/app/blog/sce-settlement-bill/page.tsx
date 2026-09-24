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

const path = '/blog/sce-settlement-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'SCE Annual Settlement Bill: How to Read Your Solar True-Up';
const h1 = 'SCE Annual Settlement Bill: What It Is, Why It Is Big and How to Read It';
const description =
  "An SCE settlement bill is the yearly statement for NEM solar customers: the year's net energy charges come due, and extra credit pays about 1.8¢/kWh.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('sceNemBill', 'sceNsc', 'cpucNbt', 'sceTou', 'dceSolar', 'sceBsc');

const faqs = [
  {
    question: 'What is an SCE annual settlement statement?',
    answer:
      "It is the bill a net energy metering (NEM) solar customer gets at the end of each 12-month billing cycle. SCE adds up the year's net energy charges and credits; if you owe, the balance is due, and if you have credit and opted in to Net Surplus Compensation, SCE pays it out. Then the balance resets to zero for the next cycle.",
  },
  {
    question: 'Why is my SCE settlement bill so high?',
    answer:
      "Usually because you are on the Annual Billing Option, which lets net energy charges build up all year and bills them at once. Summer evening use, after the panels stop producing, is the common source. More usage than the system was sized for, such as a new EV or pool, adds to it. Your monthly bills show the running total as Year-to-Date Charges.",
  },
  {
    question: 'How much does SCE pay for extra solar at true-up?',
    answer:
      "The Net Surplus Compensation rate, which SCE sets monthly from wholesale market prices. For cycles ending September 2026 it is $0.01825 per kWh. You only get it for surplus left after a full year, and only if you opted in; credits during the year are worth more because they offset what you would otherwise buy.",
  },
  {
    question: 'Can I stop getting one big SCE bill each year?',
    answer:
      'Yes. SCE lets NEM customers switch to the Monthly Billing Option, which bills net energy charges every month instead of once a year. SCE still issues the annual settlement statement, but there is little left to pay on it. Customers who cannot pay a settlement balance can ask SCE about payment plans and assistance.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function SceSettlementBillPage() {
  return (
    <PublicLayout breadcrumbLabel="SCE annual settlement bill" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SCE settlement bill" kicker="SCE · Solar billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                An SCE settlement bill, which SCE calls the Annual Settlement Statement, closes out each 12-month cycle for
                net energy metering (NEM) solar customers. On SCE&apos;s default Annual Billing Option, the whole year&apos;s net
                energy charges come due on it at once. Leftover credit is paid at the Net Surplus Compensation rate, $0.01825 per
                kWh for cycles ending September 2026.
              </p>
              <p>
                That is why the same household can pay very little for eleven months and then get one large bill. This page
                explains what the statement adds up, how to read it and how to avoid the surprise next year. It covers SCE&apos;s
                NEM customers; newer solar customers on the Solar Billing Plan pay monthly, as explained below. For the
                bigger picture on high bills, see our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to high California electric bills
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="SCE settlement basics"
                  facts={[
                    { label: 'Cycle length', value: '12 months', note: 'Balance resets to zero after settlement', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceNemBill.url } },
                    { label: 'Net Surplus Compensation, cycles ending Sep 2026', value: '$0.01825/kWh', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceNsc.url } },
                    { label: 'Monthly on every NEM bill', value: 'Set fees', note: '"Delivery" or "Nonbypassable" charges', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceNemBill.url } },
                    { label: 'Summer weekday peak, TOU-D-4-9PM', value: '≈58¢/kWh', note: '4–9 p.m., when panels fade', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTou.url } },
                  ]}
                />
              </div>

              <h2>What the settlement bill adds up</h2>
              <p>
                Each month, SCE subtracts the credit for power your system sent to the grid from the charges for power you
                took from SCE. That difference is your net energy charge or credit for the month. Credits roll forward to offset
                later charges. On the Annual Billing Option, you pay only the set fees each month, labeled Delivery or
                Nonbypassable charges, and SCE carries the net energy balance. At the end of the 12 months, the Annual
                Settlement Statement totals it all:
              </p>
              <ul>
                <li>If you used more than you produced, in dollar terms, you owe the balance in full.</li>
                <li>If you end with unused credit and opted in to Net Surplus Compensation, SCE pays it as a bill credit or a check at the NSC rate.</li>
                <li>Either way, the net energy balance resets to zero for the next cycle.</li>
              </ul>
              <p>
                Your monthly bills already show where you are headed. SCE lists the Year-to-Date Charges on the first page for
                Annual Billing customers, which is the amount due at the end of the cycle if nothing changes.
              </p>

              <h2>An illustration of how the balance builds</h2>
              <p>
                The numbers below are made up to show the pattern, not SCE data. A home earns net credits in spring, when the
                panels produce a lot and the air conditioner is off, then runs net charges in summer evenings and in winter.
              </p>
              <DataTable
                caption="Illustrative NEM year on the Annual Billing Option (net energy charges only)"
                columns={['Months', 'Net energy charge (+) or credit (−)', 'Running balance']}
                rows={[
                  ['January–February', '+$65', '+$65'],
                  ['March–June', '−$140', '−$75'],
                  ['July–September', '+$215', '+$140'],
                  ['October–December', '+$85', '+$225'],
                  ['Annual settlement', 'Due', '$225, plus the set fees already paid each month'],
                ]}
                note={<>Hypothetical example for explanation only. Your own months and amounts are on your SCE bills.</>}
              />
              <p>
                July through September does the damage. On SCE&apos;s TOU-D-4-9PM plan, summer weekday energy from 4 to 9
                p.m. costs about 58 cents per kWh, against about 34 cents at other hours, and that is exactly when panels taper
                off and air conditioning runs hardest.
              </p>

              <h2>How much SCE pays for surplus at true-up</h2>
              <p>
                If you produce more than you use over the full year, the leftover is paid at the Net Surplus Compensation rate.
                SCE sets it monthly from a day-ahead wholesale price, and the rate that applies is the one for the month your
                12-month cycle ends.
              </p>
              <DataTable
                caption="SCE Net Surplus Compensation rate, selected cycle-end months ($ per kWh)"
                columns={['Cycle ending', 'NSC rate']}
                rows={[
                  ['September 2023', '$0.06818'],
                  ['September 2024', '$0.01892'],
                  ['September 2025', '$0.01645'],
                  ['March 2026', '$0.01848'],
                  ['June 2026', '$0.01815'],
                  ['September 2026', '$0.01825'],
                ]}
                note={<>Source: SCE Net Surplus Compensation Rate page, checked September 23, 2026. SCE lists every month back to 2022.</>}
              />
              <p>
                At $0.01825, 500 kWh of surplus pays about $9.13, our arithmetic. The same 500 kWh used at home instead of
                bought from SCE would have been worth far more. That gap is why a system sized well beyond your yearly use earns
                little for the extra panels, and why a credit balance is worth more used at home than carried to settlement.
              </p>

              <h2>How to avoid a surprise next year</h2>
              <ul>
                <li><strong>Switch to the Monthly Billing Option.</strong> SCE lets NEM customers pay net energy charges every month, which spreads the cost and leaves little for the settlement.</li>
                <li><strong>Watch Year-to-Date Charges.</strong> If the number climbs through summer, set aside money or change habits before the cycle ends.</li>
                <li><strong>Move big loads into solar hours.</strong> SCE suggests running major appliances and pool pumps from 8 a.m. to 2 p.m., when your system is producing.</li>
                <li><strong>Account for new load.</strong> SCE notes an EV or a pool raises use, and a system not sized for it means buying more from SCE.</li>
                <li><strong>Consider storage.</strong> SCE lists a battery as a way to keep more of your own power for the evening.</li>
              </ul>
              <p>
                If you cannot pay the settlement in full, SCE says payment plans, bill support and financial assistance are
                available to customers who qualify. Ask before the due date.
              </p>

              <h2>If a community choice provider is on your bill</h2>
              <p>
                SCE says a NEM customer served by a community choice aggregator has generation credits and charges
                administered by the CCA, even though they still appear on the SCE bill with SCE&apos;s set fees. Timing can
                differ from SCE&apos;s. Desert Community Energy, for example, says it runs its own true-up, at the end of May for
                most of its NEM customers. Ask your CCA how and when it settles.
              </p>

              <h2>Solar Billing Plan customers: monthly, not annual</h2>
              <p>
                Systems that applied after the net billing tariff took effect are on SCE&apos;s Solar Billing Plan and must take
                TOU-D-PRIME. The CPUC says those customers pay their bills monthly so they are not surprised by a large annual
                bill; export credits still roll over for 12 months and true up once a year. The differences are laid out in{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={guideLink}>
                  net billing vs. net metering
                </Link>{' '}
                and{' '}
                <Link href="/blog/nem-2-vs-nem-3-california" className={guideLink}>
                  NEM 2.0 vs. NEM 3.0
                </Link>
                , and what exports earn is covered in{' '}
                <Link href="/blog/selling-electricity-back-to-the-grid-price-per-kwh" className={guideLink}>
                  what utilities pay per kWh for solar exports
                </Link>
                .
              </p>
              <p>
                For settlement bills at other utilities, see the{' '}
                <Link href="/solar-problems/true-up-bill-california-explained" className={guideLink}>
                  California true-up bill explainer
                </Link>
                . For why a solar home still gets a monthly SCE bill, read{' '}
                <Link href="/solar-problems/do-i-still-get-a-utility-bill-with-solar" className={guideLink}>
                  whether you still get a utility bill with solar
                </Link>
                ; for SCE&apos;s plans and prices, see{' '}
                <Link href="/blog/sce-rate-schedules" className={guideLink}>
                  SCE rate schedules
                </Link>{' '}
                and{' '}
                <Link href="/blog/why-is-my-sce-bill-so-high" className={guideLink}>
                  why an SCE bill runs high
                </Link>
                ; and to judge whether a battery would pay, the{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={guideLink}>
                  battery payback guide
                </Link>
                .
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

            <SolarInquiry utility="sce" topic="SCE settlement bill" variant="bill" heading="Review a Solar or Battery Plan With Your SCE Bill" />
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
