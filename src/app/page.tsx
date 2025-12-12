import { Band } from "@/components/Band";
import { Title } from "@/components/Title";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex id="landing_page_section" flexDirection="column">
      <Band />
      <Title title="Jaroslav Fiľo" />
    </Flex>
  );
}
