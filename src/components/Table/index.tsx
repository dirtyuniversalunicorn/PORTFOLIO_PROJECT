import prisma from "@/lib/prisma";
import { TableClient } from "./Table";

export const Table = async () => {
  const projects = await prisma.project.findMany();

  return <TableClient projects={projects} />;
};
