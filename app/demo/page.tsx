import type { Metadata } from "next";
import { DemoForm } from "@/components/DemoForm";
import { PositioningStrip } from "@/components/Hero";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Book a demo | Shiplog" };

export default function DemoPage() {
  return (
    <section className="bg-wf-fill py-12 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-wf-muted">Book a demo</p>
          <h1 className="mt-3 text-[34px] sm:text-[48px]">See what your customers need next.</h1>
          <p className="mt-5 text-lg text-wf-muted sm:text-xl">
            In 30 minutes we&apos;ll walk through your customer journey, show you where revenue leaks, and how Shiplog
            would close the gaps.
          </p>
          <PositioningStrip />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl bg-wf-bg p-6 sm:p-10">
            <DemoForm />
          </div>
          <aside className="h-fit rounded-3xl border border-wf-box bg-wf-bg p-6 sm:p-8" aria-labelledby="get-heading">
            <h2 id="get-heading" className="text-xl sm:text-[22px]">
              What you&apos;ll get
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "A walkthrough of your customer journey and its leaks",
                "Three campaign ideas for your product",
                "An estimate of the revenue behind them",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-wf-ink" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-wf-box pt-5 text-sm text-wf-muted">
              Backed by Kima Ventures, Project Europe and the Station F Fund.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
