import { Box, Grid } from "@chakra-ui/react";
import Link from "next/link";
import type { AboutSectionProps } from "@/types/AboutSectionProps";
import { Button } from "../Button.tsx";
import { Socials } from "../Socials";
import { Description } from "./Description";
import { Photo } from "./Photo";
import { Stats } from "./Stats";

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
