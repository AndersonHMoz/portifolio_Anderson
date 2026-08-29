"use client";

import Link from "next/link";

const navigation = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 border-b border-white/10 bg-[#050506]/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between sm:h-17">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Anderson Moz - início"
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/3 font-mono text-[10px] font-bold tracking-[-0.04em] text-white transition-all duration-300 group-hover:border-lime-300/40">
            <span className="relative z-10">AM</span>

            <span
              aria-hidden="true"
              className="absolute inset-0 translate-y-full bg-lime-300/8 transition-transform duration-300 group-hover:translate-y-0"
            />
          </span>

          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors duration-300 group-hover:text-white sm:block">
            Anderson Moz
          </span>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        {/* Status + CTA */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(216,255,62,0.7)]"
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
              Available
            </span>
          </div>

          <Link
            href="#contact"
            className="group inline-flex min-h-9 items-center gap-2 rounded-full border border-white/15 bg-white/3 px-3.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-300/40 hover:bg-lime-300/5 hover:text-lime-300 sm:px-4"
          >
            Let&apos;s talk

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-white/30 transition-colors duration-300 group-hover:bg-lime-300"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}