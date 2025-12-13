import type { TechStack } from "@/types/CollapseProps";
import { Flex, Collapsible, Image, Stack, Text, Box } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";

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
              gap={4}
              flexDirection="row"
            >
              {stackItem.items.map((item) => (
                <Link key={item.index} href={item.docsUrl} target="_blank">
                  <Flex alignItems="center" gap={5}>
                    <Image src={item.imagePath} />
                    <Text>{item.name}</Text>
                  </Flex>
                </Link>
              ))}
            </Stack>
          </Collapsible.Content>
        </Collapsible.Root>
      ))}
    </Box>
  );
};
