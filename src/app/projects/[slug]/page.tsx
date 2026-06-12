import { ProjectDetailPageContent } from "@/features/projects/components/project-detail-page-content";

export const dynamic = "force-dynamic";

export default async function ProjectsDetail({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  return <ProjectDetailPageContent slug={slug} />;
}
