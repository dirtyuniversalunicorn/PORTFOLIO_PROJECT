import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { ContactForm } from "../ContactForm.tsx";
import { FooterTitle } from "./FooterTitle";
import { Title } from "../Title";
import { LastBand } from "./LastBand";

export const Footer = () => {
  return (
    <Box id="footer_section">
      <Grid gridTemplateRows="repeat(3, auto)" maxWidth={1400} mx="auto">
        <Grid gridTemplateColumns="repeat(2, 1fr)">
          <Box my="auto" pt="20">
            <FooterTitle fontSize="2xl" title="Do you have question, idea," />
            <FooterTitle fontSize="xl" title="or just want to say hello?" />
            <FooterTitle fontSize="7xl" title="Reach Out To Me" />
            <FooterTitle
              fontSize="2xl"
              title="I will be happy to hear from you"
            />
          </Box>
          <ContactForm />
        </Grid>
        <Grid gridTemplateColumns="repeat(4, 1fr)">
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
          <Box>6</Box>
        </Grid>
        <Title as="h3" title="Jaroslav Fiľo" fontSize={{ md: 200 }} />
      </Grid>
      <LastBand />
    </Box>
  );
};
