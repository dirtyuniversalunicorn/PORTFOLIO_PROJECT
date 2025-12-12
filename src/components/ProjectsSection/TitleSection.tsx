import type { TitleProps } from "@/types/TitleProps";
import { Flex, Text } from "@chakra-ui/react";

export const TitleSection = ({ title }: TitleProps) => {
  return (
    <Flex spaceX="5px" my="auto" mx="auto">
      <Text
        as="h1"
        fontSize={{
          base: "7xl",
          sm: "90px",
          md: "140px",
          lg: "190px",
          "2xl": "280px",
        }}
        textAlign={{ base: "center", sm: "left" }}
        fontWeight={400}
        width="100%"
        opacity={0.05}
      >
        {title}
      </Text>
    </Flex>
  );
};
