import type { ReactNode } from "react";
import { Plus } from "lucide-react";

/** Native details/summary accordion: keyboard and screen reader friendly with no JS. */
export function FAQ({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="divide-y divide-line rounded-[20px] border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-4 sm:px-6">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus aria-hidden size={18} strokeWidth={1.75} className="shrink-0 text-stone transition-transform group-open:rotate-45" />
          </summary>
          <div className="pb-5 text-graphite">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
