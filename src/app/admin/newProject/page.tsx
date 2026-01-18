import { Suspense } from "react";
import { NewProject } from "./NewProject";

export const runtime = "edge";

export default async function NewProjectPage() {
  return (
    <Suspense>
      <NewProject />
    </Suspense>
  );
}
