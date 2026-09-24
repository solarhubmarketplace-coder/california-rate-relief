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

const path = '/blog/sce-nem-2';
const url = `https://ratereliefca.com${path}`;
const title = 'SCE NEM 2.0 vs Solar Billing Plan: Net Metering Rules';
const h1 = 'SCE NEM 2.0 and the Solar Billing Plan: How Edison Net Metering Works';
const description =
  'SCE NEM 2.0 lasts 20 years from your PTO date on TOU-D-4-9PM. How it differs from SCE’s Solar Billing Plan (NEM 3.0), what ends it early, and export rates.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const sources: Source[] = [
  { label: 'SCE: Net Energy Metering (NEM) Time of Use', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/net-energy-metering' },
  { label: 'SCE: How Solar Billing Plans work', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan' },
  { label: 'SCE: Solar Billing Plan FAQs', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/solar-billing-plan-faqs' },
  { label: 'SCE: Understanding solar export pricing', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/understanding-export-pricing' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'Cal Advocates: Q2 2026 Electric Rates Report', url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf' },
];

const faqs = [
  {
    question: 'What is SCE NEM 2.0?',
    answer:
      'It is the net energy metering tariff Southern California Edison used for solar customers who applied before April 15, 2023. Exports earn bill credits at retail rates, residential customers must be on a time-of-use rate (TOU-D-4-9PM by default), and an account keeps the tariff for 20 years from its Permission to Operate date.',
  },
  {
    question: 'When does SCE NEM 2.0 expire?',
    answer:
      'Twenty years after the system’s Permission to Operate date, according to SCE. When that period ends, or if the account loses eligibility first, SCE says it moves automatically to the Solar Billing Plan or whatever successor plan exists then.',
  },
  {
    question: 'Is the Solar Billing Plan the same as NEM 3.0 at SCE?',
    answer:
      'Yes. The CPUC says the utilities call its net billing tariff, which most people call NEM 3.0, the Solar Billing Plan. SCE customers who installed eligible systems after April 14, 2023 are on it, with TOU-D-PRIME as the rate plan.',
  },
  {
    question: 'Is NEM 2.0 better than NEM 3.0 for SCE customers?',
    answer:
      'For exports, yes. NEM 2.0 credits exported solar at retail rates, while the Solar Billing Plan credits it at hourly values that SCE’s 2025 examples put at about $0.06 per kWh on summer days and $0.03 on winter days. The Solar Billing Plan narrows the gap for households that use their solar at home or store it for the evening.',
  },
  {
    question: 'Can I add panels or a battery and keep SCE NEM 2.0?',
    answer:
      'SCE lets NEM 1.0 and 2.0 customers expand by no more than the greater of 1 kW or 10 percent of the original system size and stay on their program. It says adding only an eligible new energy storage system does not affect the remainder of the 20-year period. Anything larger moves the account to the Solar Billing Plan.',
  },
  {
    question: 'Do I lose SCE NEM 2.0 if I sell my house?',
    answer:
      'SCE says account changes, such as moving in or out of a home with a NEM system or transferring the account to someone else’s name, do not affect the NEM eligibility period of the original system.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function SceNem2Page() {
  return (
    <PublicLayout breadcrumbLabel="SCE NEM 2.0" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'SCE NEM 2.0'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                SCE NEM 2.0 is Southern California Edison’s older net metering tariff. If your solar
                application was in before April 15, 2023, your exports earn credits at retail rates and
                the account keeps that deal for 20 years from its Permission to Operate date. Newer SCE
                systems are on the Solar Billing Plan, SCE’s name for the net billing tariff people
                call NEM 3.0, where exports earn hourly credits that are usually far lower.
              </p>
              <p>
                This guide covers who is on each SCE plan, the rate schedules each one requires, what
                ends NEM 2.0 early, and what the export numbers look like. For the statewide version of
                the comparison, see the <Link href={hub.href} className={link}>NEM 2.0 vs. NEM 3.0 guide</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="SCE solar billing" utility="SCE" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'NEM 2.0 legacy period', value: '20 years from PTO', note: 'Then the account moves to the Solar Billing Plan or its successor. SCE.' },
                  { label: 'NEM 2.0 default rate', value: 'TOU-D-4-9PM', note: 'Residential NEM 2.0 customers must be on a TOU rate. SCE.' },
                  { label: 'Solar Billing Plan rate', value: 'TOU-D-PRIME', note: 'Export credit values locked for 9 years by start year. SCE.' },
                  { label: 'Export bonus before 2028', value: 'About $0.04/kWh', note: 'About $0.09 for income-qualified customers. SCE.' },
                ]}
              />

              <h2>Which SCE plan are you on?</h2>
              <p>
                The date your interconnection application was filed decides it. SCE says NEM 2.0 closed to
                new customers on April 15, 2023, when the Solar Billing Plan took effect, and that NEM 1.0
                had closed to new customers in 2017. Customers who installed an eligible system after
                April 14, 2023 are on the Solar Billing Plan.
              </p>
              <p>
                There was a tail for projects already in line. SCE’s FAQ says a NEM 2.0 application SCE had
                deemed valid had until April 14, 2026 to submit final documents and keep NEM 2.0
                eligibility. That window has now closed.
              </p>
              <p>
                Your bill and your interconnection approval letter show which program the account is on.
                If they don’t match what your installer told you, go with SCE’s records.
              </p>

              <h2>How SCE NEM 2.0 billing works</h2>
              <p>
                Solar you use at home offsets what you would have bought from SCE. What you export earns a
                credit at the retail energy rate for that time-of-use period, and the CPUC says NEM credits
                are applied at retail rates that include generation, distribution and transmission.
              </p>
              <p>
                Residential NEM 2.0 customers must take service on a time-of-use rate. SCE says you are
                billed on TOU-D-4-9PM unless you choose another TOU rate you qualify for, and you can switch
                rates only once every 12 months.
              </p>
              <p>
                NEM 2.0 also carries charges your credits can’t erase. The CPUC says NEM 2.0 customers pay
                non-bypassable charges on the net energy they draw from the grid in each metered interval,
                an hour for residential accounts. Charges and credits roll over for 12 months and settle at
                an annual true-up. If you exported more than you used over the year, the surplus is paid at
                the net surplus compensation rate, which the CPUC puts at about $0.02 to $0.03 per kWh.
              </p>

              <h2>SCE’s Solar Billing Plan (NEM 3.0) in brief</h2>
              <p>
                On the Solar Billing Plan, SCE says customers are on the TOU-D-PRIME rate, pay regular
                monthly charges, including taxes, fees and the Base Services Charge, and receive a
                settlement, or True-Up, bill once a year. Export credits cannot cover set charges such as
                the Base Services Charge.
              </p>
              <p>
                Exports earn Energy Export Credits that vary by hour. SCE says the values are fixed for nine
                years based on the year you began, and its export pricing page lists separate price sets for
                2023, 2024, 2025 and 2026 applicants. Each has a delivery part and a generation part, drawn
                from the CPUC’s Avoided Cost Calculator. If a community choice aggregator supplies your
                power, SCE says to ask the CCA about generation export pricing.
              </p>
              <p>
                SCE’s own 2025 examples show the scale. In summer it lists about $0.06 per kWh for daytime
                exports, $0.21 for the 4–9 p.m. evening window and $0.12 overnight. In winter it lists about
                $0.03, $0.09 and $0.10. Customers who enroll before 2028 also get a bonus of about $0.04 per
                kWh, or about $0.09 for income-qualified households. Those match the starting adders in the
                CPUC’s Decision 22-12-056, $0.040 and $0.093, which step down 20 percent at the end of each
                calendar year until they reach zero.
              </p>
              <p>
                For context, the California Public Advocates Office put SCE’s residential average rate at
                34.4 cents per kWh in June 2026, excluding the Climate Credit, in its Q2 2026 rates report.
                A daytime export worth a few cents is worth far less than a kilowatt-hour you avoid buying.
              </p>

              <h2>What ends SCE NEM 2.0 before 20 years</h2>
              <p>
                The main risk is expanding the system. SCE says NEM 1.0 and 2.0 customers who add no more
                than the greater of 1 kW or 10 percent of the original system size can stay on their
                program. A larger expansion moves the account to the Solar Billing Plan.
              </p>
              <p>
                A battery by itself is treated differently. SCE says adding only an eligible new energy
                storage system does not affect the remainder of the 20-year NEM eligibility period, though
                it also says the capacity limits apply when storage is added to an existing installation.
                Get SCE’s written confirmation for your design before you sign. Our guide to{' '}
                <Link href="/battery/add-powerwall-to-existing-solar" className={link}>adding a battery to existing solar</Link>{' '}
                covers the equipment side.
              </p>
              <p>
                Selling or moving doesn’t restart or end the clock. SCE says moving in or out of a home with a
                NEM system, or transferring the account to someone else’s name, does not affect the NEM
                eligibility period of the original system.
              </p>

              <h2>What happens when the 20 years run out</h2>
              <p>
                SCE says the account continues on NEM until the 20-year period expires or the account loses
                eligibility, whichever comes first, and then moves automatically to the Solar Billing Plan or
                the successor plan available at that time. The CPUC adds that a customer moving to net
                billing from an earlier NEM tariff does not get net billing’s own nine-year legacy period.
              </p>
              <p>
                SCE says NEM 1.0 closed to new customers in 2017, so the earliest SCE NEM 2.0 systems
                reach 20 years around 2037, and the last ones in the mid-2040s. The dedicated page on{' '}
                <Link href="/blog/when-does-nem-2-expire" className={link}>when NEM 2.0 expires</Link>{' '}
                shows how to find your own date and what to plan before it arrives.
              </p>

              <h2>What an SCE NEM 2.0 customer should check this year</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Find your Permission to Operate date and write down the year your legacy period ends.</li>
                <li>Confirm your rate schedule. If you are on TOU-D-4-9PM by default, compare it with the other TOU options SCE offers you, remembering the one-switch-per-year limit.</li>
                <li>Read the true-up history. A rising annual balance usually means usage grew, production fell, or more of your use shifted into 4–9 p.m.</li>
                <li>Before adding panels, measure the change against the greater of 1 kW or 10 percent of your original system.</li>
                <li>If you are weighing a battery, price it for backup first; on NEM 2.0, exports already earn near retail.</li>
              </ol>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Other SCE and NEM questions"
                links={[
                  { href: '/blog/sce-time-of-use-rates-2026', label: 'SCE time-of-use plans and peak hours' },
                  { href: '/blog/nem-3-export-rates-california', label: 'Export credit values under NEM 3.0' },
                  { href: '/blog/what-is-nem-true-up', label: 'How the annual true-up settles' },
                  { href: '/blog/why-is-my-sce-bill-so-high', label: 'A bill-first checklist for high SCE bills' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'Whether a battery pays back on net billing' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry utility="SCE" topic="SCE NEM 2.0 and solar billing" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
