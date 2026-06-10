import { Suspense } from "react";
import { AdminDashboard } from "@/features/admin-projects/components/admin-dashboard";

export default async function Admin() {
  return (
    <Suspense>
      <AdminDashboard />
    </Suspense>
  );
}
