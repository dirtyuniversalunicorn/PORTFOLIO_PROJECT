import { Grid, Box, GridItem } from "@chakra-ui/react";
import { FooterGridList } from "./FooterGridList";
import { footerNecessities } from "@/constants/footerNecessities";
import { Socials } from "../Socials";
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
        >
            <GridItem colSpan={{ base: 2, md: 1 }}>
                <Socials
                    showTitle
                    socials={socials}
                    display="flex"
                    flexDirection={{ base: "row", md: "column" }}
                />
            </GridItem>
            <GridItem
                colStart={{ base: 1, md: 2 }}
                rowStart={{ base: 2, md: 1 }}
            >
                <FooterGridList footerPages={footerPages} />
            </GridItem>
            <GridItem
                colStart={{ base: 2, md: 3 }}
                rowStart={{ base: 2, md: 1 }}
            >
                <FooterGridList footerPages={footerNecessities} />
            </GridItem>
            <Box display={{ base: "none", lg: "block" }} />
        </Grid>
    );
};
