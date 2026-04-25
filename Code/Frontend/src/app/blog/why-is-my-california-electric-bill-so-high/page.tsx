import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'Why Is My California Electric Bill So High? PGE, SCE, SDGE Explained',
  description: "California has some of the highest electric rates in the country. Here is why PGE, SCE, SDGE, and LADWP bills keep climbing — fixed charges, TOU peak rates, wildfire costs, grid upgrades — and how to lower yours.",
  alternates: { canonical: '/blog/why-is-my-california-electric-bill-so-high' },
  openGraph: { title: 'Why Is My California Electric Bill So High? PGE, SCE, SDGE Explained', description: 'Why California utility bills keep rising and what you can do about it.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Why Is My California Electric Bill So High? PGE, SCE, SDGE Explained',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/why-is-my-california-electric-bill-so-high' },
};

export default function WhyIsMyBillSoHigh() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Utility Bills</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Why Is My California Electric Bill So High? PGE, SCE, SDGE Explained</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re in California and your electric bill feels crazy high — you&apos;re not imagining it. California has some of the highest residential electric rates in the country, and they&apos;ve been climbing faster than inflation for years. The average PG&amp;E customer pays over 41 cents per kWh, SCE customers pay around 34 cents, and SDG&amp;E customers pay close to 46 cents — compared to a national average closer to 17 cents. Here&apos;s why the bills are so high, what&apos;s driving the increases, and what California homeowners can actually do to lower them.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Core Reasons California Rates Are So High</h2>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>1. Wildfire costs</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s investor-owned utilities (PG&amp;E, SCE, SDG&amp;E) were found liable for major wildfires in 2017-2019, including the catastrophic Camp Fire. PG&amp;E filed for bankruptcy in 2019 under the weight of wildfire settlements. The utilities are now legally required to spend billions on wildfire mitigation — tree trimming, undergrounding power lines, upgrading equipment, Public Safety Power Shutoffs (PSPS) — and those costs get passed through to ratepayers.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>2. Grid infrastructure upgrades</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s electric grid was mostly built 40-70 years ago. It wasn&apos;t designed for today&apos;s electrified economy — EV charging at scale, heat pumps replacing gas furnaces, growing data-center and cannabis-industry load, rooftop solar interconnections. Modernizing the grid to handle it all is extraordinarily expensive and gets recovered through rates.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>3. Clean-energy mandates</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California has some of the most aggressive renewable energy and climate mandates in the country. Meeting them requires buying more renewables at contracted long-term prices, building out storage, and maintaining backup capacity. These aren&apos;t bad policies, but they do cost money that shows up on your bill.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>4. The new $24/month fixed charge</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In 2024-2025, California utilities began rolling out a new income-graduated fixed charge — approximately $24/month for middle-income households. It&apos;s a flat fee that you pay regardless of how much electricity you use. The goal was to restructure rates so low-usage customers (including solar owners) contributed more to grid fixed costs. For the median household, it adds $288/year to the bill whether you use 1 kWh or 1,000 kWh. See our{' '}<Link href='/blog/california-24-dollar-fixed-charge-explained' className='text-primary hover:underline'>$24 fixed charge explainer</Link>.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>5. Time-of-Use (TOU) peak rates</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California utilities moved almost all residential customers to Time-of-Use rates, meaning the price of electricity varies by hour. Peak hours (typically 4 PM-9 PM) cost dramatically more than off-peak — SCE peak rates reach 58-74 cents per kWh during summer, for example. If your family uses most of its electricity in the evening (cooking, TV, AC, laundry), you&apos;re consuming during the most expensive hours.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Utility-Specific Factors</h2>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>Why your PG&amp;E bill is so high</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                PG&amp;E has been raising rates consistently since emerging from bankruptcy. The wildfire-mitigation surcharge is large. If you live in a high-fire-risk area (Tier 2 or Tier 3 HFTD zones), more wildfire-related costs flow through to your rate. PG&amp;E&apos;s 2026 general rate case added additional increases on top of annual adjustments. Our{' '}<Link href='/blog/pge-vs-sce-vs-sdge-rates-compared' className='text-primary hover:underline'>PG&amp;E vs SCE vs SDG&amp;E rate comparison</Link>{' '}has the full breakdown.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>Why your SCE bill is so high</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE serves most of Southern California. Their TOU-D and TOU-D-Prime schedules have extremely high summer peak rates. The 2026 rate case added approximately 12.9% on top of already elevated 2025 rates. Summer AC consumption hits you during peak hours, compounding the pain. See our{' '}<Link href='/blog/sce-rate-increase-2026' className='text-primary hover:underline'>SCE rate increase 2026 guide</Link>.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>Why your SDG&amp;E bill is so high</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SDG&amp;E has the highest residential rates in California — and among the highest in the continental US. San Diego&apos;s reliance on imported power, grid constraints, and wildfire mitigation all combine to push rates above both PG&amp;E and SCE on a per-kWh basis.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>Why your LADWP bill might also be rising</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                LADWP, a municipal utility, has historically been cheaper than the IOUs — but it&apos;s rolling out its own rate increases to fund grid modernization and clean-energy targets. The gap between LADWP and PG&amp;E/SCE/SDG&amp;E has narrowed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What You Can Actually Do</h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Solar + battery.</strong> Under NEM 3.0, a correctly sized solar + battery system offsets 70-90% of typical California household consumption. It doesn&apos;t eliminate the bill (the fixed charge and any grid purchases not covered by solar still apply), but most homeowners see their monthly bill drop from $250-$350 to $30-$80. See if you{' '}<Link href='/blog/are-solar-panels-worth-it-california' className='text-primary hover:underline'>qualify for solar</Link>.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Switch to the right TOU plan.</strong> Different utility tariffs fit different usage patterns. An all-electric home with EV charging might do better on an EV-specific TOU plan with extremely low overnight rates. Call your utility and ask about rate plan analysis.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Shift consumption off-peak.</strong> Run dishwashers, laundry, pool pumps, and EV charging during off-peak hours (typically overnight or midday depending on TOU plan). The difference between peak and off-peak can be 4-6x per kWh.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>4. CARE / FERA assistance.</strong> If your household income qualifies, the CARE program gives you a 30-35% discount on your utility bill. FERA gives ~12% for slightly higher incomes. Apply through your utility&apos;s website — takes about 10 minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>5. Basic efficiency.</strong> LED lighting, smart thermostats, insulation upgrades, heat pump water heaters. Not as transformative as solar, but meaningful reductions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Why are California electric rates so high compared to other states?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Wildfire costs, grid infrastructure upgrades, clean-energy mandates, TOU peak pricing, and the new fixed charge all contribute. The national average residential rate is roughly 17 cents/kWh; California IOU averages are 34-46 cents/kWh.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Why did my PGE bill suddenly spike?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Typical causes: the new $24 fixed charge rolled out, summer AC usage hit during peak TOU hours, or a scheduled rate increase took effect. Check your bill for the line items — the &quot;energy charges&quot; section shows how much you consumed and at what rate tier.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>When will California electric rates go down?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Honestly, probably not anytime soon. Wildfire mitigation and grid-modernization costs are recurring for the foreseeable future. The CPUC projects 6-12% annual rate increases through 2028 as a baseline.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can solar actually eliminate my California electric bill?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Almost — not quite. Even with a well-sized solar + battery system, you&apos;ll still pay the $24 fixed charge plus any grid purchases during extreme weeks. Typical California household goes from $250-$350/month to $30-$80/month after solar. That&apos;s meaningful savings; not zero.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Want to Cut Your California Electric Bill by 50-70%?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>The California Rate Relief Program offers a $0-down PPA with a fixed monthly rate below your current utility bill. Free 60-second eligibility check, no impact on your credit score.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
