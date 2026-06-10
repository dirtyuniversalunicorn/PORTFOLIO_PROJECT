import { Box, Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import { Photo } from "@/components/about-section/photo";
import { BackgroundText } from "@/components/background-text";
import { Career } from "@/components/career";
import { Education } from "@/components/education";
import { Marquee } from "@/components/marquee";
import { career } from "@/features/about/career-data";

export const AboutPageContent = () => {
  return (
    <>
      <Box
        as="section"
        id="about_me_page_section"
        pt={{ base: 20, lg: 40 }}
        pb={20}
      >
        <Box maxWidth={1400} mx={{ base: "5%", "2xl": "auto" }}>
          <BackgroundText text="About Me" />
          <Flex flexDirection={{ base: "column", sm: "row" }}>
            <Photo />
            <Career jobs={career} />
          </Flex>
        </Box>
      </Box>
      <Box as="section">
        <Suspense fallback="Loading your tech stack.">
          <Marquee />
        </Suspense>
      </Box>
      <Box as="section">
        <Education />
      </Box>
    </>
  );
};
