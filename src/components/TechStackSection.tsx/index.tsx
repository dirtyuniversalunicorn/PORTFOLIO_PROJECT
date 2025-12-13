import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import { Collapse } from "./Collapse";
import { techStackItems } from "@/constants/techStackItems";

export const TechStackSection = () => {
  return (
    <Box as="section" py={36}>
      <Flex maxWidth={1000} mx="auto" flexDirection="column" gap={5}>
        <Grid gridTemplateColumns="repeat(2, auto)">
          <Text textTransform="uppercase" letterSpacing={1.2} fontWeight={300}>
            technologies in my projects
          </Text>
          <Text fontSize="7xl" opacity={0.05}>
            Technologies & Skills
          </Text>
        </Grid>
        <Collapse techStackItems={techStackItems} />
      </Flex>
    </Box>
  );
};
