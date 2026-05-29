import {
  Center,
  Carousel as ChakraCarousel,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";

export type CarouselProps = {
  items: string[];
};

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <ChakraCarousel.Root
      slideCount={items.length}
      autoplay={{ delay: 2000 }}
      mx="auto"
      maxW="xl"
    >
      <ChakraCarousel.ItemGroup width="full">
        {items.map((item, index) => (
          <ChakraCarousel.Item key={item} index={index} my="auto">
            <Center w="100%">
              <Image src={item} />
            </Center>
          </ChakraCarousel.Item>
        ))}
      </ChakraCarousel.ItemGroup>
      {items.length > 1 && (
        <ChakraCarousel.Control justifyContent="center" gap="4" width="full">
          <ChakraCarousel.PrevTrigger asChild>
            <IconButton size="xs" variant="ghost">
              <LuChevronLeft />
            </IconButton>
          </ChakraCarousel.PrevTrigger>
          <ChakraCarousel.AutoplayTrigger asChild>
            <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost">
              <ChakraCarousel.AutoplayIndicator
                paused={<LuPause />}
                play={<LuPlay />}
              />
            </IconButton>
          </ChakraCarousel.AutoplayTrigger>
          <ChakraCarousel.NextTrigger asChild>
            <IconButton size="xs" variant="ghost">
              <LuChevronRight />
            </IconButton>
          </ChakraCarousel.NextTrigger>
        </ChakraCarousel.Control>
      )}
    </ChakraCarousel.Root>
  );
};
