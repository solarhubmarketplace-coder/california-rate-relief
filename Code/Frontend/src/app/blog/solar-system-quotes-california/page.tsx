import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar System Quotes in California: How to Get 3 Real Quotes Fast',
  description: "How to get legitimate California solar quotes without sales spam. What a real solar quote should include, which installers to request from, and what red flags to watch for.",
  alternates: { canonical: '/blog/solar-system-quotes-california' },
  openGraph: { title: 'Solar System Quotes in California: How to Get 3 Real Quotes Fast', description: 'How to get California solar quotes and what to compare.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Solar System Quotes in California: How to Get 3 Real Quotes Fast',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/solar-system-quotes-california' },
};

export default function SolarSystemQuotes() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Getting Quotes</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Solar System Quotes in California: How to Get 3 Real Quotes Fast</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Getting real solar quotes in California in 2026 is frustrating for two reasons: too many installers compete for leads, so opting into one quote usually triggers 10+ follow-up calls from sales reps you didn&apos;t ask to hear from, and too many &quot;quotes&quot; come back with missing information that makes them impossible to compare. Here&apos;s how to get three solid, comparable California solar quotes without the spam, and what each quote needs to contain for it to actually be useful.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What a Real Solar Quote Should Contain</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>A complete California solar quote should itemize:</p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>System size in kW</strong> (e.g., 7.2 kW, 8.0 kW)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Panel brand, wattage, count</strong> (e.g., 18 × Qcells 400W)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Inverter type and brand</strong> (microinverters vs string, Enphase/SolarEdge/Tesla)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Battery capacity and brand</strong> (e.g., Tesla Powerwall 3, 13.5 kWh)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Estimated annual production</strong> in kWh</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Total cash price</strong> AND financed/lease/PPA price broken out separately</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Monthly payment</strong> (if financed or lease/PPA) with annual escalator if applicable</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Production guarantee</strong> (should be 90%+)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Warranty terms</strong> — equipment, workmanship, roof penetrations (years for each)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Projected year-one and year-25 savings</strong> vs your current utility bill</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>If a quote is missing any of the above, request it in writing before comparing. Quotes that only give you a monthly payment without the underlying math are incomplete.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How to Get Quotes Without the Sales Spam</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>There are three practical paths:</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>1. Direct installer request.</strong> Call or email the installer you&apos;re interested in. Ask for a quote. Downside: one quote at a time, and you&apos;ll get repeat sales contact.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>2. Marketplace platforms.</strong> EnergySage, SolarReviews, and similar marketplaces connect you with multiple installers at once. Useful but your information gets shared widely — expect 3-5+ calls from installers on the platform over the following week.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>3. Referral networks.</strong> Programs like California Rate Relief match you with a small curated set (typically 3) of pre-vetted installers. Lower spam volume, but the installer roster is determined by the program&apos;s partnerships.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The 3-Quote Sweet Spot</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>Industry research consistently shows that getting 3 quotes captures most of the available price variance — 2 quotes isn&apos;t enough to see the spread, 4+ doesn&apos;t materially improve the decision quality but dramatically increases the sales-contact volume. 3 is the right number.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>When comparing the 3, line them up on a single spreadsheet with the itemized elements above in rows. The spread on total price for the same-spec system in California is often 15-30% across installers — significant enough to be worth the comparison.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Red Flags in Solar Quotes</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>No cash price listed.</strong> Financed-only quotes hide the dealer fee. Always ask for both.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>&quot;Same-day signing only&quot; pressure.</strong> Legitimate solar quotes are good for at least 30 days. Pressure tactics are a sales-training technique, not a real constraint.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>Production estimates based on 6+ hours of daily sun without shade analysis.</strong> Real quotes include PVWatts or equivalent modeling specific to your roof.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>Quotes from installers in Chapter 11.</strong>{' '}<Link href='/solar-installers/freedom-forever-review' className='text-primary hover:underline'>Freedom Forever</Link>{' '}(April 2026) and{' '}<Link href='/solar-installers/sunnova-review' className='text-primary hover:underline'>Sunnova / SunStrong</Link>{' '}(June 2025) are both continuing to operate but warranty durability is questionable.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>No battery in the proposal under NEM 3.0.</strong> Under California&apos;s current Net Billing Tariff, a solar-only system has much weaker economics. Batteries should be the default, not an upsell.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get 3 Real Quotes in 60 Seconds</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief works with multiple top-rated California installers. Fill out one form, get up to three itemized quotes, compare apples to apples.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
              <p className='text-xs text-muted-foreground mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
