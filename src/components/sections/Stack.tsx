"use client";

import { useState } from "react";

const stackGroups = [
  {
    id: "frontend",
    label: "01",
    title: "Frontend",
    description:
      "Interfaces modernas, responsivas e orientadas à experiência do usuário.",
    technologies: [
      { name: "Next.js", detail: "App Router · SSR · SSG" },
      { name: "React", detail: "Component architecture" },
      { name: "TypeScript", detail: "Strict typing" },
      { name: "Tailwind CSS", detail: "UI · Responsive design" },
    ],
  },
  {
    id: "backend",
    label: "02",
    title: "Backend",
    description:
      "APIs, autenticação e regras de negócio para aplicações e sistemas.",
    technologies: [
      { name: "PHP", detail: "Backend · APIs" },
      { name: "Node.js", detail: "APIs · Services" },
      { name: "REST", detail: "API architecture" },
      { name: "Next.js", detail: "Server-side logic" },
    ],
  },
  {
    id: "data",
    label: "03",
    title: "Dados",
    description:
      "Modelagem e persistência com foco em consistência, integridade e evolução.",
    technologies: [
      { name: "PostgreSQL", detail: "Relational database" },
      { name: "SQL", detail: "Queries · Modeling" },
      { name: "Supabase", detail: "Database · Auth" },
      { name: "Prisma", detail: "ORM · Type-safe data" },
    ],
  },
  {
    id: "engineering",
    label: "04",
    title: "Engineering",
    description:
      "Práticas para manter projetos organizados, versionados e sustentáveis.",
    technologies: [
      { name: "Git", detail: "Version control" },
      { name: "Linux", detail: "Server environments" },
      { name: "SOLID", detail: "Software design" },
      { name: "Clean Code", detail: "Maintainability" },
    ],
  },
];

const appliedExperience = [
  {
    title: "Automação",
    description:
      "Automação de processos e soluções voltadas à eficiência operacional.",
  },
  {
    title: "Aquecimento solar",
    description:
      "Atuação com instalação de sistemas de aquecimento solar residencial.",
  },
  {
    title: "Piscinas",
    description:
      "Instalação e soluções de aquecimento solar para piscinas.",
  },
];

export default function Stack() {
  const [activeGroup, setActiveGroup] = useState("frontend");

  const active = stackGroups.find((group) => group.id === activeGroup);

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="border-t border-white/6 py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <span className="eyebrow">Technology</span>

            <h2
              id="stack-title"
              className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-tighter text-white sm:text-5xl"
            >
              Ferramentas para
              <br />
              transformar problemas
              <br />
              em soluções.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-2">
            <p className="text-base leading-7 text-white/60 sm:text-lg">
              Trabalho com uma stack voltada à construção de aplicações web,
              APIs e sistemas de negócio.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/35">
              A tecnologia é escolhida de acordo com o problema, o contexto e
              a necessidade do produto. Ferramenta boa é ferramenta que resolve.
            </p>
          </div>
        </div>

        {/* Stack explorer */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/8 bg-[#090a0d]">
          <div className="grid lg:grid-cols-[0.55fr_1.45fr]">
            {/* Navigation */}
            <nav
              aria-label="Categorias de tecnologia"
              className="border-b border-white/6 lg:border-b-0 lg:border-r"
            >
              {stackGroups.map((group) => {
                const isActive = activeGroup === group.id;

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveGroup(group.id)}
                    aria-pressed={isActive}
                    className={`group flex min-h-16 w-full items-center gap-4 border-b border-white/6 px-5 text-left transition-colors duration-300 last:border-b-0 sm:px-6 ${
                      isActive
                        ? "bg-white/[0.035]"
                        : "hover:bg-white/2"
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] ${
                        isActive ? "text-lime-300" : "text-white/20"
                      }`}
                    >
                      {group.label}
                    </span>

                    <span
                      className={`text-sm font-semibold sm:text-base ${
                        isActive
                          ? "text-white"
                          : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {group.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`ml-auto h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-lime-300 shadow-[0_0_10px_rgba(216,255,62,0.65)]"
                          : "bg-white/10"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Active panel */}
            <div className="p-6 sm:p-8 lg:p-9">
              {active && (
                <>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-lime-300">
                        {active.label} / {active.id}
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                        {active.title}
                      </h3>
                    </div>

                    <p className="max-w-sm text-xs leading-6 text-white/35 sm:text-right">
                      {active.description}
                    </p>
                  </div>

                  <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-white/6 bg-white/6 sm:grid-cols-2">
                    {active.technologies.map((technology) => (
                      <div
                        key={technology.name}
                        className="group bg-[#090a0d] p-5 transition-colors duration-300 hover:bg-[#0d0f13]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-base font-semibold tracking-tight text-white">
                            {technology.name}
                          </span>

                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-white/10 transition-colors group-hover:bg-lime-300"
                          />
                        </div>

                        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                          {technology.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Applied technology */}
        <div className="mt-10">
          <div className="mb-5">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-lime-300/80">
              Além do software
            </span>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
              Tecnologia também aplicada ao mundo real.
            </h3>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 md:grid-cols-3">
            {appliedExperience.map((item) => (
              <article
                key={item.title}
                className="bg-[#090a0d] p-5 transition-colors duration-300 hover:bg-[#0d0f13] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-lime-300"
                  />

                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                </div>

                <p className="mt-3 text-xs leading-6 text-white/35">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Engineering principles */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-3">
          <div className="bg-[#090a0d] p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
              Architecture
            </span>

            <p className="mt-3 text-base font-semibold tracking-tight text-white">
              Simplicidade primeiro
            </p>

            <p className="mt-2 text-xs leading-5 text-white/30">
              Estrutura clara antes de complexidade desnecessária.
            </p>
          </div>

          <div className="bg-[#090a0d] p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
              Quality
            </span>

            <p className="mt-3 text-base font-semibold tracking-tight text-white">
              Código sustentável
            </p>

            <p className="mt-2 text-xs leading-5 text-white/30">
              Código pensado para ser entendido, mantido e evoluído.
            </p>
          </div>

          <div className="bg-[#090a0d] p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
              Delivery
            </span>

            <p className="mt-3 text-base font-semibold tracking-tight text-white">
              Construir para entregar
            </p>

            <p className="mt-2 text-xs leading-5 text-white/30">
              Engenharia precisa sair do papel e gerar resultado.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/6 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-white/30">
            Minha experiência une desenvolvimento de software, infraestrutura,
            operação e soluções práticas para problemas do mundo real.
          </p>

          <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
            Technology serves the problem
          </span>
        </div>
      </div>
    </section>
  );
}