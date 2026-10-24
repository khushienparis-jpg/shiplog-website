"use client";

import { useState } from "react";
import { Placeholder } from "./Placeholder";

/** Segment view vs Shiplog view. Two state switch over one placeholder. */
export function ViewToggle({
  options,
}: {
  options: { label: string; placeholder: string; caption: string }[];
}) {
  const [active, setActive] = useState(1);
  const current = options[active];
  return (
    <div>
      <div role="group" aria-label="Choose a view" className="inline-flex rounded-full border border-line bg-white p-1">
        {options.map((opt, i) => (
          <button
            key={opt.label}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={`min-h-11 rounded-full px-4 py-2 text-sm font-medium ${
              i === active ? "bg-ink text-white" : "text-graphite hover:bg-mist hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="mt-6" aria-live="polite">
        <Placeholder label={current.placeholder} ratio="aspect-[4/3] sm:aspect-[21/9]" />
        <p className="mt-3 font-mono text-xs text-stone">{current.caption}</p>
      </div>
    </div>
  );
}
