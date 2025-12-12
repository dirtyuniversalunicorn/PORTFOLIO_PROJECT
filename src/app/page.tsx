import { Band } from "@/components/Band";
import { AboutSection } from "@/components/AboutSection";
import { Title } from "@/components/Title";
import { Flex } from "@chakra-ui/react";

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
      <Flex id="landing_page_section" flexDirection="column">
        <Band />
        <Title title="Jaroslav Fiľo" />
      </Flex>
      <AboutSection socials={socials} />
      <Flex>Portfolios Section</Flex>
      <Flex>Stack</Flex>
      <Flex>Footer</Flex>
    </>
  );
}
