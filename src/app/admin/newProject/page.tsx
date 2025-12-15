import { Box } from "@chakra-ui/react";
import { UploadProject } from "../../../components/UploadProject";

export default async function NewProject() {
  return (
    <Box as="section" pt={40}>
      <Box maxWidth={1400} mx="auto">
        <UploadProject />
      </Box>
    </Box>
  );
}
