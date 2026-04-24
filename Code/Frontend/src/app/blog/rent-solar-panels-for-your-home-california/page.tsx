import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Rent Solar Panels For Your Home: California 2026 Guide",
  description: "Renting solar panels in California — how solar leases and PPAs actually work, typical monthly costs, who qualifies, and when renting beats owning.",
  alternates: { canonical: '/blog/rent-solar-panels-for-your-home-california' },
  openGraph: { title: "Rent Solar Panels For Your Home: California 2026 Guide", description: "How to rent solar panels in California via lease or PPA.", type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Rent Solar Panels For Your Home: California 2026 Guide',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/rent-solar-panels-for-your-home-california' },
};

export default function RentSolarPanels() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Financing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Rent Solar Panels For Your Home: California 2026 Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                &quot;Renting&quot; solar panels is the everyday way people describe two very specific California solar products: a <strong>solar lease</strong> and a <strong>power purchase agreement (PPA)</strong>. In both cases, the solar installer or a financing partner owns the system on your roof, and you pay a monthly amount for the electricity it produces. You don&apos;t own the hardware and you don&apos;t claim the federal tax credit — but you also don&apos;t pay anything upfront, and the monthly payment is almost always lower than your current utility bill. Here&apos;s how the &quot;rent solar&quot; model actually works in California in 2026.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Lease vs PPA — The Two Ways to &quot;Rent&quot; Solar</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A <strong>solar lease</strong> works like renting an apartment: you pay a fixed monthly amount (typically $150-$250 for a residential system in California) regardless of how much electricity the system produces. The lease term is usually 20-25 years. Most leases include an annual escalator of 1-3.9%, meaning your monthly payment goes up slightly each year.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A <strong>PPA (power purchase agreement)</strong> is similar but priced per kWh rather than flat-rate. Instead of paying a fixed $200/month, you pay a contracted rate — typically 5 to 15¢ per kWh in California — for whatever the system produces. A month where the system generates 800 kWh costs you more than a month it generates 500 kWh. PPAs also typically have a 2.9-3.9% annual escalator.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Either way, you&apos;re &quot;renting&quot; the solar in the sense that you don&apos;t own it. The installer owns the hardware, handles the maintenance, and keeps the federal tax credit.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Qualifies to Rent Solar in California?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Requirements vary by provider, but typical qualifications are: homeowner (not renter), credit score above 650 (some programs go to 600), monthly utility bill above $150, south/west-facing roof with minimal shade, utility account with PG&amp;E, SCE, SDG&amp;E, LADWP, SMUD, or one of the smaller California utilities the installer supports.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Renters can&apos;t rent solar (the homeowner has to sign the lease/PPA — it&apos;s attached to the property). Homes with structural roof issues, severe shade, or wood shake roofs may be declined until those are resolved.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Much It Actually Costs</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a typical California home with a $250/month electric bill: a properly sized lease or PPA usually comes in around $150-$200/month. You still have a small remaining utility bill (the $24 fixed charge, plus any grid consumption not offset by solar), so your combined monthly energy cost lands at roughly $180-$230/month — $20-$70 less than before, locked in for 20-25 years.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery included in the lease/PPA (highly recommended under NEM 3.0), the combined monthly often drops further because the battery captures more of the solar production for your own use instead of exporting at low rates.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Trade-Offs</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Pros:</strong> no upfront cost, no maintenance responsibility, system and battery are included, contract usually transfers to the next buyer if you sell, monthly payment is almost always less than your utility bill.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Cons:</strong> you don&apos;t own the system, you don&apos;t get the federal tax credit, lifetime savings are lower than cash or loan (though still substantial — typically $30K-$40K over 25 years), annual escalator can add up over 25 years, transfer to a new owner adds a step when selling your home.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When &quot;Renting&quot; Solar Makes the Most Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Leases and PPAs are the right fit if you don&apos;t have $25-40K in savings for a cash purchase, don&apos;t want to take on a $30K+ solar loan, aren&apos;t sure you&apos;ll stay in the house for 20+ years (lease/PPA transfers), or don&apos;t have taxable income to use the federal tax credit anyway. For most California homeowners with a $150+ monthly utility bill, a well-structured lease or PPA produces immediate net savings from month one.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For the full breakdown of cash vs loan vs lease vs PPA with California-specific math, see our{' '}<Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary hover:underline'>PPA Loan vs Solar Lease vs Cash comparison</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can you actually rent solar panels?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. The industry calls it a &quot;solar lease&quot; or &quot;PPA.&quot; You don&apos;t own the panels; you pay monthly for the electricity they produce. No upfront cost.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What happens if I sell my house?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>The lease/PPA transfers to the buyer if the buyer qualifies. It adds a step to closing but is routine for California real-estate transactions. Some buyers see the lower monthly energy bill as a selling point; others balk at the transfer. Disclose the lease in your MLS listing.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What if the installer goes bankrupt?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Your lease or PPA typically survives bankruptcy — it&apos;s an asset that gets sold to a new owner who takes over servicing. See the{' '}<Link href='/solar-installers/sunnova-review' className='text-primary hover:underline'>Sunnova review</Link>{' '}for a detailed example of how that played out for 500,000 legacy customers.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is renting solar worth it in California under NEM 3.0?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>For most California homeowners, yes — especially with a battery included in the lease/PPA. Monthly savings are usually $30-$80 vs the utility-only bill, locked in for 20-25 years, with the installer absorbing all NEM 3.0 export-economics complexity on your behalf.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>See What Renting Solar Would Cost For Your Home</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a PPA product — $0 down, fixed monthly rate below your current utility bill. Free eligibility check, no impact on your credit score.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
