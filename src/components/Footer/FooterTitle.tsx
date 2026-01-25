import { Flex, Text } from "@chakra-ui/react";
import type { TitleProps } from "@/types/TitleProps";

export const FooterTitle = ({ title, ...props }: TitleProps) => {
  return (
    <Flex spaceX="5px">
      <Text
        as="h2"
        textAlign={{ base: "left", sm: "left" }}
        fontWeight={400}
        width="100%"
        {...props}
      >
        {title}
      </Text>
    </Flex>
  );
};
