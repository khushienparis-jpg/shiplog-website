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
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
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
