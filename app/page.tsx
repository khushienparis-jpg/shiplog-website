import { Code, Database, Palette } from "lucide-react";
import { Hero } from "@/components/Hero";
import { HeroCampaignCard } from "@/components/HeroCampaignCard";
import { Placeholder } from "@/components/Placeholder";
import { SectionHeading } from "@/components/SectionHeading";
import { StatRow } from "@/components/StatRow";
import { StepRow } from "@/components/StepRow";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TabSwitcher } from "@/components/TabSwitcher";
import { ViewToggle } from "@/components/ViewToggle";
import { StoryCard } from "@/components/StoryCard";
import { CTASection } from "@/components/CTASection";
import { BulletList, Button, Section, StageTag, TextLink } from "@/components/ui";
import { backers, useCases } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* 1. Hero + 2. Proof strip, both inside the first screen */}
      <Hero
        display
        eyebrow="Personalisation for growth teams"
        title="Personalisation your growth team can run on its own."
        accent="on its own"
        sub="No engineers. No data team. No design team. Shiplog finds what each customer needs next, designs the message and sends it through the tools you already use."
        primary={{ label: "Book a demo", href: "/demo/" }}
        secondary={{ label: "Watch it build a campaign", href: "#how-it-works" }}
        visual={<HeroCampaignCard />}
        includeClaim={false}
      >
        <div className="mt-14 sm:mt-20" aria-label="Proof">
          <StatRow
            stats={[
              { value: "5+", label: "companies live within six weeks of launch" },
              { value: "10", label: "plan upgrades for one AI SaaS customer" },
              { value: "7 figures", label: "of expansion revenue found in one customer base" },
            ]}
          />
          <p className="mt-8 text-sm text-stone">
            Backed by Kima Ventures, Project Europe, Purple, No Label Ventures, 100IN and the Station F Fund. Part of
            F/AI at Station F.
          </p>
          <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6" aria-label="Backer logos">
            {backers.map((b) => (
              <li
                key={b}
                className="flex h-12 items-center justify-center rounded-[12px] border border-line bg-white px-2 text-center font-mono text-[11px] text-stone"
              >
                [Logo: {b}]
              </li>
            ))}
          </ul>
        </div>
      </Hero>

      {/* 3. Three teams you don't need */}
      <Section label="Three teams you don't need">
        <SectionHeading eyebrow="Three teams you don't need" title="Your growth team ships it. Start to finish." accent="Start to finish." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "No engineers",
              Icon: Code,
              before: "Tickets to add tracking and build in app messages",
              after: "Connect your tools in a few clicks. In app messages are ready to go",
            },
            {
              title: "No data team",
              Icon: Database,
              before: "SQL, segments and models before anything sends",
              after: "Agents decide who gets what, every day, from live data",
            },
            {
              title: "No design team",
              Icon: Palette,
              before: "A designer for every email and banner",
              after: "Every message is on brand, built from your website",
            },
          ].map((col) => (
            <article key={col.title} className="rounded-[20px] border border-line bg-white p-6">
              <span aria-hidden className="relative flex h-10 w-10 items-center justify-center rounded-[12px] border border-line bg-mist text-stone">
                <col.Icon size={20} strokeWidth={1.5} />
                <span className="absolute h-[1.5px] w-7 rotate-45 rounded-full bg-stone" />
              </span>
              <h3 className="mt-5 text-xl sm:text-[22px]">{col.title}</h3>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.02em] text-stone">What it used to take</dt>
                  <dd className="mt-1 text-wf-muted line-through decoration-1">{col.before}</dd>
                </div>
                <div className="rounded-[12px] bg-mint-tint p-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.02em] text-stone">With Shiplog</dt>
                  <dd className="mt-1 font-medium">{col.after}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-10 text-lg font-medium text-ink">One growth marketer with Shiplog does what used to take three teams.</p>
      </Section>

      {/* 4. How it works */}
      <Section fill id="how-it-works" label="How it works">
        <SectionHeading eyebrow="How it works" title="Understand. Decide. Act. Learn." />
        <div className="mt-10">
          <StepRow
            steps={[
              {
                title: "Connect your tools",
                body: "Connect PostHog, Snowflake, Stripe or your CRM. Shiplog builds a live picture of every customer.",
                placeholder: "Screenshot: connecting PostHog, Snowflake, Stripe and a CRM",
              },
              {
                title: "Approve what agents propose",
                body: "Agents pick the next best action for each one, based on what they did, not which list they're on. Your team reviews and approves.",
                placeholder: "Screenshot: the morning approval queue of proposed campaigns",
              },
              {
                title: "Watch revenue move",
                body: "Campaigns go out through the tools you already use. Every result feeds back in, so the next decision is sharper.",
                placeholder: "Screenshot: campaign results reported in revenue",
              },
            ]}
          />
        </div>
      </Section>

      {/* 5. Actions, not predictions */}
      <Section label="Actions, not predictions">
        <SectionHeading
          eyebrow="Actions, not predictions"
          title="Other tools predict. Shiplog acts."
          accent="Shiplog acts."
          body="Churn scores, health dashboards and propensity models tell you who might leave. Then someone still has to decide what to do, write it, design it and send it. Shiplog does all of it: it finds the customer, picks the action, builds a beautiful on brand message and runs it, with your approval."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Placeholder label="Churn score card fading out: a risk number with no next step" />
          <Placeholder label="Sent campaign: on brand check in email, approved and delivered" />
        </div>
        <div className="mt-10">
          <ComparisonTable
            caption="Prediction tools compared with Shiplog"
            headers={["Prediction tools", "Shiplog"]}
            rows={[
              ["Give you a score", "Gives you a campaign, ready to send"],
              ["Need a team to act on it", "Acts for you, with your approval"],
              ["Report on dashboards", "Reports in revenue"],
              ["Built for analysts", "Built for anyone on the team"],
            ]}
          />
        </div>
      </Section>

      {/* 6. Use cases */}
      <Section fill label="Use cases">
        <SectionHeading eyebrow="Use cases" title="One layer for the whole customer lifecycle." />
        <div className="mt-10">
          <TabSwitcher
            label="Use cases"
            tabs={useCases.map((u) => ({
              id: u.slug,
              label: u.tabLabel,
              content: (
                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                  <div className="rounded-[20px] border border-line bg-white p-6">
                  <dl className="space-y-4">
                    <div>
                      <dt><StageTag stage="signal" /></dt>
                      <dd className="mt-2 font-medium text-ink">{u.signal}</dd>
                    </div>
                    <div>
                      <dt><StageTag stage="decision" /></dt>
                      <dd className="mt-2">{u.decision}</dd>
                    </div>
                    <div>
                      <dt><StageTag stage="action" /></dt>
                      <dd className="mt-2">{u.action}</dd>
                    </div>
                    <div>
                      <dt><StageTag stage="result" /></dt>
                      <dd className="mt-2">
                        {u.result ?? (
                          <span className="inline-block rounded-full border border-dashed border-fog bg-white px-2.5 py-0.5 font-mono text-xs text-stone">
                            [Result: number to confirm]
                          </span>
                        )}
                      </dd>
                    </div>
                  </dl>
                  <div className="pt-6">
                    <TextLink href={`/use-cases/${u.slug}/`}>Learn more</TextLink>
                  </div>
                  </div>
                  <Placeholder label={`Message preview: ${u.action.toLowerCase()}`} />
                </div>
              ),
            }))}
          />
        </div>
      </Section>

      {/* 7. Deep customer intelligence (includes the Segment vs Shiplog toggle) */}
      <Section label="Deep customer intelligence">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Deep customer intelligence"
              title="Understand every customer, not just your top 50."
              body="Shiplog builds a live profile of every customer from product, billing, CRM and support data: what they use, where they're stuck, what they're worth and what they're likely to need next. It gets sharper with every message sent and every reply."
            />
            <BulletList
              className="mt-8"
              items={[
                { title: "Every account.", body: "Not a sample, not a segment. All of them." },
                { title: "Always live.", body: "Updated every day, not in last quarter's report." },
                { title: "Explained.", body: "Every insight shows the signals behind it, so your team can trust it." },
              ]}
            />
          </div>
          <Placeholder
            ratio="aspect-[4/3]"
            label="Customer profile assembling itself from product, billing, CRM and support signals, ending in a needs next line"
          />
        </div>
        <div className="mt-16 rounded-[32px] bg-mist p-6 sm:p-10">
          <SectionHeading
            as="h3"
            title="Segments treat 1,000 customers like one. Shiplog treats them like 1,000."
            body="Engineering got industrialised. Pricing got individualised. Customer engagement got stuck with static lists and calendar campaigns. Shiplog replaces them with continuous reasoning about each customer, every day."
          />
          <div className="mt-8">
            <ViewToggle
              options={[
                {
                  label: "Segment view",
                  placeholder: "Segment view: 1,000 customers in one grey block, all sent the same Tuesday email",
                  caption: "One list. One message. One send date.",
                },
                {
                  label: "Shiplog view",
                  placeholder: "Shiplog view: 1,000 individual dots, each with its own next action and timing",
                  caption: "Every customer gets their own next best action.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 8. Multiplayer */}
      <Section fill label="Multiplayer">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Placeholder
            ratio="aspect-[4/3]"
            label="Shared campaign card: growth, CS and product avatars, a comment thread and an approve button"
          />
          <SectionHeading
            eyebrow="Multiplayer"
            accent="a team sport."
            title="Personalisation is a team sport."
            body="Growth, CS, product and sales all touch the same customers. In Shiplog they work in one place: see the same customer, suggest plays, review copy and approve together. No more spreadsheets passed between teams, and no customer getting three different messages in one week."
          />
        </div>
      </Section>

      {/* 9. Works with your stack */}
      <Section label="Works with your stack">
        <SectionHeading
          eyebrow="Works with your stack"
          title="Plugs into your stack in a day. Replaces none of it."
          body="Shiplog reads from Salesforce, HubSpot, Snowflake, Stripe, PostHog and Shopify, and sends through Customer.io, HubSpot and your product. Marketers can also run it from Claude through the Shiplog MCP."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Integration logos">
          {["Salesforce", "HubSpot", "Snowflake", "Stripe", "PostHog", "Shopify", "Customer.io", "Claude"].map((t) => (
            <li
              key={t}
              className="flex h-16 items-center justify-center rounded-[12px] border border-line bg-white font-mono text-xs text-stone"
            >
              [Logo: {t}]
            </li>
          ))}
        </ul>
        <Placeholder
          className="mt-6"
          ratio="aspect-[21/9]"
          label="Architecture: data sources left, Shiplog layer centre, channels right"
        />
        <div className="mt-8">
          <Button href="/integrations/" variant="secondary">
            See all integrations
          </Button>
        </div>
      </Section>

      {/* 10. Customer story */}
      <Section fill label="Customer story">
        <SectionHeading eyebrow="Customer story" title="An AI SaaS company found its upgrade revenue in its own customer base." />
        <div className="mt-10">
          <StoryCard
            wide
            number="10 plan upgrades"
            type="AI SaaS company"
            story="Thousands of self serve accounts and no one to work them. Shiplog connected to their product data and Customer.io, proposed campaigns every night, and the team approved the best ones each morning. Result: 10 plan upgrades and a working expansion engine, without a new hire."
            href="/customers/ai-saas-upgrades/"
          />
        </div>
      </Section>

      {/* 11. Final CTA */}
      <CTASection />
    </>
  );
}
