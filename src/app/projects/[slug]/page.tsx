import { Suspense } from "react";
import { Stack } from "@chakra-ui/react";
import { SkeletonProjectDetail } from "@/components/Skeletons/SkeletonProjectDetail";
import { Project } from "./components/Project";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Stack
      as="section"
      py={40}
      maxWidth={1400}
      mx={{ base: "5%", "2xl": "auto" }}
    >
      <Suspense fallback={<SkeletonProjectDetail />}>
        <Project slug={slug} />
      </Suspense>
    </Stack>
  );
}
