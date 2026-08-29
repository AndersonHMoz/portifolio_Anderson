
"use client";

import Link from "next/link";

const EMAIL = "andersonmoz2018@outlook.com";
const WHATSAPP = "5544999686576";

const whatsappMessages = {
  hiring:
    "Olá, Anderson! Encontrei seu portfólio e gostaria de conversar sobre uma oportunidade profissional. Tenho interesse em conhecer melhor seu perfil e sua disponibilidade.",
  project:
    "Olá, Anderson! Encontrei seu portfólio e gostaria de conversar sobre um projeto. Tenho uma necessidade de software, automação ou solução digital e gostaria de entender como podemos trabalhar juntos.",
};

function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-white/10 py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-lime-300"
            />

            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-lime-300">
              Contato
            </span>
          </div>

          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">
            Aberto a oportunidades e novos projetos
          </p>

          <h2
            id="contact-title"
            className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            Tem um problema para resolver?
            <br />
            <span className="text-white/50">
              Vamos conversar sobre a solução.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            Desenvolvo software, sistemas de negócio e automações para
            transformar necessidades reais em soluções digitais funcionais,
            organizadas e preparadas para evoluir.
          </p>
        </div>

        {/* Contact options */}
        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {/* WhatsApp */}
          <article className="rounded-2xl border border-lime-300/20 bg-lime-300/2.5 p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-lime-300">
                01 / WhatsApp
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">
                Resposta direta
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
              Vamos falar diretamente.
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
              Escolha o motivo do contato. O WhatsApp já abrirá com uma
              mensagem inicial preparada para facilitar a conversa.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <a
                href={createWhatsAppUrl(whatsappMessages.hiring)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp para falar sobre oportunidade profissional"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-lime-300 px-4 py-3 text-center text-sm font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0d]"
              >
                <span className="text-[#050506]!">
                 Oportunidade profissional
                </span>
              </a>

              <a
                href={createWhatsAppUrl(whatsappMessages.project)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp para falar sobre um projeto"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0d]"
              >
                Projeto ou automação
              </a>
            </div>

            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.13em] text-white/30">
              Mensagem inicial preenchida automaticamente
            </p>
          </article>

          {/* Email */}
          <article className="rounded-2xl border border-white/10 bg-[#090a0d] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-white/45">
                02 / Email
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">
                Comunicação formal
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
              Para propostas e oportunidades.
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
              Uma alternativa para recrutadores, empresas e clientes que
              preferem iniciar a conversa por e-mail.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              aria-label={`Enviar e-mail para ${EMAIL}`}
              className="mt-6 block rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0d]"
            >
              <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                Email profissional
              </span>

              <span className="mt-2 block break-all text-sm font-semibold text-white">
                {EMAIL}
              </span>
            </a>

            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">
              <span>CLT</span>
              <span aria-hidden="true">·</span>
              <span>PJ</span>
              <span aria-hidden="true">·</span>
              <span>Freelance</span>
              <span aria-hidden="true">·</span>
              <span>Projetos</span>
            </div>
          </article>
        </div>

        {/* What I can deliver */}
        <div className="mt-3 grid overflow-hidden rounded-2xl border border-white/10 bg-[#090a0d] sm:grid-cols-3">
          <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">
              Empresas
            </span>

            <p className="mt-3 text-sm font-semibold text-white">
              Desenvolvimento
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/45">
              Aplicações web, sistemas internos, APIs e produtos digitais.
            </p>
          </div>

          <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">
              Negócios
            </span>

            <p className="mt-3 text-sm font-semibold text-white">
              Automação
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/45">
              Processos manuais transformados em fluxos digitais mais
              eficientes.
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">
              Recrutadores
            </span>

            <p className="mt-3 text-sm font-semibold text-white">
              Full Stack
            </p>

            <p className="mt-1.5 text-xs leading-5 text-white/45">
              Frontend, backend, dados, arquitetura e visão de negócio.
            </p>
          </div>
        </div>

        {/* Final statement */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-lg font-medium leading-7 tracking-[-0.02em] text-white/65 sm:text-xl">
            <span className="text-white">
              Boa tecnologia começa entendendo o problema.
            </span>{" "}
            Se você tem uma necessidade real, podemos começar por ela.
          </p>

          <Link
            href="#projects"
            className="shrink-0 self-start font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 underline decoration-white/20 underline-offset-4 transition-colors hover:text-lime-300 hover:decoration-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090a0d] sm:self-auto"
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </section>
  );
}

