import {
  Skeleton as Chakraskeleton,
  HStack,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";

export const Skeleton = () => {
  return (
    <HStack gap="5">
      <SkeletonCircle size="12" />
      <Stack flex="1">
        <Chakraskeleton height="5" />
        <Chakraskeleton height="5" width="80%" />
      </Stack>
    </HStack>
  );
};
