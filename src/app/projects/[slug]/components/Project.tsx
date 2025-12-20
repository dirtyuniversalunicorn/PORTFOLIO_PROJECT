import prisma from "@/lib/prisma";
import { Grid } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { Carousel } from "@/components/Carousel";
import { ProjectCharacteristics } from "./ProjectCharacteristics";

export async function Project({ slug }: { slug: string }) {
  "use cache";
  const projectDetails = await prisma.project.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!projectDetails) {
    notFound();
  }

  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={10}
    >
      <ProjectCharacteristics projectDetails={projectDetails} />
      <Carousel items={projectDetails.imageUrl} />
    </Grid>
  );
}
