"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Shiplog home">
      <span aria-hidden className="h-6 w-6 rounded-md bg-wf-box" />
      <span className="text-lg tracking-tight">Shiplog</span>
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
    <header className="sticky top-0 z-40 border-b border-wf-box bg-wf-bg">
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
                  className={`flex min-h-11 items-center gap-1 rounded-md px-3 text-[15px] hover:bg-wf-fill ${
                    pathname.startsWith("/use-cases") ? "font-semibold" : ""
                  }`}
                >
                  {link.label}
                  <span aria-hidden className="text-xs">▾</span>
                </button>
                {menuOpen ? (
                  <ul
                    id="usecases-menu"
                    className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-wf-box bg-wf-bg p-2"
                  >
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className="flex min-h-11 items-center rounded-md px-3 text-[15px] hover:bg-wf-fill"
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
                  className={`flex min-h-11 items-center rounded-md px-3 text-[15px] hover:bg-wf-fill ${
                    isActive(link.href) ? "font-semibold" : ""
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
            className="hidden min-h-11 items-center rounded-lg bg-accent px-4 text-[15px] font-medium text-white hover:bg-accent-dark sm:inline-flex"
          >
            Book a demo
          </Link>
          <button
            type="button"
            className="flex min-h-11 items-center rounded-md border border-wf-ink px-3 text-sm font-medium lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      {mobileOpen ? (
        <div id="mobile-menu" className="border-t border-wf-box bg-wf-bg lg:hidden">
          <ul className="mx-auto max-w-[1200px] space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <p className="px-3 pb-1 pt-3 font-mono text-xs uppercase tracking-wider text-wf-muted">{link.label}</p>
                    <ul>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="flex min-h-11 items-center rounded-md px-3 hover:bg-wf-fill">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={link.href} className="flex min-h-11 items-center rounded-md px-3 hover:bg-wf-fill">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/demo/"
                className="flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 font-medium text-white"
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
