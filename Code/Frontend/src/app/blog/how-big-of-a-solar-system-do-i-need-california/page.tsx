import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: 'How Big of a Solar System Do I Need in California? 2026 Sizing Guide',
  description: "How to size a solar system for your California home in 2026 — by monthly bill, by kWh usage, and by specific loads (EV, AC, pool). Plus why NEM 3.0 changes the optimal sizing.",
  alternates: { canonical: '/blog/how-big-of-a-solar-system-do-i-need-california' },
  openGraph: { title: 'How Big of a Solar System Do I Need in California? 2026 Sizing Guide', description: 'Solar system sizing for California homes.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'How Big of a Solar System Do I Need in California? 2026 Sizing Guide',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/how-big-of-a-solar-system-do-i-need-california' },
};

export default function HowBigSolarSystem() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"How Big of a Solar System Do I Need in California? 2026 Sizing Guide"} url="https://ratereliefca.com/blog/how-big-of-a-solar-system-do-i-need-california" datePublished="2026-04-23" dateModified="2026-04-24" description={"How to size a solar system for your California home in 2026 — by monthly bill, by kWh usage, and by specific loads (EV, AC, pool). Plus why NEM 3.0 changes the optimal sizing."} />
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>System Sizing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>How Big of a Solar System Do I Need in California? 2026 Sizing Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The right solar system size depends on three things: how much electricity your home actually uses, how much of it you want solar to cover, and how much roof space you have. For most California homes in 2026, the answer lands somewhere between 6 kW and 12 kW with one or two batteries. Here&apos;s how to figure out your specific number without relying on an installer&apos;s sales pitch.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Basic Sizing Formula</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Pull your last 12 months of utility bills. Add up the total kWh consumed. Divide by 12 for your monthly average. Most California homes fall in the 500-1,500 kWh/month range; heavier users (pools, EV, all-electric with heat pump) go higher.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rough rule of thumb in California: every 1 kW of solar panels produces about 1,400-1,800 kWh per year (roughly 4.0-5.0 sun-hours per day, accounting for the state&apos;s climate). So to offset a 900 kWh/month (10,800 kWh/year) household, you need roughly 6.5-7.5 kW of solar.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Sizing by Monthly Bill (Rough Guide)</h2>
              <div className='overflow-x-auto rounded-xl border border-border my-6'>
                <table className='min-w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Monthly Bill</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Typical System Size</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Battery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$100-$150</td><td className='px-4 py-3 text-foreground/80'>4-5 kW</td><td className='px-4 py-3 text-foreground/80'>Optional</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$150-$250</td><td className='px-4 py-3 text-foreground/80'>5-7 kW</td><td className='px-4 py-3 text-foreground/80'>1 battery</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$250-$400</td><td className='px-4 py-3 text-foreground/80'>7-10 kW</td><td className='px-4 py-3 text-foreground/80'>1-2 batteries</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$400+</td><td className='px-4 py-3 text-foreground/80'>10-15 kW+</td><td className='px-4 py-3 text-foreground/80'>2-3 batteries</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Upgrades That Change the Math</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Electric vehicle.</strong> Adding an EV adds roughly 200-400 kWh/month to your bill. That&apos;s another 2-4 kW of solar capacity. See{' '}<Link href='/blog/solar-panels-for-ev-charging-california' className='text-primary hover:underline'>our EV charging guide</Link>.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Heat pump or all-electric conversion.</strong> Replacing a gas furnace or gas water heater with electric equivalents shifts load to your panel. Adds maybe 1-3 kW of solar need depending on home size.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Pool pump.</strong> Variable-speed pumps run 1-2 kWh/hour while operating. Typical California pool adds 150-400 kWh/month.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Air conditioning.</strong> Summer AC in hot inland California (Central Valley, Inland Empire) can add 400-800 kWh/month during peak season — another 2-4 kW of solar capacity worth including.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>NEM 3.0 Changes the Optimal Sizing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 2.0, oversizing was a smart strategy — export everything at retail rate, build up credits. Under NEM 3.0, exports credit at much lower avoided-cost rates, so oversizing has less return. The new optimal design: match panel capacity to your household consumption relatively closely and include battery storage for self-consumption. Your installer shouldn&apos;t propose a 15 kW system for a 700 kWh/month household under NEM 3.0 — the extra 8 kW would mostly export at low rates.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Roof Space Reality Check</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Each modern 400W solar panel is roughly 18 square feet. A 7 kW system is about 18 panels, or roughly 325 square feet of roof. Most California single-family homes can fit 10 kW of panels on their south/west-facing roof area. Larger systems (15+ kW) may need either a second roof face, a ground mount, or a carport integration. Your installer&apos;s site survey determines the real limit.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How many solar panels do I need for a 2000 sq ft house?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Depends on usage more than square footage. A 2000 sq ft California home using 800 kWh/month needs roughly 6-7 kW (15-18 panels). All-electric with EV? More like 10-12 kW (25-30 panels).</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Should I size my solar for future needs (EV, heat pump)?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes — if you expect to add an EV or electrify within 5 years, size the solar for that future load. It&apos;s cheaper to install a larger system upfront than to expand later (each capacity addition can split you between NEM tariff versions).</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I oversize to sell electricity back to PG&amp;E/SCE/SDG&amp;E?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Under NEM 3.0, the export economics don&apos;t reward oversizing. Credits are at avoided cost (5-8 cents/kWh), not retail (35-46 cents/kWh). Installers shouldn&apos;t propose systems massively larger than your consumption.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do I need a battery?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Under NEM 3.0, for most California homeowners — yes. Solar without a battery exports daytime production at low rates and pulls evening load from the grid at high rates. Battery self-consumption flips that math.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Sized for Your Specific Home</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief runs the math for your specific usage, roof, and future electrification plans. Free 60-second eligibility check.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
