import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitBlock, SubPoints } from "@/components/SplitBlock";
import { StepRow } from "@/components/StepRow";
import { CTASection } from "@/components/CTASection";
import { BulletList, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Product | Shiplog" };

export default function ProductPage() {
  return (
    <>
      <Hero
        eyebrow="Product"
        title="Personalisation from insight to action, in one place." accent="in one place"
        sub="Shiplog connects to the tools that know your customers and the tools that reach them. In between, AI agents decide what each customer needs next and take the action, while your team works on it together."
        primary={{ label: "Book a demo", href: "/demo/" }}
        secondary={{ label: "See how it works", href: "#how-it-works" }}
        placeholder="Architecture: data sources left, Shiplog centre, channels right"
      />

      <Section label="Three parts, one system">
        <SectionHeading title="Three parts, one system." />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Customer intelligence.",
              body: "A live profile of every customer, built from product, billing and CRM data.",
              href: "#intelligence",
            },
            {
              title: "Next best action.",
              body: "Agents that choose the right move for each customer, every day.",
              href: "#next-best-action",
            },
            {
              title: "Execution.",
              body: "Campaigns across in app, email and AI agents, approved by your team.",
              href: "#channels",
            },
          ].map((p) => (
            <li key={p.title} className="flex flex-col rounded-[20px] border border-line bg-white p-6">
              <h3 className="text-xl sm:text-[22px]">{p.title}</h3>
              <p className="mt-2 flex-1 text-wf-muted">{p.body}</p>
              <Link href={p.href} className="mt-4 font-medium underline underline-offset-4 hover:no-underline">
                Learn more<span className="sr-only"> about {p.title.replace(".", "")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section fill id="how-it-works" label="How it works">
        <SectionHeading eyebrow="How it works" title="Understand. Decide. Act. Learn." />
        <div className="mt-10">
          <StepRow
            steps={[
              { title: "Understand.", body: "Connect PostHog, Snowflake, Stripe or your CRM. Shiplog builds a live picture of every customer." },
              { title: "Decide.", body: "Agents pick the next best action for each one, based on what they did, not which list they're on." },
              { title: "Act.", body: "Campaigns go out through the tools you already use. Your team reviews and approves." },
              { title: "Learn.", body: "Every result feeds back in, so the next decision is sharper." },
            ]}
          />
        </div>
      </Section>

      <SplitBlock
        id="intelligence"
        eyebrow="Customer intelligence"
        title="Every customer, understood."
        body="Shiplog turns scattered signals into a live picture of each customer: what they use, what they're stuck on, and what they're likely to do next."
        placeholder="Journey map with three leaks highlighted and revenue labels"
      >
        <SubPoints
          items={[
            {
              title: "Signals, not dashboards.",
              body: "Logins, feature use, plan limits, billing events and support tickets, read together for each account. No more stitching five tools to understand one customer.",
            },
            {
              title: "Goal based segments.",
              body: "Lists you build by hand go stale the day you make them. Shiplog groups customers by what they need right now: activate, adopt, expand or stay.",
            },
            {
              title: "The leaky bucket report.",
              body: "See where customers drop out of your journey, how many, and the revenue attached to each leak.",
            },
            {
              title: "Deeper every day.",
              body: "Every campaign result, reply and change in behaviour feeds back into each customer's profile.",
            },
          ]}
        />
      </SplitBlock>

      <SplitBlock
        id="next-best-action"
        fill
        flip
        eyebrow="Next best action"
        title="The right move for every customer, every day."
        body="Shiplog's agents reason over each customer's behaviour and choose one action: a nudge, an offer, a check in, or nothing at all."
        placeholder="Action card: the signal, the goal and the expected outcome behind one proposed message"
      >
        <SubPoints
          items={[
            {
              title: "Behaviour over calendars.",
              body: "Messages go out when something happens, not because it's Tuesday. A customer who hits a limit hears about the next plan that day.",
            },
            {
              title: "Reasoning you can read.",
              body: "Every action comes with the why: the signal, the goal and the expected outcome.",
            },
            {
              title: "Agents propose. You approve.",
              body: "Every night, agents propose the next campaigns. Every morning, your team reviews and approves.",
            },
            {
              title: "A head start from 5,000 campaigns.",
              body: "Agents start from what has worked, then learn what works for you.",
            },
          ]}
        />
      </SplitBlock>

      <SplitBlock
        id="channels"
        eyebrow="Channels"
        title="Act where your customers already are."
        body="Shiplog runs campaigns across in app messages, email and AI agents, through the sending tools you already pay for."
        placeholder="Three channel previews side by side: in app banner, on brand email, AI agent chat"
      >
        <BulletList
          items={[
            { title: "In app.", body: "Banners, tooltips and checklists, triggered by what each user does." },
            { title: "Email.", body: "On brand emails built from your website and voice, sent through Customer.io or HubSpot." },
            { title: "AI agents.", body: "Proactive customer success for self serve users, at a scale no CS team can staff." },
          ]}
        />
      </SplitBlock>

      <SplitBlock
        id="multiplayer"
        fill
        flip
        eyebrow="Multiplayer"
        title="Built to work the way your team already works."
        placeholder="Shared campaign card: growth, CS and product avatars, a comment thread and an approve button"
      >
        <BulletList
          items={[
            { title: "No code.", body: "Connect your tools in a day. No engineering sprint." },
            {
              title: "Beautiful by default.",
              body: "Every message is designed from your brand kit, so it looks like your best designer made it.",
            },
            { title: "Multiplayer.", body: "Growth, CS and product plan, review and approve campaigns together." },
            { title: "Human in the loop.", body: "Agents propose, your team approves. Autonomy grows as trust does." },
            {
              title: "Your stack stays.",
              body: "Shiplog sends through Customer.io, HubSpot and your product, not a new tool.",
            },
          ]}
        />
        <p className="mt-8 font-medium">
          Shiplog drafts. Your team approves. Customers get something that feels written for them, because it was.
        </p>
      </SplitBlock>

      <CTASection />
    </>
  );
}
