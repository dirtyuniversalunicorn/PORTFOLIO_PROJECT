import prisma from "@/lib/prisma";

export const getProjectStaticParamsSlugs = async () => {
  try {
    return await prisma.project.findMany({
      select: { slug: true },
    });
  } catch (error) {
    if (!process.env.CI) {
      throw error;
    }

    return [{ slug: "build-placeholder" }];
  }
};

export const getProjectBySlug = async (slug: string) => {
  try {
    return await prisma.project.findUnique({
      where: {
        slug,
      },
    });
  } catch (error) {
    if (!process.env.CI) {
      throw error;
    }

    return null;
  }
};
