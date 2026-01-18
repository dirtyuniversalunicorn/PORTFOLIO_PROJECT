import { Html, Head, Body, Text } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const EmailTemplate = ({ name, message, email }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body>
      <Text>Hello, my name is {name}!</Text>
      <Text>My email is: {email}</Text>
      <Text>{message}</Text>
    </Body>
  </Html>
);
