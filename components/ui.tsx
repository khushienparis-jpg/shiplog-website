import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** A page section. `fill` gives it the #F2F2F2 band so section rhythm is visible. */
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
    <section id={id} aria-label={label} className={`${fill ? "bg-wf-fill" : "bg-wf-bg"} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs font-medium uppercase tracking-wider text-wf-muted sm:text-[13px]">{children}</p>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/** Primary buttons are the only place the accent colour appears. */
export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark"
      : "border border-wf-ink text-wf-ink hover:bg-wf-fill";
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
    <Link href={href} className="font-medium text-wf-ink underline underline-offset-4 hover:no-underline">
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
          <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-wf-ink" />
          <p>
            <strong className="font-semibold">{item.title}</strong> {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
