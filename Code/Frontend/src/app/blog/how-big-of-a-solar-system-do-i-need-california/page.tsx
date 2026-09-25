import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { HubUpLink } from '@/components/growth/HubUpLink';

export const metadata: Metadata = {
  title: "How Big of a Solar System Do You Need in California?",
  description: "Size your California solar system from your kWh usage: NREL-based production factors, a 5-12 kW table, real panel counts, and what NEM 3 changes.",
  alternates: { canonical: '/blog/how-big-of-a-solar-system-do-i-need-california' },
  openGraph: { title: 'How Big of a Solar System Do You Need in California?', description: 'Solar system sizing for California homes.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/how-big-of-a-solar-system-do-i-need-california');
const CRUMB_LABEL = 'How big a solar system you need';

export default function HowBigSolarSystem() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"How Big of a Solar System Do You Need in California?"} url="https://ratereliefca.com/blog/how-big-of-a-solar-system-do-i-need-california" datePublished="2026-04-23" dateModified="2026-09-22" description={"How to size a solar system for your California home in 2026 — by monthly bill, by kWh usage, and by specific loads (EV, AC, pool). Plus why NEM 3.0 changes the optimal sizing."} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>System Sizing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>How Big of a Solar System Do You Need in California?</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The right solar system size depends on three things: how much electricity your home actually uses, how much of it you want solar to cover, and how much roof space you have. For most California homes in 2026, the answer lands somewhere between 6 kW and 12 kW with one or two batteries. Here&apos;s how to figure out your specific number without relying on an installer&apos;s sales pitch.
              </p>
              <HubUpLink path="/blog/how-big-of-a-solar-system-do-i-need-california" />

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="California solar system size calculator" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Basic Sizing Formula</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Pull your last 12 months of utility bills. Add up the total kWh consumed. Divide by 12 for your monthly average. Most California homes fall in the 500-1,500 kWh/month range; heavier users (pools, EV, all-electric with heat pump) go higher.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rough rule of thumb in California: every 1 kW of solar panels produces about 1,400-1,800 kWh per year (roughly 4.0-5.0 sun-hours per day, accounting for the state&apos;s climate). So to offset a 900 kWh/month (10,800 kWh/year) household, you need roughly 6.5-7.5 kW of solar.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is a household calculation. A business property is sized against its own tariff, its demand profile and the meters the array is expected to serve, and it is quoted per watt rather than as a system price &mdash; <Link href='/commercial-solar/cost-per-watt-california' className='text-primary hover:underline'>commercial solar cost per watt in California</Link> is where that starts.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Sizing by Annual kWh (NREL-Sourced Production Factor)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The bill-average method above is a fast estimate. For a firmer number, use your actual annual usage: <strong>system size (kW-DC) = annual usage (kWh) / California production factor (kWh per kW-DC per year)</strong>.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                NREL&apos;s Annual Technology Baseline bins U.S. locations into resource classes by average daily solar irradiance (GHI) and reports the first-year DC capacity factor for a representative 7.9 kW-DC fixed-tilt, roof-mounted residential system in each class. Most of California&apos;s populated area &mdash; coastal, Central Valley, and inland &mdash; falls in Classes 1 through 4 (GHI 5.0 kWh/m&sup2;/day and up), which post capacity factors of 17.0% to 19.6%. Multiplied by 8,760 hours/year, that&apos;s roughly <strong>1,490 to 1,720 kWh of AC output per kW-DC installed, per year</strong>, before year-over-year panel degradation.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Worked example: a home using 11,000 kWh/year divides out to 11,000 / 1,600 (the range&apos;s midpoint) = 6.9 kW, so a 7 kW system.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This also cross-checks the electrification adders below: +200-400 kWh/month of EV charging is +2,400-4,800 kWh/year, which at 1,490-1,720 kWh/kW works out to roughly +1.4 to +3.2 kW of added array &mdash; in the same range as the +2-4 kW stated below (roughly 1.4-3.2 kW at the low end of the NREL-derived factor, versus the page&apos;s existing 2-4 kW planning figure).
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>System size vs. annual production</h3>
              <div className='overflow-x-auto rounded-xl border border-border my-6'>
                <table className='min-w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>System size</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Annual production (low-high)</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Panels today (415-470W)*</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Roof area needed*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>5 kW</td><td className='px-4 py-3 text-foreground/80'>7,450-8,600 kWh</td><td className='px-4 py-3 text-foreground/80'>11-13 panels</td><td className='px-4 py-3 text-foreground/80'>~235-245 sq ft</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>6 kW</td><td className='px-4 py-3 text-foreground/80'>8,940-10,320 kWh</td><td className='px-4 py-3 text-foreground/80'>13-15 panels</td><td className='px-4 py-3 text-foreground/80'>~282-294 sq ft</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>8 kW</td><td className='px-4 py-3 text-foreground/80'>11,920-13,760 kWh</td><td className='px-4 py-3 text-foreground/80'>18-20 panels</td><td className='px-4 py-3 text-foreground/80'>~376-392 sq ft</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>10 kW</td><td className='px-4 py-3 text-foreground/80'>14,900-17,200 kWh</td><td className='px-4 py-3 text-foreground/80'>22-25 panels</td><td className='px-4 py-3 text-foreground/80'>~470-490 sq ft</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>12 kW</td><td className='px-4 py-3 text-foreground/80'>17,880-20,640 kWh</td><td className='px-4 py-3 text-foreground/80'>26-29 panels</td><td className='px-4 py-3 text-foreground/80'>~564-588 sq ft</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='text-sm text-muted-foreground mb-6'>
                *Panel count and roof area ranges reflect two current manufacturer lines sold in California: Qcells Q.TRON BLK M-G2+ (415-440W, 67.8 x 44.6 in, 46.7 lbs) and REC Alpha Pure-RX (450-470W, 68.0 x 47.4 in, 50.0 lbs). Roof area works out to about 47-49 sq ft per kW-DC with today&apos;s larger, higher-wattage panels (vs. the ~45 sq ft/kW implied by the 400W panel used elsewhere on this page) &mdash; panels have gotten more powerful and physically larger at roughly the same rate.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Once you have a target size from the table above, run it through the <Link href='/solar-cost' className='text-primary hover:underline'>solar cost calculator</Link> for a price range before talking to an installer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Many Panels Is That? (Today&apos;s Panel Wattages)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                To calculate panel count for any target size: <strong>panels needed = target kW x 1,000 / panel wattage</strong>, rounded up. A 7 kW target at 440W per panel is 7,000 / 440 = 15.9, so 16 panels. At 460W it&apos;s 15.2, so 16 panels either way &mdash; but at the lower end of today&apos;s common range (415W) the same 7 kW target takes 17 panels, and at the higher end (470W) it takes 15. That&apos;s why two installers can quote different panel counts for the same system size: they&apos;re using different panels, not sizing your home differently.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                One panel&apos;s own annual output, for reference: a single 415-470W panel in California&apos;s higher-resource regions produces roughly 620-810 kWh/year (about 1.7-2.2 kWh on an average day), using the same NREL-sourced production factor above.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>NEM 3 and the Oversize-vs-Right-Size Decision</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Because NEM 3.0 credits exported solar at the avoided-cost rate instead of the retail rate (see <Link href='/blog/what-is-nem-3-california' className='text-primary hover:underline'>how NEM 3 changed the math</Link> for the exact rate comparison), the old advice to &ldquo;size up&rdquo; no longer pencils out on its own. Target your actual annual usage plus any EV or heat-pump load you&apos;re planning within the next few years &mdash; not your roof&apos;s full capacity. If you want to capture extra midday production instead of exporting it at the lower rate, a <Link href='/battery' className='text-primary hover:underline'>home battery</Link>, sized separately from the solar array, is what makes a larger system pay off; see <Link href='/battery/how-many-batteries-do-i-need-california' className='text-primary hover:underline'>how many batteries you need</Link> for that math.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Where to Find Your Annual Usage</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your sizing math is only as good as the usage number you start with. Pull a full 12 months, not one bill:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>PG&amp;E:</strong> Log in at pge.com, open the usage section (Energy Usage Tools), and switch the graph to &ldquo;year&rdquo; view, or use Green Button to download 12+ months of interval data.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>SCE:</strong> Log in to My Account at sce.com and open the Usage tab, which graphs billed usage by period; change the date range to pull prior months.</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>SDG&amp;E:</strong> Log in to My Energy Center (linked from your SDG&amp;E account), open the Usage tab, select Electric, and use Green Button Download to export a full year of interval data.</span></li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Sizing by Monthly Bill (Rough Guide)</h2>
              <div className='overflow-x-auto rounded-xl border border-border my-6'>
                <table className='min-w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Monthly Bill</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Typical System Size</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Battery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$100-$150</td><td className='px-4 py-3 text-foreground/80'>4-5 kW</td><td className='px-4 py-3 text-foreground/80'>Optional</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$150-$250</td><td className='px-4 py-3 text-foreground/80'>5-7 kW</td><td className='px-4 py-3 text-foreground/80'>1 battery</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$250-$400</td><td className='px-4 py-3 text-foreground/80'>7-10 kW</td><td className='px-4 py-3 text-foreground/80'>1-2 batteries</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 text-foreground/80'>$400+</td><td className='px-4 py-3 text-foreground/80'>10-15 kW+</td><td className='px-4 py-3 text-foreground/80'>2-3 batteries</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Upgrades That Change the Math</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Electric vehicle.</strong> Adding an EV adds roughly 200-400 kWh/month to your bill. That&apos;s another 2-4 kW of solar capacity. See{' '}<Link href='/blog/solar-panels-for-ev-charging-california' className='text-primary hover:underline'>our EV charging guide</Link>.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Heat pump or all-electric conversion.</strong> Replacing a gas furnace or gas water heater with electric equivalents shifts load to your panel. Adds maybe 1-3 kW of solar need depending on home size.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Pool pump.</strong> Variable-speed pumps run 1-2 kWh/hour while operating. Typical California pool adds 150-400 kWh/month.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Air conditioning.</strong> Summer AC in hot inland California (Central Valley, Inland Empire) can add 400-800 kWh/month during peak season — another 2-4 kW of solar capacity worth including.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>NEM 3.0 Changes the Optimal Sizing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 2.0, oversizing was a smart strategy — export everything at retail rate, build up credits. Under NEM 3.0, exports credit at much lower avoided-cost rates, so oversizing has less return. The new optimal design: match panel capacity to your household consumption relatively closely and include battery storage for self-consumption. Your installer shouldn&apos;t propose a 15 kW system for a 700 kWh/month household under NEM 3.0 — the extra 8 kW would mostly export at low rates.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Roof Space Reality Check</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Each modern 400W solar panel is roughly 18 square feet. A 7 kW system is about 18 panels, or roughly 325 square feet of roof. Most California single-family homes can fit 10 kW of panels on their south/west-facing roof area. Larger systems (15+ kW) may need either a second roof face, a ground mount, or a carport integration. Your installer&apos;s site survey determines the real limit. Before sizing anything, check <Link href='/blog/is-my-roof-good-for-solar-california' className='text-primary hover:underline'>whether your roof can carry it</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How many solar panels do I need for a 2000 sq ft house?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Depends on usage more than square footage. A 2000 sq ft California home using 800 kWh/month needs roughly 6-7 kW (15-18 panels). All-electric with EV? More like 10-12 kW (25-30 panels).</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Should I size my solar for future needs (EV, heat pump)?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes — if you expect to add an EV or electrify within 5 years, size the solar for that future load. It&apos;s cheaper to install a larger system upfront than to expand later (each capacity addition can split you between NEM tariff versions).</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I oversize to sell electricity back to PG&amp;E/SCE/SDG&amp;E?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Under NEM 3.0, the export economics don&apos;t reward oversizing. Credits are at avoided cost, which the CPUC says is usually lower than the retail rate, not at retail. Installers shouldn&apos;t propose systems massively larger than your consumption.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do I need a battery?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Under NEM 3.0, for most California homeowners — yes. Solar without a battery exports daytime production at low rates and pulls evening load from the grid at high rates. Battery self-consumption flips that math.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How much energy does one solar panel produce in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>A current 415-470W residential panel produces roughly 620-810 kWh per year in California&apos;s sunnier regions — about 1.7-2.2 kWh on an average day. The exact figure depends on the panel&apos;s wattage, your roof&apos;s orientation and shading, and your specific location&apos;s solar resource, but that range is a reasonable planning number for any single panel in a fixed-tilt roof-mount install.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Sized for Your Specific Home</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="California solar system size calculator" />
            </div>
            <RelatedGuides
              heading="Sizing storage alongside the array"
              links={[
                { href: "/battery/how-many-batteries-do-i-need-california", label: "How many batteries the load actually needs" },
                { href: "/battery/home-battery-cost-california", label: "What a home battery costs in California" },
                { href: "/solar-problems/running-ac-with-solar-california", label: "Whether the sizing covers all-day cooling" },
              ]}
            />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
