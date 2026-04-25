import type { ReactElement } from 'react';

// =============================================================================
// ArticleJsonLd — drop-in Article schema with author + reviewedBy + dates
// =============================================================================
// Emits a properly nested schema.org Article (or Review for review-style
// content) JSON-LD with:
//   - author Person (Chad Simpson)
//   - reviewedBy Person (Chad Simpson) — same person, signals editorial review
//   - publisher Organization (per-domain)
//   - datePublished + dateModified for freshness
//   - mainEntityOfPage hint
//
// Use on:
//   - CRR blog posts
//   - CRR installer reviews (variant="Review", with itemReviewed)
//   - GRH product reviews (variant="Review", with itemReviewed)
//   - AHB benefits-of pages (variant="MedicalWebPage")
// =============================================================================

type SchemaVariant = 'Article' | 'Review' | 'MedicalWebPage';

export interface ArticleJsonLdProps {
  /** Variant: Article | Review | MedicalWebPage */
  variant?: SchemaVariant;
  /** Domain — used for publisher Organization */
  domain: 'crr' | 'grh' | 'shg' | 'ahb';
  /** Headline (typically the page h1) */
  headline: string;
  /** Canonical URL of this article */
  url: string;
  /** ISO-8601 publish date — e.g., '2026-04-22' */
  datePublished: string;
  /** ISO-8601 last-modified date — e.g., '2026-04-24' */
  dateModified: string;
  /** Optional cover image URL (absolute) */
  image?: string;
  /** Short description */
  description?: string;
  /** Review-only: thing being reviewed */
  itemReviewed?: { type: 'Product' | 'LocalBusiness' | 'Organization'; name: string; brand?: string };
  /** Review-only: rating value (e.g. 4.2) */
  ratingValue?: number;
  /** Review-only: best/worst rating bounds (defaults 0–5) */
  bestRating?: number;
  worstRating?: number;
}

const PUBLISHER: Record<string, { name: string; url: string; logo: string }> = {
  crr: { name: 'California Rate Relief', url: 'https://ratereliefca.com', logo: 'https://ratereliefca.com/img/logo.svg' },
  grh: { name: 'GreenReviewsHub', url: 'https://greenreviewshub.com', logo: 'https://greenreviewshub.com/img/logo.svg' },
  shg: { name: 'SecureHomeGear', url: 'https://securehomegear.com', logo: 'https://securehomegear.com/img/logo.svg' },
  ahb: { name: 'At Home Biohacking', url: 'https://athomebiohacking.com', logo: 'https://athomebiohacking.com/img/logo.svg' },
};

export function ArticleJsonLd(props: ArticleJsonLdProps): ReactElement {
  const {
    variant = 'Article',
    domain,
    headline,
    url,
    datePublished,
    dateModified,
    image,
    description,
    itemReviewed,
    ratingValue,
    bestRating = 5,
    worstRating = 0,
  } = props;

  const publisher = PUBLISHER[domain];
  const authorRef = `${publisher.url}/author/chad-simpson#person`;

  const author = {
    '@type': 'Person',
    '@id': authorRef,
    name: 'Chad Simpson',
    url: `${publisher.url}/author/chad-simpson`,
    jobTitle: `Editor at ${publisher.name}`,
  };

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': variant,
    headline,
    url,
    datePublished,
    dateModified,
    inLanguage: 'en-US',
    author,
    creator: author,
    reviewedBy: author,
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      url: publisher.url,
      logo: { '@type': 'ImageObject', url: publisher.logo },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  if (description) base.description = description;
  if (image) base.image = image;

  if (variant === 'Review' && itemReviewed) {
    base.itemReviewed = { '@type': itemReviewed.type, name: itemReviewed.name, ...(itemReviewed.brand ? { brand: itemReviewed.brand } : {}) };
    if (typeof ratingValue === 'number') {
      base.reviewRating = {
        '@type': 'Rating',
        ratingValue,
        bestRating,
        worstRating,
      };
    }
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(base) }}
    />
  );
}
