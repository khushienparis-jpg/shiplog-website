import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { IntegrationGrid } from "@/components/IntegrationGrid";
import { CTASection } from "@/components/CTASection";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Integrations | Shiplog" };

export default function IntegrationsPage() {
  return (
    <>
      <Hero
        eyebrow="Integrations"
        title="Works with your stack."
        sub="Shiplog reads from the tools that hold your customer data and sends through the tools that reach your customers. Most teams connect in a day."
        primary={{ label: "Book a demo", href: "/demo/" }}
      />
      <Section label="All integrations">
        <h2 className="sr-only">All integrations</h2>
        <IntegrationGrid />
      </Section>
      <Section fill label="Request an integration">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg">
            <strong className="font-semibold">Don&apos;t see your tool?</strong> We add integrations based on what
            customers use.
          </p>
          <Button href="/demo/" variant="secondary">
            Tell us what you use
          </Button>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
