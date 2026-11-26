import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ResearchSection from "./components/ResearchSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="folio">
      <header className="mast"><a href="#home">Rahmonjon Olimjonov</a><nav aria-label="Main navigation"><a href="#projects">Work</a><a href="#research">Research</a><a href="#about">About</a><a href="#email">Contact</a></nav></header>
      <HeroSection />
      <ProjectsSection />
      <ResearchSection />
      <AboutSection />
      <EmailSection />
    </main>
  );
}
