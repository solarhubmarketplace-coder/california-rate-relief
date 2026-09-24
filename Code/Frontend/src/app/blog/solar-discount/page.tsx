// 2026-09-23 new page (claude/t3-misc-20260923) for "solar discount" (Tier 3
// build_page). The page-one results for the query are utility and CCA pages
// for the CPUC's 20% green-tariff bill discounts (Ava, San Jose Clean Energy,
// Anaheim, the CPUC's low-income solar page), so the page answers that intent:
// which provider runs the discount for your address and how you get it. Every
// program term was fetched from its administrator's own page on 2026-09-23.
// Other pages mention DAC-GT and CSGT in a paragraph; none lists the programs
// by provider, which is the question this page answers.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/solar-discount';
const UPDATED = '2026-09-23';
const metaTitle = 'Solar Discount Programs in California: 20% Off, No Panels';
const metaDescription =
  'California’s solar discount programs cut an income-qualified bill 20% with no panels on your roof. Who runs yours: PG&E, SCE, your CCA or your city.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const CPUC_LOW_INCOME = 'https://www.cpuc.ca.gov/solarguide/lowincomesolar';
const CPUC_DAC =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities';
const CPUC_CARE =
  'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/family-electric-rate-assistance-program';
const PGE_GREEN_SAVER =
  'https://www.pge.com/en/save-energy-and-money/energy-saving-programs/green-saver-program.html';
const SCE_GREEN_SAVER = 'https://cloud.sce.com/DAC-enroll/';
const CPA_POWER_SHARE = 'https://cleanpoweralliance.org/powershare/';
const AVA_DISCOUNT =
  'https://avaenergy.org/your-energy-options/rate-discounts-assistance/ava-auto-enrolled-solar-discount/';
const SJCE_ACCESS = 'https://sanjosecleanenergy.org/solar-access/';
const MCE_ACCESS = 'https://www.mcecleanenergy.org/green-access/';
const ANAHEIM_DISCOUNT = 'https://www.anaheim.net/5083/Community-Solar-Discount-Program';

const sources: Source[] = [
  { label: 'CPUC: Low Income Solar Programs (Solar Consumer Protection Guide)', url: CPUC_LOW_INCOME },
  { label: 'CPUC: Solar in Disadvantaged Communities (DAC-GT, CSGT, DAC definition)', url: CPUC_DAC },
  { label: 'CPUC: CARE and FERA discounts and income guidelines', url: CPUC_CARE },
  { label: 'PG&E: Green Saver Program', url: PGE_GREEN_SAVER },
  { label: 'SCE: Green Saver Program enrollment', url: SCE_GREEN_SAVER },
  { label: 'Clean Power Alliance: Power Share', url: CPA_POWER_SHARE },
  { label: 'Ava Community Energy: Ava Solar Discount', url: AVA_DISCOUNT },
  { label: 'San José Clean Energy: Solar Access', url: SJCE_ACCESS },
  { label: 'MCE: Green Access', url: MCE_ACCESS },
  { label: 'City of Anaheim: Community Solar Discount Program', url: ANAHEIM_DISCOUNT },
];

type Row = { provider: string; program: string; discount: string; enroll: string; status: string };
const ROWS: Row[] = [
  { provider: 'PG&E (not CCA customers)', program: 'Green Saver', discount: '20% off the electric bill', enroll: 'PG&E auto-enrolls eligible customers', status: 'At capacity' },
  { provider: 'SCE (not CCA customers)', program: 'Green Saver', discount: '20% off the electric bill', enroll: 'Online application', status: 'Rolling; waitlist in some areas' },
  { provider: 'Clean Power Alliance', program: 'Power Share', discount: '20% monthly bill discount', enroll: 'Automatic for qualified customers', status: 'Waitlist once allocated' },
  { provider: 'Ava Community Energy', program: 'Ava Solar Discount', discount: '20% off, on top of CARE or FERA', enroll: 'Automatic', status: 'Page gives no waitlist' },
  { provider: 'San José Clean Energy', program: 'Solar Access', discount: '20% off the electricity bill', enroll: 'Apply online or by phone', status: 'Full; waitlist, typically about a month' },
  { provider: 'MCE', program: 'Green Access', discount: '20% off', enroll: 'Automatic, by notice, in four ZIP codes', status: 'At maximum capacity' },
  { provider: 'Anaheim Public Utilities', program: 'Community Solar Discount Program', discount: '$20 a month, for up to 12 months', enroll: 'Apply online or by mail', status: 'Subject to available funding' },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What is the solar discount in California?',
    answer:
      'Usually it means one of the CPUC’s green-tariff programs, DAC Green Tariff or Community Solar Green Tariff. Each gives income-qualified residential customers in disadvantaged communities a 20% bill discount tied to solar built somewhere else, so nothing goes on your roof. The CPUC links eligibility to CARE and FERA. PG&E and SCE call their versions Green Saver, and several community choice aggregators run their own.',
  },
  {
    question: 'Who qualifies for a solar discount program?',
    answer:
      'In general, a residential customer who is enrolled in or eligible for CARE or FERA and lives in a disadvantaged community, which the CPUC defines as the top 25 percent of census tracts on CalEnviroScreen. Each administrator adds its own rules: PG&E and SCE exclude customers of community choice aggregators and customers on net energy metering, and MCE limited its program to four ZIP codes.',
  },
  {
    question: 'Can I stack the solar discount with CARE or FERA?',
    answer:
      'Yes, with the programs checked here. PG&E says Green Saver discounts apply on top of CARE or FERA, Ava says its discount is on top of CARE and FERA, San José Clean Energy says stacking can reach up to 55% savings, and Clean Power Alliance says up to 45%.',
  },
  {
    question: 'Can I get the solar discount if I already have solar panels?',
    answer:
      'Usually not. PG&E excludes customers on net energy metering schedules, SCE excludes customers with home solar or on net energy metering, and MCE requires that no solar be installed on the property. The discount is meant for households that cannot put solar on their own roof.',
  },
  {
    question: 'Is a solar discount program the same as free solar panels?',
    answer:
      'No. These programs cut the bill; they install nothing on your house. The CPUC’s no-cost rooftop program for income-qualified homeowners in disadvantaged communities is DAC-SASH, which GRID Alternatives runs. A company offering panels with no money down is offering a lease, PPA or loan, not a discount program.',
  },
  {
    question: 'Is there a discount on solar batteries in California?',
    answer:
      'Not through these bill-discount programs. Battery incentives are separate: SGIP’s income-qualified budgets, PG&E’s $7,500 Permanent Battery Storage Rebate for outage-hit accounts, and some utility and CCA rebates. Most SGIP residential budgets were closed or waitlisted on September 23, 2026.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function SolarDiscountPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar discount programs"
      breadcrumbParent={{ label: 'California solar incentives', href: '/blog/california-solar-tax-credit-2026' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar discount programs in California: 20% off the bill with no panels"
        url={`https://ratereliefca.com${PATH}`}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog/california-solar-tax-credit-2026" className="hover:text-primary">California solar incentives</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Solar discount programs</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Bill discounts · 2026</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          Solar discount programs in California: 20% off the bill with no panels
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          California&rsquo;s solar discount programs take 20% off the electric bill of income-qualified
          households in disadvantaged communities, using solar built somewhere else. Nothing goes on
          your roof, and there is no contract to buy or lease equipment. You generally need to be on,
          or eligible for, CARE or FERA and live in a qualifying census tract. Who runs the discount
          depends on who supplies your electricity: PG&amp;E, SCE, a community choice aggregator or a
          city utility.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <KeyFacts
          facts={[
            { label: 'Green-tariff bill discount', value: '20%', note: 'DAC Green Tariff and Community Solar Green Tariff.', source: { publisher: 'CPUC', date: UPDATED, url: CPUC_LOW_INCOME } },
            { label: 'Where you must live', value: 'Top 25% of tracts', note: 'Disadvantaged community on CalEnviroScreen.', source: { publisher: 'CPUC', date: UPDATED, url: CPUC_DAC } },
            { label: 'CARE discount', value: '30–35%', note: 'On the electric bill; FERA is 18%.', source: { publisher: 'CPUC', date: UPDATED, url: CPUC_CARE } },
            { label: 'How long you can stay', value: 'Up to 20 years', note: 'PG&E Green Saver, while you stay eligible.', source: { publisher: 'PG&E', date: UPDATED, url: PGE_GREEN_SAVER } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>How the solar discount works</h2>
          <p className={p}>
            The discount comes from two CPUC programs. The DAC Green Tariff lets income-qualified
            residential customers in disadvantaged communities &ldquo;who may be unable to install
            solar on their roof&rdquo; benefit from utility-scale clean energy and &ldquo;receive a 20%
            bill discount.&rdquo; The Community Solar Green Tariff does the same with a local solar
            project (<a href={CPUC_LOW_INCOME} className={link}>CPUC</a>). The CPUC ties eligibility
            to CARE and FERA, and it defines a disadvantaged community as a census tract in the top 25
            percent statewide on CalEnviroScreen (<a href={CPUC_DAC} className={link}>CPUC</a>).
          </p>
          <p className={p}>
            You are not buying solar power in the way a rooftop owner does. You keep paying your
            normal bill, and the program takes 20% off it. The solar that backs the discount is
            somewhere else: Ava Community Energy, for example, says it has contracted five solar
            projects totaling 7.28 megawatts for its program, with the first operating in 2026 (
            <a href={AVA_DISCOUNT} className={link}>Ava</a>).
          </p>

          <h2 className={h2}>Who runs the discount for your address</h2>
          <p className={p}>
            This is where most people get stuck. If a community choice aggregator (CCA) buys your
            electricity, PG&amp;E&rsquo;s and SCE&rsquo;s programs will not take you: both exclude CCA
            and Direct Access customers (<a href={PGE_GREEN_SAVER} className={link}>PG&amp;E</a>,{' '}
            <a href={SCE_GREEN_SAVER} className={link}>SCE</a>). Your CCA may run its own version
            instead. Check the name on the generation section of your bill, then find it below. All
            terms were checked on each administrator&rsquo;s page on September 23, 2026.
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                Solar bill-discount programs by provider (checked September 23, 2026)
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Who supplies your power</th>
                  <th className="p-3">Program</th>
                  <th className="p-3">Discount</th>
                  <th className="p-3">How you get in</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.provider} className="border-t">
                    <th scope="row" className="p-3 align-top font-normal">{r.provider}</th>
                    <td className="p-3 align-top">{r.program}</td>
                    <td className="p-3 align-top">{r.discount}</td>
                    <td className="p-3 align-top">{r.enroll}</td>
                    <td className="p-3 align-top">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-foreground/80">
            <li>
              <strong>PG&amp;E Green Saver.</strong> For PG&amp;E electricity customers who live in a
              disadvantaged community or tribal community and are eligible for or enrolled in CARE or
              FERA. PG&amp;E says the discount comes &ldquo;on top of any applicable CARE or FERA
              discounts,&rdquo; that the program is open to renters, and that you can stay up to 20
              years while you remain eligible. It also says the program &ldquo;is currently at
              capacity&rdquo; and that, as the CPUC directed, it auto-enrolls eligible customers.
              Customers on net energy metering do not qualify (
              <a href={PGE_GREEN_SAVER} className={link}>PG&amp;E</a>).
            </li>
            <li>
              <strong>SCE Green Saver.</strong> For SCE customers in a qualified disadvantaged
              community who are eligible for CARE or FERA, with no home solar and not on net energy
              metering. You apply online. SCE says new enrollees usually start within one to two
              billing cycles, but enrollment is unavailable in some areas, which puts you on a
              waitlist (<a href={SCE_GREEN_SAVER} className={link}>SCE</a>).
            </li>
            <li>
              <strong>Clean Power Alliance Power Share.</strong> For residential Clean Power Alliance
              customers on CARE or FERA in a disadvantaged community. It automatically enrolls
              qualified customers, says it serves more than 10,000, and puts new applicants on a
              waitlist once capacity is allocated; its number is (888) 585-3788 (
              <a href={CPA_POWER_SHARE} className={link}>Clean Power Alliance</a>).
            </li>
            <li>
              <strong>Ava Solar Discount.</strong> For Ava account holders eligible for CARE or FERA
              who live in a disadvantaged community, with enrollment automatic (
              <a href={AVA_DISCOUNT} className={link}>Ava</a>).
            </li>
            <li>
              <strong>San José Clean Energy Solar Access.</strong> For customers enrolled in CARE or
              FERA in a qualifying community. You apply online or at 833-432-2454. The program was
              full on September 23, 2026, with a waitlist that San José Clean Energy says typically
              takes about a month (<a href={SJCE_ACCESS} className={link}>San José Clean Energy</a>).
            </li>
            <li>
              <strong>MCE Green Access.</strong> For CARE or FERA customers in four ZIP codes (94565,
              94801, 94804 and 94590) with no solar on the property. MCE says it is at maximum capacity
              and not enrolling more customers (<a href={MCE_ACCESS} className={link}>MCE</a>).
            </li>
            <li>
              <strong>Anaheim Community Solar Discount Program.</strong> A different design from a
              city-owned utility: a $20 monthly bill discount for residential customers at or below
              80% of Orange County median income, backed by city solar at school sites and the
              Anaheim Convention Center. Benefits last up to 12 months, and you can reapply 18 months
              later, subject to available funding (
              <a href={ANAHEIM_DISCOUNT} className={link}>City of Anaheim</a>).
            </li>
          </ul>
          <p className={p}>
            If your provider is not listed, including SDG&amp;E and San Diego Community Power, ask
            your utility or CCA by name for its DAC Green Tariff or Community Solar Green Tariff
            program. Los Angeles customers of LADWP have a separate program, covered in{' '}
            <Link href="/blog/ladwp-solar-program" className={link}>
              LADWP solar programs
            </Link>
            .
          </p>

          <h2 className={h2}>Stacking it with CARE or FERA</h2>
          <p className={p}>
            The solar discount is added to the CARE or FERA discount, not instead of it. CARE takes
            30 to 35 percent off the electric bill and FERA 18 percent, for households under the
            income limits the CPUC publishes each June (<a href={CPUC_CARE} className={link}>CPUC</a>).
            San José Clean Energy says the two stacked can reach up to 55 percent savings, and Clean
            Power Alliance says up to 45 percent. If you are not on CARE or FERA yet, apply for that
            first through your utility; it is the gate to every program on this page. The income
            limits and how to apply are in{' '}
            <Link href="/blog/income-qualified-bill-discount-pge" className={link}>
              PG&amp;E&rsquo;s CARE and FERA guide
            </Link>
            , which applies the same statewide limits.
          </p>

          <h2 className={h2}>When a rooftop system makes more sense, and when it cannot</h2>
          <p className={p}>
            These discounts are designed for households that cannot put solar on their own roof:
            renters, homes with shaded or failing roofs, and apartments. PG&amp;E, SCE and MCE all
            exclude customers who already have solar or are on net energy metering, so you generally
            cannot have both. If you own a single-family home in a disadvantaged community and are
            income-qualified, the CPUC&rsquo;s DAC-SASH program pays for a rooftop system instead,
            with GRID Alternatives running it; see{' '}
            <Link href="/blog/free-solar-panels-california" className={link}>
              what free solar offers mean and how DAC-SASH works
            </Link>
            . Renters have more options in{' '}
            <Link href="/blog/solar-for-renters" className={link}>
              solar for renters in California
            </Link>
            .
          </p>
          <p className={p}>
            A company that calls itself a &ldquo;solar discount&rdquo; program but wants to install
            equipment is selling a lease, PPA or loan, not one of these tariffs. Ask for the
            administrator&rsquo;s name and check it against the table above. For every other
            incentive, start with{' '}
            <Link href="/blog/california-solar-tax-credit-2026" className={link}>
              California solar incentives in 2026
            </Link>{' '}
            and{' '}
            <Link href="/blog/solar-rebates-by-california-utility" className={link}>
              solar and battery rebates by utility
            </Link>
            .
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="Solar discount questions" />
        <HubSpokeLinks hub="incentives" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="California solar discount programs" />
        </div>
        <AuthorBio
          domain="crr"
          palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }}
        />
      </main>
      <Footer />
    </PublicLayout>
  );
}
