import type { SocialsProps } from "@/types/AboutSectionProps";
import { Wrap, Image, Text, Flex } from "@chakra-ui/react";

export const Socials = ({ socials, showTitle, ...props }: SocialsProps) => {
  return (
    <Wrap order={{ base: 1, md: 2 }} mx={{ base: "auto", md: 0 }} {...props}>
      {socials.map((social) => (
        <Flex key={social.index} alignItems="center" gap={2}>
          <Image
            width="30px"
            objectFit="contain"
            src={social.url}
            alt={social.name}
          />
          {showTitle && (
            <Text display={{ base: "none", md: "block" }}>{social.name}</Text>
          )}
        </Flex>
      ))}
    </Wrap>
  );
};
