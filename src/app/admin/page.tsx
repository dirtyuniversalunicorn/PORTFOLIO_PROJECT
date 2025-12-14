// TODO - this will be protected path
// pretty much content management system

import { UploadProject } from "@/components/UploadProject";
import { Box } from "@chakra-ui/react";

export default async function Admin() {
  return (
    <Box as="section">
      <h1>Admin page</h1>
      <Box mt={96} maxWidth={1400} mx="auto">
        <UploadProject />
      </Box>
    </Box>
  );
}
