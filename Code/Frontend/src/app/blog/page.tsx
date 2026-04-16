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

// Blog post data — add new posts here
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
      'NEM 3.0 cut export credits by 75%. Here\'s why solar is still worth it in 2026 — and why battery storage changes everything.',
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
    slug: 'how-long-do-solar-panels-last',
    title: 'How Long Do Solar Panels Last? (2026 Lifespan & Degradation Data)',
    excerpt:
      'Modern solar panels are rated for 25-30 years but real-world data shows 30-40+ years of production. Here\'s what the latest NREL degradation data, warranty terms, and California climate research actually say.',
    date: '2026-04-16',
    readTime: '10 min read',
    category: 'Solar Education',
  },
  {
    slug: 'solar-panel-inspection-california',
    title: 'Solar Panel Inspection: What California Homeowners Need to Know (2026)',
    excerpt:
      'Should you get your solar panels inspected? What does it cost? Here\'s what\'s included, when you need one, and California-specific requirements for fire zones and Title 24.',
    date: '2026-04-16',
    readTime: '6 min read',
    category: 'Maintenance & Care',
  },
  {
    slug: 'solar-panel-removal-reinstall-cost',
    title: 'Solar Panel Removal and Reinstall Cost in California (2026 Guide)',
    excerpt:
      'Need your solar panels removed for a roof replacement? Here\'s what R&R costs in California, how long it takes, and what PPA/lease owners need to know.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Installation Guide',
  },
  {
    slug: 'solar-panel-maintenance-cost',
    title: 'Solar Panel Maintenance Cost: What to Expect in 2026',
    excerpt:
      'From cleaning to inverter replacement, here\'s the real cost of maintaining solar panels in California — and why PPA owners don\'t have to worry about most of it.',
    date: '2026-04-16',
    readTime: '6 min read',
    category: 'Maintenance & Care',
  },
  {
    slug: 'solar-panel-bird-proofing',
    title: 'Solar Panel Bird Proofing: Costs, Methods, and California Guide (2026)',
    excerpt:
      'Pigeons nesting under your solar panels? Here\'s what bird proofing costs, the best methods, and why it matters for fire safety in California.',
    date: '2026-04-16',
    readTime: '5 min read',
    category: 'Maintenance & Care',
  },
  {
    slug: 'commercial-solar-financing-california',
    title: 'Commercial Solar Financing Options in California (2026 Guide)',
    excerpt:
      'The commercial solar ITC is still at 30-40% in 2026, plus MACRS depreciation, C-PACE, and PPAs. Here\'s how California businesses can finance solar with maximum tax benefit.',
    date: '2026-04-16',
    readTime: '8 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'what-size-solar-system-do-i-need',
    title: 'What Size Solar System Do I Need? California Sizing Guide (2026)',
    excerpt:
      'Use the simple formula to calculate your ideal system size based on your electricity usage, roof space, and California sun hours. Plus how NEM 3.0 changes the math.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Solar Education',
  },
  {
    slug: 'how-to-lower-electric-bill-california',
    title: 'How to Lower Your Electric Bill in California (2026 Guide)',
    excerpt:
      'From CARE/FERA discounts to TOU plan optimization to solar, here are the most effective ways California homeowners can cut their electricity costs in 2026.',
    date: '2026-04-16',
    readTime: '8 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'is-solar-worth-it-california-2026',
    title: 'Is Solar Worth It in California in 2026? (Honest Analysis)',
    excerpt:
      'With no residential tax credit and NEM 3.0 in effect, is solar still worth it? We break down the real math for PPA, cash, and loan options with 25-year projections.',
    date: '2026-04-16',
    readTime: '9 min read',
    category: 'Solar Savings',
  },
  {
    slug: 'solar-ppa-vs-lease-california',
    title: 'Solar PPA vs Lease: Which Is Better for California Homeowners? (2026)',
    excerpt:
      'Both offer $0-down solar, but PPAs and leases work differently. Here\'s a side-by-side comparison to help you choose the right option.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'free-solar-panels-california',
    title: 'Free Solar Panels in California: What\'s Real and What\'s a Scam (2026)',
    excerpt:
      '"Free solar" is real — but it\'s not what most people think. Here\'s how $0-down programs actually work, common scams to avoid, and how to protect yourself.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Solar Savings',
  },
  {
    slug: 'are-solar-panels-a-scam',
    title: 'Are Solar Panels a Scam? What California Homeowners Should Know (2026)',
    excerpt:
      'Solar panels aren\'t a scam — but some companies are. Here\'s how to spot bad actors, verify any installer, and protect yourself with California\'s consumer protection laws.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Trust & Transparency',
  },
  {
    slug: 'why-is-my-pge-bill-so-high',
    title: 'Why Is My PG&E Bill So High? (2026 Breakdown)',
    excerpt:
      'PG&E rates are 70% higher than 2020. Here\'s what\'s driving your bill — the $24 fixed charge, hidden surcharges, TOU peak rates — and what you can actually do about it.',
    date: '2026-04-16',
    readTime: '8 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'sdge-time-of-use-rates-2026',
    title: 'SDG&E Time of Use Rates Explained (2026 Guide)',
    excerpt:
      'SDG&E has the highest rates in the continental U.S. Here\'s the full TOU-DR1, DR2, and EV-TOU-5 rate schedule, seasonal changes, and how solar customers can optimize.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'solar-ppa-explained-california',
    title: 'Solar PPA Explained: How California\'s $0-Down Solar Works (2026)',
    excerpt:
      'A Power Purchase Agreement puts solar on your roof at no upfront cost. Here\'s exactly how it works, what you\'ll pay, and why PPAs dominate California solar in 2026.',
    date: '2026-04-16',
    readTime: '8 min read',
    category: 'Solar Financing',
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
