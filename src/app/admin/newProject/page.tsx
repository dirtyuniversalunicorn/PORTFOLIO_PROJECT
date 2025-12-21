import { Suspense } from "react";
import { NewProject } from "./NewProject";

export default async function NewProjectPage() {
  return (
    <Suspense>
      <NewProject />
    </Suspense>
  );
}
