import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Panel Maintenance Cost: What to Expect in 2026',
  description:
    'Annual maintenance costs average $390-$720. Learn about cleaning, monitoring, common repairs, and why PPA holders pay nothing.',
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
    'Solar panel annual maintenance costs $390-$720 on average. Learn what&apos;s involved, when DIY is okay, and what PPA owners should expect.',
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
                Solar panels are one of the lowest-maintenance energy systems you can own. Annual maintenance typically costs $390 to $720 for an average residential system, and much of that comes down to optional cleaning. For many California homeowners, maintenance is negligible. But if you own your system, it&apos;s worth understanding what maintenance involves, when it&apos;s critical, and how to budget for it. PPA and lease holders have a big advantage here — maintenance is usually included in the contract.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Maintenance Actually Costs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Professional cleaning:</strong> $120 to $350 per system, typically $0.50 to $1.50 per panel. For a 20-panel system, expect $150 to $300 per cleaning session. In California&apos;s dry climate, one or two professional cleanings per year is sufficient.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Annual inspections:</strong> $150 to $300 (covered in the solar panel inspection article). Needed every 3 to 5 years if system is functioning normally; more frequently if you suspect problems.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Monitoring and diagnostics:</strong> Most modern systems include free cloud-based monitoring (Enphase app, SolarEdge app, etc.). No additional cost. These apps alert you to performance drops or inverter errors automatically.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Inverter replacement:</strong> Not annual, but plan ahead. String inverter (covers whole system): $1,000 to $3,000 to replace, needed every 10 to 15 years. Microinverters ($200 to $400 each, one per panel) last 20 to 25 years. Budget $100 to $200 per year into a replacement fund if your inverter is past 10 years old.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Typical annual budget:</strong> Year 1-9: $150 to $350 (cleaning only). Year 10+: $250 to $600 (cleaning plus preventive inspection, inverter replacement fund).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Cleaning: Is It Really Necessary?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Dust, pollen, bird droppings, and leaf debris reduce panel output by 5 to 25 percent depending on local conditions and how long panels go without cleaning. In California&apos;s dry climate, soiling is slower than in humid regions, but it still matters.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>When cleaning makes sense:</strong> If your system is in a dusty area (near gravel roads, agricultural zones, or high-traffic roads), professional cleaning 2 times per year pays for itself in recovered output. If you&apos;re in an urban area with moderate soiling, 1 cleaning per year is usually enough. If your area gets regular rain and your panels have a steep tilt angle (&gt;25 degrees), rain cleans them naturally — you might skip professional cleaning altogether.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>DIY cleaning:</strong> You can clean panels yourself with a soft brush and water hose, but be cautious. Avoid high pressure washers (they can damage seals), and never walk on panels unsafely. If your system is on an easy-access roof and you&apos;re comfortable on ladders, DIY saves money. If your roof is steep or high, hire a professional.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Monitoring: The Free Early-Warning System
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Every modern solar system includes cloud-based monitoring. Check your app monthly to spot issues early. Look for unexpected drops in output, inverter error codes, or one panel consistently underperforming (sign of damage or shading).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>What to watch for:</strong> A sudden 20 to 30 percent drop in output (not seasonal) usually indicates soiling, inverter malfunction, or a large shaded tree. A gradual decline over months is normal degradation. Loss of output from just one panel while others produce normally suggests that panel is damaged or shaded.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Cost: $0.</strong> Monitoring is included free with any modern system. Use it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Common Issues and Repair Costs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Inverter failure:</strong> $1,000 to $3,000 replacement + installation labor. This is the single most common expensive repair. String inverters last 10 to 15 years; microinverters last 20 to 25.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Cracked or damaged panel:</strong> $300 to $600 per panel replacement. Rare unless there&apos;s physical damage (hail, accident, improper installation).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Wiring or connector corrosion:</strong> $200 to $800 to repair. More common in coastal areas (salt air) or very old systems. A professional inspection catches this.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Loose mounting hardware:</strong> $100 to $400 to re-tighten and inspect. Usually discovered during professional cleaning or inspection.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Bird damage/nesting:</strong> $200 to $500 to remove debris or install bird proofing. Preventable with early bird-proofing (see article: Solar Panel Bird Proofing).
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
                <strong>Annually (or as needed):</strong> Schedule professional cleaning, especially if you notice dust/soiling in quarterly checks. Cost: $150 to $300.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Every 3-5 years:</strong> Professional inspection ($200 to $300) to catch wiring corrosion, loose hardware, and electrical issues before they become problems.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Every 10 years:</strong> Full inverter assessment. If your inverter is approaching 10 to 15 years, start budgeting for replacement ($2,000 to $4,000 installed).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                PPA and Lease Owners: You&apos;re Off the Hook
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you financed your system through a PPA or lease, maintenance is almost always included in your contract. The company that owns the panels is responsible for cleaning, inspections, repairs, and inverter replacement. You pay a fixed rate per kWh for electricity; the system owner handles upkeep.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is a major financial advantage of PPAs and leases. You avoid the uncertainty of $1,000+ inverter replacement costs and never have to budget for maintenance surprises. The trade-off is you don&apos;t own the system and can&apos;t claim tax benefits, but the contract holder assumes all maintenance risk.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panel maintenance costs $390 to $720 annually for typical California systems, mostly driven by optional professional cleaning. Monitoring is free and essential. Inverter replacement ($1,000 to $3,000) will eventually be necessary but only every 10 to 15 years. If you own your system, budget $100 to $200 annually for maintenance and inspection. If you have a PPA or lease, maintenance is the system owner&apos;s responsibility, not yours — another financial advantage of financing options. Regular monitoring, annual or bi-annual cleaning in dusty areas, and professional inspection every 3 to 5 years will keep your system running efficiently for decades.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want to Know Your Best Solar Option?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re weighing owned systems versus PPAs or leases, check your eligibility with the California Rate Relief Program in about 60 seconds.
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
