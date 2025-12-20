import { Photo } from "@/components/AboutSection/Photo";
import { BackgroundText } from "@/components/BackgroundText";
import { Career } from "@/components/Career";
import { Education } from "@/components/Education";
import { Marquee } from "@/components/Marquee";
import { Box, Flex } from "@chakra-ui/react";
import { Suspense } from "react";

const career = [
  {
    index: "1",
    title: "2024 - ongoing: K2 atmitec Olomouc",
    description: "Junior Programmer | Frontend Developer | Consultant",
    text: "One of wide varienty activities was to provide support to clients/users of ERP system K2. Not only support, but also providing solutions to their needs, since every business is different.",
  },
  {
    index: "2",
    title: "2023 - 2024: Freelance",
    description: "Frontend developer",
    text: "Transition period between doing science and frontend development. Involved A LOT of learning and practicing of new skills.",
  },
  {
    index: "3",
    title: "Molecular Biology Major",
    description: "Scientist",
    text: "Yes, science major.",
  },
];

export default async function About() {
  return (
    <>
      <Box as="section" id="about_me_page_section" pt={40} pb={20}>
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
}
