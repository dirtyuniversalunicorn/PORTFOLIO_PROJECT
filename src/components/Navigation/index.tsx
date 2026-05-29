import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { navigationItems } from "@/constants/navigation-items";
import { Brand } from "../brand";
import { Button } from "../button";
import { Toaster } from "../ui/toaster";
import { Authentication } from "./authentication";
import { Header } from "./header";
import { MobileMenu } from "./mobile-menu";
import { NavigationList } from "./navigation-list";

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
