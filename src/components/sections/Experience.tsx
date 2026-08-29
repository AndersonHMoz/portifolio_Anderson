"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  HardHat,
  Laptop,
  Network,
  Server,
  Wrench,
} from "lucide-react";

type ExperienceItem = {
  year: string;
  label: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  featured?: boolean;
  current?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    year: "2017",
    label: "PRIMEIROS PASSOS",
    role: "Auxiliar de Escritório",
    company: "Experiência profissional inicial",
    description:
      "Primeiro contato com o ambiente profissional, desenvolvendo organização, responsabilidade, rotina administrativa e atenção aos processos.",
    technologies: ["Organização", "Processos", "Atendimento", "Rotina"],
    icon: BriefcaseBusiness,
  },
  {
    year: "2018 — 2019",
    label: "OPERAÇÕES",
    role: "Repositor de Mercadorias",
    company: "Operações e varejo",
    description:
      "Atuação em ambiente operacional, desenvolvendo disciplina, agilidade, organização e capacidade de trabalhar seguindo processos e metas.",
    technologies: ["Operações", "Logística", "Organização", "Processos"],
    icon: Building2,
  },
  {
    year: "2020 — 2021",
    label: "LOGÍSTICA",
    role: "Auxiliar de Transporte",
    company: "RodoNaves Transportes e Encomendas",
    description:
      "Experiência em operações logísticas e movimentação de cargas, trabalhando em uma rotina que exige organização, responsabilidade e cumprimento de processos.",
    technologies: ["Logística", "Operações", "Processos", "Responsabilidade"],
    icon: HardHat,
  },
  {
    year: "2022 — 2024",
    label: "TECNOLOGIA",
    role: "Técnico de Informática",
    company: "UNINGÁ — Unidade de Ensino Superior Ingá",
    description:
      "Entrada profissional consolidada em tecnologia, atuando com suporte, infraestrutura, manutenção de equipamentos, sistemas e resolução de problemas em ambiente corporativo.",
    technologies: [
      "Infraestrutura",
      "Suporte",
      "Hardware",
      "Sistemas",
      "Redes",
    ],
    icon: Server,
    featured: true,
  },
  {
    year: "2022 — 2024",
    label: "AMBIENTE CRÍTICO",
    role: "Engenharia Clínica",
    company: "Hospital Memorial UNINGÁ",
    description:
      "Atuação em conjunto com a área de tecnologia dentro do ambiente hospitalar, acompanhando equipamentos, manutenção preventiva e corretiva, diagnóstico de falhas e continuidade operacional.",
    technologies: [
      "Engenharia Clínica",
      "Diagnóstico",
      "Manutenção",
      "Equipamentos",
      "Ambiente Hospitalar",
    ],
    icon: Wrench,
    featured: true,
  },
  {
    year: "2024",
    label: "SUPORTE ESPECIALIZADO",
    role: "Analista de Suporte Técnico",
    company: "Intersul Telecom Comunicações",
    description:
      "Atuação com suporte técnico e resolução de problemas, ampliando a experiência com diagnóstico, atendimento e sustentação de ambientes tecnológicos.",
    technologies: [
      "Suporte Técnico",
      "Troubleshooting",
      "Sistemas",
      "Atendimento",
    ],
    icon: Network,
  },
  {
    year: "2024 — HOJE",
    label: "ENGENHARIA DE SOFTWARE",
    role: "Full Stack Developer",
    company: "Projetos independentes · MEI",
    description:
      "Transição para engenharia de software, construindo aplicações web, APIs e sistemas de negócio. Atuação desde a definição da solução até arquitetura, desenvolvimento, banco de dados, autenticação e regras de negócio.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PHP",
      "Node.js",
      "PostgreSQL",
    ],
    icon: Code2,
    featured: true,
    current: true,
  },
  {
    year: "AGORA",
    label: "CONSTRUINDO PRODUTOS",
    role: "Software & Business Systems",
    company: "Projetos próprios",
    description:
      "Desenvolvimento de produtos digitais e sistemas orientados a problemas reais. Atualmente construindo um ERP e aplicações web com foco em arquitetura, escalabilidade, experiência do usuário e processos de negócio.",
    technologies: [
      "ERP SaaS",
      "Web Apps",
      "APIs",
      "Arquitetura",
      "Business Systems",
    ],
    icon: Laptop,
    featured: true,
    current: true,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/6 py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[5%] top-[18%] h-80 w-80 rounded-full bg-lime-300/2.5 blur-[130px]" />
        <div className="absolute right-[5%] bottom-[10%] h-96 w-96 rounded-full bg-cyan-400/2 blur-[150px]" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-lime-300">
              My trajectory
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Uma trajetória
              <br />
              que virou
              <br />
              <span className="text-white/35">engenharia.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-3">
            <p className="text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Minha carreira não começou no código. Começou na operação,
              passou por atendimento, logística, suporte, infraestrutura e
              ambiente hospitalar — até chegar à engenharia de software.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/35 sm:text-base">
              Cada etapa trouxe uma perspectiva diferente sobre como problemas
              acontecem na prática. Hoje uso essa experiência para construir
              sistemas que não apenas funcionam, mas fazem sentido para quem
              precisa utilizá-los.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 sm:mt-24">
          {/* Main timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-3.75 top-0 w-px bg-linear-to-b from-lime-300/60 via-white/10 to-transparent sm:left-4.75"
          />

          <div className="space-y-0">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={`${experience.role}-${experience.year}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min(index * 0.04, 0.2),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid grid-cols-[32px_1fr] gap-6 sm:grid-cols-[40px_1fr] sm:gap-8 lg:grid-cols-[40px_150px_1fr] lg:gap-10"
                >
                  {/* Timeline marker */}
                  <div className="relative flex justify-center">
                    <div
                      className={`relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 sm:h-10 sm:w-10 ${
                        experience.current
                          ? "border-lime-300/50 bg-[#0a0b0d] text-lime-300 shadow-[0_0_25px_rgba(216,255,62,0.12)] group-hover:border-lime-300 group-hover:shadow-[0_0_35px_rgba(216,255,62,0.2)]"
                          : experience.featured
                            ? "border-white/20 bg-[#0a0b0d] text-white/70 group-hover:border-lime-300/40 group-hover:text-lime-300"
                            : "border-white/10 bg-[#090a0d] text-white/30 group-hover:border-white/25 group-hover:text-white/60"
                      }`}
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />

                      {experience.current && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 animate-ping rounded-full border border-lime-300/20"
                        />
                      )}
                    </div>
                  </div>

                  {/* Year */}
                  <div className="hidden pt-1 lg:block">
                    <span
                      className={`font-mono text-[9px] font-medium uppercase tracking-[0.14em] ${
                        experience.current
                          ? "text-lime-300"
                          : experience.featured
                            ? "text-white/50"
                            : "text-white/25"
                      }`}
                    >
                      {experience.year}
                    </span>

                    <span className="mt-2 block font-mono text-[7px] uppercase tracking-[0.16em] text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pb-14 sm:pb-16 lg:pb-20">
                    {/* Mobile year */}
                    <div className="mb-3 lg:hidden">
                      <span
                        className={`font-mono text-[9px] font-medium uppercase tracking-[0.15em] ${
                          experience.current
                            ? "text-lime-300"
                            : experience.featured
                              ? "text-white/50"
                              : "text-white/25"
                        }`}
                      >
                        {experience.year}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                        {experience.label}
                      </span>

                      {experience.current && (
                        <span className="inline-flex items-center gap-2 border border-lime-300/20 bg-lime-300/4 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.14em] text-lime-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(216,255,62,0.7)]" />
                          Atual
                        </span>
                      )}
                    </div>

                    <h3
                      className={`mt-3 text-2xl font-bold leading-tight tracking-[-0.045em] sm:text-3xl ${
                        experience.current
                          ? "text-white"
                          : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {experience.role}
                    </h3>

                    <p className="mt-1.5 text-xs font-medium text-white/35 sm:text-sm">
                      {experience.company}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex max-w-3xl flex-wrap gap-1.5">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`border px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.12em] transition-all duration-300 sm:text-[8px] ${
                            experience.current
                              ? "border-lime-300/15 bg-lime-300/2.5 text-white/40 group-hover:border-lime-300/30 group-hover:text-white/60"
                              : experience.featured
                                ? "border-white/10 bg-white/2 text-white/30 group-hover:border-white/20 group-hover:text-white/50"
                                : "border-white/6 text-white/20 group-hover:border-white/12 group-hover:text-white/35"
                          }`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Current availability */}
                    {experience.current && experience.year === "2024 — HOJE" && (
                      <div className="mt-7 flex flex-wrap items-center gap-3 border-l border-lime-300/30 pl-4">
                        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
                          Modalidade atual
                        </span>

                        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-white/70">
                          MEI
                        </span>

                        <span className="text-white/15">·</span>

                        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-lime-300">
                          Disponível para CLT · PJ
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover line */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
                      experience.current
                        ? "bg-linear-to-r from-lime-300/60 via-lime-300/10 to-transparent"
                        : "bg-linear-to-r from-white/20 via-white/5 to-transparent"
                    }`}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Current position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 border border-white/10 bg-[#090a0d]"
        >
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(216,255,62,0.8)]" />

                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-lime-300">
                  Current position
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-[-0.045em] text-white sm:text-3xl">
                Desenvolvedor Full Stack
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                Hoje atuo como profissional independente, desenvolvendo
                aplicações web, sistemas de negócio e produtos próprios.
                Atualmente construo um projeto ERP enquanto evoluo minha
                atuação em engenharia de software.
              </p>
            </div>

            <div className="border-t border-white/10 p-7 lg:flex lg:min-w-65 lg:items-center lg:border-l lg:border-t-0 lg:p-10">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                  Availability
                </span>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                      CLT
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                      PJ
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                      Freelance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <div className="mt-14 max-w-4xl border-t border-white/6 pt-8 sm:mt-16">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-lime-300">
            What I bring
          </span>

          <p className="mt-4 text-xl font-medium leading-8 tracking-[-0.035em] text-white/55 sm:text-2xl sm:leading-9 lg:text-3xl">
            <span className="text-white">
              Não comecei pela tecnologia.
            </span>{" "}
            Comecei aprendendo a trabalhar, resolver problemas e entender
            operações reais — e hoje transformo essa experiência em software.
          </p>
        </div>
      </div>
    </section>
  );
}