import type { ReactNode } from "react";

/** Native details/summary accordion: keyboard and screen reader friendly with no JS. */
export function FAQ({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="divide-y divide-wf-box rounded-2xl border border-wf-box">
      {items.map((item) => (
        <details key={item.q} className="group px-4 sm:px-6">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden className="font-mono text-xl transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="pb-5 text-wf-muted">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
