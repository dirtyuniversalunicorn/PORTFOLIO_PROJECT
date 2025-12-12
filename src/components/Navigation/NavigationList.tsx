import type { NavigationListProps } from "@/types/NavigationListProps";
import { Box } from "@chakra-ui/react";
import { NavigationItem } from "./NavigationItem";

export const NavigationList = ({ navigationItems }: NavigationListProps) => {
  return (
    <Box as="nav" display={{ base: "none", md: "block" }}>
      <Box as="ul" display="flex" gap={10}>
        {navigationItems.map((navigationItem) => (
          <NavigationItem
            key={navigationItem}
            navigationItem={navigationItem}
          />
        ))}
      </Box>
    </Box>
  );
};
