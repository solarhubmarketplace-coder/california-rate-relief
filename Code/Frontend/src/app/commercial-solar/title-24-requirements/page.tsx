import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock, AlertTriangle } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'California Title 24 Part 6 Commercial Solar Requirements 2026',
  description: "California's 2025 Energy Code (Title 24 Part 6) makes solar PV + battery storage mandatory for most new nonresidential buildings permitted after January 1, 2026. Here is what qualifies, sizing rules, and compliance.",
  alternates: { canonical: '/commercial-solar/title-24-requirements' },
  openGraph: { title: 'California Title 24 Part 6 Commercial Solar Requirements 2026', description: 'Title 24 solar mandate for new California commercial buildings.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'California Title 24 Part 6 Commercial Solar Requirements 2026',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar/title-24-requirements' },
};

export default function Title24Requirements() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link><span>/</span>
              <Link href='/commercial-solar' className='hover:text-primary transition-colors'>Commercial Solar</Link><span>/</span>
              <span className='text-foreground font-medium'>Title 24 Requirements</span>
            </nav>

            <div className='mb-6 rounded-xl border-2 border-blue-500/40 bg-blue-500/10 p-5'>
              <div className='flex items-start gap-3'>
                <AlertTriangle className='h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs font-bold uppercase tracking-widest text-blue-300 mb-1'>Effective January 1, 2026</p>
                  <p className='text-foreground font-semibold leading-relaxed'>California&apos;s 2025 Energy Code expands PV + battery storage requirements to most new nonresidential buildings with permits pulled after January 1, 2026. If you&apos;re planning new commercial construction or a major renovation in California, this directly affects your project.</p>
                </div>
              </div>
            </div>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>California Building Code</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>California Title 24 Part 6 Commercial Solar Requirements 2026</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Title 24 Part 6 Energy Code has required solar on new residential construction since 2020. The 2025 Energy Code — effective for permits pulled after January 1, 2026 — expands the mandate to cover most new nonresidential buildings. That&apos;s offices, retail, schools, restaurants, warehouses, distribution centers, and more. If you&apos;re developing commercial real estate in California in 2026, solar + battery storage is no longer optional for most project types.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Changed in the 2025 Code</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 2022 Energy Code introduced commercial solar requirements for specific building types. The 2025 Energy Code expands the list significantly. Covered nonresidential building types now include:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Offices</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Retail (general merchandise, grocery, etc.)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Schools (K-12 and higher ed)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Restaurants</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Warehouses and distribution centers</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Additional occupancy classes added in 2025 (see current CEC docs for full list)</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Battery storage is mandatory wherever PV is required.</strong> This is the major change from prior code versions — it&apos;s no longer just solar; it&apos;s solar + storage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How PV Sizing Is Calculated</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Title 24 offers two methods for determining required PV system size:
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Capacity-factor method.</strong> The code specifies a minimum PV capacity based on the building&apos;s conditioned floor area and occupancy type. Each building type has its own factor.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Solar Access Roof Area (SARA) method.</strong> Applies a PV wattage per square foot of qualifying roof area: approximately <strong>14-18 W/sf depending on roof slope</strong>. Flat or low-slope roofs generally fall in the higher end of the range.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Mixed-occupancy buildings (e.g., retail on ground floor + office above) have specific rules for apportioning the PV requirement across occupancy classes. Your project architect and energy consultant handle the calculation; verify it&apos;s correct before permits are pulled because errors are expensive to fix post-construction.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Battery Storage Sizing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Wherever PV is required, battery storage is now required alongside it. Sizing methodology follows the 2025 code&apos;s specific rules based on PV capacity and building type. The battery is intended to enable load-shifting and reduce peak-hour grid draw — aligning with California&apos;s grid-reliability goals and the NEM 3.0 / Net Billing Tariff economics that already favor on-site storage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What About Existing Commercial Buildings?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Title 24 Part 6 is a new-construction and major-renovation code. Existing commercial buildings that aren&apos;t being permitted for substantial alteration are not subject to the new PV + storage mandate. That said, if you&apos;re doing a significant tenant improvement, addition, or reroof, Title 24 alteration requirements may trigger PV or efficiency upgrades depending on scope — check with your project architect.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Practical Implications</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For developers planning California commercial projects permitted in 2026 and beyond:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li><strong>Budget for PV + battery from day one.</strong> The mandate adds meaningful cost — typically $100K-$500K+ on mid-size commercial projects depending on building size. Baking it into the pro-forma at design rather than treating it as a surprise change-order is essential.</li>
                <li><strong>Choose a commercial EPC with Title 24 expertise.</strong> The sizing, interconnection, and Title 24 compliance documentation is specialized work. EPCs that regularly handle commercial new construction (as opposed to retrofit-only installers) will have the workflow down.</li>
                <li><strong>Consider oversizing for operational benefit.</strong> The code specifies a minimum PV + battery size. Going meaningfully larger can reduce your building&apos;s operating energy cost substantially, especially given California commercial rates and TOU structures. The incremental cost per watt on a larger system is lower than on the code-minimum-only install.</li>
                <li><strong>Don&apos;t forget the 30% ITC.</strong> Even though the solar is code-required, the federal Investment Tax Credit still applies to the full system cost. Same with MACRS depreciation. Title 24 compliance and federal tax incentives are independent — you get both.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does Title 24 require solar on all new California commercial buildings?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Most, but not all. The 2025 Energy Code expanded the covered occupancy classes to include most common commercial building types — offices, retail, schools, restaurants, warehouses — but some specialty categories are still exempt. Check the current CEC Title 24 documentation for your specific project type.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>When does the 2025 Energy Code take effect?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Permits pulled after January 1, 2026 are subject to the 2025 Energy Code. Projects with permits submitted before that date remain under the 2022 Energy Code.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is battery storage really mandatory?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, wherever PV is required under the 2025 code, battery storage is also required. This is the biggest change from the 2022 code.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I still claim the federal tax credit on Title-24-required solar?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. The federal Investment Tax Credit (30% base through 2032) applies regardless of whether the solar is code-required or voluntary. Same with 5-year MACRS depreciation. Title 24 compliance and federal incentives don&apos;t conflict.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Planning New California Commercial Construction?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>Get Title 24-compliant PV + battery design quotes from commercial EPCs familiar with the 2025 Energy Code. California Rate Relief routes your project to qualified partners.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-10'><Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="title24" /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
