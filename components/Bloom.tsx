/**
 * The bloom: four petals meeting at one centre.
 * Each petal is a lens drawn from two quarter circles centred on the corners of
 * its square, with a small rounded outer tip and a hairline gap at the centre.
 * Placeholder for the official SVG: swap the path for the master file when it lands.
 */

const S = 49; // petal square side in a 100 unit box, leaves a 2 unit centre gap
const R = 4.5; // outer tip rounding

function petalPath() {
  const a = R / S;
  // Start on the top edge arc (centred bottom left corner), just right of the tip.
  const p1 = [S * Math.sin(a), S - S * Math.cos(a)];
  // End on the left edge arc (centred top right corner), just below the tip.
  const q = [S - S * Math.cos(a), S * Math.sin(a)];
  const f = (n: number) => n.toFixed(3);
  return `M${f(p1[0])} ${f(p1[1])} A${S} ${S} 0 0 1 ${S} ${S} A${S} ${S} 0 0 1 ${f(q[0])} ${f(q[1])} Q0 0 ${f(p1[0])} ${f(p1[1])}Z`;
}

const PETAL = petalPath();

// Clockwise from top left: Understand, Decide, Act, Learn.
const petals = [
  { transform: undefined, colour: "var(--color-sky)" },
  { transform: "translate(100 0) scale(-1 1)", colour: "var(--color-iris)" },
  { transform: "translate(100 100) scale(-1 -1)", colour: "var(--color-coral)" },
  { transform: "translate(0 100) scale(1 -1)", colour: "var(--color-mint)" },
];

export function BloomSymbol({
  size = 24,
  variant = "ink",
  className = "",
  title,
}: {
  size?: number;
  variant?: "ink" | "white" | "bloom";
  className?: string;
  title?: string;
}) {
  const fill = variant === "ink" ? "var(--color-ink)" : variant === "white" ? "#ffffff" : undefined;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {petals.map((p, i) => (
        <path key={i} d={PETAL} transform={p.transform} fill={fill ?? p.colour} />
      ))}
    </svg>
  );
}

/** Replaces every spinner. */
export function BloomLoader({ size = 20, label = "Loading" }: { size?: number; label?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="bloom-loader" role="img" aria-label={label}>
      {petals.map((p, i) => (
        <path
          key={i}
          d={PETAL}
          transform={p.transform}
          style={{ ["--petal" as string]: p.colour, animationDelay: `${i * 200 - 800}ms` }}
        />
      ))}
    </svg>
  );
}

/**
 * Horizontal lockup. Gap between symbol and wordmark is a quarter of the symbol width.
 * The wordmark is set in Geist Bold until the master wordmark file is supplied.
 */
export function Lockup({ size = 24, tone = "ink" }: { size?: number; tone?: "ink" | "white" }) {
  return (
    <span className="inline-flex items-center" style={{ gap: size / 4 }}>
      <BloomSymbol size={size} variant={tone} />
      <span
        className={`font-bold leading-none ${tone === "ink" ? "text-ink" : "text-white"}`}
        style={{ fontSize: size * 0.92, letterSpacing: "-0.04em" }}
      >
        Shiplog
      </span>
    </span>
  );
}
