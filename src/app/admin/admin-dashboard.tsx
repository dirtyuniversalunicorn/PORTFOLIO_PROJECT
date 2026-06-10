import { Box, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { AdminProjectsTable } from "@/features/admin-projects/components/admin-projects-table";
import { Role } from "@/generated/prisma/enums";
import { getSession, hasPermission } from "@/lib/dal";

export const AdminDashboard = async () => {
  const session = await getSession();
  const isAdmin = await hasPermission([Role.ADMIN]);

  if (!session || !isAdmin) {
    redirect("/");
  }

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
