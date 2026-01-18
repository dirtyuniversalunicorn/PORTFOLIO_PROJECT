import { Center, Stack, Text, VStack } from "@chakra-ui/react";
import { BackgroundText } from "@/components/BackgroundText";
import { SingInForm } from "./components/SignInForm";

export default function LoginPage() {
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
          <SingInForm />
        </VStack>
      </Center>
    </Stack>
  );
}
