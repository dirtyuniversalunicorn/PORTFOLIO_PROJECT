import { Grid, Box, Float, Circle, Text } from "@chakra-ui/react";

export const Stats = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(2, 1fr)"
      order={{ base: 3 }}
      placeItems={{ base: "center", md: "start" }}
    >
      <Box width="auto">
        <Box position="relative" w="60px" h="60px">
          <Float top={4} right={4}>
            <Circle size="7" backgroundColor="transparent" color="white">
              +
            </Circle>
          </Float>
          <Text textAlign="center" fontSize={50}>
            2
          </Text>
        </Box>
        <Text fontSize={8}>Years of experience</Text>
      </Box>
      <Box width="auto">
        <Box position="relative" w="60px" h="60px">
          <Float top={4} right={4}>
            <Circle size="7" backgroundColor="transparent" color="white">
              +
            </Circle>
          </Float>
          <Text fontSize={50} textAlign="center">
            3
          </Text>
        </Box>
        <Text fontSize={8}>Projects completed</Text>
      </Box>
    </Grid>
  );
};
