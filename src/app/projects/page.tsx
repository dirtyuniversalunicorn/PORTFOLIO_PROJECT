import { ProjectList } from "@/components/ProjectsSection/ProjectList";
import prisma from "@/lib/prisma";
import { Stack, Text } from "@chakra-ui/react";

// TODO types

export default async function Projects() {
  const projects = await prisma.project.findMany();
  return (
    <Stack
      as="section"
      py={40}
      gap={10}
      maxWidth={1400}
      mx={{ base: "5%", lg: "auto" }}
    >
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
      <ProjectList projects={projects} limit="all" />
    </Stack>
  );
}
