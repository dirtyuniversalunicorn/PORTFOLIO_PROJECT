import { BackgroundText } from "@/components/background-text";
import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/section";

export const TestimonialsPageContent = () => {
  return (
    <Section>
      <BackgroundText text="Testimonials" />
      <EmptyState
        text="No testimonials found"
        suggestion="Consider visiting later"
      />
    </Section>
  );
};
