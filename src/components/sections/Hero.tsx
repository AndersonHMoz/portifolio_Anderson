
"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const codeLines = [
  {
    number: "01",
    content: (
      <>
        <span className="text-purple-300">const</span>{" "}
        <span className="text-white">developer</span>{" "}
        <span className="text-white/70">=</span>{" "}
        <span className="text-lime-300">{"{"}</span>
      </>
    ),
  },
  {
    number: "02",
    content: (
      <>
        <span className="text-white/75"> name:</span>{" "}
        <span className="text-emerald-300">
          &quot;Anderson Moz&quot;
        </span>
        <span className="text-white/70">,</span>
      </>
    ),
  },
  {
    number: "03",
    content: (
      <>
        <span className="text-white/75"> role:</span>{" "}
        <span className="text-emerald-300">
          &quot;Full Stack Developer&quot;
        </span>
        <span className="text-white/70">,</span>
      </>
    ),
  },
  {
    number: "04",
    content: (
      <>
        <span className="text-white/75"> frontend:</span>{" "}
        <span className="text-white/90">[</span>
        <span className="text-sky-300">&quot;Next.js&quot;</span>
        <span className="text-white/70">, </span>
        <span className="text-sky-300">&quot;TypeScript&quot;</span>
        <span className="text-white/90">]</span>
        <span className="text-white/70">,</span>
      </>
    ),
  },
  {
    number: "05",
    content: (
      <>
        <span className="text-white/75"> backend:</span>{" "}
        <span className="text-white/90">[</span>
        <span className="text-sky-300">&quot;PHP&quot;</span>
        <span className="text-white/70">, </span>
        <span className="text-sky-300">&quot;Node.js&quot;</span>
        <span className="text-white/90">]</span>
        <span className="text-white/70">,</span>
      </>
    ),
  },
  {
    number: "06",
    content: (
      <>
        <span className="text-white/75"> database:</span>{" "}
        <span className="text-sky-300">&quot;PostgreSQL&quot;</span>
        <span className="text-white/70">,</span>
      </>
    ),
  },
  {
    number: "07",
    content: (
      <>
        <span className="text-white/75"> focus:</span>{" "}
        <span className="text-amber-300">&quot;real problems&quot;</span>
      </>
    ),
  },
  {
    number: "08",
    content: (
      <>
        <span className="text-lime-300">{"}"}</span>
        <span className="text-white/70">;</span>
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-lime-300/5 blur-[120px]" />

        <div className="absolute right-[8%] top-[28%] h-96 w-96 rounded-full bg-cyan-400/4 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[72px_72px] mask-[linear-gradient(to_bottom,black_0%,transparent_85%)]" />
      </div>

      <div className="container relative">
        <div className="grid min-h-[calc(100vh-76px)] items-center gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-24">
          {/* =========================================================
              MAIN CONTENT
          ========================================================= */}
          <div className="relative">
            {/* Availability */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="relative flex h-2 w-2"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300/60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(216,255,62,0.8)]" />
              </span>

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Available for CLT · PJ · Freelance
              </span>
            </div>

            {/* Name */}
            <h1 className="mt-8 text-[clamp(4rem,11vw,9.5rem)] font-bold leading-[0.78] tracking-[-0.075em] text-white">
              Anderson
              <br />
              <span className="text-white/45">
                Moz
              </span>
              <span className="text-lime-300">
                .
              </span>
            </h1>

            {/* Role */}
            <div className="mt-10">
              <p className="max-w-2xl text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Full Stack Developer
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Construo aplicações web, APIs e sistemas de negócio com
                foco em arquitetura, performance e código que aguenta
                crescer.
              </p>
            </div>

            {/* Stack */}
            <div className="mt-7 flex max-w-2xl flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-white/65">
              <span>PHP</span>

              <span className="text-lime-300">
                ·
              </span>

              <span>Next.js</span>

              <span className="text-lime-300">
                ·
              </span>

              <span>TypeScript</span>

              <span className="text-lime-300">
                ·
              </span>

              <span>Node.js</span>

              <span className="text-lime-300">
                ·
              </span>

              <span>PostgreSQL</span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {/* Primary CTA */}
              <Link
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-bold text-black shadow-[0_8px_30px_rgba(216,255,62,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-200 hover:shadow-[0_14px_40px_rgba(216,255,62,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506]"
              >
                <span className="font-bold text-black">
                  Ver projetos
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-lime-300 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506]"
              >
                <span className="text-white">
                  Vamos conversar
                </span>
              </Link>
            </div>
          </div>

          {/* =========================================================
              CODE VISUAL
          ========================================================= */}
          <div className="relative">
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-12 rounded-full bg-lime-300/4 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#08090c] shadow-2xl">
              {/* Terminal header */}
              <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>

                <div className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60">
                  <Terminal
                    size={12}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  developer.ts
                </div>

                <span className="h-5 w-5" />
              </div>

              {/* Code */}
              <div className="overflow-x-auto px-4 py-6 sm:px-6 sm:py-8">
                <div className="min-w-107.5 space-y-2 font-mono text-[10px] leading-6 sm:text-[11px]">
                  {codeLines.map((line) => (
                    <div
                      key={line.number}
                      className="flex gap-5"
                    >
                      <span className="w-5 shrink-0 select-none text-right text-white/30">
                        {line.number}
                      </span>

                      <code className="whitespace-nowrap">
                        {line.content}
                      </code>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal status */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/50">
                  TypeScript · Strict
                </span>

                <span className="flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(216,255,62,0.7)]" />

                  System online
                </span>
              </div>
            </div>

            {/* Primary stack badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/15 bg-[#0a0b0e]/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <div className="font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-white/50">
                Primary stack
              </div>

              <div className="mt-1.5 text-xs font-semibold text-white">
                PHP × Next.js
              </div>
            </div>

            {/* Availability badge */}
            <div className="absolute -right-4 -top-5 hidden rounded-xl border border-lime-300/20 bg-[#0a0b0e]/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(216,255,62,0.8)]" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-lime-300">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden items-center gap-3 pb-8 lg:flex">
          <ArrowDown
            size={14}
            strokeWidth={1.5}
            className="animate-bounce text-white/50"
            aria-hidden="true"
          />

          <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}

