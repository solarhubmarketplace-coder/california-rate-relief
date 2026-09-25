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

export const metadata: Metadata = {
  title: "Do Solar Panels Work at Night? California Solar Guide",
  description: "Do solar panels produce power at night? How net metering, home battery storage, and grid power keep California homes running after sunset.",
  alternates: { canonical: '/blog/do-solar-panels-work-at-night-california' },
  openGraph: { title: 'Do Solar Panels Work at Night? California Guide', description: "How California solar homes still run on solar after dark.", type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/do-solar-panels-work-at-night-california');
const CRUMB_LABEL = 'Do solar panels work at night?';

export default function DoSolarPanelsWorkAtNight() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Do Solar Panels Work at Night? California Guide"} url="https://ratereliefca.com/blog/do-solar-panels-work-at-night-california" datePublished="2026-04-23" dateModified="2026-09-22" description={"Solar panels don"} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Basics</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Do Solar Panels Work at Night? California Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-22'>Updated September 22, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Short answer: no. Solar panels do not produce electricity at night. Solar photovoltaic (PV) cells need sunlight to generate current, and without sunlight they sit idle. But that&apos;s not the end of the story — homes with solar still run electricity through the night, either from a battery that stored the day&apos;s solar production, or from the utility grid. Here&apos;s exactly how it works in California and how NEM 3.0 changes the calculation.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="California solar and battery night power" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Solar Panels Actually Produce Power</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar panel works by the photovoltaic effect — photons from sunlight knock electrons loose from silicon atoms in the cells, creating an electrical current. No sunlight, no photons, no current. This is why solar production follows the sun&apos;s path: zero at sunrise, peak around noon, zero again at sunset. On a cloudless day in California, a typical residential system produces 4-6 hours of &quot;full&quot; output, with partial production for a few hours on either side.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Moonlight produces a tiny amount of measurable current in very sensitive lab conditions, but it&apos;s thousands of times weaker than sunlight — not useful for household electricity.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>So How Do Solar Homes Run at Night?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Two options: battery storage, or the grid.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Grid-tied solar (no battery).</strong> During the day, your panels produce electricity. Your home uses what it needs in real time; excess goes to the grid. At night, your home pulls from the grid like any non-solar house. You pay the utility for that evening grid consumption. Under NEM 2.0 (pre-April 2023), the export credits roughly balanced evening consumption. Under NEM 3.0, exports are credited at a much lower rate, so evening grid consumption is essentially a full-retail charge against a smaller export credit. This is the same two-way exchange the U.S. Department of Energy describes for any grid-connected home system: when the system generates more than the home needs, the excess is exported to the grid, and &quot;when the homeowner&apos;s electricity needs exceed the capacity of the system, the home draws energy from the grid as usual&quot; — which is what happens every night, with or without NEM 3.0. No battery is required for this baseline exchange; it&apos;s how a grid-tied system is wired to behave by default.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar + battery.</strong> During the day, your panels produce electricity. Your home uses what it needs; excess charges a battery on your wall. At sunset, the battery begins discharging into your home, covering evening use until it runs out. If the battery empties, you fall back to the grid. A properly sized solar + battery system can cover 80-95% of a typical California household&apos;s consumption, including the evening, without touching the grid.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why This Matters More Under NEM 3.0</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under the Net Billing Tariff, PG&amp;E, SCE and SDG&amp;E don&apos;t credit your exported solar at one fixed rate. Each calculates it hourly from the CPUC&apos;s Avoided Cost Calculator, and the CPUC states that value &quot;is usually lower than the retail rate... but can rise above the retail rate on late summer evenings.&quot; What you pay to import power at night is a separate, and separately set, number — your time-of-use plan&apos;s price for that hour. As one example: SCE places Net Billing Tariff customers on TOU-D-Prime, where published summer-weekday pricing runs 59¢/kWh on-peak against 26¢/kWh off-peak. PG&amp;E and SDG&amp;E price their own peak windows on their own plans. See{' '}<Link href='/blog/what-is-nem-3-california' className='text-primary hover:underline'>What is NEM 3.0 in California?</Link>{' '}for the full export-versus-import mechanics, and{' '}<Link href='/blog/pge-time-of-use-rates-2026' className='text-primary hover:underline'>PG&amp;E</Link>,{' '}<Link href='/blog/sce-time-of-use-rates-2026' className='text-primary hover:underline'>SCE</Link>{' '}or{' '}<Link href='/blog/sdge-time-of-use-rates-2026' className='text-primary hover:underline'>SDG&amp;E</Link>{' '}for current time-of-use pricing by utility.
              </p>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Why the 4-9 p.m. window is the real cost driver</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                PG&amp;E, SCE and SDG&amp;E each set their highest time-of-use price for the same stretch — 4 to 9 p.m. daily — confirmed on each utility&apos;s own rate page this session. That&apos;s not a coincidence relative to your panels: by 4 p.m. production is already tapering off, and by 9 p.m. most California homes are past sunset. The hours your system stops covering your home directly are largely the same hours your utility charges the most to fill the gap — whether that gap gets covered by a battery discharging, by solar exported earlier in the day, or by a straight grid import at the on-peak rate.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Translation: a NEM 3.0 solar system without a battery exports most of its production at the low credit rate, then buys electricity back at the high on-peak rate at night. A NEM 3.0 solar + battery system stores the production and uses it at night, displacing that on-peak grid purchase. That&apos;s why battery storage moved from &quot;nice to have&quot; to &quot;essentially required&quot; under NEM 3.0. More detail in our{' '}<Link href='/blog/nem-3-california-still-worth-it' className='text-primary hover:underline'>NEM 3.0 worth-it analysis</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Happens During a Power Outage at Night?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A common misconception: if the grid goes down at night and you have solar, you&apos;ll have power. Actually, a grid-tied solar system without a battery shuts off during outages for safety (to prevent backfeeding the grid while utility crews are working on lines). It&apos;s the battery that keeps your home running during an outage — day or night.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California homeowners in high-fire-risk areas subject to Public Safety Power Shutoffs (PSPS) lean heavily on battery storage for this reason. When the utility cuts power for wildfire safety, a solar + battery system keeps critical loads running for hours to days, depending on battery capacity and load management.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Does a Battery &quot;Solve&quot; the Nighttime Problem?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Mostly, yes. A typical 13.5 kWh residential battery (Tesla Powerwall, Enphase IQ, FranklinWH) stores enough energy to cover roughly 12-18 hours of typical California household consumption. Properly sized solar with one battery handles nightly cycling and still covers most mid-size outages. Larger homes or all-electric households (EV charging + heat pump + induction cooktop) often need two batteries.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Multi-day outages or winter storms with reduced solar production over consecutive cloudy days will eventually drain even a large battery. In those cases the grid (when it&apos;s up) fills the gap — which is why most California residential solar systems are grid-tied with battery backup rather than fully off-grid. Shifting stored solar into that 4-9 p.m. window instead of importing at the on-peak rate is the specific problem a battery is sized to solve under NEM 3.0. For sizing guidance built from your own panel and usage, see the{' '}<Link href='/battery' className='text-primary hover:underline'>home battery hub</Link>; for utility-by-utility payback math on pairing a battery with NEM 3.0, see{' '}<Link href='/battery/battery-payback-nem-3-california' className='text-primary hover:underline'>battery payback under NEM 3.0</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do solar panels work at all at night?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>No, they need sunlight to produce electricity. They sit idle from sunset to sunrise.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How do I use solar electricity at night then?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Either via a battery that stored the day&apos;s production, or by pulling from the grid at night and letting the daytime solar export offset part of that cost on your bill.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do solar panels work when there&apos;s a power outage at night?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>A grid-tied solar system without a battery shuts off during outages. Only a solar + battery system keeps your home powered through a nighttime outage. See our{' '}<Link href='/blog/do-solar-panels-work-during-power-outage-california' className='text-primary hover:underline'>outage-specific guide</Link>.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How big does my battery need to be to cover my nights?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>For a typical California household, one 13.5 kWh battery (like Tesla Powerwall 3) covers most overnight consumption. Larger homes or all-electric setups usually need two batteries. Our{' '}<Link href='/blog/how-big-of-a-solar-system-do-i-need-california' className='text-primary hover:underline'>system sizing guide</Link>{' '}covers the math.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does moonlight work?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Moonlight is reflected sunlight. It produces a tiny trickle of measurable current in lab conditions but is far too weak for household electricity. Functionally, the answer is no. The same is true of streetlights and other nighttime artificial lighting: the intensity is a small fraction of daylight, and household panels aren&apos;t built to register it as usable output. Functionally, neither moonlight nor streetlight will run your home.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is &quot;free nights and solar days&quot; available in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Not as a named plan. None of PG&amp;E&apos;s, SCE&apos;s or SDG&amp;E&apos;s own rate pages checked this session publish a plan under that name. What California&apos;s investor-owned utilities offer instead is standard time-of-use pricing — a cheaper off-peak stretch (PG&amp;E&apos;s Electric Home plan, for example, prices off-peak from midnight to 3 p.m.) paired with a 4-9 p.m. on-peak window, not a literal free period.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Ready for Solar + Battery in California?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="California solar and battery night power" />
            </div>
            <RelatedGuides
              heading="What covers the hours the panels do not"
              links={[
                { href: "/battery", label: "Home battery guides for California" },
                { href: "/battery/battery-backup-vs-generator-california", label: "Battery against a backup generator" },
                { href: "/solar-problems/do-i-still-get-a-utility-bill-with-solar", label: "Why the utility bill continues at night" },
              ]}
            />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="premium" /></div>
    </PublicLayout>
  );
}
