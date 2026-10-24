"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content";
import { Lockup } from "./Bloom";

function Logo() {
  return (
    <Link href="/" className="flex min-h-11 items-center rounded-full" aria-label="Shiplog home">
      <Lockup size={24} />
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} ref={menuRef} className="relative">
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-controls="usecases-menu"
                  onClick={() => setMenuOpen((o) => !o)}
                  className={`flex min-h-11 items-center gap-1 rounded-full px-3 text-[15px] text-graphite hover:bg-mist hover:text-ink ${
                    pathname.startsWith("/use-cases") ? "font-medium text-ink" : ""
                  }`}
                >
                  {link.label}
                  <ChevronDown aria-hidden size={14} strokeWidth={1.75} className={`transition-transform ${menuOpen ? "rotate-180" : ""}`} />
                </button>
                {menuOpen ? (
                  <ul
                    id="usecases-menu"
                    className="absolute left-0 top-full mt-2 w-60 rounded-[20px] border border-line bg-white p-2 shadow-[var(--shadow-soft)]"
                  >
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className="flex min-h-11 items-center rounded-[12px] px-3 text-[15px] text-graphite hover:bg-mist hover:text-ink aria-[current=page]:bg-iris-tint aria-[current=page]:text-ink"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-full px-3 text-[15px] text-graphite hover:bg-mist hover:text-ink ${
                    isActive(link.href) ? "font-medium text-ink" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href="/demo/"
            className="hidden h-11 items-center rounded-full bg-ink px-5 text-[15px] font-medium text-white transition-colors hover:bg-graphite sm:inline-flex"
          >
            Book a demo
          </Link>
          <button
            type="button"
            className="flex h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-medium text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      {mobileOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-[1200px] space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <p className="px-3 pb-1 pt-3 font-mono text-xs uppercase tracking-[0.02em] text-stone">{link.label}</p>
                    <ul>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="flex min-h-11 items-center rounded-[12px] px-3 text-graphite hover:bg-mist hover:text-ink">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={link.href} className="flex min-h-11 items-center rounded-[12px] px-3 text-graphite hover:bg-mist hover:text-ink">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/demo/"
                className="flex h-11 items-center justify-center rounded-full bg-ink px-4 font-medium text-white"
              >
                Book a demo
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
