import { Photo } from "@/components/AboutSection/Photo";
import { BackgroundText } from "@/components/BackgroundText";
import { Career } from "@/components/Career";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import { Section } from "@/components/Section";
import { techStackItems } from "@/constants/techStackItems";
import { Flex, Image } from "@chakra-ui/react";

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
  const allTechItems = techStackItems.flatMap((category) => category.items);
  return (
    <Section>
      <BackgroundText text="About Me" />
      <Flex>
        <Photo />
        <Career jobs={career} />
      </Flex>

      <InfiniteSlider
        speed={35}
        items={allTechItems.map((item) => (
          <Image
            key={item.index}
            src={item.imagePath}
            opacity={0.5}
            _hover={{ opacity: 1 }}
          />
        ))}
      />
    </Section>
  );
}
