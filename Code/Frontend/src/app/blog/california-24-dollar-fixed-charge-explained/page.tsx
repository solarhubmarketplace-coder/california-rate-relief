import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'The New $24 Fixed Charge on Your California Electric Bill, Explained',
  description:
    'PG&E, SCE, and SDG&E added a ~$24/month fixed charge to every residential bill. Learn exactly what it is, why it exists, who pays less, and how it affects solar savings.',
  alternates: {
    canonical: '/blog/california-24-dollar-fixed-charge-explained',
  },
  openGraph: {
    title:
      'The New $24 Fixed Charge on Your California Electric Bill, Explained',
    description:
      'Everything you need to know about California\'s new monthly fixed charge — what it is, who pays it, and how it changes the math on solar.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'The New $24 Fixed Charge on Your California Electric Bill, Explained',
  description:
    'PG&E, SCE, and SDG&E added a ~$24/month fixed charge to every residential bill. Learn what it is, who pays less, and how it affects solar.',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
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
    '@id':
      'https://ratereliefca.com/blog/california-24-dollar-fixed-charge-explained',
  },
};

export default function FixedChargeExplained() {
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
                Utility Rates
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                The New $24 Fixed Charge on Your California Electric Bill,
                Explained
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-14'>April 14, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>6 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                If you&apos;ve noticed a new line item on your California
                electric bill that wasn&apos;t there before, this is probably it.
                Starting in late 2025 and rolling into early 2026, PG&E, SCE, and
                SDG&E all added a monthly fixed charge of approximately $24 to
                every residential electric bill. Here&apos;s what it actually is,
                why it exists, whether you can reduce it, and how it affects the
                math on solar.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is It?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The fixed charge is a flat monthly fee that appears on your bill
                regardless of how much electricity you use. Use 50 kWh or 1,500
                kWh — you pay the same $24. It&apos;s separate from your per-kWh
                usage charges.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The charge was authorized by the California legislature through AB
                205, signed into law in 2022, and implemented by the California
                Public Utilities Commission (CPUC) starting in late 2025. You can
                read the full CPUC decision on the{' '}
                <a
                  href='https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/rate-reform'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  CPUC Rate Reform page
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Does It Exist?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The stated purpose is to make electricity pricing more
                &quot;equitable.&quot; The idea: by shifting some grid maintenance
                costs from per-kWh charges to a flat fee, the per-kWh rate drops
                slightly for everyone. In theory, this helps low-usage households
                pay less overall.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, the per-kWh reduction has been modest — roughly 2 to
                5 cents per kWh depending on the utility and rate plan. For
                households that use a moderate amount of electricity (600+ kWh per
                month, which is most households with air conditioning), the net
                effect is a higher total bill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Critics of the fixed charge argue it penalizes energy conservation
                — if you invest in efficiency upgrades to reduce your usage,
                you&apos;re still stuck paying the $24 every month. Supporters
                argue it more fairly distributes the cost of maintaining grid
                infrastructure.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Much Is It by Utility?
              </h2>

              {/* Fixed Charge Comparison Table */}
              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>
                        Utility
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        Standard
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        CARE
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        FERA
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        PG&E
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$24.15/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$6/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$12/mo
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        SCE
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$24.15/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$6/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$12/mo
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        SDG&E
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$24.15/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$6/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        ~$12/mo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Amounts are approximate and subject to annual adjustment by the
                CPUC. CARE and FERA are income-based discount programs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Can You Avoid or Reduce It?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can&apos;t opt out of the fixed charge. It applies to every
                residential grid-connected customer. However, there are two ways
                to pay less.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CARE or FERA enrollment.</strong> If your household income
                qualifies, you can reduce the fixed charge to $6 to $12 per month.
                Check your utility&apos;s CARE/FERA eligibility page — many
                qualifying households haven&apos;t applied. Links:{' '}
                <a
                  href='https://www.pge.com/en/account/rate-plans/care-fera-program.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  PG&E CARE/FERA
                </a>
                ,{' '}
                <a
                  href='https://www.sce.com/residential/assistance/care-fera'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE CARE/FERA
                </a>
                ,{' '}
                <a
                  href='https://www.sdge.com/residential/pay-bill/get-payment-bill-assistance/assistance-programs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SDG&E assistance programs
                </a>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Go completely off-grid.</strong> Technically, if you
                disconnect from the utility entirely (no grid connection at all),
                you wouldn&apos;t pay the fixed charge. In practice, going fully
                off-grid in California requires significant battery storage
                (typically 40+ kWh), a backup generator, and is prohibitively
                expensive for most households. This is not a realistic option for
                the vast majority of homeowners.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Does the Fixed Charge Affect Solar?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you have solar panels (or are considering them), the fixed
                charge still applies. Even if your solar system produces 100% of
                the electricity you use, you&apos;ll still pay the $24 monthly
                fixed charge to the utility for your grid connection. This is true
                whether you own the system, lease it, or have a PPA.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                That said, $24 per month ($290 per year) is a small fraction of
                most households&apos; total energy costs. If your bill is $250 per
                month, the fixed charge represents less than 10%. The other 90%+
                is consumption-based charges that solar directly offsets.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To put it in perspective: without solar, a typical SCE household
                pays about $3,000 to $4,500 per year in electricity. With solar
                (assuming 70-90% offset), you&apos;d pay the $290 annual fixed
                charge plus perhaps $300 to $900 in remaining grid charges. The fixed charge is a real cost but not a
                deal-breaker for solar economics.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Will the Fixed Charge Go Up?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Probably. The CPUC has the authority to adjust the fixed charge
                annually, and utilities have signaled they&apos;d like it higher.
                Some energy policy analysts expect it to reach $30 to $40 per
                month within the next few years. There&apos;s no cap written into
                the legislation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is worth factoring into any long-term energy planning. If the
                fixed charge climbs to $40/month ($480/year), that&apos;s
                a meaningful cost — but it also means the per-kWh rates may come
                down slightly in exchange, since the fixed charge is meant to
                shift costs from per-kWh to flat fees. How that trade-off shakes
                out depends on your usage level.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Should You Actually Do?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                First, find the fixed charge on your most recent bill and confirm
                you&apos;re paying the standard amount. Then check whether you
                qualify for CARE or FERA to reduce it. Beyond that, the fixed
                charge is largely out of your control — it&apos;s a cost of being
                connected to the grid in California.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The actionable decision for most homeowners is whether to address
                the other 90% of their bill — the consumption-based charges — through
                efficiency upgrades, rate plan optimization, or solar. The fixed
                charge makes that decision slightly more complex but doesn&apos;t
                fundamentally change the calculus. If your bill is $200+ per month,
                the consumption portion is still where the real savings opportunity
                lives.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Wondering What Your Bill Would Look Like with Solar?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The Rate Relief Program is one option for addressing the
                consumption-based portion of your bill. Check eligibility in 60
                seconds if you&apos;re curious.
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
                href='/blog/sce-rate-increase-2026'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog/solar-tax-credit-expired-2026-options'
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
