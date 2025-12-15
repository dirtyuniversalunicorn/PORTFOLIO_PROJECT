import { Grid } from "@chakra-ui/react";
import { StatsItem } from "./StatsItem";

export const Stats = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(2, 1fr)"
      order={{ base: 3 }}
      placeItems={{ base: "center", md: "start" }}
    >
      <StatsItem number={2} category="years of experience" />
      <StatsItem number={3} category="projects completed" />
    </Grid>
  );
};
