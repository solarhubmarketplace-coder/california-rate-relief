// Social-card metadata for California Rate Relief pages that set their own
// title and description.
//
// A page that exports `openGraph` without `twitter` inherits the root layout's
// Twitter block, so twitter:title showed the site-wide default instead of the
// page's own title. A page's `openGraph` also replaces the root one outright, so
// the root share image was dropped. Pass the same title and description used
// for the page's <title> and meta description to keep all three in step.
//
// Same card and dimensions as the root layout and src/lib/city-pages.ts.
export const CRR_SOCIAL_CARD = {
  url: '/crr-social-card',
  width: 1200,
  height: 630,
  alt: 'California Rate Relief: understand your bill and explore your solar options',
};

export function crrTwitter(title: string, description: string) {
  return {
    card: 'summary_large_image' as const,
    title,
    description,
    images: [CRR_SOCIAL_CARD.url],
  };
}
