import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { techStackItems } from "@/constants/techStackItems";
import { Collapse } from "./Collapse";

export const TechStackSection = () => {
  return (
    <Box as="section" py={36}>
      <Flex
        maxWidth={1000}
        mx={{ base: "5%", lg: "auto" }}
        flexDirection="column"
        gap={5}
      >
        <Grid gridTemplateColumns="repeat(2, auto)">
          <Text textTransform="uppercase" letterSpacing={1.2} fontWeight={300}>
            technologies in my projects
          </Text>
          <Text
            fontSize="7xl"
            opacity={0.025}
            textAlign="right"
            zIndex={1}
            position="absolute"
            right={0}
            mx={"5%"}
          >
            Technologies <br />& Skills
          </Text>
        </Grid>
        <Collapse techStackItems={techStackItems} />
      </Flex>
    </Box>
  );
};
