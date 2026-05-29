import { Suspense } from "react";
import { AdminDashboard } from "./admin-dashboard";

export default async function Admin() {
  return (
    <Suspense>
      <AdminDashboard />
    </Suspense>
  );
}
