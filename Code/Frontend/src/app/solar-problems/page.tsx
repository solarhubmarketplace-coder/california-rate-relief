import type { Metadata } from 'next';
import { ArticleHub } from '@/components/shared/ArticleRoute';
import { articlesInCluster, articleHref } from '@/data/article-pages';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { topicHub } from '@/data/topic-hubs';
import Link from 'next/link';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';

// 2026-09-23 Tier 3 (claude/t3-misc-20260923): small rules-and-disputes
// questions answered on the hub as FAQ entries (FaqBlock emits the FAQPage
// schema from the same strings): the new-home solar requirement, PG&E
// interconnection, cancelling a contract and when a lawyer helps. Sources
// fetched 2026-09-23: CEC (2025 Energy Code and its PV requirements), PG&E
// (getting started with solar), CPUC (Solar Consumer Protection Guide) and the
// State Bar (certified lawyer referral services).
const hubFaqs: FaqJsonLdItem[] = [
  {
    question: 'Is solar required on new homes in California?',
    answer:
      'Yes, for most newly built single-family homes. Buildings whose permit applications were filed on or after January 1, 2026 must meet the 2025 Energy Code, which requires a solar PV system sized by a roof-area method (18 watts per square foot of solar-ready area on steep roofs, 14 on low-sloped roofs) or a formula based on climate zone and floor area. No system is required if the calculated size is under 1.8 kWdc or the usable roof area is under 80 contiguous square feet, and the rules do not apply to additions or alterations. The rule applies to the builder; it does not require existing homes to add solar.',
  },
  {
    question: 'How does PG&E solar interconnection work?',
    answer:
      'Your contractor handles the paperwork. PG&E lists five steps: prepare the home and pick a contractor; the contractor completes the interconnection application and you review and sign the agreement; installation; a city or county inspection; and permission to operate, which PG&E says typically takes 5 to 10 business days after it receives the contractor’s paperwork, up to a maximum of 30. Do not switch the system on before PG&E grants permission to operate.',
  },
  {
    question: 'How do I cancel a solar contract in California?',
    answer:
      'Within three business days of receiving a signed, dated copy, or five if you are 65 or older, send the provider a written cancellation by email, mail, fax or hand delivery, as the CPUC’s Solar Consumer Protection Guide describes. After that window, what you can do depends on the contract and on who owns the system; the guide to getting out of a solar contract covers each stage.',
  },
  {
    question: 'When do I need a lawyer for a solar contract dispute?',
    answer:
      'Not to cancel inside the three- or five-day window or to file a complaint with the Contractors State License Board. A consumer attorney is worth consulting when you are past the window and a lot of money is at stake, when you suspect forgery or fraud, or when the contract has an arbitration clause. The State Bar says lawyers referred through a certified lawyer referral service must be in good standing and insured, and must offer an initial consultation for a reduced fee or no fee.',
  },
];

export const metadata: Metadata = {
  title: "Solar Problems and Scams in California: What Goes Wrong",
  description: "How solar sales tactics work, what a true-up bill is, why your bill stays high after solar, and what to do if a contractor took your money. Sourced.",
  alternates: { canonical: '/solar-problems' },
};

/*
 * Schema and CTA both come from <ArticleHub/> (src/components/shared/ArticleRoute.tsx):
 *   - CollectionPage + ItemList of the cluster's guides. This route is an index,
 *     not an article — the writing is on the child pages, each of which emits its
 *     own Article node. Do not add an Article here.
 *   - <Header/> for the sitewide eligibility CTA, and HeroQuickCheck after the
 *     intro with SolarInquiry at the end as the in-body ask (2026-09-23).
 *
 * This page is also the hub of the "rules, permits and consumer protection"
 * topic (SEO/24). ArticleHub lists only the JSON guides, so the hub's other
 * spokes (hand-written pages such as the lawsuit and attorney guides) are
 * listed under it from src/data/topic-hubs.ts.
 */
export default function Page() {
  const jsonPaths = new Set(articlesInCluster('problems').map((p) => articleHref(p)));
  const otherSpokes = (topicHub('rules_permits')?.spokes ?? []).filter((s) => !jsonPaths.has(s.href));
  return (
    <ArticleHub
      cluster="problems"
      title="Solar problems and scams in California: what goes wrong, and why"
      intro="Most complaints about solar are not about the panels. They come from how it was sold, what the contract actually said, and expectations nobody corrected. We do not install anything, so we have no reason to soften any of it."
      after={
        <>
        <p className="mt-10 leading-relaxed text-foreground/80">
          Stuck in a contract you want out of? Start with{' '}
          <Link href="/blog/can-you-cancel-solar-panel-contract-before-installation-california" className="text-primary underline underline-offset-2">
            how to cancel a solar contract in California
          </Link>
          : the statutory window day by day, and what applies once the system
          is installed.
        </p>
        <RelatedGuides
          heading="Disputes, lawsuits and the rules that apply"
          intro="When a problem needs more than a phone call: legal options, and the rules a project has to meet."
          links={otherSpokes}
        />
        <FaqBlock items={hubFaqs} id="solar-problems-faq" heading="Rules, contracts and disputes: quick answers" />
        </>
      }
    />
  );
}
