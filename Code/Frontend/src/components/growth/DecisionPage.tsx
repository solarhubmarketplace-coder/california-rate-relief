import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SolarInquiry } from "./SolarInquiry";
import type { ServiceMarket } from "@/lib/service-market";
import { ArticleContents, type ArticleContentsItem } from "@/components/shared/ArticleContents";

/** Key-facts box entry — same shape as ArticleRenderer's `keyStats` (ported, D.5/C.2#5). */
export type KeyStat = { label: string; value: string; note?: string };

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
    <aside className="my-8 border-t pt-5 text-sm text-muted-foreground">
      <h2 className="font-bold text-foreground">
        Sources checked {formatSourceCheckedDate(sourceCheckedDate)}
      </h2>
      <ul className="mt-2 space-y-2">
        {sources.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words underline underline-offset-2"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
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
  commercial?: boolean;
  sourceCheckedDate?: string;
  contentModifiedDate?: string;
  regionLabel?: string;
  market?: ServiceMarket;
  primaryResourceHref?: string;
  primaryResourceLabel?: string;
  comparisonHref?: string;
  comparisonLabel?: string;
  /** Byline name shown next to the "Updated" date (D.5). */
  author?: string;
  authorHref?: string;
  /** Key-facts box near the top, ported from ArticleRenderer's `keyStats` (D.5/C.2#5). Omit for no box. */
  keyStats?: KeyStat[];
  /** Sticky desktop "On this page" nav, ported from ArticleContents (D.5/C.2#4). Omit for no TOC. */
  toc?: ArticleContentsItem[];
}) {
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
          author: {
            "@type": "Organization",
            name: "California Rate Relief",
            url: "https://ratereliefca.com/about",
          },
          publisher: {
            "@type": "Organization",
            name: "California Rate Relief",
            url: "https://ratereliefca.com",
          },
          mainEntityOfPage: `https://ratereliefca.com${path}`,
          citation: sources.map((s) => s.url),
        };
  return (
    <PublicLayout breadcrumbLabel={title}>
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-10 md:pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {regionLabel} solar decisions
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">{intro}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            By{' '}
            <Link href={authorHref} className="font-medium text-foreground hover:text-primary hover:underline">
              {author}
            </Link>
            {' '}· Updated {formatSourceCheckedDate(contentModifiedDate || sourceCheckedDate)} · California
            Rate Relief is a private solar referral service.
          </p>
        </header>
        {toc.length > 0 && (
          <div className="lg:sticky lg:top-24 lg:z-10">
            <ArticleContents items={toc} />
          </div>
        )}
        {keyStats.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-2">
            {keyStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                <div className="text-2xl font-bold text-primary tabular-nums">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
                {s.note && <div className="mt-2 text-sm leading-snug text-foreground/70">{s.note}</div>}
              </div>
            ))}
          </div>
        )}
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
          <a href="#solar-inquiry" className="underline">
            Optional inquiry
          </a>
        </nav>
        <div className="mx-auto max-w-[72ch] space-y-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:leading-relaxed [&_li]:leading-relaxed">
          {children}
        </div>
        <SourceList sources={sources} sourceCheckedDate={sourceCheckedDate} />
        {faq}
        {inquiry ?? <SolarInquiry utility={utility} topic={topic || title} market={market} />}
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
