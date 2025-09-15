import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import GameSection from "@/components/game-section";
import MetricsSection from "@/components/metrics-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ToolsSection from "@/components/tools-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <GameSection />
      <MetricsSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-muted border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>© 2025 Ashish Kumar Chaudhary. All rights reserved.</p>
            <p className="mt-2 text-sm">Thank you for visiting! Explore my creative journey, leadership, and impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
