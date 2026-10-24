import Link from "next/link";

/** Number first. Customers stay anonymous: type only, never a name or logo. */
export function StoryCard({
  number,
  type,
  story,
  href,
  linkLabel = "Read the story",
  wide = false,
}: {
  number: string;
  type: string;
  story: string;
  href?: string;
  linkLabel?: string;
  wide?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-[20px] border border-line bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8 ${
        wide ? "lg:flex-row lg:items-center lg:gap-12" : ""
      }`}
    >
      <div className={wide ? "lg:w-1/3" : ""}>
        <p className="font-mono text-[44px] font-medium leading-none tracking-[-0.02em] text-ink sm:text-[56px]">{number}</p>
        <p className="mt-4"><span className="inline-flex items-center gap-1.5 rounded-full bg-mint-tint px-2.5 py-1 font-mono text-xs font-medium text-ink"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mint" />{type}</span></p>
      </div>
      <div className={`mt-4 flex flex-1 flex-col ${wide ? "lg:mt-0" : ""}`}>
        <p className={`text-graphite ${wide ? "text-lg" : ""}`}>{story}</p>
        {href ? (
          <Link href={href} className="mt-5 inline-flex items-center gap-1 font-medium text-iris underline-offset-4 hover:underline">
            {linkLabel}
            <span className="sr-only">: {type}</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
