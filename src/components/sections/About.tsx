export function About() {
  return (
    <section id="sobre" className="section-border py-32">
      <div className="container-page">
        <span className="eyebrow">02 / Sobre</span>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Tecnologia com contexto de negócio.
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-black/65 md:text-lg">
              <p>
                Minha trajetória profissional começou fora do desenvolvimento.
                Atuei em suporte técnico, infraestrutura de TI e Engenharia
                Clínica em ambiente hospitalar, lidando diariamente com
                sistemas, equipamentos, usuários, processos e problemas que
                precisavam ser resolvidos de verdade.
              </p>

              <p>
                Na Engenharia Clínica, tive contato com operações críticas,
                gestão de ativos hospitalares e integração de informações com
                o sistema Tasy, da Philips. Também trabalhei com automação de
                processos e melhoria de rotinas operacionais.
              </p>

              <p>
                Hoje direciono essa experiência para o desenvolvimento Full
                Stack. Estou cursando Análise e Desenvolvimento de Sistemas
                na UNICIV e construindo aplicações com React, Next.js,
                Node.js, TypeScript e PostgreSQL.
              </p>
            </div>
          </div>

          <aside className="border-t border-black/15 pt-5">
            <span className="eyebrow">Perspectiva</span>

            <p className="mt-5 text-2xl font-medium leading-9 tracking-[-0.025em]">
              Antes de pensar na tecnologia, procuro entender o problema,
              o processo e quem precisa da solução.
            </p>

            <div className="mt-10 border-t border-black/10 pt-5">
              <span className="eyebrow">Formação atual</span>

              <p className="mt-3 text-sm font-semibold">
                Análise e Desenvolvimento de Sistemas
              </p>

              <p className="mt-1 text-sm text-black/50">
                UNICIV · conclusão prevista para 2027
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
