import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { BulletList, Button, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Careers | Shiplog" };

export default function CareersPage() {
  return (
    <>
      <Hero
        eyebrow="Careers"
        title="Help every company understand every customer." accent="every customer"
        sub="We're a small team at Station F, shipping fast and working directly with customers every week."
      />
      <Section label="How we work">
        <SectionHeading title="How we work" />
        <BulletList
          className="mt-8 max-w-3xl"
          items={[
            { title: "Written first.", body: "Decisions, plans and weekly goals live in writing." },
            { title: "Close to customers.", body: "Everyone talks to customers. Everyone sees the results." },
            { title: "Public by default.", body: "We share what we learn, on LinkedIn and in our playbooks." },
          ]}
        />
      </Section>
      <Section fill label="Open roles">
        <SectionHeading title="Open roles" />
        <div className="mt-8 rounded-[20px] border border-dashed border-fog bg-mist p-6 font-mono text-xs text-stone">
          [Role list from your ATS]
        </div>
        <p className="mt-6">No open roles right now, but we always want to meet exceptional people.</p>
        <div className="mt-6">
          <Button href="mailto:khushi@useshiplog.com" variant="secondary">
            Send us a note
          </Button>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
