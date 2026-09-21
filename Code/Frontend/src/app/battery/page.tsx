import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleHub } from '@/components/shared/ArticleRoute';

export const metadata: Metadata = {
  title: 'Home Battery Storage in California: Compare the Project',
  description: 'Choose between backup, a solar retrofit, storage without solar, and bill-plan review before comparing a California battery project.',
  alternates: { canonical: '/battery' },
};

/*
 * Schema and CTA both come from <ArticleHub/> (src/components/shared/ArticleRoute.tsx):
 *   - CollectionPage + ItemList of the cluster's guides. This route is an index,
 *     not an article — the writing is on the child pages, each of which emits its
 *     own Article node. Do not add an Article here.
 *   - <Header/> for the sitewide eligibility CTA and <ArticleCTA/> for the
 *     in-body one.
 */
export default function Page() {
  return (
    <ArticleHub
      cluster="battery"
      title="Home battery storage in California"
      intro="A home battery can serve different jobs: backup during an outage, a new solar project, a retrofit to an existing system, or storage without solar. Start with the job and the records it requires before comparing equipment or payments."
      content={
        <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-purpose">
          <h2 id="battery-purpose" className="text-xl font-bold text-foreground">Choose the project purpose first</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
            <li><Link href="/blog/solar-battery-backup-california" className="text-primary underline">Backup loads and outage goals</Link> need selected circuits, operating duration and a commissioning plan.</li>
            <li><Link href="/battery/home-battery-cost-california" className="text-primary underline">Battery cost and retrofit scope</Link> need the existing equipment, ownership, warranty, monitoring and electrical records.</li>
            <li><a href="https://service.tesla.com/docs/Public/Energy/Powerwall/Powerwall-2-Owners-Manual-NA-EN/GUID-DDDC3718-3289-49C9-B055-3B2767BE0CBE.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">Storage without solar</a> is a configuration to verify with the proposed equipment, installer and utility; it is not a universal permission or savings result.</li>
            <li>Use the plan comparison in your utility account before treating a battery as the answer; the <Link href="/blog/sce-time-of-use-rates-2026" className="text-primary underline">SCE</Link> and <Link href="/blog/sdge-time-of-use-rates-2026" className="text-primary underline">SDG&amp;E</Link> guides explain what to confirm on the bill.</li>
          </ul>
        </section>
      }
    />
  );
}
