import { Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { BackgroundText } from "@/components/background-text";
import { Skeleton } from "@/components/skeletons/skeleton";
import { ProjectsData } from "../../components/projects-data";

export default async function Projects() {
  return (
    <Stack
      as="section"
      py={{ base: 20, md: 40 }}
      gap={10}
      maxWidth={1400}
      mx={{ base: "5%", "2xl": "auto" }}
    >
      <BackgroundText text="Projects" />

      <Suspense fallback={<Skeleton />}>
        <ProjectsData limit="all" />
      </Suspense>
    </Stack>
  );
}
