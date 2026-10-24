"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type Tab = { id: string; label: string; content: ReactNode };

/** Accessible tabs: arrow keys, Home and End move between tabs. */
export function TabSwitcher({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    let next = active;
    if (e.key === "ArrowRight") next = (active + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (active - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label={label} className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${uid}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selected ? "border-ink bg-ink text-white" : "border-line bg-white text-graphite hover:border-fog hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${uid}-panel-${tab.id}`}
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="mt-6 rounded-[20px]"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
