"use client";

import { Code, Database, Palette } from "lucide-react";
import { useState } from "react";
import { BloomSymbol } from "../Bloom";

const tabs = [
  { id: "segment", label: "Segments", Icon: Database, team: "No data request", ask: "Pro accounts, 3+ seats, no login in 14 days" },
  { id: "email", label: "Emails", Icon: Palette, team: "No designer", ask: "Make it warmer and add our logo" },
  { id: "liquid", label: "Personalisation", Icon: Code, team: "No Liquid", ask: "Greet them by first name" },
];

function SegmentResult() {
  return (
    <div>
      <p className="font-mono text-xs text-stone">From PostHog and HubSpot</p>
      <p className="mt-1 text-2xl font-semibold tracking-[-0.01em] text-ink">87 accounts match</p>
      <div aria-hidden className="mt-4 grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1.5">
        {Array.from({ length: 90 }).map((_, i) => (
          <span key={i} className={`aspect-square rounded-full ${i < 87 ? "bg-iris" : "bg-line"}`} />
        ))}
      </div>
    </div>
  );
}

function EmailResult() {
  return (
    <div className="rounded-[12px] border border-line">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span aria-hidden className="h-6 w-6 rounded-full bg-coral-tint" />
        <span className="text-sm font-medium text-ink">Your brand</span>
      </div>
      <div className="space-y-2 p-4">
        <p className="font-semibold text-ink">We saved you a seat.</p>
        <div className="h-2.5 w-full rounded-full bg-mist" />
        <div className="h-2.5 w-4/5 rounded-full bg-mist" />
        <span className="mt-2 inline-flex h-8 items-center rounded-full bg-coral px-4 text-xs font-medium text-white">Add seats</span>
      </div>
    </div>
  );
}

function LiquidResult() {
  return (
    <div>
      <pre className="overflow-x-auto rounded-[12px] bg-ink p-4 font-mono text-xs leading-relaxed text-white">
        <code>{"Hi {{ customer.first_name | default: \"there\" }},"}</code>
      </pre>
      <ul className="mt-4 space-y-2 font-mono text-xs">
        <li className="flex justify-between gap-4"><span className="text-stone">Maya</span><span className="text-ink">Hi Maya,</span></li>
        <li className="flex justify-between gap-4"><span className="text-stone">no name on file</span><span className="text-ink">Hi there,</span></li>
      </ul>
    </div>
  );
}

/** Ask in plain words, Ada does the specialist work. */
export function UnblockDemo() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
      <ul className="space-y-3" role="tablist" aria-label="What Ada does for you">
        {tabs.map((x, i) => (
          <li key={x.id}>
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`flex w-full items-center gap-4 rounded-[20px] border p-4 text-left transition-colors ${
                i === active ? "border-iris bg-white shadow-[var(--shadow-soft)]" : "border-line bg-white/60 hover:bg-white"
              }`}
            >
              <span aria-hidden className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-line ${i === active ? "bg-iris-tint text-iris" : "bg-mist text-stone"}`}>
                <x.Icon size={20} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block font-semibold text-ink">{x.label}</span>
                <span className="block text-sm text-stone">{x.team}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div role="tabpanel" aria-label={t.label} className="dot-grid rounded-[32px] border border-line bg-mist p-5 sm:p-8">
        <div key={t.id} className="fade-up space-y-4">
          <div className="ml-auto w-fit max-w-[90%] rounded-[20px] rounded-br-md bg-ink px-4 py-3 text-sm text-white">{t.ask}</div>
          <div className="rounded-[20px] border border-line bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-stone">
              <BloomSymbol size={14} variant="bloom" /> Ada
            </div>
            {t.id === "segment" ? <SegmentResult /> : t.id === "email" ? <EmailResult /> : <LiquidResult />}
          </div>
        </div>
      </div>
    </div>
  );
}
