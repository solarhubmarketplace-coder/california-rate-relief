import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';

const title = 'Solar Carports in California: Compare Structure, Quotes and a Roof Alternative';
const description =
  'How to compare a California solar carport with a roof proposal: project scope, local review, electrical work and contract questions.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog/solar-carport-california-guide' },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    modifiedTime: '2026-09-11T00:00:00Z',
    url: 'https://ratereliefca.com/blog/solar-carport-california-guide',
  },
};

export default function SolarCarportCAGuide() {
  return (
    <PublicLayout>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={title}
        url="https://ratereliefca.com/blog/solar-carport-california-guide"
        datePublished="2026-04-24"
        dateModified="2026-09-11"
        description={description}
      />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Solar Carports in California</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Solar Design · California
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A solar carport places panels on a freestanding canopy above a
                parking area. It may solve a different property problem than a roof
                installation, so it needs a separate scope and quote comparison.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Updated September 11, 2026</p>
            </header>

            <div className="prose prose-slate max-w-none">
              <div className="my-8 rounded-xl border border-border bg-muted/30 p-5">
                <p className="m-0">
                  <strong>Start here:</strong> decide whether the canopy itself
                  solves a property need. Then compare the solar equipment,
                  structural work, electrical work and contract terms on separate
                  lines. A single total price hides too much.
                </p>
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                When a carport deserves its own comparison
              </h2>
              <p>
                A carport can be worth considering when usable roof area is limited,
                when covered parking has value on its own, or when a site plan calls
                for a freestanding structure. It is not automatically comparable to
                a roof quote with the same panel count. The canopy, foundation and
                site work can change both price and project sequence.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Ask for a scope that separates the moving parts
              </h2>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Scope</th>
                      <th className="p-3">What to get in writing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Canopy and site work</th><td className="p-3 align-top">Frame, foundations, drainage or paving work, and who is responsible for each item.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Solar equipment</th><td className="p-3 align-top">System size, module and inverter models, production assumptions and equipment ownership.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Electrical work</th><td className="p-3 align-top">Service-panel work, wiring route, EV charging or battery equipment, and items priced separately.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Local review</th><td className="p-3 align-top">Which party prepares plans, submits applications, responds to questions and carries any excluded work.</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Contract terms</th><td className="p-3 align-top">Cash price, finance agreement, escalator, service responsibility, transfer terms and removal or repair responsibilities.</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Check the property-specific questions before signing
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>Ask the relevant local office what review applies to the exact property and proposed structure.</li>
                <li>Check any HOA, lease, easement or parking-use restriction that could affect the design.</li>
                <li>Ask who will be named in the project paperwork and who is responsible for work outside the solar equipment.</li>
                <li>Get the roof alternative on the same usage history, equipment scope and payment basis before choosing between designs.</li>
                <li>Keep a battery or EV charger as a separate line item unless the proposal states exactly what is included.</li>
              </ul>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Common comparison mistakes
              </h2>
              <p>
                Do not compare a carport&apos;s all-in price against a roof system&apos;s
                solar-only price. Do not assume that a financing payment covers the
                same scope as a cash proposal. Do not assume a permit, utility or
                ownership question has the same answer for every California
                property. Put each answer in the written proposal.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Questions to ask a provider
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>What work is included in the canopy price, and what work can change it?</li>
                <li>Which company handles the solar equipment and which handles structural or electrical work?</li>
                <li>What does the proposal assume about the utility bill after installation?</li>
                <li>Who owns, maintains and services the equipment under this payment option?</li>
                <li>What happens if property work, a sale or a roof change affects the system?</li>
              </ol>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Related reading
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li><Link href="/blog/is-my-roof-good-for-solar-california" className="text-primary underline">Is My Roof Good for Solar in California?</Link></li>
                <li><Link href="/blog/solar-panels-for-ev-charging-california" className="text-primary underline">Solar Panels for EV Charging in California</Link></li>
                <li><Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className="text-primary underline">PPA vs. Loan vs. Lease vs. Cash</Link></li>
                <li><Link href="/solar-panels-california" className="text-primary underline">California Solar Cost and Quote Comparison</Link></li>
              </ul>
            </div>

            <ArticleCTA
              heading="Compare a solar carport with roof options"
              body="California homeowners can request a no-obligation solar assessment from this private referral service after reviewing the property and contract questions above."
            />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className="container mx-auto max-w-3xl px-4"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
