import { Box, Grid } from "@chakra-ui/react";
import { ContactForm } from "../ContactForm.tsx";
import { FooterTitle } from "./FooterTitle";

export const Footer = () => {
  return (
    <Grid id="footer_section" gridTemplateRows="repeat(2, 1fr)">
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <FooterTitle title="Reach Me any time" />
        <ContactForm />
      </Grid>
      <Grid gridTemplateColumns="repeat(4, 1fr)">
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </Grid>
    </Grid>
  );
};
