import Link from 'next/link';
import { GLP1Layout } from './GLP1Layout';
import { GLP1Header } from './GLP1Header';
import { GLP1Footer } from './GLP1Footer';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { EditorialReviewBox } from './EditorialReviewBox';
import { RelatedGuides } from './RelatedGuides';
import { StickyMobileCTA } from './StickyMobileCTA';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, Check, X, AlertCircle, Trophy } from 'lucide-react';

// =============================================================================
// TMatesCompareTemplate
// =============================================================================
// Shared layout for TMates vs [competitor] comparison pages. Data verified by
// Gronk on 2026-05-08. Each page passes its competitor's CompetitorProfile in.
// =============================================================================

export interface CompetitorProfile {
  /** Display name (e.g., "Eden Health") */
  name: string;
  /** Affiliate slug for buildGlp1AffiliateUrl, or null for non-affiliate competitor */
  slug: string | null;
  /** URL slug for /tmates-vs-[slug] */
  pageSlug: string;
  /** Pricing for compounded semaglutide ($/mo) */
  semaPrice: string;
  /** Pricing for compounded tirzepatide ($/mo) */
  tirzPrice: string;
  /** 503A pharmacy disclosure (e.g., "NABP/PCAB/ACHC-accredited" or "Unnamed") */
  pharmacyDisclosure: string;
  /** Trustpilot rating string (e.g., "4.4/5 (13K reviews)") */
  trustpilot: string;
  /** Cancel/contract policy */
  cancelPolicy: string;
  /** Brief 1-line summary of provider positioning */
  positioning: string;
  /** Strengths bullet list (3-5 items) — what this competitor does better than TMates */
  strengthsVsTmates: string[];
  /** Weaknesses bullet list (3-5 items) — what this competitor does worse than TMates */
  weaknessesVsTmates: string[];
  /** Verdict: who should pick TMates */
  verdictTmates: string;
  /** Verdict: who should pick the competitor */
  verdictCompetitor: string;
  /** Key risk/red flag the consumer should know about the competitor */
  competitorRedFlag?: string;
  /** Reason TMates falls short vs this competitor (honesty signal for E-E-A-T) */
  tmatesShortcoming: string;
  /** Cluster for RelatedGuides (compare | tirzepatide | semaglutide) */
  cluster?: 'compare' | 'tirzepatide' | 'semaglutide';
}

export function TMatesCompareTemplate({ competitor }: { competitor: CompetitorProfile }) {
  const tmatesAff = buildGlp1AffiliateUrl('tmates', `tmates-vs-${competitor.pageSlug}`);
  const competitorAff = competitor.slug
    ? buildGlp1AffiliateUrl(competitor.slug, `tmates-vs-${competitor.pageSlug}`)
    : null;
  const cluster = competitor.cluster || 'compare';

  return (
    <GLP1Layout>
      <GLP1Header />
      <MedicalDisclaimerBanner />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/compare" className="hover:text-blue-600">Compare</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">TMates vs {competitor.name}</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          TMates vs {competitor.name} 2026: Which Compounded GLP-1 Provider Wins?
        </h1>
        <p className="text-gray-600 mb-2">
          Updated May 2026 · Pricing verified directly from provider sites and Trustpilot/BBB filings
        </p>
        <EditorialReviewBox />

        {/* Quick verdict */}
        <div className="my-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border-2 border-blue-300 bg-blue-50 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="text-blue-600" size={22} />
              <h2 className="font-bold text-blue-900 text-xl">Pick TMates if:</h2>
            </div>
            <p className="text-blue-900 text-sm leading-relaxed">{competitor.verdictTmates}</p>
            {tmatesAff && (
              <a
                href={tmatesAff}
                target="_blank"
                rel="sponsored noopener"
                className="inline-flex items-center gap-2 mt-4 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                See TMates Pricing <ArrowRight size={16} />
              </a>
            )}
          </div>
          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="text-emerald-600" size={22} />
              <h2 className="font-bold text-emerald-900 text-xl">Pick {competitor.name} if:</h2>
            </div>
            <p className="text-emerald-900 text-sm leading-relaxed">{competitor.verdictCompetitor}</p>
            {competitorAff && (
              <a
                href={competitorAff}
                target="_blank"
                rel="sponsored noopener"
                className="inline-flex items-center gap-2 mt-4 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                See {competitor.name} Pricing <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-4 font-bold text-gray-900">Factor</th>
                  <th className="p-4 font-bold text-blue-700">TMates</th>
                  <th className="p-4 font-bold text-emerald-700">{competitor.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-semibold text-gray-700">Compounded Semaglutide</td>
                  <td className="p-4 text-gray-900">$158–$249/mo (flat across doses)</td>
                  <td className="p-4 text-gray-900">{competitor.semaPrice}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700">Compounded Tirzepatide</td>
                  <td className="p-4 text-gray-900">$167–$297/mo (flat across doses)</td>
                  <td className="p-4 text-gray-900">{competitor.tirzPrice}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700">503A Pharmacy</td>
                  <td className="p-4 text-gray-900">U.S. 503A (specific partner not publicly disclosed)</td>
                  <td className="p-4 text-gray-900">{competitor.pharmacyDisclosure}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700">Trustpilot</td>
                  <td className="p-4 text-gray-900">3.2/5 (low review volume)</td>
                  <td className="p-4 text-gray-900">{competitor.trustpilot}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700">Cancel Policy</td>
                  <td className="p-4 text-gray-900">Cancel anytime, no contract</td>
                  <td className="p-4 text-gray-900">{competitor.cancelPolicy}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700">Pricing Model</td>
                  <td className="p-4 text-gray-900">Same flat price across all doses (rare in industry)</td>
                  <td className="p-4 text-gray-900">{competitor.positioning}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Where competitor wins */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where {competitor.name} Beats TMates
          </h2>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <ul className="space-y-3">
              {competitor.strengthsVsTmates.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-emerald-900 text-sm">
                  <Check className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Where TMates wins */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where TMates Beats {competitor.name}
          </h2>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <ul className="space-y-3">
              {competitor.weaknessesVsTmates.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-blue-900 text-sm">
                  <Check className="text-blue-600 shrink-0 mt-0.5" size={16} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Honesty box: where TMates falls short */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Honest Take: Where TMates Falls Short
          </h2>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
              <p className="text-amber-900 text-sm leading-relaxed">
                {competitor.tmatesShortcoming}
              </p>
            </div>
          </div>
        </section>

        {/* Risk box: competitor red flag */}
        {competitor.competitorRedFlag && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Red Flag to Know About {competitor.name}
            </h2>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <div className="flex items-start gap-2">
                <X className="text-red-600 shrink-0 mt-0.5" size={20} />
                <p className="text-red-900 text-sm leading-relaxed">
                  {competitor.competitorRedFlag}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="mb-10 grid md:grid-cols-2 gap-4">
          {tmatesAff && (
            <a
              href={tmatesAff}
              target="_blank"
              rel="sponsored noopener"
              className="rounded-2xl border-2 border-blue-300 bg-white p-6 hover:border-blue-500 transition-colors"
            >
              <div className="font-bold text-gray-900 mb-2">TMates · From $158/mo</div>
              <div className="text-sm text-gray-600 mb-3">
                Same flat price across all doses — best for budget-conscious buyers willing to commit to 12 months.
              </div>
              <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold">
                See Pricing <ArrowRight size={14} />
              </span>
            </a>
          )}
          {competitorAff && (
            <a
              href={competitorAff}
              target="_blank"
              rel="sponsored noopener"
              className="rounded-2xl border-2 border-emerald-300 bg-white p-6 hover:border-emerald-500 transition-colors"
            >
              <div className="font-bold text-gray-900 mb-2">{competitor.name}</div>
              <div className="text-sm text-gray-600 mb-3">
                {competitor.positioning}
              </div>
              <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                See Pricing <ArrowRight size={14} />
              </span>
            </a>
          )}
        </section>
      </main>

      <RelatedGuides currentPath={`/tmates-vs-${competitor.pageSlug}`} priorityCluster={cluster} />
      <StickyMobileCTA
        href={tmatesAff}
        brandName="TMates"
        pricePitch="Compounded semaglutide & tirzepatide from $158/mo (flat across doses)"
      />
      <GLP1Footer />
    </GLP1Layout>
  );
}
