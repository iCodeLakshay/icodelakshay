import About from "@/components/About/About";
import HeroSection from "@/components/Hero section/HeroSection";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <section id="home" className="scroll-mt-4">
        <HeroSection />
      </section>
      <section id="project" className="scroll-mt-4">
        <Projects />
      </section>
      <section id="about" className="scroll-mt-4">
        <About />
      </section>
    </main>
  );
}
