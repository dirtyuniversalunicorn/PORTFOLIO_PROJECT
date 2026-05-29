import { Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { SkeletonProjectDetail } from "@/components/skeletons/skeleton-project-detail";
import prisma from "@/lib/prisma";
import { Project } from "./components/project";

export async function generateStaticParams() {
  let projects: { slug: string }[] = [];

  try {
    projects = await prisma.project.findMany({
      select: { slug: true },
    });
  } catch (error) {
    if (!process.env.CI) {
      throw error;
    }

    projects = [{ slug: "build-placeholder" }];
  }

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectsDetail({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  return (
    <Stack
      as="section"
      py={{ base: 24, md: 40 }}
      maxWidth={1400}
      mx={{ base: "5%", "2xl": "auto" }}
      mr={{ base: "8%" }}
    >
      <Suspense fallback={<SkeletonProjectDetail />}>
        <Project slug={slug} />
      </Suspense>
    </Stack>
  );
}
