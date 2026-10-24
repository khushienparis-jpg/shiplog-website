import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { StepRow } from "@/components/StepRow";
import { CTASection } from "@/components/CTASection";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Shiplog MCP | Run your lifecycle from Claude" };

export default function McpPage() {
  return (
    <>
      <Hero
        eyebrow="Shiplog MCP"
        title="Run your lifecycle from Claude." accent="from Claude"
        sub="The Shiplog MCP lets marketers build, review and launch campaigns in plain language, inside the AI tools they already use."
        primary={{ label: "Book a demo", href: "/demo/" }}
        secondary={{ label: "Request access", href: "/demo/" }}
      />

      <Section label="Demo">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="sr-only">Live MCP demo</h2>
            <p className="font-mono text-xs uppercase tracking-[0.02em] text-stone">Demo script</p>
            <p className="mt-3 font-mono text-[13px] text-wf-muted">
              [Visual: live MCP demo, a typed conversation building a churn campaign]
            </p>
          </div>
          <div className="space-y-4 rounded-[32px] bg-mist p-6" role="img" aria-label="Chat transcript placeholder: a marketer asks Shiplog to build a churn campaign">
            <div className="ml-auto max-w-[85%] rounded-[20px] bg-mist p-4">
              <p className="font-mono text-xs text-wf-muted">You</p>
              <p className="mt-1">Build a campaign for accounts whose usage dropped by half this month.</p>
            </div>
            <div className="max-w-[85%] rounded-[20px] border border-line bg-white p-4">
              <p className="font-mono text-xs text-wf-muted">Shiplog</p>
              <p className="mt-1">
                Found 142 accounts. Drafted a three step campaign: a check in email, an in app tip on their most used
                feature, and a CS alert for the top 20 by revenue. Want to review the copy?
              </p>
            </div>
            <p className="font-mono text-xs text-wf-muted">[Note: 142 accounts is illustrative]</p>
          </div>
        </div>
      </Section>

      <Section fill label="How it works">
        <SectionHeading title="How it works" />
        <div className="mt-10">
          <StepRow
            steps={[
              {
                title: "Ask in one sentence.",
                body: "Describe the customers and the goal.",
                placeholder: "Screenshot: prompt typed in Claude",
              },
              {
                title: "Review everything.",
                body: "Audience, logic, copy and timing, before anything sends.",
                placeholder: "Screenshot: campaign review card in chat",
              },
              {
                title: "Approve and launch.",
                body: "Campaigns go live through your sending tool.",
                placeholder: "Screenshot: campaign live in the sending tool",
              },
            ]}
          />
        </div>
      </Section>

      <Section label="Alpha access">
        <div className="flex flex-col items-start gap-4 rounded-[20px] border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-lg font-medium">The MCP is in alpha.</p>
          <Button href="/demo/" variant="secondary">
            Request access
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
