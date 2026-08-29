export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    period: "2024 — PRESENT",
    role: "Full Stack Developer",
    company: "Independent / Projects",
    description:
      "Desenvolvimento de aplicações web e sistemas de negócio com foco em arquitetura, APIs, banco de dados e experiência de usuário.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PHP",
      "Node.js",
      "PostgreSQL",
    ],
    featured: true,
  },
  {
    period: "EXPERIENCE",
    role: "Engenharia Clínica",
    company: "Hospital Memorial UNINGÁ",
    description:
      "Atuação em ambiente hospitalar com manutenção preventiva e corretiva, controle de equipamentos, suporte técnico e resolução de problemas em sistemas críticos.",
    technologies: [
      "Infraestrutura",
      "Suporte",
      "Manutenção",
      "Sistemas",
    ],
    featured: false,
  },
  {
    period: "EXPERIENCE",
    role: "Suporte Técnico & Infraestrutura",
    company: "Tecnologia / Operações",
    description:
      "Experiência com suporte a usuários, configuração de ambientes, redes, hardware, software e resolução de incidentes técnicos.",
    technologies: [
      "Linux",
      "Redes",
      "Hardware",
      "Windows",
      "Troubleshooting",
    ],
    featured: false,
  },
  {
    period: "EARLIER",
    role: "Operações & Atendimento",
    company: "Experiências profissionais anteriores",
    description:
      "Experiências que desenvolveram disciplina operacional, atendimento, organização, comunicação e capacidade de trabalhar sob pressão.",
    technologies: [
      "Atendimento",
      "Operações",
      "Organização",
      "Processos",
    ],
    featured: false,
  },
];