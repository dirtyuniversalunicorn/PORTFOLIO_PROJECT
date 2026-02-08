import { SkeletonText as ChakraSkeletonText, Stack } from "@chakra-ui/react";

const SectionSkeletonItem = () => {
  return (
    <Stack pt={16} pb={8}>
      <ChakraSkeletonText backgroundColor="whiteAlpha.100" height="20px" />
      <ChakraSkeletonText backgroundColor="whiteAlpha.100" height="45px" />
      <ChakraSkeletonText backgroundColor="whiteAlpha.100" height="24px" />
    </Stack>
  );
};

export const SectionSkeleton = () => {
  return <SectionSkeletonItem />;
};
