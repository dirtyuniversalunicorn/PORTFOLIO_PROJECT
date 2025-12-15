import prisma from "@/lib/prisma";
import { Badge, Box, Grid, Text, Stack, Wrap, Image } from "@chakra-ui/react";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectDetails = await prisma.project.findUnique({
    where: {
      id: Number(slug),
    },
  });

  if (!projectDetails) {
    notFound();
  }

  return (
    <Box as="section" pt={40} maxWidth={1400} mx="auto">
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <Stack>
          <Wrap>
            {projectDetails?.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Wrap>
          <Text as="h1" fontSize={{ base: "5xl" }}>
            {projectDetails?.title}
          </Text>
          <Text>{projectDetails?.shortDescription}</Text>
          <Text>{projectDetails?.longDescription}</Text>
        </Stack>
        <Image src={projectDetails.imageUrl} />
      </Grid>
    </Box>
  );
}
