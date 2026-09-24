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

const path = '/blog/what-is-nem-true-up';
const url = `https://ratereliefca.com${path}`;
const title = 'What Is a NEM True-Up? How the Annual Solar Bill Works';
const h1 = 'What Is a NEM True-Up? The Annual Solar Settlement, Explained';
const description =
  'A NEM true-up is the yearly bill that settles a solar account’s charges and credits. How it works on NEM 2.0 and NEM 3.0, and what happens to extra credit.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const compare: [string, string, string][] = [
  ['What you pay each month', 'Fixed and monthly charges; energy charges accrue', 'All charges are billed and due monthly'],
  ['What rolls over', 'Both charges and credits, for 12 months', 'Unused credits, for 12 months'],
  ['What the true-up settles', 'The year’s net energy charges and credits', 'Leftover credits and any surplus'],
  ['Surplus over the year', 'Paid at net surplus compensation', 'Paid at net surplus compensation'],
  ['Credits left after true-up', 'Reset to zero (PG&E)', 'Reset or adjusted at settlement'],
];

const sources: Source[] = [
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'PG&E: Understand your solar bill', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html' },
  { label: 'PG&E: Net Energy Metering bill explainer (transcript)', url: 'https://www.pge.com/assets/pge/transcripts/net-energy-metering-bill-explainer.pdf' },
  { label: 'SCE: How Solar Billing Plans work', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan' },
  { label: 'SCE: Solar Billing Plan FAQs', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/solar-billing-plan-faqs' },
  { label: 'SDG&E: Understanding your solar bill', url: 'https://www.sdge.com/solar/solar-billing-plan/UnderstandingYourSolarBill' },
];

const faqs = [
  {
    question: 'What is a NEM true-up?',
    answer:
      'It is the annual statement that settles a solar customer’s energy charges and credits for the past 12 months. On NEM 1.0 and NEM 2.0 accounts it is when the year’s accumulated energy charges come due; on the net billing tariff it settles the credits left over after a year of monthly bills.',
  },
  {
    question: 'When is my true-up month?',
    answer:
      'At the end of the 12th month of your billing cycle, according to PG&E. The month is set by your account’s cycle, so check your monthly NEM statement or ask your utility rather than assuming it falls in December.',
  },
  {
    question: 'What happens to extra solar credits at true-up?',
    answer:
      'If you produced more than you used over the 12 months, the surplus is paid at the net surplus compensation rate, which PG&E puts at about $0.02 to $0.04 per kWh and the CPUC at about $0.02 to $0.03. PG&E says any remaining credits then reset to zero before the next 12-month cycle.',
  },
  {
    question: 'Can I avoid a big true-up bill?',
    answer:
      'On the net billing tariff, the CPUC requires monthly payment so customers are not surprised by a large annual bill. On NEM 2.0, watch the year-to-date NEM charges on each monthly statement so the true-up total isn’t a surprise, and look into why they are growing.',
  },
  {
    question: 'Do CCA customers get a separate true-up?',
    answer:
      'Your community choice aggregator handles the generation side of your solar billing. PG&E notes that net surplus compensation may vary for CCA customers, and SCE says CCA and direct access customers are not eligible for net surplus compensation from SCE. Check your CCA’s own solar billing rules.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function WhatIsNemTrueUpPage() {
  return (
    <PublicLayout breadcrumbLabel="What is a NEM true-up" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'What is a NEM true-up'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                A NEM true-up is the once-a-year statement that settles a solar customer’s account. Through the
                year, your utility tracks the electricity you pull from the grid and the solar you send back.
                At the true-up it adds up the 12 months, bills any balance you owe, pays for any surplus at a
                low wholesale-based rate, and starts the count over. How much is left to settle depends on
                whether you are on NEM 2.0 or the newer net billing tariff.
              </p>
              <p>
                This page explains the mechanics at PG&amp;E, SCE and SDG&amp;E, what happens to leftover
                credits, and how to keep the true-up from being a surprise. If your true-up is already high
                and you want the causes, go to{' '}
                <Link href="/blog/why-are-my-nem-charges-so-high" className={link}>why NEM charges run high</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="Solar true-up review" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'True-up period', value: '12 billing cycles', note: 'Statement arrives at the end of the 12th month. PG&E.' },
                  { label: 'Surplus pay rate', value: 'About $0.02–$0.04/kWh', note: 'Net surplus compensation. PG&E; the CPUC cites $0.02–$0.03.' },
                  { label: 'Leftover credits', value: 'Reset to zero', note: 'By law, before the next 12-month cycle. PG&E.' },
                  { label: 'NEM 3.0 billing', value: 'Monthly', note: 'Credits still roll over to the annual true-up. CPUC.' },
                ]}
              />

              <h2>How a true-up works, step by step</h2>
              <p>
                PG&amp;E describes the basic machinery. A net meter measures the difference between what your
                system produces and what PG&amp;E supplies. Each billing period, that net amount shows as a
                credit or a charge on your NEM statement, and those credits and charges carry forward month to
                month for 12 billing cycles.
              </p>
              <p>
                At the end of the 12th month, the True-Up statement reconciles all the energy charges and
                credits, plus any net surplus compensation for the cycle. If you owe money after everything is
                netted, PG&amp;E says the balance appears on the last bill of that 12-month cycle. Then any
                remaining credits reset to zero, which PG&amp;E says is required by law, and a new cycle begins.
              </p>
              <p>
                A true-up is not a penalty or a special fee. It is the moment the utility stops carrying the
                year’s energy balance forward and settles it.
              </p>

              <h2>On NEM 1.0 and NEM 2.0: most of the energy bill waits for the true-up</h2>
              <p>
                The CPUC describes NEM 1.0 and NEM 2.0 as annual billing with an annual true-up, where both
                charges and credits roll over for 12 months. Month to month, a NEM 2.0 customer pays the fixed
                and non-energy parts of the bill. PG&amp;E says customers get two monthly documents: an Energy
                Statement showing what is paid that month, and a Detail of Bill showing cumulative charges that
                are paid in the True-Up month.
              </p>
              <p>
                That structure is why a NEM 2.0 true-up can be large. Charges that accrue in winter, when
                production is low, sit on the account until the settlement. The monthly statement’s
                year-to-date NEM charges line tells you where you’re heading; PG&amp;E’s video explainer notes
                that those year-to-date charges are what you pay at the annual True-Up.
              </p>

              <h2>On NEM 3.0: you pay monthly, and the true-up handles credits</h2>
              <p>
                Net billing changed the rhythm. The CPUC says payment for bill charges is due monthly under the
                net billing tariff, so customers are not surprised by a large annual bill after their true-up
                date. In months when solar credits exceed charges, the extra credits roll over to later months
                until the annual true-up.
              </p>
              <p>
                SCE calls its version a settlement bill, or True-Up bill, sent once a year, and says credits
                exceeding usage are adjusted there. SDG&amp;E describes an Annual True-Up Adjustment: through the
                year it credits exports at Avoided Cost Calculator-based export rates, and at the true-up, if
                your exports exceeded your imports, it applies net surplus compensation rates to the excess
                instead, which it says prevents paying twice for the same exports.
              </p>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">NEM 2.0 and net billing true-up compared</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">NEM 1.0 / NEM 2.0</th>
                      <th className="p-3">Net billing (NEM 3.0)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map(([k, a, b]) => (
                      <tr key={k} className="border-t border-border align-top">
                        <th scope="row" className="p-3 font-medium">{k}</th>
                        <td className="p-3">{a}</td>
                        <td className="p-3">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>What happens to extra credits</h2>
              <p>
                Credits only go so far. If you sent more energy to the grid than you used over the year, you are
                paid for the surplus at the net surplus compensation rate. The CPUC says that rate is based on
                the recent market price of energy, set under its 2011 decision implementing AB 920, and puts it
                at about $0.02 to $0.03 per kWh. PG&amp;E’s current page says about $0.02 to $0.04, and SCE’s
                Solar Billing Plan page says about $0.02. PG&amp;E determines eligibility automatically; you
                don’t have to apply.
              </p>
              <p>
                The practical lesson is that oversizing a system to bank credits doesn’t pay. A kilowatt-hour
                credited during the year at retail value on NEM 2.0 is worth far more than the same
                kilowatt-hour paid out as surplus at the true-up.
              </p>

              <h2>Charges the true-up can’t wipe out</h2>
              <p>
                Some lines are outside the netting entirely. PG&amp;E says its Base Services Charge, about $24 a
                month for most customers since March 2026, is not eligible to be offset by generation credits,
                and its sample statement says it cannot be offset at True-Up either. SCE says export credits
                cannot cover set charges such as its Base Services Charge. SDG&amp;E lists the Base Services
                Charge, customer and meter charges, non-bypassable charges and fixed charges as required charges
                its export credits can’t offset.
              </p>

              <h2>If a community choice aggregator supplies your power</h2>
              <p>
                With a CCA, the generation side of your solar billing belongs to the CCA, and so does part of
                the settlement. PG&amp;E’s explainer notes that net surplus compensation may vary if you receive
                energy from a CCA. SCE says CCA and direct access customers are not eligible for net surplus
                compensation from SCE. Read the CCA section of your statement, and your CCA’s own solar page, to
                see when and how it settles.
              </p>

              <h2>Keeping the true-up predictable</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Find your true-up month on the statement and mark it.</li>
                <li>Each month, compare year-to-date NEM charges with the same point last year.</li>
                <li>Check solar production against the installer’s estimate before winter, not after the bill.</li>
                <li>Shift flexible use into sunny hours; on time-of-use rates the hour matters as much as the kWh.</li>
                <li>If the balance keeps rising, work through the causes before adding panels or storage.</li>
              </ol>
              <p>
                For how the settlement shows up on a real PG&amp;E bill, see{' '}
                <Link href="/blog/nem-pge" className={link}>the NEM lines on a PG&amp;E statement</Link>, and for
                utility-by-utility examples,{' '}
                <Link href="/solar-problems/true-up-bill-california-explained" className={link}>California true-up bills explained</Link>.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="More on solar billing"
                links={[
                  { href: '/blog/nem-3-export-rates-california', label: 'What NEM 3.0 exports earn by hour' },
                  { href: '/blog/sce-nem-2', label: 'SCE’s NEM 2.0 and Solar Billing Plan rules' },
                  { href: '/solar-problems/do-i-still-get-a-utility-bill-with-solar', label: 'Why a solar home still gets a monthly bill' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'How a battery changes the settlement' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry topic="Solar true-up review" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
