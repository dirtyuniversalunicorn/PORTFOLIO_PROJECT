import {
  Blockquote,
  Card as ChakraCard,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

// TODO
// add slug to projects
// add link to the people that provided testimonial, some sort of reciprocal help
// add image/avatar support? How do I get that picture? Is it possible to render image from the service that is used to login?
// ... it is possible

export type Testimonial = {
  author: string;
  project: string;
  contact: string;
  testimonial: string;
};

export type TestimonialsProps = {
  testimonials: Testimonial[];
};

export const Card = ({ testimonial }: { testimonial: Testimonial }) => {
  const { author, project, contact, testimonial: text } = testimonial;
  return (
    <ChakraCard.Root backgroundColor="transparent">
      <ChakraCard.Body>
        <HStack mb="6" gap="3">
          <Stack gap="0">
            <Text fontWeight="semibold" fontSize="xl">
              {author}
            </Text>
            <Text fontWeight="semibold" textStyle="sm">
              {project}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              {contact}
            </Text>
          </Stack>
        </HStack>
        <ChakraCard.Description fontSize="sm" textAlign="justify">
          <Blockquote.Root>
            <Blockquote.Content>{text}</Blockquote.Content>
          </Blockquote.Root>
        </ChakraCard.Description>
      </ChakraCard.Body>
    </ChakraCard.Root>
  );
};
