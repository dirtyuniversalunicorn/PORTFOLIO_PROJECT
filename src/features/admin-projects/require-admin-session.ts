import { redirect } from "next/navigation";
import { Role } from "@/generated/prisma/enums";
import { getSession, hasPermission } from "@/lib/dal";

export const requireAdminSession = async () => {
  const session = await getSession();
  const isAdmin = await hasPermission([Role.ADMIN]);

  if (!session || !isAdmin) {
    redirect("/");
  }

  return session;
};
