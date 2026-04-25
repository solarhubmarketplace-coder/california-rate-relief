import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Savings Blog | California Rate Relief Program',
  description:
    'Learn how California homeowners are cutting their electric bills by up to 50%. Expert guides on NEM 3.0, utility rate increases, solar PPAs, and more.',
  alternates: {
    canonical: '/blog',
  },
};

// Blog post data. Add new posts here
const blogPosts = [
  {
    slug: 'sce-rate-increase-2026',
    title: 'SCE Rate Increase 2026: What Southern California Edison Customers Need to Know',
    excerpt:
      'SCE rates are projected to rise 12.9% in 2026. Here\'s what that means for your monthly bill and how the Rate Relief Program can lock in a lower, fixed rate.',
    date: '2026-04-14',
    readTime: '7 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'california-24-dollar-fixed-charge-explained',
    title: 'The New $24 Fixed Charge on Your California Electric Bill, Explained',
    excerpt:
      'PG&E, SCE, and SDG&E are all adding a new monthly fixed charge to your bill. Here\'s what it is, when it starts, and whether solar still saves you money.',
    date: '2026-04-14',
    readTime: '6 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'solar-tax-credit-expired-2026-options',
    title: 'The Solar Tax Credit Expired in 2026. Here Are Your Best Options Now.',
    excerpt:
      'The federal residential solar tax credit ended December 31, 2025. But California homeowners still have strong paths to $0-down solar through PPAs and prepaid leases.',
    date: '2026-04-14',
    readTime: '8 min read',
    category: 'Solar Savings',
  },
  {
    slug: 'nem-3-california-still-worth-it',
    title: 'Is Solar Still Worth It Under NEM 3.0 in California? (2026 Guide)',
    excerpt:
      'NEM 3.0 cut export credits by 75%. Here\'s why solar is still worth it in 2026, and why battery storage changes everything.',
    date: '2026-04-14',
    readTime: '9 min read',
    category: 'Solar Education',
  },
  {
    slug: 'pge-vs-sce-vs-sdge-rates-compared',
    title: 'PG&E vs. SCE vs. SDG&E: Which California Utility Customers Pay the Most in 2026?',
    excerpt:
      'A side-by-side comparison of California\'s three major utility rates, the new fixed charges, and how much each utility\'s customers can save with solar.',
    date: '2026-04-14',
    readTime: '10 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'prepaid-ppa-california-2026',
    title: 'Prepaid Solar PPA in California: How It Works, What It Costs, and Who It\'s Best For (2026)',
    excerpt:
      'Prepaid PPAs are surging after the residential tax credit expired. Learn how they work, what they cost vs. buying or leasing, and whether this option fits your situation.',
    date: '2026-04-14',
    readTime: '9 min read',
    category: 'Solar Savings',
  },
  {
    slug: 'ppa-loan-vs-solar-lease-vs-cash-california',
    title: 'PPA Loan vs Solar Lease vs Cash: 2026 California Comparison',
    excerpt:
      "California's four ways to pay for solar compared, cash, loan, lease, PPA, with the actual math for a typical $250/mo household.",
    date: '2026-04-23',
    readTime: '13 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'net-billing-vs-net-metering-california',
    title: 'Net Billing vs Net Metering: The California Solar Difference, Explained',
    excerpt:
      "Net metering and net billing sound similar but pay you very differently. Here's what California's NEM 3.0 Net Billing tariff changed.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'nem-3-california-timeline',
    title: 'NEM 3.0 California Timeline: Key Dates, Deadlines, and What Happens Next',
    excerpt:
      'A complete timeline of NEM 3.0 — the CPUC vote, the April 2023 go-live, grandfathering windows, AB 942, and what is ahead in 2026 and beyond.',
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'hoa-solar-rights-california',
    title: 'Can an HOA Ban Solar Panels in California? Your Solar Rights, Explained',
    excerpt:
      "California's Solar Rights Act prevents HOAs from unreasonably blocking rooftop solar. Here's what the law says and how to handle pushback.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'California Solar Rights',
  },
  {
    slug: 'low-income-solar-california',
    title: 'Low-Income Solar in California: DAC-SASH, SASH, CARE, and FERA Programs',
    excerpt:
      "California has multiple programs that make solar dramatically more affordable for low-income households. Here's who qualifies and how each works.",
    date: '2026-04-23',
    readTime: '9 min read',
    category: 'California Solar Incentives',
  },
  {
    slug: 'free-roof-replacement-with-solar-panels-california',
    title: 'Free Roof Replacement With Solar Panels in California: Is It Real?',
    excerpt:
      "Some California solar programs include a roof replacement at no added cost. Here's how roof-included PPAs and solar financing actually work, what qualifies, and where the catches are.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'California Solar Financing',
  },
  {
    slug: 'nem-2-vs-nem-3-california',
    title: 'NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You',
    excerpt:
      "NEM 2.0 and NEM 3.0 are not the same. California's 2023 tariff change cut export credits by ~75%. Here is the side-by-side comparison.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'rent-solar-panels-for-your-home-california',
    title: 'Rent Solar Panels For Your Home: California 2026 Guide',
    excerpt:
      "Renting solar panels in California, how solar leases and PPAs actually work, typical monthly costs, who qualifies, and when renting beats owning.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'are-solar-panels-worth-it-california',
    title: 'Are Solar Panels Worth It in California? 2026 Honest Answer',
    excerpt:
      "For most California homeowners paying $200+ per month, solar is still worth it in 2026. but only with a battery and only if the math fits your situation.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'Solar Decision',
  },
  {
    slug: 'switch-to-solar-california',
    title: 'Switch to Solar in California: The 2026 Complete Guide',
    excerpt:
      "Everything California homeowners need to know about switching to solar in 2026 — the NEM 3.0 rules, financing options, what it costs, the 5-step process.",
    date: '2026-04-23',
    readTime: '10 min read',
    category: 'Getting Started',
  },
  {
    slug: 'solar-system-quotes-california',
    title: 'Solar System Quotes in California: How to Get 3 Real Quotes Fast',
    excerpt:
      "How to get legitimate California solar quotes without sales spam. What a real solar quote should include and what red flags to watch for.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Getting Quotes',
  },
  {
    slug: 'tesla-powerwall-installers-california',
    title: 'Tesla Powerwall Installers in California: 2026 Guide',
    excerpt:
      "Find certified Tesla Powerwall installers in California; how Tesla's certified installer network works, what Powerwall 3 costs installed, and which California installers are certified.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Battery Storage',
  },
  {
    slug: 'solar-panels-for-ev-charging-california',
    title: 'Solar Panels for EV Charging in California: Size, Cost, and ROI',
    excerpt:
      "Sizing solar for an electric vehicle in California — how much extra capacity you need, what it adds to your system cost, and why EV + solar pays back faster than solar alone.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar + EV',
  },
  {
    slug: 'what-is-nem-3-california',
    title: 'What Is NEM 3.0 in California? Plain-English Explainer',
    excerpt:
      "NEM 3.0 (the Net Billing Tariff) replaced California net metering in April 2023. Here is what it actually is, how it works, and what it means.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'free-solar-for-seniors-california',
    title: 'Free Solar For Seniors in California: The Real Programs',
    excerpt:
      "California seniors on fixed income have several legitimate pathways to low-cost or no-cost solar. DAC-SASH, SASH, CARE, FERA, and PPAs. Here's what actually exists.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'California Solar Programs',
  },
  {
    slug: 'do-solar-panels-work-at-night-california',
    title: 'Do Solar Panels Work at Night? California Guide',
    excerpt:
      "Solar panels don't produce electricity at night. But a battery or the grid keeps your home running. Here is how it works in California.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Solar Basics',
  },
  {
    slug: 'do-solar-panels-work-on-cloudy-days-california',
    title: 'Do Solar Panels Work on Cloudy Days? California Guide',
    excerpt:
      "Yes — solar panels work on cloudy days at 10-80% of peak output depending on cloud density. Here is what that means for California homes.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar Basics',
  },
  {
    slug: 'why-is-my-california-electric-bill-so-high',
    title: 'Why Is My California Electric Bill So High? PGE, SCE, SDGE Explained',
    excerpt:
      "California rates are among the highest in the country. Here is why PG&E, SCE, SDG&E, and LADWP bills keep climbing, and how to lower yours.",
    date: '2026-04-23',
    readTime: '9 min read',
    category: 'Utility Bills',
  },
  {
    slug: 'how-big-of-a-solar-system-do-i-need-california',
    title: 'How Big of a Solar System Do I Need in California? 2026 Sizing Guide',
    excerpt:
      "How to size a California solar system by monthly bill, kWh usage, and future loads (EV, AC, pool). Why NEM 3.0 changes optimal sizing.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'System Sizing',
  },
  {
    slug: 'can-solar-panels-power-a-whole-house-california',
    title: 'Can Solar Panels Power a Whole House in California?',
    excerpt:
      "Yes — a correctly sized solar + battery system runs a typical California home through the full day, evening, and most outages. Here is what it takes.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Solar Capacity',
  },
  {
    slug: 'do-solar-panels-work-during-power-outage-california',
    title: 'Do Solar Panels Work During a Power Outage in California?',
    excerpt:
      "Grid-tied solar without a battery shuts off during an outage. for safety. Only solar + battery keeps your home powered. Here is how it works and what PSPS means.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar + Outages',
  },
  {
    slug: 'is-my-roof-good-for-solar-california',
    title: 'Is My Roof Good for Solar? California Checklist 2026',
    excerpt:
      "How to tell if your California roof is suitable for solar. orientation, age, shading, roof material, structural strength.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'Roof Suitability',
  },
  {
    slug: 'what-happens-to-solar-panels-after-25-years',
    title: 'What Happens to Solar Panels After 25 Years? California Guide',
    excerpt:
      "Solar panels don't stop working at 25 years — they degrade gradually to ~80-87% of original output. Here is what California homeowners do when warranties expire.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Solar Longevity',
  },
];

export default function BlogPage() {
  return (
    <PublicLayout>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>
                California Energy Savings Blog
              </h1>
              <p className='text-lg text-muted-foreground max-w-2xl'>
                Expert guides on lowering your electric bill, understanding
                utility rate changes, and making the most of solar energy in
                California.
              </p>
            </div>

            {/* Blog Posts */}
            <div className='space-y-8'>
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className='bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group'
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                      {post.category}
                    </span>
                    <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Calendar className='h-3 w-3' />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Clock className='h-3 w-3' />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} className='block'>
                    <h2 className='text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight'>
                      {post.title}
                    </h2>
                  </Link>

                  <p className='text-foreground/70 leading-relaxed mb-4'>
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all'
                  >
                    Read Article
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className='mt-16 bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Cut Your Electric Bill?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Check if you qualify for the California Rate Relief Program in 60
                seconds. No obligation, no cost.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
