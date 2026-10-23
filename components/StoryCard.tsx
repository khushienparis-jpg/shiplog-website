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
      className={`flex h-full flex-col rounded-2xl border border-wf-box bg-wf-bg p-6 sm:p-8 ${
        wide ? "lg:flex-row lg:items-center lg:gap-12" : ""
      }`}
    >
      <div className={wide ? "lg:w-1/3" : ""}>
        <p className="font-mono text-[40px] font-medium leading-none sm:text-[56px]">{number}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-wider text-wf-muted">{type}</p>
      </div>
      <div className={`mt-4 flex flex-1 flex-col ${wide ? "lg:mt-0" : ""}`}>
        <p className={wide ? "text-lg" : ""}>{story}</p>
        {href ? (
          <Link href={href} className="mt-5 font-medium underline underline-offset-4 hover:no-underline">
            {linkLabel}
            <span className="sr-only">: {type}</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
