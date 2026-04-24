import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sullivan Solar Power Review 2026: Company Is Defunct — What Former Customers Need to Know",
  description: "Sullivan Solar Power closed its doors in late 2021, leaving customers with unfinished installs, lost deposits, and subcontractor liens. Here's what to do if you're a former Sullivan customer, or found this company in a search.",
  alternates: { canonical: '/solar-installers/sullivan-solar-power-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Sullivan Solar Power Review 2026: The Company Is Defunct",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/sullivan-solar-power-review' },
};

export default function SullivanReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <Link href='/best-solar-companies-california' className='hover:text-primary'>Best Solar Companies in California</Link><span>/</span>
              <span className='text-foreground font-medium'>Sullivan Solar Power</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wide'>⚠️ Defunct — Do Not Use</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sullivan Solar Power: The Company Is Defunct (What Former Customers Should Know)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>5 min read</span></div>
              </div>
            </header>

            <div className='p-5 rounded-xl border-2 border-red-500/40 bg-red-500/5 flex gap-3 items-start mb-10'>
              <AlertTriangle className='h-6 w-6 text-red-600 flex-shrink-0 mt-0.5' />
              <div>
                <div className='font-bold text-foreground mb-1'>Sullivan Solar Power is closed.</div>
                <div className='text-sm text-foreground/80'>The company locked its doors in late 2021, leaving customers with unfinished installations, lost deposits, and contractor liens on their homes. If an active solar sales rep is still using the Sullivan Solar Power name, verify very carefully. It is likely a separate entity or misrepresentation.</div>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-4 mb-4'>What Happened</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sullivan Solar Power was founded in San Diego in 2004 and for more than 15 years was one of the most respected residential solar installers in Southern California. The company routinely ranked among the top local installers on EnergySage and SolarReviews, with excellent ratings from its active years. That reputation is why the 2021 closure caught many customers off guard.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In late 2021 Sullivan Solar Power abruptly ceased operations. Reports from former customers surfaced across Reddit, BBB, and San Diego local news covering the same themes:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Active installations stopped mid-project, with roofs left in partially completed states.</li>
                <li>Customer deposits — sometimes $5,000 to $20,000+ — were lost.</li>
                <li>Subcontractors who hadn&apos;t been paid filed mechanic&apos;s liens on homeowner properties, creating title clouds.</li>
                <li>Warranty claims for existing Sullivan-installed systems had no entity to honor them.</li>
                <li>Panel and inverter manufacturer warranties (the panel warranty itself, direct from the manufacturer) remain valid — but the Sullivan-specific workmanship and production warranties lost their backer.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>If You Were a Sullivan Customer</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Several practical steps for former Sullivan customers:
              </p>
              <ol className='list-decimal pl-6 space-y-2 text-foreground/80 mb-6'>
                <li><strong>Panel and inverter warranties are still valid.</strong> Manufacturer warranties (Qcells, REC, Canadian Solar, Enphase, SolarEdge, etc.) are with the manufacturer, not with Sullivan. Filed a claim directly with the manufacturer if your panels or inverter fail.</li>
                <li><strong>Workmanship warranty is gone.</strong> If you have a roof leak or wiring issue traced to Sullivan&apos;s install quality, you&apos;ll need to hire a new licensed California C-46 solar contractor to assess and repair. At your own cost.</li>
                <li><strong>Check for mechanic&apos;s liens on your property.</strong> If you bought a home where Sullivan had installed solar and subcontractors weren&apos;t paid, there may be a lien recorded against the property. Pull a title report.</li>
                <li><strong>Monitoring accounts likely still work.</strong> If Sullivan set up Enphase Enlighten or SolarEdge monitoring under your own account, that&apos;s still active. If it was under Sullivan&apos;s installer account, contact Enphase / SolarEdge directly to claim ownership of your system in the monitoring platform.</li>
                <li><strong>Permission to Operate (PTO) stays valid.</strong> Once the utility issued PTO, your interconnection is between you and the utility; not Sullivan. That doesn&apos;t go away.</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>If You&apos;re Looking at an Installer Who Claims to Be Sullivan</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Be extremely cautious. The original Sullivan Solar Power entity is closed. Any active operation using the Sullivan name is either:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>A completely different company with a similar name.</li>
                <li>A former employee who has started their own operation and may or may not have legal authority to use the Sullivan brand.</li>
                <li>A misrepresentation to trade on the former company&apos;s historical reputation.</li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Verify the CSLB (California Contractors State License Board) license number and confirm active status at <a href='https://www.cslb.ca.gov' target='_blank' rel='noopener noreferrer' className='text-primary underline'>cslb.ca.gov</a> before signing anything. The original Sullivan Solar Power license is no longer active.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Alternative San Diego Installers</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Several reputable California installers serve the San Diego market with established reputations:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li><Link href='/solar-installers/baker-electric-solar-review' className='text-primary underline'>Baker Electric Solar</Link>; Escondido-based, family-owned since 1938, strong reputation.</li>
                <li><Link href='/solar-installers/solar-optimum-review' className='text-primary underline'>Solar Optimum</Link> — 4.8/5 EnergySage, covers SoCal including San Diego County.</li>
                <li><Link href='/solar-installers/sunpower-review' className='text-primary underline'>SunPower (Complete Solaria)</Link>. National installer with strong SD footprint.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Sullivan Solar Power still in business?</h3><p className='text-foreground/80'>No. The company closed in late 2021.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Are my Sullivan-installed solar panels still covered by warranty?</h3><p className='text-foreground/80'>Panel and inverter manufacturer warranties remain valid with the manufacturer directly. Sullivan&apos;s workmanship and production warranties are no longer enforceable; those are gone with the company.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Who do I call if my Sullivan system has a problem?</h3><p className='text-foreground/80'>For panel/inverter failures: the manufacturer directly (Qcells, REC, Enphase, SolarEdge, etc.). For installation-quality issues: any licensed California C-46 solar contractor can diagnose and repair; at your expense.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What if I still have a deposit with Sullivan that was never refunded?</h3><p className='text-foreground/80'>Consult a consumer-protection attorney about filing with the California Department of Consumer Affairs or the San Diego County Superior Court. Unfortunately, most former Sullivan customers were unable to recover lost deposits.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Looking for a Live San Diego Solar Installer?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple active, licensed California installers serving San Diego County. Fill out one 60-second form and get quotes from up to three, so you can compare real options side by side.</p>
              <div className='flex justify-center'><Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Best Solar Companies in California</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
