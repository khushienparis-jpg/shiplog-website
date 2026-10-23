import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Placeholder } from "@/components/Placeholder";
import { BulletList, Button, Section } from "@/components/ui";
import { backers } from "@/lib/content";

export const metadata: Metadata = { title: "About | Shiplog" };

const team = [
  { name: "Khushi Mehta", role: "Cofounder and CEO", bio: "Started her first company at 17 and has worked in AI go to market since. ESCP." },
  { name: "Mehdi Gribaa", role: "Cofounder and CTO", bio: "[One line bio: confirm with Mehdi.]" },
  { name: "Diwan", role: "[Role]", bio: "[Short bio]" },
  { name: "Yash", role: "[Role]", bio: "[Short bio]" },
];

export default function AboutPage() {
  return (
    <>
      <Hero eyebrow="About" title="We're building the layer that understands every customer." />

      <Section label="Why we exist">
        <SectionHeading
          title="Why we exist"
          body="Companies pour money into acquisition while the cheapest revenue sits in the customers they already have. Acting on it used to take a data team, lifecycle marketers and months of work. We started Shiplog to make it simple for every company, not just the ones that can afford a department for it."
        />
      </Section>

      <Section fill label="What we believe">
        <SectionHeading title="What we believe" />
        <BulletList
          className="mt-8 max-w-3xl"
          items={[
            {
              title: "Personalisation should be the default.",
              body: "No code, beautiful and easy enough for any team, not a luxury for companies with a data department.",
            },
            {
              title: "Actions beat predictions.",
              body: "A churn score helps no one until someone acts on it. We build the part that acts.",
            },
            {
              title: "Personalisation is a team sport.",
              body: "Growth, CS and product should work on customers together, in one place.",
            },
            { title: "Agents propose, humans decide.", body: "Trust is earned one approved campaign at a time." },
          ]}
        />
      </Section>

      <Section label="The team">
        <SectionHeading title="The team" />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <li key={p.name}>
              <Placeholder label={`Team photo: ${p.name}`} ratio="aspect-square" />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="font-mono text-xs text-wf-muted">{p.role}</p>
              <p className="mt-2 text-sm text-wf-muted">{p.bio}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8">We met through Entrepreneur First and build from Station F in Paris.</p>
      </Section>

      <Section fill label="Backed by">
        <h2 className="text-[26px] sm:text-[32px]">Backed by</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {backers.map((b) => (
            <li
              key={b}
              className="flex h-16 items-center justify-center rounded-xl bg-wf-box px-2 text-center font-mono text-xs text-[#262626]"
            >
              [Logo: {b}]
            </li>
          ))}
        </ul>
        <p className="mt-4 text-wf-muted">Part of F/AI at Station F.</p>
      </Section>

      <Section label="Careers">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-wf-box p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <h2 className="text-xl sm:text-[22px]">Want to build this with us?</h2>
          <Button href="/careers/" variant="secondary">
            See open roles
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
