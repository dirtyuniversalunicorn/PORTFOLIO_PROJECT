import { Box } from "@chakra-ui/react";

// TODO types

export type SectionProps = {
  children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return (
    <Box as="section" py={40} mx={{ base: "5%", "2xl": "auto" }}>
      <Box maxWidth={1400} mx="auto">
        {children}
      </Box>
    </Box>
  );
};
