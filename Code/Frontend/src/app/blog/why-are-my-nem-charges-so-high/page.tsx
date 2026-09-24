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

const path = '/blog/why-are-my-nem-charges-so-high';
const url = `https://ratereliefca.com${path}`;
const title = 'Why Are My NEM Charges So High? 7 Causes on a Solar Bill';
const h1 = 'Why Are My NEM Charges So High? Seven Things to Check';
const description =
  'High NEM charges usually mean more usage, less solar output, or imports at pricier hours than your exports. How to read the year-to-date figure and fix it.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const sources: Source[] = [
  { label: 'PG&E: Understand your solar bill', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html' },
  { label: 'PG&E: Net Energy Metering bill explainer (transcript)', url: 'https://www.pge.com/assets/pge/transcripts/net-energy-metering-bill-explainer.pdf' },
  { label: 'PG&E: Sample March 2026 NEM2 energy statement', url: 'https://www.pge.com/assets/pge/docs/account/billing-and-assistance/nem-monthly-transition-bill-base-services-charge.pdf' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'PG&E: Energy Export Credit price sheets, 2023–2026 (ZIP)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },
  { label: 'SCE: Net Energy Metering (NEM) Time of Use', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/net-energy-metering' },
];

const faqs = [
  {
    question: 'What are NEM charges on my PG&E bill?',
    answer:
      'They are the net cost of the electricity you drew from the grid after subtracting credits for the solar you sent back, tracked month by month. On a NEM 1.0 or NEM 2.0 account, PG&E carries those charges and credits forward for 12 billing cycles and settles them on the annual True-Up statement. The year-to-date figure is the running total since your True-Up period began.',
  },
  {
    question: 'Why is my PG&E true-up so high?',
    answer:
      'Because the year’s net charges came due at once. PG&E lists the usual reasons: more people in the home, large new appliances, an electric car or a pool, and on the solar side, system size, roof orientation and weather. Start by comparing this year’s monthly net usage with last year’s on the statement chart.',
  },
  {
    question: 'Do solar credits cover the Base Services Charge?',
    answer:
      'No. PG&E says the Base Services Charge, about $24 a month for most residential customers since March 2026, is not eligible to be offset by generation credits. It is paid monthly, separately from the NEM charges that settle at True-Up.',
  },
  {
    question: 'If I export as much as I use, why do I still owe NEM charges?',
    answer:
      'Because credits and charges are priced by time. On NEM 2.0, an export earns the retail rate for the hour it leaves the house, and an import costs the rate for the hour it arrives, so midday exports rarely cancel evening imports dollar for dollar. NEM 2.0 accounts also pay non-bypassable charges on net imports in each hour, which exports can’t erase.',
  },
  {
    question: 'Are NEM charges higher on NEM 3.0?',
    answer:
      'They can be. Net billing customers are billed monthly, and their exports earn hourly credits that are usually below retail. PG&E’s 2026 price sheet for 2025 and 2026 applicants shows about $0.0085 per kWh for an April weekday noon export, so a system that exports most of its spring output earns little against evening imports.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function WhyAreMyNemChargesSoHighPage() {
  return (
    <PublicLayout breadcrumbLabel="Why NEM charges are high" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'Why NEM charges are high'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                High NEM charges usually come down to one of three things: the household is using more
                electricity than the solar was sized for, the system is producing less than it used to, or
                more of your grid use lands in expensive evening hours than your exports earn back. Your NEM
                charges are the net of those, carried forward month by month until the annual true-up, so a
                small monthly gap grows into a large year-to-date number.
              </p>
              <p>
                This page walks through seven causes in the order to check them, using PG&amp;E’s own
                statements as the example. SCE and SDG&amp;E bills use different layouts but the same
                logic. If you want the plain definition first, start with{' '}
                <Link href="/blog/nem-pge" className={link}>what NEM means on a PG&amp;E bill</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="High NEM charges" utility="PG&E" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'How long charges build up', value: '12 billing cycles', note: 'NEM 1.0 and 2.0 charges and credits carry forward to the annual True-Up. PG&E.' },
                  { label: 'Base Services Charge', value: 'About $24 a month', note: 'Since March 2026; not offset by generation credits. PG&E.' },
                  { label: 'Surplus paid at True-Up', value: '$0.02–$0.04/kWh', note: 'Net surplus compensation, set by the CPUC. PG&E.' },
                  { label: 'NEM 3.0 midday export, April', value: 'About $0.0085/kWh', note: 'Weekday noon, 2025–2026 applicants, 2026 values. PG&E price sheet.' },
                ]}
              />

              <h2>First, read the right number</h2>
              <p>
                A PG&amp;E NEM customer gets two kinds of monthly paperwork. PG&amp;E says the Energy
                Statement shows what you pay each month, while the Detail of Bill shows cumulative charges
                paid in your True-Up month. PG&amp;E’s sample March 2026 statement defines year-to-date NEM
                charges as the total NEM charges from the start of your annual True-Up period, and says the
                monthly charge or credit is shown for information and reconciled at True-Up.
              </p>
              <p>
                So a big NEM figure in month ten is not ten months of overbilling. It is the running balance.
                What matters is whether it grew faster this year than last. The statement’s chart of net
                energy by month is where you see that.
              </p>

              <h2>1. The house uses more than it used to</h2>
              <p>
                PG&amp;E’s list of what affects a True-Up starts with the household: another person living
                there, large new appliances, an electric car or a pool. Any of those can turn a system that
                once covered the year into one that falls short. Compare total kWh imported and exported by
                month with the same months last year. A steady rise points to a new continuous load. A jump
                that starts in one month points to a specific purchase.
              </p>

              <h2>2. The system produces less than it did</h2>
              <p>
                On the solar side, PG&amp;E names system size, roof orientation and weather. Production also
                falls when an inverter trips, panels get shaded by new growth, or a string goes offline, and
                none of that shows on the utility bill directly. Check your monitoring app against the
                installer’s original estimate. If production dropped, our guide to{' '}
                <Link href="/solar-problems/solar-panels-not-producing-enough" className={link}>solar panels not producing enough</Link>{' '}
                covers what to check before calling for service.
              </p>

              <h2>3. Your imports land in pricier hours than your exports</h2>
              <p>
                This is the cause people miss. The CPUC says NEM 1.0 and 2.0 credits are applied at the
                retail rates you pay under your rate schedule, and residential NEM 2.0 accounts must be on a
                time-of-use rate. A kilowatt-hour exported at noon earns the midday price. A kilowatt-hour
                pulled from the grid during the evening peak costs the peak price. Your kWh can net to zero
                for the year while your dollars don’t.
              </p>
              <p>
                SCE’s default NEM 2.0 schedule, TOU-D-4-9PM, names its peak window in the rate itself.
                Running the dryer, dishwasher, pool pump or car charger after 4 p.m. on a sunny day moves
                usage from the cheap side of that line to the expensive side.
              </p>

              <h2>4. Some charges can’t be netted away</h2>
              <p>
                The CPUC says NEM customers pay the same non-bypassable charges for public purpose programs,
                bond charges, nuclear decommissioning and competition transition as other customers. On NEM
                2.0 those are billed on the net energy you draw in each metered interval, an hour for homes,
                so exporting later in the day doesn’t cancel them. On the net billing tariff they are billed
                on all imports.
              </p>
              <p>
                Separately, since March 2026 PG&amp;E’s Base Services Charge has replaced the Minimum
                Electric Charge. PG&amp;E says it is about $24 a month for most customers, roughly $10 more
                than the old minimum, partly offset by lower per-kWh prices, and not eligible to be offset by
                generation credits. It is paid monthly, so it shows up even in months when your solar
                covers everything else.
              </p>

              <h2>5. You are on NEM 3.0, where exports earn much less</h2>
              <p>
                If your system was approved under PG&amp;E’s Solar Billing Plan, the net billing tariff, the
                math changes. The CPUC says export credits there are usually lower than retail rates, and
                bills are due monthly. PG&amp;E’s 2026 price sheet for customers who applied in 2025 or 2026
                shows a weekday noon export in April worth about $0.0085 per kWh, generation and delivery
                together, against about $1.15 at 7 p.m. on an August weekday.
              </p>
              <p>
                A system that sends most of its output to the grid at midday will show high charges against
                small credits. Using more solar at home during the day, or storing it for the evening, is
                the lever. The{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>NEM 3.0 export rate breakdown</Link>{' '}
                shows the full pattern.
              </p>

              <h2>6. A community choice aggregator bills part of it</h2>
              <p>
                If a CCA supplies your generation, part of your solar billing sits with the CCA rather than
                PG&amp;E. PG&amp;E’s explainer notes that net surplus compensation may vary if you receive
                energy from a CCA, and its export price sheet says its generation credits apply only to
                customers with bundled PG&amp;E service. Look for a CCA section on the statement before you
                conclude PG&amp;E’s numbers don’t add up.
              </p>

              <h2>7. The system was undersized from the start</h2>
              <p>
                If the first true-up after installation was already high, compare the installer’s estimated
                annual production with your actual annual use before solar. A system designed to cover part
                of your usage will leave NEM charges by design. Credits don’t carry over forever, either:
                PG&amp;E says any remaining credits reset to zero before the next 12-month cycle, and surplus
                energy is paid at net surplus compensation of about $0.02 to $0.04 per kWh.
              </p>

              <h2>What to do next</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Compare this year’s monthly net usage chart with last year’s and circle the months that changed.</li>
                <li>Check production in your monitoring app against the installer’s estimate.</li>
                <li>Move flexible loads into sunny midday hours and out of the evening peak.</li>
                <li>Confirm which tariff you are on, NEM 2.0 or the Solar Billing Plan, before judging the credits.</li>
                <li>If usage grew for good, price added capacity or storage against your tariff’s expansion rules first.</li>
              </ol>
              <p>
                For how the annual reconciliation itself works, see{' '}
                <Link href="/blog/what-is-nem-true-up" className={link}>what a NEM true-up is</Link>. For
                non-solar causes of a high bill, PG&amp;E customers can work through{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={link}>the PG&amp;E high-bill checklist</Link>.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Related solar billing guides"
                links={[
                  { href: '/solar-problems/true-up-bill-california-explained', label: 'How California true-up bills are built' },
                  { href: '/solar-problems/solar-bill-still-high-california', label: 'Why a bill can stay high after solar' },
                  { href: '/blog/pge-time-of-use-rates-2026', label: 'PG&E time-of-use plans compared' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'Whether a battery cuts net billing charges' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry utility="PG&E" topic="High NEM charges review" variant="bill" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
