import { EmptyState as ChakraEmptyState, VStack } from "@chakra-ui/react";
import { HiColorSwatch } from "react-icons/hi";

type EmptyStateProps = {
  text: string;
  suggestion: string;
};

export const EmptyState = ({ text, suggestion }: EmptyStateProps) => {
  return (
    <ChakraEmptyState.Root>
      <ChakraEmptyState.Content>
        <ChakraEmptyState.Indicator>
          <HiColorSwatch />
        </ChakraEmptyState.Indicator>
        <VStack textAlign="center">
          <ChakraEmptyState.Title>{text}</ChakraEmptyState.Title>
          <ChakraEmptyState.Description>
            {suggestion}
          </ChakraEmptyState.Description>
        </VStack>
      </ChakraEmptyState.Content>
    </ChakraEmptyState.Root>
  );
};
