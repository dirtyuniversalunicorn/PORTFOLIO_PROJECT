import { Box } from "@chakra-ui/react";
import { techStackItems } from "@/constants/techStackItems";
import { MarqueeSlider } from "./MarqueeSlider";

const ICON_SIZE = 40;

export const Marquee = async () => {
  "use cache";

  const allTechItems = techStackItems.flatMap((category) => category.items);

  return (
    <MarqueeSlider>
      {allTechItems.map((item) => {
        const IconComponent = item.icon;

        return (
          <Box
            key={item.index}
            opacity={0.5}
            _hover={{ opacity: 1 }}
            transition="opacity 0.2s"
          >
            <IconComponent size={ICON_SIZE} />
          </Box>
        );
      })}
    </MarqueeSlider>
  );
};
