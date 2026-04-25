import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'Solar Panels for EV Charging in California: Size, Cost, and ROI',
  description: "Sizing solar for an electric vehicle in California — how much extra capacity you need, what it adds to your system cost, and why EV + solar pays back faster than solar alone.",
  alternates: { canonical: '/blog/solar-panels-for-ev-charging-california' },
  openGraph: { title: 'Solar Panels for EV Charging in California: Size, Cost, and ROI', description: 'How to size solar for EV charging in California.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Solar Panels for EV Charging in California: Size, Cost, and ROI',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/solar-panels-for-ev-charging-california' },
};

export default function SolarForEvCharging() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar + EV</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Solar Panels for EV Charging in California: Size, Cost, and ROI</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                California has over 2 million electric vehicles on the road in 2026 — more than any other state, by a wide margin. Charging one at home adds roughly 200-400 kWh per month to a typical household&apos;s electricity consumption, which at California rates ($0.35-$0.46 per kWh) translates to $70-$180 per month in extra utility bills. Pairing the EV with solar changes that math completely. Here&apos;s how to size solar for EV charging and why the combined system usually pays back faster than solar alone.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Much Extra Solar You Need</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rule of thumb: every 1,000 miles per month of driving needs roughly 1 kW of additional solar capacity to offset. A California household driving 12,000 miles/year (1,000/month) on an EV that gets 3 miles per kWh needs about 3 kW of additional solar. A two-EV household driving 24,000 miles/year needs about 6 kW of additional solar.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Typical California home solar without EV is sized around 6-8 kW. With one EV, bump to 8-11 kW. With two EVs, 11-15 kW. Not every roof has space for that much, but most California single-family homes can fit at least 10 kW if the roof orientation is reasonable.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why EV + Solar Pays Back Faster Than Solar Alone</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 3.0, self-consumed solar is worth 5-10× more than exported solar. An EV is one of the best loads you can add to your home because you can charge it during the day (if working from home or charging on weekends) or overnight using battery-stored solar. Either way, you&apos;re self-consuming electricity that would otherwise either export at low rates or require grid purchase at high rates.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The payback math: the incremental cost of adding 3-4 kW of solar to handle an EV runs roughly $6,000-$10,000. The avoided utility cost for charging that EV from the grid runs $70-$180 per month, or $840-$2,160 per year. That&apos;s a 3-5 year payback on the incremental solar cost — significantly faster than the 9-12 year payback on a solar-only system sized for household load.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Smart Charging Strategies</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Daytime charging.</strong> If you&apos;re home during the day (work-from-home, retired, etc.) or charge on weekends, scheduling EV charging during solar production hours lets you self-consume directly without needing a battery to store the solar first. Most modern EVs (Tesla, Ford Lightning, Hyundai Ioniq, Chevy Bolt) can be scheduled to charge during specific hours via the app.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Battery-stored charging.</strong> If you&apos;re commuting and the EV is gone during the day, a home battery stores solar production for evening EV charging. Tesla Powerwall, Enphase IQ, and other home batteries work for this — the EV plug pulls from the battery overnight instead of the grid.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>TOU rate optimization.</strong> California utilities (PG&amp;E, SCE, SDG&amp;E) all have EV-specific Time-of-Use rate plans with very low overnight rates. Combining solar, battery, and a TOU plan can drop EV charging cost close to zero.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Charger Itself</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A Level 2 home EV charger (240V, 7-11 kW) costs roughly $500-$1,200 for the equipment plus $500-$1,500 for installation depending on panel capacity and run length from panel to garage. Tesla Wall Connector, Wallbox Pulsar Plus, ChargePoint Home Flex, and Grizzl-E are common California residential chargers.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Some California solar installers include the charger in the solar project and handle the 200A panel upgrade if needed. Ask whether the charger is in the quoted price or a separate add-on.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can solar panels fully charge an EV in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, for typical daily driving (25-40 miles). A correctly sized solar + battery system handles the average California household&apos;s EV charging without grid import most months.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How many solar panels do I need to charge an EV?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Roughly 8-10 additional panels (3-4 kW) for a single EV driving average California miles. Double that for a two-EV household.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do I need a battery to charge my EV with solar?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Not strictly, but strongly recommended under NEM 3.0. Without a battery, you&apos;re limited to charging during solar production hours or accepting that most charging uses grid electricity.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does my solar system upgrade when I get an EV?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>If you&apos;re grandfathered under NEM 2.0, adding panels beyond a small threshold will move the new capacity to NEM 3.0 while the original stays on NEM 2.0. If you&apos;re already on NEM 3.0, capacity expansion is straightforward. Your utility handles the new interconnection paperwork.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Sizing Solar For Your EV?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief runs the numbers for your specific usage, EV driving patterns, and roof space. Get up to three quotes including EV charger setup.</p>
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
