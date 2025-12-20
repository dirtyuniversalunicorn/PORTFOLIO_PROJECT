import prisma from "@/lib/prisma";
import { Badge, Link, List, Wrap, Text } from "@chakra-ui/react";

export type ProjectDataProps = {
  limit?: number | "all";
};

export async function ProjectsData({ limit }: ProjectDataProps) {
  "use cache";
  const projects = await prisma.project.findMany();
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
          <Text fontSize="base" opacity={0.5}>
            {project.shortDescription}
          </Text>
        </List.Item>
      ))}
    </List.Root>
  );
}
