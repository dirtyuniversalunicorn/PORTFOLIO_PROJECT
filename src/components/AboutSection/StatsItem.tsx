import { Box, Circle, Float, Stack, Text } from "@chakra-ui/react";

export type StatsITemProps = {
  number: number;
  category: string;
};

export const StatsItem = ({ number, category }: StatsITemProps) => {
  return (
    <Stack width="auto" alignItems="center">
      <Box position="relative" w="60px" h="60px">
        <Float top={4} right={4}>
          <Circle size="7" backgroundColor="transparent" color="white">
            +
          </Circle>
        </Float>
        <Text textAlign="center" fontSize={50}>
          {number}
        </Text>
      </Box>
      <Text fontSize={13}>{category}</Text>
    </Stack>
  );
};
