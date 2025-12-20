"use client";

import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const LastBand = () => {
  const year = new Date().getFullYear();

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
        ©{year} Designed by{" "}
        <Link href="https://www.behance.net/swifttech03" target="_blank">
          Naeem
        </Link>
        , coded by Me
      </Text>
    </Flex>
  );
};
