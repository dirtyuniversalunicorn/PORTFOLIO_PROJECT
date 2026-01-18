"use client";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import Form from "next/form";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { Button } from "@/components/Button.tsx";
import { toaster } from "@/components/ui/toaster";
import { authClient } from "@/lib/auth-client";

export const SingInForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSocialSignIn(provider: "github") {
    setError(null);
    setLoading(true);

    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/admin",
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Something went wrong.");

      return;
    }
  }

  return (
    <Form action={""}>
      <Button
        buttonTitle={
          <Flex gap={4}>
            <FaGithub />
            <Text fontSize="xl">Login with GitHub</Text>
            <MdOutlineArrowForward />
          </Flex>
        }
        type="button"
        onClick={() => {
          toaster.promise(handleSocialSignIn("github"), {
            success: {
              title: "Login success!",
              description: "You were succesfully logged in.",
            },
            error: {
              title: "Login failed!",
              description: "Something wrong while trying to login.",
            },
            loading: { title: <Spinner />, description: "Please wait" },
          });
        }}
        py={6}
      />
    </Form>
  );
};
