import { BackgroundText } from "@/components/BackgroundText";
import { EmptyState } from "@/components/EmptyState";
import { Section } from "@/components/Section";

export default function TestimonialsPage() {
  return (
    <Section>
      <BackgroundText text="Testimonials" />
      <EmptyState
        text="No testimonials found"
        suggestion="Consider visiting later"
      />
    </Section>
  );
}
