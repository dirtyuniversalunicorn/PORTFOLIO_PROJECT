import { Suspense } from "react";
import { AdminDashboard } from "./AdminDashboard";

export default async function Admin() {
  return (
    <Suspense>
      <AdminDashboard />
    </Suspense>
  );
}
