import { Box, Text } from "@chakra-ui/react";
import { BackgroundText } from "../BackgroundText";
import { Certificates } from "./Certificates";
import { Suspense } from "react";
import { SkeletonCertificates } from "../Skeletons/SkeletonCertificates";

export const Education = async () => {
    return (
        <Box as="section" id="education_section" pb={40}>
            <Box maxWidth={1400} mx={{ base: "5%", "2xl": "auto" }}>
                <BackgroundText text="Education" />
                <Text
                    as="h3"
                    textTransform="uppercase"
                    mb={6}
                    letterSpacing={1.2}
                    fontWeight={300}
                >
                    Education
                </Text>
                <Suspense fallback={<SkeletonCertificates />}>
                    <Certificates />
                </Suspense>
            </Box>
        </Box>
    );
};
