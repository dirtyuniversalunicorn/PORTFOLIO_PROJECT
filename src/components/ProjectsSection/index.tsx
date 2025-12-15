import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import prisma from "@/lib/prisma";
import { ProjectList } from "./ProjectList";

export const ProjectsSection = async () => {
  const projects = await prisma.project.findMany();

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
            My recent work
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
        <ProjectList projects={projects} limit={3} />
      </Flex>
    </Box>
  );
};
