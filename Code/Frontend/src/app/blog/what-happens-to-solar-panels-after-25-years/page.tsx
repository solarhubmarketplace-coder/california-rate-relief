import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'What Happens to Solar Panels After 25 Years? California Guide',
  description: "Solar panels don't stop working at 25 years — they degrade gradually, typically still producing 80-87% of original output after three decades. Here is what 'end of warranty' actually means and what California homeowners do.",
  alternates: { canonical: '/blog/what-happens-to-solar-panels-after-25-years' },
  openGraph: { title: 'What Happens to Solar Panels After 25 Years? California Guide', description: 'Solar panel lifespan and what happens past the warranty.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'What Happens to Solar Panels After 25 Years? California Guide',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/what-happens-to-solar-panels-after-25-years' },
};

export default function WhatHappensAfter25Years() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Longevity</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>What Happens to Solar Panels After 25 Years? California Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The 25-year solar panel warranty doesn&apos;t mean your panels die at 25 years. It means the manufacturer guarantees at least a certain output level (typically 80-87%) at that 25-year mark. Panels keep producing electricity for decades past warranty expiration — just at slightly reduced output. Here&apos;s what actually happens to California solar systems over time, and what homeowners do when warranties expire.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Solar Panels Degrade</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panels lose output gradually over time — a process called degradation. Industry benchmarks:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Year 1-2:</strong> ~2-3% initial degradation as the panels settle</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Years 2-25:</strong> Linear degradation of 0.25-0.55% per year</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>At year 25:</strong> Typical output 80-87% of original rating</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Year 30-40:</strong> Output typically 70-80% of original — still very usable</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Premium panels (Qcells, REC, Silfab, Panasonic) often guarantee higher year-25 output than baseline tier-1 panels (Jinko, Trina, Longi, Canadian Solar). When comparing panel brands, the &quot;year-25 power warranty&quot; is what matters more than the &quot;product defect warranty.&quot;
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Else Happens Over 25 Years?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Inverters don&apos;t last as long as panels.</strong> String inverters typically have 10-15 year warranties and often need replacement once during a system&apos;s life — around $2,000-$4,000. Microinverters (Enphase) have 25-year warranties and generally last the full panel life. Tesla Solar Inverters are warranted 12.5-25 years depending on model.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Batteries need replacement.</strong> Home batteries (Tesla Powerwall, Enphase IQ, FranklinWH) typically warranty 10-15 years. Beyond that, they degrade more meaningfully than panels and are often replaced. Figure $8,000-$15,000 for a battery replacement in year 15+.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Panels rarely need replacement.</strong> Most California homeowners keep their original panels past year 25 because the production is still meaningful and replacement cost outweighs the incremental benefit.
              </p>

              <h2 className='text-2xl function bold text-foreground mt-10 mb-4'>Your Options at Year 25+</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Option 1: Keep the system, accept reduced output.</strong> The simplest and most common path. Panels keep producing at 80-87% and your bill savings persist, if slightly reduced. If the inverter or battery fails, replace just that component.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Option 2: Repower — replace panels only.</strong> If new panel technology is dramatically better (which it might be in 25 years), swapping panels while keeping the racking and electrical infrastructure can be cost-effective. Typically $10,000-$20,000.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Option 3: Full system replacement.</strong> Start over with new panels, new inverter, new battery, new system design optimized for whatever tariff and technology exists at that time. Expensive but delivers another 25+ years.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What About Solar Panel Recycling?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California requires solar panels to be handled as hazardous waste at end-of-life because of trace lead and other materials in the cells. Solar panel recycling facilities exist but are still scaling — most California homeowners don&apos;t deal with this personally until a full system replacement, and the installer typically handles disposal as part of a replacement install.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Panel manufacturers are required to recover glass, aluminum, silicon, and copper from decommissioned panels. The recycling infrastructure is growing as the first wave of 2010-era residential installs approaches end-of-life in the 2035-2040 timeframe.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What if My Installer Goes Out of Business Before Year 25?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is a real risk in California given recent installer bankruptcies (Freedom Forever in April 2026, Sunnova in June 2025, SunPower in August 2024). When an installer closes, the workmanship warranty typically becomes unrecoverable — but the manufacturer warranties on panels, inverters, and batteries remain intact because they&apos;re between you and the equipment maker, not the installer.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Practical move: keep detailed records of your system — manufacturers, serial numbers, installation date. If your installer vanishes, you can still file warranty claims directly with Enphase, Tesla, Qcells, or whoever made the equipment. See the{' '}<Link href='/solar-installers/sunnova-review' className='text-primary hover:underline'>Sunnova review</Link>{' '}and{' '}<Link href='/solar-installers/freedom-forever-review' className='text-primary hover:underline'>Freedom Forever review</Link>{' '}for practical details on bankruptcy fallout.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do solar panels stop working after 25 years?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>No. They keep producing electricity — typically 80-87% of original output at year 25, 70-80% at year 30-40. The &quot;25-year&quot; number is a warranty threshold, not a death date.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How long do solar panels actually last?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>30-40 years of useful production is typical. Some panels from the 1980s are still operating at measurably reduced output today. Catastrophic failure from hail, fire, or mechanical damage is the usual reason a panel stops working entirely.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I replace old panels on an existing racking system?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes — this is called &quot;repowering.&quot; If your racking, wiring, and mounting are sound, swapping just the panels is cheaper than a full system redesign. Check with an installer for compatibility (newer panels may have different dimensions or electrical characteristics).</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What happens to my warranty if the installer goes out of business?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Workmanship warranty is typically lost. Manufacturer warranties on panels, inverters, and batteries remain — those are between you and the equipment manufacturer. Keep all paperwork and serial numbers.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Want Solar with Best-in-Class Warranties?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects you with installers offering 25-year product AND workmanship warranties — plus manufacturer warranties that protect you even if the installer closes.</p>
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
