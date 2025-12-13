import { Flex, Text } from "@chakra-ui/react";

export const LastBand = () => {
  const year = new Date().getFullYear();

  return (
    <Flex
      position="absolute"
      textAlign="center"
      justifyContent="center"
      bottom={0}
      mx="auto"
      width="100%"
    >
      <Text>©{year} Designed by Naeem, coded by Me</Text>
    </Flex>
  );
};

// TODO add link to Naeem
