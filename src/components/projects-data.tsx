import { Badge, Link, List, Text, Wrap } from "@chakra-ui/react";
import type { Project } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export type ProjectDataProps = {
  limit?: number | "all";
};

export async function ProjectsData({ limit }: ProjectDataProps) {
  "use cache";
  let projects: Project[] = [];

  try {
    projects = await prisma.project.findMany();
  } catch {
    projects = [];
  }

  const visibleProjects = limit === "all" ? projects : projects.slice(0, limit);

  return (
    <List.Root listStyle="none" gap={10} mt="12">
      {visibleProjects.map((project) => (
        <List.Item
          key={project.id}
          textTransform="uppercase"
          letterSpacing={1.61}
          mt="2"
        >
          <Wrap gap={2}>
            {project.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Wrap>
          <Link href={`/projects/${project.slug}`}>
            <Text as="span" fontSize="3xl" fontWeight={700}>
              {project.title}
            </Text>
          </Link>
          <Text
            as="p"
            fontSize="base"
            opacity={0.5}
            width={{ base: "100%", lg: "60%" }}
            textTransform="initial"
          >
            {project.shortDescription}
          </Text>
        </List.Item>
      ))}
    </List.Root>
  );
}
