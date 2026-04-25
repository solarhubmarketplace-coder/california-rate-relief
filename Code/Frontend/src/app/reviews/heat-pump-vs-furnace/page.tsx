import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Star,
  Zap,
  Battery,
  Shield,
  ChevronRight,
  Check,
  X,
  Sun,
  DollarSign,
  CheckCircle,
  XCircle,
  Search,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Heat Pump vs Furnace (2026): Which Is Better for Your Home? Complete Comparison Guide',
  description:
    'Heat pump vs furnace — which heating system is right for your home in 2026? Compare efficiency (COP vs AFUE), upfront and operating costs, climate suitability, and long-term savings. Includes hybrid system breakdown and climate zone recommendations.',
  alternates: {
    canonical: '/reviews/heat-pump-vs-furnace',
  },
  openGraph: {
    title:
      'Heat Pump vs Furnace (2026): Which Is Better for Your Home?',
    description:
      'Complete comparison of heat pumps vs furnaces. Efficiency ratings, cost analysis, climate zone recommendations, and when a hybrid system makes sense.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Heat Pump vs Furnace (2026): Which Is Better for Your Home? Complete Comparison Guide',
  description:
    'Comprehensive comparison of heat pumps vs gas furnaces for home heating in 2026. Covers efficiency metrics (COP, HSPF2, AFUE), upfront and operating costs, climate suitability, pros and cons, hybrid dual-fuel systems, and recommendations by climate zone.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/heat-pump-vs-furnace',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a heat pump cheaper to run than a furnace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most climates, yes. A heat pump delivers 2-4 times more heating energy per unit of electricity consumed compared to the energy a furnace extracts from gas. In moderate climates where electricity costs are below $0.20/kWh, heat pumps typically cost 30-50% less to operate annually than a gas furnace. In areas with very cheap natural gas (under $1.00/therm) and expensive electricity (over $0.30/kWh), a high-efficiency gas furnace may be cheaper to run during the coldest months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do heat pumps work in cold climates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern cold-climate heat pumps work effectively down to -15 to -22 degrees Fahrenheit. Models like the Mitsubishi Hyper-Heat and Bosch IDS 2.0 maintain rated capacity well below freezing. However, efficiency does decline as temperatures drop, a heat pump that delivers a COP of 4.0 at 47 degrees Fahrenheit might deliver a COP of 2.0 at 5 degrees Fahrenheit. In USDA climate zones 6-7, a dual-fuel hybrid system (heat pump plus gas furnace backup) is often the most cost-effective approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a heat pump last compared to a furnace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A heat pump typically lasts 15-20 years, while a gas furnace lasts 15-25 years. Heat pumps may have shorter lifespans because they run year-round for both heating and cooling, whereas a furnace only operates during the heating season. However, modern inverter-driven heat pumps with variable-speed compressors experience less mechanical stress than older single-stage units, closing the longevity gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a dual-fuel or hybrid heating system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dual-fuel or hybrid system pairs an electric heat pump with a gas furnace. The heat pump handles heating when outdoor temperatures are above a set switchover point (typically 30-35 degrees Fahrenheit), and the gas furnace takes over when temperatures drop below that threshold. This gives you the efficiency of a heat pump in mild weather and the reliable output of a furnace in extreme cold. The system switches automatically based on outdoor temperature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there tax credits for heat pumps in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under the Inflation Reduction Act, homeowners can claim a federal tax credit of up to $2,000 for qualifying heat pump installations through 2032. The heat pump must meet Energy Star efficiency requirements. This credit is available annually and can be combined with state and utility rebates. Gas furnaces do not qualify for the heat pump tax credit, though high-efficiency furnaces may qualify for a separate $600 credit under the 25C energy efficiency home improvement credit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a heat pump replace both my furnace and air conditioner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A heat pump is a two-in-one system that provides both heating and cooling. By installing a heat pump, you eliminate the need for a separate air conditioner and furnace. This is one of the key cost advantages — instead of maintaining two systems, you maintain one. A properly sized heat pump can handle 100% of heating and cooling needs in climate zones 1-5 (most of the southern and central United States).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a heat pump or furnace if I already have gas lines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Having existing gas lines does not mean a furnace is automatically the better choice. If your current furnace is 15+ years old, replacing it with a heat pump can lower operating costs by 30-50% in moderate climates, and you gain air conditioning if you did not have it. If gas is very cheap in your area and winters are severe (regularly below 10 degrees Fahrenheit), a dual-fuel hybrid system lets you keep the gas line as backup while getting heat pump efficiency most of the year. In mild climates like California, a heat pump is almost always the better investment.',
      },
    },
  ],
};

export default function HeatPumpVsFurnacePage() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen py-12 px-4" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto">
          <article>

            {/* ========== BREADCRUMB ========== */}
            <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: '#a1a1aa' }}>
              <Link href="/reviews" className="hover:text-primary transition-colors flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" />
                Reviews
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span style={{ color: '#d4d4d8' }}>Heat Pump vs Furnace</span>
            </nav>

            {/* ========== HEADER ========== */}
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                >
                  <Star className="h-3 w-3" />
                  Comparison Guide
                </span>
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: '#3b82f620', color: '#60a5fa' }}
                >
                  <Shield className="h-3 w-3" />
                  Independently Researched
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: '#f5f5f5' }}>
                Heat Pump vs Furnace (2026): Which Is Better for Your Home?
              </h1>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                Choosing between a heat pump and a gas furnace is one of the biggest HVAC decisions
                you will make. A heat pump can cut your heating costs by 30-50% and doubles as an
                air conditioner — but a furnace still wins in certain climates. We break down efficiency,
                cost, climate suitability, and when a hybrid system makes the most sense.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Updated April 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  16 min read
                </span>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* ========== QUICK VERDICT ========== */}
            <section className="mb-10">
              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                  <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                  The Quick Verdict
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#22c55e' }}>Choose a Heat Pump If...</span>
                    <ul className="mt-2 space-y-1.5">
                      {[
                        'You live in a mild to moderate climate (zones 1-5)',
                        'You want heating AND cooling in one system',
                        'You want to lower operating costs by 30-50%',
                        'You want to take advantage of $2,000 federal tax credits',
                        'You are building new or replacing an aging AC + furnace',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-4 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#f97316' }}>Choose a Furnace If...</span>
                    <ul className="mt-2 space-y-1.5">
                      {[
                        'You live where temps regularly drop below 10\u00B0F',
                        'Natural gas is very cheap in your area (under $0.80/therm)',
                        'You already have ductwork and a gas line',
                        'You only need heating (you have a separate AC)',
                        'Your budget is tight and you need the lowest upfront cost',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#f97316' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== TABLE OF CONTENTS ========== */}
            <section className="mb-10">
              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h2 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>In This Guide</h2>
                <nav>
                  <ol className="space-y-2">
                    {[
                      { label: 'How Each System Works', href: '#how-they-work' },
                      { label: 'Efficiency Comparison: COP, HSPF2, and AFUE', href: '#efficiency' },
                      { label: 'Cost Comparison: Upfront + Operating', href: '#cost' },
                      { label: 'Climate Considerations', href: '#climate' },
                      { label: 'Heat Pump Pros & Cons', href: '#heat-pump-pros-cons' },
                      { label: 'Furnace Pros & Cons', href: '#furnace-pros-cons' },
                      { label: 'Hybrid / Dual-Fuel Systems', href: '#hybrid' },
                      { label: 'Recommendations by Climate Zone', href: '#climate-zones' },
                      { label: 'When to Choose a Heat Pump', href: '#when-heat-pump' },
                      { label: 'When to Choose a Furnace', href: '#when-furnace' },
                      { label: 'FAQ', href: '#faq' },
                    ].map((item, i) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-sm font-medium transition-colors"
                          style={{ color: '#d4d4d8' }}
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>
                            {i + 1}
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </section>

            {/* ========== HOW EACH SYSTEM WORKS ========== */}
            <section id="how-they-work" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                How Each System Works
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                Before comparing numbers, it helps to understand the fundamental difference in how
                these two systems produce heat. They use completely different mechanisms, and that
                difference drives every other comparison point.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Heat Pump */}
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#22c55e20' }}>
                      <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>Heat Pump</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    A heat pump does not generate heat. It <strong style={{ color: '#f5f5f5' }}>moves</strong> heat
                    from one place to another using a refrigerant cycle — the same basic technology
                    as your refrigerator, but in reverse.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Extracts heat from outdoor air (even in cold weather)',
                      'Compresses refrigerant to amplify that heat',
                      'Distributes warm air through ducts or mini-split heads',
                      'Reverses the cycle in summer for air conditioning',
                      'Powered by electricity, no combustion, no gas line needed',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Furnace */}
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f9731620' }}>
                      <Battery className="h-5 w-5" style={{ color: '#f97316' }} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>Gas Furnace</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    A gas furnace <strong style={{ color: '#f5f5f5' }}>creates</strong> heat by burning
                    natural gas (or propane) inside a combustion chamber. A blower fan pushes air
                    over the hot heat exchanger and distributes it through ductwork.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Burns natural gas or propane to generate heat directly',
                      'Heat exchanger transfers combustion heat to air',
                      'Blower motor circulates heated air through ducts',
                      'Heating only — requires a separate air conditioner for cooling',
                      'Requires gas line, venting, and combustion air supply',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#f97316' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-lg p-4 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>The key insight:</strong> Because a heat pump
                  moves heat rather than creating it, it can deliver 2-4 times more heating energy
                  than the electrical energy it consumes. A furnace can never exceed 100% efficiency, the best models convert about 98% of gas energy into usable heat. A heat pump
                  routinely delivers 200-400% effective efficiency.
                </p>
              </div>
            </section>

            {/* ========== EFFICIENCY COMPARISON ========== */}
            <section id="efficiency" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Efficiency Comparison: COP, HSPF2, and AFUE
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                Heat pumps and furnaces use different efficiency metrics, which makes direct
                comparison confusing. Here is what each number actually means and how they
                translate to real-world performance.
              </p>

              {/* Metric Explainers */}
              <div className="space-y-4 mb-6">
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    COP (Coefficient of Performance); Heat Pumps
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#d4d4d8' }}>
                    COP measures how many units of heat a heat pump delivers per unit of electricity
                    consumed. A COP of 3.0 means for every 1 kWh of electricity used, you get 3 kWh
                    of heating output; that is 300% effective efficiency.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { temp: '47\u00B0F', cop: '3.0 - 4.0', note: 'Peak efficiency' },
                      { temp: '17\u00B0F', cop: '2.0 - 2.8', note: 'Good cold weather' },
                      { temp: '-5\u00B0F', cop: '1.5 - 2.0', note: 'Extreme cold' },
                    ].map((item) => (
                      <div key={item.temp} className="text-center p-3 rounded-lg" style={{ backgroundColor: '#171717' }}>
                        <div className="text-xs font-medium mb-1" style={{ color: '#a1a1aa' }}>At {item.temp}</div>
                        <div className="text-lg font-bold" style={{ color: '#22c55e' }}>{item.cop}</div>
                        <div className="text-xs mt-1" style={{ color: '#a1a1aa' }}>{item.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    HSPF2 (Heating Seasonal Performance Factor), Heat Pumps
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>
                    HSPF2 measures seasonal heating efficiency over an entire winter. It accounts for
                    varying outdoor temperatures and defrost cycles. Higher is better. The federal
                    minimum for heat pumps is 7.5 HSPF2. High-efficiency models reach 12-13 HSPF2.
                    To convert HSPF2 to an approximate COP, divide by 3.412. so an HSPF2 of 10
                    is roughly a COP of 2.93 across the season.
                  </p>
                </div>

                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    AFUE (Annual Fuel Utilization Efficiency); Furnaces
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>
                    AFUE measures what percentage of gas energy is converted to usable heat. An AFUE
                    of 96% means 96 cents of every dollar spent on gas becomes heat; the other 4
                    cents goes up the flue. The federal minimum is 80% AFUE. Standard efficiency
                    models are 80-89% AFUE. High-efficiency condensing furnaces reach 95-98.5% AFUE.
                    The maximum possible is effectively 100% — a furnace can never exceed 100% AFUE.
                  </p>
                </div>
              </div>

              {/* Side-by-Side Efficiency Table */}
              <div className="rounded-xl border overflow-hidden mb-6" style={{ borderColor: '#27272a' }}>
                <div className="p-4" style={{ backgroundColor: '#141414' }}>
                  <h3 className="font-bold" style={{ color: '#f5f5f5' }}>Head-to-Head: Efficiency at a Glance</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: '#a1a1aa' }}>Metric</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#22c55e' }}>Heat Pump</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f97316' }}>Gas Furnace</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: 'Efficiency rating', hp: 'HSPF2 7.5 - 13+', furnace: 'AFUE 80% - 98.5%' },
                        { metric: 'Effective efficiency', hp: '200 - 400%', furnace: '80 - 98.5%' },
                        { metric: 'Best conditions', hp: 'COP 4.0+ at 47\u00B0F', furnace: '98.5% AFUE (all temps)' },
                        { metric: 'Worst conditions', hp: 'COP 1.5 at -5\u00B0F', furnace: '80% AFUE (same)' },
                        { metric: 'Efficiency varies with temp?', hp: 'Yes, declines in cold', furnace: 'No. Consistent' },
                        { metric: 'Provides cooling?', hp: 'Yes (SEER2 15-22+)', furnace: 'No' },
                        { metric: 'Energy source', hp: 'Electricity', furnace: 'Natural gas / propane' },
                      ].map((row) => (
                        <tr key={row.metric} style={{ borderTop: '1px solid #27272a' }}>
                          <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{row.metric}</td>
                          <td className="p-3" style={{ color: '#d4d4d8' }}>{row.hp}</td>
                          <td className="p-3" style={{ color: '#d4d4d8' }}>{row.furnace}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-lg p-4 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Bottom line on efficiency:</strong> A heat pump
                  is dramatically more efficient in mild-to-moderate weather. Even at 17 degrees Fahrenheit, most
                  heat pumps still deliver a COP of 2.0+ — meaning double the efficiency of the best
                  gas furnace. The furnace only wins on efficiency in extreme cold (below about 0 degrees Fahrenheit
                  with low gas prices).
                </p>
              </div>
            </section>

            {/* ========== COST COMPARISON ========== */}
            <section id="cost" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Cost Comparison: Upfront + Operating
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                The cost picture has shifted significantly in favor of heat pumps in recent years,
                especially with federal tax credits. Here is a realistic breakdown for 2026.
              </p>

              {/* Upfront Costs */}
              <div className="rounded-xl p-6 border mb-6" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                  <DollarSign className="h-5 w-5" style={{ color: '#22c55e' }} />
                  Upfront Equipment + Installation
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#22c55e' }}>Heat Pump (Ducted)</div>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#f5f5f5' }}>$4,500 - $8,500</div>
                    <div className="text-sm mb-3" style={{ color: '#a1a1aa' }}>Equipment + installation (before credits)</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-3.5 w-3.5" style={{ color: '#22c55e' }} />
                        Includes heating AND cooling
                      </li>
                      <li className="flex items-center gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-3.5 w-3.5" style={{ color: '#22c55e' }} />
                        Up to $2,000 federal tax credit
                      </li>
                      <li className="flex items-center gap-2 text-sm" style={{ color: '#22c55e' }}>
                        <ArrowRight className="h-3.5 w-3.5" />
                        <strong>After credits: $2,500 - $6,500</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#f97316' }}>Gas Furnace + AC</div>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#f5f5f5' }}>$5,500 - $12,000</div>
                    <div className="text-sm mb-3" style={{ color: '#a1a1aa' }}>Furnace + separate AC unit installed</div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-3.5 w-3.5" style={{ color: '#ef4444' }} />
                        Furnace alone: $2,500 - $6,000
                      </li>
                      <li className="flex items-center gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-3.5 w-3.5" style={{ color: '#ef4444' }} />
                        AC unit: $3,000 - $6,000 additional
                      </li>
                      <li className="flex items-center gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <ArrowRight className="h-3.5 w-3.5" />
                        Limited tax credits ($600 max for furnace)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: '#0a0a0a', border: '1px dashed #27272a' }}>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#22c55e' }}>Key insight:</strong> A heat pump replaces
                    BOTH your furnace and AC. When comparing total system cost (heating + cooling),
                    a heat pump is often cheaper upfront. And significantly cheaper after the $2,000
                    federal tax credit.
                  </p>
                </div>
              </div>

              {/* Operating Costs */}
              <div className="rounded-xl p-6 border mb-6" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                  <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                  Annual Operating Costs (Heating Only)
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#d4d4d8' }}>
                  Operating costs depend heavily on your local energy prices and climate. Here are
                  three representative scenarios for a 2,000 sq ft home.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      label: 'Mild Climate (California, Zone 3)',
                      hp: '$450 - $700/year',
                      furnace: '$650 - $1,000/year',
                      savings: '~30-35% lower with heat pump',
                      color: '#22c55e',
                    },
                    {
                      label: 'Moderate Climate (Mid-Atlantic, Zone 4)',
                      hp: '$700 - $1,100/year',
                      furnace: '$900 - $1,400/year',
                      savings: '~20-30% lower with heat pump',
                      color: '#22c55e',
                    },
                    {
                      label: 'Cold Climate (Upper Midwest, Zone 6)',
                      hp: '$1,100 - $1,800/year',
                      furnace: '$900 - $1,300/year',
                      savings: 'Furnace may be cheaper in extreme cold',
                      color: '#f97316',
                    },
                  ].map((scenario) => (
                    <div key={scenario.label} className="rounded-lg p-4 grid md:grid-cols-4 gap-3 items-center" style={{ backgroundColor: '#171717' }}>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>{scenario.label}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs mb-1" style={{ color: '#a1a1aa' }}>Heat Pump</div>
                        <div className="text-sm font-bold" style={{ color: '#22c55e' }}>{scenario.hp}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs mb-1" style={{ color: '#a1a1aa' }}>Gas Furnace</div>
                        <div className="text-sm font-bold" style={{ color: '#f97316' }}>{scenario.furnace}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-medium" style={{ color: scenario.color }}>{scenario.savings}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: '#71717a' }}>
                  Based on national average energy prices: electricity at $0.16/kWh, natural gas at $1.20/therm.
                  California electricity averages $0.30-$0.45/kWh, which narrows the heat pump advantage unless paired with solar.
                </p>
              </div>

              {/* 10-Year TCO */}
              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>
                  10-Year Total Cost of Ownership
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#d4d4d8' }}>
                  When you factor in equipment, installation, tax credits, and 10 years of operating
                  costs, the picture becomes clearer.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#22c55e' }}>Heat Pump (Mild Climate)</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: '#a1a1aa' }}>Equipment + install</span>
                        <span style={{ color: '#d4d4d8' }}>$6,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: '#a1a1aa' }}>Federal tax credit</span>
                        <span style={{ color: '#22c55e' }}>-$2,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: '#a1a1aa' }}>10 years operating</span>
                        <span style={{ color: '#d4d4d8' }}>$5,750</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold pt-2" style={{ borderTop: '1px solid #27272a' }}>
                        <span style={{ color: '#f5f5f5' }}>10-Year Total</span>
                        <span style={{ color: '#22c55e' }}>$10,250</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#f97316' }}>Furnace + AC (Mild Climate)</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: '#a1a1aa' }}>Furnace + AC installed</span>
                        <span style={{ color: '#d4d4d8' }}>$8,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: '#a1a1aa' }}>Tax credit (furnace only)</span>
                        <span style={{ color: '#f97316' }}>-$600</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: '#a1a1aa' }}>10 years operating</span>
                        <span style={{ color: '#d4d4d8' }}>$8,250</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold pt-2" style={{ borderTop: '1px solid #27272a' }}>
                        <span style={{ color: '#f5f5f5' }}>10-Year Total</span>
                        <span style={{ color: '#f97316' }}>$16,150</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-3 mt-4" style={{ backgroundColor: '#22c55e10', border: '1px solid #22c55e30' }}>
                  <p className="text-sm font-semibold" style={{ color: '#22c55e' }}>
                    In a mild climate, a heat pump saves approximately $5,900 over 10 years compared
                    to a furnace + AC combo. The savings are even greater when paired with solar panels.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== CLIMATE CONSIDERATIONS ========== */}
            <section id="climate" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Climate Considerations
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                Climate is the single biggest factor in this decision. Heat pump efficiency is
                temperature-dependent, the colder it gets, the harder the system works. Here is
                how it plays out across different climates.
              </p>

              <div className="space-y-4">
                {[
                  {
                    zone: 'Hot & Mild Climates (Zones 1-3)',
                    examples: 'Florida, Southern California, Texas Gulf Coast, Arizona',
                    icon: Sun,
                    winner: 'Heat Pump',
                    winnerColor: '#22c55e',
                    description: 'Heat pumps are the clear winner. Mild winters mean the heat pump operates at peak efficiency (COP 3.0-4.0) virtually all heating season. You also get air conditioning built in, which you definitely need. A gas furnace makes little sense in these climates.',
                  },
                  {
                    zone: 'Mixed-Humid & Mixed-Dry Climates (Zones 4-5)',
                    examples: 'Mid-Atlantic, Pacific Northwest, Northern California, Tennessee Valley',
                    icon: Shield,
                    winner: 'Heat Pump (strong advantage)',
                    winnerColor: '#22c55e',
                    description: 'Heat pumps maintain a COP above 2.0 for the vast majority of the heating season. Temperatures rarely drop below 10 degrees Fahrenheit for extended periods. Modern cold-climate heat pumps handle these zones easily. Operating cost savings of 25-40% compared to gas furnaces.',
                  },
                  {
                    zone: 'Cold Climates (Zone 6)',
                    examples: 'Upper Midwest, Northern Plains, northern New England',
                    icon: Battery,
                    winner: 'Hybrid System (best of both)',
                    winnerColor: '#60a5fa',
                    description: 'Extended periods below 10 degrees Fahrenheit reduce heat pump efficiency. A hybrid dual-fuel system uses the heat pump for 70-85% of heating hours (mild days) and switches to the gas furnace for the coldest 15-30% of hours. This combination typically costs less to operate than either system alone.',
                  },
                  {
                    zone: 'Very Cold & Subarctic Climates (Zone 7)',
                    examples: 'Northern Minnesota, Montana mountains, interior Alaska',
                    icon: XCircle,
                    winner: 'Furnace (with optional heat pump)',
                    winnerColor: '#f97316',
                    description: 'Prolonged temperatures well below zero strain even cold-climate heat pumps. A high-efficiency gas furnace (96%+ AFUE) is the more reliable primary heating source. Adding a heat pump for shoulder seasons can still reduce overall costs, but the furnace should be the primary system.',
                  },
                ].map((zone) => (
                  <div key={zone.zone} className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#171717' }}>
                        <zone.icon className="h-5 w-5" style={{ color: zone.winnerColor }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1" style={{ color: '#f5f5f5' }}>{zone.zone}</h3>
                        <p className="text-xs mb-2" style={{ color: '#a1a1aa' }}>{zone.examples}</p>
                        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2" style={{ backgroundColor: zone.winnerColor + '20', color: zone.winnerColor }}>
                          Winner: {zone.winner}
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>{zone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== HEAT PUMP PROS & CONS ========== */}
            <section id="heat-pump-pros-cons" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Heat Pump: Pros and Cons
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                    <CheckCircle className="h-5 w-5" />
                    Advantages
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      'Heating AND cooling in one system. replaces both furnace and AC',
                      '200-400% effective efficiency (COP 2.0-4.0), dramatically lower operating costs',
                      'Up to $2,000 federal tax credit through 2032 under the Inflation Reduction Act',
                      'No combustion; no carbon monoxide risk, no gas leaks, no flue needed',
                      'Works with solar panels for near-zero operating costs',
                      'Better humidity control in cooling mode than most central AC systems',
                      'Quieter operation, modern inverter compressors are whisper-quiet',
                      'All-electric. Future-proof as grid gets cleaner and gas prices rise',
                      'Ductless mini-split options available for homes without ductwork',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                    <XCircle className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      'Efficiency drops in extreme cold. COP falls below 2.0 under 0\u00B0F',
                      'Higher upfront cost than a furnace alone (but cheaper than furnace + AC)',
                      'Supplemental heat may be needed in climate zones 6-7',
                      'Defrost cycles in cold weather temporarily reduce output',
                      'Dependent on electricity — vulnerable to power outages without backup',
                      'Air temperature output is warm (90-110\u00B0F) not hot (130-150\u00B0F like a furnace)',
                      'Shorter lifespan than a furnace (15-20 years vs 15-25 years)',
                      'Requires outdoor unit. Generates some noise, takes up yard space',
                      'Higher electricity rates in some areas can reduce cost advantage',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ========== FURNACE PROS & CONS ========== */}
            <section id="furnace-pros-cons" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Gas Furnace: Pros and Cons
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                    <CheckCircle className="h-5 w-5" />
                    Advantages
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      'Consistent performance in any temperature, AFUE does not change with weather',
                      'Higher air output temperature (130-150\u00B0F). Feels warmer faster',
                      'Lower upfront cost for the furnace unit alone ($2,500-$6,000)',
                      'Longer potential lifespan (15-25 years with proper maintenance)',
                      'Works during power outages (with battery backup for blower fan)',
                      'Natural gas is cheap in many areas — can be very economical where gas is under $0.80/therm',
                      'Well-established technology with abundant repair technicians',
                      'No outdoor unit, less noise and no yard space needed for heating',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                    <XCircle className="h-5 w-5" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      'Heating only. you need a separate air conditioner ($3,000-$6,000)',
                      'Maximum efficiency capped at 98.5% — can never exceed 100% AFUE',
                      'Combustion risk — carbon monoxide, gas leaks, fire hazard',
                      'Requires gas line, flue venting, and combustion air supply',
                      'Natural gas prices are rising 3-5% per year in most markets',
                      'No federal heat pump tax credit. Only a $600 furnace credit',
                      'Produces greenhouse gas emissions at the point of use',
                      'Many states are phasing out gas hookups in new construction',
                      'Ductwork required, no ductless option available',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ========== HYBRID SYSTEMS ========== */}
            <section id="hybrid" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Hybrid / Dual-Fuel Systems: The Best of Both Worlds
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                If you live in a cold climate (zones 5-6) and cannot decide between a heat pump
                and a furnace, you do not have to. A dual-fuel hybrid system pairs both together
                and automatically switches between them based on outdoor temperature.
              </p>

              <div className="rounded-xl p-6 border mb-6" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                  <Battery className="h-5 w-5" style={{ color: '#60a5fa' }} />
                  How a Dual-Fuel System Works
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      step: '1',
                      title: 'Above the switchover point (typically 30-35\u00B0F)',
                      desc: 'The heat pump runs exclusively. It operates at COP 2.5-4.0, costing far less than gas. This covers 70-85% of total heating hours in most cold climates.',
                    },
                    {
                      step: '2',
                      title: 'Below the switchover point',
                      desc: 'The thermostat automatically engages the gas furnace. The heat pump shuts off. The furnace delivers full-capacity heat at 95-98% AFUE, handling the coldest 15-30% of heating hours.',
                    },
                    {
                      step: '3',
                      title: 'Summer cooling',
                      desc: 'The heat pump reverses to AC mode. The furnace stays off entirely. You get efficient cooling all summer without a separate air conditioning unit.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ backgroundColor: '#60a5fa20', color: '#60a5fa' }}>
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1" style={{ color: '#f5f5f5' }}>{item.title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>Dual-Fuel Cost & Performance</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#a1a1aa' }}>Upfront Cost</div>
                    <div className="text-xl font-bold" style={{ color: '#f5f5f5' }}>$7,000 - $12,000</div>
                    <div className="text-xs mt-1" style={{ color: '#a1a1aa' }}>Heat pump + furnace installed</div>
                  </div>
                  <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#a1a1aa' }}>Operating Savings</div>
                    <div className="text-xl font-bold" style={{ color: '#22c55e' }}>15-30%</div>
                    <div className="text-xs mt-1" style={{ color: '#a1a1aa' }}>vs furnace-only in cold climates</div>
                  </div>
                  <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#a1a1aa' }}>Tax Credits</div>
                    <div className="text-xl font-bold" style={{ color: '#22c55e' }}>Up to $2,600</div>
                    <div className="text-xs mt-1" style={{ color: '#a1a1aa' }}>$2,000 heat pump + $600 furnace</div>
                  </div>
                </div>
                <div className="rounded-lg p-3 mt-4" style={{ backgroundColor: '#0a0a0a', border: '1px dashed #27272a' }}>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#f5f5f5' }}>Who should consider dual-fuel?</strong> Homeowners
                    in climate zones 5-6 who already have a gas line and ductwork. The hybrid approach
                    gives you heat pump efficiency in mild weather and furnace reliability in extreme cold, the lowest operating costs for cold climates.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== RECOMMENDATIONS BY CLIMATE ZONE ========== */}
            <section id="climate-zones" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Recommendations by Climate Zone
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                Here is our recommendation for each IECC climate zone. These are general guidelines, your local energy prices, existing infrastructure, and personal preferences should
                also factor into the decision.
              </p>

              <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: '#a1a1aa' }}>Zone</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#a1a1aa' }}>Winter Temps</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#a1a1aa' }}>Recommendation</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#a1a1aa' }}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          zone: '1-2 (Hot-Humid)',
                          temps: 'Rarely below 35\u00B0F',
                          rec: 'Heat Pump',
                          recColor: '#22c55e',
                          why: 'Year-round efficiency, cooling is primary need',
                        },
                        {
                          zone: '3 (Warm)',
                          temps: 'Lows 25-40\u00B0F',
                          rec: 'Heat Pump',
                          recColor: '#22c55e',
                          why: 'COP stays 3.0+ nearly all winter',
                        },
                        {
                          zone: '4 (Mixed)',
                          temps: 'Lows 15-30\u00B0F',
                          rec: 'Heat Pump',
                          recColor: '#22c55e',
                          why: 'Cold-climate models handle these temps easily',
                        },
                        {
                          zone: '5 (Cool)',
                          temps: 'Lows 0-20\u00B0F',
                          rec: 'Heat Pump or Hybrid',
                          recColor: '#60a5fa',
                          why: 'Heat pump works for most hours; hybrid if gas is cheap',
                        },
                        {
                          zone: '6 (Cold)',
                          temps: 'Lows -10 to 10\u00B0F',
                          rec: 'Hybrid Dual-Fuel',
                          recColor: '#60a5fa',
                          why: 'Heat pump for mild days, furnace for coldest periods',
                        },
                        {
                          zone: '7 (Very Cold)',
                          temps: 'Lows below -10\u00B0F',
                          rec: 'Furnace (+ optional HP)',
                          recColor: '#f97316',
                          why: 'Gas furnace primary; heat pump for shoulder seasons',
                        },
                      ].map((row) => (
                        <tr key={row.zone} style={{ borderTop: '1px solid #27272a' }}>
                          <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{row.zone}</td>
                          <td className="p-3" style={{ color: '#d4d4d8' }}>{row.temps}</td>
                          <td className="p-3">
                            <span className="text-sm font-semibold" style={{ color: row.recColor }}>{row.rec}</span>
                          </td>
                          <td className="p-3" style={{ color: '#a1a1aa' }}>{row.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ========== WHEN TO CHOOSE HEAT PUMP ========== */}
            <section id="when-heat-pump" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                When to Choose a Heat Pump
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: '#d4d4d8' }}>
                A heat pump is the better choice for the majority of American homeowners. Here
                are the specific scenarios where it makes the most financial and practical sense.
              </p>
              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="space-y-4">
                  {[
                    {
                      title: 'You need both heating and cooling',
                      desc: 'A heat pump replaces two systems with one. If you need AC anyway, a heat pump is almost always cheaper than buying a separate furnace and air conditioner.',
                    },
                    {
                      title: 'You live in climate zones 1-5',
                      desc: 'In any area where winters stay above about 10 degrees Fahrenheit for the vast majority of the season, a heat pump will outperform a furnace on efficiency and operating cost.',
                    },
                    {
                      title: 'You have solar panels or plan to install them',
                      desc: 'Solar panels generate free electricity. A heat pump running on solar power costs essentially nothing to operate. This combination is the most cost-effective heating and cooling setup available.',
                    },
                    {
                      title: 'You are building new construction',
                      desc: 'No existing gas line means no reason to install one. Going all-electric with a heat pump avoids the $2,000-$5,000 cost of running a new gas line. Many states and cities are banning gas in new construction.',
                    },
                    {
                      title: 'You are replacing a 15+ year old system',
                      desc: 'An aging furnace and AC combo is the perfect time to switch to a heat pump. One system replaces two, with better efficiency and $2,000 in tax credits to offset the cost.',
                    },
                    {
                      title: 'You want to reduce your carbon footprint',
                      desc: 'Heat pumps produce zero on-site emissions. Even accounting for grid electricity generation, a heat pump produces 40-70% fewer greenhouse gas emissions than a gas furnace in most U.S. Regions.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <div>
                        <h3 className="text-sm font-semibold mb-1" style={{ color: '#f5f5f5' }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== WHEN TO CHOOSE FURNACE ========== */}
            <section id="when-furnace" className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                When to Choose a Furnace
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: '#d4d4d8' }}>
                A gas furnace is still the right choice in some situations. Here are the scenarios
                where it makes sense to stick with gas.
              </p>
              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="space-y-4">
                  {[
                    {
                      title: 'You live in climate zone 7 with cheap natural gas',
                      desc: 'If temperatures regularly plunge below -10 degrees Fahrenheit and natural gas costs under $0.80 per therm, a high-efficiency furnace (96%+ AFUE) will cost less to operate than a heat pump during the coldest months.',
                    },
                    {
                      title: 'You only need to replace your furnace (not your AC)',
                      desc: 'If your air conditioner is relatively new and only the furnace needs replacement, replacing the furnace alone is more cost-effective than switching the entire system to a heat pump.',
                    },
                    {
                      title: 'Your electrical panel cannot support a heat pump',
                      desc: 'Heat pumps typically require a 30-60 amp circuit. If your electrical panel is maxed out, upgrading it ($1,500-$3,000) adds to the heat pump cost. A furnace uses minimal electricity.',
                    },
                    {
                      title: 'You have a very tight budget',
                      desc: 'A furnace alone costs $2,500-$6,000 installed. If you do not need air conditioning and money is tight, a furnace-only replacement is the lowest upfront cost option.',
                    },
                    {
                      title: 'You strongly prefer higher-temperature air output',
                      desc: 'Furnaces deliver supply air at 130-150 degrees Fahrenheit, while heat pumps deliver at 90-110 degrees Fahrenheit. Some homeowners prefer the sensation of hotter air from vents, though both achieve the same room temperature.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#f97316' }} />
                      <div>
                        <h3 className="text-sm font-semibold mb-1" style={{ color: '#f5f5f5' }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== TOP HEAT PUMP PICKS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Top Heat Pump Picks for 2026
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                If you have decided a heat pump is right for your home, here are the models we
                recommend based on budget, climate, and installation type.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: 'Carrier Infinity 24 (ducted)',
                    badge: 'Best Overall',
                    badgeColor: '#22c55e',
                    price: '$4,500 - $7,500 installed',
                    specs: 'Up to 24 SEER2 / 13 HSPF2. Variable-speed inverter compressor. Heating down to -15\u00B0F. Greenspeed Intelligence auto-optimization.',
                    best: 'Homeowners replacing a furnace + AC who want top-tier efficiency and quiet operation.',
                  },
                  {
                    name: 'Mitsubishi Hyper-Heat (ductless)',
                    badge: 'Best Cold Climate',
                    badgeColor: '#60a5fa',
                    price: '$3,500 - $6,000 per zone installed',
                    specs: 'Up to 33.1 SEER2 / 15.2 HSPF2. Maintains 100% heating capacity at 5\u00B0F. Operates down to -22\u00B0F. Whisper-quiet 19 dB indoor.',
                    best: 'Cold climate homeowners (zones 5-6) who want a heat pump that can handle extreme cold without backup.',
                  },
                  {
                    name: 'MrCool DIY 4th Gen (ductless)',
                    badge: 'Best DIY Install',
                    badgeColor: '#a855f7',
                    price: '$1,549 - $3,329 (no install cost)',
                    specs: 'Up to 22 SEER2. Pre-charged QuickConnect line sets. no HVAC certification needed. Heating down to -4\u00B0F.',
                    best: 'Handy homeowners who want to save $3,000-$5,000 in installation labor.',
                  },
                  {
                    name: 'Bosch IDS 2.0 (ducted)',
                    badge: 'Best Value Ducted',
                    badgeColor: '#f59e0b',
                    price: '$3,800 - $6,500 installed',
                    specs: 'Up to 20 SEER2 / 10 HSPF2. Inverter-driven variable speed. Pairs well with existing air handlers. Operates down to -4\u00B0F.',
                    best: 'Budget-conscious homeowners who want a reliable ducted system without premium pricing.',
                  },
                ].map((unit) => (
                  <div key={unit.name} className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: unit.badgeColor + '20', color: unit.badgeColor }}>
                        {unit.badge}
                      </span>
                      <span className="text-sm font-bold" style={{ color: '#f5f5f5' }}>{unit.name}</span>
                    </div>
                    <div className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>{unit.price}</div>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: '#d4d4d8' }}>{unit.specs}</p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      <strong style={{ color: '#f5f5f5' }}>Best for:</strong> {unit.best}
                    </p>
                    <div className="mt-3">
                      <BuyButton
                        productKey={unit.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}
                        source="heat-pump-vs-furnace"
                        variant="compact"
                        label={`Check Price, ${unit.name}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== TOP FURNACE PICKS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Top Gas Furnace Picks for 2026
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#d4d4d8' }}>
                If a gas furnace (or a dual-fuel system) is the right fit for your situation, these
                are the models worth considering.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: 'Carrier Infinity 98 (59MN7)',
                    badge: 'Best Overall Furnace',
                    badgeColor: '#f97316',
                    price: '$3,500 - $6,000 installed',
                    specs: '98.5% AFUE, the most efficient gas furnace available. Modulating gas valve and variable-speed ECM blower for precise temperature control and whisper-quiet operation.',
                    best: 'Homeowners who need a furnace and want the absolute lowest gas bills.',
                  },
                  {
                    name: 'Lennox SL280V',
                    badge: 'Best Quiet Operation',
                    badgeColor: '#60a5fa',
                    price: '$3,000 - $5,200 installed',
                    specs: '80% AFUE (non-condensing). Variable-speed blower, extremely quiet. No condensate drain needed. Ideal for dual-fuel pairing since the heat pump handles most heating.',
                    best: 'Dual-fuel systems where the furnace is backup only. lower upfront cost since max AFUE is less critical.',
                  },
                  {
                    name: 'Goodman GMVM97',
                    badge: 'Best Budget',
                    badgeColor: '#22c55e',
                    price: '$2,500 - $4,500 installed',
                    specs: '97% AFUE. Modulating burner and variable-speed blower. Comparable performance to premium brands at a lower price point. 10-year parts warranty.',
                    best: 'Budget-conscious homeowners who want high efficiency without the premium brand markup.',
                  },
                ].map((unit) => (
                  <div key={unit.name} className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: unit.badgeColor + '20', color: unit.badgeColor }}>
                        {unit.badge}
                      </span>
                      <span className="text-sm font-bold" style={{ color: '#f5f5f5' }}>{unit.name}</span>
                    </div>
                    <div className="text-sm font-semibold mb-2" style={{ color: '#f97316' }}>{unit.price}</div>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: '#d4d4d8' }}>{unit.specs}</p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      <strong style={{ color: '#f5f5f5' }}>Best for:</strong> {unit.best}
                    </p>
                    <div className="mt-3">
                      <BuyButton
                        productKey={unit.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}
                        source="heat-pump-vs-furnace"
                        variant="compact"
                        label={`Check Price. ${unit.name}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== SOLAR PAIRING CALLOUT ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#22c55e10', borderColor: '#22c55e30' }}>
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                  <Sun className="h-5 w-5" style={{ color: '#22c55e' }} />
                  Heat Pumps + Solar: The Ultimate Combination
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The strongest case for a heat pump is when you pair it with rooftop solar panels.
                  Solar generates free electricity during peak hours, exactly when your heat pump
                  runs. In California, this combination can reduce your combined heating, cooling,
                  and electricity costs by 70-90%.
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Heat pump on solar power = near-zero heating and cooling costs',
                    'Under NEM 3.0, using solar directly avoids the lowest export credits',
                    'A 6-8 kW solar array can offset 100% of a heat pump\'s annual energy use',
                    'IRA tax credits stack: $2,000 for the heat pump + 30% of solar system cost',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Zap className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm" style={{ color: '#a1a1aa' }}>
                  A gas furnace cannot be powered by solar. This is one advantage that will only
                  grow as electricity prices rise and solar costs continue to fall.
                </p>
              </div>
            </section>

            {/* ========== KEY CONSIDERATIONS BEFORE BUYING ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Key Considerations Before You Buy
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Get a Manual J Load Calculation',
                    desc: 'Proper sizing is critical for both systems. An oversized heat pump short-cycles and wastes energy. An undersized furnace cannot keep up on the coldest days. Insist on a Manual J calculation from your HVAC contractor, not a rule-of-thumb estimate.',
                    icon: Search,
                  },
                  {
                    title: 'Check Your Electrical Panel',
                    desc: 'A heat pump needs a dedicated 30-60 amp circuit. If your panel is at capacity, factor in $1,500-$3,000 for an upgrade. Get your electrician to evaluate before committing to a heat pump.',
                    icon: Zap,
                  },
                  {
                    title: 'Compare Local Energy Prices',
                    desc: 'The heat pump vs furnace math depends on your local electricity rate ($/kWh) and gas rate ($/therm). Get your actual rates from recent utility bills; national averages can be misleading.',
                    icon: DollarSign,
                  },
                  {
                    title: 'Research Available Rebates',
                    desc: 'Beyond the $2,000 federal tax credit, many states and utilities offer additional heat pump rebates of $500-$5,000. The DSIRE database (dsireusa.org) lists all available incentives by zip code.',
                    icon: Star,
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-5 w-5" style={{ color: '#22c55e' }} />
                      <h3 className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <div key={faq.name} className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>{faq.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== FINAL VERDICT ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h2 className="text-xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                  The Final Verdict
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  For most homeowners in climate zones 1-5, a <strong style={{ color: '#22c55e' }}>heat pump
                  is the clear winner</strong> in 2026. It provides heating and cooling in one system,
                  operates at 2-4 times the efficiency of a gas furnace, qualifies for $2,000 in
                  federal tax credits, and costs less to own over 10 years. The technology has matured
                  to the point where cold-climate models handle temperatures well below zero.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  In cold climates (zone 6), a <strong style={{ color: '#60a5fa' }}>hybrid dual-fuel
                  system</strong> gives you the best of both worlds. Heat pump efficiency for 70-85%
                  of heating hours and furnace reliability for the coldest days.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  A <strong style={{ color: '#f97316' }}>gas furnace as the primary system</strong> makes
                  sense only in very cold climates (zone 7) with cheap natural gas, or in specific
                  situations where budget constraints or electrical limitations make a heat pump impractical.
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  Whichever system you choose, get multiple quotes, insist on a Manual J load
                  calculation, and take advantage of all available tax credits and rebates.
                </p>

                <BuyButton
                  productKey="mrcool-diy-4th-gen"
                  source="heat-pump-vs-furnace"
                  variant="primary"
                  label="Check Price — MrCool DIY Heat Pump"
                  showPrice
                />
              </div>
            </section>

            {/* ========== RELATED REVIEWS ========== */}
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#f5f5f5' }}>Related Reviews</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Best Mini Split AC & Heat Pumps (2026)',
                    desc: 'DIY ductless heat pump options, install yourself and save thousands.',
                    href: '/reviews/best-mini-split-ac',
                  },
                  {
                    title: 'Best Smart Thermostats (2026)',
                    desc: 'Maximize heat pump efficiency with intelligent scheduling and geofencing.',
                    href: '/reviews/best-smart-thermostat',
                  },
                  {
                    title: 'MrCool DIY 4th Gen Review',
                    desc: 'Our in-depth review of the most popular DIY mini-split heat pump.',
                    href: '/reviews/mrcool-diy-4th-gen-review',
                  },
                  {
                    title: 'Best Whole House Generators (2026)',
                    desc: 'Keep your heat pump running during power outages with backup power.',
                    href: '/reviews/best-whole-house-generator',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl p-4 border block transition-colors"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <h3 className="font-bold text-sm mb-1" style={{ color: '#f5f5f5' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium mt-2" style={{ color: '#22c55e' }}>
                      Read review <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* ========== AFFILIATE DISCLOSURE ========== */}
            <div className="rounded-lg p-4 border mb-6" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
              <p className="text-xs leading-relaxed" style={{ color: '#71717a' }}>
                <strong style={{ color: '#a1a1aa' }}>Affiliate Disclosure:</strong> GreenReviewsHub is
                reader-supported. When you purchase through links on this page, we may earn an
                affiliate commission at no additional cost to you. This does not influence our
                recommendations, all opinions are our own based on independent research and analysis.
                Product prices and availability are accurate as of the date published and are subject
                to change.
              </p>
            </div>

          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
