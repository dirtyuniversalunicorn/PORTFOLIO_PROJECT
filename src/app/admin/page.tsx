// TODO - this will be protected path
// pretty much content management system

// import { UploadProject } from "@/components/UploadProject";
import { UploadProject } from "@/components/UploadProject";
import prisma from "@/lib/prisma";
import { Box, Text } from "@chakra-ui/react";

export default async function Admin() {
  const projects = await prisma.project.findMany();
  return (
    <Box as="section">
      <h1>Admin page</h1>
      <Box mt={96} maxWidth={1400} mx="auto">
        <UploadProject />
        {projects.map((project) => (
          <Box key={project.id}>
            <Text>Title: {project.title}</Text>
            <Text>Short description: {project.shortDescription}</Text>
            <Text>Long description: {project.longDescription}</Text>
            {/* <Text>Technologies: {project.title}</Text> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
