import { Button } from "./ui";

export function PlanCard({
  name,
  tagline,
  includes,
  cta,
  highlight = false,
}: {
  name: string;
  tagline: string;
  includes: string[];
  cta: { label: string; href: string; primary: boolean };
  highlight?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-wf-bg p-6 sm:p-8 ${highlight ? "border-2 border-wf-ink" : "border-wf-box"}`}
    >
      <h2 className="text-xl sm:text-[22px]">{name}</h2>
      <p className="mt-2 text-wf-muted">{tagline}</p>
      <div className="mt-6 rounded-lg bg-wf-box px-4 py-3 font-mono text-xs text-[#262626]">
        [Price or &quot;Custom&quot;: decide before launch]
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {includes.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wf-ink" />
            {item}
          </li>
        ))}
      </ul>
      <Button href={cta.href} variant={cta.primary ? "primary" : "secondary"} className="mt-8 w-full">
        {cta.label}
      </Button>
    </article>
  );
}
