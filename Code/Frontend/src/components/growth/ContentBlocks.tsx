import Link from 'next/link';
import type { Block, Inline } from '@/lib/city-cost-content';

// Renders the content model from src/lib/city-cost-content.ts. The city-page
// gate reads the same blocks as plain text, so what is gated is what renders.
// Server component: no state, no browser code.

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export function InlineParts({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === 'string') return <span key={index}>{part}</span>;
        if ('strong' in part) return <strong key={index}>{part.strong}</strong>;
        return part.external ? (
          <a key={index} href={part.href} target='_blank' rel='noopener noreferrer' className={link}>
            {part.text}
          </a>
        ) : (
          <Link key={index} href={part.href} className={link}>
            {part.text}
          </Link>
        );
      })}
    </>
  );
}

export function ContentBlock({ block, lead = false }: { block: Block; lead?: boolean }) {
  switch (block.kind) {
    case 'p':
      return (
        <p
          className={
            block.small
              ? 'text-foreground/60 text-sm'
              : lead
                ? 'text-lg text-foreground/85 leading-relaxed'
                : undefined
          }
        >
          <InlineParts parts={block.parts} />
        </p>
      );
    case 'ul':
      return (
        <ul className='list-disc pl-6 space-y-2'>
          {block.items.map((item, index) => (
            <li key={index}>
              <InlineParts parts={item} />
            </li>
          ))}
        </ul>
      );
    case 'stats':
      return (
        <dl className='not-prose my-6 grid grid-cols-2 gap-3 sm:grid-cols-4'>
          {block.items.map((item) => (
            <div key={item.label} className='rounded-xl border border-border bg-card p-3'>
              <dt className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>{item.label}</dt>
              <dd className='mt-1 text-lg font-bold text-foreground'>{item.value}</dd>
              <dd className='mt-0.5 text-xs text-muted-foreground'>{item.note}</dd>
            </div>
          ))}
        </dl>
      );
    case 'table':
      return (
        <div className='not-prose my-6 overflow-x-auto rounded-xl border border-border' role='region' aria-label={block.caption} tabIndex={0}>
          <table className='w-full text-sm'>
            <caption className='px-4 py-3 text-left text-sm text-muted-foreground'>{block.caption}</caption>
            <thead className='bg-muted/50'>
              <tr>
                {block.head.map((head, index) => (
                  <th key={index} scope='col' className='px-3 py-2 text-left font-semibold text-foreground'>
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className='border-t border-border'>
                  <th scope='row' className='px-3 py-2 text-left font-normal text-foreground/85'>
                    {row[0]}
                  </th>
                  {row.slice(1).map((value, index) => (
                    <td key={index} className='whitespace-nowrap px-3 py-2 text-foreground'>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
