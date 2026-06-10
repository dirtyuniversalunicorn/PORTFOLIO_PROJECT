import prisma from "@/lib/prisma";
import { AdminProjectsTableClient } from "./admin-projects-table-client";

export const AdminProjectsTable = async () => {
  const projects = await prisma.project.findMany();

  return <AdminProjectsTableClient projects={projects} />;
};
