import { Box } from "@chakra-ui/react";
import type { HeaderProps } from "@/types/HeaderProps.js";

// TODO remove focus? on the mobile button after clicking

export const Header = ({ children }: HeaderProps) => {
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
      {children}
    </Box>
  );
};
