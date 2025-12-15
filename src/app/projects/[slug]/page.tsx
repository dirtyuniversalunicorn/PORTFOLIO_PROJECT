import { Box } from "@chakra-ui/react";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Box as="section" pt={40}>
      <div>My project: {slug}</div>
    </Box>
  );
}
