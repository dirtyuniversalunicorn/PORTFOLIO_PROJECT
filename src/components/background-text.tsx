import { Text } from "@chakra-ui/react";

export type BackgroundTextProps = {
  text: string;
};

export const BackgroundText = ({ text }: BackgroundTextProps) => {
  return (
    <Text
      fontSize="7xl"
      opacity={0.05}
      textAlign="right"
      zIndex={1}
      position="absolute"
      right={0}
      mx={"5%"}
    >
      {text}
    </Text>
  );
};
