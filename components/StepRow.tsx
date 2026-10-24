import { Placeholder } from "./Placeholder";

// Each step keeps its petal colour: Understand, Decide, Act, Learn.
const stepTint = ["bg-sky-tint", "bg-iris-tint", "bg-coral-tint", "bg-mint-tint"];
const stepDot = ["bg-sky", "bg-iris", "bg-coral", "bg-mint"];

export type Step = { title: string; body: string; placeholder?: string };

/** Numbered steps. Never more than four, per the proof rules. */
export function StepRow({ steps }: { steps: Step[] }) {
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <ol className={`grid gap-8 sm:grid-cols-2 ${cols}`}>
      {steps.slice(0, 4).map((step, i) => (
        <li key={step.title} className="flex flex-col">
          <span className={`inline-flex w-fit items-center gap-2 rounded-full px-2.5 py-1 font-mono text-xs font-medium text-ink ${stepTint[i % 4]}`}><span aria-hidden className={`h-1.5 w-1.5 rounded-full ${stepDot[i % 4]}`} />Step {i + 1}</span>
          <h3 className="mt-4 text-xl sm:text-[22px]">{step.title}</h3>
          <p className="mt-2 text-graphite">{step.body}</p>
          {step.placeholder ? <Placeholder label={step.placeholder} className="mt-5" /> : null}
        </li>
      ))}
    </ol>
  );
}
