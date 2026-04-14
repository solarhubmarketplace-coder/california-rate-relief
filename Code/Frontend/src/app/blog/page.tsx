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
