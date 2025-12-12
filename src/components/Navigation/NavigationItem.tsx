import { NavigationItemProps } from "@/types/NavigationItemProps";
import { Box } from "@chakra-ui/react";

export const NavigationItem = ({ navigationItem }: NavigationItemProps) => {
  return (
    <Box
      as="li"
      textTransform="uppercase"
      fontWeight={300}
      key={navigationItem}
    >
      {navigationItem}
    </Box>
  );
};
