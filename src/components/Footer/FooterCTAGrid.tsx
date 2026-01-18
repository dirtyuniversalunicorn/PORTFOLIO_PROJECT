import { Grid, Stack } from "@chakra-ui/react";
import { ContactForm } from "../ContactMeSection/Form";
// import { ContactForm } from "../ContactForm.tsx/index";
import { FooterTitle } from "./FooterTitle";

export const FooterCTAGrid = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={{ base: 0, md: 16, lg: 36 }}
    >
      <Stack my={{ base: 10, md: "auto" }}>
        <FooterTitle
          fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }}
          title="Reach Out To Me"
          letterSpacing={1.61}
          lineHeight={{ base: "1" }}
          mt={{ base: "-3", md: "0" }}
        />
        <FooterTitle
          fontSize={{ base: "lg", md: "2xl" }}
          title="I will be happy to hear from you"
          mt={{ base: "-2", md: "0" }}
        />
      </Stack>
      <ContactForm />
    </Grid>
  );
};
