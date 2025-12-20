import prisma from "@/lib/prisma";
import { sleep } from "@/utils/sleep";
import { TableClient } from "./Table";

export const Table = async () => {
  await sleep(2000);
  const projects = await prisma.project.findMany();

  return <TableClient projects={projects} />;
};
