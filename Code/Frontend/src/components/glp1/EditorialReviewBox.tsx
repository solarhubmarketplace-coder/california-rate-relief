import Link from 'next/link';
import { ShieldCheck, Calendar, FileSearch } from 'lucide-react';

interface EditorialReviewBoxProps {
  /** ISO date when the page content was last editorially reviewed */
  lastReviewed: string;
  /** ISO date when pricing/data was last verified against the source */
  lastVerified?: string;
  /** Optional: reviewer name (defaults to "GLP1CompareHub Editorial Team") */
  reviewer?: string;
}

/**
 * Editorial review box — placed near the bottom of every money page.
 *
 * Critical compliance distinction:
 * We do NOT claim medical review by a licensed MD/RD because we don't
 * have one on staff. Fabricating medical credentials is an FTC violation
 * AND triggers the exact "deceptive endorsement" issue FDA flagged in
 * its March 2026 warning letters.
 *
 * Instead we are transparent: editorially reviewed for accuracy by named
 * editor, with explicit "not medical advice" language. This is more honest
 * AND more FTC-safe than the fake-doctor-photo pattern.
 */
export function EditorialReviewBox({
  lastReviewed,
  lastVerified,
  reviewer = 'GLP1CompareHub Editorial Team',
}: EditorialReviewBoxProps) {
  const formatDate = (iso: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <section className="border-t border-glp1-charcoal/10 bg-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-8">
        <div className="rounded-xl border p-5 md:p-6" style={{ backgroundColor: '#F0EBE0', borderColor: '#E5DDC8' }}>
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" style={{ color: '#0E6E5A' }} />
            <h3 className="text-base font-bold" style={{ color: '#0E2A3A' }}>
              How this page is reviewed
            </h3>
          </div>

          <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#3D5560' }}>
            <p>
              <strong>Editorially reviewed by {reviewer}.</strong> We are an independent
              affiliate publisher — we are <strong>not licensed medical providers</strong> and
              this site does not deliver medical advice. Every claim on this page is sourced
              to a verifiable origin (peer-reviewed study, FDA documentation, live brand-site
              crawl, or our Katalys partner dashboard).
            </p>

            <div className="grid gap-3 md:grid-cols-2 pt-2">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#6B7B82' }} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6B7B82' }}>
                    Last editorially reviewed
                  </div>
                  <div className="font-medium" style={{ color: '#0E2A3A' }}>
                    {formatDate(lastReviewed)}
                  </div>
                </div>
              </div>

              {lastVerified && (
                <div className="flex items-start gap-2">
                  <FileSearch className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#6B7B82' }} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6B7B82' }}>
                      Pricing/data last verified
                    </div>
                    <div className="font-medium" style={{ color: '#0E2A3A' }}>
                      {formatDate(lastVerified)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="pt-2 text-xs" style={{ color: '#6B7B82' }}>
              <strong>Affiliate disclosure:</strong> We earn a commission when you sign up
              with a provider through our links — at no extra cost to you. We do{' '}
              <strong>not</strong> rank providers by what they pay us; we rank by patient fit.{' '}
              <Link href="/affiliate-disclosure" className="underline">Full disclosure</Link>.
              Read our{' '}
              <Link href="/methodology" className="underline">methodology</Link>{' · '}
              <Link href="/medical-disclaimer" className="underline">medical disclaimer</Link>.
            </p>

            <div className="rounded-lg p-3 text-xs" style={{ backgroundColor: '#FFF8E1', color: '#7A4F00' }}>
              <strong>If you are considering a GLP-1 medication:</strong> consult a
              licensed physician familiar with your medical history. Do not start, stop,
              or change a prescription based on content from this site. Side effects,
              contraindications, and drug interactions are real and individual.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
