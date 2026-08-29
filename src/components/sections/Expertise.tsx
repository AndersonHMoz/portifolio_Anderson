const expertise = [
  {
    number: "01",
    title: "Full Stack",
    statement: "Do problema ao produto.",
    description:
      "Construção de aplicações web completas, conectando interfaces, regras de negócio, APIs e dados em uma solução coerente.",
    capabilities: ["Next.js", "React", "TypeScript", "PHP"],
    featured: true,
  },
  {
    number: "02",
    title: "Backend & APIs",
    statement: "Regra de negócio no centro.",
    description:
      "Desenvolvimento de APIs e serviços estruturados para processos reais, integrações, autenticação e evolução contínua.",
    capabilities: ["PHP", "Node.js", "REST", "PostgreSQL"],
    featured: false,
  },
  {
    number: "03",
    title: "Business Systems",
    statement: "Software que entende a operação.",
    description:
      "Sistemas orientados a processos reais, envolvendo usuários, permissões, vendas, estoque, financeiro e operações.",
    capabilities: ["ERP", "Multi-tenant", "SQL", "Processos"],
    featured: false,
  },
  {
    number: "04",
    title: "Automation",
    statement: "Menos trabalho manual.",
    description:
      "Automação de tarefas e integração entre sistemas para transformar atividades repetitivas em fluxos digitais mais eficientes.",
    capabilities: ["Integrações", "Scripts", "APIs", "Workflows"],
    featured: false,
  },
  {
    number: "05",
    title: "AI-Assisted Development",
    statement: "IA como acelerador. Engenharia como direção.",
    description:
      "Uso ferramentas de inteligência artificial como apoio à pesquisa, debugging, documentação, exploração de soluções e aceleração do desenvolvimento.",
    capabilities: [
      "AI Tools",
      "Prompt Engineering",
      "Debugging",
      "Code Review",
    ],
    featured: false,
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="border-t border-white/8 py-20 sm:py-24"
    >
      <div className="container">
        {/* Intro */}
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="eyebrow">Expertise</span>

            <h2
              id="expertise-title"
              className="mt-5 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl"
            >
              Tecnologia com
              <br />
              contexto.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-1">
            <p className="text-base leading-7 text-white/65 sm:text-lg">
              Meu trabalho combina desenvolvimento Full Stack, sistemas de
              negócio, automação e uma visão prática de tecnologia.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/45 sm:text-base">
              Antes de escolher uma ferramenta, procuro entender o processo,
              a regra de negócio e o resultado que precisa ser entregue.
            </p>
          </div>
        </div>

        {/* Expertise grid */}
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/8 lg:grid-cols-2">
          {expertise.map((item) => (
            <article
              key={item.number}
              className={`group relative border-white/8 p-6 transition-colors duration-300 sm:p-7 ${
                item.featured
                  ? "bg-white/2.5 lg:col-span-2"
                  : "border-t lg:nth-[2]:border-t-0 lg:nth-[3]:border-t"
              }`}
            >
              <div
                className={`grid gap-6 ${
                  item.featured
                    ? "lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
                    : ""
                }`}
              >
                {/* Heading */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] font-medium uppercase tracking-[0.16em] ${
                        item.featured
                          ? "text-lime-300"
                          : "text-white/35"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.featured
                          ? "bg-lime-300 shadow-[0_0_9px_rgba(216,255,62,0.55)]"
                          : "bg-white/15 transition-colors group-hover:bg-lime-300"
                      }`}
                    />
                  </div>

                  <h3
                    className={`mt-6 font-semibold tracking-[-0.035em] text-white ${
                      item.featured
                        ? "text-2xl sm:text-3xl"
                        : "text-xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 font-medium ${
                      item.featured
                        ? "text-base text-white/70"
                        : "text-sm text-white/55"
                    }`}
                  >
                    {item.statement}
                  </p>
                </div>

                {/* Description */}
                <div className="flex flex-col justify-end">
                  <p className="max-w-xl text-sm leading-6 text-white/50">
                    {item.description}
                  </p>

                  <div
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label={`Tecnologias e competências em ${item.title}`}
                  >
                    {item.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-sm border border-white/10 bg-white/2.5 px-2.5 py-1.5 font-mono text-[9px] font-medium uppercase tracking-widest text-white/50 transition-colors group-hover:border-white/15 group-hover:text-white/70"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Accent */}
              <div
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-px transition-all duration-500 ${
                  item.featured
                    ? "w-12 bg-lime-300/70 group-hover:w-24"
                    : "w-0 bg-lime-300/60 group-hover:w-16"
                }`}
              />
            </article>
          ))}
        </div>

        {/* Positioning */}
        <div className="mt-3 grid overflow-hidden rounded-2xl border border-white/8 md:grid-cols-2">
          <div className="p-6 sm:p-7">
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-lime-300">
              Para equipes
            </span>

            <h3 className="mt-3 max-w-lg text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
              Código e contexto no mesmo lugar.
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
              Atuação Full Stack com visão de produto, backend, dados,
              arquitetura e operação.
            </p>
          </div>

          <div className="border-t border-white/8 p-6 sm:p-7 md:border-l md:border-t-0">
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
              Para negócios
            </span>

            <h3 className="mt-3 max-w-lg text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
              Processos manuais podem virar software.
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
              Sistemas internos, APIs, automações e aplicações sob medida
              para transformar processos em soluções digitais.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base font-medium leading-7 tracking-[-0.015em] text-white/60 sm:text-lg">
            <span className="text-white">
              Tecnologia é ferramenta.
            </span>{" "}
            O objetivo é construir soluções que façam sentido para pessoas,
            processos e negócios.
          </p>

          <span className="shrink-0 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/30">
            Problem → Solution → Product
          </span>
        </div>
      </div>
    </section>
  );
}