import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui";
import { HeroDemo } from "@/components/home/HeroDemo";
import { LeakTabs } from "@/components/home/LeakTabs";
import { UnblockDemo } from "@/components/home/UnblockDemo";
import { FlowSteps } from "@/components/home/FlowSteps";

export default function HomePage() {
  return (
    <>
      <Hero
        display
        title="You paid to acquire them. Now keep them."
        accent="Now keep them."
        sub="Ada finds what every account needs next. You approve. She sends."
        primary={{ label: "See what Ada finds", href: "/demo/" }}
        note="Built with Customer.io · Connects to PostHog and HubSpot"
        showStrip={false}
        visual={<HeroDemo />}
      />

      <Section label="The leak">
        <SectionHeading title="Most revenue leaks after onboarding." body="The signals are in your data. Nobody acts on them." />
        <div className="mt-10">
          <LeakTabs />
        </div>
      </Section>

      <Section fill label="Unblocked">
        <SectionHeading title="Your growth team, unblocked." accent="unblocked." body="Ask in plain words. Ada does the specialist work." />
        <div className="mt-10">
          <UnblockDemo />
        </div>
      </Section>

      <Section id="how-it-works" label="How it works">
        <SectionHeading title="How it works." />
        <div className="mt-10">
          <FlowSteps />
        </div>
      </Section>

      <Section fill label="Proof">
        <div className="grid items-end gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
          <p className="font-mono text-[96px] font-medium leading-none tracking-[-0.04em] text-ink sm:text-[140px]">10</p>
          <div>
            <h2 className="text-[28px] sm:text-[36px]">
              plan upgrades in month one. <span className="serif-accent">No engineers.</span>
            </h2>
            <p className="mt-3 text-lg text-graphite">An AI SaaS company. 1,000+ accounts. CS could reach 50.</p>
            <p className="mt-6 font-mono text-xs text-stone">Patterns from 200+ growth teams and 50,000+ end users.</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="The revenue is already in your customer base."
        body={
          <>
            See the leak in{" "}
            <span className="rounded-full border border-dashed border-white/40 px-2 py-0.5 font-mono text-sm">[N]</span> minutes.
          </>
        }
        ctaLabel="See what Ada finds"
      />
    </>
  );
}
