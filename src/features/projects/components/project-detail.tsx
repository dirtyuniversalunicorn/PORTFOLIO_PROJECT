import { Grid } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { Carousel } from "@/components/carousel";
import { getProjectBySlug } from "@/features/projects/queries";
import { ProjectCharacteristics } from "./project-characteristics";

export async function ProjectDetail({ slug }: { slug: string }) {
  "use cache";
  const projectDetails = await getProjectBySlug(slug);

  if (!projectDetails) {
    notFound();
  }

  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={10}
    >
      <ProjectCharacteristics projectDetails={projectDetails} />
      {projectDetails.imageUrl.length >= 0 && (
        <Carousel items={projectDetails.imageUrl} />
      )}
    </Grid>
  );
}
