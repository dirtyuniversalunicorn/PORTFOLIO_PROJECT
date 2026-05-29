import prisma from "@/lib/prisma";
import { TableClient } from "./table";

export const Table = async () => {
  const projects = await prisma.project.findMany();

  return <TableClient projects={projects} />;
};
