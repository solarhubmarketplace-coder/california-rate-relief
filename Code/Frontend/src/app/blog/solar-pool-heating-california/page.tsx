import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from "@/components/growth/HeroQuickCheck";
import { HubSpokeLinks } from "@/components/growth/HubSpokeLinks";
import { FaqJsonLd, type FaqJsonLdItem } from "@/components/shared/FaqJsonLd";
const metaTitle = "Solar Pool Heating in California: Cost, Sizing and Payback";
const metaDescription =
  "What DOE says a solar pool heater costs, how big the collectors should be and how fast it pays back, plus how solar compares with heat pump and gas heaters.";
const DOE_SOLAR_POOL = "https://www.energy.gov/energysaver/solar-swimming-pool-heaters";
const DOE_HEAT_PUMP_POOL = "https://www.energy.gov/energysaver/heat-pump-swimming-pool-heaters";
const IRS_5695 = "https://www.irs.gov/instructions/i5695";
// 2026-09-23 Tier 2 (agent costfin): sources for the added sections below.
const CPUC_CSI_THERMAL =
  "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/california-solar-initiative/csi-thermal-program-solar-water-heating";
const CPUC_GUIDE =
  "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide";
const CHECKED = "September 23, 2026";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/blog/solar-pool-heating-california' },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: 'https://ratereliefca.com/blog/solar-pool-heating-california',
    publishedTime: '2026-04-24T00:00:00Z',
    modifiedTime: '2026-09-23T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

// 2026-09-23 (topical-authority wave, agent costfin): lead now answers the
// cost question directly; added inground-pool sizing arithmetic, a FAQ with
// FAQPage schema, the cost hub link and HubSpokeLinks. DOE figures re-fetched
// 2026-09-23. The permit paragraph no longer states a statute it did not cite.
// 2026-09-23 Tier 2 (agent costfin): for the "pool solar" and "residential
// solar pool heating systems" clusters, added system types and components,
// SRCC OG400 comparison, Southern California sizing context, heat pump plus
// solar panels, and the closed CSI-Thermal rebate (DOE, CPUC; re-fetched).
const poolFaqs: FaqJsonLdItem[] = [
  {
    question: "How much does solar pool heating cost in California?",
    answer:
      "The U.S. Department of Energy says a solar pool heating system usually costs between $2,500 and $4,000 to buy and install, with a payback of 1 to 7 years depending on local fuel costs and sun. That figure is national and undated, so get written bids for your pool.",
  },
  {
    question: "How much does a solar pool heater cost for an inground pool?",
    answer:
      "Cost follows collector area, and DOE sizes collectors at 50% to 100% of the pool's surface area, or 60% to 70% for most northern California pools. A 15 by 30 foot inground pool (450 square feet) would need about 270 to 315 square feet of collector at the northern California ratio, or up to 450 at 100%. Ask each bidder to price by collector area so bids compare.",
  },
  {
    question: "How long does a solar pool heater last?",
    answer:
      "DOE says solar pool heaters typically last longer than gas and heat pump pool heaters, and that proper maintenance keeps them running smoothly for 10 to 20 years.",
  },
  {
    question: "What types of residential solar pool heating systems are there?",
    answer:
      "Two, by collector. DOE says unglazed collectors have no glass covering and are generally made of heavy-duty rubber or plastic treated to resist UV light; glazed collectors are generally copper tubing on an aluminum plate under tempered glass, which costs more. Either way the system has four parts: the collector, a filter, a pump and a flow control valve.",
  },
  {
    question: "Is there a California rebate for solar pool heating?",
    answer:
      "Not a statewide one. The CPUC's CSI-Thermal program, which paid rebates for solar water heating and some non-water-heating technologies, closed to new applications on July 31, 2020. Ask your utility or city whether it runs a local program before counting on one.",
  },
  {
    question: "Can solar panels run a heat-pump pool heater?",
    answer:
      "Yes, in the sense that a heat pump runs on electricity and solar panels make electricity. The CPUC says most solar bill savings come from using solar power in your home, so running the pool heat pump while the panels are producing uses your own power instead of exporting it. DOE says heat pump pool heaters work efficiently while outdoor air stays above the 45°F to 50°F range.",
  },
  {
    question: "Is a solar pool heater worth it in California?",
    answer:
      "It can be if you have a sunny, south-facing roof with enough area and want a longer swim season. DOE's 1 to 7 year payback range depends on what fuel it replaces and your sun, and a pool cover reduces the collector area you need. A heat pump heater works without sun but loses efficiency in cold air.",
  },
];

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/solar-pool-heating-california');
const CRUMB_LABEL = 'Solar Pool Heating California';

export default function SolarPoolHeatingCA() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Solar Pool Heating in California: Cost, Sizing and Payback"} url="https://ratereliefca.com/blog/solar-pool-heating-california" datePublished="2026-04-24" dateModified="2026-09-23" description={"Solar pool heating in California: DOE cost, sizing and payback figures, how the collectors work, when a heat pump fits, permits and the tax credit."} />
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Pool Heating · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Solar Pool Heating in California: Cost, Sizing and Payback
              </h1>
              <p className="text-lg text-muted-foreground">
                A solar pool heating system usually costs $2,500 to $4,000 to buy and install, and pays back in 1 to 7 years, according to the U.S. Department of Energy. Where you land depends on your pool&apos;s size, your roof, your sun and the fuel it replaces. This page gives DOE&apos;s cost, sizing and payback figures, and when a heat-pump heater fits better.
              </p>
              <p className="mt-3 text-muted-foreground">
                For solar electric panels rather than pool heating, see <Link href="/solar-panels-california" className="text-primary underline">California solar panel cost and sizing</Link>.
              </p>
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="p-4 rounded-lg border border-border bg-card text-sm">
                <strong>TL;DR:</strong> A solar pool heater extends your swim season into the cooler months; how far depends on the collector area, the pool cover and your location. Its price and payback against gas heating depend on the pool size and the bids you get, so compare written quotes. A heat-pump pool heater does not need sun, but DOE says it loses efficiency once outdoor air drops below about 50°F.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California solar pool heating" />
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Solar Pool Heating Works</h2>
              <p>
                Solar pool panels are unglazed black polypropylene mats mounted on your roof. Your existing pool pump pushes water through the mats, the water heats up in the sun, and flows back into the pool. That&apos;s the whole system — no electrical generation, no inverter, no utility interconnection. The water itself is the heat-transfer medium. The pump still runs on electricity, so for <Link href="/blog/does-pool-pump-use-a-lot-of-electricity" className="text-primary underline">what the pool pump itself adds to the bill</Link> and when to run it, see the pool pump guide.
              </p>
              <p>
                This is why solar pool heating is categorically different from solar electric (PV). You&apos;re not generating electricity you use elsewhere; you&apos;re capturing low-grade heat directly and dumping it into your pool. That makes it inexpensive, low-maintenance, and completely separate from your home&apos;s electricity system.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Solar Pool Heater Cost and Sizing: What DOE Says</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">U.S. Department of Energy figures for solar pool heating cost, payback and collector sizing</caption>
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Item</th>
                      <th className="text-left py-3 px-3 font-bold text-foreground">DOE figure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Cost to buy and install</td>
                      <td className="py-3 px-3">Usually $2,500 to $4,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Payback</td>
                      <td className="py-3 px-3">1 to 7 years, depending on local fuel costs and available sun</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Collector area</td>
                      <td className="py-3 px-3">50% to 100% of the pool&apos;s surface area</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Northern California pools</td>
                      <td className="py-3 px-3">Typically 60% to 70% of the pool&apos;s surface area</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Pool cover</td>
                      <td className="py-3 px-3">Usually lets you use less collector area, in any climate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">Source: U.S. Department of Energy, Energy Saver, <a href={DOE_SOLAR_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Solar Swimming Pool Heaters</a> (checked {CHECKED}). DOE&apos;s cost figure is national and carries no date, so treat it as a starting point, not a 2026 California price.</p>
              <p>A bid&apos;s price also depends on roof access, whether an automated bypass valve is included, and whether a pool-pump upgrade is bundled in. Ask each bidder to list those items separately.</p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Solar pool heater cost for an inground pool</h3>
              <p>
                DOE does not price inground and above-ground pools separately. What drives the price is collector area, and DOE ties that to the pool: &ldquo;The surface area of your solar collector should equal 50%–100% of the surface area of your pool.&rdquo; In northern California, DOE says most people use outdoor pools six to eight months a year and size systems at 60% to 70% of the pool&apos;s surface area.
              </p>
              <p>
                For a 15 × 30 foot inground pool (450 square feet), that works out to about 270 to 315 square feet of collector at the northern California ratio, or up to 450 square feet at 100%. Ask each bidder to state the collector area and price per square foot, so bids for different sizes compare. DOE also says solar pool heaters &ldquo;typically last longer than gas and heat pump pool heaters,&rdquo; and that proper maintenance keeps them running for 10 to 20 years (<a href={DOE_SOLAR_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">DOE</a>, checked {CHECKED}).
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Types of Residential Solar Pool Heating Systems</h2>
              <p>
                Residential systems differ mainly in the collector. DOE describes two kinds (<a href={DOE_SOLAR_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">DOE</a>, checked {CHECKED}):
              </p>
              <ul className="space-y-2">
                <li><strong>Unglazed collectors.</strong> &ldquo;Unglazed collectors don&apos;t include a glass covering (glazing). They are generally made of heavy-duty rubber or plastic treated with an ultraviolet (UV) light inhibitor to extend the life of the panels.&rdquo; DOE says they are &ldquo;usually less expensive than glazed collectors.&rdquo;</li>
                <li><strong>Glazed collectors.</strong> &ldquo;Glazed collector systems are generally made of copper tubing on an aluminum plate with an iron-tempered glass covering, which increases their cost.&rdquo; DOE says that in colder weather they &ldquo;capture solar heat more efficiently than unglazed systems&rdquo; and &ldquo;can be used year-round in many climates.&rdquo;</li>
              </ul>
              <p>
                Either kind runs on the same four parts DOE lists: a solar collector that pool water passes through, a filter that removes debris before the water reaches the collector, a pump that circulates the water, and &ldquo;a flow control valve,&rdquo; automatic or manual, that diverts pool water through the collector. For a system that heats in summer only, DOE says the collectors should ideally be &ldquo;tilted at an angle equal to your latitude minus 10º–15º.&rdquo;
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Comparing systems by rating, not brochure</h3>
              <p>
                DOE says the Solar Rating and Certification Corporation (SRCC) &ldquo;provides ratings for solar pool heaters under the OG400 standard and maintains a directory of certified solar pool heaters.&rdquo; To compare two bids, divide each system&apos;s rated Btu per day by its price: DOE&apos;s formula is &ldquo;Btu/day ÷ collector price = Btu/day per dollar spent.&rdquo; Ask each bidder for the SRCC listing of the collector they quote.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Sizing for Southern California and the Desert</h2>
              <p>
                DOE gives two reference points, and California sits between them. For year-round use, &ldquo;a 15-by-30-foot outdoor swimming pool in Florida typically requires a collector that equals 100% of the pool&apos;s square footage.&rdquo; For a shorter season, &ldquo;In northern California, most people use outdoor pools 6–8 months per year, so they typically size their systems at 60%–70% of the pool&apos;s surface area&rdquo; (<a href={DOE_SOLAR_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">DOE</a>, checked {CHECKED}). DOE does not publish a ratio for Los Angeles, Orange County or Palm Springs. The longer the season you want, the closer to 100% a bid should be; ask each installer what ratio they used and what pool temperature they expect by month.
              </p>
              <p>
                A cover changes the math everywhere: DOE says it usually lets you use less collector area. Heating in cooler months is also where a heat pump or gas heater may still be needed as backup.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Running a Heat-Pump Pool Heater on Solar Panels</h2>
              <p>
                Some homeowners pair solar electric panels with a heat-pump pool heater instead of solar thermal collectors. The two work together because the heat pump runs on electricity. DOE says heat pump pool heaters &ldquo;work efficiently as long as the outside temperature remains above the 45ºF–50ºF range,&rdquo; and that their efficiency is measured by coefficient of performance, with COPs that &ldquo;usually range from 3.0 to 7.0&rdquo; (<a href={DOE_HEAT_PUMP_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">DOE</a>, checked {CHECKED}).
              </p>
              <p>
                Timing matters under California&apos;s current solar billing. The CPUC says that if you install solar, &ldquo;the majority of your electric bill savings will come from using the solar energy in your home,&rdquo; with a smaller amount from credits for power you export (<a href={CPUC_GUIDE} target="_blank" rel="noopener noreferrer" className="text-primary underline">CPUC</a>, checked {CHECKED}). Running the pool heat pump and filter pump while the panels are producing uses that power at home. If you plan to add one, tell the solar designer, because it raises the use the system should be sized for; see <Link href="/blog/10-kw-solar-system-cost" className="text-primary underline">what a larger home system costs</Link>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Is There a California Rebate for Solar Pool Heating?</h2>
              <p>
                Not a statewide one. The CPUC&apos;s CSI-Thermal program paid rebates for solar water heating, and &ldquo;some non-water heating technologies also qualified,&rdquo; but it &ldquo;closed to new applications on July 31, 2020&rdquo; (<a href={CPUC_CSI_THERMAL} target="_blank" rel="noopener noreferrer" className="text-primary underline">CPUC</a>, checked {CHECKED}). Ask your electric or gas utility and your city whether a local program exists before a bid counts on one. The programs that remain for solar electric systems are in <Link href="/blog/california-solar-tax-credit-2026" className="text-primary underline">California solar incentives in 2026</Link>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Much Swim Season It Adds</h2>
              <p>
                That depends on collector area, the pool cover, and how much sun and fog your roof gets. We did not find a primary source that gives added swim weeks by California region, so this page does not list them. Ask each bidder for a written estimate of pool temperature by month for your pool, with and without a cover.
              </p>
              <p>A cover matters either way. DOE says a pool cover usually lets you get by with less collector area, so price one into the project.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Solar vs Heat-Pump Pool Heater vs Gas</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">How solar, heat-pump and gas pool heaters compare, per the U.S. Department of Energy</caption>
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Option</th>
                      <th className="text-left py-3 px-3 font-bold text-foreground">What DOE says</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Solar</td>
                      <td className="py-3 px-3">Usually $2,500 to $4,000 installed, with a 1 to 7 year payback; heats only when the sun is out</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Heat pump</td>
                      <td className="py-3 px-3">Costs more to buy than gas but typically much less to run; works efficiently while outdoor air stays above the 45°F to 50°F range; can last 10 or more years with proper maintenance</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Gas</td>
                      <td className="py-3 px-3">Costs less to buy than a heat pump but more to run; heat pumps typically outlast gas heaters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">Sources: U.S. Department of Energy, Energy Saver, <a href={DOE_SOLAR_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Solar Swimming Pool Heaters</a> and <a href={DOE_HEAT_PUMP_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Heat Pump Swimming Pool Heaters</a> (both checked {CHECKED}).</p>
              <p>
                Before you price a gas heater, ask your city whether local building rules limit new gas equipment. If they do, a heat pump is the likely replacement and solar becomes a way to cut how often it runs.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Roof Requirements</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Facing south, or close to it.</strong> DOE says true south is best, and collectors can face up to 45° east or west of true south without a significant loss in performance.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Collector area of 50% to 100% of the pool&apos;s surface.</strong> That is DOE&apos;s range; it puts Northern California pools at 60% to 70%. A 15 × 30 foot pool (450 sq ft) would need about 225 to 450 sq ft of collector.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Enough roof life left.</strong> If the roof will need replacing soon, do that first, or get the cost to remove and reinstall the collectors in writing.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-status-warning flex-shrink-0 mt-0.5" />
                  <div><strong>Tile roofs: ask how the collectors attach.</strong> Mounting differs from solar electric panels. The bid should say how the tile is handled and who warrants the roof penetrations.</div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Permits and HOAs</h2>
              <p>Permit rules are set by your city or county, and a pool heater is plumbing work rather than electrical generation, so the permits differ from a solar electric system. Ask your building department which permits apply, and ask whether the bid includes them and who pulls them. City permit pages for solar electric systems are collected in the <Link href="/california-solar-cost-index" className="text-primary underline">California solar cost index</Link>. If you live in an HOA, read <Link href="/blog/hoa-solar-rights-california" className="text-primary underline">what an HOA can and cannot require for solar</Link> before you apply.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Does the Federal Tax Credit Apply?</h2>
              <p>
                No. The IRS instructions for Form 5695 say you can&apos;t claim the residential clean energy credit for expenditures made after December 31, 2025. Even before that, the same instructions covered solar water heating only for water used in your home, and excluded costs allocable to &ldquo;a swimming pool, hot tub, or any other energy storage medium that has a function other than the function of such storage&rdquo; (<a href={IRS_5695} target="_blank" rel="noopener noreferrer" className="text-primary underline">IRS, Instructions for Form 5695</a>, revised April 30, 2026, checked {CHECKED}). Work with a tax professional if you paid for any solar equipment in 2025 or earlier.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Frequently Asked Questions</h2>
              <FaqJsonLd items={poolFaqs} />
              {poolFaqs.map((f) => (
                <div key={f.question}>
                  <h3 className="text-lg font-bold text-foreground mt-6 mb-2">{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">A Referral Request Is Optional</h2>
              <p>
                California Rate Relief is a referral service. We are not a licensed contractor. We do not install pool heaters; get written bids from licensed contractors and check each one&apos;s license with the CSLB.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/is-my-roof-good-for-solar-california" className="text-primary underline">Is your roof ready for solar collectors?</Link></li>
                <li><Link href="/blog/solar-tax-credit-expired-2026-options" className="text-primary underline">What the ended federal credit leaves in 2026</Link></li>
                <li><Link href="/blog/solar-payback-period-california" className="text-primary underline">Payback for solar electric panels in California</Link></li>
                <li><Link href="/best-solar-companies-california" className="text-primary underline">Comparing California solar companies</Link></li>
              </ul>
            </div>
          <ArticleCTA />
          <div className="mt-8">
            <SolarInquiry topic="California solar pool heating" />
          </div>
             <RelatedGuides
               heading="Where the pool load sits in a solar plan"
               links={[
                 { href: "/solar-problems/running-ac-with-solar-california", label: "What happens when a large load runs all day" },
                 { href: "/solar-problems/what-solar-doesnt-cover-california", label: "What a system does not cover" },
               ]}
             />
             <HubSpokeLinks hub="cost_value" currentPath="/blog/solar-pool-heating-california" />

          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
