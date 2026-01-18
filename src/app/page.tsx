import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackSection } from "@/components/TechStackSection.tsx";
import { socials } from "@/constants/socials";

export const runtime = "edge";

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
