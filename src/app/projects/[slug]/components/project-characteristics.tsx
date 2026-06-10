"use client";

import { Box, Collapsible, Stack, Text, VStack, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DisplayBadges } from "@/components/badges";
import { IconTooltip } from "@/components/icon-tooltip";
import type { ProjectViewModel } from "@/features/projects/types";

type ProjectCharacteristics = {
  projectDetails: ProjectViewModel;
};

export const ProjectCharacteristics = ({
  projectDetails,
}: ProjectCharacteristics) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack>
      <VStack gap={4} alignItems="start">
        <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} lineHeight={1.3}>
          {projectDetails?.title}
        </Text>
        <Wrap>
          <IconTooltip
            content="Visit project"
            link={projectDetails.websiteUrl}
            icon={<FaExternalLinkAlt />}
          />
          <DisplayBadges badgeData={projectDetails.technologies} />
        </Wrap>
      </VStack>
      <Text textAlign="justify">{projectDetails?.shortDescription}</Text>
      <Collapsible.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Collapsible.Trigger paddingY="3" color="gray.500">
          {isOpen ? "Hide ..." : "More ..."}
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Box>
            <Text textAlign="justify">{projectDetails?.longDescription}</Text>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  );
};
