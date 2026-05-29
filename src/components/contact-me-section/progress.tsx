"use client";

import { Flex, Progress, Text } from "@chakra-ui/react";

type ProgressMessageBarProps = {
  letters: number;
  max: number;
};

export const ProgressMessageBar = ({
  letters,
  max,
}: ProgressMessageBarProps) => {
  let color = "white";
  if (letters >= max) color = "red";

  return (
    <>
      <Flex align="center" gapX={5} mt={1}>
        <Progress.Root
          colorPalette={color}
          value={letters}
          max={max}
          flex="1"
          shape="full"
        >
          <Progress.Track backgroundColor="whiteAlpha.300">
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
        <Text
          color={color}
          fontSize="sm"
          whiteSpace="nowrap"
          width="58px"
          textAlign="right"
        >
          {letters}/{max}
        </Text>
      </Flex>
      {letters >= max && (
        <Text fontSize="xs" color="red">
          You reached maximum amount of characters.
        </Text>
      )}
    </>
  );
};
