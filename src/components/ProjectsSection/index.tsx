import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export const ProjectsSection = () => {
  return (
    <Box id="section_portfolios" as="section" py={36}>
      <Flex
        maxWidth={1000}
        mx={{ base: "5%", lg: "auto" }}
        flexDirection="column"
        gap={5}
      >
        <Grid gridTemplateColumns="repeat(2, auto)">
          <Text textTransform="uppercase" letterSpacing={1.2} fontWeight={300}>
            Selection of my work
          </Text>
          <Text
            fontSize="7xl"
            opacity={0.05}
            textAlign="right"
            zIndex={1}
            position="absolute"
            right={0}
            mx={"5%"}
          >
            Projects
          </Text>
        </Grid>
      </Flex>
    </Box>
  );
};
