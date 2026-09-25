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
// NetBillingGuide kind="timeline" so the dates, deadlines and sources live on
// the route. G10 (merge into /blog/what-is-nem-3-california) is held by the
// Decision 14 default; this URL stays.
const path = '/blog/nem-3-california-timeline';
const url = `https://ratereliefca.com${path}`;
const title = 'NEM 3.0 California Timeline: Every Date and Deadline';
const h1 = 'NEM 3.0 California Timeline: When It Started and the Deadlines Left';
const description =
  'NEM 3.0 took effect for solar applications filed from April 15, 2023. Every date since, the end-of-2027 export bonus deadline, and when legacy periods end.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const past: [string, string][] = [
  ['1996', 'The CPUC creates the first net metering tariff, NEM 1.0.'],
  ['2014', 'Decision 14-03-041 gives NEM customers a 20-year transition period from interconnection.'],
  ['2016–2017', 'NEM 1.0 reaches its sunset dates; NEM 2.0 takes over under AB 327.'],
  ['March 15, 2021', 'Parties file proposals for a NEM 2.0 successor in CPUC proceeding R.20-08-020.'],
  ['December 13, 2021', 'A proposed decision floats a $8/kW monthly Grid Participation Charge. It is not adopted.'],
  ['December 15, 2022', 'The CPUC adopts Decision 22-12-056, the net billing tariff.'],
  ['April 14, 2023', 'Last day to file a NEM 2.0 interconnection application at PG&E, SCE and SDG&E.'],
  ['April 15, 2023', 'Net billing (NEM 3.0) applies to new interconnection applications.'],
  ['December 31, 2023', 'First 20% step-down of the ACC Plus export bonus for new enrollees.'],
  ['August 7, 2025', 'California Supreme Court sends the NEM 3.0 lawsuit back on the standard of review.'],
  ['March 1, 2026', 'PG&E replaces the Minimum Electric Charge on NEM bills with the Base Services Charge.'],
  ['March 9, 2026', 'Court of Appeal affirms the CPUC’s net billing decision on remand.'],
  ['April 14, 2026', 'SCE deadline for already-valid NEM 2.0 applications to submit final documents.'],
];

const ahead: [string, string][] = [
  ['End of 2027', 'Last chance for residential PG&E and SCE applicants to get the export bonus (locked for nine years).'],
  ['About 2028', 'CPUC draft evaluation of net billing due within five years of implementation.'],
  ['2032 onward', 'The first net billing customers’ nine-year legacy periods end.'],
  ['Mid-2030s', 'The first NEM 2.0 accounts reach 20 years and move to the current tariff.'],
];

const sources: Source[] = [
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC: Net Billing Tariff proceeding page', url: 'https://www.cpuc.ca.gov/nbt' },
  { label: 'CPUC: Solar tariff decision press release, Dec. 15, 2022', url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/cpuc-modernizes-solar-tariff-to-support-reliability-and-decarbonization' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'CPUC: December 2021 proposed decision fact sheet', url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/net-energy-metering-nem/nemrevisit/net-billing-tariff-fact-sheet.pdf' },
  { label: 'SCE: Solar Billing Plan FAQs', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/solar-billing-plan-faqs' },
  { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  { label: 'PG&E: Understand your solar bill', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html' },
  { label: 'Court of Appeal: Center for Biological Diversity v. PUC, A167721A (Mar. 9, 2026), via Justia', url: 'https://law.justia.com/cases/california/court-of-appeal/2026/a167721a.html' },
];

const faqs = [
  {
    question: 'When did NEM 3.0 start in California?',
    answer:
      'It applies to solar interconnection applications submitted on or after April 15, 2023, in PG&E, SCE and SDG&E territory. The CPUC adopted it on December 15, 2022, in Decision 22-12-056.',
  },
  {
    question: 'Is there still a NEM 3.0 deadline?',
    answer:
      'The NEM 2.0 cutoff passed on April 14, 2023. The deadline that matters now is for the export bonus: the CPUC says residential PG&E and SCE customers who apply to interconnect before the end of 2027 receive slightly higher export credits for nine years. The bonus shrinks 20 percent at the end of each year until then.',
  },
  {
    question: 'Did NEM 3.0 pass?',
    answer:
      'Yes. The CPUC adopted it in Decision 22-12-056 on December 15, 2022, and in the court challenge that followed, the Court of Appeal affirmed the decision on March 9, 2026.',
  },
  {
    question: 'Does NEM 3.0 apply to LADWP?',
    answer:
      'No. The CPUC’s net billing tariff covers customers of PG&E, SCE and SDG&E, and the CPUC notes that smaller utilities have their own tariffs. If LADWP, SMUD or another city-owned utility serves you, its own solar program applies; check its website.',
  },
  {
    question: 'How long do NEM 3.0 terms last once I sign up?',
    answer:
      'Nine years. The CPUC says the original customer who interconnects a system under net billing is guaranteed the tariff for nine years, and PG&E and SCE lock export credit values by the year you applied.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

function DateTable({ rows, caption }: { rows: [string, string][]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted">
          <tr>
            <th className="p-3">Date</th>
            <th className="p-3">What happened or happens</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([when, what]) => (
            <tr key={when} className="border-t border-border align-top">
              <td className="p-3 font-medium whitespace-nowrap">{when}</td>
              <td className="p-3">{what}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Nem3TimelinePage() {
  return (
    <PublicLayout breadcrumbLabel="NEM 3.0 timeline" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'NEM 3.0 timeline'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                NEM 3.0, officially the net billing tariff, took effect for solar applications submitted on or
                after April 15, 2023 in PG&amp;E, SCE and SDG&amp;E territory. The CPUC adopted it on December
                15, 2022. The NEM 2.0 cutoff has passed, so the deadline that still matters is the end of 2027:
                residential PG&amp;E and SCE customers who apply before then get a bonus on export credits that
                lasts nine years.
              </p>
              <p>
                Below is every date that shaped the tariff, the ones still ahead, and what each means for a
                homeowner with solar or thinking about it. For what the tariff does, see the{' '}
                <Link href={hub.href} className={link}>NEM 2.0 vs. NEM 3.0 comparison</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="NEM 3.0 timing" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'Decision adopted', value: 'December 15, 2022', note: 'D.22-12-056. CPUC.' },
                  { label: 'Applies to applications from', value: 'April 15, 2023', note: 'PG&E, SCE and SDG&E. CPUC.' },
                  { label: 'Export bonus deadline', value: 'End of 2027', note: 'Residential PG&E and SCE applicants; SDG&E excluded. CPUC.' },
                  { label: 'Net billing legacy period', value: '9 years', note: 'For the original customer, from interconnection. CPUC.' },
                ]}
              />

              <h2>How NEM 3.0 came about</h2>
              <p>
                California’s net metering dates to 1996, when the CPUC created NEM 1.0. In 2014 it set a 20-year
                transition period for net metering customers, and in 2016 it created NEM 2.0, which kept retail
                credit for exports but added time-of-use rates, an interconnection fee and non-bypassable charges.
              </p>
              <p>
                The successor to NEM 2.0 was built in CPUC proceeding R.20-08-020. Parties filed proposals on
                March 15, 2021. A December 2021 proposed decision would have added a monthly Grid Participation
                Charge of $8 per kilowatt of solar and moved existing NEM customers to the new tariff after 15
                years. Neither made it into the final version. The CPUC’s December 15, 2022 announcement said the
                adopted decision includes no charges specific to solar customers and has no impact on existing
                rooftop solar customers.
              </p>

              <DateTable rows={past} caption="NEM 3.0 dates to date" />

              <h2>When NEM 3.0 took effect</h2>
              <p>
                The CPUC says customers applying for interconnection on or after April 15, 2023 take service on the
                net billing tariff. The date is the application date, not the installation or Permission to Operate
                date. SCE gave NEM 2.0 applications it had already deemed valid until April 14, 2026 to submit
                final documents and keep NEM 2.0. That tail has now closed as well.
              </p>
              <p>
                The CPUC also moved the rule-making along after adoption. It lists Decision 23-11-068 as planning
                an evaluation of the net billing tariff, and the 2022 decision says the Commission will collect
                three years of data after full implementation and issue a draft evaluation within five years.
              </p>

              <h2>The court challenge, briefly</h2>
              <p>
                Environmental groups challenged the decision in court. The California Supreme Court ruled on
                August 7, 2025 that the lower court had applied too deferential a standard of review and sent the
                case back. On March 9, 2026 the Court of Appeal applied the stricter standard and affirmed the
                CPUC. The full story is in{' '}
                <Link href="/blog/nem-3-lawsuit" className={link}>the NEM 3.0 lawsuit, explained</Link>.
              </p>

              <h2>The deadlines still ahead</h2>
              <DateTable rows={ahead} caption="NEM 3.0 dates still ahead" />
              <p>
                The one with money attached is the export bonus. Decision 22-12-056 set a temporary adder on
                export credits for residential PG&amp;E and SCE customers and cut it 20 percent at the end of each
                calendar year, starting December 31, 2023, until it reaches zero after five years. The CPUC’s page
                says customers who apply to interconnect before the end of 2027 receive it for nine years; PG&amp;E
                says customers must start on the Solar Billing Plan before 2028. Because it shrinks every year, an
                application in 2026 locks in more than one in 2027.
              </p>
              <p>
                Legacy periods end on their own schedule. Net billing guarantees the original customer the tariff
                for nine years, so the first net billing accounts, from 2023, reach that point in 2032. NEM 2.0
                accounts last 20 years from interconnection, which puts the earliest in the mid-2030s; see{' '}
                <Link href="/blog/when-does-nem-2-expire" className={link}>when NEM 2.0 expires</Link>.
              </p>

              <h2>Does NEM 3.0 apply to you?</h2>
              <p>
                It applies if PG&amp;E, SCE or SDG&amp;E serves you and your solar application was filed on or
                after April 15, 2023. It doesn’t apply to an existing NEM 1.0 or 2.0 system still inside its 20
                years, unless the system is expanded past the utility’s limit, which SCE sets at the greater of 1
                kW or 10 percent of the original size. And it doesn’t apply if a city-owned utility such as LADWP
                or SMUD serves you: the CPUC’s tariff covers the three large investor-owned utilities, and smaller
                utilities run their own programs.
              </p>

              <h2>What to do with the dates</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Considering solar at PG&amp;E or SCE: know that each calendar year you wait lowers the export bonus you lock in, and the bonus ends after 2027.</li>
                <li>Already on NEM 2.0: find your Permission to Operate date and add 20 years.</li>
                <li>On net billing: add nine years to your interconnection date to see when your locked values end.</li>
                <li>Everyone: pair the timeline with the <Link href="/blog/nem-3-export-rates-california" className={link}>hourly export values</Link>, which decide how much a battery or a load shift is worth.</li>
              </ul>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Related NEM 3.0 guides"
                links={[
                  { href: '/blog/what-is-nem-3-california', label: 'What NEM 3.0 is, starting from the bill' },
                  { href: '/blog/net-billing-vs-net-metering-california', label: 'What the CPUC’s 2022 decision adopted' },
                  { href: '/solar-panels-california#still-worth-it-nem-3', label: 'Whether solar is still worth it now' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'Battery payback under net billing' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry topic="NEM 3.0 timing" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
