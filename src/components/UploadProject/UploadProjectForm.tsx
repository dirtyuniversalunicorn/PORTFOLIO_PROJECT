import Form from "next/form";
import { FormInput } from "../ContactForm.tsx/FormInput";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";
import prisma from "@/lib/prisma";

export default function UploadProjectForm() {
  async function createProject(formData: FormData) {
    "use server";

    const title = formData.get("project_title") as string;
    const shortDescription = formData.get("short_description") as string;
    const longDescription = formData.get("long_description") as string;
    const technologies = (formData.get("technologies") as string)
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const file = formData.get("file") as File;

    if (!file) {
      throw new Error("Image is required");
    }

    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    const uploadRes = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/upload`,
      {
        method: "POST",
        body: uploadFormData,
      }
    );

    if (!uploadRes.ok) {
      throw new Error("Image upload failed");
    }

    const { url } = await uploadRes.json();

    await prisma.project.create({
      data: {
        title,
        shortDescription,
        longDescription,
        technologies,
        imageUrl: url,
        authorId: 2,
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

        <input type="file" name="file" accept="image/*" required />

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
