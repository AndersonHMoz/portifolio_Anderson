import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 md:pb-20">
      <div className="container-page w-full">
        <div className="grid min-h-[calc(100vh-160px)] grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="hero-fade eyebrow mb-7">
              Desenvolvedor Full Stack · Maringa, PR
            </div>

            <h1 className="hero-title display-title max-w-5xl text-[clamp(4rem,11vw,9.5rem)] font-semibold">
              Anderson
              <br />
              Moz<span className="text-[#8b7652]">.</span>
            </h1>

            <div className="hero-fade hero-delay-1 mt-10 max-w-xl">
              <p className="text-lg leading-8 text-black/65 md:text-xl">
                Desenvolvo aplicacoes web com{" "}
                <strong className="font-semibold text-black">
                  Next.js, Node.js e TypeScript
                </strong>
                , conectando engenharia de software a problemas reais de
                negocio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="group inline-flex items-center gap-3 bg-[#171715] px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#f4f1eb] transition-transform hover:-translate-y-0.5"
                >
                  Ver projetos
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="#sobre"
                  className="inline-flex items-center gap-3 border border-black/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:border-black/40"
                >
                  Minha trajetoria
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-fade hero-delay-2 border-t border-black/15 pt-5 lg:mb-2">
            <span className="eyebrow">Perfil</span>

            <p className="mt-4 text-sm leading-6 text-black/60">
              Profissional em transicao para desenvolvimento, com experiencia
              anterior em suporte tecnico, infraestrutura de TI e engenharia
              clinica hospitalar.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-5 border-t border-black/10 pt-5">
              <div>
                <span className="eyebrow">Foco</span>
                <p className="mt-2 text-sm font-semibold">
                  Full Stack
                </p>
              </div>

              <div>
                <span className="eyebrow">Formacao</span>
                <p className="mt-2 text-sm font-semibold">
                  ADS · UNICIV
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-fade hero-delay-3 mt-10 flex items-center gap-3 text-black/40">
          <ArrowDown size={15} />
          <span className="eyebrow">Explorar</span>
        </div>
      </div>
    </section>
  );
}