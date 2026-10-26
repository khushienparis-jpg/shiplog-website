import { Code, Database, Droplet, Palette } from "lucide-react";
import { Hero } from "@/components/Hero";
import { HeroCampaignCard } from "@/components/HeroCampaignCard";
import { Pending } from "@/components/Placeholder";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui";

// Alt headline from the copy doc: "Your customers already told you what they want next."

const leaks = [
  "New users who never reach first value.",
  "Features nobody adopts.",
  "Accounts that go quiet 60 days before they cancel.",
  "Teams hitting their plan limit that nobody offers an upgrade.",
];

const unblocks = [
  {
    Icon: Database,
    title: "Segments in plain words.",
    body: "“Pro accounts, 3 seats or more, no login in 14 days.” Ada builds it from PostHog and HubSpot and shows you exactly who's in it.",
  },
  {
    Icon: Palette,
    title: "Emails in your brand.",
    body: "Ada drafts every campaign in your look and your voice. Change it by saying what you want.",
  },
  {
    Icon: Code,
    title: "Personalisation that works.",
    body: "Ada writes the Liquid, adds the fallbacks, and tests it on real profiles. Nobody gets “Hi ,”.",
  },
];

const outcomes = [
  {
    title: "Activation",
    body: "Ada spots the step where new users stall and sends the message that gets them past it, while they're still paying attention.",
  },
  {
    title: "Adoption",
    body: "Your best accounts use features the rest have never opened. Ada guides everyone else there, one account at a time.",
  },
  {
    title: "Retention",
    body: "Most churn starts in the first 30 days, not at renewal. Ada catches the accounts going quiet and acts before they leave.",
  },
  {
    title: "Expansion and NRR",
    body: "Teams adding seats or hitting limits get the upgrade at the moment it makes sense. Not on the calendar.",
  },
];

// Each step keeps its petal colour: understand, understand, decide, act, learn.
const steps = [
  { title: "Connect PostHog, HubSpot and Customer.io.", body: "Product behaviour, account context and sending, in one place.", tint: "bg-sky-tint", dot: "bg-sky" },
  { title: "Ada reads what each account did.", body: "Every login, feature and stall, matched to who they are in your CRM.", tint: "bg-sky-tint", dot: "bg-sky" },
  { title: "She picks the next best action.", body: "The message that makes sense for that account now.", tint: "bg-iris-tint", dot: "bg-iris" },
  { title: "You approve. She sends.", body: "Every campaign goes through your growth team first.", tint: "bg-coral-tint", dot: "bg-coral" },
  { title: "You see what it added.", body: "Activations, upgrades, saved accounts. Not opens and clicks.", tint: "bg-mint-tint", dot: "bg-mint" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        display
        title="You paid to acquire them. Now keep them."
        accent="Now keep them."
        sub="Ada reads what every account does in PostHog and HubSpot, picks the next best action, and drafts the campaign in Customer.io. Your growth team reviews it and ships it. No engineering ticket. No data request."
        primary={{ label: "See what Ada finds in your data", href: "/demo/" }}
        note="Built with Customer.io · Connects to PostHog and HubSpot"
        showStrip={false}
        visual={<HeroCampaignCard />}
      />

      {/* The leak */}
      <Section label="The leak">
        <SectionHeading eyebrow="The leak" title="Most revenue leaks after onboarding." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leaks.map((leak) => (
            <li key={leak} className="rounded-[20px] border border-line bg-white p-6">
              <Droplet aria-hidden size={20} strokeWidth={1.5} className="text-stone" />
              <p className="mt-4 font-medium text-ink">{leak}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[40em] text-lg text-graphite">
          The signals are already in your product data. Nobody is acting on them.
        </p>
        <p className="mt-3 max-w-[40em] text-lg text-stone">Meanwhile, the welcome sequence from 2023 is still doing its best.</p>
      </Section>

      {/* Independence */}
      <Section fill label="Independence">
        <SectionHeading
          eyebrow="Independence"
          title="Your growth team, unblocked."
          accent="unblocked."
          body={
            <>
              <p>
                Every lifecycle idea used to wait in 3 queues. A segment needs a data request. An email needs a designer.
                Personalisation needs someone who writes Liquid. By the time it ships, the moment has passed.
              </p>
              <p className="mt-4 font-medium text-ink">Ada removes all 3.</p>
            </>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {unblocks.map(({ Icon, title, body }) => (
            <article key={title} className="rounded-[20px] border border-line bg-white p-6">
              <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-line bg-mist text-ink">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-xl sm:text-[22px]">{title}</h3>
              <p className="mt-2 text-graphite">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-[40em] text-lg font-medium text-ink">
          Engineering stays on the roadmap. Your growth team ships campaigns the same week they think of them.
        </p>
      </Section>

      {/* What it moves */}
      <Section label="What it moves">
        <SectionHeading title="What it moves" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {outcomes.map((o) => (
            <article key={o.title} className="rounded-[20px] border border-line bg-white p-6 sm:p-8">
              <h3 className="text-xl sm:text-[22px]">{o.title}</h3>
              <p className="mt-2 text-graphite">{o.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section fill id="how-it-works" label="How it works">
        <SectionHeading title="How it works" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col rounded-[20px] border border-line bg-white p-6">
              <span className={`inline-flex w-fit items-center gap-2 rounded-full px-2.5 py-1 font-mono text-xs font-medium text-ink ${s.tint}`}>
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                Step {i + 1}
              </span>
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-2 text-graphite">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* The long tail */}
      <Section label="The long tail">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The long tail"
            title="Your CS team can't call 1,000 accounts. Ada can talk to all of them."
            accent="all of them."
            body="CS covers the top 20. The other 80% of accounts get a newsletter, if that. That's where most of the expansion revenue sits, and where most of the churn starts."
          />
          <figure className="dot-grid rounded-[32px] border border-line bg-white p-6 sm:p-10">
            <div aria-hidden className="mx-auto grid max-w-[340px] grid-cols-10 gap-2 sm:gap-2.5">
              {Array.from({ length: 100 }).map((_, i) => (
                <span key={i} className={`aspect-square rounded-full ${i < 20 ? "bg-ink" : "bg-iris"}`} />
              ))}
            </div>
            <figcaption className="mx-auto mt-6 flex max-w-[340px] flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-stone">
              <span className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-ink" />
                Top accounts: your CS team
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-iris" />
                Everyone else: Ada
              </span>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* Proof */}
      <Section fill label="Proof">
        <SectionHeading
          eyebrow="Proof"
          title="An AI SaaS company. 1,000+ accounts. A CS team that could talk to maybe 50 of them."
        />
        <article className="mt-10 grid gap-8 rounded-[20px] border border-line bg-white p-6 shadow-[var(--shadow-soft)] sm:p-10 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          <div>
            <p className="font-mono text-[44px] font-medium leading-none tracking-[-0.02em] text-ink sm:text-[64px]">10</p>
            <p className="mt-3 text-stone">plan upgrades in the first month</p>
            <p className="mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-tint px-2.5 py-1 font-mono text-xs font-medium text-ink">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mint" />
                AI SaaS company
              </span>
            </p>
          </div>
          <div className="space-y-4 text-lg text-graphite">
            <p>We connected Ada to their product data and Customer.io.</p>
            <p>
              First month: 10 plan upgrades. Starter to Pro, Pro to the next tier, 1 straight to Advanced. No engineers
              involved.
            </p>
            <p className="font-medium text-ink">The revenue was already in their customer base. Nobody was talking to it.</p>
          </div>
        </article>
        <p className="mt-6 font-mono text-xs text-stone">Patterns from 200+ growth teams and 50,000+ end users.</p>
      </Section>

      {/* FAQ */}
      <Section label="FAQ">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading title="FAQ" />
          <FAQ
            items={[
              {
                q: "Do I need engineering to get started?",
                a: "If your product events are in PostHog, no. If something important isn't tracked, Ada tells you which event and why it matters.",
              },
              { q: "Does Ada send anything without approval?", a: "No. You approve. She sends." },
              {
                q: "Does it replace Customer.io?",
                a: "No. Customer.io sends. Ada decides what's worth sending, and to whom.",
              },
              {
                q: "What does Ada need access to?",
                a: (
                  <>
                    PostHog for product behaviour, HubSpot for account context, Customer.io for sending.{" "}
                    <Pending>[Security and data handling line]</Pending>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        title="The revenue is already in your customer base."
        body={
          <>
            Connect your data. See the leak in{" "}
            <span className="rounded-full border border-dashed border-white/40 px-2 py-0.5 font-mono text-sm">[N]</span>{" "}
            minutes.
          </>
        }
        ctaLabel="See what Ada finds"
      />
    </>
  );
}
