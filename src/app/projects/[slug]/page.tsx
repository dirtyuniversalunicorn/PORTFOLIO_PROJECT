import { DisplayBadges } from "@/components/Badges";
import { IconTooltip } from "@/components/IconTooltip";
import prisma from "@/lib/prisma";
import {
  Badge,
  Box,
  Grid,
  Text,
  Stack,
  Wrap,
  Image,
  HStack,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectDetails = await prisma.project.findUnique({
    where: {
      id: Number(slug),
    },
  });

  if (!projectDetails) {
    notFound();
  }

  return (
    <Box as="section" py={40} maxWidth={1400} mx="auto">
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <Stack>
          <HStack gap={4}>
            <Text as="h1" fontSize={{ base: "5xl" }}>
              {projectDetails?.title}
            </Text>

            <IconTooltip
              content="Visit project"
              link={projectDetails.imageUrl}
              icon={<FaExternalLinkAlt />}
            />
          </HStack>
          <DisplayBadges badgeData={projectDetails.technologies} />
          <Text>{projectDetails?.shortDescription}</Text>
          <Text>{projectDetails?.longDescription}</Text>
        </Stack>
        <Image src={projectDetails.imageUrl} />
      </Grid>
    </Box>
  );
}
