const skillGroups = [
  {
    title: "Usando agora",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Backend & Dados",
    skills: [
      "Next.js Route Handlers",
      "APIs REST",
      "Supabase",
      "PostgreSQL",
      "Modelagem de dados",
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "PowerShell",
      "Vercel",
    ],
  },
  {
    title: "Outras competências",
    skills: [
      "Suporte técnico",
      "Infraestrutura de TI",
      "Troubleshooting",
      "Automação de processos",
      "Gestão de ativos",
    ],
  },
];

export function Skills() {
  return (
    <section id="stack" className="section-border py-32">
      <div className="container-page">
        <span className="eyebrow">04 / Stack & competências</span>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Ferramentas para transformar problemas em software.
          </h2>
        </div>

        <div className="mt-16 grid border-t border-black/10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-b border-black/10 p-7 md:nth-[2n]:border-l"
            >
              <span className="eyebrow">{group.title}</span>

              <ul className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between border-b border-black/5 pb-3 text-sm"
                  >
                    <span>{skill}</span>
                    <span className="text-black/25">↗</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
