import { Box, Grid } from "@chakra-ui/react";
import { Title } from "../Title";
import { LastBand } from "./LastBand";
import { FooterGrid } from "./FooterGrid";
import { FooterCTAGrid } from "./FooterCTAGrid";

export const Footer = () => {
  return (
    <Box id="footer_section">
      <Grid
        gridTemplateRows="repeat(2, auto)"
        maxWidth={1400}
        mx={{ base: "5%", "2xl": "auto" }}
        gap={{ base: 10, md: 36 }}
      >
        <FooterCTAGrid />
        <FooterGrid />
      </Grid>
      {/* <Title as="h3" title="Jaroslav Fiľo" fontSize={{ md: 200 }} /> */}
      <LastBand />
    </Box>
  );
};
