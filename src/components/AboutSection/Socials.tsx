import { SocialsProps } from "@/types/AboutSectionProps";
import { Wrap, Image } from "@chakra-ui/react";

export const Socials = ({ socials }: SocialsProps) => {
  return (
    <Wrap>
      {socials.map((social: string) => (
        <Image key={social} width="30px" objectFit="contain" src={social} />
      ))}
    </Wrap>
  );
};
