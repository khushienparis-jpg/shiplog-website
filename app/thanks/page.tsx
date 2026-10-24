import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui";

export const metadata: Metadata = { title: "You're booked | Shiplog", robots: { index: false } };

export default function ThanksPage() {
  return (
    <>
      <Hero
        title="You're booked."
        sub="You'll get a calendar invite in a minute. Before we meet, we'll look at your website and product so the call is about you, not us."
      />
      <Section label="While you wait">
        <h2 className="text-[26px] sm:text-[32px]">While you wait</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          <li className="rounded-[20px] border border-line bg-white p-6">
            <h3 className="text-lg font-semibold">Read a playbook.</h3>
            <p className="mt-2 text-wf-muted">See a campaign that drove 10 upgrades.</p>
            <Link href="/customers/ai-saas-upgrades/" className="mt-4 inline-block font-medium underline underline-offset-4">
              Read it<span className="sr-only">: a campaign that drove 10 upgrades</span>
            </Link>
          </li>
          <li className="rounded-[20px] border border-line bg-white p-6">
            <h3 className="text-lg font-semibold">Follow along.</h3>
            <p className="mt-2 text-wf-muted">We share what we learn on LinkedIn almost every day.</p>
            <span className="mt-4 inline-block font-medium text-wf-muted">Follow Shiplog [LinkedIn link]</span>
          </li>
        </ul>
      </Section>
    </>
  );
}
