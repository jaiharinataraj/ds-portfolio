
import { Analytics } from "@vercel/analytics/react";
import { AboutSection } from "./pages/AboutSection.jsx";
import { AchievementsSection } from "./pages/AchievementsSection.jsx";
import { ContactSection } from "./pages/ContactSection.jsx";
import { Footer } from "./pages/Footer.jsx";
import { HeroSection } from "./pages/HeroSection.jsx";
import { Navbar } from "./pages/NavBar.jsx";
import { ProjectsSection } from "./pages/ProjectsSection.jsx";
import { SkillsSection } from "./pages/SkillsSection.jsx";
import SEO from "./components/SEO.jsx";

function App() {
  return (
    <div>
      <SEO/>
      <Analytics/>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;