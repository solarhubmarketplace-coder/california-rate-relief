import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { GuideShell, Cite } from '@/components/growth/GuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import type { KeyFact } from '@/components/trust/KeyFacts';

const PATH = '/blog/solar-panel-cleaning-california';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar panel maintenance', href: '/solar-panel-maintenance-california' };
const metaTitle = 'Solar Panel Cleaning in California: Is It Worth It?';
const metaDescription =
  'Does cleaning solar panels pay in California? What a UC San Diego study of 186 sites found, when to clean, how to do it safely, and what to ask a cleaner.';

const UCSD = 'https://jacobsschool.ucsd.edu/news/release/1393?id=1393';
const PAPER = 'https://escholarship.org/uc/item/5kd297nm';
const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const NREL_ATB = 'https://atb.nrel.gov/electricity/2024/residential_pv';

const sources: Source[] = [
  { label: 'UC San Diego Jacobs School of Engineering: cleaning solar panels often not worth the cost (July 31, 2013)', url: UCSD },
  { label: 'Mejia and Kleissl, “Soiling losses for solar photovoltaic systems in California,” Solar Energy 95 (2013), 357–363', url: PAPER },
  { label: 'CPUC: California Solar Consumer Protection Guide (maintenance responsibility)', url: CPUC_GUIDE },
  { label: 'CSLB: Solar Smart, license classes for solar work', url: CSLB_SOLAR },
  { label: 'NREL: Annual Technology Baseline 2024, residential PV operation and maintenance', url: NREL_ATB },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Daily loss without rain',
    value: 'Under 0.05%',
    note: 'Average efficiency loss per dry day across 186 California sites (2010 data).',
    source: { publisher: 'UC San Diego', date: UPDATED, url: UCSD },
  },
  {
    label: 'After a 145-day drought',
    value: '7.4% lost',
    note: 'Panels that had not been washed or rained on all summer.',
    source: { publisher: 'UC San Diego', date: UPDATED, url: UCSD },
  },
  {
    label: 'Rain that resets panels',
    value: 'Over 0.1 inch',
    note: 'The study compared output after more than 0.1 inch of rain.',
    source: { publisher: 'UC San Diego', date: UPDATED, url: UCSD },
  },
  {
    label: 'Mid-summer wash, 5 kW home',
    value: 'About $20',
    note: 'Electricity gained before the drought ended, in about 2½ months.',
    source: { publisher: 'UC San Diego', date: UPDATED, url: UCSD },
  },
];

const faqs = [
  {
    question: 'Do solar panels need to be cleaned in California?',
    answer:
      'Most don’t need a regular cleaning. The UC San Diego study found rain of more than 0.1 inch restored panels to clean output, and that the loss built up over a whole dry summer was 7.4 percent after 145 days. The exceptions are bird droppings, panels tilted under five degrees, and homes right beside a highway, factory or farm operation.',
  },
  {
    question: 'How often should I clean solar panels in California?',
    answer:
      'Let your monitoring decide rather than the calendar. If a late-summer month is clearly below the same month last year and the loss disappears after the first real rain, the dirt cost you that difference. Clean before the rains only if that difference is worth more than a cleaning, and clean bird droppings when you see them.',
  },
  {
    question: 'Can I clean solar panels with a garden hose?',
    answer:
      'For ordinary dust, a gentle rinse from the ground is the lowest-risk option. Use normal hose pressure, rinse when the panels are cool, keep water away from wiring and junction boxes, and check the method against your panel maker’s manual. Don’t climb onto a roof to do it; a second-story or steep roof is a job for someone with fall protection.',
  },
  {
    question: 'Is it safe to pressure wash solar panels?',
    answer:
      'Don’t, unless your panel maker’s manual says it is allowed. High-pressure water and hard scrubbing can damage seals and coatings, and a warranty claim is judged against the manufacturer’s own care instructions. Ask any cleaning company what pressure and tools it uses before it starts.',
  },
  {
    question: 'Does my solar warranty cover cleaning?',
    answer:
      'No. Cleaning is maintenance. The CPUC’s consumer guide says owners are responsible for maintenance and repairs unless they buy a maintenance plan or the system comes with one. If you lease the system, the contract says whether cleaning is your job or the owner’s.',
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    modifiedTime: `${UPDATED}T00:00:00Z`,
    url: `https://ratereliefca.com${PATH}`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

export default function SolarPanelCleaningCA() {
  return (
    <PublicLayout breadcrumbLabel="Solar panel cleaning in California" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar panel cleaning in California: when it pays, and how to do it safely"
        url="https://ratereliefca.com/blog/solar-panel-cleaning-california"
        datePublished="2026-04-24"
        dateModified="2026-09-23"
        description="What California research says about dirty solar panels, when a cleaning is worth paying for, how to clean safely without risking the warranty, and what to ask a cleaning company."
      />
      <Header />
      <GuideShell
        title="Solar panel cleaning in California: when it pays, and how to do it safely"
        eyebrow="Solar panel maintenance"
        crumbs={[HUB]}
        crumbLabel="Solar panel cleaning"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="maintenance"
        path={PATH}
        quickCheckTopic="California solar maintenance"
        leadCount={2}
        inquiry={<SolarInquiry topic="California solar maintenance" />}
      >
        <p>
          Usually not on a schedule. In most of California, rain cleans panels well enough, and a UC San Diego
          study found that washing a typical 5 kW home system in mid-summer recovered about $20 of electricity.
          Clean when your monitoring shows a dry-season loss worth more than the cleaning, or promptly for bird
          droppings, ash, or dust from a nearby road, factory or farm.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          We do not sell panel cleaning. Cleaning is one part of upkeep; the rest is in{' '}
          <Link href="/solar-panel-maintenance-california">our solar panel maintenance guide</Link>.
        </p>

        <section>
          <h2>What California’s own soiling study found</h2>
          <p>
            Felipe Mejia and Jan Kleissl at UC San Diego used California Solar Initiative data from 186
            residential and commercial systems, spread from the San Francisco Bay Area to the Mexican border,
            covering 2010. They compared output right after more than 0.1 inch of rain with output during dry
            spells. The paper appeared in the journal <em>Solar Energy</em> in 2013.{' '}
            <Cite publisher="Solar Energy (2013)" href={PAPER} date={UPDATED} />
          </p>
          <p>
            On average, panels lost a little under 0.05 percent of efficiency per day without rain. Panels left
            unwashed through a 145-day summer drought lost 7.4 percent. The university’s release put the payoff
            plainly: for a typical 5 kW home system, a wash halfway through summer would be worth “a mere $20”
            of electricity before the drought ended, and “most homeowners won’t get their money back for hiring
            someone to wash their rooftop panels.”{' '}
            <Cite publisher="UC San Diego, July 2013" href={UCSD} date={UPDATED} />
          </p>
          <p>
            Two details matter for where you live. The researchers found no statistically significant
            difference between regions during the drought period, although sites in the Los Angeles basin and
            the Central Valley had dirtier panels. And panels mounted at less than five degrees of tilt lost more,
            because rain and gravity clear flat glass less well.
          </p>
        </section>

        <section>
          <h2>When cleaning is worth paying for</h2>
          <p>The same researchers named the cases where washing makes sense:</p>
          <ul>
            <li><strong>Bird droppings.</strong> Heavy droppings block light on individual cells and don’t rinse off like dust. If birds nest under the array, see <Link href="/blog/solar-panel-bird-proofing">the bird-proofing guide</Link>.</li>
            <li><strong>Very flat panels.</strong> Arrays tilted less than five degrees, common on low-slope roofs and carports.</li>
            <li><strong>Heavy local dust.</strong> Homes directly beside a highway, factory or agricultural operation.</li>
          </ul>
          <p>
            Ash from a nearby wildfire is not in the study, but it behaves the same way: a visible layer that
            your output data will show. Whatever the cause, test it with numbers:
          </p>
          <ol>
            <li>Compare a dry-season month in your monitoring app with the same month last year.</li>
            <li>Estimate the kWh a cleaning would recover before the next real rain.</li>
            <li>Multiply by what that power is worth to you: your rate per kWh if you would have used it, or your export credit if it would have gone to the grid.</li>
            <li>Compare that with the cleaning quote. If the quote is bigger, wait for rain.</li>
          </ol>
          <p>
            What cleaning quotes depend on, and NREL’s yearly upkeep benchmark, are in{' '}
            <Link href="/blog/solar-panel-maintenance-cost">solar panel maintenance and cleaning costs</Link>.
          </p>
        </section>

        <section>
          <h2>How often to clean solar panels in California</h2>
          <p>
            There is no statewide schedule that fits every roof, and a fixed contract can pay for cleanings the
            rain would have done. For most homes, the practical pattern is to check output at the end of the dry
            season, clean only if the loss is worth it, and deal with droppings or ash when they appear. Homes in
            the dustier cases above may find one cleaning before the rains pays; homes with steeply tilted panels
            in a clean area may never need one.
          </p>
        </section>

        <section>
          <h2>How to clean panels yourself without damaging them</h2>
          <p>If your panels are reachable from the ground and your manual allows it, this is what you need:</p>
          <ul>
            <li>A garden hose at normal pressure, or a soft brush or sponge on an extension pole.</li>
            <li>Purified or deionized water if your tap water leaves spots.</li>
            <li>Your panel maker’s manual, open to the cleaning section.</li>
            <li>A cool time of day, such as early morning, so cold water doesn’t hit hot glass.</li>
          </ul>
          <p>And what to avoid:</p>
          <ul>
            <li>Walking or kneeling on panels, or working on a roof without fall protection.</li>
            <li>Pressure washers, scrapers, abrasive pads and harsh detergents, unless the manual approves them.</li>
            <li>Spraying water into junction boxes, connectors or under the array.</li>
            <li>Forcing off ice or snow on mountain homes; let it melt.</li>
          </ul>
          <p>
            Your panel maker’s manual is the standard a warranty claim is judged against, so follow its method
            over any general advice, including this page’s.
          </p>
        </section>

        <section>
          <h2>Hiring a solar panel cleaner</h2>
          <p>Ask before anyone gets on the roof:</p>
          <ul>
            <li>What water pressure, water type and tools will you use?</li>
            <li>Can you show a certificate of liability insurance?</li>
            <li>Who pays if a panel, tile or gutter is damaged?</li>
            <li>Will you compare output before and after?</li>
          </ul>
          <p>
            A cleaner should wash, not repair. Anything that touches wiring, connectors, mounts or panel
            positions is solar work, and the Contractors State License Board’s advice is: “Do not use a
            contractor who is not licensed to perform solar work.”{' '}
            <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} /> If a cleaner reports broken glass or loose
            wiring, get it checked by a licensed contractor; <Link href="/blog/solar-panel-repair-cost">our repair cost guide</Link>{' '}
            explains what drives that bill.
          </p>
        </section>

        <section>
          <h2>Cleaning, warranties and leases</h2>
          <p>
            Cleaning is maintenance, and the CPUC’s consumer guide says that “unless you purchase a maintenance
            plan or your system comes with one, you will be responsible for any maintenance and repairs.”{' '}
            <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} /> If a company owns your system under a
            lease or PPA, check the contract before hiring anyone: it says whether cleaning is your job, and a
            third party on a leased array can start a dispute.
          </p>
        </section>

        <section>
          <h2>If cleaning doesn’t bring output back</h2>
          <p>
            A loss that stays after a rain or a wash is not dirt. A drop on one panel or one string points to
            shade, damage or a failed microinverter; a sudden drop across the whole system points to the
            inverter. Work through <Link href="/solar-problems/solar-panels-not-producing-enough">the checks for panels that under-produce</Link>,
            and remember that a lower December is normal (see{' '}
            <Link href="/solar-problems/solar-production-winter-california">winter production in California</Link>). A
            small, steady decline over years is <Link href="/solar-problems/solar-panel-degradation-california">normal panel degradation</Link>,
            which cleaning can’t reverse.
          </p>
          <p>
            Planning a new roof? Cleaning is a poor reason to get on the roof, but a reroof is a good time to
            deal with everything at once; see <Link href="/blog/is-my-roof-good-for-solar-california">our roof suitability guide</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
