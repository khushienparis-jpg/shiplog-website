import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitBlock } from "@/components/SplitBlock";
import { StepRow } from "@/components/StepRow";
import { CTASection } from "@/components/CTASection";
import { BulletList, Button, Section, TextLink } from "@/components/ui";

export const metadata: Metadata = { title: "Shiplog for Enterprise | Deep customer intelligence" };

export default function EnterprisePage() {
  return (
    <>
      <Hero
        eyebrow="Enterprise"
        title="Deep customer intelligence, across every account."
        sub="Shiplog gives enterprise teams a live understanding of every customer and the next best action for each, delivered through the systems you already run."
        primary={{ label: "Talk to us", href: "/demo/" }}
        secondary={{ label: "Get your audit", href: "#audit" }}
        placeholder="Account intelligence view: product, billing, CRM and support signals unified per account"
      />

      <SplitBlock
        title="Why enterprise teams choose Shiplog"
        placeholder="One account profile with the reasoning behind its next best action"
      >
        <BulletList
          items={[
            { title: "One view of every customer.", body: "Product, billing, CRM and support signals, unified per account." },
            {
              title: "Decisions you can audit.",
              body: "Every action carries its reasoning, so marketing, CS and legal can see why.",
            },
            {
              title: "Your stack, not ours.",
              body: "Shiplog runs on top of Salesforce, Snowflake, HubSpot and your sending tools.",
            },
            {
              title: "One brain for every team.",
              body: "Marketing, CS and product act on the same intelligence, not three versions of it.",
            },
          ]}
        />
      </SplitBlock>

      <Section fill label="How we work with you">
        <SectionHeading title="How we work with you" />
        <div className="mt-10">
          <StepRow
            steps={[
              { title: "Audit.", body: "We map your customer journeys, find the leaks and size the revenue behind them." },
              { title: "Design.", body: "We build the signals, journeys and campaigns with your team." },
              { title: "Launch.", body: "Campaigns go live through your tools, with your team approving each one." },
              { title: "Scale.", body: "Within three months, workflows move from our team to automated agents." },
            ]}
          />
        </div>
        <p className="mt-10 max-w-3xl">
          <strong className="font-semibold">What we need from you:</strong> one point of contact, access to product
          analytics and your sending tool, and a weekly check in.
        </p>
      </Section>

      <SplitBlock
        flip
        title="The team you'd have to hire, already built."
        body="Instead of a consulting firm, a data team, a growth team and AI engineers, you get lifecycle strategists, data scientists and engineers working as an extension of your team. One contract, a fraction of the cost."
        placeholder="Team diagram: lifecycle strategists, data scientists and engineers alongside your team"
      />

      <Section fill label="Built for trust">
        <SectionHeading title="Built for trust" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["SOC 2 audit in progress", "Human approval on every campaign", "Read only access by default", "Disconnect at any time"].map(
            (t) => (
              <li key={t} className="rounded-2xl border border-wf-box bg-wf-bg p-5 font-medium">
                {t}
              </li>
            ),
          )}
        </ul>
        <p className="mt-6">
          <TextLink href="/security/">Read about security</TextLink>
        </p>
      </Section>

      <Section id="audit" label="Start with an audit">
        <div className="rounded-3xl bg-wf-fill p-6 sm:p-10">
          <SectionHeading
            title="Start with an audit."
            body="In two weeks, we'll show you where revenue leaks from your customer base and what it's worth. No commitment beyond that."
          />
          <div className="mt-8">
            <Button href="/demo/" variant="secondary">
              Get your audit
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
