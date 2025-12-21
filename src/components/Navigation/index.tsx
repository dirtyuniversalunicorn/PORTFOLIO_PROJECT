import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { navigationItems } from "@/constants/navigationItems";
import { Brand } from "../Brand";
import { Button } from "../Button.tsx";
import { Toaster } from "../ui/toaster";
import { Authentication } from "./Authentication";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { NavigationList } from "./NavigationList";

export const Navigation = async () => {
  return (
    <Header>
      <Brand />
      <NavigationList navigationItems={navigationItems} />
      <Flex gap={4}>
        <Link href="#footer_section">
          <Button
            display={{ base: "none", md: "block" }}
            buttonTitle="let's talk"
            variant="transparent"
          />
        </Link>
        <Toaster />
        <MobileMenu navigationItems={navigationItems} />
        <Authentication />
      </Flex>
    </Header>
  );
};
