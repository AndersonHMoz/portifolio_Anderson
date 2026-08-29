import Link from "next/link";

const footerLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="container">
        <div className="flex flex-col gap-10 py-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-white"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(216,255,62,0.6)]"
              />
              Anderson Moz
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/35">
              Desenvolvedor Full Stack focado em transformar problemas reais
              em software confiável, escalável e sustentável.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 transition-colors duration-300 hover:text-lime-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/20">
            © {new Date().getFullYear()} Anderson Moz
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/20">
            Full Stack · Software Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}