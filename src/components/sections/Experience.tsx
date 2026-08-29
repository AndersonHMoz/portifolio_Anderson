const experiences = [
  {
    period: "Experiência profissional",
    role: "Engenharia Clínica",
    company: "Hospital Memorial UNINGÁ",
    description:
      "Atuação em ambiente hospitalar, com manutenção preventiva e corretiva, gestão de equipamentos e ativos, acompanhamento de processos e suporte às operações.",
    highlights: [
      "Gestão e acompanhamento de ativos hospitalares",
      "Manutenção preventiva e corretiva",
      "Integração e tratamento de informações no Tasy (Philips)",
      "Automação e melhoria de processos operacionais",
    ],
  },
  {
    period: "Experiência profissional",
    role: "Suporte Técnico / Infraestrutura",
    company: "Tecnologia da Informação",
    description:
      "Experiência prática na resolução de incidentes, suporte a usuários, infraestrutura e manutenção de ambientes de tecnologia.",
    highlights: [
      "Suporte técnico e troubleshooting",
      "Manutenção de hardware e software",
      "Infraestrutura e redes",
      "Diagnóstico e resolução de problemas",
    ],
  },
  {
    period: "Atual",
    role: "Desenvolvedor Full Stack em formação",
    company: "Projetos próprios + ADS",
    description:
      "Desenvolvimento de aplicações web modernas com foco em arquitetura, integração de sistemas, banco de dados e resolução de problemas reais de negócio.",
    highlights: [
      "React e Next.js",
      "Node.js e TypeScript",
      "PostgreSQL e Supabase",
      "Git e GitHub",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="section-border py-32">
      <div className="container-page">
        <span className="eyebrow">03 / Experiência</span>

        <div className="mt-12 divide-y divide-black/10 border-t border-black/10">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.role}-${index}`}
              className="grid gap-8 py-10 lg:grid-cols-[180px_1fr_1fr]"
            >
              <div>
                <span className="eyebrow">{experience.period}</span>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.025em]">
                  {experience.role}
                </h2>

                <p className="mt-2 text-sm text-black/50">
                  {experience.company}
                </p>
              </div>

              <div>
                <p className="text-sm leading-7 text-black/65">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm leading-6 text-black/55"
                    >
                      <span className="mr-2 text-[#8b7652]">—</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
