export type Stat = { value: string; label: string };

const cols: Record<number, string> = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3" };

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <dl className={`grid gap-6 ${cols[Math.min(stats.length, 3)]}`}>
      {stats.map((s) => (
        <div key={s.label} className="border-t-2 border-wf-ink pt-4">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-mono text-[40px] font-medium leading-none sm:text-[56px]">{s.value}</span>
            <span className="mt-2 block text-wf-muted">{s.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
