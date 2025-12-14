import Form from "next/form";
import { FormInput } from "../ContactForm.tsx/FormInput";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewProjectForm() {
  async function createProject(formData: FormData) {
    "use server";

    const title = formData.get("project_title") as string;
    const shortDescription = formData.get("short_description") as string;
    const longDescription = formData.get("long_description") as string;
    const technologies = formData.get("technologies") as string;

    await prisma.project.create({
      data: {
        title,
        shortDescription,
        longDescription,
        technologies: [technologies],
        authorId: 1,
      },
    });

    revalidatePath("/projects");
    redirect("/projects");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <Form action={createProject} className="space-y-6">
        <FormInput name="project_title" required placeholder="Project Title" />
        <FormInput
          id="short_description"
          name="short_description"
          required
          placeholder="Short Description"
        />
        <FormInput
          id="long_description"
          name="long_description"
          required
          textArea
          placeholder="Long Description"
        />
        <FormInput
          id="technologies"
          name="technologies"
          required
          placeholder="Technologies used"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </Form>
    </div>
  );
}
