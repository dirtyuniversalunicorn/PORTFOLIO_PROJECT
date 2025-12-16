import { DisplayBadges } from "@/components/Badges";
import { Carousel } from "@/components/Carousel";
import { IconTooltip } from "@/components/IconTooltip";
import prisma from "@/lib/prisma";
import { Grid, Text, Stack, Image, HStack, Wrap } from "@chakra-ui/react";
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
    <Stack
      as="section"
      py={40}
      gap={10}
      maxWidth={1400}
      mx={{ base: "5%", lg: "auto" }}
    >
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <Stack>
          <HStack gap={4}>
            <Text as="h1" fontSize={{ base: "5xl" }}>
              {projectDetails?.title}
            </Text>
          </HStack>
          <Wrap>
            <IconTooltip
              content="Visit project"
              link={projectDetails.websiteUrl}
              icon={<FaExternalLinkAlt />}
            />
            <DisplayBadges badgeData={projectDetails.technologies} />
          </Wrap>
          <Text>{projectDetails?.shortDescription}</Text>
          <Text>{projectDetails?.longDescription}</Text>
        </Stack>
        {/* <Image src={projectDetails.imageUrl[0]} /> */}
        <Carousel items={projectDetails.imageUrl} />
      </Grid>
    </Stack>
  );
}
