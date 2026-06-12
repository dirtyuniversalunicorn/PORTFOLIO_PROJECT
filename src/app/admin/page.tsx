import { Suspense } from "react";
import { AdminDashboard } from "@/features/admin-projects/components/admin-dashboard";

export const dynamic = "force-dynamic";

export default async function Admin() {
  return (
    <Suspense>
      <AdminDashboard />
    </Suspense>
  );
}
