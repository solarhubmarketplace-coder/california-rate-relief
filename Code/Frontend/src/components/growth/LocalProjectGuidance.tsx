import Link from 'next/link';
import { getLocalProjectGuidance } from '@/data/local-project-guidance';

const internalLink =
  'font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export function LocalProjectGuidance({ citySlug }: { citySlug: string }) {
  const guidance = getLocalProjectGuidance(citySlug);
  if (!guidance) return null;

  const headingId = `local-project-guidance-${citySlug}`;

  return (
    <section
      aria-labelledby={headingId}
      className='not-prose my-10 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-7'
    >
      <div className='max-w-2xl'>
        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary'>
          Before you compare proposals
        </p>
        <h2 id={headingId} className='text-2xl font-bold tracking-tight text-foreground'>
          The {guidance.city} project checks that change the decision
        </h2>
        <p className='mt-3 text-base leading-7 text-foreground/80'>{guidance.intro}</p>
      </div>

      <div className='mt-7 grid gap-7 lg:grid-cols-2'>
        <div>
          <h3 className='text-lg font-semibold text-foreground'>Ask the same three questions</h3>
          <ol className='mt-3 space-y-3 text-sm leading-6 text-foreground/80'>
            {guidance.quoteQuestions.map((question, index) => (
              <li key={question} className='flex gap-3'>
                <span
                  aria-hidden='true'
                  className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground'
                >
                  {index + 1}
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className='text-lg font-semibold text-foreground'>Local checks</h3>
          <div className='mt-3 space-y-4'>
            {guidance.localChecks.map((check) => (
              <div key={check.title}>
                <h4 className='font-semibold text-foreground'>{check.title}</h4>
                <p className='mt-1 text-sm leading-6 text-foreground/80'>{check.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-7 border-t border-primary/15 pt-5'>
        <h3 className='text-sm font-semibold text-foreground'>Related decisions</h3>
        <ul className='mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm'>
          {guidance.related.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={internalLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <details className='mt-5 border-t border-primary/15 pt-4 text-xs leading-5 text-foreground/65'>
        <summary className='cursor-pointer font-semibold text-foreground/80'>Local sources and limits</summary>
        <ul className='mt-3 space-y-3 [overflow-wrap:anywhere]'>
          {guidance.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target='_blank'
                rel='noopener noreferrer'
                className={internalLink}
              >
                {source.label}
              </a>{' '}
              — verified {source.verifiedAt}. {source.scope}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
