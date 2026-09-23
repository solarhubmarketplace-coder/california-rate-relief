import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Savings Blog | California Rate Relief',
  description:
    'Understand California utility bills, time-of-use plans and solar options. Sourced guides for PG&E, SCE and SDG&E customers.',
  alternates: {
    canonical: '/blog',
  },
};

// Blog post data. Add new posts here.
//
// This array is the /blog index and the only listing of the section: a post that
// is not in it is linked from nowhere unless another post happens to mention it.
// scripts/assert-city-links.mjs fails when a published post has no inbound
// internal link at all, which is how the fourteen added on 2026-09-18 were found.
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** The post's own last-modified date. Never a date this file invents. */
  date: string;
  /** Only where the post itself publishes a reading time. */
  readTime?: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  // claude/ca-green-20260918
  {
    slug: 'can-you-cancel-solar-panel-contract-before-installation-california',
    title: 'Can You Cancel a Solar Contract Before Installation in California?',
    excerpt:
      'California gives at least three business days to cancel a home-solicited solar contract, five if you are 65 or older. What the statutes say and how to do it.',
    date: '2026-09-17',
    readTime: '12 min read',
    category: 'California Solar Rights',
  },
  {
    slug: 'do-solar-panels-increase-property-taxes-california',
    title: 'Do Solar Panels Increase Property Taxes in California?',
    excerpt:
      'California law excludes a qualifying active solar energy system from new-construction reassessment. What that covers, what it does not, and when it ends.',
    date: '2026-09-17',
    readTime: '10 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'does-solar-increase-home-value-california',
    title: 'Does Solar Increase Home Value in California?',
    excerpt:
      'California excludes an active solar system from new-construction reassessment until the home sells. Here is what the statute and the sale research actually say.',
    date: '2026-09-17',
    readTime: '9 min read',
    category: 'Solar Decision',
  },
  {
    slug: 'sce-time-of-use-rates-2026',
    title: 'SCE Time-of-Use Rates: Peak Hours and Plan Choice',
    excerpt: 'Compare 4–9 PM, 5–8 PM and PRIME, then check the full bill and generation provider before choosing a plan.',
    date: '2026-09-10', readTime: '6 min read', category: 'Utility Rates',
  },
  {
    slug: 'pge-time-of-use-rates-2026',
    title: 'PG&E Time-of-Use Rates: 2026 Plan Guide',
    excerpt: 'Compare E-TOU-C and E-TOU-D peak hours, baseline credits and usage patterns before choosing a rate plan.',
    date: '2026-09-09',
    readTime: '8 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'sce-rate-increase-2026',
    title: 'SCE Rate Increase 2026: What Southern California Edison Customers Need to Know',
    excerpt:
      'Check the effective date and rate plan on your SCE bill. Separate changes in electricity use from changes in price.',
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
    title: 'Solar Tax Credit Ended: California Options in 2026',
    excerpt:
      'Check the expenditure deadline, separate public assistance from payment contracts, and compare a proposal without an unavailable homeowner credit.',
    date: '2026-09-10',
    readTime: '8 min read',
    category: 'Solar Savings',
  },
  {
    slug: 'nem-3-california-still-worth-it',
    title: 'Is Solar Still Worth It Under NEM 3.0 in California? (2026 Guide)',
    excerpt:
      'NEM 3.0 credits exports at values usually below the retail rate. When solar can still work in 2026, and what a battery changes.',
    date: '2026-04-14',
    readTime: '9 min read',
    category: 'Solar Education',
  },
  {
    slug: 'pge-vs-sce-vs-sdge-rates-compared',
    title: 'PG&E vs. SCE vs. SDG&E: Which California Utility Customers Pay the Most in 2026?',
    excerpt:
      'Compare June 2026 residential average rates, sample bills, time-of-use plans and the steps to check your own electricity costs.',
    date: '2026-09-09',
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
    title: 'Low-Income Solar in California: Find the Right Application Path',
    excerpt:
      'Separate utility-bill discounts from solar applications. Check current DAC-SASH eligibility, property requirements and funding with the administrator.',
    date: '2026-09-10',
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
      "NEM 2.0 and NEM 3.0 are not the same. California's 2023 tariff change moved export credits to hourly avoided-cost values. Here is the side-by-side comparison.",
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
      "Who can install a Tesla Powerwall in California, how Tesla's certified installer program works, and what drives the installed price.",
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
    title: 'Free Solar for Seniors in California: Check the Actual Program',
    excerpt:
      'Age alone does not establish eligibility. Check DAC-SASH, bill-discount programs and the terms of private solar offers; the older SASH program is closed.',
    date: '2026-09-10',
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
  // claude/ca-financing-20260918 — Tier A financing-decision cluster
  {
    slug: 'is-it-better-to-buy-or-lease-solar-panels-california',
    title: 'Is It Better to Buy or Lease Solar Panels in California?',
    excerpt:
      'The federal residential credit no longer applies to expenditures made after 31 December 2025, and the statute dates the expenditure to completion of installation. What that changes about the comparison, and what it leaves alone.',
    date: '2026-09-18',
    readTime: '11 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'how-much-does-it-cost-to-lease-solar-panels-california',
    title: 'How Much Does It Cost to Lease Solar Panels in California?',
    excerpt:
      'No two lease quotes are built the same way. What determines the payment, which contract terms move it, and the disclosure document California requires to carry the total.',
    date: '2026-09-18',
    readTime: '10 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'zero-down-solar-california',
    title: 'What Does $0 Down Solar Mean in California?',
    excerpt:
      'A no-down-payment offer is a statement about the first payment, not the total. Where the cost actually sits in a loan, a lease and a PPA, and what California already caps.',
    date: '2026-09-18',
    readTime: '8 min read',
    category: 'Solar Financing',
  },
  // claude/audit-links-20260918 — fourteen posts that were published and then
  // linked from nowhere. The 2026-09-18 link audit found them with zero inbound
  // internal links anywhere on the site: they were in the sitemap, and that was
  // the whole of their discovery path, because this array is hand-maintained and
  // nobody added them to it. The excerpts below are written for this index and
  // deliberately carry no figure: every number on these subjects lives on the
  // post, beside its source. The date on each is that post's own last-modified
  // date, read from the post. readTime is only set where the post itself
  // publishes one, which is why it is optional in BlogPost above.
  {
    slug: 'solar-carport-california-guide',
    title: 'Solar Carports in California: Cost, Scope, and Quotes',
    excerpt:
      'What a carport project includes beyond the panels \u2014 the structure, the foundations, the trenching \u2014 and the scope questions a quote has to answer before two quotes can be compared.',
    date: '2026-09-18',
    category: 'Getting Quotes',
  },
  {
    slug: 'best-time-to-install-solar-panels-california',
    title: 'Best Time to Install Solar Panels in California',
    excerpt:
      'There is no single best month. The right time is when the roof, the electricity use, the bids, the permit and the utility application are all ready.',
    date: '2026-09-12',
    category: 'Solar Decision',
  },
  {
    slug: 'commercial-solar-financing-california',
    title: 'Commercial Solar Financing in California',
    excerpt:
      'Purchase, loan, PPA, PACE and SBA paperwork compared for the same commercial project, so ownership and payment terms are chosen on documents rather than on a monthly figure.',
    date: '2026-09-11',
    category: 'Solar Financing',
  },
  {
    slug: 'commercial-solar-installation-cost-california',
    title: 'Commercial Solar Installation Cost in California',
    excerpt:
      'What a commercial price actually depends on, and the scope items a bid has to name before two bids are describing the same project.',
    date: '2026-09-11',
    category: 'Getting Quotes',
  },
  {
    slug: 'solar-tax-credit-2026',
    title: 'Solar Tax Credit in 2026: Completion Dates and Records',
    excerpt:
      'A payment receipt is not the whole record. The installation timeline and the correct tax year decide what can be claimed, and a deposit settles neither.',
    date: '2026-09-10',
    category: 'California Solar Incentives',
  },
  {
    slug: 'ab-942-california-solar',
    title: 'AB 942: California Solar Lease Transfer Rights',
    excerpt:
      'What the law changed for a homeowner selling a house with a leased or financed solar system, and what has to be disclosed to the buyer.',
    date: '2026-04-24',
    category: 'California Solar Rights',
  },
  {
    slug: 'adu-solar-requirements-california',
    title: 'ADU Solar Requirements in California',
    excerpt:
      'When an accessory dwelling unit triggers the Energy Code solar requirement, when it does not, and how the unit ends up metered.',
    date: '2026-04-24',
    category: 'California Solar Policy',
  },
  {
    slug: 'what-is-demand-charge-california',
    title: 'What Is a Demand Charge, and Do California Homes Pay One?',
    excerpt:
      'What a demand charge bills you for rather than how much you used, which California customers pay one, and why a battery acts on it differently from solar.',
    date: '2026-04-24',
    category: 'Utility Rates',
  },
  {
    slug: 'tech-clean-california-heat-pump-rebate',
    title: 'TECH Clean California: Heat Pump Rebate Program',
    excerpt:
      'What the program covers, who administers it, and where a heat pump rebate sits alongside an electrification plan.',
    date: '2026-04-24',
    category: 'California Solar Programs',
  },
  {
    slug: 'solar-panel-cleaning-california',
    title: 'Solar Panel Cleaning in California: When It Actually Helps',
    excerpt:
      'When cleaning changes production and when it does not, what a pressure washer does to a panel warranty, and what to ask a cleaning service.',
    date: '2026-04-24',
    category: 'Solar Longevity',
  },
  {
    slug: 'solar-pool-heating-california',
    title: 'Solar Pool Heating in California: How It Compares',
    excerpt:
      'Solar pool heating is not photovoltaic solar. What it does to the swim season, what it cannot do, and how to compare it against a gas heater.',
    date: '2026-04-24',
    category: 'Solar Basics',
  },
  {
    slug: 'how-long-do-solar-panels-last',
    title: 'How Long Do Solar Panels Last?',
    excerpt:
      'What a degradation rate means in practice, what the manufacturer warranties actually cover, and how long the inverter is expected to last beside them.',
    date: '2026-04-16',
    readTime: '10 min read',
    category: 'Solar Longevity',
  },
  {
    slug: 'california-public-utilities-commission',
    title: 'What Is the CPUC, and How Does It Affect Your Bill?',
    excerpt:
      'What the commission decides, which utilities it regulates, and where to read the decisions that move a residential rate.',
    date: '2026-04-16',
    readTime: '9 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'solar-panel-maintenance-cost',
    title: 'Solar Panel Maintenance Cost: What to Expect',
    excerpt:
      'What maintenance a rooftop system actually needs, which parts of it a warranty covers, and where the recurring costs land over the life of the system.',
    date: '2026-04-16',
    readTime: '6 min read',
    category: 'Solar Longevity',
  },
  {
    slug: 'solar-panel-bird-proofing',
    title: 'Solar Panel Bird Proofing: Methods and Costs',
    excerpt:
      'Why pigeons nest under panels, what critter guards and mesh do about it, and what to check before paying for the work.',
    date: '2026-04-16',
    readTime: '5 min read',
    category: 'Solar Longevity',
  },
  {
    slug: 'are-solar-panels-a-scam',
    title: 'Are Solar Panels a Scam? What California Buyers Should Know',
    excerpt:
      'Where the complaints actually come from \u2014 the sales call, the contract and the fees \u2014 and how to tell those apart from the equipment.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Solar Decision',
  },
];

/**
 * /blog is an index, not an article.
 *
 * The only prose unique to this route is the h1, the standfirst and the post
 * excerpts; the writing itself lives on the posts it links to, each of which
 * already emits its own Article node. Typing the index as an Article would
 * assert that this page IS that piece of writing — it is not — and would put a
 * second Article in play for the same subject. CollectionPage with an ItemList
 * says what the page actually does: it indexes these posts, and names them.
 *
 * Every name, URL and count below is read from the blogPosts array rendered on
 * the page, so the schema cannot drift from what a reader sees. The list items
 * are plain ListItems rather than nested BlogPosting nodes on purpose: each
 * post's own page is the right place to describe the post.
 */
function buildBlogIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'California Energy Savings Blog',
    description:
      'Expert guides on lowering your electric bill, understanding utility rate changes, and making the most of solar energy in California.',
    url: 'https://ratereliefca.com/blog',
    isPartOf: {
      '@type': 'WebSite',
      name: 'California Rate Relief',
      url: 'https://ratereliefca.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: blogPosts.length,
      itemListElement: blogPosts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://ratereliefca.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}

export default function BlogPage() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBlogIndexSchema()),
        }}
      />
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
                    {post.readTime ? (
                      <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                        <Clock className='h-3 w-3' />
                        <span>{post.readTime}</span>
                      </div>
                    ) : null}
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
                Want a Provider to Review Your Project?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                If you want a solar provider to review your project, send your
                details through the form. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Request a solar review
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
