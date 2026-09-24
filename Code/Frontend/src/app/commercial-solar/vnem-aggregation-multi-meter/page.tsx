import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft } from 'lucide-react';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// 2026-09-23 (topical-authority wave, Tier 2): rewritten to own "virtual net
// metering" (and "virtual net energy metering", "vnem", "aggregate net
// metering"). Replaces unsourced tariff names and an AB 2175 description that
// did not match the chaptered bill: every rule now comes from CPUC Decisions
// 22-12-056 and 23-11-068, the CPUC VNEM page, the text of AB 2175 as
// chaptered (Stats. 2026, ch. 94), SDG&E's NEM page and LADWP's VNEM pilot page.
const path = '/commercial-solar/vnem-aggregation-multi-meter';
const url = `https://ratereliefca.com${path}`;
const title = 'Virtual Net Metering in California: VNEM, VNBT and NEMA';
const h1 = 'Virtual Net Metering in California: How VNEM, the Virtual Net Billing Tariff and Meter Aggregation Work';
const description =
  'How California virtual net metering shares one solar array across tenant meters, what the 2024 Virtual Net Billing Tariff changed, and meter aggregation.';
const published = '2026-04-23';
const updated = '2026-09-23';
const parent = { label: 'Commercial Solar', href: '/commercial-solar' };
const link = 'text-primary underline underline-offset-2';

const adders: [string, string, string, string][] = [
  ['Residential benefiting account, low-income', '$0.090', '$0.093', '$0.000'],
  ['Residential benefiting account, other', '$0.022', '$0.040', '$0.000'],
  ['Nonresidential benefiting account', 'None', 'None', 'None'],
];

const sources: Source[] = [
  { label: 'CPUC: Virtual Net Energy Metering', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/virtual-net-metering' },
  { label: 'CPUC Decision 23-11-068 (Nov. 16, 2023): virtual net billing tariff and aggregation net billing subtariff', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M520/K977/520977266.PDF' },
  { label: 'CPUC information sheet on the VNEM and NEMA proposed decision (Nov. 13, 2023)', url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/net-energy-metering-nem/nemrevisit/vnem-pd-fact-sheet-update-111323.pdf' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'California Legislative Information: AB 2175 (Stats. 2026, ch. 94), amending Public Utilities Code §2827', url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB2175' },
  { label: 'SDG&E: Net Energy Metering (NEM Aggregation closure)', url: 'https://www.sdge.com/solar/net-energy-metering' },
  { label: 'LADWP: Virtual Net Energy Metering Pilot (capacity updated Jan. 5, 2026)', url: 'https://www.ladwp.com/commercial-services/programs-and-rebates-commercial/commercial-solar-programs/virtual-net-metering' },
  { label: 'SGIP 2026 Handbook, Version 3 (ZIP)', url: 'https://www.selfgenca.com/documents/handbook/2026' },
];

const faqs = [
  {
    question: 'What is virtual net metering?',
    answer:
      'It is a billing arrangement that lets the owner of a multi-tenant property share the output of one on-site solar system with tenants. The utility applies bill credits for the system’s energy to each tenant’s and each common area’s monthly bill, in the shares set in an allocation agreement filed with the utility.',
  },
  {
    question: 'Can one solar array credit multiple meters in California?',
    answer:
      'Yes, two ways. Virtual net billing shares one system’s credits across tenant and common-area meters at a multi-tenant property. Aggregation lets one customer with several meters on the same or contiguous property, owned, leased or rented by that customer, apply one system’s credits to all of them, up to 1 MW of generating capacity.',
  },
  {
    question: 'Does virtual net metering still exist under NEM 3.0?',
    answer:
      'Existing VNEM projects keep their terms until their legacy period ends. The CPUC says new applicants since February 15, 2024 take service on the Virtual Net Billing Tariff, which credits exports at hourly avoided-cost values, unless they qualify for the SOMAH or MASH affordable-housing tariffs.',
  },
  {
    question: 'How are credits allocated between meters?',
    answer:
      'By the percentages in the credit allocation form the property files with the utility. Under the Virtual Net Billing Tariff, a residential tenant’s share first offsets that tenant’s own usage in 15-minute intervals, and a nonresidential account receives its share as a dollar credit.',
  },
  {
    question: 'What did AB 2175 change?',
    answer:
      'AB 2175, signed July 16, 2026, adds a requirement to the net metering statute: the CPUC must ensure logistics and manufacturing businesses are eligible to aggregate multiple meters if the CPUC elects to extend the aggregation program. It does not by itself create a new tariff.',
  },
  {
    question: 'Do PG&E and SDG&E treat multifamily virtual net billing differently?',
    answer:
      'The rules come from the same CPUC decision, so the structure is the same. The export adder differs: residential tenants on PG&E’s Virtual Net Billing Tariff started at $0.022 per kWh, or $0.090 if low-income, while SDG&E’s adder is zero because its customers already reached a nine-year payback without it.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function VnemAggregation() {
  return (
    <PublicLayout breadcrumbLabel="Virtual net metering" breadcrumbParent={parent}>
      <ArticleJsonLd variant="Article" domain="crr" headline={h1} url={url} datePublished={published} dateModified={updated} description={description} />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {[{ label: 'Home', href: '/' }, parent].map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                  <span aria-hidden="true">/</span>
                </span>
              ))}
              <span className="text-foreground">{'Virtual net metering'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                Virtual net metering lets one solar system on a multi-tenant property send bill credits to several
                meters, split by an allocation the owner files with the utility. In PG&amp;E, SCE and SDG&amp;E territory,
                new projects since February 15, 2024 use the Virtual Net Billing Tariff, which values exported energy at
                hourly avoided-cost rates. Projects already on the older VNEM tariff keep its terms until their legacy
                period ends.
              </p>
              <p>
                This guide explains virtual net metering and meter aggregation, what the CPUC’s 2022 and 2023 decisions
                changed, how credits are split between meters, what AB 2175 does, and how apartment buildings and
                Los Angeles differ.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'New multi-tenant projects', value: 'Virtual Net Billing Tariff', note: 'For applicants since Feb. 15, 2024. CPUC.' },
                  { label: 'Legacy period', value: '9 years', note: 'Linked to the system, not the tenant. CPUC D.23-11-068.' },
                  { label: 'Residential tenant netting', value: '15-minute intervals', note: 'Nonresidential accounts: no netting. CPUC D.23-11-068.' },
                  { label: 'Aggregation size cap', value: '1 MW', note: 'Public Utilities Code §2827.' },
                ]}
              />

              <h2>What virtual net metering is</h2>
              <p>
                The CPUC describes virtual net energy metering and its successor, the Virtual Net Billing Tariff, as the
                way property owners share the benefits of an on-site renewable generator with their tenants. The utility
                applies bill credits for the system’s energy to the tenants’ and common areas’ individual monthly bills,
                based on a pre-arranged allocation agreement. No master meter or rewiring of tenant meters is needed.
              </p>
              <p>
                The idea started with affordable housing. The CPUC’s 2023 decision traces it to AB 2723 of 2006 and the
                Multifamily Affordable Solar Housing program, which used virtual net metering because it moves the
                benefit of a building owner’s solar to tenants without master-metering hardware.
              </p>

              <h2>Virtual net metering versus meter aggregation</h2>
              <p>
                The two are often confused. In its 2022 net billing decision the CPUC kept them as separate subtariffs,
                agreeing they serve different purposes: virtual net metering mainly for multi-tenant properties, and
                net energy metering aggregation, or NEMA, mainly for agricultural customers.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Virtual net metering</strong> shares one system among different customers at one property, such
                  as an apartment building’s tenants and its common areas, or the tenants of an office building.
                </li>
                <li>
                  <strong>Aggregation</strong> serves one customer with several meters. Public Utilities Code Section
                  2827 lets that customer aggregate the load of meters on the property with the generator and on
                  adjacent or contiguous property the customer solely owns, leases or rents. Parcels split by a street,
                  highway or public thoroughfare count as contiguous if they are otherwise contiguous and under the same
                  ownership. The generator must total 1 MW or less, and the customer pays the utility’s service charges
                  for the extra billing.
                </li>
              </ul>
              <p>
                The 2022 decision also narrowed aggregation for new applicants after NEM 2.0 closed: it limited NEMA to
                customers who already had two or more meters on the date of the decision, and cut the legacy period for
                new VNEM and NEMA customers from 20 years to nine.
              </p>

              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2>The Virtual Net Billing Tariff: what changed in 2024</h2>
              <p>
                In Decision 23-11-068 of November 16, 2023, the CPUC replaced virtual net metering for new customers with
                the Virtual Net Billing Tariff and gave the old tariff a 90-day sunset. The CPUC’s VNEM page says that as
                of February 15, 2024, all new applicants take service on the Virtual Net Billing Tariff unless they
                qualify for the SOMAH or MASH tariffs. The key rules:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Credits split by allocation form.</strong> Bill credits go to benefiting accounts in the
                  proportions on the credit allocation form, apply to import charges from any time period in the monthly
                  bill, and carry forward within the year. Each account is trued up annually.
                </li>
                <li>
                  <strong>Residential tenants net in 15-minute intervals.</strong> A residential tenant’s share of
                  generation first reduces that tenant’s own grid use, and only the net surplus earns export credit. The
                  utilities must give residential benefiting accounts their 15-minute data. Nonresidential accounts get
                  no netting; their share arrives as a dollar credit.
                </li>
                <li>
                  <strong>Exports valued like NEM 3.0.</strong> Export credits use hourly Avoided Cost Calculator values,
                  averaged across the days of each month and split between weekdays and weekends or holidays. Projects
                  enrolling in the first five years lock a nine-year schedule of those values.
                </li>
                <li>
                  <strong>Monthly bills.</strong> Customers pay all charges monthly and remain subject to minimum bills,
                  fixed charges and four non-bypassable charges: public purpose programs, nuclear decommissioning,
                  competition transition and the Wildfire Fund charge.
                </li>
                <li>
                  <strong>A nine-year term tied to the system.</strong> A new owner of the generator continues the
                  original legacy period, and so does a new tenant.
                </li>
                <li>
                  <strong>Storage is welcome.</strong> Adding a battery does not change the system’s tariff status or
                  legacy period, and the system with storage may run in isolation to serve on-site loads during planned
                  or emergency outages.
                </li>
              </ul>

              <h3>The export adder for residential tenants</h3>
              <p>
                As in single-family net billing, the CPUC gave residential benefiting accounts a fixed adder on each
                exported kWh for the first five years of the tariff. Nonresidential accounts get none. Each tenant keeps
                the enrolled amount for nine years, and the adder for new enrollees drops by 20 percent of its starting
                value each year until it reaches zero. All ratepayers fund it through the public purpose program charge.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Starting export adders per kWh under the Virtual Net Billing Tariff, by utility</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Benefiting account</th>
                      <th className="p-3">PG&amp;E</th>
                      <th className="p-3">SCE</th>
                      <th className="p-3">SDG&amp;E</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adders.map(([who, pge, sce, sdge]) => (
                      <tr key={who} className="border-t border-border">
                        <td className="p-3">{who}</td>
                        <td className="p-3">{pge}</td>
                        <td className="p-3">{sce}</td>
                        <td className="p-3">{sdge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                That table is the main difference between utilities for multifamily projects. The decision says SDG&amp;E
                tenants already reach a nine-year payback because of SDG&amp;E’s higher retail rates, so they get no
                adder. The single-family version of the same rules is explained in{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={link}>net billing vs net metering</Link>.
              </p>

              <h2>Aggregation net billing: the successor to NEMA</h2>
              <p>
                The same decision replaced NEMA for new customers with an aggregation net billing subtariff. Like NEMA,
                it spreads one system’s credits across the bills of a customer’s contiguous properties, but credits are
                now in dollars and valued by the hour of export. There is no netting of consumption, net surplus is paid
                and trued up once a year, and customers pay monthly. Residential customers get the same starting adders
                as virtual net billing, $0.022 or $0.090 per kWh with PG&amp;E and $0.040 or $0.093 with SCE, stepping
                down 20 percent a year from their 2024 level; nonresidential customers and all SDG&amp;E customers get
                none.
              </p>
              <p>
                The nine-year legacy period is tied to the generator’s owner. If the owner changes, the new owner has no
                legacy period, unless the new owner is a spouse or domestic partner of the original owner or, for a
                business, an entity still majority-controlled by the same people. In SDG&amp;E territory, the utility
                says NEMA closed to new applications after February 14, 2024, with new applicants moving to Solar Billing
                Plan Aggregation.
              </p>

              <h2>AB 2175: logistics and manufacturing businesses</h2>
              <p>
                AB 2175 was signed on July 16, 2026 and chaptered as Chapter 94, Statutes of 2026. The Legislative
                Counsel’s Digest describes one change to the aggregation rules in Public Utilities Code Section 2827: the
                CPUC must ensure that logistics businesses and manufacturing businesses are eligible customer-generators
                for aggregating multiple meters, if the CPUC extends the program.
              </p>
              <p>
                It is conditional. The bill does not create a new tariff, and it applies only if the CPUC extends
                aggregation. A warehouse or plant owner with
                several meters should watch for the CPUC’s implementing decision before counting on it. Project pricing
                starts from{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>commercial solar cost per watt in California</Link>.
              </p>

              <h2>Apartment buildings: SOMAH, MASH and the 51 percent rule</h2>
              <p>
                For affordable housing, the older tariffs remain. The 2023 decision kept the Multifamily Affordable Solar
                Housing and Solar on Multifamily Affordable Housing tariffs open, unchanged, until their statutory sunset.
                It also fixed three practical problems in those and the legacy VNEM tariff: the utility now adds a new
                tenant automatically when tenancy changes, vacant units may have a zero percent allocation, and adding a
                battery does not affect the system’s tariff status.
              </p>
              <p>
                Owners using the state’s SGIP equity incentive for a multifamily project face one more condition. The
                2026 SGIP Handbook requires at least 51 percent of the solar system’s output to offset tenant load and
                reach tenants as virtual net metering bill credits. The incentive’s current status is on the{' '}
                <Link href="/battery/sgip-battery-rebate-california" className={link}>SGIP battery rebate status page</Link>.
              </p>

              <h2>Los Angeles: LADWP’s own VNEM pilot</h2>
              <p>
                City utilities are outside the CPUC’s tariffs. LADWP runs its own Virtual Net Energy Metering pilot for
                multifamily sites, and it works differently: the property owner sells the solar output to LADWP, at 14.5
                cents per kWh for projects of 10 to 500 kW and 14.0 cents for projects above 500 kW up to 3 MW, and at
                least 40 percent of the proceeds go to on-site tenants. The pilot has 5 MW in total, and LADWP listed 4.14
                MW still available as of January 5, 2026. Single-home rules in Los Angeles are covered in{' '}
                <Link href="/blog/ladwp-net-metering" className={link}>LADWP net metering</Link>.
              </p>

              <h2>Before you design a multi-meter project</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Decide which arrangement fits: virtual net billing for tenants of one property, aggregation for one customer’s own meters on contiguous parcels.</li>
                <li>Confirm the date your project will apply. It decides the tariff, the adder step and the nine-year schedule of export values.</li>
                <li>Draft the credit allocation with tenant turnover and vacant units in mind.</li>
                <li>Ask for 15-minute interval data for the benefiting accounts; residential tenants are netted in those intervals.</li>
                <li>Price storage alongside solar. Evening exports are worth more than midday exports under avoided-cost values, and a battery does not reset the legacy period.</li>
              </ol>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />
            </div>

            {/* The closing ask (2026-09-23): the inline commercial form, in place of
                a link to /commercial-assessment. Heading and intro keep the old box's wording. */}
            <CommercialReviewForm
              heading='Request a commercial solar assessment'
              intro='Tell us about your property and project. California Rate Relief reviews inquiries and forwards suitable projects to an independent provider, subject to service availability.'
              className='mt-12'
            />

            <div className='mt-10'><Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link></div>
            <RelatedGuides
              heading="How the annual settlement actually reads"
              intro="Aggregation changes which meter is credited; it does not remove the annual reconciliation."
              links={[
                { href: "/solar-problems/true-up-bill-california-explained", label: "What the California true-up bill contains" },
                { href: "/solar-problems/do-i-still-get-a-utility-bill-with-solar", label: "Why a bill still arrives every month after solar" },
                { href: "/blog/pge-solar-billing-plan", label: "PG&E’s single-account Solar Billing Plan" },
                { href: "/commercial-solar/sgip-battery-storage", label: "Commercial battery storage and SGIP" },
              ]}
            />
            <HubSpokeLinks hub="nem" currentPath={path} />
            <HubSpokeLinks hub="commercial" currentPath={path} />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="vnem" /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
