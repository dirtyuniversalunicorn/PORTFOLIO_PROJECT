import { Grid, Skeleton } from "@chakra-ui/react";

export const SkeletonCertificates = () => {
  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gap={6}>
      <Skeleton height="200px" backgroundColor="whiteAlpha.100" />
      <Skeleton height="200px" backgroundColor="whiteAlpha.100" />
      <Skeleton height="200px" backgroundColor="whiteAlpha.100" />
      <Skeleton height="200px" backgroundColor="whiteAlpha.100" />
      <Skeleton height="200px" backgroundColor="whiteAlpha.100" />
      <Skeleton height="200px" backgroundColor="whiteAlpha.100" />
      <Skeleton height="200px" backgroundColor="whiteAlpha.100" />
    </Grid>
  );
};
