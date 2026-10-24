import { BloomSymbol } from "./Bloom";

/**
 * Branded slot for a visual that is not designed yet: Mist panel, dot grid,
 * 32 px corners, mono label in Stone saying what the final visual will show.
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
      className={`dot-grid relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[32px] border border-line bg-white p-6 text-center ${ratio} ${className}`}
    >
      <BloomSymbol size={20} className="opacity-25" />
      <span aria-hidden className="max-w-sm font-mono text-xs leading-relaxed text-stone">
        {label}
      </span>
    </div>
  );
}

/** Soft bars standing in for body copy that is not written yet. */
export function TextBlock({ lines = 3, label }: { lines?: number; label?: string }) {
  return (
    <div className="space-y-2" role="img" aria-label={label ?? "Body copy to come"}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 rounded-full bg-line" style={{ width: i === lines - 1 ? "60%" : "100%" }} />
      ))}
      {label ? <p className="pt-1 font-mono text-xs text-stone">[{label}]</p> : null}
    </div>
  );
}

/** Small inline marker for copy or data still to confirm. */
export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-dashed border-fog bg-white px-2.5 py-0.5 font-mono text-xs text-stone">
      {children}
    </span>
  );
}
