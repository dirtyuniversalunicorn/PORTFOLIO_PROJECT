import { Box, Grid } from "@chakra-ui/react";
import Link from "next/link";
import type { AboutSectionProps } from "@/types/about-section-props";
import { Button } from "../button";
import { Socials } from "../socials";
import { Description } from "./description";
import { Photo } from "./photo";
import { Stats } from "./stats";

// TODO types

export const AboutSection = ({ socials }: AboutSectionProps) => {
  return (
    <Grid
      as="section"
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={5}
      mx={{ base: "5%", lg: "auto" }}
      maxWidth={900}
      py={20}
    >
      <Photo />
      <Box
        display="flex"
        flexDirection="column"
        gap={{ base: 7 }}
        justifyContent="space-between"
      >
        <Description />
        <Socials socials={socials} />
        <Stats />
        <Box order={{ base: 4 }}>
          <Link href="/about">
            <Button
              variant="transparent"
              buttonTitle="More about me..."
              mt="auto"
            />
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

// TODO email icon
// TODO render Float based on prop
// TODO add links to icons
