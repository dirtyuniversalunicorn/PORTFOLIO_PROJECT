import { headers } from "next/headers";
import { cache } from "react";
import { Role } from "@/generated/prisma/client";
import { auth } from "./auth";
import prisma from "./prisma";

export const getSession = cache(async () => {
  const getSession = await auth.api.getSession({
    headers: await headers(),
  });

  if (!getSession) return null;

  const session = getSession.session;
  const userId = getSession.user?.id;

  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true, role: true },
  });

  if (!user) return null;

  return { session, user };
});

export const hasPermission = async (
  allowedRoles: Role[] = [],
): Promise<boolean> => {
  const session = await getSession();

  if (!session || !session.user.role) return false;

  if (session.user.role === Role.ADMIN) return true;

  return allowedRoles.includes(session.user.role);
};
