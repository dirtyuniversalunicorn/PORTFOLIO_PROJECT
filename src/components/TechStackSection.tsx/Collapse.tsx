import { Box, Collapsible, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { LuChevronRight } from "react-icons/lu";

export type TechStackItem = {
  index: number;
  name: string;
  icon: IconType;
  docsUrl: string;
};

export type TechStack = {
  category: string;
  items: TechStackItem[];
}[];

type CollapseProps = {
  techStackItems: TechStack;
};

export const Collapse = ({ techStackItems }: CollapseProps) => {
  return (
    <Box mt="10" zIndex={99}>
      {techStackItems.map((stackItem, index) => (
        <Collapsible.Root
          key={stackItem.category}
          borderBottom="1px solid"
          borderColor="whiteAlpha.400"
          defaultOpen={index === 0}
        >
          <Collapsible.Trigger
            paddingY="3"
            display="flex"
            gap="2"
            alignItems="center"
            width="100%"
            fontSize="xl"
            textTransform="uppercase"
          >
            <Collapsible.Indicator
              transition="transform 0.2s"
              _open={{ transform: "rotate(90deg)" }}
            >
              <LuChevronRight />
            </Collapsible.Indicator>
            {stackItem.category}
            <Text ml="auto" fontSize="md">
              ( {stackItem.items.length} )
            </Text>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Stack
              padding="4"
              display="grid"
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={6}
            >
              {stackItem.items.map((item) => {
                const IconComponent = item.icon;

                if (typeof IconComponent !== "function") {
                  console.error("Invalid icon for:", item.name);
                  return null;
                }

                return (
                  <Link key={item.index} href={item.docsUrl} target="_blank">
                    <Flex alignItems="center" gap={5}>
                      <IconComponent size={40} />
                      <Text>{item.name}</Text>
                    </Flex>
                  </Link>
                );
              })}
            </Stack>
          </Collapsible.Content>
        </Collapsible.Root>
      ))}
    </Box>
  );
};
