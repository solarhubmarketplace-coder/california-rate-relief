import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Do Solar Panels Work on Cloudy Days? California Guide',
  description: "Yes, solar panels work on cloudy days in California — just at reduced output. Typical cloudy-day production is 10-25% of peak sunny performance. Here is how much and what it means for California homes.",
  alternates: { canonical: '/blog/do-solar-panels-work-on-cloudy-days-california' },
  openGraph: { title: 'Do Solar Panels Work on Cloudy Days? California Guide', description: 'How solar panels perform on cloudy California days.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Do Solar Panels Work on Cloudy Days? California Guide',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/do-solar-panels-work-on-cloudy-days-california' },
};

export default function DoSolarPanelsWorkOnCloudyDays() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Basics</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Do Solar Panels Work on Cloudy Days? California Guide</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Yes. Solar panels work on cloudy days — just at reduced output. Diffuse light still contains photons, and solar cells still produce current, just less of it. For California homeowners, cloudy-day performance typically runs somewhere between 10% and 25% of peak sunny-day output, depending on cloud thickness. Over a full year, California&apos;s typical 260-300 sunny days leave relatively few fully cloudy days to worry about — and even those contribute meaningfully to annual production.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How Much Power Do Solar Panels Make on Cloudy Days?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It depends on cloud density. Common benchmarks:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Thin high clouds or partly sunny:</strong> 50-80% of peak output</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Overcast but bright:</strong> 25-50% of peak</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Heavy dark overcast / rain:</strong> 10-25% of peak</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Dense fog (common in Bay Area summer mornings):</strong> 10-30% of peak until it burns off</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                So a 7 kW system that makes 42 kWh on a peak sunny day would make 4-10 kWh on a heavy overcast day, 10-20 kWh on a brighter overcast day, and 20-35 kWh on a partly-cloudy day. Not zero — just reduced.
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
                California gets a lot of sun. Per solar industry sizing data, most of the state averages 260-300 sunny or partly sunny days per year. The Central Valley and Southern California are on the higher end; the Bay Area and coastal Northern California are on the lower end because of summer marine fog and winter rain.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For example, a San Francisco home will see meaningful summer-morning fog affecting June-July production. A Riverside home will barely notice any cloud impact most of the year. Solar installers use historical weather data and specific roof shading analysis (via PVWatts, Helioscope, or similar tools) to model your actual annual production, not the theoretical maximum. When you get a solar quote, the estimated annual production already accounts for your region&apos;s typical cloud cover.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Cloudy-Day Tips</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Battery storage helps.</strong> On a cloudy day your panels might make only 20-30% of normal. If your battery is charged from previous days, it covers the gap without you noticing.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>NEM 3.0 export credits still apply.</strong> If your cloudy-day production exceeds your consumption, the excess still exports at the avoided-cost rate and still builds a small credit. A week of overcast doesn&apos;t zero out your bill.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Annual true-up smooths things out.</strong> California&apos;s net billing runs on a 12-month cycle, so cloudy months get offset by sunny months. You&apos;re not penalized for a gloomy February if July and August produced surplus.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Production Guarantees Cover You</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most reputable California installers offer a 25-year production guarantee — typically 90%+ of modeled annual output. If a full year of unusual weather drops your actual production below the guarantee, the installer writes you a check for the shortfall. This is an important contract term to verify before signing; check our{' '}<Link href='/blog/solar-system-quotes-california' className='text-primary hover:underline'>quotes guide</Link>{' '}for what a complete proposal should include.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do solar panels work on rainy days?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, but at reduced output. Heavy rain typically drops production to 10-25% of peak. Rain also has a side benefit: it cleans dust and pollen off the panels, often bumping production slightly in the days after.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do solar panels work during foggy San Francisco mornings?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, but at 10-30% of peak until the fog burns off. Bay Area summer marine-layer fog usually clears by 10 AM or noon, leaving most of the productive window intact. A skilled California installer will already factor your specific microclimate into the system sizing.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Will my solar bill go up during a cloudy week?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Your monthly bill might be slightly higher during an unusually cloudy period. California true-up is annual, though, so cloudy months get offset by sunny months. Unless you get a full season of abnormal weather, the annual math still works.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do cloudy days affect my battery?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes — on a cloudy day your panels produce less, so less surplus is available to charge the battery. A previously full battery still discharges normally; it just doesn&apos;t refill as fast. Multi-day overcast can drain a battery below its usual overnight reserve if solar production stays low.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>See Your Annual Solar Production Estimate</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief runs the numbers for your specific roof orientation, regional cloud cover, and annual shading. Free 60-second eligibility check.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
