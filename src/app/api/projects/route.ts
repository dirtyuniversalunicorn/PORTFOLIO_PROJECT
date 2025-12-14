// app/api/projects/route.ts
import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get("project_title") as string;
    const shortDescription = formData.get("short_description") as string;
    const longDescription = formData.get("long_description") as string;
    const technologies = formData.get("technologies") as string;

    if (!title || !shortDescription || !longDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        shortDescription,
        longDescription,
        technologies: [technologies],
        authorId: 1, // adjust dynamically if needed
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
