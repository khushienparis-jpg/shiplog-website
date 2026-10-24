import Link from "next/link";
import { useCases } from "@/lib/content";
import { Lockup } from "./Bloom";

type FooterItem = { label: string; href?: string };

const columns: { title: string; items: FooterItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Overview", href: "/product/" },
      { label: "Customer intelligence", href: "/product/#intelligence" },
      { label: "Next best action", href: "/product/#next-best-action" },
      { label: "Channels", href: "/product/#channels" },
      { label: "MCP", href: "/product/mcp/" },
      { label: "Integrations", href: "/integrations/" },
    ],
  },
  {
    title: "Use cases",
    items: useCases.map((u) => ({ label: u.navLabel, href: `/use-cases/${u.slug}/` })),
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about/" },
      { label: "Customers", href: "/customers/" },
      { label: "Partners", href: "/partners/" },
      { label: "Careers", href: "/careers/" },
      { label: "Pricing", href: "/pricing/" },
    ],
  },
  {
    // Resources pages are out of scope for this wireframe, so these stay unlinked.
    title: "Resources",
    items: [{ label: "Playbooks" }, { label: "Research" }, { label: "Blog" }, { label: "Events" }],
  },
  {
    title: "Legal",
    items: [{ label: "Security", href: "/security/" }, { label: "Privacy" }, { label: "Terms" }, { label: "Cookies" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Lockup size={22} />
            <p className="mt-3 text-stone">Personalisation your growth team can run on its own.</p>
            <form className="mt-8" aria-label="Newsletter" action="#">
              <p className="font-semibold text-ink">Get one playbook a week.</p>
              <p className="mt-1 text-sm text-stone">Campaigns that work, from the teams who ran them.</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email"
                  className="h-11 flex-1 rounded-[12px] border border-line bg-white px-3 placeholder:text-fog"
                />
                <button type="submit" className="h-11 rounded-full bg-ink px-5 font-medium text-white transition-colors hover:bg-graphite">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <nav key={col.title} aria-label={`Footer ${col.title}`}>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.02em] text-stone">{col.title}</p>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link href={item.href} className="text-graphite hover:text-ink">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-fog" title="Not part of this wireframe">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-stone sm:flex-row sm:justify-between">
          <p>© 2026 Shiplog, Inc. Built at Station F, Paris.</p>
          <p className="flex gap-4">
            <span>LinkedIn</span>
            <span>X</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
