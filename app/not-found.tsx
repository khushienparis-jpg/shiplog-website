import type { Metadata } from "next";
import { Button, Container } from "@/components/ui";
import { PositioningStrip } from "@/components/Hero";

export const metadata: Metadata = { title: "This page churned. | Shiplog" };

export default function NotFound() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.02em] text-stone">404</p>
          <h1 className="mt-3 text-[36px] sm:text-[52px]">This page <span className="serif-accent">churned.</span></h1>
          <p className="mt-5 text-lg text-wf-muted sm:text-xl">
            We couldn&apos;t find what you were looking for, but we know where you should go next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" variant="secondary">
              Back to home
            </Button>
            <Button href="/demo/">Book a demo</Button>
          </div>
          <PositioningStrip />
        </div>
      </Container>
    </section>
  );
}
