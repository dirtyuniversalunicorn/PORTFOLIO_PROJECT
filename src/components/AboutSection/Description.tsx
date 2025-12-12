import { Box, Text } from "@chakra-ui/react";

export const Description = () => {
  return (
    <Text fontSize={"2xl"}>
      I’m a passionate and motivated Fronted Developer with strong foundation
      <Box as="span" opacity={0.5}>
        {" "}
        in modern web technologies. I enjoy turning ideas into responsive,
        user-friendly websites and applications.
      </Box>
    </Text>
  );
};
