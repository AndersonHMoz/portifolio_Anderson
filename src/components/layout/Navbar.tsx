"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-page">
        <nav className="flex h-24 items-center justify-between border-b border-black/10">
          <Link
            href="/"
            className="text-sm font-bold tracking-[-0.02em]"
            aria-label="Anderson Moz - início"
          >
            ANDERSON MOZ
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.12em] text-black/60 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contato"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]"
            >
              Contato
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="border-b border-black/10 bg-[#f4f1eb] py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.12em]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em]"
              >
                Contato
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}