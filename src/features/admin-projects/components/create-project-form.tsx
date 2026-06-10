import { Box, Text } from "@chakra-ui/react";
import { revalidatePath } from "next/cache";
import Form from "next/form";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { FormInput } from "@/components/form-input";
import { Role } from "@/generated/prisma/enums";
import { getSession, hasPermission } from "@/lib/dal";
import prisma from "@/lib/prisma";
import { generateSlug } from "@/utils/generate-slug";

export function CreateProjectForm() {
  async function createProject(formData: FormData) {
    "use server";

    const session = await getSession();
    const isAdmin = await hasPermission([Role.ADMIN]);

    if (!session || !isAdmin) {
      redirect("/");
    }

    const title = formData.get("project_title") as string;

    if (typeof title !== "string") {
      throw new Error("Project title is required");
    }

    const slug = generateSlug(title);
    const websiteUrl = formData.get("website_url") as string;
    const shortDescription = formData.get("short_description") as string;
    const longDescription = formData.get("long_description") as string;
    const technologies = (formData.get("technologies") as string)
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const files = formData.getAll("files") as File[];

    if (!files) {
      throw new Error("Images are required");
    }

    const cookie = (await headers()).get("cookie");

    const uploadedImageUrls = await Promise.all(
      files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/upload`,
          {
            method: "POST",
            headers: cookie ? { cookie } : undefined,
            body: formData,
          },
        );

        if (!res.ok) {
          throw new Error(`Upload failed: ${file.name}`);
        }

        const uploadBody: unknown = await res.json();
        const uploadPayload =
          uploadBody && typeof uploadBody === "object"
            ? (uploadBody as Record<string, unknown>)
            : {};

        if (typeof uploadPayload.url !== "string") {
          throw new Error(`Upload response missing URL: ${file.name}`);
        }

        return uploadPayload.url;
      }),
    );

    await prisma.project.create({
      data: {
        title,
        slug,
        websiteUrl,
        shortDescription,
        longDescription,
        technologies,
        imageUrl: uploadedImageUrls,
        authorId: session.user.id,
      },
    });

    revalidatePath("/admin");
    redirect("/admin");
  }

  return (
    <Box>
      <Text fontWeight={300} fontSize="2xl">
        Add New Project
      </Text>

      <Form action={createProject} className="space-y-6">
        <FormInput name="project_title" required placeholder="Project Title" />
        <FormInput name="website_url" required placeholder="Website URL" />

        <FormInput
          name="short_description"
          required
          placeholder="Short Description"
        />

        <FormInput
          name="long_description"
          required
          textArea
          placeholder="Long Description"
        />

        <FormInput
          name="technologies"
          required
          placeholder="next.js, tailwind css, prisma..."
        />

        <input type="file" multiple name="files" accept="image/*" required />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </Form>
    </Box>
  );
}
