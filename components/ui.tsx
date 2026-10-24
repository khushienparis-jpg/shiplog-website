import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** A page section. `fill` gives it the Mist band. 96 px between sections on mobile, 160 px on desktop. */
export function Section({
  children,
  fill = false,
  id,
  className = "",
  label,
}: {
  children: ReactNode;
  fill?: boolean;
  id?: string;
  className?: string;
  label?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`${fill ? "bg-mist" : "bg-paper"} py-12 sm:py-20 ${className}`}>
      <Container className="reveal">{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs font-medium uppercase tracking-[0.02em] text-stone">{children}</p>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/** Primary: Ink pill, white text, 44 px. Secondary: White pill, Line border, Ink text. */
export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-graphite"
      : "border border-line bg-white text-ink hover:border-fog";
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-medium text-iris underline-offset-4 hover:underline">
      {children}
    </Link>
  );
}

/** Bold lead followed by body text, the pattern most copy bullets use. */
export function BulletList({ items, className = "" }: { items: { title: string; body: string }[]; className?: string }) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-iris" />
          <p>
            <strong className="font-semibold text-ink">{item.title}</strong> {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

const stageStyles = {
  signal: { bg: "bg-sky-tint", dot: "bg-sky", label: "Signal" },
  decision: { bg: "bg-iris-tint", dot: "bg-iris", label: "Decision" },
  action: { bg: "bg-coral-tint", dot: "bg-coral", label: "Action" },
  result: { bg: "bg-mint-tint", dot: "bg-mint", label: "Result" },
} as const;

export type Stage = keyof typeof stageStyles;

/** Pill tag in the petal colour of its stage. A Coral tag always means an action. */
export function StageTag({ stage, children }: { stage: Stage; children?: ReactNode }) {
  const s = stageStyles[stage];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs font-medium text-ink ${s.bg}`}>
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {children ?? s.label}
    </span>
  );
}
