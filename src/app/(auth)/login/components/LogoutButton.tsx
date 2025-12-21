"use client";

import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { Button } from "@/components/Button.tsx";
import { toaster } from "@/components/ui/toaster";
import { authClient } from "@/lib/auth-client";

export const LogoutButton = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setLoading(false);
          router.push("/");
        },
      },
    });
  };

  if (session)
    return (
      <Button
        buttonTitle={
          loading ? (
            <Spinner />
          ) : (
            <Flex>
              <Text>Log out</Text>
              <BiLogOut color="white" />
            </Flex>
          )
        }
        type="button"
        onClick={() => {
          handleSignOut();
          toaster.promise(handleSignOut, {
            success: {
              title: "Successfully logged out!",
              description: "You were succesfully logged out.",
            },
            error: {
              title: "Logout failed!",
              description: "Something wrong while trying to logout.",
            },
            loading: { title: <Spinner />, description: "Please wait" },
          });
        }}
        variant="transparent"
        {...props}
      />
    );
};
