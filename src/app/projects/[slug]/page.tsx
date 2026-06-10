import { ProjectDetailPageContent } from "@/features/projects/components/project-detail-page-content";
import { getProjectStaticParamsSlugs } from "@/features/projects/queries";

export async function generateStaticParams() {
  const projects = await getProjectStaticParamsSlugs();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectsDetail({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  return <ProjectDetailPageContent slug={slug} />;
}
