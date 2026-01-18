import { Box, Grid, Text } from "@chakra-ui/react";
import { Card } from "./Card";
import testimonials from "./data.json";

export const Testimonials = () => {
  return (
    <Box
      as="section"
      maxWidth={1400}
      mx={{ base: "5%", "2xl": "auto" }}
      py={40}
    >
      <Text
        fontSize="7xl"
        opacity={0.05}
        textAlign="right"
        zIndex={1}
        position="absolute"
        right={0}
        mx={"5%"}
        textTransform="uppercase"
      >
        testimonials
      </Text>
      <Text
        as="h3"
        textTransform="uppercase"
        mb={6}
        letterSpacing={1.2}
        fontWeight={300}
      >
        Pleasure was mine
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={10}
      >
        {testimonials.map((t) => (
          <Card key={t.id} testimonial={t} />
        ))}
      </Grid>
    </Box>
  );
};
