import { Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { SkeletonProjectDetail } from "@/components/skeletons/skeleton-project-detail";
import { ProjectDetail } from "./project-detail";

export const ProjectDetailPageContent = ({ slug }: { slug: string }) => {
  return (
    <Stack
      as="section"
      py={{ base: 24, md: 40 }}
      maxWidth={1400}
      mx={{ base: "5%", "2xl": "auto" }}
      mr={{ base: "8%" }}
    >
      <Suspense fallback={<SkeletonProjectDetail />}>
        <ProjectDetail slug={slug} />
      </Suspense>
    </Stack>
  );
};
