import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'Can Solar Panels Power a Whole House in California?',
  description: "Yes — a correctly sized solar + battery system can run a typical California home for the full day, evening, and most outages. Here is exactly what it takes.",
  alternates: { canonical: '/blog/can-solar-panels-power-a-whole-house-california' },
  openGraph: { title: 'Can Solar Panels Power a Whole House in California?', description: 'What it takes to run a whole California home on solar + battery.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Can Solar Panels Power a Whole House in California?',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/can-solar-panels-power-a-whole-house-california' },
};

export default function CanSolarPowerWholeHouse() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Capacity</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Can Solar Panels Power a Whole House in California?</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Yes, absolutely — a correctly sized solar + battery system can power a whole California home, day and night, year-round. But the specifics matter: how much electricity your home actually uses, whether you add a battery, what loads you prioritize, and whether you&apos;re connected to the grid as a backstop. Here&apos;s what it actually takes to run a California home entirely on solar in 2026.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Three Setups That &quot;Power a Whole House&quot;</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Solar + battery + grid (most common).</strong> Your panels cover daytime load plus charge the battery. Battery covers evenings. Grid is a backstop for multi-day storms, large loads, or if the battery depletes. For 80-95% of the year, your home runs on solar with grid playing backup. This is what most California solar homes do.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Solar + battery + backup generator (off-grid capable).</strong> Battery covers normal evenings and short outages; a generator kicks in for extended multi-day grid outages. Technically still grid-connected but can run indefinitely through extended PSPS events.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Fully off-grid (rare in CA residential).</strong> No grid connection at all. Requires very large battery capacity (3-5+ batteries), often a generator, significant solar oversizing for winter/cloudy periods. Expensive and complex; mostly for remote cabins where grid connection isn&apos;t available.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What It Takes to Cover Your Whole House</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a typical California household (900-1,200 kWh/month), whole-house coverage usually looks like:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>8-11 kW of solar panels</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>One or two batteries (13.5 kWh each)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Properly sized inverter (often integrated with the battery)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Critical-loads or whole-home backup panel depending on budget</span></li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why Most California Solar Homes Stay Grid-Tied</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Going fully off-grid in California typically costs 2-3x more than solar + battery + grid, because you have to oversize everything to handle worst-case winter weeks. The grid is a nearly-free backstop — you pay a fixed monthly charge plus any grid electricity you import during outlier weather. For most California households, the math favors grid-tied with backup.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What About During an Outage?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar + battery system continues powering your home during a grid outage — day or night. A solar-only system (no battery) shuts off automatically during outages to protect utility workers. See our{' '}<Link href='/blog/do-solar-panels-work-during-power-outage-california' className='text-primary hover:underline'>outage guide</Link>{' '}for details.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Whole-Home vs Critical Loads Backup</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Two battery configurations are common in California:
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Whole-home backup.</strong> During an outage, the battery powers everything — AC, EV charger, electric oven, pool pump. Requires a larger battery (usually 2+) to sustain. More expensive.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Critical loads backup.</strong> Only selected circuits stay powered during an outage — refrigerator, lights, internet, medical equipment, one HVAC zone. One battery typically suffices. Cheaper install, often sufficient for PSPS events.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can solar power run an entire house 24/7?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>With battery storage, yes — for most days. Multi-day cloudy or winter storms may require grid or generator backup. A correctly sized solar + battery system covers 80-95% of annual household load.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can solar run AC and an EV charger at the same time?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>During daytime peak production, yes. You may need to size up (10-15 kW solar, 2+ batteries) if both run during evening peak. Smart load management on newer systems can sequence loads to stay within battery capacity.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do I need to give up the grid to run my house on solar?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>No, and most California homes don&apos;t. Grid-tied solar + battery gives you backup-ready self-sufficiency while keeping the grid as a rarely-used safety net. Going fully off-grid is more expensive and rarely needed in California.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How much does whole-home solar cost in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Typical 8-11 kW solar + 1-2 battery install runs $30,000-$55,000 cash price in California in 2026 before the 30% federal tax credit. Loan, lease, and PPA financing are all available to avoid upfront cost.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get a Whole-Home Solar Quote</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects you with installers that design whole-home or critical-loads solar + battery systems. Free 60-second eligibility check.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
