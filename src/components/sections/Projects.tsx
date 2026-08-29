
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
  const project = projects.find((item) => item.featured);

  if (!project) {
    return null;
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-white/10 py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-lime-300">
              Selected work
            </span>

            <h2
              id="projects-title"
              className="mt-4 max-w-2xl text-3xl font-semibold leading-none tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
            >
              Software construído
              <br />
              para problemas reais.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/55">
            Um projeto de engenharia de software desenvolvido para resolver
            necessidades reais de negócio, combinando arquitetura, backend,
            banco de dados e regras operacionais.
          </p>
        </div>

        {/* Featured project */}
        <article className="group mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#090a0d] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* Content */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-9">
              <div>
                {/* Label */}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-lime-300">
                    Featured project
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                    Case study
                  </span>
                </div>

                {/* Project title */}
                <h3 className="mt-7 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className="mt-6 flex max-w-xl flex-wrap gap-2"
                  aria-label="Tecnologias utilizadas"
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-widest text-white/55 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/70"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={`/projetos/${project.slug}`}
                  aria-label={`Explorar case study de ${project.title}`}
                  className="group/link inline-flex min-h-12 items-center gap-3 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold tracking-tight text-black shadow-[0_8px_28px_rgba(216,255,62,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_12px_35px_rgba(216,255,62,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0d]"
                >
                  <span className="font-bold text-black">Explorar case</span>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-lime-300"
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </div>
            </div>

            {/* Project visual */}
            <div className="relative min-h-75 overflow-hidden border-t border-white/10 bg-[#050506] sm:min-h-90 lg:min-h-107.5 lg:border-l lg:border-t-0">
              {/* Ambient light */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.035] blur-3xl transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image stage */}
              <div className="absolute inset-4 flex items-center justify-center sm:inset-6 lg:inset-8">
                <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#08090b] shadow-[0_20px_55px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover:-translate-y-1">
                  {/* Browser chrome */}
                  <div
                    aria-hidden="true"
                    className="flex h-8 items-center border-b border-white/10 bg-white/2.5 px-3"
                  >
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    </div>

                    <div className="mx-auto h-3.5 w-[48%] rounded bg-white/[0.035]" />
                  </div>

                  {/* Screenshot */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#050506]">
                    <Image
                      src={project.image ?? "/images/projects/pedido.png"}
                      alt={`Tela do projeto ${project.title}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 55vw"
                      className="object-contain object-center p-1.5 transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                    />

                    {/* Subtle readability layer */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-white/2.5"
                    />

                    {/* Accent */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-lime-300/45"
                    />
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="absolute bottom-4 right-4 z-20 rounded-md border border-white/10 bg-[#0b0d10]/95 px-3 py-2 shadow-lg backdrop-blur-md sm:bottom-5 sm:right-5">
                <div className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/55">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-lime-300"
                  />

                  {project.status ?? "Em desenvolvimento"}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project metadata */}
        <div className="mt-3 grid overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-3">
          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              Type
            </span>

            <p className="mt-2.5 text-sm font-semibold tracking-tight text-white">
              Business System
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Sistema orientado a operações e processos reais.
            </p>
          </div>

          <div className="border-t border-white/10 bg-[#090a0d] p-5 sm:border-l sm:border-t-0 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              Architecture
            </span>

            <p className="mt-2.5 text-sm font-semibold tracking-tight text-white">
              PHP + PostgreSQL
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Backend, dados, autenticação e regras de negócio.
            </p>
          </div>

          <div className="border-t border-white/10 bg-[#090a0d] p-5 sm:border-l sm:border-t-0 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              Direction
            </span>

            <p className="mt-2.5 text-sm font-semibold tracking-tight text-white">
              Production mindset
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Pensado para evolução, manutenção e crescimento.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base font-medium leading-7 tracking-[-0.02em] text-white/55 sm:text-lg">
            <span className="text-white">
              Um projeto bem construído diz mais que uma lista de tecnologias.
            </span>{" "}
            Aqui, o objetivo é mostrar como penso, projeto e construo software
            para problemas reais.
          </p>

          <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
            {project.title}
          </span>
        </div>
      </div>
    </section>
  );
}

