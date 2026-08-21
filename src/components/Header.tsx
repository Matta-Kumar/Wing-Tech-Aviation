"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaretDown, List, X } from "@phosphor-icons/react";

const programmes = [
  { href: "/cpl", label: "Commercial Pilot Licence" },
  { href: "/ame", label: "Aircraft Maintenance Engineering" },
  { href: "/cabin-crew", label: "Cabin Crew" },
  { href: "/airport-management", label: "Airport Management & Operations" },
];

const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/campus", label: "Campus" },
  { href: "/faculty", label: "Faculty" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 64);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-300 ${
        solid ? "bg-ivory/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logo-icon.png" alt="" width={36} height={36} className="h-9 w-9" priority />
          <span className="flex flex-col leading-none">
            <span
              className={`font-heading text-xl font-black uppercase tracking-wide ${
                solid ? "text-navy" : "text-white"
              }`}
            >
              Wing Tech
            </span>
            <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-bright">
              Institute of Aviation
            </span>
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-7 text-sm tracking-wide lg:flex ${
            solid ? "text-charcoal" : "text-white/90"
          }`}
        >
          <Link href="/" className="link-underline">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProgrammesOpen(true)}
            onMouseLeave={() => setProgrammesOpen(false)}
          >
            <button className="link-underline flex items-center gap-1">
              Programmes <CaretDown size={12} weight="bold" />
            </button>
            {programmesOpen && (
              <ul className="absolute left-0 top-full w-72 border border-hairline bg-white py-2 text-charcoal shadow-lg">
                {programmes.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="block px-4 py-2 text-sm hover:text-navy">
                      {p.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/career-pathways"
                    className="block border-t border-hairline px-4 py-2 text-sm font-medium text-navy"
                  >
                    Compare all pathways
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="link-underline">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/eligibility"
          className={`hidden rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-colors lg:inline-block ${
            solid
              ? "border-navy text-navy hover:bg-navy hover:text-white"
              : "border-white/60 text-white hover:bg-white/10"
          }`}
        >
          Check Eligibility
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden ${solid ? "text-navy" : "text-white"}`}
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-hairline bg-ivory lg:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-4 text-charcoal">
            <li>
              <Link href="/" className="block py-2 text-sm">
                Home
              </Link>
            </li>
            {programmes.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="block py-2 text-sm">
                  {p.label}
                </Link>
              </li>
            ))}
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/eligibility"
                className="inline-block rounded-full border border-navy px-4 py-2 text-sm font-medium text-navy"
              >
                Check Eligibility
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
