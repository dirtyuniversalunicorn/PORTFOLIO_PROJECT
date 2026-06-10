import { Center, Stack, Text, VStack } from "@chakra-ui/react";
import { BackgroundText } from "@/components/background-text";
import { SignInForm } from "./sign-in-form";

export const LoginPageContent = () => {
  return (
    <Stack
      as="section"
      py={{ base: 20, md: 40 }}
      gap={10}
      maxWidth={1400}
      mx={{ base: "5%", "2xl": "auto" }}
    >
      <BackgroundText text="Login" />
      <Center>
        <VStack gap={4}>
          <Text fontSize="2xl" fontWeight={300} letterSpacing={1.61}>
            Continue with your account
          </Text>
          <SignInForm />
        </VStack>
      </Center>
    </Stack>
  );
};
