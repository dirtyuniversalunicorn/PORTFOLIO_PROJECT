import { Flex, Text } from "@chakra-ui/react";
import { Band } from "../Band";

export const HeroSection = () => {
  return (
    <Flex as="section" id="landing_page_section" flexDirection="column">
      <Band />
      <Flex mt="auto" mx="auto" width="100%">
        <Text
          as="h1"
          fontSize={{
            base: "7xl",
            sm: "90px",
            md: "140px",
            lg: "190px",
            "2xl": "280px",
          }}
          textAlign={{ base: "center" }}
          fontWeight={400}
          width="100%"
          opacity={0.2}
          textTransform="uppercase"
        >
          jaroslav filo
        </Text>
      </Flex>
    </Flex>
  );
};
