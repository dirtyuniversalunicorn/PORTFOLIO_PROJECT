import { Flex } from "@chakra-ui/react";
import { Band } from "../Band";
import { Title } from "../Title";

export const HeroSection = () => {
  return (
    <Flex as="section" id="landing_page_section" flexDirection="column">
      <Band />
      <Title title="Jaroslav Fiľo" />
    </Flex>
  );
};
