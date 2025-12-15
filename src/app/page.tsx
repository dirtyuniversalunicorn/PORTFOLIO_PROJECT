import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSection } from "@/components/TechStackSection.tsx";
import { Footer } from "@/components/Footer";
import { socials } from "@/constants/socials";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection socials={socials} />
      <ProjectsSection />
      <TechStackSection />
    </>
  );
}
