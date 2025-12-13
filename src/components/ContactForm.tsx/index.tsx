import { Box, Flex } from "@chakra-ui/react";
import Form from "next/form";
import { FormInput } from "./FormInput";
export const ContactForm = () => {
  return (
    <Box my="auto" pt={{ base: "3", md: "20" }}>
      <Form action="/">
        <Flex flexDirection="column" gap={4}>
          <FormInput placeholder="Your name" />
          <FormInput placeholder="Your email" />
          <FormInput textArea placeholder="Your message" />
          <FormInput submitButton />
        </Flex>
      </Form>
    </Box>
  );
};

// replace form action for actual action
