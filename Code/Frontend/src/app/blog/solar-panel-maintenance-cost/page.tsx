import { SolarInquiry } from '@/components/growth/SolarInquiry';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Solar Panel Maintenance Cost in California: What Drives It",
  description: "What solar maintenance involves in California: cleaning, monitoring, inspections and inverter replacement, with NREL's benchmark for annual upkeep.",
  alternates: {
    canonical: '/blog/solar-panel-maintenance-cost',
  },
  openGraph: {
    title:
      'Solar Panel Maintenance Cost: What to Expect in 2026',
    description:
      'How much does it cost to maintain solar panels? Here&apos;s the breakdown of cleaning, inspections, and repairs.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar Panel Maintenance Cost: What to Expect in 2026',
  description:
    'What solar maintenance involves, when DIY is okay, what NREL uses as an annual upkeep benchmark, and what PPA and lease customers should check in their contract.',
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
    '@id': 'https://ratereliefca.com/blog/solar-panel-maintenance-cost',
  },
};

export default function SolarPanelMaintenanceCost() {
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
                Solar Panel Maintenance Cost: What to Expect in 2026
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
                Solar panels need little routine maintenance. The National Renewable Energy Laboratory&apos;s Annual Technology Baseline (2024 edition) uses $30 per kW of panels per year as its 2023 estimate for residential operation and maintenance, covering asset management, insurance products, cleaning, vegetation removal and component failure, and says the cost can range from $0 to $40 per kW a year depending on which of those practices a system gets. If you own your system, it&apos;s worth understanding what maintenance involves, when it&apos;s critical, and how to budget for it. PPA and lease contracts often assign maintenance to the system owner; check yours.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Maintenance Actually Costs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Professional cleaning:</strong> priced per visit or per panel; get a written quote. How often you need it depends on dust, pollen, birds and rain where you live.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Inspections:</strong> covered in the solar panel inspection article. A system that is producing normally needs them less often than one showing problems in its monitoring data.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Monitoring and diagnostics:</strong> Most modern systems come with cloud-based monitoring (Enphase app, SolarEdge app, etc.); check whether yours carries a subscription fee. These apps alert you to performance drops or inverter errors.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Inverter replacement:</strong> Not annual, but plan ahead. String inverters usually carry shorter warranties than panels, and microinverters usually carry longer ones; the warranty sheet for your model gives the term. Price a replacement before the warranty runs out so the cost is not a surprise.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Annual budget:</strong> NREL&apos;s $30 per kW a year works out to about $210 a year for a 7 kW system; its $0 to $40 range covers systems that get no paid upkeep up to those that get all of it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Cleaning: Is It Really Necessary?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Dust, pollen, bird droppings and leaf debris reduce panel output; how much depends on local conditions and how long panels go without cleaning. In California&apos;s dry climate, soiling is slower than in humid regions, but it still matters.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>When cleaning makes sense:</strong> If your system is in a dusty area (near gravel roads, agricultural zones, or high-traffic roads), compare the cleaning price with the output your monitoring shows you are losing. If you&apos;re in an urban area with moderate soiling, 1 cleaning per year is usually enough. If your area gets regular rain and your panels have a steep tilt angle (&gt;25 degrees), rain cleans them naturally — you might skip professional cleaning altogether.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>DIY cleaning:</strong> You can clean panels yourself with a soft brush and water hose, but be cautious. Avoid high pressure washers (they can damage seals), and never walk on panels unsafely. If your system is on an easy-access roof and you&apos;re comfortable on ladders, DIY saves money. If your roof is steep or high, hire a professional.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Monitoring: Your Early-Warning System
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most modern solar systems include cloud-based monitoring. Check your app monthly to spot issues early. Look for unexpected drops in output, inverter error codes, or one panel consistently underperforming (sign of damage or shading).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>What to watch for:</strong> A sudden drop in output that is not seasonal usually indicates soiling, inverter malfunction, or a large shaded tree. A gradual decline over months is normal degradation. Loss of output from just one panel while others produce normally suggests that panel is damaged or shaded.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Cost:</strong> usually included with the system; check whether yours has a subscription fee. Use it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Common Issues and Repair Costs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Inverter failure:</strong> replacement equipment plus installation labor. Check whether the inverter warranty covers labor as well as parts.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Cracked or damaged panel:</strong> replacement priced per panel. Rare unless there&apos;s physical damage (hail, accident, improper installation).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Wiring or connector corrosion:</strong> More common in coastal areas (salt air) or very old systems. A professional inspection catches this.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Loose mounting hardware:</strong> Usually discovered during professional cleaning or inspection.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Bird damage/nesting:</strong> debris removal or bird proofing. Preventable with early bird-proofing (see article: Solar Panel Bird Proofing).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Annual Maintenance Schedule
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Monthly:</strong> Check your monitoring app for unexpected output drops. Takes 30 seconds.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Quarterly:</strong> Walk around your roof and visually inspect panels for obvious debris, cracks, or nesting. From the ground is fine.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Annually (or as needed):</strong> Schedule professional cleaning, especially if you notice dust/soiling in quarterly checks.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Every few years:</strong> Professional inspection to catch wiring corrosion, loose hardware, and electrical issues before they become problems.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Before the inverter warranty ends:</strong> Full inverter assessment, and a written price for a replacement.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                PPA and Lease Customers: Check Who Maintains the System
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you have a PPA or lease, the company that owns the panels is usually responsible for repairs and inverter replacement; cleaning is sometimes left to you. The contract says which. You pay the per-kWh price (PPA) or monthly payment (lease) set in the contract, which may rise each year under an escalator.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                When the contract assigns repairs to the provider, you are not paying for an inverter replacement yourself. The trade-off is that you don&apos;t own the system, and the provider&apos;s obligations last only as long as the contract and the provider do.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                NREL&apos;s benchmark for residential upkeep is $30 per kW a year, within a $0 to $40 range, and most of the variation comes from cleaning and component failures. Monitoring is essential. An inverter replacement will eventually be necessary; the warranty term tells you roughly when to budget for it. If you have a PPA or lease, read which maintenance tasks the contract assigns to the provider. Regular monitoring, annual or bi-annual cleaning in dusty areas, and professional inspection every 3 to 5 years will keep your system running efficiently for decades.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want to Know Your Best Solar Option?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you are weighing an owned system against a PPA or lease and want a provider to review your project, you can send your details through the form on this page. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
              <Link
                href='#solar-inquiry'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Request a solar review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Solar panel maintenance cost and comparison" />
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
                href='/blog/solar-panel-bird-proofing'
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
