import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/ui";

const story = {
  slug: "ai-saas-upgrades",
  h1: "An AI SaaS company drove 10 plan upgrades from its self serve tail.",
  snapshot: [
    { label: "Industry", value: "AI SaaS" },
    { label: "Company stage", value: "[To confirm]" },
    { label: "Tools connected", value: "Product data, Customer.io" },
    { label: "Time to first campaign", value: "[To confirm]" },
    { label: "Headline result", value: "10 plan upgrades" },
  ],
};

export function generateStaticParams() {
  return [{ story: story.slug }];
}

export const dynamicParams = false;

export const metadata: Metadata = { title: "Customer story | Shiplog" };

export default async function StoryPage({ params }: { params: Promise<{ story: string }> }) {
  const { story: slug } = await params;
  if (slug !== story.slug) notFound();

  return (
    <>
      <Hero eyebrow="Customer story · AI SaaS company" title={story.h1} primary={{ label: "Book a demo", href: "/demo/" }}>
        <dl className="mt-10 grid gap-4 rounded-[20px] border border-line bg-white p-6 sm:grid-cols-5">
          {story.snapshot.map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.02em] text-stone">{s.label}</dt>
              <dd className="mt-1 font-medium">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Hero>

      <Section label="The leak">
        <SectionHeading eyebrow="The leak" title="Thousands of self serve accounts and no one to work them." />
        <p className="mt-4 font-mono text-xs text-wf-muted">[What was going wrong, in the customer&apos;s words where possible]</p>
      </Section>

      <Section fill label="What Shiplog did">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="What Shiplog did"
            title="Shiplog connected to their product data and Customer.io, proposed campaigns every night, and the team approved the best ones each morning."
          />
          <Placeholder label="Screenshot: nightly campaign proposals waiting for morning approval" />
        </div>
      </Section>

      <Section label="The result">
        <p className="font-mono text-xs uppercase tracking-[0.02em] text-stone">The result</p>
        <p className="mt-3 font-mono text-[40px] font-medium leading-none sm:text-[56px]">10 plan upgrades</p>
        <h2 className="mt-4 max-w-3xl text-[26px] sm:text-[32px]">A working expansion engine, without a new hire.</h2>
        <figure className="mt-10 max-w-3xl rounded-[20px] bg-mist p-6 sm:p-8">
          <blockquote className="text-lg">
            <span className="inline-block rounded-full border border-dashed border-fog bg-white px-2.5 py-0.5 font-mono text-xs text-stone">
              [Quote: one sentence from the team]
            </span>
          </blockquote>
          <figcaption className="mt-4 font-mono text-xs text-wf-muted">[Role], AI SaaS company</figcaption>
        </figure>
      </Section>

      <CTASection />
    </>
  );
}
