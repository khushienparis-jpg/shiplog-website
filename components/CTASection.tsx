import type { ReactNode } from "react";
import { Button, Container } from "./ui";

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
    <section aria-label="Book a demo" className="bg-wf-bg py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl border-2 border-wf-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-[26px] sm:text-[32px]">{title}</h2>
          {body ? <p className="mx-auto mt-4 max-w-xl text-wf-muted sm:text-[17px]">{body}</p> : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/demo/">Book a demo</Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
