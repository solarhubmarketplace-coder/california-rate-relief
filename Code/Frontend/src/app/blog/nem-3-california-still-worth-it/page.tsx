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
import { SourceList, QuoteChecklist, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { HubUpLink } from '@/components/growth/HubUpLink';

// 2026-09-23 (topical-authority wave): rebuilt as a self-contained page from
// NetBillingGuide kind="decision" to answer "what is the best approach under
// NEM 3.0?". G11 (301 into /blog/are-solar-panels-worth-it-california) is held
// by the Decision 14 default; this URL stays.
const path = '/blog/nem-3-california-still-worth-it';
const url = `https://ratereliefca.com${path}`;
const title = 'Is Solar Still Worth It Under NEM 3.0? The Best Approach';
const h1 = 'Is Solar Still Worth It Under NEM 3.0? The Approach That Works Now';
const description =
  'Solar can still pay under NEM 3.0 if it is sized to home use, paired with storage or daytime loads, and priced right. Seven steps, with CPUC and LBNL data.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const sources: Source[] = [
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC: Solar tariff decision press release, Dec. 15, 2022', url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/cpuc-modernizes-solar-tariff-to-support-reliability-and-decarbonization' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'PG&E: Energy Export Credit price sheets, 2023–2026 (ZIP)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },
  { label: 'PG&E: Understand your solar bill', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html' },
  { label: 'Cal Advocates: Q2 2026 Electric Rates Report', url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf' },
  { label: 'LBNL: Tracking the Sun, 2024 Edition', url: 'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf' },
  { label: 'LBNL: Distributed Solar and Storage, 2026 Data Update', url: 'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf' },
  { label: 'IRS: FAQs on OBBB changes to residential energy credits', url: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb' },
];

const faqs = [
  {
    question: 'Is solar still worth it under NEM 3.0?',
    answer:
      'It can be. When it adopted net billing in December 2022, the CPUC projected average residential solar customers would save about $100 a month, solar-plus-storage customers at least $136, and that systems would pay off in nine years or less on average. Whether your home matches depends on price, how much solar you use at home, and your utility.',
  },
  {
    question: 'What is the best approach under NEM 3.0?',
    answer:
      'Size the system to what the home uses rather than to maximize exports, use as much solar as possible on site, add storage or shift loads so evening use runs on your own solar, apply before the end of 2027 if you are a PG&E or SCE customer, and compare cash prices before financing.',
  },
  {
    question: 'Do I need a battery with solar under NEM 3.0?',
    answer:
      'Not always, but it is the main lever. The CPUC says customers maximize net billing savings by installing storage, and reports nearly 70 percent of net billing customers had paired a battery with solar by the end of 2024. Without one, shift flexible loads into sunny hours.',
  },
  {
    question: 'Is it better to wait for NEM 3.0 to change?',
    answer:
      'The Court of Appeal upheld the tariff in March 2026, and the CPUC’s own review of it is years out. Meanwhile the export bonus for PG&E and SCE customers shrinks 20 percent at the end of each calendar year and ends for applications after 2027.',
  },
  {
    question: 'Does the federal tax credit still help?',
    answer:
      'Not for a system you own that is installed now. The IRS says the residential clean energy credit is not allowed for expenditures made after December 31, 2025, and treats an expenditure as made when installation is complete.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function Nem3StillWorthItPage() {
  return (
    <PublicLayout breadcrumbLabel="Is solar worth it under NEM 3.0" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'Is solar worth it under NEM 3.0'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                Solar can still be worth it under NEM 3.0, but only when it is designed for how the tariff pays.
                Exported power now earns hourly credits that are usually far below what you pay for electricity,
                so the value comes from solar you use at home. The best approach is to size the system to your own
                usage, run more of the house on it during the day or store it for the evening, and buy at a
                price that works without the federal credit that ended in 2025.
              </p>
              <HubUpLink path="/blog/nem-3-california-still-worth-it" />
              <p>
                When it adopted net billing, the CPUC projected that average residential solar customers would
                save about $100 a month and solar-plus-storage customers at least $136, with systems paying off in
                nine years or less on average. Those were projections for an average home in December 2022. The
                steps below are how to find out whether yours is one of them.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="Solar under NEM 3.0" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'CPUC projected savings (2022)', value: '$100–$136+ a month', note: 'Average solar, and solar with storage, at adoption. CPUC.' },
                  { label: 'PG&E April noon export', value: 'About $0.0085/kWh', note: '2026 value for 2025–2026 applicants. PG&E price sheet.' },
                  { label: 'PG&E residential average rate', value: '33.7¢/kWh', note: 'June 2026, excluding Climate Credit. Cal Advocates.' },
                  { label: 'Net billing customers with batteries', value: 'Nearly 70%', note: 'By end of 2024. CPUC.' },
                ]}
              />

              <h2>Why the old approach stopped working</h2>
              <p>
                Under NEM 2.0, a kilowatt-hour exported at noon earned roughly what you paid for one at night, so
                the usual advice was to cover 100 percent of annual usage and let the grid hold the difference.
                Net billing ended that. The CPUC says export credits are now based on its Avoided Cost Calculator,
                usually lower than retail rates though higher on some late summer evenings.
              </p>
              <p>
                The gap is large. PG&amp;E’s 2026 price sheet for customers who applied in 2025 or 2026 credits a
                weekday noon export in April at about $0.0085 per kWh. The California Public Advocates Office put
                PG&amp;E’s residential average rate at 33.7 cents per kWh in June 2026. A kilowatt-hour of solar
                that displaces a purchase is worth dozens of times more than the same one sent to the grid at
                midday in spring.
              </p>

              <h2>The approach that works under NEM 3.0</h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Size to what you use on site, not to zero out the year.</strong> Extra production mostly
                  becomes low-value exports, and surplus at true-up is paid at about $0.02 to $0.04 per kWh, per
                  PG&amp;E. The{' '}
                  <Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className={link}>system sizing guide</Link>{' '}
                  starts from your bill.
                </li>
                <li>
                  <strong>Move flexible loads into sunny hours.</strong> Laundry, dishwashing, pool pumps, water
                  heating and EV charging that run at midday use your own solar instead of exporting it.
                </li>
                <li>
                  <strong>Price storage for the evening.</strong> The CPUC says customers maximize savings under
                  net billing by adding storage and using or exporting stored energy in high-value hours. It
                  reports nearly 70 percent of net billing customers had paired a battery by the end of 2024.
                </li>
                <li>
                  <strong>Understand the required rate.</strong> Net billing customers must take an electrification
                  time-of-use rate, which the CPUC lists as E-ELEC at PG&amp;E, TOU-D-PRIME at SCE and EV-TOU-5 at
                  SDG&amp;E, with lower off-peak and higher on-peak prices than other plans.
                </li>
                <li>
                  <strong>Apply before the end of 2027 at PG&amp;E or SCE.</strong> The CPUC says residential
                  applicants before then get slightly higher export credits for nine years. The adder started at
                  $0.022 per kWh at PG&amp;E and $0.040 at SCE for non-CARE customers and falls 20 percent at the
                  end of each year.
                </li>
                <li>
                  <strong>Compare the cash price first.</strong> Lawrence Berkeley National Laboratory found storage
                  added roughly $750 to $1,000 per kWh to paired residential systems in 2023, and its 2026 update
                  found paired systems’ median price was $2.1 per watt higher than solar alone among 2025 cash
                  purchases. Those are benchmarks, not quotes.
                </li>
                <li>
                  <strong>Model the monthly bill, not just the annual one.</strong> Net billing is billed monthly,
                  and some charges never go away. PG&amp;E’s Base Services Charge, about $24 a month since March
                  2026, can’t be offset by solar credits.
                </li>
              </ol>

              <h2>When it probably isn’t worth it</h2>
              <p>
                The case weakens when little of your usage happens while the sun is up and you won’t add storage;
                when shade, roof age or orientation cut production; when you expect to move before the system pays
                back; or when the price is far above the benchmarks. It also weakens if you counted on the federal
                credit: the IRS says it is not allowed for expenditures made after December 31, 2025.
              </p>
              <p>
                Utility matters too. In its 2022 decision the CPUC modeled simple paybacks for SDG&amp;E residential
                customers of about 4.7 to 8.4 years without any bonus, because SDG&amp;E’s rates are higher, and it
                set the bonus to target about nine years at PG&amp;E and SCE. Your own quote, not a statewide
                average, decides it.
              </p>

              <h2>Leases, PPAs and $0-down offers</h2>
              <p>
                A lease or power purchase agreement changes who owns the system and who takes on the risk, not how
                net billing credits exports. Compare the payment, escalator, term and what happens when you sell,
                using the{' '}
                <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>cash, loan, lease and PPA comparison</Link>.
                Any quote should show your remaining utility bill under the tariff, not just the new payment.
              </p>

              <QuoteChecklist />

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Work through the numbers"
                links={[
                  { href: '/blog/nem-3-export-rates-california', label: 'NEM 3.0 export values by hour' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'Battery payback under net billing' },
                  { href: '/blog/are-solar-panels-worth-it-california', label: 'Are solar panels worth it in California?' },
                  { href: '/solar-panels-california', label: 'California solar cost and sizing benchmarks' },
                  { href: '/blog/nem-3-california-timeline', label: 'NEM 3.0 dates and the 2027 bonus deadline' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry topic="Solar under NEM 3.0" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
