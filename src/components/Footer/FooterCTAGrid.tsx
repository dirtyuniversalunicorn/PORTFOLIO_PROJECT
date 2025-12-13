import { Grid, Flex } from "@chakra-ui/react";
import { ContactForm } from "../ContactForm.tsx/index";
import { FooterTitle } from "./FooterTitle";

export const FooterCTAGrid = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={4}
    >
      <Flex my="auto" pt={{ base: "20" }} flexDirection="column" gap={4}>
        <Flex width={"100%"} flexDirection={"column"}>
          <FooterTitle
            fontSize={{ base: "lg", md: "2xl" }}
            title="Do you have question, idea,"
            width={{ base: "100%" }}
          />
          <FooterTitle
            fontSize={{ base: "md", md: "lg" }}
            title="or just want to say hello?"
          />
        </Flex>
        <Flex flexDirection={"column"} gap={4}>
          <FooterTitle
            fontSize={{ base: "3xl", md: "7xl" }}
            title="Reach Out To Me"
            letterSpacing={1.61}
            lineHeight={{ base: "1" }}
            mt={{ base: "-3", md: "0" }}
          />
          <FooterTitle
            fontSize={{ base: "lg", md: "2xl" }}
            title="I will be happy to hear from you"
            mt={{ base: "-2", md: "0" }}
          />
        </Flex>
      </Flex>
      <ContactForm />
    </Grid>
  );
};
