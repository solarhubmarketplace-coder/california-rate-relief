// =============================================================================
// crr-author.ts — the one author record for California Rate Relief pages
// =============================================================================
// Every CRR page shows the same visible byline: Chad Simpson, linked to his
// author page. Article structured data must name that same person, as a Person
// with a url, never the site or an Organization.
//
// There is no independent reviewer, so no CRR schema carries `reviewedBy`: a
// page reviewed by its own author is not a review. Add a reviewer here only
// when a separate, credentialed person actually reviews pages, and show that
// person on the page too.
//
// jobTitle is the title the site already uses for him ("Editor"). No other
// credential is stated anywhere, so none is added.
// =============================================================================

export const CRR_ORIGIN = 'https://ratereliefca.com';

export const CRR_AUTHOR_NAME = 'Chad Simpson';
export const CRR_AUTHOR_PATH = '/author/chad-simpson';
export const CRR_AUTHOR_URL = `${CRR_ORIGIN}${CRR_AUTHOR_PATH}`;
export const CRR_AUTHOR_ID = `${CRR_AUTHOR_URL}#person`;
export const CRR_AUTHOR_JOB_TITLE = 'Editor';

/** The schema.org Person every CRR Article names as its author. */
export const CRR_AUTHOR_PERSON = {
  '@type': 'Person',
  '@id': CRR_AUTHOR_ID,
  name: CRR_AUTHOR_NAME,
  url: CRR_AUTHOR_URL,
  jobTitle: CRR_AUTHOR_JOB_TITLE,
} as const;
