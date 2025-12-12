import { Band } from "@/components/Band";
import { AboutSection } from "@/components/AboutSection";
import { Title } from "@/components/Title";
import { Flex } from "@chakra-ui/react";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HeroSection } from "@/components/HeroSection";

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
      <Flex>Stack</Flex>
      <Flex>Footer</Flex>
    </>
  );
}
