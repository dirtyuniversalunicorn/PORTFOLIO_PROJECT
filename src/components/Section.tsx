import { Box } from "@chakra-ui/react";
import type { SectionProps } from "@/types/SectionProps";

export const Section = ({ children }: SectionProps) => {
  return (
    <Box
      as="section"
      py={{ base: 24, md: 40 }}
      mx={{ base: "5%", "2xl": "auto" }}
    >
      <Box maxWidth={1400} mx="auto">
        {children}
      </Box>
    </Box>
  );
};
