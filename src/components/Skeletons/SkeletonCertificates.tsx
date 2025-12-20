import { Grid, Skeleton } from "@chakra-ui/react";

export const SkeletonCertificates = () => {
  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gap={6}>
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
    </Grid>
  );
};
