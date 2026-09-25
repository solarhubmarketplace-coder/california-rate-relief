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
import { Byline } from '@/components/trust/Byline';

export const metadata: Metadata = {
  title: "Do Solar Panels Work on Cloudy Days? California Guide",
  description: "Yes. Solar panels still work on cloudy California days, just at lower output. DOE figures, coastal fog effects, and how the NEM 3 true-up works.",
  alternates: { canonical: '/blog/do-solar-panels-work-on-cloudy-days-california' },
  openGraph: { title: 'Do Solar Panels Work on Cloudy Days? California Guide', description: 'How solar panels perform on cloudy California days.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/do-solar-panels-work-on-cloudy-days-california');
const CRUMB_LABEL = 'Do solar panels work on cloudy days?';

export default function DoSolarPanelsWorkOnCloudyDays() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Do Solar Panels Work on Cloudy Days? California Guide"} url="https://ratereliefca.com/blog/do-solar-panels-work-on-cloudy-days-california" datePublished="2026-04-23" dateModified="2026-09-22" description={"Yes, solar panels work on cloudy days in California — just at reduced output. Typical cloudy-day production is 10-25% of peak sunny performance. Here is how much and what it means for California homes."} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Basics</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Do Solar Panels Work on Cloudy Days? California Guide</h1>
              <Byline updated="2026-09-22" />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-22'>Updated September 22, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Yes. Solar panels work on cloudy days — just at reduced output. Diffuse light still contains photons, and solar cells still produce current, just less of it. How much less depends on cloud thickness. Over a full year, most of California has relatively few fully cloudy days, and even those contribute to annual production.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="California solar panels on cloudy days" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Much Power Do Solar Panels Make on Cloudy Days?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It depends on cloud density. In order from most to least output:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Thin high clouds or partly sunny:</strong> a modest drop from peak output</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Overcast but bright:</strong> a larger drop</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Heavy dark overcast / rain:</strong> a small fraction of peak</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Dense fog (common in Bay Area summer mornings):</strong> low output until it burns off</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your monitoring app shows the real numbers for your roof: compare a heavy overcast day with a clear day in the same month. Not zero — just reduced.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What DOE&apos;s data shows</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here is the mechanism, from a primary source. The U.S. Department of Energy splits sunlight into direct beam radiation (the straight line from the sun) and diffuse radiation (sunlight scattered by clouds, water vapor, dust, and pollution before it reaches the ground). Per DOE, atmospheric conditions cut direct beam radiation by about 10% even on a clear, dry day, and by up to 100% under thick, cloudy skies. Diffuse radiation doesn&apos;t disappear the same way — it keeps arriving from across the sky, and a standard silicon panel converts it too, just less efficiently than direct beam. That&apos;s why output drops but rarely hits zero, and why the deepest drops happen under the densest, lowest cloud decks: those block the most direct beam while adding back the least diffuse light. It&apos;s also why the same panel technology works at all under cloud: the cell doesn&apos;t require a direct line to the sun, only photons, and diffuse light still carries them.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In the Department of Energy&apos;s words, atmospheric conditions &ldquo;can reduce direct beam solar radiation by 10% on clear, dry days and by 100% during thick, cloudy days&rdquo; (<a href='https://www.energy.gov/eere/solar/solar-radiation-basics' className='text-primary underline underline-offset-2' target='_blank' rel='noopener noreferrer'>U.S. Department of Energy, Solar Radiation Basics</a>, checked September 24, 2026). The diffuse light that is left is what your panels run on under overcast skies.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why Diffuse Light Still Produces Electricity</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Clouds scatter and absorb sunlight but don&apos;t block it entirely. What reaches your roof is called &quot;diffuse light&quot; — light that bounced off water droplets and arrived from many angles rather than direct-line from the sun. Solar cells don&apos;t care about the angle; they just need photons. Reduced photon count = reduced output, but not zero.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                An interesting side effect: photovoltaic cells are slightly more efficient at lower temperatures. A cool overcast day keeps panels cooler than a blistering hot sunny day, which offsets a tiny portion of the output loss. Not enough to matter for cost calculations, but real.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>California-Specific Considerations</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California gets a lot of sun. The Central Valley and Southern California are on the higher end; the Bay Area and coastal Northern California are on the lower end because of summer marine fog and winter rain.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For example, a San Francisco home will see meaningful summer-morning fog affecting June-July production. A Riverside home will barely notice any cloud impact most of the year. Solar installers use historical weather data and specific roof shading analysis (via PVWatts, Helioscope, or similar tools) to model your actual annual production, not the theoretical maximum. When you get a solar quote, the estimated annual production already accounts for your region&apos;s typical cloud cover.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Coastal marine layer vs. the inland valleys</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The paragraph above mentions summer marine fog along the coast — here&apos;s what that means for output. California&apos;s coastal marine layer is a low, persistent stratus deck that rolls in overnight and often doesn&apos;t burn off until mid-morning, most common from late spring through early summer in the Bay Area, the Central Coast, and parts of San Diego County. Structurally, it behaves like the &quot;thick, cloudy&quot; condition described above: it blocks most direct beam and leaves the panel running mainly on diffuse light for part of the morning. Inland areas — the Central Valley, the Inland Empire, the high desert — see far fewer of these persistent low-cloud mornings; their day-to-day variability comes more from passing storm systems than a recurring marine layer. That&apos;s a real, location-specific difference, not a reason to distrust a coastal quote: installers model expected production using location-specific weather data for the exact address, not one statewide sun-hours number, so a system sized for a foggy coastal city already accounts for more overcast mornings than one sized inland.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Cloudy-Day Tips</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Battery storage helps.</strong> On a cloudy day your panels make much less than normal. If your battery is charged from previous days, it covers the gap without you noticing.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>NEM 3.0 export credits still apply.</strong> If your cloudy-day production exceeds your consumption, the excess still exports at the avoided-cost rate and still builds a small credit. A week of overcast doesn&apos;t zero out your bill.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Annual true-up smooths things out.</strong> California&apos;s net billing runs on a 12-month cycle, so cloudy months get offset by sunny months. You&apos;re not penalized for a gloomy February if July and August produced surplus.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Your Monitoring App Should Show on a Cloudy Day</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your production app — Tesla, Enphase Enlighten, SolarEdge, or whatever your installer uses — is built to show this swing, not hide it. Tesla&apos;s own support documentation puts it plainly: &quot;Clouds block sunlight from reaching your solar system, significantly reducing production,&quot; and if your system gets intermittent sun through the day, &quot;you may see drops in production on the solar generation graph.&quot; That&apos;s the expected picture: a jagged, lower line that still tracks the sun&apos;s arc from sunrise to sunset, dipping as clouds thicken and recovering as they thin. What&apos;s not normal is a flat zero in the middle of a bright, sunny day, or a system-offline or no-communication alert — those point to a real fault (a tripped breaker, an offline gateway, an inverter problem), not weather, and are worth a call to your installer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Check Whether Your Contract Has a Production Guarantee</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Some California solar contracts include a production guarantee: if the system produces less than a stated share of its modeled annual output, the provider compensates you for the shortfall. Not every contract has one, and the share, the review period and the remedy differ. This is an important contract term to verify before signing; check our{' '}<Link href='/blog/solar-system-quotes-california' className='text-primary hover:underline'>quotes guide</Link>{' '}for what a complete proposal should include.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Why the true-up looks at the year, not the day</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Production guarantees and NEM 3.0 both work on the same time horizon: a full year, not a single day. See{' '}<Link href='/blog/what-is-nem-3-california' className='text-primary hover:underline'>What is NEM 3.0 in California?</Link>{' '}for how the Net Billing Tariff compensates what you export, and{' '}<Link href='/solar-problems/true-up-bill-california-explained' className='text-primary hover:underline'>The True-Up Bill in California, Explained</Link>{' '}for how that gets settled. That&apos;s the same mechanism behind why a cloudy week doesn&apos;t sink your bill: your utility nets everything your system produces against everything your home uses over a 12-month cycle, then settles the difference once, at the true-up. A string of overcast days in March shows up as a smaller credit that month; it isn&apos;t judged on its own. What matters for the true-up — and for your production guarantee — is the annual total.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do solar panels work on rainy days?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, but at reduced output; heavy rain cuts production sharply. Rain also has a side benefit: it cleans dust and pollen off the panels, often bumping production slightly in the days after.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do solar panels work during foggy San Francisco mornings?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, but at low output until the fog burns off. Bay Area summer marine-layer fog usually clears by 10 AM or noon, leaving most of the productive window intact. A skilled California installer will already factor your specific microclimate into the system sizing.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Will my solar bill go up during a cloudy week?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Your monthly bill might be slightly higher during an unusually cloudy period. California true-up is annual, though, so cloudy months get offset by sunny months. Unless you get a full season of abnormal weather, the annual math still works.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do cloudy days affect my battery?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes — on a cloudy day your panels produce less, so less surplus is available to charge the battery. A previously full battery still discharges normally; it just doesn&apos;t refill as fast. Multi-day overcast can drain a battery below its usual overnight reserve if solar production stays low.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is a cloudy day the same as a power outage?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>No. On a cloudy day your grid-tied system is still online and still feeding the house and the grid, just at reduced output. A power outage is different: most grid-tied solar systems shut off automatically during a blackout, for utility worker safety, regardless of how sunny or cloudy it is. If backup power during an outage matters to you, that&apos;s a battery and backup-design question, not a weather question — see{' '}<Link href='/blog/do-solar-panels-work-during-power-outage-california' className='text-primary hover:underline'>Will My Solar Panels Work in a Blackout?</Link>{' '}for how that&apos;s set up.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>See Your Annual Solar Production Estimate</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="California solar panels on cloudy days" />
            </div>
            <RelatedGuides
              heading="Seasonal output versus a real fault"
              links={[
                { href: "/solar-problems/solar-production-winter-california", label: "Why California output drops in winter" },
                { href: "/solar-problems/solar-panels-not-producing-enough", label: "When the drop is a fault rather than the weather" },
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
