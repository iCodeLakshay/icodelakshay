'use client'
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero section/HeroSection";
import Projects from "@/components/Projects/Projects";
import Journey from "@/components/Timeline/Journey";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
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
      <Footer />

    </main>
  );
}
