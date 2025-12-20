import { Stack, SkeletonText as ChakraSkeletonText } from "@chakra-ui/react";

const SectionSkeletonItem = () => {
  return (
    <Stack pt={16} pb={8}>
      <ChakraSkeletonText height="20px" />
      <ChakraSkeletonText height="45px" />
      <ChakraSkeletonText height="24px" />
    </Stack>
  );
};

export const SectionSkeleton = () => {
  return <SectionSkeletonItem />;
};
