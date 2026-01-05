import { Clipboard, Flex, Image, Link, Text, Wrap } from "@chakra-ui/react";
import type { SocialsProps } from "@/types/AboutSectionProps";

export const Socials = ({ socials, showTitle, ...props }: SocialsProps) => {
  return (
    <Wrap order={{ base: 1, md: 2 }} mx={{ base: "auto", md: 0 }} {...props}>
      {socials.map((social) => (
        <Flex key={social.index} alignItems="center" gap={2}>
          <Clipboard.Root value={social.url}>
            <Clipboard.Trigger asChild>
              <Link>
                <Image
                  width="40px"
                  objectFit="contain"
                  src={social.pictureUrl}
                  alt={social.name}
                />
                {showTitle && (
                  <Text display={{ base: "none", md: "block" }}>
                    {social.name}
                  </Text>
                )}
              </Link>
            </Clipboard.Trigger>
          </Clipboard.Root>
        </Flex>
      ))}
    </Wrap>
  );
};
