"use client";

import { ArrowRight, CircleCheck, RotateCcw } from "lucide-react";
import { useState, type FormEvent } from "react";
import { BloomLoader, BloomSymbol } from "../Bloom";
import { StageTag } from "../ui";

type State = "ready" | "building" | "sent";

/** Hero demo: enter a site, Ada builds a campaign, you approve it. */
export function HeroDemo() {
  const [url, setUrl] = useState("yourcompany.com");
  const [state, setState] = useState<State>("ready");

  function build(e: FormEvent) {
    e.preventDefault();
    setState("building");
    setTimeout(() => setState("ready"), 1100);
  }

  return (
    <div className="dot-grid rounded-[32px] border border-line bg-mist p-5 sm:p-8">
      <form onSubmit={build} className="flex h-12 items-center rounded-[12px] border border-iris bg-white pl-4 pr-1.5 shadow-[0_0_0_3px_var(--color-iris-tint)]">
        <label htmlFor="demo-url" className="sr-only">Your website</label>
        <input
          id="demo-url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none focus-visible:shadow-none"
        />
        <button type="submit" aria-label="Build a campaign" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-105">
          <ArrowRight size={16} strokeWidth={1.75} />
        </button>
      </form>

      <div className="mt-5 rounded-[20px] border border-line bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6" aria-live="polite">
        {state === "building" ? (
          <div className="flex h-[212px] flex-col items-center justify-center gap-3 font-mono text-xs text-stone">
            <BloomLoader size={28} label="Ada is reading your accounts" />
            Reading {url || "your site"}
          </div>
        ) : (
          <div className="fade-up">
            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.02em] text-stone">Expansion · Next best action</p>
              <BloomSymbol size={16} variant="bloom" />
            </div>
            <p className="mt-2 text-xl font-semibold tracking-[-0.01em] text-ink">Seat limit upgrade offer</p>
            <p className="mt-1 text-sm text-graphite">142 accounts hit their seat limit this week.</p>
            <div className="mt-4">
              {state === "sent" ? <StageTag stage="result">Sent to 142 accounts</StageTag> : <StageTag stage="action">Ready to send</StageTag>}
            </div>
            {state === "sent" ? (
              <button
                type="button"
                onClick={() => setState("ready")}
                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-white text-[15px] font-medium text-ink hover:border-fog"
              >
                <RotateCcw size={16} strokeWidth={1.75} aria-hidden />
                Reset demo
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setState("sent")}
                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink text-[15px] font-medium text-white hover:bg-graphite"
              >
                <CircleCheck size={16} strokeWidth={1.75} aria-hidden />
                Approve and send
              </button>
            )}
          </div>
        )}
      </div>
      <p className="mt-4 text-center font-mono text-xs text-stone">Try it. Type a site, then approve.</p>
    </div>
  );
}
