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
          imageUrl: [
            "https://www.prisma.io/docs/guides/nextjs#5-add-a-new-posts-detail-page",
            "https://www.prisma.io/docs/guides/nextjs#5-add-a-new-posts-detail-page",
          ],
          websiteUrl: "https://k2-dass.sanitino.cz",
        },
      ],
    },
    certificates: {
      create: [
        {
          title: "JavaScript",
          imageUrl:
            "https://pub-5a14200f009840f0812f58a1a3bb7064.r2.dev/certificates/cert_javascript.png",
          category: "FRONTEND",
        },
        {
          title: "TypeScript",
          imageUrl:
            "https://pub-5a14200f009840f0812f58a1a3bb7064.r2.dev/certificates/cert_typescript.png",
          category: "FRONTEND",
        },
        {
          title: "Tailwind CSS",
          imageUrl:
            "https://pub-5a14200f009840f0812f58a1a3bb7064.r2.dev/certificates/cert_tailwind.png",
          category: "FRONTEND",
        },
        {
          title: "Tricky Javascript",
          imageUrl:
            "https://pub-5a14200f009840f0812f58a1a3bb7064.r2.dev/certificates/cert_tricky_javascript.png",
          category: "FRONTEND",
        },
        {
          title: "React",
          imageUrl:
            "https://pub-5a14200f009840f0812f58a1a3bb7064.r2.dev/certificates/cert_react.png",
          category: "FRONTEND",
        },
        {
          title: "Advanced React",
          imageUrl:
            "https://pub-5a14200f009840f0812f58a1a3bb7064.r2.dev/certificates/cert_advanced_react.png",
          category: "FRONTEND",
        },
        {
          title: "Responsive Design",
          imageUrl:
            "https://pub-5a14200f009840f0812f58a1a3bb7064.r2.dev/certificates/cert_responsive_design.png",
          category: "FRONTEND",
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
