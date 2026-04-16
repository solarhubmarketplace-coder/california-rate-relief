import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Panel Inspection: What California Homeowners Need to Know (2026)',
  description:
    'Not required by law, but recommended. Learn what&apos;s included in a solar inspection, costs, signs you need one, and California-specific fire zone requirements.',
  alternates: {
    canonical: '/blog/solar-panel-inspection-california',
  },
  openGraph: {
    title:
      'Solar Panel Inspection: What California Homeowners Need to Know (2026)',
    description:
      'Is a solar inspection required? Not by law. Should you get one? Here&apos;s what you need to know.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar Panel Inspection: What California Homeowners Need to Know (2026)',
  description:
    'Solar panel inspections are not legally required but are recommended. Learn what&apos;s included, costs, and California fire zone requirements.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/blog/solar-panel-inspection-california',
  },
};

export default function SolarPanelInspectionCalifornia() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Maintenance &amp; Care
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Panel Inspection: What California Homeowners Need to Know (2026)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>6 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Solar panel inspections are not legally required in California, but they&apos;re increasingly recommended for system owners. If your panels are more than 3 to 5 years old, production has dropped unexpectedly, or you&apos;re preparing to sell your home, an inspection can identify problems early and keep your system running efficiently. Here&apos;s what a professional inspection includes, what it costs, and when you actually need one.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Do You Need a Solar Inspection? (The Honest Answer)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panel inspections are not required by California law. The Public Utilities Commission does not mandate regular inspections, and most homeowners never get one. However, there are specific situations where a professional inspection is valuable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Get an inspection if:</strong> Your system is over 10 years old and has never been formally inspected. You notice a production drop of more than 10 to 15 percent compared to historical output (check your monitoring app). You see visible damage — cracked glass, loose wiring, corrosion, or pest nesting. You&apos;re selling your home and want to verify system condition for buyers. You live in a high-fire-risk zone and need to verify fire-safety compliance.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You probably don&apos;t need one if:</strong> Your system is less than 10 years old with no visible damage and normal output. You have a PPA or lease (the contract holder is responsible for maintenance). Your monitoring system shows stable production with no anomalies.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What&apos;s Actually Included in an Inspection
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A professional solar inspection has three main components: visual inspection, electrical testing, and performance analysis.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Visual inspection:</strong> The technician walks the roof and examines panels for physical damage — cracks, discoloration, soiling, bird nesting, loose mounting hardware, and corrosion at junction boxes. They also check whether vegetation, debris, or neighboring structures are shading the system. This is what catches visible problems most homeowners don&apos;t notice.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Electrical testing:</strong> Using specialized equipment, they test wiring continuity, polarity, grounding, and electrical connections. They also inspect the inverter, disconnect switches, and breakers to ensure everything meets code. This catches wiring faults, water intrusion, and connection corrosion that visual inspection misses.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Performance analysis:</strong> They review your monitoring data and compare actual output to expected output based on solar irradiance, temperature, and panel specifications. This quantifies whether the system is underperforming due to soiling, equipment issues, or other problems. Good inspectors will provide a detailed report with recommendations.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Much Does It Cost?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A comprehensive solar inspection typically costs $150 to $350, with most homeowners paying around $200. Prices vary by system size, location, and inspector credentials.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Some installers include a complimentary annual inspection for the first few years after installation. If you&apos;re past that window and considering an inspection, expect to budget $200 to $300. That&apos;s a one-time cost — not a recurring maintenance bill — and it can prevent expensive repairs later.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DIY vs. Professional: When to Call a Licensed Tech
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can monitor your system&apos;s output through your app and visually check panels from the ground for obvious damage. But beyond that, a professional is necessary.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Don&apos;t DIY electrical testing.</strong> Voltage testing on live solar arrays requires specialized training, certification, and safety gear. A mistake can be fatal. California requires solar inspectors to hold a California contractor&apos;s license, typically a C-10 (electrician) or C-46 (solar) license. If someone offers to inspect your system without these credentials, skip them.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Finding the right inspector:</strong> Ask for recommendations from your original installer, check reviews on Google and Yelp, and confirm the inspector holds a current C-10 or C-46 license. Request a detailed written report that documents any issues and recommended repairs. A good inspector also has liability insurance in case they damage something on your roof.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California Fire Zone Requirements
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your home is in a California fire hazard severity zone (FHSZ), there are additional inspection and maintenance considerations. The state does not mandate inspections, but high-risk zones sometimes require verification that solar systems meet fire-safety standards.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>What to check in fire zones:</strong> Ensure panels are mounted with proper clearance (spacing from vegetation). Verify all wiring is enclosed in metal conduit or protected conduit rated for fire zones. Confirm disconnect switches are clearly labeled and accessible to firefighters. Check that no bird netting or debris accumulates under panels, as this creates fuel load.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar inspector familiar with your county&apos;s fire codes can verify compliance. This is especially important if you have older systems installed before fire-safety standards were strengthened, or if you&apos;re selling and need proof of compliance for buyers.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                If You Have a PPA or Lease
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your system is financed through a Power Purchase Agreement (PPA) or lease, you generally don&apos;t need to arrange inspections yourself. The contract holder (the company that owns the panels) is responsible for maintenance and inspections. They monitor the system remotely and send technicians if problems are detected.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                However, you can request that they perform an inspection if you suspect an issue. They&apos;re contractually obligated to maintain the system, so don&apos;t hesitate to report suspected problems.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Signs Your System Actually Needs Attention
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Specific warning signs justify calling a professional immediately: Visible cracks in panel glass. Discolored or browning edges (delamination). Visible corrosion at junction boxes or connectors. A 15 percent or greater drop in monthly output compared to the same season last year (check your monitoring app). Inverter displaying error codes or warnings. Water pooling on panels due to poor mounting. Bird nesting under or around panels.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Any of these warrant a call to a licensed technician. Early intervention prevents small problems from becoming expensive repairs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panel inspections are not legally required in California, but they&apos;re a smart investment if your system is over 10 years old, has visible damage, or shows unexpected performance drops. A comprehensive inspection costs roughly $200 to $300 and can catch problems before they become expensive repairs. If you live in a high-fire-risk zone, an inspection provides peace of mind and verification of fire-safety compliance. For owned systems, treat an inspection as optional maintenance — not mandatory — but worthwhile every 3 to 5 years.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Curious About Your System&apos;s Health?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re evaluating solar or want to understand your options, check your eligibility with the California Rate Relief Program in about 60 seconds.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Articles
              </Link>
              <Link
                href='/blog/solar-panel-removal-reinstall-cost'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Next Article
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
