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

const path = '/blog/when-does-nem-2-expire';
const url = `https://ratereliefca.com${path}`;
const title = 'When Does NEM 2.0 Expire? The 20-Year Clock Explained';
const h1 = 'When Does NEM 2.0 Expire? How to Find Your Date and Plan for It';
const description =
  'NEM 2.0 expires 20 years after interconnection, so the first accounts end in the mid-2030s. What starts the clock, what ends it early and what comes next.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const sources: Source[] = [
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'SCE: Net Energy Metering (NEM) Time of Use', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/net-energy-metering' },
  { label: 'SCE: Solar Billing Plan FAQs', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/solar-billing-plan-faqs' },
  { label: 'PG&E: Understand your solar bill', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html' },
  { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  { label: 'Tesla: What to expect with Powerwall 3', url: 'https://tesla.com/support/energy/powerwall/learn/what-expect-powerwall-3' },
];

const faqs = [
  {
    question: 'When does NEM 2.0 expire?',
    answer:
      'Twenty years from the date your system was interconnected, under the CPUC’s rules. SCE counts from the Permission to Operate date. NEM 2.0 started in 2016, so the earliest accounts reach 20 years around 2036 to 2037.',
  },
  {
    question: 'Is there a NEM 2.0 deadline I can still meet?',
    answer:
      'No. NEM 2.0 closed to new interconnection applications on April 15, 2023. SCE gave applications it had already deemed valid until April 14, 2026 to submit final documents, and that window has closed. New systems go on the net billing tariff.',
  },
  {
    question: 'What happens when my NEM 2.0 expires?',
    answer:
      'The account moves to the current tariff. SCE says that happens automatically, to the Solar Billing Plan or whatever successor plan exists then. The CPUC says customers who move to net billing from an earlier NEM tariff do not get net billing’s nine-year legacy period.',
  },
  {
    question: 'Does selling my house end NEM 2.0?',
    answer:
      'SCE says moving in or out of a home with a NEM system, or transferring the account to someone else’s name, does not affect the NEM eligibility period of the original system. Ask your utility to confirm the remaining years in writing during escrow.',
  },
  {
    question: 'Can I add a battery without losing NEM 2.0?',
    answer:
      'SCE says adding only an eligible new energy storage system does not affect the rest of the 20-year period, and Tesla says current policy lets NEM 1.0 and 2.0 customers add storage after Permission to Operate. Adding panels beyond your utility’s limit is what ends NEM 2.0 early.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function WhenDoesNem2ExpirePage() {
  return (
    <PublicLayout breadcrumbLabel="When NEM 2.0 expires" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'When NEM 2.0 expires'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                NEM 2.0 expires 20 years after your solar system was interconnected to the grid. That is the
                CPUC’s rule, set in its 2014 transition decision, and it runs account by account, not on one
                statewide date. NEM 2.0 began in 2016, so the first accounts reach their 20 years in the
                mid-2030s. The last ones, from applications filed just before the April 2023 cutoff, run into
                the mid-2040s.
              </p>
              <p>
                Your exact date depends on when your system got Permission to Operate. Here is how to find
                it, what can end NEM 2.0 early, what doesn’t, and what to plan before your account moves to
                the current tariff.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="NEM 2.0 legacy planning" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'NEM 2.0 legacy period', value: '20 years', note: 'From the date of interconnection, under D.14-03-041. CPUC.' },
                  { label: 'Where SCE starts the clock', value: 'Permission to Operate', note: 'Then automatic move to the Solar Billing Plan or successor. SCE.' },
                  { label: 'NEM 2.0 closed to new applications', value: 'April 15, 2023', note: 'Net billing applies to applications from that date. CPUC.' },
                  { label: 'Net billing legacy on transfer', value: 'None', note: 'Customers moving from an earlier NEM tariff don’t get net billing’s 9-year legacy. CPUC.' },
                ]}
              />

              <h2>The rule: 20 years from interconnection</h2>
              <p>
                The CPUC says that under Decision 14-03-041, customers may remain on NEM 2.0 for 20 years from
                the date they interconnected, or switch to the current tariff if they choose. It created NEM 2.0
                in 2016 under AB 327, after NEM 1.0 reached its sunset dates in 2016 and 2017, and closed it to
                new applicants when net billing took effect for applications filed on or after April 15, 2023.
              </p>
              <p>
                SCE spells out the start of the clock: the eligibility period begins on the account’s Permission
                to Operate date. SCE says NEM 1.0 closed to new customers in 2017, so its earliest NEM 2.0
                systems reach 20 years around 2037. SCE also let NEM 2.0 applications it had already deemed
                valid submit final documents until April 14, 2026, so a few SCE systems interconnected as late as
                2026 keep NEM 2.0 into the mid-2040s.
              </p>

              <h2>How to find your own date</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Find the Permission to Operate letter or email from your utility. The date on it is the starting point SCE uses.</li>
                <li>Check your bill or online account for the program name, NEM 1.0, NEM 2.0 or the Solar Billing Plan.</li>
                <li>Add 20 years, and put the year on your calendar.</li>
                <li>Ask the utility to confirm the date in writing if anything about the system changed since installation.</li>
              </ol>

              <h2>What ends NEM 2.0 early</h2>
              <p>
                The common way to lose NEM 2.0 before 20 years is expanding the system too much. SCE lets NEM 1.0
                and 2.0 customers stay on their program if they expand by no more than the greater of 1 kW or 10
                percent of the original system size. Past that, the account moves to the Solar Billing Plan. Other
                utilities set their own limits, so get yours in writing before adding panels, and read our guide
                to{' '}
                <Link href="/blog/adding-solar-panels-existing-system-california" className={link}>adding panels to an existing system</Link>.
              </p>
              <p>
                You can also leave voluntarily. The CPUC’s rule allows NEM 2.0 customers to switch to the current
                tariff. For most homes that would mean giving up retail-rate export credits early, so it rarely
                makes sense without a specific reason.
              </p>

              <h2>What doesn’t end it</h2>
              <p>
                A battery by itself doesn’t. SCE says adding only an eligible new energy storage system to your
                system does not affect the remainder of your 20-year NEM eligibility period, and Tesla’s support
                page says current policy lets NEM 1.0 and 2.0 customers add battery storage after Permission to
                Operate. Keep the solar capacity unchanged, and see{' '}
                <Link href="/battery/add-powerwall-to-existing-solar" className={link}>adding a Powerwall to existing solar</Link>{' '}
                for the design limits.
              </p>
              <p>
                Selling the house doesn’t either, at least at SCE. It says moving in or out of a residence with a
                NEM system, or transferring the account to someone else’s name, does not affect the NEM
                eligibility period of the original system. That is different from net billing, where the CPUC’s
                2022 decision ties the nine-year legacy period to the customer who installed the system.
              </p>

              <h2>What happens on the day it ends</h2>
              <p>
                SCE says a NEM account continues on its current program until the 20-year period expires or the
                account loses eligibility, whichever comes first, and then moves automatically to the Solar
                Billing Plan or the successor plan available at that time. There is no application to file.
              </p>
              <p>
                Two consequences follow. Your exports will be credited at hourly avoided-cost values instead of
                retail rates, which the CPUC says are usually lower. And the CPUC says customers who move to net
                billing from an earlier NEM tariff are not eligible for net billing’s nine-year legacy period, so
                the values you get will be whatever the tariff sets at the time.
              </p>

              <h2>NEM 1.0 accounts are expiring now</h2>
              <p>
                NEM 1.0 has the same 20-year structure, and because it dates to 1996, its oldest accounts have
                already reached the limit. PG&amp;E’s solar bill page says NEM1 customers can remain on NEM1 for
                up to 20 years from interconnection and then transition to the NEM successor tariff, which that
                page lists as NEM2. PG&amp;E’s Solar Billing Plan page, describing business customers from March
                2026, lists those whose 20-year NEM agreement expired among the accounts billed on the Solar
                Billing Plan. If you have an older system, ask PG&amp;E in writing which tariff your account moves
                to and when.
              </p>

              <h2>Planning the years before your date</h2>
              <p>
                The value of solar on NEM 2.0 is front-loaded: while it lasts, midday exports earn close to
                retail. After the switch, the same exports earn far less, and the math starts to favor using solar
                at home or storing it for the evening. That makes the last few NEM 2.0 years a good time to
                decide, without pressure, whether a battery belongs in your plan and what your panels and inverter
                need by then. The{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>export values under net billing</Link>{' '}
                show what your credits will look like after the change.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Related NEM 2.0 questions"
                links={[
                  { href: '/blog/sce-nem-2', label: 'SCE’s NEM 2.0 rules in detail' },
                  { href: '/blog/nem-3-california-timeline', label: 'Every NEM 3.0 date in one timeline' },
                  { href: '/blog/what-happens-to-solar-lease-when-i-sell-california', label: 'Selling a home with leased solar' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'Battery payback after the switch' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry topic="NEM 2.0 legacy planning" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
