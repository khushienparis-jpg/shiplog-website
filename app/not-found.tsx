import type { Metadata } from "next";
import { Button, Container } from "@/components/ui";
import { PositioningStrip } from "@/components/Hero";

export const metadata: Metadata = { title: "This page churned. | Shiplog" };

export default function NotFound() {
  return (
    <section className="bg-wf-fill py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-wf-muted">404</p>
          <h1 className="mt-3 text-[34px] sm:text-[48px]">This page churned.</h1>
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
