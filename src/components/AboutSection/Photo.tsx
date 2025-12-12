import { Box, Text, Image } from "@chakra-ui/react";

export const Photo = () => {
  return (
    <Box
      display={{ base: "flex", md: "block" }}
      flexDirection={{ base: "column" }}
    >
      <Text
        as="h3"
        textTransform="uppercase"
        mb={6}
        letterSpacing={1.2}
        fontWeight={300}
      >
        About me
      </Text>
      <Image src="my_picture.jpg" w="auto" maxHeight={500} objectFit="cover" />
    </Box>
  );
};
