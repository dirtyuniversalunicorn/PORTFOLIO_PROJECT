import type { TitleProps } from "@/types/TitleProps";
import { Flex, Text } from "@chakra-ui/react";

export const Title = ({ title }: TitleProps) => {
  return (
    <Flex alignItems="baseline" spaceX="5px">
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
      >
        {title}
      </Text>
    </Flex>
  );
};
