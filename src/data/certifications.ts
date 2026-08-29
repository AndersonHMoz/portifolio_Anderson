
export interface Certification {
  title: string;
  institution: string;
  period: string;
  duration: string;
  category: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
  featured?: boolean;
}

const ALURA_CREDENTIAL_URL =
  "https://cursos.alura.com.br/user/andersonmoz2018/fullCertificate/a2e0ccc26c722e4da0e3c745639ecbdd";

export const certifications: Certification[] = [
  {
    title: "Iniciante em Programação G8 - ONE",
    institution: "Alura · Oracle Next Education",
    period: "2025",
    duration: "68h",
    category: "Programação",
    description:
      "Formação com fundamentos de lógica de programação, JavaScript, HTML, CSS, Git e GitHub, consolidando a base para desenvolvimento de aplicações web.",
    skills: [
      "JavaScript",
      "Lógica de programação",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "Responsividade",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: true,
  },

  {
    title: "Redes de Computadores",
    institution: "Alura",
    period: "2022",
    duration: "41h",
    category: "Infraestrutura",
    description:
      "Formação em fundamentos e prática de redes, políticas de acesso, protocolos de roteamento, IPv6 e redes Wi-Fi.",
    skills: [
      "Redes",
      "TCP/IP",
      "IPv6",
      "Roteamento",
      "ACL",
      "Wi-Fi",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: true,
  },

  {
    title: "Desenvolva aplicações Web Acessíveis",
    institution: "Alura",
    period: "2022",
    duration: "17h",
    category: "Frontend",
    description:
      "Formação voltada à construção de interfaces web acessíveis, incluindo fundamentos de acessibilidade, HTML e componentes interativos.",
    skills: [
      "Acessibilidade Web",
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend",
      "UX",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: true,
  },

  {
    title: "Desenvolvimento Pessoal G8 - ONE",
    institution: "Alura · Oracle Next Education",
    period: "2025",
    duration: "30h",
    category: "Desenvolvimento profissional",
    description:
      "Formação focada em autodesenvolvimento, produtividade, definição de metas, hábitos e posicionamento profissional.",
    skills: [
      "Autodesenvolvimento",
      "Produtividade",
      "Planejamento",
      "Metas",
      "LinkedIn",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: false,
  },

  {
    title: "Lógica de Programação com JavaScript",
    institution: "Alura",
    period: "2022 — 2025",
    duration: "12h",
    category: "Programação",
    description:
      "Estudos práticos de lógica de programação utilizando JavaScript, com funções, listas e desenvolvimento de pequenos projetos.",
    skills: [
      "JavaScript",
      "Lógica",
      "Funções",
      "Listas",
      "Algoritmos",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: false,
  },

  {
    title: "Desenvolvimento Frontend",
    institution: "Alura",
    period: "2022 — 2023",
    duration: "16h",
    category: "Frontend",
    description:
      "Formação complementar em desenvolvimento web com HTML5, CSS3 e arquitetura CSS para criação de interfaces estruturadas e responsivas.",
    skills: [
      "HTML5",
      "CSS3",
      "Arquitetura CSS",
      "Flexbox",
      "Web Design",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: false,
  },

  {
    title: "DevOps e Linux",
    institution: "Alura",
    period: "2022",
    duration: "16h",
    category: "DevOps",
    description:
      "Formação complementar em Linux, terminal, sistemas operacionais e fundamentos relacionados à certificação Linux LPI Essentials.",
    skills: [
      "Linux",
      "Terminal",
      "Shell",
      "Sistemas Operacionais",
      "Hardware",
      "DevOps",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: false,
  },

  {
    title: "Microsoft Azure Fundamentals",
    institution: "Alura · Microsoft AZ-900",
    period: "2023",
    duration: "8h",
    category: "Cloud",
    description:
      "Formação introdutória nos fundamentos de computação em nuvem e conceitos essenciais relacionados ao Microsoft Azure.",
    skills: [
      "Azure",
      "Cloud Computing",
      "Infraestrutura",
      "Serviços Cloud",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: false,
  },

  {
    title: "React Native com Expo",
    institution: "Alura",
    period: "2022 — 2023",
    duration: "8h",
    category: "Mobile",
    description:
      "Curso de desenvolvimento mobile utilizando React Native e Expo, com foco em navegação e estrutura de aplicações.",
    skills: [
      "React Native",
      "Expo",
      "JavaScript",
      "Mobile",
      "Navigation",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: false,
  },

  {
    title: "TI, Governança e Gestão",
    institution: "Alura",
    period: "2022 — 2023",
    duration: "142h",
    category: "Gestão & Negócios",
    description:
      "Formação complementar envolvendo governança de TI, gestão de requisitos, serviços, qualidade, contratos, estratégia e alinhamento entre tecnologia e negócio.",
    skills: [
      "Governança de TI",
      "Gestão de Requisitos",
      "IT Service Management",
      "Gestão de Serviços",
      "Processos",
      "Negócios",
    ],
    credentialUrl: ALURA_CREDENTIAL_URL,
    featured: false,
  },
];

export const featuredCertifications = certifications.filter(
  (certification) => certification.featured,
);

export const certificationCategories = [
  "Programação",
  "Frontend",
  "Infraestrutura",
  "DevOps",
  "Cloud",
  "Mobile",
  "Gestão & Negócios",
  "Desenvolvimento profissional",
] as const;

