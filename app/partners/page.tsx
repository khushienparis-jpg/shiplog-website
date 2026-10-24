import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SplitBlock } from "@/components/SplitBlock";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Partners | Shiplog" };

export default function PartnersPage() {
  return (
    <>
      <Hero
        eyebrow="Partners"
        title="Better together with the tools you use." accent="Better together"
        sub="Shiplog adds the intelligence layer to the platforms your customers already trust."
        primary={{ label: "Book a demo", href: "/demo/" }}
        secondary={{ label: "Become a partner", href: "/demo/" }}
      />
      <SplitBlock
        title="Technology partners"
        body="Shiplog is an official Customer.io partner and works alongside HubSpot, Snowflake and Stripe. Your customers keep their stack. Shiplog makes it smarter."
        placeholder="Partner logos in neutral boxes: Customer.io, HubSpot, Snowflake, Stripe"
      />
      <SplitBlock
        fill
        flip
        title="Agency and consulting partners"
        body="Bring Shiplog to your clients. You keep the relationship and the strategy. Shiplog handles the signals, decisions and execution at scale."
        placeholder="Diagram: agency owns the client relationship, Shiplog runs signals, decisions and execution"
      >
        <Button href="/demo/" variant="secondary">
          Become a partner
        </Button>
      </SplitBlock>
      <SplitBlock
        title="Events with partners"
        body="We host dinners, hackathons and panels with our partners across Europe and the US."
        placeholder="Event photo: partner dinner (natural light, no stock)"
      />
      <CTASection />
    </>
  );
}
