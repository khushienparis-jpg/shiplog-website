import { Check } from "lucide-react";
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
      className={`flex h-full flex-col rounded-[20px] border bg-white p-6 sm:p-8 ${highlight ? "border-iris shadow-[var(--shadow-soft)] ring-2 ring-iris-tint" : "border-line"}`}
    >
      <h2 className="text-xl sm:text-[22px]">{name}</h2>
      <p className="mt-2 text-graphite">{tagline}</p>
      <div className="mt-6 rounded-[12px] border border-dashed border-fog bg-mist px-4 py-3 font-mono text-xs text-stone">
        [Price or &quot;Custom&quot;: decide before launch]
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {includes.map((item) => (
          <li key={item} className="flex gap-3">
            <Check aria-hidden size={16} strokeWidth={1.75} className="mt-1 shrink-0 text-iris" />
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
