import type { Metadata } from 'next';
import { SolarCalculator } from '@/components/growth/SolarCalculator';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const title = 'PG&E vs SCE vs SDG&E: 2026 Rates Compared';
const description = 'PG&E averages 33.7¢/kWh, SCE 34.4¢ and SDG&E 45.5¢ in June 2026. Compare current rates, sample bills, TOU plans and bill-relief options.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog/pge-vs-sce-vs-sdge-rates-compared' },
  openGraph: { title, description, type: 'article', publishedTime: '2026-04-14T00:00:00Z', modifiedTime: '2026-09-10T00:00:00Z', url: 'https://ratereliefca.com/blog/pge-vs-sce-vs-sdge-rates-compared' },
};

const sourceLink = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export default function UtilityRatesCompared() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant='Article' domain='crr' headline={title} url='https://ratereliefca.com/blog/pge-vs-sce-vs-sdge-rates-compared' datePublished='2026-04-14' dateModified='2026-09-10' description={description} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'>
              <Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Utility Rates</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>PG&amp;E vs. SCE vs. SDG&amp;E: Which California Utility Customers Pay the Most in 2026?</h1>
              <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
                <Link href='/author/chad-simpson' className='font-medium text-foreground hover:text-primary'>By Chad Simpson</Link>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-10'>Updated September 10, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                SDG&amp;E had the highest residential average electricity rate of California&apos;s three large investor-owned utilities in June 2026: 45.5 cents per kilowatt-hour. PG&amp;E averaged 33.7 cents and SCE averaged 34.4 cents. Those are utility-wide averages for bundled residential customers. Your actual price depends on your rate plan, when you use electricity, your climate zone, your baseline allowance and whether a community choice aggregator supplies your generation.
              </p>
              <div className='rounded-xl border border-border bg-muted/30 p-5 my-8'>
                <p className='font-semibold text-foreground mb-2'>Quick answer</p>
                <p className='text-foreground/80 m-0'>SDG&amp;E is the most expensive by average residential rate. But SCE&apos;s sample hot-climate bill was the highest in the state&apos;s June report because those households used more electricity. The utility name tells only half the story. Usage and location finish it.</p>
              </div>

              <p className='text-sm text-foreground/70'>Correction September 10, 2026: the earlier version transposed PG&amp;E and SCE’s June averages. The report shows PG&amp;E at 33.7¢/kWh and SCE at 34.4¢/kWh. PG&amp;E’s cooler-zone non-CARE sample bill is $125.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>2026 Rate Comparison</h2>
              <div className='overflow-x-auto mb-5'>
                <table className='w-full border-collapse text-sm'>
                  <thead><tr className='border-b-2 border-border'><th className='text-left py-3 pr-4'>June 2026 measure</th><th className='text-center py-3 px-3'>PG&amp;E</th><th className='text-center py-3 px-3'>SCE</th><th className='text-center py-3 px-3'>SDG&amp;E</th></tr></thead>
                  <tbody>
                    <tr className='border-b border-border'><td className='py-3 pr-4 font-medium'>Residential average rate</td><td className='text-center py-3 px-3'>33.7¢/kWh</td><td className='text-center py-3 px-3'>34.4¢/kWh</td><td className='text-center py-3 px-3'>45.5¢/kWh</td></tr>
                    <tr className='border-b border-border'><td className='py-3 pr-4 font-medium'>Change from early 2026 comparison point</td><td className='text-center py-3 px-3'>−3.7% from Jan. 1</td><td className='text-center py-3 px-3'>−0.1% from Jan. 1</td><td className='text-center py-3 px-3'>−2.0% from Apr. 1</td></tr>
                    <tr className='border-b border-border'><td className='py-3 pr-4 font-medium'>Sample non-CARE bill, hotter zone</td><td className='text-center py-3 px-3'>$168</td><td className='text-center py-3 px-3'>$254</td><td className='text-center py-3 px-3'>$130*</td></tr>
                    <tr><td className='py-3 pr-4 font-medium'>Sample non-CARE bill, cooler zone</td><td className='text-center py-3 px-3'>$125</td><td className='text-center py-3 px-3'>$152</td><td className='text-center py-3 px-3'>$156*</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/60 text-xs mb-8'>
                Source: the California Public Advocates Office&apos;s <a href='https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf' target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Electric Rates Report</a>, pp. 8, 13–15 and 20–24. Rates exclude the California Climate Credit. Sample bills use different reported usage and climate zones, so they are examples, not utility-wide average bills. *SDG&amp;E&apos;s report notes that its coastal sample used more electricity than its desert sample.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Average Rate Is Not Your Rate Plan</h2>
              <p>The 33.7, 34.4 and 45.5 cent figures answer a statewide comparison question. They do not tell you what one kilowatt-hour will cost at 6 p.m. tonight. The state calculates a residential average from utility revenue and residential electricity sales. A time-of-use tariff, by contrast, prices your electricity by season and hour. A baseline credit, CARE or FERA discount, fixed charge, local tax and CCA generation charge can change the total again.</p>
              <p>That is why two neighbors can use the same number of kilowatt-hours and still receive different bills. Before comparing utilities, read the rate-schedule name on the bill and compare the total kWh, billing days and peak-period use.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>PG&amp;E: Similar Average Rate, Different TOU Choices</h2>
              <p>PG&amp;E&apos;s June residential average was 33.7 cents per kWh after a March 1 rate change lowered the residential average by about 3.7% from January 1. PG&amp;E also began showing a Base Services Charge separately in March. PG&amp;E says most customers pay around $24 a month, while CARE and FERA customers generally pay lower amounts. It also says the restructuring lowered per-kWh prices and may raise or lower an individual total bill depending on usage.</p>
              <p>The two broad residential TOU choices have meaningfully different windows. E-TOU-C charges peak prices from 4–9 p.m. every day and includes a baseline credit. E-TOU-D uses a shorter 5–8 p.m. peak on non-holiday weekdays and no baseline credit. Our <Link href='/blog/pge-time-of-use-rates-2026' className={sourceLink}>PG&amp;E time-of-use guide</Link> compares the current schedules and the usage patterns each one tends to fit.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>SCE: Climate and Usage Can Outweigh the Average</h2>
              <p>SCE’s June residential average was 34.4 cents per kWh, above PG&amp;E’s 33.7 cents and below SDG&amp;E’s 45.5 cents. Yet the state&apos;s sample non-CARE bill for hot climate zone 15 was $254, compared with $152 in cooler zone 6. The report says the hotter-zone sample used about 700 kWh a month while the cooler sample used about 385 kWh. Its lower average rate than SDG&amp;E did not overcome much higher consumption in this sample.</p>
              <p>SCE&apos;s June 1 update changed its residential average by only about one-tenth of one percent from January. If an SCE bill jumped sharply, first compare kWh and billing days with the same month last year, then check peak-period use and the selected rate plan.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>SDG&amp;E: The Highest Residential Average Rate</h2>
              <p>SDG&amp;E remained the clear rate outlier at 45.5 cents per kWh in June, even after a June 1 update reduced its residential average by about 2% from April. Its TOU schedules can place a wide spread between on-peak and lower-priced periods. That makes the specific plan and the timing of air conditioning, cooking, laundry and EV charging especially important.</p>
              <p>Start with the current schedule rather than a statewide average. The <Link href='/blog/sdge-time-of-use-rates-2026' className={sourceLink}>SDG&amp;E time-of-use rate guide</Link> explains the major residential options and peak windows.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What a CCA Changes on Your Bill</h2>
              <p>A community choice aggregator buys or generates electricity for customers in participating cities and counties. The investor-owned utility still delivers the power, reads the meter, sends the consolidated bill, maintains the distribution system and handles outages. A CCA customer therefore sees utility delivery charges plus CCA generation charges, and may also see a Power Charge Indifference Adjustment.</p>
              <p>Do not compare only the CCA generation line with a bundled utility&apos;s all-in rate. Use the joint rate comparison for your CCA and rate schedule, or the CPUC&apos;s <a href='https://www.cpuc.ca.gov/RateComparison' target='_blank' rel='noopener noreferrer' className={sourceLink}>California Electric Rate Comparison</a> tool. That is the closest apples-to-apples check.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What to Check Before Considering Solar</h2>
              <ol className='list-decimal pl-6 space-y-3'>
                <li><strong>Compare usage, not just dollars.</strong> Check kWh per day against the same season last year and account for a longer billing cycle.</li>
                <li><strong>Run the utility&apos;s rate comparison.</strong> A plan change can help when your load falls outside the peak window; it cannot fix unusually high consumption by itself.</li>
                <li><strong>Check CARE, FERA and Medical Baseline.</strong> These programs serve different eligibility needs and can be more relevant than a solar quote.</li>
                <li><strong>Separate generation from delivery.</strong> If you have a CCA, compare the combined cost and review the correct joint rate document.</li>
                <li><strong>Model solar from your own interval data.</strong> A useful proposal should show consumption, production, imports, exports, rate-plan assumptions and battery behavior. A statewide savings percentage is not enough.</li>
              </ol>
              <p>If PG&amp;E is the problem you are trying to diagnose, use our <Link href='/blog/why-is-my-pge-bill-so-high' className={sourceLink}>PG&amp;E high-bill checklist</Link> before requesting a system proposal.</p>
            </div>

            <section className='mt-10'><h2 className='text-2xl font-bold'>Use your own bill and service address</h2><p className='mt-3'>Your utility is determined by the service address; this is not a menu of utilities you can switch between. Check the electric provider and any CCA generation charges on your bill. Start with the utility’s plan comparison, then test a solar proposal using the remaining annual utility bill it actually predicts.</p><p className='mt-3'>The calculator below uses your entries. It does not turn the dated statewide averages above into your tariff, solar production or savings.</p></section>
            <SolarCalculator />
            <SolarInquiry topic='California electricity bill comparison' />
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'><TrustedSources domain='crr' variant='compact' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
