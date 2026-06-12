import { Suspense } from "react";
import { NewProjectPageContent } from "@/features/admin-projects/components/new-project-page-content";

export const dynamic = "force-dynamic";

export default async function NewProjectPage() {
  return (
    <Suspense>
      <NewProjectPageContent />
    </Suspense>
  );
}
