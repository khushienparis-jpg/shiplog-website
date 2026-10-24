import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui";

export const metadata: Metadata = { title: "Security | Shiplog" };

const items: { title: string; body: string; placeholder?: boolean }[] = [
  { title: "Compliance.", body: "Our SOC 2 audit is in progress. Report available on request once complete." },
  { title: "Access.", body: "Shiplog requests the minimum access it needs, and you choose what it can read." },
  { title: "Control.", body: "Every campaign needs human approval before it reaches a customer." },
  { title: "Data location.", body: "Where data is processed and stored: confirm with Mehdi.", placeholder: true },
  { title: "Subprocessors.", body: "List of subprocessors.", placeholder: true },
];

export default function SecurityPage() {
  return (
    <>
      <Hero
        eyebrow="Security"
        title="Your customer data, handled with care." accent="with care"
        sub="Shiplog works with sensitive customer data every day. Here's how we protect it."
        primary={{ label: "Book a demo", href: "/demo/" }}
      />
      <Section label="How we protect data">
        <h2 className="sr-only">How we protect data</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <li key={it.title} className="rounded-[20px] border border-line bg-white p-6">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              {it.placeholder ? (
                <p className="mt-2 inline-block rounded-full border border-dashed border-fog bg-white px-2.5 py-0.5 font-mono text-xs text-stone">[{it.body}]</p>
              ) : (
                <p className="mt-2 text-wf-muted">{it.body}</p>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-10">
          Questions or a security review? Email{" "}
          <a href="mailto:security@useshiplog.com" className="font-medium underline underline-offset-4">
            security@useshiplog.com
          </a>
          .
        </p>
      </Section>
      <CTASection />
    </>
  );
}
