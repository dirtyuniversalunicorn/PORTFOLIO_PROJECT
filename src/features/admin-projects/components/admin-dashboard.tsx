import { Box, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { requireAdminSession } from "@/features/admin-projects/require-admin-session";
import { AdminProjectsTable } from "./admin-projects-table";

export const AdminDashboard = async () => {
  await requireAdminSession();

  return (
    <Box as="section" py={40}>
      <Box maxWidth={1400} mx="auto">
        <Link href="/admin/new-project">
          <Button buttonTitle="Add new project" />
        </Link>
        <Suspense fallback={<Skeleton />}>
          <AdminProjectsTable />
        </Suspense>
      </Box>
    </Box>
  );
};
