// TODO - this will be protected path
// pretty much content management system

import { Box } from "@chakra-ui/react";
import { Table } from "../../components/Table";
import { Button } from "@/components/Button.tsx";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "@/components/Skeletons/Skeleton";

// this page does not need footer!

export default async function Admin() {
  return (
    <Box as="section" py={40}>
      <Box maxWidth={1400} mx="auto">
        <Link href="/admin/newProject">
          <Button buttonTitle="Add new project" />
        </Link>
        <Suspense fallback={<Skeleton />}>
          <Table />
        </Suspense>
      </Box>
    </Box>
  );
}
