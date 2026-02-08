import { Skeleton as ChakraSkeleton, Stack } from "@chakra-ui/react";

export const Skeleton = () => {
  return (
    <Stack gap="5" pt={20}>
      <Stack flex="1">
        <ChakraSkeleton height="5" />
        <ChakraSkeleton height="5" />
        <ChakraSkeleton height="5" />
      </Stack>
      <Stack flex="1">
        <ChakraSkeleton height="5" />
        <ChakraSkeleton height="5" />
        <ChakraSkeleton height="5" />
      </Stack>
      <Stack flex="1">
        <ChakraSkeleton height="5" />
        <ChakraSkeleton height="5" />
        <ChakraSkeleton height="5" />
      </Stack>
    </Stack>
  );
};
