import { Badge, Box, Flex, Grid, List, Text, Wrap } from "@chakra-ui/react";
import Link from "next/link";
import prisma from "@/lib/prisma";

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
        <List.Root listStyle="none" gap={10} mt="12">
          {projects.slice(0, 3).map((project) => (
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
                <Text fontSize="3xl" fontWeight={700}>
                  {project.title}
                </Text>
              </Link>
              <Text fontSize="base" opacity={0.5}>
                {project.shortDescription}
              </Text>
            </List.Item>
          ))}
        </List.Root>
      </Flex>
    </Box>
  );
};
