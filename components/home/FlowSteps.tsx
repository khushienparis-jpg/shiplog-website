"use client";

import { useEffect, useState } from "react";

const steps = [
  { label: "Connect", line: "PostHog, HubSpot, Customer.io.", tint: "bg-sky-tint", dot: "bg-sky" },
  { label: "Read", line: "Ada reads every account.", tint: "bg-sky-tint", dot: "bg-sky" },
  { label: "Decide", line: "She picks the next best action.", tint: "bg-iris-tint", dot: "bg-iris" },
  { label: "Approve", line: "You approve. She sends.", tint: "bg-coral-tint", dot: "bg-coral" },
  { label: "Measure", line: "Upgrades, not opens.", tint: "bg-mint-tint", dot: "bg-mint" },
];

/** Five steps that light up in turn. Click a step to hold it. */
export function FlowSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 1800);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div>
      <div aria-hidden className="relative mb-6 hidden h-1.5 rounded-full bg-line lg:block">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-iris transition-[width] duration-500"
          style={{ width: `${((active + 1) / steps.length) * 100}%` }}
        />
      </div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.label}>
            <button
              type="button"
              aria-pressed={i === active}
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              className={`flex h-full w-full flex-col items-start rounded-[20px] border p-5 text-left transition-all ${
                i === active ? "border-line bg-white shadow-[var(--shadow-soft)]" : "border-transparent bg-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-xs font-medium text-ink ${s.tint}`}>
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                {i + 1} · {s.label}
              </span>
              <span className="mt-3 font-medium text-ink">{s.line}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
