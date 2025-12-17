import { Carousel } from "@/components/Carousel";
import prisma from "@/lib/prisma";
import { Grid, Stack } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { ProjectCharacteristics } from "./components/ProjectCharacteristics";

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
    <Stack
      as="section"
      py={40}
      maxWidth={1400}
      mx={{ base: "5%", "2xl": "auto" }}
    >
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={{ base: 10 }}
      >
        <ProjectCharacteristics projectDetails={projectDetails} />
        <Carousel items={projectDetails.imageUrl} />
      </Grid>
    </Stack>
  );
}
