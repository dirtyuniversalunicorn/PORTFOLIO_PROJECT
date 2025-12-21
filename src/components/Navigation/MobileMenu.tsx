"use client";

import { Drawer, Portal, Text, VStack } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { LoginButton } from "@/app/(auth)/login/components/LoginButton";
import { LogoutButton } from "@/app/(auth)/login/components/LogoutButton";
import { authClient } from "@/lib/auth-client";
import type { NavigationListProps } from "@/types/NavigationListProps";
import { Button } from "../Button.tsx";

export const MobileMenu = ({ navigationItems }: NavigationListProps) => {
  const [isOpen, setOpen] = useState(false);
  const { data: session } = authClient.useSession();

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(details) => setOpen(details.open)}
    >
      <Drawer.Trigger asChild padding="0">
        <Button
          display={{ base: "flex", md: "none" }}
          border="none"
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
              <VStack alignItems="left" gapY={16} mt={20} zIndex={9998}>
                {navigationItems.map((item) => (
                  <Link href={`/${item}`} key={item}>
                    <Drawer.CloseTrigger asChild unstyled>
                      <Text
                        onClick={() => setOpen(false)}
                        textTransform="uppercase"
                        fontSize="4xl"
                        letterSpacing={1.61}
                      >
                        {item}
                      </Text>
                    </Drawer.CloseTrigger>
                  </Link>
                ))}
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <VStack width="100%">
                {session ? (
                  <LogoutButton
                    display={{ base: "flex", md: "none" }}
                    width="100%"
                  />
                ) : (
                  <LoginButton
                    display={{ base: "flex", md: "none" }}
                    onClick={() => setOpen(false)}
                  />
                )}
                <Link href="#footer_section" className="w-full">
                  <Button
                    buttonTitle="Let's talk"
                    onClick={() => setOpen(false)}
                    width="100%"
                  />
                </Link>
              </VStack>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
