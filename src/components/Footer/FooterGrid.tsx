import { Grid, Box, Text, GridItem } from "@chakra-ui/react";
import { FooterGridList } from "./FooterGridList";
import { footerPages } from "@/constants/footerPages";
import { footerNecessities } from "@/constants/footerNecessities";
import { Socials } from "../AboutSection/Socials";
import { socials } from "@/constants/socials";

export const FooterGrid = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      templateRows={{
        base: "repeat(2, auto)",
        sm: "repeat(2, auto)",
        md: "repeat(1, auto)",
      }}
      gap={{ base: "10", md: "28" }}
      justifyItems={{ base: "center" }}
      // textAlign={{ base: "center", sm: "left" }}
    >
      {/* Item 1 */}
      {/* <GridItem colSpan={{ base: 2, md: 1 }}>
        <Text>
          Design-driven solutions for modern brands, built with purpose and
          passion.
        </Text>
      </GridItem> */}
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Socials
          showTitle
          socials={socials}
          display="flex"
          flexDirection={{ base: "row", md: "column" }}
        />
      </GridItem>

      {/* Item 2 → row 2, col 1 */}
      <GridItem colStart={{ base: 1, md: 2 }} rowStart={{ base: 2, md: 1 }}>
        <FooterGridList footerPages={footerPages} />
      </GridItem>

      {/* Item 3 → row 2, col 2 */}
      <GridItem colStart={{ base: 2, md: 3 }} rowStart={{ base: 2, md: 1 }}>
        <FooterGridList footerPages={footerNecessities} />
      </GridItem>

      <Box display={{ base: "none", lg: "block" }} />
    </Grid>
  );
};
