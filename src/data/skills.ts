export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Desenvolvimento",
    description:
      "Tecnologias utilizadas na construção de aplicações web e sistemas de negócio.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "PHP",
    ],
  },

  {
    title: "Backend & APIs",
    description:
      "Desenvolvimento de serviços, APIs e regras de negócio orientadas a sistemas reais.",
    skills: [
      "REST API",
      "Next.js Route Handlers",
      "MVC",
      "Autenticação",
      "Regras de negócio",
      "Integrações",
    ],
  },

  {
    title: "Dados",
    description:
      "Modelagem e persistência de dados com foco em consistência, organização e evolução.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Supabase",
      "Prisma",
      "Modelagem de dados",
      "Migrations",
    ],
  },

  {
    title: "Frontend",
    description:
      "Construção de interfaces responsivas, componentes reutilizáveis e experiências orientadas ao usuário.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Acessibilidade",
    ],
  },

  {
    title: "Engenharia",
    description:
      "Práticas e ferramentas utilizadas para desenvolver software organizado, sustentável e versionado.",
    skills: [
      "Git",
      "GitHub",
      "SOLID",
      "Clean Code",
      "Arquitetura de software",
      "Troubleshooting",
    ],
  },

  {
    title: "Infraestrutura & TI",
    description:
      "Experiência complementar em suporte, infraestrutura e diagnóstico de ambientes tecnológicos.",
    skills: [
      "Linux",
      "Windows",
      "Redes",
      "Hardware",
      "Infraestrutura",
      "Suporte técnico",
    ],
  },
];

export const coreSkills = [
  "Next.js",
  "TypeScript",
  "React",
  "PHP",
  "Node.js",
  "PostgreSQL",
];

export const engineeringSkills = [
  "APIs REST",
  "Modelagem de dados",
  "Git",
  "Linux",
  "SOLID",
  "Clean Code",
  "Troubleshooting",
];