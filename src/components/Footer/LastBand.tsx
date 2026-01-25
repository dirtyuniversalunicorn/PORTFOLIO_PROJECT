import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { CurrentYear } from "./CurrentYear";

export const LastBand = () => {
  return (
    <Flex
      textAlign="center"
      justifyContent="center"
      bottom={0}
      mx="auto"
      mt={10}
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
