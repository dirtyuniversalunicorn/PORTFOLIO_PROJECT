import { BackgroundText } from "@/components/BackgroundText";
import { EmptyState } from "@/components/EmptyState";
import { Section } from "@/components/Section";

export const runtime = "edge";

export default async function Reviews() {
  return (
    <Section>
      <BackgroundText text="Reviews" />
      <EmptyState
        text="No reviews found"
        suggestion="Consider visiting later"
      />
    </Section>
  );
}
