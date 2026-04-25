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
  title: 'Switch to Solar in California: The 2026 Complete Guide',
  description: "Everything California homeowners need to know about switching to solar in 2026 — the NEM 3.0 rules, financing options, what it costs, how long it takes, and the 5-step process.",
  alternates: { canonical: '/blog/switch-to-solar-california' },
  openGraph: { title: 'Switch to Solar in California: The 2026 Complete Guide', description: 'A complete step-by-step guide to switching to solar in California in 2026.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Switch to Solar in California: The 2026 Complete Guide',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/switch-to-solar-california' },
};

export default function SwitchToSolar() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Switch to Solar in California: The 2026 Complete Guide"} url="https://ratereliefca.com/blog/switch-to-solar-california" datePublished="2026-04-23" dateModified="2026-04-24" description={"Everything California homeowners need to know about switching to solar in 2026 — the NEM 3.0 rules, financing options, what it costs, how long it takes, and the 5-step process."} />
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Getting Started</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Switch to Solar in California: The 2026 Complete Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>10 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Switching to solar in California in 2026 is a different process than it was three years ago. The NEM 3.0 tariff changed the math. Battery storage is now essentially mandatory for solid economics. The federal tax credit situation shifted. And the installer landscape has consolidated — Freedom Forever filed Chapter 11 last week, Sunnova went through Chapter 11 in June 2025. This guide walks through the complete process: deciding if solar is right for you, comparing installers and financing, getting through installation and interconnection, and what to expect on your first few utility bills.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Step 1 — Decide If You Should Switch</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before comparing installers, confirm solar actually makes sense for your situation. The core test: is your monthly electric bill above $200? Do you have a south or west-facing roof with reasonable sun exposure? Are you staying in the home for at least 7 years (cash/loan) or willing to transfer a lease/PPA to a future buyer?
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If yes to all three, solar probably works for you. If your bill is under $150 or your roof is heavily shaded, the math is harder — see our{' '}<Link href='/blog/are-solar-panels-worth-it-california' className='text-primary hover:underline'>full is-it-worth-it analysis</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Step 2 — Pick Your Financing Path</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California has four common ways to pay for solar:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Cash:</strong> $22-$35K upfront, own the system, lowest lifetime cost, claim the federal tax credit.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Solar loan:</strong> $0 down typical, own the system, finance $30-$45K over 15-25 years. Watch for dealer fees.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Solar lease:</strong> $0 down, installer owns system, fixed monthly rate. No tax credit for you.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>PPA:</strong> $0 down, installer owns system, per-kWh rate. California Rate Relief Program is a PPA.</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The best fit depends on your credit, savings, and how long you&apos;ll stay in the house. Our{' '}<Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary hover:underline'>cash vs loan vs lease vs PPA breakdown</Link>{' '}runs the numbers for each.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Step 3 — Get Multiple Quotes</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Don&apos;t sign with the first installer. Get at least 2-3 quotes and compare system size, equipment (panel brand, inverter type, battery capacity), total cost, monthly payment (for financed/lease/PPA), and warranty length. Insist on a production guarantee of 90%+.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Active California installers in 2026 include{' '}<Link href='/solar-installers/sunrun-review' className='text-primary hover:underline'>Sunrun</Link>,{' '}<Link href='/solar-installers/tesla-solar-review' className='text-primary hover:underline'>Tesla Solar</Link>,{' '}<Link href='/solar-installers/sunpower-review' className='text-primary hover:underline'>SunPower</Link>,{' '}<Link href='/solar-installers/momentum-solar-review' className='text-primary hover:underline'>Momentum</Link>,{' '}<Link href='/solar-installers/semper-solaris-review' className='text-primary hover:underline'>Semper Solaris</Link>,{' '}<Link href='/solar-installers/solar-optimum-review' className='text-primary hover:underline'>Solar Optimum</Link>, and several regional players. See our full{' '}<Link href='/best-solar-companies-california' className='text-primary hover:underline'>Best Solar Companies in California</Link>{' '}hub.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Avoid companies in active bankruptcy:{' '}<Link href='/solar-installers/freedom-forever-review' className='text-primary hover:underline'>Freedom Forever</Link>{' '}(Chapter 11 April 2026) and{' '}<Link href='/solar-installers/sunnova-review' className='text-primary hover:underline'>Sunnova</Link>{' '}(Chapter 11 June 2025, now SunStrong) are both still taking customers but the warranty confidence is weaker than a financially stable installer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Step 4 — Sign, Install, Interconnect</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                After you sign the contract, the typical timeline is: <strong>1-3 weeks</strong> for site survey and engineering, <strong>2-6 weeks</strong> for permit approval through your local city or county, <strong>1-2 days</strong> for physical installation on the roof, <strong>2-4 weeks</strong> for utility interconnection (&quot;Permission to Operate&quot; or PTO). Total contract-to-PTO in California is typically 2-4 months.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can&apos;t turn the system on until you have PTO. Flipping the switch early triggers an unpermitted-generation fine from the utility and can cascade into permit issues.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Step 5 — First Year on Solar</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your first utility bill after PTO will look different. You&apos;ll see your daily production, your daily consumption, your net import or export, and a running credit/debit total. California uses an annual true-up — your bill settles once every 12 months based on your cumulative net position. Monthly bills through the year show either small charges (the fixed charge plus any grid consumption not offset by solar) or small credits. At true-up, you either pay the remaining annual difference or carry a credit forward.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most California households see their total annual utility cost drop by $2,000-$4,000 after switching to solar + battery — on top of avoiding the rate inflation that would otherwise hit them 6-12% per year.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Mistakes to Avoid</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Signing with the first installer who knocks on your door.</strong> Door-to-door solar sales is a high-pressure channel. Always compare at least 2-3 quotes.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Skipping the battery under NEM 3.0.</strong> A solar-only system under the current tariff has much weaker economics. If the installer isn&apos;t proposing a battery, ask why.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Not checking the installer&apos;s financial health.</strong> 25-year warranty from a company in bankruptcy is worth less than 25-year warranty from a solvent company. Check SEC EDGAR for public installers and recent news for private ones before signing.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Agreeing to a loan without seeing the cash price.</strong> Dealer fees on solar loans can add 15-25% to the financed amount. Always ask for both cash and financed pricing.
              </p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Ready to Switch to Solar?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief works with multiple top-rated California installers. Fill out one 60-second form, get up to three quotes, compare side by side.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
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
