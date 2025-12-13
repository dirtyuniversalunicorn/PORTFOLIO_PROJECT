import { Box, Grid } from "@chakra-ui/react";
import { LastBand } from "./LastBand";
import { FooterGrid } from "./FooterGrid";
import { FooterCTAGrid } from "./FooterCTAGrid";

export const Footer = () => {
  return (
    <Box id="footer_section" display="flex" flexDirection="column">
      <Grid
        gridTemplateRows="repeat(2, auto)"
        maxWidth={1400}
        mx={{ base: "5%", "2xl": "auto" }}
        my="auto"
        gap={{ base: 10, md: 36 }}
      >
        <FooterCTAGrid />
        <FooterGrid />
      </Grid>
      <LastBand />
    </Box>
  );
};
