import type { ReactNode } from "react";
import { Button, Container, Eyebrow } from "./ui";
import { Placeholder } from "./Placeholder";

type Cta = { label: string; href: string };

/**
 * The positioning strip sits in every hero so reviewers can check each page
 * against the core claim.
 */
export function PositioningStrip({ includeClaim = true }: { includeClaim?: boolean }) {
  const chips = [
    "No engineers",
    "No data team",
    "No design team",
    "Built on deep customer intelligence",
    "Actions, not predictions",
    "Multiplayer",
  ];
  return (
    <div className="mt-6 rounded-xl border border-wf-box bg-wf-bg p-3" aria-label="Positioning">
      {includeClaim ? (
        <p className="text-sm font-medium">Personalisation your growth team can run on its own.</p>
      ) : null}
      <ul className={`${includeClaim ? "mt-2" : ""} flex flex-wrap gap-1.5`}>
        {chips.map((chip) => (
          <li key={chip} className="rounded-full bg-wf-fill px-2.5 py-0.5 font-mono text-[11px] text-wf-ink sm:text-xs">
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  sub,
  primary,
  secondary,
  placeholder,
  display = false,
  children,
  includeClaim = true,
}: {
  eyebrow?: string;
  title: string;
  sub?: ReactNode;
  primary?: Cta;
  secondary?: Cta;
  placeholder?: string;
  display?: boolean;
  children?: ReactNode;
  includeClaim?: boolean;
}) {
  return (
    <section className="bg-wf-fill pb-12 pt-10 sm:pb-16 sm:pt-14">
      <Container>
        <div className={`grid items-center gap-10 ${placeholder ? "lg:grid-cols-[1.15fr_1fr]" : ""}`}>
          <div className={placeholder ? "" : "max-w-3xl"}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className={`mt-3 ${display ? "text-[40px] sm:text-[52px] min-[1400px]:text-[64px]" : "text-[34px] sm:text-[48px]"}`}>{title}</h1>
            {sub ? <div className="mt-4 text-lg text-wf-muted sm:text-xl">{sub}</div> : null}
            {primary || secondary ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {primary ? <Button href={primary.href}>{primary.label}</Button> : null}
                {secondary ? (
                  <Button href={secondary.href} variant="secondary">
                    {secondary.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
            <PositioningStrip includeClaim={includeClaim} />
          </div>
          {placeholder ? <Placeholder label={placeholder} ratio="aspect-[4/3]" /> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
