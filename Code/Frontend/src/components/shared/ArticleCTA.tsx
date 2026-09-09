import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// =============================================================================
// ArticleCTA — in-body conversion box for blog posts.
// Same block used at the end of app/blog/pge-vs-sce-vs-sdge-rates-compared,
// factored out so every post can drop in one <ArticleCTA /> instead of
// relying on the header button alone.
// =============================================================================

interface ArticleCTAProps {
  heading?: string;
  body?: string;
}

export function ArticleCTA({
  heading = 'Curious About Your Savings Potential?',
  body = "The California Rate Relief Program offers a quick eligibility check for PG&E, SCE, and SDG&E customers. 60 seconds, no obligation.",
}: ArticleCTAProps) {
  return (
    <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
      <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
        {heading}
      </h3>
      <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>{body}</p>
      <Link
        href='/#qualify'
        className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
      >
        Check My Eligibility
        <ArrowRight className='h-4 w-4' />
      </Link>
    </div>
  );
}
