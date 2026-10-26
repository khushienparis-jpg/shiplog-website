"use client";

import { Activity, GitBranch, Send } from "lucide-react";
import { useState } from "react";

const leaks = [
  {
    id: "activation",
    label: "Activation",
    line: "New users stall before first value. Ada gets them past it.",
    signal: "312 new users stuck at “invite a teammate”",
    decision: "Show a one click invite, day 2",
    action: "In app: “Bring your team in. It takes 10 seconds.”",
  },
  {
    id: "adoption",
    label: "Adoption",
    line: "Your best accounts use features the rest never open.",
    signal: "1,240 accounts never opened reports",
    decision: "Guide them to the report top accounts use",
    action: "Email: “The report your best customers check every Monday.”",
  },
  {
    id: "retention",
    label: "Retention",
    line: "Accounts go quiet 60 days before they cancel. Ada acts first.",
    signal: "58 accounts with no login in 14 days",
    decision: "Win them back with what changed since",
    action: "Email: “3 things you missed while you were away.”",
  },
  {
    id: "expansion",
    label: "Expansion",
    line: "Teams hit their limit. Ada offers the upgrade on time.",
    signal: "142 accounts at their seat limit",
    decision: "Offer Pro now, not at renewal",
    action: "In app: “You’re out of seats. Add 5 on Pro.”",
  },
];

/** One leak per tab, shown as signal, decision, action. */
export function LeakTabs() {
  const [active, setActive] = useState(3);
  const l = leaks[active];
  const rows = [
    { Icon: Activity, tag: "Signal", text: l.signal, tint: "bg-sky-tint", dot: "bg-sky" },
    { Icon: GitBranch, tag: "Decision", text: l.decision, tint: "bg-iris-tint", dot: "bg-iris" },
    { Icon: Send, tag: "Action", text: l.action, tint: "bg-coral-tint", dot: "bg-coral" },
  ];
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
      <div>
        <div role="tablist" aria-label="Where revenue leaks" className="flex flex-wrap gap-2">
          {leaks.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
                i === active ? "border-ink bg-ink text-white" : "border-line bg-white text-graphite hover:border-fog hover:text-ink"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <p key={l.id} className="fade-up mt-6 text-xl font-medium text-ink sm:text-2xl">{l.line}</p>
      </div>

      <div role="tabpanel" aria-label={l.label} className="dot-grid rounded-[32px] border border-line bg-mist p-5 sm:p-8">
        <ol key={l.id} className="space-y-3">
          {rows.map((r, i) => (
            <li
              key={r.tag}
              className="fade-up flex items-center gap-4 rounded-[20px] border border-line bg-white p-4 shadow-[var(--shadow-soft)]"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span aria-hidden className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${r.tint} text-ink`}>
                <r.Icon size={18} strokeWidth={1.5} />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.02em] text-stone">
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${r.dot}`} />
                  {r.tag}
                </span>
                <span className="mt-0.5 block text-[15px] text-ink">{r.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
