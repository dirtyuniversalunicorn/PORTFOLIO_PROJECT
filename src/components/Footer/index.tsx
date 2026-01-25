import { Grid, Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { FooterGrid } from "./FooterGrid";
import { FooterTitle } from "./FooterTitle";
import { LastBand } from "./LastBand";

export const Footer = () => {
  return (
    <Stack id="footer_section">
      <Stack
        mx={{ base: "5%", "2xl": "auto" }}
        pt={{ base: "20" }}
        gap={14}
        mr={{ base: "8%", md: "5%" }}
      >
        <FooterTitle
          fontSize={{ base: "lg", md: "3xl" }}
          title="Do you have a question, an idea, or would you just like to get in touch?"
          width={{ base: "100%" }}
          fontWeight={300}
          letterSpacing={1.61}
        />
        <Grid
          gridTemplateRows="repeat(3, auto)"
          my="auto"
          height="auto"
          maxWidth={1400}
        >
          <FooterGrid />
          <Suspense>
            <LastBand />
          </Suspense>
        </Grid>
      </Stack>
    </Stack>
  );
};
