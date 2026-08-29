export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  status?: string;
  category?: string;
  image?: string;
  details?: {
    architecture: string;
    backend: string;
    database: string;
    highlights: string[];
  };
}

export const projects: Project[] = [
  {
    title: "PedidoERP",
    slug: "pedidos-erp",
    featured: true,
    status: "Em desenvolvimento",
    category: "Business System",

    description:
      "Sistema ERP para gestão de pedidos e operações empresariais, desenvolvido com PHP e PostgreSQL, com arquitetura modular, autenticação, regras de negócio e persistência de dados.",

    image: "/images/projects/pedido.png",

    technologies: [
      "PHP 8.4+",
      "PostgreSQL",
      "Composer",
      "PHPUnit",
      "PHPDotenv",
      "Dompdf",
      "QR Code",
      "PSR-4",
    ],

    details: {
      architecture:
        "Aplicação PHP estruturada com autoload PSR-4, separação de responsabilidades, componentes de aplicação e camada de banco de dados.",

      backend:
        "PHP 8.4+, Composer, autenticação, regras de negócio, geração de documentos e recursos de integração.",

      database:
        "PostgreSQL com estrutura relacional, migrations, persistência de dados e operações orientadas ao domínio.",

      highlights: [
        "Arquitetura modular em PHP",
        "Autoload PSR-4",
        "PostgreSQL",
        "Autenticação e controle de acesso",
        "Gestão de pedidos",
        "Geração de documentos PDF",
        "Geração de QR Codes",
        "Variáveis de ambiente com PHPDotenv",
        "Testes automatizados com PHPUnit",
      ],
    },
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);