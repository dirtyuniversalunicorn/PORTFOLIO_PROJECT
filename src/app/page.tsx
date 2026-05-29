import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";
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
