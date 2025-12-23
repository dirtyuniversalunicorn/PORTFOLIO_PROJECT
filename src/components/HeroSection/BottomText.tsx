import { Flex, Text } from "@chakra-ui/react";

export const BottomText = ({ text }: { text: string }) => {
    return (
        <Flex mt="auto" mx="auto" width="100%">
            <Text
                as="h1"
                fontSize={{
                    base: "3xl",
                    sm: "6xl",
                    md: "90px",
                    lg: "120px",
                    "2xl": "180px",
                }}
                textAlign={{ base: "center" }}
                fontWeight={400}
                width="100%"
                opacity={0.2}
                textTransform="uppercase"
            >
                {text}
            </Text>
        </Flex>
    );
};
