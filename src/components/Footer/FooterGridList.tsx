import { Box, List } from "@chakra-ui/react";
import Link from "next/link";

export type FooteGridListProps = {
  footerPages: string[];
};

export const FooterGridList = ({ footerPages }: FooteGridListProps) => {
  return (
    <Box textTransform="uppercase">
      <List.Root as="ul" listStyleType="none" gapY={{ base: 1, md: 7 }}>
        {footerPages.map((footerPage) => (
          <List.Item key={footerPage}>
            <Link href="/about">{footerPage}</Link>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
