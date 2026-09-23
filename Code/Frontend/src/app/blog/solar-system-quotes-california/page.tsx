import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { IntentCTA } from '@/components/growth/IntentCTA';

export const metadata: Metadata = {
  title: "Solar System Quotes in California: Get 3 Real Quotes Fast",
  description: "How to get legitimate California solar quotes without sales spam. What a real quote includes and which red flags to watch for.",
  alternates: { canonical: '/blog/solar-system-quotes-california' },
  openGraph: { title: 'Solar System Quotes in California: How to Get 3 Real Quotes Fast', description: 'How to get California solar quotes and what to compare.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

export default function SolarSystemQuotes() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Solar System Quotes in California: How to Get 3 Real Quotes Fast"} url="https://ratereliefca.com/blog/solar-system-quotes-california" datePublished="2026-04-23" dateModified="2026-04-24" description={"How to get legitimate California solar quotes without sales spam. What a real solar quote should include, which installers to request from, and what red flags to watch for."} />
      <Header />
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
                Getting real solar quotes in California in 2026 is frustrating for two reasons: many installers compete for the same homeowners, so opting into one quote can bring follow-up calls from sales reps you didn&apos;t ask to hear from, and too many &quot;quotes&quot; come back with missing information that makes them impossible to compare. Here&apos;s how to get three solid, comparable California solar quotes without the spam, and what each quote needs to contain for it to actually be useful.
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
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Production guarantee</strong> (whether there is one, and what share of the estimate it covers)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Warranty terms</strong> — equipment, workmanship, roof penetrations (years for each)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Projected bills</strong> the provider assumes, with the utility rates and export credits behind them</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>If a quote is missing any of the above, request it in writing before comparing. Quotes that only give you a monthly payment without the underlying math are incomplete.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How to Get Quotes Without the Sales Spam</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>There are three practical paths:</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>1. Direct installer request.</strong> Call or email the installer you&apos;re interested in. Ask for a quote. Downside: one quote at a time, and you&apos;ll get repeat sales contact.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>2. Marketplace platforms.</strong> Online solar marketplaces connect you with multiple installers at once. Useful, but your information goes to several installers, so expect calls from more than one.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>3. Referral services.</strong> A referral service such as California Rate Relief passes your request to a solar provider, which decides whether it can serve your address and what it can offer. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement. A referral does not guarantee a set number of quotes or a particular provider, and the providers you hear from depend on the service&apos;s arrangements; see <Link href='/how-we-make-money' className='text-primary hover:underline'>how we make money</Link>.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why Three Quotes Is a Practical Target</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>The CPUC&apos;s California Solar Consumer Protection Guide says: &ldquo;Make sure to get bids from at least 3 different solar providers.&rdquo; Two quotes rarely show you whether a price is high or low; a third gives you a middle.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>When comparing the 3, line them up on a single spreadsheet with the itemized elements above in rows. Compare the total price for the same system size and equipment, not the monthly payment alone.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Red Flags in Solar Quotes</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>No cash price listed.</strong> Financed-only quotes hide the dealer fee. Always ask for both.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>&quot;Same-day signing only&quot; pressure.</strong> A legitimate quote gives you time to compare it. Pressure tactics are a sales-training technique, not a real constraint.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>Production estimates based on 6+ hours of daily sun without shade analysis.</strong> Real quotes include PVWatts or equivalent modeling specific to your roof.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>Quotes from installers in Chapter 11.</strong>{' '}<Link href='/solar-installers/freedom-forever-review' className='text-primary hover:underline'>Freedom Forever</Link>{' '}(April 2026) and{' '}<Link href='/solar-installers/sunnova-review' className='text-primary hover:underline'>Sunnova / SunStrong</Link>{' '}(June 2025) are both continuing to operate but warranty durability is questionable.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>No battery in the proposal under NEM 3.0.</strong> Under California&apos;s Net Billing Tariff, the CPUC says export credits are usually lower than the retail rate, so a battery changes the math. Ask each installer to show the system with and without one.</p>
            </div>

            <IntentCTA cta='article_cta' variant='review' />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
