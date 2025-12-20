import { techStackItems } from "@/constants/techStackItems";
import { MarqueeSlider } from "./MarqueeSlider";
import { Image } from "@chakra-ui/react";

export const Marquee = async () => {
  "use cache";
  // TODO prisma if these items will be coming from the database
  const allTechItems = techStackItems.flatMap((category) => category.items);

  return (
    <MarqueeSlider>
      {allTechItems.map((item) => (
        <Image
          key={item.index}
          src={item.imagePath || undefined}
          opacity={0.5}
          _hover={{ opacity: 1 }}
        />
      ))}
    </MarqueeSlider>
  );
};
