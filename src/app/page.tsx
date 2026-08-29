import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="sobre"
          className="section-border py-32"
        >
          <div className="container-page">
            <span className="eyebrow">02 / Sobre</span>

            <div className="mt-10 max-w-4xl">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Código é uma ferramenta.
                <br />
                <span className="text-black/40">
                  O problema vem primeiro.
                </span>
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}