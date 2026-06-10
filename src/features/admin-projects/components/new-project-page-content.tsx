import { Box } from "@chakra-ui/react";
import { requireAdminSession } from "@/features/admin-projects/require-admin-session";
import { CreateProjectForm } from "./create-project-form";

export const NewProjectPageContent = async () => {
  await requireAdminSession();

  return (
    <Box as="section" py={40}>
      <Box maxWidth={1400} mx="auto">
        <CreateProjectForm />
      </Box>
    </Box>
  );
};
