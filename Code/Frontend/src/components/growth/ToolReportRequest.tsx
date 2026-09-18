'use client';

import { useState } from 'react';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import { SolarInquiry } from './SolarInquiry';
import type { CtaVariant } from '@/lib/cta-intent';

// =============================================================================
// ToolReportRequest — the optional, attributed ask that sits under a calculator.
//
// The calculators stay fully usable with no contact details: this block renders
// BELOW the result, is collapsed by default, and nothing about the tool depends
// on it. Opening it reveals the ordinary two-step intake form, which posts to
// the same /intake endpoint through the same contract — no second ingest path.
// What makes these submissions separable afterwards is `source_tool` in
// qualification_data plus a `tool_<id>` utm_content marker when no real campaign
// value is present.
//
// COPY NOTE (DRAFT): the requested wording for the trigger was "Email me this
// comparison". There is no visitor-facing email path today — the only outbound
// mail on a submission is the owner notification outbox — so the default label
// says what actually happens instead of promising a delivery. Swapping the label
// is a one-line change once a send-back path exists and Chad approves it.
// =============================================================================

export function ToolReportRequest({
  sourceTool,
  variant = 'bill',
  topic,
  sectionId,
  label = 'Send me this comparison',
  description =
    'Optional. Your entries stay on this page. Opening this sends your utility, your monthly bill and your contact details to California Rate Relief as a referral request, along with a note of which comparison you used.',
}: {
  /** Stable id stored on the submission, e.g. 'pge_bill_comparison'. */
  sourceTool: string;
  variant?: CtaVariant;
  topic: string;
  sectionId?: string;
  label?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = sectionId || `tool-report-${sourceTool.replace(/_/g, '-')}`;
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">{label}</h3>
      <p className="mt-2 text-sm text-slate-700">{description}</p>
      {open ? (
        <SolarInquiry
          variant={variant}
          topic={topic}
          sourceTool={sourceTool}
          sectionId={id}
          showTrustBlock
        />
      ) : (
        <button
          type="button"
          aria-expanded={false}
          aria-controls={id}
          onClick={() => {
            setOpen(true);
            trackEvent('cta_click', {
              cta: 'tool_report_request',
              cta_variant: variant,
              source_tool: sourceTool,
              destination: `#${id}`,
            });
          }}
          className="mt-4 rounded-lg border border-emerald-800 px-4 py-2 text-sm font-semibold text-emerald-900"
        >
          {label}
        </button>
      )}
    </div>
  );
}
