import type { ProjectProps } from "@/types/ProjectsProps";
import { List, Wrap, Text, Badge } from "@chakra-ui/react";
import Link from "next/link";

// TODO Types
export type ProjectListProps = {
  projects: ProjectProps[];
  limit?: number | "all";
};

export const ProjectList = ({ projects, limit }: ProjectListProps) => {
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
          <Link href={`/projects/${project.id}`}>
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
};
