
import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  profile: {
    name: "Anderson Henrique Moz",
    role: "Desenvolvedor Full Stack",
    location: "Maringá, Paraná, Brasil",
    description:
      "Desenvolvedor Full Stack e acadêmico em Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento de aplicações web, sistemas de negócio, suporte técnico, infraestrutura de TI e Engenharia Clínica.",
    availability: "Aberto a oportunidades",
    email: "andersonmoz2018@gmail.com",
    github: "https://github.com/andersonmoz",
    linkedin: "https://www.linkedin.com/in/andersonmoz",
  },

  metrics: [
    {
      value: "01",
      label: "Projeto principal",
    },
    {
      value: "Full Stack",
      label: "Atuação",
    },
    {
      value: "ADS",
      label: "Formação",
    },
    {
      value: "2026",
      label: "Atual",
    },
  ],

  social: [
    {
      label: "GitHub",
      href: "https://github.com/andersonmoz",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andersonmoz",
    },
  ],
};

