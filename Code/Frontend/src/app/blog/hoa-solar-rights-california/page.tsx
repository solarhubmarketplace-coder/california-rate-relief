import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    "Can an HOA Ban Solar Panels in California? Your Solar Rights, Explained",
  description:
    "California's Solar Rights Act prevents HOAs from unreasonably blocking rooftop solar. Here is what the law says, what HOAs can and cannot do, and how to handle pushback.",
  alternates: {
    canonical: '/blog/hoa-solar-rights-california',
  },
  openGraph: {
    title:
      "Can an HOA Ban Solar Panels in California? Your Solar Rights, Explained",
    description:
      "The Solar Rights Act gives California homeowners strong protections against HOA interference with rooftop solar. Here's how it works.",
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    "Can an HOA Ban Solar Panels in California? Your Solar Rights, Explained",
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
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
      'https://ratereliefca.com/blog/hoa-solar-rights-california',
  },
};

export default function HoaSolarRights() {
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
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                California Solar Rights
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Can an HOA Ban Solar Panels in California? Your Solar
                Rights, Explained
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-23'>April 23, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>6 min read</span>
                </div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Short answer: no, a California homeowners association cannot
                ban rooftop solar panels — and it generally cannot impose
                restrictions that &quot;significantly&quot; increase the
                cost of the system or decrease its efficiency. California
                has one of the strongest solar rights laws in the country,
                and it specifically limits what HOAs can do. But
                &quot;cannot ban&quot; is not the same as &quot;no rules
                apply,&quot; and every year thousands of California
                homeowners run into HOA friction when trying to install
                solar. Here&apos;s what the law actually says and how to
                handle an HOA that&apos;s pushing back.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Law: California&apos;s Solar Rights Act
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Solar Rights Act — codified primarily at
                California Civil Code Section 714 — was originally passed
                in 1978 and has been strengthened multiple times since. The
                statute specifically invalidates any covenant, restriction,
                or condition imposed by a homeowners association that
                &quot;effectively prohibits or restricts the installation
                or use of a solar energy system.&quot;
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key legal phrase is &quot;reasonable restriction.&quot;
                An HOA rule is only enforceable if it does not
                &quot;significantly increase the cost of the system&quot;
                or &quot;significantly decrease its efficiency or specified
                performance.&quot; California courts have interpreted
                &quot;significantly&quot; fairly narrowly — generally
                meaning anything that adds more than ~$1,000 to the system
                cost or reduces production by more than ~10% fails the
                test.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What HOAs Cannot Do
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                Under the Solar Rights Act, an HOA cannot:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>Prohibit rooftop solar installation outright.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Require placement on a less-efficient orientation
                    (e.g., forcing panels to the north side of the roof for
                    aesthetic reasons when the south side has better sun).
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Require &quot;invisible&quot; or hidden panels that
                    materially reduce output.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Impose fees or application requirements so burdensome
                    they become an effective ban.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Require the use of specific products or installers to
                    the point of meaningfully increasing cost.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Take longer than 45 days to approve or deny a
                    reasonable application (after 45 days, the application
                    is deemed approved by operation of law).
                  </span>
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What HOAs Can Do
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                An HOA can impose &quot;reasonable&quot; restrictions that
                don&apos;t significantly impact cost or efficiency. In
                practice, this usually means:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Requiring an architectural review application before
                    installation.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Requiring that panels be installed &quot;flush&quot;
                    with the roofline (i.e., not tilted up at a steep
                    angle) as long as this doesn&apos;t significantly
                    reduce production for your specific roof orientation.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Requiring that conduit and electrical boxes be painted
                    to match the roof or siding (cosmetic, low cost).
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold mt-1'>•</span>
                  <span>
                    Requiring proof of contractor licensing, insurance, and
                    permit approvals before work begins.
                  </span>
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The 45-Day Deemed-Approval Rule
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the single most important piece of the law for
                California homeowners dealing with a slow-moving HOA. Under
                California Civil Code Section 714.1, an HOA has 45 days to
                approve or deny a complete solar application. If the HOA
                doesn&apos;t act within 45 days of receiving a complete
                application, the application is automatically deemed
                approved by operation of law. You can then proceed with
                installation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 45-day clock starts only when the HOA has received a
                <em> complete</em> application. HOAs sometimes stall by
                claiming applications are incomplete. Document everything:
                send your application with a list of what&apos;s included,
                get written confirmation of receipt, and track the calendar
                days. If day 46 arrives without action, document that fact
                in writing to the HOA and proceed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How to Handle an HOA That&apos;s Pushing Back
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Get it in writing.</strong> Never accept verbal
                denials or delays. Email the HOA property manager and board
                with your application and keep all correspondence in
                writing. If they deny, request the denial in writing with
                the specific reason cited.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Cite the Solar Rights Act.</strong> Most HOA
                boards and property managers are not intimately familiar
                with Civil Code Section 714. A polite reference to the
                statute often resolves the situation. &quot;Per California
                Civil Code 714, restrictions that significantly increase
                cost or reduce efficiency are not enforceable&quot; is a
                useful opening line.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Document the cost impact.</strong> If the HOA is
                demanding a change that adds cost — say, requiring a
                specific installer, specific panel brand, or specific
                placement that reduces production — get your actual
                installer to quantify the dollar impact in writing. That
                documentation is your leverage.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>4. Use the 45-day rule.</strong> If the HOA is
                stalling, track the calendar days and assert deemed
                approval after day 45.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>5. Know the prevailing-party attorney&apos;s fees
                provision.</strong> If an HOA violation of the Solar Rights
                Act ends up in court, the prevailing homeowner is entitled
                to attorney&apos;s fees under the statute. That provision
                is specifically designed to deter HOAs from creating
                barriers. Citing the fee-shifting provision in
                correspondence often resolves disputes before they escalate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Special Cases: Condos, Townhomes, Common Walls
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Solar Rights Act has been updated multiple times to
                address condominium and common-roof situations. Generally,
                residents of condos with individually owned roof space above
                their unit have strong solar rights. Situations with
                shared/common roofs are more complicated — the HOA owns
                the roof, and whether a resident can install on it depends
                on the CC&amp;Rs, the HOA governing documents, and
                negotiated access agreements.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Townhomes with individually owned roofs are treated like
                single-family homes for solar purposes. Townhomes with
                shared roofs face the common-roof complications.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When to Consult an Attorney
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a straightforward single-family home with a reasonable
                HOA, the above steps usually resolve issues without legal
                involvement. If your HOA continues to unreasonably block
                installation after you&apos;ve documented the cost impact
                and cited the Solar Rights Act, consult a California
                real-estate attorney who handles solar disputes. The
                attorney&apos;s-fees provision means your legal costs are
                likely recoverable if you prevail.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This article is a plain-English summary and not legal
                advice. For specific situations consult a licensed
                California attorney.
              </p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Move Forward on Solar?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program works with installers
                who handle HOA applications routinely. Get a free
                eligibility check — if you qualify, your installer handles
                the 45-day HOA process for you.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
