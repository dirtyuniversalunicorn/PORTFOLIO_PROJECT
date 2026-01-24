import { Box, Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import { Photo } from "@/components/AboutSection/Photo";
import { BackgroundText } from "@/components/BackgroundText";
import { Career } from "@/components/Career";
import { Education } from "@/components/Education";
import { Marquee } from "@/components/Marquee";

// move this into the database

const career = [
  {
    index: "1",
    title: "2025 - ongoing | K2 atmitec Olomouc",
    description: "Junior Programmer | Frontend Developer | Consultant",
    text: "Developed new functionalities for the K2 ERP system based on customer requirements. Performed analysis, provided consultations, and implemented technical solutions. Designed and implemented solutions using object-oriented programming (OOP). Provided troubleshooting and support for K2 e-shop solutions. Worked with Pascal/Delphi (OOP), HTML5, LESS, JavaScript, React, and Next.js. Managed code versioning with Git, worked with SQL databases, and tracked tasks using Jira.",
  },
  {
    index: "2",
    title: "2024 - 2025 | Freelance",
    description: "Frontend developer",
    text: "Transition period from science to frontend development, involving extensive learning and hands-on practice of new skills.",
  },
  {
    index: "3",
    title: "2022 - 2024 | Doctoral Studies",
    description: "Ph.D. student",
    text: "Doctoral studies focusing on DNA repair mechanisms in the model organism Arabidopsis thaliana",
  },
];

export default async function About() {
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
}
