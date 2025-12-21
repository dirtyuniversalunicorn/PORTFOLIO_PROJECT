import { Box } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { UploadProject } from "@/components/UploadProject";
import { Role } from "@/generated/prisma/enums";
import { getSession, hasPermission } from "@/lib/dal";

export const NewProject = async () => {
  const session = await getSession();
  const isAdmin = await hasPermission([Role.ADMIN]);

  if (!session || !isAdmin) {
    redirect("/");
  }

  return (
    <Box as="section" py={40}>
      <Box maxWidth={1400} mx="auto">
        <UploadProject />
      </Box>
    </Box>
  );
};
