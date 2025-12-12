import type { TitleProps } from "@/types/TitleProps";
import { Flex, Text } from "@chakra-ui/react";

export const FooterTitle = ({ title }: TitleProps) => {
  return (
    <Flex spaceX="5px">
      <Text
        as="h2"
        fontSize={{
          base: "7xl",
        }}
        textAlign={{ base: "center", sm: "left" }}
        fontWeight={400}
        width="100%"
        opacity={0.2}
      >
        {title}
      </Text>
    </Flex>
  );
};
