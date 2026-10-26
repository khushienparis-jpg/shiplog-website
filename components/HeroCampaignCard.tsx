import { ArrowRight, CircleCheck } from "lucide-react";
import { BloomLoader, BloomSymbol } from "./Bloom";
import { StageTag } from "./ui";

/**
 * Homepage hero visual, taken from the brand book UI sample:
 * paste a URL, an on brand campaign card appears, the team approves.
 * Static mock for review; the live demo replaces it.
 */
export function HeroCampaignCard() {
  return (
    <div
      role="img"
      aria-label="Hero demo: paste a website URL, an on brand campaign builds itself and waits for approval"
      className="dot-grid relative rounded-[32px] border border-line bg-mist p-5 sm:p-8"
    >
      <div aria-hidden>
        {/* URL input */}
        <div className="flex h-12 items-center justify-between rounded-[12px] border border-iris bg-white pl-4 pr-1.5 shadow-[0_0_0_3px_var(--color-iris-tint)]">
          <span className="truncate text-sm text-graphite">yourcompany.com</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <ArrowRight size={16} strokeWidth={1.75} />
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 px-1 font-mono text-xs text-stone">
          <BloomLoader size={14} label="Building" />
          Ada is reading 142 accounts from PostHog and HubSpot
        </div>

        {/* Campaign card */}
        <div className="mt-5 rounded-[20px] border border-line bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.02em] text-stone">
              Expansion · Next best action
            </p>
            <BloomSymbol size={16} variant="bloom" />
          </div>
          <p className="mt-2 text-xl font-semibold tracking-[-0.01em] text-ink">Seat limit upgrade offer</p>
          <p className="mt-2 text-sm text-graphite">142 accounts hit their seat limit</p>
          <p className="text-sm text-graphite">Email and in app banner, on brand</p>
          <div className="mt-4">
            <StageTag stage="action">Ready to send</StageTag>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
            <span className="flex -space-x-1.5">
              {[
                ["G", "bg-sky-tint"],
                ["C", "bg-coral-tint"],
                ["P", "bg-mint-tint"],
              ].map(([l, bg]) => (
                <span
                  key={l}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white font-mono text-[11px] font-medium text-ink ${bg}`}
                >
                  {l}
                </span>
              ))}
            </span>
            <span className="text-sm text-stone">Growth, CS, Product</span>
          </div>
          <span className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink text-[15px] font-medium text-white">
            <CircleCheck size={16} strokeWidth={1.75} />
            Approve and send
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <StageTag stage="signal" />
          <StageTag stage="decision" />
          <StageTag stage="action" />
          <StageTag stage="result" />
        </div>
      </div>
    </div>
  );
}
