import { Suspense } from "react";
import ExperiencesExplorer from "./ExperiencesExplorer";

export default function ExperiencesPage() {
  return (
    <Suspense fallback={null}>
      <ExperiencesExplorer />
    </Suspense>
  );
}
