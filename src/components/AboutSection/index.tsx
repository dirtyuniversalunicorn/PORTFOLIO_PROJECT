import { Box, Grid } from "@chakra-ui/react";
import { Socials } from "./Socials";
import type { AboutSectionProps } from "@/types/AboutSectionProps";
import { Stats } from "./Stats";
import { Description } from "./Description";
import { Photo } from "./Photo";

// TODO types

export const AboutSection = ({ socials }: AboutSectionProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" mx="auto" maxWidth={900} py={20}>
      <Photo />
      <Box
        display="flex"
        flexDirection="column"
        maxHeight={400}
        justifyContent="space-between"
      >
        <Description />
        <Socials socials={socials} />
        <Stats />
      </Box>
    </Grid>
  );
};

// TODO email icon
// TODO phone
// TODO render Float based on prop
// TODO add links to icons
