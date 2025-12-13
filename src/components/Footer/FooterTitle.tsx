import type { TitleProps } from "@/types/TitleProps";
import { Flex, Text } from "@chakra-ui/react";

export const FooterTitle = ({ title, ...props }: TitleProps) => {
  return (
    <Flex spaceX="5px">
      <Text
        as="h2"
        textAlign={{ base: "center", sm: "left" }}
        fontWeight={400}
        width="100%"
        // opacity={0.2}
        {...props}
      >
        {title}
      </Text>
    </Flex>
  );
};
