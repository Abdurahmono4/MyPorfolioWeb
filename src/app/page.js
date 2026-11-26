import Navbar from "./components/Navbar";
import BackgroundSection from "./components/BackgroundSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import WebArchive from "./components/WebArchive";
import ResearchSection from "./components/ResearchSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="folio">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BackgroundSection />
      <ProjectsSection />
      <WebArchive />
      <ResearchSection />
      <EmailSection />
    </main>
  );
}
