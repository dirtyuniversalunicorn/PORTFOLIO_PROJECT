"use client";

import { LoginButton } from "@/app/(auth)/login/components/LoginButton";
import { LogoutButton } from "@/app/(auth)/login/components/LogoutButton";
import { authClient } from "@/lib/auth-client";

export const Authentication = () => {
  const { data: session } = authClient.useSession();
  return session ? (
    <LogoutButton display={{ base: "none", md: "flex" }} />
  ) : (
    <LoginButton display={{ base: "none", md: "flex" }} />
  );
};
