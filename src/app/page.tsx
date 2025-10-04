import Image from "next/image";
import Navbar from "./Component/Navbar";
import Hero from "./Component/HeroSection";
import Skills from "./Component/Skills";
import Experience from "./Component/Experience";
import Projects from "./Component/Project";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
