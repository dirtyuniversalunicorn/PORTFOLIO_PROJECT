import { NavigationListProps } from "@/types/NavigationListProps";
import { Box } from "@chakra-ui/react";

export const NavigationList = ({ navigationItems }: NavigationListProps) => {
  return (
    <Box as="nav" display={{ base: "none", md: "block" }}>
      <Box as="ul" display="flex" gap={10}>
        {navigationItems.map((navigationItem) => (
          <Box
            as="li"
            textTransform="uppercase"
            fontWeight={300}
            key={navigationItem}
          >
            {navigationItem}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
