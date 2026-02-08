import { Box, Grid, Skeleton } from "@chakra-ui/react";

export function SkeletonProjectDetail() {
  return (
    <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
      <Box>
        <Skeleton height="72px" mb={4} />
        <Skeleton height="20px" mb={4} />
        <Skeleton height="24px" width="60%" />
      </Box>

      <Skeleton height="300px" borderRadius="lg" />
    </Grid>
  );
}
