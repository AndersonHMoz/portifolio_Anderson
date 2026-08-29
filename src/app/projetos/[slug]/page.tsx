
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <div className="container py-8 sm:py-10 lg:py-12">

        {/* Back */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-lime-300"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.7}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Voltar para projetos
        </Link>

        {/* Header */}
        <header className="mt-14 max-w-4xl sm:mt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-lime-300">
              {project.category}
            </span>

            {project.status && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.13em] text-white/45">
                {project.status}
              </span>
            )}
          </div>

          <h1 className="mt-5 text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/50"
              >
                {technology}
              </span>
            ))}
          </div>
        </header>

        {/* Project Visual */}
        <section className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#090a0d] sm:mt-14">
          <div className="relative bg-[#060708] p-3 sm:p-5 lg:p-6">

            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/4.5 blur-3xl"
            />

            {/* Browser */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#08090b] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

              {/* Browser chrome */}
              <div className="flex h-9 items-center border-b border-white/10 bg-white/2.5 px-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="mx-auto h-4 w-[42%] rounded border border-white/5 bg-white/2.5" />
              </div>

              {/* Screenshot */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#050506]">
                <Image
                  src={project.image ?? "/images/projects/pedido.png"}
                  alt={`Interface do ${project.title}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-contain object-center p-2 sm:p-3"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"
                />
              </div>
            </div>

            {/* Status */}
            <div className="absolute bottom-5 right-5 hidden rounded-lg border border-white/10 bg-[#0b0d10]/95 px-3 py-2 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(216,255,62,0.7)]" />
                {project.status ?? "Projeto em desenvolvimento"}
              </div>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="mt-3 grid overflow-hidden rounded-xl border border-white/10 bg-white/4 sm:grid-cols-3">
          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
              Category
            </span>

            <p className="mt-2.5 text-sm font-semibold text-white">
              {project.category}
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Sistema orientado a problemas reais de negócio.
            </p>
          </div>

          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
              Architecture
            </span>

            <p className="mt-2.5 text-sm font-semibold text-white">
              Full Stack
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Backend, banco de dados e regras de negócio.
            </p>
          </div>

          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
              Direction
            </span>

            <p className="mt-2.5 text-sm font-semibold text-white">
              Production mindset
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Pensado para evolução e manutenção.
            </p>
          </div>
        </section>

        {/* Engineering */}
        <section className="mt-16 border-t border-white/10 pt-10 sm:mt-20 sm:pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-lime-300">
                Engineering
              </span>

              <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                Engenharia por trás do produto.
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-white/55 sm:text-base">
                O PedidoERP é um sistema ERP desenvolvido em PHP e
                PostgreSQL, pensado para transformar processos
                operacionais reais em uma plataforma estruturada,
                organizada e preparada para evolução.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base">
                O projeto envolve autenticação, persistência de dados,
                regras de negócio, usuários, permissões e módulos
                administrativos.
              </p>

              {/* Engineering cards */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/4 p-4">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.6}
                    className="text-lime-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Backend
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/40">
                    PHP com arquitetura organizada e separação de
                    responsabilidades.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/4 p-4">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.6}
                    className="text-lime-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Database
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/40">
                    PostgreSQL para persistência e estruturação dos dados.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/4 p-4">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.6}
                    className="text-lime-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Business Rules
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/40">
                    Regras estruturadas para operações administrativas e
                    comerciais.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/4 p-4">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.6}
                    className="text-lime-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Evolução
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/40">
                    Estrutura preparada para manutenção, expansão e novos
                    módulos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-16 border-t border-white/10 pt-10 sm:mt-20 sm:pt-12">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-lime-300">
                Technologies
              </span>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                Stack utilizada.
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 bg-white/2.5 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.13em] text-white/50 transition-colors hover:border-lime-300/20 hover:text-lime-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-16 border-t border-white/10 pt-10 sm:mt-20 sm:pt-12">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/30">
                Next
              </span>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                Mais importante que mostrar código é mostrar como ele resolve
                problemas.
              </h2>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex shrink-0 items-center gap-2.5 text-sm font-semibold text-white transition-colors hover:text-lime-300"
            >
              Vamos conversar

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

