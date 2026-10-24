import type { ReactNode } from "react";
import { Button, Container } from "./ui";
import { BloomSymbol } from "./Bloom";

/** Every page ends with this Book a demo block. */
export function CTASection({
  title = "See what your customers need next.",
  body = "Bring your website. In 30 minutes, we'll build your first campaign live.",
  secondary,
}: {
  title?: string;
  body?: ReactNode;
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-label="Book a demo" className="bg-paper py-12 sm:py-20">
      <Container>
        <div className="reveal dot-grid relative overflow-hidden rounded-[32px] bg-ink px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="mx-auto mb-6 flex justify-center"><BloomSymbol size={28} variant="white" /></div>
          <h2 className="mx-auto max-w-2xl text-[28px] text-white sm:text-[36px]">{title}</h2>
          {body ? <p className="mx-auto mt-4 max-w-xl text-white/70 sm:text-lg">{body}</p> : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/demo/" className="!bg-white !text-ink hover:!bg-mist">Book a demo</Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary" className="!border-white/25 !bg-transparent !text-white hover:!border-white/60">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
