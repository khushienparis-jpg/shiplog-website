import { Placeholder } from "./Placeholder";

export type Step = { title: string; body: string; placeholder?: string };

/** Numbered steps. Never more than four, per the proof rules. */
export function StepRow({ steps }: { steps: Step[] }) {
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <ol className={`grid gap-8 sm:grid-cols-2 ${cols}`}>
      {steps.slice(0, 4).map((step, i) => (
        <li key={step.title} className="flex flex-col">
          <span className="font-mono text-sm font-medium text-wf-muted">Step {i + 1}</span>
          <h3 className="mt-2 text-xl sm:text-[22px]">{step.title}</h3>
          <p className="mt-2 text-wf-muted">{step.body}</p>
          {step.placeholder ? <Placeholder label={step.placeholder} className="mt-5" /> : null}
        </li>
      ))}
    </ol>
  );
}
