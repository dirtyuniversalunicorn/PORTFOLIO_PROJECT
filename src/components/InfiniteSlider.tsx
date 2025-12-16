"use client";

import { Box, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

type InfiniteSliderProps = {
  items: React.ReactNode[];
  speed?: number;
};

const marquee = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0%); }
`;

export const InfiniteSlider = ({ items, speed = 20 }: InfiniteSliderProps) => {
  return (
    <Box position="relative" w="full" overflow="hidden" mt={10}>
      <Flex w="max-content" animation={`${marquee} ${speed}s linear infinite`}>
        {[...items, ...items].map((item, index) => (
          <Flex
            key={index}
            align="center"
            justify="center"
            px={8}
            flexShrink={0}
          >
            {item}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
