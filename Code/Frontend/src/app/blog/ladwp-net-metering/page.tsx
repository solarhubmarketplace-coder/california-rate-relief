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

// 2026-09-23 (topical-authority wave, Tier 2): the LADWP spoke of the NEM hub.
// Answers "ladwp net metering" and "does nem 3.0 apply to ladwp". Rules come
// from LADWP's Net Energy Metering rider (rate ordinance page) and its NEM
// Guidelines PDF, the CPUC's net billing page, and Public Utilities Code 2827
// as amended by AB 2175 (Stats. 2026, ch. 94). LADWP's site refuses the
// WebFetch agent (403), so its pages were read with a plain HTTPS client the
// same session.
const path = '/blog/ladwp-net-metering';
const url = `https://ratereliefca.com${path}`;
const title = 'LADWP Net Metering: Does NEM 3.0 Apply in Los Angeles?';
const h1 = 'LADWP Net Metering: How Solar Credits Work in Los Angeles, and Why NEM 3.0 Does Not Apply';
const description =
  'NEM 3.0 does not apply to LADWP. How LADWP net metering credits your solar, what happens to leftover credit, who qualifies, leases, and interconnection.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const compare: [string, string, string][] = [
  ['Who sets the rules', 'LADWP, through the city’s rate ordinance', 'The CPUC'],
  ['How excess solar is credited', 'At your rate schedule’s energy price', 'At hourly avoided-cost values'],
  ['How imports and exports are counted', 'Netted over the billing period', 'Counted separately, with no netting'],
  ['Leftover credit', 'Carries to later bills; zeroed when you stop service', 'Rolls over 12 months, then an annual true-up'],
  ['Export bonus', 'None', 'For PG&E and SCE customers who apply before the end of 2027'],
];

const sources: Source[] = [
  { label: 'LADWP: EV / NEM / REO Rates (Net Energy Metering rider, effective Sept. 1, 2008)', url: 'https://www.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates' },
  { label: 'LADWP: Net Energy Metering Guidelines (revised Aug. 28, 2019; modified Apr. 28, 2021)', url: 'https://www.ladwp.com/sites/default/files/2023-09/NEM%20Guidelines%20(with%20April%202021%20technical%20modification)%20(1).pdf' },
  { label: 'LADWP: Solar Programs', url: 'https://www.ladwp.com/residential-services/solar-programs' },
  { label: 'LADWP: Virtual Net Energy Metering Pilot (capacity updated Jan. 5, 2026)', url: 'https://www.ladwp.com/commercial-services/programs-and-rebates-commercial/commercial-solar-programs/virtual-net-metering' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'California Legislative Information: AB 2175 (Stats. 2026, ch. 94), amending Public Utilities Code §2827', url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB2175' },
  { label: 'SGIP 2026 Handbook, Version 3 (ZIP)', url: 'https://www.selfgenca.com/documents/handbook/2026' },
  { label: 'SGIP program metrics (as of Sept. 23, 2026)', url: 'https://www.selfgenca.com/home/program_metrics/' },
];

const faqs = [
  {
    question: 'Does NEM 3.0 apply to LADWP?',
    answer:
      'No. NEM 3.0 is the CPUC’s net billing tariff for PG&E, SCE and SDG&E, and the CPUC says its net billing rules apply in the territories of the large investor-owned utilities. LADWP customers are billed under LADWP’s own Net Energy Metering rider.',
  },
  {
    question: 'How does LADWP net metering work?',
    answer:
      'LADWP compares the energy it supplied with the energy your system sent back over the billing period. If you used more, you pay for the difference at your normal rate. If you sent back more, you still pay the non-energy monthly charges, and the excess is credited at your rate schedule’s energy price.',
  },
  {
    question: 'What does LADWP pay for excess solar?',
    answer:
      'It pays in bill credit, not cash. The rider calculates the credit using the energy pricing of your rate schedule. A credit balance is applied to later bills, except taxes and minimum charges, until it is used up.',
  },
  {
    question: 'What happens to leftover LADWP solar credits?',
    answer:
      'They keep carrying forward on the bill for the meter that measured the excess. If a balance remains when you end service, LADWP’s rider says it is set to zero and you are owed no further compensation.',
  },
  {
    question: 'Can I lease solar panels and keep LADWP net metering?',
    answer:
      'Yes, if the lease meets LADWP’s guidelines: a term of at least 10 years, an option to own the system by the end, and payments not based on how much energy it produces. The lessor and lessee file a Solar Lease Compliance Form. The guidelines prohibit anyone other than LADWP from selling energy to you.',
  },
  {
    question: 'Is there a size limit for LADWP net metering?',
    answer:
      'Yes. LADWP’s guidelines limit net metering to solar systems of 1 MW or less. Larger systems go on a parallel generation rate, Schedule CG-2 or CG-3.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function LadwpNetMeteringPage() {
  return (
    <PublicLayout breadcrumbLabel="LADWP net metering" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'LADWP net metering'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                NEM 3.0 does not apply to LADWP. The CPUC’s net billing rules cover PG&amp;E, SCE and SDG&amp;E, while
                the Los Angeles Department of Water and Power runs its own net energy metering rider. Under it, if your
                solar sends LADWP more energy than you use in a billing period, the excess is credited at your rate
                schedule’s energy price, and the credit carries forward to later bills.
              </p>
              <p>
                This guide covers why the state’s NEM 3.0 rules stop at the city line, how LADWP’s rider bills you,
                what happens to leftover credit, who qualifies, how leases and rentals are treated, and the steps to get
                connected.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="LADWP net metering" utility="LADWP" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'NEM 3.0 at LADWP', value: 'Does not apply', note: 'CPUC net billing covers the investor-owned utilities.' },
                  { label: 'Excess solar credited at', value: 'Your energy price', note: 'The rate schedule’s energy pricing. LADWP rider.' },
                  { label: 'Leftover credit at move-out', value: 'Set to zero', note: 'No further compensation. LADWP rider.' },
                  { label: 'System size limit', value: '1 MW', note: 'Larger systems go on CG-2 or CG-3. LADWP guidelines.' },
                ]}
              />

              <h2>Does NEM 3.0 apply to LADWP?</h2>
              <p>
                No. NEM 3.0 is the informal name for the net billing tariff the CPUC adopted for the utilities it
                regulates. The CPUC’s own net billing page says it applies in the territories of the large
                investor-owned utilities: PG&amp;E, SCE and SDG&amp;E. LADWP is a city department, and its solar billing
                rules come from the city’s rate ordinance and LADWP’s Net Energy Metering Service Rider.
              </p>
              <p>
                State law draws the same line. Public Utilities Code Section 2827, the net metering statute, was amended
                again this year by AB 2175 (Chapter 94, Statutes of 2026). Its definition of an electric utility says the
                section does not apply to a local publicly owned electric utility that serves more than 750,000
                customers and also conveys water to its customers. That carve-out fits LADWP, the city’s combined
                water and power utility. So headlines about NEM 3.0 export rates, the export bonus or the April 2023
                cutoff are about other utilities’ customers.
              </p>

              <h2>How LADWP net metering bills you</h2>
              <p>
                LADWP’s rider has four billing rules. They work on the billing period as a whole, not hour by hour.
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>If LADWP supplied at least as much energy as your system generated over the billing period, you pay for the net energy at your current rate.</li>
                <li>If your system generated more than LADWP supplied, you still pay all monthly charges except energy-related or per-kWh charges, and LADWP calculates a credit for the energy it received using your rate schedule’s energy pricing.</li>
                <li>A credit balance is applied to each later bill, except taxes and minimum charges, until it is used up. If a balance remains when you end service, it is set to zero and you are owed nothing more for the excess.</li>
                <li>Credit applies only to the bill for the meter that measured the excess energy.</li>
              </ol>
              <p>
                The guidelines add that customers may choose the standard rate or a time-of-use rate. LADWP does not
                publish a separate export price; the credit follows your own schedule’s energy pricing. Current R-1A and
                R-1B prices are in{' '}
                <Link href="/blog/ladwp-rates" className={link}>LADWP rates for 2026</Link>, and how often the bill
                arrives is covered in{' '}
                <Link href="/blog/how-often-does-ladwp-bill" className={link}>how often LADWP bills</Link>.
              </p>

              <h2>LADWP net metering compared with NEM 3.0</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">LADWP net metering compared with the CPUC net billing tariff (NEM 3.0)</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3"></th>
                      <th className="p-3">LADWP net metering</th>
                      <th className="p-3">NEM 3.0 (PG&amp;E, SCE, SDG&amp;E)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map(([label, ladwp, nbt]) => (
                      <tr key={label} className="border-t border-border align-top">
                        <th scope="row" className="p-3 font-medium">{label}</th>
                        <td className="p-3">{ladwp}</td>
                        <td className="p-3">{nbt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                LADWP column from its NEM rider and guidelines; NEM 3.0 column from the CPUC’s net billing page and
                Decision 22-12-056.
              </p>
              <p>
                The practical difference is the value of an exported kWh. Under NEM 3.0 a spring midday export can earn
                less than a cent; under LADWP’s rider it earns the energy price you would otherwise pay. What NEM 3.0
                customers earn hour by hour is in{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>NEM 3.0 export rates</Link>.
              </p>
              <p>
                The trade-off is the leftover credit. There is no annual cash payment for surplus in the rider, and any
                balance left when you close the account is gone. A system sized far beyond your use builds credit you
                may never spend, so size it to your household’s consumption.
              </p>

              <h2>Who can get LADWP net metering</h2>
              <p>
                LADWP’s guidelines limit net metering to solar systems of 1 MW or less; larger systems go on a parallel
                generation rate, Schedule CG-2 or CG-3. The customer must own and operate a permanent system on the
                premises that runs in parallel with LADWP’s grid and offsets part or all of the customer’s own use. The
                energy must be used on site or delivered to LADWP for bill credit; it cannot be sold to anyone else. The
                rider is available on Schedules R-1, A-1, A-2 and A-3, and LADWP urges customers on any rate other than
                R-1A to ask for a rate analysis before installing, because solar can change the rate that applies.
              </p>

              <h3>Leases are allowed; energy sales are not</h3>
              <p>
                A homeowner or long-term tenant can lease a system and still use net metering if the lease runs at least
                10 years, gives the lessee an option to own the system by the end, and does not base payments on the
                energy the system produces. The guidelines say production-based payments could be read as a sale of
                electricity, and that the sale of energy by anyone other than LADWP is prohibited. The lessor and lessee
                sign a Solar Lease Compliance Form, and LADWP can audit the lease. A contract that charges you per kWh
                produced does not fit these rules, so ask LADWP before you sign one.
              </p>

              <h3>Renters</h3>
              <p>
                A tenant can qualify if an electrically separate solar system is connected to the tenant’s own meter. The
                rental agreement must give the tenant all rights to the system’s energy, and rent cannot be tied to the
                system’s production or to LADWP’s per-kWh price. Tenant and owner file a Tenant Customer Compliance Form.
              </p>

              <h2>Getting connected: LADWP’s steps</h2>
              <p>
                LADWP has discontinued its old Solar Incentive Program, so net metering starts with an online application
                at ladwp.com/nem for an interconnection work request number. Projects under 10 kW that need no service
                upgrade and have no battery backup may qualify for a fast-tracked process. The system then needs three
                inspections: the city Department of Building and Safety permit inspection, an LADWP electric service
                representative inspection for systems of 10 kW or more, and an LADWP solar inspection once Building and
                Safety releases the project. The system may stay locked until the inspections are done, any required agreement is signed and a net meter
                is installed.
              </p>
              <p>
                Systems or batteries over 10 kW need an interconnection agreement: a short form up to 30 kW and a long form
                above that. The guidelines say every grid-connected energy storage system needs review and inspection by
                an LADWP distribution engineer and electric service representative, so a battery adds time.
              </p>

              <h2>Batteries, SGIP and other LADWP solar programs</h2>
              <p>
                Because excess solar earns your own energy price rather than a low avoided-cost value, the bill case for
                a battery is weaker in Los Angeles than under NEM 3.0. For most LADWP homes a battery is a backup
                decision first; the trade-offs are in{' '}
                <Link href="/blog/solar-battery-backup-california" className={link}>solar battery backup and storage in California</Link>.
              </p>
              <p>
                LADWP administers its own share of the state’s SGIP equity budget for income-qualified households. The
                2026 SGIP Handbook allocates it $32.4 million, and the program tracker showed it waitlisted on September
                23, 2026; details are on the{' '}
                <Link href="/battery/sgip-battery-rebate-california" className={link}>SGIP status page</Link>.
              </p>
              <p>
                LADWP also runs programs that are not net metering. Its{' '}
                <Link href="/blog/ladwp-solar-rooftops-program" className={link}>Solar Rooftops program</Link>{' '}
                puts utility-owned panels on eligible homes. Its Virtual Net Energy Metering pilot buys the output of
                solar on multifamily sites at 14.5 cents per kWh for 10 to 500 kW projects and 14.0 cents above that, and
                requires at least 40 percent of the proceeds to go to tenants; LADWP listed 4.14 MW of its 5 MW still
                available as of January 5, 2026. The state-regulated version of multi-meter solar is explained in{' '}
                <Link href="/commercial-solar/vnem-aggregation-multi-meter" className={link}>virtual net metering in California</Link>.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Other LADWP and net metering questions"
                links={[
                  { href: '/blog/why-is-my-ladwp-bill-so-high', label: 'Why an LADWP bill runs high' },
                  { href: '/blog/how-does-net-metering-work', label: 'How net metering works, in plain English' },
                  { href: '/blog/ladwp-ev-charging-rates', label: 'LADWP EV charging rates' },
                  { href: '/blog/sce-solar-billing-plan', label: 'What SCE customers next door are on' },
                  { href: '/blog/nem-2-vs-nem-3-california', label: 'NEM 2.0 vs NEM 3.0 for the other utilities' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry utility="LADWP" topic="LADWP net metering" variant="bill" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
