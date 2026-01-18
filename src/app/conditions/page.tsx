import { Box, Heading, Text } from "@chakra-ui/react";
import { BackgroundText } from "@/components/BackgroundText";
import { Section } from "@/components/Section";

export const runtime = "edge";

export default function Conditions() {
  return (
    <Section>
      <BackgroundText text="Terms & Conditions" />
      <Heading as="h1" size="xl" mb={4}>
        Terms &amp; Conditions
      </Heading>

      <Text fontSize="sm" color="gray.500" mb={6}>
        <strong>Last updated:</strong> 06.01.2026
      </Text>

      <Text mb={6}>
        Welcome to my portfolio website. By using this website, you agree to the
        terms below. If you do not agree, please do not use this site.
      </Text>

      <Box mb={6}>
        <Heading as="h2" size="md" mb={2}>
          1. Purpose of the Website
        </Heading>
        <Text>
          This website is a personal portfolio created to showcase my skills,
          projects, and experience as a junior frontend developer. All content
          is provided for informational and presentation purposes only.
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="md" mb={2}>
          2. Intellectual Property
        </Heading>
        <Text mb={2}>
          All content on this website, including text, images, designs, and code
          examples, belongs to me unless stated otherwise.
        </Text>

        <Text fontWeight="semibold">You may:</Text>
        <Text>View and share links to this website</Text>

        <Text fontWeight="semibold">You may not:</Text>
        <Text>
          Copy, reuse, or distribute any content without my permission
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="md" mb={2}>
          3. Projects and Code Examples
        </Heading>
        <Text>
          Projects and code shown on this website are for demonstration
          purposes. They may be simplified, unfinished, or not suitable for
          production use.
        </Text>
        <Text mt={2}>
          I am not responsible for any issues caused by using code from this
          website in your own projects.
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="md" mb={2}>
          4. External Links
        </Heading>
        <Text>
          This website may contain links to third-party websites (e.g. GitHub,
          LinkedIn). I am not responsible for the content or privacy practices
          of those websites.
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="md" mb={2}>
          5. No Guarantees
        </Heading>
        <Text>
          I try to keep the information on this website accurate and up to date,
          but I do not guarantee that everything is always correct or complete.
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="md" mb={2}>
          6. Limitation of Liability
        </Heading>
        <Text>
          I am not responsible for any damages or losses resulting from the use
          of this website.
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="md" mb={2}>
          7. Changes to These Terms
        </Heading>
        <Text>
          I may update these Terms &amp; Conditions at any time. Any changes
          will be posted on this page.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          8. Contact
        </Heading>
        <Text>
          If you have any questions about these Terms &amp; Conditions, feel
          free to contact me via the contact information provided on this
          website.
        </Text>
      </Box>
    </Section>
  );
}
