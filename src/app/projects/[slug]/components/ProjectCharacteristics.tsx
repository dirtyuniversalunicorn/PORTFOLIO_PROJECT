"use client";

import { DisplayBadges } from "@/components/Badges";
import { IconTooltip } from "@/components/IconTooltip";
import type { ProjectProps } from "@/types/ProjectsProps";
import { Stack, HStack, Wrap, Text, Collapsible, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCharacteristics = {
  projectDetails: ProjectProps;
};

export const ProjectCharacteristics = ({
  projectDetails,
}: ProjectCharacteristics) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
      <Collapsible.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Collapsible.Trigger paddingY="3">
          {isOpen ? "Hide..." : "Read more..."}
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Box>
            <Text>{projectDetails?.longDescription}</Text>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  );
};
