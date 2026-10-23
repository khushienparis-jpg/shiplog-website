/**
 * Grey box standing in for a visual. The label says what the final visual will show.
 */
export function Placeholder({
  label,
  className = "",
  ratio = "aspect-[16/10]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex w-full items-center justify-center rounded-2xl border border-dashed border-[#9e9e9e] bg-wf-box p-6 text-center ${ratio} ${className}`}
    >
      <span aria-hidden className="max-w-md font-mono text-xs leading-relaxed text-[#262626] sm:text-[13px]">
        [{label}]
      </span>
    </div>
  );
}

/** Grey bars standing in for body copy that is not written yet. */
export function TextBlock({ lines = 3, label }: { lines?: number; label?: string }) {
  return (
    <div className="space-y-2" role="img" aria-label={label ?? "Body copy to come"}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 rounded bg-wf-box" style={{ width: i === lines - 1 ? "60%" : "100%" }} />
      ))}
      {label ? <p className="pt-1 font-mono text-xs text-wf-muted">[{label}]</p> : null}
    </div>
  );
}
