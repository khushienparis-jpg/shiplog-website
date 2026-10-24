import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Placeholder } from "@/components/Placeholder";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { BulletList, Section, StageTag } from "@/components/ui";
import { useCases } from "@/lib/content";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  return { title: uc?.seoTitle ?? "Use cases | Shiplog" };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) notFound();

  return (
    <>
      <Hero
        eyebrow={`Use case · ${uc.navLabel}`}
        title={uc.h1}
        sub={uc.sub}
        primary={{ label: "Book a demo", href: "/demo/" }}
        secondary={uc.cta.secondary}
        placeholder={`Customer stream: ${uc.navLabel.toLowerCase()} signal flows through Shiplog into an action`}
      />

      <Section label="The leak">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.02em] text-stone">The leak</p>
          <h2 className="mt-3 text-[26px] sm:text-[32px]">{uc.leak}</h2>
        </div>
      </Section>

      <Section fill label="How Shiplog fixes it">
        <SectionHeading title="How Shiplog fixes it" />
        <BulletList className="mt-8 max-w-3xl" items={uc.fixes} />
      </Section>

      <Section label="Example campaign">
        <SectionHeading eyebrow="Example campaign" title={uc.example ?? uc.result ?? uc.signal} />
        <div className="mt-10 grid gap-6 rounded-[32px] border border-line bg-white p-6 sm:p-8 lg:grid-cols-4">
          <div>
            <p><StageTag stage="signal">Signal</StageTag></p>
            <p className="mt-2 font-medium">{uc.signal}</p>
          </div>
          <div>
            <p><StageTag stage="decision">Decision</StageTag></p>
            <p className="mt-2">{uc.decision}</p>
          </div>
          <div>
            <p><StageTag stage="action">Message</StageTag></p>
            <Placeholder className="mt-2" ratio="aspect-[4/3]" label={`Message: ${uc.action.toLowerCase()}`} />
          </div>
          <div>
            <p><StageTag stage="result">Result</StageTag></p>
            <p className="mt-2">
              {uc.result ?? (
                <span className="inline-block rounded-full border border-dashed border-fog bg-white px-2.5 py-0.5 font-mono text-xs text-stone">
                  [Result: number to confirm]
                </span>
              )}
            </p>
          </div>
        </div>
      </Section>

      <CTASection title={uc.cta.title} secondary={uc.cta.secondary} />
    </>
  );
}
