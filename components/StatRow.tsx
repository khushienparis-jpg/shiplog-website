import { TrendingUp } from "lucide-react";

export type Stat = { value: string; label: string };

const cols: Record<number, string> = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3" };

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <dl className={`grid gap-6 ${cols[Math.min(stats.length, 3)]}`}>
      {stats.map((s) => (
        <div key={s.label} className="border-t border-line pt-5">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-mono text-[44px] font-medium leading-none tracking-[-0.02em] text-ink sm:text-[64px]">{s.value}</span>
            <span className="mt-3 flex items-start gap-2 text-stone"><TrendingUp aria-hidden size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-success" />{s.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
