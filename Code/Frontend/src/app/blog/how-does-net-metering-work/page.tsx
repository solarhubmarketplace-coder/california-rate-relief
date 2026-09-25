import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from "@/components/growth/HeroQuickCheck";
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { RATE_SOURCES_CHECKED, rateSources } from '@/data/rate-sources';
import { Byline } from '@/components/trust/Byline';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// 2026-09-23 (Tier 3): the NEM generations table and true-up section now follow
// the CPUC's own comparison, the net metering bill question is answered, and
// the page carries a source list; FaqBlock emits the FAQPage schema.
const sources = rateSources('cpucNbt', 'pgeNemBill', 'pgeSolarBill', 'pgeNscRates', 'ladwpResRates', 'smudResRates', 'smudRateArchive');

const faqs = [
  {
    question: 'How does a net metering bill work in California?',
    answer:
      'It depends on your tariff. On NEM 1.0 and NEM 2.0, charges and export credits roll forward for 12 months and are settled on an annual true-up bill, although PG&E now bills the monthly Base Services Charge each month. On the Net Billing Tariff (NEM 3.0), you pay a bill every month and only leftover export credits roll forward to the annual true-up.',
  },
  {
    question: 'Do you still get an electric bill with net metering?',
    answer:
      'Yes. PG&E sends NEM customers a monthly statement with that month’s amount due, including the Base Services Charge, and a year-to-date summary of solar charges and credits, then a True-Up statement after 12 months. Net billing customers pay monthly. Solar reduces the energy charges; it does not remove the account’s fixed charges.',
  },
  {
    question: 'What happens to extra solar credits at the true-up?',
    answer:
      'On NEM 1.0 and NEM 2.0, surplus energy left at the end of the 12 months is paid at the net surplus compensation rate, which the CPUC puts at roughly 2 to 3 cents per kWh. PG&E’s rate for true-up months in 2025 ranged from 2.919 to 3.396 cents. That is far below the retail rate, so a system sized well beyond your use earns little for the extra.',
  },
  {
    question: 'How long can I stay on net metering?',
    answer:
      'NEM 1.0 and NEM 2.0 customers at PG&E, SCE and SDG&E can stay on their tariff for 20 years from the date their system was interconnected. Net Billing Tariff customers are guaranteed that tariff for nine years.',
  },
];

export const metadata: Metadata = {
  title: "How Does Net Metering Work? Plain-English Guide (2026)",
  description: "Net metering explained in plain English: how export credits and the true-up work, what a California net metering bill shows, and NEM 1.0, 2.0 and 3.0.",
  alternates: { canonical: '/blog/how-does-net-metering-work' },
  openGraph: { title: 'How Does Net Metering Work?', description: 'Plain-English net metering guide for 2026.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', modifiedTime: '2026-09-23T00:00:00Z', url: 'https://ratereliefca.com/blog/how-does-net-metering-work', images: [CRR_SOCIAL_CARD] },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/how-does-net-metering-work');
const CRUMB_LABEL = 'How Does Net Metering Work?';

export default function HowDoesNetMeteringWork() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"How Does Net Metering Work? Plain-English Guide (2026)"} url="https://ratereliefca.com/blog/how-does-net-metering-work" datePublished="2026-04-24" dateModified="2026-09-23" description={"A plain-English explanation of net metering, how it works, how the credits are calculated, the difference between NEM 1.0/2.0/3.0 and net billing, and what"} />
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Solar Basics</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">How Does Net Metering Work? (And Why It&apos;s Not the Same as Net Billing)</h1>
              <Byline updated="2026-09-23" />
              <p className="text-lg text-muted-foreground">Net metering credits the solar you send to the grid at the same retail rate you pay for power you import, then nets the two at the end of each billing period. It is not the same as net billing (NEM 3.0), which credits exports at hourly avoided-cost values the CPUC says are usually lower than the retail rate.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California net metering review" />
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Concept</h2>
              <p>Solar panels don&apos;t produce electricity on a nice, matching-your-usage schedule. They produce most of their output in the middle of the day, when most households use the least. Net metering is the accounting rule that lets you export excess daytime solar to the grid and get credited for it — then pull from the grid at night and apply those credits.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How the Meter Actually Works</h2>
              <p>A bi-directional meter measures electricity flowing in both directions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Inflow</strong> — electricity you draw from the utility (billed).</li>
                <li><strong>Outflow</strong> — excess solar you send back to the grid (credited).</li>
              </ul>
              <p>At the end of each billing period, the utility calculates the net: if you sent more than you consumed, you get a credit carried to the next period. If you consumed more than you sent, you pay the difference.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Net Metering vs Net Billing</h2>
              <p>These sound identical but differ significantly:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Net metering</strong> (NEM 1.0 and 2.0) — exports are credited at the <em>retail</em> rate you pay for imports in that hour, generation, distribution and transmission included, so an exported kWh is worth what an imported one would have cost.</li>
                <li><strong>Net billing</strong> (NEM 3.0) — exports are credited at an hourly <em>avoided cost</em> value that the CPUC says is usually lower than the retail rate, while each kWh you import is billed at your plan&apos;s retail price. The imbalance favors self-consumption.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">California&apos;s NEM Generations</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Version</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Effective</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Export Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">NEM 1.0</td><td className="text-center">1996 to the 2016–2017 sunsets</td><td className="text-center">Retail rate; non-bypassable charges on net annual use</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">NEM 2.0</td><td className="text-center">2016 to April 14, 2023</td><td className="text-center">Retail rate; non-bypassable charges on net use in each hour</td></tr>
                    <tr><td className="py-3 pr-4 font-medium">NEM 3.0 / NBT</td><td className="text-center">Applications from April 15, 2023</td><td className="text-center">Avoided cost (usually below retail, per CPUC)</td></tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-muted-foreground">Source: CPUC, Net Energy Metering and Net Billing, checked September 23, 2026. Applies to PG&amp;E, SCE and SDG&amp;E.</p>
              </div>
              <p>Homeowners who interconnected under NEM 1.0 or 2.0 keep those tariffs for 20 years from their interconnection date, and NEM 2.0 also charges a one-time interconnection fee of $94 to $145 and requires a time-of-use rate. Every PG&amp;E, SCE or SDG&amp;E customer who applied to interconnect on or after April 15, 2023 is on NEM 3.0, the Net Billing Tariff. The three are compared line by line in <Link href="/blog/nem-2-vs-nem-3-california" className="text-primary underline">NEM 1.0 vs. NEM 2.0 vs. NEM 3.0</Link>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Municipal Utilities Run Their Own Rules</h2>
              <p>NEM 3.0 applies only to the three large investor-owned utilities (PG&amp;E, SCE, SDG&amp;E). City-owned utilities write their own solar rules. LADWP still runs net energy metering: its NEM rider credits exports at your rate schedule&apos;s energy price and rolls credits forward, but zeroes any balance left when you close the account. See <Link href="/blog/ladwp-net-metering" className="text-primary underline">how LADWP&apos;s own net metering works</Link>. SMUD moved new solar customers to a Solar and Storage Rate on March 1, 2022 that pays 9.6 cents per kWh for exports at any hour.</p>
              <p>Because an export is credited against the hour it happens in, the rate plan you are on decides what self-consumption is worth. On SDG&amp;E that is set out in <Link href="/blog/sdge-time-of-use-rates-2026" className="text-primary underline">SDG&amp;E time-of-use rates</Link>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How a California Net Metering Bill Works</h2>
              <p>Net metering changes when you pay, not only how much. On <strong>NEM 1.0 and NEM 2.0</strong>, the CPUC describes annual billing: energy charges and export credits roll forward month to month and are settled once a year on the <strong>True-Up</strong> statement. You still get a statement every month. PG&amp;E&apos;s shows that month&apos;s amount due, which now includes the monthly Base Services Charge, plus a year-to-date summary of solar charges and credits and how you are tracking toward the true-up.</p>
              <p>On the <strong>Net Billing Tariff (NEM 3.0)</strong>, you pay monthly. Each month&apos;s imports are netted against that month&apos;s export credits; extra credit rolls forward until the annual true-up. The CPUC made this change so customers are not surprised by one large bill at the end of the year.</p>
              <p>At the true-up, a NEM 1.0 or 2.0 customer who exported more than they used over the 12 months is paid for the surplus at the net surplus compensation rate, which the CPUC puts at roughly 2 to 3 cents per kWh. PG&amp;E&apos;s rate for true-up months in 2025 ran from 2.919 to 3.396 cents. If charges exceed credits, the balance is due on the true-up bill. For a line-by-line walk-through, see <Link href="/solar-problems/true-up-bill-california-explained" className="text-primary underline">the California true-up bill, explained</Link>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/what-is-nem-3-california" className="text-primary underline">What Is NEM 3.0?</Link></li>
                <li><Link href="/blog/net-billing-vs-net-metering-california" className="text-primary underline">Net Billing vs Net Metering</Link></li>
                <li><Link href="/blog/nem-2-vs-nem-3-california" className="text-primary underline">NEM 2.0 vs NEM 3.0</Link></li>
                <li><Link href="/blog/nem-3-california-still-worth-it" className="text-primary underline">Is Solar Still Worth It Under NEM 3.0?</Link></li>
              </ul>
            </div>
            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="nem" currentPath="/blog/how-does-net-metering-work" />
            </div>
          <ArticleCTA />
          <div className="mt-8">
            <SolarInquiry topic="California net metering review" />
          </div>

          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="nem3" /></div>
    </PublicLayout>
  );
}
