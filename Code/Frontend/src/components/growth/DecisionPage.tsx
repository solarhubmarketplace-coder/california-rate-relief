import { Children, Fragment, isValidElement, type ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SolarInquiry } from "./SolarInquiry";
import { HeroQuickCheck } from "./HeroQuickCheck";
import { intakeHrefForPath } from "@/lib/intake-routing";
import type { ServiceMarket } from "@/lib/service-market";
import type { ArticleContentsItem } from "@/components/shared/ArticleContents";
import type { FaqJsonLdItem } from "@/components/shared/FaqJsonLd";
import { Byline } from "@/components/trust/Byline";
import { KeyFacts, type KeyFact } from "@/components/trust/KeyFacts";
import { SourceChip, sourceHost } from "@/components/trust/SourceChip";
import { FaqBlock } from "@/components/trust/FaqBlock";
import { TocRail, RAIL_GRID } from "@/components/trust/TocRail";
import { BreadcrumbTrail } from "@/components/shared/BreadcrumbTrail";
import { defaultCrumbs } from "@/lib/breadcrumbs";

/**
 * Key-facts box entry. Same shape as ArticleRenderer's `keyStats`, plus an
 * optional per-fact source that renders as a publisher · date chip.
 */
export type KeyStat = KeyFact;

export type Source = { label: string; url: string };
export function formatSourceCheckedDate(sourceCheckedDate: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(sourceCheckedDate);
  if (!match) return sourceCheckedDate;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][Number(match[2]) - 1];
  return month
    ? `${month} ${Number(match[3])}, ${match[1]}`
    : sourceCheckedDate;
}
export function SourceList({
  sources,
  sourceCheckedDate = "2026-09-10",
}: {
  sources: Source[];
  sourceCheckedDate?: string;
}) {
  return (
    <aside id="sources" className="my-8 scroll-mt-24 border-t border-border pt-5 text-sm text-muted-foreground">
      <h2 className="font-bold text-foreground" data-toc-label="Sources">
        Sources checked {formatSourceCheckedDate(sourceCheckedDate)}
      </h2>
      <ul className="mt-3 space-y-3">
        {sources.map((s) => (
          <li key={s.url} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-foreground underline decoration-border underline-offset-2 hover:text-primary hover:decoration-primary"
            >
              {s.label}
            </a>
            {/* publisher · date chip: the host the link already points at and
                the check date this list already states. */}
            {sourceHost(s.url) && <SourceChip href={s.url} date={sourceCheckedDate} />}
          </li>
        ))}
      </ul>
    </aside>
  );
}
/**
 * Place `node` halfway through the page body. A body passed as one fragment
 * (GrowthGuide does this) is split on the fragment's own children.
 */
function withMidContent(children: ReactNode, node: ReactNode): ReactNode {
  if (!node) return children;
  let items = Children.toArray(children);
  if (items.length === 1 && isValidElement(items[0]) && items[0].type === Fragment) {
    items = Children.toArray((items[0].props as { children?: ReactNode }).children);
  }
  const at = Math.max(1, Math.ceil(items.length / 2));
  return (
    <>
      {items.slice(0, at)}
      {node}
      {items.slice(at)}
    </>
  );
}

export function DecisionPage({
  title,
  intro,
  path,
  children,
  sources,
  utility = "",
  topic,
  inquiry,
  faq,
  faqs = [],
  commercial = false,
  sourceCheckedDate = "2026-09-10",
  contentModifiedDate,
  regionLabel = "California",
  market = "CA",
  primaryResourceHref,
  primaryResourceLabel,
  comparisonHref,
  comparisonLabel,
  author = "Chad Simpson",
  authorHref = "/author/chad-simpson",
  keyStats = [],
  toc = [],
  authorSchema = "organization",
  breadcrumbs,
  breadcrumbLabel,
  quickCheck,
  quickCheckUtility,
  midContent,
}: {
  title: string;
  intro: string;
  path: string;
  children: ReactNode;
  sources: Source[];
  utility?: string;
  topic?: string;
  inquiry?: ReactNode;
  /** Optional FAQ block rendered after the sources list and before the inquiry form. */
  faq?: ReactNode;
  /**
   * FAQ as data. Rendered as a visible FAQ block WITH FAQPage JSON-LD built
   * from the same strings. Prefer this to `faq` when the Q&A is plain text.
   */
  faqs?: FaqJsonLdItem[];
  commercial?: boolean;
  sourceCheckedDate?: string;
  contentModifiedDate?: string;
  regionLabel?: string;
  market?: ServiceMarket;
  primaryResourceHref?: string;
  primaryResourceLabel?: string;
  comparisonHref?: string;
  comparisonLabel?: string;
  /** Byline name (links to authorHref). No title or credential is shown. */
  author?: string;
  authorHref?: string;
  /** Key-facts box under the intro. Rendered only when the page supplies facts. */
  keyStats?: KeyStat[];
  /**
   * Explicit "On this page" entries for the desktop rail. Omit to generate the
   * list from the body's own <h2> headings (shown when there are 3 or more).
   */
  toc?: ArticleContentsItem[];
  /**
   * "person" makes the Article schema's author the same Chad Simpson Person
   * node the byline links to (and that ArticleJsonLd emits on the /solar-cost
   * pages). Defaults to the Organization author every other caller has.
   */
  authorSchema?: "organization" | "person";
  /**
   * Visible trail between Home and this page; the same list is the
   * BreadcrumbList schema, so the two match. Omitted, the trail comes from
   * lib/breadcrumbs.ts (defaultCrumbs): the URL section, else the page's topic
   * hub, so a /blog post shows its hub rather than "Blog" (Block 5 §5.6).
   */
  breadcrumbs?: { label: string; href: string }[];
  /** Short name for this page at the end of the trail. Defaults to the title. */
  breadcrumbLabel?: string;
  /**
   * Where the HeroQuickCheck bill-first step goes (2026-09-23):
   * "afterIntro" (default for residential pages) puts it after the intro and
   * before the key facts and the body; "afterByline" puts it right under the
   * H1 and byline, for city pages that must show it on a phone's first
   * screen; false leaves it out (commercial pages, which never carry it, and
   * pages whose first body block is already a tool). It sends nothing; it
   * opens the page's inquiry form at step 2.
   */
  quickCheck?: "afterIntro" | "afterByline" | false;
  /**
   * Utility the quick check pre-selects. Defaults to `utility` unless that is
   * "other". Pass "" for a city split between utilities.
   */
  quickCheckUtility?: string;
  /** Rendered halfway through the body, e.g. the commercial mid-page button. */
  midContent?: ReactNode;
}) {
  const quickCheckAt = commercial ? false : (quickCheck ?? "afterIntro");
  const crumbs = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : defaultCrumbs(path);
  const crumbLabel = breadcrumbLabel || title;
  const quickCheckNode = quickCheckAt ? (
    <HeroQuickCheck
      compact={quickCheckAt === "afterByline"}
      topic={topic || title}
      utility={quickCheckUtility ?? (utility === "other" ? "" : utility)}
      className={quickCheckAt === "afterByline" ? "mt-5" : "mt-6"}
    />
  ) : null;
  const personAuthor = {
    "@type": "Person",
    "@id": "https://ratereliefca.com/author/chad-simpson#person",
    name: author,
    url: `https://ratereliefca.com${authorHref}`,
    jobTitle: "Editor at California Rate Relief",
  };
  const schema =
    path === "/tools/solar-panel-calculator"
      ? {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: title,
          description: intro,
          url: `https://ratereliefca.com${path}`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          isAccessibleForFree: true,
          browserRequirements: "JavaScript enabled",
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          dateModified: contentModifiedDate || sourceCheckedDate,
          author:
            authorSchema === "person"
              ? personAuthor
              : {
                  "@type": "Organization",
                  name: "California Rate Relief",
                  url: "https://ratereliefca.com/about",
                },
          ...(authorSchema === "person" ? { reviewedBy: personAuthor } : {}),
          publisher: {
            "@type": "Organization",
            name: "California Rate Relief",
            url: "https://ratereliefca.com",
          },
          mainEntityOfPage: `https://ratereliefca.com${path}`,
          citation: sources.map((s) => s.url),
        };
  return (
    <PublicLayout breadcrumbLabel={crumbLabel} breadcrumbParents={crumbs}>
      <Header />
      {/* City pages (quickCheck "afterByline") sit a little tighter on phones
          so the quick check under the byline fits a 390x844 screen whole. */}
      <main className={`mx-auto max-w-6xl px-4 pb-20 md:pt-12 ${quickCheckAt === "afterByline" ? "pt-6" : "pt-8"}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className={RAIL_GRID}>
          <div className="min-w-0">
            <header className="max-w-3xl">
              {/* A page with no middle crumb (a hub, an out-of-state page)
                  shows no trail; its schema is then just Home > page. */}
              {crumbs.length > 0 && <BreadcrumbTrail crumbs={crumbs} current={crumbLabel} />}
              <p
                className={`text-sm font-semibold uppercase tracking-wide text-primary ${
                  quickCheckAt === "afterByline" ? "hidden sm:block" : ""
                }`}
              >
                {regionLabel} solar decisions
              </p>
              <h1
                className={`text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl ${
                  quickCheckAt === "afterByline" ? "sm:mt-3" : "mt-3"
                }`}
              >
                {title}
              </h1>
              {/* Byline above the first paragraph (22b §3.2). The date is the
                  page's own dateModified, the same value the schema carries. */}
              <Byline
                author={author}
                authorHref={authorHref}
                updated={contentModifiedDate || sourceCheckedDate}
                sourceCount={sources.length}
                sourcesHref="#sources"
              />
              {quickCheckAt === "afterByline" && quickCheckNode}
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">{intro}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                California Rate Relief is a private solar referral service.
              </p>
              {quickCheckAt === "afterIntro" && quickCheckNode}
            </header>
            <KeyFacts facts={keyStats} sourcesHref="#sources" className="max-w-3xl" />
            <nav
              aria-label="Decision tools"
              className="my-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-primary"
            >
              <Link
                href={
                  primaryResourceHref || (commercial
                    ? "/commercial-solar/cost-per-watt-california"
                    : "/tools/solar-panel-calculator")
                }
                className="underline"
              >
                {primaryResourceLabel || (commercial
                  ? "Commercial project costs"
                  : "Bill and quote calculator")}
              </Link>
              <Link
                href={
                  comparisonHref || (commercial
                    ? "/commercial-solar"
                    : "/best-solar-companies-california")
                }
                className="underline"
              >
                {comparisonLabel || (commercial ? "Commercial solar resources" : "Compare solar quotes")}
              </Link>
              <a href={commercial ? intakeHrefForPath(path) : "#solar-inquiry"} className="underline">
                Optional inquiry
              </a>
            </nav>
            {/* The rail's "On this page" list is generated from the <h2>s in
                here, so a section added to any page shows up on its own. */}
            <div id="decision-body" className="max-w-3xl [&_h2]:scroll-mt-24">
              <div className="max-w-[72ch] space-y-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:leading-relaxed [&_li]:leading-relaxed">
                {withMidContent(children, midContent)}
              </div>
              <SourceList sources={sources} sourceCheckedDate={sourceCheckedDate} />
              <FaqBlock items={faqs} id="faq" />
              {faq}
            </div>
            {/* The page's one ask: the existing inquiry form or the caller's own
                inquiry block, unchanged. Kept out of the contents list. */}
            <div data-toc-ignore="" className="max-w-3xl">
              {inquiry ?? <SolarInquiry utility={utility} topic={topic || title} market={market} />}
            </div>
          </div>
          <TocRail items={toc.length > 0 ? toc : undefined} rootId="decision-body" />
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
export function QuoteChecklist() {
  const rows = [
    [
      "System and output",
      "Same DC system size, module/inverter models and roof layout; monthly production with shading and losses shown.",
    ],
    [
      "Battery and backup",
      "Usable kWh, continuous output, backed-up circuits, reserve setting and expected replacement costs.",
    ],
    [
      "Price and scope",
      "Separate solar, battery, roof, panel upgrade, permits and interconnection. Compare cash prices before financing.",
    ],
    [
      "Utility bill",
      "Same usage history and tariff; separate onsite use, grid imports, export credits and remaining fixed/delivery charges.",
    ],
    [
      "Contract and service",
      "Who installs and who services it; written coverage by address, insurance, license record, exclusions and warranty claim process.",
    ],
    [
      "Payment and transfer",
      "Cash, loan, lease or PPA; upfront costs, APR or escalator, total payments, home-sale and end-of-term terms.",
    ],
  ];
  return (
    <section id="quote-checklist">
      <h2>Put the quotes on the same basis</h2>
      <p className="mb-4">
        A smaller monthly payment can hide a longer contract, less equipment or
        a larger remaining electric bill. Ask each bidder to fill the same gaps.
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Equivalent solar quote checklist
          </caption>
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Compare</th>
              <th className="p-4">Get it in writing</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([key, detail]) => (
              <tr key={key} className="border-t">
                <th scope="row" className="p-4 align-top">
                  {key}
                </th>
                <td className="p-4">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
