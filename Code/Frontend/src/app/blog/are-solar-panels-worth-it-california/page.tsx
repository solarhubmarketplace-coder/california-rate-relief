import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'Are Solar Panels Worth It in California? 2026 Honest Answer',
  description: "For most California homeowners paying $200+ per month for electricity, solar is still worth it in 2026 — but only with a battery and only if the math fits your specific situation. Here is the honest breakdown.",
  alternates: { canonical: '/blog/are-solar-panels-worth-it-california' },
  openGraph: { title: "Are Solar Panels Worth It in California? 2026 Honest Answer", description: "Straight answer on whether solar panels are worth it in California in 2026.", type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Are Solar Panels Worth It in California? 2026 Honest Answer',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/are-solar-panels-worth-it-california' },
};

export default function AreSolarPanelsWorthIt() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Decision</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Are Solar Panels Worth It in California? 2026 Honest Answer</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Short answer: for California homeowners with an average monthly electric bill above $200, yes — solar is still worth it in 2026. But the case is narrower than it was under NEM 2.0, the system almost always needs to include a battery to pencil out, and there are specific situations where it still doesn&apos;t make sense. Here&apos;s the honest, situation-by-situation breakdown.
            </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Where Solar Is Still a Strong Yes</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You pay $250+ per month for electricity.</strong> California utility rates are among the highest in the country (SCE 34¢/kWh, PG&amp;E 41¢/kWh, SDG&amp;E 46¢/kWh average 2026), and rate inflation is projected 6-12% annually through 2028. High bill + rising rates means solar has a lot of value to displace.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You have a south or west-facing roof with minimal shade.</strong> Roof geometry matters more than ever under NEM 3.0. South-facing maximizes total production; west-facing maximizes production during afternoon peak hours when utility rates are highest.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You plan to stay in your home for at least 7 years.</strong> Cash and loan payback run 9-12 years with a battery under NEM 3.0. Shorter horizons favor PPA or lease (which transfer when you sell).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Where Solar Is Borderline</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Your bill is $150-$200 per month.</strong> The math still usually works, but the savings are smaller and the payback is longer. A battery becomes non-negotiable. PPA or lease often beats cash in this tier because you get the upside without tying up capital.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Your roof has moderate shade.</strong> Partial shading is manageable with microinverters (Enphase panel-level optimization handles it well), but it reduces production. A detailed site assessment will tell you whether the math still pencils.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You&apos;re with a municipal utility (LADWP, SMUD, etc.).</strong> Rates are lower than the big three IOUs, which means less savings-per-kWh. Solar still works for LADWP and SMUD customers but the numbers are tighter.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Where Solar Is Usually Not Worth It</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Your bill is under $100 per month.</strong> California&apos;s new $24 fixed charge alone eats into small bills. The savings available are too small to justify the system cost or lease commitment. You&apos;re probably better served by efficiency upgrades (LED lighting, heat pump, smart thermostat) than by solar.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Heavily shaded roof.</strong> If your roof gets less than 4 hours of direct sunlight per day, solar production drops too low to pay back. Google Project Sunroof gives you a quick read — enter your address.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Short-term homeowners (1-3 years).</strong> Cash purchase payback is too long. Loan payoff is too slow. PPA/lease transfers but adds complexity to the sale. If you&apos;re selling soon, skip it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The NEM 3.0 Factor</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California switched from NEM 2.0 (retail-rate export credits) to NEM 3.0 / Net Billing Tariff (avoided-cost export credits) in April 2023. Under NEM 3.0, exported solar is worth about one-fifth of consumed solar, which means a solar-only system (no battery) has dramatically weaker economics than it did pre-2023.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, NEM 3.0 solar still works — self-consumption rises from 40-60% to 70-90%. Without a battery, the payback stretches from 7-9 years (NEM 2.0) to 12-15 years (NEM 3.0 solar-only). The single biggest mistake California solar shoppers make in 2026 is installing solar without a battery. See our full{' '}<Link href='/blog/nem-3-california-still-worth-it' className='text-primary hover:underline'>NEM 3.0 worth-it analysis</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Five-Minute Check: Is It Worth It For You?</h2>
              <ol className='space-y-3 text-foreground/80 leading-relaxed mb-6 list-decimal pl-6'>
                <li>Pull up your last 12 months of utility bills. Divide total kWh by 12 for monthly usage, total $ by 12 for monthly cost.</li>
                <li>If average monthly is over $200 and your roof gets real sun, solar is probably worth it.</li>
                <li>If average monthly is $150-$200, it depends — get a specific quote to see the actual math.</li>
                <li>If under $150, probably skip unless you&apos;re planning a major usage increase (EV, heat pump, pool).</li>
                <li>Whatever the bill size, insist on battery inclusion. NEM 3.0 math without storage almost never works.</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Are solar panels worth it in California in 2026?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>For most homeowners paying $200+ per month with a reasonably sunny roof — yes, with a battery. Typical payback is 9-12 years for cash/loan, immediate savings for PPA/lease.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Did NEM 3.0 ruin solar in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>It didn&apos;t ruin it — it changed the optimal design. Solar-only systems are weaker now. Solar + battery is still solid. The strategy shifted from &quot;maximize export&quot; to &quot;maximize self-consumption.&quot;</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What if I can&apos;t afford to buy solar outright?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>A PPA or lease removes the upfront cost entirely — $0 down, fixed monthly below your utility bill. Our{' '}<Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary hover:underline'>PPA vs Loan vs Lease vs Cash comparison</Link>{' '}walks through all four.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>See the Real Numbers for Your Home</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>The California Rate Relief Program runs the math for your specific address, utility, and usage. No obligation, 60 seconds, no credit check impact.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="affordability" /></div>
    </PublicLayout>
  );
}
