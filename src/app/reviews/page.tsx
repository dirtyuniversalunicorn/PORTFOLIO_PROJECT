import { BackgroundText } from "@/components/BackgroundText";
import { EmptyState } from "@/components/Empty";
import { Section } from "@/components/Section";

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
