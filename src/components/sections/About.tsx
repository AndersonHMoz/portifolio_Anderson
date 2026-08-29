
"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-white/6 py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Identity */}
          <div>
            <span className="eyebrow">About me</span>

            {/* Profile */}
            <div className="mt-8 flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_12px_35px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/profile/eu.jpg"
                  alt="Anderson Henrique Moz"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-base font-semibold tracking-tight text-white">
                  Anderson Henrique Moz
                </p>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
                  Full Stack Developer
                </p>

                <div
                  className="mt-2 flex items-center gap-2"
                  aria-label="Disponível para contratação"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(216,255,62,0.65)]"
                  />

                  <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-lime-300/80">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 border-l border-white/10 pl-5">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
                Education
              </span>

              <p className="mt-3 text-sm font-semibold leading-6 text-white/85">
                Análise e Desenvolvimento de Sistemas
              </p>

              <p className="mt-1 text-xs leading-5 text-white/40">
                UNICIV · Maringá, PR
              </p>

              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-lime-300/70">
                Conclusão prevista · 07/2027
              </p>
            </div>

            <div className="mt-6 hidden lg:block">
              <div className="h-px w-16 bg-lime-300/40" />
            </div>
          </div>

          {/* Main content */}
          <div>
            <h2
              id="about-title"
              className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Desenvolvedor Full Stack com experiência em tecnologia,
              infraestrutura e soluções práticas.
            </h2>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <div>
                <p className="text-sm leading-7 text-white/65 sm:text-base">
                  Sou{" "}
                  <strong className="font-semibold text-white">
                    Anderson Henrique Moz
                  </strong>
                  , tenho 26 anos e estou cursando Análise e Desenvolvimento
                  de Sistemas na UNICIV, em Maringá — PR, com conclusão
                  prevista para julho de 2027.
                </p>

                <p className="mt-5 text-sm leading-7 text-white/45">
                  Minha trajetória profissional começou antes do
                  desenvolvimento de software. Construí experiência em
                  suporte técnico, infraestrutura de TI e Engenharia Clínica,
                  atuando em ambientes que exigem diagnóstico, responsabilidade
                  e continuidade operacional.
                </p>
              </div>

              <div>
                <p className="text-sm leading-7 text-white/65 sm:text-base">
                  Hoje atuo como desenvolvedor Full Stack, construindo
                  aplicações web, APIs e sistemas de negócio. Trabalho
                  principalmente com{" "}
                  <strong className="font-semibold text-white">
                    PHP, Next.js, TypeScript, Node.js e PostgreSQL
                  </strong>
                  .
                </p>

                <p className="mt-5 text-sm leading-7 text-white/45">
                  Paralelamente à tecnologia, também atuo com{" "}
                  <strong className="font-semibold text-white">
                    instalação de sistemas de aquecimento solar residencial e
                    para piscinas
                  </strong>
                  , além da{" "}
                  <strong className="font-semibold text-white">
                    automação desses sistemas
                  </strong>
                  . Essa experiência reforça minha visão prática de projeto,
                  instalação, funcionamento e resolução de problemas.
                </p>
              </div>
            </div>

            {/* Professional direction */}
            <div className="mt-10 border-l border-lime-300/40 pl-5 sm:pl-6">
              <p className="max-w-3xl text-base font-medium leading-7 tracking-tight text-white/75 sm:text-lg sm:leading-8">
                Minha atuação combina desenvolvimento de software, tecnologia
                e experiência prática em soluções técnicas — sempre buscando
                entender o problema antes de definir a solução.
              </p>
            </div>

            {/* Availability */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
                Professional availability
              </span>

              <span className="h-px w-8 bg-white/10" />

              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-lime-300/80">
                MEI
              </span>

              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-white/55">
                CLT
              </span>

              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-white/55">
                PJ
              </span>

              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-white/55">
                Freelance
              </span>
            </div>
          </div>
        </div>

        {/* Profile facts */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              Profile
            </span>

            <p className="mt-3 text-base font-semibold tracking-tight text-white">
              26 anos
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Desenvolvedor Full Stack
            </p>
          </div>

          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              Education
            </span>

            <p className="mt-3 text-base font-semibold tracking-tight text-white">
              ADS · UNICIV
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Conclusão prevista em julho de 2027
            </p>
          </div>

          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              Technology
            </span>

            <p className="mt-3 text-base font-semibold tracking-tight text-white">
              Software + Hardware
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Desenvolvimento, infraestrutura e automação
            </p>
          </div>

          <div className="bg-[#090a0d] p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              Availability
            </span>

            <p className="mt-3 text-base font-semibold tracking-tight text-white">
              CLT · PJ · MEI
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/40">
              Disponível para contratação e projetos
            </p>
          </div>
        </div>

        {/* Practical experience */}
        <div className="mt-12 grid gap-8 border-t border-white/6 pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-lime-300/80">
              Beyond software
            </span>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Experiência prática também faz parte da minha engenharia.
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-white">
                Aquecimento solar
              </p>

              <p className="mt-2 text-xs leading-6 text-white/40">
                Instalação de sistemas para residências e piscinas, com foco
                em funcionamento, eficiência e confiabilidade.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Automação
              </p>

              <p className="mt-2 text-xs leading-6 text-white/40">
                Automação dos sistemas de aquecimento, conectando conhecimento
                técnico, operação e solução de problemas.
              </p>
            </div>
          </div>
        </div>

        {/* Current direction */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/6 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-lime-300/80">
              Current direction
            </span>

            <p className="mt-3 max-w-3xl text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
              Construir software, sistemas e soluções técnicas que transformem
              problemas reais em resultados práticos.
            </p>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
            Anderson Henrique Moz · 2026
          </span>
        </div>
      </div>
    </section>
  );
}

