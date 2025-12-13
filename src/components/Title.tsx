import type { TitleProps } from "@/types/TitleProps";
import { Flex, Text } from "@chakra-ui/react";

export const Title = ({ title, ...props }: TitleProps) => {
  return (
    <Flex spaceX="5px" mt="auto" mx="auto" width="100%">
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
        opacity={0.2}
        {...props}
      >
        {title}
      </Text>
    </Flex>
  );
};
