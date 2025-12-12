import { Box, Text } from "@chakra-ui/react";
import { Button } from "../Button.tsx";
import { NavigationList } from "./NavigationList";
import { navigationItems } from "@/constants/navigationItems";
import { MobileMenu } from "./MobileMenu";

// remove focus? on the mobile button after clicking

export const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      px={10}
      pt={6}
      w="100%"
    >
      <Box display="flex" alignItems="baseline" spaceX="5px">
        <Text as="h2" fontSize="40px" letterSpacing="-1.61px" fontWeight={400}>
          Jaroslav
        </Text>
        <Text as="h2" fontSize="20px" letterSpacing="-1.61px">
          Fiľo
        </Text>
      </Box>
      <NavigationList navigationItems={navigationItems} />
      <Button
        display={{ base: "none", md: "block" }}
        buttonTitle="let's talk"
        variant="transparent"
      />
      <MobileMenu navigationItems={navigationItems} />
    </Box>
  );
};
