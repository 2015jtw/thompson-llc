"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Challenge", href: "#challenge" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="#top"
            className="font-semibold tracking-[0.4em] text-slate-700"
          >
            THOMPSON <span className="tracking-normal">LLC</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium uppercase tracking-[0.35em] text-slate-600 transition hover:text-slate-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Let&rsquo;s Talk
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white/80 text-slate-700 backdrop-blur hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={close}
                className="w-full rounded-md px-3 py-2 text-base font-medium uppercase tracking-[0.3em] text-slate-700 hover:bg-slate-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
