import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { StoryCard } from "@/components/StoryCard";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui";

export const metadata: Metadata = { title: "Customer stories | Shiplog" };

const stories = [
  {
    number: "10 plan upgrades",
    type: "AI SaaS company",
    story:
      "Thousands of self serve accounts and no one to work them. Shiplog turned the tail into an expansion engine.",
    href: "/customers/ai-saas-upgrades/",
  },
  {
    number: "7 figures found",
    type: "B2B software company",
    story:
      "The lifecycle team owned expansion but couldn't see it. Shiplog found seven figures of upgrade revenue in the existing base.",
  },
  {
    number: "70% reached",
    type: "Fintech app",
    story: "Most signups never made a first transaction. Goal based journeys replaced one by one support outreach.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <Hero
        eyebrow="Customers"
        title="Revenue found in customer bases like yours."
        sub="Our customers stay anonymous. Their numbers don't."
        primary={{ label: "Book a demo", href: "/demo/" }}
      />
      <Section label="Customer stories">
        <h2 className="sr-only">Customer stories</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <li key={s.type}>
              <StoryCard {...s} />
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-wf-muted">[Wireframe: only the first story has a sample page]</p>
      </Section>
      <CTASection title="Your story could be next." body={null} />
    </>
  );
}
