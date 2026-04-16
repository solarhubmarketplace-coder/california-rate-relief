import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Powered EV Charger: How to Charge Your EV With Solar in California',
  description:
    'EV owners in California pay $100-$200+/month to charge at home. Learn how solar panels can offset your EV charging cost, available rebates, and TOU strategies.',
  alternates: {
    canonical: '/blog/solar-powered-ev-charger',
  },
  openGraph: {
    title:
      'Solar Powered EV Charger: How to Charge Your EV With Solar in California',
    description:
      'How California EV owners can use solar to eliminate charging costs. TOU strategies, rebates, and system sizing explained.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar Powered EV Charger: How to Charge Your EV With Solar in California',
  description:
    'How California EV owners can use solar panels to offset or eliminate EV charging costs. Covers system sizing, TOU rates, rebates, and bidirectional charging.',
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
    '@id': 'https://ratereliefca.com/blog/solar-powered-ev-charger',
  },
};

export default function SolarPoweredEvCharger() {
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
                EV &amp; Solar
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Powered EV Charger: How to Charge Your EV With Solar in California
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>9 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                You bought an electric vehicle to save on gas. But if you&apos;re charging at home on a California utility rate, you may have noticed your electricity bill climbing by $100-$200 per month — or more if you&apos;re charging during peak hours. That&apos;s the hidden cost of EV ownership in a state with some of the highest electricity rates in the country. Solar panels change the equation entirely. By generating your own electricity, you can offset most or all of your EV charging cost and lock in a fixed energy rate for decades. Here&apos;s how it works, what it costs, and what rebates are available.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The EV Charging Cost Problem
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Californian drives 30-40 miles per day. An electric vehicle consumes roughly 3-4 kWh per 10 miles, which means you&apos;re using 9-16 kWh per day just for driving. Over a month, that&apos;s 270-480 kWh — on top of your existing household consumption.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                At current California utility rates (PG&E, SCE, and SDG&E all charge $0.30-$0.45+ per kWh on standard residential plans), that translates to $80-$215 per month in added electricity costs. If you charge during peak TOU hours — which many people do when they get home from work — the cost is even higher. Peak rates on SCE and SDG&E can exceed $0.50/kWh during summer months.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Compare that to the gas cost it replaced: at $4.50/gallon with a 30 MPG car driving 35 miles/day, you&apos;d spend about $160/month on gas. If your EV charging bill is $150-$200/month at peak rates, the &quot;fuel savings&quot; from going electric are minimal. Solar fixes this by making your electricity cost approach zero.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Much Solar Offsets EV Charging
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A Level 2 home charger — the most common type for overnight residential charging — draws 7.6 to 11.5 kW (30-48 amps at 240V). But you don&apos;t need to match the charger&apos;s draw watt-for-watt with solar panels, because you&apos;re not charging and generating at the same time. What matters is total daily production vs. total daily consumption.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To offset the average daily EV charging load of 9-16 kWh, you need approximately 2-4 kW of additional solar capacity beyond what your home already uses. In California, each kilowatt of solar produces roughly 4.5-5.5 kWh per day (depending on location, roof orientation, and shading). So 3 kW of additional panels — about 7-8 standard panels — would generate 13.5-16.5 kWh per day, covering the average EV&apos;s needs.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re adding solar to an existing system, the incremental cost of 2-4 kW is relatively modest. If you&apos;re installing a new system from scratch, you&apos;d size the total system to cover both your home load and your EV load together. Either way, the solar generates during the day and you charge overnight — net metering credits bridge the gap.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                TOU Rates and When to Charge
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Time-of-use (TOU) rates are the key to maximizing savings when you pair solar with EV charging. All three major California utilities — PG&E, SCE, and SDG&E — have TOU plans, and the price difference between peak and off-peak is dramatic.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Peak hours (4-9 PM):</strong> The most expensive time to use electricity. Rates can hit $0.40-$0.50+ per kWh. This is when most people arrive home and plug in their EVs — and it&apos;s the worst time to do it from a cost perspective.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Off-peak hours (typically 12 AM-6 AM):</strong> The cheapest rates, often $0.15-$0.25/kWh. Charging overnight during off-peak hours can save you 40-70% compared to peak charging. Most EVs and Level 2 chargers support scheduled charging — set it to start at midnight and you&apos;re paying the lowest rate automatically.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With solar panels, the math gets even better. Your panels produce during the day (when rates are moderate to high), earning net metering credits. You then &quot;spend&quot; those credits overnight to charge your EV at off-peak rates. The net effect: your solar production at daytime rates offsets your EV charging at nighttime rates, often coming out ahead.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Rebates Available for EV Charging + Solar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Several rebate programs can reduce the cost of adding EV charging infrastructure to your home:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Utility programs:</strong> PG&E, SCE (Charge Ready), and SDG&E offer rebates ranging from $500 to $4,200 for Level 2 charger installation. Eligibility and amounts vary by program and may require enrollment in a specific TOU rate plan. Check your utility&apos;s website for current offerings — these programs have limited budgets and can close when funding runs out.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Federal 30C credit:</strong> The Alternative Fuel Vehicle Refueling Property Credit (Section 30C) provides up to $1,000 for home EV charger installation. Note that some provisions of this credit are expiring mid-2026, so acting sooner rather than later is advisable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Charger installation costs:</strong> A typical Level 2 charger installation runs $1,200-$2,500 including the unit itself, wiring, and any electrical panel upgrades needed. If your panel is already at capacity (common in older California homes), you may need a panel upgrade ($2,000-$4,000 additional) — though solar installation often addresses this as part of the project.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bidirectional Charging: The Future Is Here
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Bidirectional charging — also called vehicle-to-home (V2H) — allows your EV to send electricity back to your house during peak rate periods or power outages. Instead of just consuming energy, your car becomes a mobile battery that can power your home when rates are highest.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Several vehicles already support bidirectional charging, including the Ford F-150 Lightning and select Hyundai, Kia, and GM models. The technology is still maturing — you need a compatible charger and home integration hardware — but the economics are compelling. A vehicle with a 70-100 kWh battery can power an average California home for 2-3 days.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                When combined with solar, bidirectional charging creates a complete energy loop: solar panels generate during the day, your EV stores excess energy, and your car powers your home during evening peak hours when utility rates are highest. It&apos;s not mainstream yet, but it&apos;s available today for early adopters with compatible vehicles.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why EV Owners Are Perfect Solar Candidates
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s the bottom line: if you drive an electric vehicle in California, your electricity bill is higher than a non-EV household. That means the savings from solar are larger. A household spending $200/month on electricity might save $80-$120 with solar. A household spending $350-$450/month because of EV charging might save $150-$250. The bigger your bill, the bigger the payoff.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                EV owners are also typically locked into TOU rate plans (some utilities require it), which means they&apos;re exposed to peak pricing whether they want to be or not. Solar production happens to peak during the middle of the day — generating credits at higher rates that offset your overnight charging at lower rates. The TOU structure actually works in your favor when you have panels on your roof.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                And the trajectory only goes one direction. California utility rates have increased an average of 5-8% per year over the past decade. Your EV charging costs will keep climbing unless you lock in a fixed energy rate through solar. Meanwhile, your panels produce electricity for 25-30 years with minimal maintenance. The math gets better every single year.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Drive on Sunshine — Not Utility Rates
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                EV owners save the most from solar. See if you qualify for a no-cost solar program that can eliminate your charging costs — takes about 30 seconds.
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
                href='/blog/nem-2-vs-nem-3'
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
