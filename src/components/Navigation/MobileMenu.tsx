"use client";

import { Menu, Portal as ChakraPortal } from "@chakra-ui/react";
import { Button } from "../Button.tsx";
import Hamburger from "hamburger-react";
import { useState } from "react";
import type { NavigationListProps } from "@/types/NavigationListProps.js";

export const MobileMenu = ({ navigationItems }: NavigationListProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          display={{ base: "block", md: "none" }}
          border="none"
          variant="transparent"
          buttonTitle={
            <Hamburger size={40} toggled={isOpen} toggle={setOpen} />
          }
        />
      </Menu.Trigger>
      <ChakraPortal>
        <Menu.Positioner>
          <Menu.Content>
            {navigationItems.map((navigationItem) => (
              <Menu.Item
                textTransform="uppercase"
                fontSize={"xl"}
                letterSpacing={1.2}
                key={navigationItem}
                value={navigationItem}
              >
                {navigationItem}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </ChakraPortal>
    </Menu.Root>
  );
};
