import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'Commercial Solar Companies in California 2026: Top EPCs Compared',
  description:
    "The top California commercial solar companies in 2026 — SOLV Energy, Baker Electric, REC Solar, Cenergy Power, M Bar C, plus CleanCapital and Borrego/New Leaf. Side-by-side on systems, financing, and notable projects.",
  alternates: { canonical: '/commercial-solar/companies-california' },
  openGraph: {
    title: 'Commercial Solar Companies in California 2026: Top EPCs Compared',
    description: 'Top California commercial solar EPCs compared for 2026.',
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Commercial Solar Companies in California 2026: Top EPCs Compared',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar/companies-california' },
};

interface EPC {
  name: string;
  ownership: string;
  focus: string;
  systems: string;
  financing: string;
  notable: string;
  strength: string;
  watchOut: string;
}

const epcs: EPC[] = [
  {
    name: 'SOLV Energy',
    ownership: 'Private (PE-backed)',
    focus: 'Major EPC; utility-scale + active C&I',
    systems: '500 kW to multi-MW',
    financing: 'EPC-focused; partners on PPA and CPACE',
    notable: '1.1+ GW total CA installs in 2024 data; large C&I and community solar projects 2024-2026',
    strength: 'Deep EPC bench, large-project execution capability, strong utility-scale experience that informs commercial work',
    watchOut: 'Primarily utility-scale — mid-market C&I may be a smaller priority than their largest accounts',
  },
  {
    name: 'Baker Electric Solar (Commercial Division)',
    ownership: 'Private',
    focus: 'C&I rooftop and carport specialist',
    systems: '100 kW to MW+',
    financing: 'Direct sale, PPA, and lease partnerships',
    notable: '66,000+ kW of California installs; rooftop and carport portfolio',
    strength: 'California-based with long local track record; strong relationships with CA utilities for interconnection',
    watchOut: 'Smaller footprint than SOLV; ideal for mid-market rather than multi-MW campus projects',
  },
  {
    name: 'REC Solar',
    ownership: 'Private (historically Duke Energy subsidiary; now independent IPP focus)',
    focus: 'Developer/IPP; C&I and community solar',
    systems: 'Mid to large',
    financing: 'Owns/operates assets; PPA model dominant',
    notable: '4,700+ kW of CA installs listed; 700+ projects nationally',
    strength: 'Developer/operator model means they can carry the system as their asset — good fit for PPA-hungry commercial buyers',
    watchOut: 'Less relevant if you want direct ownership; PPA-heavy structure',
  },
  {
    name: 'Cenergy Power',
    ownership: 'Private, California-based',
    focus: 'Commercial and agricultural EPC',
    systems: 'Mid to large',
    financing: 'Direct sale, PPA, CPACE',
    notable: '450+ MW cumulative; multiple CA agricultural and commercial projects 2024-2025',
    strength: 'CA-native with strong agricultural focus — worth evaluating if your property is in the Central Valley or agricultural corridors',
    watchOut: 'Lower national visibility than SOLV/Baker; local-CA focus is both an advantage and a limit',
  },
  {
    name: 'M Bar C Construction',
    ownership: 'Private',
    focus: 'Carport and parking-structure specialist',
    systems: 'Parking-lot solar canopies, typically 500 kW to multi-MW',
    financing: 'EPC / subcontractor structure',
    notable: '#1 commercial-only installer in California per Solar Power World; 15 MW Viejas Casino carport; Six Flags carport 2024-2025',
    strength: 'Unmatched specialization in carports/canopies — if you have parking to cover, they are the benchmark',
    watchOut: 'Not a fit for rooftop-only or non-parking-lot commercial projects',
  },
];

export default function CommercialSolarCompanies() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-4xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/commercial-solar' className='hover:text-primary transition-colors'>Commercial Solar</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>California EPCs</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Commercial Solar California</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Commercial Solar Companies in California 2026: Top EPCs Compared</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none mb-10'>
              <p className='text-lg text-foreground/80 leading-relaxed'>
                California commercial solar — 915 MWdc installed in 2025, growing 28% year-over-year — is concentrated among a handful of EPCs and developers that handle most of the state&apos;s non-residential projects. This guide profiles the five most prominent commercial-focused players per Solar Power World&apos;s 2025 Top California Contractors List, plus notes on financing partners (CleanCapital, Borrego/New Leaf Energy) that shape the market. All data is cross-referenced against SPW, company filings, and industry reporting.
              </p>
            </div>

            {/* Individual EPC cards */}
            <section className='space-y-6 mb-12'>
              {epcs.map((e, idx) => (
                <div key={e.name} className='p-6 rounded-xl border border-border bg-card'>
                  <div className='flex items-start justify-between gap-4 mb-4'>
                    <div>
                      <div className='text-xs font-bold text-primary uppercase tracking-wide mb-1'>#{idx + 1}</div>
                      <h2 className='text-2xl font-bold text-foreground tracking-tight'>{e.name}</h2>
                      <p className='text-sm text-muted-foreground mt-1'>{e.ownership}</p>
                    </div>
                  </div>

                  <div className='grid sm:grid-cols-2 gap-3 mb-4 text-sm'>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1'>Focus</p>
                      <p className='text-foreground/80'>{e.focus}</p>
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1'>Typical systems</p>
                      <p className='text-foreground/80'>{e.systems}</p>
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1'>Financing</p>
                      <p className='text-foreground/80'>{e.financing}</p>
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1'>Notable</p>
                      <p className='text-foreground/80'>{e.notable}</p>
                    </div>
                  </div>

                  <div className='grid sm:grid-cols-2 gap-3'>
                    <div className='flex items-start gap-2'>
                      <CheckCircle2 className='h-4 w-4 text-green-500 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Strength</p>
                        <p className='text-sm text-foreground/80'>{e.strength}</p>
                      </div>
                    </div>
                    <div className='flex items-start gap-2'>
                      <AlertTriangle className='h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5' />
                      <div>
                        <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Watch-out</p>
                        <p className='text-sm text-foreground/80'>{e.watchOut}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Other market participants */}
            <section className='mb-12 prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>Other California Commercial Solar Market Participants</h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Beyond the five EPCs above, a few other players shape the California commercial market:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li><strong>CleanCapital</strong> — Private financier / IPP that acquires California DG portfolios (27 MW noted in 2025 activity). Not a primary installer, but a common PPA off-taker / portfolio buyer who ultimately owns the system on your roof.</li>
                <li><strong>Borrego Solar (now New Leaf Energy)</strong> — Borrego spun off its development arm as New Leaf Energy in 2022. ECP-backed. Focuses on distributed generation and commercial development rather than residential.</li>
                <li><strong>Sunworks, SunPeak, CB&amp;I Solar, GAF Energy</strong> — Lower commercial volume or residential/utility overlap in 2025 SPW data. Not top-tier in commercial-only California installs.</li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The commercial solar landscape is less consolidated than residential — fewer household names and more specialist EPCs competing on local relationships, interconnection expertise, and financing partnerships. If you&apos;re shopping commercial solar in California, get quotes from at least three EPCs that actually specialize in commercial (not residential installers with a commercial division), and confirm their familiarity with your utility&apos;s specific interconnection queue and the commercial TOU tariff your property is on.
              </p>
            </section>

            {/* Data caveat */}
            <div className='mb-12 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5'>
              <div className='flex items-start gap-3'>
                <AlertTriangle className='h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>Data caveat</p>
                  <p className='text-sm text-foreground/80 leading-relaxed'>Exact 2025-2026 install volumes, BBB complaint counts, and lawsuit details for every player were not uniformly available in three independent public sources. Profiles here rely on Solar Power World&apos;s 2025 California Contractors List, company websites and press, and PV Magazine USA coverage. No major bankruptcies or restructurings were noted for the five listed firms in 2025-2026.</p>
                </div>
              </div>
            </div>

            {/* Related commercial resources */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>Related Commercial Solar Resources</h2>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/commercial-solar/financing-options' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Commercial Solar Financing Options</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/commercial-solar/cost-per-watt-california' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Commercial Solar Cost Per Watt</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/commercial-solar/cpace-financing-california' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>CPACE Financing in California</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/commercial-solar/title-24-requirements' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Title 24 Part 6 Requirements</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
              </div>
            </section>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Quotes From California Commercial Solar EPCs</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed'>California Rate Relief connects commercial property owners with the state&apos;s top commercial solar EPCs. Submit your project details once — we&apos;ll route them to qualifying partners for direct-purchase, PPA, lease, and CPACE financing quotes.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
              <p className='text-xs text-muted-foreground mt-4'>Free. No obligation. Commercial project details routed to qualified California EPCs.</p>
            </div>

            <div className='mt-10'>
              <Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="general" /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
