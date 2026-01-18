import { Suspense } from "react";
import { AdminDashboard } from "./AdminDashboard";

export const runtime = "edge";

export default async function Admin() {
  return (
    <Suspense>
      <AdminDashboard />
    </Suspense>
  );
}
