"use client";

import { LoginButton } from "@/app/(auth)/login/components/login-button";
import { LogoutButton } from "@/app/(auth)/login/components/logout-button";
import { authClient } from "@/lib/auth-client";

export const Authentication = () => {
  const { data: session } = authClient.useSession();
  return session ? (
    <LogoutButton display={{ base: "none", md: "flex" }} />
  ) : (
    <LoginButton display={{ base: "none", md: "flex" }} />
  );
};
