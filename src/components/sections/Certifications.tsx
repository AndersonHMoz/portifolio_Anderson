"use client";

import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  certifications,
  featuredCertifications,
} from "@/data/certifications";

export default function Certifications() {
  const totalHours = certifications.reduce((total, certification) => {
    const hours = Number.parseInt(certification.duration, 10);
    return total + (Number.isNaN(hours) ? 0 : hours);
  }, 0);

  return (
    <section
      id="certifications"
      className="border-t border-white/6 py-20 sm:py-28"
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="eyebrow">Formação & certificações</span>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            Conhecimento que
            <br />
            sustenta a prática.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Formação contínua em desenvolvimento, infraestrutura, redes,
            cloud, gestão e engenharia de software.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-12 flex flex-wrap border-y border-white/6">
          <div className="min-w-37.5 flex-1 border-r border-white/6 px-5 py-5 sm:px-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
              Certificações
            </span>

            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {certifications.length}
            </p>
          </div>

          <div className="min-w-37.5 flex-1 border-r border-white/6 px-5 py-5 sm:px-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
              Horas registradas
            </span>

            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {totalHours}h
            </p>
          </div>

          <div className="min-w-45 flex-1 px-5 py-5 sm:px-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
              Instituição principal
            </span>

            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Alura
            </p>
          </div>
        </div>

        {/* Featured */}
        {featuredCertifications.length > 0 && (
          <div className="mt-14">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                Destaques
              </span>

              <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-white/15 sm:block">
                Formação selecionada
              </span>
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
              {featuredCertifications.map((certification, index) => (
                <motion.article
                  key={`${certification.title}-${certification.period}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="group relative border border-white/[0.07] bg-white/1.5 p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/2.5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-8 w-8 items-center justify-center border border-white/8">
                      <Award
                        size={15}
                        strokeWidth={1.5}
                        className="text-lime-300"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                      {certification.duration}
                    </span>
                  </div>

                  <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.16em] text-lime-300/70">
                    {certification.category}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-tight tracking-[-0.03em] text-white">
                    {certification.title}
                  </h3>

                  <p className="mt-2 text-xs text-white/30">
                    {certification.institution}
                  </p>

                  <p className="mt-4 text-xs leading-6 text-white/35">
                    {certification.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {certification.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/[0.07] px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-white/25"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {certification.credentialUrl && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 border-t border-white/6 pt-4 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30 transition-colors hover:text-lime-300"
                    >
                      Ver credencial
                      <ExternalLink
                        size={11}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Complete timeline */}
        <div className="mt-16 border-t border-white/6 pt-10">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                Formação completa
              </span>

              <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
                Percurso de aprendizado
              </h3>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-white/20 sm:block">
              2022 — 2025
            </span>
          </div>

          <div className="divide-y divide-white/6 border-y border-white/6">
            {certifications.map((certification, index) => (
              <motion.div
                key={`${certification.title}-${index}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="group grid gap-2 py-4 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/20">
                  {certification.period}
                </span>

                <div>
                  <h4 className="text-sm font-medium tracking-tight text-white/75 transition-colors group-hover:text-white">
                    {certification.title}
                  </h4>

                  <p className="mt-1 text-[11px] text-white/25">
                    {certification.institution}
                    <span className="mx-2 text-white/10">·</span>
                    {certification.category}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/20">
                    {certification.duration}
                  </span>

                  {certification.credentialUrl && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver credencial: ${certification.title}`}
                      className="text-white/20 transition-colors hover:text-lime-300"
                    >
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/6 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-xs leading-6 text-white/25 sm:text-sm">
            A formação técnica dá fundamento para tomar decisões melhores ao
            construir software.
          </p>

          <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.16em] text-white/15">
            Anderson Moz · Formação contínua
          </span>
        </div>
      </div>
    </section>
  );
}