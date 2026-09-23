import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from "@/components/growth/HeroQuickCheck";
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

const metaTitle = "Sunrun vs Tesla Solar (2026): Warranty, Lease and Powerwall";
const metaDescription =
  "Sunrun vs Tesla in California, side by side: each one's published warranty, CSLB license numbers, lease and PPA options, Powerwall and home-sale transfer.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/solar-installers/sunrun-vs-tesla-solar' },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: 'https://ratereliefca.com/solar-installers/sunrun-vs-tesla-solar',
    publishedTime: '2026-04-24T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Sunrun vs Tesla Solar', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SunrunVsTeslaSolar() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/best-solar-companies-california" className="hover:text-primary">Solar Companies CA</Link><span>/</span><span className="text-foreground">Sunrun vs Tesla Solar</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Installer Comparison</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Sunrun vs Tesla Solar: Which Is Better for California Homes?</h1>
              
              <LastReviewedStamp date="2026-09-22" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<p className="text-lg text-muted-foreground">Sunrun offers leases and PPAs, where it owns the system, alongside cash purchases. Tesla Solar sells a Tesla-branded package: panels, inverter, Powerwall and app. Here is how their published terms compare.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Sunrun vs Tesla Solar comparison" />
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">At a Glance</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Factor</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Sunrun</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Tesla Solar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Pricing (cash purchase)</td><td className="text-center">No verified California price</td><td className="text-center">No verified California price</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Finance options</td><td className="text-center">Lease / PPA / cash</td><td className="text-center">Cash, loan, or a newly advertised <a href="https://www.tesla.com/solarpanels" target="_blank" rel="noopener external" className="text-primary underline">lease</a> (terms not yet published)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Equipment</td><td className="text-center">Multiple panel &amp; inverter brands</td><td className="text-center">Tesla-only ecosystem</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Battery</td><td className="text-center">Tesla Powerwall, Enphase</td><td className="text-center">Tesla Powerwall (only)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Install time</td><td className="text-center">6–12 weeks</td><td className="text-center">8–20+ weeks (notoriously variable)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Customer service</td><td className="text-center">Mixed, improving</td><td className="text-center">Thin post-install support</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Best for</td><td className="text-center">PPA/lease households</td><td className="text-center">Cash buyers who want Powerwall</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium align-top">Warranty (new install)</td><td className="text-left align-top py-3 px-3 leading-relaxed">&ldquo;Sunrun Guarantee&rdquo;: at least 90% lifetime production (Sunrun pays any shortfall), free replacement parts and labor for 25 years, a watertight roof warranty, and a guarantee the battery keeps the system powered in an outage. Applies to Subscription/Protection Plus plans (<a href="https://www.sunrun.com/why-sunrun/your-guarantee" target="_blank" rel="noopener external" className="text-primary underline">sunrun.com</a>, accessed 2026-09-22).</td><td className="text-left align-top py-3 px-3 leading-relaxed">Panels: at least 80% of nameplate capacity guaranteed for at least 25 years by the manufacturer; Tesla processes the claim and performs any related labor at its own cost, for both Tesla panels and third-party panels Tesla installs (<a href="https://www.tesla.com/support/energy/solar-panels/learn/warranty" target="_blank" rel="noopener external" className="text-primary underline">tesla.com</a>, accessed 2026-09-22). Powerwall: 10-year limited warranty, at least 70% of the unit&apos;s 13.5 kWh rated capacity retained at year 10; unlimited cycling for solar self-consumption, time-based control, and backup use, otherwise capped at 37.8 MWh aggregate throughput (<a href="https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Warranty/en-us/Powerwall-Warranty-EN.pdf" target="_blank" rel="noopener external" className="text-primary underline">Tesla Powerwall Limited Warranty</a>, accessed 2026-09-22).</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium align-top">CSLB license(s), as published</td><td className="text-left align-top py-3 px-3 leading-relaxed">#750184 and #969975 (<a href="https://www.sunrun.com/state-contractor-license-information" target="_blank" rel="noopener external" className="text-primary underline">sunrun.com</a>, accessed 2026-09-22). Status not independently verified.</td><td className="text-left align-top py-3 px-3 leading-relaxed">#888104 and #1127593 (<a href="https://www.tesla.com/support/energy/more/legal/contractor-licenses" target="_blank" rel="noopener external" className="text-primary underline">tesla.com</a>, accessed 2026-09-22). Status not independently verified.</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium align-top">Who installs the system</td><td className="text-left align-top py-3 px-3 leading-relaxed">Not stated on the sunrun.com pages reviewed here. See the full Sunrun review for what&apos;s separately documented about its service model.</td><td className="text-left align-top py-3 px-3 leading-relaxed">Not stated on the tesla.com pages reviewed here. See the full Tesla review for what&apos;s separately documented about its service model.</td></tr>
                    <tr><td className="py-3 pr-4 font-medium align-top">Transfer/service on sale</td><td className="text-left align-top py-3 px-3 leading-relaxed">A lease or PPA transfers through a documented 4-step process (buyer and seller exchange details, confirm the closing date, e-sign a transfer agreement with a soft credit check, and the transfer finalizes at close). A UCC-1/NOIEPC notice on title is temporarily removed at no cost during the transfer. A cash-purchased system conveys with the home like any other fixture (<a href="https://www.sunrun.com/go-solar-center/solar-faq/what-happens-if-i-move" target="_blank" rel="noopener external" className="text-primary underline">sunrun.com</a>, accessed 2026-09-22).</td><td className="text-left align-top py-3 px-3 leading-relaxed">Not published on the tesla.com pages reviewed here for a Tesla-financed lease. Tesla&apos;s dominant financing today is cash or loan, both homeowner-owned, which convey with the home like any other fixture, the same way a cash-purchased Sunrun system does.</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where Tesla Solar Wins</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cash-purchase pricing.</strong> This comparison does not have a verified California price for either company. Compare Tesla&apos;s written cash price per watt with other quotes for the same system.</li>
                <li><strong>Native Powerwall integration.</strong> One app (Tesla app) controls solar, battery, EV charging, and home energy. No other installer offers this level of integration.</li>
                <li><strong>Tesla Solar Roof option.</strong> If you&apos;re replacing your roof anyway, the integrated shingle-style solar roof is more aesthetically seamless than any panel-based system.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where Sunrun Wins</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>PPA and lease options.</strong> Tesla doesn&apos;t offer $0-down PPA/lease. If you want a lease or PPA rather than buying, Sunrun offers both directly.</li>
                <li><strong>Installation timelines.</strong> Sunrun typically completes installs in 6–12 weeks. Tesla Solar installs have been criticized for dragging to 4–6 months due to limited installation capacity.</li>
                <li><strong>Post-install service.</strong> Sunrun has a nationwide service organization; Tesla Solar support has been notoriously thin and phone-unresponsive.</li>
                <li><strong>Equipment flexibility.</strong> Sunrun can spec whichever panel/inverter combo fits your roof and needs. Tesla installs only Tesla-made components (panels from third-party contract manufacturers, Tesla-branded inverter, Tesla Powerwall).</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Tesla Solar Caveats</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No subsystem choices.</strong> You get Tesla&apos;s 400W panels, Tesla Solar Inverter, and Tesla Powerwall. If a part fails in year 11, you&apos;re dependent on Tesla&apos;s parts supply.</li>
                <li><strong>Solar Roof pricing is much higher than panels.</strong> Tesla Solar Roof replaces the roof itself, so it costs far more than panels on an existing roof. Only makes sense on a full roof replacement; get both priced.</li>
                <li><strong>Sales process is transactional.</strong> Tesla is notorious for minimal human contact pre-install; if you need hand-holding through the buying process, Sunrun is much more responsive.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Who Each Tends to Fit</h2>
              <p>Neither company fits every California homeowner. What changes the answer is which of these matters most to you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>If $0-down lease or PPA financing is the deciding factor,</strong> Sunrun offers both directly and owns the system under either. Tesla&apos;s established path is cash or loan (homeowner-owned); its newly advertised lease option&apos;s terms aren&apos;t yet published in detail (see the table above).</li>
                <li><strong>If you&apos;re weighing what happens to your contract when you sell the home,</strong> Sunrun publishes a specific lease/PPA transfer process (above). For a Tesla cash or loan purchase, the system conveys with the home like any other improvement, and no formal transfer is needed.</li>
                <li><strong>If a single company&apos;s warranty document is what you want,</strong> Tesla&apos;s panel and Powerwall warranties are Tesla-administered with specific numeric terms (above). Sunrun&apos;s guarantee bundles production, repairs, roof, and battery together, but only for its Subscription/Protection Plus plans.</li>
                <li><strong>If integrated battery control matters,</strong> both companies install the Tesla Powerwall; Sunrun also offers Enphase. This isn&apos;t a differentiator between the two companies by itself.</li>
              </ul>
              <p>This isn&apos;t a ranking. Read the full reviews for service history and complaint patterns before deciding: <Link href="/solar-installers/sunrun-review" className="text-primary underline">Full Sunrun Review</Link> and <Link href="/solar-installers/tesla-solar-review" className="text-primary underline">Full Tesla Solar Review</Link>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Bottom Line</h2>
              <p>For California homeowners: <strong>Tesla Solar</strong> fits a cash or loan buyer who wants one company&apos;s panels, inverter and Powerwall and can accept thinner post-install support. <strong>Sunrun</strong> fits if you want a PPA or lease, or more hand-holding through the process. Neither company&apos;s price is verified here, so compare written quotes by price per watt for the same system. Both install Powerwall, so the battery itself does not separate them.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/solar-installers/sunrun-review" className="text-primary underline">Full Sunrun Review</Link></li>
                <li><Link href="/solar-installers/tesla-solar-review" className="text-primary underline">Full Tesla Solar Review</Link></li>
                <li><Link href="/solar-installers/sunnova-vs-sunrun" className="text-primary underline">Sunnova vs Sunrun</Link></li>
                <li><Link href="/blog/tesla-powerwall-installers-california" className="text-primary underline">Tesla Powerwall Installers in California</Link></li>
              </ul>
            <div className="mt-8">
              <SolarInquiry topic="Sunrun vs Tesla Solar comparison" />
            </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
