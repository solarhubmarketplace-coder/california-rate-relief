import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock, Building2, Factory, Wrench, DollarSign } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'Commercial Solar in California 2026: EPCs, Financing, and the Full Guide',
  description:
    "California installed 915 MW of commercial solar in 2025 (28% YoY growth). Here is a complete 2026 guide to the market, top EPCs, financing (PPA/lease/CPACE), NEM 3.0 impact, Title 24 requirements, and how to get quotes.",
  alternates: { canonical: '/commercial-solar' },
  openGraph: {
    title: 'Commercial Solar in California 2026: EPCs, Financing, and the Full Guide',
    description: '915 MW installed in 2025 at 28% YoY growth. Complete commercial solar guide for California.',
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Commercial Solar in California 2026: EPCs, Financing, and the Full Guide',
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar' },
};

export default function CommercialSolarHub() {
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
              <span className='text-foreground font-medium'>Commercial Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Commercial Solar California</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Commercial Solar in California 2026: EPCs, Financing, and the Full Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>12 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none mb-10'>
              <p className='text-lg text-foreground/80 leading-relaxed'>
                California installed approximately <strong>915 MWdc of commercial solar in 2025</strong> — about 39% of the national commercial total — with the state growing 28% year-over-year while the national commercial segment grew only 6%. Commercial solar in California is its own market, with different economics, different financing tools, different tax treatment, and different key players than residential. This guide covers the market landscape, the top California commercial EPCs, the financing mechanisms (PPA, lease, direct purchase, CPACE), the 2025 Title 24 Energy Code requirements taking effect in 2026, and how to actually get competitive quotes.
              </p>
            </div>

            {/* Key stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <div className='text-2xl font-extrabold text-primary'>915 MW</div>
                <div className='text-xs text-muted-foreground mt-1'>CA commercial installed 2025</div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <div className='text-2xl font-extrabold text-primary'>+28%</div>
                <div className='text-xs text-muted-foreground mt-1'>YoY CA commercial growth</div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <div className='text-2xl font-extrabold text-primary'>39%</div>
                <div className='text-xs text-muted-foreground mt-1'>of national commercial market</div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <div className='text-2xl font-extrabold text-primary'>30%</div>
                <div className='text-xs text-muted-foreground mt-1'>federal ITC through 2032</div>
              </div>
            </div>

            {/* Sub-topic cards */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>Explore the California Commercial Solar Guide</h2>
              <div className='grid md:grid-cols-2 gap-4'>
                <Link href='/commercial-solar/companies-california' className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                  <Building2 className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>Commercial Solar Companies in California</h3>
                  <p className='text-sm text-foreground/80'>SOLV Energy, Baker Electric Solar, REC Solar, Cenergy Power, M Bar C Construction — the top California commercial EPCs.</p>
                </Link>
                <Link href='/commercial-solar/financing-options' className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                  <DollarSign className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>Commercial Solar Financing</h3>
                  <p className='text-sm text-foreground/80'>PPA, lease, direct ownership, and CPACE. 30% ITC, 5-year MACRS, and direct-pay for non-profits.</p>
                </Link>
                <Link href='/commercial-solar/cost-per-watt-california' className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                  <Factory className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>Commercial Solar Panels Cost</h3>
                  <p className='text-sm text-foreground/80'>$1.1-$3.50 per watt by system size. National commercial average is ~$1.72/Wdc in 2025.</p>
                </Link>
                <Link href='/commercial-solar/title-24-requirements' className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                  <Wrench className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>Title 24 Part 6 Requirements</h3>
                  <p className='text-sm text-foreground/80'>2025 Energy Code makes PV + battery storage mandatory for most new nonresidential buildings permitted after January 1, 2026.</p>
                </Link>
                <Link href='/commercial-solar/cpace-financing-california' className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                  <DollarSign className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>CPACE Financing in California</h3>
                  <p className='text-sm text-foreground/80'>30-year fixed-rate commercial PACE via CSCDA Open PACE. Non-recourse, transfers with property sale.</p>
                </Link>
                <Link href='/commercial-solar/sgip-battery-storage' className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                  <Factory className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>SGIP Commercial Battery Storage</h3>
                  <p className='text-sm text-foreground/80'>Self-Generation Incentive Program rebates for commercial storage. Large-scale budget closed Dec 2025.</p>
                </Link>
                <Link href='/commercial-solar/vnem-aggregation-multi-meter' className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                  <Building2 className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>VNEM &amp; NEM Aggregation</h3>
                  <p className='text-sm text-foreground/80'>How Virtual Net Metering lets one array credit multiple meters on contiguous parcels. AB 2175 expansion for logistics/manufacturing.</p>
                </Link>
              </div>
            </section>

            <h2 className='text-2xl font-bold text-foreground mt-12 mb-4 tracking-tight'>The California Commercial Solar Market in 2026</h2>
            <div className='prose prose-slate max-w-none'>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California is the largest commercial solar market in the United States. Of the 2,345 MWdc of commercial solar installed nationally in 2025, approximately 915 MWdc (39%) was in California. Q4 2025 alone contributed 195 MW from the state. The 28% year-over-year growth reflects a pull-through of the NEM 2.0 legacy pipeline — 70 to 90% of late-2025 California commercial installs were still on NEM 2.0 rules, rushing through before grandfathering deadlines closed.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The dollar value of the 2025 California commercial market is estimated at <strong>$1.4 to $1.6 billion</strong>, using the national commercial average installed price of $1.72 per Wdc (which rose 10% year-over-year). State-specific pricing for California commercial was not verified in public data across three independent sources, so that range is directional.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>Typical system sizes by segment</h3>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Small business (under 50 kW):</strong> 10-50 kW rooftop or small ground-mount; ~$1.83-$3.50/W pre-incentive</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Mid-market (50-500 kW):</strong> 100-400 kW typical; ~$1.40-$2.00/W</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Large C&amp;I (500 kW+):</strong> 500 kW to several MW; ~$1.10-$1.70/W</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Agricultural:</strong> Often ground-mount 100 kW-2 MW; overlaps with above</span></li>
              </ul>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>How NEM 3.0 Changed Commercial Solar Economics</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                NEM 3.0 (the Net Billing Tariff, NBT) took effect for new commercial interconnection applications submitted after April 2023. The tariff replaced NEM 2.0&apos;s retail-rate export credits with time-varying avoided-cost rates, reducing export compensation by roughly 75%. The economic consequence for commercial: self-consumption and on-site storage matter much more than exporting excess production to the grid.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Commercial solar buyers respond differently than residential because commercial rate schedules (TOU-8, B-19, AL-TOU-2) have larger demand charges and different peak periods. A commercial solar + storage system sized to shave peak demand during the critical afternoon hours can produce bill savings that go beyond the simple kWh math — the demand-charge reduction alone often justifies the storage add-on for mid-size and larger C&amp;I buyers.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>Top California Commercial Solar Players</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s commercial solar market is concentrated among a handful of EPCs and developers. The most prominent players based on Solar Power World&apos;s 2025 rankings and company filings:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>SOLV Energy</strong> — Major EPC with 1.1+ GW of California installs in 2024 (mix of utility and C&amp;I)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Baker Electric Solar (commercial division)</strong> — Strong C&amp;I presence; rooftop + carport specialist</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>REC Solar</strong> — Developer/IPP; active C&amp;I + community solar (700+ projects nationally)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Cenergy Power</strong> — California-based EPC; 450+ MW cumulative; agricultural and commercial</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>M Bar C Construction</strong> — Carport/parking-structure specialist; #1 commercial-only installer in CA per SPW</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Full profiles on the{' '}<Link href='/commercial-solar/companies-california' className='text-primary hover:underline'>California commercial solar companies</Link>{' '}page.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Commercial Solar Quotes for Your California Property</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed'>California Rate Relief connects commercial property owners with California&apos;s top commercial solar EPCs. Fill out the form — we&apos;ll route your project details to the right partners for quotes on direct purchase, PPA, lease, and CPACE financing.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
              <p className='text-xs text-muted-foreground mt-4'>Free. No obligation. Commercial project details routed to qualified California EPCs.</p>
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
