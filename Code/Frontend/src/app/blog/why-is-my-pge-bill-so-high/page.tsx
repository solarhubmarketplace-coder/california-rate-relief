import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { BillComparison } from '@/components/growth/BillComparison';
import { Calendar, Clock } from 'lucide-react';

const title = "Why Is My PG&E Bill So High? 7 Real Reasons";
const description = "PG&E's new Base Services Charge runs about $24 a month for most customers, $6 for CARE and $12 for FERA. See the other reasons your bill went up.";
const sourceLink = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog/why-is-my-pge-bill-so-high' },
  openGraph: { title, description, type: 'article', publishedTime: '2026-04-24T00:00:00Z', modifiedTime: '2026-09-11T00:00:00Z', url: 'https://ratereliefca.com/blog/why-is-my-pge-bill-so-high' },
};

export default function WhyIsMyPGEBillSoHigh() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant='Article' domain='crr' headline={title} url='https://ratereliefca.com/blog/why-is-my-pge-bill-so-high' datePublished='2026-04-24' dateModified='2026-09-11' description={description} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span><Link href='/blog' className='hover:text-primary'>Blog</Link><span>/</span><span className='text-foreground'>Why Is My PG&amp;E Bill So High?</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>PG&amp;E · Billing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Why Is My PG&amp;E Bill So High? The Real Reasons (and What to Do)</h1>
              <p className='text-lg text-muted-foreground'>Start with the usage line. If your kilowatt-hours did not rise, the rate plan, billing period and line-item changes usually explain the rest.</p>
              <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4'>
                <Link href='/author/chad-simpson' className='font-medium text-foreground hover:text-primary'>By Chad Simpson</Link>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-11'>Updated September 11, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <div className='rounded-xl border border-border bg-muted/30 p-5 my-8'>
                <p className='font-semibold text-foreground mb-2'>The two-minute check</p>
                <ol className='list-decimal pl-5 space-y-2 m-0'>
                  <li>Compare total kWh and kWh per day with the same month last year.</li>
                  <li>Compare the number of billing days.</li>
                  <li>Find the rate-schedule name and peak-period usage.</li>
                  <li>Separate generation, delivery, fixed charges, taxes and credits.</li>
                  <li>If you have solar, check whether this is a monthly statement or a True-Up.</li>
                </ol>
              </div>

              <BillComparison />

              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>1. You Used More Electricity</h2>
              <p>A dollar total hides the basic question: did the home use more power? Compare kWh per day, not only monthly kWh, because one bill may cover more days. Air conditioning, resistance heating, an EV, a pool pump, a second refrigerator, a hot tub or a failed appliance can move usage without changing anyone&apos;s daily routine on purpose.</p>
              <p>PG&amp;E&apos;s bill includes a usage-history graph and My Account provides interval data. Look for the day or hour when the pattern changed. A steady rise points toward weather or a continuous load. A sharp block at the same time each day points toward scheduled equipment.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>2. Peak-Hour Use Does Not Fit Your TOU Plan</h2>
              <p>On E-TOU-C, peak prices run from 4–9 p.m. every day. E-TOU-D uses a shorter 5–8 p.m. peak on non-holiday weekdays. The schedules also differ by season, and E-TOU-C includes a baseline credit while E-TOU-D does not. A household that cooks, cools the house, dries clothes and charges a vehicle during its peak window can pay more without using more total electricity.</p>
              <p>Use the <Link href='/blog/pge-time-of-use-rates-2026' className={sourceLink}>2026 PG&amp;E time-of-use comparison</Link>, then run PG&amp;E&apos;s personalized rate analysis with your own interval data. A generic “best plan” does not exist.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>3. The Base Services Charge Now Appears Separately</h2>
              <p>PG&amp;E began showing a Base Services Charge separately in March 2026. PG&amp;E describes it as a restructuring: some service costs moved out of the per-kWh price and into a daily fixed charge. It says most customers pay around $24 a month, CARE customers around $6 and FERA customers around $12. The exact monthly amount changes with the number of days in the billing period.</p>
              <p>This line does not mean every bill rose by $24. PG&amp;E lowered the corresponding per-kWh prices and says the combined change can raise or lower an individual total depending on usage. Compare the whole bill, not the new line in isolation. Source: PG&amp;E&apos;s current <a href='https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>Base Services Charge explanation</a>.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>4. Your Baseline Allowance or Season Changed</h2>
              <p>Some PG&amp;E plans include a baseline allowance or baseline credit. The allowance varies by climate zone, heating source and season. That means the amount of electricity receiving the lower price can change even when a household&apos;s habits do not.</p>
              <p>Check the baseline territory and allowance printed on the bill. Then compare it with the same season last year. PG&amp;E&apos;s <a href='https://www.pge.com/en/account/billing-and-assistance/understand-your-bill.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>bill glossary</a> explains the baseline allowance, credit, delivery charges and other line items.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>5. A CCA Changed the Generation Side of the Bill</h2>
              <p>If your city or county uses a community choice aggregator, the CCA supplies generation while PG&amp;E continues delivery, metering, billing, maintenance and outage response. The consolidated statement can show a CCA generation charge, PG&amp;E delivery charges and a Power Charge Indifference Adjustment. Reading one line by itself can make the bill look duplicated when the providers are charging for different parts of service.</p>
              <p>Compare the combined cost using the joint rate comparison for your CCA and schedule. PG&amp;E&apos;s <a href='https://www.pge.com/en/account/alternate-energy-providers/community-choice-aggregation.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>CCA explanation</a> lists the roles and the PCIA.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>6. A Credit Ended or the Billing Period Is Different</h2>
              <p>The California Climate Credit appears in designated bill cycles, not every month. A payment-plan adjustment, prior balance, deposit, local utility tax or a longer billing period can also change the amount due without changing the current per-kWh rate. Compare the “current electric charges” subtotal separately from the account balance.</p>
              <p className='text-sm text-foreground/70'>Correction September 10, 2026: PG&amp;E’s June residential average below is 33.7¢/kWh; the earlier 34.4¢ figure belongs to SCE.</p>
              <p>For statewide context, the California Public Advocates Office reported PG&amp;E&apos;s residential average at 33.7 cents per kWh in June 2026, excluding the Climate Credit. It also reported that PG&amp;E&apos;s March 1 update lowered the residential average by about 3.7% from January 1. A high individual bill in that period is therefore not proof that the average rate increased. Source: <a href='https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf' target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Electric Rates Report</a>, pp. 8 and 20.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>7. Your Solar Statement or True-Up Needs a Separate Review</h2>
              <p>A solar customer&apos;s statement can include imports, exports, monthly charges, credits and a running True-Up balance. The Base Services Charge cannot be offset by generation credits at True-Up. Do not diagnose that bill with a standard non-solar checklist.</p>
              <p>Compare production with the installer&apos;s estimate, check inverter or monitoring alerts, and compare household consumption with the prior year. A new EV, heat pump or air conditioner can turn a previously well-sized system into an undersized one. PG&amp;E publishes a <a href='https://www.pge.com/assets/pge/docs/account/billing-and-assistance/nem-monthly-transition-bill-base-services-charge.pdf' target='_blank' rel='noopener noreferrer' className={sourceLink}>sample 2026 NEM statement</a> showing the new charge and the monthly import/export fields.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What to Do, in Order</h2>
              <ol className='list-decimal pl-6 space-y-3'>
                <li>Compare kWh per day, billing days and weather with the same season last year.</li>
                <li>Use interval data to identify peak-hour use and loads that run continuously.</li>
                <li>Run PG&amp;E&apos;s rate-comparison tool before changing plans.</li>
                <li>Check CARE, FERA and Medical Baseline eligibility if those programs fit your household.</li>
                <li>For a CCA account, use the matching joint rate comparison and add generation plus delivery.</li>
                <li>For solar, separate current monthly charges from the running True-Up balance and check system production.</li>
                <li>Only then compare efficiency, storage or solar proposals using your own usage and rate schedule.</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When a Solar Assessment Is Relevant</h2>
              <p>A rate-plan switch or assistance program may solve the immediate problem. Solar becomes a relevant comparison when you own the property, have a suitable roof or site, expect to stay long enough for the contract or ownership model to make sense, and still have a persistent grid-electricity cost after the no-cost checks.</p>
              <p>California Rate Relief is a private referral service. It does not set PG&amp;E rates or administer a utility or government program. If you request an assessment, review the provider, equipment ownership, escalation terms, production assumptions, battery operation and transfer terms before signing.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Related Reading</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li><Link href='/blog/pge-vs-sce-vs-sdge-rates-compared' className={sourceLink}>PG&amp;E vs. SCE vs. SDG&amp;E Rates Compared</Link></li>
                <li><Link href='/blog/california-24-dollar-fixed-charge-explained' className={sourceLink}>The California Base Services Charge Explained</Link></li>
                <li><Link href='/blog/pge-rate-increase-2026' className={sourceLink}>PG&amp;E Rate Changes in 2026</Link></li>
                <li><Link href='/blog/solar-battery-backup-california' className={sourceLink}>Solar Battery Backup in California</Link></li>
              </ul>
            </div>

            <ArticleCTA heading='Still Paying a High PG&E Bill?' body='After checking usage, rate plan and assistance options, California homeowners can request a no-obligation solar assessment from our private referral service.' />
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'><TrustedSources domain='crr' variant='compact' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className='container mx-auto px-4 max-w-3xl'><RelatedInstallers picks='general' /></div>
    </PublicLayout>
  );
}
