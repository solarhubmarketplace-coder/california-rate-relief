import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'VNEM & NEM Aggregation California: Multi-Meter Commercial Solar',
  description: "How California's Virtual Net Metering (VNEM) and NEM Aggregation let one solar system credit multiple meters on the same or contiguous property. AB 2175 expansion for logistics/manufacturing (2025-2026).",
  alternates: { canonical: '/commercial-solar/vnem-aggregation-multi-meter' },
  openGraph: { title: 'VNEM & NEM Aggregation California: Multi-Meter Commercial Solar', description: 'California Virtual Net Metering and NEM Aggregation rules for commercial multi-meter properties.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'VNEM & NEM Aggregation California: Multi-Meter Commercial Solar',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar/vnem-aggregation-multi-meter' },
};

export default function VnemAggregation() {
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
              <span className='text-foreground font-medium'>VNEM &amp; Aggregation</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Commercial Multi-Meter Solar</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>VNEM &amp; NEM Aggregation California: Multi-Meter Commercial Solar</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Most California commercial properties have more than one utility meter — one for common areas, separate meters for each tenant, different meters for different buildings on the same parcel. Standard net metering credits only the meter the solar is interconnected through, which leaves most of the property&apos;s consumption uncovered. California&apos;s Virtual Net Energy Metering (VNEM) and NEM Aggregation rules solve this problem by letting one solar array credit multiple meters on the same or contiguous parcels. Here&apos;s how the rules actually work in 2026 and what changed with AB 2175.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>VNEM vs NEM Aggregation: The Core Difference</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Both VNEM and NEM Aggregation let a single solar facility offset multiple utility accounts on the same property, but they&apos;re structured differently:
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>VNEM (Virtual Net Energy Metering).</strong> Designed for multi-tenant commercial or residential properties under a single owner/operator (office buildings, shopping centers, apartment complexes, mixed-use). The solar array is on common-area infrastructure, and credits are allocated to individual tenant accounts per a pre-defined schedule filed with the utility.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>NEM Aggregation.</strong> Designed for a single owner/operator with multiple meters across their own property — e.g., a farm with a house meter, barn meter, and well-pump meter, or an industrial property with a main-building meter and separate ancillary-building meters. Credits from one solar array offset all the aggregated meters.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What VNEM Enables</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a multi-tenant commercial property, VNEM is often the only way to make solar economically viable. Without VNEM, the property owner would need to put solar on each tenant&apos;s meter individually — logistically impossible in many cases because of roof-access, tenant turnover, and splitting a single roof array across tenant meters.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                With VNEM, the owner installs one solar array, allocates the electricity credits per pre-defined rules, and benefits can be distributed to tenants (lower their bills, increase rentable-property-value), to common areas (reducing owner&apos;s operating cost), or a combination. The credit allocation schedule is locked when the system is interconnected but can be amended with utility approval if ownership or tenancy changes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>VNEM Under NEM 3.0 / NBT-A</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                With NEM 3.0 / the Net Billing Tariff replacing retail-rate export credits with avoided-cost rates, VNEM also transitioned. New VNEM projects on investor-owned utilities (PG&amp;E, SCE, SDG&amp;E) submitted after April 2023 are under <strong>Virtual Net Billing Tariff (VNBT-A)</strong> rules, which apply the same avoided-cost export compensation as residential NEM 3.0.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Legacy VNEM arrangements (pre-April 2023) continue under NEM 2.0 rules for the duration of their grandfather period (typically 20 years from interconnection). New commercial VNEM projects face the same self-consumption-favors-storage economics as residential NEM 3.0 — driving inclusion of on-site battery storage in most new commercial multi-meter projects.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>AB 2175 and Expanded Eligibility (2025-2026)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California Assembly Bill 2175, enacted in the 2025-2026 legislative cycle, expanded VNEM eligibility for logistics and manufacturing businesses that operate across multiple meters on contiguous or nearby parcels. Prior rules were stricter on what counted as a single property for aggregation purposes. AB 2175 broadens the definition and explicitly enables more industrial multi-meter configurations.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Practical impact: distribution warehouses, manufacturing campuses, and logistics centers with multi-building operations now have a clearer path to single-array solar that credits their whole operation. Confirm with your project EPC and utility that your specific configuration qualifies — AB 2175&apos;s implementation details are still being finalized with individual utility tariffs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Utility-Specific Details</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                VNEM and NEM Aggregation are implemented at the utility level, so the specific tariff schedules, application procedures, and eligibility rules differ by utility:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>PG&amp;E:</strong> Offers VNEM under Schedule NEM-V and aggregation under Schedule NEMA. New interconnections under the NBT-A framework.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>SCE:</strong> Offers VNEM under Schedule NEM-V and aggregation. New projects under NBT equivalent.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>SDG&amp;E:</strong> Offers VNEM and aggregation with similar structure.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Municipal utilities (LADWP, SMUD, etc.):</strong> Have their own NEM rules that differ from CPUC-regulated IOUs. Check the specific utility&apos;s commercial solar interconnection handbook.</span></li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Use Cases</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Multi-tenant office building.</strong> VNEM allocates roof-array credits across tenant meters + common areas. Owner benefits from reduced common-area cost; tenants benefit from lower bills (increased rentable-value).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Shopping center with anchor + inline stores.</strong> VNEM lets a rooftop or carport solar array serve the anchor tenant&apos;s high daytime load while allocating remaining credits to smaller tenants.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Agricultural operation with house + barn + well meters.</strong> NEM Aggregation aligns solar production against all farm-side loads, maximizing the offset across seasonal pumping needs.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Industrial campus with multiple buildings.</strong> Post-AB 2175, logistics and manufacturing campuses can aggregate meters more easily. One ground-mount or rooftop array serves multiple building meters.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Apartment complex.</strong> VNEM for common areas (laundry, lobbies, garage lighting, pool pumps) is well-established. Tenant-account allocation is more complex and depends on ownership structure.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can one solar array credit multiple meters in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes — via VNEM (Virtual Net Energy Metering) for multi-tenant properties or NEM Aggregation for single-owner multi-meter properties. Both are CPUC-regulated tariffs offered by California&apos;s investor-owned utilities.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does VNEM work under NEM 3.0?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, but new VNEM projects are under the Virtual Net Billing Tariff (VNBT-A) with avoided-cost export compensation rather than the legacy retail-rate credits. Economics favor self-consumption and on-site storage. Legacy VNEM projects are grandfathered for 20 years from interconnection.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What did AB 2175 change?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>AB 2175 (2025-2026) expanded VNEM eligibility for logistics and manufacturing businesses with multi-meter configurations across contiguous or nearby parcels. Prior rules were stricter on what counted as a single property for aggregation.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I use VNEM for my apartment building?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes for common-area offset. Tenant-account allocation depends on your ownership structure and specific utility tariff. Consult with an EPC familiar with multifamily VNEM and your local utility&apos;s specific schedule before assuming tenant allocation will work.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Multi-Meter Commercial Property? Get VNEM-Compatible Quotes.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects multi-tenant and multi-meter commercial property owners with EPCs that have VNEM and NEM Aggregation experience. One form, multiple quotes.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-10'><Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="vnem" /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
