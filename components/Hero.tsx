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
    <div className="mt-8" aria-label="Positioning">
      {includeClaim ? <p className="text-sm font-medium text-ink">Personalisation your growth team can run on its own.</p> : null}
      <ul className={`${includeClaim ? "mt-3" : ""} flex flex-wrap gap-1.5`}>
        {chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-graphite sm:text-xs"
          >
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Renders the title with one phrase in the serif italic, if `accent` is found in it. */
export function AccentTitle({ title, accent }: { title: string; accent?: string }) {
  if (!accent || !title.includes(accent)) return <>{title}</>;
  const [before, ...rest] = title.split(accent);
  return (
    <>
      {before}
      <span className="serif-accent">{accent}</span>
      {rest.join(accent)}
    </>
  );
}

export function Hero({
  eyebrow,
  title,
  accent,
  sub,
  primary,
  secondary,
  placeholder,
  visual,
  display = false,
  children,
  includeClaim = true,
}: {
  eyebrow?: string;
  title: string;
  /** One phrase of the title set in Instrument Serif italic. */
  accent?: string;
  sub?: ReactNode;
  primary?: Cta;
  secondary?: Cta;
  placeholder?: string;
  /** A designed visual. Wins over `placeholder`. */
  visual?: ReactNode;
  display?: boolean;
  children?: ReactNode;
  includeClaim?: boolean;
}) {
  const hasVisual = Boolean(visual || placeholder);
  return (
    <section className="relative overflow-hidden bg-paper pb-14 pt-12 sm:pb-20 sm:pt-20">
      {/* The one bloom gradient moment on the page. */}
      <div aria-hidden className="bloom-glow pointer-events-none absolute -top-72 right-[-12%] h-[480px] w-[720px] rounded-full" />
      <Container className="relative">
        <div className={`grid items-center gap-12 ${hasVisual ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
          <div className={`fade-up ${hasVisual ? "" : "max-w-3xl"}`}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1
              className={`mt-4 ${
                display
                  ? "text-[44px] tracking-[-0.035em] sm:text-[60px] min-[1280px]:text-[72px]"
                  : "text-[36px] sm:text-[52px]"
              }`}
            >
              <AccentTitle title={title} accent={accent} />
            </h1>
            {sub ? <div className="mt-5 max-w-[34em] text-lg text-graphite sm:text-xl">{sub}</div> : null}
            {primary || secondary ? (
              <div className="mt-8 flex flex-wrap gap-3">
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
          {visual ? (
            <div className="fade-up [animation-delay:120ms]">{visual}</div>
          ) : placeholder ? (
            <Placeholder label={placeholder} ratio="aspect-[4/3]" className="fade-up [animation-delay:120ms]" />
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
