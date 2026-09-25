import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { Byline } from '@/components/trust/Byline';
import { HubUpLink } from '@/components/growth/HubUpLink';

export const metadata: Metadata = {
  title: 'Solar Panels for EV Charging in California: Plan the Load',
  description: 'Plan for EV charging with your actual household kWh, expected driving, vehicle efficiency, and a site-specific solar-production estimate.',
  alternates: { canonical: '/blog/solar-panels-for-ev-charging-california' },
  openGraph: { title: 'Solar Panels for EV Charging in California: Plan the Load', description: 'A California guide to adding an EV load to a solar-sizing conversation.', type: 'article', publishedTime: '2026-04-23T00:00:00Z', modifiedTime: '2026-09-20T00:00:00Z', images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter('Solar Panels for EV Charging in California: Plan the Load', 'Plan for EV charging with your actual household kWh, expected driving, vehicle efficiency, and a site-specific solar-production estimate.'),
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/solar-panels-for-ev-charging-california');
const CRUMB_LABEL = 'Solar for EV charging';

export default function SolarForEvCharging() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline="Solar Panels for EV Charging in California: Plan the Added Load" url="https://ratereliefca.com/blog/solar-panels-for-ev-charging-california" datePublished="2026-04-23" dateModified="2026-09-20" description="Plan for EV charging with actual household kWh, expected driving, vehicle efficiency, and a site-specific solar-production estimate." />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar + EV</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Solar Panels for EV Charging in California: Plan the Added Load</h1>
              <Byline updated="2026-09-20" />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
                <span>Updated September 20, 2026</span>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>An EV changes the load a solar design must serve. It does not produce one universal number of panels or kilowatts. Start with the household&apos;s measured electricity use, add the driving you actually expect to do, and then test that combined energy need against a site-specific production estimate.</p>
              <HubUpLink path="/blog/solar-panels-for-ev-charging-california" />

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="Solar panels for EV charging in California" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Start With Energy, Not a Panel Count</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>Pull 12 months of utility bills and record the household&apos;s total kWh. Then write down the planned annual EV miles, including a second EV if one is expected. For the vehicle input, use the combined electricity-use figure on that model&apos;s EPA fuel-economy label or its <a href='https://www.fueleconomy.gov/' className='text-primary hover:underline'>FuelEconomy.gov</a> listing. The <a href='https://www.energy.gov/cmei/vehicles/articles/fotw-1373-december-16-2024-efficiency-evs-model-year-2024-ranges-53-140-mpge' className='text-primary hover:underline'>Department of Energy reports</a> that model-year 2024 EV combined ratings ranged from 1.49 to 4.17 miles per kWh, so substituting one generic efficiency for every vehicle can distort the result.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>A useful planning calculation is: <strong>expected annual miles charged at home ÷ the vehicle&apos;s EPA combined miles per kWh = estimated annual home-charging energy.</strong> Count only the share of driving expected to charge at home; exclude miles normally charged at work or at public stations. If the 12-month bill history already includes this EV, do not add its existing charging energy again. Add only the forecast change in home-charged miles. If the bills predate the EV, add the estimated home-charging energy to the household&apos;s measured annual kWh. This is a driving-energy estimate, not a promise about a bill or array size.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>The array comes last. Use the address, proposed array layout and production assumptions in <a href='https://pvwatts.nrel.gov/' className='text-primary hover:underline'>NREL&apos;s PVWatts calculator</a>, then ask each proposal to show its annual production estimate and the inputs behind it. That is the site-specific step a miles-only rule cannot replace. For the household-side sizing workflow, see <Link href='/blog/how-big-of-a-solar-system-do-i-need-california' className='text-primary hover:underline'>how big a solar system may need to be in California</Link>.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Pick the Charging Goal Before Comparing Designs</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>Daytime charging.</strong> If the vehicle is home while the array is producing, a charge schedule can line up more of that load with those hours. Whether that is the better bill outcome depends on the household&apos;s tariff, export treatment and actual charging pattern. Check the current plan before assuming a winner.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>Grid charging.</strong> If the vehicle is usually away during the day, the practical question may be when grid charging occurs. Some utilities offer EV-oriented or time-of-use plans, but plan details and household results differ. Use the rate comparison offered by the serving utility and the current bill; California customers in SDG&amp;E territory can begin with this <Link href='/blog/sdge-time-of-use-rates-2026' className='text-primary hover:underline'>SDG&amp;E time-of-use guide</Link>.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'><strong>Backup.</strong> Backup is a resilience decision: identify the outage loads, how long they must run, and the equipment configuration needed to support them. An EV charging goal does not itself establish a home-battery requirement or a particular battery size. Ask for a separate outage-load plan if backup is part of the project.</p>
              <p className='text-foreground/80 leading-relaxed mb-6'>If the home already has solar and the EV changes the household load, compare an added-array proposal through the <Link href='/blog/adding-solar-panels-existing-system-california' className='text-primary hover:underline'>existing-system expansion checklist</Link>. It keeps the utility, equipment and approval questions separate from the EV estimate.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Keep the Charging Equipment in Scope</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>The vehicle, charging equipment and home electrical service all affect the installation conversation. The Department of Energy&apos;s <a href='https://afdc.energy.gov/fuels/electricity-charging-home' className='text-primary hover:underline'>Alternative Fuels Data Center</a> advises checking vehicle guidance and equipment specifications before buying equipment or electrical services. Have the proposal state whether it includes the charger, electrical work, permits and any service-panel work, or whether those items are separate.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Questions to Put on Every Proposal</h2>
              <ul className='text-foreground/80 leading-relaxed mb-6'>
                <li>What household kWh period, expected home-charged miles and home-charging share did you use?</li>
                <li>Which vehicle efficiency figure did you use, and where is it published?</li>
                <li>Does the bill history already include this EV, and if so, what forecast change in home charging was added?</li>
                <li>What annual production does the proposed array model show for this address?</li>
                <li>How does the charge schedule fit the current utility plan and the vehicle&apos;s time at home?</li>
                <li>Which charger, electrical, permit and backup items are included, excluded or still subject to a site review?</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How many solar panels do I need to charge an EV?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>There is no reliable statewide panel count. Use the vehicle&apos;s published EPA combined miles per kWh and only the miles expected to charge at home; do not include workplace or public charging. If the household bills already include the EV, add only the forecast change in home charging. Then compare designs using a production estimate for the actual address and array.</p>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Do I need a battery to charge an EV with solar?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Not automatically. A battery can be evaluated when the goal is shifting energy to another time or supporting selected loads during an outage. Its value and size depend on those goals, the tariff and the specific system design.</p>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can solar fully cover my EV charging?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>A design can model annual production against planned driving energy, but production timing, household use, the utility plan and changing driving all matter. Review the annual model and the bill assumptions instead of treating a solar design as a guarantee of no grid charging.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Planning for an EV and Solar?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>Share your recent household kWh, planned driving and charging goal so a proposal can state the assumptions it uses.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Start My Inquiry<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-8'><SolarInquiry topic="Solar panels for EV charging in California" /></div>
            <RelatedGuides heading="Plan the full household load" links={[
              { href: '/blog/how-big-of-a-solar-system-do-i-need-california', label: 'How to size the full household system' },
              { href: '/battery/how-many-batteries-do-i-need-california', label: 'How backup loads affect storage planning' },
              { href: '/solar-problems/running-ac-with-solar-california', label: 'Planning around another large household load' },
            ]} />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="premium" /></div>
    </PublicLayout>
  );
}
