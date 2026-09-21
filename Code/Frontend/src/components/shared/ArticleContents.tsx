export type ArticleContentsItem = {
  id: string;
  label: string;
};

export function ArticleContents({ items }: { items: ArticleContentsItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="my-8 rounded-xl border border-border bg-muted/20 p-5"
    >
      <h2 className="text-base font-bold text-foreground">On this page</h2>
      <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
