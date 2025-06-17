import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import HeroSection from "@/components/Hero section/HeroSection";
import Projects from "@/components/Projects/Projects";
import Journey from "@/components/Timeline/Journey";

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
      <section id="experience" className="scroll-mt-4">
        <Experience />
      </section>
      <section id="timeline" className="scroll-mt-4">
        <Journey />
      </section>
    </main>
  );
}
