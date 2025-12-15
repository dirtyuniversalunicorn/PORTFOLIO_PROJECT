// TODO - this will be protected path
// pretty much content management system

import prisma from "@/lib/prisma";
import { Box } from "@chakra-ui/react";
import { Table } from "../../components/Table";
import { Button } from "@/components/Button.tsx";
import Link from "next/link";

export default async function Admin() {
  const projects = await prisma.project.findMany();
  return (
    <Box as="section" pt={40}>
      <Box maxWidth={1400} mx="auto">
        <Link href="/admin/newProject">
          <Button buttonTitle="Add new project" />
        </Link>
        <Table items={projects} />
      </Box>
    </Box>
  );
}
