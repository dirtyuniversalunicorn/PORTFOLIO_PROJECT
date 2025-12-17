import { BackgroundText } from "@/components/BackgroundText";
import { ProjectList } from "@/components/ProjectsSection/ProjectList";
import prisma from "@/lib/prisma";
import { Stack } from "@chakra-ui/react";

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
      <BackgroundText text="Projects" />
      <ProjectList projects={projects} limit="all" />
    </Stack>
  );
}
