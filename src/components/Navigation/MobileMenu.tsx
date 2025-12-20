"use client";

import {
  Text,
  Menu,
  Portal as ChakraPortal,
  CloseButton,
  Drawer,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { Button } from "../Button.tsx";
import Hamburger from "hamburger-react";
import { useState } from "react";
import type { NavigationListProps } from "@/types/NavigationListProps";
import Link from "next/link";

export const MobileMenu = ({ navigationItems }: NavigationListProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(details) => setOpen(details.open)}
    >
      <Drawer.Trigger asChild padding="0">
        <Button
          display={{ base: "block", md: "none" }}
          border="none"
          zIndex={9999}
          variant="transparent"
          buttonTitle={
            <Hamburger size={40} toggled={isOpen} toggle={setOpen} />
          }
        />
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content backgroundColor="blackAlpha.900">
            <Drawer.Body>
              <VStack alignItems="left" gapY={16} pt={20}>
                {navigationItems.map((item) => (
                  <Link href={`/${item}`} key={item}>
                    <Drawer.CloseTrigger asChild unstyled>
                      <Text
                        onClick={() => setOpen(false)}
                        textTransform="uppercase"
                        fontSize="4xl"
                        letterSpacing={1.61}
                        // fontWeight={300}
                      >
                        {item}
                      </Text>
                    </Drawer.CloseTrigger>
                  </Link>
                ))}
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <Link href="#footer_section" className="w-full">
                <Button
                  buttonTitle="Let's talk"
                  onClick={() => setOpen(false)}
                  width="100%"
                />
              </Link>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
