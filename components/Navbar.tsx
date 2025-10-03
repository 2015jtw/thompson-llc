"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navPadding = hasScrolled ? "py-3" : "py-4";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_10px_40px_-24px_rgba(15,23,42,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-4 ${navPadding}`}>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 font-semibold text-slate-900 transition hover:border-slate-200 hover:bg-white/80"
        >
          <span className="text-base uppercase tracking-[0.4em] text-slate-500">Thompson</span>
          <span className="text-lg">LLC</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:text-slate-900"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:scale-105 hover:shadow-xl"
          >
            Let&rsquo;s Talk
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-700 transition hover:border-slate-300 hover:bg-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl border border-transparent bg-white/80 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm transition hover:border-slate-200 hover:text-slate-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-600/20 transition hover:scale-[1.02] hover:shadow-xl"
            >
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
