import { Box, Grid, GridItem } from "@chakra-ui/react";
import { footerNecessities } from "@/constants/footerNecessities";
import { footerPages } from "@/constants/footerPages";
import { socials } from "@/constants/socials";
import { ContactForm } from "../ContactMeSection";
import { Socials } from "../Socials";
import { FooterGridList } from "./FooterGridList";

export const FooterGrid = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(6, 1fr)",
      }}
      templateRows={{
        base: "repeat(2, auto)",
        sm: "repeat(2, auto)",
        md: "repeat(1, auto)",
      }}
      gap={{ base: "8", md: "10", lg: "28" }}
      justifyItems={{ base: "center" }}
    >
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Socials
          showTitle
          socials={socials}
          display="flex"
          flexDirection={{ base: "row", md: "column" }}
          gapY={{ base: 1, md: 6 }}
        />
      </GridItem>
      <GridItem colStart={{ base: 1, md: 2 }} rowStart={{ base: 2, md: 1 }}>
        <FooterGridList footerPages={footerPages} />
      </GridItem>
      <GridItem colStart={{ base: 2, md: 3 }} rowStart={{ base: 2, md: 1 }}>
        <FooterGridList footerPages={footerNecessities} />
      </GridItem>
      <GridItem
        colStart={{ base: 1, md: 4 }}
        colSpan={{ base: 2, md: 3 }}
        rowStart={{ base: 1, md: 1 }}
        width="100%"
      >
        <ContactForm />
      </GridItem>
    </Grid>
  );
};
