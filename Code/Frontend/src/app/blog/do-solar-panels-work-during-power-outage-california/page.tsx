import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'Do Solar Panels Work During a Power Outage in California?',
  description: "A grid-tied solar system without a battery shuts off during an outage — for safety. Only solar + battery keeps your home powered. Here is how it works, why, and what PSPS means for California solar owners.",
  alternates: { canonical: '/blog/do-solar-panels-work-during-power-outage-california' },
  openGraph: { title: 'Do Solar Panels Work During a Power Outage in California?', description: 'Why solar-only homes lose power in outages, and why battery changes that.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Do Solar Panels Work During a Power Outage in California?',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/do-solar-panels-work-during-power-outage-california' },
};

export default function DoSolarWorkDuringOutage() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar + Outages</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Do Solar Panels Work During a Power Outage in California?</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Counterintuitive but important: a grid-tied solar system without a battery will NOT power your home during an outage. It shuts off automatically for safety — to prevent backfeeding energized electricity onto the grid while utility crews are working on downed lines. If you want your solar to keep running during California outages (including PSPS events), you need a battery. Here&apos;s exactly why, and what it takes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why Grid-Tied Solar Shuts Off During Outages</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is called &quot;anti-islanding&quot; protection and it&apos;s required by UL 1741 and IEEE 1547 safety standards. During a grid outage, utility line workers may be restoring service. If a solar home&apos;s panels kept producing and pushed electricity onto the &quot;dead&quot; grid, it could electrocute a line worker or damage equipment. So every grid-tied solar inverter senses when the grid is down and immediately stops exporting — and by extension, stops producing at all.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is true whether it&apos;s a planned PSPS (Public Safety Power Shutoff) for fire mitigation, a storm-caused outage, or an equipment failure. The moment the grid goes down, your grid-tied solar-only system goes dark.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How a Battery Changes This</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar + battery system with islanding capability (Tesla Powerwall 3, Enphase IQ Battery, FranklinWH aPower, Generac PWRcell, and others) disconnects from the grid during an outage but keeps your solar panels and battery operating as a self-contained microgrid within your home. Your house stays powered; the grid stays safely de-energized.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most modern battery systems support this automatically — no manual switching. When the grid goes down, the battery&apos;s inverter opens a physical relay between your home and the grid, then continues running your home from solar + stored battery capacity. When the grid returns, the relay closes again and normal grid-tied operation resumes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>PSPS and California</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Public Safety Power Shutoffs — planned outages during high-fire-risk weather — are unique to California and a major reason to include battery storage with solar. PSPS events can last 24-72 hours or longer, typically in Tier 2 and Tier 3 High Fire Threat District (HFTD) zones across PG&amp;E, SCE, and SDG&amp;E territory.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A properly sized solar + battery system rides through a typical PSPS without noticeable impact to daily life. Sun charges the battery during the day; battery carries you through the night; sun recharges it the next day. For homeowners in high-fire-risk areas, this alone often justifies the battery cost — losing a freezer full of food during a 3-day PSPS is worse than just an inconvenience.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Long Will a Battery Last in an Outage?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Depends on battery capacity and your home&apos;s load. A full 13.5 kWh battery (like Powerwall 3) typically runs a California household&apos;s critical loads (refrigerator, lights, internet, one AC or heat pump zone, phone charging) for 12-24 hours without solar recharging. If the sun is up and charging the battery, it can run indefinitely on normal California load.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Large loads burn through battery fast. An EV charging on the battery can drain it in a few hours. A pool pump running full-time will empty a single battery overnight. During outages, most homeowners switch to load-managed mode — powering essentials only — or have their battery system configured for critical loads only.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>SGIP Resiliency Rebate</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP) offers enhanced rebates for battery storage when installed by customers in high-fire-risk zones, Medical Baseline customers, or other qualifying resiliency-priority groups. The rebate for Equity Resiliency customers can exceed $1,000 per kWh — potentially offsetting most of the battery cost. Your installer should check SGIP eligibility before quoting.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I use my solar during a PG&amp;E outage?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Only if you have a battery. Solar-only systems shut off during grid outages for safety. Solar + battery continues running your home as a self-contained microgrid until the grid returns.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Why does my solar shut off when the grid is out?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Anti-islanding safety — UL 1741 and IEEE 1547 standards require grid-tied solar to stop producing during outages, so utility line workers aren&apos;t exposed to energized lines they think are dead.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How much battery do I need for a 3-day outage?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>With sun during the day, one 13.5 kWh battery covers typical daily loads indefinitely by recharging daily. For multi-day cloudy outages (rare in CA), two batteries buffer through. Consult with your installer on your specific load profile.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does a generator work as a backup to solar?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. Some California homeowners combine solar + battery + a whole-home gas generator for extended multi-day outage coverage. Typically the battery handles day-to-day; the generator only kicks in if the battery and solar can&apos;t keep up over days of bad weather.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Want Solar That Works Through PSPS?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects you with installers that design solar + battery for resilience through PSPS events and storms. Free 60-second eligibility check.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="premium" /></div>
    </PublicLayout>
  );
}
