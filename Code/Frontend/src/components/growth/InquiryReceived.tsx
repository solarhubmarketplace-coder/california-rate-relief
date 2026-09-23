'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import {
  INQUIRY_RECEIVED_COPY as COPY,
  INQUIRY_RECEIVED_GUIDES,
} from '@/lib/cta-intent';

/**
 * What-happens-next panel shown after a confirmed intake submission.
 *
 * Display only: it fires no analytics event, so it can never add to
 * generate_lead. Moves focus to itself on mount so a keyboard or screen-reader
 * visitor lands on the confirmation instead of on a form that no longer exists.
 */
export function InquiryReceived({
  reference,
  received,
  contact,
  headingLevel = 'h3',
  className = '',
}: {
  /** submission_id confirmed by the API. */
  reference?: string;
  /** One sentence: what the form sent. */
  received: string;
  /** One sentence: who may get in touch, matching the form's consent text. */
  contact: string;
  headingLevel?: 'h2' | 'h3';
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
    ref.current?.scrollIntoView({ block: 'nearest' });
  }, []);
  const Heading = headingLevel;
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      className={`rounded-xl border border-border bg-card p-5 text-left text-card-foreground outline-none md:p-6 ${className}`}
    >
      <div className="flex items-start gap-3">
        <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-status-success" aria-hidden="true" />
        <Heading className="text-xl font-bold text-foreground">{COPY.heading}</Heading>
      </div>

      <p className="mt-4 text-sm font-semibold text-foreground">{COPY.receivedLabel}</p>
      <p className="mt-1 text-sm text-foreground/80">{received}</p>

      <p className="mt-4 text-sm font-semibold text-foreground">{COPY.nextLabel}</p>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-foreground/80">
        <li>{contact}</li>
        <li>
          {COPY.noObligation}{' '}
          <Link href="/how-we-make-money" className="font-medium text-primary underline">
            {COPY.paidLink}
          </Link>
          .
        </li>
      </ul>

      <p className="mt-4 text-sm font-semibold text-foreground">{COPY.guidesLabel}</p>
      <ul className="mt-1 space-y-1 text-sm">
        {INQUIRY_RECEIVED_GUIDES.map((guide) => (
          <li key={guide.href}>
            <Link
              href={guide.href}
              className="inline-flex min-h-[44px] items-center font-medium text-primary underline"
            >
              {guide.label}
            </Link>
          </li>
        ))}
      </ul>

      {reference && (
        <p className="mt-4 text-xs text-muted-foreground">
          {COPY.referenceLabel}: <span className="break-all font-mono">{reference}</span>
        </p>
      )}
    </div>
  );
}
