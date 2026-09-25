import { SgipStatusNote } from '@/components/growth/SgipStatusNote';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';

export const metadata: Metadata = {
  title: "Tesla Powerwall Installers in California: 2026 Guide",
  description: "Who can install a Tesla Powerwall in California, how Tesla's certified installer program works, and what drives the installed price.",
  alternates: { canonical: '/blog/tesla-powerwall-installers-california' },
  openGraph: { title: 'Tesla Powerwall Installers in California: 2026 Guide', description: 'Guide to Tesla Powerwall installation in California.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/tesla-powerwall-installers-california');
const CRUMB_LABEL = 'Tesla Powerwall installers';

export default function TeslaPowerwallInstallers() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Tesla Powerwall Installers in California: 2026 Guide"} url="https://ratereliefca.com/blog/tesla-powerwall-installers-california" datePublished="2026-04-23" dateModified="2026-04-24" description={"Find certified Tesla Powerwall installers in California — how Tesla"} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <SgipStatusNote/>
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Battery Storage</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Tesla Powerwall Installers in California: 2026 Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Tesla Powerwall is the most widely installed residential battery in California in 2026. Under NEM 3.0&apos;s net billing rules, battery storage is essentially mandatory for solid solar economics — and Powerwall is the default choice for most California installers. Here&apos;s how to find a certified Tesla Powerwall installer in California, what installation actually costs, and what to watch for in quotes.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="Tesla Powerwall installation in California" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Can Install a Tesla Powerwall in California?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Tesla sells Powerwall directly through two channels: <strong>Tesla&apos;s own installation teams</strong> (operating in major California metros) and the <strong>Tesla Certified Installer</strong> program, whose installers Tesla lists in its own installer finder.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many California solar companies install batteries. Before choosing one, read the reviews of installers you are considering, such as{' '}<Link href='/solar-installers/sunrun-review' className='text-primary hover:underline'>Sunrun</Link>,{' '}<Link href='/solar-installers/semper-solaris-review' className='text-primary hover:underline'>Semper Solaris</Link>{' '}and{' '}<Link href='/solar-installers/solar-optimum-review' className='text-primary hover:underline'>Solar Optimum</Link>, and ask each whether it is a Tesla Certified Installer; confirm the answer in Tesla&apos;s installer finder.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Powerwall 3 vs Powerwall 2</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Powerwall 3 is Tesla&apos;s current-generation residential battery, with 13.5 kWh of usable storage and an integrated 11.5 kW solar inverter. It&apos;s the version most new California installs include. Powerwall 2 (13.5 kWh, no built-in inverter) is still supported but being phased out for new installs.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The integrated inverter in Powerwall 3 matters because it can remove the need for a separate solar inverter on a new solar-plus-battery install and simplifies the electrical design. For existing solar customers adding a battery, Powerwall 3 still works but the integrated inverter doesn&apos;t help since your existing inverter handles your panels.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Drives the Installed Cost in California</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Tesla does not publish a consumer installed price for California, and this page does not quote one. The price depends on the number of units, the electrical work, whether a panel upgrade is needed, and the installer. Get written quotes for the same configuration.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                There is no federal residential credit on a battery bought outright and installed in 2026: IRC § 25D does not apply to expenditures made after December 31, 2025. SGIP battery categories open, close and waitlist separately, so check the official tracker before counting on a rebate; a waitlist does not promise one.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why Powerwall Matters Under NEM 3.0</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under California&apos;s Net Billing Tariff (NEM 3.0), the CPUC says the credit for exported solar is usually lower than the retail rate you pay for grid power; the CPUC Public Advocates Office put the June 2026 residential averages at 33.7&cent; (PG&amp;E), 34.4&cent; (SCE) and 45.5&cent; (SDG&amp;E) per kWh. A Powerwall captures solar that would otherwise be exported and stores it for use in the evening, when time-of-use prices are highest. What that shift is worth depends on your evening usage and rate plan.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Powerwall also enables whole-home or partial-home backup during PG&amp;E, SCE, or SDG&amp;E outages — and with the frequency of Public Safety Power Shutoff (PSPS) events in fire-risk California regions, that resilience has real value beyond the bill savings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Finding the Right Installer</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Tesla&apos;s own direct installation is available in major California metros but with longer lead times. Certified installers typically install faster but quality varies by specific company. The certification program ensures technical competence on the Powerwall itself but doesn&apos;t guarantee install-quality or post-sale service.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Get at least 2 quotes — one from Tesla direct and one from a Certified Installer — before deciding, and compare them on the same configuration.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I install a Tesla Powerwall with my existing solar?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. Powerwall works with any solar inverter — Enphase, SolarEdge, SMA, etc. The Powerwall 3&apos;s integrated inverter is a bonus for new installs, not a requirement for retrofits.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How many Powerwalls do I need?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>For most California homes, one Powerwall 3 (13.5 kWh) handles nightly load and most short outages. Larger homes or homes with AC running overnight usually need two. An installer&apos;s load analysis will give you the right number.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does Powerwall qualify for California SGIP rebates?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. Tesla Powerwall is SGIP-eligible in California. Rebate amount depends on your utility, whether you&apos;re in a designated high-fire-risk area, and whether you qualify as a DAC or low-income customer. The rebate typically knocks $2,000-$8,000 off the installed cost.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is Powerwall worth it for the average California home?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Under NEM 3.0, yes — the self-consumption gain alone usually justifies the cost over a 10-year horizon, plus the resilience benefit during PSPS events and storms.</p>
            </div>

            {/* The closing ask is the inquiry form itself (2026-09-23); the link-only
                box it replaced sent this form-less page to the home page. */}
            <SolarInquiry topic="Tesla Powerwall installation in California" variant="review" />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
