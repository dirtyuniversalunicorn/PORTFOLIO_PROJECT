import { Flex, Text } from "@chakra-ui/react";

export const Brand = () => {
  return (
    <Flex alignItems="baseline" spaceX="5px">
      <Text as="h2" fontSize="40px" letterSpacing="-1.61px" fontWeight={400}>
        Jaroslav
      </Text>
      <Text as="h2" fontSize="20px" letterSpacing="-1.61px">
        Fiľo
      </Text>
    </Flex>
  );
};
