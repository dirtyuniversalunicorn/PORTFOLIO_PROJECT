import { Box, List } from "@chakra-ui/react";
import Link from "next/link";

export type FooterGridItemProps = {
  page: string;
  url: string;
};

export type FooteGridListProps = {
  footerPages: FooterGridItemProps[];
};

export const FooterGridList = ({ footerPages }: FooteGridListProps) => {
  return (
    <Box textTransform="uppercase">
      <List.Root as="ul" listStyleType="none" gapY={{ base: 1, md: 7 }}>
        {footerPages.map((footerPage) => (
          <List.Item key={footerPage.page} mb={2}>
            <Link href={`/${footerPage.url}`}>{footerPage.page}</Link>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
