import { Grid, Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { FooterCTAGrid } from "./FooterCTAGrid";
import { FooterGrid } from "./FooterGrid";
import { FooterTitle } from "./FooterTitle";
import { LastBand } from "./LastBand";

// TODO flex + column nahrad za stack

export const Footer = () => {
  return (
    <Stack id="footer_section">
      <Stack mx={{ base: "5%", "2xl": "auto" }} pt={{ base: "20" }} gap={5}>
        <FooterTitle
          fontSize={{ base: "lg", md: "3xl" }}
          title="Have a question, an idea, or would you just like to get in touch?"
          width={{ base: "100%" }}
          fontWeight={300}
          letterSpacing={1.61}
        />
        <Grid
          gridTemplateRows="repeat(3, auto)"
          maxWidth={1400}
          my="auto"
          height="auto"
          gap={{ base: 10, md: 20 }}
        >
          <FooterCTAGrid />
          <FooterGrid />
          <Suspense>
            <LastBand />
          </Suspense>
        </Grid>
      </Stack>
    </Stack>
  );
};
