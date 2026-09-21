'use client';

import { IntentCTA } from '@/components/growth/IntentCTA';

// =============================================================================
// ArticleCTA — in-body conversion box for blog posts.
// Same block used at the end of app/blog/pge-vs-sce-vs-sdge-rates-compared,
// factored out so every post can drop in one <ArticleCTA /> instead of
// relying on the header button alone.
//
// 17 Sep 2026: the box itself moved to components/growth/IntentCTA so the
// heading, body and button label follow the page's own intent (bill review,
// assistance, competing quote, before-you-sign) instead of one generic ask, and
// so `cta_click` carries `cta_variant`. The article_cta event parameter and
// heading/body overrides are preserved. Corrected 20 Sep: the box no longer
// claims the solar-inquiry DOM id; that anchor belongs to an actual form.
// =============================================================================

interface ArticleCTAProps {
  heading?: string;
  body?: string;
}

export function ArticleCTA({ heading, body }: ArticleCTAProps) {
  return <IntentCTA cta="article_cta" heading={heading} body={body} />;
}
