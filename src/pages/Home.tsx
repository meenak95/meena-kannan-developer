
import HeroSection from "../components/hero/HeroSection";
import SkillsShowcase from "../components/skills/SkillsShowcase";
import FeaturedProjects from "../components/projects/FeaturedProjects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SkillsShowcase />
      <FeaturedProjects />
    </div>
  );
}
