import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import { ProjectsData } from "@/components/ProjectsData";
import { SectionSkeleton } from "../Skeletons/SkeletonSection";

export const ProjectsSection = async () => {
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
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsData limit={3} />
        </Suspense>
      </Flex>
    </Box>
  );
};
