import { Stack, Grid } from "@chakra-ui/react";
import { LastBand } from "./LastBand";
import { FooterGrid } from "./FooterGrid";
import { FooterCTAGrid } from "./FooterCTAGrid";
import { FooterTitle } from "./FooterTitle";

// TODO flex + column nahrad za stack

export const Footer = () => {
  return (
    <Stack id="footer_section">
      <Stack mx={{ base: "5%", "2xl": "auto" }} pt={{ base: "20" }}>
        <FooterTitle
          fontSize={{ base: "lg", md: "2xl" }}
          title="Do you have question, idea, or just want to say Hello?"
          width={{ base: "100%" }}
          fontWeight={300}
          letterSpacing={1.61}
        />
        <Grid
          gridTemplateRows="repeat(2, auto)"
          maxWidth={1400}
          my="auto"
          height="auto"
          gap={{ base: 10, md: 36 }}
        >
          <FooterCTAGrid />
          <FooterGrid />
        </Grid>
      </Stack>
      <LastBand />
    </Stack>
  );
};
