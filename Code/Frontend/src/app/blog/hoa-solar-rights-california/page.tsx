import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';

export const metadata: Metadata = {
  title:
    "Can an HOA Ban Solar Panels in California? Your Rights",
  description:
    "California's Solar Rights Act prevents HOAs from unreasonably blocking rooftop solar. What the law says and how to handle pushback.",
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

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/hoa-solar-rights-california');
const CRUMB_LABEL = 'HOA solar rights';

export default function HoaSolarRights() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Can an HOA Ban Solar Panels in California? Your Solar Rights, Explained"} url="https://ratereliefca.com/blog/hoa-solar-rights-california" datePublished="2026-04-23" dateModified="2026-09-24" description={"California's Solar Rights Act prevents HOAs from unreasonably blocking rooftop solar. What the law says and how to handle pushback."} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

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
                  <span>
                    Updated <time dateTime='2026-09-24'>September 24, 2026</time>
                  </span>
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
                apply,&quot; and homeowners still run into HOA friction
                when trying to install solar. Here&apos;s what the law actually says and how to
                handle an HOA that&apos;s pushing back.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="HOA solar rights in California" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Law: California&apos;s Solar Rights Act
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Solar Rights Act is codified primarily at{' '}
                <a
                  href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=714.&lawCode=CIV'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary underline'
                >
                  California Civil Code Section 714
                </a>{' '}
                (text last amended by AB 2188, effective January 1, 2015;
                checked on leginfo.legislature.ca.gov, September 24, 2026).
                It voids any covenant, restriction or condition, and any
                provision of an HOA&apos;s governing documents, that
                &quot;effectively prohibits or restricts the installation
                or use of a solar energy system.&quot;
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key legal phrase is &quot;reasonable restriction.&quot;
                An HOA rule is only enforceable if it does not
                &quot;significantly increase the cost of the system&quot;
                or &quot;significantly decrease its efficiency or specified
                performance.&quot; The statute itself sets the test, in
                Section 714(d): for a photovoltaic system,
                &quot;significantly&quot; means an amount not to exceed
                $1,000 over the system cost as originally specified and
                proposed, or a decrease in system efficiency of more than
                10 percent. A rule that adds more than $1,000 or cuts
                efficiency by more than 10 percent is not a reasonable
                restriction.
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
                    Leave your application undecided: if the HOA does not
                    deny it in writing within 45 days of receiving it, it is
                    deemed approved, unless the delay comes from a
                    reasonable request for more information.
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
                Civil Code Section 714(e), an HOA must approve or deny a
                solar application in writing. If it does not deny the
                application in writing within 45 days from the date it
                receives it, the application is deemed approved, unless the
                delay is the result of a reasonable request for additional
                information.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 45 days run from the date the HOA receives your
                application, but a reasonable request for more information
                can hold the clock. HOAs sometimes stall by asking for more
                documents, so send a complete application. Document everything:
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
                <strong>5. Know the penalty and fee provisions.</strong>
                Under Section 714(f), an HOA that willfully violates the
                statute is liable for your actual damages and a civil
                penalty of up to $1,000. Under Section 714(g), in any
                action to enforce the statute, the prevailing party is
                awarded reasonable attorney&apos;s fees. That cuts both
                ways: if you sue and lose, you may owe the HOA&apos;s
                fees.
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
                real-estate attorney who handles solar disputes. Under
                Section 714(g), the prevailing party in an enforcement
                action is awarded reasonable attorney&apos;s fees, so ask
                the attorney how strong your case is before you file.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This article is a plain-English summary and not legal
                advice. For specific situations consult a licensed
                California attorney.
              </p>
            </div>

            {/* The closing ask is the inquiry form itself (2026-09-23); the link-only
                box it replaced sent this form-less page to the home page. */}
            <SolarInquiry topic="HOA solar rights in California" variant="default" />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
