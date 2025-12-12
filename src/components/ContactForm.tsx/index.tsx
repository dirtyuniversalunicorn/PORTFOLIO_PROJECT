import { Input, Textarea, Box } from "@chakra-ui/react";
import Form from "next/form";
export const ContactForm = () => {
  return (
    <Box>
      <Form action="/">
        <Input placeholder="How should I adress you" />
        <Input placeholder="Enter your email, so I can come back to you." />
        <Textarea placeholder="Enter your message" />
        <Input type="submit" />
      </Form>
    </Box>
  );
};

// replace form action for actual action
