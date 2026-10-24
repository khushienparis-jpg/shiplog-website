import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PlanCard } from "@/components/PlanCard";
import { FAQ } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui";

export const metadata: Metadata = { title: "Pricing | Shiplog" };

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title="Priced on the value, not the seats." accent="not the seats"
        sub="Every plan is month to month. Start with the one that fits your team today and grow from there."
      />
      <Section label="Plans">
        <ul className="grid gap-6 lg:grid-cols-3">
          <li>
            <PlanCard
              name="Growth"
              tagline="For teams with a self serve tail"
              includes={["Customer intelligence", "Next best action", "In app and email", "MCP access", "Playbook library"]}
              cta={{ label: "Book a demo", href: "/demo/", primary: true }}
            />
          </li>
          <li>
            <PlanCard
              highlight
              name="Growth plus services"
              tagline="For teams without lifecycle headcount"
              includes={[
                "Everything in Growth",
                "A lifecycle strategist",
                "Journey audit",
                "Campaign design and launch",
                "Weekly check in",
              ]}
              cta={{ label: "Book a demo", href: "/demo/", primary: true }}
            />
          </li>
          <li>
            <PlanCard
              name="Enterprise"
              tagline="For large customer bases and multiple teams"
              includes={[
                "Everything in Growth plus services",
                "Deep customer intelligence across accounts",
                "Custom integrations",
                "Security review",
                "Dedicated team",
              ]}
              cta={{ label: "Talk to us", href: "/enterprise/", primary: false }}
            />
          </li>
        </ul>
      </Section>
      <Section fill label="Questions, answered">
        <SectionHeading title="Questions, answered" />
        <div className="mt-8 max-w-3xl">
          <FAQ
            items={[
              {
                q: "How fast can we start?",
                a: "Most teams connect their tools in a day and see their first campaigns within a week.",
              },
              {
                q: "Do we need engineers?",
                a: "No. Shiplog connects through API keys or sign in, and campaigns run through tools you already use.",
              },
              {
                q: "Which tools do you work with?",
                a: (
                  <>
                    PostHog, Snowflake, Stripe, Salesforce, HubSpot, Customer.io, Shopify and Claude.{" "}
                    <Link href="/integrations/" className="font-medium text-wf-ink underline underline-offset-4">
                      See all integrations
                    </Link>
                  </>
                ),
              },
              {
                q: "Will Shiplog send messages without us?",
                a: "Not unless you choose to. Every campaign needs approval until you decide to automate it.",
              },
              {
                q: "What happens after the first three months?",
                a: "The workflows we built with you move to automated agents, and our team focuses on new plays.",
              },
              { q: "Is there a contract lock in?", a: "No. Every plan is month to month." },
            ]}
          />
        </div>
      </Section>
      <CTASection title="Not sure which plan fits? We'll tell you in 30 minutes." body={null} />
    </>
  );
}
