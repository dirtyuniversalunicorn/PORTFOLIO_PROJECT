import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { CurrentYear } from "./CurrentYear";

export const LastBand = () => {
  return (
    <Flex
      position="absolute"
      textAlign="center"
      justifyContent="center"
      bottom={0}
      mx="auto"
      width="100%"
    >
      <Text>
        ©<CurrentYear /> Designed by{" "}
        <Link href="https://www.behance.net/swifttech03" target="_blank">
          Naeem
        </Link>
        , coded by Me
      </Text>
    </Flex>
  );
};
