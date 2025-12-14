import { Prisma, PrismaClient, Role } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    email: "jaroslavfilo95@gmail.com",
    name: "Jaroslav Fiľo",
    role: Role.ADMIN,
    projects: {
      create: [
        {
          title: "Dock Appointment Scheduling System",
          shortDescription: "This is short description",
          longDescription: "This is loooooooooooooooong description",
          technologies: ["nextjs", "ant design", "tailwind css"],
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
