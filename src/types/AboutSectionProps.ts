import type { WrapProps } from "@chakra-ui/react";

// Type for a single social item
export type SocialItem = {
  index: number;
  name: string;
  url: string;
};

// Props for Socials component
export type SocialsProps = {
  socials: SocialItem[];
  showTitle?: boolean;
} & WrapProps;

// Props for AboutSection (can reuse SocialItem type)
export type AboutSectionProps = {
  socials: SocialItem[];
};
