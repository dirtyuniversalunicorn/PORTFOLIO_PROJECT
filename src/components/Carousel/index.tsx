import {
  Center,
  Carousel as ChakraCarousel,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export type CarouselProps = {
  items: string[];
};

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <ChakraCarousel.Root slideCount={items.length} gap="4">
      <ChakraCarousel.Control justifyContent="center" gap="4" width="full">
        {items.length > 1 && (
          <ChakraCarousel.PrevTrigger asChild>
            <IconButton size="xs" variant="outline" borderColor="white">
              <LuArrowLeft />
            </IconButton>
          </ChakraCarousel.PrevTrigger>
        )}

        <ChakraCarousel.ItemGroup width="full">
          {items.map((item, index) => (
            <ChakraCarousel.Item key={index} index={index} my="auto">
              <Center w="100%">
                <Image src={item} />
              </Center>
            </ChakraCarousel.Item>
          ))}
        </ChakraCarousel.ItemGroup>

        {items.length > 1 && (
          <ChakraCarousel.NextTrigger asChild>
            <IconButton size="xs" variant="outline" borderColor="white">
              <LuArrowRight />
            </IconButton>
          </ChakraCarousel.NextTrigger>
        )}
      </ChakraCarousel.Control>

      {items.length > 1 && <ChakraCarousel.Indicators />}
    </ChakraCarousel.Root>
  );
};
