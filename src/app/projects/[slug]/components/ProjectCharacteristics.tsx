import { DisplayBadges } from "@/components/Badges";
import { IconTooltip } from "@/components/IconTooltip";
import { ProjectProps } from "@/types/ProjectsProps";
import { Stack, HStack, Wrap, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCharacteristics = {
  projectDetails: ProjectProps;
};

export const ProjectCharacteristics = ({
  projectDetails,
}: ProjectCharacteristics) => {
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
      <Text>{projectDetails?.longDescription}</Text>
    </Stack>
  );
};
