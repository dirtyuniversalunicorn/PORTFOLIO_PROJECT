import prisma from "@/lib/prisma";
import { Grid } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { Carousel } from "@/components/Carousel";
import { ProjectCharacteristics } from "./ProjectCharacteristics";
import { sleep } from "@/utils/sleep";

export async function Project({ slug }: { slug: string }) {
  await sleep(2000);
  const projectDetails = await prisma.project.findUnique({
    where: {
      id: Number(slug),
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
