import { Flex, Text } from "@chakra-ui/react";

export const Band = () => {
  return (
    <Flex
      alignSelf="center"
      justifyContent={{ md: "space-around" }}
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 10, md: 0 }}
      width={{ base: "95%", md: "100%" }}
      mt="auto"
      mx="auto"
      ml={{ base: "5%", md: 0 }}
      fontSize={{ base: "xl" }}
      textTransform="uppercase"
      fontWeight={100}
      letterSpacing={2}
      opacity={0.7}
    >
      <Text>Developer</Text>
      <Text>Innovator</Text>
      <Text>Olomouc, CZECH REPUBLIC</Text>
    </Flex>
  );
};
