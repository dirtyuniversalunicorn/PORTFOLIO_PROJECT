import { BackgroundText } from "@/components/background-text";
import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/section";

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
