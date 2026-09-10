import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const title = 'PG&E Time-of-Use Rates: 2026 Plan Guide';
const description = 'Compare PG&E E-TOU-C and E-TOU-D peak hours, March 2026 prices, baseline credits and fit. See which usage patterns can lower your electricity bill.';
const sourceLink = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog/pge-time-of-use-rates-2026' },
  openGraph: { title, description, type: 'article', publishedTime: '2026-09-09T00:00:00Z', modifiedTime: '2026-09-09T00:00:00Z', url: 'https://ratereliefca.com/blog/pge-time-of-use-rates-2026' },
};

export default function PGETimeOfUseRates2026() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant='Article' domain='crr' headline={title} url='https://ratereliefca.com/blog/pge-time-of-use-rates-2026' datePublished='2026-09-09' dateModified='2026-09-09' description={description} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span><Link href='/blog' className='hover:text-primary'>Blog</Link><span>/</span><span className='text-foreground'>PG&amp;E Time-of-Use Rates</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>PG&amp;E · Utility Rates</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>PG&amp;E Time-of-Use Rates: 2026 Plan Guide</h1>
              <p className='text-lg text-muted-foreground'>E-TOU-C charges more from 4–9 p.m. every day. E-TOU-D narrows the peak to 5–8 p.m. on non-holiday weekdays. The better plan depends on your baseline usage and when your home uses power.</p>
              <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4'>
                <Link href='/author/chad-simpson' className='font-medium text-foreground hover:text-primary'>By Chad Simpson</Link>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-09'>September 9, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <div className='rounded-xl border border-border bg-muted/30 p-5 my-8'>
                <p className='font-semibold text-foreground mb-2'>Quick answer</p>
                <p className='text-foreground/80 m-0'>E-TOU-C can favor a lower-usage household that stays near its baseline allowance and can avoid 4–9 p.m. every day. E-TOU-D removes the baseline credit but uses a shorter weekday peak, which can fit higher-usage households or people who use more electricity on weekends. PG&amp;E&apos;s personalized comparison is the deciding test.</p>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>PG&amp;E TOU Rates Effective March 1, 2026</h2>
              <div className='overflow-x-auto mb-5'>
                <table className='w-full border-collapse text-sm'>
                  <thead><tr className='border-b-2 border-border'><th className='text-left py-3 pr-4'>Plan and season</th><th className='text-center py-3 px-3'>Peak</th><th className='text-center py-3 px-3'>Off-peak</th><th className='text-left py-3 pl-3'>Peak window</th></tr></thead>
                  <tbody>
                    <tr className='border-b border-border'><td className='py-3 pr-4 font-medium'>E-TOU-C, summer</td><td className='text-center py-3 px-3'>52.240¢</td><td className='text-center py-3 px-3'>39.940¢</td><td className='py-3 pl-3'>4–9 p.m., every day</td></tr>
                    <tr className='border-b border-border'><td className='py-3 pr-4 font-medium'>E-TOU-C, winter</td><td className='text-center py-3 px-3'>39.757¢</td><td className='text-center py-3 px-3'>36.757¢</td><td className='py-3 pl-3'>4–9 p.m., every day</td></tr>
                    <tr className='border-b border-border'><td className='py-3 pr-4 font-medium'>E-TOU-D, summer</td><td className='text-center py-3 px-3'>47.708¢</td><td className='text-center py-3 px-3'>34.212¢</td><td className='py-3 pl-3'>5–8 p.m., non-holiday weekdays</td></tr>
                    <tr><td className='py-3 pr-4 font-medium'>E-TOU-D, winter</td><td className='text-center py-3 px-3'>38.747¢</td><td className='text-center py-3 px-3'>34.886¢</td><td className='py-3 pl-3'>5–8 p.m., non-holiday weekdays</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/60 text-xs mb-8'>
                These are PG&amp;E total bundled energy rates in Advice Letter 7846-E, effective March 1, 2026. E-TOU-C applies an 8.140¢/kWh baseline credit to electricity within the customer&apos;s baseline allowance; the table shows rates before that credit. E-TOU-D has no baseline credit. Both plans also have a daily Base Services Charge. Verify later changes on PG&amp;E&apos;s <a href='https://www.pge.com/tariffs/en/rate-information/electric-rates.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>current electric-rates page</a>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How E-TOU-C Works</h2>
              <p>E-TOU-C has one rule that is easy to remember and hard to avoid: 4–9 p.m. is peak time every day, including weekends and holidays. Summer runs June 1 through September 30. Winter covers October 1 through May 31.</p>
              <p>The plan also includes a baseline credit. PG&amp;E bases the allowance on climate zone, heating source and season. For rates effective March 1, the credit was 8.140 cents per kWh for usage within that allowance. It reduces both peak and off-peak prices on the qualifying portion of usage.</p>
              <p><strong>E-TOU-C may fit when:</strong> household consumption stays near the baseline allowance, weekday and weekend evening use is low, or major loads can run before 4 p.m. or after 9 p.m.</p>
              <p><strong>It may be a poor fit when:</strong> dinner, cooling, laundry, pool equipment or vehicle charging regularly run from 4–9 p.m., especially on weekends.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How E-TOU-D Works</h2>
              <p>E-TOU-D narrows peak pricing to 5–8 p.m. on non-holiday weekdays. Weekends and designated holidays are off-peak. Every kilowatt-hour receives the same time-based price because this plan has no baseline credit.</p>
              <p><strong>E-TOU-D may fit when:</strong> the home uses well above its baseline allowance, weekend use is high, or a three-hour weekday peak is easier to avoid than E-TOU-C&apos;s five-hour daily window.</p>
              <p><strong>It may be a poor fit when:</strong> most electricity is already within the baseline allowance or the household cannot reduce its 5–8 p.m. weekday load.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Base Services Charge Changes the Comparison</h2>
              <p>Both schedules include a daily Base Services Charge. In Advice Letter 7846-E, the daily rates were 19.713 cents for income tier 1, 39.688 cents for tier 2 and 79.343 cents for tier 3. PG&amp;E summarizes those as roughly $6, $12 and $24 per month, with CARE and FERA customers generally receiving the lower charges. The monthly total changes with the number of billing days.</p>
              <p>PG&amp;E says the charge separated service costs that had been included in per-kWh prices; it was paired with lower energy prices. Do not add $24 to an old bill and call that the new total. Compare the full current bill under each schedule. Source: PG&amp;E&apos;s <a href='https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>Base Services Charge page</a>.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What If You Have an EV, Battery or Heat Pump?</h2>
              <p>E-TOU-C and E-TOU-D are not the only residential options. PG&amp;E also lists E-ELEC for qualifying electric technologies and EV2-A for a home with an electric vehicle and/or battery storage. EV2-A uses off-peak, partial-peak and peak periods and makes electricity lowest from midnight to 3 p.m. It can work when charging and other flexible loads stay out of 4–9 p.m.</p>
              <p>Eligibility and total household load matter more than the lowest advertised off-peak number. Compare the whole home under each available plan using PG&amp;E&apos;s <a href='https://ev.pge.com/rates/' target='_blank' rel='noopener noreferrer' className={sourceLink}>EV rate calculator</a> or the rate analysis in My Account.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>CCA Customers Need the Joint Rate, Not the Bundled Table</h2>
              <p>The prices above are total bundled rates. If a community choice aggregator supplies your electricity, the CCA sets the generation charge while PG&amp;E continues delivery, metering, billing, maintenance and outage response. A Power Charge Indifference Adjustment can also appear.</p>
              <p>Use the joint rate comparison for your CCA and the same PG&amp;E schedule. Adding a CCA generation rate to PG&amp;E&apos;s bundled total would count generation twice.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How to Pick a Plan Without Guessing</h2>
              <ol className='list-decimal pl-6 space-y-3'>
                <li>Download at least 12 months of hourly or interval usage from My Account.</li>
                <li>Compare how many kWh fall inside E-TOU-C&apos;s 4–9 p.m. daily peak and E-TOU-D&apos;s 5–8 p.m. non-holiday weekday peak.</li>
                <li>Check how much usage receives the E-TOU-C baseline credit.</li>
                <li>Add expected loads such as an EV, heat pump, electric water heater or pool equipment.</li>
                <li>Run PG&amp;E&apos;s personalized rate analysis. Keep the result with the effective date because tariffs change.</li>
                <li>After switching, compare the next full billing cycles with weather and usage, not dollars alone.</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Does Solar or a Battery Change the Best Plan?</h2>
              <p>It can. Solar production is usually strongest before the evening peak. A battery can store some daytime production for later use. But the result depends on the customer&apos;s billing program, system size, import and export pattern, battery controls and the tariff in effect. A solar proposal should model all of those inputs.</p>
              <p>Start by diagnosing the existing bill with our <Link href='/blog/why-is-my-pge-bill-so-high' className={sourceLink}>PG&amp;E high-bill checklist</Link>. Then compare the statewide context in <Link href='/blog/pge-vs-sce-vs-sdge-rates-compared' className={sourceLink}>PG&amp;E vs. SCE vs. SDG&amp;E rates</Link>. In San Diego the same exercise starts with <Link href='/blog/sdge-time-of-use-rates-2026' className={sourceLink}>SDG&amp;E&apos;s peak hours and TOU rate schedules</Link>. If a provider cannot show the rate schedule used in its savings model, the estimate is not ready to sign.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Primary Sources Used</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li><a href='https://www.pge.com/tariffs/assets/pdf/adviceletter/ELEC_7846-E.pdf' target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E Advice Letter 7846-E</a>, effective March 1, 2026: E-TOU-C and E-TOU-D prices, baseline credit and Base Services Charge.</li>
                <li><a href='https://www.pge.com/en/account/rate-plans/time-of-use-rate-plans.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E Time-of-Use Rate Plans</a>: plan windows, seasons and customer-fit descriptions.</li>
                <li><a href='https://www.pge.com/en/account/alternate-energy-providers/community-choice-aggregation.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E Community Choice Aggregation</a>: CCA and PG&amp;E roles.</li>
              </ul>
            </div>

            <ArticleCTA heading='Compare a Solar Plan With Your PG&E Bill' body='California Rate Relief is a private referral service. Homeowners can request a no-obligation assessment using their actual utility, usage and property details.' />
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'><TrustedSources domain='crr' variant='compact' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className='container mx-auto px-4 max-w-3xl'><RelatedInstallers picks='general' /></div>
    </PublicLayout>
  );
}
