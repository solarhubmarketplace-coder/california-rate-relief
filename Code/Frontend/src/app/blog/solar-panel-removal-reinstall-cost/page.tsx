import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Panel Removal and Reinstall Cost in California (2026 Guide)',
  description:
    'Average R&R cost is $1,000-$3,500 or $200-$500 per panel. Learn why you need removal and reinstall, costs by roof type, and whether it voids warranties.',
  alternates: {
    canonical: '/blog/solar-panel-removal-reinstall-cost',
  },
  openGraph: {
    title:
      'Solar Panel Removal and Reinstall Cost in California (2026 Guide)',
    description:
      'What does it cost to remove and reinstall solar panels? Here&apos;s the breakdown for tile, shingle, and flat roofs.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar Panel Removal and Reinstall Cost in California (2026 Guide)',
  description:
    'Solar panel removal and reinstall costs $1,000-$3,500 on average. Learn what impacts price, whether it voids warranties, and how to budget for roof work.',
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
    '@id': 'https://ratereliefca.com/blog/solar-panel-removal-reinstall-cost',
  },
};

export default function SolarPanelRemovalReinstallCost() {
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
                Installation Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Panel Removal and Reinstall Cost in California (2026 Guide)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>7 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The most common reason homeowners need solar panel removal and reinstall (R&R) is roof replacement. The average cost in California is $1,000 to $3,500 for the labor, or roughly $200 to $500 per panel. If you&apos;re doing a full roof replacement, add the R&R cost to your roofing estimate. If you&apos;re upgrading panels or moving them for other reasons, this article breaks down costs, timelines, warranty implications, and what to expect from contractors.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Actually Costs Money in R&R
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panel removal and reinstall has distinct cost components: labor to disconnect and remove panels, roof work (repair, replacement, or inspection), labor to reinstall and reconnect panels, electrical inspection and permits if required, and any replacement hardware (mounting rails, flashings, clamps).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Labor dominates the cost.</strong> A typical 8 kW residential system has 20 to 22 panels. Removing them safely takes 1 day (6 to 8 hours), and reinstalling takes another full day. Contractors charge $100 to $250 per hour for this skilled work, so labor alone runs $800 to $2,000. Adding roof work, electrical reconnection, and permits can push total R&R to $3,000 to $5,000 or more, especially on tile roofs.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The panels themselves don&apos;t cost extra — they&apos;re being reused. But if a panel is damaged during removal, replacement cost is $300 to $600 per panel depending on wattage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why You Need Removal and Reinstall
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Roof replacement (the #1 reason).</strong> If your roof is reaching end-of-life (typically 20-30 years for asphalt shingles, 40-50 for tile), solar panels must come off so roofers can replace decking, underlayment, and shingles. This is the most common scenario, and the good news is that your panels aren&apos;t damaged — they&apos;re just temporarily removed.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Roof repairs.</strong> Sometimes you don&apos;t need a full replacement. A large section of roof damage from storm, hail, or age might require removal of panels in that section, repair of the roof, and reinstall of the panels.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>System upgrades.</strong> If you want to expand capacity, upgrade to higher-wattage panels, or reconfigure the system layout, panels may need removal and reinstall in a new configuration.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Home sale or interior changes.</strong> Some buyers request panel removal if they want to negotiate, or you might relocate panels if plans for roof access change. This is less common but happens.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Cost Breakdown by Roof Type
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Asphalt shingle roofs:</strong> The easiest roof type for R&R. Panel removal is straightforward, and reinstall is quick. Labor cost: $800 to $1,500 for a typical 8 kW system. This is the baseline.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Tile roofs:</strong> Much more expensive and delicate. Roofers must carefully remove (or slide out) tile around mounting rails, and breakage is common. Replacement tiles cost $10 to $50 per tile depending on quality. R&R labor cost: $2,000 to $4,000 or more. Budget extra for tile replacement — expect 10 to 20 percent of tiles to break during removal and reinstall. On a 300-tile roof, that&apos;s 30 to 60 tiles at $15-$30 each = $450 to $1,800 in tile replacement alone.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Flat (membrane) roofs:</strong> Common on commercial buildings and some homes. Removal and reinstall are straightforward, but roofing contractors must carefully cut and reseal the membrane. Labor: $1,200 to $2,500. Membrane repair adds $300 to $800.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Metal roofs:</strong> Fast to work with, minimal damage risk. Labor: $800 to $1,500.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Timeline
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical R&R takes 2 to 4 days: Day 1 — disconnect wiring, remove mounting hardware, lift panels safely. Day 2-3 — roof work (repair, replacement, inspection). Day 4 — reinstall mounting rails, panels, and wiring; electrical inspection and reconnection.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your roof requires major work (full replacement), R&R might extend to 1 to 2 weeks depending on roof size and complexity. Weather delays are common — roofers won&apos;t work in heavy rain or on very hot days.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Does R&R Void Your Warranties?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>The short answer: No, if done properly.</strong> Panel warranties cover manufacturing defects, not installation or removal. As long as R&R is performed by a licensed, qualified installer and nothing is damaged in the process, warranties remain intact.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Roof warranty is trickier.</strong> If you&apos;re replacing your roof, the new roof warranty typically covers the full roof. But some roofers will note that solar was removed and reinstalled, which they consider &quot;non-standard work.&quot; Make sure your new roofer and solar contractor coordinate so the roofer knows solar will be reinstalled and plans accordingly. A good roofing contract will specify the condition of the roof after work (including areas that will receive solar rails) so there&apos;s no dispute later.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Inverter warranty:</strong> Removal and reinstall do not affect inverter warranties. The inverter stays on the wall and is not disturbed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                If You Have a PPA or Lease
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your system is financed through a PPA or lease, the company that owns the panels is responsible for removal and reinstall costs. You should not pay out-of-pocket. Contact your agreement holder (the company named on your contract) as soon as you know your roof needs work, and they will arrange R&R at their expense.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is one advantage of PPAs and leases — major maintenance and unexpected costs are covered. The trade-off is you don&apos;t own the system, but the contract holder absorbs R&R risk.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Budgeting for R&R as an Owner
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you own your system and anticipate roof work within the next 5 to 10 years, budget for R&R now. Most homeowners don&apos;t realize it&apos;s a cost until the roof contractor gives a quote.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Conservative estimate: $1,500 to $3,000 for labor alone (asphalt shingle roof). Tile roof: $3,000 to $6,000. Add roof repair or replacement costs on top of R&R costs. If you&apos;re comparing the total cost of roof replacement, expect R&R to add 10 to 20 percent to the roofing bill.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panel removal and reinstall is a necessary cost if you replace your roof or perform major roof repairs. Expect $1,000 to $3,500 in labor costs for a typical residential system, more if you have a tile roof (due to tile breakage). Proper R&R doesn&apos;t void panel or inverter warranties if done by a licensed installer. If you have a PPA or lease, the system owner covers R&R costs, not you. Plan ahead if you know your roof is aging, and coordinate with both your roofer and solar contractor to avoid surprises and ensure the job is done right.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Understanding Long-Term Solar Costs?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re evaluating whether solar makes sense for your home, check your eligibility with the California Rate Relief Program in about 60 seconds.
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
                href='/blog/solar-panel-maintenance-cost'
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
