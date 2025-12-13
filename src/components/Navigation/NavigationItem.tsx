import type { NavigationItemProps } from "@/types/NavigationItemProps";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export const NavigationItem = ({ navigationItem }: NavigationItemProps) => {
  return (
    <Link href={`/${navigationItem}`}>
      <Box
        as="li"
        textTransform="uppercase"
        fontWeight={300}
        key={navigationItem}
      >
        {navigationItem}
      </Box>
    </Link>
  );
};
