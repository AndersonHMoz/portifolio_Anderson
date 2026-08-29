import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient-background" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Expertise />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}