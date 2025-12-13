import { Career } from "@/components/Career";
import { jobs } from "@/constants/projects";
import { Box, Text } from "@chakra-ui/react";

export default async function About() {
  return (
    <Box>
      <Text>This is page about me.</Text>
      <Career jobs={jobs} />
    </Box>
  );
}
