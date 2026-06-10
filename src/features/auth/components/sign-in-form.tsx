"use client";

import { Flex, Spinner, Text } from "@chakra-ui/react";
import Form from "next/form";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { Button } from "@/components/button";
import { toaster } from "@/components/ui/toaster";
import { authClient } from "@/lib/auth-client";

export const SignInForm = () => {
  async function handleSocialSignIn(provider: "github") {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/admin",
    });

    if (error) {
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
              description: "You were successfully logged in.",
            },
            error: {
              title: "Login failed!",
              description: "Something went wrong while trying to login.",
            },
            loading: { title: <Spinner />, description: "Please wait" },
          });
        }}
        py={6}
      />
    </Form>
  );
};
