import { Flex, Image, Link, Text, Wrap } from "@chakra-ui/react";
import type { SocialsProps } from "@/types/AboutSectionProps";

export const Socials = ({ socials, showTitle, ...props }: SocialsProps) => {
  return (
    <Wrap order={{ base: 1, md: 2 }} mx={{ base: "auto", md: 0 }} {...props}>
      {socials.map((social) => (
        <Flex key={social.index} alignItems="center" gap={2}>
          <Link href={social.url} target="_blank">
            <Image
              width="40px"
              objectFit="contain"
              src={social.pictureUrl}
              alt={social.name}
            />
            {showTitle && (
              <Text display={{ base: "none", md: "block" }}>{social.name}</Text>
            )}
          </Link>
        </Flex>
      ))}
    </Wrap>
  );
};
