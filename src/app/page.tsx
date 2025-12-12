import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSection } from "@/components/TechStackSection.tsx";
import { Footer } from "@/components/Footer";

const socials = [
  "facebook.png",
  "instagram.png",
  "linkedin.png",
  "discord.png",
  "github.png",
];

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection socials={socials} />
      <ProjectsSection />
      <TechStackSection />
      <Footer />
    </>
  );
}
