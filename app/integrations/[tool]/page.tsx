import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Placeholder } from "@/components/Placeholder";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Section, TextLink } from "@/components/ui";
import { integrations } from "@/lib/content";

export function generateStaticParams() {
  return integrations.map((i) => ({ tool: i.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ tool: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tool } = await params;
  const it = integrations.find((i) => i.slug === tool);
  return { title: it ? `${it.h1} | Shiplog` : "Integrations | Shiplog" };
}

export default async function IntegrationPage({ params }: Props) {
  const { tool } = await params;
  const it = integrations.find((i) => i.slug === tool);
  if (!it) notFound();

  return (
    <>
      <Hero
        eyebrow={`Integrations · ${it.category}`}
        title={it.h1}
        sub={`${it.does}.`}
        primary={{ label: "Book a demo", href: "/demo/" }}
        placeholder={`Diagram: ${it.name} data flows into the Shiplog layer, campaigns flow out`}
      />

      <Section label="What Shiplog does">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="What Shiplog does" title={`${it.does}.`} />
          <div className="rounded-[20px] bg-mist p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.02em] text-stone">Example use case</p>
            <p className="mt-3 text-lg font-medium">{it.useCase}.</p>
            <Placeholder className="mt-6" label={`Campaign card: ${it.useCase.toLowerCase()}`} />
          </div>
        </div>
      </Section>

      <Section fill label="Setup">
        <div className="max-w-3xl rounded-[20px] border border-line bg-white p-6 sm:p-8">
          <h2 className="text-xl sm:text-[22px]">Connect in minutes.</h2>
          <p className="mt-3 text-wf-muted">
            Add your API key or sign in with OAuth, choose what Shiplog can read, and you&apos;re done. No engineering
            sprint, and you can disconnect at any time.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Add API key or sign in with OAuth", "Choose what Shiplog can read", "Done"].map((s, i) => (
              <li key={s} className="rounded-[12px] bg-mist p-4 font-mono text-xs">
                <span className="text-wf-muted">Step {i + 1}</span>
                <span className="mt-1 block text-wf-ink">{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <TextLink href="/integrations/">See all integrations</TextLink>
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
