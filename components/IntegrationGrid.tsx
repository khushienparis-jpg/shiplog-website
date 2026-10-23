"use client";

import Link from "next/link";
import { useState } from "react";
import { integrationCategories, integrations } from "@/lib/content";

export function IntegrationGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? integrations : integrations.filter((i) => i.category === filter);
  return (
    <div>
      <div role="group" aria-label="Filter integrations" className="flex flex-wrap gap-2">
        {integrationCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
            className={`min-h-11 rounded-full border px-4 text-sm font-medium ${
              filter === c ? "border-wf-ink bg-wf-ink text-white" : "border-wf-box hover:border-wf-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} integrations shown
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((i) => (
          <li key={i.slug}>
            <Link
              href={`/integrations/${i.slug}/`}
              className="flex h-full flex-col rounded-2xl border border-wf-box p-5 hover:border-wf-ink"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-wf-box font-mono text-[10px] text-[#262626]"
              >
                [Logo]
              </span>
              <span className="mt-4 font-semibold">{i.name}</span>
              <span className="mt-1 font-mono text-xs text-wf-muted">{i.category}</span>
              <span className="mt-3 text-sm text-wf-muted">{i.does}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
