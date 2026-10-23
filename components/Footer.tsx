import Link from "next/link";
import { useCases } from "@/lib/content";

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
    <footer className="border-t border-wf-box bg-wf-fill">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <p className="text-lg font-semibold">Shiplog</p>
            <p className="mt-2 text-wf-muted">No code personalisation for every team.</p>
            <form className="mt-8" aria-label="Newsletter" action="#">
              <p className="font-semibold">Get one playbook a week.</p>
              <p className="mt-1 text-sm text-wf-muted">Campaigns that work, from the teams who ran them.</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email"
                  className="min-h-11 flex-1 rounded-lg border border-[#8c8c8c] bg-wf-bg px-3"
                />
                <button type="submit" className="min-h-11 rounded-lg border border-wf-ink px-4 font-medium hover:bg-wf-bg">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <nav key={col.title} aria-label={`Footer ${col.title}`}>
                <p className="font-mono text-xs uppercase tracking-wider text-wf-muted">{col.title}</p>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link href={item.href} className="hover:underline">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-wf-muted" title="Not part of this wireframe">
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
        <div className="mt-12 flex flex-col gap-2 border-t border-wf-box pt-6 text-sm text-wf-muted sm:flex-row sm:justify-between">
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
