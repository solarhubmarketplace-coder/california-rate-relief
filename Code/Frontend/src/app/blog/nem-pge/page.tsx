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
import { HubUpLink } from '@/components/growth/HubUpLink';

const path = '/blog/nem-pge';
const url = `https://ratereliefca.com${path}`;
const title = 'What Does NEM Mean on a PG&E Bill? NEM Charges Explained';
const h1 = 'NEM on Your PG&E Bill: What It Means and How to Read the Charges';
const description =
  'NEM on a PG&E bill means Net Energy Metering, the solar billing program. What NEM charges are, why you get two statements, and how the True-Up works.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const programs: [string, string, string][] = [
  ['NEM1', 'Original tariff, closed in 2016–2017', 'Up to 20 years from interconnection, then the successor tariff'],
  ['NEM2', 'Applications before April 15, 2023', '20 years from interconnection'],
  ['Solar Billing Plan', 'Applications from April 15, 2023', 'Net billing tariff; Electric Home (E-ELEC) rate; monthly billing'],
];

const sources: Source[] = [
  { label: 'PG&E: Understand your solar bill', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html' },
  { label: 'PG&E: Net Energy Metering bill explainer (transcript)', url: 'https://www.pge.com/assets/pge/transcripts/net-energy-metering-bill-explainer.pdf' },
  { label: 'PG&E: Sample March 2026 NEM2 energy statement', url: 'https://www.pge.com/assets/pge/docs/account/billing-and-assistance/nem-monthly-transition-bill-base-services-charge.pdf' },
  { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
];

const faqs = [
  {
    question: 'What does NEM mean on my PG&E bill?',
    answer:
      'NEM stands for Net Energy Metering, the program that bills a home with solar on the difference between the electricity it uses from PG&E and the electricity its system sends back. If NEM appears on your bill, your account is enrolled in a solar billing program.',
  },
  {
    question: 'What are NEM charges on a PG&E bill?',
    answer:
      'They are the net energy charges, or credits, for each billing period after PG&E subtracts your solar exports from your usage. On NEM1 and NEM2 accounts they carry forward for 12 billing cycles, and the year-to-date total is paid at the annual True-Up.',
  },
  {
    question: 'Why do I get two bills from PG&E with solar?',
    answer:
      'PG&E says NEM customers currently receive two monthly documents: an Energy Statement showing what you pay that month, and a Detail of Bill showing cumulative charges that are paid in your True-Up month.',
  },
  {
    question: 'What is the Base Services Charge on a PG&E solar bill?',
    answer:
      'A monthly charge that replaced the Minimum Electric Charge in March 2026. PG&E says it is about $24 a month for most residential customers, reduced for CARE, FERA and some affordable-housing customers, and not eligible to be offset by generation credits.',
  },
  {
    question: 'Who do I call about my PG&E solar bill?',
    answer:
      'PG&E lists 1-877-743-4112 for solar billing questions on its solar bill page. If a community choice aggregator supplies your generation, some of your solar billing questions go to the CCA.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function NemPgePage() {
  return (
    <PublicLayout breadcrumbLabel="NEM on a PG&E bill" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'NEM on a PG&E bill'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                NEM on a PG&amp;E bill stands for Net Energy Metering, the program that bills a home with solar
                on the difference between what it takes from the grid and what it sends back. PG&amp;E installs a
                net meter to measure that difference. Each billing period, the net result shows as a charge or a
                credit, called your NEM charges, and on older NEM accounts those charges add up over 12 months
                and settle at the annual True-Up.
              </p>
              <HubUpLink path="/blog/nem-pge" />
              <p>
                The rest of this page decodes the PG&amp;E statements line by line: which NEM program you are on,
                why you receive two documents, what the year-to-date figure means, and which charges solar can’t
                touch. If your concern is a charge that looks too high, go straight to{' '}
                <Link href="/blog/why-are-my-nem-charges-so-high" className={link}>the causes of high NEM charges</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="PG&E solar bill review" utility="PG&E" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'NEM stands for', value: 'Net Energy Metering', note: 'Billing on net usage after solar exports. PG&E.' },
                  { label: 'Charges carried forward', value: '12 billing cycles', note: 'Settled on the annual True-Up statement. PG&E.' },
                  { label: 'Base Services Charge', value: 'About $24 a month', note: 'Since March 2026; not offset by solar credits. PG&E.' },
                  { label: 'Solar billing help line', value: '1-877-743-4112', note: 'Listed on PG&E’s solar bill page.' },
                ]}
              />

              <h2>Which PG&amp;E solar program are you on?</h2>
              <p>
                PG&amp;E bills solar under three programs, and the one on your account decides how to read the
                bill. The CPUC says NEM 1.0 took new customers until its 2016–2017 sunset dates, NEM 2.0 took
                applications until April 14, 2023, and applications from April 15, 2023 go on the net billing
                tariff, which PG&amp;E calls the Solar Billing Plan.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">PG&amp;E solar billing programs</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Program on the bill</th>
                      <th className="p-3">Who is on it</th>
                      <th className="p-3">Key terms</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map(([name, who, terms]) => (
                      <tr key={name} className="border-t border-border align-top">
                        <th scope="row" className="p-3 font-medium">{name}</th>
                        <td className="p-3">{who}</td>
                        <td className="p-3">{terms}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                PG&amp;E says Solar Billing Plan residential customers are enrolled automatically once their
                system gets Permission to Operate, and are placed on the Electric Home rate plan.
              </p>

              <h2>The two monthly documents</h2>
              <p>
                PG&amp;E says NEM customers currently receive two separate monthly bills. The Energy Statement
                shows what you pay that month. The Detail of Bill shows cumulative charges that are paid in your
                True-Up month. People often read the second one as money due now, and it isn’t.
              </p>
              <p>
                On a NEM2 account, PG&amp;E says you pay each month only the service charge and any gas or
                non-energy charges. The energy side is tracked, not collected: your meter is read monthly, the net
                usage for the period appears as a credit or a charge on your NEM Electric Statement, and those
                credits and charges carry forward month to month for 12 billing cycles.
              </p>

              <h2>What the NEM charges line means</h2>
              <p>
                PG&amp;E’s sample March 2026 NEM2 statement includes a chart of how much net energy you generated
                or consumed each month and the associated charge or credit. It defines year-to-date NEM charges
                as the total NEM charges since the start of your annual True-Up period, and notes the monthly
                figure is shown for information and reconciled at True-Up. PG&amp;E’s bill explainer video says
                the same: your year-to-date NEM charges will be paid at your annual True-Up.
              </p>
              <p>
                Read the line as a running tab. A negative number means your credits are ahead. A positive number
                that grows every month means your solar is covering less than your usage, and the balance will be
                due at True-Up. Compare it with the same month last year before assuming something went wrong.
              </p>

              <h2>The Base Services Charge: the part solar can’t offset</h2>
              <p>
                Starting in March 2026, PG&amp;E replaced the monthly Minimum Electric Charge on NEM accounts with
                the Base Services Charge. PG&amp;E says it covers approved infrastructure and maintenance costs for
                connecting to the grid, energy programs, call center services and billing; it is about $24 a
                month for most customers, about $10 more than the old minimum; it is partly offset by lower
                per-kWh prices; and CARE, FERA and certified affordable-housing customers see a reduced charge.
              </p>
              <p>
                PG&amp;E also says it is not eligible to be offset by monthly generation credits, and its sample
                statement says it can’t be offset at True-Up either. So even a solar home that covers its whole
                year will see this charge every month. For the statewide background, see{' '}
                <Link href="/blog/california-24-dollar-fixed-charge-explained" className={link}>California’s new fixed charge explained</Link>.
              </p>

              <h2>The True-Up statement</h2>
              <p>
                At the end of the 12th month, PG&amp;E’s True-Up statement reconciles all your energy charges and
                credits and any net surplus compensation. A balance due appears on the last bill of that 12-month
                cycle. If your system produced more than your home used over the year, PG&amp;E pays for the
                surplus at a CPUC-set rate of about $0.02 to $0.04 per kWh, automatically. By law, PG&amp;E says,
                any remaining credits reset to zero before the next cycle begins.
              </p>
              <p>
                The full mechanics, including how SCE and SDG&amp;E handle the same settlement, are in{' '}
                <Link href="/blog/what-is-nem-true-up" className={link}>what a NEM true-up is</Link>.
              </p>

              <h2>If a community choice aggregator supplies your power</h2>
              <p>
                Many PG&amp;E customers get generation from a CCA while PG&amp;E handles delivery and billing. On a
                solar account that splits the math: PG&amp;E’s explainer says net surplus compensation credits may
                vary if you receive energy from a CCA, and its export price sheets say PG&amp;E’s generation
                credits apply only to customers with bundled PG&amp;E service. Look for the CCA’s section on the
                statement and its own solar billing page.
              </p>

              <h2>On the Solar Billing Plan, the bill reads differently</h2>
              <p>
                If you are on the Solar Billing Plan, you pay energy charges monthly. PG&amp;E says the monthly
                statement shows credits earned for solar sent to the grid and charges for energy PG&amp;E supplied,
                with export credits that vary by time of day, day of the week and season. Credits are not applied
                to non-bypassable charges and demand charges. Leftover credits roll into the annual True-Up. For
                what those credits are worth hour by hour, see{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>PG&amp;E’s NEM 3.0 export values</Link>.
                For the rate you must take, battery rules and how the True-Up works on this plan, see{' '}
                <Link href="/blog/pge-solar-billing-plan" className={link}>how PG&amp;E’s Solar Billing Plan works</Link>.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Other PG&E bill questions"
                links={[
                  { href: '/blog/why-is-my-pge-bill-so-high', label: 'Why a PG&E bill runs high, cause by cause' },
                  { href: '/blog/pge-time-of-use-rates-2026', label: 'PG&E time-of-use plans for 2026' },
                  { href: '/battery/pge-solar-battery-rebate', label: 'Battery rebates for PG&E customers' },
                  { href: '/solar-problems/solar-bill-still-high-california', label: 'When solar didn’t lower the bill' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry utility="PG&E" topic="PG&E solar bill review" variant="bill" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
