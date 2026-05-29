import { Suspense } from "react";
import { NewProject } from "./new-project";

export default async function NewProjectPage() {
  return (
    <Suspense>
      <NewProject />
    </Suspense>
  );
}
