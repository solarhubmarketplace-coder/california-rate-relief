import Link from 'next/link';

// =============================================================================
// AiUseStatement — how California Rate Relief uses AI and checks its figures.
// Rendered on /editorial-policy and on the CRR /methodology page.
//
// Every sentence here must stay true of how pages are actually made:
//   - drafts are written with AI assistance;
//   - every number is checked against the primary source cited on the page,
//     and the page shows the date it was checked;
//   - Chad Simpson approves each release before it goes live;
//   - errors go to the contact address and are logged on /corrections.
// If the process changes, change this text in the same release.
// =============================================================================

export const AI_USE_HEADING = 'How we use AI, and how figures are checked';

const CONTACT_EMAIL = 'info@ratereliefca.com';

export function AiUseStatement({ linkClassName = '' }: { linkClassName?: string }) {
  return (
    <>
      <p>
        Drafts on California Rate Relief are written with AI assistance.
      </p>
      <p className="mt-3">
        Every number on a page is checked against the primary source cited on that page, such as
        a utility tariff, a CPUC decision, a statute or a CSLB record, and the page shows the date
        it was checked.
      </p>
      <p className="mt-3">
        Chad Simpson, the editor, approves each release before it goes live.
      </p>
      <p className="mt-3">
        If you find an error, email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
          {CONTACT_EMAIL}
        </a>{' '}
        with the page address, or use the{' '}
        <Link href="/contact" className={linkClassName}>
          contact page
        </Link>
        . Material fixes are logged on the{' '}
        <Link href="/corrections" className={linkClassName}>
          corrections page
        </Link>
        .
      </p>
    </>
  );
}
