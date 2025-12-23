import { Flex } from "@chakra-ui/react";
import { Band } from "./Band";
import { BottomText } from "./BottomText";

// since band is used only here, move to hero section folder

export const HeroSection = () => {
    return (
        <Flex as="section" id="landing_page_section" flexDirection="column">
            <Band />
            <BottomText text="jaroslav filo" />
        </Flex>
    );
};
