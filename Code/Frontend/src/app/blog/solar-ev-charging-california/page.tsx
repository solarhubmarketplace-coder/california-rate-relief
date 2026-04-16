import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar EV Charging in California: The Complete 2026 Guide',
  description:
    'California EV owners pay $500-$1,200/year to charge at home. Solar cuts that to near zero. Learn how much solar you need, when to charge, and how to slash your cost per mile to $0.03-$0.05.',
  alternates: {
    canonical: '/blog/solar-ev-charging-california',
  },
  openGraph: {
    title:
      'Solar EV Charging in California: The Complete 2026 Guide',
    description:
      'Stop paying sky-high electricity rates to charge your EV. Solar cuts your cost per mile from $0.15-$0.20 (gas) to $0.03-$0.05. Here is the complete breakdown.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar EV Charging in California: The Complete 2026 Guide',
  description:
    'California EV owners pay $500-$1,200/year to charge at home. Solar cuts that to near zero. Learn how much solar you need, when to charge, and how to slash your cost per mile.',
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
    '@id': 'https://ratereliefca.com/blog/solar-ev-charging-california',
  },
};

export default function SolarEVChargingCalifornia() {
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
                Solar EV Charging in California: The Complete 2026 Guide
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
                California has the highest EV adoption rate in the country. It also
                has some of the highest electricity rates. If you&apos;re charging an
                electric vehicle at home on a standard utility plan, you&apos;re
                likely spending $500 to $1,200 per year just on charging — and
                that&apos;s before the next rate increase. Solar changes that math
                entirely. Here&apos;s how.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The EV Charging Cost Reality in California
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most California EV owners charge at home, which means the electricity
                comes from your utility at whatever rate plan you&apos;re on. The
                problem: California&apos;s average residential rate is already among
                the highest in the nation, and it keeps climbing. If you&apos;re on a
                flat-rate plan, you&apos;re paying the same elevated per-kWh rate
                whether you charge at noon or midnight.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re on a time-of-use (TOU) plan — which most utilities
                push EV owners toward — your cost depends heavily on when you charge.
                Charge during peak hours (typically 4-9 PM) and you could be paying
                40-70+ cents per kWh. Charge off-peak (typically 12 AM-6 AM) and
                you&apos;re closer to 20-30 cents. But even the off-peak rate in
                California is higher than the average rate in most other states.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The annual cost varies by vehicle and driving habits, but at current
                California rates, most EV owners are spending $500 to $1,200 per year
                on home charging. That&apos;s cheaper than gas — but it&apos;s not
                cheap, and it&apos;s going up every year.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Much Solar You Actually Need to Offset EV Charging
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This depends on your vehicle and how much you drive. Here are the
                rough numbers for additional solar capacity needed just to cover
                your EV charging.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A Tesla Model 3 or similar efficient sedan needs roughly 2 kW of
                additional solar capacity. A Tesla Model Y or mid-size SUV needs
                about 2.5 kW. Larger vehicles — electric trucks, full-size SUVs —
                need 3 to 4 kW. These are estimates for average California driving
                (roughly 12,000-15,000 miles per year) and average California sun
                exposure.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practical terms, that&apos;s 5 to 10 additional solar panels
                depending on the vehicle. If you&apos;re adding solar for the first
                time, you&apos;d size your system to cover both your household usage
                and your EV charging in one installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Gas vs Solar-Charged EV: The Cost Per Mile Comparison
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where the numbers get compelling. A gasoline car in
                California costs roughly $0.15 to $0.20 per mile in fuel (at current
                gas prices and average fuel efficiency). A solar-charged EV costs
                roughly $0.03 to $0.05 per mile — because the &quot;fuel&quot; is
                sunlight hitting panels you&apos;ve already paid for (or are paying
                for through a PPA at a fixed rate well below utility pricing).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Even charging from the grid at off-peak rates, an EV costs about
                $0.06 to $0.10 per mile. Solar drops that further because once the
                system is producing, the marginal cost of an additional kWh is
                essentially zero (for owned systems) or a fixed PPA rate that&apos;s
                typically 30-50% below utility rates.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a household driving 15,000 miles per year, the difference between
                gas ($2,250-$3,000/year) and solar-charged EV ($450-$750/year) is
                $1,500-$2,250 in annual savings on transportation fuel alone. That
                adds up fast.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                TOU Rates: When to Charge and When Not To
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re charging from the grid without solar, timing is
                everything. All three major California utilities — PG&amp;E, SCE, and
                SDG&amp;E — use time-of-use rate structures where the cost per kWh
                swings dramatically throughout the day.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Best time to charge (grid only):</strong> Off-peak hours,
                typically 12 AM to 6 AM. This is when rates are lowest — around 20-30
                cents per kWh depending on your utility and plan. Most EVs let you
                schedule charging to start automatically at midnight.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Worst time to charge:</strong> Peak hours, typically 4 PM to
                9 PM. Rates can hit 40-70+ cents per kWh during peak. Plugging in
                right when you get home from work is the most expensive possible
                choice. Set a timer.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>With solar + battery:</strong> The math changes completely.
                Your panels produce during the day. A battery stores the excess. You
                charge your EV in the evening or overnight using stored solar energy
                — bypassing peak rates entirely. No need to stay up until midnight or
                set complicated charging schedules. The battery handles the
                time-shifting for you.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bidirectional Charging: Your EV as a Home Battery
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is an emerging technology worth knowing about. Bidirectional
                charging — also called Vehicle-to-Home (V2H) or Vehicle-to-Grid
                (V2G) — lets your EV send power back to your house or the grid. In
                effect, your car becomes a giant battery.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Ford F-150 Lightning is the most prominent example, capable of
                delivering up to 9.6 kW back to your home — enough to power an
                average house for 2-3 days. Several Hyundai, Kia, and GM models also
                support bidirectional charging. The technology is still in its early
                stages and requires compatible hardware (a bidirectional charger,
                transfer switch, and sometimes utility approval), but the potential
                is significant.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Imagine this scenario: your solar panels charge your EV during the
                day. In the evening, your EV powers your home during peak utility
                hours. You&apos;ve essentially turned a 100+ kWh EV battery into a
                home energy storage system that&apos;s many times larger than a
                typical residential battery. As bidirectional charging matures, the
                combination of solar + EV could become even more powerful than solar
                + dedicated home battery for some households.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Available Rebates for Solar and EV Charging
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California utilities offer rebates specifically for EV charging
                infrastructure. PG&amp;E and SCE&apos;s Charge Ready programs
                provide $500 to $4,200 in rebates toward the cost of installing a
                Level 2 (240V) home charger. The exact amount depends on your utility,
                your location, and whether you&apos;re in a disadvantaged community.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                These rebates are separate from any solar incentives. If you&apos;re
                installing solar and a home EV charger at the same time, you can
                potentially stack rebates — the EV charger rebate plus whatever solar
                incentives apply to your situation. The solar system itself may
                qualify for federal tax credits if you purchase outright, or the
                savings are built into your PPA rate if you go that route.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Every California EV Owner Should Look at Solar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you already own an EV — or plan to buy one — you&apos;re adding a
                significant new electricity load to your home. In California, that
                load comes at some of the highest rates in the country. Solar
                eliminates or drastically reduces that cost. The more you drive, the
                more solar saves you.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Think of it this way: without solar, every mile you drive costs you
                money in electricity purchased from the utility at ever-increasing
                rates. With solar, every mile you drive costs you almost nothing
                because the fuel is produced on your roof. The EV was supposed to
                save you money over gas — solar is what actually makes that promise
                real in a state where electricity costs 35-45+ cents per kWh.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                And with a PPA, there&apos;s no upfront cost. You get panels on your
                roof, charge your EV with solar power, and pay a fixed rate
                that&apos;s lower than what your utility charges. The savings start
                from month one. No $25,000-$40,000 system purchase. No waiting 9-14
                years for payback. Just a lower, predictable energy cost for your
                home and your car.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Charge Your EV With Sunshine, Not Utility Bills
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                Find out if your home qualifies for solar that covers both your
                household and EV charging. 60-second eligibility check, no cost, no
                obligation.
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
                href='/blog/nem-2-vs-nem-3'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog/california-public-utilities-commission'
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
